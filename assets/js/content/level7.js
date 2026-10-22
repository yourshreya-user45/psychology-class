/* Level 7 · Expert Zone · Advanced & Applied (part 1) */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 7.1 */
  C({
    id: 'cognitive-biases', level: 7, mins: 20, visual: 'lossAversion',
    visualCap: 'Prospect theory ka value function: ₹1,000 khone ka dukh, ₹1,000 milne ki khushi se lagbhag double mehsoos hota hai. Curve loss ki taraf zyada steep hai.',
    title: 'Cognitive biases aur behavioural economics',
    tag: 'Anchoring, framing, loss aversion, sunk cost, defaults aur nudges: dimaag ke shortcuts jo paisa, sehat aur faisle badal dete hain',
    intro: 'Level 7, Expert Zone me tumhara swagat hai! Ab tak ki saari neev par ab hum advanced aur applied psychology ki imaarat banayenge. Shuruaat dimaag ke shortcuts se: wo biases jo sale ke tag se lekar career ke faislon tak tumhare choices chupchaap modte hain. Aaj ke baad shopping mall thoda alag dikhega.',
    hook: 'Ek shirt par tag: <s>₹2,999</s> <b>₹999 sirf aaj!</b> Tumhe lagta hai ₹2,000 bacha liye. Par kya wo shirt kabhi ₹2,999 ki thi bhi? Tumhara dimaag ek <b>anchor</b> ke jaal me phansa. Nobel Prize jeetne wali psychology research batati hai ki hum "rational" faisle kam aur predictable galtiyan zyada karte hain.',
    blocks: [
      ['h', 'Rational insaan ka myth'],
      ['p', 'Classical economics maanti thi ki insaan <b>rational</b> hai: saari information tolta hai aur apna sabse bada fayda chunta hai. Herbert Simon ne kaha hamari rationality <b>bounded</b> (seemit) hai: time, information aur dimaag ki capacity seemit hai. Phir Amos Tversky aur Daniel Kahneman ne dikhaya ki hamari galtiyan random nahi, <b>systematic</b> hain (biases). Kahneman ko 2002 me aur Richard Thaler ko 2017 me Economics ka Nobel mila. Is mel se bani field: <b>behavioural economics</b>.'],

      ['h', 'Anchoring'],
      ['p', 'Pehla number jo hum dekhte hain (chahe bekaar ho), wo hamare andaze ko apni taraf kheench leta hai. Hum usse "adjust" karte hain, par kaafi nahi.'],
      ['lab', 'anchoring'],
      ['list', [
        '<b>Shopping</b>: MRP aur "pehle ki keemat" anchor ka kaam karti hain.',
        '<b>Salary negotiation</b>: pehle bola gaya number poori baat-cheet ko shape karta hai.',
        '<b>Adalat</b>: Englich aur saathiyon (2006) ki German study me <b>experienced judges</b> ne bhi, jinhe ek case ke liye pehle <b>dice</b> se aaya random number (zyada ya kam) dikhaya gaya, uske hisaab se zyada ya kam saza ka suggestion diya.'
      ]],
      ['teacher', 'Socho, judges jinka kaam hi soch-samajh kar faisla karna hai, wo bhi dice ke number se khinch gaye. Matlab biases "bewakoofon" ki problem nahi, har dimaag ki wiring hai: tumhari bhi, aur meri bhi.'],

      ['h', 'Framing'],
      ['p', 'Same information, alag shabd, alag faisla. "95% fat-free" "5% fat" se achha lagta hai. McNeil aur saathiyon (1982) ki study me doctors aur patients ne bhi surgery ko zyada chuna jab use "90% survival" ke roop me bataya gaya, bajay "10% mortality" ke.'],
      ['lab', 'framing'],

      ['h', 'Prospect theory aur loss aversion'],
      ['p', 'Kahneman aur Tversky ki <b>prospect theory</b> (1979) ke teen core ideas: (1) hum cheezon ko <b>reference point</b> se gain ya loss ki tarah dekhte hain, kul daulat ki tarah nahi; (2) <b>loss aversion</b>: nuksaan ka dard same size ke fayde ki khushi se lagbhag <b>2 guna</b>; (3) gain me hum risk se bachte hain, loss me risk lete hain.'],
      ['case', 'Coffee mug experiment (Kahneman, Knetsch aur Thaler, 1990)', 'Aadhe students ko ek university coffee mug de diya gaya. Jinke paas mug tha, unse poocha kitne me bechoge; jinke paas nahi tha, unse poocha kitne me kharidoge. Bechne wale lagbhag <b>double</b> keemat maang rahe the (~$7) jitna kharidne wale dene ko taiyaar the (~$3). Kuch minute pehle mila mug bhi "apna" ho gaya, aur use chhodna "loss" lagne laga: <b>endowment effect</b>.'],
      ['ex', 'Purana phone jo bechna mushkil lagta hai', 'OLX par apne 3 saal purane phone ka daam tumne bhi shayad market se zyada rakha hoga ("itna achha condition hai!"), aur koi kam bole to bura laga hoga. Isi tarah "free trial" ke baad subscription cancel karna mushkil lagta hai: ab wo cheez "apni" hai aur use khona loss hai. Companies isi loss aversion ka fayda uthati hain.'],
      ['teacher', 'Loss aversion pakadne ki trick: jab bhi koi offer "miss mat karo!" ya "sirf aaj!" chillaye, samjho wo tumhare nuksaan ke darr se baat kar raha hai, fayde se nahi. Ek pal ruko aur poochho: kya ye cheez mujhe waise bhi chahiye thi?'],

      ['h', 'Aur bhi biases jo roz dikhte hain'],
      ['table', ['Bias', 'Kya hai', 'Example'], [
        ['Sunk cost fallacy', 'Pehle lagaye paise/time ki wajah se galat raaste par chalte rehna', 'Bekaar movie ke ticket ke paise "vasool" karne ke liye poori dekhna; nuksaan wale project me aur paisa lagana'],
        ['Status quo bias', 'Jo chal raha hai wahi rehne dena', 'Saalon purana mehenga phone plan kabhi na badalna'],
        ['Mental accounting', 'Paise ko alag "khaaton" me sochna', 'Diwali bonus ko "free paisa" maan kar uda dena, jabki EMI chal rahi hai'],
        ['Planning fallacy', 'Kaam me lagne wale time ko kam aankna', 'Students ne thesis ke liye ~34 din ka andaza lagaya, laga ~56 din (Buehler aur saathi, 1994)'],
        ['Optimism bias', '"Mere saath bura nahi hoga"', 'Helmet na pehenna, insurance na lena'],
        ['Negativity bias', 'Buri cheez achhi se zyada asar daalti hai', '10 taareefon par ek aalochana bhaari'],
        ['Base-rate neglect', 'Overall probability ko ignore karke kahani par jaana', 'Ek test positive aaya to beemari pakki maan lena, bina ye dekhe ki beemari kitni rare hai'],
        ['Gambler\'s fallacy', 'Random events me "ab to baari aayegi" maanna', '5 baar toss haara, "ab to jeetenge"; coin ki koi yaaddasht nahi hoti'],
        ['Bandwagon effect', 'Jo sab kar rahe hain wahi karna', 'Crypto ya kisi share me sirf isliye paisa lagana kyunki sab laga rahe hain'],
        ['Dunning-Kruger effect', 'Kam skill wale apni skill ko zyada aankte hain', 'Driving test ke pehle "main expert hoon". (Is effect ke kuch hisse statistical artefact hone par bahas hai.)']
      ]],

      ['h', 'Defaults aur nudges'],
      ['p', 'Hum aksar <b>default</b> (pehle se chuna hua option) ke saath chalte hain, kyunki badalna mehnat hai aur default "recommended" lagta hai.'],
      ['vis', 'nudge', 'Organ donor registration: "opt-in" (khud form bharo) vs "opt-out" (sab donor hain jab tak mana na karo) desh. Sirf default badalne ka farak.'],
      ['p', 'Richard Thaler aur Cass Sunstein ki book <i>Nudge</i> (2008) ne <b>choice architecture</b> ka idea diya: options ko aise design karna ki log apne hi fayde ke faisle aasaani se lein, bina choice chheene. Examples: pension me automatic enrolment (US ki ek company me participation ~37% se ~86% ho gayi jab enrolment default bana diya gaya; Madrian aur Shea, 2001), canteen me fruits aankhon ke level par, "tumhare padosi tumse kam bijli use karte hain" wale bills.'],
      ['ex', '"Give It Up" campaign (India, 2015)', 'Sarkar ne LPG subsidy chhodne ki apeal ki aur chhodne walon ke naam publicly dikhaye, saath me message ki tumhari subsidy kisi garib parivaar ko gas connection degi. Ek saal ke andar <b>1 crore se zyada</b> logon ne subsidy chhod di. Social norms ("doosre bhi kar rahe hain"), identity ("main achha nagrik hoon") aur concrete fayde ka mel: ek classic nudge. NITI Aayog ne 2019 me behavioural insights par kaam ke liye ek unit bhi banayi.'],
      ['note', 'Nudges jaadu nahi. Badi reviews me publication bias ko adjust karne par kai nudges ka average asar chhota nikla. Aur nudge tab galat hai jab wo logon ko unke hi khilaf dhakele (jaise chhupi fees ya cancel karna jaanbujh kar mushkil banana, jinhe "dark patterns" kehte hain).'],
      ['teacher', 'Yaad rakhna, nudge aur manipulation me farak irade ka hai: nudge tumhare fayde ke liye raasta aasaan karta hai, dark pattern kisi aur ke fayde ke liye tumhe phansaata hai. Is farak par course ke aakhir me aur gehraai se baat hogi.'],

      ['h', 'Biases se kaise bachein (debiasing)'],
      ['list', [
        '<b>Consider the opposite</b>: apne faisle ke <b>khilaf</b> 3 reasons likho.',
        '<b>Outside view</b>: "is tarah ke projects me aam taur par kitna time lagta hai?" (planning fallacy ka ilaaj).',
        '<b>Pre-mortem</b> (Gary Klein): maan lo ek saal baad plan fail ho gaya; ab likho kyun. Isse chhupe khatre saamne aate hain.',
        '<b>Checklists</b> aur rules (doctors aur pilots ke liye bahut effective).',
        '<b>Ek raat soch lo</b>: bade kharche ya emotional faislon me 24 ghante ka niyam.',
        '<b>Decision journal</b>: faisla, reasons aur expected nateeja likho; baad me check karo. Overconfidence aur hindsight bias dono kam hote hain.'
      ]],
      ['tip', 'Aaj kisi ek pending faisle (jaise course, phone, investment) par <b>pre-mortem</b> karo: "6 mahine baad ye faisla bura saabit hua. 5 sabse sambhavit kaaran kya the?" Phir dekho kya plan me badlaav chahiye.'],
      ['terms', [
        ['Bounded rationality', 'Time, information aur capacity ki seemaon me rationality (Herbert Simon).'],
        ['Behavioural economics', 'Psychology aur economics ka mel jo asli insaani faislon ko study karta hai.'],
        ['Anchoring', 'Pehle mile number ka baad ke andaze ko apni taraf kheenchna.'],
        ['Framing effect', 'Same information alag shabdon me dene se alag faisla.'],
        ['Prospect theory', 'Reference point se gain/loss, loss aversion aur risk attitudes ki theory (Kahneman & Tversky).'],
        ['Loss aversion', 'Nuksaan ka dard same fayde ki khushi se zyada (~2 guna) mehsoos hona.'],
        ['Endowment effect', 'Apni cheez ko sirf "apni" hone ki wajah se zyada keemti maanna.'],
        ['Sunk cost fallacy', 'Pehle kiye kharch ki wajah se galat faisle par tike rehna.'],
        ['Status quo bias', 'Maujooda haalat ko badalne se bachne ka jhukaav.'],
        ['Default effect', 'Pehle se chune option ke saath chalte rehne ka jhukaav.'],
        ['Mental accounting', 'Paise ko alag-alag mental khaaton me baant kar sochna.'],
        ['Planning fallacy', 'Kaam me lagne wale samay aur kharch ko kam aankna.'],
        ['Optimism bias', 'Apne saath bura hone ki sambhavna ko kam maanna.'],
        ['Negativity bias', 'Negative information ka positive se zyada asar.'],
        ['Base-rate neglect', 'Overall frequency ko ignore karke specific kahani par judgement.'],
        ['Gambler\'s fallacy', 'Independent random events me pattern ya "baari" maanna.'],
        ['Dunning-Kruger effect', 'Kam kshamta wale logon ka apni kshamta zyada aankna (vivaadit).'],
        ['Nudge', 'Choice architecture me chhota badlaav jo bina choice chheene behaviour badle.'],
        ['Choice architecture', 'Options ko pesh karne ka design jo faislon ko prabhavit karta hai.'],
        ['Pre-mortem', 'Pehle se maan kar ki plan fail hua, uske kaaran dhoondhna.'],
        ['Dark patterns', 'Users ko unke hi khilaf faisle karwane wale manipulative design.']
      ]]
    ],
    outro: 'Aaj ka saar: hamari galtiyan random nahi, predictable hain, aur isliye unse bacha bhi ja sakta hai. Quiz karo, aur aaj hi kisi faisle par ek chhota pre-mortem try karo. Agle chapter me sawaal ulta karenge: kya galat hai ke bajay, zindagi ko achha kya banata hai? Yaani positive psychology.',
    takeaways: [
      'Hamari galtiyan systematic hain: biases predictable hain, isliye unse bacha bhi ja sakta hai.',
      'Anchoring aur framing faislon ko chupchaap modte hain (judges bhi bachte nahi).',
      'Loss aversion: nuksaan ~2 guna bhaari; endowment effect aur sunk cost isi se nikalte hain.',
      'Defaults bahut powerful hain (organ donation); nudges madad karte hain par jaadu nahi.',
      'Pre-mortem, outside view, checklists aur decision journal debiasing ke tested tools hain.'
    ],
    quiz: [
      ['"MRP ₹2,999, aaj ₹999" kis bias ka fayda uthata hai?', ['Sunk cost', 'Anchoring', 'Gambler\'s fallacy', 'Status quo'], 1, 'Ooncha pehla number anchor banta hai.'],
      ['Loss aversion ke hisaab se ₹1,000 khone ka dukh kitna hota hai?', ['₹1,000 milne ki khushi ke barabar', 'Lagbhag double', 'Aadha', 'Kuch nahi'], 1, 'Losses gains se lagbhag 2 guna zyada weigh karte hain.'],
      ['Bekaar movie poori dekhna kyunki ticket ke paise diye the, kya hai?', ['Sunk cost fallacy', 'Endowment effect', 'Framing', 'Bandwagon'], 0, 'Wapas na aane wale kharch ki wajah se aage galat faisla.'],
      ['Organ donation me opt-out deshon me registration bahut zyada kyun hai?', ['Wahan log zyada dayalu hain', 'Default effect', 'Anchoring', 'Loss aversion nahi hota'], 1, 'Pehle se chuna option zyada log rehne dete hain.'],
      ['Coffee mug experiment ne kya dikhaya?', ['Log mugs pasand nahi karte', 'Endowment effect: apni cheez ko zyada keemti maanna', 'Anchoring', 'Gambler\'s fallacy'], 1, 'Bechne wale kharidne walon se lagbhag double maang rahe the.'],
      ['5 baar toss haarne ke baad "ab to jeetenge" maanna?', ['Base-rate neglect', 'Gambler\'s fallacy', 'Optimism bias', 'Framing'], 1, 'Independent events me "baari" ka vichaar gambler\'s fallacy hai.'],
      ['Pre-mortem technique me kya karte hain?', ['Faisle ke baad celebration', 'Maan lete hain plan fail ho gaya aur uske kaaran dhoondhte hain', 'Sirf positive sochte hain', 'Faisla doosre par chhod dete hain'], 1, 'Isse chhupe risks pehle se dikh jaate hain.']
    ],
    more: [
      ['Nudge (Thaler & Sunstein)', GR('Nudge Thaler Sunstein'), 'book'],
      ['Thinking, Fast and Slow (Daniel Kahneman)', GR('Thinking Fast and Slow'), 'book'],
      ['Crash Course Economics: Behavioral Economics', YT('Crash Course Economics behavioral economics'), 'video']
    ]
  });

  /* 7.2 */
  C({
    id: 'positive-psychology', level: 7, mins: 18, visual: 'perma',
    visualCap: 'Seligman ka PERMA model: well-being ke paanch stambh. Har petal par tap karo aur ek practical activity dekho.',
    title: 'Positive psychology aur well-being',
    tag: 'PERMA, flow, khushi ke asli predictors, gratitude, character strengths, growth mindset aur grit ka sach',
    intro: 'Pichhle chapter me dimaag ki galtiyan dekhi; aaj uski taaqat ki baat. Psychology ne lambe samay tak problems par dhyan diya, par ek sawaal utna hi zaroori hai: zindagi ko jeene layak kya banata hai? Aaj flow, khushi ke asli predictors aur kuch tested exercises dekhenge, aur ye bhi ki kaunsa "motivational" gyaan research par khara nahi utarta.',
    hook: 'Psychology ne lagbhag 100 saal ye samajhne me lagaye ki <b>kya galat hai</b>: depression, anxiety, trauma. 1998 me American Psychological Association ke president <b>Martin Seligman</b> ne ek naya sawaal poochha: <b>"Kya cheez zindagi ko jeene layak banati hai?"</b> Isse <b>positive psychology</b> shuru hui.',
    blocks: [
      ['h', 'Well-being ke do nazariye'],
      ['compare', ['Hedonic well-being', 'Khushi aur santushti: <b>subjective well-being</b> = life satisfaction + zyada positive emotions + kam negative emotions. "Kya meri zindagi achhi lag rahi hai?"'], ['Eudaimonic well-being', 'Arth aur growth: apni kshamta ka upyog, maksad, self-acceptance, achhe rishte (Carol Ryff ke 6 dimensions). Aristotle ka "achhi tarah jeena", jo hamesha mazedaar nahi hota par sarthak hota hai.']],

      ['h', 'PERMA'],
      ['p', 'Seligman (2011) ne well-being ke paanch building blocks diye:'],
      ['table', ['Letter', 'Matlab', 'Practical activity'], [
        ['P', 'Positive emotions: khushi, shukrguzari, ummeed, sukoon', 'Roz raat "3 achhi baatein" likhna'],
        ['E', 'Engagement: kaam me poori tarah doobna (flow)', 'Apni strengths wala ek kaam roz'],
        ['R', 'Relationships: gehre, bharosemand rishte', 'Hafte me ek dost ko call, bina phone ke family dinner'],
        ['M', 'Meaning: khud se badi kisi cheez ka hissa hona', 'Volunteering, kisi ko padhana, apne values likhna'],
        ['A', 'Accomplishment: lakshya paana, mastery', 'Chhote, specific weekly goals aur unka record']
      ]],

      ['h', 'Flow: "zone" me hona'],
      ['p', 'Hungarian-American psychologist <b>Mihaly Csikszentmihalyi</b> ne artists, athletes aur surgeons se poochha ki unke best pal kaise hote hain. Jawab: ek aisi sthiti jisme <b>challenge aur skill barabar</b> hote hain, lakshya saaf hota hai, turant feedback milta hai, apne aap ka dhyan gayab ho jaata hai aur samay ka ehsaas badal jaata hai. Unhone ise <b>flow</b> kaha.'],
      ['vis', 'flowChannel', 'Challenge bahut zyada = anxiety, bahut kam = boredom. Flow beech ki patti me hai, aur skill badhne ke saath challenge bhi badhana padta hai.'],
      ['ex', 'Riyaz, cricket aur coding', 'Ek sitar player ghanton riyaz karta hai aur use pata hi nahi chalta kab shaam ho gayi. Batsman kehta hai "ball football jitni badi dikh rahi thi". Programmer ek bug theek karte hue khana bhool jaata hai. Teeno flow me hain. Flow ke liye kaam ko thoda mushkil banao (par itna nahi ki ghabrahat ho), distractions hatao, aur saaf mini-goals rakho.'],
      ['teacher', 'Yaad karo, aakhri baar kab samay ka pata hi nahi chala tha? Cricket, drawing, gaming, ya koi mushkil sawaal? Wahi tumhara flow tha. Uske ingredients pehchaan lo, to use dobara bulaana aasaan ho jaata hai.'],

      ['h', 'Khushi ko kya predict karta hai?'],
      ['list', [
        '<b>Rishte</b>: Harvard ki <b>Study of Adult Development</b> (1938 se chal rahi, 80+ saal) ka sabse bada nateeja: achhe, kareebi rishte lambi umar aur khushi ka sabse strong predictor hain, paisa ya fame nahi.',
        '<b>Sehat, neend, exercise</b>.',
        '<b>Meaningful kaam aur autonomy</b>.',
        '<b>Doosron par kharch</b>: Elizabeth Dunn aur saathiyon (2008) ki study me logon ko paise diye gaye; jinhone doosron par kharch kiye, wo khud par kharch karne walon se zyada khush the.',
        '<b>Paisa</b>: garibi se nikalna bahut farak laata hai; uske baad bhi badhti income ke saath khushi badhti hai par dheere-dheere.'
      ]],
      ['p', 'Khushi ka kuch hissa genes se juda hai (heritability lagbhag 30-50%), aur hum badi ghatnaon ke baad bhi apne "set point" ki taraf laut-te hain (hedonic adaptation). Ek mashhoor pie chart ("50% genes, 10% halaat, 40% tumhare actions") ko baad me researchers ne galat statistics par based bataya; matlab intentional activities matter karti hain, par itna exact formula nahi hai.'],
      ['teacher', 'Ruko, yahan ek common galti hoti hai: "khushi genes me hai, to kuch kar nahi sakte". Genes ek range dete hain, kaid nahi. Rishte, neend aur meaningful kaam us range ke andar bahut farak laate hain.'],

      ['h', 'Tested positive interventions'],
      ['list', [
        '<b>Gratitude journal</b>: Emmons aur McCullough (2003) ki studies me hafte me kuch cheezon ke liye shukrguzari likhne walon ne zyada positive mood aur behtar well-being report ki.',
        '<b>Three good things</b>: roz raat 3 achhi cheezein aur unke hone ka kaaran likhna (Seligman aur saathi, 2005).',
        '<b>Acts of kindness</b>, <b>savoring</b> (achhe pal ko jaanbujh kar dhyan se jeena), <b>best possible self</b> likhna.',
        '<b>Character strengths</b>: VIA classification me 24 strengths (jaise curiosity, kindness, humour, perseverance, gratitude) jo 6 virtues (wisdom, courage, humanity, justice, temperance, transcendence) me baante gaye. Apni "signature strengths" ko naye tareekon se use karna well-being badha sakta hai.'
      ]],
      ['note', 'In interventions ka asar aam taur par <b>chhota se medium</b> hota hai, aur ye depression jaisi beemari ka ilaaj nahi. "Bas positive socho" kehna (<b>toxic positivity</b>) kisi ki asli takleef ko nakar sakta hai. Achhi positive psychology dukh ko jagah deti hai, use dabati nahi.'],
      ['teacher', 'Is note ko dil se padhna. Kisi dost ke bure din me "bas positive socho" kehne se pehle "kya hua, batao" kehna zyada kaam aata hai. Dukh ko jagah dena bhi well-being ka hissa hai.'],

      ['h', 'Growth mindset aur grit: hype vs saboot'],
      ['p', 'Carol <b>Dweck</b> ka <b>growth mindset</b>: ye vishwas ki kshamtayein mehnat aur sahi strategy se badh sakti hain (fixed mindset ke ulat). Ye idea schools me bahut popular hua. Research kya kehti hai? Kuch meta-analyses me overall asar bahut chhota mila. Par 2019 ki ek badi, carefully designed US study (Yeager aur saathi) me ek ghante ke online program ne kamzor performance wale students ke grades thode sudhaare. Matlab: mindset matter karta hai, par ye "jaadu ki chhadi" nahi, aur sahi mahaul (achhe teachers, support) ke saath hi kaam karta hai.'],
      ['p', 'Angela Duckworth ka <b>grit</b> (lambe lakshyon ke liye passion + perseverance) bhi bahut popular hua. Baad ke meta-analysis me paaya gaya ki grit ka bada hissa conscientiousness jaisa hi hai aur success ka predictor utna strong nahi jitna pehle bataya gaya. Lagan zaroori hai, par sahi direction aur mauke bhi.'],

      ['h', 'Culture aur khushi'],
      ['p', 'Jeanne Tsai ki research batati hai ki alag cultures alag tarah ki khushi ko "ideal" maante hain: American culture me zyada excited, high-energy khushi; East Asian cultures me zyada <b>shaant, santusht</b> khushi. Bharatiya parampara me <b>santosh</b> (santushti) aur <b>anand</b> ki baat hoti hai, aur collectivist samaajon me well-being aksar rishton me harmony se judi hoti hai. Positive psychology ko in cultural farkon ka dhyan rakhna padta hai.'],
      ['tip', 'Ek hafte ka experiment: roz sone se pehle <b>3 achhi baatein</b> likho jo aaj hui, chahe chhoti (garam chai, dost ka message), aur har ek ke saath likho <b>kyun</b> hui. Hafte ke ant me apna mood pehle se compare karo.'],
      ['terms', [
        ['Positive psychology', 'Insaani strengths, well-being aur flourishing ka scientific study.'],
        ['Subjective well-being', 'Life satisfaction aur positive vs negative emotions ka balance.'],
        ['Eudaimonic well-being', 'Arth, growth aur apni potential ke upyog se aane wala well-being.'],
        ['PERMA', 'Positive emotion, Engagement, Relationships, Meaning, Accomplishment.'],
        ['Flow', 'Challenge aur skill ke santulan me poori tarah dooba hua anubhav (Csikszentmihalyi).'],
        ['Savoring', 'Achhe anubhavon ko jaanbujh kar dhyan se mehsoos aur lamba karna.'],
        ['Character strengths', 'VIA ke 24 positive traits jo 6 virtues me baante gaye.'],
        ['Gratitude intervention', 'Shukrguzari likhne ya vyakt karne wali activity jo well-being badha sakti hai.'],
        ['Growth mindset', 'Kshamtayein mehnat aur strategy se badh sakti hain, ye vishwas.'],
        ['Fixed mindset', 'Kshamtayein janmajaat aur fixed hain, ye vishwas.'],
        ['Grit', 'Lambe lakshyon ke liye passion aur perseverance.'],
        ['Toxic positivity', 'Har haal me positive rehne ka dabaav jo asli emotions ko nakaarta hai.'],
        ['Ideal affect', 'Wo emotional states jinhe koi culture "ideal" maanta hai (Tsai).']
      ]]
    ],
    outro: 'Aaj ka saar: well-being khushi aur arth dono hai, flow challenge aur skill ke santulan se aata hai, aur rishte khushi ka sabse bada predictor hain. Quiz karo, aur aaj raat se "3 achhi baatein" wala experiment shuru karo. Agle chapter me psychology ko kaam, khel, kanoon aur classroom me utarte dekhenge.',
    takeaways: [
      'Well-being hedonic (khushi) aur eudaimonic (arth) dono hai; PERMA paanch stambh deta hai.',
      'Flow tab aata hai jab challenge aur skill barabar hon.',
      'Rishte khushi aur lambi umar ke sabse strong predictors hain (Harvard study).',
      'Gratitude, kindness aur strengths wale exercises ka asar chhota-medium par real; ye ilaaj ka replacement nahi.',
      'Growth mindset aur grit useful par overhyped; culture khushi ki definition badalta hai.'
    ],
    quiz: [
      ['PERMA me "E" ka matlab?', ['Energy', 'Engagement', 'Emotion', 'Education'], 1, 'Engagement: flow jaisa poori tarah dooba hona.'],
      ['Flow kab hota hai?', ['Jab kaam bahut aasaan ho', 'Jab challenge aur skill barabar hon', 'Jab kaam bahut mushkil ho', 'Jab koi lakshya na ho'], 1, 'Challenge-skill balance flow ki shart hai.'],
      ['Harvard Study of Adult Development ka mukhya nateeja?', ['Paisa khushi ka sabse bada kaaran', 'Achhe rishte khushi aur sehat ka sabse strong predictor', 'IQ sabse important', 'Fame se khushi milti hai'], 1, '80+ saal ki study me rishte sabse upar nikle.'],
      ['Positive psychology interventions ke baare me sahi baat?', ['Ye depression ka poora ilaaj hain', 'Inka asar chhota-medium hai aur ye ilaaj ka replacement nahi', 'Inka koi asar nahi', 'Sirf bachchon par kaam karte hain'], 1, 'Real par modest effects.'],
      ['Growth mindset research ke baare me sabse balanced baat?', ['Ye har student ko topper bana deta hai', 'Asar aam taur par chhota, kuch groups me aur sahi mahaul me upyogi', 'Ye poori tarah fake hai', 'Ye sirf adults par kaam karta hai'], 1, 'Effects modest aur context-dependent hain.'],
      ['Doosron par paise kharch karne wali study (Dunn, 2008) ka nateeja?', ['Khud par kharch karne wale zyada khush', 'Doosron par kharch karne wale zyada khush', 'Koi farak nahi', 'Dono udaas'], 1, 'Prosocial spending se zyada khushi mili.']
    ],
    more: [
      ['Flourish (Martin Seligman)', GR('Flourish Seligman'), 'book'],
      ['Flow (Mihaly Csikszentmihalyi)', GR('Flow Csikszentmihalyi'), 'book'],
      ['VIA Institute: free character strengths survey', 'https://www.viacharacter.org', 'link']
    ]
  });

  /* 7.3 */
  C({
    id: 'applied-psychology', level: 7, mins: 20, visual: 'hiring',
    visualCap: 'Naukri ke liye kaunsa selection tareeka asli job performance ko kitna predict karta hai (Schmidt aur Hunter, 1998 ke validity estimates). Handwriting analysis lagbhag zero!',
    title: 'Applied psychology: kaam, khel, kanoon aur classroom',
    tag: 'I/O psychology, UX, health psychology, forensic (narco-analysis par Supreme Court), sports psychology, SSB tests aur educational psychology',
    intro: 'Pichhle do chapters me biases aur well-being dekhe; aaj dekhenge ki psychology asli duniya me kahan-kahan kaam karti hai. Naukri ke interview se lekar cricket ground, adalat aur SSB tak, har jagah ye principles chupchaap chal rahe hain. Padhte waqt socho: inme se kaunsi field tumhe sabse zyada kheenchti hai?',
    hook: 'Psychology sirf therapy room me nahi rehti. Job interview, cricket ground, adalat, classroom, hospital, aur tumhare phone ke app ka design: har jagah psychology ke principles kaam kar rahe hain, aur har field me psychologists ki zaroorat hai.',
    blocks: [
      ['h', 'Industrial-Organizational (I/O) psychology'],
      ['p', 'I/O psychology kaam ki jagah par insaani behaviour ko study karti hai: sahi log kaise chunein, unhe kaise train karein, motivated aur khush kaise rakhein, aur teams aur leaders ko effective kaise banayein.'],
      ['h', 'Selection: kaunsa tareeka sach me kaam karta hai?'],
      ['p', 'Frank Schmidt aur John Hunter ne 1998 me 85 saal ki research ka meta-analysis karke dekha ki kaunse hiring methods asli job performance ko predict karte hain (validity coefficient: 0 = koi rishta nahi, 1 = perfect). Upar ka chart unke estimates dikhata hai.'],
      ['list', [
        '<b>Work sample tests</b>, <b>general mental ability</b> aur <b>structured interviews</b> (sabse same sawaal, tay scoring) sabse upar.',
        '<b>Unstructured interviews</b> ("apne baare me batao", gut feeling) kaafi kamzor, aur halo effect, similarity bias jaise biases se bhare.',
        '<b>Saalon ka experience</b> aur <b>degree ke saal</b> kam predict karte hain.',
        '<b>Graphology</b> (handwriting se personality) lagbhag zero, phir bhi kuch companies use karti hain!'
      ]],
      ['note', '2022 me Sackett aur saathiyon ke re-analysis me in numbers ko thoda neeche revise kiya gaya, aur structured interviews sabse upar ke predictors me aaye. Lesson wahi hai: tay structure aur job se jude tasks gut feeling se kahin behtar hain.'],
      ['teacher', 'Agli baar koi interview sirf "apne baare me batao" par chale, to tumhe pata hoga ki ye kamzor tareeka hai. Aur jab kabhi tumhe khud hiring karni pade, to har candidate se same sawaal aur tay scoring rakhna: ye sabse sasta upgrade hai.'],
      ['list', [
        '<b>Job characteristics model</b> (Hackman aur Oldham): skill variety, task identity (poora kaam dikhna), task significance, autonomy aur feedback wala kaam zyada motivating hota hai.',
        '<b>Psychological safety</b> (Amy Edmondson): team me bina darr ke sawaal poochhne, galti maanne aur idea dene ka mahaul. Google ki "Project Aristotle" research me ye effective teams ka sabse important factor nikla.',
        '<b>Performance appraisal biases</b>: halo effect, leniency (sabko achha rating), recency (sirf haal ka kaam yaad).',
        '<b>Hawthorne effect</b>: 1920s-30s ki factory studies se naam aaya ki "observe kiye jaane se" log behtar kaam karte hain. Baad me original data ki dobara jaanch me ye effect utna saaf nahi mila; par observation behaviour badal sakta hai, ye idea research design me zaroori hai.'
      ]],

      ['h', 'Human factors aur UX'],
      ['p', 'Don Norman ki book <i>The Design of Everyday Things</i> batati hai ki jab koi "push" ka darwaza "pull" karne layak handle ke saath bana ho, to galti user ki nahi, <b>design</b> ki hai ("Norman door"). Human factors psychology cockpits, hospital equipment aur cars ko insaani attention aur memory ki seemaon ke hisaab se design karti hai. Aaj <b>UX research</b> (apps aur websites ko user-friendly banana) psychology graduates ke liye ek tezi se badhta career hai: user interviews, usability testing aur A/B experiments.'],

      ['h', 'Health psychology'],
      ['p', 'Log jaante hain ki smoking, kam exercise aur dawai na lena nuksaan karta hai, phir bhi karte hain. Health psychology behaviour change ko samajhti hai:'],
      ['steps', [
        ['Precontemplation', '"Mujhe koi problem nahi." Badalne ka irada nahi.'],
        ['Contemplation', '"Shayad chhod dena chahiye... par abhi nahi."'],
        ['Preparation', '"Agle mahine se chhodunga; nicotine gum le aaya."'],
        ['Action', 'Badlaav shuru: pehle 6 mahine.'],
        ['Maintenance', 'Lambe samay tak tikaana; relapse hone par wapas pichhle step par jaana normal hai.']
      ]],
      ['p', 'Ye <b>transtheoretical (stages of change) model</b> (Prochaska aur DiClemente) hai. Saath hi <b>Health Belief Model</b> (khatra kitna gambhir lagta hai, fayde vs rukawatein) aur <b>Theory of Planned Behaviour</b> (attitude + social norms + control ka ehsaas → irada → behaviour) health campaigns design karne me use hote hain: jaise India ke tobacco cessation programs, diabetes self-management aur vaccination campaigns.'],
      ['teacher', 'Apni koi aadat socho jo badalni hai, jaise raat ko der tak phone ya junk food. Tum abhi kis stage par ho? Aur yaad rakho, relapse fail hona nahi, process ka hissa hai.'],

      ['h', 'Forensic psychology'],
      ['list', [
        '<b>Eyewitness testimony</b>: Loftus ki research (Chapter 1.3, 3.5) ke baad police lineups me double-blind procedure aur confidence ko turant record karne ki salah di jaati hai.',
        '<b>False confessions</b>: lambi poochtachh, thakaan, darr aur jhoothe saboot ka daava bekasoor logon se bhi confession karwa sakta hai (Saul Kassin ki research). Kai deshon me ab zyada respectful, information-gathering interview models (jaise UK ka PEACE model) apnaye ja rahe hain.',
        '<b>Risk assessment</b>, adalat me mental competence ki jaanch, aur victims ke liye support.'
      ]],
      ['case', 'Narco-analysis aur Supreme Court (Selvi vs State of Karnataka, 2010)', 'India me kai saalon tak jaanch agencies narco-analysis ("truth serum"), polygraph aur brain mapping (BEAP) tests use karti thi. 2010 me Supreme Court ne faisla diya ki kisi vyakti par ye tests <b>uski marzi ke bina</b> karna Article 20(3) (khud ke khilaf gawahi na dene ka adhikaar) aur Article 21 ka ullanghan hai. Psychology research bhi batati hai ki in tests ki scientific reliability kamzor hai: polygraph arousal naapta hai, jhooth nahi (Chapter 1.6), aur nashe ki haalat me di gayi baatein bharosemand nahi hoti.'],
      ['teacher', 'Ye case yaad rakhne layak hai, kyunki filmon me "truth serum" ko jaadu ki tarah dikhaya jaata hai. Science aur kanoon dono keh rahe hain: jhooth pakadne wali koi machine nahi hai, bas arousal naapne wali machines hain.'],

      ['h', 'Sports psychology'],
      ['list', [
        '<b>Imagery / visualization</b>: shot ya routine ko mann me detail me practice karna; research me physical practice ke saath milakar faydemand.',
        '<b>Self-talk</b> aur <b>pre-performance routines</b> (bowler ka run-up se pehle ka fixed ritual) focus aur arousal ko control karte hain.',
        '<b>Choking under pressure</b>: Sian Beilock ki research ke hisaab se pressure me experts apne automatic skills par zaroorat se zyada conscious dhyan dene lagte hain ("explicit monitoring"), jisse smooth performance toot jaati hai.',
        'Indian examples: 2011 World Cup jeetne wali Indian team ke saath mental conditioning coach Paddy Upton ne kaam kiya tha, aur Olympic gold medalist Abhinav Bindra ne apni taiyaari me mental training par khaas zor diya hai.'
      ]],

      ['h', 'Military aur selection: SSB'],
      ['p', 'India me Army, Navy aur Air Force ke officer selection ke liye <b>Services Selection Board (SSB)</b> interview me psychological tests ka bada hissa hota hai: <b>TAT</b> (tasveer dekh kar kahani), <b>Word Association Test</b> (shabd dekh kar turant sentence), <b>Situation Reaction Test</b> aur <b>Self Description</b>. In tests ko DRDO ke <b>Defence Institute of Psychological Research (DIPR)</b> jaise sansthaan develop aur research karte hain. Ye applied psychology ka seedha, high-stakes upyog hai.'],

      ['h', 'Educational psychology'],
      ['p', '<b>Bloom\'s taxonomy</b> (revised, 2001) seekhne ke 6 levels batati hai: <b>Remember → Understand → Apply → Analyze → Evaluate → Create</b>. Achhe sawaal sirf "yaad karo" tak nahi rukte. Is course ke quizzes me bhi kai sawaal "apply" level ke hain (real situation me concept pehchaanna). Saath hi <b>formative assessment</b> (seekhte waqt chhote checks), specific <b>feedback</b>, retrieval practice aur spacing (Chapter 3.5) classroom me sabse powerful tools me hain.'],
      ['terms', [
        ['I/O psychology', 'Workplace me behaviour, selection, training, motivation aur leadership ka study.'],
        ['Validity coefficient', 'Kisi test aur outcome (jaise job performance) ke beech correlation.'],
        ['Structured interview', 'Sab candidates se same sawaal aur tay scoring wala interview.'],
        ['Job characteristics model', 'Variety, identity, significance, autonomy, feedback wala kaam motivating hota hai.'],
        ['Psychological safety', 'Team me bina darr ke bolne aur galti maanne ka mahaul.'],
        ['Hawthorne effect', 'Observe kiye jaane se behaviour ka badalna (original studies vivaadit).'],
        ['Human factors', 'Systems aur products ko insaani kshamtaon ke hisaab se design karna.'],
        ['UX research', 'Users ko samajh kar products ko aasaan aur upyogi banane ki research.'],
        ['Health psychology', 'Sehat aur beemari me psychological factors ka study.'],
        ['Stages of change', 'Precontemplation, contemplation, preparation, action, maintenance.'],
        ['Health Belief Model', 'Khatre, fayde aur rukawaton ke ehsaas se health behaviour samajhna.'],
        ['Forensic psychology', 'Psychology ka kanoon aur nyay vyavastha me upyog.'],
        ['False confession', 'Bekasoor vyakti ka dabaav me jurm maan lena.'],
        ['Choking under pressure', 'Pressure me skilled performance ka girna.'],
        ['Imagery', 'Mann me performance ka detailed abhyaas.'],
        ['SSB', 'Services Selection Board: armed forces officer selection jisme psychological tests hote hain.'],
        ['Bloom\'s taxonomy', 'Seekhne ke levels: remember, understand, apply, analyze, evaluate, create.'],
        ['Formative assessment', 'Seekhte waqt progress jaanchne wale chhote assessments.']
      ]]
    ],
    outro: 'Aaj ka saar: structured tareeke gut feeling se behtar hain, behaviour stages me badalta hai, aur science aur kanoon dono narco tests par sawaal uthate hain. Quiz karo. Agle chapter me ek bada sawaal: kya psychology ke niyam har culture me sach hain?',
    takeaways: [
      'Hiring me structured interviews aur work samples gut feeling se kahin behtar; graphology bekaar.',
      'Psychological safety team effectiveness ka bada factor hai.',
      'Health behaviour stages me badalta hai; relapse normal hissa hai.',
      'India me Supreme Court ne bina marzi ke narco/polygraph tests ko asanvaidhanik kaha; science bhi inhe kamzor maanta hai.',
      'Sports me imagery, routines; education me Bloom\'s taxonomy aur retrieval practice; SSB me TAT jaise tests.'
    ],
    quiz: [
      ['Schmidt aur Hunter ke hisaab se kaunsa hiring method lagbhag zero validity rakhta hai?', ['Structured interview', 'Work sample test', 'Graphology (handwriting analysis)', 'General mental ability test'], 2, 'Graphology ki validity lagbhag 0.02 thi.'],
      ['Google ki Project Aristotle me effective teams ka sabse important factor?', ['Sabse smart log', 'Psychological safety', 'Bada budget', 'Lambe working hours'], 1, 'Bina darr ke bolne ka mahaul sabse important nikla.'],
      ['"Shayad chhod dena chahiye, par abhi nahi" kaunsa stage of change hai?', ['Precontemplation', 'Contemplation', 'Action', 'Maintenance'], 1, 'Soch rahe hain par abhi taiyaar nahi: contemplation.'],
      ['Selvi vs State of Karnataka (2010) me Supreme Court ne kya kaha?', ['Narco test hamesha allowed', 'Bina marzi ke narco, polygraph, brain mapping tests asanvaidhanik', 'Polygraph 100% accurate hai', 'Sirf police kar sakti hai'], 1, 'Article 20(3) aur 21 ka ullanghan maana gaya.'],
      ['Pressure me expert player ka apne automatic skill par zyada conscious dhyan dena kis cheez ki wajah banta hai?', ['Flow', 'Choking', 'Social loafing', 'Imagery'], 1, 'Explicit monitoring se choking hoti hai (Beilock).'],
      ['Bloom\'s taxonomy (revised) ka sabse upar ka level?', ['Remember', 'Apply', 'Evaluate', 'Create'], 3, 'Remember se Create tak; Create sabse upar.'],
      ['SSB me kaunsa psychological test hota hai?', ['MMPI', 'Thematic Apperception Test (TAT)', 'IQ ka koi test nahi', 'Rorschach'], 1, 'TAT, WAT, SRT aur Self Description SSB psych tests hain.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 13: Industrial-Organizational Psychology', OS(13), 'book'],
      ['The Design of Everyday Things (Don Norman)', GR('The Design of Everyday Things'), 'book'],
      ['Choke (Sian Beilock)', GR('Choke Sian Beilock'), 'book']
    ]
  });
})();
