/* Interactive labs · Level 8 (manipulation radar, scam spotter, boundary gym) */
(function () {
  'use strict';
  const PSY = window.PSY;
  const { u, icon } = { u: PSY.u, icon: PSY.icon };
  const L = PSY.lab;
  const keys = 'ABCD';
  const resCards = (items) => `<div class="res-table">${items.map(([v, l]) => `<div class="card"><b>${v}</b><span>${l}</span></div>`).join('')}</div>`;
  const teach = (html) => `<div class="teach mini"><span class="teach-av" aria-hidden="true">&psi;</span><div class="teach-bubble"><div class="teach-name">Teacher</div><p>${html}</p></div></div>`;

  /* ---------- Manipulation radar ---------- */
  const TACTICS = ['Gaslighting', 'Love bombing', 'Guilt-trip (FOG)', 'DARVO', 'Silent treatment', 'False urgency', 'Triangulation', 'Foot-in-the-door', 'Authority + isolation', 'Future faking'];
  const RADAR = [
    ['Party me tumhe bura laga, tumne bataya. Jawab aaya: "Maine aisa kuch kaha hi nahi. Tumhari memory hi kharab hai, pichhli baar bhi yahi hua tha."', 0, 'Tumhari memory aur feelings ko jhootha thehrana, aur "pichhli baar bhi" se pattern ka ishaara.', '"Tumhe aisa yaad hai, mujhe alag. Meri feelings sach hain." Aur date ke saath note likh lo.'],
    ['Do hafte ki online dosti: roz 50 messages, mehnga gift, "tum meri soulmate ho", "tumhare bina ek din nahi reh sakta". Ab wo chahta hai ki tum dosto ke saath trip cancel kar do.', 1, 'Shuruaat me pyaar aur attention ki baarish, aur turant pehli maang: tumhare baaki rishton se doori.', 'Raftaar dekho. Asli rishta time leta hai. Jo jaldi sab de raha hai, wo jaldi kuch maang bhi raha hai.'],
    ['Ghar par: "Humne tumhare liye kya kuch nahi kiya, apni khushiyan maar di, aur tum ek rishte ke liye mana kar rahe ho? Tumhari wajah se maa bimaar pad jaayegi."', 2, 'Obligation ("humne kya kuch nahi kiya") aur guilt ("tumhari wajah se maa bimaar") ka FOG.', '"Aapki chinta samajh aati hai, aur aapke liye izzat bhi hai. Phir bhi ye faisla meri zindagi ka hai."'],
    ['Tumne poocha ki tumhare wallet se paise kisne liye. Jawab: "Main chor hoon? Tum mujh par ilzaam laga rahe ho? Pata hai mujhe kitna hurt hua hai? Asli problem tum ho."', 3, 'Deny ("main chor hoon?"), Attack ("asli problem tum"), aur khud victim ban jaana ("mujhe hurt hua").', '"Abhi baat paison ki ho rahi hai. Tumhari feelings par uske baad baat karenge."'],
    ['Ek chhoti si bahas ke baad teen din tak koi baat nahi. Messages "seen", call cut. Normal tabhi hota hai jab maafi tumhari taraf se aaye, chahe galti kisi ki bhi ho.', 4, 'Baat band karna saza ki tarah, taaki tum har baar jhuko.', '"Jab baat karne ka mann ho, main yahin hoon." Saza ke darr se jhooti maafi ki aadat mat banao.'],
    ['Course ki website: "Sirf agle 10 minute! 3 seats bachi hain. Kal se daam double." Tumne page refresh kiya, timer phir 10:00 se shuru.', 5, 'Nakli countdown aur scarcity: asli deadline nahi, sirf jaldi karwane ka dabaav.', 'Page band karo. Asli offer kal bhi hoga; nakli timer to hamesha "10 minute" hi rahega.'],
    ['Partner kehta hai: "Mera ex to kabhi itna complain nahi karta tha. Aur meri colleague bhi kehti hai ki tum bahut demanding ho."', 6, 'Teesre logon ko beech me laakar jalan aur insecurity paida karna.', '"Hum apne rishte ki baat kar rahe hain, kisi teesre ki nahi."'],
    ['Pehle: "Bas ek baar location share karo." Phir: "Hamesha on rakho." Phir: "Har ghante photo bhejo, warna samjhunga ki kuch chhupa rahe ho."', 7, 'Chhoti shart ke baad dheere-dheere badi shartein: har kadam pichhle jaisa hi lagta hai.', 'Har nayi shart par khud se poochho: agar ye pehle hi din maangi jaati, kya tab bhi haan hoti?'],
    ['Video call par uniform me ek "officer": "Aap digital arrest me hain. Camera on rakhiye, call mat kaatiye, aur kisi ko mat bataiye, warna turant giraftari."', 8, 'Uniform aur sarkari bhasha (authority) + "kisi ko mat bataiye" (isolation): digital arrest scam.', 'Digital arrest kanoon me hota hi nahi. Call kaato, 1930 aur Chakshu par report karo.'],
    ['Teen saal se: "Shaadi ke baad sab badal jaayega. Bas abhi meri baat maan lo, agle saal pakka tumhare career ke liye shift karenge."', 9, 'Bade vaade jo poore nahi hote, bas abhi ka control bachaate hain.', 'Vaadon ki nahi, pichhle record ki suno. Ab tak kitne vaade poore hue?']
  ];
  L('radar', {
    title: 'Manipulation radar', icon: 'target', level: 8, chapter: 'relationship-manipulation', mins: 4,
    short: '10 asli jaisi situations. Har ek me chhupi chaal ko naam se pehchaano.',
    intro: 'Chalo tumhara radar test karte hain. 10 chhoti situations aayengi: rishte, office, phone calls. Har ek me ek chaal chhupi hai. Use naam se pehchaano, aur har jawab ke baad ek dhaal wali line bhi milegi.',
    about: ['Research me <b>persuasion knowledge</b> (Friestad aur Wright, 1994) ka matlab hai chaalon ki samajh. Jab log kisi tactic ko naam se pehchaan lete hain, to uska asar kam ho jaata hai, kyunki dimaag "ye mujhe manipulate karne ki koshish hai" wala frame laga deta hai.', 'Isi idea par <b>inoculation</b> based programs bane hain: logon ko chaalon ke chhote, safe examples dikha kar asli duniya ke liye taiyaar karna. Ye lab usi tarah ki practice hai.'],
    render(stage, done) {
      let order = [], i = 0, score = 0, opts = [];
      const start = () => { order = u.shuffle(RADAR.map((_, k) => k)); i = 0; score = 0; next(); };
      const next = () => {
        if (i >= order.length) return finish();
        const s = RADAR[order[i]];
        const wrong = u.shuffle(TACTICS.filter((_, k) => k !== s[1])).slice(0, 3);
        opts = u.shuffle([TACTICS[s[1]], ...wrong]);
        stage.innerHTML = `<div class="muted mono" style="font-size:.85rem">Situation ${i + 1}/${order.length} · Score ${score}</div>
          <p class="lab-q">${s[0]}</p>
          <p class="muted" style="margin:0">Yahan kaunsi chaal chal rahi hai?</p>
          <div class="opts">${opts.map((o, j) => `<button class="opt" data-j="${j}"><span class="k">${keys[j]}</span><span>${o}</span></button>`).join('')}</div>
          <div class="q-after"></div>`;
        u.$$('.opt', stage).forEach((b) => b.addEventListener('click', () => pick(+b.dataset.j)));
      };
      const pick = (j) => {
        const box = u.$('.opts', stage);
        if (box.classList.contains('locked')) return;
        box.classList.add('locked');
        const s = RADAR[order[i]];
        const ok = opts[j] === TACTICS[s[1]];
        if (ok) score++;
        u.$$('.opt', stage).forEach((b) => {
          const v = opts[+b.dataset.j];
          if (v === TACTICS[s[1]]) b.classList.add('ok'); else if (+b.dataset.j === j) b.classList.add('no');
        });
        u.$('.q-after', stage).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${ok ? 'Sahi pakda!' : `Ye ${TACTICS[s[1]]} hai.`}</b> ${s[2]}<br><b>Dhaal:</b> ${s[3]}</div>
          <div class="row" style="margin-top:12px"><button class="btn lc" id="nx">${i === order.length - 1 ? 'Result dekho' : 'Agli situation'} ${icon('right')}</button></div>`;
        const nx = u.$('#nx', stage);
        nx.focus({ preventScroll: true });
        nx.onclick = () => { i++; next(); };
      };
      const finish = () => {
        const msg = score >= 9 ? 'Wah! Tumhara radar ekdum tez hai. Ab ye nazar apne dosto aur family ke liye bhi use karna.' : score >= 6 ? 'Achha radar hai. Jo galat hue, unki dhaal wali line ek baar aur padh lo: asli zindagi me wahi kaam aayegi.' : 'Shuruaat hai, aur ye bilkul theek hai. Chapter 8.3 ka table ek baar dekho aur phir try karo. Har round ke saath radar tez hota hai.';
        stage.innerHTML = `<div class="lab-center" style="gap:16px"><h3>Radar score: ${score}/${order.length}</h3>${resCards([[score, 'Sahi pehchaane'], [order.length - score, 'Chook gaye']])}${teach(msg)}<button class="btn ghost" id="again">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = start;
        done();
      };
      stage.innerHTML = `<div class="lab-center"><p class="lab-q">10 situations, har ek me ek chaal. Taiyaar?</p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
      u.$('#go', stage).onclick = start;
    }
  });

  /* ---------- Scam ya asli? ---------- */
  const MSGS = [
    ['SMS · +91 98XXX X4521', 'Dear Consumer, aapka bijli connection aaj raat 9:30 baje kaat diya jaayega kyunki pichhle mahine ka bill update nahi hua. Turant electricity officer se is number par baat karein: 98XXXXXX21', '', true, ['Personal mobile number se "official" message', 'Aaj raat ki deadline (urgency)', 'Darr: connection katega', 'Call karne ko kehna (vishing)'], 'Bill check karna ho to official app ya bill par diye number par khud dekho.'],
    ['SMS · VK-YRBANK', 'Rs 2,499.00 debited from A/c XX4521 on 21-Oct at a merchant. Agar ye transaction aapne nahi kiya, to card ke peeche diye number par call karein ya bank app me card block karein.', '', false, ['Koi link nahi', 'OTP ya PIN nahi maanga', 'Official channel (card ke peeche ka number, app) ki taraf bheja'], 'Ye asli alert jaisa hai. Phir bhi action hamesha card ke peeche wale number ya bank app se hi lo.'],
    ['WhatsApp · +44 7XXX XXX123', 'Hi! Hum ek digital marketing company se hain. Part-time job: YouTube videos like karo, har like ₹150. Roz ₹3,000 se ₹8,000. Interested? Reply YES.', '', true, ['Videsh ka anjaan number', 'Bina mehnat bahut zyada kamaai (greed)', 'Task scam ka classic pehla kadam'], 'Shuru ke chhote payment sach me milte hain, phir "prepaid task" me badi rakam doobti hai. Block aur report karo.'],
    ['OLX chat · Buyer', 'Bhaiya main army me hoon, abhi transfer ho raha hai isliye aa nahi sakta. Poora paisa advance bhej raha hoon. Ye QR code scan karke apna UPI PIN daal do, paise aa jaayenge.', '', true, ['Paise lene ke liye PIN maangna (UPI me kabhi nahi lagta)', 'Army/uniform se bharosa (authority)', 'Milne se bachna'], 'PIN daalne ka matlab hamesha paise bhejna hai.'],
    ['SMS · VM-YRBANK', '482913 is your OTP for login to net banking. Valid for 5 minutes. Do not share this OTP with anyone. Bank never asks for OTP.', 'Tumne abhi khud net banking me login try kiya hai.', false, ['Tumhare apne action ke baad aaya', 'Khud keh raha hai ki OTP share mat karo'], 'OTP aana problem nahi; problem tab hai jab koi call karke ye OTP maange.'],
    ['Call · +91 87XXX XXX09', '"Main TRAI se bol raha hoon. Aapke Aadhaar se liya gaya ek doosra number illegal kaam me use hua hai. 2 ghante me aapke saare numbers band ho jaayenge. Mumbai police se baat karne ke liye 9 dabaiye."', '', true, ['Authority (TRAI, police)', 'Darr + 2 ghante ki deadline', 'Call transfer karke "officer" se milwana: digital arrest ka pehla kadam'], 'TRAI is tarah numbers band karne ki call nahi karta. Call kaato aur Chakshu par report karo.'],
    ['WhatsApp · Unknown number (DP me mausi ki photo)', 'Beta, ye mera naya number hai, purana phone kho gaya. Hospital me hoon, urgent ₹15,000 chahiye, is UPI par bhej do. Kal lauta dungi. Abhi kisi ko mat batana, sab pareshaan ho jaayenge.', '', true, ['Naya number + jaani-pehchaani photo', 'Emergency aur jaldi', '"Kisi ko mat batana" (isolation)'], 'Mausi ko unke purane number par ya family me kisi se call karke confirm karo. DP koi bhi laga sakta hai.'],
    ['Email · exams@yourcollege.edu.in', 'Semester exam form ki last date 30 October hai. Form college portal par login karke bharein. Fee sirf portal ke payment page se jama karein. Kisi bhi sawaal ke liye exam cell (Room 12) me sampark karein.', '', false, ['Koi darr ya dhamki nahi', 'Payment official portal par, kisi personal account me nahi', 'Offline sampark ka option'], 'Asli lagta hai. Phir bhi email ke link ki jagah portal ka address khud type karo.']
  ];
  L('scamSpot', {
    title: 'Scam ya asli?', icon: 'phone', level: 8, chapter: 'scam-psychology', mins: 4,
    short: '8 messages aur calls. Har ek ko scam ya asli pehchaano, aur red flags gino.',
    intro: 'Socho ye tumhara phone hai. Ek-ek karke 8 messages aayenge. Har ek par faisla karo: <b>Scam</b> ya <b>Asli lagta hai</b>. Dhyan rahe, har message scam nahi hota; asli wale pehchaanna bhi utna hi zaroori hai.',
    about: ['Stajano aur Wilson (2011) ke principles: <b>authority</b>, <b>urgency</b>, <b>need and greed</b>, <b>herd</b> aur <b>distraction</b>. Zyada tar scam messages inme se do-teen ek saath use karte hain.', 'Asli messages ki pehchaan: <b>link ya OTP nahi maangte</b>, official channel (app, card ke peeche ka number) ki taraf bhejte hain, aur darr ya jaldi ka dabaav nahi banate. Phir bhi shak ho to message ke number par nahi, official number par khud call karo.'],
    render(stage, done) {
      let order = [], i = 0, score = 0, miss = [];
      const start = () => { order = u.shuffle(MSGS.map((_, k) => k)); i = 0; score = 0; miss = []; next(); };
      const next = () => {
        if (i >= order.length) return finish();
        const m = MSGS[order[i]];
        stage.innerHTML = `<div class="muted mono" style="font-size:.85rem">Message ${i + 1}/${order.length} · Score ${score}</div>
          <div class="msg-phone"><div class="msg-from">${icon('phone')}${m[0]}</div><div class="msg-bubble">${m[1]}</div>${m[2] ? `<div class="msg-ctx">${m[2]}</div>` : ''}</div>
          <div class="lab-btns"><button class="btn" data-v="1" style="background:var(--bad)">${icon('alert')}Scam</button><button class="btn" data-v="0" style="background:var(--good)">${icon('check')}Asli lagta hai</button></div>
          <div class="q-after"></div>`;
        u.$$('.lab-btns .btn', stage).forEach((b) => b.addEventListener('click', () => answer(b.dataset.v === '1')));
      };
      const answer = (saidScam) => {
        const btns = u.$$('.lab-btns .btn', stage);
        if (btns[0].disabled) return;
        btns.forEach((b) => (b.disabled = true));
        const m = MSGS[order[i]];
        const ok = saidScam === m[3];
        if (ok) score++; else miss.push(m[0]);
        u.$('.q-after', stage).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${ok ? 'Sahi!' : 'Is baar chook gaye.'}</b> Ye <b>${m[3] ? 'scam' : 'asli jaisa'}</b> hai. ${m[3] ? 'Red flags' : 'Kyun theek lagta hai'}:<ul style="margin:6px 0 6px 18px;padding:0">${m[4].map((f) => `<li>${f}</li>`).join('')}</ul>${m[5]}</div>
          <div class="row" style="margin-top:12px"><button class="btn lc" id="nx">${i === order.length - 1 ? 'Result dekho' : 'Agla message'} ${icon('right')}</button></div>`;
        const nx = u.$('#nx', stage);
        nx.focus({ preventScroll: true });
        nx.onclick = () => { i++; next(); };
      };
      const finish = () => {
        const msg = score === order.length ? 'Perfect! Ab ghar ke group me ek message daal do: "OTP, PIN, CVV kisi ko nahi. Paise lene ke liye PIN nahi. Fraud ho to 1930." Yahi asli jeet hai.' : score >= 6 ? 'Badhiya! Jo chooke, unke red flags dobara dekho. Asli scams isse bhi zyada jaldi aur darr ke saath aate hain.' : 'Koi baat nahi, isi liye practice karte hain. Chapter 8.5 ki 5 seedhiyan yaad karo, phir dobara try karo.';
        stage.innerHTML = `<div class="lab-center" style="gap:16px"><h3>Score: ${score}/${order.length}</h3>${resCards([[score, 'Sahi faisle'], [order.length - score, 'Galat faisle']])}${miss.length ? `<p class="muted" style="max-width:56ch">Dobara dekho: ${miss.join(' · ')}</p>` : ''}${teach(msg)}<button class="btn ghost" id="again">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = start;
        done();
      };
      stage.innerHTML = `<div class="lab-center"><p class="lab-q">8 messages. Har ek par ek second ruko, red flags gino, phir faisla karo.</p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
      u.$('#go', stage).onclick = start;
    }
  });

  /* ---------- Na kehne ka gym ---------- */
  const STYLE = { P: ['Passive', 'Shanti abhi mili, par apni zaroorat dab gayi. Aisa baar-baar hua to log fayda uthaate hain aur andar gussa jama hota hai.'], PA: ['Passive-aggressive', 'Na saaf haan, na saaf na. Masla wahin ka wahin, upar se bharosa kam.'], AG: ['Aggressive', 'Baat keh di, par saamne wala defensive ho gaya. Bahas jeet sakte ho, rishta haar jaate ho.'], AS: ['Assertive', 'Saaf, shaant aur izzat ke saath. Boundary bhi bachi, rishta bhi.'] };
  const GYM = [
    ['Friday shaam 6 baje senior: "Ye report Monday subah tak chahiye, team me sabse reliable to tum hi ho."', [['"Haan haan, koi baat nahi, ho jaayega."', 'P'], ['"Theek hai... jaisa aap kahein." (phir report jaanbujh kar adhoori)', 'PA'], ['"Har baar mujhe hi kyun? Ye mera kaam nahi hai!"', 'AG'], ['"Monday tak poori report mumkin nahi. Ek page ka summary Monday subah mil jaayega, baaki Wednesday tak."', 'AS']], 'Na + ek option: tareef ke jaal ("sabse reliable") me phanse bina asli capacity batayi.'],
    ['Purana dost: "Bas loan ke papers par guarantor ban ja, sirf formality hai."', [['"Achha... theek hai, laao, sign kahan karna hai."', 'P'], ['"Haan, dekhenge." (phir uske calls ignore karna)', 'PA'], ['"Pagal ho kya? Apni problem khud sambhalo."', 'AG'], ['"Guarantee dena mere liye mumkin nahi. Chalo, doosre loan options saath me dhoondhte hain."', 'AS']], 'Broken record ke liye taiyaar line: "mere liye mumkin nahi" ko bina safai ke dohra sakte ho.'],
    ['Shaadi me rishtedaar sabke saamne: "Itni umar ho gayi, abhi tak shaadi nahi? Parents ko kab tak tension doge?"', [['Chup rehkar sir jhuka lena, baad me rona.', 'P'], ['"Haan haan, aapke ghar me to sab perfect hai na..."', 'PA'], ['"Aapko kya matlab? Apne kaam se kaam rakhiye!"', 'AG'], ['"Is par soch-samajh kar kaam chal raha hai. Aapki chinta ke liye shukriya." (phir topic badalna)', 'AS']], 'Fogging + boundary: chinta ko maana, par faisle par charcha ka darwaza band.'],
    ['Partner: "Agar pyaar karte ho to apna phone password do."', [['Password de dena, phir har message par darr.', 'P'], ['"Le lo, waise bhi tumhe mujh par bharosa kahan hai." (taana)', 'PA'], ['"Tum psycho ho kya? Har waqt shak!"', 'AG'], ['"Mujhe tumse chhupane ko kuch nahi, par phone ki privacy mere liye zaroori hai. Chalo baat karte hain ki ye shak kahan se aa raha hai."', 'AS']], 'Boundary + asli masle (shak) par baat. "Pyaar ka saboot" wala frame chhod diya.'],
    ['MLM wala dost: "Yaar bas ek meeting aa ja, sirf 1 ghanta. Dost ke liye itna bhi nahi?"', [['"Achha... theek hai, kab aana hai?"', 'P'], ['"Haan haan, dekhte hain." (phir uske calls avoid karna)', 'PA'], ['"Ye sab fraud hai, tum log logon ko lootte ho!"', 'AG'], ['"Tumhari dosti mere liye important hai, isliye seedhi baat: is business me interest nahi hai. Chai pe milte hain, bina business ke."', 'AS']], 'Rishte aur request ko alag kiya: dosti ko haan, offer ko na.'],
    ['Classmate: "Bas apna assignment bhej de, thoda change kar lunga, kisi ko pata nahi chalega."', [['Bhej dena, phir plagiarism ke darr me raat bhar pareshaan.', 'P'], ['Jaanbujh kar purana galat version bhej dena.', 'PA'], ['"Khud padh liya kar, har baar muft ka maal?"', 'AG'], ['"Copy bhejna theek nahi, dono pakde ja sakte hain. Chal, aaj shaam 30 minute saath baithte hain, tricky part samajh aa jaayega."', 'AS']], 'Na + madadgaar option: rishta bhi bacha, apni imaandaari bhi.']
  ];
  L('boundary', {
    title: 'Na kehne ka gym', icon: 'shield', level: 8, chapter: 'defense-boundaries', mins: 4,
    short: '6 mushkil situations. Har ek me sabse assertive jawab chuno aur dekho kyun.',
    intro: 'Ye gym hai, aur aaj ka workout hai "na" kehna. Har situation me chaar jawab honge: passive, passive-aggressive, aggressive aur assertive. Assertive wala chuno. Galti ho to koi baat nahi, isi se muscle banti hai.',
    about: ['Assertiveness training 1970s se behaviour therapy ka hissa hai. Manuel J. Smith ki <i>When I Say No, I Feel Guilty</i> (1975) ne broken record aur fogging jaisi techniques ko popular banaya.', 'Assertiveness training social anxiety kam karne aur self-esteem badhane me madadgaar paayi gayi hai. Sabse zaroori baat: scripts ko zor se bol kar practice karna, kyunki hot state me wahi nikalta hai jo pehle se practice kiya ho.'],
    render(stage, done) {
      let i = 0, score = 0, opts = [];
      const start = () => { i = 0; score = 0; next(); };
      const next = () => {
        if (i >= GYM.length) return finish();
        const g = GYM[i];
        opts = u.shuffle(g[1]);
        stage.innerHTML = `<div class="muted mono" style="font-size:.85rem">Situation ${i + 1}/${GYM.length} · Assertive picks ${score}</div>
          <p class="lab-q">${g[0]}</p>
          <div class="opts">${opts.map((o, j) => `<button class="opt" data-j="${j}"><span class="k">${keys[j]}</span><span>${o[0]}</span></button>`).join('')}</div>
          <div class="q-after"></div>`;
        u.$$('.opt', stage).forEach((b) => b.addEventListener('click', () => pick(+b.dataset.j)));
      };
      const pick = (j) => {
        const box = u.$('.opts', stage);
        if (box.classList.contains('locked')) return;
        box.classList.add('locked');
        const st = opts[j][1];
        const ok = st === 'AS';
        if (ok) score++;
        u.$$('.opt', stage).forEach((b) => {
          const o = opts[+b.dataset.j];
          if (o[1] === 'AS') b.classList.add('ok'); else if (+b.dataset.j === j) b.classList.add('no');
          b.insertAdjacentHTML('beforeend', ` <small class="muted" style="grid-column:2">${STYLE[o[1]][0]}</small>`);
        });
        u.$('.q-after', stage).innerHTML = `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${STYLE[st][0]}.</b> ${STYLE[st][1]}${ok ? '' : ` Assertive jawab upar hara wala hai.`}<br><b>Technique:</b> ${GYM[i][2]}</div>
          <div class="row" style="margin-top:12px"><button class="btn lc" id="nx">${i === GYM.length - 1 ? 'Result dekho' : 'Agli situation'} ${icon('right')}</button></div>`;
        const nx = u.$('#nx', stage);
        nx.focus({ preventScroll: true });
        nx.onclick = () => { i++; next(); };
      };
      const finish = () => {
        const msg = score === GYM.length ? 'Poore marks! Ab asli test: is hafte ek chhoti si "na" asli zindagi me bol kar dekho, shaanti aur izzat ke saath.' : score >= 4 ? 'Achha workout! Assertive lines ko ek baar zor se bol kar practice karo. Zubaan ko bhi aadat chahiye.' : 'Shuruaat me "na" mushkil lagta hai, sabko lagta hai. Chapter 8.7 ke tools dekho aur phir se try karo.';
        stage.innerHTML = `<div class="lab-center" style="gap:16px"><h3>Assertive picks: ${score}/${GYM.length}</h3>${resCards([[score, 'Assertive'], [GYM.length - score, 'Doosre style']])}${teach(msg)}<button class="btn ghost" id="again">${icon('replay')}Dobara karo</button></div>`;
        u.$('#again', stage).onclick = start;
        done();
      };
      stage.innerHTML = `<div class="lab-center"><p class="lab-q">6 situations. Har ek me sabse <b>assertive</b> jawab chuno.</p><button class="btn lc" id="go">${icon('play')}Shuru karo</button></div>`;
      u.$('#go', stage).onclick = start;
    }
  });
})();
