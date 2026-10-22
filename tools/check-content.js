#!/usr/bin/env node
/* Content checker: loads every script from index.html in a stubbed sandbox and
   validates chapters, quizzes, visual/lab references and teacher-voice coverage.
   Usage: node tools/check-content.js [--voice]   (exit code 1 on errors) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]).filter((s) => !/app\.js$/.test(s));

// Permissive stub: any property read returns another stub, calls return stubs.
const stub = () => new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => '' : k === 'length' ? 0 : stub()), apply: () => stub(), construct: () => stub() });
const store = {};
const win = {
  PSY: {}, document: stub(), navigator: stub(), location: { hash: '' },
  localStorage: { getItem: (k) => store[k] || null, setItem: (k, v) => (store[k] = String(v)), removeItem: (k) => delete store[k] },
  matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
  addEventListener() {}, removeEventListener() {}, requestAnimationFrame() {}, cancelAnimationFrame() {},
  setTimeout() {}, clearTimeout() {}, setInterval() {}, clearInterval() {}, IntersectionObserver: function () { return stub(); },
  performance: { now: () => 0 }, console
};
win.window = win; win.self = win; win.top = win; win.globalThis = win;
const ctx = vm.createContext(win);

const errors = [], warns = [];
for (const s of scripts) {
  try { vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }); }
  catch (e) { errors.push(`${s}: load error: ${e.message}`); }
}
const PSY = win.PSY;
const levels = PSY.levels || [];
const chapters = PSY.chapters || [];
const visuals = PSY.visuals || {};
const labs = PSY.labs || {};
const TYPES = new Set(['h', 'p', 'ex', 'case', 'terms', 'myth', 'list', 'ol', 'steps', 'table', 'compare', 'tip', 'note', 'quote', 'think', 'vis', 'lab', 'teacher']);

const tagBalance = (str, where) => {
  if (typeof str !== 'string') return;
  for (const t of ['b', 'i', 'em', 'strong', 'small', 'span', 'a']) {
    const open = (str.match(new RegExp(`<${t}[\\s>]`, 'g')) || []).length;
    const close = (str.match(new RegExp(`</${t}>`, 'g')) || []).length;
    if (open !== close) errors.push(`${where}: unbalanced <${t}> (${open} open, ${close} close)`);
  }
};
const walk = (x, where) => { if (typeof x === 'string') tagBalance(x, where); else if (Array.isArray(x)) x.forEach((y) => walk(y, where)); };
const textOk = (x) => typeof x === 'string' ? x.trim().length > 0 : Array.isArray(x) && x.length > 0 && x.every((y) => typeof y === 'string' && y.trim());

const ids = new Set();
chapters.forEach((c, n) => {
  const w = `chapter ${c.id || '#' + n}`;
  if (!c.id || ids.has(c.id)) errors.push(`${w}: missing or duplicate id`);
  ids.add(c.id);
  if (!levels.find((l) => l.n === c.level)) errors.push(`${w}: level ${c.level} not defined in levels.js`);
  ['title', 'tag'].forEach((k) => { if (!textOk(c[k])) errors.push(`${w}: missing ${k}`); });
  ['hook', 'intro', 'outro', 'visualCap'].forEach((k) => { if (c[k] !== undefined && !textOk(c[k])) errors.push(`${w}: ${k} must be a non-empty string or array of strings`); });
  if (c.visual && !visuals[c.visual]) errors.push(`${w}: visual "${c.visual}" not registered`);
  if (!Array.isArray(c.blocks) || !c.blocks.length) errors.push(`${w}: no blocks`);
  (c.blocks || []).forEach((b, i) => {
    if (!Array.isArray(b) || !TYPES.has(b[0])) return errors.push(`${w}: block ${i} has unknown type ${JSON.stringify(b && b[0])}`);
    if (b[0] === 'vis' && !visuals[b[1]]) errors.push(`${w}: block ${i} visual "${b[1]}" not registered`);
    if (b[0] === 'lab' && !labs[b[1]]) errors.push(`${w}: block ${i} lab "${b[1]}" not registered`);
    if (b[0] === 'teacher' && !textOk(b[1])) errors.push(`${w}: block ${i} teacher text empty`);
    walk(b.slice(1), `${w} block ${i} (${b[0]})`);
  });
  ['hook', 'intro', 'outro'].forEach((k) => walk(c[k], `${w} ${k}`));
  if (!Array.isArray(c.takeaways) || c.takeaways.length < 3) errors.push(`${w}: needs 3+ takeaways`);
  if (!Array.isArray(c.quiz) || c.quiz.length < 5) errors.push(`${w}: needs 5+ quiz questions`);
  (c.quiz || []).forEach((q, i) => {
    const ok = Array.isArray(q) && typeof q[0] === 'string' && Array.isArray(q[1]) && q[1].length >= 2 && Number.isInteger(q[2]) && q[2] >= 0 && q[2] < q[1].length;
    if (!ok) errors.push(`${w}: quiz ${i + 1} malformed or answer index out of range`);
    else walk(q, `${w} quiz ${i + 1}`);
  });
});
levels.forEach((l) => { if (!chapters.some((c) => c.level === l.n)) warns.push(`level ${l.n} has no chapters yet`); });

// Teacher voice coverage
const voice = process.argv.includes('--voice');
const byLevel = levels.map((l) => {
  const chs = chapters.filter((c) => c.level === l.n);
  const intro = chs.filter((c) => c.intro).length, outro = chs.filter((c) => c.outro).length;
  const asides = chs.reduce((s, c) => s + c.blocks.filter((b) => b[0] === 'teacher').length, 0);
  return `L${l.n} ${String(chs.length).padStart(2)} ch · intro ${intro}/${chs.length} · outro ${outro}/${chs.length} · teacher asides ${asides}`;
});
if (voice) {
  const files = scripts.filter((s) => /content\/|labs|visuals|resources|levels/.test(s));
  files.forEach((f) => {
    const src = fs.readFileSync(path.join(root, f), 'utf8');
    const n = (src.match(/(?<!apne |apne-)\b(aap|aapko|aapka|aapke|aapki|aapne|aapse)\b/gi) || []).length;
    if (n) warns.push(`${f}: ${n} "aap" forms left (course voice is "tum")`);
  });
}

console.log(`levels ${levels.length} · chapters ${chapters.length} · visuals ${Object.keys(visuals).length} · labs ${Object.keys(labs).length}`);
byLevel.forEach((l) => console.log('  ' + l));
warns.forEach((w) => console.log('WARN  ' + w));
errors.forEach((e) => console.log('ERROR ' + e));
console.log(errors.length ? `\n${errors.length} error(s)` : '\nOK: no errors');
process.exit(errors.length ? 1 : 0);
