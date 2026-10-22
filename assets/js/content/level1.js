/* Level 1 · Neev · Foundations */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 1.1 */
  C({
    id: 'what-is-psychology', level: 1, mins: 14, visual: 'neuralNet',
    visualCap: 'Har dot ek neuron jaisa hai, har line ek connection. Psychology isi network se paida hone wale thoughts, feelings aur behaviour ko samajhne ki koshish hai.',
    title: 'Psychology kya hai?',
    tag: 'Mind aur behaviour ka science: definition, goals, branches aur psychologist vs psychiatrist',
    intro: 'Welcome! Ye tumhari pehli class hai, aur sach kahun to mujhe bahut khushi hai ki tum yahan ho. Aaj hum ek seedhe se sawaal se shuru karenge: psychology asal me hai kya? Iska jawab tumhe apni roz ki zindagi, apne doston aur khud ko thoda alag nazar se dekhna sikha dega. Aaram se baitho, chai le lo, aur chalo shuru karte hain.',
    hook: 'Exam se pehle pet me "butterflies" kyun hoti hain? Ek hi joke par ek dost hasta hai aur doosra naraz kyun ho jaata hai? Reels scroll karte-karte 2 ghante kaise nikal jaate hain? Ye sab <b>psychology</b> ke sawaal hain, aur is course me inke science-based jawab hum saath milkar dhoondhenge.',
    blocks: [
      ['h', 'Psychology ki definition'],
      ['p', '<b>Psychology mind aur behaviour ka scientific study hai.</b> Shabd Greek se aaya hai: <i>psyche</i> (aatma ya mind) + <i>logos</i> (study). Hindi me ise <b>Manovigyan</b> kehte hain: <i>man</i> (mind) + <i>vigyan</i> (science).'],
      ['p', 'Is definition ke teen hisse dhyan se samjho, kyunki poora course inhi par khada hai:'],
      ['list', [
        '<b>Scientific</b>: psychology opinions par nahi, evidence par chalti hai. Claims ko test kiya jaata hai, data collect hota hai, aur galat saabit hone par theory badli jaati hai.',
        '<b>Behaviour</b>: jo bahar se dikhta ya measure hota hai. Bolna, chalna, phone uthana, aankh milana, heart rate badhna.',
        '<b>Mental processes</b>: jo andar chalta hai aur seedha dikhta nahi. Thoughts, emotions, memories, dreams, perception, motivation.'
      ]],
      ['ex', 'Board exam ka stress: teeno level par', [
        '<b>Behaviour</b>: Riya raat 2 baje tak jaagti hai, nails chabati hai, khana skip karti hai.',
        '<b>Mental processes</b>: uske dimaag me baar-baar "main fail ho jaungi, sab kya kahenge" chal raha hai. Use dar aur guilt mehsoos hota hai.',
        '<b>Biology</b>: uske body me cortisol (stress hormone) badha hua hai, heart tez dhadakta hai.',
        'Psychologist in teeno ko jod kar dekhta hai. Isi ko <b>biopsychosocial</b> nazariya kehte hain: biology + psychology + social environment (parents ki expectations, competition).'
      ]],
      ['teacher', 'Ek second ruko aur apni pichhli exam ki raat yaad karo. Tumhare saath bhi teeno level par kuch chal raha tha na: neend gayab (behaviour), dimaag me "kya hoga" (mental process), aur dil ki dhak-dhak (biology)? Yahi biopsychosocial nazariya hai, aur ye poore course me baar-baar milega.'],
      ['terms', [
        ['Psychology', 'Mind (mental processes) aur behaviour ka scientific study.'],
        ['Behaviour', 'Koi bhi observable action ya reaction jo dekha ya measure kiya ja sake.'],
        ['Mental processes', 'Andar ke anubhav jaise soch, yaad, emotion, perception, jo seedhe dikhte nahi.'],
        ['Empirical evidence', 'Observation aur experiment se mila data, sirf raay ya vishwas nahi.'],
        ['Biopsychosocial model', 'Behaviour ko biology, psychological factors aur social environment teeno se samjhane ka model.']
      ]],

      ['h', 'Psychology ke 4 goals'],
      ['p', 'Har science ki tarah psychology ke bhi chaar kaam hain. Inhe ek real problem par dekho: <b>procrastination</b> (kaam taalna).'],
      ['steps', [
        ['Describe (kya ho raha hai?)', 'Aman har assignment deadline ki pichhli raat tak taalta hai, aur us beech phone par time bitata hai.'],
        ['Explain (kyun ho raha hai?)', 'Research batati hai ki procrastination aksar laziness nahi, balki <b>bure emotions se bachna</b> hai: task boring, mushkil ya darawna lagta hai, to dimaag turant achha feel karane wali cheez (phone) chun leta hai.'],
        ['Predict (kab hoga?)', 'Jab task bada aur unclear ho, deadline door ho, aur distraction paas ho, tab procrastination ka chance sabse zyada hai.'],
        ['Control / Change (kaise badlein?)', 'Task ko 10-minute ke chhote steps me todo, pehla step bilkul saaf likho, phone doosre kamre me rakho. Ye chhote badlaav behaviour badal dete hain.']
      ]],

      ['h', 'Common sense kaafi kyun nahi?'],
      ['p', 'Bahut log sochte hain "psychology to common sense hai". Par common sense aksar khud se hi contradict karta hai: "Door rehne se pyaar badhta hai" aur "Aankh se door, dil se door" dono kahavatein hain. Dono sach nahi ho sakti hamesha. Science batata hai <b>kab</b> kaunsi baat sach hai.'],
      ['p', 'Ek aur problem hai <b>hindsight bias</b>: kisi result ke baad hum sochte hain "ye to mujhe pehle se pata tha". Jab students ko bataya gaya ki research me "opposites attract" mila, unhone kaha obvious hai. Jab doosre group ko bataya gaya ki "similar log attract hote hain", unhone bhi kaha obvious hai. Asal me research ke hisaab se <b>similarity</b> zyada strong predictor hai.'],
      ['teacher', 'Hindsight bias ko pakadne ki ek trick suno: kisi result ke baare me padhte hi khud se poochho, "agar ulta result aata, to kya wo bhi obvious lagta?" Agar jawab haan hai, to tumhara dimaag "pehle se pata tha" wala khel khel raha hai.'],
      ['myth', 'Psychologist tumhara mind padh lete hain, aur tumse baat karte hi tumhare saare raaz jaan jaate hain.', 'Koi mind-reading nahi hoti. Psychologist observation, conversation, standardized tests aur research par based patterns use karte hain. Wo bhi galat ho sakte hain, isliye assessment dhyan se, kai sources se kiya jaata hai.'],

      ['h', 'Psychologist, Psychiatrist aur Counsellor me farak'],
      ['p', 'Ye confusion bahut common hai. India ke context me simple farak:'],
      ['table', ['Professional', 'Training (India)', 'Kya karte hain', 'Dawai likh sakte?'], [
        ['Clinical Psychologist', 'MA/MSc Psychology + RCI-approved clinical training (jaise M.Phil Clinical Psychology)', 'Psychological testing, diagnosis, psychotherapy (CBT etc.)', 'Nahi'],
        ['Psychiatrist', 'MBBS + MD/DNB Psychiatry (doctor)', 'Medical diagnosis, medicines, severe disorders ka ilaaj', 'Haan'],
        ['Counselling Psychologist / Counsellor', 'MA Psychology ya Counselling', 'Career, relationship, stress, adjustment problems me guidance', 'Nahi'],
        ['Psychotherapist', 'Alag-alag training; kisi therapy approach me certification', 'Talk therapy', 'Nahi']
      ]],
      ['note', 'Kai baar best ilaaj team me hota hai: jaise depression me psychiatrist dawai deta hai aur psychologist therapy karta hai. Help lene me sharm ki koi baat nahi, jaise bukhar me doctor ke paas jaate ho.'],
      ['teacher', 'Yahan sab confuse hote hain, isliye bas ek line yaad rakho: <b>psychiatrist doctor hai aur dawai likh sakta hai; psychologist testing aur therapy karta hai.</b> Ye sawaal exams me baar-baar aata hai.'],

      ['h', 'Psychology ki major branches'],
      ['table', ['Branch', 'Kya study karti hai', 'Real example'], [
        ['Clinical', 'Mental disorders ka assessment aur ilaaj', 'OCD ke patient ki therapy'],
        ['Counselling', 'Rozmarra ki problems, adjustment', 'College student ka career confusion'],
        ['Cognitive', 'Memory, attention, thinking, language', 'Hum phone number kaise yaad rakhte hain'],
        ['Developmental', 'Janam se budhape tak badlav', 'Bachcha bolna kab aur kaise seekhta hai'],
        ['Social', 'Doosre log hamein kaise prabhavit karte hain', 'Group me log galat jawab kyun maan lete hain'],
        ['Biological / Neuro', 'Brain, hormones, genes aur behaviour', 'Stroke ke baad bolne me dikkat kyun'],
        ['Industrial-Organizational (I/O)', 'Workplace, hiring, motivation', 'Company me best candidate kaise chunein'],
        ['Educational / School', 'Seekhne ki process, school problems', 'Dyslexia wale bachche ki madad'],
        ['Health', 'Stress, lifestyle aur bimari', 'Diabetes patient dawai regularly kyun nahi leta'],
        ['Forensic', 'Psychology aur law', 'Eyewitness ki gawahi kitni reliable hai'],
        ['Sports', 'Performance, motivation, pressure', 'Penalty shootout me nerves control karna']
      ]],
      ['ex', 'Ek incident, kai nazariye', [
        '16 saal ke Kabir ne achanak cricket academy chhod di. Alag psychologists alag sawaal poochhenge:',
        '<b>Developmental</b>: kya ye teenage identity search ka hissa hai? <b>Social</b>: kya dosto ka pressure hai? <b>Clinical</b>: kya ye depression ka sign ho sakta hai (pehle jo pasand tha usme interest khatam hona)? <b>Sports</b>: kya use performance anxiety hai? <b>Educational</b>: kya board exam ka pressure hai?',
        'Asli jawab aksar kai factors ka mix hota hai. Isliye psychology me ek hi cause dhoondne se bachte hain.'
      ]],

      ['h', 'Basic vs applied research'],
      ['compare', ['Basic research', 'Gyaan ke liye gyaan. Jaise: <b>memory brain me kaise store hoti hai?</b> Iska turant use nahi dikhta, par yahi aage applied research ki neev banti hai.'], ['Applied research', 'Real problem solve karna. Jaise: <b>NEET aspirants ke liye kaunsi study technique sabse effective hai?</b> Ye basic research ke findings ko use karti hai.']],
      ['think', 'Kya astrology ya palmistry psychology ka hissa hai?', [
        'Nahi. Psychology ke claims <b>testable</b> hote hain aur test me fail hone par chhod diye jaate hain. Astrology ko controlled experiments me test kiya gaya hai; jaise 1985 me physicist Shawn Carlson ki double-blind study (journal <i>Nature</i>) me astrologers birth chart se sahi personality profile chance se behtar match nahi kar paaye.',
        'Ye "lagta hai sahi hai" wala feeling asal me <b>Barnum effect</b> hai, jo hum Chapter 6 me detail me padhenge.'
      ]],
      ['terms', [
        ['Hindsight bias', 'Result jaanne ke baad ye maan lena ki "mujhe pehle se pata tha".'],
        ['Basic research', 'Buniyadi sawaalon ka jawab dhoondne wali research, bina turant practical use ke.'],
        ['Applied research', 'Kisi real-world problem ko solve karne ke liye ki gayi research.'],
        ['Clinical psychologist', 'RCI-licensed professional jo mental disorders ka psychological assessment aur therapy karta hai.'],
        ['Psychiatrist', 'Medical doctor jo mental disorders me specialize karta hai aur dawai likh sakta hai.']
      ]]
    ],
    outro: 'Aaj humne dekha ki psychology mind aur behaviour ka science hai, sirf common sense nahi. Ab chhota sa quiz do aur dekho kitna yaad raha. Agli class me time machine me baith kar chalenge: psychology ka itihaas, Wundt ki lab se aaj tak.',
    takeaways: [
      'Psychology = mind aur behaviour ka <b>scientific</b> study. Evidence sabse upar.',
      'Chaar goals: describe, explain, predict, change.',
      'Common sense aksar contradict karta hai aur hindsight bias se dhoka deta hai.',
      'Psychiatrist doctor hai aur dawai likh sakta hai; clinical psychologist testing aur therapy karta hai.',
      'Behaviour ko biology + psychology + social environment teeno milkar banate hain.'
    ],
    quiz: [
      ['Psychology ki sabse sahi definition kaunsi hai?', ['Insaan ki aatma ka adhyayan', 'Mind aur behaviour ka scientific study', 'Mental illness ka ilaaj', 'Logon ke mann ki baat padhne ki kala'], 1, 'Psychology sirf mental illness nahi, balki saare behaviour aur mental processes ka evidence-based study hai.'],
      ['Inme se kaunsa "mental process" hai, behaviour nahi?', ['Haath hilana', 'Zor se bolna', 'Kisi purani baat ko yaad karna', 'Tez chalna'], 2, 'Yaad karna andar hota hai aur seedha dikhta nahi, isliye ye mental process hai.'],
      ['Kise dawai (medication) likhne ka adhikaar hota hai?', ['Clinical psychologist', 'Counsellor', 'Psychiatrist', 'Sports psychologist'], 2, 'Psychiatrist MBBS + MD doctor hota hai, isliye wahi medicine prescribe kar sakta hai.'],
      ['"Mujhe to pehle se pata tha ye hoga!" Ye kaunsa bias hai?', ['Confirmation bias', 'Hindsight bias', 'Placebo effect', 'Barnum effect'], 1, 'Result jaanne ke baad usse obvious samajhna hindsight bias hai.'],
      ['"Procrastination kab sabse zyada hota hai" ye pata lagana psychology ka kaunsa goal hai?', ['Describe', 'Explain', 'Predict', 'Change'], 2, 'Kab koi behaviour hoga, ye batana prediction hai.'],
      ['Eyewitness gawahi kitni reliable hai, ye kaunsi branch study karti hai?', ['Forensic psychology', 'Sports psychology', 'Developmental psychology', 'Health psychology'], 0, 'Forensic psychology psychology aur law ke milne ki jagah kaam karti hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 1: Introduction to Psychology (free textbook)', OS(1), 'book'],
      ['Crash Course Psychology #1: Intro to Psychology', YT('Crash Course Psychology 1 intro to psychology'), 'video'],
      ['NCERT Class 11 Psychology · Chapter 1: What is Psychology?', 'https://ncert.nic.in/textbook.php', 'book']
    ]
  });

  /* 1.2 */
  C({
    id: 'history-schools', level: 1, mins: 16, visual: 'timeline',
    visualCap: 'Philosophy se lab tak: psychology ke bade mod ek timeline par.',
    title: 'Psychology ka itihaas aur schools of thought',
    tag: 'Wundt ki lab se neuroscience tak: kaun aaya, kya socha, aur aaj kya bacha hai',
    intro: 'Pichhli class me humne samjha ki psychology hai kya. Aaj ek kahani sunte hain: ye science paida kaise hui, aur kaun-kaun log isme naye idea laaye. Itihaas thoda boring lag sakta hai, par yahi naam aage har chapter me aayenge, to aaj inse dosti kar lo.',
    hook: 'Psychology ek science ke roop me sirf ~145 saal purani hai, par iske sawaal hazaron saal purane hain. Upanishad, Buddha, Patanjali aur Aristotle sab mind ko samajhna chahte the. Fark ye hai ki 1879 ke baad log in sawaalon ko <b>lab me test</b> karne lage.',
    blocks: [
      ['h', 'Philosophy: jahan se sab shuru hua'],
      ['p', 'Science banne se pehle mind ke baare me sochna philosophy ka kaam tha. Kuch bade sawaal jo aaj bhi psychology me zinda hain:'],
      ['list', [
        '<b>Mind-body problem</b>: kya mind aur body alag hain? French philosopher <b>René Descartes</b> (1600s) ne kaha alag hain (dualism). Aaj ki neuroscience maanti hai ki mind brain ki activity se paida hota hai.',
        '<b>Nature vs nurture</b>: kya hum janam se bane hote hain (genes) ya anubhav se (environment)? <b>John Locke</b> ne kaha bachcha "tabula rasa" (khaali slate) hota hai. Aaj ka jawab: dono milkar kaam karte hain.',
        '<b>Bharatiya chintan</b>: Patanjali ke Yoga Sutra mind ki "vrittiyon" (fluctuations) ko shaant karne ki baat karte hain, aur Buddhist Abhidhamma mind ke anubhavon ka detailed vishleshan karta hai. Ye philosophical aur contemplative traditions hain; aaj mindfulness research inme se kuch ideas ko scientifically test karti hai.'
      ]],

      ['h', '1879: Wundt aur pehli psychology lab'],
      ['p', 'Germany ke Leipzig me <b>Wilhelm Wundt</b> ne 1879 me pehli experimental psychology lab banayi. Isi saal ko psychology ka "janamdin" maana jaata hai. Wundt reaction time jaise cheezein measure karte the, aur participants se <b>introspection</b> karwate the: apne anubhav ko dhyan se dekh kar describe karna.'],
      ['p', 'Unke student <b>Edward Titchener</b> ne <b>structuralism</b> banaya: jaise chemistry me padarth ko elements me todte hain, waise hi experience ko basic elements (sensations, feelings) me todna. Problem: introspection subjective hai. Do log ek hi nimbu ka swaad alag describe karenge, aur kaun sahi hai ye check karna mushkil hai. Isliye structuralism zyada din nahi chala.'],

      ['h', 'Functionalism: mind kya kaam karta hai?'],
      ['p', 'America me <b>William James</b> ne 1890 me <i>The Principles of Psychology</i> likhi. Darwin ki theory se prabhavit hokar unhone poocha: mind ke hisse <b>kis kaam</b> ke liye hain? Jaise attention, habit, emotion hamein survive aur adapt karne me kaise madad karte hain? James ne <b>"stream of consciousness"</b> ka idea diya: soch ek behti nadi jaisi hai, tukdon me nahi.'],
      ['teacher', 'Ek chhoti si memory trick: <b>Structuralism = "kis cheez se bana hai" (structure), Functionalism = "kis kaam ka hai" (function)</b>. Naam me hi jawab chhupa hai.'],

      ['h', 'Psychoanalysis: unconscious mind'],
      ['p', 'Vienna ke doctor <b>Sigmund Freud</b> ne kaha ki hamare behaviour ka bada hissa <b>unconscious</b> (achetan) ichchhaon aur bachpan ke anubhavon se chalta hai. Sapne, slip of tongue, aur dabaye hue emotions unke mukhya topic the. Unhone <b>talk therapy</b> ki shuruaat ki.'],
      ['myth', 'Freud hi psychology hai; psychology matlab sapno ka matlab batana.', 'Freud itihaas me bahut important hain, par unki kai theories (jaise Oedipus complex) scientifically test karna mushkil hai aur support nahi milta. Aaj ki psychology mostly experiments par chalti hai. Haan, "unconscious processes" ka idea badle roop me zinda hai, jaise implicit memory aur priming.'],

      ['h', 'Behaviorism: sirf jo dikhe wahi science'],
      ['p', '1913 me <b>John B. Watson</b> ne kaha: mind ko dekh nahi sakte, to psychology ko sirf <b>observable behaviour</b> study karna chahiye. Russia me <b>Ivan Pavlov</b> ke kutton wale experiments (classical conditioning) aur baad me <b>B.F. Skinner</b> ke reward-punishment experiments (operant conditioning) ne behaviorism ko 1920 se 1960 tak psychology ka king bana diya.'],
      ['quote', 'Mujhe ek darjan swasth bachche do... main guarantee deta hoon ki kisi ko bhi random chun kar doctor, vakeel, artist ya chor bana sakta hoon.', 'John B. Watson, 1924 (behaviorism ke environment par bharose ka mashhoor, aur badha-chadha kar kiya gaya, daava)'],
      ['teacher', 'Ye quote sun kar thoda ajeeb laga na? Socho, kya sirf mahaul ke dum par koi bhi bachcha kuch bhi ban sakta hai? Ye wahi nature vs nurture wali behas hai jo humne isi class ki shuruaat me dekhi, aur aage Level 2 me iska science wala jawab milega.'],

      ['h', 'Humanistic psychology: "third force"'],
      ['p', '1950-60s me <b>Abraham Maslow</b> aur <b>Carl Rogers</b> ne kaha ki psychoanalysis insaan ko sirf beemar aur behaviorism sirf machine maanta hai. Humanistic psychology ne <b>free will, personal growth</b> aur <b>self-actualization</b> (apni poori potential tak pahunchna) par focus kiya. Rogers ki <b>client-centered therapy</b> aaj bhi counselling ki neev hai.'],

      ['h', 'Cognitive revolution: mind wapas aaya'],
      ['p', '1950-60s me computers aaye aur psychologists ne mind ko <b>information processing system</b> ki tarah dekhna shuru kiya: input (senses), processing (attention, memory), output (behaviour). 1959 me linguist <b>Noam Chomsky</b> ne Skinner ki language theory ki kadi aalochana ki. 1967 me <b>Ulric Neisser</b> ki book <i>Cognitive Psychology</i> ne is field ko naam diya.'],

      ['h', 'Aaj ke perspectives'],
      ['p', 'Aaj psychologists kisi ek school ke "fan" nahi hote. Wo alag-alag lens (perspective) use karte hain, jaise ek hi building ko alag khidkiyon se dekhna. Neeche ka interactive diagram ek hi problem, <b>exam anxiety</b>, ko har perspective se dikhata hai.'],
      ['vis', 'perspectives', 'Kisi bhi perspective par tap karo aur dekho wo exam anxiety ko kaise samjhata hai.'],
      ['table', ['Perspective', 'Focus', 'Bade naam'], [
        ['Biological', 'Brain, neurotransmitters, hormones, genes', 'Roger Sperry, Eric Kandel'],
        ['Evolutionary', 'Behaviour ne survival me kaise madad ki', 'Charles Darwin, David Buss'],
        ['Psychodynamic', 'Unconscious, bachpan, andar ke conflict', 'Freud, Jung, Erikson'],
        ['Behavioral', 'Learning, reward, punishment', 'Pavlov, Watson, Skinner'],
        ['Cognitive', 'Soch, memory, interpretation', 'Neisser, Aaron Beck'],
        ['Humanistic', 'Growth, free will, self', 'Maslow, Rogers'],
        ['Sociocultural', 'Samaj, culture, parivaar ka asar', 'Lev Vygotsky']
      ]],
      ['teacher', 'Yahan students aksar ek galti karte hain: sochte hain ki ek perspective sahi hai aur baaki galat. Asal me ye alag-alag khidkiyan hain. Exam anxiety samajhne ke liye biology bhi chahiye, soch bhi aur parivaar ka mahaul bhi.'],

      ['h', 'Woh pioneers jinhe kam yaad kiya jaata hai'],
      ['case', 'Mahila aur Bharatiya pioneers', [
        '<b>Mary Whiton Calkins</b> ne Harvard me saari PhD requirements poori ki, par mahila hone ki wajah se degree nahi di gayi. Phir bhi 1905 me wo American Psychological Association ki pehli mahila president bani. <b>Margaret Floy Washburn</b> 1894 me psychology me PhD paane wali pehli mahila thi.',
        '<b>Kenneth aur Mamie Phipps Clark</b> ki "doll studies" ne dikhaya ki segregation Black bachchon ki self-image ko nuksaan pahunchata hai. Ye research 1954 ke US Supreme Court case <i>Brown v. Board of Education</i> me use hui.',
        'India me <b>N.N. Sengupta</b> ne 1916 me Calcutta University me desh ka pehla psychology department aur experimental lab shuru kiya. <b>Girindrasekhar Bose</b> ne 1922 me Indian Psychoanalytical Society banayi aur Freud se seedha patra-vyavhaar kiya. Aage <b>Durganand Sinha</b> jaise psychologists ne psychology ko Indian samaj ke context me dhaalne par zor diya.'
      ]],
      ['terms', [
        ['Introspection', 'Apne mental anubhavon ko dhyan se dekh kar report karna; Wundt ka mukhya method.'],
        ['Structuralism', 'Titchener ka school jo conscious experience ko basic elements me todna chahta tha.'],
        ['Functionalism', 'William James se juda school jo poochhta tha ki mind ke processes kis kaam aate hain.'],
        ['Psychoanalysis', 'Freud ki theory aur therapy jo unconscious ichchhaon aur bachpan par zor deti hai.'],
        ['Behaviorism', 'School jo sirf observable behaviour aur learning ko study karne par zor deta hai.'],
        ['Humanistic psychology', 'Maslow-Rogers ka approach jo growth, free will aur self-actualization par focus karta hai.'],
        ['Cognitive revolution', '1950-60s ka badlav jab mind ko information processing system ki tarah study kiya jaane laga.'],
        ['Eclectic approach', 'Kisi ek theory par atakne ke bajay alag-alag perspectives ko milakar use karna.'],
        ['Dualism', 'Ye vichar ki mind aur body do alag cheezein hain (Descartes).'],
        ['Tabula rasa', 'Locke ka vichar ki janam ke samay mind ek khaali slate hota hai.']
      ]],
      ['think', 'Agar aaj koi kahe "Behaviorism ab bekaar hai", to kya ye sahi hai?', [
        'Poori tarah nahi. Behaviorism ka "mind ko ignore karo" wala hissa chhod diya gaya, par uske learning principles aaj bhi har jagah use hote hain: autism ke liye ABA therapy, phobia ke liye exposure therapy, apps ke reward systems, aur classroom management. Psychology me purane schools mitte nahi, unke achhe hisse naye framework me mil jaate hain.'
      ]]
    ],
    outro: 'Philosophy se Wundt ki lab, phir Freud, behaviorism, humanistic aur cognitive revolution tak, tumne psychology ka poora safar dekh liya. Quiz me dekho naam aur saal kitne yaad hain. Agli class me seekhenge ki psychologists kisi baat ko <b>saabit</b> kaise karte hain: research methods.',
    takeaways: [
      '1879 me Wundt ki Leipzig lab se psychology ek alag science bani.',
      'Structuralism (elements) aur functionalism (purpose) shuruaati schools the.',
      'Freud ne unconscious, Watson-Skinner ne behaviour, Maslow-Rogers ne growth, aur cognitive psychology ne information processing par zor diya.',
      'Aaj psychologists kai perspectives ko milakar (eclectic approach) kaam karte hain.',
      'India me pehla psychology department 1916 me Calcutta University me bana.'
    ],
    quiz: [
      ['Pehli experimental psychology lab kisne aur kab banayi?', ['Freud, 1900', 'Wundt, 1879', 'William James, 1890', 'Watson, 1913'], 1, 'Wilhelm Wundt ne 1879 me Leipzig, Germany me pehli lab banayi.'],
      ['Structuralism ki sabse badi kamzori kya thi?', ['Ye bahut mehenga tha', 'Introspection subjective tha aur verify karna mushkil tha', 'Isme animals use hote the', 'Ye sirf bachchon par tha'], 1, 'Har vyakti apna anubhav alag describe karta hai, isliye results check karna mushkil tha.'],
      ['"Psychology ko sirf observable behaviour study karna chahiye." Ye kis school ka vichar hai?', ['Humanistic', 'Psychoanalysis', 'Behaviorism', 'Functionalism'], 2, 'Watson aur Skinner ka behaviorism mind ko chhod kar sirf behaviour par focus karta tha.'],
      ['Self-actualization aur free will par zor kis perspective ka hai?', ['Humanistic', 'Biological', 'Behavioral', 'Evolutionary'], 0, 'Maslow aur Rogers ki humanistic psychology growth aur potential par focus karti hai.'],
      ['India ka pehla psychology department kahan shuru hua?', ['Delhi University', 'Calcutta University', 'Mumbai University', 'Allahabad University'], 1, '1916 me N.N. Sengupta ne Calcutta University me shuru kiya.'],
      ['Mind ko computer jaise "information processing system" ki tarah dekhna kis movement ka hissa tha?', ['Structuralism', 'Cognitive revolution', 'Psychoanalysis', 'Functionalism'], 1, '1950-60s ke cognitive revolution ne mind ko input-processing-output ki tarah dekha.']
    ],
    more: [
      ['OpenStax Psychology 2e · 1.2 History of Psychology', OS(1), 'book'],
      ['Crash Course Psychology: history of psychology', YT('Crash Course Psychology history Wundt Freud behaviorism'), 'video'],
      ['APA: Timeline of women in psychology & history resources', 'https://www.apa.org/about/archives', 'link']
    ]
  });

  /* 1.3 */
  C({
    id: 'research-methods', level: 1, mins: 18, visual: 'sciCycle',
    visualCap: 'Scientific method ek circle hai: har jawab naye sawaal paida karta hai.',
    title: 'Research methods: psychology ko science kaise banate hain',
    tag: 'Hypothesis, case study, survey, correlation, experiment, placebo aur double-blind',
    intro: 'Pichhli class me dekha ki psychology philosophy se nikal kar lab tak pahunchi. Aaj usi lab ke auzaar haath me lenge: hypothesis, survey, correlation aur experiment. Ye chapter tumhe ek chhoti si superpower dega: koi bhi WhatsApp forward ya headline padh kar pehchaan lena ki daava kitna mazboot hai.',
    hook: 'WhatsApp forward: <i>"Raat ko doodh peene wale bachchon ka IQ 20 points zyada hota hai, study proves!"</i> Kya ispe bharosa kar lena chahiye? Is chapter ke baad tumhe aise claims khud check karna aa jaayega: ye <b>correlation</b> hai ya <b>causation</b>, aur study theek se hui bhi thi ya nahi.',
    blocks: [
      ['h', 'Scientific method ke steps'],
      ['steps', [
        ['Sawaal / Theory', 'Ek broad explanation, jaise "neend memory ko consolidate karti hai".'],
        ['Hypothesis', 'Theory se nikla ek <b>testable</b> prediction: "Jo students exam se pehle 8 ghante soyenge, wo 4 ghante sone walon se zyada words yaad rakhenge."'],
        ['Operational definition', 'Har cheez ko measurable banana. "Yaad rakhna" = 30 words ki list me se kitne words 24 ghante baad likh paaye.'],
        ['Data collection', 'Sahi method chunna aur data lena.'],
        ['Analysis', 'Statistics se dekhna ki result chance se hua ya asli hai.'],
        ['Report, peer review, replication', 'Doosre experts check karte hain, aur doosri labs study dohra kar dekhti hain ki result phir aata hai ya nahi.']
      ]],
      ['ex', 'Apni hypothesis banao', [
        'Daava: "Phone bedroom me rakhne se neend kharab hoti hai."',
        '<b>Hypothesis</b>: jo log 2 hafte phone bedroom ke bahar rakhenge, unka average sleep time phone saath rakhne walon se zyada hoga. <b>Operational definition</b>: sleep time = sleep tracking app se raat ka total sleep. Ab ye check ho sakta hai, isliye ye scientific claim hai.'
      ]],
      ['terms', [
        ['Theory', 'Kai observations ko jodne wala broad explanation jo predictions deta hai.'],
        ['Hypothesis', 'Ek specific, testable prediction.'],
        ['Operational definition', 'Kisi concept ko exactly kaise measure karenge, uski saaf definition.'],
        ['Peer review', 'Publish hone se pehle doosre experts dwara research ki jaanch.'],
        ['Replication', 'Study ko dobara karke dekhna ki wahi result aata hai ya nahi.']
      ]],

      ['h', 'Descriptive methods: kya ho raha hai?'],
      ['table', ['Method', 'Kya hai', 'Fayda', 'Kamzori'], [
        ['Case study', 'Ek vyakti ya chhote group ka gehra study', 'Rare cases samajhne me bemisaal', 'Sab par generalize nahi kar sakte'],
        ['Naturalistic observation', 'Natural setting me bina dakhal diye dekhna', 'Real behaviour dikhta hai', 'Cause nahi pata chalta; observer bias'],
        ['Survey', 'Bahut logon se sawaal poochhna', 'Kam time me bada data', 'Log jhooth ya "achha dikhne" wale jawab de sakte hain'],
        ['Archival research', 'Purane records, data ka analysis', 'Sasta, bade samay ka data', 'Data hamare sawaal ke hisaab se nahi bana']
      ]],
      ['case', 'Phineas Gage (1848): ek case study jisne brain science badal di', [
        'Railway worker Phineas Gage ke sir me ek dhamake me loha ki rod ghus gayi jo uske frontal lobe se aar-paar nikal gayi. Wo bach gaya, par doston ne kaha "Gage ab Gage nahi raha": wo zyada impulsive aur gussail ho gaya. Is case ne pehli baar dikhaya ki <b>frontal lobe personality aur self-control</b> se juda hai.',
        'Lekin dhyan do: case study se hum generalize nahi kar sakte, aur Gage ki kahani ke kuch hisse baad me badha-chadha kar bataye gaye. Baad ke records batate hain ki wo kaafi had tak recover hua aur Chile me coach driver ka kaam kiya.'
      ]],
      ['note', 'Survey me sawaal ki wording sab badal deti hai. "Kya sarkar ko gareebon ki <i>madad</i> karni chahiye?" aur "Kya sarkar ko <i>welfare par kharch</i> badhana chahiye?" lagbhag ek hi baat hai, par logon ka jawab alag aata hai.'],

      ['h', 'Correlation: do cheezein saath badalti hain'],
      ['p', 'Correlation batata hai ki do variables ka rishta kitna strong hai. Ise <b>correlation coefficient (r)</b> se naapte hain jo <b>-1 se +1</b> ke beech hota hai.'],
      ['list', [
        '<b>Positive (+)</b>: ek badhe to doosra bhi badhe. Padhai ke ghante aur marks.',
        '<b>Negative (-)</b>: ek badhe to doosra ghate. Screen time aur neend.',
        '<b>Zero (0)</b>: koi rishta nahi. Shoe size aur IQ.'
      ]],
      ['vis', 'correlation', 'Slider khiskao aur dekho r badalne par scatter plot kaisa dikhta hai.'],
      ['myth', 'Agar do cheezon me correlation hai, to ek doosre ka cause hai.', '<b>Correlation causation nahi hai.</b> Garmi me ice-cream ki bikri aur doobne ki ghatnayein dono badhti hain, par ice-cream doobne ka cause nahi. Dono ka asli kaaran <b>third variable</b> (garmi, log zyada tairne jaate hain) hai.'],
      ['teacher', 'Ruko, ye line itni important hai ki ise apni copy ke pehle page par likh lo: <b>correlation causation nahi hai</b>. Jab bhi koi kahe "X se Y hota hai", khud se poochho: kahin koi teesri cheez dono ko to nahi chala rahi?'],
      ['ex', 'Screen time aur kam marks', [
        'Ek survey me mila ki zyada screen time wale students ke marks kam hain. Kya phone marks gira raha hai? Ho sakta hai. Par ye bhi ho sakta hai: (1) <b>Reverse causation</b>: padhai me struggle karne wale stress se bachne ke liye phone zyada use karte hain. (2) <b>Third variable</b>: kam neend ya kam parental supervision dono ko prabhavit karte hain.',
        'Cause pakka karne ke liye <b>experiment</b> chahiye.'
      ]],

      ['h', 'Experiment: cause aur effect ka sabse strong tareeka'],
      ['p', 'Experiment me researcher ek cheez ko khud badalta hai aur dekhta hai ki doosri cheez par kya asar hua. Baaki sab kuch same rakha jaata hai.'],
      ['terms', [
        ['Independent variable (IV)', 'Jo researcher badalta hai (cause). Jaise: study se pehle music hai ya nahi.'],
        ['Dependent variable (DV)', 'Jo measure kiya jaata hai (effect). Jaise: test score.'],
        ['Experimental group', 'Jise treatment ya badlav milta hai.'],
        ['Control group', 'Jise treatment nahi milta; comparison ke liye.'],
        ['Random assignment', 'Participants ko group me lottery jaise randomly daalna, taaki groups shuru me barabar hon.'],
        ['Confounding variable', 'Koi aur factor jo IV ke saath badal kar result ko gadbad kar de.'],
        ['Placebo effect', 'Sirf ye vishwas ki treatment mil raha hai, usi se sudhaar mehsoos hona.'],
        ['Double-blind study', 'Na participant ko pata na researcher ko ki kaun kis group me hai; bias kam karne ke liye.']
      ]],
      ['case', 'Loftus & Palmer (1974): ek shabd ne memory badal di', [
        'Students ko car accident ka video dikhaya gaya. Phir poocha: "Cars jab ek-doosre se <i>smashed</i> hui, tab speed kitni thi?" Doosre groups me shabd tha <i>collided, bumped, hit</i> ya <i>contacted</i>.',
        '<b>IV</b> = sawaal ka verb. <b>DV</b> = speed ka andaza. "Smashed" sunne walon ne average ~41 mph bataya, "contacted" walon ne ~32 mph. Ek hafte baad "smashed" group ke zyada logon ne kaha unhone toota kaanch dekha tha, jo video me tha hi nahi. Isse pata chala ki <b>leading questions memory badal sakte hain</b>.'
      ]],
      ['teacher', 'Socho, agar ek shabd se speed ka andaza 9 mph badal sakta hai, to police ki poochhtaachh ya ghar me "tumne hi to kaha tha na?" jaise sawaal yaadon ke saath kya karte honge. Is study ko yaad rakhna, Level 3 ki memory class me ye phir milegi.'],
      ['steps', [
        ['Sawaal', 'Kya padhte waqt music sunne se yaad kam rehta hai?'],
        ['Random assignment', '60 students ko lottery se 2 groups me baanto.'],
        ['IV badlo', 'Group A lyrics wala music sunte hue padhta hai, group B shanti me.'],
        ['Baaki sab same', 'Same material, same time, same room, same test.'],
        ['DV naapo', '20 minute baad test score.'],
        ['Analyze', 'Agar farak statistically significant hai, to music (IV) hi kaaran maana ja sakta hai.']
      ]],
      ['p', '<b>Placebo</b> itna powerful hai ki medicine trials me hamesha placebo group rakha jaata hai. Aur <b>double-blind</b> isliye ki researcher ki ummeed bhi anjaane me participants ka behaviour badal sakti hai (experimenter bias).'],

      ['h', 'Sampling: kis par study ki?'],
      ['p', '<b>Population</b> wo poora group hai jiske baare me jaanna hai (jaise saare Indian teenagers). <b>Sample</b> uska chhota hissa hai jis par study hoti hai. Sample <b>representative</b> hona chahiye. Agar sirf Delhi ke English-medium private school ke bachchon par study ki, to result poore India par apply nahi hoga.'],
      ['p', 'Psychology ki ek badi problem: zyada tar research <b>WEIRD</b> logon par hui hai: Western, Educated, Industrialized, Rich, Democratic. Duniya ki aabadi ka ye chhota hissa hai. Isliye Indian context me research ki zaroorat badi hai.'],
      ['teacher', 'Ye baat tumhare kaam ki hai: jab bhi koi study padho, ek nazar participants par zaroor daalo. Kaun the, kahan ke the, kitne the? Aadhi kahani wahin chhupi hoti hai.'],
      ['think', 'Ek study kehti hai: "Jo log roz yoga karte hain, wo kam stressed hain." Kya iska matlab yoga stress kam karta hai?', [
        'Ye correlation hai, experiment nahi. Ho sakta hai jinke paas pehle se time, paisa aur shaant routine hai (kam stress), wahi yoga kar paate hain (<b>self-selection</b>). Pakka karne ke liye stressed logon ko randomly yoga group aur control group me baant kar <b>randomized controlled trial</b> karna hoga. (Aise kai trials hue hain aur yoga ka stress par moderate positive asar mila hai.)'
      ]],
      ['terms', [
        ['Correlation coefficient (r)', '-1 se +1 tak ka number jo do variables ke rishte ki disha aur taakat batata hai.'],
        ['Third variable problem', 'Jab koi teesra factor dono variables ko prabhavit kare aur jhootha rishta dikhe.'],
        ['Case study', 'Ek vyakti ya chhote group ka gehra, detailed adhyayan.'],
        ['Naturalistic observation', 'Natural mahaul me bina dakhal diye behaviour observe karna.'],
        ['Population', 'Wo poora group jiske baare me research conclusion nikalna chahti hai.'],
        ['Sample', 'Population ka wo hissa jis par asal me study hui.'],
        ['WEIRD samples', 'Western, Educated, Industrialized, Rich, Democratic logon par zyada research hone ki problem.']
      ]]
    ],
    outro: 'Aaj tumne seekha ki hypothesis kaise banti hai, correlation aur experiment me kya farak hai, aur achha sample kyun zaroori hai. Quiz me IV aur DV wale sawaal dhyan se padhna, sabse zyada log wahin fisalte hain. Agli class me numbers se dosti karenge: statistics, bina dar ke.',
    takeaways: [
      'Hypothesis testable honi chahiye aur har variable ki operational definition saaf honi chahiye.',
      'Case study, observation aur survey "kya" batate hain; experiment "kyun" batata hai.',
      'Correlation causation nahi hai: third variable aur reverse causation ka dhyan rakho.',
      'Achhe experiment me random assignment, control group, aur zaroorat ho to placebo + double-blind hota hai.',
      'Sample representative hona chahiye; WEIRD samples se poori duniya par generalize karna khatarnak hai.'
    ],
    quiz: [
      ['Experiment me jo variable researcher khud badalta hai, use kya kehte hain?', ['Dependent variable', 'Independent variable', 'Confounding variable', 'Control variable'], 1, 'IV researcher manipulate karta hai; DV par uska asar naapa jaata hai.'],
      ['Garmi me ice-cream ki bikri aur doobne ki ghatnayein dono badhti hain. Ye kis concept ka example hai?', ['Placebo effect', 'Third variable problem', 'Random assignment', 'Double-blind'], 1, 'Garmi (third variable) dono ko badhati hai; ice-cream doobne ka cause nahi.'],
      ['r = -0.85 ka matlab kya hai?', ['Bahut kamzor rishta', 'Strong negative rishta', 'Koi rishta nahi', 'Strong positive rishta'], 1, 'Minus disha batata hai (ek badhe to doosra ghate), 0.85 batata hai rishta strong hai.'],
      ['Random assignment kyun kiya jaata hai?', ['Sample bada karne ke liye', 'Taaki groups shuru me barabar hon aur differences treatment se hi aayein', 'Participants ko khush rakhne ke liye', 'Data jaldi collect karne ke liye'], 1, 'Random assignment se pehle se maujood differences dono groups me baraabar bat jaate hain.'],
      ['Double-blind study me kise nahi pata hota ki kaun kis group me hai?', ['Sirf participants ko', 'Sirf researcher ko', 'Participants aur researcher dono ko', 'Kisi ko bhi pata hota hai'], 2, 'Dono ke blind hone se participant ki ummeed aur researcher ka bias dono control hote hain.'],
      ['Loftus & Palmer study me "smashed" shabd sunne walon ne kya kiya?', ['Speed kam batayi', 'Speed zyada batayi aur kuch ne toota kaanch yaad kiya', 'Video yaad hi nahi rakha', 'Sabne same speed batayi'], 1, 'Leading question ne memory ko badal diya, jo eyewitness testimony ke liye bada sabak hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 2: Psychological Research', OS(2), 'book'],
      ['Crash Course Psychology #2: Psychological Research', YT('Crash Course Psychology 2 psychological research'), 'video'],
      ['Research Methods in Psychology (Price, Jhangiani & Chiang) · free open textbook', 'https://opentextbc.ca/researchmethods/', 'book']
    ]
  });

  /* 1.4 */
  C({
    id: 'statistics-basics', level: 1, mins: 17, visual: 'bellCurve',
    visualCap: 'Normal distribution: ~68% log average ke 1 SD ke andar, ~95% 2 SD ke andar, aur ~99.7% 3 SD ke andar aate hain.',
    title: 'Psychology ke liye statistics (bina dar ke)',
    tag: 'Mean, median, SD, normal curve, z-score, p-value aur effect size, cricket aur marks ke examples se',
    intro: 'Maths ka naam sunte hi kai logon ka dil baith jaata hai. Ghabrao mat, aaj koi mushkil formula ratna nahi hai. Pichhli class me humne data collect karna seekha; aaj seekhenge ki us data ka matlab kaise nikalte hain, cricket score aur marks ke examples se.',
    hook: 'Class ka average 70 hai aur tumhare 75 aaye. Achha hai ya bura? Jawab depend karta hai ki baaki logon ke marks kitne <b>"phaile hue"</b> hain. Agar sabke 68 se 72 ke beech hain to tum star ho. Agar marks 20 se 100 tak bikhre hain, to 75 bas theek-thaak hai. Yahi statistics ka jaadu hai.',
    blocks: [
      ['h', 'Statistics ke do kaam'],
      ['compare', ['Descriptive statistics', 'Data ko <b>summarize</b> karna: average kya hai, kitna spread hai, graph kaisa dikhta hai.'], ['Inferential statistics', 'Sample se <b>poori population ke baare me nateeja</b> nikalna, aur ye check karna ki result chance se to nahi aaya.']],

      ['h', 'Central tendency: "beech" kahan hai?'],
      ['list', [
        '<b>Mean</b>: sabka total ÷ sankhya. Sabse common "average".',
        '<b>Median</b>: chhote se bade order me lagane par beech wala number.',
        '<b>Mode</b>: jo number sabse zyada baar aaye.'
      ]],
      ['ex', 'Paanch dost aur unka pocket money', [
        'Monthly pocket money: ₹2,000, ₹2,500, ₹3,000, ₹3,000 aur ek ameer dost ka ₹50,000.',
        '<b>Mean</b> = 60,500 ÷ 5 = <b>₹12,100</b>. Lagta hai sab ameer hain, par 5 me se 4 ko ₹3,000 ya kam milta hai!',
        '<b>Median</b> = <b>₹3,000</b>, aur <b>mode</b> bhi ₹3,000. Ek <b>outlier</b> (bahut alag value) mean ko kheench leta hai, median ko nahi. Isliye "average salary" ki khabron me median zyada imaandaar number hota hai.'
      ]],
      ['teacher', 'Ye trick zindagi bhar kaam aayegi: jab bhi koi "average salary" ya "average income" bataye, poochho ki mean hai ya median. Ek-do bahut ameer log mean ko upar kheench lete hain.'],

      ['h', 'Variability: data kitna phaila hai?'],
      ['p', '<b>Range</b> = sabse bada minus sabse chhota. Simple hai par ek outlier se bigad jaata hai. Isliye psychology me <b>standard deviation (SD)</b> use hota hai: average se log aam taur par kitna door hain.'],
      ['ex', 'Do batsman, ek average', [
        'Dono ka batting average 40 hai. Batsman A ke pichhle 5 scores: 35, 38, 40, 42, 45. Batsman B ke: 0, 5, 15, 80, 100.',
        'A ka SD chhota hai (consistent), B ka bahut bada (unpredictable). Team selector ke liye ye farak average jitna hi important hai. Psychology me bhi do groups ka mean same ho sakta hai par spread bilkul alag.'
      ]],
      ['steps', [
        ['Mean nikalo', 'Scores 2, 4, 4, 6, 9 → mean = 25 ÷ 5 = 5.'],
        ['Har score ka mean se farak', '-3, -1, -1, 1, 4.'],
        ['Farak ka square', '9, 1, 1, 1, 16 → total 28.'],
        ['Average square (variance)', 'Sample ke liye (n - 1) se bhaag: 28 ÷ 4 = 7.'],
        ['Square root = SD', '√7 ≈ 2.65. Matlab log aam taur par mean se ~2.6 points door hain.']
      ]],
      ['teacher', 'Agar ye steps pehli baar me poore samajh nahi aaye, to bilkul theek hai. Bas itna pakad lo: <b>SD chhota = sab log average ke paas, SD bada = log bikhre hue</b>. Calculation calculator kar dega, matlab samajhna tumhara kaam hai.'],

      ['h', 'Normal distribution (bell curve)'],
      ['p', 'Bahut saari human cheezein, jaise height, IQ scores, reaction time, ek ghante jaise (bell) shape me baant-ti hain: zyada log beech me, kam log dono kinaron par. Iski khaas baat <b>68-95-99.7 rule</b> hai, jo upar ke animation me dikhaya gaya hai.'],
      ['p', '<b>z-score</b> batata hai ki koi score mean se kitne SD door hai: <mark>z = (score - mean) ÷ SD</mark>.'],
      ['ex', 'Tumhare 75 marks ka asli matlab', [
        'Mean 70, SD 5: z = (75 - 70) ÷ 5 = <b>+1</b>. Matlab tum lagbhag <b>84th percentile</b> par ho, yaani ~84% class se aage.',
        'Mean 70, SD 15: z = 5 ÷ 15 ≈ <b>+0.33</b>. Ab tum sirf ~63rd percentile par ho. Same marks, alag kahani.'
      ]],
      ['p', 'Har data normal nahi hota. Jab ek taraf lambi poonchh ho to use <b>skewed</b> kehte hain. Income data right-skewed hota hai: zyada log kam kamate hain, kuch log bahut zyada. Skewed data me median zyada sahi picture deta hai.'],

      ['h', 'Inferential stats: kya result asli hai?'],
      ['p', 'Maan lo ek nayi study technique wale group ne control group se 5 marks zyada laaye. Kya ye technique ka asar hai ya bas luck? Isi ke liye <b>statistical significance</b> test hota hai.'],
      ['p', '<b>p-value</b>: agar asal me koi farak na hota, to sirf chance se itna ya isse bada farak dikhne ki sambhavna kitni hai. Psychology me aam taur par <b>p &lt; .05</b> (5% se kam) ko "statistically significant" maana jaata hai.'],
      ['note', 'p = .03 ka matlab ye <b>nahi</b> ki hypothesis 97% sach hai. Matlab sirf itna hai ki "agar koi effect na hota, to aisa data milna kaafi unusual hota." p-value ko galat samajhna research ki sabse common galti hai.'],
      ['teacher', 'Yahan bade-bade researchers bhi galti karte hain, to tum akele nahi ho. p-value sirf itna batata hai ki result "luck se aana mushkil" hai; ye nahi batata ki effect bada hai ya theory sach hai. Wo jaanne ke liye agla paragraph dekho.'],
      ['p', '<b>Effect size</b> batata hai ki farak <b>kitna bada</b> hai. Cohen\'s d ke liye rough guide: 0.2 chhota, 0.5 medium, 0.8 bada. Bahut bade sample me chhota sa bekaar farak bhi "significant" aa sakta hai. Isliye p-value aur effect size dono dekhne chahiye.'],
      ['ex', 'Significant par bekaar', 'Ek supplement company ne 20,000 logon par test karke kaha "memory me significant sudhaar!" Asal me sudhaar 100 me se sirf 0.4 points tha (p &lt; .05, par effect size bahut chhota). Statistically significant, practically almost zero. Ad me sirf pehla hissa bataya jaata hai.'],
      ['p', '<b>Confidence interval</b> ek range deta hai jisme asli value hone ki sambhavna hai, jaise "average neend 6.8 ghante (95% CI: 6.5 se 7.1)". Range jitni patli, andaza utna precise.'],

      ['h', 'Graphs jo jhooth bolte hain'],
      ['list', [
        '<b>Y-axis kaata hua</b>: 50% aur 52% ka farak agar axis 49 se shuru ho to bahut bada dikhta hai.',
        '<b>Cherry-picking</b>: sirf wo time-period dikhana jo apni baat support kare.',
        '<b>Bina base ke percentage</b>: "Cases 200% badhe!" 1 se 3 hue ya 1,000 se 3,000? Bahut farak hai.'
      ]],
      ['terms', [
        ['Mean', 'Saare scores ka total ÷ scores ki sankhya.'],
        ['Median', 'Order me lagane par beech wala score; outliers se kam prabhavit.'],
        ['Mode', 'Sabse zyada baar aane wala score.'],
        ['Outlier', 'Baaki data se bahut alag value.'],
        ['Standard deviation', 'Scores mean se aam taur par kitne door hain, uska maap.'],
        ['Normal distribution', 'Bell-shaped distribution jisme zyada scores beech me hote hain.'],
        ['z-score', 'Koi score mean se kitne standard deviations upar ya neeche hai.'],
        ['Percentile', 'Kitne pratishat log is score se neeche hain.'],
        ['Skewed distribution', 'Asymmetric distribution jisme ek taraf lambi poonchh ho.'],
        ['Statistical significance', 'Result itna unusual ki sirf chance se aana mushkil ho (aam taur par p < .05).'],
        ['p-value', 'Agar koi asli effect na ho, to itna extreme result aane ki probability.'],
        ['Effect size', 'Farak ya rishta kitna bada hai, uska maap (jaise Cohen\'s d).'],
        ['Confidence interval', 'Wo range jisme asli population value hone ki achhi sambhavna hai.']
      ]],
      ['think', 'News: "Survey: 80% doctors is toothpaste ko recommend karte hain." Kaunse sawaal poochhoge?', [
        'Kitne doctors se poochha? Kaise chune gaye? Kya sawaal tha (kya ek hi brand chunna tha ya kai brands bata sakte the)? Survey kisne fund kiya? Aise hi ek mashhoor ad par UK me sawaal uthe the kyunki doctors kai brands chun sakte the, to doosre brands ko bhi utne hi "recommend" kiya gaya tha.'
      ]]
    ],
    outro: 'Mean, median, SD, z-score aur p-value: aaj tumne research padhne ki bhasha seekh li. Quiz me ek z-score wala sawaal hai, formula yaad karke khud try karo. Agli class me ek gambhir sawaal uthayenge: science ke naam par kya karna <b>galat</b> hai? Yaani research ethics.',
    takeaways: [
      'Outliers mean ko bigaadte hain; aise me median better hai.',
      'Standard deviation batata hai ki data kitna phaila hai; same mean, alag kahani ho sakti hai.',
      'Normal curve: 68% data 1 SD, 95% data 2 SD ke andar.',
      'z-score kisi score ko poore group ke context me rakhta hai.',
      'p-value aur effect size dono dekho: significant hamesha important nahi hota.'
    ],
    quiz: [
      ['Kisi data me ek bahut bada outlier hai. Typical value batane ke liye kya best hai?', ['Mean', 'Median', 'Range', 'Sum'], 1, 'Median beech ki value hai aur outlier se lagbhag prabhavit nahi hota.'],
      ['Normal distribution me lagbhag kitne % scores mean se ±1 SD ke andar hote hain?', ['50%', '68%', '95%', '99.7%'], 1, '68-95-99.7 rule ke hisaab se ~68%.'],
      ['Mean 60, SD 10, tumhara score 80. Tumhara z-score kya hai?', ['+1', '+2', '+0.5', '-2'], 1, 'z = (80 - 60) ÷ 10 = +2.'],
      ['Do batsman ka average same hai par ek bahut inconsistent hai. Ye kis stat me dikhega?', ['Mean', 'Mode', 'Standard deviation', 'Median'], 2, 'Standard deviation spread ya consistency ko naapta hai.'],
      ['p = .03 ka sahi matlab kya hai?', ['Hypothesis 97% sach hai', 'Agar koi effect na hota, to aisa result milna kaafi unlikely tha', 'Effect bahut bada hai', 'Study 3% galat hai'], 1, 'p-value null hypothesis maan kar data ki unusualness batata hai, hypothesis ki sachchai nahi.'],
      ['Effect size kyun zaroori hai?', ['Ye batata hai sample kitna bada tha', 'Ye batata hai farak kitna bada aur practically important hai', 'Ye p-value ka doosra naam hai', 'Ye sirf medicine me use hota hai'], 1, 'Bade sample me chhota farak bhi significant ho sakta hai; effect size uski asli importance batata hai.']
    ],
    more: [
      ['OpenStax Introductory Statistics (free textbook)', 'https://openstax.org/details/books/introductory-statistics-2e', 'book'],
      ['Crash Course Statistics (YouTube series)', YT('Crash Course Statistics playlist'), 'video'],
      ['JASP: free, simple statistics software used in psychology', 'https://jasp-stats.org', 'link']
    ]
  });

  /* 1.5 */
  C({
    id: 'research-ethics', level: 1, mins: 15, visual: 'milgram',
    visualCap: 'Milgram (1963): 40 me se 26 log (65%) "teacher" ke roop me sabse upar 450 volt tak gaye. Asal me koi jhatka nahi diya ja raha tha, par participants ko ye nahi pata tha.',
    title: 'Ethics: research ki seemaayein',
    tag: 'Milgram, Stanford Prison, Little Albert, aur aaj ke informed consent wale niyam',
    intro: 'Ab tak humne seekha ki research kaise karte hain. Aaj ek zaroori sawaal: kya kuch cheezein aisi hain jo science ke naam par bhi nahi karni chahiye? Kuch famous studies ki kahaniyan sunenge jo aaj bhi rongte khade kar deti hain, aur dekhenge ki unse kaunse niyam bane jo aaj research me hissa lene wale har insaan ki hifazat karte hain.',
    hook: '1961 me Yale University me log ek "memory aur punishment" experiment ke liye aaye. Unse kaha gaya ki agle kamre me baithe ek aadmi ke har galat jawab par use bijli ka jhatka do, aur har baar volt badhao. Wo aadmi cheekha, deewar peeti, phir chup ho gaya. Lab coat pehne scientist ne kaha: <i>"Experiment ke liye zaroori hai ki aap jaari rakhein."</i> Socho, us kamre me tum ho. Ab aage kya?',
    blocks: [
      ['h', 'Milgram ka obedience experiment'],
      ['case', 'Stanley Milgram (1963)', [
        'Participant "teacher" bana, aur ek actor "learner". Shock machine par 15 volt se 450 volt tak switches the, 450 par likha tha "XXX". Learner asal me koi shock nahi le raha tha, uski cheekhein recorded thi.',
        'Experiment se pehle psychiatrists ne andaza lagaya tha ki 1% se kam log aakhir tak jaayenge. Asal me <b>65% (40 me se 26) log 450 volt tak gaye</b>. Kai participants pasina-pasina the, kaanp rahe the, nervous hansi aa rahi thi, par authority ke kehne par chalte rahe.',
        'Ye study authority ke saamne obedience samajhne me bahut important hai (Level 5 me detail me). Par ethics ke hisaab se ye participants ko gehra stress dene, unhe <b>dhoka (deception)</b> dene, aur chhodna mushkil banane ke liye criticize hui.'
      ]],
      ['teacher', 'Ek pal ruko aur imaandaari se socho: us kursi par tumhara faisla kya hota? Zyada tar log kehte hain "mujhse to ye kabhi na hota." Par Milgram ka data dikhata hai ki situation ki taakat hum sabko hairaan kar deti hai.'],
      ['case', 'Stanford Prison Experiment (1971)', [
        'Philip Zimbardo ne college students ko randomly "guards" aur "prisoners" banaya. 14 din ka plan tha, par 6 din me band karna pada kyunki guards cruel ho gaye aur prisoners toot gaye.',
        'Baad ki jaanch me pata chala ki guards ko "sakht" rehne ke liye encourage kiya gaya tha, aur kuch participants ne acting bhi ki. Isliye aaj ye study scientifically kamzor maani jaati hai, par ethics ke liye ek bada sabak hai: Zimbardo khud researcher aur "prison superintendent" dono the, jisse wo nishpaksh nahi reh paaye.'
      ]],
      ['case', 'Little Albert (1920)', [
        'John Watson aur Rosalie Rayner ne 9 mahine ke bachche "Albert" ko safed chuhe ke saath tez awaaz suna kar chuhe se darna sikhaya. Baad me wo safed khargosh, kutte, aur fur coat se bhi darne laga. Bachche ka dar kabhi khatam nahi kiya gaya. Aaj ye bilkul aswikaarya hai.'
      ]],
      ['p', 'Medical research me bhi aise kaand hue, jaise America ka <b>Tuskegee syphilis study (1932-1972)</b>, jisme Black purushon ko bina bataye syphilis ka ilaaj nahi diya gaya, jabki penicillin 1940s me available tha. Isi ke baad 1979 me <b>Belmont Report</b> aaya, jo aaj ke research ethics ki neev hai: respect for persons, beneficence (bhalai), aur justice.'],
      ['teacher', 'Dhyan do, ye niyam kisi ne kitaab me baith kar nahi banaye. Har niyam ke peeche kisi asli insaan ka dard hai. Agle section ke niyam padhte waqt socho ki kaunsa niyam kis kaand ki wajah se aaya.'],

      ['h', 'Aaj ke ethical niyam'],
      ['p', 'Aaj kisi bhi university ya hospital me human participants par research se pehle <b>Ethics Committee</b> (US me IRB) ki approval zaroori hai. India me ICMR ki <i>National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017)</i> lagu hoti hain, aur psychologists APA aur national professional codes follow karte hain.'],
      ['steps', [
        ['Informed consent', 'Participant ko pehle saaf bataya jaaye ki kya hoga, khatre kya hain, aur wo apni marzi se haan kahe. Bachchon ke liye parents ki consent + bachche ki khud ki sahmati (assent).'],
        ['Right to withdraw', 'Participant kabhi bhi bina koi wajah bataye aur bina nuksaan ke beech me chhod sakta hai.'],
        ['Minimal harm', 'Physical ya psychological nuksaan kam se kam. Fayda khatre se zyada hona chahiye.'],
        ['Confidentiality', 'Data gopniya rahe; naam ki jagah codes use hon.'],
        ['Deception sirf zaroori ho tab', 'Agar sach batane se study bekaar ho jaaye aur khatra kam ho, tabhi. Aur baad me poora sach batana zaroori.'],
        ['Debriefing', 'Study ke baad participant ko asli maksad batana, sawaalon ka jawab dena, aur agar stress hua ho to use door karna.']
      ]],

      ['h', 'Animal research ethics'],
      ['p', 'Psychology me kuch research (jaise brain aur learning par) animals par hoti hai. Iske liye <b>3Rs</b> ka niyam hai: <b>Replace</b> (jahan ho sake animals ki jagah doosre methods), <b>Reduce</b> (kam se kam animals), <b>Refine</b> (dard aur takleef kam se kam). India me CPCSEA (Committee for Control and Supervision of Experiments on Animals) iski nigrani karti hai.'],

      ['h', 'Therapy aur rozmarra me ethics'],
      ['list', [
        '<b>Confidentiality aur uski seema</b>: therapist tumhari baat gopniya rakhta hai, <i>sivaay</i> jab tumhe ya kisi aur ko gambhir khatra ho (jaise suicide ka plan ya kisi ko nuksaan pahunchane ki dhamki), ya kanoon maange.',
        '<b>Dual relationships</b>: therapist apne client ka dost, business partner ya romantic partner nahi ban sakta.',
        '<b>Competence</b>: psychologist sirf wahi kaam kare jiski usne training li hai.'
      ]],
      ['ex', 'Ek "fun personality quiz" ka asli daam', 'Cambridge Analytica scandal (2018) me Facebook par ek personality quiz app ke zariye karodon users (Facebook ke hisaab se ~8.7 crore) ka data unki poori jaankari ke bina collect hua aur political ads target karne me use hone ke aarop lage. Ye dikhata hai ki <b>informed consent</b> sirf lab ki baat nahi; psychology ka data har online quiz me liya ja raha hai.'],
      ['teacher', 'Ye tumhare phone par bhi hota hai. Agli baar "tum kaunse Bollywood character ho?" jaisa quiz khelne se pehle ek baar dekho ki wo kaunsi permissions maang raha hai. Informed consent ka matlab hai ki tumhe pata ho tum kya de rahe ho.'],
      ['think', 'Kya aaj Milgram jaisi study ho sakti hai?', [
        'Poori tarah nahi. 2009 me psychologist Jerry Burger ne safe version kiya: 150 volt par hi rok diya (jahan learner pehli baar chhodne ki maang karta hai), participants ki pehle screening ki, aur baar-baar bataya ki wo chhod sakte hain. Phir bhi ~70% log 150 volt ke aage jaane ko tayyar the, Milgram ke results ke kaafi kareeb. Matlab sawaal ka jawab ethically bhi dhoondha ja sakta hai.'
      ]],
      ['terms', [
        ['Informed consent', 'Poori jaankari ke baad apni marzi se research me shaamil hone ki sahmati.'],
        ['Debriefing', 'Study ke baad participant ko asli maksad aur procedure ki poori jaankari dena.'],
        ['Deception', 'Research me participant se jaankar kuch chhupana ya galat batana; sirf sakht sharton par allowed.'],
        ['Confidentiality', 'Participant ya client ki jaankari ko gopniya rakhna.'],
        ['Ethics committee / IRB', 'Wo committee jo research shuru hone se pehle uske ethics ki jaanch aur approval karti hai.'],
        ['Right to withdraw', 'Kabhi bhi bina nuksaan ke research chhodne ka adhikaar.'],
        ['Demand characteristics', 'Study ke wo cues jinse participant andaza lagaye ki researcher kya chahta hai aur waisa behave kare.'],
        ['3Rs', 'Animal research ka niyam: Replace, Reduce, Refine.'],
        ['Belmont Report', '1979 ki report jisne research ethics ke teen siddhant diye: respect, beneficence, justice.']
      ]]
    ],
    outro: 'Aaj ka sabak: science ki bhookh insaan ki izzat se badi nahi ho sakti. Quiz me consent aur debriefing ka farak dhyan se dekhna. Agli class Level 1 ki aakhri class hai, aur sabse mazedaar bhi: popular psychology myths ko science se todna.',
    takeaways: [
      'Milgram, Stanford Prison aur Little Albert jaisi studies ne dikhaya ki research participants ko nuksaan pahuncha sakti hai.',
      'Aaj informed consent, right to withdraw, confidentiality aur debriefing zaroori hain.',
      'Deception sirf tab jab zaroori ho aur baad me poora sach bataya jaaye.',
      'Animal research ke liye 3Rs: Replace, Reduce, Refine.',
      'Therapy me confidentiality ki bhi seema hai: gambhir khatre ki sthiti me therapist ko kadam uthana padta hai.'
    ],
    quiz: [
      ['Milgram ki original study me kitne % log 450 volt tak gaye?', ['1%', '25%', '65%', '100%'], 2, '40 me se 26 participants, yaani 65%, aakhir tak gaye.'],
      ['Study ke baad participant ko asli maksad batana kya kehlata hai?', ['Informed consent', 'Debriefing', 'Confidentiality', 'Replication'], 1, 'Debriefing study ke baad hoti hai; consent pehle li jaati hai.'],
      ['Little Albert study ki sabse badi ethical galti kya thi?', ['Bachcha bahut bada tha', 'Bachche me dar paida kiya gaya aur kabhi door nahi kiya gaya', 'Study bahut chhoti thi', 'Isme placebo nahi tha'], 1, 'Bachche ko jaanbujh kar dar sikhaya gaya aur wo dar kabhi khatam nahi kiya gaya.'],
      ['Animal research me "3Rs" me kya shaamil nahi hai?', ['Replace', 'Reduce', 'Refine', 'Repeat'], 3, '3Rs = Replace, Reduce, Refine.'],
      ['Therapist confidentiality kab tod sakta hai?', ['Jab client ka parivaar poochhe', 'Jab client ko ya doosron ko gambhir khatra ho', 'Jab therapist ko boring lage', 'Kabhi nahi'], 1, 'Khud ko ya doosron ko nuksaan ke gambhir khatre ki sthiti me confidentiality ki seema hai.'],
      ['Stanford Prison Experiment ko aaj scientifically kamzor kyun maana jaata hai?', ['Isme bahut kam log the', 'Guards ko sakht hone ke liye encourage kiya gaya aur researcher khud role me tha', 'Ye animals par tha', 'Ye 1 ghante ka tha'], 1, 'Demand characteristics aur researcher ki dohri bhoomika ne results ko bias kiya.']
    ],
    more: [
      ['APA Ethical Principles of Psychologists and Code of Conduct', 'https://www.apa.org/ethics/code', 'link'],
      ['ICMR National Ethical Guidelines (2017)', 'https://www.icmr.gov.in', 'link'],
      ['OpenStax Psychology 2e · 2.4 Ethics', OS(2), 'book']
    ]
  });

  /* 1.6 */
  C({
    id: 'critical-thinking', level: 1, mins: 15, visual: 'evidencePyramid',
    visualCap: 'Evidence ki seedhi: ek kahani (anecdote) sabse kamzor, aur kai studies ka meta-analysis sabse mazboot saboot hai.',
    title: 'Critical thinking aur psychology ke myths',
    tag: '10% brain, left-right brain, learning styles: popular myths ko science se todna',
    intro: 'Level 1 ki aakhri class me tumhara swagat hai! Ab tak tumne research methods, statistics aur ethics seekh liye. Aaj in sab ko milakar ek hathiyar banayenge: critical thinking. Iske baad WhatsApp forwards, ads aur "studies prove" wale daavon ko parakhna tumhare liye kaafi aasaan ho jaayega.',
    hook: 'Kya tumne suna hai ki hum brain ka sirf 10% use karte hain? Ya ki "left-brained" log logical aur "right-brained" log creative hote hain? Ya ki sugar khaane se bachche hyper ho jaate hain? Ye sab baatein bahut popular hain, aur <b>sab galat hain</b>. Is chapter me hum seekhenge ki koi bhi claim kaise check karein.',
    blocks: [
      ['h', 'Critical thinking ke 6 sawaal'],
      ['steps', [
        ['Claim exactly kya hai?', '"Ye supplement memory badhata hai." Kitna? Kiski? Kab tak?'],
        ['Saboot kya hai?', 'Ek kahani (testimonial) ya proper study? Kitne logon par?'],
        ['Source kaun hai?', 'Peer-reviewed journal ya bechne wali company ka ad?'],
        ['Doosra explanation ho sakta hai?', 'Placebo, coincidence, third variable, ya log waise bhi theek ho jaate?'],
        ['Kya dohraya gaya?', 'Ek study kaafi nahi; kya doosri labs ko bhi wahi mila?'],
        ['Bahut achha hai to sach hai?', '"7 din me IQ double" jaise daave lagbhag hamesha jhoothe hote hain.']
      ]],

      ['h', 'Myth busting: popular galatfahmiyan'],
      ['myth', 'Hum apne brain ka sirf 10% use karte hain.', 'Brain imaging (fMRI, PET) dikhata hai ki din bhar me lagbhag saare brain areas active hote hain. Brain ke chhote se hisse ka nuksaan bhi (jaise stroke) badi problems paida karta hai, jo 90% "bekaar" brain me nahi hona chahiye. Aur brain body ki ~20% energy khaata hai; evolution itna mehenga bekaar organ nahi rakhta.'],
      ['myth', 'Kuch log "left-brained" (logical) aur kuch "right-brained" (creative) hote hain.', 'Haan, kuch kaam ek hemisphere me thode zyada hote hain (jaise zyada tar logon me language left side me). Par 2013 me University of Utah ki ek study ne 1,000 se zyada logon ke brain scans dekhe aur aisa koi saboot nahi mila ki koi vyakti overall "left" ya "right" brain se zyada kaam leta hai. Creativity aur logic dono me poora brain milkar kaam karta hai.'],
      ['myth', 'Har student ka ek "learning style" (visual, auditory, kinesthetic) hota hai, aur usi style me padhane se zyada seekhta hai.', 'Log apni pasand zaroor batate hain, par research reviews (jaise Pashler aur saathi, 2008) ko aisa saboot nahi mila ki "style se match" karke padhane se zyada seekha jaata hai. Asli farak content ke hisaab se method chunne se padta hai: geography ke liye map, music ke liye sunna. Aur sabke liye active recall aur spacing kaam karte hain.'],
      ['teacher', 'Ye myth sun kar shayad thoda jhatka laga ho, kyunki school me bhi aksar yahi bataya jaata hai. Koi baat nahi, galat cheez ko chhodna bhi seekhne ka hissa hai. Tumhare liye asli takeaway: padhte waqt khud se sawaal poochho aur revision ko kuch dino me baanto.'],
      ['myth', 'Mozart sunne se bachche smart bante hain.', '1993 ki ek chhoti study me college students ka spatial task score Mozart sunne ke baad thodi der (~10-15 min) ke liye thoda badha tha. Ise media ne "Mozart babies ko smart banata hai" bana diya. Baad ki studies aur meta-analyses ko koi lasting IQ fayda nahi mila; effect zyada tar mood aur arousal ka tha.'],
      ['myth', 'Gussa aaye to takiya peeto ya cheekho, "bhadaas nikalne" se gussa kam hota hai.', 'Brad Bushman (2002) ki study me jinhone gusse me punching bag maara, wo baad me zyada aggressive the, kuch na karne walon ke mukable. "Venting" gusse ko rehearse karta hai. Better hai shaant hona: gehri saans, walk, ya baad me baat karna.'],
      ['myth', 'Sugar khaane se bachche hyperactive ho jaate hain.', 'Double-blind studies me jab na parents ko na bachchon ko pata tha ki sugar diya gaya ya sugar-free, behaviour me koi farak nahi mila. Ek study me jin maaon ko bataya gaya ki bachche ko sugar diya hai (asal me nahi diya tha), unhone apne bachche ko zyada hyper rate kiya. Ye <b>expectation</b> ka asar hai.'],
      ['myth', 'Lie detector (polygraph) jhooth pakad leta hai.', 'Polygraph heart rate, saans aur pasina naapta hai, yaani <b>arousal</b>, jhooth nahi. Nervous bekasoor log fail ho sakte hain aur trained jhoothe pass. Isliye kai desh ki adalatein polygraph ko akele pakka saboot nahi maanti.'],
      ['myth', 'Poornima (full moon) ki raat log ajeeb behave karte hain, emergency cases badhte hain.', 'Kai studies ke meta-analysis me full moon aur crime, hospital admissions ya mental health emergencies me koi consistent rishta nahi mila. Hum full moon wali ajeeb raatein yaad rakhte hain aur normal wali bhool jaate hain: ye <b>illusory correlation</b> hai.'],

      ['h', 'Barnum effect: "ye to bilkul mere baare me hai!"'],
      ['case', 'Bertram Forer (1949)', [
        'Forer ne apne students ka personality test liya aur har ek ko "personal" result diya. Asal me sabko <b>ek hi paragraph</b> mila tha, jo zyada tar ek akhbaar ke horoscope se liya gaya tha: "Tum chahte ho ki log tumhe pasand karein, par tum khud ki kaafi aalochana karte ho. Tumme bahut potential hai jo abhi istemaal nahi hua..."',
        'Students ne is description ki accuracy ko 0-5 scale par average <b>4.26</b> rate kiya. Aise vague, sab par fit hone wale statements ko sach maan lena <b>Barnum (ya Forer) effect</b> kehlata hai. Horoscope, "tumhara naam kya kehta hai" wale quizzes, aur kai online personality tests isi par chalte hain.'
      ]],
      ['teacher', 'Ek baat note karo: Forer ke students padhe-likhe the, phir bhi jhaanse me aa gaye. Barnum effect se bachne ke liye intelligence nahi, ek aadat chahiye: khud se poochhna "kya ye baat kisi aur par bhi utni hi fit hogi?"'],
      ['tip', 'Agli baar koi horoscope padho, to apni rashi ki jagah kisi aur rashi ka padho. Dekho kitna "fit" baithta hai. Tumhe khud hairani hogi.'],

      ['h', 'Pseudoscience ke red flags'],
      ['list', [
        '<b>Falsify nahi ho sakta</b>: daava aisa ki koi bhi result aaye, "theory sahi" rahe.',
        '<b>Sirf kahaniyan aur testimonials</b>: "Meri chachi ka cousin theek ho gaya."',
        '<b>"Scientists isse chhupate hain"</b> ya "pracheen gupt rahasya".',
        '<b>Bahut zyada daave</b>: ek hi cheez se 50 beemariyan theek.',
        '<b>Science jaise shabd</b> (quantum, energy, frequency, neuro-) bina asli matlab ke.',
        '<b>Peer review nahi</b>, aur aalochana par gussa.'
      ]],
      ['p', 'Philosopher <b>Karl Popper</b> ne kaha tha ki scientific theory ki pehchaan hai ki use <b>falsify</b> (galat saabit) kiya ja sake. "Kal baarish hogi" falsifiable hai. "Kuch na kuch achha hoga" nahi.'],

      ['h', 'Hamara dimaag hi hamein dhoka deta hai'],
      ['list', [
        '<b>Confirmation bias</b>: hum wahi dhoondhte aur yaad rakhte hain jo hamari pehle ki soch ko support kare.',
        '<b>Anecdotal evidence</b>: ek zabardast kahani hazaron logon ke data se zyada convincing lagti hai, par hoti nahi.',
        '<b>Overconfidence</b>: hum apne gyaan aur andaze par zaroorat se zyada bharosa karte hain.',
        '<b>Illusory correlation</b>: do cheezon me rishta dekhna jo hai hi nahi, kyunki yaadgaar examples dimaag me chipak jaate hain.'
      ]],
      ['teacher', 'Sach bataun? Ye biases mujhme bhi hain, tumme bhi, sabme. Farak bas itna hai ki jise inke naam pata hon, use inhe pakadna aasaan ho jaata hai. Aaj se jab koi baat "ekdum sahi" lage, ek second ruk kar socho: kahin ye sirf meri pehle ki soch se match to nahi kar rahi?'],
      ['tip', 'WhatsApp forward check karne ka <b>SIFT</b> method (Mike Caulfield): <b>S</b>top (forward karne se pehle ruko), <b>I</b>nvestigate the source (kisne likha?), <b>F</b>ind better coverage (kya bharosemand news ya fact-checkers ne bhi likha?), <b>T</b>race claims (original study tak jao).'],
      ['terms', [
        ['Critical thinking', 'Claims ko bina jaanch maane bina, saboot aur logic se parakhna.'],
        ['Pseudoscience', 'Wo daave jo science jaise dikhte hain par scientific method follow nahi karte.'],
        ['Falsifiability', 'Kisi theory ko test karke galat saabit kiye ja sakne ki sambhavna; science ki pehchaan.'],
        ['Barnum effect', 'Vague, sab par lagu hone wale personality statements ko apne baare me bahut sahi maan lena.'],
        ['Confirmation bias', 'Apni maanyata ko support karne wali jaankari dhoondhna aur virodhi jaankari ko ignore karna.'],
        ['Anecdotal evidence', 'Vyaktigat kahaniyon par based saboot, jo systematic data nahi hai.'],
        ['Illusory correlation', 'Do cheezon ke beech rishta mehsoos karna jo asal me maujood nahi.'],
        ['Meta-analysis', 'Kai studies ke data ko statistically milakar overall nateeja nikalna.']
      ]],
      ['think', 'Tumhare dost kehte hain: "Maine ye herbal tea pi aur mera sar dard 1 ghante me theek ho gaya. Ye kaam karti hai!" Kya ye saboot hai?', [
        'Ye ek anecdote hai. Sar dard aksar waise bhi 1 ghante me theek ho jaata hai (natural recovery), tea peete waqt aaraam bhi mila, aur placebo effect bhi ho sakta hai. Pata karne ke liye bahut logon par controlled trial chahiye jisme kuch ko asli tea mile aur kuch ko waisi hi dikhne wali placebo tea.'
      ]]
    ],
    outro: 'Bahut badhiya, tumne Level 1 ki saari classes poori kar li! Aaj ka mantra: har daave par poochho "saboot kya hai?" Ab is chapter ka quiz do, aur phir <b>Level 1 ka exam</b> do; 70% laao aur Level 2 unlock karo, jahan hum brain ki machine ke andar jhaankenge.',
    takeaways: [
      'Har claim par poochho: saboot kya hai, source kaun hai, aur doosra explanation kya ho sakta hai?',
      '10% brain, left/right brain personality, learning styles, Mozart effect aur sugar-hyperactivity sab myths hain.',
      'Barnum effect ki wajah se vague horoscope aur personality quizzes "sahi" lagte hain.',
      'Scientific theory falsifiable honi chahiye.',
      'Anecdote sabse kamzor saboot hai; meta-analysis aur replicated experiments sabse mazboot.'
    ],
    quiz: [
      ['"Hum brain ka sirf 10% use karte hain" ke khilaf sabse strong saboot kya hai?', ['Ye bahut purani baat hai', 'Brain scans me lagbhag saare areas active dikhte hain aur chhota damage bhi badi problem karta hai', 'Einstein ne 100% use kiya', 'Brain bahut halka hai'], 1, 'Imaging aur brain injury dono dikhate hain ki brain ka koi hissa "bekaar" nahi.'],
      ['Horoscope padh kar "ye to bilkul mere baare me hai" lagna kaunsa effect hai?', ['Placebo effect', 'Barnum (Forer) effect', 'Mozart effect', 'Bystander effect'], 1, 'Vague statements sab par fit hote hain; ise Barnum ya Forer effect kehte hain.'],
      ['Learning styles ke baare me research kya kehti hai?', ['Style se match karke padhane se bahut fayda hota hai', 'Style se match karne ka koi strong saboot nahi mila', 'Sab log visual learners hain', 'Sirf bachchon me kaam karta hai'], 1, 'Reviews ko matching hypothesis ka support nahi mila; active recall aur spacing sabke liye kaam karte hain.'],
      ['Scientific theory ki sabse important pehchaan kya hai (Karl Popper ke hisaab se)?', ['Wo purani ho', 'Use falsify (test karke galat saabit) kiya ja sake', 'Use bahut log maanein', 'Wo complicated ho'], 1, 'Falsifiability science ko pseudoscience se alag karti hai.'],
      ['Gusse me takiya peetne ("venting") ka asar research me kya mila?', ['Gussa poori tarah khatam', 'Aggression aur badh gaya', 'Koi asar nahi', 'Neend achhi aayi'], 1, 'Bushman (2002) me venting walon me baad me zyada aggression dikha.'],
      ['Evidence ki seedhi me sabse kamzor saboot kaunsa hai?', ['Randomized controlled trial', 'Meta-analysis', 'Anecdote / vyaktigat kahani', 'Correlational study'], 2, 'Ek kahani me na control hota hai na sample; ye sabse kamzor saboot hai.']
    ],
    more: [
      ['50 Great Myths of Popular Psychology (Lilienfeld et al.) · book', GR('50 Great Myths of Popular Psychology'), 'book'],
      ['Crash Course: Navigating Digital Information (SIFT jaisa fact-checking)', YT('Crash Course Navigating Digital Information'), 'video'],
      ['Alt News: Indian fact-checking site', 'https://www.altnews.in', 'link']
    ]
  });
})();
