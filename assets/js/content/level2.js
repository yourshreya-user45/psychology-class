/* Level 2 · Dimaag ki Machine · Brain & Biology */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 2.1 */
  C({
    id: 'neurons', level: 2, mins: 17, visual: 'neuron',
    visualCap: 'Signal dendrites se aata hai, axon par electrical pulse (action potential) daudta hai, aur synapse par chemical messengers (neurotransmitters) agle neuron tak jaate hain. "Fire" dabao aur khud chalao.',
    title: 'Neurons aur neurotransmitters',
    tag: 'Brain ki wiring: action potential, synapse, dopamine-serotonin, aur chai ka caffeine kaise kaam karta hai',
    intro: 'Level 2 me tumhara swagat hai! Level 1 me humne dekha ki psychology science kaise banti hai. Ab us machine ke andar chalte hain jo ye sab chalati hai: tumhara brain. Aaj sabse chhoti unit se shuru karenge, yaani neuron, kyunki har soch aur har feeling isi ki baatcheet se banti hai.',
    hook: 'Abhi, is line ko padhte-padhte, tumhare brain ke lagbhag <b>86 arab (billion) neurons</b> me se karodon ek-doosre ko signals bhej rahe hain. Har thought, har yaad, har emotion asal me in chhoti cells ki baatcheet hai. Chalo is baatcheet ki bhasha seekhte hain.',
    blocks: [
      ['h', 'Neuron ki banawat'],
      ['p', '<b>Neuron</b> nervous system ki basic cell hai jo information receive, process aur aage bhejti hai. Iske hisse ek post office jaise samjho:'],
      ['list', [
        '<b>Dendrites</b>: ped ki shakhaon jaise, doosre neurons se message <b>receive</b> karte hain (letter box).',
        '<b>Cell body (soma)</b>: nucleus yahin hai; aaye hue messages ko jodta hai aur decide karta hai ki aage bhejna hai ya nahi (sorting room).',
        '<b>Axon</b>: lambi taar jo message aage le jaati hai. Kuch axon reedh ki haddi se pair tak ~1 meter lambe hote hain (delivery road).',
        '<b>Myelin sheath</b>: axon par charbi ki parat, bijli ki taar ke plastic jaisi. Isse signal 100 m/s se bhi tez daud sakta hai. <i>Multiple sclerosis</i> me myelin damage hota hai, isliye signals dheeme aur gadbad ho jaate hain.',
        '<b>Axon terminals</b>: aakhri sire jahan se chemical messengers chhode jaate hain (delivery point).'
      ]],
      ['p', 'Neurons akele nahi hote. <b>Glial cells</b> unhe poshan, support aur myelin dete hain, aur brain ki safai karte hain. Inki sankhya lagbhag neurons jitni hi maani jaati hai.'],
      ['h', 'Teen tarah ke neurons'],
      ['table', ['Type', 'Kaam', 'Example'], [
        ['Sensory (afferent)', 'Senses se information CNS tak le jaate hain', 'Ungli ne garam tawa chhua: "garam!" signal upar jaata hai'],
        ['Motor (efferent)', 'CNS se muscles aur glands tak command', '"Haath hatao!" muscles tak'],
        ['Interneurons', 'Brain aur spinal cord ke andar sensory aur motor ko jodte hain', 'Sabse zyada inhi ki sankhya hai']
      ]],
      ['ex', 'Garam tawa aur reflex arc', [
        'Roti banate waqt ungli garam tawe se chhoo gayi. Dard <i>mehsoos</i> hone se pehle hi haath hat gaya. Kaise? Sensory neuron ne signal <b>spinal cord</b> tak bheja, wahin ek interneuron ne seedha motor neuron ko command de di. Brain tak message thodi der baad pahuncha.',
        'Is shortcut ko <b>reflex arc</b> kehte hain. Ye millisecond bachata hai, jo khatre me bahut kaam aata hai.'
      ]],

      ['h', 'Action potential: neuron ka "fire" hona'],
      ['p', 'Aaram ki haalat me neuron ke andar bahar ke mukable lagbhag <b>-70 millivolt</b> charge hota hai (<b>resting potential</b>). Jab dendrites se kaafi signals aakar charge ko ek seema (<b>threshold</b>, lagbhag -55 mV) tak pahuncha dete hain, to axon par darwaze khulte hain: sodium (Na⁺) ions andar ghuste hain aur ek electrical pulse axon par daud jaata hai. Ise <b>action potential</b> kehte hain. Phir potassium (K⁺) bahar nikalta hai aur neuron reset hota hai.'],
      ['list', [
        '<b>All-or-none principle</b>: neuron ya to poori taakat se fire karta hai ya bilkul nahi, jaise bandook ka trigger. Aadha fire nahi hota.',
        'Phir tez dard aur halke dard me farak kaise? <b>Firing ki frequency</b> se: tez stimulus = zyada baar fire, aur zyada neurons ek saath.',
        '<b>Refractory period</b>: fire ke turant baad thodi der neuron dobara fire nahi kar sakta, jaise flush tank ko bharne me time lagta hai.'
      ]],
      ['teacher', 'Is poore process ko ek line me yaad kar lo: <b>-70 par aaram, -55 par trigger, Na⁺ andar, K⁺ bahar</b>. Action potential ka poora drama bas itna hi hai, aur exam me ye sequence bahut poochha jaata hai.'],

      ['h', 'Synapse: jahan chemistry shuru hoti hai'],
      ['p', 'Ek neuron doosre ko chhoota nahi. Beech me ek bahut patla gap hota hai: <b>synaptic cleft</b>. Jab action potential axon terminal par pahunchta hai, to chhoti theliyan (vesicles) <b>neurotransmitters</b> naam ke chemicals gap me chhod deti hain. Ye agle neuron ke <b>receptors</b> par aise fit hote hain jaise taale me chaabi.'],
      ['steps', [
        ['Release', 'Neurotransmitter synaptic cleft me chhoda jaata hai.'],
        ['Binding', 'Receptor par fit hokar agle neuron ko "fire karo" (excitatory) ya "ruk jao" (inhibitory) ka signal deta hai.'],
        ['Cleanup', 'Bacha hua chemical ya to wapas sending neuron me kheench liya jaata hai (<b>reuptake</b>) ya enzymes use tod dete hain.']
      ]],
      ['table', ['Neurotransmitter', 'Mukhya kaam', 'Judi hui baatein'], [
        ['Acetylcholine (ACh)', 'Muscle movement, attention, memory', 'Alzheimer\'s me ACh banane wale neurons ghatte hain. Botox ACh release rok kar muscles dheele karta hai.'],
        ['Dopamine', 'Reward, motivation, movement', 'Parkinson\'s me dopamine neurons marte hain (kaanpna). Notifications aur likes reward system ko chhedte hain.'],
        ['Serotonin', 'Mood, neend, bhookh', 'Kai antidepressants (SSRIs) serotonin ki reuptake rokti hain.'],
        ['Norepinephrine', 'Alertness, arousal', 'Stress aur khatre me badhta hai; kuch ADHD dawaiyan isse prabhavit karti hain.'],
        ['GABA', 'Main <b>inhibitory</b> (brake)', 'Kam GABA activity anxiety aur seizures se judi. Alcohol aur kuch sleeping pills GABA ka asar badhate hain.'],
        ['Glutamate', 'Main <b>excitatory</b> (accelerator), learning aur memory', 'Bahut zyada glutamate neurons ko nuksaan pahunchata hai (jaise stroke me).'],
        ['Endorphins', 'Prakritik painkiller', 'Lambi daud ke baad "runner\'s high" aur chot me kuch der dard kam lagna.']
      ]],
      ['vis', 'synapse', 'Neurotransmitters receptors par fit hote hain. Reuptake pump bache hue molecules wapas kheenchta hai. "SSRI" on karke dekho reuptake rukne par kya hota hai.'],
      ['myth', 'Depression bas "serotonin ki kami" hai, aur dawai woh kami poori kar deti hai.', 'Ye simple "chemical imbalance" model ab purana maana jaata hai. 2022 ke ek bade review ko kam serotonin aur depression ke beech consistent saboot nahi mila. Phir bhi antidepressants bahut logon ki madad karti hain; unka asar shayad zyada complex raaston se hota hai (jaise neuroplasticity aur stress systems par). Depression biology, soch, life events aur rishton ka mix hai.'],

      ['h', 'Drugs neurotransmitters ke saath kya karte hain'],
      ['compare', ['Agonist', 'Neurotransmitter ki <b>nakal</b> karta hai ya uska asar <b>badhata</b> hai. Morphine endorphin receptors par fit hota hai; nicotine acetylcholine receptors ko activate karta hai; cocaine dopamine ki reuptake rok kar use synapse me zyada der rakhta hai.'], ['Antagonist', 'Receptor ko <b>block</b> kar deta hai, jaise taale me galat chaabi phansa dena. Curare (zehreele teer ka zeher) acetylcholine receptors block karke muscles ko lakwa maar deta hai. Caffeine adenosine receptors block karta hai.']],
      ['ex', 'Subah ki chai aur caffeine crash', [
        'Din bhar jaagne par brain me <b>adenosine</b> jama hota hai jo neend ka dabaav banata hai. Chai-coffee ka caffeine adenosine receptors par baith kar unhe <b>block</b> karta hai (antagonist), isliye neend nahi aati.',
        'Par adenosine banta rehta hai. Jab caffeine ka asar utarta hai, saara jama adenosine ek saath receptors par aata hai: "crash". Caffeine ki half-life lagbhag 5 ghante hai, to shaam 6 baje ki coffee ka aadha caffeine raat 11 baje bhi tumhare body me hota hai.'
      ]],
      ['teacher', 'Apni chai-coffee ki aadat par socho: tumhara aakhri cup kitne baje hota hai? Agar neend der se aati hai, to ek hafte ke liye aakhri cup dopahar 2 baje tak le aao aur farak khud dekho.'],
      ['lab', 'reaction'],

      ['h', 'Neuroplasticity: brain badalta rehta hai'],
      ['p', 'Psychologist Donald Hebb (1949) ka idea: <b>"Neurons that fire together, wire together."</b> Jab do neurons baar-baar ek saath active hote hain, unka connection mazboot ho jaata hai. Yahi learning ka biological aadhaar hai. Har practice session ke saath tumhare brain ki wiring thodi badal jaati hai.'],
      ['case', 'London ke taxi drivers (Maguire, 2000)', 'London me taxi license ke liye shahar ki hazaron galiyan yaad karni padti hain ("The Knowledge"). MRI scans me experienced taxi drivers ka <b>posterior hippocampus</b> (spatial memory se juda) doosron se bada tha, aur jitne zyada saal driving, utna bada. Ye dikhata hai ki adult brain bhi experience se physically badalta hai.'],
      ['teacher', 'Ye study tumhare liye achhi khabar hai. Jo skill aaj mushkil lag rahi hai, chahe English bolna ho ya maths, practice se uske liye brain me sach me naye raaste bante hain. "Mujhse nahi hoga" biology ke hisaab se galat baat hai.'],
      ['terms', [
        ['Neuron', 'Nervous system ki cell jo electrical aur chemical signals se information bhejti hai.'],
        ['Dendrite', 'Neuron ki shakhayein jo doosre neurons se signal receive karti hain.'],
        ['Axon', 'Neuron ka lamba hissa jo signal cell body se door le jaata hai.'],
        ['Myelin sheath', 'Axon par charbi ki parat jo signal ko tez aur insulated rakhti hai.'],
        ['Glial cells', 'Neurons ko support, poshan aur suraksha dene wali cells.'],
        ['Reflex arc', 'Spinal cord ke zariye turant hone wala automatic response, brain ke sochne se pehle.'],
        ['Resting potential', 'Aaram ki haalat me neuron ka charge, lagbhag -70 mV.'],
        ['Action potential', 'Axon par daudne wala chhota electrical pulse jab neuron fire karta hai.'],
        ['All-or-none principle', 'Neuron ya to poori taakat se fire karta hai ya bilkul nahi.'],
        ['Synapse', 'Do neurons ke beech ka junction jahan chemical signal bheja jaata hai.'],
        ['Neurotransmitter', 'Chemical messenger jo synapse par ek neuron se doosre tak signal le jaata hai.'],
        ['Reuptake', 'Synapse me bache neurotransmitter ko sending neuron dwara wapas kheench lena.'],
        ['Agonist', 'Drug jo neurotransmitter ki nakal kare ya uska asar badhaye.'],
        ['Antagonist', 'Drug jo receptor ko block karke neurotransmitter ka asar roke.'],
        ['Neuroplasticity', 'Experience aur learning se brain ke connections aur structure ka badalna.']
      ]]
    ],
    outro: 'Aaj tumne dekha ki neuron fire kaise karta hai aur synapse par chemicals kaise baat karte hain. Quiz me caffeine aur GABA wale sawaal tumhara intezaar kar rahe hain. Agli class me in neurons ka poora network dekhenge: nervous system aur hormones, aur ye ki darr ke waqt body me kya hota hai.',
    takeaways: [
      'Neuron = dendrites (receive) + cell body + axon (send) + terminals; myelin signal tez karta hai.',
      'Action potential all-or-none hai; intensity firing frequency se pata chalti hai.',
      'Synapse par neurotransmitters receptors par fit hote hain, phir reuptake se saaf hote hain.',
      'Agonist asar badhata hai, antagonist block karta hai (caffeine adenosine ka antagonist hai).',
      'Brain plastic hai: practice se connections mazboot hote hain.'
    ],
    quiz: [
      ['Neuron ka kaunsa hissa doosre neurons se message receive karta hai?', ['Axon', 'Dendrites', 'Myelin', 'Axon terminal'], 1, 'Dendrites receive karte hain, axon aage bhejta hai.'],
      ['"All-or-none principle" ka matlab kya hai?', ['Saare neurons ek saath fire karte hain', 'Neuron ya to poori taakat se fire karta hai ya bilkul nahi', 'Neuron kabhi aaram nahi karta', 'Sirf motor neurons fire karte hain'], 1, 'Action potential ka size fixed hai; tez stimulus se firing ki frequency badhti hai.'],
      ['Garam cheez chhoone par dard mehsoos hone se pehle haath hat jaata hai. Ye kaise hota hai?', ['Brain ka frontal lobe decide karta hai', 'Spinal cord ka reflex arc', 'Hormones ki wajah se', 'Ye coincidence hai'], 1, 'Reflex arc spinal cord me hi sensory aur motor neurons ko jod deta hai.'],
      ['Caffeine neend kyun bhagata hai?', ['Ye dopamine banata hai', 'Ye adenosine receptors ko block karta hai', 'Ye melatonin badhata hai', 'Ye GABA badhata hai'], 1, 'Caffeine adenosine ka antagonist hai; adenosine neend ka dabaav banata hai.'],
      ['Brain ka main "brake" (inhibitory) neurotransmitter kaunsa hai?', ['Glutamate', 'Dopamine', 'GABA', 'Acetylcholine'], 2, 'GABA main inhibitory neurotransmitter hai; glutamate main excitatory.'],
      ['Parkinson\'s disease me kaunse neurotransmitter wale neurons ghat jaate hain?', ['Serotonin', 'Dopamine', 'Endorphins', 'Norepinephrine'], 1, 'Movement control me dopamine important hai; Parkinson\'s me dopamine neurons marte hain.'],
      ['London taxi drivers ki study ne kya dikhaya?', ['Driving se IQ badhta hai', 'Experience se adult brain (hippocampus) physically badal sakta hai', 'Taxi drivers zyada stressed hote hain', 'Brain 25 saal ke baad nahi badalta'], 1, 'Ye neuroplasticity ka famous saboot hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 3: Biopsychology', OS(3), 'book'],
      ['Crash Course Psychology: The Chemical Mind', YT('Crash Course Psychology chemical mind neurons'), 'video'],
      ['Neuroscience for Kids (University of Washington) · simple explanations', 'https://faculty.washington.edu/chudler/neurok.html', 'link']
    ]
  });

  /* 2.2 */
  C({
    id: 'nervous-endocrine', level: 2, mins: 15, visual: 'nervousTree',
    visualCap: 'Nervous system ka parivaar: CNS (brain + spinal cord) aur PNS, jiska autonomic hissa fight-or-flight aur rest-and-digest sambhalta hai.',
    title: 'Nervous system aur hormones',
    tag: 'Fight-or-flight, rest-and-digest, cortisol, thyroid aur melatonin: body ka communication network',
    intro: 'Pichhli class me humne ek akele neuron ko samjha. Aaj dekhenge ki karodon neurons aur hormones milkar poore body ko kaise chalate hain. Isse tumhe samajh aayega ki exam hall me haath kyun kaanpte hain, aur unhe shaant kaise karte hain.',
    hook: 'Raat ko sunsaan gali me peeche kadmon ki awaaz. Dil zor se dhadakne laga, saans tez, muh sookh gaya, aankhein phail gayi... phir pata chala padosi ka kutta hai. Is 3 second ke drame me tumhare <b>nervous system</b> aur <b>hormones</b> ne milkar poora body "emergency mode" me daal diya tha.',
    blocks: [
      ['h', 'Nervous system ka naksha'],
      ['list', [
        '<b>Central Nervous System (CNS)</b>: brain + spinal cord. Ye "headquarters" hai jahan faisle hote hain.',
        '<b>Peripheral Nervous System (PNS)</b>: CNS ke bahar ki saari nerves jo body ke har hisse ko headquarters se jodti hain.',
        'PNS ke do hisse: <b>Somatic</b> (tumhari marzi wali muscles aur senses, jaise mobile uthana) aur <b>Autonomic</b> (apne aap chalne wale kaam: dhadkan, digestion, pasina).',
        'Autonomic ke do hisse: <b>Sympathetic</b> (fight-or-flight, accelerator) aur <b>Parasympathetic</b> (rest-and-digest, brake).'
      ]],
      ['teacher', 'Ye naksha pehli baar me ulajh sakta hai, to ek trick suno: <b>Sympathetic = "S" for Stress</b>, <b>Parasympathetic = "P" for Peace</b>. Itna yaad raha to aadha chapter pakka.'],
      ['p', '<b>Spinal cord</b> brain aur body ke beech information highway hai, aur reflexes ka centre bhi. Isliye reedh ki haddi ki chot me kai baar chot ke neeche ka hissa mehsoos karna aur hilana band ho jaata hai: highway kat gaya.'],

      ['h', 'Fight-or-flight vs rest-and-digest'],
      ['vis', 'fightFlight', 'Toggle karke dekho: sympathetic aur parasympathetic mode me body ke organs kaise ulta kaam karte hain.'],
      ['table', ['Body part', 'Sympathetic (khatra!)', 'Parasympathetic (aaram)'], [
        ['Aankhein (pupils)', 'Phailti hain, zyada roshni', 'Sikudti hain'],
        ['Dil', 'Tez dhadakta hai', 'Dheema'],
        ['Saans', 'Tez, airways khulte hain', 'Dheemi'],
        ['Muh (saliva)', 'Sookh jaata hai', 'Saliva banta hai'],
        ['Pet (digestion)', 'Ruk jaata hai, "butterflies"', 'Chalu, khana pachta hai'],
        ['Liver', 'Glucose chhodta hai (energy)', 'Glucose store karta hai'],
        ['Pasina', 'Badhta hai', 'Normal']
      ]],
      ['ex', 'Stage fright ka science', [
        'Class presentation se pehle muh sookhna, haath kaanpna, pet me gadbad, dil tez: ye sab <b>sympathetic</b> activation hai. Body ko lagta hai tumhe sher se bhaagna hai, jabki tumhe bas 5 slides bolni hain.',
        'Achhi khabar: brake tumhare haath me bhi hai. <b>Dheemi saans, khaas kar lamba exhale</b> (jaise 4 second andar, 6 second bahar), <b>vagus nerve</b> ke zariye parasympathetic system ko activate karti hai aur dil dheema hone lagta hai.'
      ]],
      ['tip', 'Abhi try karo: 4 second naak se saans andar, 6 second muh se dheere bahar. 5 baar. Dhyan do ki shoulders aur jaw dheele ho rahe hain ya nahi. Exam hall me bhi ye bina kisi ko pata chale kar sakte ho.'],
      ['teacher', 'Sach me try kiya? Agar haan, to tumne abhi apne parasympathetic system ko khud on kiya. Ye chhoti si skill presentation, interview ya kisi bhi ghabrahat wale pal me kaam aayegi.'],

      ['h', 'Endocrine system: body ki "postal service"'],
      ['p', 'Nervous system SMS jaisa hai: tez, seedha, turant khatam. <b>Endocrine system</b> posted letter jaisa hai: <b>glands</b> khoon me <b>hormones</b> chhodti hain jo dheere pahunchte hain par asar der tak rehta hai. Isliye darr khatam hone ke baad bhi kuch der tak haath kaanpte rehte hain.'],
      ['table', ['Gland', 'Hormone', 'Kaam aur real-life connection'], [
        ['Hypothalamus', 'Releasing hormones', 'Brain ka hissa jo pituitary ko control karta hai: nervous aur endocrine system ka pul.'],
        ['Pituitary ("master gland")', 'Growth hormone, oxytocin, aur doosri glands ke control hormones', 'Oxytocin labour, breastfeeding aur bonding (gale lagna) se juda hai.'],
        ['Pineal', 'Melatonin', 'Andhere me badhta hai aur neend ka signal deta hai. Raat ko tez screen light ise dabati hai.'],
        ['Thyroid', 'Thyroxine (T4), T3', 'Metabolism ki speed. Kam thyroid (hypothyroidism) me thakaan, udaasi, weight badhna; India me kaafi common hai.'],
        ['Adrenal', 'Adrenaline (epinephrine), cortisol', 'Adrenaline turant ka stress response; cortisol lambe stress ka.'],
        ['Pancreas', 'Insulin, glucagon', 'Blood sugar control. Sugar girne par chidchidapan ("hangry") hona aam hai.'],
        ['Gonads (testes/ovaries)', 'Testosterone, estrogen, progesterone', 'Puberty, sex drive, aur menstrual cycle ke saath mood ke badlav.']
      ]],
      ['ex', 'Udaasi jo asal me thyroid thi', 'Priya (34) mahino se thaki, udaas aur bhulakkad mehsoos kar rahi thi. Sabne kaha "depression hai". Doctor ne blood test karwaya to <b>hypothyroidism</b> nikla. Thyroid ki dawai ke kuch hafton baad energy aur mood dono laut aaye. Isliye psychologists aur psychiatrists mental symptoms ke physical kaaran (thyroid, anaemia, vitamin B12 ki kami) pehle check karwate hain.'],
      ['teacher', 'Ye baat dil me rakh lo: mann ki takleef ka kaaran hamesha sirf "mann" me nahi hota. Agar kabhi tumhe ya ghar me kisi ko lambi thakaan aur udaasi ho, to ek blood test bhi checklist me rakhna.'],

      ['h', 'HPA axis: stress ka hormone highway'],
      ['steps', [
        ['Hypothalamus', 'Khatra mehsoos hote hi CRH hormone chhodta hai.'],
        ['Pituitary', 'CRH milne par ACTH chhodta hai.'],
        ['Adrenal glands', 'ACTH milne par cortisol chhodti hain: energy ke liye blood sugar badhta hai, gair-zaroori kaam (digestion, immunity, growth) dheeme hote hain.'],
        ['Feedback loop', 'Cortisol wapas brain ko signal deta hai "bas, kaafi hai", aur system band hota hai.']
      ]],
      ['p', 'Thodi der ka stress faydemand hai. Problem tab hai jab stress mahino tak chale (job insecurity, ghar me jhagde, exam ka lamba pressure). Tab cortisol lagataar ooncha rehta hai: <b>immunity kamzor</b> (baar-baar beemar), <b>neend kharab</b>, memory par asar, aur pet ke aas-paas charbi badhna. Level 4 me stress ko detail me padhenge.'],
      ['myth', 'Hormones sirf teenagers aur mahilaon ke mood par asar daalte hain.', 'Hormones har insaan ke mood, energy aur behaviour par asar daalte hain. Cortisol stress me sabka badhta hai, thyroid kisi ka bhi gadbad ho sakta hai, testosterone bhi din aur umar ke saath badalta hai. "Hormonal" kehkar kisi ki feelings ko kharij karna na science hai na insaaf.'],
      ['terms', [
        ['Central nervous system (CNS)', 'Brain aur spinal cord.'],
        ['Peripheral nervous system (PNS)', 'CNS ke bahar ki saari nerves.'],
        ['Somatic nervous system', 'PNS ka hissa jo voluntary muscles aur senses ko control karta hai.'],
        ['Autonomic nervous system', 'PNS ka hissa jo dhadkan, digestion jaise automatic kaam chalata hai.'],
        ['Sympathetic nervous system', 'Fight-or-flight: body ko khatre ke liye taiyaar karta hai.'],
        ['Parasympathetic nervous system', 'Rest-and-digest: body ko shaant karta aur energy bachata hai.'],
        ['Vagus nerve', 'Parasympathetic system ki mukhya nerve jo dil, phephde aur pet ko brain se jodti hai.'],
        ['Endocrine system', 'Glands ka system jo khoon me hormones chhodta hai.'],
        ['Hormone', 'Khoon ke zariye bheja jaane wala chemical messenger.'],
        ['Hypothalamus', 'Brain ka hissa jo bhookh, pyaas, temperature aur pituitary ko control karta hai.'],
        ['Pituitary gland', '"Master gland" jo doosri glands ko control karne wale hormones chhodti hai.'],
        ['Adrenal glands', 'Kidney ke upar ki glands jo adrenaline aur cortisol chhodti hain.'],
        ['Cortisol', 'Lambe stress ka hormone jo energy badhata aur immunity dabata hai.'],
        ['Adrenaline (epinephrine)', 'Turant ka stress hormone: dil tez, energy turant.'],
        ['Melatonin', 'Pineal gland ka hormone jo andhere me badh kar neend ka signal deta hai.'],
        ['Oxytocin', 'Bonding, labour aur breastfeeding se juda hormone.'],
        ['HPA axis', 'Hypothalamus-pituitary-adrenal ki chain jo cortisol stress response chalati hai.']
      ]],
      ['think', 'Interview se pehle tumhare haath thande aur geele kyun ho jaate hain?', [
        'Sympathetic system khoon ko haath-pair ki skin se hata kar badi muscles aur dil ki taraf bhejta hai (bhaagne ya ladne ke liye), isliye haath thande. Saath hi pasina badhta hai. Ye "tum kamzor ho" ka sign nahi, balki body ka purana survival program hai.'
      ]]
    ],
    outro: 'Aaj ka saar: nervous system SMS hai, hormones posted letter, aur HPA axis stress ka highway. Quiz do, aur 4-6 wali saans ek baar phir try karna. Agli class me brain ka poora naksha kholenge: kaunsa hissa kya karta hai.',
    takeaways: [
      'CNS = brain + spinal cord; PNS = baaki saari nerves (somatic + autonomic).',
      'Sympathetic = fight-or-flight accelerator; parasympathetic = rest-and-digest brake.',
      'Lamba exhale vagus nerve ke zariye body ko shaant karta hai.',
      'Endocrine system hormones se kaam karta hai: dheema par der tak asar.',
      'HPA axis cortisol chhodta hai; lamba stress = lagataar ooncha cortisol = health par bura asar.'
    ],
    quiz: [
      ['Brain aur spinal cord milkar kya kehlate hain?', ['Peripheral nervous system', 'Central nervous system', 'Autonomic nervous system', 'Endocrine system'], 1, 'CNS = brain + spinal cord.'],
      ['Presentation se pehle muh sookhna aur dil tez hona kis system ka kaam hai?', ['Parasympathetic', 'Somatic', 'Sympathetic', 'Endocrine nahi, digestive'], 2, 'Sympathetic system fight-or-flight response chalata hai.'],
      ['Kaunsa hormone andhere me badhta hai aur neend laata hai?', ['Cortisol', 'Melatonin', 'Adrenaline', 'Insulin'], 1, 'Pineal gland ka melatonin andhere me badhta hai.'],
      ['"Master gland" kise kehte hain?', ['Thyroid', 'Adrenal', 'Pituitary', 'Pancreas'], 2, 'Pituitary doosri glands ko control karne wale hormones chhodti hai (khud hypothalamus ke control me).'],
      ['HPA axis ka sahi kram kya hai?', ['Heart → Pancreas → Adrenal', 'Hypothalamus → Pituitary → Adrenal', 'Hippocampus → Pineal → Amygdala', 'Hypothalamus → Pancreas → Adrenal'], 1, 'Hypothalamus CRH, pituitary ACTH, aur adrenal glands cortisol chhodti hain.'],
      ['Thyroid kam hone (hypothyroidism) par kaunsa symptom common hai?', ['Bahut zyada energy', 'Thakaan aur udaasi', 'Tez dhadkan aur weight ghatna', 'Neend na aana aur bechaini'], 1, 'Hypothyroidism metabolism dheema karta hai: thakaan, udaasi, weight badhna. (Tez dhadkan aur weight ghatna overactive thyroid me hota hai.)']
    ],
    more: [
      ['OpenStax Psychology 2e · 3.3 Nervous System & 3.5 Endocrine System', OS(3), 'book'],
      ['Crash Course Psychology: Meet Your Master (brain + nervous system)', YT('Crash Course Psychology Meet Your Master nervous system'), 'video'],
      ['Why Zebras Don\'t Get Ulcers (Robert Sapolsky) · stress biology ki best book', GR('Why Zebras Don\'t Get Ulcers Sapolsky'), 'book']
    ]
  });

  /* 2.3 */
  C({
    id: 'brain-structure', level: 2, mins: 18, visual: 'brainMap',
    visualCap: 'Brain ke kisi bhi hisse par tap karo: uska kaam, aur ek real example jab wo hissa damage hota hai.',
    title: 'Brain ka naksha: kaunsa hissa kya karta hai',
    tag: 'Brainstem se prefrontal cortex tak, H.M. aur split-brain patients ki kahaniyan, aur scooter chalate brain ka tour',
    intro: 'Pichhli do classes me humne neurons aur nerves dekhe. Aaj ek kadam aage chalte hain: ye sab milkar poora brain kaise banate hain, aur kaunsa hissa kis kaam ka hai. Padhte waqt ek baar apna sir chhoo kar socho, andar ye sab abhi isi waqt ho raha hai.',
    hook: 'Lagbhag <b>1.3-1.4 kilo</b> ka ye organ, tofu jitna naram, tumhari har yaad, har sapne aur har faisle ka ghar hai. Body ke weight ka sirf ~2%, par energy ~20% khaata hai. Chalo iska naksha banate hain: neeche se upar, purane hisson se naye hisson tak.',
    blocks: [
      ['h', 'Brain ko kaise "dekhte" hain?'],
      ['table', ['Method', 'Kya dikhata hai', 'Khaasiyat'], [
        ['Lesion / case studies', 'Damage ke baad kya kaam band hua', 'Sabse purana tareeka (Phineas Gage, H.M.)'],
        ['EEG', 'Scalp par electrodes se electrical activity', 'Milliseconds tak ki timing; sleep aur epilepsy me use'],
        ['CT scan', 'X-ray se brain ki structure', 'Tez, stroke aur chot me emergency me use'],
        ['MRI', 'Magnetic field se detailed structure', 'Bahut clear images, radiation nahi'],
        ['fMRI', 'Blood oxygen ke badlav se activity', 'Kaunsa area kaam ke waqt zyada active hai'],
        ['PET', 'Radioactive glucose se activity', 'Metabolism dikhata hai'],
        ['TMS', 'Magnetic pulse se kisi area ko thodi der ke liye chhedna', 'Research aur kuch depression treatments me']
      ]],

      ['h', 'Brainstem aur cerebellum: purana, zaroori hissa'],
      ['list', [
        '<b>Medulla</b>: dhadkan aur saans jaise life-support kaam. Yahan chot jaanleva ho sakti hai.',
        '<b>Pons</b>: neend, saans aur brain ke hisson ke beech signals ka pul.',
        '<b>Reticular formation</b>: alertness aur arousal. Ye tay karta hai ki tumhara brain jaaga hua hai ya so raha hai, aur kaunsi awaaz par dhyan dena hai.',
        '<b>Cerebellum ("chhota brain")</b>: balance, coordination aur motor skills seekhna (cycle chalana, typing). Sharaab sabse pehle cerebellum ko prabhavit karti hai; isliye police "seedhi line par chalo" test karti hai.'
      ]],

      ['h', 'Limbic system: emotion aur memory'],
      ['list', [
        '<b>Thalamus</b>: sensory relay station. Smell ko chhod kar har sense ka signal pehle yahan aata hai aur phir sahi cortex area me bheja jaata hai.',
        '<b>Hypothalamus</b>: bhookh, pyaas, body temperature, sex drive aur hormones. Chhota sa, par bahut powerful.',
        '<b>Amygdala</b>: badam jaisa hissa jo khatra pehchaanta aur <b>darr</b> paida karta hai. Emotional yaadon ko gehra karta hai.',
        '<b>Hippocampus</b>: <b>nayi yaadein</b> banana aur spatial navigation (raasta yaad rakhna).'
      ]],
      ['teacher', 'Amygdala aur hippocampus aksar mix ho jaate hain. Trick: <b>Amygdala = Alarm</b> (dono "A" se), aur <b>hippocampus = nayi yaadon ki hard disk</b>. Ab agle case me dekho ki hard disk na ho to kya hota hai.'],
      ['case', 'H.M. (Henry Molaison): wo aadmi jo naya kuch yaad nahi rakh sakta tha', [
        '1953 me gambhir epilepsy ke ilaaj ke liye H.M. ke dono taraf ke hippocampus ka bada hissa surgery se nikaal diya gaya. Seizures kam hue, par ek ajeeb nateeja aaya: wo <b>nayi long-term yaadein bana hi nahi pata tha</b>. Wo kisi se mil kar baat karta, aur 10 minute baad use bilkul yaad nahi hota ki wo kabhi mila tha.',
        'Hairani ki baat: wo <b>mirror drawing</b> jaisi motor skills me har din behtar hota gaya, bina yaad rakhe ki usne kabhi practice ki thi. Isse pata chala ki <b>"kya yaad hai" (facts) aur "kaise karna hai" (skills) wali memories brain me alag systems me rehti hain</b>. Level 3 me ise detail me padhenge.'
      ]],
      ['p', 'Ek dilchasp case S.M. naam ki mahila ka hai, jiski ek rare bimari se dono amygdala damage ho gaye the. Researchers use saanp, makdi aur horror film dikhane le gaye, par use <b>darr mehsoos hi nahi hua</b>. Ye amygdala aur darr ke seedhe rishte ka mazboot saboot hai.'],

      ['h', 'Cerebral cortex: soch ki upar wali parat'],
      ['p', 'Brain ki bahar ki jhurriyon wali parat <b>cerebral cortex</b> hai, sirf 2-4 mm moti. Jhurriyon (folds) se zyada area ek chhoti khopdi me fit ho jaata hai, jaise akhbaar ko murodna. Har hemisphere chaar <b>lobes</b> me bata hai:'],
      ['vis', 'brainMap', 'Neeche wale naksha me lobes aur andar ke hisse dikhaye gaye hain.'],
      ['table', ['Lobe', 'Mukhya kaam', 'Damage hone par'], [
        ['Frontal', 'Planning, decisions, self-control, personality; <b>motor cortex</b> (movement); <b>Broca\'s area</b> (bolna)', 'Impulsive behaviour (Phineas Gage); Broca\'s aphasia: samajhte hain par bolne me bahut mushkil'],
        ['Parietal', 'Touch, dard, temperature (<b>somatosensory cortex</b>); spatial awareness', 'Body ke ek taraf ko ignore karna (neglect), raasta samajhne me dikkat'],
        ['Temporal', 'Sunna (<b>auditory cortex</b>), bhasha samajhna (<b>Wernicke\'s area</b>), chehre pehchaanna', 'Wernicke\'s aphasia: dhaarapravaah bolte hain par matlab-heen shabd; chehre na pehchaan paana (prosopagnosia)'],
        ['Occipital', 'Dekhna (<b>visual cortex</b>)', 'Aankhein theek hone par bhi andhapan ya dekhi cheez pehchaan na paana']
      ]],
      ['p', '<b>Prefrontal cortex</b> (frontal lobe ka aage wala hissa) planning, impulse control aur consequences sochne ka centre hai. Ye <b>mid-20s tak develop hota rehta hai</b>. Isliye teenagers ka emotional "accelerator" (limbic system) jaldi taiyaar hota hai, par "brake" (prefrontal) baad me: risk lena, peer pressure me jhukna, aur "abhi ka maza" chunna is umar me zyada hota hai.'],
      ['teacher', 'Agar tum abhi teens ya early 20s me ho, to ye baat seedhe tumhare baare me hai. Iska matlab ye nahi ki har faisla galat hoga; matlab ye hai ki bade faislon se pehle thoda ruk kar sochna, ya kisi bharosemand insaan se baat karna, tumhare brain ke brake ki madad karta hai.'],
      ['ex', 'Indian traffic me scooter chalate brain ka tour', [
        '<b>Occipital</b>: aage ka truck, signal, gaddha dekhna. <b>Parietal</b>: kaun kitna paas hai, apne haath-pair kahan hain. <b>Temporal</b>: peeche se horn ki awaaz pehchaanna. <b>Frontal</b>: "overtake karun ya nahi?" ka faisla. <b>Motor cortex + cerebellum</b>: handle aur brake ka smooth control, balance.',
        'Achanak ek kutta saamne aaya: <b>amygdala</b> ne alarm bajaya, <b>sympathetic system</b> ne dil tez kiya, <b>brainstem</b> ne saans sambhali. Aur ghar pahunch kar ye kissa yaad rakhne ka kaam <b>hippocampus</b> ka. Ek seedhi si sawaari, poora brain kaam par.'
      ]],

      ['h', 'Do hemispheres aur split-brain'],
      ['p', 'Brain ke do hisse (left aur right hemisphere) <b>corpus callosum</b> naam ke ~20 crore nerve fibers ke pul se jude hain. <b>Contralateral control</b>: left hemisphere body ke right hisse ko control karta hai aur right hemisphere left ko. Isliye left brain me stroke se right haath-pair me kamzori aati hai.'],
      ['case', 'Split-brain patients (Sperry aur Gazzaniga, 1960s)', [
        'Gambhir epilepsy me kuch patients ka corpus callosum kaat diya gaya taaki seizure ek side se doosri side na faile. Roger Sperry (Nobel Prize 1981) aur Michael Gazzaniga ne dekha: agar ek object sirf <b>left visual field</b> me dikhaya jaaye (jo right hemisphere me jaata hai), to patient uska <b>naam nahi bata paata</b>, kyunki zyada tar logon me language left hemisphere me hai. Par wo <b>left haath se us object ko utha leta</b> tha!',
        'Ye dikhata hai ki hemispheres me kuch kaam baante hue hain (lateralization). Par dhyan do: normal logon me dono hemispheres lagataar milkar kaam karte hain. "Left-brain/right-brain personality" myth hai (Chapter 1.6).'
      ]],
      ['teacher', 'Ye study pehli baar padhne par dimaag ghuma deti hai, to raasta ek baar dhyan se follow karo: left visual field, phir right hemisphere, phir left haath. Naam batane wala language centre left me hai, isliye wo chup rehta hai. Ek chhota sa diagram bana lo, turant clear ho jaayega.'],

      ['h', 'Plasticity: brain khud ko theek bhi karta hai'],
      ['p', 'Stroke ke baad physiotherapy aur speech therapy se log aksar khoye hue kaam dobara seekh lete hain, kyunki brain ke doosre hisse kaam sambhal lete hain. Bachchon ka brain zyada plastic hota hai: kuch bachche jinke ek poore hemisphere ko surgery se nikaalna pada (hemispherectomy), wo bhi chalna, bolna aur padhna seekh gaye.'],
      ['myth', 'Adult brain fixed ho jaata hai; 25 ke baad naya kuch seekhna mushkil hai.', 'Brain poori zindagi connections badalta rehta hai. Umar ke saath kuch cheezein dheemi hoti hain, par naye skills (bhasha, instrument, coding) kisi bhi umar me seekhe ja sakte hain, aur ye brain ki health ke liye achha bhi hai.'],
      ['terms', [
        ['Brainstem', 'Brain ka sabse purana hissa (medulla, pons) jo life-support functions sambhalta hai.'],
        ['Medulla', 'Dhadkan aur saans control karne wala brainstem ka hissa.'],
        ['Cerebellum', 'Balance, coordination aur motor learning sambhalne wala "chhota brain".'],
        ['Reticular formation', 'Brainstem ka network jo alertness aur arousal control karta hai.'],
        ['Thalamus', 'Sensory relay station (smell ko chhod kar).'],
        ['Amygdala', 'Darr aur emotional processing ka centre.'],
        ['Hippocampus', 'Nayi long-term yaadein banane aur spatial memory ka centre.'],
        ['Limbic system', 'Emotion aur memory se jude structures ka group (amygdala, hippocampus, hypothalamus).'],
        ['Cerebral cortex', 'Brain ki bahar ki parat jo soch, bhasha aur perception sambhalti hai.'],
        ['Frontal lobe', 'Planning, decision-making, personality aur movement ka lobe.'],
        ['Prefrontal cortex', 'Frontal lobe ka aage ka hissa: planning aur self-control; mid-20s tak develop hota hai.'],
        ['Parietal lobe', 'Touch aur spatial awareness ka lobe.'],
        ['Temporal lobe', 'Sunna, bhasha samajhna aur memory se juda lobe.'],
        ['Occipital lobe', 'Visual processing ka lobe.'],
        ['Motor cortex', 'Voluntary movement control karne wala cortex area.'],
        ['Somatosensory cortex', 'Touch, dard aur temperature process karne wala area.'],
        ['Broca\'s area', 'Bolne (speech production) se juda frontal lobe area.'],
        ['Wernicke\'s area', 'Bhasha samajhne se juda temporal lobe area.'],
        ['Corpus callosum', 'Dono hemispheres ko jodne wala nerve fibers ka pul.'],
        ['Contralateral control', 'Har hemisphere body ke ulti taraf ko control karta hai.'],
        ['Lateralization', 'Kuch kaamon ka ek hemisphere me zyada hona (jaise language left me).'],
        ['fMRI', 'Blood oxygen ke badlav se brain activity dikhane wala scan.'],
        ['EEG', 'Scalp par electrodes se brain ki electrical activity record karna.']
      ]]
    ],
    outro: 'Aaj tumne brain ka poora tour kar liya: brainstem se prefrontal cortex tak, aur H.M. aur split-brain jaise yaadgaar cases. Quiz me lobes wale sawaal par dhyan dena. Agli class me ek purana sawaal uthayenge: hum jaise hain, wo genes ki wajah se hain ya parvarish ki?',
    takeaways: [
      'Brainstem life support, cerebellum balance aur coordination sambhalta hai.',
      'Amygdala darr, hippocampus nayi yaadein; H.M. ka case memory systems ka sabse famous saboot hai.',
      'Chaar lobes: frontal (soch, planning), parietal (touch, space), temporal (sunna, bhasha), occipital (dekhna).',
      'Prefrontal cortex mid-20s tak develop hota hai, isliye teens me impulse control kam hota hai.',
      'Left hemisphere right body ko aur right hemisphere left body ko control karta hai; corpus callosum dono ko jodta hai.'
    ],
    quiz: [
      ['Nayi long-term yaadein banane ke liye sabse zaroori hissa kaunsa hai?', ['Amygdala', 'Hippocampus', 'Cerebellum', 'Medulla'], 1, 'H.M. ka hippocampus nikalne ke baad wo nayi yaadein nahi bana paata tha.'],
      ['Sharaab peene ke baad balance bigadna kis hisse par asar ka sign hai?', ['Occipital lobe', 'Cerebellum', 'Hypothalamus', 'Broca\'s area'], 1, 'Cerebellum balance aur coordination sambhalta hai.'],
      ['Phineas Gage ki personality badalne se kis lobe ka role pata chala?', ['Frontal', 'Occipital', 'Temporal', 'Parietal'], 0, 'Rod ne frontal lobe ko nuksaan pahunchaya tha, jo self-control aur personality se juda hai.'],
      ['Left hemisphere me stroke hone par aksar kis taraf kamzori aati hai?', ['Left side', 'Right side', 'Dono taraf', 'Kahin nahi'], 1, 'Contralateral control: left brain right body ko control karta hai.'],
      ['Split-brain patient left visual field me dikhi cheez ka naam kyun nahi bata paata?', ['Uski aankh kharab hai', 'Wo info right hemisphere me jaati hai aur language zyada tar left me hai', 'Wo jhooth bol raha hai', 'Cerebellum kaam nahi karta'], 1, 'Corpus callosum kata hone se right hemisphere ki info left ke language areas tak nahi pahunchti.'],
      ['Wernicke\'s area damage hone par kya hota hai?', ['Bolna bilkul band', 'Dhaarapravaah par matlab-heen bolna aur samajhne me dikkat', 'Andhapan', 'Balance bigadna'], 1, 'Wernicke\'s area bhasha samajhne se juda hai.'],
      ['Teenagers me impulsive decisions ki ek biological wajah kya hai?', ['Hippocampus bahut bada hota hai', 'Prefrontal cortex abhi develop ho raha hota hai', 'Medulla kamzor hota hai', 'Occipital lobe nahi hota'], 1, 'Prefrontal cortex (brake) mid-20s tak develop hota hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · 3.4 The Brain and Spinal Cord', OS(3), 'book'],
      ['Phantoms in the Brain (V.S. Ramachandran) · Indian-origin neuroscientist ki zabardast book', GR('Phantoms in the Brain Ramachandran'), 'book'],
      ['Crash Course Psychology: Meet Your Master', YT('Crash Course Psychology 4 meet your master brain'), 'video']
    ]
  });

  /* 2.4 */
  C({
    id: 'genes-evolution', level: 2, mins: 15, visual: 'heritability',
    visualCap: 'Twin studies se nikle heritability ke andaze (approximate). Dhyan do: ye population me farak ka hissa batata hai, kisi ek insaan ki kismat nahi.',
    title: 'Genes, evolution aur behaviour',
    tag: 'Nature vs nurture ka asli jawab: twins, heritability, epigenetics aur jalebi ki craving ka evolutionary raaz',
    intro: 'Pichhli class me humne brain ki banawat dekhi. Par ye brain bana kaise, aur har insaan ka thoda alag kyun hai? Aaj genes, twins aur evolution ki baat karenge. Iske baad "ye to khaandaani hai" jaisi baatein tumhe ek naye nazariye se samajh aayengi.',
    hook: 'Papa jaisi naak, mummy jaisi hansi... par kya tumhara gussa, tumhari shyness, ya maths me achha hona bhi genes se aaya hai? Ya parvarish se? Psychology ka jawab hai: <b>"dono, aur dono ek-doosre ko badalte hain."</b> Chalo dekhte hain kaise.',
    blocks: [
      ['h', 'Genes ki basic bhasha'],
      ['list', [
        '<b>DNA</b>: ek lambi molecule jisme body banane aur chalane ke instructions hain.',
        '<b>Chromosomes</b>: DNA ke bandal. Insaan me <b>23 jode</b> (46), aadhe maa se aadhe papa se.',
        '<b>Genes</b>: DNA ke hisse jo proteins banane ka code rakhte hain; insaan me lagbhag 20,000 protein-coding genes hain.',
        '<b>Genotype</b> = tumhara genetic code. <b>Phenotype</b> = jo asal me dikhta ya hota hai (genes + environment ka nateeja).'
      ]],
      ['p', 'Sabse important baat: psychological traits jaise intelligence, personality ya depression ka risk <b>polygenic</b> hain, yaani hazaron genes, har ek ka bahut chhota asar. Koi ek "intelligence gene" ya "gusse ka gene" nahi hota.'],

      ['h', 'Genes ka asar kaise naapte hain?'],
      ['list', [
        '<b>Family studies</b>: kya trait parivaar me chalta hai? Par parivaar genes ke saath ghar ka mahaul bhi share karta hai.',
        '<b>Twin studies</b>: <b>identical (monozygotic, MZ)</b> twins ka DNA lagbhag 100% same hota hai, <b>fraternal (dizygotic, DZ)</b> ka ~50% (aam bhai-behen jaisa). Agar MZ twins kisi trait me DZ se zyada milte-julte hain, to genes ka role hai.',
        '<b>Adoption studies</b>: adopted bachcha trait me janam dene wale parents jaisa hai (genes) ya paalne walon jaisa (environment)?'
      ]],
      ['case', 'Minnesota Study of Twins Reared Apart (Bouchard aur saathi, 1979-1999)', [
        'Researchers ne aise identical twins ko dhoondha jo bachpan me alag hokar alag gharon me pale. Sabse mashhoor "Jim twins" the: 4 hafte ki umar me alag hue, dono ka naam Jim rakha gaya, dono ne Linda naam ki ladki se shaadi ki, talaak liya, phir Betty se shaadi ki! (Aisi kahaniyon me coincidence bhi bahut hota hai, isliye scientists data par bharosa karte hain.)',
        'Asli finding: alag pale identical twins bhi personality, interests aur IQ me kaafi milte-julte the, lagbhag saath pale twins jitne. Isse dikha ki genes ka asar substantial hai.'
      ]],

      ['h', 'Heritability: sabse zyada galat samjha jaane wala number'],
      ['p', '<b>Heritability</b> batati hai ki <b>ek population me</b> kisi trait me logon ke beech jo <b>farak</b> hai, uska kitna hissa genetic farak se samjhaya ja sakta hai. Upar ka chart kuch traits ke andaze dikhata hai.'],
      ['list', [
        'Height ki heritability ~80% ka matlab ye <b>nahi</b> ki tumhari 80% height genes se aur 20% khane se aayi. Ye ek <b>population-level</b> statistic hai, individual ke baare me nahi.',
        'Heritability <b>fixed nahi</b>. Agar sabko barabar achha khana mile, to height ke farak ka zyada hissa genes se aayega aur heritability badh jaayegi. Jahan kuch logon ko bhar pet khana na mile, wahan environment ka role bada dikhega.',
        'High heritability ka matlab "badla nahi ja sakta" nahi. Eyesight (myopia) heritable hai, phir bhi chashma use poori tarah theek kar deta hai.'
      ]],
      ['teacher', 'Ruko, yahan sab confuse hote hain, to ek example lo: agar ek class me sabko bilkul same khana, same school aur same ghar mile, to height ka saara farak genes se hi aayega aur heritability badh jaayegi. Matlab heritability sirf genes ki taakat nahi, balki ye bhi dikhati hai ki mahaul kitna barabar hai.'],
      ['ex', 'Genes same, height alag', 'World War 2 ke baad Japan me poshan behtar hua to kuch hi dashakon me logon ki average height kaafi badh gayi. Itne kam samay me genes nahi badalte; khana badla. Isi tarah India me bhi bachchon ki growth aur poshan (stunting) ke aankde dikhate hain ki environment kitna bada role nibhata hai.'],

      ['h', 'Gene × environment: dono milkar'],
      ['case', 'PKU: genetic bimari, environmental ilaaj', 'Phenylketonuria (PKU) ek genetic condition hai jisme body phenylalanine (protein me milne wala amino acid) tod nahi paati. Ilaaj na ho to ye jama hokar gambhir intellectual disability kar deta hai. Lekin agar janam ke turant baad pata chal jaaye (newborn screening) aur khaas diet di jaaye, to bachcha normal develop karta hai. <b>Genetic hone ka matlab "badla nahi ja sakta" nahi hota.</b>'],
      ['teacher', 'Ye case mujhe bahut pasand hai, kyunki ye "genes = kismat" wali soch ko ek jhatke me tod deta hai. Jab bhi koi kahe "hamare khaandaan me sab aise hi hain, kuch nahi ho sakta", to PKU yaad karna.'],
      ['p', '<b>Diathesis-stress model</b>: genes ek "jhukaav" (vulnerability) dete hain, aur environment ka stress tay karta hai ki wo trait ya bimari saamne aayegi ya nahi. Jaise depression ka genetic risk wale vyakti me lambe stress ke baad depression ka chance zyada hota hai. Level 6 me ise detail me dekhenge.'],
      ['p', '<b>Epigenetics</b>: environment genes ko "on" ya "off" kar sakta hai, bina DNA ka code badle (jaise DNA par chemical tags, methylation). Dutch Hunger Winter (1944-45) me jo bachche akaal ke dauraan garbh me the, unme dashakon baad kuch genes par alag epigenetic marks aur alag health outcomes mile. Ye field naya hai, isliye media ke "tum apne genes badal sakte ho!" jaise daavon se savdhaan raho.'],

      ['h', 'Evolutionary psychology'],
      ['p', 'Darwin ki <b>natural selection</b>: jo traits survival aur bachche paida karne me madad karte the, wo peedhi dar peedhi aage badhe. Evolutionary psychology poochhti hai: hamare kaunse <b>mental tendencies</b> isi tarah bane?'],
      ['list', [
        '<b>Saanp aur oonchai ka darr</b>: ye darr bahut jaldi seekh jaate hain (prepared learning), jabki bijli ke socket ka darr nahi, jo zyada khatarnak hai. Kyunki saanp hazaron saal se khatra hai, socket sirf 100 saal se.',
        '<b>Meetha aur charbi pasand</b>: jahan calories mushkil se milti thi wahan ye survival tha.',
        '<b>Social belonging</b>: group se nikal diya jaana pehle maut ke barabar tha; isliye rejection ka dard itna gehra lagta hai.'
      ]],
      ['ex', 'Jalebi ki craving aur "mismatch"', 'Hamare purvajon ke liye meetha phal milna rare aur keemti tha, isliye brain meethe ko bahut zyada reward deta hai. Aaj har gali me mithai ki dukaan hai, par brain ka program wahi purana hai. Isi ko <b>evolutionary mismatch</b> kehte hain: purane mahaul ke liye bane traits naye mahaul me problem (jaise obesity, diabetes) paida karte hain.'],
      ['teacher', 'Apni kisi raat ki craving yaad karo, jab pet bhara tha phir bhi kuch meetha chahiye tha. Wo tumhari kamzori nahi, hazaron saal purana program hai. Ise jaan lena hi control ki pehli seedhi hai: mithai ghar me kam rakho, program apne aap kam chalega.'],
      ['note', 'Evolutionary explanations ki aalochana: kai baar ye "just-so stories" ban jaati hain, yaani baad me bani kahani jo kisi bhi behaviour ko "evolution ki wajah se" bata de, par test na ki ja sake. Achhi evolutionary psychology testable predictions deti hai aur cultures ke beech check karti hai.'],
      ['myth', 'Agar koi trait genetic hai to wo badal nahi sakta, aur environment bekaar hai.', 'Genes "destiny" nahi, "probability" hain. PKU, myopia aur height ke examples dikhate hain ki genetic traits par bhi environment ka bada asar hota hai. Aur zyada tar psychological traits me heritability 30-60% ke aas-paas hai, matlab environment ka role bhi utna hi bada.'],
      ['terms', [
        ['Gene', 'DNA ka hissa jo kisi protein banane ka code rakhta hai.'],
        ['Chromosome', 'DNA ka bandal; insaan me 23 jode.'],
        ['Genotype', 'Kisi vyakti ka genetic makeup.'],
        ['Phenotype', 'Dikhne wale traits jo genes aur environment ke milne se bante hain.'],
        ['Polygenic trait', 'Wo trait jo bahut saare genes ke chhote-chhote asar se banta hai.'],
        ['Heritability', 'Population me kisi trait ke farak ka wo hissa jo genetic farak se samjhaya ja sake.'],
        ['Monozygotic twins', 'Identical twins jo ek hi fertilized egg se bane aur lagbhag same DNA rakhte hain.'],
        ['Dizygotic twins', 'Fraternal twins jo do alag eggs se bane; ~50% DNA share.'],
        ['Adoption study', 'Adopted bachchon ki tulna janam aur paalne wale parents se karke genes vs environment samajhna.'],
        ['Epigenetics', 'Environment dwara genes ka on/off hona, bina DNA sequence badle.'],
        ['Diathesis-stress model', 'Vulnerability (diathesis) + stress milkar disorder paida karte hain, ye model.'],
        ['Natural selection', 'Survival aur reproduction me madad karne wale traits ka peedhi dar peedhi badhna.'],
        ['Evolutionary psychology', 'Psychological traits ko natural selection ke nazariye se samajhne wali field.'],
        ['Evolutionary mismatch', 'Purane mahaul ke liye bane traits ka aaj ke mahaul me nuksaan karna.'],
        ['Prepared learning', 'Kuch associations (jaise saanp ka darr) ko jaldi seekhne ki evolutionary taiyaari.']
      ]],
      ['think', 'Agar ek trait ki heritability 50% hai, to kya tumhara aadha trait genes se aaya hai?', [
        'Nahi. Heritability individual par apply hi nahi hoti. Iska matlab sirf itna hai ki <b>us population me</b> us trait ke farak ka lagbhag aadha hissa genetic farak se juda hai. Tumhare andar genes aur environment itne ghule-mile hain ki unhe percent me baantna mumkin nahi, jaise ye poochhna ki cake ka kitna swaad aate se aaya aur kitna cheeni se.'
      ]]
    ],
    outro: 'Aaj ka saar: genes "destiny" nahi, "probability" hain, aur environment unke saath milkar kaam karta hai. Quiz me heritability wala sawaal dhyan se padhna. Agli class me dekhenge ki brain duniya ko kaise dekhta aur sunta hai: sensation aur perception, illusions ke saath.',
    takeaways: [
      'Psychological traits polygenic hote hain: koi ek "gene for X" nahi.',
      'Twin aur adoption studies genes aur environment ke asar ko alag karne me madad karti hain.',
      'Heritability population ka concept hai, individual ka nahi, aur environment ke saath badalti hai.',
      'Genes aur environment interact karte hain: PKU, diathesis-stress, epigenetics.',
      'Evolution ne hamare darr, pasand aur social needs ko shape kiya; aaj kai baar "mismatch" hota hai.'
    ],
    quiz: [
      ['Identical (MZ) twins lagbhag kitna DNA share karte hain?', ['25%', '50%', '~100%', '75%'], 2, 'MZ twins ek hi egg se bante hain, isliye DNA lagbhag same hota hai.'],
      ['"Height ki heritability 80% hai" ka sahi matlab kya hai?', ['Har vyakti ki 80% height genes se hai', 'Us population me height ke farak ka ~80% genetic farak se juda hai', 'Khane ka height par koi asar nahi', '80% log lambe hain'], 1, 'Heritability population me variation ke baare me hai, individuals ke baare me nahi.'],
      ['PKU ka example kya sikhata hai?', ['Genetic bimariyan kabhi theek nahi hoti', 'Genetic condition bhi environment (diet) se control ho sakti hai', 'Diet ka genes par koi asar nahi', 'PKU sirf adults me hota hai'], 1, 'Sahi diet se PKU ke nuksaan ko roka ja sakta hai.'],
      ['Environment dwara genes ko on/off karne ki process kya kehlati hai?', ['Natural selection', 'Epigenetics', 'Heritability', 'Polygenic inheritance'], 1, 'Epigenetics DNA sequence badle bina gene expression badalta hai.'],
      ['Meethe ki craving aur aaj obesity ka badhna kis concept se samjhaya jaata hai?', ['Prepared learning', 'Evolutionary mismatch', 'Twin study', 'Epigenetics'], 1, 'Purane mahaul ka faydemand trait naye mahaul me nuksaan karta hai.'],
      ['Psychological traits jaise intelligence ke liye sahi baat kya hai?', ['Ek hi gene control karta hai', 'Bahut saare genes ka chhota-chhota asar hai (polygenic)', 'Sirf environment se aata hai', 'Sirf maa ke genes se aata hai'], 1, 'Zyada tar complex traits polygenic hote hain.']
    ],
    more: [
      ['Behave (Robert Sapolsky) · biology aur behaviour par sabse gehri book', GR('Behave Sapolsky'), 'book'],
      ['Crash Course Psychology: Homo sapiens and evolution', YT('Crash Course Psychology nature vs nurture genetics'), 'video'],
      ['OpenStax Psychology 2e · 3.1 Human Genetics', OS(3), 'book']
    ]
  });

  /* 2.5 */
  C({
    id: 'sensation-perception', level: 2, mins: 20, visual: 'gestalt',
    visualCap: 'Gestalt principles: brain bikhre hue tukdon ko apne aap groups aur shapes me jod deta hai.',
    title: 'Sensation aur perception',
    tag: 'Aankh dekhti nahi, brain dekhta hai: thresholds, illusions, depth, attention aur rassi-saanp ka bhram',
    intro: 'Ab tak humne brain ki banawat aur uski jadein dekhi. Aaj dekhenge ki ye brain bahar ki duniya ko kaise pakadta aur samajhta hai. Taiyaar raho, aaj kuch illusions tumhari aankhon ko dhoka denge, aur tumhe pata chalega ki "dekhna" asal me brain ka kaam hai.',
    hook: 'Tumhari aankh ke retina par duniya ki image <b>ulti</b> banti hai, aur har aankh me ek <b>blind spot</b> hai jahan koi light receptor hi nahi. Phir bhi duniya seedhi aur poori dikhti hai. Kyun? Kyunki aankh sirf data bhejti hai; <b>dekhne ka asli kaam brain karta hai</b>. Aur brain kabhi-kabhi galti bhi karta hai.',
    blocks: [
      ['h', 'Sensation vs perception'],
      ['compare', ['Sensation', 'Sense organs ke <b>receptors</b> energy (light, sound waves, chemicals, pressure) ko pakad kar use neural signals me badalte hain. Is badalne ko <b>transduction</b> kehte hain. Ye <b>bottom-up</b> process hai: data neeche se upar.'], ['Perception', 'Brain un signals ko <b>organize aur interpret</b> karta hai: "ye mera dost hai", "ye gaana purana hai". Isme hamari expectations, yaadein aur context bhi shaamil hote hain: <b>top-down</b> processing.']],

      ['h', 'Thresholds: kitna kam mehsoos kar sakte ho?'],
      ['list', [
        '<b>Absolute threshold</b>: sabse kam stimulus jo 50% baar detect ho. Classic textbook andaze: saaf andheri raat me ~48 km door mombatti ki lau, ya shant kamre me ~6 meter door ghadi ki tik-tik.',
        '<b>Difference threshold (JND, just noticeable difference)</b>: do stimuli me sabse chhota farak jo pakda ja sake.',
        '<b>Weber\'s law</b>: JND original stimulus ke ek <b>fixed percentage</b> par hota hai, fixed amount par nahi.'
      ]],
      ['ex', 'Weber\'s law shopping me', '2 kilo ke thaile me 1 kilo aur daalo, turant farak lagega. 40 kilo ke bore me 1 kilo daalo, pata bhi nahi chalega. Isi tarah ₹10 ki cheez ₹15 ki ho jaaye to bahut mehenga lagta hai, par ₹10 lakh ki car me ₹5 hazaar ka extra accessory "chhota sa" lagta hai. Companies isi ka fayda uthati hain: packet ka size dheere-dheere thoda-thoda chhota karna (shrinkflation) taaki JND paar na ho.'],
      ['p', '<b>Signal detection theory</b> kehti hai ki detect karna sirf senses ki sharpness (<b>sensitivity</b>) par nahi, hamare <b>criterion</b> (kitna sure hone par "haan" bolein) par bhi depend karta hai. Chaar results: hit, miss, false alarm, correct rejection.'],
      ['ex', 'Phantom vibration', 'Kai log jeb me phone vibrate hota mehsoos karte hain jabki koi call ya message nahi aaya. Important message ka intezaar criterion ko neeche kar deta hai, aur brain kapde ki halki ragad ko bhi "vibration" maan leta hai: ek <b>false alarm</b>. Airport security aur X-ray dekhne wale doctors ke liye bhi yahi trade-off hai: zyada sensitive = zyada false alarms.'],
      ['p', '<b>Sensory adaptation</b>: lagataar same stimulus par receptors response kam kar dete hain. Apna perfume 10 minute baad khud ko nahi aata, thande paani me utarne ke 1 minute baad paani theek lagta hai. Brain badlav par dhyan deta hai, constant cheezon par nahi.'],
      ['teacher', 'Ek chhota sa experiment: abhi apne aas-paas ki koi lagataar awaaz pehchaano, jaise pankha ya fridge. Ab tak wo sunai hi nahi de rahi thi na? Yahi sensory adaptation hai, jo hamesha background me chal raha hota hai.'],

      ['h', 'Vision: aankh se brain tak'],
      ['steps', [
        ['Cornea aur lens', 'Light ko mod kar (focus karke) retina par daalte hain. Image ulti banti hai.'],
        ['Retina', 'Aankh ke peeche ki parat jisme do tarah ke receptors: <b>rods</b> (kam roshni, kinare ka vision, black-white; ~12 crore) aur <b>cones</b> (rang aur detail, zyada tar <b>fovea</b> me; ~60 lakh).'],
        ['Optic nerve', 'Signals brain tak le jaati hai. Jahan ye retina se nikalti hai wahan koi receptor nahi: <b>blind spot</b>.'],
        ['Thalamus → occipital lobe', 'Visual cortex me edges, rang, motion alag-alag process hote hain aur phir jod kar ek tasveer banti hai.']
      ]],
      ['tip', [
        '<b>Apna blind spot dhoondo</b>: kaagaz par baayein taraf ek <b>+</b> aur ~8 cm daayein ek <b>●</b> banao. Baayein aankh band karo, daayein aankh se <b>+</b> ko dekho, aur kaagaz ko dheere aage-peeche karo. ~25-30 cm par <b>●</b> gayab ho jaayega! Brain us jagah ko aas-paas ke pattern se "bhar" deta hai.',
        '<b>Afterimage</b>: kisi laal cheez ko 30 second ghoor kar safed deewar dekho; hara rang dikhega. Ye <b>opponent-process theory</b> ka saboot hai.'
      ]],
      ['p', 'Rang ki do theories milkar kaam karti hain: <b>Trichromatic theory</b> (retina me teen tarah ke cones: laal, hara, neela light ke liye sensitive) aur <b>opponent-process theory</b> (aage ke cells laal-hara, neela-peela, kaala-safed ke jodon me kaam karte hain). Red-green colour blindness purushon me zyada common hai (kuch populations me ~8% tak), kyunki iske genes X chromosome par hote hain.'],
      ['teacher', 'Ruko, dono theories me jhagda mat dhoondho. Simple tarike se: <b>trichromatic retina ke level par</b> kaam karti hai, aur <b>opponent-process uske baad</b> ke cells me. Pehle teen cones, phir jodiyan. Dono sahi hain, bas alag station par.'],

      ['h', 'Hearing aur baaki senses'],
      ['p', 'Sound waves kaan ke parde (eardrum) ko hilati hain → teen chhoti haddiyan (ossicles) → <b>cochlea</b> (ghonghe jaisa, paani bhara) me <b>hair cells</b> mudti hain aur signal auditory nerve se brain jaata hai. Tez awaaz hair cells ko hamesha ke liye nuksaan pahuncha sakti hai; 85 decibel se upar lambe samay tak sunna khatarnak hai. Earphones par <b>60/60 rule</b> rakho: max 60% volume, ek baar me 60 minute.'],
      ['list', [
        '<b>Taste</b>: paanch basic swaad: meetha, khatta, namkeen, kadwa, aur <b>umami</b> (tomato, mushroom jaisa savory). Ziada tar "swaad" asal me smell hai; isliye zukaam me khana feeka lagta hai.',
        '<b>Smell</b>: akela sense jo thalamus se pehle seedha olfactory bulb aur phir emotion/memory areas (amygdala, hippocampus) se judta hai. Isliye pehli baarish ki mitti ki khushboo ya maa ke khane ki mehek turant purani yaadein jaga deti hai.',
        '<b>Touch aur pain</b>: <b>Gate control theory</b> kehti hai spinal cord me ek "gate" hai jo pain signals ko roak ya jaane de sakta hai. Chot par jagah ko ragadne se touch signals gate band kar dete hain, isliye dard kam lagta hai.',
        '<b>Vestibular sense</b> (andar ke kaan me balance) aur <b>proprioception</b> (body ke hisse kahan hain, aankh band karke bhi naak chhoo paana).'
      ]],
      ['ex', 'Bus me ulti kyun aati hai?', 'Bus me kitaab padhte waqt aankhein kehti hain "sab ruka hua hai" par andar ke kaan ka vestibular system kehta hai "hum hil rahe hain". Is <b>sensory conflict</b> ko brain zeher ke symptom jaisa samajh leta hai (purane zamaane me aisi gadbad aksar zehreele khane se hoti thi) aur ulti ka signal deta hai. Bahar door dekhne se dono senses match hone lagte hain.'],

      ['h', 'Perception: Gestalt principles'],
      ['p', 'German Gestalt psychologists ka mashhoor vichar: <b>"whole apne hisson ke jod se alag hota hai."</b> Brain apne aap patterns banata hai:'],
      ['list', [
        '<b>Figure-ground</b>: hum cheez (figure) ko background se alag karte hain. Mashhoor "vase ya do chehre" image.',
        '<b>Proximity</b>: paas-paas ki cheezein ek group lagti hain.',
        '<b>Similarity</b>: ek jaisi cheezein (rang, shape) ek group lagti hain.',
        '<b>Closure</b>: adhoori shape ko brain poora kar deta hai (WWF ka panda logo).',
        '<b>Continuity</b>: hum smooth, lagataar lines dekhna pasand karte hain.',
        '<b>Common fate</b>: ek saath ek disha me chalne wali cheezein ek group lagti hain (udte pakshiyon ka jhund).'
      ]],

      ['h', 'Depth perception: 2D retina, 3D duniya'],
      ['p', '<b>Visual cliff</b> experiment (Gibson aur Walk, 1960) me zyada tar 6-14 mahine ke bachche glass ke neeche "gehrai" dikhne par us par crawl karne se mana kar dete the, maa bulaati rahi tab bhi. Matlab depth perception bahut jaldi aa jaati hai.'],
      ['table', ['Cue', 'Type', 'Example'], [
        ['Retinal disparity', 'Binocular (do aankhein)', 'Dono aankhein thodi alag image dekhti hain; farak jitna zyada, cheez utni paas. 3D movies isi ka use karti hain.'],
        ['Convergence', 'Binocular', 'Paas ki cheez dekhte waqt aankhein andar ki taraf mudti hain.'],
        ['Relative size', 'Monocular (ek aankh kaafi)', 'Do same cheezon me chhoti dikhne wali door lagti hai.'],
        ['Interposition', 'Monocular', 'Jo cheez doosri ko dhakti hai wo paas hai.'],
        ['Linear perspective', 'Monocular', 'Railway ki patriyan door jaakar milti hui lagti hain.'],
        ['Motion parallax', 'Monocular', 'Train ki khidki se paas ke ped tezi se aur door ke pahad dheere guzarte dikhte hain.']
      ]],

      ['h', 'Illusions aur perceptual set'],
      ['p', '<b>Perceptual constancy</b>: door jaata dost chhota nahi lagta (size constancy), khula darwaza trapezoid hone par bhi rectangle lagta hai (shape constancy). Yahi shortcuts kabhi-kabhi <b>illusions</b> paida karte hain, jaise Müller-Lyer illusion, jisme do barabar lines teer ke nishano ki wajah se alag lambi lagti hain.'],
      ['lab', 'mullerlyer'],
      ['p', 'Dilchasp baat: 1960s me Segall aur saathiyon ki cross-cultural study me kuch aise samudaayon ke log jo seedhe kono wali imaaraton (carpentered world) ke beech kam rehte the, Müller-Lyer illusion se kam prabhavit hue. Matlab perception par culture aur experience ka bhi asar hai.'],
      ['ex', 'Rassi aur saanp (rajju-sarpa)', 'Bharatiya darshan ka ek purana udaharan hai: andhere me padi rassi ko saanp samajh kar darr jaana. Psychology isse <b>perceptual set</b> aur top-down processing kehti hai: jo hum expect karte hain (andhera + khatra = saanp), wahi dekhte hain. Isi wajah se horror movie ke baad parda hilna bhi bhoot lagta hai.'],

      ['h', 'Attention: hum sab kuch nahi dekhte'],
      ['p', '<b>Selective attention</b>: hum ek waqt me thodi si cheezon par dhyan dete hain. <b>Cocktail party effect</b>: shaadi ke shor me bhi apna naam sunte hi dhyan us taraf chala jaata hai.'],
      ['case', 'Invisible gorilla (Simons aur Chabris, 1999)', 'Logon ko ek video dikhaya gaya jisme safed t-shirt wale players ke passes ginne the. Beech me gorilla costume pehne ek vyakti beech me aakar chhaati peet kar chala gaya. Lagbhag <b>aadhe logon ne gorilla dekha hi nahi</b>. Ise <b>inattentional blindness</b> kehte hain. Isi wajah se gaadi chalate waqt phone par baat karne wale aksar saamne ki cheezein "dekh kar bhi nahi dekhte".'],
      ['teacher', 'Kitni baar aisa hua hai ki ghar me chaabi dhoondhte waqt wo saamne hi padi thi aur dikhi nahi? Ye laaparwahi nahi, inattentional blindness hai. Isiliye gaadi chalate waqt phone wala niyam itna sakht hai.'],
      ['lab', 'visualsearch'],
      ['terms', [
        ['Sensation', 'Sense receptors dwara physical energy ko pakadna aur neural signal banana.'],
        ['Perception', 'Sensory information ko organize aur interpret karna.'],
        ['Transduction', 'Physical energy ka neural signals me badalna.'],
        ['Absolute threshold', 'Sabse kam stimulus jo 50% baar detect ho sake.'],
        ['Difference threshold (JND)', 'Do stimuli me sabse chhota farak jo mehsoos ho.'],
        ['Weber\'s law', 'JND original stimulus ke ek fixed proportion par hota hai.'],
        ['Signal detection theory', 'Detection sensitivity aur decision criterion dono par depend karta hai, ye theory.'],
        ['Sensory adaptation', 'Lagataar stimulus par sensitivity ka kam hona.'],
        ['Rods', 'Kam roshni aur peripheral vision ke receptors.'],
        ['Cones', 'Rang aur detail ke receptors, zyada tar fovea me.'],
        ['Fovea', 'Retina ka beech ka hissa jahan sabse sharp vision hota hai.'],
        ['Blind spot', 'Retina par optic nerve ke nikalne ki jagah jahan koi receptor nahi.'],
        ['Trichromatic theory', 'Teen tarah ke cones se rang dekhne ki theory.'],
        ['Opponent-process theory', 'Rang opposite jodon (laal-hara, neela-peela) me process hote hain, ye theory.'],
        ['Cochlea', 'Andar ke kaan ka ghonghe jaisa hissa jahan sound neural signal banti hai.'],
        ['Gate control theory', 'Spinal cord ka "gate" pain signals ko rok ya jaane de sakta hai.'],
        ['Vestibular sense', 'Balance aur body ki position ka sense, andar ke kaan me.'],
        ['Proprioception', 'Body ke hisson ki position aur movement ka andruni sense.'],
        ['Gestalt principles', 'Brain dwara cheezon ko groups aur wholes me organize karne ke niyam.'],
        ['Figure-ground', 'Kisi cheez ko uske background se alag dekhna.'],
        ['Binocular cues', 'Dono aankhon par based depth cues (jaise retinal disparity).'],
        ['Monocular cues', 'Ek aankh se bhi milne wale depth cues (jaise linear perspective).'],
        ['Perceptual constancy', 'Badalti sensory input ke bawajood cheez ko same perceive karna.'],
        ['Top-down processing', 'Expectations aur knowledge se perception ko guide karna.'],
        ['Bottom-up processing', 'Sensory data se shuru hokar perception banana.'],
        ['Perceptual set', 'Expectation ki wajah se kisi cheez ko ek khaas tarah se dekhne ka jhukaav.'],
        ['Selective attention', 'Kuch stimuli par dhyan dena aur baaki ko ignore karna.'],
        ['Inattentional blindness', 'Dhyan kahin aur hone par saamne ki saaf cheez bhi na dekh paana.'],
        ['Change blindness', 'Scene me badlav ko notice na kar paana.']
      ]]
    ],
    outro: 'Aaj tumne dekha ki aankh aur kaan sirf data bhejte hain, asli kahani brain banata hai, kabhi-kabhi galtiyon ke saath. Quiz do, aur agli baar andhere me rassi saanp lage to muskura dena. Agli class Level 2 ki aakhri hai: consciousness, neend aur sapne.',
    takeaways: [
      'Sensation = data pakadna (bottom-up); perception = matlab nikalna (top-down bhi).',
      'Weber\'s law: farak percentage me mehsoos hota hai; signal detection me criterion bhi matter karta hai.',
      'Rods kam roshni, cones rang aur detail; blind spot ko brain bhar deta hai.',
      'Gestalt principles aur depth cues brain ke apne niyam hain jo illusions bhi paida karte hain.',
      'Attention seemit hai: inattentional blindness se saamne ki cheez bhi chhoot sakti hai.'
    ],
    quiz: [
      ['Physical energy ko neural signal me badalne ki process kya kehlati hai?', ['Perception', 'Transduction', 'Adaptation', 'Convergence'], 1, 'Receptors energy ko neural signals me "transduce" karte hain.'],
      ['2 kg me 1 kg ka farak turant pata chalta hai, 40 kg me nahi. Ye kaunsa law hai?', ['Weber\'s law', 'Gate control', 'All-or-none', 'Figure-ground'], 0, 'Weber\'s law: JND original stimulus ka fixed proportion hota hai.'],
      ['Kam roshni me dekhne ke liye kaunse receptors zyada kaam aate hain?', ['Cones', 'Rods', 'Hair cells', 'Fovea'], 1, 'Rods dim light me sensitive hote hain; cones rang aur detail ke liye.'],
      ['Railway patriyan door jaakar milti hui lagti hain. Ye kaunsa depth cue hai?', ['Retinal disparity', 'Linear perspective', 'Convergence', 'Interposition'], 1, 'Parallel lines door jaakar milti dikhti hain: linear perspective (monocular cue).'],
      ['Invisible gorilla study kya dikhati hai?', ['Log gorillas se darte hain', 'Dhyan kahin aur ho to saamne ki saaf cheez bhi miss ho sakti hai', 'Video dekhne se memory badhti hai', 'Gorilla dikhna illusion hai'], 1, 'Ise inattentional blindness kehte hain.'],
      ['Chot par ragadne se dard kam kyun lagta hai?', ['Endorphins khatam ho jaate hain', 'Gate control theory: touch signals pain gate band karte hain', 'Blood flow ruk jaata hai', 'Ye sirf placebo hai'], 1, 'Gate control theory ke hisaab se non-pain signals spinal "gate" ko band kar dete hain.'],
      ['Andhere me rassi ko saanp samajhna kis cheez ka example hai?', ['Sensory adaptation', 'Perceptual set / top-down processing', 'Weber\'s law', 'Transduction'], 1, 'Expectation perception ko shape karti hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 5: Sensation and Perception', OS(5), 'book'],
      ['Crash Course Psychology: Sensation & Perception', YT('Crash Course Psychology sensation perception'), 'video'],
      ['The Invisible Gorilla (Chabris & Simons) · book', GR('The Invisible Gorilla Chabris Simons'), 'book']
    ]
  });

  /* 2.6 */
  C({
    id: 'consciousness-sleep', level: 2, mins: 19, visual: 'sleepCycle',
    visualCap: 'Ek raat ki neend: ~90 minute ke 4-6 cycles. Shuru ki raat me deep sleep (N3) zyada, subah ki taraf REM (sapne) lamba hota jaata hai.',
    title: 'Consciousness, neend aur sapne',
    tag: 'Circadian rhythm, sleep stages, all-nighter ka nuksaan, sleep paralysis ka "bhoot", aur drugs ka brain par asar',
    intro: 'Level 2 ki aakhri class me tumhara swagat! Ab tak humne brain ko jaagte hue kaam karte dekha. Aaj dekhenge ki jab ye "off" lagta hai tab kya hota hai: neend, sapne aur consciousness ke alag levels. Ye class tumhari exam strategy bhi badal sakti hai, kyunki neend padhai ki dushman nahi, saathi hai.',
    hook: 'Agar zindagi 75 saal ki ho, to usme se lagbhag <b>25 saal neend me guzarte hain</b>. Phir bhi hum neend ko "time waste" samajhte hain aur exam se pehle sabse pehle usi ko kaat dete hain. Science kehta hai ye bahut mehengi galti hai. Chalo dekhte hain kyun.',
    blocks: [
      ['h', 'Consciousness kya hai?'],
      ['p', '<b>Consciousness</b> apne aap aur apne aas-paas ke baare me jaagrukta (awareness) hai: abhi ye padhna, peeth par kursi ka dabaav mehsoos karna, kal ki chinta. Ye ek "on/off" switch nahi, balki levels me hota hai: poori alertness, din me sapne dekhna, neend, anaesthesia, coma.'],
      ['compare', ['Controlled processing', 'Dhyan maangta hai, dheema, ek waqt me ek kaam. Jaise naya route dhoondhte hue gaadi chalana ya maths ka sawaal.'], ['Automatic processing', 'Bina dhyan ke, tez, ek saath kai kaam. Jaise roz ka raasta, apni bhasha padhna. Itna automatic ki rokna mushkil.']],
      ['p', 'Automatic processing kitni powerful hai, ye <b>Stroop effect</b> dikhata hai: shabd "LAAL" agar neele rang me likha ho aur tumhe <i>rang</i> batana ho, to zubaan atak jaati hai, kyunki padhna automatic hai aur rokna padta hai.'],
      ['lab', 'stroop'],

      ['h', 'Circadian rhythm: body ki andar ki ghadi'],
      ['p', 'Hamare body me lagbhag 24 ghante ki ek ghadi chalti hai: <b>circadian rhythm</b>. Iska master clock hypothalamus ka <b>suprachiasmatic nucleus (SCN)</b> hai, jo aankhon se aane wali roshni se roz reset hota hai. Andhera hone par pineal gland <b>melatonin</b> chhodti hai aur neend aane lagti hai. Body temperature, alertness aur hormones bhi is rhythm me upar-neeche hote hain.'],
      ['list', [
        '<b>Jet lag aur night shift</b>: andar ki ghadi aur bahar ka time match nahi karte; neend, digestion aur mood gadbad.',
        '<b>Teenagers</b>: puberty me circadian rhythm biologically aage khisak jaata hai; teens ko naturally der se neend aati hai aur der se uthna achha lagta hai. Subah 7 baje ki class unke liye "aadhi raat" jaisi ho sakti hai.',
        '<b>Screens</b>: raat ko tez roshni (khaas kar neeli) melatonin ko dabati hai aur andar ki ghadi ko "abhi din hai" ka signal deti hai. Saath me content bhi dimaag ko jagaye rakhta hai.'
      ]],

      ['h', 'Neend ke stages'],
      ['p', 'EEG se pata chalta hai ki neend ek jaisi nahi hoti. Raat bhar hum <b>~90 minute ke cycles</b> me chaar stages se guzarte hain:'],
      ['table', ['Stage', 'Kya hota hai', 'Khaas baat'], [
        ['N1 (halki neend)', 'Jaagne aur sone ke beech; kuch minute', 'Girne jaisa jhatka (hypnic jerk) aksar yahin aata hai'],
        ['N2', 'Dhadkan aur temperature girte hain; EEG me <b>sleep spindles</b>', 'Poori raat ka sabse bada hissa (~45-50%)'],
        ['N3 (deep / slow-wave)', 'Dheemi, badi delta waves; jagana bahut mushkil', 'Body repair, growth hormone; sleepwalking aur night terrors yahin'],
        ['REM', 'Aankhein tezi se hilti hain, brain jaagne jaisa active, par body ki muscles lagbhag paralyzed', 'Sabse vivid sapne; "paradoxical sleep"']
      ]],
      ['p', 'Raat ke pehle hisse me <b>N3 (deep sleep)</b> zyada hoti hai, aur subah ki taraf <b>REM</b> periods lambe hote jaate hain. Isliye subah 5 baje ka alarm aakhri, sabse lambe REM ko kaat deta hai, jo emotional processing aur kuch tarah ki learning ke liye important hai.'],
      ['teacher', 'Ek trick: raat ka <b>pehla hissa body ke liye</b> (deep sleep, repair) aur <b>aakhri hissa mann ke liye</b> (REM, sapne, emotions). Isliye kam neend ka nuksaan seedha hisaab nahi: subah jaldi uthne se aakhri REM wala hissa poora kat jaata hai.'],

      ['h', 'Neend kyun zaroori hai?'],
      ['list', [
        '<b>Memory consolidation</b>: din me seekhi cheezein neend me (khaas kar N3 aur REM me) mazboot hoti hain aur long-term memory me jaati hain.',
        '<b>Brain ki safai</b>: animal research me paaya gaya ki neend me brain se waste products zyada tezi se saaf hote hain (glymphatic system).',
        '<b>Emotional regulation</b>: kam neend me amygdala zyada reactive ho jaata hai; chhoti baat par gussa ya rona.',
        '<b>Immunity aur growth</b>: kam neend wale logon ko zukaam lagne ka chance zyada hota hai.'
      ]],
      ['p', 'Kitni neend? American Academy of Sleep Medicine jaise expert bodies ke hisaab se teenagers (13-18) ko <b>8-10 ghante</b> aur adults ko <b>7+ ghante</b> chahiye. 17-19 ghante lagataar jaagne ke baad kai logon ki performance sharaab ke halke nashe jaisi gir jaati hai.'],
      ['ex', 'Exam se pehle all-nighter', [
        'Raat bhar jaag kar 12 chapters "kar liye". Agle din paper me aadhe yaad hi nahi aaye. Kyun? Kyunki <b>neend hi wo process hai jo padhai ko memory me pakka karti hai</b>. Bina neend ke cramming aisa hai jaise file save kiye bina laptop band kar dena.',
        'Behtar plan: kam se kam 6-7 ghante neend, aur subah 1 ghanta <b>active recall</b> (khud se sawaal poochhna). Level 3 me memory techniques detail me hain.'
      ]],
      ['teacher', 'Apni pichhli exam ki raat yaad karo. Kitne ghante ki neend mili thi? Agar 5 se kam, to agli baar ek experiment karo: padhai thodi jaldi khatam karke poori neend lo, aur dekho paper me kitna zyada yaad aata hai.'],

      ['h', 'Sleep disorders'],
      ['table', ['Disorder', 'Kya hai', 'Kya karein'], [
        ['Insomnia', 'Neend aane ya tikne me lagataar mushkil; sabse common', '<b>CBT-I</b> (insomnia ke liye CBT) first-line treatment hai, neend ki goliyon se pehle'],
        ['Sleep apnea', 'Neend me saans baar-baar rukna; zor ke kharrate, din me neend', 'Doctor se jaanch; CPAP machine; weight kam karna'],
        ['Narcolepsy', 'Din me achanak neend ke attacks; kabhi emotion par muscles dheele (cataplexy)', 'Neurologist / sleep specialist'],
        ['Sleepwalking, night terrors', 'Deep sleep (N3) me; bachchon me zyada', 'Aksar umar ke saath kam; safety ka dhyan'],
        ['Sleep paralysis', 'Jaagte waqt REM ka paralysis bacha rehta hai; hil nahi paate, kabhi darawne hallucinations', 'Aam taur par harmless; neend regular karna']
      ]],
      ['ex', 'Chhaati par baitha "bhoot"', 'Kai cultures me kahaniyan hain ki raat ko koi bhoot chhaati par baith jaata hai aur hila hi nahi jaata. Psychology iska explanation deti hai: <b>sleep paralysis</b>. Dimaag REM se jaag gaya par body ka REM wala paralysis abhi khatam nahi hua, aur sapne wala brain darawni shakal bhi dikha deta hai. Jaankari hone se ye anubhav bahut kam darawna ho jaata hai.'],
      ['teacher', 'Agar tumhare saath kabhi aisa hua hai, to ab tumhe pata hai ki ye koi bhoot nahi, bas brain aur body ka alag-alag time par jaagna hai. Kam neend aur ulti-seedhi routine me ye zyada hota hai, isliye neeche wali checklist kaam ki hai.'],
      ['tip', [
        '<b>Sleep hygiene checklist</b>:',
        '1) Roz ek hi time uthna (weekend par bhi kareeb-kareeb). 2) Subah 10-15 minute dhoop. 3) Sone se ~8 ghante pehle caffeine band. 4) Kamra andhera, thanda, shant. 5) Sone se 30-60 minute pehle screens band. 6) Bistar sirf sone ke liye (padhai/scrolling nahi). 7) 20 minute me neend na aaye to uth kar kuch boring karo, phir lauto.'
      ]],

      ['h', 'Sapne kyun aate hain?'],
      ['table', ['Theory', 'Kya kehti hai'], [
        ['Freud: wish fulfillment', 'Sapne dabi ichchhaon ko chhupe roop me poora karte hain. <b>Manifest content</b> (jo dikha) ke peeche <b>latent content</b> (chhupa matlab). Scientific support kam.'],
        ['Activation-synthesis (Hobson & McCarley, 1977)', 'REM me brainstem random signals bhejta hai aur cortex unse kahani banane ki koshish karta hai. Isliye sapne ajeeb hote hain.'],
        ['Memory / information processing', 'Sapne din ki yaadon ko sort aur consolidate karne ki process ka hissa hain.'],
        ['Threat simulation', 'Sapne khatron ki practice hain; isliye bahut sapne darawne ya bhaagne wale hote hain.'],
        ['Continuity hypothesis', 'Sapne hamari rozmarra ki chintaon aur anubhavon ko hi dikhate hain (exam ke dino me exam ke sapne).']
      ]],
      ['p', 'Abhi tak koi ek theory poori tarah jeeti nahi hai. Ek dilchasp cheez <b>lucid dreaming</b> hai: sapne me pata hona ki ye sapna hai, aur kabhi use control kar paana.'],

      ['h', 'Hypnosis, meditation aur drugs'],
      ['p', '<b>Hypnosis</b> gehri relaxation aur <b>badhi hui suggestibility</b> ki sthiti hai, mind control nahi. Pain management aur kuch habits me madad kar sakta hai. Par hypnosis se "dabi yaadein" nikaalna khatarnak hai, kyunki suggestibility se <b>jhoothi yaadein</b> ban sakti hain. <b>Meditation</b> (jaise mindfulness) attention ko train karta hai; research me stress aur anxiety par moderate fayde mile hain.'],
      ['table', ['Category', 'Asar', 'Examples'], [
        ['Depressants', 'Nervous system ko dheema karte hain', 'Alcohol, benzodiazepines (sleeping pills)'],
        ['Stimulants', 'Nervous system ko tez karte hain', 'Caffeine, nicotine, cocaine, amphetamines'],
        ['Opioids', 'Dard kam, euphoria; bahut addictive', 'Morphine, heroin, kuch cough syrups ka misuse'],
        ['Hallucinogens', 'Perception badalte hain', 'LSD, psilocybin; cannabis ke bhi kuch aise asar']
      ]],
      ['p', 'Baar-baar use se <b>tolerance</b> (same asar ke liye zyada dose), aur rokne par <b>withdrawal</b> (bechaini, tremors, craving) hota hai. Teenage brain abhi develop ho raha hota hai, isliye early use ka risk zyada hai; jaise kuch vulnerable teens me cannabis ka bhaari use psychosis ke risk se juda paaya gaya hai.'],
      ['note', 'Agar tum ya koi jaanne wala nashe ki aadat se jooj raha hai, to madad lena takat ki nishaani hai. India me <b>Tele-MANAS: 14416</b> (24x7, free) par baat kar sakte ho.'],
      ['terms', [
        ['Consciousness', 'Apne aap aur mahaul ki jaagrukta.'],
        ['Automatic processing', 'Bina conscious effort ke hone wali tez processing.'],
        ['Controlled processing', 'Dhyan aur effort maangne wali dheemi processing.'],
        ['Stroop effect', 'Shabd ka matlab aur uske rang me takraav se response ka dheema hona.'],
        ['Circadian rhythm', 'Lagbhag 24 ghante ka biological cycle (neend, temperature, hormones).'],
        ['Suprachiasmatic nucleus (SCN)', 'Hypothalamus ka hissa jo body ki master clock hai.'],
        ['REM sleep', 'Tez aankh hilne wali neend jisme vivid sapne aur muscle paralysis hota hai.'],
        ['NREM sleep', 'Non-REM neend ke stages (N1, N2, N3).'],
        ['Slow-wave sleep', 'N3 deep sleep jisme dheemi delta waves hoti hain.'],
        ['Sleep spindles', 'N2 stage me EEG par dikhne wali chhoti tez waves.'],
        ['Insomnia', 'Neend aane ya tikne me lagataar mushkil.'],
        ['Sleep apnea', 'Neend me baar-baar saans rukne ka disorder.'],
        ['Narcolepsy', 'Din me achanak neend ke attacks wala disorder.'],
        ['Sleep paralysis', 'Jaagte ya sote waqt kuch der hil na paana, aksar hallucinations ke saath.'],
        ['Manifest content', 'Freud ke hisaab se sapne ki dikhne wali kahani.'],
        ['Latent content', 'Freud ke hisaab se sapne ka chhupa hua matlab.'],
        ['Activation-synthesis theory', 'Sapne random brainstem activity se kahani banane ki koshish hain, ye theory.'],
        ['Lucid dream', 'Sapna jisme sapna dekhne wale ko pata ho ki wo sapna dekh raha hai.'],
        ['Hypnosis', 'Badhi suggestibility aur focused attention ki sthiti.'],
        ['Meditation', 'Attention aur awareness ko train karne ki practices.'],
        ['Psychoactive drug', 'Wo substance jo perception, mood ya consciousness badle.'],
        ['Depressants', 'Nervous system ko dheema karne wale drugs.'],
        ['Stimulants', 'Nervous system ki activity badhane wale drugs.'],
        ['Tolerance', 'Same asar ke liye zyada dose ki zaroorat.'],
        ['Withdrawal', 'Drug rokne par hone wale takleefdeh symptoms.']
      ]]
    ],
    outro: 'Aaj ka saar: neend time waste nahi, brain ka maintenance hai, aur sapne aaj bhi science ki ek khuli paheli hain. Ab is chapter ka quiz do, phir <b>Level 2 ka exam</b> do; 70% laao aur Level 3 unlock karo, jahan learning aur memory ke raaz khulenge.',
    takeaways: [
      'Circadian rhythm SCN se chalta hai aur roshni se reset hota hai; teens ki body clock naturally der wali hoti hai.',
      'Neend ~90 minute ke cycles me: N1, N2, N3 (deep) aur REM (sapne).',
      'Neend memory pakki karti hai; all-nighter padhai ko kamzor karta hai.',
      'Insomnia ka first-line ilaaj CBT-I hai; sleep paralysis "bhoot" nahi, REM ka bacha paralysis hai.',
      'Drugs neurotransmitters badalte hain; tolerance aur withdrawal dependence ke sign hain.'
    ],
    quiz: [
      ['Body ki master clock kahan hai?', ['Hippocampus', 'Suprachiasmatic nucleus (hypothalamus)', 'Cerebellum', 'Amygdala'], 1, 'SCN roshni ke signals se circadian rhythm set karta hai.'],
      ['Kis stage me sabse vivid sapne aate hain aur body lagbhag paralyzed hoti hai?', ['N1', 'N2', 'N3', 'REM'], 3, 'REM me brain active aur muscles atonic hoti hain.'],
      ['Sleepwalking aur night terrors aam taur par kis stage me hote hain?', ['REM', 'N3 (deep sleep)', 'N1', 'Jaagte waqt'], 1, 'Ye deep slow-wave sleep (N3) me hote hain.'],
      ['Exam se pehle all-nighter kyun nuksaandeh hai?', ['Neend me memory consolidate hoti hai, jo nahi ho paati', 'Raat ko padhna mana hai', 'Caffeine se IQ girta hai', 'Isse aankhein kharab hoti hain'], 0, 'Neend learning ko long-term memory me pakka karti hai.'],
      ['Insomnia ka first-line recommended treatment kya hai?', ['Hamesha sleeping pills', 'CBT-I (insomnia ke liye CBT)', 'Zyada caffeine', 'Din me zyada sona'], 1, 'Guidelines CBT-I ko pehla ilaaj maanti hain.'],
      ['Activation-synthesis theory sapno ko kaise samjhati hai?', ['Dabi ichchhaon ki poorti', 'Random brainstem signals se cortex ki banayi kahani', 'Bhavishya ke sanket', 'Sirf memory ka replay'], 1, 'Hobson & McCarley ke hisaab se cortex random activity ko kahani me jodta hai.'],
      ['Alcohol kis category ka drug hai?', ['Stimulant', 'Depressant', 'Hallucinogen', 'Opioid'], 1, 'Alcohol nervous system ko dheema karta hai (GABA ka asar badhata hai).']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 4: States of Consciousness', OS(4), 'book'],
      ['Why We Sleep (Matthew Walker) · popular book (kuch claims par experts ki aalochana bhi padho)', GR('Why We Sleep Matthew Walker'), 'book'],
      ['Crash Course Psychology: To Sleep, Perchance to Dream', YT('Crash Course Psychology sleep dream'), 'video']
    ]
  });
})();
