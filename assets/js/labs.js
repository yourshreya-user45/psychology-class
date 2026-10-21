/* Interactive labs. Each: { title, short, intro, icon, level, chapter, mins, about, render(stage, done) -> optional cleanup } */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u, icon } = { u: PSY.u, icon: PSY.icon };
  const L = PSY.lab;
  const ms = (x) => Math.round(x) + ' ms';
  const avg = (a) => (a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0);
  const resCards = (items) => `<div class="res-table">${items.map(([v, l]) => `<div class="card"><b>${v}</b><span>${l}</span></div>`).join('')}</div>`;

  /* ---------- Stroop ---------- */
  L('stroop', {
    title: 'Stroop test', icon: 'eye', level: 2, chapter: 'consciousness-sleep', mins: 3,
    short: 'Shabd ka rang batao, shabd nahi. Dekho automatic reading aapko kitna dheema karti hai.',
    intro: 'Screen par rang ke naam aayenge, kisi rang me likhe hue. Aapko <b>shabd ka RANG</b> chunna hai, jo likha hai wo nahi. Pehle 8 aasaan (match) trials, phir 8 mushkil (mismatch).',
    about: ['John Ridley Stroop ne 1935 me ye effect dikhaya. Padhna itna <b>automatic</b> ho chuka hai ki rang batate waqt bhi brain shabd padh leta hai, aur jab dono match nahi karte to ek <b>conflict</b> hota hai jise suljhane me time lagta hai.', 'Is conflict ko sambhalne ka kaam brain ka <b>anterior cingulate cortex</b> aur prefrontal cortex karte hain. Stroop test aaj bhi attention aur executive function naapne me use hota hai, jaise ADHD aur brain injury research me.'],
    render(stage, done) {
      const C = [['LAAL', '#e03131'], ['HARA', '#2b8a3e'], ['NEELA', '#1c7ed6'], ['BAINGANI', '#7048e8']];
      let trials = [], i = 0, t0 = 0, busy = false, res = { con: [], inc: [], err: 0 };
      const make = () => {
        const con = Array.from({ length: 8 }, () => { const k = Math.floor(Math.random() * 4); return { w: k, c: k, type: 'con' }; });
        const inc = Array.from({ length: 8 }, () => { const k = Math.floor(Math.random() * 4); let c; do { c = Math.floor(Math.random() * 4); } while (c === k); return { w: k, c, type: 'inc' }; });
        return con.concat(inc);
      };
      const intro = () => {
        stage.innerHTML = `<div class="lab-center"><p class="lab-q">Shabd ka <b>rang</b> chuno. Jaise <span style="color:#1c7ed6;font-weight:800">LAAL</span> ke liye jawab <b>Neela</b> hai.<br><span class="muted">Keyboard: 1 Laal · 2 Hara · 3 Neela · 4 Baingani</span></p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
        u.$('#go', stage).onclick = () => { trials = make(); i = 0; res = { con: [], inc: [], err: 0 }; next(); };
      };
      const next = () => {
        if (i >= trials.length) return finish();
        const tr = trials[i];
        const blockMsg = i === 0 ? 'Block 1: match' : i === 8 ? 'Block 2: mismatch' : '';
        stage.innerHTML = `<div class="lab-center"><div class="muted mono" style="font-size:.85rem">${blockMsg || 'Trial'} · ${i + 1}/16</div><div class="big-word" style="color:${C[tr.c][1]}">${C[tr.w][0]}</div><div class="lab-btns">${C.map(([n, col], k) => `<button class="color-btn" data-k="${k}" style="border-color:${col};color:${col}">${k + 1}. ${n[0] + n.slice(1).toLowerCase()}</button>`).join('')}</div><div id="fb" class="muted" style="min-height:1.5em"></div></div>`;
        u.$$('.color-btn', stage).forEach((b) => b.addEventListener('click', () => answer(+b.dataset.k)));
        busy = false;
        t0 = performance.now();
      };
      const answer = (k) => {
        if (busy || i >= trials.length) return;
        busy = true;
        const tr = trials[i];
        const rt = performance.now() - t0;
        if (k === tr.c) res[tr.type].push(rt); else res.err++;
        const fb = u.$('#fb', stage);
        if (fb) fb.textContent = k === tr.c ? '' : 'Galat rang!';
        i++;
        setTimeout(next, k === tr.c ? 250 : 650);
      };
      const key = (e) => { if (/^[1-4]$/.test(e.key) && u.$('.color-btn', stage)) answer(+e.key - 1); };
      document.addEventListener('keydown', key);
      const finish = () => {
        const a = avg(res.con), b = avg(res.inc);
        stage.innerHTML = `<div class="lab-center" style="gap:18px"><h3>Aapka Stroop effect: ${ms(b - a)}</h3>${resCards([[ms(a), 'Match (aasaan) average'], [ms(b), 'Mismatch (mushkil) average'], [res.err, 'Galtiyan']])}<p class="muted" style="max-width:56ch">${b > a ? 'Mismatch trials me aap dheeme the, kyunki brain ne shabd automatically padh liya aur use rokna pada.' : 'Wah! Is baar farak kam aaya. Dobara try karke dekho; aam taur par mismatch me 50-150 ms zyada lagta hai.'}</p><button class="btn ghost" id="again">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = intro;
        done();
      };
      intro();
      return () => document.removeEventListener('keydown', key);
    }
  });

  /* ---------- Reaction time ---------- */
  L('reaction', {
    title: 'Reaction time test', icon: 'timer', level: 2, chapter: 'neurons', mins: 2,
    short: 'Rang hara hote hi tap karo. Aankh se ungli tak signal kitni der me pahunchta hai?',
    intro: 'Box laal hoga. Jaise hi <b>hara</b> ho, turant tap karo (ya Space dabao). 5 rounds. Pehle tap kiya to round dobara hoga.',
    about: ['Ek simple visual reaction me signal ka raasta: aankh (retina) → optic nerve → thalamus → occipital lobe → frontal/motor cortex → spinal cord → motor neuron → ungli ki muscles. Ye sab aam taur par <b>200-300 ms</b> me ho jaata hai.', 'Neend ki kami, thakaan, sharaab aur phone par dhyan bantne se reaction time badh jaata hai. Isliye gaadi chalate waqt ek second ki der bhi kai meter ka farak bana deti hai.'],
    render(stage, done) {
      let times = [], state = 'idle', t0 = 0, timer = 0;
      stage.innerHTML = `<button class="react-pad" id="pad"></button><div id="rt-res"></div>`;
      const pad = u.$('#pad', stage), out = u.$('#rt-res', stage);
      const paint = (bg, text, fg = '#fff') => { pad.style.background = bg; pad.style.color = fg; pad.innerHTML = text; };
      const idle = () => { state = 'idle'; paint('var(--surface-2)', `${times.length ? 'Agla round' : 'Shuru karne ke liye'} tap karo<br><small style="font-size:.9rem;font-weight:400">Round ${times.length + 1} / 5</small>`, 'var(--ink)'); };
      const wait = () => { state = 'wait'; paint('#c92a2a', 'Ruko... hara hone ka intezaar'); timer = setTimeout(go, u.rand(1500, 4000)); };
      const go = () => { state = 'go'; paint('#2b8a3e', 'TAP!'); t0 = performance.now(); };
      const showRes = () => {
        const a = avg(times);
        out.innerHTML = `<div style="margin-top:16px;display:flex;flex-direction:column;gap:12px">${resCards([[ms(a), 'Aapka average'], [ms(Math.min(...times)), 'Sabse tez'], ['~250 ms', 'Aam vyakti ka average']])}<p class="muted">${a < 250 ? 'Bahut tez! Aapke neurons aur attention dono sharp hain.' : a < 350 ? 'Normal range me. Neend aur focus se thoda aur tez ho sakta hai.' : 'Thoda dheema. Thakaan, neend ki kami ya device ka lag bhi wajah ho sakta hai.'}</p><button class="btn ghost" id="again" style="align-self:start">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', out).onclick = () => { times = []; out.innerHTML = ''; idle(); };
      };
      const press = () => {
        if (state === 'idle') { if (times.length >= 5) return; wait(); }
        else if (state === 'wait') { clearTimeout(timer); state = 'early'; paint('var(--warn)', 'Bahut jaldi! Hara hone ka intezaar karo.<br><small style="font-size:.9rem;font-weight:400">Tap karke round dobara karo</small>'); }
        else if (state === 'early') { idle(); }
        else if (state === 'go') {
          const rt = performance.now() - t0;
          times.push(rt);
          state = 'shown';
          paint('var(--ink)', `${ms(rt)}<br><small style="font-size:.9rem;font-weight:400">${times.length < 5 ? 'Agle round ke liye tap karo' : 'Ho gaya!'}</small>`, 'var(--paper)');
          if (times.length >= 5) { showRes(); done(); }
        } else if (state === 'shown') { if (times.length < 5) wait(); }
      };
      pad.addEventListener('pointerdown', (e) => { e.preventDefault(); press(); });
      const key = (e) => { if (e.code === 'Space' && document.activeElement !== pad) { e.preventDefault(); press(); } };
      pad.addEventListener('keydown', (e) => { if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); press(); } });
      document.addEventListener('keydown', key);
      idle();
      return () => { clearTimeout(timer); document.removeEventListener('keydown', key); };
    }
  });

  /* ---------- Digit span ---------- */
  L('digitspan', {
    title: 'Digit span: working memory test', icon: 'grid', level: 3, chapter: 'memory', mins: 4,
    short: 'Ek-ek karke numbers dikhenge. Kitne lambe sequence yaad rakh paoge?',
    intro: 'Numbers ek-ek karke flash honge. Khatam hone par unhe usi order me type karo. Har sahi jawab par sequence 1 lamba hoga. Ek hi length par 2 baar galat hua to test khatam.',
    about: ['George Miller (1956) ne mashhoor paper me kaha ki short-term memory me lagbhag <b>7 ± 2</b> items aate hain. Baad ki research (jaise Nelson Cowan) ke hisaab se asli capacity lagbhag <b>4 "chunks"</b> hai, aur digit span me hum numbers ko chhote groups me jod kar (chunking) zyada yaad rakh lete hain.', 'Tip: agli baar 3-3 ya 2-2 digits ke groups me "bolkar" yaad karo (jaise phone number). Aapka score badh sakta hai. Yahi chunking hai.'],
    render(stage, done) {
      let len = 3, fails = 0, best = 0, seq = [], tmr = [];
      const clear = () => { tmr.forEach(clearTimeout); tmr = []; };
      const intro = () => {
        stage.innerHTML = `<div class="lab-center"><p class="lab-q">Taiyaar? Sequence 3 digits se shuru hoga.</p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
        u.$('#go', stage).onclick = () => { len = 3; fails = 0; best = 0; show(); };
      };
      const show = () => {
        seq = Array.from({ length: len }, () => Math.floor(Math.random() * 10));
        stage.innerHTML = `<div class="lab-center"><div class="muted mono">Length ${len}</div><div class="big-word mono" id="dg" aria-live="assertive"></div></div>`;
        const dg = u.$('#dg', stage);
        seq.forEach((d, k) => {
          tmr.push(setTimeout(() => { dg.textContent = d; }, 600 + k * 1000));
          tmr.push(setTimeout(() => { dg.textContent = ''; }, 600 + k * 1000 + 750));
        });
        tmr.push(setTimeout(ask, 600 + len * 1000 + 200));
      };
      const ask = () => {
        stage.innerHTML = `<div class="lab-center"><p class="lab-q">Ab sequence type karo:</p><input id="ans" type="text" inputmode="numeric" autocomplete="off" style="font-size:1.6rem;text-align:center;letter-spacing:.3em;max-width:320px" aria-label="Digits"><button class="btn lc" id="ok">Check karo</button></div>`;
        const inp = u.$('#ans', stage);
        inp.focus();
        const check = () => {
          const got = inp.value.replace(/\D/g, '');
          const ok = got === seq.join('');
          if (ok) { best = Math.max(best, len); len++; fails = 0; flash(true); }
          else { fails++; if (fails >= 2) return finish(); flash(false); }
        };
        u.$('#ok', stage).onclick = check;
        inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
      };
      const flash = (ok) => {
        stage.innerHTML = `<div class="lab-center"><div class="big-word" style="color:${ok ? 'var(--good)' : 'var(--bad)'};font-size:2.4rem">${ok ? 'Sahi!' : 'Galat'}</div><p class="muted">Sequence tha: <b class="mono">${seq.join(' ')}</b></p></div>`;
        tmr.push(setTimeout(show, 1300));
      };
      const finish = () => {
        stage.innerHTML = `<div class="lab-center"><h3>Aapka digit span: ${best || 'below 3'}</h3>${resCards([[best, 'Sabse lamba sahi sequence'], ['5 se 9', 'Aam adults ki range (forward span)']])}<p class="muted" style="max-width:54ch">${best >= 8 ? 'Zabardast! Shayad aap chunking use kar rahe the.' : best >= 6 ? 'Bilkul normal se achha. Chunking try karke dekho.' : 'Koi baat nahi, thakaan aur distraction score ghatate hain. Digits ko 2-3 ke groups me bolkar try karo.'}</p><button class="btn ghost" id="again">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = intro;
        done();
      };
      intro();
      return clear;
    }
  });

  /* ---------- Müller-Lyer ---------- */
  L('mullerlyer', {
    title: 'Müller-Lyer illusion', icon: 'eye', level: 2, chapter: 'sensation-perception', mins: 2,
    short: 'Neeche wali line ko upar wali ke barabar karo. Aapki aankh kitna dhoka khaati hai?',
    intro: 'Upar wali line fixed hai. Slider se neeche wali line ki lambai badlo jab tak dono <b>barabar lambi</b> na lagein. Phir "Check karo" dabao.',
    about: ['1889 me Franz Müller-Lyer ne ye illusion banaya. Bahar ki taraf khule "fins" wali line lambi aur andar ki taraf teer wali line chhoti lagti hai, jabki dono barabar ho sakti hain.', 'Ek explanation: hum 3D duniya me rehte hain, aur ye fins deewar ke kono jaise lagte hain: bahar khule fins door ke kone jaise (isliye brain line ko lamba "scale" karta hai) aur teer paas ke kone jaise. Kuch cross-cultural studies me kam seedhe-kono wale (carpentered) mahaul me rehne wale log is illusion se kam prabhavit paaye gaye.'],
    render(stage, done) {
      const STD = 220;
      let val = 220, revealed = false;
      const fin = (x, y, dir) => `<path d="M${x} ${y} l${dir * 22} -16 M${x} ${y} l${dir * 22} 16" style="stroke:var(--ink);stroke-width:3;fill:none;stroke-linecap:round"/>`;
      const draw = () => {
        const cx = 300;
        const a1 = cx - STD / 2, a2 = cx + STD / 2, b1 = cx - val / 2, b2 = cx + val / 2;
        stage.querySelector('#ml').innerHTML = u.svg(600, 220, `
          <line x1="${a1}" y1="60" x2="${a2}" y2="60" style="stroke:var(--ink);stroke-width:3"/>${fin(a1, 60, 1)}${fin(a2, 60, -1)}
          <line x1="${b1}" y1="160" x2="${b2}" y2="160" style="stroke:var(--ink);stroke-width:3"/>${fin(b1, 160, -1)}${fin(b2, 160, 1)}
          ${revealed ? `<line x1="${a1}" y1="40" x2="${a1}" y2="190" style="stroke:var(--lc);stroke-dasharray:4 4"/><line x1="${a2}" y1="40" x2="${a2}" y2="190" style="stroke:var(--lc);stroke-dasharray:4 4"/>` : ''}`, 'aria-label="Muller-Lyer illusion lines"');
      };
      stage.innerHTML = `<div id="ml"></div><div class="vis-ctrl"><label for="mlr">Neeche wali line ki lambai</label><input id="mlr" type="range" min="140" max="300" value="220" style="flex:1;min-width:180px"></div><div class="row"><button class="btn lc" id="chk">Check karo</button><button class="btn ghost" id="nofin">Fins hatao</button></div><div id="mlres"></div>`;
      const slider = u.$('#mlr', stage);
      val = 140 + Math.round(Math.random() * 160);
      slider.value = val;
      slider.oninput = () => { val = +slider.value; revealed = false; draw(); };
      u.$('#chk', stage).onclick = () => {
        revealed = true; draw();
        const err = ((val - STD) / STD * 100);
        u.$('#mlres', stage).innerHTML = `<div class="vis-info"><b>Upar: ${STD} px · Aapki neeche wali: ${val} px</b> (${err >= 0 ? '+' : ''}${err.toFixed(0)}%). ${err < -3 ? 'Aapne neeche wali line ko <b>chhota</b> rakha, kyunki bahar khule fins use lamba dikhate hain. Yahi illusion hai!' : err > 3 ? 'Dilchasp! Aapne line ko lamba rakha. Kai log ulta karte hain; dobara try karke dekho.' : 'Wah, kaafi sahi! Ab dashed lines ke bina dobara try karke dekho.'}</div>`;
        done();
      };
      u.$('#nofin', stage).onclick = () => {
        const cx = 300;
        stage.querySelector('#ml').innerHTML = u.svg(600, 220, `<line x1="${cx - STD / 2}" y1="60" x2="${cx + STD / 2}" y2="60" style="stroke:var(--ink);stroke-width:3"/><line x1="${cx - val / 2}" y1="160" x2="${cx + val / 2}" y2="160" style="stroke:var(--ink);stroke-width:3"/>`);
        u.$('#mlres', stage).innerHTML = '<div class="vis-info">Fins ke bina dekho, ab farak saaf dikhta hai. Slider chhoote hi fins wapas aa jaayenge.</div>';
      };
      draw();
    }
  });

  /* ---------- Visual search ---------- */
  L('visualsearch', {
    title: 'Visual search: pop-out vs dhoondhna', icon: 'search', level: 2, chapter: 'sensation-perception', mins: 3,
    short: 'Naarangi gola dhoondo. Kabhi wo turant "pop" hota hai, kabhi ek-ek karke dhoondhna padta hai.',
    intro: 'Har round me ek <b>naarangi gola</b> chhupa hai. Jitna jaldi ho sake us par tap karo. 8 rounds: kuch me baaki sab neele gole honge, kuch me naarangi squares bhi.',
    about: ['Anne Treisman ki <b>Feature Integration Theory</b> (1980): jab target sirf ek feature (rang) se alag ho, to wo <b>pop-out</b> karta hai aur items badhne par bhi search time lagbhag same rehta hai, kyunki brain parallel me sab dekhta hai.', 'Jab target do features ke combination (naarangi + gol) se pehchaana jaaye, to attention ko ek-ek item par jaana padta hai (<b>serial search</b>), isliye items badhne par time badhta hai. Isi wajah se bheed me dost ko dhoondhna mushkil hai, par laal kapdon wala turant dikh jaata hai.'],
    render(stage, done) {
      const plan = u.shuffle([['feature', 8], ['feature', 24], ['conj', 8], ['conj', 24], ['feature', 8], ['feature', 24], ['conj', 8], ['conj', 24]]);
      let k = 0, t0 = 0, R = { feature: { 8: [], 24: [] }, conj: { 8: [], 24: [] } };
      const shape = (type, col) => type === 'c' ? `<svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="11" fill="${col}"/></svg>` : `<svg width="26" height="26" viewBox="0 0 26 26"><rect x="3" y="3" width="20" height="20" rx="2" fill="${col}"/></svg>`;
      const OR = '#f76707', BL = '#1c7ed6';
      const intro = () => {
        stage.innerHTML = `<div class="lab-center"><p class="lab-q">Target: ${shape('c', OR)} naarangi gola. Taiyaar?</p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
        u.$('#go', stage).onclick = () => { k = 0; R = { feature: { 8: [], 24: [] }, conj: { 8: [], 24: [] } }; round(); };
      };
      const round = () => {
        if (k >= plan.length) return finish();
        const [type, n] = plan[k];
        const cells = [];
        const used = new Set();
        while (cells.length < n) {
          const cx = Math.floor(Math.random() * 8), cy = Math.floor(Math.random() * 6);
          const key = cx + ',' + cy;
          if (used.has(key)) continue;
          used.add(key);
          cells.push([(cx + .5) / 8 * 100 + u.rand(-3, 3), (cy + .5) / 6 * 100 + u.rand(-4, 4)]);
        }
        const items = cells.map(([x, y], idx) => {
          let html;
          if (idx === 0) html = shape('c', OR);
          else if (type === 'feature') html = shape('c', BL);
          else html = idx % 2 ? shape('s', OR) : shape('c', BL);
          return `<button style="left:${x}%;top:${y}%" data-t="${idx === 0 ? 1 : 0}" aria-label="${idx === 0 ? 'target' : 'distractor'}">${html}</button>`;
        });
        stage.innerHTML = `<div class="muted mono" style="font-size:.85rem;text-align:center">Round ${k + 1}/8</div><div class="search-field">${u.shuffle(items).join('')}</div>`;
        t0 = performance.now();
        u.$$('.search-field button', stage).forEach((b) => b.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          if (b.dataset.t !== '1') { b.style.opacity = .3; return; }
          R[type][n].push(performance.now() - t0);
          k++;
          stage.innerHTML = '<div class="lab-center"><div class="big-word" style="font-size:2rem;color:var(--good)">Mil gaya!</div></div>';
          setTimeout(round, 600);
        }));
      };
      const finish = () => {
        const f8 = avg(R.feature[8]), f24 = avg(R.feature[24]), c8 = avg(R.conj[8]), c24 = avg(R.conj[24]);
        stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px"><h3>Aapke results</h3><div class="table-wrap"><table><thead><tr><th>Search type</th><th>8 items</th><th>24 items</th><th>Farak</th></tr></thead><tbody><tr><td>Feature (sirf rang)</td><td>${ms(f8)}</td><td>${ms(f24)}</td><td>${ms(f24 - f8)}</td></tr><tr><td>Conjunction (rang + shape)</td><td>${ms(c8)}</td><td>${ms(c24)}</td><td>${ms(c24 - c8)}</td></tr></tbody></table></div><p class="muted">Theory ke hisaab se feature search me items badhne par farak chhota hona chahiye (pop-out), aur conjunction search me bada. Kya aapke data me aisa hua?</p><button class="btn ghost" id="again" style="align-self:start">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = intro;
        done();
      };
      intro();
    }
  });

  /* ---------- Serial position ---------- */
  L('serial', {
    title: 'Serial position effect', icon: 'cards', level: 3, chapter: 'memory', mins: 3,
    short: '15 shabd dekho aur jitne yaad hon likho. Shuru aur aakhir wale zyada yaad kyun rehte hain?',
    intro: '15 shabd ek-ek karke dikhenge (har ek ~1.5 second). Phir jitne bhi yaad hon, kisi bhi order me likho.',
    about: ['Murdock (1962) jaisi studies me list ke <b>shuru</b> ke shabd (primacy effect) aur <b>aakhir</b> ke shabd (recency effect) beech walon se zyada yaad rahe: ek U-shaped curve.', '<b>Primacy</b>: shuru ke shabdon ko rehearse karne ka zyada time milta hai, to wo long-term memory me chale jaate hain. <b>Recency</b>: aakhri shabd abhi short-term memory me taaze hain. Isliye interview me pehle aur aakhri candidate zyada yaad rehte hain, aur presentation ka shuru aur ant sabse important hota hai.'],
    render(stage, done) {
      const WORDS = ['Kitaab', 'Nadi', 'Chai', 'Bandar', 'Kursi', 'Baadal', 'Patang', 'Aam', 'Ghadi', 'Cycle', 'Mandir', 'Joota', 'Tota', 'Chaabi', 'Samosa'];
      let list = [], tmr = [];
      const lev = (a, b) => { const m = a.length, n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; };
      const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, '');
      const intro = () => {
        stage.innerHTML = `<div class="lab-center"><p class="lab-q">15 shabd aayenge. Dhyan se dekho, likhna nahi hai abhi.</p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
        u.$('#go', stage).onclick = run;
      };
      const run = () => {
        list = u.shuffle(WORDS);
        stage.innerHTML = '<div class="lab-center"><div class="big-word" id="w" aria-live="assertive"></div><div class="muted mono" id="wi"></div></div>';
        const w = u.$('#w', stage), wi = u.$('#wi', stage);
        list.forEach((word, k) => {
          tmr.push(setTimeout(() => { w.textContent = word; wi.textContent = `${k + 1}/15`; }, 500 + k * 1500));
          tmr.push(setTimeout(() => { w.textContent = ''; }, 500 + k * 1500 + 1150));
        });
        tmr.push(setTimeout(recall, 500 + 15 * 1500));
      };
      const recall = () => {
        stage.innerHTML = `<div class="field"><label for="rec">Jitne shabd yaad hain, likho (comma ya space se alag):</label><textarea id="rec" placeholder="jaise: chai, nadi, ..."></textarea></div><button class="btn lc" id="ok" style="align-self:start">Result dekho</button>`;
        u.$('#rec', stage).focus();
        u.$('#ok', stage).onclick = () => score(u.$('#rec', stage).value);
      };
      const score = (txt) => {
        const got = txt.split(/[\s,;]+/).map(norm).filter(Boolean);
        const hit = list.map((word) => got.some((g) => { const n = norm(word); return g === n || (g.length > 3 && lev(g, n) <= 1); }));
        const W = 600, Hh = 220, x0 = 40, bw = (W - x0 - 10) / 15;
        const typical = [.7, .58, .5, .44, .38, .35, .33, .32, .33, .36, .42, .52, .64, .78, .88];
        let inner = '';
        [0, .5, 1].forEach((p) => { inner += `<line x1="${x0}" y1="${180 - p * 150}" x2="${W - 10}" y2="${180 - p * 150}" style="stroke:var(--line)"/>`; });
        hit.forEach((h, k) => { inner += `<rect x="${x0 + k * bw + 3}" y="${h ? 30 : 176}" width="${bw - 6}" height="${h ? 150 : 4}" rx="3" style="fill:${h ? 'var(--lc)' : 'var(--surface-3)'}"/><text class="svg-mono" x="${x0 + k * bw + bw / 2}" y="198" text-anchor="middle">${k + 1}</text>`; });
        inner += `<path d="${typical.map((p, k) => (k ? 'L' : 'M') + (x0 + k * bw + bw / 2) + ',' + (180 - p * 150)).join('')}" style="fill:none;stroke:var(--ink);stroke-width:2.5;stroke-dasharray:6 4"/>`;
        inner += `<text class="svg-small" x="${x0}" y="214">List me position →</text>`;
        stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px"><h3>Aapko ${hit.filter(Boolean).length}/15 shabd yaad rahe</h3><div class="muted">Bars = aapke yaad kiye shabd (list ki position ke hisaab se). Dashed line = research me milne wala typical U-shaped pattern (illustrative).</div>${u.svg(W, 220, inner, 'aria-label="Your recall by list position"')}<p class="muted">List ka order tha: ${list.map((w, k) => `<span style="${hit[k] ? 'color:var(--good);font-weight:700' : ''}">${w}</span>`).join(', ')}</p><button class="btn ghost" id="again" style="align-self:start">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = intro;
        done();
      };
      intro();
      return () => tmr.forEach(clearTimeout);
    }
  });

  /* ---------- Pavlov simulator ---------- */
  L('pavlovsim', {
    title: 'Pavlov ka kutta: conditioning simulator', icon: 'bulb', level: 3, chapter: 'classical-conditioning', mins: 3,
    short: 'Ghanti aur khane ko jodo, phir sirf ghanti bajao. Dekho association kaise banti aur mitti hai.',
    intro: 'Buttons dabao aur graph dekho. Model simple hai (Rescorla-Wagner jaisa): har "Ghanti + Khana" trial association badhata hai, har "Sirf Ghanti" trial use ghatata hai.',
    about: ['Ivan Pavlov ne 1890s-1900s me dekha ki kutte khane ki awaaz ya assistant ke kadmon se hi laar tapkane lagte the. Unhone ghanti (neutral stimulus) ko khane (unconditioned stimulus) ke saath baar-baar joda. Kuch trials baad sirf ghanti se laar aane lagi: <b>conditioned response</b>.', 'Is simulator ka graph <b>Rescorla-Wagner model</b> (1972) ka simple roop hai: shuru me har trial se bahut seekhte hain, phir seekhna dheema hota jaata hai (learning curve). Sirf ghanti bajane par <b>extinction</b> hota hai, par association poori tarah mitti nahi; kuch samay baad <b>spontaneous recovery</b> dikhti hai.'],
    render(stage, done) {
      let V = 0, hist = [0], maxBefore = 0, count = 0;
      stage.innerHTML = `<div class="two-col" style="gap:18px;align-items:center"><div id="dog"></div><div id="graph"></div></div>
        <div class="row" style="justify-content:center"><button class="btn lc" data-a="pair">Ghanti + Khana</button><button class="btn ghost" data-a="bell">Sirf Ghanti</button><button class="btn ghost" data-a="food">Sirf Khana</button><button class="btn ghost" data-a="rest">Ek din baad</button><button class="btn ghost" data-a="reset">${icon('replay')}Reset</button></div><div class="vis-info" id="pmsg">Shuru me ghanti ek <b>neutral stimulus</b> hai: kutta bas kaan khada karta hai, laar nahi.</div>`;
      const dog = (drool, bell, food) => `<svg viewBox="0 0 240 180" role="img" aria-label="Dog">
        <ellipse cx="120" cy="140" rx="70" ry="28" style="fill:var(--surface-2)"/>
        <circle cx="105" cy="80" r="42" style="fill:var(--warn-soft);stroke:var(--ink-2);stroke-width:2"/>
        <ellipse cx="70" cy="62" rx="14" ry="26" transform="rotate(-20 70 62)" style="fill:var(--warn);opacity:.7"/>
        <ellipse cx="140" cy="62" rx="14" ry="26" transform="rotate(20 140 62)" style="fill:var(--warn);opacity:.7"/>
        <circle cx="92" cy="74" r="5" style="fill:var(--ink)"/><circle cx="120" cy="74" r="5" style="fill:var(--ink)"/>
        <ellipse cx="106" cy="98" rx="10" ry="7" style="fill:var(--ink)"/><path d="M96 108 q10 10 20 0" style="fill:none;stroke:var(--ink);stroke-width:2"/>
        ${Array.from({ length: Math.round(drool * 5) }, (_, k) => `<path d="M${100 + k * 4} 114 q2 ${10 + k * 4} 4 0" style="fill:#4dabf7;opacity:.85"><animate attributeName="opacity" values=".9;.4;.9" dur="1.2s" repeatCount="indefinite"/></path>`).join('')}
        ${bell ? `<g transform="translate(180 30)"><path d="M0 30 q0-26 18-26 q18 0 18 26 z" style="fill:var(--spark)"/><circle cx="18" cy="33" r="4" style="fill:var(--spark)"/><path d="M42 10 l10-6 M44 22 h12 M42 34 l10 6" style="stroke:var(--spark);stroke-width:2"/></g>` : ''}
        ${food ? `<g transform="translate(160 120)"><ellipse cx="22" cy="18" rx="26" ry="9" style="fill:var(--ink-3)"/><circle cx="14" cy="10" r="7" style="fill:var(--warn)"/><circle cx="28" cy="9" r="7" style="fill:var(--warn)"/></g>` : ''}
      </svg>`;
      const graph = () => {
        const W = 300, Hh = 180, x0 = 30, x1 = 290, y0 = 150, y1 = 14;
        const n = Math.max(10, hist.length - 1);
        const pts = hist.map((v, k) => [x0 + k / n * (x1 - x0), y0 - v * (y0 - y1)]);
        return u.svg(W, Hh + 10, `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" style="stroke:var(--ink-3)"/><line x1="${x0}" y1="${y1}" x2="${x0}" y2="${y0}" style="stroke:var(--ink-3)"/><text class="svg-small" x="${x0}" y="${y0 + 18}">Trials →</text><text class="svg-small" x="${x0 - 6}" y="${y1 + 4}" text-anchor="end">1</text><text class="svg-small" x="${x0 - 6}" y="${y0}" text-anchor="end">0</text><path d="${pts.map((p, k) => (k ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('')}" style="fill:none;stroke:var(--lc);stroke-width:3;stroke-linejoin:round"/>${pts.map((p) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3" style="fill:var(--lc)"/>`).join('')}<text class="svg-small" x="${x1}" y="${y1 + 4}" text-anchor="end">Association strength: ${V.toFixed(2)}</text>`, 'aria-label="Association strength over trials"');
      };
      const render = (bell, food, drool) => { u.$('#dog', stage).innerHTML = dog(drool, bell, food); u.$('#graph', stage).innerHTML = graph(); };
      const msg = (h) => { u.$('#pmsg', stage).innerHTML = h; };
      stage.addEventListener('click', (e) => {
        const b = e.target.closest('[data-a]');
        if (!b) return;
        const a = b.dataset.a;
        if (a === 'reset') { V = 0; hist = [0]; maxBefore = 0; count = 0; render(false, false, 0); msg('Reset. Ghanti phir se neutral hai.'); return; }
        if (a === 'pair') { V += 0.3 * (1 - V); maxBefore = Math.max(maxBefore, V); hist.push(V); render(true, true, 1); msg(V > .8 ? '<b>Acquisition lagbhag poora</b>: association ab mazboot hai. Ab "Sirf Ghanti" try karo.' : '<b>Acquisition</b>: ghanti (CS) aur khana (US) saath aaye. Khane se laar aayi (UR), aur ghanti ka khane se rishta badha.'); }
        if (a === 'bell') { const cr = V; V += 0.2 * (0 - V); hist.push(V); render(true, false, cr); msg(cr > .5 ? `<b>Conditioned response!</b> Sirf ghanti se laar aayi (CR, taakat ${cr.toFixed(2)}). Par khana nahi mila, to association thoda kamzor hua: <b>extinction</b> shuru.` : cr > .1 ? '<b>Extinction</b>: bina khane ke baar-baar ghanti, response kamzor ho raha hai.' : 'Ghanti par lagbhag koi response nahi. Ya to abhi seekha nahi, ya extinction ho chuka hai.'); }
        if (a === 'food') { hist.push(V); render(false, true, 1); msg('Sirf khana: laar aayi, par ye <b>unconditioned response</b> hai, seekhna nahi. Ghanti ka association nahi badla.'); }
        if (a === 'rest') { if (maxBefore > V + .05) { V += 0.35 * (maxBefore - V); hist.push(V); render(false, false, 0); msg('<b>Spontaneous recovery</b>: extinction ke baad kuch samay beetne par purana response kuch had tak wapas aa jaata hai. "Sirf Ghanti" se check karo!'); } else msg('Spontaneous recovery dekhne ke liye pehle association banao, phir extinction karo, phir "Ek din baad" dabao.'); }
        count++;
        if (count === 8) done();
      });
      render(false, false, 0);
    }
  });

  /* ---------- Cognitive Reflection Test ---------- */
  L('crt', {
    title: 'Cognitive Reflection Test', icon: 'brain', level: 3, chapter: 'thinking-decisions', mins: 3,
    short: '3 chhote sawaal jinka "turant wala" jawab galat hai. System 1 vs System 2 ka live demo.',
    intro: 'Teen sawaal. Har ek ka ek jawab turant dimaag me aayega. Rukiye aur check kariye.',
    about: ['Shane Frederick (2005) ka Cognitive Reflection Test naapta hai ki aap pehle intuitive jawab (System 1) ko rok kar dhyan se check (System 2) karte ho ya nahi. Top universities ke students me bhi bahut se log 3 me se 0-1 sahi kar paaye.', 'Ye intelligence ka test kam, aur "ruk kar sochne" ki aadat ka test zyada hai. Aur haan, ab aapne ye sawaal dekh liye, to agli baar ye kaam nahi karenge. Psychology research me isliye naye versions banaye jaate hain.'],
    render(stage, done) {
      const Q = [
        ['Ek bat aur ek ball milkar ₹110 ke hain. Bat, ball se ₹100 mehenga hai. Ball kitne rupaye ka hai?', 5, 10, 'Agar ball ₹10 ka ho to bat ₹110 ka, aur total ₹120. Sahi: ball ₹5, bat ₹105, total ₹110.'],
        ['5 machines 5 minute me 5 widgets banati hain. 100 machines ko 100 widgets banane me kitne minute lagenge?', 5, 100, 'Har machine 5 minute me 1 widget banati hai. 100 machines saath me 5 minute me 100 widgets.'],
        ['Ek jheel me kamal ke patte har din double ho jaate hain. 48 din me poori jheel dhak jaati hai. Aadhi jheel kitne din me dhaki thi?', 47, 24, 'Har din double: to poori jheel se ek din pehle aadhi thi, yaani 47ve din.']
      ];
      let k = 0, score = 0, intuitive = 0;
      const ask = () => {
        if (k >= Q.length) return finish();
        stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px"><div class="muted mono">Sawaal ${k + 1}/3</div><p class="lab-q">${Q[k][0]}</p><div class="row"><input id="ans" type="number" inputmode="decimal" style="max-width:180px;font-size:1.2rem" aria-label="Jawab"><button class="btn lc" id="ok">Submit</button></div><div id="fb"></div></div>`;
        const inp = u.$('#ans', stage);
        inp.focus();
        const sub = () => {
          if (inp.value === '') return;
          const v = +inp.value;
          const ok = v === Q[k][1];
          if (ok) score++; else if (v === Q[k][2]) intuitive++;
          u.$('#fb', stage).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${ok ? 'Sahi!' : v === Q[k][2] ? 'Ye System 1 ka turant wala jawab hai.' : 'Galat.'}</b> ${Q[k][3]}</div><button class="btn small ghost" id="nx" style="margin-top:10px">${k < 2 ? 'Agla sawaal' : 'Result'} ${icon('right')}</button>`;
          u.$('#ok', stage).disabled = true;
          u.$('#nx', stage).onclick = () => { k++; ask(); };
        };
        u.$('#ok', stage).onclick = sub;
        inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') sub(); });
      };
      const finish = () => {
        stage.innerHTML = `<div class="lab-center"><h3>Score: ${score}/3</h3>${resCards([[score, 'Sahi (System 2 jeeta)'], [intuitive, 'Intuitive galat jawab (System 1)']])}<p class="muted" style="max-width:56ch">Kahneman ke shabdon me System 1 tez aur automatic hai, System 2 dheema aur mehnati. Galti "bewakoofi" nahi, balki dimaag ka energy bachane ka shortcut hai.</p><button class="btn ghost" id="again">${icon('replay')}Dobara</button></div>`;
        u.$('#again', stage).onclick = () => { k = 0; score = 0; intuitive = 0; ask(); };
        done();
      };
      ask();
    }
  });

  /* ---------- Wason selection ---------- */
  L('wason', {
    title: 'Wason selection task', icon: 'cards', level: 3, chapter: 'thinking-decisions', mins: 3,
    short: 'Ek rule test karne ke liye kaunse cards palatne zaroori hain? Zyada tar log galat chunte hain.',
    intro: 'Har card ke ek taraf letter aur doosri taraf number hai. Rule check karne ke liye <b>sirf zaroori</b> cards chuno.',
    about: ['Peter Wason (1966) ka ye task dikhata hai ki hum rules ko <b>confirm</b> karne wale cards (E aur 4) chunte hain, jabki rule ko <b>galat saabit</b> kar sakne wale cards (E aur 7) chunne chahiye. Abstract version me ~10% log hi sahi karte hain.', 'Par jab wahi logic ek <b>social rule</b> me ho (jaise license aur gaadi), to zyada log sahi kar lete hain. Leda Cosmides jaise researchers ne kaha ki hamara dimaag "cheaters pakadne" me khaas taur par achha hai. Ye <b>confirmation bias</b> aur context-dependent reasoning ka classic example hai.'],
    render(stage, done) {
      const parts = [
        { rule: 'Rule: "Agar card ke ek taraf <b>vowel</b> hai, to doosri taraf <b>even number</b> hai."', cards: ['E', 'K', '4', '7'], ans: [0, 3], why: '<b>E</b> palatna zaroori (peeche odd mila to rule toota). <b>7</b> bhi zaroori (peeche vowel mila to rule toota). <b>4</b> palatna bekaar: peeche consonant ho tab bhi rule nahi tootta, kyunki rule ye nahi kehta ki even ke peeche vowel hi ho. Zyada tar log E aur 4 chunte hain: confirm karne ki aadat.' },
        { rule: 'Rule: "Agar koi <b>gaadi chala raha</b> hai, to uske paas <b>license</b> hona chahiye." Har card ke ek taraf kaam, doosri taraf license ki jaankari hai.', cards: ['Gaadi chala raha', 'Paidal', 'License hai', 'License nahi'], ans: [0, 3], why: '<b>Gaadi chala raha</b> aur <b>License nahi</b>: yahi do log rule tod sakte hain. Logic bilkul pehle wale jaisa hai, par social context me ye kaafi aasaan lagta hai, hai na?' }
      ];
      let p = 0, results = [];
      const show = () => {
        const P = parts[p];
        const sel = new Set();
        stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:16px"><div class="muted mono">Part ${p + 1}/2</div><p class="lab-q">${P.rule}</p><div class="wason-cards">${P.cards.map((c, k) => `<button class="wcard" data-k="${k}" style="${c.length > 2 ? 'width:112px;font-size:.95rem;padding:6px' : ''}" aria-pressed="false">${c}</button>`).join('')}</div><button class="btn lc" id="ok" style="align-self:center">Check karo</button><div id="fb"></div></div>`;
        u.$$('.wcard', stage).forEach((b) => b.addEventListener('click', () => { const k = +b.dataset.k; if (sel.has(k)) sel.delete(k); else sel.add(k); b.classList.toggle('on', sel.has(k)); b.setAttribute('aria-pressed', sel.has(k)); }));
        u.$('#ok', stage).onclick = () => {
          const ok = sel.size === P.ans.length && P.ans.every((a) => sel.has(a));
          results.push(ok);
          u.$('#fb', stage).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${ok ? 'Bilkul sahi!' : 'Nahi.'}</b> ${P.why}</div><button class="btn small ghost" id="nx" style="margin-top:10px">${p === 0 ? 'Part 2' : 'Result'} ${icon('right')}</button>`;
          u.$('#ok', stage).disabled = true;
          u.$('#nx', stage).onclick = () => { p++; if (p < parts.length) show(); else finish(); };
        };
      };
      const finish = () => {
        stage.innerHTML = `<div class="lab-center"><h3>Abstract: ${results[0] ? 'Sahi' : 'Galat'} · Social: ${results[1] ? 'Sahi' : 'Galat'}</h3><p class="muted" style="max-width:56ch">Logic dono me same tha. Agar social wala aasaan laga, to aapne khud dekh liya ki context reasoning ko kaise badalta hai.</p><button class="btn ghost" id="again">${icon('replay')}Dobara</button></div>`;
        u.$('#again', stage).onclick = () => { p = 0; results = []; show(); };
        done();
      };
      show();
    }
  });

  /* ---------- Big Five mini ---------- */
  L('bigfive', {
    title: 'Mini Big Five personality check', icon: 'user', level: 4, chapter: 'personality-traits', mins: 3,
    short: '10 sawaal, 5 traits (OCEAN). Apna personality profile radar chart par dekho.',
    intro: 'Har statement par batao ki ye aap par kitna lagu hota hai. Sahi ya galat jawab nahi hai. Ye sirf seekhne ke liye ek chhota sa demo hai, diagnosis nahi.',
    about: ['Big Five (OCEAN) personality research ka sabse zyada support wala model hai: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism. Ye traits continuum hain; har koi har trait me kahin beech me hota hai.', 'Ye 10-item version bahut chhota hai, isliye score sirf andaza hai. Gehra aur zyada reliable test ke liye IPIP (International Personality Item Pool) ke free, research-based tests dekho (Resources page par link hai).'],
    render(stage, done) {
      const items = [
        ['O', 1, 'Mujhe naye ideas, jagahein aur experiences try karna pasand hai.'],
        ['C', 1, 'Main apne kaam time par aur organized tareeke se karta/karti hoon.'],
        ['E', 1, 'Logon ke beech rehkar mujhe energy milti hai.'],
        ['A', 1, 'Main doosron ki feelings ka dhyan rakhta/rakhti hoon aur madad karna pasand karta/karti hoon.'],
        ['N', 1, 'Main jaldi stress, chinta ya ghabrahat me aa jaata/jaati hoon.'],
        ['O', -1, 'Mujhe routine aur jaani-pehchaani cheezein hi zyada achhi lagti hain.'],
        ['C', -1, 'Main aksar kaam last minute tak taal deta/deti hoon.'],
        ['E', -1, 'Bade group me main aksar chup aur peeche rehta/rehti hoon.'],
        ['A', -1, 'Main logon se jaldi bahas kar leta/leti hoon aur unki galtiyan jaldi pakad leta/leti hoon.'],
        ['N', -1, 'Mushkil waqt me bhi main aam taur par shaant rehta/rehti hoon.']
      ];
      const T = { O: ['Openness', 'Naye ideas, kala, curiosity', 'Practical, routine pasand'], C: ['Conscientiousness', 'Organized, disciplined, planner', 'Spontaneous, flexible, kabhi-kabhi bikhra'], E: ['Extraversion', 'Social, energetic, bolne wala', 'Shaant, reflective, chhote group pasand'], A: ['Agreeableness', 'Dayalu, cooperative, bharosa karne wala', 'Seedha, competitive, skeptical'], N: ['Neuroticism', 'Emotionally sensitive, jaldi chinta', 'Emotionally stable, shaant'] };
      const ans = new Array(items.length).fill(0);
      const labels = ['Bilkul nahi', 'Thoda', 'Beech me', 'Kaafi', 'Bilkul haan'];
      const form = () => {
        stage.innerHTML = `<div>${items.map((it, k) => `<div class="bf-item"><b style="font-size:.98rem">${k + 1}. ${it[2]}</b><div class="likert" role="radiogroup" aria-label="Statement ${k + 1}">${labels.map((l, v) => `<button role="radio" aria-checked="${ans[k] === v + 1}" class="${ans[k] === v + 1 ? 'on' : ''}" data-k="${k}" data-v="${v + 1}">${l}</button>`).join('')}</div></div>`).join('')}</div><div class="row" style="margin-top:8px"><button class="btn lc" id="ok">Profile dekho</button><span class="muted" id="left"></span></div>`;
        stage.addEventListener('click', pick);
        u.$('#ok', stage).onclick = result;
        upd();
      };
      const upd = () => { const n = ans.filter((a) => !a).length; const el = u.$('#left', stage); if (el) el.textContent = n ? `${n} sawaal baaki` : 'Sab ho gaye!'; };
      const pick = (e) => {
        const b = e.target.closest('.likert button');
        if (!b) return;
        const k = +b.dataset.k;
        ans[k] = +b.dataset.v;
        u.$$(`.likert button[data-k="${k}"]`, stage).forEach((x) => { const on = +x.dataset.v === ans[k]; x.classList.toggle('on', on); x.setAttribute('aria-checked', on); });
        upd();
      };
      const result = () => {
        if (ans.some((a) => !a)) { u.$('#left', stage).innerHTML = '<b style="color:var(--bad)">Pehle saare sawaalon ka jawab do.</b>'; return; }
        stage.removeEventListener('click', pick);
        const sc = {};
        ['O', 'C', 'E', 'A', 'N'].forEach((t) => {
          const vals = items.map((it, k) => it[0] === t ? (it[1] > 0 ? ans[k] : 6 - ans[k]) : null).filter((x) => x !== null);
          sc[t] = (avg(vals) - 1) / 4;
        });
        const keys = ['O', 'C', 'E', 'A', 'N'];
        const cx = 160, cy = 150, R = 110;
        const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
        let inner = '';
        [.25, .5, .75, 1].forEach((f) => { inner += `<polygon points="${keys.map((_, i) => pt(i, R * f).join(',')).join(' ')}" style="fill:none;stroke:var(--line)"/>`; });
        keys.forEach((k, i) => { const [x, y] = pt(i, R + 22); inner += `<line x1="${cx}" y1="${cy}" x2="${pt(i, R)[0]}" y2="${pt(i, R)[1]}" style="stroke:var(--line)"/><text class="svg-label" x="${x}" y="${y + 4}" text-anchor="middle" style="font-weight:700">${k}</text>`; });
        inner += `<polygon class="pop" points="${keys.map((k, i) => pt(i, R * Math.max(.04, sc[k])).join(',')).join(' ')}" style="fill:var(--lc);fill-opacity:.3;stroke:var(--lc);stroke-width:2.5"/>`;
        stage.innerHTML = `<div class="two-col" style="align-items:center">${u.svg(320, 310, inner, 'aria-label="Your Big Five profile radar chart" style="max-width:340px;margin:0 auto"')}<div style="display:flex;flex-direction:column;gap:10px">${keys.map((k) => `<div><div class="row" style="justify-content:space-between"><b>${T[k][0]}</b><span class="mono">${Math.round(sc[k] * 100)}%</span></div><div class="bar" style="margin:4px 0"><span style="--p:${Math.round(sc[k] * 100)}%"></span></div><small class="muted">${sc[k] >= .6 ? T[k][1] : sc[k] <= .4 ? T[k][2] : 'Beech me: situation ke hisaab se dono taraf'}</small></div>`).join('')}</div></div><p class="muted" style="font-size:.88rem">Yaad rakho: koi bhi profile "achha" ya "bura" nahi. Har trait ke apne fayde aur nuksaan hain. Ye 10-item demo sirf andaza deta hai.</p><button class="btn ghost" id="again" style="align-self:start">${icon('replay')}Dobara</button>`;
        u.$('#again', stage).onclick = () => { ans.fill(0); form(); };
        done();
      };
      form();
    }
  });

  /* ---------- Breathing ---------- */
  L('breathing', {
    title: 'Guided breathing', icon: 'wind', level: 4, chapter: 'stress-coping', mins: 2,
    short: 'Circle ke saath saans lo. 90 second me body ka brake (parasympathetic) on karo.',
    intro: 'Circle bada ho to saans andar, ruke to roko, chhota ho to dheere bahar. Kandhe aur jaw dheele rakho.',
    about: ['Dheemi saans, khaas kar <b>exhale ko inhale se lamba</b> rakhna, vagus nerve ke zariye parasympathetic system ko activate karti hai. Kai studies me slow breathing (lagbhag 6 saans per minute) se heart rate kam aur stress ki feeling ghatti dikhi hai.', '<b>Box breathing</b> (4-4-4-4) kuch army aur emergency professionals use karte hain. Ye koi jaadu nahi, par panic ke pehle ya exam se pehle ek simple, free tool hai jo kahin bhi chupchaap kiya ja sakta hai.'],
    render(stage, done) {
      const patterns = [['Calm 4-6', [['Saans andar', 4, 1.35], ['Dheere bahar', 6, .75]]], ['Box 4-4-4-4', [['Saans andar', 4, 1.35], ['Roko', 4, 1.35], ['Dheere bahar', 4, .75], ['Roko', 4, .75]]]];
      let pat = 0, running = false, tmr = [], cycles = 0;
      stage.innerHTML = `<div class="lab-center" style="gap:22px"><div class="breath" id="br" style="transform:scale(.75)">Taiyaar?</div><div class="mono muted" id="bc">0 / 6 cycles</div><div class="row" style="justify-content:center"><span id="segBox"></span><button class="btn lc" id="st">${icon('play')}Start</button></div></div>`;
      const br = u.$('#br', stage), bc = u.$('#bc', stage), st = u.$('#st', stage);
      u.$('#segBox', stage).appendChild(PSY.vh.seg(patterns.map((p) => p[0]), (i) => { pat = i; }, 0));
      const stopAll = () => { tmr.forEach(clearTimeout); tmr = []; running = false; };
      const phase = (steps, i) => {
        if (!running) return;
        if (i >= steps.length) { cycles++; bc.textContent = `${cycles} / 6 cycles`; if (cycles >= 6) { running = false; br.textContent = 'Shabash!'; br.style.transitionDuration = '1.5s'; br.style.transform = 'scale(1)'; st.innerHTML = `${icon('replay')}Dobara`; done(); return; } i = 0; }
        const [label, sec, scale] = steps[i];
        br.style.transitionDuration = sec + 's';
        br.style.transform = `scale(${scale})`;
        let left = sec;
        br.innerHTML = `${label}<br>${left}`;
        for (let s = 1; s < sec; s++) tmr.push(setTimeout(() => { left--; br.innerHTML = `${label}<br>${left}`; }, s * 1000));
        tmr.push(setTimeout(() => phase(steps, i + 1), sec * 1000));
      };
      st.onclick = () => {
        if (running) { stopAll(); br.textContent = 'Ruka hua'; st.innerHTML = `${icon('play')}Start`; return; }
        cycles = 0; bc.textContent = '0 / 6 cycles'; running = true; st.innerHTML = 'Stop';
        phase(patterns[pat][1], 0);
      };
      return stopAll;
    }
  });

  /* ---------- Anchoring ---------- */
  L('anchoring', {
    title: 'Anchoring bias experiment', icon: 'target', level: 7, chapter: 'cognitive-biases', mins: 2,
    short: 'Ek "random" number aapke andaze ko kitna kheench leta hai? Ek classic study dohrao.',
    intro: 'Pehle ek random number generate hoga. Phir do sawaal. Bas imaandaari se andaza lagao, Google mat karo!',
    about: ['Strack aur Mussweiler (1997) ne logon se poocha: "Kya Gandhi ji 9 saal se pehle gaye ya baad me?" ya "140 saal se pehle ya baad me?" Dono sawaal bewakoofi bhare the, par jinhe 9 mila unka average andaza ~50 saal aur jinhe 140 mila unka ~67 saal tha.', 'Pehla number ek <b>anchor</b> ban jaata hai aur hum usse thoda adjust karte hain, par kaafi nahi. Isliye shops "MRP ₹2,999, aaj sirf ₹999" dikhati hain, aur salary negotiation me pehla number bolna fayde ka hota hai.'],
    render(stage, done) {
      const anchor = Math.random() < .5 ? 9 : 140;
      stage.innerHTML = `<div class="lab-center"><p class="lab-q">Random number generator...</p><div class="big-word mono" id="rn">--</div><button class="btn lc" id="nx" hidden>Aage</button></div>`;
      const rn = u.$('#rn', stage);
      let n = 0;
      const iv = setInterval(() => { rn.textContent = Math.floor(Math.random() * 200); if (++n > 14) { clearInterval(iv); rn.textContent = anchor; u.$('#nx', stage).hidden = false; } }, 90);
      u.$('#nx', stage).onclick = () => {
        stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px"><p class="lab-q">1) Kya Mahatma Gandhi ki mrityu <b>${anchor} saal</b> ki umar se pehle hui ya baad me?</p><div class="row"><button class="btn ghost" data-q="pehle">Pehle</button><button class="btn ghost" data-q="baad">Baad me</button></div><div id="q2"></div></div>`;
        u.$$('[data-q]', stage).forEach((b) => b.addEventListener('click', () => {
          u.$$('[data-q]', stage).forEach((x) => { x.disabled = true; });
          u.$('#q2', stage).innerHTML = `<p class="lab-q">2) Aapke hisaab se unki umar exactly kitni thi?</p><div class="row"><input id="est" type="number" style="max-width:140px;font-size:1.2rem" aria-label="Umar ka andaza"><button class="btn lc" id="ok">Submit</button></div>`;
          const go = () => {
            const v = +u.$('#est', stage).value;
            if (!v) return;
            stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px"><h3>Sahi jawab: 78 saal (1869-1948)</h3>${resCards([[anchor, 'Aapka anchor'], [v, 'Aapka andaza'], [anchor === 9 ? '~50' : '~67', 'Study me is anchor wala average']])}<p>Original study me <b>9</b> wale group ka average andaza ~50 aur <b>140</b> wale ka ~67 tha. Aapko <b>${anchor}</b> mila tha. ${anchor === 9 ? (v < 78 ? 'Aapka andaza bhi neeche ki taraf kheencha gaya lagta hai.' : 'Aap anchor se kaafi bach gaye!') : (v > 78 ? 'Aapka andaza upar ki taraf kheencha gaya lagta hai.' : 'Aap anchor se kaafi bach gaye!')}</p><p class="muted">Ek insaan ke data se kuch saabit nahi hota, par bade groups me ye effect baar-baar milta hai. Dosto par try karo: aadhe ko 9, aadhe ko 140 do.</p></div>`;
            done();
          };
          u.$('#ok', stage).onclick = go;
          u.$('#est', stage).addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
          u.$('#est', stage).focus();
        }));
      };
      return () => clearInterval(iv);
    }
  });

  /* ---------- Framing ---------- */
  L('framing', {
    title: 'Framing effect: bachenge ya marenge?', icon: 'shuffle', level: 7, chapter: 'cognitive-biases', mins: 2,
    short: 'Same numbers, alag shabd. Kya shabd badalne se aapka faisla badal jaata hai?',
    intro: 'Ek mushkil faisla. Do options me se ek chuno.',
    about: ['Tversky aur Kahneman (1981) ke "Asian disease problem" me jab options "kitne <b>bachenge</b>" ke roop me diye gaye, 72% logon ne pakka option (A) chuna. Jab bilkul wahi options "kitne <b>marenge</b>" ke roop me diye gaye, 78% logon ne risky option (D) chuna.', 'Gain frame me hum risk se bachte hain, loss frame me risk lete hain: ye <b>prospect theory</b> ka hissa hai. Isliye "95% fat-free" "5% fat" se achha lagta hai, aur doctors "90% survival" bolein to log surgery zyada chunte hain bajaye "10% mortality" ke.'],
    render(stage, done) {
      const gain = Math.random() < .5;
      const opts = gain ? [['A', 'Program A: <b>200 log bachenge</b>.'], ['B', 'Program B: 1/3 chance hai ki <b>sab 600 bachenge</b>, aur 2/3 chance ki <b>koi nahi bachega</b>.']] : [['C', 'Program C: <b>400 log marenge</b>.'], ['D', 'Program D: 1/3 chance hai ki <b>koi nahi marega</b>, aur 2/3 chance ki <b>sab 600 marenge</b>.']];
      stage.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px"><p class="lab-q">Ek naye virus se <b>600 logon</b> ki jaan ko khatra hai. Health department ke paas do programs hain. Aap kaunsa chunoge?</p>${opts.map(([k, t]) => `<button class="opt" data-k="${k}"><span class="k">${k}</span><span>${t}</span></button>`).join('')}<div id="fb"></div></div>`;
      u.$$('.opt', stage).forEach((b) => b.addEventListener('click', () => {
        u.$$('.opt', stage).forEach((x) => { x.style.pointerEvents = 'none'; x.classList.toggle('ok', x === b); });
        const k = b.dataset.k;
        const sure = k === 'A' || k === 'C';
        u.$('#fb', stage).innerHTML = `<div class="explain">Aapne <b>${sure ? 'pakka' : 'risky'}</b> option chuna. Aapko <b>${gain ? '"bachenge" (gain)' : '"marenge" (loss)'}</b> frame mila tha. Doosre logon ko ye dikhaya gaya:<br><br>${gain ? '<b>C</b>: 400 log marenge. <b>D</b>: 1/3 chance koi nahi marega, 2/3 chance sab 600 marenge.' : '<b>A</b>: 200 log bachenge. <b>B</b>: 1/3 chance sab 600 bachenge, 2/3 chance koi nahi bachega.'}<br><br>Dhyan se dekho: <b>A aur C bilkul same hain</b> (600 me se 200 bachenge = 400 marenge), aur <b>B aur D bhi same</b>. Original study me gain frame me 72% ne pakka option chuna, loss frame me 78% ne risky. Sirf shabd badle, faisle palat gaye.</div>`;
        done();
      }));
    }
  });

  /* ---------- CBT thought record ---------- */
  L('thoughtrecord', {
    title: 'CBT thought record', icon: 'pen', level: 6, chapter: 'therapies', mins: 6,
    short: 'Ek pareshaan karne wale vichaar ko CBT ke steps se jaancho aur balanced thought banao.',
    intro: 'CBT ka sabse common worksheet. Ek haal ki situation lo jisne aapko pareshaan kiya. Aap chaho to pehle example dekh sakte ho. Jo likhoge wo kahin save ya bheja nahi jaata.',
    about: ['Aaron Beck ki <b>Cognitive Behavioral Therapy</b> ka core idea: situation khud nahi, uske baare me hamare <b>automatic thoughts</b> emotions paida karte hain. Thought record un vichaaron ko pakadne, unme <b>cognitive distortions</b> pehchaanne aur saboot ke saath ek balanced vichaar banane ki practice hai.', 'Research me CBT depression, anxiety aur kai doosri problems ke liye sabse zyada tested therapies me se hai. Par ye worksheet therapy ka replacement nahi. Agar udaasi ya chinta lambe samay se hai ya rozmarra rok rahi hai, to kisi professional se baat karo (Tele-MANAS: 14416).'],
    render(stage, done) {
      const D = ['All-or-nothing', 'Catastrophizing', 'Mind reading', 'Fortune telling', 'Overgeneralization', 'Labeling', 'Should statements', 'Personalization', 'Emotional reasoning', 'Mental filter'];
      const EX = { sit: 'Group project me maine idea diya aur do log hans pade.', thought: 'Sab mujhe bewakoof samajhte hain. Main kabhi kuch achha nahi bol sakta.', emo: 'Sharam, udaasi', before: 80, dist: [2, 4, 5], forv: 'Do log hanse. Kisi ne idea par aage baat nahi ki.', against: 'Hasi shayad kisi aur baat par thi (wo aapas me phone dekh rahe the). Pichhle hafte teacher ne mere idea ki taareef ki thi. Ek dost ne baad me poocha idea detail me kya tha.', bal: 'Mujhe pakka nahi pata wo kyun hanse. Mere kuch idea pehle saraahe gaye hain. Ek pal se main "bewakoof" nahi ban jaata. Agli meeting me idea ko thoda aur clearly samjhaunga.', after: 35 };
      const sel = new Set();
      stage.innerHTML = `<div class="row"><button class="btn ghost small" id="fill">${icon('pen')}Example bhar do</button><button class="btn ghost small" id="clr">Khaali karo</button></div>
        <div class="field"><label for="tr-sit">1. Situation: kya hua, kab, kahan?</label><textarea id="tr-sit"></textarea></div>
        <div class="field"><label for="tr-th">2. Automatic thought: us waqt dimaag me kya aaya?</label><textarea id="tr-th"></textarea></div>
        <div class="field"><label for="tr-emo">3. Emotion aur uski taakat</label><input type="text" id="tr-emo" placeholder="jaise: chinta, gussa, sharam"><div class="row"><input type="range" id="tr-b" min="0" max="100" value="70" style="flex:1"><b class="mono" id="tr-bv">70%</b></div></div>
        <div class="field"><label>4. Kaunse cognitive distortions dikhte hain?</label><small>Jo fit baithe un par tap karo. Har ek ka matlab Level 6 ke Therapy chapter me hai.</small><div class="distortions">${D.map((d, k) => `<button data-d="${k}" aria-pressed="false">${d}</button>`).join('')}</div></div>
        <div class="field"><label for="tr-for">5. Is thought ke <b>paksh</b> me saboot (sirf facts)</label><textarea id="tr-for"></textarea></div>
        <div class="field"><label for="tr-ag">6. Is thought ke <b>khilaf</b> saboot</label><textarea id="tr-ag"></textarea><small>Madad ke sawaal: Agar dost ke saath aisa hota to main use kya kehta? Kya main sirf negative cheezein dekh raha hoon?</small></div>
        <div class="field"><label for="tr-bal">7. Balanced thought</label><textarea id="tr-bal"></textarea></div>
        <div class="field"><label for="tr-a">8. Ab emotion kitna strong hai?</label><div class="row"><input type="range" id="tr-a" min="0" max="100" value="50" style="flex:1"><b class="mono" id="tr-av">50%</b></div></div>
        <button class="btn lc" id="tr-done" style="align-self:start">${icon('check')}Record complete karo</button><div id="tr-out"></div>`;
      const $ = (id) => u.$('#' + id, stage);
      const sync = () => { $('tr-bv').textContent = $('tr-b').value + '%'; $('tr-av').textContent = $('tr-a').value + '%'; };
      $('tr-b').oninput = sync; $('tr-a').oninput = sync;
      const paint = () => u.$$('.distortions button', stage).forEach((b) => { const on = sel.has(+b.dataset.d); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
      u.$('.distortions', stage).addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; const k = +b.dataset.d; if (sel.has(k)) sel.delete(k); else sel.add(k); paint(); });
      $('fill').onclick = () => { $('tr-sit').value = EX.sit; $('tr-th').value = EX.thought; $('tr-emo').value = EX.emo; $('tr-b').value = EX.before; $('tr-for').value = EX.forv; $('tr-ag').value = EX.against; $('tr-bal').value = EX.bal; $('tr-a').value = EX.after; sel.clear(); EX.dist.forEach((d) => sel.add(d)); paint(); sync(); };
      $('clr').onclick = () => { ['tr-sit', 'tr-th', 'tr-emo', 'tr-for', 'tr-ag', 'tr-bal'].forEach((id) => { $(id).value = ''; }); $('tr-b').value = 70; $('tr-a').value = 50; sel.clear(); paint(); sync(); $('tr-out').innerHTML = ''; };
      $('tr-done').onclick = () => {
        if (!$('tr-th').value.trim() || !$('tr-bal').value.trim()) { $('tr-out').innerHTML = '<div class="explain"><b class="no">Thoda aur bharo:</b> kam se kam automatic thought (2) aur balanced thought (7) likho.</div>'; return; }
        const b = +$('tr-b').value, a = +$('tr-a').value;
        $('tr-out').innerHTML = `<div class="explain" style="margin-top:6px"><b class="ok">Record complete.</b> Emotion ${b}% se ${a}% hua (${b - a >= 0 ? '−' : '+'}${Math.abs(b - a)} points). ${b - a >= 15 ? 'Ye CBT ka core mechanism hai: vichaar ko jaanchne se feeling badalti hai.' : 'Kabhi-kabhi farak chhota hota hai, aur ye bhi normal hai. Practice se ye skill mazboot hoti hai.'} Distortions pehchaane: ${sel.size ? [...sel].map((k) => D[k]).join(', ') : 'koi nahi chuna'}.</div>`;
        done();
      };
      sync();
    }
  });
})();
