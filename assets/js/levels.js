/* Level metadata, badges and daily facts. */
(function () {
  const PSY = window.PSY;

  PSY.levels = [
    { n: 1, name: 'Neev', title: 'Foundations', short: 'Foundations', rank: 'Curious Mind', icon: 'leaf',
      desc: 'Psychology kya hai, kahan se aayi, aur scientist log mind ko kaise study karte hain.',
      outcomes: ['Psychology ko myths se alag pehchaanna', 'Research methods aur basic statistics ki samajh', 'Ethics aur critical thinking ki aadat'],
      teacher: 'Is level me hum psychology ki neev daalenge: ye kya hai, kahan se aayi, aur scientist mind ko kaise study karte hain. Jaldi mat karna. Yahan jo "pehle evidence dikhao" wali aadat banegi, wo poore course me kaam aayegi.' },
    { n: 2, name: 'Dimaag ki Machine', title: 'Brain & Biology', short: 'Brain & Biology', rank: 'Brain Explorer', icon: 'brain',
      desc: 'Neurons, brain ke hisse, hormones, genes, senses, aur sleep ka science.',
      outcomes: ['Neuron se behaviour tak ka connection', 'Brain map aur nervous system', 'Perception, illusions aur sleep cycle'],
      teacher: 'Ab hum dimaag ke andar chalenge. Thodi biology aayegi, par ghabrana mat: har neuron aur hormone ko roz ki life se jodenge. Exam ka dar, neend ki kami, chai ki craving, sabka jawab yahan milega.' },
    { n: 3, name: 'Sochne ki Kala', title: 'Learning, Memory & Cognition', short: 'Cognition', rank: 'Mind Hacker', icon: 'bulb',
      desc: 'Hum seekhte kaise hain, yaad kaise rakhte hain, aur sochte-decide kaise karte hain.',
      outcomes: ['Conditioning se habits ki samajh', 'Memory improve karne ki science-backed techniques', 'Thinking, language aur intelligence'],
      teacher: 'Ye level tumhari padhai ka tareeka badal sakta hai. Habits kaise bante hain, yaad kaise rehta hai, aur dimaag kahan shortcut leta hai. Jo techniques yahan aayengi, unhe usi din apni padhai par try karna.' },
    { n: 4, name: 'Dil aur Safar', title: 'Motivation, Emotion, Development & Personality', short: 'Emotion & Growth', rank: 'Heart Reader', icon: 'heart',
      desc: 'Hum kyun karte hain jo karte hain, emotions kaise bante hain, aur insaan bachpan se budhape tak kaise badalta hai.',
      outcomes: ['Motivation aur emotion ki theories', 'Stress ko samajhna aur handle karna', 'Development stages aur personality theories'],
      teacher: 'Ab dil ki baat. Hum kyun karte hain jo karte hain, emotions kahan se aate hain, aur insaan bachpan se budhape tak kaise badalta hai. Har chapter me khud ko aur apne ghar walon ko thoda aur samajhne ka mauka milega.' },
    { n: 5, name: 'Samaaj aur Hum', title: 'Social Psychology', short: 'Social', rank: 'People Decoder', icon: 'users',
      desc: 'Doosre log hamari soch, faisle aur behaviour ko kaise badal dete hain.',
      outcomes: ['Attribution, attitudes aur persuasion', 'Conformity, obedience aur group behaviour', 'Prejudice, relationships, helping aur aggression'],
      teacher: 'Is level me ek kadwa sach dikhega: doosre log hamari soch ko jitna hum maante hain usse kahin zyada badalte hain. Asch, Milgram aur bystander effect padhte waqt khud se poochna: us jagah mera faisla kya hota?' },
    { n: 6, name: 'Mann ki Sehat', title: 'Mental Health & Therapy', short: 'Mental Health', rank: 'Mind Healer', icon: 'leaf',
      desc: 'Psychological disorders ko bina stigma ke samajhna aur therapy kaise kaam karti hai.',
      outcomes: ['Anxiety, mood, psychotic aur neurodevelopmental disorders', 'CBT, DBT, ACT aur medication ka basic samajh', 'Help kab aur kaise maangni hai'],
      teacher: 'Ye level dhyan aur samvedna se padhna. Yahan disorders ko label ki tarah nahi, insaan ki takleef ki tarah samjhenge. Agar padhte waqt kuch apna sa lage to ghabrana mat: madad maangna taakat hai, aur neeche footer me helpline hamesha hai.' },
    { n: 7, name: 'Expert Zone', title: 'Advanced & Applied Psychology', short: 'Advanced & Applied', rank: 'Psychology Master', icon: 'rocket',
      desc: 'Cognitive biases, positive psychology, applied fields, culture, advanced research aur career.',
      outcomes: ['Biases pehchaan kar better decisions', 'Well-being ki science', 'Psychology ko real career aur research me use karna'],
      teacher: 'Expert zone me swagat. Ab tak jo seekha, use biases, well-being, kaam, culture aur research par lagayenge. Yahan se psychology sirf ek subject nahi, sochne ka tareeka ban jaati hai.' },
    { n: 8, name: 'Chaal aur Dhaal', title: 'Dark Psychology & Manipulation', short: 'Dark Psychology', rank: 'Mind Guardian', icon: 'shield',
      desc: 'Manipulation, scams, dark personality traits, cults aur dark patterns ko pehchaanna, aur khud ko aur apno ko bachana.',
      outcomes: ['Gaslighting, guilt-trip, love bombing jaisi chaalon ki pehchaan', 'Digital arrest, OTP aur job scams ki psychology aur bachav', 'Na kehne, boundaries aur madad maangne ki practical skills'],
      teacher: 'Ye level thoda alag hai. Yahan manipulation ki chaalein khol kar rakhi gayi hain, taaki tum unhe door se pehchaan lo, chahe wo kisi scammer ki call ho ya kisi apne ka emotional blackmail. Ek baat yaad rakhna: ye gyaan dhaal hai, hathiyaar nahi.' }
  ];

  PSY.badges = [
    { id: 'first-read', name: 'Pehla Kadam', desc: 'Pehla chapter padha', icon: 'flag', test: (S) => Object.values(S.ch).some((c) => c.read) },
    { id: 'first-done', name: 'Quiz Passed', desc: 'Pehla chapter complete kiya', icon: 'check', test: (S) => Object.values(S.ch).some((c) => c.done) },
    { id: 'perfect', name: 'Perfect Score', desc: 'Kisi quiz me 100%', icon: 'star', test: (S) => Object.values(S.ch).some((c) => c.best === 1) },
    { id: 'five', name: 'Momentum', desc: '5 chapters complete', icon: 'bolt', test: (S) => Object.values(S.ch).filter((c) => c.done).length >= 5 },
    { id: 'twenty', name: 'Deep Diver', desc: '20 chapters complete', icon: 'target', test: (S) => Object.values(S.ch).filter((c) => c.done).length >= 20 },
    { id: 'all', name: 'A to Z', desc: 'Saare chapters complete', icon: 'trophy', test: (S) => PSY.chapters.length > 0 && PSY.chapters.every((c) => S.ch[c.id] && S.ch[c.id].done) },
    { id: 'lab3', name: 'Lab Rat', desc: '3 alag labs try kiye', icon: 'lab', test: (S) => Object.keys(S.labs).length >= 3 },
    { id: 'laball', name: 'Experimenter', desc: 'Saare labs try kiye', icon: 'sparkles', test: (S) => Object.keys(PSY.labs).length > 0 && Object.keys(PSY.labs).every((k) => S.labs[k]) },
    { id: 'streak3', name: 'Teen Din', desc: '3 din ki streak', icon: 'flame', test: (S) => (S.streak.best || 0) >= 3 },
    { id: 'streak7', name: 'Hafta Pakka', desc: '7 din ki streak', icon: 'flame', test: (S) => (S.streak.best || 0) >= 7 },
    { id: 'cards50', name: 'Word Collector', desc: '50 flashcards review', icon: 'cards', test: (S) => (S.reviews || 0) >= 50 },
    { id: 'xp1000', name: '1K Club', desc: '1000 XP kamaye', icon: 'award', test: (S) => S.xp >= 1000 },
    { id: 'lvl1', name: 'Foundation Pakki', desc: 'Level 1 exam pass', icon: 'leaf', test: (S) => S.exams[1] && S.exams[1].passed },
    { id: 'halfway', name: 'Aadha Safar', desc: 'Level 4 exam pass', icon: 'heart', test: (S) => S.exams[4] && S.exams[4].passed },
    { id: 'master', name: 'Psychology Master', desc: 'Level 7 exam pass', icon: 'trophy', test: (S) => S.exams[7] && S.exams[7].passed },
    { id: 'guardian', name: 'Mind Guardian', desc: 'Saare levels achieve, Dark Psychology bhi', icon: 'shield', test: (S) => PSY.levels.every((lv) => S.exams[lv.n] && S.exams[lv.n].passed) }
  ];

  PSY.facts = [
    'Tumhara brain body weight ka sirf ~2% hai, par body ki ~20% energy use karta hai.',
    'Har baar jab koi memory yaad ki jaati hai, wo thodi "rewrite" bhi ho jaati hai. Isliye memories samay ke saath badal jaati hain.',
    'Hum har din lagbhag 2 ghante REM sleep me sapne dekhte hain, chahe subah yaad rahe ya na rahe.',
    '"10% brain use" ek myth hai. Brain scans dikhate hain ki din bhar lagbhag saare hisse active hote hain.',
    'Spacing effect: 3 din me 1-1 ghanta padhna, ek din me 3 ghante ratne se zyada yaad rehta hai.',
    'Bystander effect: jitne zyada log dekh rahe hon, utna kam chance ki koi ek madad karega.',
    'Smile karne se mood thoda sa better ho sakta hai, par effect chhota hai (facial feedback hypothesis).',
    'Ek naya habit banne me average ~66 din lagte hain (Lally et al., 2010), 21 din nahi.',
    'Working memory me ek baar me lagbhag 4 "chunks" hi aate hain, isliye phone number tod kar yaad karte hain.',
    'Placebo effect itna strong hai ki kabhi-kabhi "fake" goli bata kar dene par bhi kuch logon ko fayda hota hai.',
    'Teenagers ka prefrontal cortex (planning aur self-control) mid-20s tak develop hota rehta hai.',
    'Loss aversion: 500 rupaye khone ka dukh, 500 rupaye milne ki khushi se lagbhag double mehsoos hota hai.',
    'Mere exposure effect: jis cheez ko baar-baar dekhte ho, wo dheere-dheere achhi lagne lagti hai. Isliye ads repeat hote hain.',
    'Babies duniya ki saari languages ki sounds pehchaan sakte hain, par ~10-12 mahine tak apni language par focus ho jaate hain.',
    'Exercise depression ke halke-medium cases me kaafi effective hai, kai studies me therapy jitna asar dikhata hai.',
    'Hum apne decisions ko baad me "reason" dete hain. Kai baar asli wajah humein khud nahi pata hoti.',
    'Phantom limb: limb kat jaane ke baad bhi wahan dard mehsoos ho sakta hai, kyunki brain ka body-map wahi rehta hai.',
    'Cocktail party effect: shor me bhi apna naam sunte hi dhyan turant us taraf chala jaata hai.',
    'Sirf ek raat ki kam neend attention aur mood dono ko measurable tarike se kharab kar deti hai.',
    'Zeigarnik effect: adhoore kaam, poore kaam se zyada yaad rehte hain. Isliye cliffhangers kaam karte hain.'
  ];
})();
