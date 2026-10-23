/* Manovigyan app: router + views. */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u, icon, store } = { u: PSY.u, icon: PSY.icon, store: PSY.store };
  const { esc } = u;
  const S = () => store.get();
  const main = document.getElementById('main');
  let cleanups = [];
  const onCleanup = (fn) => cleanups.push(fn);
  let query = '';

  const NAV = [
    ['home', 'Home', 'home'],
    ['path', 'Learning Path', 'path'],
    ['daily', 'Roz ki Psychology', 'eye'],
    ['smart', 'Smart Dimaag', 'bulb'],
    ['labs', 'Labs', 'lab'],
    ['glossary', 'Glossary A to Z', 'book'],
    ['cards', 'Flashcards', 'cards'],
    ['resources', 'Resources', 'library'],
    ['profile', 'Profile', 'user']
  ];
  const TABS = [['home', 'Home', 'home'], ['path', 'Path', 'path'], ['daily', 'Roz ki', 'eye'], ['smart', 'Smart', 'bulb'], ['labs', 'Labs', 'lab']];
  const lc = (n) => `--lc: var(--l${n})`;

  /* ---------- small components ---------- */
  function ring(p, label, size) {
    const r = 19, C = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 46 46" style="${size ? `--size:${size}px` : ''}" aria-hidden="true"><circle class="bg" cx="23" cy="23" r="${r}"/><circle class="fg" cx="23" cy="23" r="${r}" stroke-dasharray="${C.toFixed(2)}" stroke-dashoffset="${(C * (1 - p)).toFixed(2)}" transform="rotate(-90 23 23)"/><text x="23" y="27" text-anchor="middle">${label}</text></svg>`;
  }
  const pct = (p) => Math.round(p * 100) + '%';

  function glossary() {
    if (PSY._gloss) return PSY._gloss;
    const seen = new Map();
    PSY.chapters.forEach((c) => (c.blocks || []).forEach((b) => {
      if (b[0] === 'terms') b[1].forEach(([t, d]) => {
        const k = u.strip(t).toLowerCase();
        if (!seen.has(k)) seen.set(k, { term: u.strip(t), def: d, ch: c.id, level: c.level });
      });
    }));
    PSY.extraTerms.forEach(([t, d, lvl]) => {
      const k = t.toLowerCase();
      if (!seen.has(k)) seen.set(k, { term: t, def: d, ch: null, level: lvl || 1 });
    });
    PSY._gloss = Array.from(seen.values()).sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
    return PSY._gloss;
  }

  /* ---------- shell ---------- */
  function renderShell() {
    const r0 = currentRoute().name;
    const cur = { situation: 'daily', skill: 'smart', chapter: 'path', exam: 'path', lab: 'labs' }[r0] || r0;
    document.getElementById('railNav').innerHTML = NAV.map(([k, label, ic]) =>
      `<a href="#${k}" class="${cur === k ? 'active' : ''}" ${cur === k ? 'aria-current="page"' : ''}>${icon(ic)}<span>${label}</span></a>`).join('');
    document.getElementById('tabbar').innerHTML = TABS.map(([k, label, ic]) =>
      `<a href="#${k}" class="${cur === k ? 'active' : ''}" ${cur === k ? 'aria-current="page"' : ''}>${icon(ic)}<span>${label}</span></a>`).join('');
    document.getElementById('railLevels').innerHTML = '<div class="rail-label">Levels</div>' + PSY.levels.map((lv) => {
      const open = PSY.levelUnlocked(lv.n);
      return `<a class="rail-level ${open ? '' : 'locked'}" href="#path" data-level="${lv.n}" style="${lc(lv.n)}"><span class="dot">${open ? lv.n : icon('lock')}</span><span>${lv.short}</span><span class="pct">${PSY.levelPassed(lv.n) ? icon('check') : pct(PSY.levelPct(lv.n))}</span></a>`;
    }).join('');
    u.$$('.rail-level .dot svg, .rail-level .pct svg').forEach((s) => { s.style.width = '12px'; s.style.height = '12px'; });
    const st = S();
    const dark = effectiveTheme() === 'dark';
    document.getElementById('topStats').innerHTML =
      `<a class="chip xp" href="#profile" title="Total XP">${icon('bolt')}<span>${st.xp} XP</span></a>` +
      `<span class="chip streak" title="Daily streak">${icon('flame')}<span>${st.streak.last === u.today() || isYesterday(st.streak.last) ? st.streak.n : 0} din</span></span>` +
      `<button class="icon-btn" id="themeBtn" aria-label="${dark ? 'Light' : 'Dark'} mode on karo">${icon(dark ? 'sun' : 'moon')}</button>`;
    document.getElementById('themeBtn').onclick = () => {
      const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      store.setTheme(next);
      applyTheme();
    };
  }
  function isYesterday(d) {
    if (!d) return false;
    const y = new Date(Date.now() - 86400000);
    return d === y.getFullYear() + '-' + String(y.getMonth() + 1).padStart(2, '0') + '-' + String(y.getDate()).padStart(2, '0');
  }
  function effectiveTheme() {
    const t = S().theme;
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme() {
    const t = S().theme;
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    renderShell();
  }

  /* ---------- router ---------- */
  function currentRoute() {
    const h = (location.hash || '').replace(/^#/, '') || 'home';
    if (h.startsWith('c-')) return { name: 'chapter', id: h.slice(2) };
    if (h.startsWith('exam-')) return { name: 'exam', n: +h.slice(5) };
    if (h.startsWith('lab-')) return { name: 'lab', id: h.slice(4) };
    if (h.startsWith('d-')) return { name: 'situation', id: h.slice(2) };
    if (h.startsWith('s-')) return { name: 'skill', id: h.slice(2) };
    const known = ['home', 'path', 'labs', 'glossary', 'cards', 'resources', 'profile', 'search', 'certificate', 'daily', 'smart'];
    return { name: known.includes(h) ? h : 'home' };
  }
  function go(hash) {
    if (location.hash === '#' + hash) route();
    else location.hash = hash;
  }
  PSY.go = go;

  function route() {
    cleanups.forEach((fn) => { try { fn(); } catch (e) { /* ignore */ } });
    cleanups = [];
    const r = currentRoute();
    let view;
    try {
      view = ({
        home: homeView, path: pathView, chapter: () => chapterView(r.id), exam: () => examView(r.n),
        labs: labsView, lab: () => labView(r.id), glossary: glossaryView, cards: cardsView,
        resources: resourcesView, profile: profileView, search: searchView, certificate: certificateView,
        daily: dailyView, smart: smartView, situation: () => situationView(r.id), skill: () => skillView(r.id)
      }[r.name] || homeView)();
    } catch (e) {
      console.error(e);
      view = u.el(`<div class="wrap view"><div class="card empty">Kuch gadbad ho gayi. <a href="#home">Home par jao</a>.</div></div>`);
    }
    main.innerHTML = '';
    main.appendChild(view);
    mountVisuals(view);
    window.scrollTo(0, 0);
    renderShell();
    const titles = { home: 'Manovigyan', path: 'Learning Path', labs: 'Labs', glossary: 'Glossary', cards: 'Flashcards', resources: 'Resources', profile: 'Profile', search: 'Search', certificate: 'Certificate', daily: 'Roz ki Psychology', smart: 'Smart Dimaag', situation: 'Roz ki Psychology', skill: 'Smart Dimaag' };
    const ch = r.name === 'chapter' ? PSY.getChapter(r.id) : null;
    document.title = ch ? `${u.strip(ch.title)} · Manovigyan` : r.name === 'home' ? 'Manovigyan' : `${titles[r.name] || 'Manovigyan'} · Manovigyan`;
  }

  /* ---------- visuals mounting ---------- */
  function visFigure(key, caption) {
    const def = PSY.visuals[key];
    if (!def) return '';
    return `<figure class="vis" data-vis="${key}"><div class="vis-head"><span class="blk-label">${icon('play')}Motion graphic · ${def.title}</span><button class="icon-btn replay" aria-label="Animation dobara chalao" title="Replay">${icon('replay')}</button></div><div class="vis-stage"></div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
  }
  function mountVisuals(root) {
    const figs = u.$$('figure[data-vis]', root);
    const start = (fig) => {
      if (fig._started) return;
      fig._started = true;
      const def = PSY.visuals[fig.dataset.vis];
      const stage = u.$('.vis-stage', fig);
      const run = () => {
        if (fig._stop) { try { fig._stop(); } catch (e) { /* ignore */ } }
        stage.innerHTML = '';
        try { fig._stop = def.render(stage, { reduced: u.reduced() }) || null; } catch (e) { console.error(e); stage.innerHTML = '<p class="muted">Animation load nahi hui.</p>'; }
      };
      run();
      u.$('.replay', fig).onclick = run;
      onCleanup(() => { if (fig._stop) fig._stop(); });
    };
    if (!('IntersectionObserver' in window)) { figs.forEach(start); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { start(e.target); io.unobserve(e.target); } }), { rootMargin: '250px' });
    figs.forEach((f) => io.observe(f));
    onCleanup(() => io.disconnect());
  }

  /* ---------- TEACHER VOICE ---------- */
  const tParas = (x) => (Array.isArray(x) ? x.map((p) => `<p>${p}</p>`).join('') : `<p>${x}</p>`);
  const teach = (html, cls = '', name = 'Teacher') => `<div class="teach ${cls}"><span class="teach-av" aria-hidden="true">&psi;</span><div class="teach-bubble"><div class="teach-name">${name}</div>${tParas(html)}</div></div>`;
  const praise = ['Shabaash!', 'Bilkul sahi!', 'Ekdum sahi pakda!', 'Wah, sahi jawab!', 'Yahi to chahiye tha!'];
  const console_ = ['Koi baat nahi, galti se hi seekhte hain.', 'Ye galti bahut log karte hain. Dekho kyun:', 'Close tha, par sahi jawab kuch aur hai.', 'Ruko, yahan ek twist hai.'];

  /* ---------- HOME ---------- */
  function classLine(next, done) {
    if (!next) return 'Tumne poora course kar liya. Ab jo seekha hai use roz ki life me use karo, aur kisi ek dost ko bhi sikhao. Sikhana sabse pakki revision hai.';
    if (next.exam) return `Level ${next.exam} ke saare chapters ho gaye. Ab exam ki baari hai. Ghabrao mat: jo padha hai wahi poochha jaayega. Pehle takeaways ek baar dekh lo, phir aaram se exam do.`;
    if (!done && !PSY.isRead(next.id)) return 'Swagat hai! Pehle din ka kaam simple hai: ek chapter, aaram se, examples ke saath. Har section ke baad ruk kar apni life se jodna, wahi asli padhai hai.';
    if (PSY.isRead(next.id)) return `Tumne "${next.title}" padh liya hai, bas quiz baaki hai. Ek baar takeaways dekho aur quiz do. 60% aate hi chapter complete.`;
    return `Aaj hum "${next.title}" padhenge. Lagbhag ${next.mins} minute lagenge. Beech me jahan "Socho" aaye, wahan ruk kar khud jawab sochna, phir dekhna.`;
  }

  function todayLib() {
    const sits = sortedSits(), skills = sortedSkills();
    if (!sits.length && !skills.length) return '';
    const di = u.dayIndex();
    const sit = sits.length ? (sits.find((d, k) => k >= di % sits.length && !S().daily[d.id]) || sits[di % sits.length]) : null;
    const sk = skills.length ? skills[(di * 7) % skills.length] : null;
    return `<section class="section">
      <div class="section-head"><h2>Roz ki psychology, roz ka workout</h2></div>
      <div class="lib-home">
        ${sit ? `<div class="grid"><div class="row" style="justify-content:space-between"><span class="eyebrow">Aaj ki situation</span><a class="muted" href="#daily">${sits.length} situations ${icon('right').replace('<svg', '<svg style="width:14px;height:14px;vertical-align:-2px"')}</a></div>${situationCard(sit)}</div>` : ''}
        ${sk ? `<div class="grid"><div class="row" style="justify-content:space-between"><span class="eyebrow">Aaj ka brain workout</span><a class="muted" href="#smart">${skills.length} cards ${icon('right').replace('<svg', '<svg style="width:14px;height:14px;vertical-align:-2px"')}</a></div>${skillCard(sk)}</div>` : ''}
      </div>
    </section>`;
  }

  function homeView() {
    const st = S();
    const next = PSY.nextChapter();
    const total = PSY.chapters.length;
    const done = PSY.doneCount();
    const name = st.name ? `, ${esc(st.name)}` : '';
    let cont = '';
    if (next && next.exam) {
      const lv = PSY.levels[next.exam - 1];
      cont = `<a class="card continue" href="#exam-${lv.n}" style="${lc(lv.n)}; text-decoration:none; color:inherit">${ring(1, icon('trophy'))}<div><div class="num">LEVEL ${lv.n} EXAM READY</div><h3>${lv.title}: Level exam do aur agla level unlock karo</h3><p class="muted">12 sawaal, pass karne ke liye 70%.</p></div><span class="btn lc">Exam do ${icon('right')}</span></a>`;
    } else if (next) {
      const lv = PSY.levels[next.level - 1];
      const i = PSY.levelChapters(next.level).indexOf(next) + 1;
      cont = `<a class="card continue" href="#c-${next.id}" style="${lc(next.level)}; text-decoration:none; color:inherit">${ring(PSY.levelPct(next.level), pct(PSY.levelPct(next.level)))}<div><div class="num">LEVEL ${lv.n} · CHAPTER ${i} OF ${PSY.levelChapters(next.level).length}</div><h3>${next.title}</h3><p class="muted">${next.tag}</p></div><span class="btn lc">${PSY.isRead(next.id) ? 'Quiz do' : done ? 'Continue' : 'Shuru karo'} ${icon('right')}</span></a>`;
    } else {
      cont = `<a class="card continue" href="#certificate" style="${lc(PSY.levels.length)}; text-decoration:none; color:inherit">${ring(1, icon('trophy'))}<div><div class="num">COMPLETE</div><h3>Tumne poora course khatam kar liya!</h3><p class="muted">Apna certificate dekho.</p></div><span class="btn lc">Certificate ${icon('right')}</span></a>`;
    }
    const fact = PSY.facts[u.dayIndex() % PSY.facts.length];
    const labKeys = Object.keys(PSY.labs);
    const featured = [0, 1, 2].map((k) => labKeys[(u.dayIndex() + k * 5) % labKeys.length]).filter((v, i, a) => a.indexOf(v) === i);
    const el = u.el(`<div class="wrap view">
      <section class="hero">
        <canvas id="heroCanvas" aria-hidden="true"></canvas>
        <div class="eyebrow">Psychology · Zero se Advanced</div>
        <h1>Mann ko samjho, <em>science</em> ke saath.</h1>
        <p>Namaste${name}! Main tumhara psychology teacher hoon. Hum saath me ${PSY.levels.length} levels aur ${total} chapters padhenge: real-life examples, motion graphics aur experiments ke saath. Har chapter ke baad ek chhota quiz, har level ke baad exam.</p>
        <div class="row">
          <a class="btn" href="${next && next.exam ? '#exam-' + next.exam : next ? '#c-' + next.id : '#certificate'}">${done ? 'Continue learning' : 'Pehla chapter shuru karo'} ${icon('right')}</a>
          <a class="btn ghost" href="#path">Poora roadmap dekho</a>
        </div>
      </section>
      <div class="stats">
        <div class="card stat"><b>${st.xp}</b><span>Total XP</span></div>
        <div class="card stat"><b>${done}/${total}</b><span>Chapters complete</span></div>
        <div class="card stat"><b>${st.streak.last === u.today() || isYesterday(st.streak.last) ? st.streak.n : 0}</b><span>Din ki streak</span></div>
        <div class="card stat"><b style="font-size:1.25rem">${PSY.rank()}</b><span>Tumhara rank</span></div>
      </div>
      <section class="section">
        <div class="section-head"><h2>Aaj ki class</h2></div>
        ${teach(classLine(next, done), 'mini')}
        ${cont}
      </section>
      ${todayLib()}
      <section class="section">
        <div class="section-head"><h2>${PSY.levels.length} levels ka safar</h2><a href="#path" class="muted">Sab chapters ${icon('right').replace('<svg', '<svg style="width:14px;height:14px;vertical-align:-2px"')}</a></div>
        <div class="levels-grid">
          ${PSY.levels.map((lv) => {
            const open = PSY.levelUnlocked(lv.n), p = PSY.levelPct(lv.n), passed = PSY.levelPassed(lv.n);
            return `<a class="card level-tile ${open ? '' : 'locked'}" href="#path" style="${lc(lv.n)}">
              <div class="top"><div><div class="lnum">Level ${lv.n} · ${lv.name}</div><h3>${lv.title}</h3></div>${open ? ring(p, passed ? icon('check') : pct(p)) : `<span class="tag lock">${icon('lock')}Locked</span>`}</div>
              <p>${lv.desc}</p>
              <div class="row"><span class="tag lvl">${PSY.levelChapters(lv.n).length} chapters</span><span class="tag">${lv.rank}</span></div>
            </a>`;
          }).join('')}
        </div>
      </section>
      <section class="section two-col">
        <div class="grid">
          <div class="section-head"><h2>Aaj ka psych fact</h2></div>
          <div class="card fact">${icon('bulb')}<p>${fact}</p></div>
          <div class="section-head" style="margin-top:12px"><h2>Kaise padhein</h2></div>
          <div class="how">
            ${[['book', 'Padho', 'Simple Hinglish + real example'], ['play', 'Dekho', 'Motion graphics se concept'], ['lab', 'Try karo', 'Khud par experiment'], ['check', 'Quiz do', '60% = chapter complete'], ['trophy', 'Level exam', '70% = agla level']].map(([i, b, s]) => `<div class="card step">${icon(i)}<b>${b}</b><span>${s}</span></div>`).join('')}
          </div>
        </div>
        <div class="grid" style="align-content:start">
          <div class="section-head"><h2>Aaj ke labs</h2><a href="#labs" class="muted">Saare labs</a></div>
          ${featured.map((k) => labCard(k)).join('')}
          <div class="row"><a class="btn ghost small" href="#glossary">${icon('book')}Glossary</a><a class="btn ghost small" href="#cards">${icon('cards')}Flashcards</a><a class="btn ghost small" href="#resources">${icon('library')}Resources</a></div>
        </div>
      </section>
    </div>`);
    setTimeout(() => {
      const cv = u.$('#heroCanvas', el);
      if (cv && PSY.neural) onCleanup(PSY.neural(cv, { hero: true }));
    }, 0);
    return el;
  }

  function labCard(k) {
    const L = PSY.labs[k];
    if (!L) return '';
    const done = S().labs[k];
    return `<a class="card lab-card" href="#lab-${k}" style="${lc(L.level || 1)}"><div class="row" style="justify-content:space-between"><span class="ico">${icon(L.icon || 'lab')}</span>${done ? `<span class="tag done">${icon('check')}Tried</span>` : `<span class="tag">${L.mins || 3} min</span>`}</div><h3>${L.title}</h3><p>${L.short}</p></a>`;
  }

  /* ---------- PATH ---------- */
  function pathView() {
    const st = S();
    const el = u.el(`<div class="wrap view">
      <div class="eyebrow">Learning path</div>
      <h1 style="font-size:var(--step-4);margin-top:6px">Zero se Psychology Master tak</h1>
      <p class="lead" style="margin-top:10px">Har level ke saare chapters ke quiz pass karo (60%+), phir level exam (70%+) do. Exam pass karte hi agla level unlock ho jaata hai.${st.explorer ? ' <b>Explorer mode on hai</b>: saare levels khule hain.' : ''}</p>
      <div class="path">
      ${PSY.levels.map((lv) => {
        const open = PSY.levelUnlocked(lv.n);
        const chs = PSY.levelChapters(lv.n);
        const passed = PSY.levelPassed(lv.n);
        const examOpen = PSY.examUnlocked(lv.n);
        return `<section class="card plevel ${open ? '' : 'locked'}" style="${lc(lv.n)}" id="lvl${lv.n}">
          <div class="plevel-head"><div class="plevel-badge">${open ? lv.n : icon('lock').replace('<svg', '<svg style="width:22px;height:22px"')}</div>
            <div><div class="eyebrow">Level ${lv.n} · ${lv.name} · Rank: ${lv.rank}</div><h2>${lv.title}</h2><p>${lv.desc}</p></div>
            ${ring(PSY.levelPct(lv.n), passed ? icon('check') : pct(PSY.levelPct(lv.n)), 54)}</div>
          <div class="plevel-body">
            ${open && lv.teacher ? teach(lv.teacher, 'mini') : ''}
            ${chs.map((c, i) => {
              const d = PSY.isDone(c.id), r = PSY.isRead(c.id), best = st.ch[c.id] && st.ch[c.id].best;
              return `<a class="pch ${d ? 'done' : r ? 'read' : ''} ${open ? '' : 'locked'}" href="#c-${c.id}"><span class="idx">${d ? icon('check') : i + 1}</span><span><b>${c.title}</b><small>${c.tag}</small></span><span class="row">${best ? `<span class="tag ${d ? 'done' : ''}">${pct(best)}</span>` : ''}<span class="tag">${icon('clock')}${c.mins}m</span></span></a>`;
            }).join('')}
            <a class="pexam ${passed ? 'passed' : ''} ${examOpen ? '' : 'locked'}" href="#exam-${lv.n}">${icon(passed ? 'award' : examOpen ? 'trophy' : 'lock')}<span><b>Level ${lv.n} Exam</b><small class="muted" style="display:block;font-size:.8rem">${passed ? 'Achieved! Best: ' + pct(st.exams[lv.n].best) : examOpen ? '12 sawaal · 70% pass · +100 XP' : 'Saare chapters complete karke unlock karo'}</small></span>${passed ? `<span class="tag done">${icon('check')}Passed</span>` : ''}</a>
          </div>
        </section>`;
      }).join('')}
      </div>
    </div>`);
    return el;
  }

  /* ---------- CHAPTER ---------- */
  function renderBlock(b, ctx) {
    const [t, a, b2, c3] = b;
    const paras = (x) => (Array.isArray(x) ? x.map((p) => `<p>${p}</p>`).join('') : `<p>${x}</p>`);
    switch (t) {
      case 'h': ctx.h++; ctx.toc.push(a); return `<h2 id="sec-${ctx.h}" data-toc="${ctx.h}"><span class="hn">${String(ctx.h).padStart(2, '0')}</span>${a}</h2>`;
      case 'p': return `<p>${a}</p>`;
      case 'ex': return `<div class="blk ex"><div class="blk-label">${icon('target')}Real-life example</div><h4>${a}</h4>${paras(b2)}</div>`;
      case 'case': return `<div class="blk case"><div class="blk-label">${icon('lab')}Famous study</div><h4>${a}</h4>${paras(b2)}</div>`;
      case 'terms': return `<div class="terms-wrap"><div class="blk-label" style="color:var(--lc)">${icon('book')}Key terms</div><div class="terms">${a.map(([k, d]) => `<div class="term"><b>${k}</b><span>${d}</span></div>`).join('')}</div></div>`;
      case 'list': return `<ul>${a.map((x) => `<li>${x}</li>`).join('')}</ul>`;
      case 'ol': return `<ol>${a.map((x) => `<li>${x}</li>`).join('')}</ol>`;
      case 'myth': return `<div class="blk myth"><div class="m"><div class="blk-label">${icon('x')}Myth</div><p>${a}</p></div><div class="f"><div class="blk-label">${icon('check')}Fact</div><p>${b2}</p></div></div>`;
      case 'tip': return `<div class="blk tip"><div class="blk-label">${icon('sparkles')}Try this</div>${paras(a)}</div>`;
      case 'note': return `<div class="blk note"><div class="blk-label">${icon('alert')}Dhyan do</div>${paras(a)}</div>`;
      case 'vis': return visFigure(a, b2);
      case 'lab': {
        const L = PSY.labs[a];
        if (!L) return '';
        return `<div class="lab-embed"><span class="ico">${icon(L.icon || 'lab')}</span><div><b>Interactive lab: ${L.title}</b><span>${L.short}</span></div><a class="btn lc small" href="#lab-${a}">Lab kholo ${icon('right')}</a></div>`;
      }
      case 'table': return `<div class="table-wrap"><table><thead><tr>${a.map((x) => `<th>${x}</th>`).join('')}</tr></thead><tbody>${b2.map((r) => `<tr>${r.map((x) => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      case 'quote': return `<blockquote class="quote" style="margin:0"><p>${a}</p><span>${b2}</span></blockquote>`;
      case 'steps': return `<div class="steps">${a.map(([k, d]) => `<div class="st"><div><b>${k}</b><span>${d}</span></div></div>`).join('')}</div>`;
      case 'compare': return `<div class="compare"><div><h4>${a[0]}</h4>${paras(a[1])}</div><div><h4>${b2[0]}</h4>${paras(b2[1])}</div></div>`;
      case 'teacher': return teach(a);
      case 'think': return `<div class="blk think"><div class="blk-label">${icon('bulb')}Socho</div><p><b>${a}</b></p><button class="btn ghost small reveal">Jawab dekho</button><div class="ans" hidden>${paras(b2)}</div></div>`;
      default: return '';
    }
  }

  function lockedView(lv) {
    return u.el(`<div class="wrap view" style="${lc(lv.n)}"><div class="card empty" style="padding:44px 22px;display:flex;flex-direction:column;align-items:center;gap:14px">
      ${icon('lock').replace('<svg', '<svg style="width:40px;height:40px;color:var(--lc)"')}
      <h2>Level ${lv.n}: ${lv.title} abhi locked hai</h2>
      <p style="max-width:52ch">Pehle Level ${lv.n - 1} ka exam pass karo, ye level apne aap khul jaayega. Agar tumhe pehle se kuch psychology aati hai, to Profile me <b>Explorer mode</b> on karo, saare levels khul jaayenge.</p>
      <div class="row" style="justify-content:center"><a class="btn" href="#path">Learning path</a><a class="btn ghost" href="#profile">Explorer mode</a></div></div></div>`);
  }

  function chapterView(id) {
    const c = PSY.getChapter(id);
    if (!c) return u.el(`<div class="wrap view"><div class="card empty">Ye chapter nahi mila. <a href="#path">Learning path</a> par jao.</div></div>`);
    const lv = PSY.levels[c.level - 1];
    if (!PSY.levelUnlocked(c.level)) return lockedView(lv);
    store.setLast(id);
    const chs = PSY.levelChapters(c.level);
    const idx = chs.indexOf(c);
    const gi = PSY.chapterIndex(id);
    const prev = PSY.chapters[gi - 1], next = PSY.chapters[gi + 1];
    const ctx = { h: 0, toc: [] };
    const body = c.blocks.map((b) => renderBlock(b, ctx)).join('');
    const st = store.ch(id);
    const el = u.el(`<div class="view" style="${lc(c.level)}">
      <div class="read-progress"><span></span></div>
      <div class="wrap">
        <header class="ch-head">
          <nav class="crumb" aria-label="Breadcrumb"><a href="#path">Path</a><span>/</span><a href="#path">Level ${lv.n} · ${lv.title}</a><span>/</span><span>Chapter ${idx + 1} of ${chs.length}</span></nav>
          <h1>${c.title}</h1>
          <p class="lead">${c.tag}</p>
          <div class="ch-meta"><span class="tag lvl">${icon(lv.icon)}Level ${lv.n}</span><span class="tag">${icon('clock')}${c.mins} min</span><span class="tag">${icon('check')}${c.quiz.length} quiz sawaal</span>${st.done ? `<span class="tag done">${icon('check')}Complete · ${pct(st.best)}</span>` : st.read ? `<span class="tag">Padh liya · quiz baaki</span>` : ''}</div>
        </header>
        <div class="ch-grid">
          <article class="prose" id="prose">
            ${c.intro ? teach(c.intro, 'intro') : ''}
            ${c.visual ? visFigure(c.visual, c.visualCap || '') : ''}
            ${c.hook ? `<div class="hook">${icon('quote')}<div>${c.hook}</div></div>` : ''}
            ${body}
            ${c.outro ? teach(c.outro, 'outro') : ''}
            <section class="takeaways" id="takeaways"><h3>Yaad rakhne layak</h3><ul>${c.takeaways.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul></section>
            <section class="card quiz" id="quizBox"></section>
            ${c.more && c.more.length ? `<section class="more"><div class="blk-label" style="color:var(--lc)">${icon('library')}Aur gehrai me jaana hai?</div>${c.more.map(([t, url, kind]) => `<a href="${url}" target="_blank" rel="noopener">${icon(kind === 'video' ? 'video' : kind === 'book' ? 'book' : kind === 'podcast' ? 'mic' : 'link')}<span>${t}</span><small>${kind || 'link'}</small></a>`).join('')}</section>` : ''}
            <nav class="ch-nav">
              ${prev ? `<a href="#c-${prev.id}"><small>${icon('left').replace('<svg', '<svg style="width:12px;height:12px"')} Pichhla</small><b>${prev.title}</b></a>` : '<span></span>'}
              ${next ? (next.level !== c.level ? `<a class="next" href="#exam-${c.level}"><small>Level khatam</small><b>Level ${c.level} Exam ${icon('right').replace('<svg', '<svg style="width:14px;height:14px;vertical-align:-2px"')}</b></a>` : `<a class="next" href="#c-${next.id}"><small>Agla</small><b>${next.title}</b></a>`) : `<a class="next" href="#exam-${c.level}"><small>Last chapter</small><b>Level ${c.level} Exam</b></a>`}
            </nav>
          </article>
          <aside class="toc" aria-label="Is chapter me">
            <div class="eyebrow">Is chapter me</div>
            ${ctx.toc.map((t, i) => `<button data-go="${i + 1}">${t}</button>`).join('')}
            <button data-go="quiz">Quiz</button>
          </aside>
        </div>
      </div>
    </div>`);

    // reveal buttons
    u.$$('.reveal', el).forEach((btn) => btn.addEventListener('click', () => { btn.nextElementSibling.hidden = false; btn.remove(); }));
    // TOC
    u.$$('.toc button', el).forEach((btn) => btn.addEventListener('click', () => {
      const tgt = btn.dataset.go === 'quiz' ? u.$('#quizBox', el) : u.$('#sec-' + btn.dataset.go, el);
      if (tgt) tgt.scrollIntoView({ behavior: u.reduced() ? 'auto' : 'smooth', block: 'start' });
    }));
    // quiz
    quizComponent(u.$('#quizBox', el), c.quiz, {
      title: 'Chapter quiz',
      sub: `${c.quiz.length} sawaal · 60% par chapter complete`,
      pass: 0.6,
      onFinish: (correct, total) => {
        const before = PSY.levelDoneCount(c.level);
        const res = store.quizResult(id, correct, total);
        const after = PSY.levelDoneCount(c.level);
        if (after > before && after === chs.length) setTimeout(() => PSY.toast(`Level ${c.level} ke saare chapters complete! Ab exam do.`, 'trophy'), 900);
        return res;
      },
      nextHref: next && next.level === c.level ? `#c-${next.id}` : `#exam-${c.level}`,
      nextLabel: next && next.level === c.level ? 'Agla chapter' : `Level ${c.level} exam`
    });
    // read tracking + progress bar + toc spy
    setTimeout(() => {
      const bar = u.$('.read-progress span', el);
      const prose = u.$('#prose', el);
      const onScroll = () => {
        const r = prose.getBoundingClientRect();
        const total = r.height - window.innerHeight * 0.6;
        const p = u.clamp(-r.top / (total || 1), 0, 1);
        bar.style.width = (p * 100).toFixed(1) + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      onCleanup(() => window.removeEventListener('scroll', onScroll));
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((ents) => {
          if (ents.some((e) => e.isIntersecting)) {
            if (store.markRead(id)) renderShell();
            io.disconnect();
          }
        }, { threshold: 0.4 });
        io.observe(u.$('#takeaways', el));
        onCleanup(() => io.disconnect());
        const tocBtns = u.$$('.toc button[data-go]', el);
        const spy = new IntersectionObserver((ents) => {
          ents.forEach((e) => {
            if (e.isIntersecting) {
              const n = e.target.dataset.toc;
              tocBtns.forEach((b) => b.classList.toggle('on', b.dataset.go === n));
            }
          });
        }, { rootMargin: '-20% 0px -70% 0px' });
        u.$$('h2[data-toc]', el).forEach((h) => spy.observe(h));
        onCleanup(() => spy.disconnect());
      }
    }, 0);
    return el;
  }

  /* ---------- QUIZ ENGINE ---------- */
  function quizComponent(box, questions, opt) {
    let i = 0, correct = 0, answers = [];
    let order = [];
    const keys = 'ABCDEF';
    const start = () => {
      i = 0; correct = 0; answers = [];
      order = questions.map((q) => u.shuffle(q[1].map((_, k) => k)));
      render();
    };
    const dots = () => `<div class="quiz-dots" aria-hidden="true">${questions.map((_, k) => `<i class="${k < answers.length ? (answers[k] ? 'ok' : 'no') : k === i ? 'cur' : ''}"></i>`).join('')}</div>`;
    const render = () => {
      const q = questions[i];
      box.innerHTML = `<div class="quiz-top"><div><div class="eyebrow">${opt.title} · Sawaal ${i + 1}/${questions.length}</div></div>${dots()}</div>
        <p class="q-text">${q[0]}</p>
        <div class="opts">${order[i].map((k, j) => `<button class="opt" data-k="${k}"><span class="k">${keys[j]}</span><span>${q[1][k]}</span></button>`).join('')}</div>
        <div class="q-after"></div>`;
      u.$$('.opt', box).forEach((b) => b.addEventListener('click', () => choose(+b.dataset.k)));
    };
    const choose = (k) => {
      const q = questions[i];
      const optsEl = u.$('.opts', box);
      if (optsEl.classList.contains('locked')) return;
      optsEl.classList.add('locked');
      const ok = k === q[2];
      if (ok) correct++;
      answers.push(ok);
      u.$$('.opt', box).forEach((b) => {
        const bk = +b.dataset.k;
        if (bk === q[2]) b.classList.add('ok');
        else if (bk === k) b.classList.add('no');
        b.setAttribute('aria-disabled', 'true');
      });
      const last = i === questions.length - 1;
      u.$('.q-after', box).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${u.pick(ok ? praise : console_)}</b> ${q[3] || ''}</div>
        <div class="row" style="margin-top:12px"><button class="btn lc nextq">${last ? 'Result dekho' : 'Agla sawaal'} ${icon('right')}</button></div>`;
      u.$('.quiz-dots', box).outerHTML = dots();
      const nb = u.$('.nextq', box);
      nb.focus({ preventScroll: true });
      nb.addEventListener('click', () => { if (last) finish(); else { i++; render(); } });
    };
    const finish = () => {
      const total = questions.length;
      const ratio = correct / total;
      const passed = ratio >= opt.pass;
      opt.onFinish(correct, total);
      const msg = ratio === 1 ? 'Perfect score! Tumne concept poori tarah pakad liya. Mujhe tum par garv hai.' : passed ? 'Badhiya, pass! Jo sawaal galat hue unka explanation ek baar aur padh lena, wahi kamzor kadi hai.' : 'Is baar pass nahi hua, aur ye bilkul theek hai. Galat jawabon ke explanation dhyan se padho, chapter ka wo hissa dobara dekho, phir try karo. Doosri baar zyada yaad rehta hai.';
      box.innerHTML = `<div class="quiz-top"><div class="eyebrow">${opt.title} · Result</div>${dots()}</div>
        <div class="result">${ring(ratio, correct + '/' + total)}<div style="display:flex;flex-direction:column;gap:8px"><h4>${pct(ratio)} ${passed ? '· Pass' : ''}</h4>${teach(msg, 'mini')}
        <div class="row"><button class="btn ghost small again">${icon('replay')}Dobara try karo</button>${passed && opt.nextHref ? `<a class="btn lc small" href="${opt.nextHref}">${opt.nextLabel} ${icon('right')}</a>` : ''}</div></div></div>`;
      u.$('.again', box).addEventListener('click', start);
      renderShell();
    };
    // intro state shows question 1 right away so the quiz is visible at rest
    start();
  }

  /* ---------- EXAM ---------- */
  function examView(n) {
    const lv = PSY.levels[n - 1];
    if (!lv) return homeView();
    if (!PSY.levelUnlocked(n)) return lockedView(lv);
    const chs = PSY.levelChapters(n);
    const st = S();
    const passed = PSY.levelPassed(n);
    const el = u.el(`<div class="wrap view" style="${lc(n)};max-width:820px">
      <nav class="crumb"><a href="#path">Path</a><span>/</span><span>Level ${n} exam</span></nav>
      <h1 style="font-size:var(--step-4);margin-top:8px">Level ${n} Exam: ${lv.title}</h1>
      <p class="lead" style="margin-top:8px">Is level ke saare chapters se 12 random sawaal. 70% ya usse zyada laao aur rank <b>${lv.rank}</b> achieve karo.</p>
      <div class="row" style="margin-top:12px"><span class="tag lvl">${PSY.levelDoneCount(n)}/${chs.length} chapters complete</span>${st.exams[n] ? `<span class="tag">Best: ${pct(st.exams[n].best)}</span>` : ''}${passed ? `<span class="tag done">${icon('check')}Achieved</span>` : ''}</div>
      <section class="card quiz" id="examBox" style="margin-top:20px"></section>
    </div>`);
    const box = u.$('#examBox', el);
    if (!PSY.examUnlocked(n)) {
      const left = chs.filter((c) => !PSY.isDone(c.id));
      box.innerHTML = `<div class="quiz-top"><h3>Exam abhi locked hai</h3></div><p>Pehle in chapters ke quiz pass karo (60%+):</p>
        <div class="plevel-body" style="padding:0">${left.map((c) => `<a class="pch" href="#c-${c.id}"><span class="idx">${chs.indexOf(c) + 1}</span><span><b>${c.title}</b><small>${c.tag}</small></span><span class="tag">${icon('right')}</span></a>`).join('')}</div>`;
      return el;
    }
    const pool = [];
    chs.forEach((c) => u.shuffle(c.quiz).slice(0, 3).forEach((q) => pool.push(q)));
    const qs = u.shuffle(pool).slice(0, 12);
    quizComponent(box, qs, {
      title: `Level ${n} exam`,
      pass: 0.7,
      onFinish: (correct, total) => {
        const { newly } = store.examResult(n, correct, total);
        if (newly) setTimeout(() => PSY.toast(n < PSY.levels.length ? `Level ${n + 1} unlock ho gaya!` : 'Saare levels complete! Certificate ready hai.', 'trophy'), 900);
      },
      nextHref: n < PSY.levels.length ? `#c-${PSY.levelChapters(n + 1)[0].id}` : '#certificate',
      nextLabel: n < PSY.levels.length ? `Level ${n + 1} shuru karo` : 'Certificate dekho'
    });
    return el;
  }

  /* ---------- LABS ---------- */
  function labsView() {
    const keys = Object.keys(PSY.labs);
    const tried = keys.filter((k) => S().labs[k]).length;
    return u.el(`<div class="wrap view">
      <div class="eyebrow">Interactive labs</div>
      <h1 style="font-size:var(--step-4);margin-top:6px">Khud par experiment karo</h1>
      <p class="lead" style="margin-top:10px">Ye wahi classic experiments hain jo psychology ki textbooks me padhaye jaate hain. Padhne se zyada yaad tab rehta hai jab tum khud mehsoos karo. ${tried}/${keys.length} labs try kiye.</p>
      <div class="labs-grid" style="margin-top:24px">${keys.map(labCard).join('')}</div>
    </div>`);
  }
  function labView(id) {
    const L = PSY.labs[id];
    if (!L) return labsView();
    const ch = L.chapter ? PSY.getChapter(L.chapter) : null;
    const el = u.el(`<div class="wrap view" style="${lc(L.level || 1)};max-width:900px">
      <nav class="crumb"><a href="#labs">Labs</a><span>/</span><span>${L.title}</span></nav>
      <h1 style="font-size:var(--step-4);margin-top:8px">${L.title}</h1>
      <p class="lead" style="margin-top:8px">${L.intro || L.short}</p>
      <div class="card lab-stage" id="labStage" style="margin-top:20px"></div>
      ${L.about ? `<div class="blk case" style="margin-top:20px"><div class="blk-label">${icon('bulb')}Iske peeche ki psychology</div>${(Array.isArray(L.about) ? L.about : [L.about]).map((p) => `<p>${p}</p>`).join('')}</div>` : ''}
      ${ch ? `<div class="row" style="margin-top:16px"><a class="btn ghost" href="#c-${ch.id}">${icon('book')}Related chapter: ${ch.title}</a></div>` : ''}
    </div>`);
    setTimeout(() => {
      const stage = u.$('#labStage', el);
      try {
        const stop = L.render(stage, () => { store.labDone(id); renderShell(); });
        if (typeof stop === 'function') onCleanup(stop);
      } catch (e) { console.error(e); stage.innerHTML = '<p>Lab load nahi hua.</p>'; }
    }, 0);
    return el;
  }

  /* ---------- GLOSSARY ---------- */
  function glossaryView() {
    const all = glossary();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const el = u.el(`<div class="wrap view" style="max-width:960px">
      <div class="eyebrow">Glossary</div>
      <h1 style="font-size:var(--step-4);margin-top:6px">Psychology A to Z</h1>
      <p class="lead" style="margin-top:10px">${all.length} terms, har ek simple definition ke saath, aur us chapter ka link jahan ye detail me samjhaya gaya hai.</p>
      <div class="row" style="margin-top:16px"><input id="glossSearch" type="search" placeholder="Term dhoondo..." style="flex:1;min-width:200px" aria-label="Glossary search"><a class="btn ghost" href="#cards">${icon('cards')}Flashcards se practice</a></div>
      <div class="az" id="az"></div>
      <div id="glossList" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>`);
    const list = u.$('#glossList', el), az = u.$('#az', el), inp = u.$('#glossSearch', el);
    const draw = () => {
      const q = inp.value.trim().toLowerCase();
      const items = q ? all.filter((g) => g.term.toLowerCase().includes(q) || u.strip(g.def).toLowerCase().includes(q)) : all;
      const groups = {};
      items.forEach((g) => { const L = /[a-z]/i.test(g.term[0]) ? g.term[0].toUpperCase() : '#'; (groups[L] = groups[L] || []).push(g); });
      az.innerHTML = letters.map((L) => `<button data-l="${L}" ${groups[L] ? '' : 'disabled'}>${L}</button>`).join('');
      u.$$('button', az).forEach((b) => b.addEventListener('click', () => {
        const g = u.$('#g-' + b.dataset.l, list);
        if (g) window.scrollTo({ top: g.getBoundingClientRect().top + window.scrollY - 120, behavior: u.reduced() ? 'auto' : 'smooth' });
      }));
      list.innerHTML = Object.keys(groups).sort().map((L) => `<div class="gloss-group" id="g-${L}"><h2>${L}</h2>${groups[L].map((g) => `<div class="card gitem" style="${lc(g.level)}"><div><b>${g.term}</b>${g.ch ? `<br><a href="#c-${g.ch}" style="color:var(--lc)">Level ${g.level} chapter ${icon('right').replace('<svg', '<svg style="width:11px;height:11px;vertical-align:-1px"')}</a>` : ''}</div><p>${g.def}</p></div>`).join('')}</div>`).join('') || '<div class="card empty">Koi term nahi mila.</div>';
    };
    inp.addEventListener('input', draw);
    draw();
    return el;
  }

  /* ---------- FLASHCARDS ---------- */
  function cardsView() {
    const all = glossary();
    let level = 0, deck = [], idx = 0, flipped = false;
    const el = u.el(`<div class="wrap view" style="max-width:820px">
      <div class="eyebrow">Flashcards · Spaced repetition</div>
      <h1 style="font-size:var(--step-4);margin-top:6px">Terms pakke karo</h1>
      <p class="lead" style="margin-top:10px">Card par tap karke definition dekho. "Pata tha" dabane par card agli baar der se aayega (1, 2, 4, 8, 16 din), "Phir se" par jaldi. Ye Leitner system hai, jo spacing effect par based hai.</p>
      <div class="vis-ctrl" style="margin-top:16px"><div class="seg" id="lvlSeg"></div></div>
      <div class="fc-wrap" id="fcWrap"></div>
    </div>`);
    const seg = u.$('#lvlSeg', el), wrap = u.$('#fcWrap', el);
    seg.innerHTML = `<button data-l="0" class="on">Sab</button>` + PSY.levels.map((lv) => `<button data-l="${lv.n}">L${lv.n}</button>`).join('');
    u.$$('button', seg).forEach((b) => b.addEventListener('click', () => {
      u.$$('button', seg).forEach((x) => x.classList.toggle('on', x === b));
      level = +b.dataset.l; build();
    }));
    const build = () => {
      const st = S();
      const now = Date.now();
      const pool = all.filter((g) => !level || g.level === level);
      const due = pool.filter((g) => !st.cards[g.term] || st.cards[g.term].due <= now);
      const fresh = u.shuffle(due.filter((g) => !st.cards[g.term]));
      const old = due.filter((g) => st.cards[g.term]).sort((a, b) => st.cards[a.term].due - st.cards[b.term].due);
      deck = old.concat(fresh).slice(0, 20);
      idx = 0; flipped = false;
      draw();
    };
    const boxes = () => {
      const st = S();
      const pool = all.filter((g) => !level || g.level === level);
      const counts = [0, 0, 0, 0, 0, 0];
      pool.forEach((g) => { const c = st.cards[g.term]; counts[c ? c.box : 0]++; });
      return `<div class="boxes">${['Naye', 'Box 1', 'Box 2', 'Box 3', 'Box 4', 'Mastered'].map((n, i) => `<div class="card"><b>${counts[i]}</b><span>${n}</span></div>`).join('')}</div>`;
    };
    const draw = () => {
      if (!deck.length || idx >= deck.length) {
        wrap.innerHTML = `<div class="card empty" style="width:100%;display:flex;flex-direction:column;gap:12px;align-items:center">${icon('check').replace('<svg', '<svg style="width:36px;height:36px;color:var(--good)"')}<b>Is session ke saare cards ho gaye!</b><span>Kal phir aao, due cards wapas milenge.</span><button class="btn small" id="more">Aur cards practice karo</button></div>${boxes()}`;
        u.$('#more', wrap).onclick = () => {
          const pool = all.filter((g) => !level || g.level === level);
          deck = u.shuffle(pool).slice(0, 20); idx = 0; flipped = false; draw();
        };
        return;
      }
      const g = deck[idx];
      const lv = PSY.levels[g.level - 1];
      wrap.innerHTML = `<div class="muted mono" style="font-size:.85rem">Card ${idx + 1} / ${deck.length}</div>
        <button class="fc ${flipped ? 'flip' : ''}" id="fc" style="${lc(g.level)}" aria-label="Card palto">
          <div class="fc-inner"><div class="fc-face"><small>Level ${lv.n} · ${lv.title}</small><b style="color:var(--lc)">${g.term}</b><small>Tap karke definition dekho</small></div>
          <div class="fc-face back"><small>${g.term}</small><p>${g.def}</p></div></div>
        </button>
        <div class="row" id="fcBtns" style="justify-content:center" ${flipped ? '' : 'hidden'}><button class="btn ghost" id="again">${icon('replay')}Phir se</button><button class="btn" id="knew">${icon('check')}Pata tha</button></div>
        ${boxes()}`;
      const fc = u.$('#fc', wrap);
      fc.onclick = () => { flipped = !flipped; fc.classList.toggle('flip', flipped); u.$('#fcBtns', wrap).hidden = !flipped; };
      u.$('#again', wrap).onclick = () => { store.review(g.term, false); deck.push(g); idx++; flipped = false; draw(); renderShell(); };
      u.$('#knew', wrap).onclick = () => { store.review(g.term, true); idx++; flipped = false; draw(); renderShell(); };
    };
    const key = (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === ' ' && u.$('#fc', wrap)) { e.preventDefault(); u.$('#fc', wrap).click(); }
    };
    document.addEventListener('keydown', key);
    onCleanup(() => document.removeEventListener('keydown', key));
    build();
    return el;
  }

  /* ---------- RESOURCES ---------- */
  function resourcesView() {
    const R = PSY.resources || [];
    const el = u.el(`<div class="wrap view">
      <div class="eyebrow">Library</div>
      <h1 style="font-size:var(--step-4);margin-top:6px">Psychology resources, sab ek jagah</h1>
      <p class="lead" style="margin-top:10px">Free textbooks, video courses, books (beginner se advanced), podcasts, research tools, Indian courses aur exams. Har resource ke saath likha hai ki kab aur kyun use karna hai.</p>
      <div class="res-nav" style="margin-top:16px">${R.map((s, i) => `<button class="btn ghost small" data-sec="${i}">${s.title}</button>`).join('')}</div>
      ${R.map((s, i) => `<section class="res-sec" id="res-${i}"><div><div class="eyebrow">${s.items.length} resources</div><h2>${s.title}</h2>${s.desc ? `<p class="muted" style="margin-top:4px">${s.desc}</p>` : ''}</div>
        ${s.helpline ? `<div class="card helpline"><b>${s.helpline.title}</b><p>${s.helpline.text}</p><div class="nums">${s.helpline.nums.map(([n, num, note]) => `<div class="num"><small class="muted">${n}</small><b>${num}</b><small class="muted">${note}</small></div>`).join('')}</div></div>` : ''}
        <div class="res-list">${s.items.map((r) => `<article class="card res"><div class="row" style="justify-content:space-between"><span class="tag">${r.type}</span>${r.level ? `<span class="tag">${r.level}</span>` : ''}</div><h3>${r.title}</h3>${r.by ? `<div class="by">${r.by}</div>` : ''}<p>${r.why}</p>${r.url ? `<a class="go" href="${r.url}" target="_blank" rel="noopener">${r.cta || 'Kholo'} ${icon('right')}</a>` : ''}</article>`).join('')}</div>
      </section>`).join('')}
    </div>`);
    u.$$('[data-sec]', el).forEach((b) => b.addEventListener('click', () => {
      const s = u.$('#res-' + b.dataset.sec, el);
      if (s) s.scrollIntoView({ behavior: u.reduced() ? 'auto' : 'smooth' });
    }));
    return el;
  }

  /* ---------- LIBRARIES: Roz ki Psychology + Smart Dimaag ---------- */
  const libState = { daily: { q: '', cat: '', level: 0, kind: '' }, smart: { q: '', cat: '', level: 0 } };
  const catIdx = (list, key) => Math.max(0, list.findIndex((c) => c[0] === key));
  const catLc = (list, key) => `--lc: var(--l${(catIdx(list, key) % 8) + 1})`;
  const catOf = (list, key) => list.find((c) => c[0] === key) || [key, key, 'spark', ''];
  const lvTag = (n) => { const L = PSY.libLevels[n] || PSY.libLevels[1]; return `<span class="tag lv"><i style="background:${L.color}"></i>${L.name}</span>`; };
  const kindTag = (k) => `<span class="tag kind kind-${k}">${(PSY.dailyKinds[k] || {}).name || k}</span>`;
  const libParas = (x) => (Array.isArray(x) ? x : [x]).map((p) => `<p>${p}</p>`).join('');
  const seriesOf = (name) => PSY.situations.filter((d) => d.series && d.series[0] === name).sort((a, b) => a.series[1] - b.series[1]);
  const sortedSits = () => PSY.situations.slice().sort((a, b) => catIdx(PSY.dailyCats, a.cat) - catIdx(PSY.dailyCats, b.cat) || (a.series && b.series ? a.series[0].localeCompare(b.series[0]) || a.series[1] - b.series[1] : 0) || a.level - b.level);
  const sortedSkills = () => PSY.skills.slice().sort((a, b) => catIdx(PSY.skillCats, a.cat) - catIdx(PSY.skillCats, b.cat) || a.level - b.level);
  const libText = (o) => o._t || (o._t = u.strip(JSON.stringify(o)).toLowerCase());
  const relLinks = (ids) => {
    const chs = (ids || []).map((id) => PSY.getChapter(id)).filter(Boolean);
    return chs.length ? `<div class="rel"><span class="muted">Course me gehrai se:</span>${chs.map((c) => `<a href="#c-${c.id}" style="${lc(c.level)}">${icon(PSY.levels[c.level - 1].icon)}${c.title}</a>`).join('')}</div>` : '';
  };
  const situationCard = (d) => {
    const c = catOf(PSY.dailyCats, d.cat);
    return `<a class="card lib-card" href="#d-${d.id}" style="${catLc(PSY.dailyCats, d.cat)}"><div class="top">${icon(c[2])}<span>${c[1]}</span>${S().daily[d.id] ? `<span class="done">${icon('check')}</span>` : ''}</div><h3>${d.title}</h3><p>${d.hook}</p><div class="row">${lvTag(d.level)}${kindTag(d.kind)}${d.series ? `<span class="tag">Ep ${d.series[1]} · ${d.series[0]}</span>` : ''}</div></a>`;
  };
  const skillCard = (k) => {
    const c = catOf(PSY.skillCats, k.cat);
    return `<a class="card lib-card" href="#s-${k.id}" style="${catLc(PSY.skillCats, k.cat)}"><div class="top">${icon(c[2])}<span>${c[1]}</span>${S().smart[k.id] ? `<span class="done">${icon('check')}</span>` : ''}</div><h3>${k.q}</h3><p>${k.short}</p><div class="row">${lvTag(k.level)}</div></a>`;
  };

  const KINDS = ['', 'anjaane', 'jaanbujh', 'dono'];
  function libraryShell(kind) {
    const daily = kind === 'daily';
    const f = libState[kind];
    const cats = daily ? PSY.dailyCats : PSY.skillCats;
    const all = daily ? PSY.situations : PSY.skills;
    const sorted = daily ? sortedSits() : sortedSkills();
    const card = daily ? situationCard : skillCard;
    const noun = daily ? 'situations' : 'cards';
    const doneMap = daily ? S().daily : S().smart;
    const done = all.filter((x) => doneMap[x.id]).length;
    const el = u.el(`<div class="wrap view lib">
      <div class="eyebrow">Library · ${daily ? 'Roz ki Psychology' : 'Smart Dimaag'}</div>
      <h1 class="lib-h1">${daily ? 'Roz ki situations, unke peeche ki psychology' : 'Dimaag ko active, smart aur creative banao'}</h1>
      ${teach(daily ? 'Yahan wo situations hain jo tumhare saath ya aas-paas roz hoti hain. Har ek me ek kahani hai, phir ek sawaal: "tumhe kya lagta hai, kyun?" Pehle khud socho, phir dekho psychology kya kehti hai. Dheere-dheere ye patterns tumhe har jagah dikhne lagenge.' : 'Psychology padhne ka asli fayda tab hai jab wo roz ki soch aur baatcheet me dikhe. Har card ek "kaise karein?" ka jawab hai: science, steps, example, bolne ki lines, aur ek chhota workout. Roz ek card, aur dimaag ki training chalti rahegi.', 'mini')}
      <div class="lib-progress"><span class="muted">${done}/${all.length} ${daily ? 'situations samjhi' : 'workouts kiye'}</span><div class="bar"><span style="width:${all.length ? (done / all.length) * 100 : 0}%"></span></div></div>
      <div class="lib-controls">
        <input type="search" id="libQ" placeholder="${daily ? 'Dhoondo: exam, sale, gussa, reels...' : 'Dhoondo: focus, interview, gussa, idea...'}" value="${esc(f.q)}" aria-label="Library me dhoondo">
      </div>
      <div class="lib-filters">
        <div class="seg" role="group" aria-label="Level" data-f="level">${['Sab level', 'Basic', 'Gehra', 'Expert'].map((o, i) => `<button data-v="${i}">${o} <small class="cnt"></small></button>`).join('')}</div>
        ${daily ? `<div class="seg" role="group" aria-label="Jaanbujh kar ya anjaane me" data-f="kind">${['Sab', 'Anjaane me', 'Jaanbujh kar', 'Dono'].map((o, i) => `<button data-v="${KINDS[i]}">${o} <small class="cnt"></small></button>`).join('')}</div>` : ''}
      </div>
      <div class="lib-cats" role="group" aria-label="Category">${[['', 'Sab', 'grid']].concat(cats).map(([k, n, ic]) => `<button class="lib-chip" data-cat="${k}">${icon(ic)}${n}<small class="cnt"></small></button>`).join('')}</div>
      <p class="muted lib-catdesc"></p>
      <div class="lib-result" aria-live="polite"></div>
      <div class="lib-grid"></div>
    </div>`);
    const grid = u.$('.lib-grid', el);
    const words = () => f.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    // pass(x, skip): does x match every active filter except the ones listed in skip?
    const pass = (x, skip, w) => (skip.includes('cat') || !f.cat || x.cat === f.cat) && (skip.includes('level') || !f.level || x.level === f.level) && (!daily || skip.includes('kind') || !f.kind || x.kind === f.kind) && (skip.includes('q') || w.every((t) => libText(x).includes(t)));
    const label = { q: () => `"${esc(f.q.trim())}"`, cat: () => catOf(cats, f.cat)[1], level: () => PSY.libLevels[f.level].name, kind: () => PSY.dailyKinds[f.kind].name };
    const active = () => ['q', 'cat', 'level', 'kind'].filter((k) => (k === 'q' ? f.q.trim() : k === 'kind' ? daily && f.kind : f[k]));
    const clear = (k) => { if (k === 'q') { f.q = ''; u.$('#libQ', el).value = ''; } else if (k === 'level') f.level = 0; else f[k] = ''; };
    const setCount = (b, n, on) => { b.classList.toggle('on', on); u.$('.cnt', b).textContent = n; b.classList.toggle('zero', !n); b.disabled = !n && !on; };
    const draw = () => {
      const w = words();
      u.$$('.lib-chip', el).forEach((b) => { const k = b.dataset.cat; setCount(b, sorted.filter((x) => pass(x, ['cat'], w) && (!k || x.cat === k)).length, f.cat === k); });
      u.$$('[data-f="level"] button', el).forEach((b) => { const v = +b.dataset.v; setCount(b, sorted.filter((x) => pass(x, ['level'], w) && (!v || x.level === v)).length, f.level === v); });
      u.$$('[data-f="kind"] button', el).forEach((b) => { const v = b.dataset.v; setCount(b, sorted.filter((x) => pass(x, ['kind'], w) && (!v || x.kind === v)).length, f.kind === v); });
      const list = sorted.filter((x) => pass(x, [], w));
      const act = active();
      u.$('.lib-result', el).innerHTML = `<span>${list.length} ${noun}</span>${act.map((k) => `<button class="lib-pill" data-clear="${k}" aria-label="${label[k]()} filter hatao">${label[k]()}${icon('x')}</button>`).join('')}${act.length > 1 ? '<button class="lib-clear" data-clear="all">Saare filter hatao</button>' : ''}`;
      if (list.length) grid.innerHTML = list.map(card).join('');
      else if (!all.length) grid.innerHTML = '<div class="card empty lib-empty">Content jaldi aa raha hai.</div>';
      else {
        // Relax filters one by one (kind, level, search, category) until something matches
        const dropped = [];
        let near = [];
        for (const k of ['kind', 'level', 'q', 'cat']) {
          if (!act.includes(k)) continue;
          dropped.push(k);
          near = sorted.filter((x) => pass(x, dropped, w));
          if (near.length) break;
        }
        grid.innerHTML = `<div class="card empty lib-empty"><b>Is combination me abhi koi ${daily ? 'situation' : 'card'} nahi hai.</b><span>${dropped.length ? `Neeche wo ${noun} hain jo <b>${dropped.map((k) => label[k]()).join(' + ')}</b> filter hata kar milti hain.` : ''}</span><div class="row">${dropped.map((k) => `<button class="btn ghost small" data-clear="${k}">${label[k]()} hatao</button>`).join('')}<button class="btn small" data-clear="all">Saare filter hatao</button></div></div>${near.length ? `<div class="lib-near-head">Milti-julti ${noun}</div>${near.slice(0, 12).map(card).join('')}` : ''}`;
      }
      const c = f.cat && catOf(cats, f.cat);
      u.$('.lib-catdesc', el).textContent = c ? c[3] : '';
    };
    el.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      if (b.dataset.clear) { (b.dataset.clear === 'all' ? ['q', 'cat', 'level', 'kind'] : [b.dataset.clear]).forEach(clear); draw(); return; }
      if (b.classList.contains('lib-chip')) { f.cat = b.dataset.cat; draw(); return; }
      const seg = b.closest('[data-f]');
      if (seg) { if (seg.dataset.f === 'level') f.level = +b.dataset.v; else f.kind = b.dataset.v; draw(); }
    });
    u.$('#libQ', el).addEventListener('input', (e) => { f.q = e.target.value; draw(); });
    draw();
    return el;
  }
  const dailyView = () => libraryShell('daily');
  const smartView = () => libraryShell('smart');

  function situationView(id) {
    const d = PSY.situations.find((x) => x.id === id);
    if (!d) return u.el(`<div class="wrap view"><div class="card empty">Ye situation nahi mili. <a href="#daily">Roz ki Psychology</a> par jao.</div></div>`);
    const c = catOf(PSY.dailyCats, d.cat);
    const done = !!S().daily[d.id];
    const ser = d.series ? seriesOf(d.series[0]) : null;
    const list = ser || sortedSits().filter((x) => x.cat === d.cat);
    const i = list.indexOf(d);
    const prev = list[i - 1], next = list[i + 1] || sortedSits()[sortedSits().indexOf(d) + 1];
    let n = 0;
    const sec = (title, body) => `<section><h2><span class="sn">${++n}</span>${title}</h2>${body}</section>`;
    const hideAnalysis = d.guess && !done;
    const el = u.el(`<div class="wrap view lib-detail" style="${catLc(PSY.dailyCats, d.cat)}">
      <nav class="crumb"><a href="#daily">Roz ki Psychology</a><span>/</span><a href="#daily" class="to-cat">${c[1]}</a></nav>
      ${ser ? `<div class="series-bar">${icon('book')}Kahani: ${d.series[0]} <span class="ep-dots">${ser.map((x) => `<a href="#d-${x.id}" class="${x === d ? 'on' : ''}" aria-label="Episode ${x.series[1]}">${x.series[1]}</a>`).join('')}</span></div>` : ''}
      <h1>${d.title}</h1>
      <div class="row"><span class="tag lvl">${icon(c[2])}${c[1]}</span>${lvTag(d.level)}${kindTag(d.kind)}</div>
      ${teach(d.teacher, 'intro')}
      <section class="card story"><div class="blk-label">${icon('book')}Kahani</div>${libParas(d.story)}</section>
      ${d.guess ? `<section class="card guess"><div class="blk-label">${icon('bulb')}Pehle tum socho</div><p class="q-text">${d.guess[0]}</p><div class="opts">${d.guess[1].map((o, j) => `<button class="opt" data-j="${j}"><span class="k">${'ABCD'[j]}</span><span>${o}</span></button>`).join('')}</div><div class="guess-after"></div>${hideAnalysis ? '<button class="btn ghost small skip-guess">Bina andaze ke aage padho</button>' : ''}</section>` : ''}
      <div class="analysis" ${hideAnalysis ? 'hidden' : ''}>
        ${sec('Log kya karte hain', `<p>${d.kya}</p>`)}
        ${sec('Kyun karte hain', `<div class="concepts">${d.kyun.map(([k, v]) => `<div class="concept"><b>${k}</b><p>${v}</p></div>`).join('')}</div>`)}
        ${sec('Kaise hota hai', `<ol class="flow">${d.kaise.map((x) => `<li>${x}</li>`).join('')}</ol>`)}
        ${sec('Jaanbujh kar ya anjaane me?', `<div class="kind-box">${kindTag(d.kind)}<p>${d.irada}</p></div>`)}
        ${d.gap ? sec('Jaante huye bhi galti kyun?', `<div class="blk note"><div class="blk-label">${icon('alert')}Knowing-doing gap</div><p>${d.gap}</p></div>`) : ''}
        ${d.real ? sec('Real life me', `<div class="blk case"><div class="blk-label">${icon('lab')}Real incident ya study</div><h4>${d.real[0]}</h4>${libParas(d.real[1])}</div>`) : ''}
        ${sec('Ab kya karein', `<ul class="fix-list">${d.fix.map((x) => `<li>${icon('check')}<span>${x}</span></li>`).join('')}</ul>`)}
        ${relLinks(d.chapters)}
        <div class="lib-done">${done ? `${icon('check')}<b>Ye situation tumne samajh li hai.</b>` : `<span>Pattern samajh aa gaya? Ise apni life me dhoondo.</span><button class="btn lc mark-done">${icon('check')}Samajh aa gaya (+8 XP)</button>`}</div>
      </div>
      <nav class="ch-nav">
        ${prev ? `<a href="#d-${prev.id}"><small>${ser ? 'Pichhla episode' : 'Pichhli situation'}</small><b>${prev.title}</b></a>` : '<span></span>'}
        ${next ? `<a class="next" href="#d-${next.id}"><small>${ser && list[i + 1] ? 'Agla episode' : 'Agli situation'}</small><b>${next.title}</b></a>` : `<a class="next" href="#daily"><small>Library</small><b>Saari situations</b></a>`}
      </nav>
    </div>`);
    u.$('.to-cat', el).addEventListener('click', () => { libState.daily.cat = d.cat; });
    const analysis = u.$('.analysis', el);
    const show = () => { if (analysis.hidden) { analysis.hidden = false; analysis.classList.add('fade-in'); } const sk = u.$('.skip-guess', el); if (sk) sk.remove(); };
    if (d.guess) {
      u.$$('.guess .opt', el).forEach((b) => b.addEventListener('click', () => {
        const box = u.$('.guess .opts', el);
        if (box.classList.contains('locked')) return;
        box.classList.add('locked');
        const j = +b.dataset.j, ok = j === d.guess[2];
        u.$$('.guess .opt', el).forEach((x) => { if (+x.dataset.j === d.guess[2]) x.classList.add('ok'); else if (x === b) x.classList.add('no'); });
        u.$('.guess-after', el).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${ok ? 'Sahi socha!' : 'Asli wajah kuch aur hai.'}</b> ${d.guess[3]} Neeche poori psychology dekho.</div>`;
        show();
      }));
      const sk = u.$('.skip-guess', el);
      if (sk) sk.addEventListener('click', show);
    }
    const md = u.$('.mark-done', el);
    if (md) md.addEventListener('click', () => { store.dailyDone(d.id); md.parentElement.innerHTML = `${icon('check')}<b>Shabaash! Ab ye pattern apni life me dhoondo.</b>`; renderShell(); });
    return el;
  }

  function skillView(id) {
    const k = PSY.skills.find((x) => x.id === id);
    if (!k) return u.el(`<div class="wrap view"><div class="card empty">Ye card nahi mila. <a href="#smart">Smart Dimaag</a> par jao.</div></div>`);
    const c = catOf(PSY.skillCats, k.cat);
    const rec = S().smart[k.id];
    const list = sortedSkills().filter((x) => x.cat === k.cat);
    const i = list.indexOf(k);
    const prev = list[i - 1], next = list[i + 1] || sortedSkills()[sortedSkills().indexOf(k) + 1];
    let n = 0;
    const sec = (title, body) => `<section><h2><span class="sn">${++n}</span>${title}</h2>${body}</section>`;
    const today = rec && rec.last === u.today();
    const el = u.el(`<div class="wrap view lib-detail" style="${catLc(PSY.skillCats, k.cat)}">
      <nav class="crumb"><a href="#smart">Smart Dimaag</a><span>/</span><a href="#smart" class="to-cat">${c[1]}</a></nav>
      <h1>${k.q}</h1>
      <div class="row"><span class="tag lvl">${icon(c[2])}${c[1]}</span>${lvTag(k.level)}</div>
      ${teach(k.short, 'intro', 'Seedha jawab')}
      ${sec('Ye kaam kyun karta hai', libParas(k.why))}
      ${sec('Kaise karein: step by step', `<div class="steps">${k.steps.map(([a, b]) => `<div class="st"><div><b>${a}</b><span>${b}</span></div></div>`).join('')}</div>`)}
      ${sec('Real life me aise', `<div class="card story">${libParas(k.example)}</div>`)}
      ${k.script ? sec('Baatcheet me aise bolo', `<div class="table-wrap"><table><thead><tr><th>Situation</th><th>Bolo</th></tr></thead><tbody>${k.script.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody></table></div>`) : ''}
      ${k.mistakes ? sec('Common galtiyan', `<ul class="fix-list bad">${k.mistakes.map((x) => `<li>${icon('x')}<span>${x}</span></li>`).join('')}</ul>`) : ''}
      <section class="drill"><div class="blk-label">${icon('bolt')}Aaj ka brain workout</div><p>${k.drill}</p><div class="row drill-row">${today ? `<span class="tag done">${icon('check')}Aaj ho gaya</span>` : `<button class="btn lc do-drill">${icon('check')}Workout ho gaya (+${rec ? 4 : 10} XP)</button>`}${rec ? `<span class="muted">${rec.n} baar kiya</span>` : ''}</div></section>
      ${teach(k.teacher, 'outro')}
      ${relLinks(k.chapters)}
      <nav class="ch-nav">
        ${prev ? `<a href="#s-${prev.id}"><small>Pichhla card</small><b>${prev.q}</b></a>` : '<span></span>'}
        ${next ? `<a class="next" href="#s-${next.id}"><small>Agla card</small><b>${next.q}</b></a>` : `<a class="next" href="#smart"><small>Library</small><b>Saare cards</b></a>`}
      </nav>
    </div>`);
    u.$('.to-cat', el).addEventListener('click', () => { libState.smart.cat = k.cat; });
    const b = u.$('.do-drill', el);
    if (b) b.addEventListener('click', () => { store.smartDone(k.id); const r = S().smart[k.id]; u.$('.drill-row', el).innerHTML = `<span class="tag done">${icon('check')}Aaj ho gaya</span><span class="muted">${r.n} baar kiya</span>`; renderShell(); });
    return el;
  }

  /* ---------- PROFILE ---------- */
  function profileView() {
    const st = S();
    const done = PSY.doneCount();
    const passedLevels = PSY.levels.filter((lv) => PSY.levelPassed(lv.n)).length;
    const initial = (st.name || 'P').trim()[0].toUpperCase();
    const el = u.el(`<div class="wrap view" style="max-width:980px">
      <div class="card profile-top">
        <div class="avatar">${esc(initial)}</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div class="eyebrow">Rank: ${PSY.rank()}</div>
          <div class="row"><input type="text" id="nameInput" placeholder="Apna naam likho (certificate ke liye)" value="${esc(st.name)}" style="flex:1;min-width:200px;font-size:1.1rem" aria-label="Tumhara naam"><button class="btn small" id="saveName">Save</button></div>
          <div class="row"><span class="tag">${icon('bolt')}${st.xp} XP</span><span class="tag">${icon('check')}${done}/${PSY.chapters.length} chapters</span><span class="tag">${icon('trophy')}${passedLevels}/${PSY.levels.length} levels</span><span class="tag">${icon('flame')}Best streak ${st.streak.best || 0}</span><span class="tag">${icon('lab')}${Object.keys(st.labs).length} labs</span><span class="tag">${icon('cards')}${st.reviews || 0} reviews</span><span class="tag">${icon('eye')}${Object.keys(st.daily || {}).length} situations</span><span class="tag">${icon('bulb')}${Object.keys(st.smart || {}).length} workouts</span></div>
        </div>
      </div>
      <section class="section"><div class="section-head"><h2>Level medals</h2>${passedLevels === PSY.levels.length ? `<a class="btn small" href="#certificate">${icon('award')}Certificate</a>` : ''}</div>
        <div class="medals">${PSY.levels.map((lv) => `<a class="card medal ${PSY.levelPassed(lv.n) ? '' : 'off'}" href="#exam-${lv.n}" style="${lc(lv.n)};text-decoration:none;color:inherit"><span class="m">${lv.n}</span><b>${lv.rank}</b><small>${PSY.levelPassed(lv.n) ? 'Achieved' : pct(PSY.levelPct(lv.n)) + ' chapters'}</small></a>`).join('')}</div>
      </section>
      <section class="section"><div class="section-head"><h2>Badges</h2><span class="muted">${Object.keys(st.badges).length}/${PSY.badges.length}</span></div>
        <div class="badges">${PSY.badges.map((b) => `<div class="card badge ${st.badges[b.id] ? '' : 'off'}"><span class="bi">${icon(b.icon)}</span><span><b>${b.name}</b><small>${b.desc}</small></span></div>`).join('')}</div>
      </section>
      <section class="section"><div class="section-head"><h2>Settings</h2></div>
        <div class="card settings">
          <div class="setting"><div><b>Explorer mode</b><small>Saare levels aur exams turant khol do (agar tumhe pehle se kuch aata hai).</small></div><button class="switch" id="explorer" role="switch" aria-checked="${st.explorer}" aria-label="Explorer mode"></button></div>
          <div class="setting"><div><b>Theme</b><small>Light, dark ya system ke hisaab se.</small></div><div class="seg" id="themeSeg"><button data-t="">System</button><button data-t="light">Light</button><button data-t="dark">Dark</button></div></div>
          <div class="setting"><div><b>Progress reset</b><small>Saara XP, quiz scores aur badges mit jaayenge. Wapas nahi aayenge.</small></div><div class="row" id="resetBox"><button class="btn ghost small" id="resetBtn">Reset karo</button></div></div>
        </div>
        <p class="muted" style="font-size:.85rem">Tumhara progress sirf isi browser me save hota hai. Private window ya data clear karne par mit sakta hai.</p>
      </section>
    </div>`);
    const saveName = () => { store.setName(u.$('#nameInput', el).value.trim()); PSY.toast('Naam save ho gaya', 'check'); route(); };
    u.$('#saveName', el).onclick = saveName;
    u.$('#nameInput', el).addEventListener('keydown', (e) => { if (e.key === 'Enter') saveName(); });
    const sw = u.$('#explorer', el);
    sw.onclick = () => { const v = sw.getAttribute('aria-checked') !== 'true'; sw.setAttribute('aria-checked', v); store.setExplorer(v); PSY.toast(v ? 'Explorer mode on: saare levels khul gaye' : 'Explorer mode off', 'path'); renderShell(); };
    const seg = u.$('#themeSeg', el);
    const markTheme = () => u.$$('button', seg).forEach((b) => b.classList.toggle('on', (b.dataset.t || null) === (S().theme || null)));
    u.$$('button', seg).forEach((b) => b.addEventListener('click', () => { store.setTheme(b.dataset.t || null); applyTheme(); markTheme(); }));
    markTheme();
    u.$('#resetBtn', el).onclick = () => {
      const box = u.$('#resetBox', el);
      box.innerHTML = `<span class="muted" style="font-size:.85rem">Pakka?</span><button class="btn ghost small" id="noReset">Nahi</button><button class="btn small" id="yesReset" style="background:var(--bad)">Haan, reset karo</button>`;
      u.$('#noReset', el).onclick = () => route();
      u.$('#yesReset', el).onclick = () => { store.reset(); PSY.toast('Progress reset ho gaya', 'replay'); route(); };
    };
    return el;
  }

  /* ---------- CERTIFICATE ---------- */
  function certificateView() {
    const st = S();
    const all = PSY.levels.every((lv) => PSY.levelPassed(lv.n));
    if (!all) {
      const n = PSY.levels.filter((lv) => PSY.levelPassed(lv.n)).length;
      return u.el(`<div class="wrap view"><div class="card empty" style="padding:44px 22px;display:flex;flex-direction:column;gap:12px;align-items:center">${icon('award').replace('<svg', '<svg style="width:44px;height:44px;color:var(--spark)"')}<h2>Certificate abhi locked hai</h2><p>Saare ${PSY.levels.length} level exams pass karo. Abhi tak: <b>${n}/${PSY.levels.length}</b>.</p><a class="btn" href="#path">Learning path</a></div></div>`);
    }
    let canPrint = true;
    try { canPrint = window.self === window.top; } catch (e) { canPrint = false; }
    const lastPass = Math.max(...PSY.levels.map((lv) => st.exams[lv.n].passed));
    const date = new Date(lastPass).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const el = u.el(`<div class="wrap view">
      <div class="row no-print" style="justify-content:space-between"><div><div class="eyebrow">Certificate</div><h1 style="font-size:var(--step-3)">Mubarak ho!</h1></div>${canPrint ? `<button class="btn" id="printBtn">${icon('award')}Print / PDF</button>` : ''}</div>
      ${st.name ? '' : `<p class="no-print muted" style="margin-top:8px">Certificate par naam ke liye <a href="#profile">Profile</a> me naam save karo.</p>`}
      <div class="cert"><div class="cert-in">
        <div class="psi">&psi;</div>
        <div class="eyebrow">Certificate of completion</div>
        <h2>Manovigyan: Psychology A to Z</h2>
        <p>Ye pramanit kiya jaata hai ki</p>
        <div class="nm">${esc(st.name || 'Psychology Learner')}</div>
        <p>ne ${PSY.chapters.length} chapters aur saare ${PSY.levels.length} level exams (${PSY.levels[0].title} se ${PSY.levels[PSY.levels.length - 1].title} tak) safaltapoorvak poore kiye, aur <b>Psychology Master</b> aur <b>Mind Guardian</b> ranks achieve kiye.</p>
        <p class="mono" style="font-size:.8rem">${date} · ${st.xp} XP</p>
      </div></div>
    </div>`);
    const pb = u.$('#printBtn', el);
    if (pb) pb.onclick = () => window.print();
    return el;
  }

  /* ---------- SEARCH ---------- */
  function chapterText(c) {
    if (c._text) return c._text;
    const parts = [c.title, c.tag, c.hook || '', c.intro || '', c.outro || ''];
    c.blocks.forEach((b) => {
      b.slice(1).forEach((x) => {
        if (typeof x === 'string') parts.push(x);
        else if (Array.isArray(x)) parts.push(JSON.stringify(x));
      });
    });
    c._text = u.strip(parts.join(' ')).toLowerCase();
    return c._text;
  }
  function searchView() {
    const q = query.trim().toLowerCase();
    const el = u.el(`<div class="wrap view" style="max-width:880px"><div class="eyebrow">Search</div><h1 style="font-size:var(--step-3);margin-top:6px">"${esc(query)}" ke results</h1><div id="sr" style="display:flex;flex-direction:column;gap:10px;margin-top:18px"></div></div>`);
    const box = u.$('#sr', el);
    if (!q) { box.innerHTML = '<div class="card empty">Upar search box me kuch likho.</div>'; return el; }
    const words = q.split(/\s+/).filter(Boolean);
    const res = [];
    PSY.chapters.forEach((c) => {
      const t = chapterText(c);
      let score = 0;
      words.forEach((w) => {
        if (u.strip(c.title).toLowerCase().includes(w)) score += 10;
        if (c.tag.toLowerCase().includes(w)) score += 4;
        const m = t.split(w).length - 1;
        score += Math.min(m, 8);
      });
      if (score > 0 && words.every((w) => t.includes(w))) {
        const pos = t.indexOf(words[0]);
        const snip = t.slice(Math.max(0, pos - 70), pos + 130);
        res.push({ score, html: `<a class="card sr" href="#c-${c.id}" style="${lc(c.level)}"><small style="color:var(--lc)">Chapter · Level ${c.level}</small><b>${c.title}</b><p>...${esc(snip)}...</p></a>` });
      }
    });
    glossary().forEach((g) => {
      const t = (g.term + ' ' + u.strip(g.def)).toLowerCase();
      if (words.every((w) => t.includes(w))) {
        const sc = words.some((w) => g.term.toLowerCase().includes(w)) ? 8 : 2;
        res.push({ score: sc, html: `<a class="card sr" href="${g.ch ? '#c-' + g.ch : '#glossary'}" style="${lc(g.level)}"><small style="color:var(--lc)">Glossary term</small><b>${g.term}</b><p>${g.def}</p></a>` });
      }
    });
    PSY.situations.forEach((d) => {
      const t = libText(d);
      if (words.every((w) => t.includes(w))) {
        const sc = words.filter((w) => (d.title + ' ' + d.tags.join(' ')).toLowerCase().includes(w)).length * 6 + 3;
        res.push({ score: sc, html: `<a class="card sr" href="#d-${d.id}" style="${catLc(PSY.dailyCats, d.cat)}"><small style="color:var(--lc)">Roz ki Psychology · ${catOf(PSY.dailyCats, d.cat)[1]}</small><b>${d.title}</b><p>${d.hook}</p></a>` });
      }
    });
    PSY.skills.forEach((k) => {
      const t = libText(k);
      if (words.every((w) => t.includes(w))) {
        const sc = words.filter((w) => (k.q + ' ' + k.tags.join(' ')).toLowerCase().includes(w)).length * 6 + 3;
        res.push({ score: sc, html: `<a class="card sr" href="#s-${k.id}" style="${catLc(PSY.skillCats, k.cat)}"><small style="color:var(--lc)">Smart Dimaag · ${catOf(PSY.skillCats, k.cat)[1]}</small><b>${k.q}</b><p>${k.short}</p></a>` });
      }
    });
    Object.keys(PSY.labs).forEach((k) => {
      const L = PSY.labs[k];
      const t = (L.title + ' ' + L.short).toLowerCase();
      if (words.every((w) => t.includes(w))) res.push({ score: 6, html: `<a class="card sr" href="#lab-${k}"><small>Lab</small><b>${L.title}</b><p>${L.short}</p></a>` });
    });
    res.sort((a, b) => b.score - a.score);
    box.innerHTML = res.length ? res.slice(0, 40).map((r) => r.html).join('') : '<div class="card empty">Kuch nahi mila. Doosra shabd try karo (jaise "memory", "stress", "Freud").</div>';
    return el;
  }

  /* ---------- boot ---------- */
  document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    query = document.getElementById('searchInput').value;
    document.getElementById('searchInput').blur();
    go('search');
  });
  document.getElementById('skipLink').addEventListener('click', (e) => { e.preventDefault(); main.focus(); });
  window.addEventListener('hashchange', route);
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMq = () => { if (!S().theme) renderShell(); };
    if (mq.addEventListener) mq.addEventListener('change', onMq);
  }
  PSY.onChange(() => { /* shell refresh happens after actions */ });
  if (S().theme) document.documentElement.setAttribute('data-theme', S().theme);
  store.checkBadges();
  route();
})();
