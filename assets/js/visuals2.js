/* Motion graphics · part 2 (Level 2: brain & biology) */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u } = PSY;
  const V = PSY.visual;
  const H = PSY.vh;
  const bindPick = (svg, sel, fn) => u.$$(sel, svg).forEach((g) => {
    g.addEventListener('click', () => fn(+g.dataset.i));
    g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(+g.dataset.i); } });
  });

  /* ---------- Neuron firing ---------- */
  V('neuron', {
    title: 'Neuron fire hota hai',
    render(stage) {
      const W = 680, Hh = 270, ay = 150, ax0 = 128, ax1 = 470;
      let inner = '';
      // dendrites
      [[-60, -50], [-70, 0], [-58, 48], [-30, -62], [-34, 60]].forEach(([dx, dy], i) => {
        inner += `<path d="M90 ${ay} q${dx / 2} ${dy / 3} ${dx} ${dy}" style="fill:none;stroke:var(--ink-2);stroke-width:4;stroke-linecap:round"/>`;
        inner += `<path d="M${90 + dx} ${ay + dy} l${-12 + i * 2} ${-10 + i * 4} M${90 + dx} ${ay + dy} l${-14} ${8 - i}" style="fill:none;stroke:var(--ink-2);stroke-width:2.5;stroke-linecap:round"/>`;
      });
      inner += `<circle id="nr-soma" cx="96" cy="${ay}" r="32" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:3"/><circle cx="96" cy="${ay}" r="10" style="fill:var(--ink-3)"/>`;
      inner += `<line x1="${ax0}" y1="${ay}" x2="${ax1}" y2="${ay}" style="stroke:var(--ink-2);stroke-width:5"/>`;
      for (let x = ax0 + 14; x < ax1 - 40; x += 62) inner += `<rect x="${x}" y="${ay - 11}" width="50" height="22" rx="11" style="fill:var(--spark-soft);stroke:var(--spark);stroke-width:1.5"/>`;
      // terminals
      const terms = [[530, ay - 42], [540, ay], [530, ay + 42]];
      terms.forEach(([tx, ty]) => { inner += `<path d="M${ax1} ${ay} C ${ax1 + 30} ${ay}, ${tx - 30} ${ty}, ${tx - 12} ${ty}" style="fill:none;stroke:var(--ink-2);stroke-width:3.5"/><circle cx="${tx - 4}" cy="${ty}" r="9" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2.5"/>`; });
      // next neuron dendrites
      terms.forEach(([tx, ty], i) => { inner += `<path class="nr-post" d="M${tx + 22} ${ty} q 30 ${(i - 1) * 6} 60 ${(i - 1) * 22 + (i === 1 ? 0 : 0)}" style="fill:none;stroke:var(--ink-3);stroke-width:4;stroke-linecap:round"/><rect x="${tx + 14}" y="${ty - 8}" width="6" height="16" rx="2" style="fill:var(--ink-3)"/>`; });
      inner += `<circle id="nr-post-soma" cx="${W - 34}" cy="${ay}" r="22" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:3"/>`;
      // labels
      const lab = (x, y, t, a = 'middle') => `<text class="svg-small" x="${x}" y="${y}" text-anchor="${a}">${t}</text>`;
      inner += lab(36, 70, 'Dendrites') + lab(96, 210, 'Cell body') + lab(300, ay - 24, 'Axon + myelin') + lab(520, 84, 'Terminals') + lab(561, 222, 'Synapse') + lab(W - 34, 196, 'Agla neuron');
      // electrode + AP inset
      inner += `<line x1="300" y1="${ay + 14}" x2="300" y2="${ay + 40}" style="stroke:var(--ink-3);stroke-dasharray:3 3"/><circle cx="300" cy="${ay + 14}" r="3" style="fill:var(--ink-3)"/>`;
      const gx = 240, gy = 200, gw = 130, gh = 56;
      const apY = (v) => gy + gh - (v + 90) / 140 * gh;
      const apPath = (() => { let d = ''; for (let i = 0; i <= 60; i++) { const tt = i / 60; let v; if (tt < .3) v = -70; else if (tt < .4) v = -70 + (tt - .3) / .1 * 110; else if (tt < .52) v = 40 - (tt - .4) / .12 * 125; else if (tt < .75) v = -85 + (tt - .52) / .23 * 15; else v = -70; d += (d ? 'L' : 'M') + (gx + tt * gw).toFixed(1) + ',' + apY(v).toFixed(1); } return d; })();
      inner += `<rect x="${gx - 6}" y="${gy - 6}" width="${gw + 12}" height="${gh + 12}" rx="8" style="fill:var(--surface);stroke:var(--line)"/><path d="${apPath}" style="fill:none;stroke:var(--ink-3);stroke-width:1.5"/><line x1="${gx}" y1="${apY(-55)}" x2="${gx + gw}" y2="${apY(-55)}" style="stroke:var(--warn);stroke-dasharray:2 3;opacity:.7"/><circle id="nr-ap" r="4" cx="${gx}" cy="${apY(-70)}" style="fill:var(--lc, var(--accent))"/><text id="nr-mv" class="svg-mono" x="${gx + gw + 14}" y="${gy + gh / 2 + 4}">-70 mV</text>`;
      inner += `<g id="nr-pulse" style="opacity:0"><circle r="16" style="fill:var(--lc, var(--accent));opacity:.25"/><circle r="7" style="fill:var(--lc, var(--accent))"/></g><g id="nr-nts"></g>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Animated neuron firing an action potential"');
      const svg = stage.firstChild;
      const pulse = u.$('#nr-pulse', svg), nts = u.$('#nr-nts', svg), soma = u.$('#nr-soma', svg), post = u.$('#nr-post-soma', svg), ap = u.$('#nr-ap', svg), mv = u.$('#nr-mv', svg);
      const ctrl = H.ctrl(stage);
      const fireBtn = u.el(`<button class="btn small lc">${PSY.icon('bolt')}Fire!</button>`);
      ctrl.appendChild(fireBtn);
      let auto = true;
      const autoSeg = H.seg(['Auto', 'Manual'], (i) => { auto = i === 0; }, 0);
      ctrl.appendChild(autoSeg);
      H.info(stage, '<b>Resting</b>: neuron -70 mV par aaram me hai. Dendrites se signals jud kar threshold (-55 mV) tak pahunchte hi action potential shuru hoga.');
      let fireAt = -1, particles = [], lastAuto = 0;
      const fire = (t) => { if (fireAt < 0) { fireAt = t; H.info(stage, '<b>Threshold paar!</b> Na⁺ andar ghusa, action potential axon par daud raha hai (all-or-none). Electrode par voltage -70 se +40 mV tak uchhalta hai.'); } };
      let now = 0;
      fireBtn.onclick = () => fire(now);
      const dur = 1400;
      return u.loop(stage, (t, dt) => {
        now = t;
        if (auto && fireAt < 0 && t - lastAuto > 3200) { lastAuto = t; fire(t); }
        if (fireAt >= 0) {
          const e = t - fireAt;
          soma.style.fill = e < 250 ? 'var(--lc, var(--accent))' : 'var(--surface-2)';
          if (e < dur) {
            const f = e / dur;
            const x = ax0 + f * (ax1 - ax0);
            pulse.style.opacity = 1;
            pulse.setAttribute('transform', `translate(${x},${ay})`);
            const rel = (x - 260) / 120;
            const tt = u.clamp(.3 + rel * .45, 0, 1);
            ap.setAttribute('cx', gx + tt * gw);
            const vv = tt < .3 ? -70 : tt < .4 ? -70 + (tt - .3) / .1 * 110 : tt < .52 ? 40 - (tt - .4) / .12 * 125 : tt < .75 ? -85 + (tt - .52) / .23 * 15 : -70;
            ap.setAttribute('cy', apY(vv));
            mv.textContent = Math.round(vv) + ' mV';
          } else {
            pulse.style.opacity = 0;
            if (!particles.length && e < dur + 60) {
              terms.forEach(([tx, ty]) => { for (let k = 0; k < 4; k++) particles.push({ x: tx + 4, y: ty + u.rand(-6, 6), vx: u.rand(.02, .045), vy: u.rand(-.01, .01), life: 0 }); });
              H.info(stage, '<b>Synapse</b>: terminals se neurotransmitters (chhote dots) gap paar karke agle neuron ke receptors par fit ho rahe hain. Ab agla neuron decide karega fire karna hai ya nahi.');
            }
          }
          if (e > dur + 1400) { fireAt = -1; particles = []; nts.innerHTML = ''; post.style.fill = 'var(--surface-2)'; }
        }
        if (particles.length) {
          let html = '';
          particles.forEach((p) => { p.life += dt; if (p.x < 556) { p.x += p.vx * dt; p.y += p.vy * dt; } html += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" style="fill:var(--lc, var(--accent));opacity:${Math.max(0, 1 - p.life / 1500).toFixed(2)}"/>`; });
          nts.innerHTML = html;
          if (particles[0].x >= 556) post.style.fill = 'var(--lc, var(--accent))';
        }
      });
    }
  });

  /* ---------- Synapse & reuptake ---------- */
  V('synapse', {
    title: 'Synapse ke andar',
    render(stage) {
      const W = 560, Hh = 300, preY = 112, postY = 222;
      const receptors = [140, 200, 260, 320, 380, 440].map((x) => ({ x, bound: 0 }));
      const pumps = [96, 482];
      let inner = `<path d="M60 20 Q60 ${preY} 140 ${preY} L420 ${preY} Q500 ${preY} 500 20 Z" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:2"/>`;
      inner += `<text class="svg-small" x="280" y="40" text-anchor="middle">Sending neuron (axon terminal)</text>`;
      [[200, 70], [250, 60], [300, 78], [350, 64], [230, 92], [330, 94]].forEach(([x, y]) => { inner += `<circle cx="${x}" cy="${y}" r="13" style="fill:var(--surface);stroke:var(--ink-3)"/><circle cx="${x - 4}" cy="${y - 3}" r="2.5" style="fill:var(--lc, var(--accent))"/><circle cx="${x + 4}" cy="${y + 2}" r="2.5" style="fill:var(--lc, var(--accent))"/>`; });
      pumps.forEach((x, i) => { inner += `<rect class="sy-pump" x="${x - 12}" y="${preY - 6 - (i ? 46 : 46)}" width="24" height="30" rx="6" style="fill:var(--good-soft);stroke:var(--good);stroke-width:2" transform="rotate(${i ? 45 : -45} ${x} ${preY - 32})"/>`; });
      inner += `<text class="svg-small" x="70" y="${preY + 18}" style="fill:var(--good)">Reuptake pump</text>`;
      inner += `<rect x="40" y="${postY}" width="480" height="70" rx="20" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:2"/><text class="svg-small" x="280" y="${postY + 52}" text-anchor="middle">Receiving neuron (dendrite)</text>`;
      receptors.forEach((r, i) => { inner += `<path class="sy-rec" data-i="${i}" d="M${r.x - 13} ${postY - 2} v-14 h8 v8 h10 v-8 h8 v14 z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2"/>`; });
      inner += `<text class="svg-mono" x="530" y="${(preY + postY) / 2 + 4}" text-anchor="end">synaptic cleft</text><g id="sy-mol"></g>`;
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Neurotransmitters crossing a synapse with reuptake"');
      const svg = stage.firstChild;
      const molG = u.$('#sy-mol', svg), recEls = u.$$('.sy-rec', svg), pumpEls = u.$$('.sy-pump', svg);
      let ssri = false;
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Normal', 'SSRI (reuptake block)'], (i) => { ssri = i === 1; pumpEls.forEach((p) => { p.style.opacity = ssri ? .25 : 1; }); }, 0));
      const readout = u.el('<span class="tag mono" aria-live="off"></span>');
      ctrl.appendChild(readout);
      let mols = [], last = -9999, strength = 0;
      const release = () => { for (let k = 0; k < 12; k++) mols.push({ x: u.rand(200, 360), y: preY + 4, vx: u.rand(-.06, .06), vy: u.rand(.03, .08), st: 'free', t: 0, rec: null }); };
      const msg = () => H.info(stage, ssri ? '<b>SSRI mode</b>: reuptake pumps block hain, isliye serotonin jaise molecules cleft me zyada der rukte hain aur receptors zyada baar activate hote hain. Kai antidepressants isi tarah kaam karti hain.' : '<b>Normal</b>: molecules receptors par fit hote hain (receptor rangeen), phir reuptake pumps unhe wapas kheench lete hain. Signal chhota aur saaf rehta hai.');
      msg();
      ctrl.addEventListener('click', msg);
      return u.loop(stage, (t, dt) => {
        if (t - last > 1800) { last = t; release(); }
        mols.forEach((m) => {
          m.t += dt;
          if (m.st === 'bound') { if (m.t > 700) { m.st = 'free'; m.vy = -u.rand(.03, .06); m.vx = u.rand(-.08, .08); m.rec.bound = 0; m.rec = null; } return; }
          m.x += m.vx * dt; m.y += m.vy * dt;
          if (m.y > postY - 18) {
            const r = receptors.find((rr) => !rr.bound && Math.abs(rr.x - m.x) < 16);
            if (r) { m.st = 'bound'; m.t = 0; m.rec = r; r.bound = 1; m.x = r.x; m.y = postY - 12; }
            else { m.vy = -Math.abs(m.vy); }
          }
          if (m.y < preY + 6) { m.vy = Math.abs(m.vy); if (!ssri && (m.x < 160 || m.x > 400) && Math.random() < .5) m.st = 'gone'; }
          if (m.x < 50 || m.x > 510) m.vx *= -1;
          if (!ssri && m.t > 2600) m.st = 'gone';
          if (m.t > (ssri ? 7000 : 4000)) m.st = 'gone';
          if (!ssri && m.st === 'free' && m.t > 900 && m.vy < 0) m.vx += (m.x < 280 ? -1 : 1) * .0004 * dt;
        });
        mols = mols.filter((m) => m.st !== 'gone');
        molG.innerHTML = mols.map((m) => `<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="4" style="fill:var(--lc, var(--accent))"/>`).join('');
        let b = 0;
        recEls.forEach((el, i) => { const on = receptors[i].bound; b += on; el.style.fill = on ? 'var(--lc, var(--accent))' : 'var(--surface)'; });
        strength = strength * .97 + (b / receptors.length) * .03;
        readout.textContent = `Cleft me molecules: ${mols.length} · Signal: ${Math.round(strength * 100)}%`;
      });
    }
  });

  /* ---------- Nervous system tree ---------- */
  V('nervousTree', {
    title: 'Nervous system ka parivaar',
    render(stage) {
      const N = [
        ['Nervous system', 320, 30, 'Poora communication network: brain se lekar ungliyon ki nerves tak.'],
        ['CNS', 170, 110, 'Central Nervous System: brain + spinal cord. Faisle aur processing yahin.'],
        ['PNS', 470, 110, 'Peripheral Nervous System: CNS ko body se jodne wali saari nerves.'],
        ['Brain', 90, 190, 'Soch, memory, emotion, senses ka processing. ~86 arab neurons.'],
        ['Spinal cord', 250, 190, 'Brain-body highway aur reflexes ka centre (garam tawa wala reflex).'],
        ['Somatic', 390, 190, 'Marzi wali muscles aur senses: likhna, chalna, chhoona mehsoos karna.'],
        ['Autonomic', 550, 190, 'Apne aap chalne wale kaam: dhadkan, digestion, pasina, pupils.'],
        ['Sympathetic', 470, 270, 'Fight-or-flight: dil tez, pupils bade, digestion band. Accelerator.'],
        ['Parasympathetic', 630, 270, 'Rest-and-digest: dil dheema, digestion chalu. Brake.']
      ];
      const E = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [6, 7], [6, 8]];
      let inner = '';
      E.forEach(([a, b], i) => { inner += `<path class="draw" d="M${N[a][1]} ${N[a][2] + 16} C ${N[a][1]} ${(N[a][2] + N[b][2]) / 2 + 8}, ${N[b][1]} ${(N[a][2] + N[b][2]) / 2 - 8}, ${N[b][1]} ${N[b][2] - 16}" style="fill:none;stroke:var(--line);stroke-width:2.5;--delay:${(0.3 + i * 0.15).toFixed(2)}s;--dur:.7s"/>`; });
      N.forEach(([n, x, y], i) => {
        const w = Math.max(84, n.length * 8.6 + 22);
        inner += `<g class="hot nt" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><rect class="pop nt-r" x="${x - w / 2}" y="${y - 16}" width="${w}" height="32" rx="16" style="fill:var(--surface);stroke:var(--ink-3);stroke-width:1.5;--delay:${(i * 0.13).toFixed(2)}s"/><text class="svg-label fade" x="${x}" y="${y + 4.5}" text-anchor="middle" style="font-weight:700;--delay:${(i * 0.13 + .1).toFixed(2)}s">${n}</text></g>`;
      });
      const holder = H.wide(stage, 600);
      holder.innerHTML = u.svg(720, 300, inner, 'aria-label="Divisions of the nervous system"');
      const svg = holder.firstChild;
      H.setLens(svg);
      const show = (i) => {
        u.$$('.nt-r', svg).forEach((r, k) => { r.style.fill = k === i ? 'var(--lc, var(--accent))' : 'var(--surface)'; r.style.stroke = k === i ? 'var(--lc, var(--accent))' : 'var(--ink-3)'; });
        u.$$('.nt text', svg).forEach((tx, k) => { tx.style.fill = k === i ? 'var(--surface)' : 'var(--ink)'; });
        H.info(stage, `<b>${N[i][0]}</b>: ${N[i][3]}`);
      };
      bindPick(svg, '.nt', show);
      show(0);
    }
  });

  /* ---------- Fight or flight body ---------- */
  V('fightFlight', {
    title: 'Fight-or-flight vs rest-and-digest',
    render(stage) {
      const W = 560, Hh = 330;
      let inner = `<circle cx="150" cy="62" r="40" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:2"/>`;
      inner += `<ellipse cx="135" cy="58" rx="9" ry="7" style="fill:var(--surface)"/><ellipse cx="165" cy="58" rx="9" ry="7" style="fill:var(--surface)"/><circle id="ff-p1" cx="135" cy="58" r="3" style="fill:var(--ink)"/><circle id="ff-p2" cx="165" cy="58" r="3" style="fill:var(--ink)"/>`;
      inner += `<path id="ff-mouth" d="M138 82 Q150 88 162 82" style="fill:none;stroke:var(--ink-2);stroke-width:2"/><circle id="ff-drop" cx="160" cy="92" r="3.5" style="fill:var(--l3)"/>`;
      inner += `<rect x="90" y="110" width="120" height="180" rx="40" style="fill:var(--surface-2);stroke:var(--ink-3);stroke-width:2"/>`;
      inner += `<g id="ff-lungs"><ellipse cx="128" cy="160" rx="18" ry="30" style="fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5"/><ellipse cx="172" cy="160" rx="18" ry="30" style="fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5"/></g>`;
      inner += `<path id="ff-heart" d="M150 178 c-9-8-22-3-20 8 c2 9 20 20 20 20 s18-11 20-20 c2-11-11-16-20-8z" style="fill:var(--bad);transform-box:fill-box;transform-origin:center"/>`;
      inner += `<path id="ff-gut" d="M118 238 q10 -12 20 0 t20 0 t20 0 t20 0" style="fill:none;stroke:var(--warn);stroke-width:3;stroke-linecap:round"/>`;
      const row = (y, label, id) => `<text class="svg-small" x="270" y="${y}">${label}</text><text id="${id}" class="svg-title" x="270" y="${y + 22}" style="font-size:17px"></text>`;
      inner += row(40, 'Dhadkan', 'ff-hr') + row(98, 'Saans', 'ff-br') + row(156, 'Pupils', 'ff-pu') + row(214, 'Muh (saliva)', 'ff-sa') + row(272, 'Digestion', 'ff-di');
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Body changes in sympathetic and parasympathetic modes" style="max-width:560px;margin:0 auto"');
      const svg = stage.firstChild;
      const el = (id) => u.$('#' + id, svg);
      let mode = 0;
      const set = (m) => {
        mode = m;
        const s = m === 0;
        el('ff-hr').textContent = s ? '~110 BPM, tez' : '~65 BPM, dheemi';
        el('ff-br').textContent = s ? 'Tez aur chhoti' : 'Gehri aur dheemi';
        el('ff-pu').textContent = s ? 'Phail gayi' : 'Normal / chhoti';
        el('ff-sa').textContent = s ? 'Sookha muh' : 'Saliva normal';
        el('ff-di').textContent = s ? 'Ruki hui ("butterflies")' : 'Chalu';
        el('ff-p1').setAttribute('r', s ? 6 : 2.6); el('ff-p2').setAttribute('r', s ? 6 : 2.6);
        el('ff-drop').style.opacity = s ? 0 : 1;
        el('ff-mouth').setAttribute('d', s ? 'M138 84 Q150 80 162 84' : 'M138 82 Q150 88 162 82');
        H.info(stage, s ? '<b>Sympathetic (khatra!)</b>: adrenaline badha, body bhaagne ya ladne ke liye taiyaar. Energy muscles ki taraf, digestion jaise "baad me" wale kaam ruk gaye.' : '<b>Parasympathetic (aaram)</b>: vagus nerve brake dabati hai. Dil dheema, saans gehri, khana pachna chalu. Lamba exhale is mode ko on karne me madad karta hai.');
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Khatra: Sympathetic', 'Aaram: Parasympathetic'], set, 0));
      set(0);
      if (u.reduced()) return;
      const heart = el('ff-heart'), lungs = el('ff-lungs'), gut = el('ff-gut');
      return u.loop(stage, (t) => {
        const s = mode === 0;
        const hb = s ? 545 : 920;
        const ph = (t % hb) / hb;
        const sc = ph < .15 ? 1 + ph / .15 * .22 : ph < .3 ? 1.22 - (ph - .15) / .15 * .22 : 1;
        heart.style.transform = `scale(${sc.toFixed(3)})`;
        const br = s ? 2500 : 5000;
        const bp = Math.sin((t % br) / br * Math.PI * 2);
        lungs.setAttribute('transform', `translate(150 160) scale(${(1 + bp * (s ? .06 : .12)).toFixed(3)}) translate(-150 -160)`);
        gut.setAttribute('transform', s ? '' : `translate(${(Math.sin(t / 400) * 4).toFixed(1)} 0)`);
        gut.style.opacity = s ? .3 : 1;
      });
    }
  });

  /* ---------- Brain map ---------- */
  V('brainMap', {
    title: 'Brain ka interactive naksha',
    render(stage) {
      const R = [
        ['Frontal lobe', 'var(--l3)', 'M80 190 C60 120 120 50 230 45 L262 42 C255 90 240 130 232 172 C190 180 150 190 110 205 C95 202 85 198 80 190 Z', 150, 125, 'Planning, decisions, self-control, personality. Peeche ki patti <b>motor cortex</b> (movement), neeche baayein <b>Broca\'s area</b> (bolna). Damage: Phineas Gage jaisa impulsive behaviour.'],
        ['Parietal lobe', 'var(--l5)', 'M262 42 C330 35 380 45 412 60 C418 110 425 150 432 195 C400 185 365 178 330 176 L232 172 C240 130 255 90 262 42 Z', 335, 115, 'Touch, dard, temperature (<b>somatosensory cortex</b>) aur spatial awareness. Damage: body ke ek taraf ko ignore karna, raasta samajhne me dikkat.'],
        ['Occipital lobe', 'var(--l2)', 'M412 60 C450 80 475 105 480 130 C505 175 490 230 440 245 C438 228 435 212 432 195 C425 150 418 110 412 60 Z', 455, 160, 'Vision ka centre (<b>visual cortex</b>). Damage: aankhein theek hone par bhi andhapan ya cheezein pehchaan na paana.'],
        ['Temporal lobe', 'var(--l1)', 'M110 205 C150 190 190 180 232 172 L330 176 C365 178 400 185 432 195 C435 212 438 228 440 245 C400 255 360 250 330 262 C300 275 250 280 215 268 C170 255 125 240 110 205 Z', 290, 225, 'Sunna (<b>auditory cortex</b>), bhasha samajhna (<b>Wernicke\'s area</b>), chehre pehchaanna, aur andar hippocampus-amygdala. Damage: bhasha samajhne me dikkat, prosopagnosia.'],
        ['Cerebellum', 'var(--l6)', 'M370 270 C370 245 400 238 425 240 C460 242 485 255 482 278 C478 300 450 308 420 306 C392 304 370 292 370 270 Z', 427, 278, 'Balance, coordination, motor skills seekhna (cycle, typing). Sharaab sabse pehle ise prabhavit karti hai.'],
        ['Brainstem', 'var(--l7)', 'M318 252 C322 290 326 320 330 345 L362 345 C360 318 358 290 352 255 Z', 340, 330, 'Medulla (dhadkan, saans), pons (neend), reticular formation (alertness). Life support system.']
      ];
      const IN = [
        ['Thalamus', 300, 168, 14, 10, 'Sensory relay station: smell ko chhod kar har sense ka signal yahan se cortex jaata hai.'],
        ['Hypothalamus', 268, 196, 9, 7, 'Bhookh, pyaas, temperature, hormones (pituitary ka boss).'],
        ['Amygdala', 236, 222, 9, 7, 'Darr aur emotion ka alarm. S.M. naam ki patient jiske amygdala damage the, use darr mehsoos nahi hota tha.'],
        ['Hippocampus', 290, 226, 30, 8, 'Nayi long-term yaadein banana. H.M. ka hippocampus nikalne ke baad wo naya kuch yaad nahi rakh pata tha.'],
        ['Corpus callosum', 290, 128, 95, 14, 'Dono hemispheres ko jodne wala ~20 crore fibers ka pul (brain ke beech me, upar se dekhne par).']
      ];
      let inner = '';
      [5, 4, 0, 1, 2, 3].forEach((i) => {
        const [n, c, d, lx, ly] = R[i];
        inner += `<g class="hot br" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><path class="pop br-p" d="${d}" style="fill:${c};opacity:.32;stroke:var(--surface);stroke-width:3;--delay:${(i * .12).toFixed(2)}s"/><text class="svg-label fade br-t" x="${lx}" y="${ly}" text-anchor="middle" style="font-weight:700;font-size:12.5px;--delay:${(i * .12 + .2).toFixed(2)}s">${n.replace(' lobe', '')}</text></g>`;
      });
      inner += '<g id="br-inner" style="display:none">';
      IN.forEach(([n, x, y, rx, ry], i) => { inner += `<g class="hot bi" data-i="${i}" tabindex="0" role="button" aria-label="${n}"><ellipse class="bi-e" cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" style="fill:var(--surface);stroke:var(--ink);stroke-width:2;stroke-dasharray:4 3"/></g>`; });
      inner += `<text class="svg-small" x="300" y="150" text-anchor="middle" style="fill:var(--ink)">thalamus</text><text class="svg-small" x="170" y="150" style="fill:var(--ink)">corpus callosum</text><text class="svg-small" x="198" y="240" style="fill:var(--ink)">amygdala</text><text class="svg-small" x="300" y="252" style="fill:var(--ink)">hippocampus</text><text class="svg-small" x="222" y="196" text-anchor="end" style="fill:var(--ink)">hypothalamus</text>`;
      inner += '</g>';
      inner += `<text class="svg-mono" x="70" y="30">← AAGE (chehra)</text><text class="svg-mono" x="500" y="30" text-anchor="end">PEECHE →</text>`;
      stage.innerHTML = u.svg(560, 360, inner, 'aria-label="Interactive side view map of the brain" style="max-width:600px;margin:0 auto"');
      const svg = stage.firstChild;
      const innerG = u.$('#br-inner', svg);
      const showR = (i) => {
        u.$$('.br-p', svg).forEach((p) => { p.style.opacity = +p.parentNode.dataset.i === i ? .85 : .32; });
        H.info(stage, `<b>${R[i][0]}</b>: ${R[i][5]}`);
      };
      const showI = (i) => {
        u.$$('.bi-e', svg).forEach((e, k) => { e.style.fill = k === i ? 'var(--lc, var(--accent))' : 'var(--surface)'; });
        H.info(stage, `<b>${IN[i][0]}</b>: ${IN[i][5]}`);
      };
      bindPick(svg, '.br', showR);
      bindPick(svg, '.bi', showI);
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(['Lobes aur bahar ke hisse', 'Andar ke hisse'], (m) => {
        innerG.style.display = m ? '' : 'none';
        u.$$('.br-p', svg).forEach((p) => { p.style.opacity = m ? .14 : .32; });
        u.$$('.br-t', svg).forEach((t) => { t.style.opacity = m ? .25 : 1; });
        if (m) showI(3); else showR(0);
      }, 0));
      showR(0);
    }
  });

  /* ---------- Heritability bars ---------- */
  V('heritability', {
    title: 'Genes kitna farak samjhate hain?',
    render(stage) {
      const sets = [
        ['Alag traits', [['Height', 80], ['Schizophrenia', 79], ['Autism', 80], ['ADHD', 74], ['Intelligence (adult)', 60], ['Personality (Big Five)', 45], ['Major depression', 37]], 'Twin studies ke approximate andaze. Studies ke beech numbers kuch badalte hain. Koi trait 100% nahi: environment hamesha matter karta hai.'],
        ['IQ umar ke saath', [['9 saal', 41], ['12 saal', 55], ['17 saal', 66]], 'Haworth aur saathi (2010), ~11,000 twin pairs: IQ ki heritability umar ke saath <b>badhti</b> hai. Shayad isliye ki bade hokar log apne genes ke hisaab se apna mahaul khud chunne lagte hain (books, dost, hobbies).']
      ];
      const W = 600, rowH = 34, x0 = 190, x1 = 560;
      const wrap = u.el('<div></div>');
      stage.appendChild(wrap);
      const draw = (k) => {
        const [, data, note] = sets[k];
        const Hh = data.length * rowH + 40;
        let inner = '';
        [0, 25, 50, 75, 100].forEach((p) => { const x = x0 + p / 100 * (x1 - x0); inner += `<line x1="${x}" y1="10" x2="${x}" y2="${Hh - 24}" style="stroke:var(--line)"/><text class="svg-mono" x="${x}" y="${Hh - 8}" text-anchor="middle">${p}%</text>`; });
        data.forEach(([n, v], i) => {
          const y = 16 + i * rowH;
          inner += `<text class="svg-label" x="${x0 - 10}" y="${y + 15}" text-anchor="end">${n}</text><rect x="${x0}" y="${y}" width="${(v / 100 * (x1 - x0)).toFixed(1)}" height="22" rx="5" style="fill:var(--lc, var(--accent));transform-box:fill-box;transform-origin:left;animation:hbGrow .9s cubic-bezier(.2,.8,.2,1) both ${(i * .1).toFixed(2)}s"/><text class="svg-mono" x="${x0 + v / 100 * (x1 - x0) + 6}" y="${y + 15}" style="fill:var(--ink);font-weight:600">~${v}%</text>`;
        });
        wrap.innerHTML = `<style>@keyframes hbGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}</style>` + u.svg(W, Hh, inner, 'aria-label="Heritability estimates bar chart"');
        H.info(stage, note);
      };
      const ctrl = H.ctrl(stage);
      ctrl.appendChild(H.seg(sets.map((s) => s[0]), draw, 0));
      draw(0);
    }
  });

  /* ---------- Gestalt principles ---------- */
  V('gestalt', {
    title: 'Gestalt principles',
    render(stage) {
      const W = 640, Hh = 300;
      const panels = [[0, 0, 'Proximity'], [320, 0, 'Similarity'], [0, 150, 'Closure'], [320, 150, 'Common fate']];
      let inner = '';
      panels.forEach(([x, y, n]) => { inner += `<rect x="${x + 6}" y="${y + 6}" width="308" height="138" rx="12" style="fill:var(--surface-2)"/><text class="svg-mono" x="${x + 18}" y="${y + 26}">${n.toUpperCase()}</text>`; });
      for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) inner += `<circle class="g-prox" data-c="${c}" cx="${50 + c * 44}" cy="${58 + r * 28}" r="7" style="fill:var(--ink-2);transition:transform .9s cubic-bezier(.4,0,.2,1)"/>`;
      for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) inner += `<circle class="g-sim" data-r="${r}" cx="${370 + c * 44}" cy="${58 + r * 28}" r="8" style="fill:var(--ink-3);transition:fill .7s"/>`;
      const kz = [[92, 262], [228, 262], [160, 188]];
      kz.forEach(([x, y], i) => {
        const others = kz.filter((_, k) => k !== i).map(([ox, oy]) => { const L = Math.hypot(ox - x, oy - y); return [x + (ox - x) / L * 34, y + (oy - y) / L * 34]; });
        inner += `<circle cx="${x}" cy="${y}" r="20" style="fill:var(--ink-2)"/><path class="g-cut" d="M${x} ${y} L${others[0][0].toFixed(1)} ${others[0][1].toFixed(1)} L${others[1][0].toFixed(1)} ${others[1][1].toFixed(1)} Z" style="fill:var(--surface-2);transition:opacity .8s"/>`;
      });
      for (let i = 0; i < 14; i++) { const x = 350 + (i % 7) * 40, y = 205 + Math.floor(i / 7) * 46; inner += `<circle class="g-fate" data-m="${[1, 4, 6, 9, 12].includes(i) ? 1 : 0}" cx="${x}" cy="${y}" r="7" style="fill:${[1, 4, 6, 9, 12].includes(i) ? 'var(--lc, var(--accent))' : 'var(--ink-3)'};transition:transform 1.2s ease-in-out"/>`; }
      stage.innerHTML = u.svg(W, Hh, inner, 'aria-label="Four Gestalt principles animated"');
      const svg = stage.firstChild;
      const texts = [
        '<b>Proximity</b>: jab dots paas-paas aate hain to hum unhe "columns ke jode" dekhne lagte hain, jabki dots wahi hain. <b>Similarity</b>: same rang wale dots ek row ki tarah group ho jaate hain.',
        '<b>Closure</b>: teen "pac-man" aakaar ke beech brain ek safed triangle dekh leta hai jo asal me bana hi nahi (Kanizsa triangle). <b>Common fate</b>: saath chalne wale dots ek team lagte hain.'
      ];
      let phase = 0;
      const apply = () => {
        const on = phase % 2 === 1;
        u.$$('.g-prox', svg).forEach((d) => { const c = +d.dataset.c; d.style.transform = on ? `translateX(${(c % 2 === 0 ? 12 : -12)}px)` : 'none'; });
        u.$$('.g-sim', svg).forEach((d) => { d.style.fill = on && +d.dataset.r === 1 ? 'var(--lc, var(--accent))' : 'var(--ink-3)'; });
        u.$$('.g-cut', svg).forEach((c) => { c.style.opacity = on ? 1 : 0; });
        u.$$('.g-fate', svg).forEach((d) => { d.style.transform = on && d.dataset.m === '1' ? 'translateY(-14px)' : 'none'; });
        H.info(stage, texts[on ? 1 : 0]);
      };
      apply();
      if (u.reduced()) { phase = 1; apply(); return; }
      const iv = setInterval(() => { phase++; apply(); }, 2800);
      setTimeout(() => { phase = 1; apply(); }, 500);
      return () => clearInterval(iv);
    }
  });

  /* ---------- Sleep hypnogram ---------- */
  V('sleepCycle', {
    title: 'Ek raat ki neend',
    render(stage) {
      const W = 640, Hh = 270, x0 = 70, x1 = 620, top = 30;
      const lv = { W: 0, REM: 1, N1: 2, N2: 3, N3: 4 };
      const Y = (s) => top + lv[s] * 44;
      const X = (h) => x0 + h / 8 * (x1 - x0);
      const seq = [[0, 'W'], [.15, 'N1'], [.3, 'N2'], [.55, 'N3'], [1.15, 'N2'], [1.3, 'REM'], [1.45, 'N2'], [1.8, 'N3'], [2.45, 'N2'], [2.85, 'REM'], [3.1, 'N2'], [3.4, 'N3'], [3.7, 'N2'], [4.3, 'REM'], [4.7, 'N2'], [5.4, 'REM'], [5.95, 'N1'], [6.05, 'N2'], [6.75, 'REM'], [7.5, 'W'], [7.55, 'N2'], [7.85, 'W'], [8, 'W']];
      let d = '';
      seq.forEach(([h, s], i) => { if (!i) d = `M${X(h)},${Y(s)}`; else d += `L${X(h)},${Y(seq[i - 1][1])}L${X(h)},${Y(s)}`; });
      let inner = '';
      Object.keys(lv).forEach((s) => { inner += `<line x1="${x0}" y1="${Y(s)}" x2="${x1}" y2="${Y(s)}" style="stroke:var(--line)"/><text class="svg-mono" x="${x0 - 10}" y="${Y(s) + 4}" text-anchor="end" style="${s === 'REM' ? 'fill:var(--lc, var(--accent));font-weight:600' : ''}">${s === 'W' ? 'Jaage' : s}</text>`; });
      for (let h = 0; h <= 8; h++) inner += `<text class="svg-mono" x="${X(h)}" y="${Y('N3') + 26}" text-anchor="middle">${h}h</text>`;
      seq.forEach(([h, s], i) => { if (s === 'REM' && seq[i + 1]) inner += `<rect class="fade" x="${X(h)}" y="${Y('REM') - 7}" width="${X(seq[i + 1][0]) - X(h)}" height="14" rx="4" style="fill:var(--lc, var(--accent));opacity:.85;--delay:${(1 + h / 8 * 3.5).toFixed(2)}s"/>`; });
      inner += `<path class="draw" d="${d}" style="fill:none;stroke:var(--ink-2);stroke-width:2;stroke-linejoin:round;--dur:4.5s"/>`;
      inner += `<text class="svg-small fade" x="${X(1.1)}" y="${Y('N3') + 44}" text-anchor="middle" style="--delay:1.5s">Deep sleep (N3) shuru me zyada</text><text class="svg-small fade" x="${X(6.3)}" y="${Y('N3') + 44}" text-anchor="middle" style="--delay:4s">REM subah ki taraf lamba</text>`;
      inner += `<line id="sl-mark" x1="${x0}" y1="${top - 10}" x2="${x0}" y2="${Y('N3') + 8}" style="stroke:var(--lc, var(--accent));stroke-width:1.5;opacity:.6"/>`;
      stage.innerHTML = u.svg(W, Hh + 20, inner, 'aria-label="Hypnogram of sleep stages across one night"');
      const svg = stage.firstChild;
      H.setLens(svg);
      const mark = u.$('#sl-mark', svg);
      const stageAt = (h) => { let s = 'W'; for (const [hh, ss] of seq) if (h >= hh) s = ss; return s; };
      const desc = { W: 'Jaage hue (raat me chhote-chhote jaagna normal hai)', N1: 'N1: halki neend, girne jaisa jhatka', N2: 'N2: sleep spindles, raat ka sabse bada hissa', N3: 'N3: deep sleep, body repair, jagana mushkil', REM: 'REM: vivid sapne, brain active, muscles paralyzed' };
      let last = '';
      const at = (h) => { const s = stageAt(h); mark.setAttribute('x1', X(h)); mark.setAttribute('x2', X(h)); const key = s + Math.floor(h * 4); if (key !== last) { last = key; H.info(stage, `<b>${Math.floor(h)}h ${String(Math.round((h % 1) * 60)).padStart(2, '0')}m</b> · ${desc[s]}`); } };
      if (u.reduced()) { at(4.4); return; }
      return u.loop(stage, (t) => { at(((t / 1000) % 9) / 9 * 8); });
    }
  });
})();
