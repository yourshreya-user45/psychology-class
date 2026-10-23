/* Manovigyan core: namespace, helpers, icons, progress store. */
(function () {
  'use strict';
  const PSY = (window.PSY = window.PSY || {});
  PSY.levels = PSY.levels || [];
  PSY.chapters = [];
  PSY.visuals = {};
  PSY.labs = {};
  PSY.extraTerms = [];
  PSY.facts = [];

  PSY.chapter = (c) => PSY.chapters.push(c);
  PSY.visual = (key, def) => (PSY.visuals[key] = def);
  PSY.lab = (key, def) => (PSY.labs[key] = def);
  PSY.terms = (list) => PSY.extraTerms.push(...list);
  PSY.situations = [];
  PSY.skills = [];
  PSY.situation = (s) => PSY.situations.push(s);
  PSY.skill = (s) => PSY.skills.push(s);

  /* ---------- helpers ---------- */
  const u = (PSY.u = {});
  u.$ = (s, r = document) => r.querySelector(s);
  u.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  u.el = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  u.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  u.strip = (html) => String(html).replace(/<[^>]+>/g, '');
  u.shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  u.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  u.rand = (a, b) => a + Math.random() * (b - a);
  u.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  u.today = () => {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };
  u.dayIndex = () => Math.floor(Date.now() / 86400000);
  u.reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  u.css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  u.svg = (w, h, inner, extra = '') => `<svg viewBox="0 0 ${w} ${h}" ${extra} role="img">${inner}</svg>`;

  /* Run a requestAnimationFrame loop only while the element is on screen. Returns a stop function. */
  u.loop = (el, step) => {
    let raf = 0, visible = true, last = performance.now(), dead = false, t = 0;
    const frame = (now) => {
      if (dead) return;
      const dt = Math.max(0, Math.min(64, now - last));
      last = now;
      if (visible && !document.hidden) {
        t += dt;
        step(t, dt);
      }
      raf = requestAnimationFrame(frame);
    };
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((ents) => { visible = ents[0].isIntersecting; }, { rootMargin: '100px' });
      io.observe(el);
    }
    raf = requestAnimationFrame(frame);
    return () => { dead = true; cancelAnimationFrame(raf); if (io) io.disconnect(); };
  };

  /* Size a canvas to its CSS box at device pixel ratio. */
  u.fitCanvas = (cv, h) => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = cv.clientWidth || cv.parentElement.clientWidth || 600;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    cv.style.height = h + 'px';
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  };

  /* ---------- icons (24px stroke) ---------- */
  const P = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    path: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
    lab: '<path d="M9 3h6"/><path d="M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M8 7h8"/>',
    cards: '<rect x="3" y="7" width="14" height="14" rx="2.5"/><path d="M7 3h11.5A2.5 2.5 0 0 1 21 5.5V17"/>',
    library: '<path d="M4 4v16"/><path d="M8 4v16"/><path d="m12 4.5 4 15.5"/><path d="M16.5 4.2 20 19.5"/><path d="M3 20h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    flame: '<path d="M12 22c4 0 7-2.7 7-7 0-4.5-4-7-5-11-2.5 2-3.5 4.5-3 7-1.5-.5-2.5-2-2.5-3.5C6 9.5 5 12 5 15c0 4.3 3 7 7 7z"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    replay: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',
    right: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    left: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    trophy: '<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17.5v.5"/>',
    quote: '<path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 2.5 2.5 0 0 0 3-1V5a2.5 2.5 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 2.5 2.5 0 0 1-3-1"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    heart: '<path d="M12 20s-7.5-4.6-9-9.2C1.8 7 4.3 4 7.4 4c2 0 3.6 1.2 4.6 2.7C13 5.2 14.6 4 16.6 4c3.1 0 5.6 3 4.4 6.8C19.5 15.4 12 20 12 20z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.8"/><path d="M16 14.2a5 5 0 0 1 6 4.8"/>',
    leaf: '<path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16z"/><path d="M5 21 13 13"/>',
    rocket: '<path d="M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5z"/><path d="m7 11-3 1 2 2M13 17l-1 3-2-2"/><circle cx="15" cy="9" r="1.5"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9.5 2h5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"/>',
    pen: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    video: '<rect x="2.5" y="5.5" width="14" height="13" rx="2"/><path d="m16.5 10 5-3v10l-5-3"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    shuffle: '<path d="M3 6h3.5c4.5 0 6.5 12 11 12H21M3 18h3.5c1.8 0 3.1-1.9 4.2-4.2M13.3 10.2C14.4 7.9 15.7 6 17.5 6H21"/><path d="m18 3 3 3-3 3M18 15l3 3-3 3"/>',
    sparkles: '<path d="M12 3l1.8 4.6L18 9.5l-4.2 1.9L12 16l-1.8-4.6L6 9.5l4.2-1.9z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    shield: '<path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    mask: '<path d="M3 6c3-1 6-1.5 9-1.5S18 5 21 6c0 7-3.5 12-9 13.5C6.5 18 3 13 3 6z"/><path d="M7.5 10.5c1-.7 2-.7 3 0M13.5 10.5c1-.7 2-.7 3 0M9 15c1.8 1 4.2 1 6 0"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    wallet: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M16 13.5h1.5"/>',
    briefcase: '<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 13h17"/>',
    puzzle: '<path d="M9 4h3a1.5 1.5 0 0 1 3 0h3v5a1.5 1.5 0 0 1 0 3v6H13a1.5 1.5 0 0 0-3 0H5v-5a1.5 1.5 0 0 0 0-3V4z"/>'
  };
  PSY.icon = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || P.spark}</svg>`;

  /* ---------- toasts ---------- */
  PSY.toast = (msg, icon = 'bolt') => {
    const box = document.getElementById('toasts');
    if (!box) return;
    const t = u.el(`<div class="toast">${PSY.icon(icon)}<span>${msg}</span></div>`);
    box.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, 2600);
  };

  /* ---------- progress store ---------- */
  const KEY = 'manovigyan.progress.v1';
  const fresh = () => ({ name: '', xp: 0, ch: {}, labs: {}, exams: {}, cards: {}, badges: {}, streak: { n: 0, last: null, best: 0 }, explorer: false, theme: null, last: null, reviews: 0, days: {}, daily: {}, smart: {} });
  let S = fresh();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) S = Object.assign(fresh(), JSON.parse(raw));
  } catch (e) { /* storage blocked: keep in-memory progress */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } PSY.emit && PSY.emit(); };

  const listeners = [];
  PSY.onChange = (fn) => listeners.push(fn);
  PSY.emit = () => listeners.forEach((fn) => { try { fn(); } catch (e) { console.error(e); } });

  const store = (PSY.store = {
    get: () => S,
    save,
    touch() {
      const today = u.today();
      if (S.streak.last === today) return;
      const y = new Date(Date.now() - 86400000);
      const yest = y.getFullYear() + '-' + String(y.getMonth() + 1).padStart(2, '0') + '-' + String(y.getDate()).padStart(2, '0');
      S.streak.n = S.streak.last === yest ? S.streak.n + 1 : 1;
      S.streak.best = Math.max(S.streak.best || 0, S.streak.n);
      S.streak.last = today;
    },
    addXP(n, why) {
      if (!n) return;
      S.xp += n;
      store.touch();
      S.days[u.today()] = (S.days[u.today()] || 0) + n;
      if (why) PSY.toast(`+${n} XP · ${why}`);
    },
    ch: (id) => S.ch[id] || {},
    markRead(id) {
      const c = (S.ch[id] = S.ch[id] || {});
      if (c.read) return false;
      c.read = Date.now();
      store.addXP(20, 'Chapter padh liya');
      store.checkBadges();
      save();
      return true;
    },
    quizResult(id, correct, total) {
      const c = (S.ch[id] = S.ch[id] || {});
      const prev = c.best || 0;
      const prevCorrect = Math.round(prev * total);
      const ratio = total ? correct / total : 0;
      if (correct > prevCorrect) store.addXP((correct - prevCorrect) * 10, 'Quiz');
      c.best = Math.max(prev, ratio);
      c.tries = (c.tries || 0) + 1;
      if (ratio >= 0.6 && !c.done) {
        c.done = Date.now();
        if (!c.read) { c.read = Date.now(); }
        store.addXP(30, 'Chapter complete');
      }
      store.checkBadges();
      save();
      return c;
    },
    labDone(id) {
      const first = !S.labs[id];
      S.labs[id] = (S.labs[id] || 0) + 1;
      if (first) store.addXP(15, 'Naya lab try kiya');
      store.touch();
      store.checkBadges();
      save();
    },
    examResult(n, correct, total) {
      const e = (S.exams[n] = S.exams[n] || {});
      const ratio = total ? correct / total : 0;
      e.best = Math.max(e.best || 0, ratio);
      e.tries = (e.tries || 0) + 1;
      let newly = false;
      if (ratio >= 0.7 && !e.passed) {
        e.passed = Date.now();
        newly = true;
        store.addXP(100, `Level ${n} achieved`);
      }
      store.checkBadges();
      save();
      return { e, newly };
    },
    review(term, knew) {
      const c = (S.cards[term] = S.cards[term] || { box: 0, due: 0 });
      const days = [0, 1, 2, 4, 8, 16];
      c.box = knew ? Math.min(5, c.box + 1) : 1;
      c.due = Date.now() + days[c.box] * 86400000;
      S.reviews = (S.reviews || 0) + 1;
      store.addXP(2);
      store.checkBadges();
      save();
    },
    dailyDone(id) {
      if (S.daily[id]) return false;
      S.daily[id] = Date.now();
      store.addXP(8, 'Situation samajh li');
      store.checkBadges();
      save();
      return true;
    },
    smartDone(id) {
      const first = !S.smart[id];
      const today = u.today();
      const rec = (S.smart[id] = S.smart[id] || { n: 0 });
      if (rec.last === today) return false;
      rec.n++;
      rec.last = today;
      store.addXP(first ? 10 : 4, first ? 'Naya brain workout' : 'Brain workout');
      store.checkBadges();
      save();
      return true;
    },
    setName(n) { S.name = String(n).slice(0, 40); save(); },
    setExplorer(v) { S.explorer = !!v; save(); },
    setTheme(t) { S.theme = t; save(); },
    setLast(id) { S.last = id; save(); },
    reset() { const theme = S.theme; S = fresh(); S.theme = theme; save(); },
    checkBadges() {
      (PSY.badges || []).forEach((b) => {
        if (!S.badges[b.id] && b.test(S)) {
          S.badges[b.id] = Date.now();
          setTimeout(() => PSY.toast(`Badge unlocked: ${b.name}`, 'award'), 500);
        }
      });
    }
  });

  /* ---------- derived progress ---------- */
  PSY.levelChapters = (n) => PSY.chapters.filter((c) => c.level === n);
  PSY.isDone = (id) => !!(S.ch[id] && S.ch[id].done);
  PSY.isRead = (id) => !!(S.ch[id] && S.ch[id].read);
  PSY.levelDoneCount = (n) => PSY.levelChapters(n).filter((c) => PSY.isDone(c.id)).length;
  PSY.levelPct = (n) => {
    const all = PSY.levelChapters(n).length;
    return all ? PSY.levelDoneCount(n) / all : 0;
  };
  PSY.levelPassed = (n) => !!(S.exams[n] && S.exams[n].passed);
  PSY.levelUnlocked = (n) => n === 1 || S.explorer || PSY.levelPassed(n - 1);
  PSY.examUnlocked = (n) => PSY.levelUnlocked(n) && (S.explorer || PSY.levelDoneCount(n) === PSY.levelChapters(n).length);
  PSY.doneCount = () => PSY.chapters.filter((c) => PSY.isDone(c.id)).length;
  PSY.currentLevel = () => {
    for (let n = 1; n <= PSY.levels.length; n++) if (!PSY.levelPassed(n)) return n;
    return PSY.levels.length;
  };
  PSY.rank = () => {
    let passed = 0;
    for (let n = 1; n <= PSY.levels.length; n++) if (PSY.levelPassed(n)) passed = n;
    return passed ? PSY.levels[passed - 1].rank : 'Beginner';
  };
  PSY.nextChapter = () => {
    for (const lv of PSY.levels) {
      if (!PSY.levelUnlocked(lv.n)) break;
      const c = PSY.levelChapters(lv.n).find((x) => !PSY.isDone(x.id));
      if (c) return c;
      if (!PSY.levelPassed(lv.n)) return { exam: lv.n };
    }
    return null;
  };
  PSY.chapterIndex = (id) => PSY.chapters.findIndex((c) => c.id === id);
  PSY.getChapter = (id) => PSY.chapters.find((c) => c.id === id);
})();
