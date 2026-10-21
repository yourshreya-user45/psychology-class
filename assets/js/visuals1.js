/* Motion graphics · part 1 (Levels 1-2). Each visual: { title, render(stage) -> optional stop() } */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u } = PSY;
  const V = PSY.visual;
  const cssv = (el, n) => getComputedStyle(el).getPropertyValue(n).trim();

  /* shared helpers, exported for other visual files */
  const H = (PSY.vh = {
    seg(options, onPick, initial = 0) {
      const box = u.el(`<div class="seg" role="tablist">${options.map((o, i) => `<button role="tab" data-i="${i}" class="${i === initial ? 'on' : ''}">${o}</button>`).join('')}</div>`);
      box.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        u.$$('button', box).forEach((x) => x.classList.toggle('on', x === b));
        onPick(+b.dataset.i);
      });
      return box;
    },
    info(stage, html) {
      let el = u.$('.vis-info', stage);
      if (!el) { el = u.el('<div class="vis-info" aria-live="polite"></div>'); stage.appendChild(el); }
      el.innerHTML = html;
      return el;
    },
    ctrl(stage) { const c = u.el('<div class="vis-ctrl"></div>'); stage.appendChild(c); return c; },
    setLens(svg) { u.$$('.draw', svg).forEach((p) => { if (p.getTotalLength) { const L = Math.ceil(p.getTotalLength()); p.style.setProperty('--len', L); } }); },
    wide(stage, minW) { const w = u.el(`<div style="overflow-x:auto;-webkit-overflow-scrolling:touch"><div style="min-width:${minW}px"></div></div>`); stage.appendChild(w); return w.firstChild; },
    normal: (x, m = 0, s = 1) => Math.exp(-0.5 * ((x - m) / s) ** 2) / (s * Math.sqrt(2 * Math.PI))
  });

  /* ---------- Neural network canvas (hero + chapter 1) ---------- */
  PSY.neural = function (cv, opts = {}) {
    const hero = !!opts.hero;
    const H0 = hero ? Math.max(cv.parentElement.clientHeight, 320) : 260;
    let { ctx, w, h } = u.fitCanvas(cv, H0);
    const count = Math.round(u.clamp(w / (hero ? 16 : 14), 26, 80));
    const nodes = Array.from({ length: count }, () => ({ x: u.rand(0, w), y: u.rand(0, h), vx: u.rand(-.15, .15), vy: u.rand(-.15, .15), glow: 0 }));
    const pulses = [];
    const D = hero ? 130 : 110;
    const col = () => ({
      line: hero ? cssv(cv, '--accent') : cssv(cv, '--ink-3'),
      node: hero ? cssv(cv, '--on-deep') : cssv(cv, '--ink-2'),
      pulse: hero ? cssv(cv, '--accent') : (cssv(cv, '--lc') || cssv(cv, '--accent'))
    });
    let C = col();
    const neighbours = (n) => nodes.filter((m) => m !== n && Math.hypot(m.x - n.x, m.y - n.y) < D);
    const fire = (n, depth = 0) => {
      n.glow = 1;
      if (depth > 3) return;
      neighbours(n).slice(0, 2).forEach((m) => pulses.push({ a: n, b: m, t: 0, depth }));
    };
    const draw = (dt) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < D) {
            ctx.globalAlpha = (1 - d / D) * (hero ? .35 : .4);
            ctx.strokeStyle = C.line;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += dt / 520;
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.globalAlpha = 1;
        ctx.fillStyle = C.pulse;
        ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 6.3); ctx.fill();
        if (p.t >= 1) { pulses.splice(k, 1); if (Math.random() < .8) fire(p.b, p.depth + 1); }
      }
      nodes.forEach((n) => {
        ctx.globalAlpha = .9;
        ctx.fillStyle = n.glow > .05 ? C.pulse : C.node;
        const r = 2 + n.glow * 3;
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 6.3); ctx.fill();
        if (n.glow > .05) { ctx.globalAlpha = n.glow * .25; ctx.beginPath(); ctx.arc(n.x, n.y, r * 3, 0, 6.3); ctx.fill(); }
        n.glow *= .94;
      });
      ctx.globalAlpha = 1;
    };
    const step = (t, dt) => {
      nodes.forEach((n) => {
        n.x += n.vx * dt * .06; n.y += n.vy * dt * .06;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
      if (pulses.length < 30 && Math.random() < dt / 900) fire(u.pick(nodes));
      draw(dt);
    };
    if (u.reduced()) { fire(nodes[0]); draw(16); return () => {}; }
    for (let i = 0; i < 3; i++) fire(u.pick(nodes));
    const stop = u.loop(cv, step);
    let ro = null;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        const r = u.fitCanvas(cv, hero ? Math.max(cv.parentElement.clientHeight, 320) : 260);
        ctx = r.ctx; w = r.w; h = r.h; C = col();
      });
      ro.observe(cv.parentElement);
    }
    const mo = new MutationObserver(() => { C = col(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => { stop(); if (ro) ro.disconnect(); mo.disconnect(); };
  };
  V('neuralNet', {
    title: 'Neural network',
    render(stage) {
      const cv = document.createElement('canvas');
      cv.setAttribute('aria-label', 'Animated network of neurons firing');
      stage.appendChild(cv);
      return PSY.neural(cv, {});
    }
  });

  /* ---------- History timeline ---------- */
  V('timeline', {
    title: 'Psychology ka safar',
    render(stage) {
      const ev = [
        [1879, 'Wundt ki lab', 'Leipzig me pehli experimental psychology lab. Introspection aur reaction time ke experiments. Structuralism ki shuruaat.'],
        [1890, 'William James', '<i>Principles of Psychology</i>. Functionalism: mind ke processes kis kaam aate hain?'],
        [1900, 'Freud', '<i>The Interpretation of Dreams</i>. Unconscious mind aur psychoanalysis.'],
        [1913, 'Watson', 'Behaviorist manifesto: sirf observable behaviour ka study.'],
        [1938, 'Skinner', '<i>The Behavior of Organisms</i>. Operant conditioning: reward aur punishment.'],
        [1951, 'Rogers', 'Client-centered therapy. Maslow ke saath humanistic "third force".'],
        [1967, 'Neisser', '<i>Cognitive Psychology</i> book. Mind as information processor.'],
        [1990, 'Decade of the Brain', 'Brain imaging (fMRI) ka boom. Neuroscience aur psychology ka milan.'],
        [1998, 'Seligman', 'Positive psychology: kya cheez zindagi ko achha banati hai?']
      ];
      const W = 1100, Hh = 220, x0 = 50, x1 = 1050, y = 110;
      const X = (yr) => x0 + (yr - 1870) / (2010 - 1870) * (x1 - x0);
      const lc = 'var(--lc, var(--accent))';
      let inner = `<line class="draw" x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" style="stroke:var(--line);stroke-width:3;--dur:1.6s"/>`;
      [1880, 1900, 1920, 1940, 1960, 1980, 2000].forEach((yr) => { inner += `<text class="svg-mono fade" x="${X(yr)}" y="${y + 74}" text-anchor="middle" style="--delay:.4s">${yr}</text><line x1="${X(yr)}" y1="${y - 4}" x2="${X(yr)}" y2="${y + 4}" style="stroke:var(--ink-3)"/>`; });
      ev.forEach(([yr, name], i) => {
        const up = i % 2 === 0, x = X(yr), d = (0.5 + i * 0.28).toFixed(2);
        const ly = up ? y - 46 : y + 46;
        inner += `<g class="hot tl-ev" data-i="${i}" tabindex="0" role="button" aria-label="${yr} ${name}">
          <line x1="${x}" y1="${y}" x2="${x}" y2="${up ? y - 30 : y + 30}" class="fade" style="stroke:${lc};stroke-width:1.5;--delay:${d}s"/>
          <circle class="pop" cx="${x}" cy="${y}" r="8" style="fill:${lc};--delay:${d}s"/>
          <text class="svg-mono fade" x="${x}" y="${up ? ly - 14 : ly + 4}" text-anchor="middle" style="fill:${lc};font-weight:700;--delay:${d}s">${yr}</text>
          <text class="svg-label fade" x="${x}" y="${up ? ly + 2 : ly + 20}" text-anchor="middle" style="font-weight:700;--delay:${d}s">${name}</text>
        </g>`;
      });
      const holder = H.wide(stage, 760);
      holder.innerHTML = u.svg(W, Hh, inner, 'aria-label="Psychology history timeline"');
      const svg = holder.firstChild;
      H.setLens(svg);
      const show = (i) => {
        u.$$('.tl-ev circle', svg).forEach((c, k) => c.setAttribute('r', k === i ? 11 : 8));
        H.info(stage, `<b>${ev[i][0]} · ${ev[i][1]}</b>: ${ev[i][2]}`);
      };
      u.$$('.tl-ev', svg).forEach((g) => {
        g.addEventListener('click', () => show(+g.dataset.i));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(+g.dataset.i); } });
      });
      show(0);
    }
  });

  /* ---------- Perspectives wheel ---------- */
  V('perspectives', {
    title: 'Ek problem, saat lens',
    render(stage) {
      const P = [
        ['Biological', 'Amygdala alarm bajata hai, adrenaline aur cortisol badhte hain: dil tez, haath thande, pet me gadbad. Kuch logon me genes se anxiety ka jhukaav zyada hota hai.'],
        ['Evolutionary', 'Khatre ke saamne alert hona hamare purvajon ko zinda rakhta tha. Aaj "khatra" sher nahi, report card hai, par alarm system wahi purana hai.'],
        ['Psychodynamic', 'Shayad bachpan se "achhe marks = pyaar" ka unconscious connection bana hai, isliye kharab paper apni value khone jaisa lagta hai.'],
        ['Behavioral', 'Pichhli baar dar laga to padhai taal di (avoidance) aur thodi der rahat mili. Ye rahat avoidance ko reinforce karti hai, aur cycle chalta rehta hai.'],
        ['Cognitive', 'Soch: "Ye paper bura gaya to life barbaad." Ye catastrophizing hai. Situation se zyada uski interpretation dar paida karti hai.'],
        ['Humanistic', 'Jab self-worth sirf marks par tika ho ("conditions of worth"), to har exam pehchaan par hamla lagta hai. Unconditional acceptance se dar ghatta hai.'],
        ['Sociocultural', 'Board exam ko "life ka faisla" maanne wala mahaul, rishtedaaron ki tulna, coaching culture: ye sab pressure ko kai guna badhate hain.']
      ];
      const W = 520, Hh = 400, cx = 260, cy = 200, R = 150;
      let inner = `<circle cx="${cx}" cy="${cy}" r="62" class="pop" style="fill:var(--ink)"/><text x="${cx}" y="${cy - 4}" text-anchor="middle" class="svg-title" style="fill:var(--paper);font-size:15px">Exam</text><text x="${cx}" y="${cy + 15}" text-anchor="middle" class="svg-title" style="fill:var(--paper);font-size:15px">anxiety</text>`;
      P.forEach(([name], i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / P.length;
        const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a), d = (0.2 + i * 0.12).toFixed(2);
        inner = `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="draw pv-line" data-i="${i}" style="stroke:var(--line);stroke-width:2;--delay:${d}s;--dur:.8s"/>` + inner;
        inner += `<g class="hot pv" data-i="${i}" tabindex="0" role="button" aria-label="${name}"><circle class="pop pv-c" cx="${x}" cy="${y}" r="38" style="fill:var(--surface-2);stroke:var(--line);stroke-width:2;--delay:${d}s"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="svg-label fade" style="font-size:11.5px;font-weight:700;--delay:${d}s">${name}</text></g>`;
      });
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Seven perspectives on exam anxiety" style="max-width:520px;margin:0 auto"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const show = (i) => {
        u.$$('.pv-c', svg).forEach((c, k) => { c.style.fill = k === i ? 'var(--lc, var(--accent))' : 'var(--surface-2)'; c.style.stroke = k === i ? 'var(--lc, var(--accent))' : 'var(--line)'; });
        u.$$('.pv text', svg).forEach((t, k) => { t.style.fill = k === i ? 'var(--surface)' : 'var(--ink)'; });
        u.$$('.pv-line', svg).forEach((l, k) => { l.style.stroke = k === i ? 'var(--lc, var(--accent))' : 'var(--line)'; });
        H.info(stage, `<b>${P[i][0]} perspective</b>: ${P[i][1]}`);
      };
      u.$$('.pv', svg).forEach((g) => {
        g.addEventListener('click', () => show(+g.dataset.i));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(+g.dataset.i); } });
      });
      show(0);
    }
  });

  /* ---------- Scientific method cycle ---------- */
  V('sciCycle', {
    title: 'Scientific method ka chakra',
    render(stage) {
      const S = [
        ['Sawaal', 'Kya neend memory ko behtar karti hai?'],
        ['Hypothesis', '8 ghante sone wale 4 ghante walon se zyada words yaad rakhenge.'],
        ['Method', '60 students ko randomly do groups me baanto aur neend control karo.'],
        ['Data', 'Agle din 30 words ki list se kitne yaad hain, ye record karo.'],
        ['Analysis', 'Statistics: kya farak chance se bada hai?'],
        ['Conclusion', 'Result report karo, peer review aur replication. Naye sawaal paida hote hain.']
      ];
      const W = 520, Hh = 340, cx = 260, cy = 170, R = 125;
      const pos = S.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / S.length; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
      let inner = `<circle cx="${cx}" cy="${cy}" r="${R}" class="draw" style="fill:none;stroke:var(--line);stroke-width:3;stroke-dasharray:6 8"/>`;
      inner += `<circle id="sc-dot" r="9" cx="${pos[0][0]}" cy="${pos[0][1]}" style="fill:var(--lc, var(--accent))"/>`;
      S.forEach(([n], i) => {
        const [x, y] = pos[i];
        inner += `<g class="sc-node" data-i="${i}"><circle cx="${x}" cy="${y}" r="34" class="pop sc-c" style="fill:var(--surface);stroke:var(--line);stroke-width:2;--delay:${i * .1}s"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="svg-label" style="font-size:11.5px;font-weight:700">${n}</text></g>`;
      });
      inner += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" class="svg-mono">STEP</text><text id="sc-num" x="${cx}" y="${cy + 20}" text-anchor="middle" class="svg-title" style="font-size:26px">1</text>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Scientific method cycle" style="max-width:520px;margin:0 auto"');
      const svg = stage.firstChild;
      const dot = u.$('#sc-dot', svg), num = u.$('#sc-num', svg);
      let cur = -1;
      const setStep = (i) => {
        if (i === cur) return;
        cur = i;
        u.$$('.sc-c', svg).forEach((c, k) => { c.style.stroke = k === i ? 'var(--lc, var(--accent))' : 'var(--line)'; c.style.strokeWidth = k === i ? 4 : 2; });
        num.textContent = i + 1;
        H.info(stage, `<b>${i + 1}. ${S[i][0]}</b>: ${S[i][1]}`);
      };
      setStep(0);
      if (u.reduced()) return;
      const per = 2200;
      return u.loop(stage, (t) => {
        const f = (t / per) % S.length;
        const i = Math.floor(f), frac = f - i;
        const ease = frac < .7 ? 0 : (frac - .7) / .3;
        const a0 = -Math.PI / 2 + i * 2 * Math.PI / S.length;
        const a = a0 + ease * 2 * Math.PI / S.length;
        dot.setAttribute('cx', cx + R * Math.cos(a));
        dot.setAttribute('cy', cy + R * Math.sin(a));
        setStep(i);
      });
    }
  });

  /* ---------- Correlation scatter ---------- */
  V('correlation', {
    title: 'Correlation dekho',
    render(stage) {
      const N = 70, W = 360, Hh = 260, pad = 30;
      const xs = [], es = [];
      const gauss = () => { let a = 0; for (let i = 0; i < 6; i++) a += Math.random(); return (a - 3) / 1; };
      for (let i = 0; i < N; i++) { xs.push(gauss()); es.push(gauss()); }
      let inner = `<line x1="${pad}" y1="${Hh - pad}" x2="${W - 10}" y2="${Hh - pad}" style="stroke:var(--ink-3)"/><line x1="${pad}" y1="10" x2="${pad}" y2="${Hh - pad}" style="stroke:var(--ink-3)"/>`;
      inner += `<text x="${W / 2}" y="${Hh - 6}" text-anchor="middle" class="svg-small">Variable X (jaise padhai ke ghante)</text><text x="12" y="${Hh / 2}" text-anchor="middle" class="svg-small" transform="rotate(-90 12 ${Hh / 2})">Variable Y</text>`;
      inner += `<line id="cr-line" x1="0" y1="0" x2="0" y2="0" style="stroke:var(--lc, var(--accent));stroke-width:2;stroke-dasharray:5 5;opacity:.7"/>`;
      for (let i = 0; i < N; i++) inner += `<circle class="cr-p" r="4" cx="0" cy="0" style="fill:var(--lc, var(--accent));opacity:.75;transition:transform .7s cubic-bezier(.3,.9,.3,1)"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Scatter plot showing correlation" style="max-width:460px;margin:0 auto"');
      const svg = stage.firstChild;
      const pts = u.$$('.cr-p', svg), line = u.$('#cr-line', svg);
      const sx = (v) => pad + 10 + (v + 2.6) / 5.2 * (W - pad - 30);
      const sy = (v) => (Hh - pad - 10) - (v + 2.6) / 5.2 * (Hh - pad - 30);
      const ctrl = H.ctrl(stage);
      ctrl.innerHTML = `<label for="crR" style="min-width:110px">r = <b id="crVal" class="mono">0.00</b></label><input id="crR" type="range" min="-1" max="1" step="0.05" value="0" style="flex:1;min-width:160px">`;
      const inp = u.$('#crR', ctrl), val = u.$('#crVal', ctrl);
      const words = (r) => {
        const a = Math.abs(r);
        const s = a < .1 ? 'Koi rishta nahi (zero correlation)' : (a < .3 ? 'Kamzor ' : a < .7 ? 'Moderate ' : 'Strong ') + (r > 0 ? 'positive' : 'negative') + ' correlation';
        const ex = a < .1 ? 'Jaise shoe size aur IQ.' : r > 0 ? (a > .7 ? 'Jaise height aur weight: ek badhe to doosra bhi aam taur par badhta hai.' : 'Jaise padhai ke ghante aur marks: rishta hai par aur factors bhi hain.') : (a > .7 ? 'Jaise exam se pehle ki raat jaagne ke ghante aur agle din ki alertness.' : 'Jaise screen time aur neend: ek badhe to doosra thoda ghate.');
        return `<b>${s}</b>. ${ex} Yaad rakho: correlation ka matlab cause nahi.`;
      };
      const set = (r) => {
        const k = Math.sqrt(Math.max(0, 1 - r * r));
        pts.forEach((p, i) => {
          const x = xs[i], y = r * x + k * es[i];
          p.style.transform = `translate(${sx(x).toFixed(1)}px, ${sy(u.clamp(y, -2.6, 2.6)).toFixed(1)}px)`;
        });
        line.setAttribute('x1', sx(-2.4)); line.setAttribute('y1', sy(-2.4 * r));
        line.setAttribute('x2', sx(2.4)); line.setAttribute('y2', sy(2.4 * r));
        val.textContent = (r >= 0 ? '+' : '') + r.toFixed(2);
        H.info(stage, words(r));
      };
      inp.addEventListener('input', () => set(+inp.value));
      set(0);
      if (!u.reduced()) {
        const t1 = setTimeout(() => { inp.value = 0.8; set(0.8); }, 700);
        return () => clearTimeout(t1);
      }
    }
  });

  /* ---------- Bell curve ---------- */
  V('bellCurve', {
    title: 'Normal distribution',
    render(stage) {
      const W = 600, Hh = 270, x0 = 30, x1 = 570, base = 220, top = 30;
      const X = (z) => x0 + (z + 3.5) / 7 * (x1 - x0);
      const peak = H.normal(0);
      const Y = (z) => base - H.normal(z) / peak * (base - top);
      const curve = (a, b, close) => {
        let d = '';
        for (let z = a; z <= b + 1e-9; z += 0.05) d += (d ? 'L' : 'M') + X(z).toFixed(1) + ',' + Y(z).toFixed(1);
        if (close) d += `L${X(b).toFixed(1)},${base}L${X(a).toFixed(1)},${base}Z`;
        return d;
      };
      const bands = [[-1, 1, .45, '68.2%', 0], [-2, -1, .28, '13.6%', 1], [1, 2, .28, '13.6%', 1], [-3, -2, .14, '2.1%', 2], [2, 3, .14, '2.1%', 2]];
      let inner = '';
      bands.forEach(([a, b, op, lab, lvl]) => {
        const d = (1.6 + lvl * .6).toFixed(1);
        inner += `<path class="fade" d="${curve(a, b, true)}" style="fill:var(--lc, var(--accent));opacity:${op};--delay:${d}s"/>`;
        const mid = (a + b) / 2;
        inner += `<text class="svg-label fade" x="${X(mid)}" y="${lvl === 0 ? 150 : lvl === 1 ? 200 : 212}" text-anchor="middle" style="font-weight:700;font-size:${lvl === 2 ? 11 : 13}px;--delay:${d}s">${lab}</text>`;
      });
      inner += `<path class="draw" d="${curve(-3.5, 3.5)}" style="fill:none;stroke:var(--ink);stroke-width:2.5;--dur:1.6s"/>`;
      inner += `<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" style="stroke:var(--ink-3)"/>`;
      inner += '<g id="bc-ticks"></g>';
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Normal distribution with standard deviation bands"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const scales = [
        ['SD', ['-3σ', '-2σ', '-1σ', 'Mean', '+1σ', '+2σ', '+3σ'], 'Har band 1 standard deviation (σ) ka hai.'],
        ['IQ', ['55', '70', '85', '100', '115', '130', '145'], 'IQ tests me mean 100 aur SD 15 hota hai. ~68% logon ka IQ 85 se 115 ke beech hota hai; 130 se upar sirf ~2%.'],
        ['Marks', ['40', '50', '60', '70', '80', '90', '100'], 'Agar class ka mean 70 aur SD 10 ho, to 80 laane wala (+1σ) lagbhag 84th percentile par hai.']
      ];
      const ticks = u.$('#bc-ticks', svg);
      const setScale = (k) => {
        ticks.innerHTML = scales[k][1].map((t, i) => `<line x1="${X(i - 3)}" y1="${base}" x2="${X(i - 3)}" y2="${base + 6}" style="stroke:var(--ink-3)"/><text class="svg-mono" x="${X(i - 3)}" y="${base + 22}" text-anchor="middle">${t}</text>`).join('');
        H.info(stage, `<b>${scales[k][0]} scale</b>: ${scales[k][2]}`);
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(scales.map((s) => s[0]), setScale, 0));
      setScale(0);
    }
  });

  /* ---------- Milgram obedience curve ---------- */
  V('milgram', {
    title: 'Milgram: kitne log jaari rahe?',
    render(stage) {
      const W = 620, Hh = 290, x0 = 56, x1 = 600, y0 = 230, y1 = 24;
      const X = (v) => x0 + v / 450 * (x1 - x0);
      const Y = (p) => y0 - p / 100 * (y0 - y1);
      const steps = [[15, 100], [300, 100], [315, 87.5], [330, 77.5], [345, 72.5], [360, 70], [375, 67.5], [390, 65], [450, 65]];
      let d = `M${X(15)},${Y(100)}`;
      for (let i = 1; i < steps.length; i++) { d += `L${X(steps[i][0])},${Y(steps[i - 1][1])}L${X(steps[i][0])},${Y(steps[i][1])}`; }
      let inner = '';
      [0, 25, 50, 75, 100].forEach((p) => { inner += `<line x1="${x0}" y1="${Y(p)}" x2="${x1}" y2="${Y(p)}" style="stroke:var(--line)"/><text class="svg-mono" x="${x0 - 8}" y="${Y(p) + 4}" text-anchor="end">${p}%</text>`; });
      [0, 75, 150, 225, 300, 375, 450].forEach((v) => { inner += `<text class="svg-mono" x="${X(v)}" y="${y0 + 18}" text-anchor="middle">${v}V</text>`; });
      const zones = [[15, 60, 'Slight'], [75, 120, 'Moderate'], [135, 180, 'Strong'], [195, 240, 'Very strong'], [255, 300, 'Intense'], [315, 360, 'Extreme'], [375, 420, 'Danger'], [435, 450, 'XXX']];
      zones.forEach(([a, b, n], i) => { inner += `<rect x="${X(a)}" y="${y0 + 26}" width="${X(b) - X(a) + 6}" height="16" rx="3" style="fill:var(--bad);opacity:${(0.1 + i * 0.11).toFixed(2)}"/><text class="svg-small" x="${(X(a) + X(b) + 6) / 2}" y="${y0 + 38}" text-anchor="middle" style="font-size:9.5px;fill:var(--ink)">${n}</text>`; });
      inner += `<path class="draw" id="mg-path" d="${d}" style="fill:none;stroke:var(--lc, var(--accent));stroke-width:3.5;stroke-linejoin:round;--dur:4s"/>`;
      inner += `<line x1="${x0}" y1="${Y(1)}" x2="${x1}" y2="${Y(1)}" style="stroke:var(--ink-3);stroke-dasharray:4 5"/><text class="svg-small" x="${X(300)}" y="${Y(1) - 6}" text-anchor="middle">Psychiatrists ka andaza: ~1% hi aakhir tak jaayenge</text>`;
      inner += `<circle id="mg-dot" r="7" cx="${X(15)}" cy="${Y(100)}" style="fill:var(--lc, var(--accent));stroke:var(--surface);stroke-width:3"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Percentage of participants who continued at each voltage in Milgram 1963"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const path = u.$('#mg-path', svg), dot = u.$('#mg-dot', svg);
      const L = path.getTotalLength();
      const read = (v) => { let p = 100; for (const [sv, sp] of steps) if (v >= sv) p = sp; return p; };
      const label = (v) => H.info(stage, `<b>${v} V</b> par <b>${read(v)}%</b> participants abhi bhi switch daba rahe the.${v >= 300 && v < 330 ? ' 300 V ke baad learner ne deewar peetna band kar diya; yahin pehle log ruke.' : ''}${v >= 450 ? ' 40 me se 26 log (65%) sabse aakhri switch tak gaye.' : ''}`);
      if (u.reduced()) { dot.setAttribute('cx', X(450)); dot.setAttribute('cy', Y(65)); label(450); return; }
      let lastV = -1;
      return u.loop(stage, (t) => {
        const f = Math.min(1, (t % 7000) / 4000);
        const pt = path.getPointAtLength(f * L);
        dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y);
        const v = Math.round(((pt.x - x0) / (x1 - x0) * 450) / 15) * 15 || 15;
        if (v !== lastV) { lastV = v; label(u.clamp(v, 15, 450)); }
      });
    }
  });

  /* ---------- Evidence pyramid ---------- */
  V('evidencePyramid', {
    title: 'Saboot ki seedhi',
    render(stage) {
      const L = [
        ['Anecdote / opinion', 'Ek kahani ya kisi ki raay. "Mere dost ko fayda hua." Koi control nahi, koi comparison nahi. Sabse kamzor.'],
        ['Case study', 'Ek vyakti ka gehra study (jaise Phineas Gage). Naye idea deta hai, par generalize nahi kar sakte.'],
        ['Correlational study', 'Bahut logon me do cheezon ka rishta. Pattern dikhata hai, cause nahi.'],
        ['Experiment', 'Variable ko control karke badalna. Cause-effect ka pehla strong saboot.'],
        ['Randomized controlled trial', 'Random assignment, control/placebo group, aksar double-blind. Treatment test karne ka gold standard.'],
        ['Meta-analysis', 'Kai studies ka data milakar overall nateeja. Ek study ki galti ya luck ka asar kam ho jaata hai.']
      ];
      const W = 520, Hh = 330, cx = 260, base = 310, hgt = 46, bw = 480;
      let inner = '';
      L.forEach(([n], i) => {
        const yb = base - i * hgt, yt = yb - hgt + 4;
        const wb = bw * (1 - i / L.length), wt = bw * (1 - (i + 1) / L.length);
        const pts = `${cx - wb / 2},${yb} ${cx + wb / 2},${yb} ${cx + wt / 2},${yt} ${cx - wt / 2},${yt}`;
        inner += `<g class="hot ep" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><polygon class="pop ep-p" points="${pts}" style="fill:var(--lc, var(--accent));opacity:${(0.25 + i * 0.13).toFixed(2)};--delay:${(i * .18).toFixed(2)}s"/><text class="svg-label fade" x="${cx}" y="${yb - hgt / 2 + 6}" text-anchor="middle" style="font-weight:700;font-size:${i > 3 ? 11 : 12.5}px;--delay:${(i * .18 + .2).toFixed(2)}s">${n}</text></g>`;
      });
      inner += `<text class="svg-mono" x="16" y="${base - 6}">KAMZOR</text><text class="svg-mono" x="16" y="34">MAZBOOT</text><path d="M30 ${base - 20} V46" style="stroke:var(--ink-3);stroke-width:1.5"/><path d="M25 52 L30 42 L35 52" style="fill:none;stroke:var(--ink-3);stroke-width:1.5"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Hierarchy of evidence" style="max-width:520px;margin:0 auto"');
      const svg = stage.firstChild;
      const show = (i) => {
        u.$$('.ep-p', svg).forEach((p, k) => { p.style.stroke = k === i ? 'var(--ink)' : 'none'; p.style.strokeWidth = 2; });
        H.info(stage, `<b>${L[i][0]}</b>: ${L[i][1]}`);
      };
      u.$$('.ep', svg).forEach((g) => {
        g.addEventListener('click', () => show(+g.dataset.i));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(+g.dataset.i); } });
      });
      show(0);
    }
  });
})();
