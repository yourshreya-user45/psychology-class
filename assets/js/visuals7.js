/* Motion graphics · part 7 (Level 7: advanced & applied) */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u } = PSY;
  const V = PSY.visual;
  const H = PSY.vh;
  const LC = 'var(--lc, var(--accent))';
  const bindPick = (root, sel, fn) => u.$$(sel, root).forEach((g) => {
    g.addEventListener('click', () => fn(+g.dataset.i));
    g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(+g.dataset.i); } });
  });
  const barChart = (holder, rows, opts) => {
    const W = 620, rowH = opts.rowH || 30, x0 = opts.x0 || 230, x1 = 580, max = opts.max || 1;
    const Hh = rows.length * rowH + 44;
    let inner = '';
    (opts.ticks || [0, .25, .5, .75, 1]).forEach((t) => { const x = x0 + t / max * (x1 - x0); inner += `<line x1="${x}" y1="8" x2="${x}" y2="${Hh - 28}" style="stroke:var(--line)"/><text class="svg-mono" x="${x}" y="${Hh - 10}" text-anchor="middle">${opts.fmt ? opts.fmt(t) : t}</text>`; });
    rows.forEach(([n, v, c], i) => {
      const y = 14 + i * rowH;
      inner += `<text class="svg-label" x="${x0 - 10}" y="${y + 14}" text-anchor="end" style="font-size:12.5px">${n}</text><rect x="${x0}" y="${y}" width="${Math.max(2, v / max * (x1 - x0)).toFixed(1)}" height="${rowH - 10}" rx="5" style="fill:${c || LC};transform-box:fill-box;transform-origin:left;animation:bcGrow .9s cubic-bezier(.2,.8,.2,1) both ${(i * .08).toFixed(2)}s"/><text class="svg-mono" x="${x0 + v / max * (x1 - x0) + 6}" y="${y + 14}" style="fill:var(--ink);font-weight:600">${opts.lab ? opts.lab(v) : v}</text>`;
    });
    holder.innerHTML = `<style>@keyframes bcGrow{from{transform:scaleX(0)}}</style>` + u.svg(W, Hh, inner, `aria-label="${opts.aria || 'Bar chart'}"`);
  };

  /* ---------- Prospect theory value function ---------- */
  V('lossAversion', {
    title: 'Loss aversion curve',
    render(stage) {
      const W = 600, Hh = 320, cx = 300, cy = 160, sx = 270 / 1000, sy = 140 / Math.pow(1000, .88) / 2.25 * 1.0;
      const v = (x) => x >= 0 ? Math.pow(x, .88) : -2.25 * Math.pow(-x, .88);
      const X = (x) => cx + x * sx, Y = (val) => cy - val * sy;
      let d = '';
      for (let x = -1000; x <= 1000; x += 20) d += (d ? 'L' : 'M') + X(x).toFixed(1) + ',' + Y(v(x)).toFixed(1);
      let inner = `<line x1="20" y1="${cy}" x2="${W - 20}" y2="${cy}" style="stroke:var(--ink-3)"/><line x1="${cx}" y1="10" x2="${cx}" y2="${Hh - 10}" style="stroke:var(--ink-3)"/>`;
      inner += `<text class="svg-small" x="${W - 24}" y="${cy - 8}" text-anchor="end" style="fill:var(--good);font-weight:700">Fayda (₹) →</text><text class="svg-small" x="24" y="${cy - 8}" style="fill:var(--bad);font-weight:700">← Nuksaan (₹)</text><text class="svg-small" x="${cx + 8}" y="20">Khushi (value)</text><text class="svg-small" x="${cx + 8}" y="${Hh - 14}">Dukh</text>`;
      inner += `<path class="draw" d="${d}" style="fill:none;stroke:var(--ink);stroke-width:3;--dur:2s"/>`;
      inner += `<line id="la-g" style="stroke:var(--good);stroke-width:6;stroke-linecap:round"/><line id="la-l" style="stroke:var(--bad);stroke-width:6;stroke-linecap:round"/><circle id="la-gd" r="6" style="fill:var(--good)"/><circle id="la-ld" r="6" style="fill:var(--bad)"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Prospect theory value function"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const ctrl = H.ctrl(stage);
      ctrl.innerHTML = `<label for="laA" style="min-width:120px">Rakam: ₹<b id="laV" class="mono">500</b></label><input id="laA" type="range" min="100" max="1000" step="50" value="500" style="flex:1;min-width:180px">`;
      const set = (a) => {
        u.$('#laV', ctrl).textContent = a;
        const g = v(a), l = v(-a);
        const gl = u.$('#la-g', svg), ll = u.$('#la-l', svg);
        gl.setAttribute('x1', X(a)); gl.setAttribute('x2', X(a)); gl.setAttribute('y1', cy); gl.setAttribute('y2', Y(g));
        ll.setAttribute('x1', X(-a)); ll.setAttribute('x2', X(-a)); ll.setAttribute('y1', cy); ll.setAttribute('y2', Y(l));
        u.$('#la-gd', svg).setAttribute('cx', X(a)); u.$('#la-gd', svg).setAttribute('cy', Y(g));
        u.$('#la-ld', svg).setAttribute('cx', X(-a)); u.$('#la-ld', svg).setAttribute('cy', Y(l));
        H.info(stage, `₹${a} <b style="color:var(--good)">milne</b> ki khushi: hari line. ₹${a} <b style="color:var(--bad)">khone</b> ka dukh: laal line, lagbhag <b>${(Math.abs(l) / g).toFixed(1)} guna</b> lambi. Isliye log ₹${a} ke nuksaan ke darr se 50-50 ka shart lene se mana kar dete hain, jab tak jeetne ki rakam ~₹${a * 2} na ho. (Tversky aur Kahneman, 1992 ke parameters)`);
      };
      u.$('#laA', ctrl).addEventListener('input', (e) => set(+e.target.value));
      set(500);
    }
  });

  /* ---------- Defaults: organ donation ---------- */
  V('nudge', {
    title: 'Default ka jaadu',
    render(stage) {
      const rows = [['Denmark (opt-in)', 4.25, 'var(--bad)'], ['Germany (opt-in)', 12, 'var(--bad)'], ['UK (opt-in)', 17.17, 'var(--bad)'], ['Netherlands (opt-in)', 27.5, 'var(--bad)'], ['Sweden (opt-out)', 85.9, 'var(--good)'], ['Belgium (opt-out)', 98, 'var(--good)'], ['France (opt-out)', 99.91, 'var(--good)'], ['Austria (opt-out)', 99.98, 'var(--good)']];
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      barChart(holder, rows, { max: 100, ticks: [0, 25, 50, 75, 100], fmt: (t) => t + '%', lab: (v) => v + '%', x0: 190, aria: 'Organ donor consent rates in opt-in vs opt-out countries' });
      H.info(stage, 'Johnson aur Goldstein (2003): jin deshon me donor banne ke liye <b>khud form bharna</b> padta hai (opt-in), wahan registration bahut kam; jahan sab <b>default donor</b> hain jab tak mana na karein (opt-out), wahan lagbhag sab. Germany aur Austria culture me kaafi milte-julte hain, phir bhi 12% vs 99.98%. (Registration aur asli donations me farak hota hai; India me system opt-in hai.)');
    }
  });

  /* ---------- PERMA ---------- */
  V('perma', {
    title: 'PERMA',
    render(stage) {
      const P = [['P', 'Positive emotion', 'Raat ko 3 achhi baatein likho; ek achhe pal ko jaanbujh kar 20 second "savor" karo.'], ['E', 'Engagement', 'Aisa kaam chuno jisme aap kho jaate ho (flow): music, coding, khel. Phone door rakho.'], ['R', 'Relationships', 'Hafte me ek purane dost ko call; khane par phone-free baatcheet.'], ['M', 'Meaning', 'Apne top 3 values likho; mahine me ek baar kisi ki madad ya volunteering.'], ['A', 'Accomplishment', 'Hafte ka ek chhota, specific goal; poora hone par usse note karo.']];
      const cols = ['var(--l4)', 'var(--l2)', 'var(--l1)', 'var(--l5)', 'var(--l7)'];
      const cx = 280, cy = 170, R = 78;
      let inner = '';
      P.forEach(([l], i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / 5;
        const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
        inner += `<g class="hot pm" data-i="${i}" tabindex="0" role="button" aria-label="${P[i][1]}"><circle class="pop pm-c" cx="${x}" cy="${y}" r="70" style="fill:${cols[i]};opacity:.32;--delay:${(i * .15).toFixed(2)}s"/><text class="svg-title fade" x="${cx + Math.cos(a) * (R + 32)}" y="${cy + Math.sin(a) * (R + 32) + 8}" text-anchor="middle" style="font-size:26px;--delay:${(i * .15 + .3).toFixed(2)}s">${l}</text></g>`;
      });
      inner += `<circle cx="${cx}" cy="${cy}" r="30" class="pop" style="fill:var(--ink);--delay:.9s"/><text class="svg-title" x="${cx}" y="${cy + 5}" text-anchor="middle" style="fill:var(--paper);font-size:12px">Well-being</text>`;
      stage.innerHTML = u.svg(560, 340, inner, 'aria-label="PERMA model flower" style="max-width:500px;margin:0 auto"');
      const svg = stage.firstChild;
      let cur = 0;
      const show = (i) => { cur = i; u.$$('.pm', svg).forEach((g) => { u.$('.pm-c', g).style.opacity = +g.dataset.i === i ? .75 : .28; }); H.info(stage, `<b>${P[i][0]}: ${P[i][1]}</b>. ${P[i][2]}`); };
      bindPick(svg, '.pm', (i) => { clearInterval(iv); show(i); });
      show(0);
      if (u.reduced()) return;
      const iv = setInterval(() => show((cur + 1) % 5), 2600);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Flow channel ---------- */
  V('flowChannel', {
    title: 'Flow channel',
    render(stage) {
      const W = 520, Hh = 340, x0 = 60, x1 = 500, y0 = 300, y1 = 20;
      const X = (s) => x0 + s * (x1 - x0), Y = (c) => y0 - c * (y0 - y1);
      const band = .14;
      let inner = `<polygon points="${X(0)},${Y(band)} ${X(0)},${Y(1)} ${X(1 - band)},${Y(1)}" style="fill:var(--bad);opacity:.12"/>`;
      inner += `<polygon points="${X(band)},${Y(0)} ${X(1)},${Y(0)} ${X(1)},${Y(1 - band)}" style="fill:var(--l3);opacity:.12"/>`;
      inner += `<polygon points="${X(0)},${Y(band)} ${X(0)},${Y(0)} ${X(band)},${Y(0)} ${X(1)},${Y(1 - band)} ${X(1)},${Y(1)} ${X(1 - band)},${Y(1)}" style="fill:var(--good);opacity:.18"/>`;
      inner += `<text class="svg-title" x="${X(.18)}" y="${Y(.78)}" style="fill:var(--bad);font-size:16px">Anxiety</text><text class="svg-title" x="${X(.68)}" y="${Y(.18)}" style="fill:var(--l3);font-size:16px">Boredom</text><text class="svg-title" x="${X(.58)}" y="${Y(.6)}" transform="rotate(-38 ${X(.58)} ${Y(.6)})" style="fill:var(--good);font-size:17px">FLOW</text>`;
      inner += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" style="stroke:var(--ink-3)"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" style="stroke:var(--ink-3)"/><text class="svg-small" x="${(x0 + x1) / 2}" y="${y0 + 26}" text-anchor="middle">Skill →</text><text class="svg-small" x="22" y="${(y0 + y1) / 2}" text-anchor="middle" transform="rotate(-90 22 ${(y0 + y1) / 2})">Challenge →</text>`;
      const path = [[.12, .12, 'Shuruaat: aasaan gaane, nayi skill. Flow!'], [.42, .14, 'Skill badh gayi par gaane wahi aasaan: boredom.'], [.42, .44, 'Mushkil raag uthaya: phir se flow.'], [.46, .82, 'Bahut bada jump (stage show jaldi): anxiety.'], [.78, .82, 'Practice se skill badhi: wapas flow, ab oonche level par.']];
      inner += `<polyline points="${path.map((p) => X(p[0]) + ',' + Y(p[1])).join(' ')}" class="draw" style="fill:none;stroke:var(--ink-3);stroke-width:2;stroke-dasharray:4 4;--dur:3s"/><circle id="fl-dot" r="9" style="fill:${LC};stroke:var(--surface);stroke-width:3"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Flow channel diagram: challenge versus skill" style="max-width:520px;margin:0 auto"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const dot = u.$('#fl-dot', svg);
      let last = -1;
      const at = (f) => {
        const seg = Math.min(path.length - 2, Math.floor(f * (path.length - 1)));
        const fr = f * (path.length - 1) - seg;
        const a = path[seg], b = path[seg + 1];
        dot.setAttribute('cx', X(a[0] + (b[0] - a[0]) * fr)); dot.setAttribute('cy', Y(a[1] + (b[1] - a[1]) * fr));
        const k = fr > .85 ? seg + 1 : seg;
        if (k !== last) { last = k; H.info(stage, `<b>Sitar seekhne wali Riya</b>: ${path[k][2]}`); }
      };
      if (u.reduced()) { at(1); return; }
      return u.loop(stage, (t) => at(((t / 9000) % 1)));
    }
  });

  /* ---------- Hiring validity ---------- */
  V('hiring', {
    title: 'Kaunsa hiring method kaam karta hai?',
    render(stage) {
      const rows = [['Work sample test', .54], ['General mental ability', .51], ['Structured interview', .51], ['Job knowledge test', .48], ['Unstructured interview', .38], ['Conscientiousness test', .31], ['Reference check', .26], ['Saalon ka experience', .18], ['Padhai ke saal', .10], ['Graphology (handwriting)', .02, 'var(--bad)']];
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      barChart(holder, rows, { max: .6, ticks: [0, .2, .4, .6], fmt: (t) => t.toFixed(1), lab: (v) => v.toFixed(2), x0: 200, rowH: 28, aria: 'Validity of hiring methods for predicting job performance' });
      H.info(stage, 'Validity coefficient (r): 0 = job performance se koi rishta nahi. Schmidt aur Hunter (1998) ke estimates. 2022 ke ek re-analysis me numbers thode kam aaye aur structured interviews sabse upar nikle. Gut-feeling wala unstructured interview structured se kaafi peeche hai.');
    }
  });

  /* ---------- Fish tank (holistic vs analytic) ---------- */
  V('fishTank', {
    title: 'Fish tank: aap kya dekhte ho?',
    render(stage) {
      const W = 620, Hh = 300;
      const fishShape = (s, c) => `<g transform="scale(${s})"><path d="M0 0 q30 -22 60 0 q-30 22 -60 0 z" style="fill:${c}"/><path d="M58 0 l18 -12 v24 z" style="fill:${c}"/><circle cx="12" cy="-4" r="3" style="fill:var(--surface)"/></g>`;
      const fish = (x, y, s, c, cls, extra = '') => `<g transform="translate(${x} ${y})"><g class="${cls}">${fishShape(s, c)}${extra}</g></g>`;
      let inner = `<style>.ft-swim{animation:ftSwim 7s ease-in-out infinite}.ft-swim2{animation:ftSwim 9s ease-in-out infinite reverse}.ft-sway{transform-box:fill-box;transform-origin:bottom;animation:ftSway 3s ease-in-out infinite}.ft-bub{animation:ftBub 4s linear infinite}@keyframes ftSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(-120px)}}@keyframes ftSway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}@keyframes ftBub{from{transform:translateY(0);opacity:.8}to{transform:translateY(-220px);opacity:0}}</style>`;
      inner += `<rect x="10" y="10" width="${W - 20}" height="${Hh - 20}" rx="14" style="fill:var(--l3);opacity:.12"/>`;
      inner += `<g id="ft-bg">`;
      [[80, 280, 1], [140, 280, .8], [480, 280, 1.1], [540, 280, .7]].forEach(([x, y, s]) => { inner += `<path class="ft-sway" d="M${x} ${y} q-10 -40 0 -80 q10 -30 0 -60" style="fill:none;stroke:var(--good);stroke-width:${6 * s};stroke-linecap:round"/>`; });
      inner += `<ellipse cx="300" cy="282" rx="60" ry="14" style="fill:var(--ink-3);opacity:.5"/><ellipse cx="420" cy="284" rx="34" ry="10" style="fill:var(--ink-3);opacity:.4"/><g transform="translate(220 268)"><ellipse cx="0" cy="0" rx="16" ry="10" style="fill:var(--good);opacity:.8"/><circle cx="-8" cy="-8" r="5" style="fill:var(--good)"/><circle cx="8" cy="-8" r="5" style="fill:var(--good)"/><circle cx="-8" cy="-8" r="2" style="fill:var(--ink)"/><circle cx="8" cy="-8" r="2" style="fill:var(--ink)"/></g><g transform="translate(470 270)"><path d="M0 0 a12 12 0 1 1 12 -10" style="fill:none;stroke:var(--warn);stroke-width:5"/></g>`;
      [[120, 4], [360, 6], [520, 5]].forEach(([x, r], i) => { inner += `<circle class="ft-bub" cx="${x}" cy="270" r="${r}" style="fill:none;stroke:var(--l3);stroke-width:1.5;animation-delay:${i * 1.3}s"/>`; });
      inner += fish(420, 110, .45, 'var(--ink-3)', 'ft-swim2') + fish(160, 200, .4, 'var(--ink-3)', 'ft-swim2') + fish(520, 210, .35, 'var(--ink-3)', 'ft-swim');
      inner += `</g><g id="ft-focal">${fish(380, 140, 1.4, 'var(--warn)', 'ft-swim', `<circle id="ft-ring" cx="53" cy="0" r="66" style="fill:none;stroke:${LC};stroke-width:3;stroke-dasharray:6 6;opacity:0;transition:opacity .5s"/>`)}</g>`;
      inner += `<g id="ft-labels" style="opacity:0;transition:opacity .5s"><text class="svg-small" x="70" y="140" style="fill:var(--ink);font-weight:700">paudhe</text><text class="svg-small" x="200" y="248" style="fill:var(--ink);font-weight:700">mendhak</text><text class="svg-small" x="290" y="262" style="fill:var(--ink);font-weight:700">pathar</text><text class="svg-small" x="455" y="250" style="fill:var(--ink);font-weight:700">ghongha</text><text class="svg-small" x="150" y="186" style="fill:var(--ink);font-weight:700">chhoti machhliyan</text></g>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Animated fish tank scene"');
      const svg = stage.querySelector('svg');
      const set = (k) => {
        const bg = u.$('#ft-bg', svg);
        bg.style.opacity = k === 0 ? .35 : 1; bg.style.transition = 'opacity .5s';
        u.$('#ft-labels', svg).style.opacity = k === 1 ? 1 : 0;
        u.$('#ft-ring', svg).style.opacity = k === 0 ? 1 : 0;
        H.info(stage, k === 0 ? '<b>Analytic nazar</b>: "Ek badi naarangi machhli baayein taraf tair rahi thi." Dhyan sabse prominent object par, background dhundhla. American participants ka aam pattern.' : '<b>Holistic nazar</b>: "Ek talaab jaisa tha, paudhe hil rahe the, neeche mendhak aur ghongha, aur ek badi machhli tair rahi thi." Dhyan context aur rishton par. Japanese participants ne background ke baare me lagbhag 60% zyada bataya.');
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Analytic', 'Holistic'], set, 0));
      set(0);
    }
  });

  /* ---------- Reliability / validity targets ---------- */
  V('targets', {
    title: 'Reliability vs validity',
    render(stage) {
      const T = [['Reliable + valid', [0, 0], 7, 'var(--good)', 'Har baar bullseye ke paas: consistent aur sahi. Aisa test chahiye.'], ['Reliable, valid nahi', [30, -26], 7, 'var(--warn)', 'Har baar ek hi jagah, par galat jagah. Jaise 5 kilo zyada batane wali machine: consistent galti.'], ['Valid (average), reliable nahi', [0, 0], 34, 'var(--warn)', 'Average sahi jagah, par har dart bikhra hua. Ek baar ka score bharosemand nahi.'], ['Na reliable, na valid', [26, 22], 30, 'var(--bad)', 'Bikhra hua aur galat jagah. Bekaar test.']];
      const seeds = Array.from({ length: 8 }, () => [u.rand(-1, 1), u.rand(-1, 1)]);
      let inner = '';
      T.forEach(([n, [ox, oy], spread, c], i) => {
        const cx = 80 + i * 155, cy = 100;
        [60, 44, 28, 12].forEach((r, k) => { inner += `<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:${k % 2 ? 'var(--surface)' : 'var(--surface-3)'};stroke:var(--line)"/>`; });
        inner += `<circle cx="${cx}" cy="${cy}" r="5" style="fill:var(--bad)"/>`;
        seeds.forEach(([a, b], k) => { inner += `<circle class="pop" cx="${(cx + ox + a * spread).toFixed(1)}" cy="${(cy + oy + b * spread).toFixed(1)}" r="5" style="fill:${c};stroke:var(--surface);stroke-width:1.5;--delay:${(i * .5 + k * .08).toFixed(2)}s"/>`; });
        inner += `<g class="hot tg" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><rect x="${cx - 74}" y="174" width="148" height="30" rx="8" style="fill:transparent"/><text class="svg-label" x="${cx}" y="194" text-anchor="middle" style="font-weight:700;font-size:12px">${n}</text></g>`;
      });
      const holder = H.wide(stage, 520);
      holder.innerHTML = u.svg(640, 214, inner, 'aria-label="Four dartboards illustrating reliability and validity"');
      const svg = holder.firstChild;
      let cur = 0;
      const show = (i) => { cur = i; H.info(stage, `<b>${T[i][0]}</b>: ${T[i][4]}`); };
      bindPick(svg, '.tg', (i) => { clearInterval(iv); show(i); });
      show(0);
      if (u.reduced()) return;
      const iv = setInterval(() => show((cur + 1) % 4), 2800);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Replication ---------- */
  V('replication', {
    title: 'Reproducibility Project (2015)',
    render(stage) {
      const W = 620, Hh = 270, y0 = 220, y1 = 30;
      const Y = (p) => y0 - p * (y0 - y1);
      const groups = [['Significant results', [[.97, 'Original'], [.36, 'Replication']], (v) => Math.round(v * 100) + '%', 1], ['Average effect size (r)', [[.403, 'Original'], [.197, 'Replication']], (v) => v.toFixed(2), .5]];
      let inner = `<line x1="40" y1="${y0}" x2="${W - 20}" y2="${y0}" style="stroke:var(--ink-3)"/>`;
      groups.forEach(([n, bars, fmt, max], gi) => {
        const gx = 70 + gi * 290;
        bars.forEach(([v, lab], bi) => {
          const x = gx + bi * 110, h = v / max;
          inner += `<rect x="${x}" y="${Y(h)}" width="80" height="${y0 - Y(h)}" rx="6" style="fill:${bi ? 'var(--warn)' : LC};transform-box:fill-box;transform-origin:bottom;animation:rpGrow 1s cubic-bezier(.2,.8,.2,1) both ${(gi * .5 + bi * .25).toFixed(2)}s"/><text class="svg-title" x="${x + 40}" y="${Y(h) - 8}" text-anchor="middle" style="font-size:16px">${fmt(v)}</text><text class="svg-small" x="${x + 40}" y="${y0 + 18}" text-anchor="middle" style="fill:var(--ink)">${lab}</text>`;
        });
        inner += `<text class="svg-label" x="${gx + 95}" y="${y0 + 42}" text-anchor="middle" style="font-weight:700">${n}</text>`;
      });
      stage.innerHTML = `<style>@keyframes rpGrow{from{transform:scaleY(0)}}</style>` + u.svg(W, Hh + 10, inner, 'aria-label="Original versus replication results in the 2015 reproducibility project"');
      H.info(stage, 'Open Science Collaboration (2015, journal <i>Science</i>): 100 studies dohrayi gayi. Original me 97% significant the, replications me ~36%. Average effect size lagbhag <b>aadha</b> reh gaya. Iska matlab ye nahi ki baaki sab galat the; par published effects aksar badha-chadha kar dikhte hain.');
    }
  });

  /* ---------- Career path ---------- */
  V('careerPath', {
    title: 'Career ka naksha',
    render(stage) {
      const N = [
        ['Class 12', 260, 28, 'Koi bhi stream. CUET-UG ya university entrance se BA/BSc me admission.'],
        ['BA / BSc Psychology', 260, 88, '3 saal (NEP me 4 saal ka option). Basics, research methods, statistics, aur internships shuru karne ka sahi samay.'],
        ['MA / MSc|specialization', 260, 152, 'Clinical, counselling, I/O, health, forensic, sports, etc. Entrance: CUET-PG ya university tests.'],
        ['RCI|training', 56, 240, 'RCI-approved clinical/rehabilitation psychology program (pehle M.Phil; ab badlav ho rahe hain). Phir RCI registration.'],
        ['Counselling|training', 158, 240, 'Supervised counselling practice aur training (MA Counselling ke saath).'],
        ['I/O, HR', 260, 240, 'I/O psychology ya HR (MBA HR bhi ek common raasta).'],
        ['UX / data', 362, 240, 'Psychology + research, stats aur design skills.'],
        ['PhD / NET', 464, 240, 'Research aur teaching; UGC-NET se lecturer eligibility aur JRF fellowship.'],
        ['Clinical|psychologist', 56, 316, 'Hospitals, clinics, private practice: assessment aur therapy (RCI licensed).'],
        ['School/college|counsellor', 158, 316, 'Schools, colleges, NGOs, online platforms par counselling.'],
        ['HR, OD,|L&D', 260, 316, 'Hiring, training, employee well-being, leadership development.'],
        ['UX researcher /|analyst', 362, 316, 'User research, experiments, product aur policy decisions.'],
        ['Research /|teaching', 464, 316, 'Universities, research institutes, think tanks.']
      ];
      const E = [[0, 1], [1, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [3, 8], [4, 9], [5, 10], [6, 11], [7, 12]];
      let inner = '';
      E.forEach(([a, b], i) => { const A = N[a], B = N[b]; inner += `<path class="draw" d="M${A[1]} ${A[2] + 20} C ${A[1]} ${(A[2] + B[2]) / 2}, ${B[1]} ${(A[2] + B[2]) / 2}, ${B[1]} ${B[2] - 22}" style="fill:none;stroke:var(--line);stroke-width:2.5;--delay:${(i * .1).toFixed(2)}s;--dur:.6s"/>`; });
      N.forEach(([n, x, y], i) => {
        const lines = n.split('|');
        const w = i < 3 ? 170 : 96, h = lines.length > 1 ? 40 : 32;
        inner += `<g class="hot cp" data-i="${i}" tabindex="0" role="button" aria-label="${n.replace('|', ' ')}"><rect class="pop cp-r" x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="10" style="fill:var(--surface);stroke:${i === 8 ? LC : 'var(--ink-3)'};stroke-width:${i === 8 ? 2.5 : 1.5};--delay:${(i * .07).toFixed(2)}s"/>${lines.map((l, k) => `<text class="svg-label" x="${x}" y="${y + 4 + (k - (lines.length - 1) / 2) * 13}" text-anchor="middle" style="font-weight:700;font-size:11px">${l}</text>`).join('')}</g>`;
      });
      stage.innerHTML = u.svg(520, 345, inner, 'aria-label="Psychology career paths in India" style="max-width:560px;margin:0 auto"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const show = (i) => { u.$$('.cp-r', svg).forEach((r, k) => { r.style.fill = k === i ? 'var(--surface-2)' : 'var(--surface)'; }); H.info(stage, `<b>${N[i][0].replace('|', ' ')}</b>: ${N[i][3]}`); };
      bindPick(svg, '.cp', show);
      show(2);
    }
  });
})();
