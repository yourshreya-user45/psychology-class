/* Motion graphics · part 6 (Level 6: mental health & therapy) */
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
  const cycler = (n, fn, ms) => { let cur = 0; if (u.reduced()) return { stop() {}, set(i) { cur = i; } }; const iv = setInterval(() => { cur = (cur + 1) % n; fn(cur); }, ms); return { stop: () => clearInterval(iv), set(i) { cur = i; } }; };

  /* ---------- Stress bucket (diathesis-stress) ---------- */
  V('diathesis', {
    title: 'Stress bucket',
    render(stage) {
      const W = 560, Hh = 300, cx = 230, bottom = 250, topW = 170, botW = 120;
      stage.innerHTML = u.svg(W, Hh, `
        <defs><clipPath id="db-clip"><path id="db-clip-p"/></clipPath></defs>
        <path id="db-stream" style="fill:var(--l3);opacity:.55"/>
        <text class="svg-small" x="${cx}" y="16" text-anchor="middle" style="fill:var(--ink);font-weight:700">Stress: exam, jhagde, naukri, beemari</text>
        <g clip-path="url(#db-clip)"><rect id="db-water" x="0" width="${W}" style="fill:var(--l3);opacity:.45"/></g>
        <path id="db-bucket" style="fill:none;stroke:var(--ink-2);stroke-width:4;stroke-linejoin:round"/>
        <line id="db-limit" style="stroke:var(--bad);stroke-width:2;stroke-dasharray:5 4"/>
        <g id="db-drops"></g>
        <rect x="${cx + botW / 2 - 6}" y="${bottom - 22}" width="46" height="10" rx="3" style="fill:var(--ink-3)"/><rect x="${cx + botW / 2 + 32}" y="${bottom - 30}" width="8" height="18" rx="2" style="fill:var(--ink-3)"/>
        <path id="db-tap" style="fill:var(--good);opacity:.6"/>
        <text class="svg-small" x="${cx + botW / 2 + 70}" y="${bottom + 30}" style="fill:var(--good);font-weight:700">Coping ka nal</text>
        <text id="db-status" class="svg-title" x="440" y="120" text-anchor="middle" style="font-size:17px"></text>
        <text id="db-sub" class="svg-small" x="440" y="142" text-anchor="middle"></text>`, 'aria-label="Stress bucket simulation"');
      const svg = stage.firstChild;
      const ctrl = H.ctrl(stage);
      ctrl.style.flexDirection = 'column'; ctrl.style.alignItems = 'stretch';
      ctrl.innerHTML = [['dbV', 'Vulnerability (genes, bachpan, personality)', 50], ['dbS', 'Stress kitna aa raha hai', 55], ['dbC', 'Coping aur support (neend, dost, therapy)', 35]].map(([id, l, v]) => `<div><label for="${id}" style="display:flex;justify-content:space-between"><span>${l}</span><b class="mono" id="${id}v">${v}</b></label><input type="range" id="${id}" min="0" max="100" value="${v}"></div>`).join('');
      const val = (id) => +u.$('#' + id, ctrl).value;
      ['dbV', 'dbS', 'dbC'].forEach((id) => u.$('#' + id, ctrl).addEventListener('input', () => { u.$('#' + id + 'v', ctrl).textContent = val(id); }));
      let level = 30, drops = [], lastMsg = '';
      const geom = () => {
        const bh = 190 - val('dbV') * 1.1;
        const top = bottom - bh;
        const p = `M${cx - topW / 2} ${top} L${cx - botW / 2} ${bottom} L${cx + botW / 2} ${bottom} L${cx + topW / 2} ${top}`;
        return { bh, top, p };
      };
      const step = (dt) => {
        const g = geom();
        u.$('#db-bucket', svg).setAttribute('d', g.p);
        u.$('#db-clip-p', svg).setAttribute('d', g.p + ' Z');
        const s = val('dbS'), c = val('dbC');
        u.$('#db-stream', svg).setAttribute('d', `M${cx - 4 - s / 16} 24 L${cx + 4 + s / 16} 24 L${cx + 2 + s / 30} ${g.top + 10} L${cx - 2 - s / 30} ${g.top + 10} Z`);
        u.$('#db-tap', svg).setAttribute('d', c > 2 ? `M${cx + botW / 2 + 32} ${bottom - 12} l8 0 l${2 + c / 40} 40 l-${12 + c / 20} 0 Z` : '');
        level += (s * 0.9 - c * 1.1) * dt * 0.0006 * 100 / Math.max(40, g.bh);
        level = u.clamp(level, 0, 104);
        const waterTop = bottom - g.bh * Math.min(level, 100) / 100;
        const wr = u.$('#db-water', svg); wr.setAttribute('y', waterTop); wr.setAttribute('height', bottom - waterTop + 2);
        const lim = u.$('#db-limit', svg); lim.setAttribute('x1', cx - topW / 2 - 12); lim.setAttribute('x2', cx + topW / 2 + 12); lim.setAttribute('y1', g.top); lim.setAttribute('y2', g.top);
        if (level >= 100 && Math.random() < dt / 60) drops.push({ x: cx + (Math.random() < .5 ? -1 : 1) * topW / 2, y: g.top, vx: (Math.random() < .5 ? -1 : 1) * u.rand(.03, .08), vy: 0 });
        drops.forEach((d) => { d.vy += .0009 * dt; d.x += d.vx * dt; d.y += d.vy * dt; });
        drops = drops.filter((d) => d.y < Hh);
        u.$('#db-drops', svg).innerHTML = drops.map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="4" style="fill:var(--l3)"/>`).join('');
        const st = level >= 100 ? 'over' : level > 75 ? 'near' : 'ok';
        const status = u.$('#db-status', svg), sub = u.$('#db-sub', svg);
        status.textContent = st === 'over' ? 'Chhalak raha hai!' : st === 'near' ? 'Seema ke paas' : 'Sambhla hua';
        status.style.fill = st === 'over' ? 'var(--bad)' : st === 'near' ? 'var(--warn)' : 'var(--good)';
        sub.textContent = st === 'over' ? 'symptoms: neend, mood, anxiety' : `Balti ${Math.round(level)}% bhari`;
        const msg = st === 'over' ? '<b>Overflow = symptoms</b>. Stress coping se zyada hai aur balti chhoti hai. Raaste: stress ghatao (jahan ho sake), coping ka nal kholo (neend, support, therapy), aur dawai/therapy se vulnerability ka asar bhi kam kiya ja sakta hai.' : st === 'near' ? '<b>Seema ke paas</b>: chhota sa extra stress bhi balti chhalka sakta hai. Ye "warning zone" hai: coping badhane ka sahi samay.' : '<b>Sambhla hua</b>: stress aa raha hai par coping use nikaal rahi hai. Dhyan do: badi balti (kam vulnerability) zyada stress jhel leti hai, chhoti balti kam me bhi bhar jaati hai.';
        if (msg !== lastMsg) { lastMsg = msg; H.info(stage, msg); }
      };
      if (u.reduced()) { level = 60; step(16); return; }
      return u.loop(stage, (t, dt) => step(dt));
    }
  });

  /* ---------- Panic cycle ---------- */
  V('panicCycle', {
    title: 'Panic ka chakra',
    render(stage) {
      const N = [['Trigger', 'Seedhiyan chadhi, chai pi, ya stress'], ['Body sensation', 'Dil tez, saans tez, chakkar'], ['Interpretation', '"Heart attack aa raha hai!"'], ['Darr badha', 'Adrenaline aur badha'], ['Aur sensations', 'Dil aur tez, haath kaanpe']];
      const W = 600, Hh = 330, cx = 300, cy = 170, R = 120;
      const pos = N.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / N.length; return [cx + R * Math.cos(a) * 1.25, cy + R * Math.sin(a)]; });
      let inner = `<defs><marker id="pc-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--bad)"/></marker></defs>`;
      N.forEach((_, i) => { const a = pos[i], b = pos[(i + 1) % N.length]; const mx = (a[0] + b[0]) / 2 + (cx - (a[0] + b[0]) / 2) * -.25, my = (a[1] + b[1]) / 2 + (cy - (a[1] + b[1]) / 2) * -.25; inner += `<path class="pc-e" data-i="${i}" d="M${a[0]} ${a[1]} Q${mx} ${my} ${b[0]} ${b[1]}" style="fill:none;stroke:var(--bad);stroke-width:2.5;opacity:.6" marker-end="url(#pc-ar)"/>`; });
      N.forEach(([n, d], i) => { const [x, y] = pos[i]; inner += `<g class="pc-n" data-i="${i}"><rect x="${x - 88}" y="${y - 24}" width="176" height="48" rx="12" style="fill:var(--surface);stroke:var(--line);stroke-width:2;transition:all .4s"/><text class="svg-label" x="${x}" y="${y - 4}" text-anchor="middle" style="font-weight:700;font-size:12px">${n}</text><text class="svg-small pc-d" x="${x}" y="${y + 13}" text-anchor="middle" style="font-size:10px">${d}</text></g>`; });
      inner += `<circle id="pc-dot" r="7" style="fill:var(--bad)"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Panic attack vicious cycle"');
      const svg = stage.firstChild;
      let cbt = false;
      const set = (k) => {
        cbt = k === 1;
        const nodes = u.$$('.pc-n', svg);
        u.$('.pc-d', nodes[2]).textContent = cbt ? '"Ye adrenaline hai, khatra nahi"' : '"Heart attack aa raha hai!"';
        u.$('rect', nodes[2]).style.stroke = cbt ? 'var(--good)' : 'var(--bad)';
        u.$('rect', nodes[2]).style.strokeWidth = 3;
        u.$$('.pc-e', svg).forEach((e, i) => { e.style.opacity = cbt && i >= 2 ? .12 : .6; });
        [3, 4].forEach((i) => { nodes[i].style.opacity = cbt ? .3 : 1; });
        H.info(stage, cbt ? '<b>CBT ke baad</b>: vyakti ne seekha ki tez dhadkan exercise ya chai jaisi hi normal body reaction hai. Khatarnak interpretation nahi to darr nahi badhta, aur chakra wahi toot jaata hai. (Interoceptive exposure me jaanbujh kar dil tez karke ye practice ki jaati hai.)' : '<b>Panic ka chakra</b>: ek normal body sensation ko "khatra" samajhna darr badhata hai, darr adrenaline badhata hai, adrenaline aur sensations laata hai, jo aur darr paida karte hain. Kuch minute me ye chakra chhoti par pahunch jaata hai.');
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Panic ka chakra', 'CBT ke baad'], set, 0));
      set(0);
      if (u.reduced()) return;
      const dot = u.$('#pc-dot', svg), edges = u.$$('.pc-e', svg);
      return u.loop(stage, (t) => {
        const n = cbt ? 2 : 5;
        const f = ((t / 1100) % n);
        const i = Math.floor(f), fr = f - i;
        const e = edges[i];
        const L = e.getTotalLength();
        const p = e.getPointAtLength(fr * L);
        dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y);
        dot.style.fill = cbt ? 'var(--good)' : 'var(--bad)';
      });
    }
  });

  /* ---------- Mood patterns ---------- */
  V('moodChart', {
    title: 'Mood ke patterns',
    render(stage) {
      const W = 620, Hh = 280, x0 = 90, x1 = 600, ymid = 140;
      const Y = (m) => ymid - m * 28;
      const T = 52;
      const X = (w) => x0 + w / T * (x1 - x0);
      const wiggle = (w, a = .5) => Math.sin(w * 1.3) * a * .6 + Math.sin(w * .47 + 1) * a * .4;
      const sm = (x, a, b) => { const t = u.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
      const bump = (w, a, b, ramp = 2) => sm(w, a - ramp, a) * (1 - sm(w, b, b + ramp));
      const P = [
        ['Aam utaar-chadhav', (w) => wiggle(w, .9), 'Har insaan ka mood upar-neeche hota hai: achha din, bura din. Ye "normal range" me rehta hai aur zindagi chalti rehti hai.'],
        ['Depression', (w) => -2.6 * bump(w, 13, 32, 3) + wiggle(w, .6), '<b>Major depressive episode</b>: hafton-mahino tak mood gehra neeche, aur normal range me laut-ne ka naam nahi. Ilaaj se aam taur par mood dheere-dheere wapas aata hai.'],
        ['Bipolar I', (w) => 3.6 * bump(w, 9, 14, 1.5) - 2.7 * bump(w, 25, 35, 2.5) + wiggle(w, .4), '<b>Bipolar I</b>: kam se kam ek <b>mania</b> episode (mood bahut ooncha ya chidchida, neend kam, risky kaam), aur aksar depression episodes bhi.'],
        ['Bipolar II', (w) => 1.9 * bump(w, 6, 9, 1) + 1.9 * bump(w, 37, 40, 1) - 2.6 * bump(w, 14, 27, 2.5) + wiggle(w, .4), '<b>Bipolar II</b>: chhote, halke <b>hypomania</b> episodes aur gehre depression episodes. Hypomania aksar "achha mood" samajh kar miss ho jaata hai.'],
        ['Cyclothymia', (w) => Math.sin(w * .55) * 1.4 + wiggle(w, .3), '<b>Cyclothymia</b>: 2+ saal tak halke ups aur downs jo poore episodes tak nahi pahunchte, par lagataar hote rehte hain.']
      ];
      const bands = [[3, 4.2, 'Mania', 'var(--bad)'], [1.5, 3, 'Hypomania', 'var(--warn)'], [-1.5, 1.5, 'Normal range', 'var(--good)'], [-4.2, -1.5, 'Depression', 'var(--l3)']];
      let base = '';
      bands.forEach(([a, b, n, c]) => { base += `<rect x="${x0}" y="${Y(b)}" width="${x1 - x0}" height="${Y(a) - Y(b)}" style="fill:${c};opacity:.08"/><text class="svg-small" x="${x0 - 8}" y="${(Y(a) + Y(b)) / 2 + 4}" text-anchor="end" style="fill:${c};font-weight:700">${n}</text>`; });
      base += `<line x1="${x0}" y1="${ymid}" x2="${x1}" y2="${ymid}" style="stroke:var(--line)"/><text class="svg-small" x="${(x0 + x1) / 2}" y="${Hh - 6}" text-anchor="middle">Samay (hafte) → · illustrative patterns</text>`;
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      const draw = (k) => {
        const f = P[k][1];
        let d = '';
        for (let w = 0; w <= T; w += .25) d += (d ? 'L' : 'M') + X(w).toFixed(1) + ',' + Y(u.clamp(f(w), -4, 4)).toFixed(1);
        holder.innerHTML = u.svg(W, Hh, base + `<path class="draw" d="${d}" style="fill:none;stroke:var(--ink);stroke-width:2.5;--dur:2.4s"/>`, 'aria-label="Mood over time pattern"');
        H.setLens(holder.firstChild);
        H.info(stage, `<b>${P[k][0]}</b>: ${P[k][2]}`);
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(P.map((p) => p[0]), draw, 1));
      draw(1);
    }
  });

  /* ---------- Schizophrenia symptoms ---------- */
  V('schizSymptoms', {
    title: 'Symptoms ke teen group',
    render(stage) {
      const G = [
        ['Positive', 'var(--bad)', [['Hallucinations', 'Aisi awaazein sunna jo doosron ko nahi sunti, aksar comment karti ya order deti hui. Kabhi dekhna ya sparsh bhi.'], ['Delusions', 'Pakke galat vishwas: "log mere khilaf saazish kar rahe hain", "radio mere liye secret message deta hai".'], ['Disorganized speech', 'Baat ek topic se doosre par bina jodd ke kood jaana; kabhi shabdon ka matlab-heen mel.']]],
        ['Negative', 'var(--l3)', [['Flat affect', 'Chehre aur awaaz me emotion bahut kam dikhna.'], ['Avolition', 'Kaam shuru karne aur jaari rakhne ki motivation khatam; nahana-khana bhi mushkil.'], ['Social withdrawal', 'Logon se katna, baatcheet bahut kam (alogia).']]],
        ['Cognitive', 'var(--l5)', [['Attention', 'Dhyan tikane me mushkil.'], ['Working memory', 'Information ko mann me rakh kar use karna mushkil (jaise instructions follow karna).'], ['Executive function', 'Planning aur faisle lene me dikkat; naukri aur padhai par sabse zyada asar.']]]
      ];
      stage.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px">${G.map(([n, c, items], gi) => `<div style="display:flex;flex-direction:column;gap:8px"><div class="mono" style="font-size:.75rem;letter-spacing:.1em;color:${c};font-weight:700">${n.toUpperCase()}</div>${items.map(([t], ii) => `<button class="sz" data-i="${gi * 3 + ii}" style="all:unset;box-sizing:border-box;cursor:pointer;padding:10px 12px;border-radius:12px;border:2px solid var(--line);background:var(--surface);font-weight:700;font-size:.92rem;transition:all .3s">${t}</button>`).join('')}</div>`).join('')}</div>`;
      const flat = G.flatMap(([n, c, items]) => items.map(([t, d]) => [n, c, t, d]));
      const show = (i) => {
        u.$$('.sz', stage).forEach((b, k) => { b.style.borderColor = k === i ? flat[i][1] : 'var(--line)'; b.style.background = k === i ? 'var(--surface-2)' : 'var(--surface)'; });
        H.info(stage, `<b style="color:${flat[i][1]}">${flat[i][0]} · ${flat[i][2]}</b>: ${flat[i][3]}`);
      };
      const cyc = cycler(flat.length, show, 2600);
      bindPick(stage, '.sz', (i) => { cyc.stop(); show(i); });
      show(0);
      return cyc.stop;
    }
  });

  /* ---------- Autism spectrum profiles ---------- */
  V('spectrum', {
    title: 'Spectrum ek line nahi',
    render(stage) {
      const A = ['Social baatcheet', 'Sensory sensitivity', 'Routine', 'Special interests', 'Motor skills', 'Bhasha'];
      const people = [
        ['Aarav (8)', [.8, .9, .7, .5, .4, .3], 'Bolna kam, awaaz aur roshni se bahut pareshani, routine badalne par meltdown. Visual schedules aur speech therapy se bahut madad.'],
        ['Zoya (15)', [.6, .4, .5, .95, .3, .9], 'Bahut achhi bhasha, trains ke baare me encyclopaedia jaisa gyaan, par doston ke jokes aur hints samajhne me dikkat.'],
        ['Kabir (27)', [.5, .8, .9, .6, .7, .7], 'Software engineer, detail me kamaal; open-plan office ka shor aur achanak meeting badalna sabse mushkil. Headphones aur written agenda se kaam aasaan.']
      ];
      const cx = 210, cy = 160, R = 110;
      const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / A.length; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
      let grid = '';
      [.25, .5, .75, 1].forEach((f) => { grid += `<polygon points="${A.map((_, i) => pt(i, R * f).join(',')).join(' ')}" style="fill:none;stroke:var(--line)"/>`; });
      A.forEach((n, i) => { const [x, y] = pt(i, R + 18); grid += `<line x1="${cx}" y1="${cy}" x2="${pt(i, R)[0]}" y2="${pt(i, R)[1]}" style="stroke:var(--line)"/><text class="svg-small" x="${x}" y="${y + 4}" text-anchor="${x < cx - 10 ? 'end' : x > cx + 10 ? 'start' : 'middle'}" style="fill:var(--ink);font-weight:700">${n}</text>`; });
      stage.innerHTML = u.svg(420, 320, grid + `<polygon id="sp-poly" style="fill:${LC};fill-opacity:.25;stroke:${LC};stroke-width:2.5;transition:all .9s cubic-bezier(.4,0,.2,1)"/>`, 'aria-label="Different autism profiles on a radar chart" style="max-width:460px;margin:0 auto"');
      const svg = stage.firstChild;
      const poly = u.$('#sp-poly', svg);
      const show = (k) => {
        poly.setAttribute('points', people[k][1].map((v, i) => pt(i, R * v).join(',')).join(' '));
        H.info(stage, `<b>${people[k][0]}</b>: ${people[k][2]} <br><span class="muted">Teeno autistic hain, par profile bilkul alag. "Thoda" ya "zyada" autism se zyada sahi sawaal hai: is vyakti ko kahan aur kitna support chahiye? (Illustrative examples)</span>`);
      };
      const ctrl = H.ctrl(stage);
      const seg = H.seg(people.map((p) => p[0]), (k) => { cyc.stop(); show(k); }, 0);
      ctrl.appendChild(seg);
      const cyc = cycler(3, (k) => { u.$$('button', seg).forEach((b, i) => b.classList.toggle('on', i === k)); show(k); }, 3200);
      show(0);
      return cyc.stop;
    }
  });

  /* ---------- CBT triangle ---------- */
  V('cbtTriangle', {
    title: 'Cognitive triangle',
    render(stage) {
      const ex = [
        ['Dost ne 5 ghante se message ka jawab nahi diya.', ['"Wo mujhse naraz hai, maine kuch galat kaha hoga."', 'Chinta, udaasi', 'Baar-baar phone check, khud bhi door ho jaana'], ['"Shayad wo busy hai; kal baat karenge."', 'Thodi curiosity, shaant', 'Apna kaam jaari, kal casually message']],
        ['Boss ne kaha "kal meeting me milna".', ['"Naukri jaane wali hai."', 'Darr, pet me gadbad', 'Raat bhar neend nahi, meeting me ghabrahat'], ['"Ho sakta hai project ki baat ho; dekhte hain."', 'Halki ghabrahat par sambhali hui', 'Notes taiyaar kiye, achhi neend']],
        ['Gym me pehla din, sab fit dikh rahe the.', ['"Sab mujhe dekh kar hans rahe honge."', 'Sharam', 'Jaldi nikal gaye, dobara nahi gaye'], ['"Sab apne workout me busy hain (spotlight effect)."', 'Halki awkwardness, josh', '20 minute workout poora kiya']]
      ];
      const W = 600, Hh = 320;
      const P = [[300, 50], [110, 270], [490, 270]];
      const lab = ['THOUGHTS (vichaar)', 'FEELINGS (bhaavna)', 'BEHAVIOURS (kaam)'];
      let inner = `<defs><marker id="ct-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:${LC}"/></marker></defs>`;
      [[0, 1], [1, 2], [2, 0]].forEach(([a, b]) => { const A = P[a], B = P[b]; inner += `<path class="ct-e" d="M${A[0] + (B[0] - A[0]) * .22} ${A[1] + (B[1] - A[1]) * .22} L${A[0] + (B[0] - A[0]) * .78} ${A[1] + (B[1] - A[1]) * .78}" style="stroke:${LC};stroke-width:3;stroke-dasharray:8 6" marker-end="url(#ct-ar)"/>`; });
      P.forEach(([x, y], i) => { inner += `<text class="svg-mono" x="${x}" y="${y - 26}" text-anchor="middle" style="fill:${LC};font-weight:700">${lab[i]}</text><foreignObject x="${x - 105}" y="${y - 18}" width="210" height="64"><div xmlns="http://www.w3.org/1999/xhtml" class="ct-t" style="font-size:12.5px;line-height:1.35;text-align:center;font-weight:700;background:var(--surface-2);border-radius:10px;padding:6px 8px;color:var(--ink);transition:opacity .4s"></div></foreignObject>`; });
      stage.innerHTML = `<style>.ct-e{animation:ctFlow 1.2s linear infinite}@keyframes ctFlow{to{stroke-dashoffset:-28}}</style><div id="ct-sit" class="card" style="padding:10px 14px;background:var(--surface-2);border:0;font-size:.95rem;margin-bottom:6px"></div>` + u.svg(W, Hh, inner, 'aria-label="CBT cognitive triangle"');
      const svg = stage.querySelector('svg');
      let k = 0, alt = 0;
      const show = () => {
        const [sit, a, b] = ex[k];
        const set = alt ? b : a;
        u.$('#ct-sit', stage).innerHTML = `<b>Situation:</b> ${sit}`;
        u.$$('.ct-t', svg).forEach((d, i) => { d.style.opacity = 0; setTimeout(() => { d.textContent = set[i]; d.style.opacity = 1; d.style.background = alt ? 'var(--good-soft)' : 'var(--surface-2)'; }, 200); });
        H.info(stage, alt ? '<b>Balanced thought ke saath</b>: situation wahi, par vichaar badla, to feeling aur behaviour bhi badal gaye. CBT me yahi practice karte hain: vichaar ko saboot ke saath jaanchna.' : '<b>Automatic negative thought ke saath</b>: ek vichaar ne bhaari feeling paida ki, feeling ne behaviour badla, aur behaviour ne vichaar ko aur "sach" bana diya. Ek band chakra.');
      };
      const ctrl = H.ctrl(stage);
      const seg = H.seg(['Pehle (automatic thought)', 'CBT ke baad (balanced)'], (i) => { alt = i; show(); stop(); }, 0);
      ctrl.appendChild(seg);
      const nx = u.el(`<button class="btn small ghost">Agla example ${PSY.icon('right')}</button>`);
      nx.onclick = () => { k = (k + 1) % ex.length; show(); stop(); };
      ctrl.appendChild(nx);
      show();
      let iv = null;
      const stop = () => { if (iv) clearInterval(iv); iv = null; };
      if (!u.reduced()) iv = setInterval(() => { alt = 1 - alt; if (!alt) k = (k + 1) % ex.length; u.$$('button', seg).forEach((b, i) => b.classList.toggle('on', i === alt)); show(); }, 4200);
      return stop;
    }
  });

  /* ---------- Exposure therapy curve ---------- */
  V('exposure', {
    title: 'Avoidance vs exposure',
    render(stage) {
      const W = 620, Hh = 280, x0 = 56, x1 = 600, y0 = 230, y1 = 20;
      const Y = (a) => y0 - a / 100 * (y0 - y1);
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      const axes = () => {
        let s = '';
        [0, 25, 50, 75, 100].forEach((p) => { s += `<line x1="${x0}" y1="${Y(p)}" x2="${x1}" y2="${Y(p)}" style="stroke:var(--line)"/><text class="svg-mono" x="${x0 - 8}" y="${Y(p) + 4}" text-anchor="end">${p}</text>`; });
        s += `<text class="svg-small" x="${x0}" y="${y0 + 22}">Samay →</text><text class="svg-small" x="14" y="${(y0 + y1) / 2}" text-anchor="middle" transform="rotate(-90 14 ${(y0 + y1) / 2})">Darr (0-100)</text>`;
        return s;
      };
      const curve = (sx, w, peak, end, escape) => {
        let d = '';
        for (let t = 0; t <= 1.0001; t += .02) {
          let a;
          if (escape) a = t < .35 ? 15 + (peak - 15) * Math.sin(t / .35 * Math.PI / 2) : t < .42 ? peak - (peak - 12) * (t - .35) / .07 : 12;
          else a = t < .25 ? 15 + (peak - 15) * Math.sin(t / .25 * Math.PI / 2) : end + (peak - end) * Math.exp(-(t - .25) * 3.2);
          d += (d ? 'L' : 'M') + (sx + t * w).toFixed(1) + ',' + Y(a).toFixed(1);
        }
        return d;
      };
      const modes = [
        ['Avoidance', () => { const w = (x1 - x0) / 3 - 12; return [0, 1, 2].map((i) => `<path class="draw" d="${curve(x0 + 6 + i * (w + 12), w, 82, 12, true)}" style="fill:none;stroke:var(--bad);stroke-width:3;--delay:${i * .8}s;--dur:1.2s"/><text class="svg-small" x="${x0 + 6 + i * (w + 12) + w * .35}" y="${Y(86)}" text-anchor="middle" style="fill:var(--bad);font-weight:700">bhaag gaye</text>`).join(''); }, '<b>Avoidance</b>: darr badhte hi situation se bhaag gaye, turant rahat mili. Par agli baar darr <b>utna hi</b> ooncha, kyunki brain ne kabhi seekha hi nahi ki tik kar dekha jaaye to darr apne aap girta hai. Rahat ne bhaagne ki aadat ko reinforce kiya.'],
        ['Exposure (3 sessions)', () => { const w = (x1 - x0) / 3 - 12; return [[78, 25], [58, 18], [38, 12]].map(([pk, en], i) => `<path class="draw" d="${curve(x0 + 6 + i * (w + 12), w, pk, en, false)}" style="fill:none;stroke:var(--good);stroke-width:3;--delay:${i * .8}s;--dur:1.6s"/><text class="svg-small" x="${x0 + 6 + i * (w + 12) + w * .3}" y="${Y(pk + 6)}" text-anchor="middle" style="fill:var(--good);font-weight:700">session ${i + 1}</text>`).join(''); }, '<b>Exposure</b>: situation me tike rahe (safe tareeke se). Darr peak par pahunch kar <b>apne aap</b> girne laga. Har agle session me peak chhota aur girna jaldi. Brain ne naya seekha: "ye situation itni khatarnak nahi".']
      ];
      const draw = (k) => { holder.innerHTML = u.svg(W, Hh, axes() + modes[k][1](), 'aria-label="Anxiety over time with avoidance or exposure"'); H.setLens(holder.firstChild); H.info(stage, modes[k][2]); };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(modes.map((m) => m[0]), draw, 1));
      draw(1);
    }
  });

  /* ---------- ALGEE ---------- */
  V('algee', {
    title: 'ALGEE action plan',
    render(stage) {
      const S = [
        ['A', 'Approach', '"Hey, kaafi dino se tum thode chup lag rahe ho. Sab theek hai? Baat karna chahoge?"', 'Shaant jagah aur samay chuno. Khatre ke signs par dhyan do.'],
        ['L', 'Listen', '"Hmm... ye sach me bhaari lag raha hoga. Aur batao, main sun raha hoon."', 'Beech me salah ya judgement nahi. Feelings ko maan do.'],
        ['G', 'Give support', '"Ye tumhari kamzori nahi hai. Bahut log aisa mehsoos karte hain aur madad se behtar hote hain."', 'Ummeed aur sahi jaankari do.'],
        ['E', 'Encourage help', '"Kya hum saath me Tele-MANAS (14416) par call karein? Ya main tumhare saath counsellor ke paas chalun?"', 'Professional madad ki taraf dheere se badhao.'],
        ['E', 'Encourage support', '"Kal shaam walk par chalein? Aur jab bhi mann ho, mujhe message kar dena."', 'Dost, parivaar, neend, routine: aur support jodo.']
      ];
      stage.innerHTML = `<div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start">
        <div style="display:flex;flex-direction:column;gap:8px">${S.map(([l, n], i) => `<button class="al" data-i="${i}" style="all:unset;cursor:pointer;display:flex;align-items:center;gap:10px"><span class="al-c" style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-family:var(--font-display);font-weight:800;font-size:1.2rem;border:2px solid var(--line);background:var(--surface);transition:all .3s">${l}</span><span style="font-weight:700;font-size:.9rem">${n}</span></button>`).join('')}</div>
        <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
          <div style="align-self:flex-start;max-width:90%;background:var(--surface-2);border-radius:16px 16px 16px 4px;padding:10px 14px;font-size:.95rem">"Yaar, sab kuch bekaar lagta hai. Kuch samajh nahi aa raha."</div>
          <div id="al-msg" style="align-self:flex-end;max-width:90%;background:${LC};color:var(--surface);border-radius:16px 16px 4px 16px;padding:10px 14px;font-size:.95rem;transition:opacity .35s"></div>
        </div></div>`;
      const msg = u.$('#al-msg', stage);
      const show = (i) => {
        u.$$('.al-c', stage).forEach((c, k) => { c.style.background = k === i ? LC : k < i ? 'var(--surface-2)' : 'var(--surface)'; c.style.color = k === i ? 'var(--surface)' : 'var(--ink)'; c.style.borderColor = k === i ? LC : 'var(--line)'; });
        msg.style.opacity = 0;
        setTimeout(() => { msg.textContent = S[i][2]; msg.style.opacity = 1; }, 180);
        H.info(stage, `<b>${S[i][0]}: ${S[i][1]}</b>. ${S[i][3]}`);
      };
      const cyc = cycler(5, show, 3400);
      bindPick(stage, '.al', (i) => { cyc.stop(); show(i); });
      show(0);
      return cyc.stop;
    }
  });
})();
