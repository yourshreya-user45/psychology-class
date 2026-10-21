/* Level metadata, badges and daily facts. */
(function () {
  const PSY = window.PSY;

  PSY.levels = [
    { n: 1, name: 'Neev', title: 'Foundations', short: 'Foundations', rank: 'Curious Mind', icon: 'leaf',
      desc: 'Psychology kya hai, kahan se aayi, aur scientist log mind ko kaise study karte hain.',
      outcomes: ['Psychology ko myths se alag pehchaan paoge', 'Research methods aur basic statistics samjhoge', 'Ethics aur critical thinking ki aadat banegi'] },
    { n: 2, name: 'Dimaag ki Machine', title: 'Brain & Biology', short: 'Brain & Biology', rank: 'Brain Explorer', icon: 'brain',
      desc: 'Neurons, brain ke hisse, hormones, genes, senses, aur sleep ka science.',
      outcomes: ['Neuron se behaviour tak ka connection', 'Brain map aur nervous system', 'Perception, illusions aur sleep cycle'] },
    { n: 3, name: 'Sochne ki Kala', title: 'Learning, Memory & Cognition', short: 'Cognition', rank: 'Mind Hacker', icon: 'bulb',
      desc: 'Hum seekhte kaise hain, yaad kaise rakhte hain, aur sochte-decide kaise karte hain.',
      outcomes: ['Conditioning se habits samjhoge', 'Memory improve karne ki science-backed techniques', 'Thinking, language aur intelligence'] },
    { n: 4, name: 'Dil aur Safar', title: 'Motivation, Emotion, Development & Personality', short: 'Emotion & Growth', rank: 'Heart Reader', icon: 'heart',
      desc: 'Hum kyun karte hain jo karte hain, emotions kaise bante hain, aur insaan bachpan se budhape tak kaise badalta hai.',
      outcomes: ['Motivation aur emotion ki theories', 'Stress ko samajhna aur handle karna', 'Development stages aur personality theories'] },
    { n: 5, name: 'Samaaj aur Hum', title: 'Social Psychology', short: 'Social', rank: 'People Decoder', icon: 'users',
      desc: 'Doosre log hamari soch, faisle aur behaviour ko kaise badal dete hain.',
      outcomes: ['Attribution, attitudes aur persuasion', 'Conformity, obedience aur group behaviour', 'Prejudice, relationships, helping aur aggression'] },
    { n: 6, name: 'Mann ki Sehat', title: 'Mental Health & Therapy', short: 'Mental Health', rank: 'Mind Healer', icon: 'leaf',
      desc: 'Psychological disorders ko bina stigma ke samajhna aur therapy kaise kaam karti hai.',
      outcomes: ['Anxiety, mood, psychotic aur neurodevelopmental disorders', 'CBT, DBT, ACT aur medication ka basic samajh', 'Help kab aur kaise maangni hai'] },
    { n: 7, name: 'Expert Zone', title: 'Advanced & Applied Psychology', short: 'Advanced & Applied', rank: 'Psychology Master', icon: 'rocket',
      desc: 'Cognitive biases, positive psychology, applied fields, culture, advanced research aur career.',
      outcomes: ['Biases pehchaan kar better decisions', 'Well-being ki science', 'Psychology ko real career aur research me use karna'] }
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
    { id: 'master', name: 'Psychology Master', desc: 'Saare 7 levels achieve', icon: 'trophy', test: (S) => [1, 2, 3, 4, 5, 6, 7].every((n) => S.exams[n] && S.exams[n].passed) }
  ];

  PSY.facts = [
    'Aapka brain body weight ka sirf ~2% hai, par body ki ~20% energy use karta hai.',
    'Jab aap kisi memory ko yaad karte ho, aap use thoda "rewrite" bhi karte ho. Isliye memories samay ke saath badal jaati hain.',
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
