/* Motion graphics · part 5 (Level 5: social psychology) */
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

  /* ---------- Attribution ---------- */
  V('attribution', {
    title: 'Kaaran: insaan ya halaat?',
    render(stage) {
      const S = [
        ['Ek bike wale ne aapko overtake karke achanak cut kiya.', 'Kitna badtameez aur laaparwah hai!', 'Mujhe hospital pahunchna tha, isliye jaldi me tha.'],
        ['Class ke ek student ke exam me kam marks aaye.', 'Padhai nahi karta, aalsi hai.', 'Paper me out-of-syllabus sawaal the aur main beemar tha.'],
        ['Ek dost ne 2 din tak message ka jawab nahi diya.', 'Ghamandi ho gaya hai, ignore kar raha hai.', 'Itna busy tha ki phone dekh hi nahi paaya.']
      ];
      stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px">
        <div class="card" style="padding:14px 16px;background:var(--surface-2);border:0"><div class="eyebrow">Situation</div><p id="at-s" style="font-weight:700;margin-top:4px"></p></div>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center"><div id="at-who" style="width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--paper);font-family:var(--font-display);font-weight:800;font-size:.85rem;text-align:center;line-height:1.1"></div><div id="at-bub" style="position:relative;background:var(--surface);border:2px solid var(--line);border-radius:16px;padding:12px 14px;font-size:1.02rem;transition:all .4s"></div></div>
        <div><div class="row" style="justify-content:space-between;font-size:.8rem" ><span class="mono">PERSONALITY (internal)</span><span class="mono">SITUATION (external)</span></div>
        <div style="position:relative;height:14px;border-radius:99px;background:linear-gradient(90deg, var(--bad-soft), var(--surface-2), var(--good-soft));margin-top:6px"><span id="at-m" style="position:absolute;top:50%;width:22px;height:22px;border-radius:50%;background:${LC};border:3px solid var(--surface);transform:translate(-50%,-50%);transition:left .6s cubic-bezier(.3,1.3,.5,1);left:20%"></span></div></div>
      </div>`;
      const ctrl = H.ctrl(stage);
      let sc = 0, me = 0;
      const draw = () => {
        u.$('#at-s', stage).textContent = me ? S[sc][0].replace('Ek bike wale ne aapko', 'Aapne kisi ko').replace('Class ke ek student ke', 'Aapke').replace('Ek dost ne', 'Aapne ek dost ko').replace('jawab nahi diya', 'jawab nahi diya') : S[sc][0];
        u.$('#at-who', stage).textContent = me ? 'Main' : 'Woh';
        u.$('#at-bub', stage).textContent = '"' + S[sc][me ? 2 : 1] + '"';
        u.$('#at-bub', stage).style.borderColor = me ? 'var(--good)' : 'var(--bad)';
        u.$('#at-m', stage).style.left = me ? '80%' : '20%';
        H.info(stage, me ? '<b>Jab hum khud karte hain</b>: hum situation ko dekhte hain (jaldi, beemari, busy). Hamare paas apne halaat ki poori jaankari hoti hai.' : '<b>Jab doosra karta hai</b>: hum turant personality ko dosh dete hain (fundamental attribution error). Unke halaat humein dikhte nahi.');
      };
      const seg = H.seg(['Jab DOOSRA kare', 'Jab MAIN karun'], (i) => { me = i; draw(); stop(); }, 0);
      ctrl.appendChild(seg);
      const nx = u.el(`<button class="btn small ghost">Agla scenario ${PSY.icon('right')}</button>`);
      nx.onclick = () => { sc = (sc + 1) % S.length; draw(); stop(); };
      ctrl.appendChild(nx);
      draw();
      let iv = null;
      const stop = () => { if (iv) clearInterval(iv); iv = null; };
      if (!u.reduced()) iv = setInterval(() => { me = 1 - me; if (!me) sc = (sc + 1) % S.length; u.$$('button', seg).forEach((b, k) => b.classList.toggle('on', k === me)); draw(); }, 3200);
      return stop;
    }
  });

  /* ---------- Cognitive dissonance balance ---------- */
  V('dissonance', {
    title: 'Mann ka taraju',
    render(stage) {
      const opts = [
        ['Dissonance!', 'Main smoke karta hoon', 'Smoking jaanleva hai', 14, '', '<b>Dissonance</b>: behaviour aur belief takraa rahe hain. Mann me bechaini hai, jaise taraju ek taraf jhuk gaya ho. Dimaag ise balance karne ka raasta dhoondhega.'],
        ['Behaviour badlo', 'Maine smoking chhod di', 'Smoking jaanleva hai', 0, '', '<b>Behaviour badlo</b>: sabse healthy par sabse mushkil raasta. Behaviour aur belief ab mel khaate hain.'],
        ['Belief badlo', 'Main smoke karta hoon', '"Itna bhi khatarnak nahi"', 0, '', '<b>Belief badlo</b>: "dadaji 90 saal jiye the". Asli khatra wahi hai, par mann ko sukoon mil gaya.'],
        ['Naya vichaar jodo', 'Main smoke karta hoon', 'Smoking jaanleva hai', 3, 'Par main roz gym jaata hoon', '<b>Naya vichaar jodo</b>: ek "balance karne wala" vichaar dissonance ko kam karta hai, chahe logically kaam na kare.'],
        ['Importance ghatao', 'Main smoke karta hoon', '"Sab kuch hi to cancer karta hai"', 2, '', '<b>Importance ghatao</b>: khatre ko "normal" ya kam important bata kar bechaini dabana.']
      ];
      const W = 600, Hh = 260, cx = 300, py = 70;
      const inner = `<rect x="${cx - 6}" y="${py}" width="12" height="150" rx="4" style="fill:var(--ink-3)"/><rect x="${cx - 70}" y="218" width="140" height="14" rx="6" style="fill:var(--ink-3)"/>
        <g id="ds-beam" style="transform-origin:${cx}px ${py}px;transition:transform 1s cubic-bezier(.3,1.4,.5,1)">
          <rect x="${cx - 220}" y="${py - 5}" width="440" height="10" rx="5" style="fill:var(--ink-2)"/>
          <g id="ds-L"><line x1="${cx - 200}" y1="${py}" x2="${cx - 200}" y2="${py + 60}" style="stroke:var(--ink-3);stroke-width:2"/><path d="M${cx - 270} ${py + 60} h140 l-14 26 h-112 z" style="fill:var(--warn-soft);stroke:var(--warn);stroke-width:2"/><text id="ds-lt" class="svg-label" x="${cx - 200}" y="${py + 112}" text-anchor="middle" style="font-weight:700;font-size:12px">x</text></g>
          <g id="ds-R"><line x1="${cx + 200}" y1="${py}" x2="${cx + 200}" y2="${py + 60}" style="stroke:var(--ink-3);stroke-width:2"/><path d="M${cx + 130} ${py + 60} h140 l-14 26 h-112 z" style="fill:var(--l3);opacity:.25;stroke:var(--l3);stroke-width:2"/><text id="ds-rt" class="svg-label" x="${cx + 200}" y="${py + 112}" text-anchor="middle" style="font-weight:700;font-size:12px">x</text><text id="ds-extra" class="svg-small" x="${cx - 200}" y="${py + 128}" text-anchor="middle" style="fill:var(--good);font-weight:700"></text></g>
        </g>
        <circle cx="${cx}" cy="${py}" r="9" style="fill:var(--ink)"/>
        <text id="ds-title" class="svg-title" x="${cx}" y="26" text-anchor="middle" style="font-size:17px"></text>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Cognitive dissonance balance scale"');
      const svg = stage.firstChild;
      const beam = u.$('#ds-beam', svg);
      const set = (k) => {
        const [t, l, r, tilt, extra, msg] = opts[k];
        beam.style.transform = `rotate(${-tilt}deg)`;
        u.$('#ds-lt', svg).textContent = l; u.$('#ds-rt', svg).textContent = r; u.$('#ds-extra', svg).textContent = extra;
        u.$('#ds-extra', svg).setAttribute('x', 300 - 200 - 0);
        const tt = u.$('#ds-title', svg); tt.textContent = t; tt.style.fill = k === 0 ? 'var(--bad)' : 'var(--good)';
        H.info(stage, msg);
      };
      const ctrl = H.ctrl(stage);
      const seg = H.seg(opts.map((o) => o[0]), (k) => { stop(); set(k); }, 0);
      ctrl.appendChild(seg);
      set(0);
      let iv = null, cur = 0;
      const stop = () => { if (iv) clearInterval(iv); iv = null; };
      if (!u.reduced()) iv = setInterval(() => { cur = (cur + 1) % opts.length; u.$$('button', seg).forEach((b, i) => b.classList.toggle('on', i === cur)); set(cur); }, 3000);
      return stop;
    }
  });

  /* ---------- ELM ---------- */
  V('elm', {
    title: 'Persuasion ke do raaste',
    render(stage) {
      const W = 640, Hh = 260;
      let inner = `<defs><marker id="elm-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink-3)"/></marker></defs>`;
      const box = (x, y, w, t1, t2, id, fill = 'var(--surface-2)') => `<g id="${id}"><rect x="${x - w / 2}" y="${y - 24}" width="${w}" height="48" rx="12" style="fill:${fill};stroke:var(--line);stroke-width:2;transition:all .4s"/><text class="svg-label" x="${x}" y="${y - 3}" text-anchor="middle" style="font-weight:700;font-size:12px">${t1}</text><text class="svg-small" x="${x}" y="${y + 13}" text-anchor="middle">${t2}</text></g>`;
      inner += box(70, 130, 110, 'Message', 'ad, speech, post', 'elm-m');
      inner += `<polygon id="elm-d" points="240,90 320,130 240,170 160,130" style="fill:var(--surface-2);stroke:var(--line);stroke-width:2"/><text class="svg-small" x="240" y="126" text-anchor="middle" style="fill:var(--ink);font-weight:700">Motivated +</text><text class="svg-small" x="240" y="140" text-anchor="middle" style="fill:var(--ink);font-weight:700">samajh sakta?</text>`;
      inner += box(440, 60, 160, 'Central route', 'arguments ki quality', 'elm-c');
      inner += box(440, 200, 160, 'Peripheral route', 'celebrity, music, cues', 'elm-p');
      inner += box(590, 60, 90, 'Tikau', 'attitude', 'elm-c2');
      inner += box(590, 200, 90, 'Kamzor', 'jaldi badle', 'elm-p2');
      inner += `<path d="M125 130 H158" style="stroke:var(--ink-3);stroke-width:2" marker-end="url(#elm-ar)"/><path id="elm-pc" d="M300 112 C 330 80, 340 60, 358 60" style="fill:none;stroke:var(--ink-3);stroke-width:2" marker-end="url(#elm-ar)"/><path id="elm-pp" d="M300 148 C 330 180, 340 200, 358 200" style="fill:none;stroke:var(--ink-3);stroke-width:2" marker-end="url(#elm-ar)"/><path d="M520 60 H543" style="stroke:var(--ink-3);stroke-width:2" marker-end="url(#elm-ar)"/><path d="M520 200 H543" style="stroke:var(--ink-3);stroke-width:2" marker-end="url(#elm-ar)"/>`;
      inner += `<text class="svg-small" x="330" y="74" style="fill:var(--good);font-weight:700">Haan</text><text class="svg-small" x="330" y="194" style="fill:var(--bad);font-weight:700">Nahi</text><circle id="elm-dot" r="8" cx="70" cy="130" style="fill:${LC}"/>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Elaboration likelihood model flowchart"');
      const svg = stage.firstChild;
      const dot = u.$('#elm-dot', svg);
      let route = 0;
      const routes = [
        [[70, 130], [240, 130], [300, 112], [358, 60], [440, 60], [590, 60]],
        [[70, 130], [240, 130], [300, 148], [358, 200], [440, 200], [590, 200]]
      ];
      const set = (k) => {
        route = k;
        const hi = (sel, on, soft) => { const r = u.$(sel + ' rect', svg); r.style.fill = on ? soft : 'var(--surface-2)'; r.style.stroke = on ? LC : 'var(--line)'; r.style.strokeWidth = on ? 3 : 2; };
        hi('#elm-c', k === 0, 'var(--surface)'); hi('#elm-c2', k === 0, 'var(--good-soft)');
        hi('#elm-p', k === 1, 'var(--surface)'); hi('#elm-p2', k === 1, 'var(--warn-soft)');
        H.info(stage, k === 0 ? '<b>Central route</b>: naya laptop kharidne wala engineer processor, battery aur reviews dhyan se compare karta hai. Argument mazboot hain to attitude badalta hai aur <b>tikta</b> hai.' : '<b>Peripheral route</b>: raat 11 baje thaka vyakti TV ad me favourite actor aur catchy jingle dekh kar product pasand kar leta hai. Attitude jaldi badla, par jaldi palat bhi sakta hai.');
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Engineer laptop compare karta hai', 'Thaka vyakti TV ad dekhta hai'], set, 0));
      set(0);
      if (u.reduced()) return;
      return u.loop(stage, (t) => {
        const pts = routes[route];
        const f = ((t / 3200) % 1) * (pts.length - 1);
        const i = Math.floor(f), fr = f - i;
        const a = pts[i], b = pts[Math.min(i + 1, pts.length - 1)];
        dot.setAttribute('cx', a[0] + (b[0] - a[0]) * fr);
        dot.setAttribute('cy', a[1] + (b[1] - a[1]) * fr);
      });
    }
  });

  /* ---------- Asch (interactive) ---------- */
  V('asch', {
    title: 'Asch ka experiment: aapki baari',
    render(stage) {
      const rounds = [{ std: 120, opts: [90, 120, 155], correct: 1, wrong: null }, { std: 100, opts: [100, 70, 130], correct: 0, wrong: 2 }, { std: 140, opts: [110, 175, 140], correct: 2, wrong: 0 }];
      let r = 0, ally = false, tm = [], log = [];
      const names = ['Ravi', 'Sana', 'Kunal', 'Meera', 'Aditya', 'Neha'];
      const draw = () => {
        tm.forEach(clearTimeout); tm = [];
        const R = rounds[r];
        const W = 620, Hh = 330;
        let inner = `<rect x="20" y="10" width="580" height="170" rx="14" style="fill:var(--surface-2)"/><text class="svg-mono" x="40" y="34">STANDARD</text><text class="svg-mono" x="300" y="34">KAUNSI LINE BARABAR HAI?</text>`;
        inner += `<line x1="100" y1="${160 - R.std * 0.8}" x2="100" y2="160" style="stroke:var(--ink);stroke-width:7;stroke-linecap:round"/>`;
        R.opts.forEach((len, i) => { const x = 330 + i * 90; inner += `<line x1="${x}" y1="${160 - len * 0.8}" x2="${x}" y2="160" style="stroke:var(--ink);stroke-width:7;stroke-linecap:round"/><text class="svg-title" x="${x}" y="178" text-anchor="middle" style="font-size:14px">${'ABC'[i]}</text>`; });
        names.forEach((n, i) => { const x = 60 + i * 85; inner += `<circle cx="${x}" cy="260" r="24" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:2"/><text class="svg-small" x="${x}" y="300" text-anchor="middle" style="fill:var(--ink)">${n}</text><g class="as-b" data-i="${i}" style="opacity:0;transition:opacity .3s"><rect x="${x - 20}" y="198" width="40" height="30" rx="10" style="fill:var(--ink)"/><text class="as-t svg-title" x="${x}" y="219" text-anchor="middle" style="fill:var(--paper);font-size:15px"></text></g>`; });
        inner += `<circle cx="570" cy="260" r="26" style="fill:${LC}"/><text class="svg-title" x="570" y="265" text-anchor="middle" style="fill:var(--surface);font-size:13px">Aap</text>`;
        stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Asch line judgement task with group answers"') + `<div class="vis-ctrl" id="as-ctrl"></div>`;
        const svg = stage.firstChild;
        const ctrl = u.$('#as-ctrl', stage);
        H.info(stage, `<b>Round ${r + 1}/3</b>: ek-ek karke group jawab de raha hai... dhyan se suno.`);
        const answers = names.map((_, i) => (R.wrong === null || (ally && i === 3)) ? R.correct : R.wrong);
        names.forEach((_, i) => {
          tm.push(setTimeout(() => {
            const g = u.$(`.as-b[data-i="${i}"]`, svg);
            u.$('.as-t', g).textContent = 'ABC'[answers[i]];
            g.style.opacity = 1;
          }, u.reduced() ? 0 : 500 + i * 650));
        });
        tm.push(setTimeout(() => {
          H.info(stage, `Ab <b>aapki baari</b>. Sabne <b>"${'ABC'[answers[0]]}"</b> kaha${ally && R.wrong !== null ? ' (sirf Meera ne alag)' : ''}. Aapka jawab?`);
          ctrl.innerHTML = [0, 1, 2].map((i) => `<button class="btn small ${i === answers[0] ? 'lc' : 'ghost'}" data-a="${i}" style="min-width:64px">${'ABC'[i]}</button>`).join('');
          u.$$('[data-a]', ctrl).forEach((b) => b.addEventListener('click', () => answer(+b.dataset.a, answers[0])));
        }, u.reduced() ? 0 : 500 + names.length * 650 + 200));
      };
      const answer = (a, groupAns) => {
        const R = rounds[r];
        const critical = R.wrong !== null;
        log.push({ critical, conformed: critical && a === groupAns && a !== R.correct, right: a === R.correct });
        const ctrl = u.$('#as-ctrl', stage);
        let msg = a === R.correct ? (critical ? 'Aapne <b>sahi</b> jawab diya, group ke khilaf! Real lab me 6 asli logon ke saamne, chehre dekhte hue, ye kaafi mushkil hota hai.' : 'Sahi. Pehle round me group ne bhi sahi kaha, taaki aapka group par bharosa bane.') : (critical && a === groupAns ? 'Aapne <b>group ka saath</b> diya, jabki line ' + 'ABC'[R.correct] + ' sahi thi. Yahi normative influence hai.' : 'Ye jawab sahi nahi tha.');
        if (r < rounds.length - 1) {
          H.info(stage, msg);
          ctrl.innerHTML = `<button class="btn small" id="as-n">Agla round ${PSY.icon('right')}</button>`;
          u.$('#as-n', ctrl).onclick = () => { r++; draw(); };
        } else {
          const conf = log.filter((x) => x.conformed).length, crit = log.filter((x) => x.critical).length;
          H.info(stage, `${msg}<br><br><b>Result</b>: critical rounds me aapne ${conf}/${crit} baar group ka galat jawab chuna. Asch ki studies me ~37% critical jawab conform hue, ~75% logon ne kam se kam ek baar conform kiya. Aur jab group me sirf <b>ek saathi</b> sahi jawab deta tha, conformity bahut gir jaati thi.`);
          ctrl.innerHTML = `<button class="btn small ghost" id="as-a">${PSY.icon('replay')}Dobara</button><button class="btn small ghost" id="as-b">${ally ? 'Bina saathi ke' : 'Ek saathi ke saath'} try karo</button>`;
          u.$('#as-a', ctrl).onclick = () => { r = 0; log = []; draw(); };
          u.$('#as-b', ctrl).onclick = () => { ally = !ally; r = 0; log = []; draw(); };
        }
      };
      draw();
      return () => tm.forEach(clearTimeout);
    }
  });

  /* ---------- Social loafing (Ringelmann) ---------- */
  V('loafing', {
    title: 'Ringelmann ka rope pulling',
    render(stage) {
      const D = [[1, 100], [2, 93], [3, 85], [8, 49]];
      const W = 620, Hh = 300, x0 = 60, x1 = 600, y0 = 240, y1 = 30;
      const Y = (p) => y0 - p / 100 * (y0 - y1);
      const bw = 80;
      let inner = '';
      [0, 25, 50, 75, 100].forEach((p) => { inner += `<line x1="${x0}" y1="${Y(p)}" x2="${x1}" y2="${Y(p)}" style="stroke:var(--line)"/><text class="svg-mono" x="${x0 - 8}" y="${Y(p) + 4}" text-anchor="end">${p}%</text>`; });
      D.forEach(([n, p], i) => {
        const x = x0 + 40 + i * 135;
        inner += `<g class="hot lf" data-i="${i}" tabindex="0" role="button" aria-label="${n} log"><rect class="lf-r" x="${x}" y="${Y(p)}" width="${bw}" height="${y0 - Y(p)}" rx="6" style="fill:${LC};opacity:.75;transform-box:fill-box;transform-origin:bottom;animation:lfGrow .9s cubic-bezier(.2,.8,.2,1) both ${(i * .15).toFixed(2)}s"/><text class="svg-title" x="${x + bw / 2}" y="${Y(p) - 8}" text-anchor="middle" style="font-size:15px">${p}%</text><text class="svg-label" x="${x + bw / 2}" y="${y0 + 20}" text-anchor="middle" style="font-weight:700">${n} ${n === 1 ? 'vyakti' : 'log'}</text></g>`;
      });
      inner += `<text class="svg-small" x="${x0}" y="${y0 + 44}">Har vyakti ki mehnat (akele ke mukable), Ringelmann ke data ke andaze</text>`;
      stage.innerHTML = `<style>@keyframes lfGrow{from{transform:scaleY(0)}}</style>` + u.svg(W, Hh + 10, inner, 'aria-label="Per person effort falls as group size grows"') + '<div id="lf-rope"></div>';
      const svg = stage.querySelector('svg');
      const rope = u.$('#lf-rope', stage);
      const show = (i) => {
        const [n, p] = D[i];
        const total = (n * p / 100);
        const fig = (k) => `<g transform="translate(${60 + k * 46} 40)"><circle cx="0" cy="-26" r="7" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2"/><line x1="0" y1="-19" x2="-6" y2="0" style="stroke:var(--ink-2);stroke-width:3"/><line x1="-6" y1="0" x2="-14" y2="14" style="stroke:var(--ink-2);stroke-width:3"/><line x1="-6" y1="0" x2="2" y2="14" style="stroke:var(--ink-2);stroke-width:3"/><line x1="-2" y1="-12" x2="16" y2="-6" style="stroke:var(--ink-2);stroke-width:3"/></g>`;
        rope.innerHTML = u.svg(620, 70, `<line x1="40" y1="34" x2="${80 + n * 46}" y2="34" style="stroke:var(--warn);stroke-width:4"/>${Array.from({ length: n }, (_, k) => fig(k)).join('')}<text class="svg-label" x="610" y="30" text-anchor="end" style="font-weight:700">Kul taakat: ${total.toFixed(2)}× (umeed thi ${n}×)</text>`, 'aria-label="Rope pulling group"');
        u.$$('.lf-r', svg).forEach((r, k) => { r.style.opacity = k === i ? 1 : .45; });
        H.info(stage, n === 1 ? '<b>Akele</b>: poori taakat (100%).' : `<b>${n} log</b>: har vyakti sirf ~${p}% taakat laga raha hai. Kul taakat ${total.toFixed(2)} guna hai, jabki ${n} guna honi chahiye thi. "Koi aur bhi kheench raha hai" ka ehsaas mehnat ghata deta hai.`);
      };
      bindPick(svg, '.lf', (i) => { clearInterval(iv); show(i); });
      let cur = 3;
      show(cur);
      if (u.reduced()) return;
      const iv = setInterval(() => { cur = (cur + 1) % D.length; show(cur); }, 2600);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Robbers Cave ---------- */
  V('robbersCave', {
    title: 'Robbers Cave ke 4 phase',
    render(stage) {
      const P = [['Group banna', 15, 'Hafte 1: dono groups alag-alag camp me. Har group ne apna naam (Eagles, Rattlers), jhanda aur niyam banaye. Doosre group ka pata chalte hi "hum vs woh" shuru.'], ['Muqabla', 90, 'Hafte 2: tug-of-war, baseball, aur inaam sirf jeetne wale ko. Gaaliyan, jhanda jalana, cabin me tod-phod. Muqabla dushmani me badal gaya.'], ['Sirf contact', 80, 'Saath khana aur movie: contact hua, par dushmani kam nahi hui; khane ki ladaai ho gayi. Bina common goal ke contact kaafi nahi.'], ['Superordinate goals', 25, 'Paani ki supply theek karna, phansa truck milkar kheenchna, movie ke liye paise jodna: aise kaam jo dono milkar hi kar sakte the. Dheere-dheere dosti badhi.']];
      const W = 620, Hh = 250;
      const N = 8;
      let inner = `<rect x="20" y="20" width="420" height="200" rx="14" style="fill:var(--surface-2)"/>`;
      for (let i = 0; i < N * 2; i++) inner += `<circle class="rc-d" data-g="${i < N ? 0 : 1}" r="9" cx="0" cy="0" style="fill:${i < N ? 'var(--l3)' : 'var(--l2)'};transition:transform 1.1s cubic-bezier(.4,0,.2,1)"/>`;
      inner += `<g id="rc-lines"></g><text class="svg-small" x="100" y="40" style="fill:var(--l3);font-weight:700">Eagles</text><text class="svg-small" x="320" y="40" style="fill:var(--l2);font-weight:700">Rattlers</text>`;
      inner += `<text class="svg-mono" x="470" y="40">TENSION METER</text><rect x="500" y="50" width="40" height="160" rx="10" style="fill:var(--surface-2);stroke:var(--line)"/><rect id="rc-m" x="500" y="210" width="40" height="0" rx="10" style="fill:var(--bad);transition:all 1s"/><text id="rc-v" class="svg-title" x="580" y="140" style="font-size:16px"></text><text class="svg-small" x="470" y="232">(illustrative)</text>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Robbers Cave experiment phases with tension meter"');
      const svg = stage.firstChild;
      const dots = u.$$('.rc-d', svg);
      const seeds = dots.map(() => [Math.random(), Math.random()]);
      const layout = (k) => dots.map((d, i) => {
        const g = +d.dataset.g, s = seeds[i];
        if (k === 0) return [g ? 330 + s[0] * 80 : 70 + s[0] * 80, 70 + s[1] * 130];
        if (k === 1 || k === 2) { const row = i % N; return k === 1 ? [g ? 260 : 200, 60 + row * 20] : [80 + s[0] * 300, 60 + s[1] * 140]; }
        const a = (i / (N * 2)) * Math.PI * 2; return [230 + Math.cos(a) * 75, 120 + Math.sin(a) * 75];
      });
      const show = (k) => {
        const pos = layout(k);
        dots.forEach((d, i) => { d.style.transform = `translate(${pos[i][0]}px, ${pos[i][1]}px)`; });
        const ln = u.$('#rc-lines', svg);
        ln.innerHTML = '';
        if (k === 1) for (let i = 0; i < N; i++) ln.innerHTML += `<line x1="210" y1="${60 + i * 20}" x2="250" y2="${60 + i * 20}" style="stroke:var(--bad);stroke-width:2;stroke-dasharray:3 3;opacity:.7"/>`;
        if (k === 3) for (let i = 0; i < N * 2; i++) { const a = (i / (N * 2)) * Math.PI * 2, b = ((i + 1) / (N * 2)) * Math.PI * 2; ln.innerHTML += `<line x1="${230 + Math.cos(a) * 75}" y1="${120 + Math.sin(a) * 75}" x2="${230 + Math.cos(b) * 75}" y2="${120 + Math.sin(b) * 75}" style="stroke:var(--good);stroke-width:2.5"/>`; }
        const t = P[k][1];
        const m = u.$('#rc-m', svg);
        m.setAttribute('y', 210 - t * 1.6); m.setAttribute('height', t * 1.6);
        m.style.fill = t > 60 ? 'var(--bad)' : t > 35 ? 'var(--warn)' : 'var(--good)';
        u.$('#rc-v', svg).textContent = t + '%';
        H.info(stage, `<b>Phase ${k + 1}: ${P[k][0]}</b> · ${P[k][2]}`);
      };
      const ctrl = H.ctrl(stage);
      const seg = H.seg(P.map((p) => p[0]), (k) => { stop(); show(k); }, 0);
      ctrl.appendChild(seg);
      show(0);
      let iv = null, cur = 0;
      const stop = () => { if (iv) clearInterval(iv); iv = null; };
      if (!u.reduced()) iv = setInterval(() => { cur = (cur + 1) % 4; u.$$('button', seg).forEach((b, i) => b.classList.toggle('on', i === cur)); show(cur); }, 3400);
      return stop;
    }
  });

  /* ---------- Sternberg triangle ---------- */
  V('sternberg', {
    title: 'Triangle of love',
    render(stage) {
      const A = [300, 40], B = [90, 300], Cc = [510, 300];
      const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
      const items = [
        ['Intimacy (Liking)', A, 0, -14, 'Sirf <b>intimacy</b>: gehri dosti, samajh, bharosa. Best friend wala rishta.'],
        ['Passion (Infatuation)', B, -10, 30, 'Sirf <b>passion</b>: "pehli nazar ka pyaar", tez attraction bina gehri jaan-pehchaan ya commitment ke.'],
        ['Commitment (Empty love)', Cc, 10, 30, 'Sirf <b>commitment</b>: saath rehne ka faisla par na kareebi na passion. Kai lambe, thake rishte ya kuch shuruaati arranged shaadiyan jo samay ke saath bharti hain.'],
        ['Romantic love', mid(A, B), -78, 0, '<b>Intimacy + passion</b>: kareebi aur attraction, par abhi lambe commitment ka faisla nahi. College romance.'],
        ['Companionate love', mid(A, Cc), 82, 0, '<b>Intimacy + commitment</b>: gehri dosti aur saath ka vaada, passion shaant. Kai saalon purani khush shaadiyan.'],
        ['Fatuous love', mid(B, Cc), 0, 30, '<b>Passion + commitment</b>: jaldbazi me shaadi, bina gehri jaan-pehchaan ke. Jaldi toot sakti hai.'],
        ['Consummate love', [300, 210], 0, 0, '<b>Teeno</b>: intimacy, passion aur commitment. Aadarsh pyaar, par banaye rakhna lagataar mehnat maangta hai.']
      ];
      let inner = `<polygon class="draw" points="${A.join(',')} ${B.join(',')} ${Cc.join(',')}" style="fill:${LC};fill-opacity:.08;stroke:${LC};stroke-width:3;--dur:1.6s"/>`;
      items.forEach(([n, p, dx, dy], i) => {
        inner += `<g class="hot sb" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><circle class="pop sb-c" cx="${p[0]}" cy="${p[1]}" r="${i === 6 ? 16 : 10}" style="fill:var(--surface);stroke:${LC};stroke-width:3;--delay:${(0.8 + i * .15).toFixed(2)}s"/><text class="svg-label fade" x="${p[0] + dx}" y="${p[1] + dy + (i === 6 ? 34 : 4)}" text-anchor="middle" style="font-weight:700;font-size:12.5px;--delay:${(1 + i * .15).toFixed(2)}s">${n}</text></g>`;
      });
      stage.innerHTML = u.svg(600, 350, inner, 'aria-label="Sternberg triangular theory of love" style="max-width:560px;margin:0 auto"');
      const svg = stage.firstChild;
      H.setLens(svg);
      let cur = 6;
      const show = (i) => { cur = i; u.$$('.sb-c', svg).forEach((c, k) => { c.style.fill = k === i ? LC : 'var(--surface)'; }); H.info(stage, `<b>${items[i][0]}</b>: ${items[i][4]}`); };
      bindPick(svg, '.sb', (i) => { clearInterval(iv); show(i); });
      show(6);
      if (u.reduced()) return;
      const iv = setInterval(() => show((cur + 1) % items.length), 2700);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Bystander effect ---------- */
  V('bystander', {
    title: 'Bheed aur madad',
    render(stage) {
      const sets = [
        ['Seizure study (1968)', [['Sirf aap', 85, 0], ['Aap + 1', 62, 1], ['Aap + 4', 31, 4]], 'Darley aur Latané: seizure khatam hone se pehle kitne % ne madad ki. Zyada log = zimmedari bat gayi (diffusion of responsibility).'],
        ['Dhuen wala kamra (1968)', [['Akele', 75, 0], ['2 shaant logon ke saath', 10, 2]], 'Latané aur Darley: kitne % ne dhuan report kiya. Doosre shaant baithe the, to logon ne maan liya ki emergency nahi hai (pluralistic ignorance).']
      ];
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      const draw = (k) => {
        const [, data, note] = sets[k];
        const W = 620, Hh = 290, x0 = 60, y0 = 230, y1 = 30;
        const Y = (p) => y0 - p / 100 * (y0 - y1);
        let inner = '';
        [0, 25, 50, 75, 100].forEach((p) => { inner += `<line x1="${x0}" y1="${Y(p)}" x2="600" y2="${Y(p)}" style="stroke:var(--line)"/><text class="svg-mono" x="${x0 - 8}" y="${Y(p) + 4}" text-anchor="end">${p}%</text>`; });
        const bw = 90, gap = (540 - data.length * bw) / (data.length + 1);
        data.forEach(([n, p, others], i) => {
          const x = x0 + gap + i * (bw + gap);
          inner += `<rect x="${x}" y="${Y(p)}" width="${bw}" height="${y0 - Y(p)}" rx="6" style="fill:${LC};transform-box:fill-box;transform-origin:bottom;animation:byGrow .9s cubic-bezier(.2,.8,.2,1) both ${(i * .2).toFixed(1)}s"/><text class="svg-title" x="${x + bw / 2}" y="${Y(p) - 8}" text-anchor="middle" style="font-size:16px">${p}%</text><text class="svg-label" x="${x + bw / 2}" y="${y0 + 20}" text-anchor="middle" style="font-weight:700;font-size:12px">${n}</text>`;
          for (let o = 0; o <= others; o++) { const fx = x + bw / 2 + (o - others / 2) * 14; inner += `<circle cx="${fx}" cy="${y0 + 38}" r="5" style="fill:${o === 0 ? LC : 'var(--ink-3)'}"/>`; }
        });
        holder.innerHTML = `<style>@keyframes byGrow{from{transform:scaleY(0)}}</style>` + u.svg(W, Hh, inner, 'aria-label="Helping rates by number of bystanders"');
        H.info(stage, note);
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(sets.map((s) => s[0]), draw, 0));
      draw(0);
    }
  });
})();
