/* Motion graphics · part 8 (Level 8: dark psychology & manipulation) */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u } = PSY;
  const V = PSY.visual;
  const H = PSY.vh;
  const icon = PSY.icon;
  const LC = 'var(--lc, var(--accent))';
  const bindPick = (root, sel, fn) => u.$$(sel, root).forEach((g) => {
    g.addEventListener('click', () => fn(+g.dataset.i));
    g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(+g.dataset.i); } });
  });
  const toggles = (stage, items, onChange) => {
    const ctrl = H.ctrl(stage);
    ctrl.innerHTML = items.map(([label], i) => `<button class="btn ghost small vt" data-i="${i}" aria-pressed="false">${label}</button>`).join('');
    const state = items.map(() => false);
    u.$$('.vt', ctrl).forEach((b) => b.addEventListener('click', () => {
      const i = +b.dataset.i;
      state[i] = !state[i];
      b.setAttribute('aria-pressed', state[i]);
      onChange(state, i);
    }));
    const set = (i, v) => { state[i] = v; const b = u.$(`.vt[data-i="${i}"]`, ctrl); if (b) b.setAttribute('aria-pressed', v); };
    return { ctrl, state, set };
  };

  /* ---------- Hot state: levers vs thinking capacity ---------- */
  V('hotState', {
    title: 'Hot state meter',
    render(stage) {
      const L = [['Darr', .22, 'Darr se amygdala alarm bajata hai: "pehle bacho, baad me socho".'], ['Laalach', .14, 'Bade inaam ki ummeed risk ko chhota dikhati hai.'], ['Jaldi', .2, 'Time ka dabaav sochne ka sabse bada dushman hai.'], ['Akelapan', .18, 'Koi poochhne wala nahi, to reality-check bhi nahi.'], ['Authority', .14, 'Uniform ya "sir" ke saamne sawaal poochhna mushkil lagta hai.'], ['Sharam', .12, 'Sharam insaan ko chup karati hai, aur chuppi scam ko lamba.']];
      const cx = 430, cy = 158;
      const around = ['Family se poochho', 'Official number', 'Kal tak ruko', 'Details padho', 'Doosra option', 'Google karo'];
      let inner = `<text class="svg-title" x="90" y="22" text-anchor="middle" style="font-size:13px">Emotion</text>
        <rect x="74" y="34" width="32" height="200" rx="16" style="fill:var(--surface-2);stroke:var(--line)"/>
        <circle cx="90" cy="252" r="28" id="hs-bulb" style="fill:var(--good);transition:fill .5s"/>
        <rect id="hs-fill" x="81" y="34" width="18" height="220" rx="9" style="fill:var(--good);transform-box:fill-box;transform-origin:bottom;transform:scaleY(.18);transition:transform .6s cubic-bezier(.2,.8,.2,1),fill .5s"/>
        ${[0, .25, .5, .75, 1].map((t) => `<line x1="110" x2="118" y1="${222 - t * 180}" y2="${222 - t * 180}" style="stroke:var(--ink-3)"/>`).join('')}
        <text class="svg-small" x="124" y="46">Hot</text><text class="svg-small" x="124" y="226">Cold</text>
        <text class="svg-title" x="${cx}" y="22" text-anchor="middle" style="font-size:13px">Attention ka daayra</text>
        <circle id="hs-field" cx="${cx}" cy="${cy}" r="108" style="fill:color-mix(in srgb, ${LC} 10%, transparent);stroke:${LC};stroke-width:2;transform-box:fill-box;transform-origin:center;transition:transform .7s cubic-bezier(.2,.8,.2,1)"/>`;
      around.forEach((t, i) => {
        const a = -Math.PI / 2 + i * Math.PI / 3, x = cx + Math.cos(a) * 66, y = cy + Math.sin(a) * 68 + 4;
        inner += `<text class="svg-label hs-opt" x="${x.toFixed(0)}" y="${y.toFixed(0)}" text-anchor="middle" style="font-size:12px;transition:opacity .5s">${t}</text>`;
      });
      inner += `<text id="hs-core" class="svg-title" x="${cx}" y="${cy + 5}" text-anchor="middle" style="font-size:14px">Socho</text>
        <rect x="190" y="292" width="390" height="14" rx="7" style="fill:var(--surface-2)"/>
        <rect id="hs-cap" x="190" y="292" width="390" height="14" rx="7" style="fill:var(--good);transform-box:fill-box;transform-origin:left;transition:transform .6s cubic-bezier(.2,.8,.2,1),fill .5s"/>
        <text class="svg-small" x="190" y="284">Sochne ki capacity</text><text id="hs-pct" class="svg-mono" x="580" y="284" text-anchor="end">100%</text>`;
      stage.innerHTML = u.svg(620, 320, inner, 'aria-label="Emotion levers aur sochne ki capacity"');
      const svg = stage.firstChild;
      const T = toggles(stage, L, (state, i) => update(state[i] ? i : -1));
      const pause = u.el(`<button class="btn lc small">${icon('wind')}Pause lo</button>`);
      T.ctrl.appendChild(pause);
      const update = (last) => {
        const heat = Math.min(1, L.reduce((s, l, i) => s + (T.state[i] ? l[1] : 0), 0));
        const col = heat > .6 ? 'var(--bad)' : heat > .3 ? 'var(--warn)' : 'var(--good)';
        const h = 40 + heat * 180;
        const f = u.$('#hs-fill', svg);
        f.style.transform = `scaleY(${(h / 220).toFixed(3)})`; f.style.fill = col;
        u.$('#hs-bulb', svg).style.fill = col;
        u.$('#hs-field', svg).style.transform = `scale(${(1 - heat * .58).toFixed(3)})`;
        u.$$('.hs-opt', svg).forEach((t, k) => { t.style.opacity = heat > (k + 1) * .11 ? 0 : 1; });
        u.$('#hs-core', svg).textContent = heat > .6 ? 'ABHI KARO!' : heat > .3 ? 'Jaldi...' : 'Socho';
        u.$('#hs-core', svg).style.fill = heat > .6 ? 'var(--bad)' : 'var(--ink)';
        const cap = 1 - heat * .85;
        const c = u.$('#hs-cap', svg);
        c.style.transform = `scaleX(${cap.toFixed(3)})`; c.style.fill = col;
        u.$('#hs-pct', svg).textContent = Math.round(cap * 100) + '%';
        const on = L.filter((_, i) => T.state[i]).map((l) => l[0]);
        H.info(stage, last >= 0 ? `<b>${L[last][0]}</b>: ${L[last][2]} ${on.length > 2 ? `Ab ${on.length} levers ek saath: attention ka daayra sikud gaya, options gayab. <b>Danger zone</b>: is haalat me koi faisla mat lo.` : ''}` : on.length ? `Abhi on: ${on.join(', ')}. Emotion ${Math.round(heat * 100)}%, sochne ki capacity ${Math.round(cap * 100)}%.` : 'Upar ke levers on karo. Har scam aur toxic rishta inme se kuch levers ek saath dabata hai. Phir <b>Pause lo</b> dabao.');
      };
      let timer = 0;
      pause.addEventListener('click', () => {
        clearTimeout(timer);
        const onIdx = T.state.map((v, i) => (v ? i : -1)).filter((i) => i >= 0);
        if (!onIdx.length) { H.info(stage, 'Abhi koi lever on nahi hai. Pehle kuch levers on karo, phir pause ka jaadu dekho.'); return; }
        const step = () => {
          const i = onIdx.shift();
          T.set(i, false);
          update(-1);
          if (onIdx.length) timer = setTimeout(step, 450);
          else H.info(stage, '<b>Pause</b> ne kaam kiya: call kaata, 10 gehri saans li, kisi apne se poocha, official number se check kiya. Levers ki pakad dheeli hui aur sochne ki capacity wapas aa gayi. Isiliye har scam tumhe <b>rukne nahi deta</b>.');
        };
        step();
      });
      update(-1);
      return () => clearTimeout(timer);
    }
  });

  /* ---------- Dark Triad / Tetrad / Light Triad ---------- */
  V('darkTriad', {
    title: 'Dark Triad aur D-factor',
    render(stage) {
      const MODES = {
        triad: [
          ['Narcissism', 250, 140, 'var(--l4)', 'Khud ko special maanna, tareef ki bhookh, entitlement. Signal: criticism par bhadakna, har baat me khud centre. Dhaal: tareef ke jaal me mat aao, behaviour par boundary rakho.'],
          ['Machiavellianism', 370, 140, 'var(--l5)', 'Thandi, lambi planning wali chaalbaazi: log seedhi hain. Signal: gossip se group todna, sahi waqt par jhooth. Dhaal: sab kuch likhit me, aur ek-ek baat cross-check.'],
          ['Psychopathy', 310, 238, 'var(--l2)', 'Kam empathy aur guilt, impulsivity, thrill, upar se smooth charm. Signal: bina pachhtave rule todna, tumhare dard par befikri. Dhaal: emotion kam dikhao, support system rakho, door raho.']
        ],
        light: [
          ['Kantianism', 250, 140, 'var(--good)', 'Logon ko saadhan nahi, insaan maanna. "Isse mujhe kya milega" ki jagah "ye insaan kaisa hai".'],
          ['Humanism', 370, 140, 'var(--accent)', 'Har insaan ki izzat aur gaurav ki kadar, chahe usse fayda ho ya na ho.'],
          ['Faith in humanity', 310, 238, 'var(--l3)', 'Ye bharosa ki zyada tar log andar se achhe hain. Kaufman (2019) ki research me zyada tar log is taraf jhuke mile.']
        ]
      };
      const sad = ['Everyday sadism', 310, 66, 'var(--bad)', 'Doosron ki takleef me maza. Buckels (2013): keede "peesne" wala kaam chunna; trolls me sabse common trait. Dhaal: trolls ko reaction mat do.'];
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      let mode = 0;
      const draw = () => {
        const set = mode === 2 ? MODES.light : MODES.triad;
        const circles = mode === 1 ? [...set, sad] : set;
        let inner = '';
        circles.forEach(([n, x, y, c], i) => {
          inner += `<g class="dt-c" data-i="${i}" tabindex="0" role="button" aria-label="${n}" style="cursor:pointer"><circle class="pop" cx="${x}" cy="${y}" r="${circles[i] === sad ? 58 : 96}" style="fill:${c};fill-opacity:.16;stroke:${c};stroke-width:2.5;--delay:${(i * .12).toFixed(2)}s"/></g>`;
        });
        circles.forEach(([n, x, y, c], i) => {
          const ty = circles[i] === sad ? y - 20 : y < 200 ? y - (mode === 1 ? 4 : 40) : y + 52;
          const tx = x < 300 ? x - 22 : x > 320 ? x + 22 : x;
          inner += `<text class="svg-label fade" x="${tx}" y="${ty}" text-anchor="middle" style="font-weight:700;fill:${c};pointer-events:none;--delay:.4s">${n}</text>`;
        });
        inner += `<circle class="pulse" cx="310" cy="172" r="24" style="fill:${mode === 2 ? 'var(--good)' : 'var(--deep)'}"/><text x="310" y="178" text-anchor="middle" class="svg-title" style="fill:${mode === 2 ? 'var(--surface)' : 'var(--on-deep)'};font-size:16px;pointer-events:none">${mode === 2 ? 'L' : 'D'}</text>`;
        holder.innerHTML = u.svg(620, 340, inner, `aria-label="${mode === 2 ? 'Light Triad' : 'Dark Triad'} Venn diagram"`);
        bindPick(holder, '.dt-c', (i) => {
          const c = circles[i];
          H.info(stage, `<b>${c[0]}</b>: ${c[4]}`);
        });
        H.info(stage, mode === 2 ? 'Light Triad: dark traits ka ulta. Har circle par click karo. Beech ka <b>L</b> in teeno ka common core: logon ki kadar.' : mode === 1 ? 'Dark Tetrad: upar naya circle <b>everyday sadism</b> ka hai. Beech ka <b>D</b> (D-factor): doosron ki keemat par apna fayda, aur use sahi thehrana.' : 'Teen traits alag hain par overlap karte hain. Beech ka <b>D</b> (D-factor) sabka common core hai. Har circle par click karo.');
      };
      const seg = H.seg(['Dark Triad', 'Dark Tetrad', 'Light Triad'], (i) => { mode = i; draw(); });
      const c = H.ctrl(stage);
      c.appendChild(seg);
      draw();
    }
  });

  /* ---------- Cycle of abuse with shrinking honeymoon ---------- */
  V('abuseCycle', {
    title: 'Abuse ka cycle',
    render(stage) {
      const S = [['Tension', 'var(--warn)', 'chhoti baat par chidchidapan, "andon par chalne" jaisa ehsaas. Victim sab theek rakhne ki koshish me laga rehta hai.'], ['Ghatna', 'var(--bad)', 'gussa, apmaan, dhamki, tod-phod ya hinsa. Phir aksar blame victim par: "tumne majboor kiya".'], ['Maafi aur pyaar', 'var(--l4)', 'honeymoon phase: maafi, tohfe, vaade, "ab kabhi nahi hoga". Yahi pyaar wala hissa intermittent reinforcement banata hai aur ummeed jagaata hai.'], ['Shaanti', 'var(--ink-3)', 'sab normal lagta hai, ghatna ko chhota maan liya jaata hai. Par tension dheere-dheere phir jama hone lagti hai.']];
      const cx = 200, cy = 170, R = 118;
      const props = (k) => {
        const H0 = Math.max(.08, .34 - .06 * k), Cc = Math.max(.1, .26 - .02 * k), I = .12;
        return [1 - H0 - Cc - I, I, H0, Cc];
      };
      const pt = (a, r = R) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
      const arc = (a0, a1) => { const [x0, y0] = pt(a0), [x1, y1] = pt(a1); return `M${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1.toFixed(1)},${y1.toFixed(1)}`; };
      let lap = 0, pos = 0, cur = -1;
      const history = [];
      const draw = () => {
        const p = props(lap);
        let a = -Math.PI / 2, inner = '';
        const bounds = [];
        p.forEach((f, i) => {
          const a1 = a + f * 2 * Math.PI;
          bounds.push([a, a1]);
          inner += `<path d="${arc(a + .02, a1 - .02)}" style="fill:none;stroke:${S[i][1]};stroke-width:26;stroke-linecap:butt;opacity:${cur === i ? 1 : .55};transition:opacity .3s"/>`;
          const [lx, ly] = pt((a + a1) / 2, R + 34);
          inner += `<g class="ac-s" data-i="${i}" tabindex="0" role="button" style="cursor:pointer"><text class="svg-label" x="${lx.toFixed(0)}" y="${(ly + 4).toFixed(0)}" text-anchor="middle" style="font-weight:700;fill:${S[i][1] === 'var(--ink-3)' ? 'var(--ink-2)' : S[i][1]}">${S[i][0]}</text></g>`;
          a = a1;
        });
        inner += `<circle id="ac-dot" r="11" style="fill:var(--ink);stroke:var(--surface);stroke-width:3"/>`;
        inner += `<text class="svg-title" x="${cx}" y="${cy - 4}" text-anchor="middle" style="font-size:22px">Chakkar ${lap + 1}</text><text class="svg-small" x="${cx}" y="${cy + 18}" text-anchor="middle">honeymoon ${Math.round(p[2] * 100)}% · tension ${Math.round(p[0] * 100)}%</text>`;
        inner += `<text class="svg-label" x="400" y="30" style="font-weight:700">Har chakkar me:</text>`;
        if (!history.length) inner += `<text class="svg-small" x="400" y="52">Chakkar poora hote hi yahan</text><text class="svg-small" x="400" y="67">tension aur pyaar ki lambai judegi.</text>`;
        history.forEach(([t, h], k) => {
          const y = 48 + k * 34;
          inner += `<text class="svg-mono" x="400" y="${y + 13}">#${k + 1}</text><rect x="430" y="${y}" width="${(t * 170).toFixed(0)}" height="10" rx="5" style="fill:var(--warn)"/><rect x="430" y="${y + 12}" width="${(h * 170).toFixed(0)}" height="10" rx="5" style="fill:var(--l4)"/>`;
        });
        if (history.length) inner += `<text class="svg-small" x="400" y="${66 + history.length * 34}"><tspan style="fill:var(--warn);font-weight:700">■</tspan> tension  <tspan style="fill:var(--l4);font-weight:700">■</tspan> maafi aur pyaar</text>`;
        stage.firstChild ? (stage.firstChild.outerHTML = u.svg(620, 340, inner, 'aria-label="Cycle of abuse"')) : stage.insertAdjacentHTML('afterbegin', u.svg(620, 340, inner, 'aria-label="Cycle of abuse"'));
        bindPick(stage.firstChild, '.ac-s', (i) => { cur = i; H.info(stage, `<b>${S[i][0]}</b>: ${S[i][2]}`); });
        draw.bounds = bounds;
        placeDot();
      };
      const placeDot = () => {
        const a = -Math.PI / 2 + pos * 2 * Math.PI;
        const [x, y] = pt(a);
        const d = u.$('#ac-dot', stage);
        if (d) { d.setAttribute('cx', x.toFixed(1)); d.setAttribute('cy', y.toFixed(1)); }
      };
      const stageAt = () => { const p = props(lap); let acc = 0; for (let i = 0; i < 4; i++) { acc += p[i]; if (pos < acc) return i; } return 3; };
      const nextLap = () => {
        const p = props(lap);
        history.push([p[0], p[2]]);
        lap++;
        if (lap > 6) { lap = 0; history.length = 0; H.info(stage, 'Cycle phir shuru... Asal zindagi me ye chakkar saalon chal sakta hai. Har baar "is baar sach me badal jaayega" wali ummeed honeymoon se hi aati hai.'); }
        draw();
      };
      draw();
      H.info(stage, 'Dot cycle par ghoom raha hai. Dekho har chakkar me <b>maafi aur pyaar</b> ka hissa chhota aur <b>tension</b> ka bada hota jaata hai. Kisi stage ke naam par click karo.');
      if (u.reduced()) {
        const c = H.ctrl(stage);
        const b = u.el(`<button class="btn ghost small">${icon('right')}Agla chakkar</button>`);
        c.appendChild(b);
        b.onclick = nextLap;
        return;
      }
      return u.loop(stage, (t, dt) => {
        pos += dt / 9000;
        if (pos >= 1) { pos -= 1; nextLap(); }
        const s = stageAt();
        if (s !== cur) { cur = s; draw(); H.info(stage, `<b>${S[s][0]}</b>: ${S[s][2]}`); }
        placeDot();
      });
    }
  });

  /* ---------- Dark patterns: fake checkout ---------- */
  V('darkPatterns', {
    title: 'Dark patterns pakdo',
    render(stage) {
      const P = [
        ['False urgency', 'Timer khatam hone par chupchaap phir 04:59 se shuru ho jaata hai. Asli deadline nahi, sirf jaldi karwane ka dabaav.', 'Page band karo, 10 minute baad aao.'],
        ['Fake social proof + scarcity', '"23 log dekh rahe hain, sirf 2 seats" aksar random number hota hai. Maksad: FOMO.', 'Doosri site ya app par check karo.'],
        ['Basket sneaking', 'Insurance ka box pehle se ticked hai. Tumne maanga nahi, phir bhi cart me hai.', 'Har ticked box khud dekho aur hatao.'],
        ['Sneaky default', 'Paid window seat pehle se select hai, free seat ka option chhota sa.', '"Skip" ya free seat dhoondo.'],
        ['Drip pricing', 'Shuru me ₹4,999 dikha, aakhri step par fees judkar ₹6,097. Ab itna aage aa gaye, to log maan lete hain.', 'Hamesha final total compare karo.'],
        ['Confirm shaming', '"Nahi, mujhe risk lena pasand hai": mana karna sharmnaak bana diya, taaki haan kehna aasaan lage.', 'Shabdon par nahi, apne faisle par dhyan do.'],
        ['Subscription trap', 'Free trial ke baad auto-renew, aur cancel ka raasta paanch menu andar, chhote grey font me.', 'Trial se pehle cancel ka tareeka dekho, reminder lagao.']
      ];
      stage.insertAdjacentHTML('beforeend', `<div class="dp-wrap">
        <div class="dp-phone" aria-label="Nakli checkout screen">
          <div class="dp-bar">${icon('left')}<b>Checkout</b><span>DEL → BOM</span></div>
          <div class="dp-row dp-hot dp-urgent" data-i="0" tabindex="0" role="button"><span class="dp-n">1</span>${icon('clock')}<span>Offer khatam hone me <b id="dpT">04:59</b></span></div>
          <div class="dp-row dp-hot" data-i="1" tabindex="0" role="button"><span class="dp-n">2</span>${icon('eye')}<span><b>23 log</b> abhi ye flight dekh rahe hain · sirf <b>2 seats</b> bachi!</span></div>
          <div class="dp-row dp-hot" data-i="2" tabindex="0" role="button"><span class="dp-n">3</span><span class="dp-check on">${icon('check')}</span><span>Travel insurance <b>₹299</b> <small>(recommended)</small></span></div>
          <div class="dp-row dp-hot" data-i="3" tabindex="0" role="button"><span class="dp-n">4</span><span class="dp-check on">${icon('check')}</span><span>Seat 12A (Window) <b>₹450</b> <small>free seat ke liye scroll karo</small></span></div>
          <div class="dp-row dp-hot dp-total" data-i="4" tabindex="0" role="button"><span class="dp-n">5</span><span>Total <b id="dpTot">₹4,999</b><small id="dpFee"></small></span></div>
          <button class="dp-cta" type="button">Haan, mujhe surakshit rehna hai</button>
          <div class="dp-row dp-hot dp-shame" data-i="5" tabindex="0" role="button"><span class="dp-n">6</span><span>Nahi, mujhe safar me risk lena pasand hai</span></div>
          <div class="dp-row dp-hot dp-fine" data-i="6" tabindex="0" role="button"><span class="dp-n">7</span><span>Prime trial ke baad ₹199/mahina auto-renew. Cancel: Settings › Account › Billing › Manage › More › Cancel</span></div>
        </div>
        <div class="dp-side"><div class="eyebrow">Pakde gaye</div><b class="dp-count"><span id="dpC">0</span>/7</b><ol class="dp-list"></ol></div>
      </div>`);
      const wrap = u.$('.dp-wrap', stage);
      const found = new Set();
      const list = u.$('.dp-list', wrap);
      const show = (i) => {
        u.$$('.dp-hot', wrap).forEach((r) => r.classList.toggle('sel', +r.dataset.i === i));
        if (!found.has(i)) {
          found.add(i);
          u.$(`.dp-hot[data-i="${i}"]`, wrap).classList.add('got');
          list.insertAdjacentHTML('beforeend', `<li>${P[i][0]}</li>`);
          u.$('#dpC', wrap).textContent = found.size;
        }
        H.info(stage, `<b>${i + 1}. ${P[i][0]}</b>: ${P[i][1]} <br>Dhaal: ${P[i][2]}${found.size === 7 ? '<br><br>Saare 7 pakad liye! Ab asli apps me bhi yahi nazar rakhna.' : ''}`);
      };
      bindPick(wrap, '.dp-hot', show);
      u.$('.dp-cta', wrap).addEventListener('click', () => {
        u.$('#dpTot', wrap).textContent = '₹6,097';
        u.$('#dpFee', wrap).textContent = ' (₹4,999 + seat ₹450 + insurance ₹299 + convenience fee ₹349)';
        show(4);
      });
      const ctrl = H.ctrl(stage);
      const xr = u.el(`<button class="btn ghost small" aria-pressed="false">${icon('search')}X-ray mode</button>`);
      ctrl.appendChild(xr);
      xr.onclick = () => { const on = !wrap.classList.contains('xray'); wrap.classList.toggle('xray', on); xr.setAttribute('aria-pressed', on); H.info(stage, on ? 'X-ray on: har chhupa dark pattern highlight hai. Ek-ek par click karke naam aur dhaal dekho.' : 'X-ray off.'); };
      H.info(stage, 'Ye ek nakli flight checkout hai. Isme <b>7 dark patterns</b> chhupe hain. Numbered hisson par click karke pakdo, ya "Haan, mujhe surakshit rehna hai" dabake dekho total ka kya hota hai.');
      let sec = 299;
      const id = setInterval(() => {
        sec = sec <= 0 ? 299 : sec - 1;
        const t = u.$('#dpT', wrap);
        if (t) t.textContent = `0${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      }, 1000);
      return () => clearInterval(id);
    }
  });

  /* ---------- Scam funnel with defences ---------- */
  V('scamFunnel', {
    title: 'Scam funnel aur tumhari dhaal',
    render(stage) {
      const STG = [['Hook', 'chaara'], ['Hot state', 'panic / laalach'], ['Isolation', '"kisi ko mat batana"'], ['Action', 'OTP, PIN, transfer'], ['Extraction', 'paisa gaya']];
      const D = [['Ruko, socho', 1, .35], ['Kisi apne ko batao', 2, .45], ['Official number se verify', 3, .4], ['OTP / PIN kabhi nahi', 3, .35]];
      const W = 620, top = 26, LH = 58, cx = 220, w0 = 380, w1 = 120;
      const wAt = (y) => w0 - (w0 - w1) * ((y - top) / (LH * 5));
      let inner = '';
      STG.forEach(([n, s], i) => {
        const y0 = top + i * LH, y1 = y0 + LH, a = wAt(y0) / 2, b = wAt(y1) / 2;
        inner += `<path d="M${cx - a},${y0} L${cx + a},${y0} L${cx + b},${y1} L${cx - b},${y1} Z" style="fill:color-mix(in srgb, ${i === 4 ? 'var(--bad)' : LC} ${10 + i * 4}%, transparent);stroke:var(--line)"/>`;
        inner += `<text class="svg-label" x="${cx + a + 14}" y="${y0 + 26}" style="font-weight:700">${i + 1}. ${n}</text><text class="svg-small" x="${cx + a + 14}" y="${y0 + 42}">${s}</text>`;
      });
      inner += `<g id="sf-dots"></g>`;
      inner += `<text class="svg-label" x="${cx}" y="${top + LH * 5 + 26}" text-anchor="middle"><tspan style="fill:var(--good);font-weight:700" id="sf-safe">0</tspan> bache · <tspan style="fill:var(--bad);font-weight:700" id="sf-lost">0</tspan> phanse</text>`;
      stage.innerHTML = u.svg(W, top + LH * 5 + 40, inner, 'aria-label="Scam funnel simulation"');
      const svg = stage.firstChild, g = u.$('#sf-dots', svg);
      const T = toggles(stage, D, () => { safe = 0; lost = 0; H.info(stage, msg()); });
      let dots = [], safe = 0, lost = 0, spawnT = 0;
      const NS = 'http://www.w3.org/2000/svg';
      const escP = (layer) => .05 + D.reduce((s, d, i) => s + (T.state[i] && d[1] === layer ? d[2] : 0), 0);
      const msg = () => {
        const on = D.filter((_, i) => T.state[i]).map((d) => d[0]);
        return on.length ? `Dhaal on: <b>${on.join(', ')}</b>. Dekho ab kitne dots beech ki seedhiyon par hi <span style="color:var(--good);font-weight:700">bach</span> nikalte hain.` : 'Bina dhaal ke lagbhag har dot neeche tak pahunch jaata hai. Neeche ke buttons se ek-ek dhaal on karo.';
      };
      H.info(stage, msg());
      const spawn = () => {
        const c = document.createElementNS(NS, 'circle');
        c.setAttribute('r', 5);
        c.style.fill = 'var(--ink-2)';
        g.appendChild(c);
        dots.push({ el: c, x: cx + (Math.random() - .5) * (w0 - 40), y: top + 4, vx: 0, layer: 0, st: 0, life: 1 });
      };
      return u.loop(stage, (t, dt) => {
        spawnT += dt;
        if (spawnT > 420 && dots.length < 46) { spawnT = 0; spawn(); }
        dots.forEach((d) => {
          if (d.st === 0) {
            d.y += dt * .055;
            const half = wAt(d.y) / 2 - 8;
            d.x = cx + u.clamp(d.x - cx, -half, half);
            const L = Math.floor((d.y - top) / LH);
            if (L > d.layer && L < 5) {
              d.layer = L;
              if (Math.random() < escP(L)) { d.st = 1; d.vx = (d.x < cx ? -1 : 1) * .12; d.el.style.fill = 'var(--good)'; safe++; }
            }
            if (d.y >= top + LH * 5 - 6) { d.st = 2; d.el.style.fill = 'var(--bad)'; lost++; }
          } else {
            if (d.st === 1) d.x += d.vx * dt; else d.y += dt * .02;
            d.life -= dt / 900;
            d.el.style.opacity = Math.max(0, d.life);
          }
          d.el.setAttribute('cx', d.x.toFixed(1));
          d.el.setAttribute('cy', d.y.toFixed(1));
        });
        dots = dots.filter((d) => { if (d.life <= 0) { d.el.remove(); return false; } return true; });
        u.$('#sf-safe', svg).textContent = safe;
        u.$('#sf-lost', svg).textContent = lost;
      });
    }
  });

  /* ---------- BITE model ---------- */
  V('bite', {
    title: 'BITE model',
    render(stage) {
      const Q = [
        ['B', 'Behaviour', 40, 24, ['Kab sona, kya khaana, kya pehenna, kisse milna, sab group tay karta hai. Har cheez ke liye permission. Naukri chhodna ya saari kamaai daan karwana.', 'Routine aur niyam ho sakte hain, par apni zindagi ke faisle member khud leta hai. "Na" kehne par saza nahi.']],
        ['I', 'Information', 360, 24, ['Bahar ki news, purane dost, critics: sab "negative" ya "dushman". Sirf group ka literature padho. Andar bhi info ke levels: sach dheere-dheere.', 'Bahar ki kitaabein, news aur aalochna padhna normal. Group ke paise aur faislon ke baare me transparency.']],
        ['T', 'Thought', 40, 196, ['"Doubt = ego/kamzori." Thought-stopping mantras, ek hi sach, "hum vs wo". Sawaal poochhna gunah.', 'Sawaal aur asahmati welcome. Leader bhi galat ho sakta hai, aur ye maana jaata hai.']],
        ['E', 'Emotion', 360, 196, ['Darr (group chhoda to barbaadi), guilt (tum kabhi kaafi nahi), love bombing aur phir pyaar chheen lena. Chhodne walon se rishta tod dena.', 'Support aur apnapan, par chhodne par na darr, na rishte tootne ki dhamki.']]
      ];
      let mode = 0, pick = -1;
      const holder = u.el('<div></div>');
      stage.appendChild(holder);
      const cxy = [310, 172];
      const draw = () => {
        const col = mode === 0 ? 'var(--bad)' : 'var(--good)';
        let inner = '';
        Q.forEach(([k, n, x, y], i) => {
          const ccx = x + 110, ccy = y + 60;
          inner += `<line x1="${cxy[0]}" y1="${cxy[1]}" x2="${ccx}" y2="${ccy}" style="stroke:${col};stroke-width:2;stroke-dasharray:${mode === 0 ? '0' : '5 6'};opacity:.6"/>`;
          inner += `<g class="bt-q" data-i="${i}" tabindex="0" role="button" aria-label="${n}" style="cursor:pointer"><rect class="pop" x="${x}" y="${y}" width="220" height="120" rx="16" style="fill:var(--surface);stroke:${pick === i ? col : 'var(--line)'};stroke-width:${pick === i ? 3 : 1.5};--delay:${(i * .1).toFixed(1)}s"/><text class="svg-title" x="${x + 22}" y="${y + 58}" style="font-size:44px;fill:${col}">${k}</text><text class="svg-label" x="${x + 74}" y="${y + 52}" style="font-weight:700">${n}</text><text class="svg-small" x="${x + 74}" y="${y + 72}">${mode === 0 ? 'control' : 'azaadi'}</text></g>`;
        });
        inner += `<circle class="pop" cx="${cxy[0]}" cy="${cxy[1]}" r="44" style="fill:${mode === 0 ? 'var(--deep)' : 'var(--surface-2)'};stroke:${col};stroke-width:2"/><text class="svg-label" x="${cxy[0]}" y="${cxy[1] + 5}" text-anchor="middle" style="font-weight:700;fill:${mode === 0 ? 'var(--on-deep)' : 'var(--ink)'}">${mode === 0 ? 'Leader' : 'Group'}</text>`;
        inner += `<g id="bt-p"></g>`;
        holder.innerHTML = u.svg(620, 344, inner, 'aria-label="BITE model diagram"');
        bindPick(holder, '.bt-q', (i) => { pick = i; draw(); H.info(stage, `<b>${Q[i][1]} ${mode === 0 ? 'control' : '(healthy group)'}</b>: ${Q[i][4][mode]}`); });
      };
      const seg = H.seg(['Controlling group', 'Healthy group'], (i) => { mode = i; draw(); H.info(stage, i === 0 ? 'Controlling group me control <b>leader se bahar</b> ki taraf behta hai: behaviour, information, thought, emotion, chaaron par. Kisi hisse par click karo.' : 'Healthy group me baat <b>dono taraf</b> behti hai: sawaal, asahmati aur exit sab safe. Kisi hisse par click karo.'); });
      H.ctrl(stage).appendChild(seg);
      draw();
      H.info(stage, 'Controlling group me control <b>leader se bahar</b> ki taraf behta hai: behaviour, information, thought, emotion, chaaron par. Kisi hisse par click karo.');
      if (u.reduced()) return;
      const NS = 'http://www.w3.org/2000/svg';
      return u.loop(stage, (t) => {
        const gp = u.$('#bt-p', holder);
        if (!gp) return;
        if (!gp.childNodes.length) for (let k = 0; k < 8; k++) { const c = document.createElementNS(NS, 'circle'); c.setAttribute('r', 4); gp.appendChild(c); }
        u.$$('circle', gp).forEach((c, k) => {
          const q = Q[k % 4], tx = q[2] + 110, ty = q[3] + 60;
          let f = ((t / 2200) + k * .13) % 1;
          if (mode === 1 && k >= 4) f = 1 - f;
          c.setAttribute('cx', (cxy[0] + (tx - cxy[0]) * f).toFixed(1));
          c.setAttribute('cy', (cxy[1] + (ty - cxy[1]) * f).toFixed(1));
          c.style.fill = mode === 0 ? 'var(--bad)' : 'var(--good)';
          c.style.opacity = (1 - Math.abs(f - .5) * 1.4).toFixed(2);
        });
      });
    }
  });

  /* ---------- Assertiveness spectrum ---------- */
  V('assertSpectrum', {
    title: 'Jawab ka spectrum',
    render(stage) {
      const STY = [['Passive', .08, 'var(--l3)'], ['Passive-aggressive', .3, 'var(--l5)'], ['Assertive', .5, 'var(--good)'], ['Aggressive', .92, 'var(--bad)']];
      const SIT = [
        ['Friday 6 baje report', ['"Haan haan, koi baat nahi, ho jaayega." (poora weekend kharab, andar gussa)', '"Theek hai... jaisa aap kahein." (phir report jaanbujh kar adhoori)', '"Monday tak poori report mumkin nahi. Ek page ka summary Monday subah mil jaayega, baaki Wednesday tak."', '"Har baar mujhe hi kyun? Ye mera kaam nahi hai!"']],
        ['Dost ko loan guarantee', ['"Achha... theek hai, laao, sign kahan karna hai." (raat bhar neend nahi)', '"Haan, dekhenge." (phir uske calls ignore karna)', '"Guarantee dena mere liye mumkin nahi. Chalo, doosre loan options saath me dhoondhte hain."', '"Pagal ho kya? Apni problem khud sambhalo."']],
        ['Rishtedaar ka shaadi taunt', ['Chup rehkar sir jhuka lena, baad me rona.', '"Haan haan, aapki beti ki shaadi to bahut kaamyaab rahi na..."', '"Is par soch-samajh kar kaam chal raha hai. Aapki chinta ke liye shukriya." (phir topic badalna)', '"Aapko kya matlab? Apne kaam se kaam rakhiye!"']],
        ['Partner ka "password do"', ['Password de dena, phir har message par darr.', '"Le lo, waise bhi tumhe mujh par bharosa kahan hai." (taana)', '"Mujhe tumse chhupane ko kuch nahi, par phone ki privacy mere liye zaroori hai. Chalo baat karte hain ki ye shak kahan se aa raha hai."', '"Tum psycho ho kya? Har waqt shak!"']]
      ];
      const OUT = ['Shanti abhi mil gayi, par apni zaroorat dab gayi. Baar-baar aisa hua to log fayda uthaate hain aur andar gussa jama hota hai.', 'Na saaf haan, na saaf na. Rishte me confusion aur bharosa kam; masla wahin ka wahin.', 'Saaf, shaant, izzat ke saath. Apni boundary bhi bachi, rishta bhi. Kai baar saath me ek option bhi diya.', 'Baat to keh di, par saamne wala defensive ho gaya. Bahas jeet sakte ho, rishta haar jaate ho.'];
      const x0 = 50, x1 = 570;
      let inner = `<defs><linearGradient id="as-g" x1="0" x2="1"><stop offset="0" stop-color="var(--l3)"/><stop offset=".5" stop-color="var(--good)"/><stop offset="1" stop-color="var(--bad)"/></linearGradient></defs>
        <rect x="${x0}" y="70" width="${x1 - x0}" height="14" rx="7" fill="url(#as-g)" style="opacity:.85"/>`;
      STY.forEach(([n, p, c], i) => {
        const x = x0 + p * (x1 - x0);
        inner += `<line x1="${x}" x2="${x}" y1="${i === 1 ? 84 : 62}" y2="${i === 1 ? 112 : 92}" style="stroke:${c};stroke-width:2;${i === 1 ? 'stroke-dasharray:3 3' : ''}"/><text class="svg-label" x="${x}" y="${i === 1 ? 128 : 42}" text-anchor="${i === 0 ? 'start' : i === 3 ? 'end' : 'middle'}" style="font-weight:700;fill:${c};font-size:12.5px">${n}</text>`;
      });
      inner += `<g id="as-m" style="transition:transform .6s cubic-bezier(.2,.8,.2,1)"><path d="M0,0 l-10,-16 h20 z" transform="translate(0,66)" style="fill:var(--ink)"/></g>`;
      inner += `<text class="svg-small" x="${x0}" y="160">Meri zaroorat chhoti</text><text class="svg-small" x="${x1}" y="160" text-anchor="end">Sirf meri zaroorat</text><text class="svg-small" x="${(x0 + x1) / 2}" y="160" text-anchor="middle">Dono ki zaroorat</text>`;
      stage.innerHTML = u.svg(620, 176, inner, 'aria-label="Passive se aggressive tak jawab ka spectrum"');
      const svg = stage.firstChild;
      let sit = 0, sty = 2;
      const c1 = H.ctrl(stage);
      c1.appendChild(H.seg(SIT.map((s) => s[0]), (i) => { sit = i; show(); }));
      const c2 = H.ctrl(stage);
      c2.innerHTML = STY.map(([n], i) => `<button class="btn ghost small as-b" data-i="${i}" aria-pressed="${i === 2}">${n}</button>`).join('');
      u.$$('.as-b', c2).forEach((b) => b.addEventListener('click', () => { sty = +b.dataset.i; show(); }));
      const show = () => {
        u.$$('.as-b', c2).forEach((b) => b.setAttribute('aria-pressed', +b.dataset.i === sty));
        u.$('#as-m', svg).style.transform = `translateX(${(x0 + STY[sty][1] * (x1 - x0)).toFixed(0)}px)`;
        H.info(stage, `<b>${STY[sty][0]}</b>: ${SIT[sit][1][sty]}<br><span class="muted">${OUT[sty]}</span>`);
      };
      show();
    }
  });
})();
