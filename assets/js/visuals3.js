/* Motion graphics · part 3 (Level 3: learning, memory, cognition) */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u } = PSY;
  const V = PSY.visual;
  const H = PSY.vh;
  const bindPick = (root, sel, fn) => u.$$(sel, root).forEach((g) => {
    g.addEventListener('click', () => fn(+g.dataset.i));
    g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(+g.dataset.i); } });
  });
  const LC = 'var(--lc, var(--accent))';

  /* small icon drawings */
  const bell = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="pv-bell"><path d="M-14 10 q0-24 14-24 q14 0 14 24 z" style="fill:var(--spark)"/><rect x="-17" y="9" width="34" height="4" rx="2" style="fill:var(--spark)"/><circle cx="0" cy="16" r="4" style="fill:var(--spark)"/></g></g>`;
  const bowl = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="6" rx="20" ry="7" style="fill:var(--ink-3)"/><circle cx="-7" cy="0" r="6" style="fill:var(--warn)"/><circle cx="6" cy="-1" r="6" style="fill:var(--warn)"/></g>`;
  const dog = (x, y, drool) => `<g transform="translate(${x} ${y})"><ellipse cx="-22" cy="-14" rx="9" ry="17" transform="rotate(-20 -22 -14)" style="fill:var(--warn);opacity:.65"/><ellipse cx="22" cy="-14" rx="9" ry="17" transform="rotate(20 22 -14)" style="fill:var(--warn);opacity:.65"/><circle cx="0" cy="0" r="26" style="fill:var(--warn-soft);stroke:var(--ink-2);stroke-width:2"/><circle cx="-9" cy="-5" r="3.5" style="fill:var(--ink)"/><circle cx="9" cy="-5" r="3.5" style="fill:var(--ink)"/><ellipse cx="0" cy="9" rx="6" ry="4.5" style="fill:var(--ink)"/>${drool ? '<g class="pv-drool"><path d="M-3 22 q2 12 4 0" style="fill:#4dabf7"/><path d="M4 22 q2 9 4 0" style="fill:#4dabf7"/></g>' : '<path d="M-6 18 q6 4 12 0" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>'}</g>`;

  /* ---------- Pavlov storyboard ---------- */
  V('pavlov', {
    title: 'Pavlov ka experiment',
    render(stage) {
      const P = [
        ['1. Pehle', 'Ghanti → kuch nahi', 'Khana → laar (UCR)', '<b>Pehle</b>: ghanti ek <b>neutral stimulus</b> hai, kutta bas kaan khade karta hai. Khana (UCS) apne aap laar (UCR) laata hai.'],
        ['2. Dauraan', 'Ghanti + Khana', '→ laar', '<b>Conditioning ke dauraan</b>: ghanti bajti hai aur turant khana aata hai. Ye pairing baar-baar dohrayi jaati hai (acquisition).'],
        ['3. Baad me', 'Sirf Ghanti (CS)', '→ laar (CR)!', '<b>Baad me</b>: sirf ghanti ab <b>conditioned stimulus</b> hai aur laar <b>conditioned response</b>. Kutte ne seekh liya: ghanti = khana aane wala hai.']
      ];
      let inner = `<style>.pv-on .pv-bell{animation:pvRing .5s ease-in-out infinite;transform-origin:0 -14px}.pv-on .pv-drool{animation:pvDrip 1s ease-in infinite}@keyframes pvRing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}@keyframes pvDrip{from{transform:translateY(0);opacity:1}to{transform:translateY(10px);opacity:.2}}</style>`;
      P.forEach(([t, a, b], i) => {
        const x = 10 + i * 210;
        inner += `<g class="pv-p" data-i="${i}" tabindex="0" role="button" aria-label="${t}"><rect class="pv-r" x="${x}" y="8" width="196" height="214" rx="14" style="fill:var(--surface-2);stroke:var(--line);stroke-width:2"/><text class="svg-title" x="${x + 16}" y="34" style="font-size:14px">${t}</text>`;
        if (i === 0) inner += `${bell(x + 40, 74, .9)}<text class="svg-small" x="${x + 70}" y="78">→</text>${dog(x + 140, 74, false)}${bowl(x + 40, 150, .9)}<text class="svg-small" x="${x + 70}" y="154">→</text>${dog(x + 140, 150, true)}`;
        if (i === 1) inner += `${bell(x + 46, 100, 1)}<text class="svg-label" x="${x + 76}" y="106" style="font-weight:700">+</text>${bowl(x + 106, 104, 1)}${dog(x + 158, 104, true)}`;
        if (i === 2) inner += `${bell(x + 56, 104, 1.1)}<text class="svg-small" x="${x + 90}" y="108">→</text>${dog(x + 146, 104, true)}`;
        inner += `<text class="svg-small" x="${x + 98}" y="194" text-anchor="middle" style="fill:var(--ink)">${a}</text><text class="svg-small" x="${x + 98}" y="210" text-anchor="middle" style="fill:var(--ink)">${b}</text></g>`;
      });
      const holder = H.wide(stage, 420);
      holder.innerHTML = u.svg(640, 230, inner, 'aria-label="Three phases of classical conditioning"');
      const svg = holder.firstChild;
      let cur = 0;
      const show = (i) => {
        cur = i;
        u.$$('.pv-p', svg).forEach((g, k) => {
          g.classList.toggle('pv-on', k === i);
          const r = u.$('.pv-r', g);
          r.style.stroke = k === i ? LC : 'var(--line)';
          r.style.fill = k === i ? 'var(--surface)' : 'var(--surface-2)';
        });
        H.info(stage, P[i][3]);
      };
      bindPick(svg, '.pv-p', (i) => { show(i); clearInterval(iv); });
      show(0);
      if (u.reduced()) return;
      const iv = setInterval(() => show((cur + 1) % 3), 3200);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Operant 2x2 ---------- */
  V('operantGrid', {
    title: 'Reinforcement aur punishment',
    render(stage) {
      const cells = [
        ['Positive reinforcement', '+ Achhi cheez add', '↑ behaviour', 'var(--good)', 'Report card me achhe marks par mummy ne pasandida dish banayi. Agli baar bhi mehnat ka mann. Office me target poora karne par bonus. Post par likes.'],
        ['Positive punishment', '+ Buri cheez add', '↓ behaviour', 'var(--bad)', 'Signal todne par ₹1,000 ka challan. Class me baat karne par teacher ki daant. Garam stove chhoone par jalna (natural consequence).'],
        ['Negative reinforcement', '− Buri cheez hatao', '↑ behaviour', 'var(--good)', 'Sar dard me goli li, dard gaya: agli baar bhi goli loge. Seat belt lagaya, beep band. Kamra saaf kiya to mummy ki tok-tok band. (Avoidance bhi isi se chalta hai.)'],
        ['Negative punishment', '− Achhi cheez hatao', '↓ behaviour', 'var(--bad)', 'Bhai se ladne par ek din cartoon band. Der se aane par phone jamaa. Cricket me galat behaviour par player ki match fee kati.']
      ];
      const html = `<div style="display:grid;grid-template-columns:auto 1fr 1fr;gap:8px;align-items:stretch;font-size:.9rem">
        <div></div><div class="mono muted" style="text-align:center;font-size:.72rem;letter-spacing:.08em">BEHAVIOUR BADHE ↑</div><div class="mono muted" style="text-align:center;font-size:.72rem;letter-spacing:.08em">BEHAVIOUR GHATE ↓</div>
        <div class="mono muted" style="writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font-size:.72rem;letter-spacing:.08em">ADD (+)</div>
        ${[0, 1].map((i) => cell(i)).join('')}
        <div class="mono muted" style="writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font-size:.72rem;letter-spacing:.08em">REMOVE (−)</div>
        ${[2, 3].map((i) => cell(i)).join('')}
      </div>`;
      function cell(i) {
        const [t, a, b, c] = cells[i];
        return `<button class="og" data-i="${i}" style="all:unset;box-sizing:border-box;cursor:pointer;border-radius:14px;padding:14px;border:2px solid var(--line);background:var(--surface);display:flex;flex-direction:column;gap:6px;min-height:110px;transition:transform .3s, border-color .3s, background .3s"><b style="font-family:var(--font-display);font-size:1rem;color:${c}">${t}</b><span class="muted">${a}</span><span style="font-weight:700">${b}</span></button>`;
      }
      stage.innerHTML = html;
      const show = (i) => {
        u.$$('.og', stage).forEach((b, k) => {
          b.style.borderColor = k === i ? cells[i][3] : 'var(--line)';
          b.style.background = k === i ? 'var(--surface-2)' : 'var(--surface)';
          b.style.transform = k === i ? 'scale(1.02)' : 'none';
        });
        H.info(stage, `<b>${cells[i][0]}</b>: ${cells[i][4]}`);
      };
      let cur = 0;
      bindPick(stage, '.og', (i) => { cur = i; show(i); clearInterval(iv); });
      show(0);
      if (u.reduced()) return;
      const iv = setInterval(() => { cur = (cur + 1) % 4; show(cur); }, 3000);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Reinforcement schedules ---------- */
  V('schedules', {
    title: 'Reinforcement schedules',
    render(stage) {
      const W = 620, Hh = 300, x0 = 50, x1 = 600, y0 = 260, y1 = 20;
      const T = 100;
      const X = (t) => x0 + t / T * (x1 - x0);
      const Y = (r) => y0 - r / 200 * (y0 - y1);
      const S = [
        ['FR', 'Fixed ratio', 'var(--l3)', () => { const pts = [[0, 0]]; let r = 0, t = 0; const ticks = []; while (t < T) { t += 9; r += 20; pts.push([Math.min(t, T), r]); ticks.push([t, r]); t += 2.5; pts.push([Math.min(t, T), r]); } return { pts, ticks }; }, 'Har 10 responses par reward. Tez responding, aur reward ke baad chhota sa break (post-reinforcement pause): seedhi jaisi line.'],
        ['VR', 'Variable ratio', 'var(--l4)', () => { const pts = [[0, 0]]; const ticks = []; for (let t = 0; t <= T; t += 2) pts.push([t, t * 2.05]); [6, 11, 25, 31, 48, 52, 70, 84, 91].forEach((t) => ticks.push([t, t * 2.05])); return { pts, ticks }; }, 'Unpredictable number of responses par reward (gambling, reels). Sabse tez aur bina ruke responding: sabse seedhi, oonchi line.'],
        ['FI', 'Fixed interval', 'var(--l5)', () => { const pts = []; const ticks = []; let base = 0; for (let k = 0; k < 5; k++) { for (let s = 0; s <= 20; s += 1) { const t = k * 20 + s; const r = base + 26 * Math.pow(s / 20, 2.4); pts.push([t, r]); } base += 26; ticks.push([k * 20 + 20, base]); } return { pts, ticks }; }, 'Fixed time ke baad reward (salary, exam). Reward ke turant baad kam responding, deadline ke paas tezi: "scallop" pattern. Exam se pehle ki raat yaad hai?'],
        ['VI', 'Variable interval', 'var(--l6)', () => { const pts = []; const ticks = []; for (let t = 0; t <= T; t += 2) pts.push([t, t * 0.95]); [9, 22, 30, 51, 63, 79, 95].forEach((t) => ticks.push([t, t * 0.95])); return { pts, ticks }; }, 'Unpredictable time ke baad reward (WhatsApp check, surprise quiz). Dheema par steady, lagataar responding.']
      ];
      let inner = `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" style="stroke:var(--ink-3)"/><line x1="${x0}" y1="${y1}" x2="${x0}" y2="${y0}" style="stroke:var(--ink-3)"/><text class="svg-small" x="${(x0 + x1) / 2}" y="${y0 + 26}" text-anchor="middle">Time →</text><text class="svg-small" x="16" y="${(y0 + y1) / 2}" text-anchor="middle" transform="rotate(-90 16 ${(y0 + y1) / 2})">Total responses →</text>`;
      S.forEach(([k, n, c, gen], i) => {
        const { pts, ticks } = gen();
        const d = pts.map((p, j) => (j ? 'L' : 'M') + X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join('');
        inner += `<g class="sc-g" data-i="${i}"><path class="draw" d="${d}" style="fill:none;stroke:${c};stroke-width:3;stroke-linejoin:round;--dur:3s;--delay:${(i * .3).toFixed(1)}s"/>${ticks.map(([t, r]) => `<path class="fade" d="M${X(t) - 4} ${Y(r) + 7} l8 -14" style="stroke:${c};stroke-width:2;--delay:${(2.4 + i * .3).toFixed(1)}s"/>`).join('')}`;
        const last = pts[pts.length - 1];
        inner += `<text class="svg-label fade" x="${Math.min(X(last[0]) + 6, x1 - 4)}" y="${Y(last[1]) + 4}" style="font-weight:700;fill:${c};--delay:3s" text-anchor="${X(last[0]) > x1 - 30 ? 'end' : 'start'}">${k}</text></g>`;
      });
      inner += `<text class="svg-small" x="${x0 + 10}" y="${y1 + 10}">Chhoti tirchhi lakeer = reward</text>`;
      stage.innerHTML = u.svg(W, Hh + 10, inner, 'aria-label="Cumulative response curves for four reinforcement schedules"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const ctrl = H.ctrl(stage);
      const pick = (k) => {
        u.$$('.sc-g', svg).forEach((g, i) => { g.style.opacity = k === 0 || i === k - 1 ? 1 : .15; });
        H.info(stage, k === 0 ? 'Line jitni <b>seedhi aur oonchi</b>, utna zyada behaviour. <b>Ratio</b> schedules (FR, VR) <b>interval</b> schedules (FI, VI) se tez responding dete hain, aur variable schedules extinction ke against sabse tikau hote hain.' : `<b>${S[k - 1][1]} (${S[k - 1][0]})</b>: ${S[k - 1][4]}`);
      };
      ctrl.appendChild(H.seg(['Sab', 'FR', 'VR', 'FI', 'VI'], pick, 0));
      pick(0);
    }
  });

  /* ---------- Bobo doll / observational learning ---------- */
  V('bobo', {
    title: 'Dekh kar seekhna',
    render(stage) {
      const steps = [['Attention', 'Bachche ne adult (model) par dhyan diya: bada, powerful aur interesting.'], ['Retention', 'Usne action ko yaad rakha: mental image aur shabd ("Maaro isko!").'], ['Reproduction', 'Uske paas khud wahi karne ki kshamta hai: haath uthana, maarna.'], ['Motivation', 'Model ko inaam ya koi saza nahi mili, to karne ki wajah hai. Ab bachcha nakal karta hai!']];
      const W = 640, Hh = 300;
      const person = (x, y, cls, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})"><circle cx="0" cy="-58" r="14" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2.5"/><line x1="0" y1="-44" x2="0" y2="0" style="stroke:var(--ink-2);stroke-width:3"/><line x1="0" y1="0" x2="-12" y2="32" style="stroke:var(--ink-2);stroke-width:3"/><line x1="0" y1="0" x2="12" y2="32" style="stroke:var(--ink-2);stroke-width:3"/><line x1="0" y1="-34" x2="-16" y2="-14" style="stroke:var(--ink-2);stroke-width:3"/><g class="${cls}"><line x1="0" y1="-34" x2="22" y2="-46" style="stroke:var(--ink-2);stroke-width:3"/><circle cx="24" cy="-47" r="4" style="fill:var(--ink-2)"/></g></g>`;
      const boboDoll = (x, y, cls) => `<g transform="translate(${x} ${y})"><g class="${cls}"><ellipse cx="0" cy="-10" rx="18" ry="26" style="fill:var(--bad);opacity:.85"/><circle cx="0" cy="-42" r="12" style="fill:var(--warn-soft);stroke:var(--bad);stroke-width:2"/><circle cx="-4" cy="-44" r="1.8" style="fill:var(--ink)"/><circle cx="4" cy="-44" r="1.8" style="fill:var(--ink)"/></g><ellipse cx="0" cy="16" rx="22" ry="5" style="fill:var(--ink-3);opacity:.4"/></g>`;
      let inner = `<style>.bo-hit{transform-origin:0 -34px;animation:boHit 1.1s ease-in-out infinite}.bo-wob{transform-origin:0 14px;animation:boWob 1.1s ease-in-out infinite}.bo-idle{transform-origin:0 -34px}@keyframes boHit{0%,60%,100%{transform:rotate(-30deg)}30%{transform:rotate(25deg)}}@keyframes boWob{0%,25%,100%{transform:rotate(0)}40%{transform:rotate(22deg)}60%{transform:rotate(-8deg)}}</style>`;
      inner += `<text class="svg-mono" x="60" y="24">MODEL (ADULT)</text><text class="svg-mono" x="440" y="24">OBSERVER (BACHCHA)</text>`;
      inner += person(80, 140, 'bo-hit') + boboDoll(130, 160, 'bo-wob');
      inner += `<g id="bo-kid">${person(470, 150, 'bo-idle', .8)}</g><g id="bo-kid-doll">${boboDoll(510, 166, 'bo-idle')}</g>`;
      inner += `<path d="M200 90 Q320 30 430 90" class="draw" style="fill:none;stroke:var(--ink-3);stroke-width:2;stroke-dasharray:5 5"/><text class="svg-small" x="315" y="52" text-anchor="middle">dekh raha hai...</text>`;
      steps.forEach(([n], i) => {
        const x = 90 + i * 150;
        if (i) inner += `<line x1="${x - 118}" y1="240" x2="${x - 32}" y2="240" style="stroke:var(--line);stroke-width:3"/>`;
        inner += `<g class="hot bo-s" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><circle class="bo-c" cx="${x}" cy="240" r="30" style="fill:var(--surface-2);stroke:var(--line);stroke-width:2.5"/><text class="svg-title" x="${x}" y="246" text-anchor="middle" style="font-size:16px">${i + 1}</text><text class="svg-small" x="${x}" y="288" text-anchor="middle" style="fill:var(--ink);font-weight:700">${n}</text></g>`;
      });
      stage.innerHTML = u.svg(W, Hh + 6, inner, 'aria-label="Observational learning: model, observer and four steps"');
      const svg = stage.firstChild;
      H.setLens(svg);
      let punished = false, cur = 0;
      const kidArm = u.$('#bo-kid .bo-idle', svg), kidDoll = u.$('#bo-kid-doll .bo-idle', svg);
      const show = (i) => {
        cur = i;
        u.$$('.bo-c', svg).forEach((c, k) => { const blocked = punished && k === 3; c.style.fill = k <= i ? (blocked ? 'var(--bad-soft)' : LC) : 'var(--surface-2)'; c.style.stroke = k <= i ? (blocked ? 'var(--bad)' : LC) : 'var(--line)'; });
        u.$$('.bo-s text.svg-title', svg).forEach((t, k) => { t.style.fill = k <= i && !(punished && k === 3) ? 'var(--surface)' : 'var(--ink)'; });
        const imitate = i === 3 && !punished;
        kidArm.classList.toggle('bo-hit', imitate);
        kidDoll.classList.toggle('bo-wob', imitate);
        H.info(stage, punished && i === 3 ? '<b>Motivation</b>: bachche ne model ko <b>saza milte</b> dekha (vicarious punishment), isliye abhi nakal nahi karega. Par usne seekh liya hai! Inaam milne par wo kar ke dikha dega (learning vs performance).' : `<b>${i + 1}. ${steps[i][0]}</b>: ${steps[i][1]}`);
      };
      bindPick(svg, '.bo-s', (i) => { clearInterval(iv); show(i); });
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Model ko kuch nahi hua', 'Model ko saza mili'], (k) => { punished = k === 1; show(cur); }, 0));
      show(0);
      if (u.reduced()) { show(3); return; }
      const iv = setInterval(() => show((cur + 1) % 4), 2600);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Multi-store memory model ---------- */
  V('memoryModel', {
    title: 'Memory ka multi-store model',
    render(stage) {
      const W = 660, Hh = 270;
      const boxes = [['Sensory memory', 20, 'sekund se kam'], ['Short-term memory', 250, '~20 sec · ~4 chunks'], ['Long-term memory', 480, 'lagbhag asimit']];
      let inner = `<defs><marker id="mm-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink-3)"/></marker></defs>`;
      boxes.forEach(([n, x, s]) => { inner += `<rect x="${x}" y="80" width="160" height="110" rx="16" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:2"/><text class="svg-label" x="${x + 80}" y="104" text-anchor="middle" style="font-weight:700">${n}</text><text class="svg-small" x="${x + 80}" y="182" text-anchor="middle">${s}</text>`; });
      inner += `<line x1="182" y1="135" x2="246" y2="135" style="stroke:var(--ink-3);stroke-width:2" marker-end="url(#mm-ar)"/><text class="svg-small" x="214" y="126" text-anchor="middle" style="fill:var(--ink)">attention</text>`;
      inner += `<line x1="412" y1="125" x2="476" y2="125" style="stroke:var(--ink-3);stroke-width:2" marker-end="url(#mm-ar)"/><text class="svg-small" x="444" y="116" text-anchor="middle" style="fill:var(--ink)">encoding</text>`;
      inner += `<line x1="476" y1="152" x2="412" y2="152" style="stroke:var(--ink-3);stroke-width:2;stroke-dasharray:4 3" marker-end="url(#mm-ar)"/><text class="svg-small" x="444" y="168" text-anchor="middle" style="fill:var(--ink)">retrieval</text>`;
      inner += `<path d="M300 80 C300 40 370 40 370 78" style="fill:none;stroke:var(--ink-3);stroke-width:2" marker-end="url(#mm-ar)"/><text class="svg-small" x="335" y="38" text-anchor="middle" style="fill:var(--ink)">rehearsal</text>`;
      inner += `<text class="svg-small" x="100" y="230" text-anchor="middle" style="fill:var(--bad)">dhyan nahi = gayab</text><text class="svg-small" x="330" y="230" text-anchor="middle" style="fill:var(--bad)">rehearse nahi = gayab</text><text class="svg-small" x="560" y="230" text-anchor="middle" style="fill:var(--good)">jama hota rehta hai</text>`;
      inner += `<text class="svg-small" x="10" y="64">Senses se input →</text><g id="mm-dots"></g>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Animated multi-store memory model with information flowing between stores"');
      const svg = stage.firstChild;
      const G = u.$('#mm-dots', svg);
      let dots = [], ltm = [], last = 0;
      H.info(stage, 'Har dot ek piece of information hai. Zyada tar sensory memory me hi gayab ho jaate hain (dhyan nahi diya). Jin par dhyan gaya wo STM me jaate hain; wahan rehearse ya encode na hue to gayab. Encode hue to LTM me. Kabhi-kabhi LTM se ek dot wapas STM me aata hai: <b>retrieval</b>.');
      const draw = () => {
        G.innerHTML = dots.map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="5" style="fill:${d.c};opacity:${d.o.toFixed(2)}"/>`).join('') + ltm.map((d) => `<circle cx="${d.x}" cy="${d.y}" r="4.5" style="fill:var(--good);opacity:.85"/>`).join('');
      };
      if (u.reduced()) { for (let i = 0; i < 14; i++) ltm.push({ x: 500 + (i % 7) * 18, y: 125 + Math.floor(i / 7) * 18 }); draw(); return; }
      return u.loop(stage, (t, dt) => {
        if (t - last > 380) {
          last = t;
          dots.push({ x: 0, y: u.rand(110, 160), st: 's', o: 1, c: 'var(--ink-3)', fate: Math.random() });
          if (ltm.length > 6 && Math.random() < .12) { const r = ltm.splice(Math.floor(Math.random() * ltm.length), 1)[0]; dots.push({ x: r.x, y: r.y, st: 'ret', o: 1, c: 'var(--good)', fate: 0 }); }
        }
        dots.forEach((d) => {
          const v = dt * .09;
          if (d.st === 's') { d.x += v; if (d.x > 100) { if (d.fate < .6) d.st = 'fadeS'; else { d.st = 'toS'; d.c = LC; } } }
          else if (d.st === 'fadeS') { d.x += v * .4; d.o -= dt / 500; }
          else if (d.st === 'toS') { d.x += v; d.y += (135 - d.y) * .04; if (d.x > 310) { d.st = d.fate < .78 ? 'fadeM' : 'toL'; d.loop = 0; } }
          else if (d.st === 'fadeM') { d.x += v * .3; d.o -= dt / 700; }
          else if (d.st === 'toL') { d.x += v; d.y += (125 - d.y) * .05; if (d.x > 520) { d.st = 'dead'; if (ltm.length < 28) ltm.push({ x: 500 + (ltm.length % 7) * 18, y: 112 + Math.floor(ltm.length / 7) * 16 }); } }
          else if (d.st === 'ret') { d.x -= v; d.y += (152 - d.y) * .06; if (d.x < 330) { d.st = 'fadeM'; d.c = LC; } }
        });
        dots = dots.filter((d) => d.o > 0 && d.st !== 'dead');
        draw();
      });
    }
  });

  /* ---------- Forgetting curve ---------- */
  V('forgetting', {
    title: 'Forgetting curve',
    render(stage) {
      const W = 620, Hh = 280, x0 = 56, x1 = 600, y0 = 230, y1 = 20, D = 14;
      const X = (d) => x0 + d / D * (x1 - x0);
      const Y = (r) => y0 - r * (y0 - y1);
      const curve = (spaced) => {
        const reviews = spaced ? [1, 3, 7] : [];
        const S = [0.6, 1.6, 3.6, 8];
        let d = '', last = 0, k = 0;
        for (let t = 0; t <= D + 1e-9; t += 0.05) {
          if (reviews[k] !== undefined && t >= reviews[k]) { d += `L${X(t).toFixed(1)},${Y(1)}`; last = reviews[k]; k++; }
          const r = 0.2 + 0.8 * Math.exp(-(t - last) / S[k]);
          d += (d ? 'L' : 'M') + X(t).toFixed(1) + ',' + Y(r).toFixed(1);
        }
        return d;
      };
      let inner = '';
      [0, .25, .5, .75, 1].forEach((p) => { inner += `<line x1="${x0}" y1="${Y(p)}" x2="${x1}" y2="${Y(p)}" style="stroke:var(--line)"/><text class="svg-mono" x="${x0 - 8}" y="${Y(p) + 4}" text-anchor="end">${p * 100}%</text>`; });
      [0, 1, 3, 7, 14].forEach((d) => { inner += `<text class="svg-mono" x="${X(d)}" y="${y0 + 18}" text-anchor="middle">${d === 0 ? 'Aaj' : 'Din ' + d}</text>`; });
      inner += `<text class="svg-small" x="${x0}" y="${y0 + 40}">Kitna yaad hai (illustrative model, Ebbinghaus ke pattern par based)</text>`;
      inner += `<path id="fg-a" class="draw" d="${curve(false)}" style="fill:none;stroke:var(--ink-3);stroke-width:2.5;--dur:2.4s"/>`;
      inner += `<path id="fg-b" d="${curve(true)}" style="fill:none;stroke:${LC};stroke-width:3;opacity:0"/>`;
      inner += `<g id="fg-rev" style="opacity:0">${[1, 3, 7].map((d) => `<circle cx="${X(d)}" cy="${Y(1)}" r="5" style="fill:${LC}"/><text class="svg-small" x="${X(d)}" y="${Y(1) - 10}" text-anchor="middle" style="fill:var(--ink)">revise</text>`).join('')}</g>`;
      stage.innerHTML = u.svg(W, Hh + 10, inner, 'aria-label="Forgetting curve with and without spaced reviews"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const b = u.$('#fg-b', svg), rev = u.$('#fg-rev', svg);
      const set = (k) => {
        if (k === 1) {
          b.style.opacity = 1; b.classList.remove('draw'); void b.getBoundingClientRect(); b.classList.add('draw'); H.setLens(svg); rev.style.opacity = 1; rev.style.transition = 'opacity .6s .4s';
          H.info(stage, '<b>Spaced revision</b> (din 1, 3, 7): har review ke baad memory 100% par laut-ti hai aur agla girna <b>dheema</b> hota hai. 14ve din tak bina revision wale ~20% ke mukable yahan kaafi zyada yaad hai, aur kul padhai ka time bhi kam.');
        } else {
          b.style.opacity = 0; rev.style.opacity = 0;
          H.info(stage, '<b>Bina revision</b>: pehle din me hi zyada tar gayab, phir curve lagbhag flat. Ebbinghaus ne 20 minute me hi ~40% tak bhoolna dekha tha.');
        }
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Bina revision', 'Spaced revision'], set, 0));
      set(0);
      if (!u.reduced()) { const t1 = setTimeout(() => { u.$$('.seg button', ctrl)[1].click(); }, 2800); return () => clearTimeout(t1); }
    }
  });

  /* ---------- System 1 vs System 2 ---------- */
  V('system12', {
    title: 'System 1 vs System 2',
    render(stage) {
      const ex = [
        ['2 + 2 = ?', '4', '', ''],
        ['Bat + ball = ₹110. Bat ₹100 mehenga. Ball?', '₹10 (galat!)', 'Check: ball ₹10 → bat ₹110 → total ₹120 ✗', 'Ball ₹5 → bat ₹105 → total ₹110 ✓'],
        ['17 × 24 = ?', '"Kuch 400 ke aas-paas"', '17 × 20 = 340, 17 × 4 = 68', '340 + 68 = 408 ✓']
      ];
      stage.innerHTML = `<div class="compare" style="gap:12px">
        <div style="border-color:var(--warn)"><h4 style="color:var(--warn);display:flex;gap:8px;align-items:center">${PSY.icon('bolt')}System 1</h4><p class="muted" style="font-size:.85rem">Tez · automatic · intuitive</p><div class="mono" id="s1q" style="font-size:.95rem;min-height:2.6em"></div><div id="s1a" style="font-family:var(--font-display);font-size:1.6rem;font-weight:800;min-height:1.4em;color:var(--warn)"></div></div>
        <div style="border-color:var(--l3)"><h4 style="color:var(--l3);display:flex;gap:8px;align-items:center">${PSY.icon('brain')}System 2</h4><p class="muted" style="font-size:.85rem">Dheema · mehnati · logical</p><div class="mono" id="s2q" style="font-size:.95rem;min-height:2.6em"></div><div class="bar" style="--lc:var(--l3)"><span id="s2bar" style="--p:0%"></span></div><div id="s2a" style="font-size:.95rem;min-height:3em;line-height:1.5"></div></div>
      </div>`;
      const $ = (id) => u.$('#' + id, stage);
      let k = 0, tm = [];
      const run = () => {
        tm.forEach(clearTimeout); tm = [];
        const [q, a1, s1, s2] = ex[k];
        $('s1q').textContent = q; $('s2q').textContent = q; $('s1a').textContent = ''; $('s2a').innerHTML = ''; $('s2bar').style.setProperty('--p', '0%'); $('s2bar').style.transition = 'none';
        tm.push(setTimeout(() => { $('s1a').textContent = a1; }, 350));
        if (s1) {
          tm.push(setTimeout(() => { $('s2bar').style.transition = 'width 2.6s linear'; $('s2bar').style.setProperty('--p', '100%'); }, 500));
          tm.push(setTimeout(() => { $('s2a').innerHTML = s1; }, 1600));
          tm.push(setTimeout(() => { $('s2a').innerHTML = s1 + '<br><b style="color:var(--good)">' + s2 + '</b>'; }, 3200));
          H.info(stage, k === 1 ? 'System 1 ne turant pattern pakda (110 = 100 + 10) aur galat jawab diya. System 2 ne <b>check</b> kiya aur galti pakdi. Problem intelligence nahi, check na karna hai.' : 'Mushkil calculation me System 1 sirf andaza deta hai; asli jawab System 2 ki step-by-step mehnat se aata hai. Isliye ye thakaata hai.');
        } else {
          $('s2a').innerHTML = '<span class="muted">Zaroorat hi nahi padi. System 2 aaram kar raha hai.</span>';
          H.info(stage, 'Aasaan, jaane-pehchaane kaam System 1 bina mehnat ke kar leta hai. Zyada tar din hum isi par chalte hain.');
        }
        tm.push(setTimeout(() => { k = (k + 1) % ex.length; run(); }, s1 ? 6200 : 3000));
      };
      if (u.reduced()) { k = 1; const [q, a1, s1, s2] = ex[1]; $('s1q').textContent = q; $('s2q').textContent = q; $('s1a').textContent = a1; $('s2a').innerHTML = s1 + '<br><b style="color:var(--good)">' + s2 + '</b>'; $('s2bar').style.setProperty('--p', '100%'); return; }
      run();
      return () => tm.forEach(clearTimeout);
    }
  });

  /* ---------- Language milestones ---------- */
  V('languageStages', {
    title: 'Bolna seekhne ka safar',
    render(stage) {
      const W = 640, Hh = 270, x0 = 50, x1 = 610, y0 = 210, y1 = 60, M = 60;
      const X = (m) => x0 + m / M * (x1 - x0);
      const vocab = [[0, 0], [12, 5], [18, 50], [24, 300], [36, 1000], [48, 1500], [60, 2200]];
      const Y = (v) => y0 - v / 2400 * (y0 - y1);
      const ms = [[2, 'Cooing', '"Ooo... aaa"'], [6, 'Babbling', '"Ba-ba-ba, da-da"'], [12, 'Pehla shabd', '"Mama!"'], [21, 'Telegraphic', '"Mummy aao"'], [36, 'Sentences', '"Maine khana kha liya"'], [54, 'Kahaniyan', '"Kal hum zoo gaye the aur wahan..."']];
      let inner = `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" style="stroke:var(--ink-3)"/>`;
      [0, 12, 24, 36, 48, 60].forEach((m) => { inner += `<text class="svg-mono" x="${X(m)}" y="${y1 - 30}" text-anchor="middle">${m === 0 ? 'Janam' : m / 12 + ' saal'}</text><line x1="${X(m)}" y1="${y1 - 24}" x2="${X(m)}" y2="${y0}" style="stroke:var(--line);stroke-dasharray:2 4"/>`; });
      const d = vocab.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join('');
      inner += `<path class="fade" d="${d}L${X(60)},${y0}L${X(0)},${y0}Z" style="fill:${LC};opacity:.12;--delay:1.2s"/><path class="draw" d="${d}" style="fill:none;stroke:${LC};stroke-width:2.5;--dur:2.5s"/>`;
      inner += `<text class="svg-small" x="${X(60) - 4}" y="${Y(2200) - 8}" text-anchor="end">Bole jaane wale shabd (rough andaza): ~2,000+</text>`;
      ms.forEach(([m, n], i) => { inner += `<g class="hot ls" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><circle class="pop ls-c" cx="${X(m)}" cy="${y0}" r="7" style="fill:var(--surface);stroke:${LC};stroke-width:2.5;--delay:${(i * .15).toFixed(2)}s"/><line x1="${X(m)}" y1="${y0 + 8}" x2="${X(m)}" y2="${y0 + (i % 2 ? 40 : 24)}" style="stroke:var(--line)"/><text class="svg-small" x="${X(m)}" y="${y0 + (i % 2 ? 54 : 38)}" text-anchor="middle" style="fill:var(--ink);font-weight:700;font-size:10.5px">${n}</text></g>`; });
      inner += `<g id="ls-bub" style="transition:transform .6s cubic-bezier(.3,.9,.3,1)"><rect x="-90" y="-46" width="180" height="34" rx="10" style="fill:var(--ink)"/><path d="M-6 -12 L0 -2 L6 -12 Z" style="fill:var(--ink)"/><text id="ls-txt" x="0" y="-24" text-anchor="middle" class="svg-label" style="fill:var(--paper);font-size:12px"></text></g>`;
      stage.innerHTML = u.svg(W, Hh + 10, inner, 'aria-label="Language development milestones and vocabulary growth"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const bub = u.$('#ls-bub', svg), txt = u.$('#ls-txt', svg);
      let cur = 0;
      const show = (i) => {
        cur = i;
        const x = u.clamp(X(ms[i][0]), x0 + 90, x1 - 90);
        bub.style.transform = `translate(${x}px, ${y0 - 14}px)`;
        txt.textContent = ms[i][2];
        u.$$('.ls-c', svg).forEach((c, k) => { c.style.fill = k === i ? LC : 'var(--surface)'; });
        H.info(stage, `<b>~${ms[i][0] < 12 ? ms[i][0] + ' mahine' : (ms[i][0] / 12).toFixed(ms[i][0] % 12 ? 1 : 0) + ' saal'} · ${ms[i][1]}</b>: ${['Rone ke alawa "ooo, aaa" jaisi awaazein; maa ki awaaz ki lay pehchaanna.', 'Duniya ki lagbhag saari bhashaon ki sounds; ~10-12 mahine tak apni bhasha ki sounds par focus.', 'Ek shabd me poora matlab ("doodh!" = mujhe doodh chahiye).', 'Do-teen zaroori shabd; vocabulary spurt shuru.', 'Grammar ke niyam; kabhi overgeneralization ("goed").', 'Lambe sentences, kahaniyan, jokes aur context (pragmatics) ki samajh.'][i]}`);
      };
      bindPick(svg, '.ls', (i) => { clearInterval(iv); show(i); });
      show(0);
      if (u.reduced()) return;
      const iv = setInterval(() => show((cur + 1) % ms.length), 2400);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Gardner flower ---------- */
  V('gardner', {
    title: 'Gardner ki 8 intelligences',
    render(stage) {
      const I = [['Linguistic', 'Shabd aur bhasha: kavi, lekhak, vakeel.'], ['Logical-math', 'Logic, numbers, patterns: Ramanujan, programmers.'], ['Spatial', 'Images aur space: architect, pilot, chess player.'], ['Musical', 'Sur, taal, lay: gaayak, composer.'], ['Bodily', 'Sharir ka kushal upyog: athlete, dancer, surgeon.'], ['Interpersonal', 'Doosron ko samajhna: teacher, leader, salesperson.'], ['Intrapersonal', 'Khud ko samajhna: philosopher, counsellor.'], ['Naturalist', 'Prakriti ke patterns: kisan, botanist, birdwatcher.']];
      const cols = ['var(--l1)', 'var(--l2)', 'var(--l3)', 'var(--l4)', 'var(--l5)', 'var(--l6)', 'var(--l7)', 'var(--accent)'];
      const cx = 280, cy = 190, W = 560, Hh = 380;
      let inner = '';
      I.forEach(([n], i) => {
        const a = i * 45;
        const rad = (a - 90) * Math.PI / 180;
        const lx = cx + Math.cos(rad) * 158, ly = cy + Math.sin(rad) * 158;
        inner += `<g class="hot gd" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><g transform="rotate(${a} ${cx} ${cy})"><ellipse class="pop gd-p" cx="${cx}" cy="${cy - 72}" rx="30" ry="62" style="fill:${cols[i]};opacity:.5;--delay:${(i * .12).toFixed(2)}s"/></g><text class="svg-label fade" x="${lx}" y="${ly + 4}" text-anchor="middle" style="font-weight:700;font-size:12px;--delay:${(i * .12 + .3).toFixed(2)}s">${n}</text></g>`;
      });
      inner += `<circle cx="${cx}" cy="${cy}" r="34" class="pop" style="fill:var(--ink)"/><text x="${cx}" y="${cy + 5}" text-anchor="middle" class="svg-title" style="fill:var(--paper);font-size:14px">Aap</text>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Gardner multiple intelligences flower" style="max-width:520px;margin:0 auto"');
      const svg = stage.firstChild;
      let cur = 0;
      const show = (i) => {
        cur = i;
        u.$$('.gd', svg).forEach((g) => { const on = +g.dataset.i === i; u.$('.gd-p', g).style.opacity = on ? .95 : .4; });
        H.info(stage, `<b>${I[i][0]}</b>: ${I[i][1]}`);
      };
      bindPick(svg, '.gd', (i) => { clearInterval(iv); show(i); });
      show(0);
      if (u.reduced()) return;
      const iv = setInterval(() => show((cur + 1) % 8), 2200);
      return () => clearInterval(iv);
    }
  });
})();
