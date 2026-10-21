/* Motion graphics · part 4 (Level 4: motivation, emotion, development, personality) */
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
  const autoCycle = (n, show, ms = 2600) => {
    if (u.reduced()) return { stop() {}, cur: 0 };
    let cur = 0;
    const iv = setInterval(() => { cur = (cur + 1) % n; show(cur); }, ms);
    return { stop: () => clearInterval(iv) };
  };

  /* ---------- Maslow pyramid ---------- */
  V('maslow', {
    title: 'Maslow ka pyramid',
    render(stage) {
      const L = [
        ['Physiological', 'Khana, paani, neend, saans, garmi.', 'Bhookha ya neend se tadapta student class me "self-actualization" nahi sochta. School me mid-day meal se attendance aur dhyan dono behtar hote hain.'],
        ['Safety', 'Suraksha, ghar, sehat, naukri ki stability.', 'Lockdown me naukri jaane ka darr: log turant bachat aur safety par focus karne lage.'],
        ['Love / belonging', 'Parivaar, dost, rishte, group ka hissa.', 'Naye sheher me hostel me pehle hafte ka akelapan; ek dost milte hi mood aur padhai dono sudharte hain.'],
        ['Esteem', 'Izzat, achievement, self-respect.', 'Office me kaam ki pehchaan, ya cricket team me select hona.'],
        ['Self-actualization', 'Apni poori potential tak pahunchna.', 'Ek doctor jo achhi naukri chhod kar gaon me clinic kholti hai kyunki yahi uska "maksad" hai.']
      ];
      const W = 520, Hh = 330, cx = 260, base = 310, h = 56;
      let inner = '';
      L.forEach(([n], i) => {
        const yb = base - i * h, yt = yb - h + 3;
        const wb = 480 * (1 - i / 5), wt = 480 * (1 - (i + 1) / 5);
        inner += `<g class="hot ms" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><polygon class="pop ms-p" points="${cx - wb / 2},${yb} ${cx + wb / 2},${yb} ${cx + wt / 2},${yt} ${cx - wt / 2},${yt}" style="fill:${LC};opacity:${(0.25 + i * 0.15).toFixed(2)};--delay:${(i * .35).toFixed(2)}s"/><text class="svg-label fade" x="${cx}" y="${yb - h / 2 + 5}" text-anchor="middle" style="font-weight:700;font-size:${i === 4 ? 11 : 13}px;--delay:${(i * .35 + .2).toFixed(2)}s">${i === 4 ? 'Self-' : n}</text>${i === 4 ? `<text class="svg-label fade" x="${cx}" y="${yb - h / 2 + 18}" text-anchor="middle" style="font-weight:700;font-size:11px;--delay:1.6s">actualization</text>` : ''}</g>`;
      });
      inner += `<text class="svg-mono" x="20" y="300">BASIC</text><text class="svg-mono" x="20" y="80">GROWTH</text>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Maslow hierarchy of needs pyramid" style="max-width:520px;margin:0 auto"');
      const svg = stage.firstChild;
      const show = (i) => { u.$$('.ms', svg).forEach((g) => { u.$('.ms-p', g).style.stroke = +g.dataset.i === i ? 'var(--ink)' : 'none'; u.$('.ms-p', g).style.strokeWidth = 2.5; }); H.info(stage, `<b>${L[i][0]}</b>: ${L[i][1]} <br><span class="muted">Example:</span> ${L[i][2]}`); };
      const cyc = autoCycle(5, show, 2800);
      bindPick(svg, '.ms', (i) => { cyc.stop(); show(i); });
      show(0);
      return cyc.stop;
    }
  });

  /* ---------- Yerkes-Dodson ---------- */
  V('yerkes', {
    title: 'Yerkes-Dodson curve',
    render(stage) {
      const W = 600, Hh = 270, x0 = 50, x1 = 580, y0 = 220, y1 = 20;
      const X = (a) => x0 + a * (x1 - x0), Y = (p) => y0 - p * (y0 - y1);
      const perf = (a, peak) => Math.exp(-Math.pow((a - peak) / 0.28, 2));
      const path = (peak) => { let d = ''; for (let a = 0; a <= 1.0001; a += 0.02) d += (d ? 'L' : 'M') + X(a).toFixed(1) + ',' + Y(perf(a, peak)).toFixed(1); return d; };
      let inner = `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" style="stroke:var(--ink-3)"/><line x1="${x0}" y1="${y1}" x2="${x0}" y2="${y0}" style="stroke:var(--ink-3)"/>`;
      inner += `<text class="svg-small" x="${(x0 + x1) / 2}" y="${y0 + 38}" text-anchor="middle">Arousal / stress →</text><text class="svg-small" x="18" y="${(y0 + y1) / 2}" text-anchor="middle" transform="rotate(-90 18 ${(y0 + y1) / 2})">Performance →</text>`;
      inner += `<text class="svg-mono" x="${X(.08)}" y="${y0 + 18}" text-anchor="middle">Bore</text><text class="svg-mono" x="${X(.5)}" y="${y0 + 18}" text-anchor="middle">Focused</text><text class="svg-mono" x="${X(.92)}" y="${y0 + 18}" text-anchor="middle">Panic</text>`;
      inner += `<path id="yd-easy" class="draw" d="${path(0.62)}" style="fill:none;stroke:var(--ink-3);stroke-width:2.5;stroke-dasharray:6 5;--dur:1.6s"/><path id="yd-hard" class="draw" d="${path(0.38)}" style="fill:none;stroke:${LC};stroke-width:3.5;--dur:1.6s"/>`;
      inner += `<text class="svg-small" x="${X(.62)}" y="${Y(1) - 8}" text-anchor="middle">aasaan kaam</text><text class="svg-small" x="${X(.38)}" y="${Y(1) - 8}" text-anchor="middle" style="fill:${LC};font-weight:700">mushkil kaam</text>`;
      inner += `<line id="yd-line" x1="0" y1="${y1}" x2="0" y2="${y0}" style="stroke:var(--ink-3);stroke-dasharray:3 4"/><circle id="yd-dot" r="8" style="fill:${LC};stroke:var(--surface);stroke-width:3"/><circle id="yd-dot2" r="6" style="fill:var(--ink-3);stroke:var(--surface);stroke-width:2"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Yerkes-Dodson inverted U curves"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const ctrl = H.ctrl(stage);
      ctrl.innerHTML = `<label for="ydA" style="min-width:90px">Arousal</label><input id="ydA" type="range" min="0" max="100" value="20" style="flex:1;min-width:180px">`;
      const inp = u.$('#ydA', ctrl);
      const set = (v) => {
        const a = v / 100;
        const ph = perf(a, .38), pe = perf(a, .62);
        u.$('#yd-dot', svg).setAttribute('cx', X(a)); u.$('#yd-dot', svg).setAttribute('cy', Y(ph));
        u.$('#yd-dot2', svg).setAttribute('cx', X(a)); u.$('#yd-dot2', svg).setAttribute('cy', Y(pe));
        u.$('#yd-line', svg).setAttribute('x1', X(a)); u.$('#yd-line', svg).setAttribute('x2', X(a));
        const zone = a < .22 ? 'Bahut kam arousal: neend, bore, "baad me kar lenge".' : a < .5 ? 'Optimal zone (mushkil kaam ke liye): alert, focused, par shaant.' : a < .75 ? 'Aasaan kaam ke liye theek, par mushkil kaam me galtiyan shuru.' : 'Over-arousal: haath kaanpna, "blank" ho jaana, working memory overload.';
        H.info(stage, `<b>Mushkil kaam: ${Math.round(ph * 100)}%</b> · <span class="muted">Aasaan kaam: ${Math.round(pe * 100)}%</span><br>${zone}`);
      };
      inp.addEventListener('input', () => set(+inp.value));
      set(20);
      if (u.reduced()) return;
      let t0 = null;
      const stop = u.loop(stage, (t) => { if (t0 === null) t0 = t; const e = t - t0; if (e < 4000) { const v = 20 + 70 * (0.5 - 0.5 * Math.cos(Math.PI * e / 4000)); inp.value = v; set(v); } });
      inp.addEventListener('pointerdown', () => { t0 = -1e9; });
      return stop;
    }
  });

  /* ---------- Emotion theories ---------- */
  V('emotionTheories', {
    title: 'Emotion ki theories',
    render(stage) {
      const T = [
        ['James-Lange', [['Saanp dikha', 60, 90], ['Body: dil tez, kaanpna', 280, 90], ['Darr mehsoos', 500, 90]], [[0, 1], [1, 2]], 'Pehle body react karti hai, phir hum us body change ko "darr" ke roop me mehsoos karte hain. "Hum darte hain kyunki kaanpte hain."'],
        ['Cannon-Bard', [['Saanp dikha', 60, 110], ['Thalamus', 230, 110], ['Body: dil tez', 440, 50], ['Darr mehsoos', 440, 170]], [[0, 1], [1, 2], [1, 3]], 'Thalamus ek saath do signal bhejta hai: ek body ko, ek cortex ko. Body ka response aur darr ki feeling <b>ek saath</b> aur alag-alag hote hain.'],
        ['Schachter-Singer', [['Saanp dikha', 60, 110], ['Arousal: dil tez', 250, 50], ['Label: "Ye khatra hai!"', 250, 170], ['Darr', 480, 110]], [[0, 1], [0, 2], [1, 3], [2, 3]], 'Arousal akele emotion nahi batata. Hum situation dekh kar us arousal ko label dete hain. Same arousal party me "excitement" aur saanp ke saamne "darr" ban jaata hai.'],
        ['Lazarus (appraisal)', [['Saanp dikha', 60, 110], ['Appraisal: "Kya ye khatarnak hai?"', 280, 110], ['Darr + body response', 500, 110]], [[0, 1], [1, 2]], 'Pehle (aksar pal bhar me, bina jaane) hum situation ka matlab nikalte hain. Agar plastic ka saanp hai to appraisal "khatra nahi" aur darr nahi aata.']
      ];
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      const draw = (k) => {
        const [, nodes, edges, txt] = T[k];
        let inner = `<defs><marker id="et-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:${LC}"/></marker></defs>`;
        edges.forEach(([a, b], i) => {
          const A = nodes[a], B = nodes[b];
          const wA = Math.max(110, A[0].length * 6.8 + 24) / 2, wB = Math.max(110, B[0].length * 6.8 + 24) / 2;
          inner += `<line class="draw" x1="${A[1] + wA}" y1="${A[2]}" x2="${B[1] - wB - 4}" y2="${B[2]}" style="stroke:${LC};stroke-width:2.5;--delay:${(0.4 + i * .5).toFixed(1)}s;--dur:.6s" marker-end="url(#et-ar)"/>`;
        });
        nodes.forEach(([n, x, y], i) => {
          const w = Math.max(110, n.length * 6.8 + 24);
          const d = (i === 0 ? 0 : 0.2 + (edges.findIndex((e) => e[1] === i)) * .5 + .5).toFixed(1);
          inner += `<g class="pop" style="--delay:${d}s"><rect x="${x - w / 2}" y="${y - 20}" width="${w}" height="40" rx="12" style="fill:${i === nodes.length - 1 ? LC : 'var(--surface-2)'};stroke:var(--line)"/><text class="svg-label" x="${x}" y="${y + 5}" text-anchor="middle" style="font-weight:700;font-size:12px;fill:${i === nodes.length - 1 ? 'var(--surface)' : 'var(--ink)'}">${n}</text></g>`;
        });
        holder.innerHTML = u.svg(620, 220, inner, `aria-label="${T[k][0]} theory flow"`);
        H.setLens(holder.firstChild);
        H.info(stage, `<b>${T[k][0]}</b>: ${txt}`);
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(T.map((t) => t[0]), draw, 0));
      draw(0);
    }
  });

  /* ---------- General Adaptation Syndrome ---------- */
  V('gas', {
    title: 'General Adaptation Syndrome',
    render(stage) {
      const W = 620, Hh = 270, x0 = 50, x1 = 600, y0 = 230, y1 = 20, base = 150;
      const X = (t) => x0 + t * (x1 - x0);
      const pts = [[0, base], [.08, base], [.14, 190], [.2, 110], [.3, 80], [.65, 82], [.75, 120], [.9, 205], [1, 215]];
      let d = `M${X(pts[0][0])},${pts[0][1]}`;
      for (let i = 1; i < pts.length; i++) { const [t, y] = pts[i], [pt, py] = pts[i - 1]; const mx = (X(pt) + X(t)) / 2; d += `C${mx},${py} ${mx},${y} ${X(t)},${y}`; }
      const zones = [[.08, .22, 'Alarm', 'var(--warn)'], [.22, .68, 'Resistance', 'var(--l3)'], [.68, 1, 'Exhaustion', 'var(--bad)']];
      let inner = '';
      zones.forEach(([a, b, n, c], i) => { inner += `<rect class="fade" x="${X(a)}" y="${y1}" width="${X(b) - X(a)}" height="${y0 - y1}" style="fill:${c};opacity:.09;--delay:${(i * .5).toFixed(1)}s"/><text class="svg-label fade" x="${(X(a) + X(b)) / 2}" y="${y1 + 18}" text-anchor="middle" style="font-weight:700;fill:${c};--delay:${(i * .5).toFixed(1)}s">${n}</text>`; });
      inner += `<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" style="stroke:var(--ink-3);stroke-dasharray:5 5"/><text class="svg-small" x="${x0 + 4}" y="${base - 6}">Normal resistance level</text>`;
      inner += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" style="stroke:var(--ink-3)"/><text class="svg-small" x="${(x0 + x1) / 2}" y="${y0 + 22}" text-anchor="middle">Stress jaari rehne ka samay →</text>`;
      inner += `<line x1="${X(.08)}" y1="${y0}" x2="${X(.08)}" y2="${y0 - 10}" style="stroke:var(--ink)"/><text class="svg-small" x="${X(.08)}" y="${y0 + 22}" text-anchor="middle" style="fill:var(--ink)">Stressor!</text>`;
      inner += `<path id="gas-p" class="draw" d="${d}" style="fill:none;stroke:var(--ink);stroke-width:3;--dur:3s"/><circle id="gas-dot" r="7" style="fill:${LC};stroke:var(--surface);stroke-width:3"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="General adaptation syndrome curve"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const p = u.$('#gas-p', svg), dot = u.$('#gas-dot', svg), L = p.getTotalLength();
      const msg = (f) => f < .12 ? '<b>Normal</b>: koi khaas stress nahi.' : f < .25 ? '<b>Alarm</b>: jhatka! Pehle thodi der resistance girti hai (shock), phir adrenaline aur sympathetic system se energy mobilize hoti hai.' : f < .68 ? '<b>Resistance</b>: body stressor se jhoojh rahi hai: cortisol ooncha, normal se zyada effort. Bahar se "sab theek" lag sakta hai par andar resources kharch ho rahe hain.' : '<b>Exhaustion</b>: stress khatam nahi hua to resources khatam: thakaan, baar-baar beemari, burnout, depression ka risk.';
      let last = '';
      const at = (f) => { const pt = p.getPointAtLength(f * L); dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y); const m = msg((pt.x - x0) / (x1 - x0)); if (m !== last) { last = m; H.info(stage, m); } };
      if (u.reduced()) { at(.5); return; }
      return u.loop(stage, (t) => at(((t / 7000) % 1)));
    }
  });

  /* ---------- Piaget staircase ---------- */
  V('piaget', {
    title: 'Piaget ki seedhi',
    render(stage) {
      const S = [
        ['Sensorimotor', '0-2 saal', 'Duniya ko chhoo kar, chakh kar, dekh kar samajhna. <b>Object permanence</b> ~8 mahine tak: chhupa khilona bhi "hai".'],
        ['Preoperational', '2-7 saal', 'Shabd aur pretend play ("ye danda meri talwar hai"), par logic kamzor: egocentrism, animism, conservation nahi.'],
        ['Concrete operational', '7-11 saal', 'Conservation, categories, reversibility. Logic concrete cheezon par chalta hai, abstract par nahi.'],
        ['Formal operational', '12+ saal', 'Abstract aur hypothetical soch: algebra, philosophy, "agar aisa hota to?" aur systematic experiments.']
      ];
      const W = 620, Hh = 300, sw = 140, sh = 50;
      let inner = '';
      S.forEach(([n, age], i) => {
        const x = 30 + i * sw, y = 260 - (i + 1) * sh;
        inner += `<g class="hot pg" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><rect class="pop pg-r" x="${x}" y="${y}" width="${sw}" height="${260 - y}" style="fill:${LC};opacity:${(0.25 + i * .18).toFixed(2)};--delay:${(i * .2).toFixed(1)}s"/><text class="svg-label fade" x="${x + sw / 2}" y="${y + 22}" text-anchor="middle" style="font-weight:700;font-size:12px;--delay:${(i * .2 + .3).toFixed(1)}s">${n.split(' ')[0]}</text>${n.split(' ')[1] ? `<text class="svg-label fade" x="${x + sw / 2}" y="${y + 37}" text-anchor="middle" style="font-weight:700;font-size:12px;--delay:${(i * .2 + .3).toFixed(1)}s">${n.split(' ')[1]}</text>` : ''}<text class="svg-mono" x="${x + sw / 2}" y="282" text-anchor="middle">${age}</text></g>`;
      });
      inner += `<g id="pg-kid" style="transition:transform .7s cubic-bezier(.3,1.4,.5,1)"><circle cx="0" cy="-34" r="9" style="fill:var(--surface);stroke:var(--ink);stroke-width:2.5"/><line x1="0" y1="-25" x2="0" y2="-8" style="stroke:var(--ink);stroke-width:3"/><line x1="0" y1="-8" x2="-7" y2="4" style="stroke:var(--ink);stroke-width:3"/><line x1="0" y1="-8" x2="7" y2="4" style="stroke:var(--ink);stroke-width:3"/><line x1="0" y1="-20" x2="-9" y2="-12" style="stroke:var(--ink);stroke-width:3"/><line x1="0" y1="-20" x2="9" y2="-14" style="stroke:var(--ink);stroke-width:3"/></g>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Piaget stages staircase"');
      const svg = stage.firstChild;
      const kid = u.$('#pg-kid', svg);
      const show = (i) => {
        kid.style.transform = `translate(${30 + i * sw + sw / 2}px, ${260 - (i + 1) * sh - 2}px)`;
        u.$$('.pg-r', svg).forEach((r, k) => { r.style.stroke = k === i ? 'var(--ink)' : 'none'; r.style.strokeWidth = 2; });
        H.info(stage, `<b>${S[i][0]} (${S[i][1]})</b>: ${S[i][2]}`);
      };
      const cyc = autoCycle(4, show, 2600);
      bindPick(svg, '.pg', (i) => { cyc.stop(); show(i); });
      show(0);
      return cyc.stop;
    }
  });

  /* ---------- Erikson timeline ---------- */
  V('erikson', {
    title: 'Erikson ke 8 stages',
    render(stage) {
      const E = [['0-1', 'Trust vs Mistrust', 'Hope'], ['1-3', 'Autonomy vs Shame', 'Will'], ['3-6', 'Initiative vs Guilt', 'Purpose'], ['6-12', 'Industry vs Inferiority', 'Competence'], ['12-18', 'Identity vs Role confusion', 'Fidelity'], ['18-40', 'Intimacy vs Isolation', 'Love'], ['40-65', 'Generativity vs Stagnation', 'Care'], ['65+', 'Integrity vs Despair', 'Wisdom']];
      const W = 640, Hh = 190, x0 = 40, x1 = 600, y = 100;
      const X = (i) => x0 + i * (x1 - x0) / 7;
      let inner = `<line class="draw" x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" style="stroke:var(--line);stroke-width:4;--dur:1.2s"/>`;
      E.forEach(([age], i) => { inner += `<g class="hot er" data-i="${i}" tabindex="0" role="button" aria-label="Stage ${i + 1}"><circle class="pop er-c" cx="${X(i)}" cy="${y}" r="13" style="fill:var(--surface);stroke:${LC};stroke-width:3;--delay:${(i * .12).toFixed(2)}s"/><text class="svg-mono" x="${X(i)}" y="${y + 4}" text-anchor="middle" style="font-size:10px;fill:var(--ink);font-weight:600">${i + 1}</text><text class="svg-mono" x="${X(i)}" y="${y + 34}" text-anchor="middle">${age}</text></g>`; });
      inner += `<g id="er-walk" style="transition:transform .8s ease"><path d="M0 -40 l-9 -14 h18 z" style="fill:${LC}"/></g><text id="er-t" class="svg-title" x="${W / 2}" y="34" text-anchor="middle" style="font-size:16px"></text><text id="er-v" class="svg-small" x="${W / 2}" y="54" text-anchor="middle"></text>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Erikson psychosocial stages timeline"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const walk = u.$('#er-walk', svg);
      const ex = ['Rone par koi pyaar se aata hai to duniya bharosemand lagti hai.', '"Main khud karunga!" Khud joote pehenne dena, chahe ulte pehne.', 'Sawaal aur naye khel; har baar "chup raho" kehne se guilt.', 'School, skills, aur doosron se tulna; "main kisi kaam ka hoon" ka ehsaas.', '"Main kaun hoon? Kya banna hai?" Dost, career, values ki talaash.', 'Gehri dosti aur partner; khud ko khoye bina kisi ke kareeb hona.', 'Bachche, students, samaaj: agli peedhi ke liye kuch chhod jaana.', 'Peeche mud kar zindagi ko dekhna: santosh ya pachhtava.'];
      const show = (i) => {
        walk.style.transform = `translate(${X(i)}px, ${y}px)`;
        u.$('#er-t', svg).textContent = E[i][1];
        u.$('#er-v', svg).textContent = `Umar ${E[i][0]} · Virtue: ${E[i][2]}`;
        u.$$('.er-c', svg).forEach((c, k) => { c.style.fill = k === i ? LC : k < i ? 'var(--surface-2)' : 'var(--surface)'; });
        H.info(stage, `<b>Stage ${i + 1} · ${E[i][1]}</b>: ${ex[i]}`);
      };
      const cyc = autoCycle(8, show, 2400);
      bindPick(svg, '.er', (i) => { cyc.stop(); show(i); });
      show(0);
      return cyc.stop;
    }
  });

  /* ---------- Freud iceberg ---------- */
  V('iceberg', {
    title: 'Freud ka iceberg',
    render(stage) {
      const W = 600, Hh = 360, water = 110;
      const info = [
        ['Conscious', 'Jo abhi aapke dhyan me hai: ye shabd, kursi ka ehsaas, kal ki chinta. Iceberg ka chhota sa sira.'],
        ['Preconscious', 'Abhi dhyan me nahi par aasaani se yaad aa sakta hai: apna pin code, kal raat ka khana.'],
        ['Unconscious', 'Sabse bada hissa: dabi ichchhayein, darr, purane anubhav. Seedhe pahunch me nahi, par Freud ke hisaab se behaviour ko chalata hai.'],
        ['Id', 'Poori tarah unconscious. Turant khushi chahta hai (pleasure principle).'],
        ['Ego', 'Teeno levels me. Reality ke hisaab se id ki ichchhaon ko sambhalta hai (manager).'],
        ['Superego', 'Teeno levels me. Parents aur samaaj se seekhe niyam; guilt aur "chahiye" ki awaaz.']
      ];
      let inner = `<rect x="0" y="${water}" width="${W}" height="${Hh - water}" style="fill:var(--l3);opacity:.12"/>`;
      inner += `<g class="wave"><path d="M-40 ${water} q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" style="fill:none;stroke:var(--l3);stroke-width:2.5;opacity:.6"/></g>`;
      inner += `<g class="float"><polygon points="300,22 350,70 372,${water} 228,${water} 252,64" style="fill:var(--surface);stroke:var(--ink-3);stroke-width:2"/>`;
      inner += `<polygon points="228,${water} 372,${water} 440,170 470,250 430,330 300,350 170,330 130,250 160,170" style="fill:var(--surface);stroke:var(--ink-3);stroke-width:2;opacity:.85"/>`;
      inner += `<line x1="150" y1="165" x2="450" y2="165" style="stroke:var(--ink-3);stroke-dasharray:4 4"/>`;
      inner += `<g class="hot ib" data-i="4" tabindex="0" role="button" aria-label="Ego"><rect x="262" y="58" width="76" height="180" rx="12" style="fill:var(--l5);opacity:.28"/><text class="svg-label" x="300" y="200" text-anchor="middle" style="font-weight:700">EGO</text></g>`;
      inner += `<g class="hot ib" data-i="5" tabindex="0" role="button" aria-label="Superego"><rect x="350" y="80" width="70" height="170" rx="12" style="fill:var(--l4);opacity:.28"/><text class="svg-label" x="385" y="225" text-anchor="middle" style="font-weight:700;font-size:11px">SUPEREGO</text></g>`;
      inner += `<g class="hot ib" data-i="3" tabindex="0" role="button" aria-label="Id"><ellipse cx="300" cy="295" rx="110" ry="36" style="fill:var(--l2);opacity:.3"/><text class="svg-label" x="300" y="300" text-anchor="middle" style="font-weight:700">ID</text></g></g>`;
      [['Conscious', 60], ['Preconscious', 140], ['Unconscious', 270]].forEach(([n, y], i) => { inner += `<g class="hot ib" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><text class="svg-mono" x="20" y="${y}" style="fill:var(--ink);font-weight:600">${n.toUpperCase()}</text></g>`; });
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Freud iceberg model of the mind" style="max-width:560px;margin:0 auto"');
      const svg = stage.firstChild;
      const show = (i) => H.info(stage, `<b>${info[i][0]}</b>: ${info[i][1]}`);
      const cyc = autoCycle(6, show, 2800);
      bindPick(svg, '.ib', (i) => { cyc.stop(); show(i); });
      show(0);
      return cyc.stop;
    }
  });

  /* ---------- Inkblot generator ---------- */
  V('inkblot', {
    title: 'Inkblot banta hai',
    render(stage) {
      const cv = document.createElement('canvas');
      cv.setAttribute('aria-label', 'Randomly generated symmetric inkblot');
      cv.style.borderRadius = '12px';
      stage.appendChild(cv);
      const ctrl = H.ctrl(stage);
      const btn = u.el(`<button class="btn small ghost">${PSY.icon('replay')}Naya inkblot</button>`);
      ctrl.appendChild(btn);
      const answers = ['Do log haath milate hue?', 'Ek titli?', 'Do bhaalu?', 'Ek mask?', 'Ped ke neeche do pakshi?', 'Koi aur cheez?'];
      let stop = null;
      const gen = () => {
        if (stop) stop();
        const { ctx, w, h } = u.fitCanvas(cv, 300);
        const ink = getComputedStyle(cv).getPropertyValue('--ink').trim() || '#111';
        const paper = getComputedStyle(cv).getPropertyValue('--surface').trim() || '#fff';
        ctx.fillStyle = paper; ctx.fillRect(0, 0, w, h);
        const cx = w / 2;
        const seeds = Array.from({ length: 7 }, () => ({ x: u.rand(cx * .25, cx * .98), y: u.rand(h * .15, h * .85), vx: u.rand(-.6, .6), vy: u.rand(-.6, .6), r: u.rand(6, 22) }));
        let n = 0;
        H.info(stage, `Dekhte raho... aapko kya dikh raha hai? ${u.pick(answers)} Rorschach test me jawab se zyada <b>kaise</b> dekha (poora blot, chhota hissa, rang, movement) score kiya jaata hai.`);
        const step = () => {
          ctx.fillStyle = ink;
          ctx.globalAlpha = .9;
          seeds.forEach((s) => {
            for (let k = 0; k < 3; k++) {
              s.x += s.vx + u.rand(-2.5, 2.5); s.y += s.vy + u.rand(-2.5, 2.5);
              s.x = u.clamp(s.x, cx * .15, cx - 2); s.y = u.clamp(s.y, 20, h - 20);
              const r = Math.max(1.5, s.r * u.rand(.4, 1));
              ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, 6.3); ctx.fill();
              ctx.beginPath(); ctx.arc(w - s.x, s.y, r, 0, 6.3); ctx.fill();
              s.r *= .996;
            }
          });
          n++;
        };
        if (u.reduced()) { for (let i = 0; i < 90; i++) step(); return; }
        stop = u.loop(stage, () => { if (n < 90) step(); });
      };
      btn.onclick = gen;
      gen();
      return () => { if (stop) stop(); };
    }
  });

  /* ---------- Big Five radar ---------- */
  V('bigFive', {
    title: 'Big Five profile',
    render(stage) {
      const K = [['O', 'Openness', 'Curious, creative, naye ideas pasand', 'Practical, routine aur jaani-pehchaani cheezein pasand'], ['C', 'Conscientiousness', 'Organized, disciplined, time ke paabandh', 'Spontaneous, flexible, kabhi-kabhi bikhre'], ['E', 'Extraversion', 'Social, bolne wale, logon se energy', 'Shaant, reflective, akele me recharge'], ['A', 'Agreeableness', 'Dayalu, cooperative, bharosa karne wale', 'Seedhe, competitive, skeptical'], ['N', 'Neuroticism', 'Jaldi chinta ya tension', 'Emotionally stable, shaant']];
      const vals = [65, 70, 40, 60, 35];
      const cx = 160, cy = 150, R = 110;
      const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
      stage.innerHTML = `<div class="two-col" style="align-items:center"><div id="bf-svg"></div><div id="bf-sl" style="display:flex;flex-direction:column;gap:10px"></div></div>`;
      const sl = u.$('#bf-sl', stage);
      sl.innerHTML = K.map(([k, n], i) => `<div><div class="row" style="justify-content:space-between"><label for="bf${i}"><b>${k}</b> · ${n}</label><span class="mono" id="bfv${i}">${vals[i]}</span></div><input type="range" id="bf${i}" min="0" max="100" value="${vals[i]}"></div>`).join('');
      let grid = '';
      [.25, .5, .75, 1].forEach((f) => { grid += `<polygon points="${K.map((_, i) => pt(i, R * f).join(',')).join(' ')}" style="fill:none;stroke:var(--line)"/>`; });
      K.forEach(([k], i) => { const [x, y] = pt(i, R + 22); grid += `<line x1="${cx}" y1="${cy}" x2="${pt(i, R)[0]}" y2="${pt(i, R)[1]}" style="stroke:var(--line)"/><text class="svg-label" x="${x}" y="${y + 4}" text-anchor="middle" style="font-weight:700">${k}</text>`; });
      u.$('#bf-svg', stage).innerHTML = u.svg(320, 310, grid + '<polygon id="bf-poly" class="pop" style="fill:' + LC + ';fill-opacity:.28;stroke:' + LC + ';stroke-width:2.5;transition:all .3s"/>', 'aria-label="Big Five radar chart" style="max-width:340px;margin:0 auto"');
      const poly = u.$('#bf-poly', stage);
      const upd = (focus) => {
        poly.setAttribute('points', vals.map((v, i) => pt(i, R * Math.max(.04, v / 100)).join(',')).join(' '));
        K.forEach((_, i) => { u.$('#bfv' + i, stage).textContent = vals[i]; });
        const i = focus;
        if (i !== undefined) { const v = vals[i]; H.info(stage, `<b>${K[i][1]}: ${v}</b> · ${v >= 60 ? K[i][2] : v <= 40 ? K[i][3] : 'Beech me: situation ke hisaab se dono taraf'}. Koi bhi level "achha" ya "bura" nahi; har ek ke apne fayde aur nuksaan hain.`); }
      };
      K.forEach((_, i) => u.$('#bf' + i, stage).addEventListener('input', (e) => { vals[i] = +e.target.value; upd(i); }));
      upd(1);
    }
  });
})();
