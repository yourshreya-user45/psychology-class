/* Level 4 (part 2) · Development & Personality */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 4.4 */
  C({
    id: 'child-development', level: 4, mins: 20, visual: 'piaget',
    visualCap: 'Piaget ke chaar cognitive stages ek seedhi ki tarah. Har step par tap karo: umar, kya seekhte hain, aur ek classic test.',
    title: 'Bachpan ka development',
    tag: 'Garbh se school tak: Piaget, Vygotsky, theory of mind, attachment, parenting styles aur temperament',
    hook: 'Ek naya paida hua bachcha theek se dekh nahi pata, bol nahi pata, chal nahi pata. Paanch saal baad wahi bachcha kahaniyan sunata hai, chhota-mota jhooth bolna seekh chuka hai, aur aapka mood padh leta hai ki aaj chocolate maangna safe hai ya nahi. Ye <b>developmental psychology</b> ka jaadu hai.',
    blocks: [
      ['h', 'Development ke bade sawaal aur research ke tareeke'],
      ['list', [
        '<b>Nature vs nurture</b>: genes kitna, mahaul kitna? (Jawab: dono, interact karke.)',
        '<b>Continuity vs stages</b>: development dheere-dheere chadhai jaisa hai ya seedhi ke steps jaisa?',
        '<b>Stability vs change</b>: bachpan ka shy bachcha bada hokar bhi shy rahega?'
      ]],
      ['compare', ['Cross-sectional study', 'Ek hi samay par alag-alag umar ke logon ki tulna (5, 10, 15 saal). Jaldi aur sasta, par umar ke farak me "generation" ka farak bhi mil jaata hai.'], ['Longitudinal study', 'Ek hi group ko saalon tak follow karna. Asli development dikhata hai, par mehenga aur log beech me chhod dete hain.']],

      ['h', 'Garbh aur janam'],
      ['p', 'Garbh ke 9 mahine teen phase me: <b>zygote</b> (pehle 2 hafte), <b>embryo</b> (2-8 hafte, organs bante hain) aur <b>fetus</b> (9 hafte se janam tak). Is samay <b>teratogens</b> (nuksaan pahunchane wali cheezein) khaas taur par khatarnak hain: sharaab (fetal alcohol spectrum disorder), smoking, kuch dawaiyan, aur infections jaise rubella. Maa ka poshan, khaas kar <b>folic acid</b>, brain aur reedh ki haddi ke defects rokne me madad karta hai.'],
      ['p', 'Navjaat bachche "khaali" nahi hote. Unke paas <b>reflexes</b> hote hain: gaal chhoone par us taraf muh mudna (rooting), chusna, ungli pakadna (grasping), aur tez awaaz par haath phailana (Moro reflex). Wo chehron ko doosri cheezon se zyada dekhte hain aur maa ki awaaz pehchaante hain. Researchers <b>habituation</b> method use karte hain: bachcha naye stimulus ko zyada der dekhta hai, purane se bore ho jaata hai, isse pata chalta hai wo farak samajhta hai ya nahi.'],
      ['p', 'Motor development ek tay kram me hota hai (sar sambhalna → baithna ~6 mahine → ghutno par chalna ~8-10 mahine → chalna ~12 mahine), kyunki ye <b>maturation</b> (biological taiyaari) par depend karta hai. Exact umar me kaafi farak normal hai.'],

      ['h', 'Piaget: bachche chhote scientist hain'],
      ['p', 'Swiss psychologist <b>Jean Piaget</b> ne dekha ki bachche adults ka "chhota version" nahi hain; wo <b>alag tarah se</b> sochte hain. Bachche duniya ko samajhne ke liye <b>schemas</b> (mental frameworks) banate hain. Nayi information ko purane schema me fit karna <b>assimilation</b> hai (har char pair wale janwar ko "doggy" kehna), aur schema ko badalna <b>accommodation</b> (seekhna ki gaay alag hai).'],
      ['table', ['Stage', 'Umar (approx.)', 'Kya hota hai', 'Classic example'], [
        ['Sensorimotor', '0-2 saal', 'Senses aur actions se duniya samajhna. <b>Object permanence</b>: cheez chhup jaaye to bhi hai', 'Khilona kapde ke neeche chhupao: 8 mahine se pehle bachcha dhoondhta hi nahi'],
        ['Preoperational', '2-7 saal', 'Shabd aur symbols (pretend play), par logic kamzor. <b>Egocentrism</b>, <b>animism</b>, conservation nahi', 'Lambe patle glass me lassi "zyada" lagti hai'],
        ['Concrete operational', '7-11 saal', 'Concrete cheezon par logic, <b>conservation</b>, reversibility, categories', 'Samajhta hai ki glass badalne se lassi utni hi rehti hai'],
        ['Formal operational', '12+ saal', '<b>Abstract</b> aur hypothetical soch, "agar-to" reasoning', '"Agar insaanon ke pankh hote to sheher kaise hote?"']
      ]],
      ['ex', 'Lassi ke do glass (conservation)', 'Do same glass me barabar lassi daalo; 4 saal ka bachcha maanta hai dono barabar. Ab ek glass ki lassi bachche ke saamne lambe-patle glass me daalo. Wo kahega "is me zyada hai!", kyunki wo sirf oonchai (ek dimension) par dhyan deta hai. 7-8 saal ka bachcha hansega: "Arre, wahi lassi hai, bas glass lamba hai."'],
      ['ex', '"Chanda mama hamare saath chal raha hai!"', 'Raat me car se jaate hue bachcha kehta hai chand uske saath chal raha hai, ya gudiya ko chot lagi to wo ro rahi hai. Ye <b>animism</b> hai: nirjeev cheezon me jaan aur feelings maanna. Aur jab bachcha phone par dadi ko sar hilaa kar "haan" bolta hai, ye <b>egocentrism</b> hai: wo samajh nahi pata ki dadi use dekh nahi sakti.'],
      ['p', '<b>Aalochana</b>: baad ki research (jaise Renée Baillargeon ki "violation of expectation" studies) me 3-4 mahine ke bachche bhi chhupi cheez ke baare me "hairaan" dikhe, yaani Piaget ne bachchon ki kshamta <b>kam aanki</b>. Stages bhi utne sakht nahi jitne Piaget ne kahe, aur culture/schooling ka bada asar hai. Phir bhi unka core idea, ki bachche active learner hain, education ki neev hai.'],

      ['h', 'Vygotsky: seekhna saath milkar'],
      ['p', 'Russian psychologist <b>Lev Vygotsky</b> ne kaha ki bachche akele scientist nahi, <b>samajik</b> learner hain: parents, teachers aur bade bachche unhe aage badhate hain. Unka sabse mashhoor concept hai <b>Zone of Proximal Development (ZPD)</b>: wo kaam jo bachcha <b>akele nahi</b> kar sakta par <b>madad se</b> kar sakta hai. Us zone me di gayi temporary madad ko <b>scaffolding</b> kehte hain.'],
      ['ex', 'Papa aur cycle', 'Pehle papa seat pakad kar chalte hain (scaffolding). Bachcha balance seekhne lagta hai to papa pakad dheeli karte hain, phir chupke se chhod dete hain, aur bachcha khud chala raha hota hai. Akele cycle chalana uske ZPD me tha: na itna aasaan ki madad bekaar ho, na itna mushkil ki madad se bhi na ho.'],
      ['p', 'Vygotsky ne <b>private speech</b> (bachchon ka khud se bolna, "pehle laal block, phir neela") ko soch ka zaroori tool maana, jo badhte-badhte andar ki awaaz ban jaata hai.'],

      ['h', 'Theory of mind: doosron ke mann ko samajhna'],
      ['case', 'Sally-Anne false-belief test', 'Bachche ko kahani dikhayi jaati hai: Sally apni marble tokri me rakh kar bahar jaati hai. Anne marble ko dabbe me rakh deti hai. Sally wapas aati hai. "Sally marble kahan dhoondhegi?" 3 saal ke zyada tar bachche kehte hain "dabbe me" (jahan marble asal me hai). 4-5 saal ke bachche samajhte hain ki Sally ko badlaav nahi pata, to wo <b>tokri</b> me dhoondhegi. Doosron ke vichaar aur vishwas hamare se alag ho sakte hain, ye samajh <b>theory of mind</b> hai. Isi umar me bachche chhupan-chhupai me better aur jhooth bolne me "smart" ho jaate hain.'],

      ['h', 'Attachment: pyaar ki neev'],
      ['case', 'Harlow ke bandar (1958)', 'Harry Harlow ne bandar ke bachchon ko do nakli "maa" di: ek taar ki bani jisme doodh ki bottle thi, aur ek mulayam kapde ki bina doodh ke. Bachche doodh ke liye taar wali ke paas jaate, par <b>zyada tar samay kapde wali maa se chipke rehte</b>, aur darne par usi ke paas bhaagte. Isse dikha ki attachment sirf khane ke liye nahi, <b>contact comfort</b> (sparsh aur suraksha) ke liye hai. (Ye research aaj gambhir ethical sawaal uthati hai.)'],
      ['p', 'John <b>Bowlby</b> ne kaha ki attachment evolution se bana system hai jo bachche ko apne caregiver ke paas aur suraksha me rakhta hai. ~6-8 mahine me <b>stranger anxiety</b> aur <b>separation anxiety</b> shuru hoti hai. Mary <b>Ainsworth</b> ke "Strange Situation" test (1978) me bachche ko maa ke saath, phir ajnabi ke saath, phir akela chhoda gaya, aur maa ke lautne par uska reaction dekha gaya:'],
      ['table', ['Attachment style', 'Maa ke jaane par', 'Maa ke lautne par', 'Caregiver aam taur par'], [
        ['Secure (sabse common)', 'Pareshaan', 'Turant sukoon, phir khelne lagta hai', 'Sensitive, responsive'],
        ['Insecure-avoidant', 'Zyada farak nahi dikhata', 'Ignore ya door rehta hai', 'Door ya rejecting'],
        ['Insecure-resistant (ambivalent)', 'Bahut pareshaan', 'Chipakta bhi hai aur gussa bhi; shant nahi hota', 'Kabhi responsive, kabhi nahi'],
        ['Disorganized (baad me joda gaya)', 'Confused, ajeeb behaviour', 'Darr aur paas aane ka mix', 'Kabhi-kabhi darawne ya traumatic']
      ]],
      ['p', 'Research dikhati hai ki bachche <b>kai attachment figures</b> ke saath secure ho sakte hain: maa, papa, dadi-nani, bade bhai-behen. India ke joint families me ye aam hai, aur ye bachche ke liye suraksha ka bada jaal ban sakta hai.'],

      ['h', 'Parenting styles'],
      ['p', 'Diana <b>Baumrind</b> (1960s) ne warmth (pyaar) aur control (niyam) ke aadhar par parenting styles batayi; baad me Maccoby aur Martin ne chautha joda:'],
      ['table', ['Style', 'Warmth', 'Niyam', 'Kaisa lagta hai', 'Bachchon me aam taur par (Western research)'], [
        ['Authoritative', 'High', 'High', '"Raat 10 baje tak ghar, kyunki tumhari safety zaroori hai. Kuch special ho to baat karte hain."', 'Self-confidence, behtar padhai, achhe social skills'],
        ['Authoritarian', 'Low', 'High', '"Kyunki maine kaha! Bahas nahi."', 'Obedient par kam self-esteem, anxiety'],
        ['Permissive', 'High', 'Low', '"Jo mann kare karo beta."', 'Impulsive, kam self-control'],
        ['Neglectful', 'Low', 'Low', 'Parent ka dhyan hi nahi', 'Sabse zyada problems']
      ]],
      ['note', 'Culture matter karta hai. Kuch research (jaise Ruth Chao, 1994) dikhati hai ki kai Asian families me sakht niyam aur oonchi expectations ko bachche <b>parwah aur pyaar</b> ke roop me dekhte hain, isliye "authoritarian" ka asar utna bura nahi dikhta jitna Western samples me. Phir bhi warmth har culture me zaroori hai: niyam + pyaar ka mel sabse achha nateeja deta hai.'],
      ['p', '<b>Temperament</b>: bachche janam se alag hote hain. Thomas aur Chess (1977) ne bachchon ko teen broad groups me dekha: <b>easy</b> (~40%: khush, routine wale), <b>difficult</b> (~10%: chidchide, zyada rona) aur <b>slow-to-warm-up</b> (~15%: naye mahaul me dheere ghulne wale); baaki mixed. Achhi parenting temperament se "fit" hone wali hoti hai, sab bachchon ke liye ek hi formula nahi.'],
      ['terms', [
        ['Cross-sectional study', 'Ek samay par alag umar ke groups ki tulna.'],
        ['Longitudinal study', 'Ek hi group ko lambe samay tak follow karna.'],
        ['Teratogen', 'Garbh me bachche ko nuksaan pahunchane wala padarth ya infection.'],
        ['Habituation', 'Baar-baar same stimulus par response ka kam hona; infant research me upyogi.'],
        ['Maturation', 'Biological growth jo tay kram me kshamtaayein laati hai.'],
        ['Schema', 'Duniya ko samajhne ka mental framework.'],
        ['Assimilation', 'Nayi information ko purane schema me fit karna.'],
        ['Accommodation', 'Nayi information ke hisaab se schema ko badalna.'],
        ['Object permanence', 'Samajh ki cheez dikh na rahi ho tab bhi maujood hai.'],
        ['Egocentrism', 'Doosron ka nazariya na samajh paana (Piaget ke sense me).'],
        ['Animism', 'Nirjeev cheezon me jaan aur feelings maanna.'],
        ['Conservation', 'Shape badalne par bhi quantity same rehne ki samajh.'],
        ['Zone of proximal development', 'Wo kaam jo bachcha madad se kar sake par akele nahi.'],
        ['Scaffolding', 'ZPD me di jaane wali temporary madad jo dheere-dheere hataayi jaati hai.'],
        ['Theory of mind', 'Ye samajh ki doosron ke vichaar aur vishwas hamse alag ho sakte hain.'],
        ['Attachment', 'Bachche aur caregiver ke beech gehra emotional bandhan.'],
        ['Contact comfort', 'Sparsh se milne wala sukoon jo attachment ke liye zaroori hai (Harlow).'],
        ['Strange Situation', 'Ainsworth ka test jo attachment style naapta hai.'],
        ['Secure attachment', 'Caregiver ko suraksha ka aadhar maan kar duniya explore karna.'],
        ['Authoritative parenting', 'Pyaar aur saaf niyamon ka santulan.'],
        ['Authoritarian parenting', 'Sakht niyam, kam warmth, bina explanation ke.'],
        ['Permissive parenting', 'Bahut pyaar, par kam niyam.'],
        ['Temperament', 'Janmajaat emotional aur behavioural style.']
      ]]
    ],
    takeaways: [
      'Development nature aur nurture ke interaction se hota hai; longitudinal studies asli badlav dikhati hain.',
      'Piaget: sensorimotor, preoperational, concrete, formal; bachche active learner hain (par Piaget ne unhe kam aanka).',
      'Vygotsky: ZPD aur scaffolding; seekhna samajik hai.',
      'Theory of mind ~4-5 saal me aati hai (Sally-Anne test).',
      'Secure attachment sensitive care se banti hai; authoritative (pyaar + niyam) parenting aam taur par best, culture ka dhyan rakhte hue.'
    ],
    quiz: [
      ['Khilona chhupane par bachcha use dhoondhne lage, ye kis samajh ka sign hai?', ['Conservation', 'Object permanence', 'Theory of mind', 'Egocentrism'], 1, 'Cheez dikh na rahi ho tab bhi maujood hai: object permanence.'],
      ['Lambe glass me lassi ko "zyada" maanna kis stage ki khaasiyat hai?', ['Sensorimotor', 'Preoperational', 'Concrete operational', 'Formal operational'], 1, 'Preoperational bachche conservation nahi samajhte.'],
      ['Jo kaam bachcha madad se kar sake par akele nahi, use Vygotsky kya kehte hain?', ['Schema', 'Zone of proximal development', 'Object permanence', 'Assimilation'], 1, 'ZPD me scaffolding se seekhna sabse effective hai.'],
      ['Harlow ke bandar zyada samay kis maa ke saath rehte the?', ['Taar wali jisme doodh tha', 'Mulayam kapde wali', 'Dono ke saath barabar', 'Kisi ke saath nahi'], 1, 'Contact comfort attachment ke liye khane se zyada important nikla.'],
      ['Maa ke lautne par jo bachcha turant sukoon paakar phir khelne lagta hai, uska attachment style?', ['Avoidant', 'Resistant', 'Secure', 'Disorganized'], 2, 'Secure attachment me caregiver "safe base" hota hai.'],
      ['Pyaar + saaf niyam + explanation wala parenting style?', ['Authoritarian', 'Permissive', 'Authoritative', 'Neglectful'], 2, 'Authoritative style warmth aur structure dono deta hai.'],
      ['Sally-Anne test kya naapta hai?', ['Object permanence', 'Theory of mind', 'Conservation', 'Attachment'], 1, 'Ye false-belief test hai: doosre ka vishwas hamari jaankari se alag ho sakta hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 9: Lifespan Development', OS(9), 'book'],
      ['Crash Course Psychology: The Growth of Knowledge (Piaget)', YT('Crash Course Psychology growth of knowledge Piaget'), 'video'],
      ['Harvard Center on the Developing Child · free resources', 'https://developingchild.harvard.edu', 'link']
    ]
  });

  /* 4.5 */
  C({
    id: 'adolescence-adulthood', level: 4, mins: 18, visual: 'erikson',
    visualCap: 'Erikson ke 8 psychosocial stages: har umar ka ek "sawaal" (crisis). Dot zindagi ke safar par chalta hai; kisi bhi stage par tap karo.',
    title: 'Teenage se budhape tak',
    tag: 'Puberty, teen brain, Erikson, identity, moral development (Kohlberg aur Indian research), adulthood, aging aur grief',
    hook: '13 se 19 ki umar: body badalti hai, dost sab kuch ban jaate hain, aur sabse bada sawaal hota hai <b>"main kaun hoon?"</b> Aur development 18 par khatam nahi hota. 30, 50 aur 80 ki umar me bhi insaan badalta, seekhta aur naye sawaalon se jhoojhta hai.',
    blocks: [
      ['h', 'Puberty aur teen brain'],
      ['p', '<b>Puberty</b> me hormones (testosterone, estrogen) body ko badalte hain: height ka tezi se badhna, voice, body hair, periods. Puberty ka time har bachche me alag hota hai. Research me <b>jaldi mature hone wali ladkiyon</b> me teasing, body image problems aur depression ka risk zyada dikha hai; ladkon me jaldi maturity ke mixed asar hain.'],
      ['p', 'Teen brain ki khaas baat: <b>limbic system</b> (reward, emotion) puberty ke saath jaldi tez hota hai, par <b>prefrontal cortex</b> (planning, brake) mid-20s tak develop hota rehta hai. Saath me <b>synaptic pruning</b> ("use it or lose it": kam use hone wale connections hataana) aur <b>myelination</b> (signals tez karna) chalta hai.'],
      ['case', 'Doston ke saamne risk (Gardner aur Steinberg, 2005)', 'Teenagers, young adults aur adults ne ek driving video game khela jisme yellow light par rukna ya risk lena tha. Akele khelte waqt teenagers ka risk adults jitna hi tha. Par jab <b>dost dekh rahe the</b>, teenagers ne lagbhag <b>double risk</b> liya, jabki adults par khaas asar nahi pada. Teen brain me doston ki maujoodgi reward system ko "on" kar deti hai.'],

      ['h', 'Erikson ke 8 psychosocial stages'],
      ['p', 'Psychoanalyst <b>Erik Erikson</b> ne Freud ke idea ko poori zindagi tak failaya. Har stage me ek <b>psychosocial crisis</b> (do vikalpon ke beech tension) hai. Achha samadhan ek strength ya <b>virtue</b> deta hai:'],
      ['table', ['Umar', 'Crisis', 'Virtue', 'Real example'], [
        ['0-1', 'Trust vs mistrust', 'Hope', 'Rone par koi aata hai to bachcha duniya par bharosa seekhta hai'],
        ['1-3', 'Autonomy vs shame/doubt', 'Will', '"Main khud khaunga!" Khud karne dena vs har baar daantna'],
        ['3-6', 'Initiative vs guilt', 'Purpose', 'Khel me naye idea, sawaal; har sawaal par "chup raho" se guilt'],
        ['6-12', 'Industry vs inferiority', 'Competence', 'School, skills, doosron se tulna'],
        ['12-18', 'Identity vs role confusion', 'Fidelity', '"Main kaun hoon? Kya banunga?"'],
        ['18-40', 'Intimacy vs isolation', 'Love', 'Gehre rishte, dosti, partner'],
        ['40-65', 'Generativity vs stagnation', 'Care', 'Agli peedhi ke liye kuch karna: bachche, students, samaaj'],
        ['65+', 'Integrity vs despair', 'Wisdom', 'Zindagi ko dekh kar santosh ya pachhtava']
      ]],

      ['h', 'Identity: "main kaun hoon?"'],
      ['p', 'James <b>Marcia</b> ne Erikson ke identity idea ko do sawaalon se naapa: kya vyakti ne options <b>explore</b> kiye? Aur kya usne kisi cheez par <b>commit</b> kiya?'],
      ['table', ['Status', 'Exploration', 'Commitment', 'Indian example'], [
        ['Identity diffusion', 'Nahi', 'Nahi', '"Pata nahi, jo hoga dekha jaayega." Na soch rahe, na chun rahe.'],
        ['Foreclosure', 'Nahi', 'Haan', '"Papa ne kaha engineering, to engineering." Bina explore kiye kisi aur ka chuna raasta.'],
        ['Moratorium', 'Haan', 'Abhi nahi', 'Gap year, internships, alag courses try karna; confusion par sakriya talaash.'],
        ['Identity achievement', 'Haan', 'Haan', 'Explore karke khud chuna: "Maine design aur coding dono try kiye; UX design mera raasta hai."']
      ]],
      ['p', 'Foreclosure hamesha bura nahi: agar parivaar ka chuna raasta vyakti ko sach me pasand ho. Problem tab hai jab exploration ka mauka hi na mile aur 30 ki umar me "ye meri zindagi nahi" wala ehsaas aaye.'],

      ['h', 'Moral development: sahi-galat ki samajh'],
      ['p', 'Lawrence <b>Kohlberg</b> ne logon ko moral dilemmas diye, jaise <b>Heinz dilemma</b>: Heinz ki patni marne wali hai, ek dawai se bach sakti hai, par dawai wala 10 guna daam maang raha hai. Kya Heinz ko dawai churani chahiye? Kohlberg ne jawab (haan/na) se zyada <b>reasoning</b> par dhyan diya:'],
      ['steps', [
        ['Preconventional (bachpan)', 'Saza se bachna aur apna fayda. "Nahi churana chahiye, jail ho jaayegi." / "Churana chahiye, patni khana banati hai."'],
        ['Conventional (zyada tar teens aur adults)', 'Achha insaan dikhna aur niyam-kanoon. "Achha pati patni ko bachata hai." / "Kanoon todna galat hai, warna samaaj bikhar jaayega."'],
        ['Postconventional (kuch log)', 'Social contract aur universal principles. "Jeevan ka adhikaar property ke adhikaar se upar hai."']
      ]],
      ['p', '<b>Aalochana</b>: Carol <b>Gilligan</b> ne kaha ki Kohlberg ki theory "justice" par zyada aur "care" (rishton aur zimmedari) par kam dhyan deti hai. Aur culture: Joan <b>Miller</b> ki research (1990s) me <b>Indian Hindu</b> participants ne doosron ki madad karne (jaise kisi ko zaroori madad dena) ko <b>naitik kartavya</b> maana, jabki American participants ne ise zyada tar personal choice samjha. Duty-based morality Kohlberg ke scale par "neeche" dikhti thi, par asal me ek alag, sophisticated naitik soch hai.'],

      ['h', 'Adulthood'],
      ['p', 'Psychologist Jeffrey Arnett ne 18 se ~25 ki umar ko <b>emerging adulthood</b> kaha: padhai lambi, shaadi aur naukri der se, aur "na bachcha, na poora adult" wala ehsaas. India me ye phase aksar parivaar ke saath rehte hue guzarta hai, jo alag challenges aur support dono deta hai.'],
      ['list', [
        '<b>Physical</b>: 20s me physical peak; 40s-50s me dheere badlav (mahilaon me menopause ~45-55).',
        '<b>Cognitive</b>: fluid intelligence dheere ghatti hai, crystallized (gyaan, vocabulary, judgement) badhti hai (Chapter 3.8).',
        '<b>Midlife crisis</b>: popular culture me bahut, research me kam. Zyada tar log midlife me koi dramatic crisis nahi jhelte; badlav aam taur par specific ghatnaon (naukri, talaak, beemari) se aate hain.',
        '<b>Social clock</b>: samaaj ki ummeed ki kab padhai khatam, kab shaadi, kab bachche. Is "ghadi" se peeche hone ka dabaav India me khaas taur par mehsoos hota hai.'
      ]],

      ['h', 'Budhapa: jitna socha utna bura nahi'],
      ['p', 'Laura Carstensen ki <b>socioemotional selectivity theory</b>: jab hum mehsoos karte hain ki samay seemit hai, hum <b>emotionally meaningful</b> rishton aur anubhavon ko chunte hain. Isliye bade-buzurg aksar chhote, gehre social circle rakhte hain aur research me unme <b>positivity effect</b> dikhta hai: negative ke mukable positive information par zyada dhyan aur yaad.'],
      ['myth', 'Budhapa matlab akelapan, udaasi aur dimaag ka kamzor hona.', 'Kai studies me older adults ne younger adults jitni ya zyada emotional well-being report ki. Memory ki kuch kami normal hai, par <b>dementia</b> normal aging nahi, ek beemari hai. Physical activity, social connection, naya seekhna aur BP-sugar control brain ko swasth rakhne me madad karte hain. India me joint families ke tootne aur bachchon ke shehar jaane se buzurgon ke akelepan ka risk badh raha hai; ye ek badi social challenge hai.'],

      ['h', 'Maut aur shok (grief)'],
      ['p', 'Elisabeth <b>Kübler-Ross</b> (1969) ne marte hue patients ke saath kaam karke 5 stages batayi: denial, anger, bargaining, depression, acceptance. Ye bahut popular hain, par research ke hisaab se log <b>tay kram me</b> in stages se nahi guzarte. George Bonanno ki research batati hai ki zyada tar log kisi apne ko khone ke baad <b>resilience</b> dikhate hain: dard hota hai, par dheere-dheere zindagi chalne lagti hai. Kuch logon ke liye shok lamba aur bahut takleefdeh hota hai (prolonged grief), jahan professional madad faydemand hai.'],
      ['p', 'Cultural rituals jaise terahvi, shraddh, ya kisi bhi dharm ke shok ke rivaaj samudaay ko saath laate hain, dukh ko vyakt karne ki jagah dete hain aur ek structure dete hain. Psychology ke nazariye se ye social support ke powerful roop hain.'],
      ['terms', [
        ['Puberty', 'Wo samay jab body sexually mature hoti hai.'],
        ['Synaptic pruning', 'Kam use hone wale neural connections ka hatna ("use it or lose it").'],
        ['Psychosocial stages', 'Erikson ke 8 stages, har ek me ek social-emotional crisis.'],
        ['Identity vs role confusion', 'Teenage ka crisis: apni pehchaan banana.'],
        ['Generativity', 'Agli peedhi aur samaaj ke liye kuch dene ki chinta (midlife).'],
        ['Identity diffusion', 'Na exploration, na commitment.'],
        ['Identity foreclosure', 'Bina explore kiye kisi aur ka chuna raasta apnana.'],
        ['Identity moratorium', 'Sakriya exploration, abhi commitment nahi.'],
        ['Identity achievement', 'Explore karke khud ki pehchaan par commit karna.'],
        ['Preconventional morality', 'Saza aur apne fayde par based naitik soch.'],
        ['Conventional morality', 'Social approval aur niyam-kanoon par based naitik soch.'],
        ['Postconventional morality', 'Universal principles aur social contract par based naitik soch.'],
        ['Emerging adulthood', '18-25 ki umar ka exploration wala phase (Arnett).'],
        ['Social clock', 'Life events ke liye samaaj ka tay kiya "sahi" samay.'],
        ['Socioemotional selectivity theory', 'Samay seemit lagne par emotionally meaningful cheezon ko chunna.'],
        ['Positivity effect', 'Older adults me positive information par zyada dhyan aur yaad.'],
        ['Dementia', 'Memory aur soch me itni kami ki rozmarra prabhavit ho; normal aging nahi.']
      ]]
    ],
    takeaways: [
      'Teen brain me reward system jaldi tez hota hai aur prefrontal brake der se; dost risk badhate hain.',
      'Erikson: 8 stages, har ek ka crisis; teenage me identity vs role confusion.',
      'Marcia: diffusion, foreclosure, moratorium, achievement (exploration + commitment).',
      'Kohlberg: pre-, conventional, post-conventional; Gilligan aur Indian research ne care aur duty ka nazariya joda.',
      'Budhapa aksar emotionally stable hota hai; grief ke stages tay kram me nahi, resilience sabse common.'
    ],
    quiz: [
      ['Teenagers ne doston ke saamne driving game me zyada risk liya. Ye kis research ka nateeja hai?', ['Gardner aur Steinberg', 'Harlow', 'Piaget', 'Ainsworth'], 0, 'Doston ki maujoodgi teen brain ke reward system ko activate karti hai.'],
      ['Erikson ke hisaab se teenage ka mukhya crisis?', ['Trust vs mistrust', 'Identity vs role confusion', 'Intimacy vs isolation', 'Integrity vs despair'], 1, 'Teenage me apni pehchaan banana sabse bada sawaal hai.'],
      ['"Papa ne kaha engineering, to bina soche engineering" Marcia ke hisaab se?', ['Diffusion', 'Foreclosure', 'Moratorium', 'Achievement'], 1, 'Commitment hai, par bina exploration ke: foreclosure.'],
      ['Kohlberg ki theory par Gilligan ki aalochana kya thi?', ['Ye bachchon par lagu nahi', 'Ye justice par zyada aur care par kam dhyan deti hai', 'Isme bahut stages hain', 'Ye sirf India ke liye hai'], 1, 'Gilligan ne care-based morality ko kam aanka jaana bataya.'],
      ['Midlife (40-65) me Erikson ka crisis?', ['Generativity vs stagnation', 'Industry vs inferiority', 'Autonomy vs shame', 'Initiative vs guilt'], 0, 'Agli peedhi ke liye kuch karne ki chinta: generativity.'],
      ['Grief ke Kübler-Ross stages ke baare me research kya kehti hai?', ['Sab log exact isi kram me guzarte hain', 'Log tay kram me nahi guzarte; resilience sabse common pattern hai', 'Sirf 2 stages hain', 'Grief kabhi khatam nahi hota'], 1, 'Stages popular hain par fixed sequence ka saboot nahi.']
    ],
    more: [
      ['OpenStax Psychology 2e · 9.4-9.5 Adolescence to Death', OS(9), 'book'],
      ['Crash Course Psychology: Adolescence', YT('Crash Course Psychology adolescence'), 'video'],
      ['Age of Opportunity (Laurence Steinberg) · teen brain par', GR('Age of Opportunity Steinberg'), 'book']
    ]
  });

  /* 4.6 */
  C({
    id: 'personality-psychodynamic', level: 4, mins: 18, visual: 'iceberg',
    visualCap: 'Freud ka iceberg: mind ka chhota hissa hi paani ke upar (conscious) hai. Id poori tarah neeche, ego aur superego teeno levels me phaile.',
    title: 'Personality: Freud se Rogers tak',
    tag: 'Id-ego-superego, defense mechanisms ("angoor khatte hain"), neo-Freudians, Rorschach, aur humanistic self',
    hook: 'Apne kisi dost ki personality batao: "masti-khor, thoda gussail, par dil ka achha". Ye shabd uske <b>consistent patterns</b> batate hain. Par ye patterns aate kahan se hain? Pehla bada jawab Vienna ke ek doctor ne diya, aur wo jawab aaj bhi utna hi charcha me hai jitna sau saal pehle tha.',
    blocks: [
      ['h', 'Personality kya hai?'],
      ['p', '<b>Personality</b> sochne, mehsoos karne aur behave karne ke wo <b>characteristic patterns</b> hain jo samay aur situations ke paar kaafi consistent rehte hain. Is chapter me do bade nazariye: <b>psychodynamic</b> (andar ke chhupe conflicts) aur <b>humanistic</b> (growth aur self). Agle chapter me traits aur measurement.'],

      ['h', 'Freud: mind ka iceberg'],
      ['p', '<b>Sigmund Freud</b> ke hisaab se mind ke teen levels hain: <b>conscious</b> (abhi jo soch rahe ho), <b>preconscious</b> (jo abhi dhyan me nahi par aasaani se yaad aa jaaye, jaise apna pin code), aur sabse bada <b>unconscious</b> (dabi ichchhayein, darr, yaadein jo seedhe pahunch me nahi par behaviour ko chalati hain).'],
      ['table', ['Hissa', 'Principle', 'Kya chahta hai'], [
        ['Id', 'Pleasure principle', 'Turant khushi, bina soche. Janam se maujood. "Abhi chahiye!"'],
        ['Ego', 'Reality principle', 'Id ki ichchha ko realistic tareeke se poora karna. Manager.'],
        ['Superego', 'Morality', 'Parents aur samaaj se seekhe niyam: "kya sahi, kya galat". Guilt yahin se.']
      ]],
      ['ex', 'Diet aur samosa', 'Shaam ko garam samose ki khushboo. <b>Id</b>: "4 samose abhi khaao!" <b>Superego</b>: "Tumne diet ka vaada kiya tha, sharam karo." <b>Ego</b>: "Ek samosa le lo, aur kal subah thoda zyada walk kar lena." Freud ke hisaab se ego ka kaam in dono ke beech santulan banana hai. Jab ye conflict bahut badh jaaye, to <b>anxiety</b> paida hoti hai.'],

      ['h', 'Defense mechanisms: ego ka bachav'],
      ['p', 'Anxiety se bachne ke liye ego unconscious tareeke apnata hai, jinhe Freud ki beti <b>Anna Freud</b> ne detail me samjhaya. Ye sab hum kabhi na kabhi karte hain:'],
      ['table', ['Mechanism', 'Kya hai', 'Example'], [
        ['Repression', 'Dard bhari yaad ko unconscious me dhakelna', 'Bachpan ki darawni ghatna ka "yaad na aana"'],
        ['Denial', 'Sach ko maanne se inkaar', '"Mujhe sharab ki koi problem nahi, main jab chahun chhod sakta hoon"'],
        ['Projection', 'Apni na-pasand feeling doosre par daalna', 'Khud jealous hone par kehna "wo mujhse jalta hai"'],
        ['Displacement', 'Gussa safe target par nikalna', 'Boss ne daanta, ghar aakar chhote bhai par chillana'],
        ['Rationalization', 'Galat kaam ya haar ke liye "achha" bahana', 'Lomdi aur angoor: "angoor khatte hain" (jo nahi mila wo achha hi nahi tha)'],
        ['Reaction formation', 'Asli feeling ka ulta dikhana', 'Kisi ko pasand karte hue uske saath bahut rukha behaviour'],
        ['Regression', 'Pichhli umar ke behaviour par lautna', 'Naye bhai ke aane par bade bachche ka phir se angootha chusna'],
        ['Sublimation', 'Unacceptable urge ko socially acceptable kaam me badalna', 'Gusse ko boxing ya sport me lagana']
      ]],
      ['p', 'Freud ke <b>psychosexual stages</b> (oral, anal, phallic, latency, genital) aur <b>Oedipus complex</b> jaise ideas aaj scientifically bahut kam support paate hain. Par defense mechanisms ka idea modern psychology me badle roop me upyogi maana jaata hai, aur kai therapists inhe pehchaanne me kaam me lete hain.'],

      ['h', 'Neo-Freudians: Freud ke shishya, alag raaste'],
      ['list', [
        '<b>Carl Jung</b>: personal unconscious ke alawa <b>collective unconscious</b>, yaani poori manav jaati ke saajha <b>archetypes</b> (hero, maa, shadow). Duniya bhar ki kahaniyon me milte-julte patterns isi ka udaharan maane gaye. Jung ne hi <b>introversion</b> aur <b>extraversion</b> shabd diye.',
        '<b>Alfred Adler</b>: sex nahi, <b>inferiority</b> (kamtar hone ka ehsaas) aur uspar jeetne ki koshish (striving for superiority) personality chalati hai. "Inferiority complex" unka shabd hai. (Birth order ke unke ideas ko research me kamzor support mila.)',
        '<b>Karen Horney</b>: bachpan me suraksha ki kami se <b>basic anxiety</b>. Unhone Freud ke "penis envy" idea ko culture ka bias bataya aur kaha ki mahilaon ki "envy" asal me purushon ki social power ki hai.',
        '<b>Erik Erikson</b>: psychosocial stages (pichhla chapter).'
      ]],

      ['h', 'Freud ko kaise judge karein?'],
      ['compare', ['Kamzoriyan', ['Theories <b>falsify</b> nahi ho sakti: koi bhi behaviour "sahi" saabit karta hai.', 'Zyada tar 1900s ke Vienna ke ameer, zyada tar mahila patients ke case studies par based.', 'Sex aur bachpan par zaroorat se zyada zor; samaaj aur culture par kam.']], ['Yogdaan', ['Unconscious processes ka idea: aaj cognitive psychology me implicit memory aur priming ke roop me.', 'Bachpan ke anubhavon ka mahatva.', '<b>Talk therapy</b> ki shuruaat. Modern psychodynamic therapy ke liye research me positive evidence bhi mila hai.']]],

      ['h', 'Projective tests: inkblots me kya dikhta hai?'],
      ['p', 'Psychodynamic soch se <b>projective tests</b> nikle: ambiguous cheez dikhao, aur vyakti apne chhupe vichaar usme "project" karega. <b>Rorschach test</b> (1921) me 10 symmetric inkblots dikhaye jaate hain. <b>Thematic Apperception Test (TAT)</b> me dhundhli tasveerein dikhakar kahani banwayi jaati hai. India me <b>Uma Chowdhury</b> ne 1960 me TAT ka Indian adaptation banaya taaki tasveerein Indian context se mel khaayein.'],
      ['vis', 'inkblot', 'Ek naya symmetric "inkblot" banta hai. Aapko kya dikhta hai? (Ye asli Rorschach card nahi, sirf demo hai.)'],
      ['note', 'Projective tests ki <b>reliability</b> aur <b>validity</b> par lambe samay se sawaal hain: alag-alag examiners ek hi jawab ko alag tarah interpret kar sakte hain. Kuch scoring systems (jaise Rorschach ka R-PAS) ne isko sudharne ki koshish ki hai, par aaj zyada tar psychologists inhe akele diagnosis ke liye use nahi karte.'],

      ['h', 'Humanistic psychology: insaan achha aur badhne wala hai'],
      ['p', '1950-60s me <b>Abraham Maslow</b> aur <b>Carl Rogers</b> ne Freud ke "beemar insaan" wale nazariye ke ulat kaha ki insaan me <b>growth aur self-actualization</b> ki prakritik ichchha hai, jaise beej me ped banne ki. Maslow ne Abraham Lincoln aur Eleanor Roosevelt jaise logon ka study karke self-actualized logon ki khaasiyatein batayi: khud ko aur doosron ko accept karna, spontaneity, kisi mission par focus, gehre par kam rishte, aur "peak experiences".'],
      ['p', '<b>Carl Rogers</b> ka core concept <b>self-concept</b> hai: "main kaun hoon" ki apni tasveer. Jab <b>real self</b> (jo main hoon) aur <b>ideal self</b> (jo mujhe hona chahiye) me bahut doori ho (<b>incongruence</b>), to anxiety aur dukh aata hai.'],
      ['list', [
        '<b>Conditions of worth</b>: jab pyaar sharton par mile ("topper ho to hi achhe bachche ho"), bachcha apni asli feelings chhupa kar sirf "accept hone wala" self dikhata hai.',
        '<b>Unconditional positive regard</b>: insaan ko jaisa hai waisa accept karna (behaviour sudharne ki baat karte hue bhi). Rogers ke hisaab se ye growth ki zameen hai.',
        'Rogers ki <b>client-centered therapy</b> me therapist ke teen gun: <b>genuineness</b> (asli hona), <b>unconditional positive regard</b>, aur <b>empathy</b> (sach me samajhna). Ye aaj har tarah ki counselling ki neev hai.'
      ]],
      ['ex', '"Topper ho to hi achhe beta ho"', 'Aarav ko bachpan se lagta tha ki parents ka pyaar marks par tika hai. Ab 22 ki umar me har chhoti galti par wo khud ko "nakaam" kehta hai aur naya kuch try karne se darta hai. Rogers ke shabdon me uske andar <b>conditions of worth</b> baith gayi hain. Parents ka ye kehna ki "humein tumhari mehnat par garv hai, marks jo bhi aayein, tum hamare liye keemti ho" bachche ki self-worth ko marks se alag karta hai.'],
      ['p', '<b>Humanistic approach ki aalochana</b>: concepts vague aur naapne me mushkil, insaan ki buraiyon ko kam aankta hai, aur "khud ko dhoondho" wala individualism har culture me fit nahi baithta. Phir bhi iska asar counselling, education aur positive psychology (Level 7) me gehra hai.'],
      ['terms', [
        ['Personality', 'Sochne, mehsoos karne aur behave karne ke consistent patterns.'],
        ['Unconscious', 'Mind ka wo hissa jo seedhe pahunch me nahi par behaviour ko prabhavit karta hai (Freud).'],
        ['Preconscious', 'Jo abhi dhyan me nahi par aasaani se yaad aa sake.'],
        ['Id', 'Freud ke model me turant khushi chahne wala, pleasure principle par chalne wala hissa.'],
        ['Ego', 'Reality principle par chalne wala hissa jo id aur superego ke beech santulan banata hai.'],
        ['Superego', 'Seekhe hue naitik niyamon ka hissa; guilt ka srot.'],
        ['Defense mechanisms', 'Anxiety se bachne ke liye ego ke unconscious tareeke.'],
        ['Repression', 'Dard bhari yaadon ko unconscious me dhakelna.'],
        ['Projection', 'Apni na-pasand feelings ko doosron me dekhna.'],
        ['Displacement', 'Feelings ko asli target se hata kar safe target par nikalna.'],
        ['Rationalization', 'Galat kaam ya haar ke liye tark-sangat dikhne wale bahane banana.'],
        ['Reaction formation', 'Asli feeling ka bilkul ulta behaviour dikhana.'],
        ['Sublimation', 'Unacceptable urge ko acceptable, upyogi kaam me badalna.'],
        ['Collective unconscious', 'Jung ke hisaab se manav jaati ka saajha unconscious jisme archetypes hain.'],
        ['Inferiority complex', 'Kamtar hone ka gehra ehsaas (Adler).'],
        ['Projective test', 'Ambiguous stimuli par response se personality samajhne wala test (Rorschach, TAT).'],
        ['Self-concept', 'Apne baare me apni samajh aur tasveer.'],
        ['Unconditional positive regard', 'Bina sharton ke kisi ko accept aur value karna.'],
        ['Conditions of worth', 'Sharton par mila pyaar ya approval, jo self-concept ko bigaad sakta hai.'],
        ['Congruence', 'Real self aur ideal self ke beech mel.']
      ]]
    ],
    takeaways: [
      'Freud: conscious, preconscious, unconscious; id (khushi), ego (reality), superego (morality).',
      'Defense mechanisms anxiety se bachate hain: projection, displacement, rationalization ("angoor khatte").',
      'Neo-Freudians: Jung (collective unconscious), Adler (inferiority), Horney (basic anxiety).',
      'Freud ki theories falsify karna mushkil, par unconscious aur talk therapy ka yogdaan bada.',
      'Rogers: self-concept, conditions of worth, aur unconditional positive regard growth ki zameen hai.'
    ],
    quiz: [
      ['Freud ke hisaab se "pleasure principle" par kaun chalta hai?', ['Ego', 'Superego', 'Id', 'Self-concept'], 2, 'Id turant khushi chahta hai.'],
      ['Boss ki daant ke baad ghar aakar bhai par chillana kaunsa defense mechanism hai?', ['Projection', 'Displacement', 'Sublimation', 'Denial'], 1, 'Gussa safe target par shift hua: displacement.'],
      ['Lomdi ka "angoor khatte hain" kehna kaunsa defense mechanism hai?', ['Rationalization', 'Regression', 'Repression', 'Reaction formation'], 0, 'Na milne wali cheez ko "bekaar" bata kar khud ko samjhana rationalization hai.'],
      ['Collective unconscious aur archetypes ka idea kisne diya?', ['Adler', 'Jung', 'Horney', 'Rogers'], 1, 'Carl Jung ne saajha unconscious aur archetypes ki baat ki.'],
      ['Carl Rogers ke hisaab se growth ke liye kya zaroori hai?', ['Sakht saza', 'Unconditional positive regard', 'Superego ka mazboot hona', 'Dreams ka analysis'], 1, 'Bina sharton ke acceptance se self-concept healthy banta hai.'],
      ['Freud ki theories ki sabse badi scientific aalochana kya hai?', ['Wo bahut nayi hain', 'Unhe falsify (test karke galat saabit) karna mushkil hai', 'Wo sirf animals par hain', 'Unme koi theory nahi'], 1, 'Koi bhi behaviour theory ko "confirm" kar deta hai, isliye test karna mushkil.'],
      ['TAT ka Indian adaptation kisne banaya?', ['N.N. Sengupta', 'Uma Chowdhury', 'Durganand Sinha', 'V.V. Kamat'], 1, 'Uma Chowdhury ne 1960 me Indian TAT banaya.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 11: Personality', OS(11), 'book'],
      ['Crash Course Psychology: Measuring Personality', YT('Crash Course Psychology personality Freud'), 'video'],
      ['On Becoming a Person (Carl Rogers)', GR('On Becoming a Person Carl Rogers'), 'book']
    ]
  });

  /* 4.7 */
  C({
    id: 'personality-traits', level: 4, mins: 18, visual: 'bigFive',
    visualCap: 'Big Five ke sliders khiskao aur dekho personality profile ka shape kaise badalta hai, aur har trait ka high/low matlab kya hai.',
    title: 'Personality traits aur unhe naapna',
    tag: 'Big Five (OCEAN), person vs situation, locus of control, MBTI ki sachchai, MMPI, spotlight effect aur culture',
    hook: '"Wo introvert hai", "main bahut organized hoon", "wo jaldi naraz ho jaata hai". Hum roz <b>trait</b> ki bhasha bolte hain. Science ne dictionary ke hazaron personality shabdon ko sirf <b>5 bade dimensions</b> me kaise compress kiya? Aur kya aapka "type" sach me fixed hai?',
    blocks: [
      ['h', 'Trait approach'],
      ['p', '<b>Trait</b> ek stable tendency hai jo alag situations me similar behaviour paida karti hai. Gordon <b>Allport</b> ne English dictionary me ~18,000 shabd dhoondhe jo logon ko describe karte hain, aur unme se ~4,500 ko stable traits maana (<b>lexical approach</b>). Raymond <b>Cattell</b> ne <b>factor analysis</b> (milte-julte traits ko groups me jodne ki statistical technique) se inhe 16 factors (16PF) tak ghataya. Hans <b>Eysenck</b> ne teen bade dimensions batayi: extraversion, neuroticism, psychoticism.'],
      ['ex', 'Introverts aur nimbu ka ras', 'Eysenck ke hisaab se introverts ka brain pehle se zyada "aroused" rehta hai, isliye wo kam stimulation dhoondhte hain, aur extraverts kam aroused hote hain, isliye party aur shor chahte hain. Ek mashhoor demo me zubaan par nimbu ke ras ki boondein daalne par <b>introverts me zyada laar</b> bani, jo zyada sensitivity ka sign maana gaya. (Arousal theory ke saboot mixed hain, par demo yaadgaar hai.)'],

      ['h', 'Big Five (OCEAN)'],
      ['p', 'Alag-alag researchers aur bhashaon me baar-baar <b>paanch</b> broad traits nikle. Aaj ye personality research ka sabse zyada support wala model hai. Har trait ek <b>continuum</b> hai, "type" nahi: zyada tar log beech me hote hain.'],
      ['table', ['Trait', 'High wale log', 'Low wale log', 'Kis se juda (research)'], [
        ['<b>O</b>penness', 'Curious, creative, nayi cheezein pasand', 'Practical, routine pasand, paramparik', 'Creativity, nayi skills seekhna'],
        ['<b>C</b>onscientiousness', 'Organized, disciplined, bharosemand', 'Spontaneous, laparwah, bikhre', 'Job performance, padhai, lambi umar, achhi sehat'],
        ['<b>E</b>xtraversion', 'Social, energetic, bolne wale', 'Shaant, reflective, akele me recharge', 'Positive emotions, leadership roles'],
        ['<b>A</b>greeableness', 'Dayalu, cooperative, bharosa karne wale', 'Competitive, seedhe, skeptical', 'Achhe rishte, kam conflict'],
        ['<b>N</b>euroticism', 'Jaldi chinta, gussa, udaasi', 'Emotionally stable, shaant', 'Anxiety/depression ka risk (high N)']
      ]],
      ['lab', 'bigfive'],
      ['list', [
        '<b>Stability</b>: traits 30 ki umar ke baad kaafi stable ho jaate hain, par badalte bhi hain.',
        '<b>Maturity principle</b>: umar ke saath aam taur par conscientiousness aur agreeableness badhte hain, neuroticism ghatta hai. Hum "samajhdaar" hote jaate hain.',
        '<b>Heritability</b>: twin studies me Big Five ki heritability ~40-50%.',
        '<b>Cross-cultural</b>: Big Five kai bhashaon aur deshon me paaya gaya hai, jinme India par ki gayi studies bhi shaamil hain, haalanki kuch cultures me structure thoda alag dikhta hai.',
        '<b>HEXACO</b> model ek chhatha trait jodta hai: <b>Honesty-Humility</b> (imaandari, ghamand na karna).'
      ]],

      ['h', 'Person vs situation debate'],
      ['p', '1968 me Walter <b>Mischel</b> ne kaha ki logon ka behaviour situation ke hisaab se itna badalta hai ki ek situation me trait doosri situation ka behaviour kam predict karta hai (correlation ~0.30). Isse bada debate chala. Aaj ka jawab: dono matter karte hain. Ek baar ka behaviour situation se zyada tay hota hai, par <b>bahut saare</b> moments ka average traits achhe se predict karte hain. Aur log apne "if-then" patterns me consistent hote hain: "<i>Agar</i> group bada ho, <i>to</i> Riya chup; <i>agar</i> close dost hon, <i>to</i> sabse zyada bolne wali."'],

      ['h', 'Social-cognitive approach'],
      ['p', 'Albert <b>Bandura</b> ka <b>reciprocal determinism</b>: person (soch, traits), behaviour aur environment teeno ek-doosre ko lagataar prabhavit karte hain. Ek shy student party me nahi jaata (behaviour), isliye naye dost nahi bante (environment), aur shyness aur mazboot hoti hai (person).'],
      ['p', 'Julian <b>Rotter</b> ka <b>locus of control</b>: <b>internal</b> log maante hain ki nateeje unke apne actions se aate hain; <b>external</b> log maante hain ki kismat, doosre log ya halaat tay karte hain. Internal locus aam taur par behtar padhai, sehat aur kam stress se juda hai (par bahut zyada internal hona har cheez ka blame khud par daalna bhi ho sakta hai).'],
      ['ex', 'Kam marks: do reactions', '<b>External</b>: "Teacher ne paper bahut tough banaya, meri kismat hi kharab hai." <b>Internal</b>: "Maine numericals ki practice kam ki thi. Agli baar pehle se shuru karunga." Doosra student agle exam me zyada sudharega, kyunki use lagta hai ki uske paas control hai.'],

      ['h', 'MBTI: popular, par science kya kehta hai?'],
      ['myth', 'MBTI (16 personality types jaise INTJ, ENFP) scientific test hai jo aapka fixed "type" batata hai aur career chunne ke liye best hai.', 'MBTI Jung ke ideas par based hai aur companies me bahut popular hai, par psychologists ise kamzor maante hain: (1) Ye logon ko <b>types</b> me baantta hai jabki traits continuous hote hain; beech wale log chhote se farak par "I" ya "E" ban jaate hain. (2) <b>Test-retest reliability</b> kam: kuch hafton baad dobara dene par kai logon ka type badal jaata hai. (3) Job performance ko predict karne ka saboot kamzor. Self-reflection ke liye mazedaar ho sakta hai, par important faislon ke liye Big Five jaise validated tools behtar hain.'],

      ['h', 'Personality kaise naapte hain?'],
      ['list', [
        '<b>Self-report inventories</b>: sawaalon ki list. <b>MMPI</b> (Minnesota Multiphasic Personality Inventory) clinical use ka mashhoor test hai jisme sainkdon true/false sawaal hain, aur <b>validity scales</b> bhi hain jo pakadti hain ki koi jhooth bol raha hai ya "achha dikhne" ki koshish kar raha hai. Big Five ke liye NEO-PI, BFI aur free IPIP tests.',
        '<b>Projective tests</b>: Rorschach, TAT (pichhla chapter).',
        '<b>Behavioural observation</b> aur doosron ki rating (dost aur parivaar aksar humein utna hi sahi judge karte hain jitna hum khud).',
        'Savdhaan: online "kaunsa Bollywood character ho aap?" jaise quizzes <b>Barnum effect</b> par chalte hain (Chapter 1.6).'
      ]],

      ['h', 'Self: hum apne baare me kaise sochte hain'],
      ['p', '<b>Self-esteem</b> (apni value ka ehsaas) khushi se juda hai, par Roy Baumeister aur saathiyon ke 2003 ke bade review me paaya gaya ki high self-esteem padhai ya success ka <b>kaaran</b> hai, iska saboot kamzor hai; aksar success hi self-esteem badhati hai. "Self-esteem badhao, sab theek ho jaayega" wala approach utna kaam nahi karta jitna socha gaya.'],
      ['case', 'Spotlight effect (Gilovich aur saathi, 2000)', 'College students ko ek embarrassing t-shirt (ek purane singer ki tasveer wali) pehna kar class me bheja gaya. Unhe laga ki <b>~50%</b> log notice karenge. Asal me sirf <b>~23%</b> ne kiya. Hum sochte hain ki sab hamari galtiyon aur dikhawat par dhyan de rahe hain, jabki zyada tar log apne hi baare me soch rahe hote hain. Agli baar baal kharab hon ya presentation me atko, ye yaad rakhna.'],
      ['p', '<b>Culture aur self</b>: Hazel Markus aur Shinobu Kitayama (1991) ne <b>independent self</b> (main alag, unique; zyada Western) aur <b>interdependent self</b> (main apne rishton aur group ka hissa; zyada Asian) me farak bataya. India ke baare me <b>Durganand Sinha</b> aur <b>R.C. Tripathi</b> ne 1994 me dikhaya ki Indians aksar individualist aur collectivist dono tendencies ek saath rakhte hain: career me apna faisla aur shaadi me parivaar ki raay. Isliye "India collectivist hai" ek over-simple label hai.'],
      ['terms', [
        ['Trait', 'Ek stable tendency jo alag situations me similar behaviour paida kare.'],
        ['Lexical approach', 'Bhasha ke personality shabdon se traits dhoondhne ka tareeka.'],
        ['Factor analysis', 'Milte-julte variables ko kam factors me group karne ki statistical technique.'],
        ['Big Five', 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.'],
        ['Openness', 'Naye anubhavon, ideas aur kala ke liye khulapan.'],
        ['Conscientiousness', 'Organized, disciplined aur bharosemand hone ka trait.'],
        ['Extraversion', 'Social, energetic aur stimulation pasand karne ka trait.'],
        ['Agreeableness', 'Dayalu, cooperative aur bharosa karne ka trait.'],
        ['Neuroticism', 'Negative emotions (chinta, gussa, udaasi) jaldi mehsoos karne ka trait.'],
        ['HEXACO', 'Big Five + Honesty-Humility wala 6-trait model.'],
        ['Maturity principle', 'Umar ke saath C aur A ka badhna, N ka ghatna.'],
        ['Person-situation debate', 'Behaviour traits se zyada tay hota hai ya situation se, is par bahas.'],
        ['Reciprocal determinism', 'Person, behaviour aur environment ka ek-doosre ko prabhavit karna (Bandura).'],
        ['Locus of control', 'Nateejon ko apne control me (internal) ya bahar ki shaktiyon ke haath (external) maanna.'],
        ['MBTI', 'Myers-Briggs Type Indicator: 16 types wala popular test; scientific support kamzor.'],
        ['MMPI', 'Clinical personality inventory jisme validity scales bhi hain.'],
        ['Self-esteem', 'Apni value aur kaabiliyat ka overall ehsaas.'],
        ['Spotlight effect', 'Ye maanna ki doosre hamari galtiyon par zaroorat se zyada dhyan de rahe hain.'],
        ['Independent self', 'Khud ko alag, unique vyakti ke roop me dekhna.'],
        ['Interdependent self', 'Khud ko rishton aur group ke hisse ke roop me dekhna.']
      ]]
    ],
    takeaways: [
      'Big Five (OCEAN) sabse validated model hai; traits continuum hain, types nahi.',
      'Conscientiousness padhai, kaam aur sehat ka strong predictor hai.',
      'Behaviour = person × situation; traits average behaviour ko predict karte hain.',
      'Internal locus of control aam taur par behtar outcomes se juda hai.',
      'MBTI popular par kamzor; spotlight effect: log humein utna notice nahi karte jitna hum sochte hain.'
    ],
    quiz: [
      ['Big Five me kaunsa trait job performance aur lambi umar ka sabse strong predictor maana jaata hai?', ['Openness', 'Conscientiousness', 'Extraversion', 'Neuroticism'], 1, 'Conscientiousness disciplined, organized behaviour se juda hai.'],
      ['Jaldi chinta aur udaasi mehsoos karna kis trait ka high level hai?', ['Agreeableness', 'Neuroticism', 'Openness', 'Extraversion'], 1, 'High neuroticism negative emotions ki tendency hai.'],
      ['"Kam marks isliye aaye kyunki maine practice kam ki" ye kaunsa locus of control hai?', ['External', 'Internal', 'Collective', 'Situational'], 1, 'Nateeje ko apne actions se jodna internal locus hai.'],
      ['MBTI ki ek mukhya scientific aalochana kya hai?', ['Isme sirf 2 types hain', 'Kam test-retest reliability aur continuous traits ko types me baantna', 'Ye bahut naya hai', 'Ye sirf bachchon ke liye hai'], 1, 'Kai log dobara test me alag type paate hain, aur traits continuum par hote hain.'],
      ['Person, behaviour aur environment ka ek-doosre ko prabhavit karna kya kehlata hai?', ['Locus of control', 'Reciprocal determinism', 'Factor analysis', 'Maturity principle'], 1, 'Bandura ka reciprocal determinism.'],
      ['Spotlight effect study me t-shirt pehenne walon ka andaza aur asli number kya the?', ['~10% vs ~50%', '~50% vs ~23%', '~90% vs ~80%', '~23% vs ~50%'], 1, 'Unhone socha aadhe log notice karenge; asal me ~23% ne kiya.'],
      ['Umar ke saath personality me aam taur par kya badlav dikhta hai?', ['Neuroticism badhta hai', 'Conscientiousness aur agreeableness badhte hain, neuroticism ghatta hai', 'Kuch nahi badalta', 'Sab traits ghatte hain'], 1, 'Ise maturity principle kehte hain.']
    ],
    more: [
      ['IPIP: free, public-domain Big Five aur personality tests', 'https://ipip.ori.org', 'link'],
      ['Crash Course Psychology: Measuring Personality', YT('Crash Course Psychology measuring personality'), 'video'],
      ['Quiet (Susan Cain) · introverts par popular book', GR('Quiet Susan Cain'), 'book']
    ]
  });
})();
