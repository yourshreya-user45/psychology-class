/* Level 6 · Mann ki Sehat · Mental Health (part 1) */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 6.1 */
  C({
    id: 'understanding-disorders', level: 6, mins: 18, visual: 'diathesis',
    visualCap: 'Stress bucket model: har kisi ki "balti" (vulnerability) alag size ki hai. Stress bharta hai, coping ka nal use khaali karta hai. Balti chhalke to symptoms. Sliders khiskao.',
    title: 'Psychological disorders ko samajhna',
    tag: '"Normal" kya hai, DSM-5-TR aur ICD-11, biopsychosocial model, India ka mental health survey, stigma aur Mental Healthcare Act 2017',
    intro: 'Level 6 me tumhara swagat hai. Ab tak humne dekha ki mann aur dimaag kaise kaam karte hain; ab baat karenge ki jab mann thak jaata hai ya ladkhada jaata hai, tab kya hota hai. Ek baat shuru me hi: ye level kisi ko label karne ke liye nahi, samajhne aur himmat dene ke liye hai. Padhte waqt kuch apna sa lage to ghabrana mat; khud ko diagnose karne ke bajay bas dhyan se padho, aur kisi se baat karne ka mann ho to wo hamesha theek hai.',
    hook: 'Har insaan kabhi udaas hota hai, kabhi ghabrata hai, kabhi ajeeb vichaar aate hain. To <b>"normal"</b> aur <b>"disorder"</b> ke beech line kahan hai? Aur kyun India me 10 me se 1 se zyada logon ko kisi mental health problem ke bawajood zyada tar ko kabhi ilaaj nahi milta?',
    blocks: [
      ['h', 'Disorder kab kehte hain?'],
      ['p', 'Koi ek test nahi jo bataye "ye disorder hai". Psychologists kai cheezein ek saath dekhte hain, jinhe aksar <b>"4 D"</b> kehte hain:'],
      ['table', ['D', 'Matlab', 'Example aur seema'], [
        ['Deviance', 'Behaviour ya soch samaaj ke norms ya statistics se bahut alag', 'Par sirf alag hona disorder nahi: genius bhi rare hai, aur norms culture ke saath badalte hain'],
        ['Distress', 'Vyakti ko khud takleef', 'Lagataar udaasi ya darr. (Par kuch disorders me vyakti ko takleef mehsoos nahi hoti, jaise mania ke dauraan)'],
        ['Dysfunction', 'Rozmarra ki zindagi me rukawat: padhai, kaam, rishte, khud ki dekhbhaal', 'Ghar se nikal na paana, hafton office na ja paana'],
        ['Danger', 'Khud ko ya doosron ko khatra', 'Self-harm, khatarnak laaparwahi. (Zyada tar disorders me khatra nahi hota)']
      ]],
      ['p', 'DSM-5-TR ki definition ka saar: <b>soch, emotion ya behaviour me clinically significant gadbad</b>, jo andar ki psychological, biological ya developmental process me dysfunction ko dikhaye, aur aam taur par <b>significant distress ya disability</b> se judi ho. Kisi apne ki maut par shok, ya kisi culture me accepted dharmik anubhav, apne aap disorder nahi hain.'],
      ['teacher', 'Ruko, yahan ek common galti hoti hai: koi ek D dekh kar "disorder" keh dena. Exam se pehle ki ghabrahat distress hai, par dysfunction nahi. Charon ko milakar, culture ke context me dekho, tabhi tasveer poori banti hai.'],

      ['h', 'Itihaas: zanjeeron se ilaaj tak'],
      ['list', [
        'Prachin samay me mental illness ko aksar bhoot-pret ya devi-devtaon ka prakop maana gaya. Kuch purani khopdiyon me ched (<b>trephination</b>) mile hain, shayad "buri aatma" nikaalne ke liye.',
        'Ayurveda ke granthon me <b>unmada</b> (pagalpan) ka varnan hai, jisme shareerik aur mansik kaaran dono maane gaye.',
        '1793 me France me <b>Philippe Pinel</b> ne asylum ke mareezon ki zanjeerein khulwayi aur "moral treatment" (insaaniyat bhara vyavhaar) shuru kiya.',
        '20th century me dawaiyan aayi, bade asylums band hue (deinstitutionalization), aur community care badhi.',
        'India me 2001 ke <b>Erwadi haadse</b> (Tamil Nadu) me ek dargah ke paas zanjeeron se bandhe 28 mental illness wale log aag me jal kar mar gaye. Is tragedy ke baad mareezon ko zanjeer se baandhne ke khilaf kadi karrvaai aur sudhaar ki maang tez hui.'
      ]],

      ['h', 'Classification: DSM aur ICD'],
      ['compare', ['DSM-5-TR (2022)', 'American Psychiatric Association ka <b>Diagnostic and Statistical Manual</b>. Har disorder ke liye specific criteria (kitne symptoms, kitne samay se). Research aur bahut se countries me use.'], ['ICD-11 (2022 se lagu)', 'WHO ki <b>International Classification of Diseases</b>, jisme saari beemariyan hain, mental disorders bhi. India sahit zyada tar desh official records me ICD use karte hain.']],
      ['p', '<b>Fayde</b>: professionals ek bhasha bolte hain, sahi ilaaj chunne aur research me madad, insurance aur disability benefits. <b>Khatre</b>: label stigma ban sakta hai ("wo to schizophrenic hai"), aur kabhi aam takleefon ko "beemari" bana diya jaata hai. Achhi practice: <b>vyakti pehle, disorder baad me</b>: "schizophrenia wala vyakti", "schizophrenic" nahi.'],
      ['case', 'Rosenhan ki "pagalkhane me sane log" study (1973)', 'David Rosenhan ne likha ki 8 swasth log hospitals me gaye aur bas kaha ki unhe ek awaaz "thud" kehti sunai deti hai. Sabko admit kar liya gaya aur zyada tar ko schizophrenia diagnose hua; admit hone ke baad normal behave karne par bhi hafton tak rakhe gaye. Is study ne diagnosis aur labels ki taakat par bada sawaal uthaya. Par 2019 me journalist Susannah Cahalan ki jaanch me study ke data aur participants par gambhir sawaal uthe; kuch hisse shayad badha-chadha kar ya gadhe gaye the. Ye ek reminder hai ki famous studies ko bhi critically padhna chahiye.'],
      ['teacher', 'Is case se ek bada sabak lo: famous hona aur sahi hona alag baatein hain. Course me aage bhi jab koi chaunkane wali study dikhe, khud se poochho: data kitna mazboot hai?'],

      ['h', 'Kaaran: ek nahi, kai'],
      ['p', 'Aaj ka mukhya nazariya <b>biopsychosocial model</b> hai: <b>biology</b> (genes, brain chemistry, hormones, beemari), <b>psychology</b> (soch ke patterns, coping, trauma, personality) aur <b>social</b> (garibi, bhedbhaav, rishte, culture, support) milkar disorder ka risk banate hain.'],
      ['p', '<b>Diathesis-stress (vulnerability-stress) model</b>: har insaan ke paas kuch had tak vulnerability (diathesis) hai: genes, bachpan ke anubhav, personality. Jab stress us vyakti ki seema se zyada ho jaata hai, symptoms aate hain. Zyada vulnerability wale ko kam stress me bhi problem ho sakti hai, aur bahut zyada stress me koi bhi tootne lagta hai. Upar ka "stress bucket" animation yahi dikhata hai, aur ye bhi ki <b>coping aur support</b> balti ko khaali karne ka nal hain.'],
      ['teacher', 'Ek pal apni balti ke baare me socho: kaunsi cheezein tumhara stress bharti hain, aur kaunsi use khaali karti hain (dost, neend, khel, music)? Ye balti har kisi ki hoti hai, isliye kisi ki takleef ko "kamzori" kehna galat hai.'],

      ['h', 'Kitna common hai?'],
      ['list', [
        'WHO ke hisaab se 2019 me duniya me lagbhag <b>har 8 me se 1</b> vyakti (~97 crore) kisi mental disorder ke saath jee raha tha; anxiety aur depression sabse common.',
        'India ke <b>National Mental Health Survey (2015-16, NIMHANS)</b> me adults me lagbhag <b>10.6%</b> ko us samay koi mental disorder tha aur ~13.7% ko zindagi me kabhi. Alag-alag disorders ke liye <b>treatment gap 70% se 92%</b> tak tha: yaani zyada tar logon ko koi ilaaj nahi mila.',
        'Lagbhag aadhe mental disorders <b>14 saal ki umar</b> tak shuru ho jaate hain, aur teen-chauthai mid-20s tak. Isliye school aur college me mental health ki jaankari itni zaroori hai.'
      ]],

      ['h', 'Stigma: sabse badi rukawat'],
      ['p', '<b>Public stigma</b> ("pagal hai", "drama kar raha hai", "shaadi me problem hogi") aur <b>self-stigma</b> (khud ko kamzor ya bekaar maanna) logon ko madad lene se rokte hain. Media me mental illness wale log aksar khatarnak ya mazaakiya dikhaye jaate hain. 2015 me actor <b>Deepika Padukone</b> ne apne depression ke baare me khul kar baat ki aur The Live Love Laugh Foundation shuru ki, jisse India me ye baatcheet kaafi khuli.'],
      ['myth', 'Mental illness kamzori ya willpower ki kami hai; mazboot log depressed nahi hote.', 'Mental disorders biology, life events aur environment ke mel se hote hain, jaise diabetes ya asthma. Sachin Tendulkar ne bhi apne career ke dauraan lambe samay tak anxiety jhelne ki baat ki hai. Madad maangna kamzori nahi, samajhdaari hai.'],
      ['myth', 'Mental illness wale log khatarnak aur violent hote hain.', 'Zyada tar mental illness wale log violent nahi hote, aur wo violence ke <b>shikaar</b> hone ka risk aam logon se zyada rakhte hain. Violence ka risk sabse zyada nashe aur kuch khaas situations se juda hai, diagnosis se nahi.'],

      ['h', 'Kanoon: Mental Healthcare Act, 2017'],
      ['list', [
        'Har vyakti ko sarkari funded services se <b>mental health care paane ka adhikaar</b>; beghar aur BPL logon ke liye muft ilaaj.',
        '<b>Suicide attempt ko effectively decriminalize</b> kiya: Section 115 ke hisaab se attempt karne wale ko gambhir stress me maana jaayega aur saza ke bajay care di jaayegi.',
        '<b>Advance directive</b>: vyakti pehle se likh sakta hai ki beemari ke dauraan uska ilaaj kaise ho, aur ek <b>nominated representative</b> chun sakta hai.',
        'Zanjeer se baandhna mana; bina anaesthesia ke ECT par rok; dignity, privacy aur confidentiality ke adhikaar.'
      ]],
      ['terms', [
        ['Psychological disorder', 'Soch, emotion ya behaviour me clinically significant gadbad jo distress ya dysfunction se judi ho.'],
        ['4 Ds', 'Deviance, distress, dysfunction, danger: disorder pehchaanne ke criteria.'],
        ['DSM-5-TR', 'American Psychiatric Association ka mental disorders ka diagnostic manual (2022).'],
        ['ICD-11', 'WHO ka saari beemariyon ka classification system, mental disorders sahit.'],
        ['Biopsychosocial model', 'Disorder ko biology, psychology aur social factors ke mel se samajhna.'],
        ['Diathesis-stress model', 'Vulnerability aur stress milkar disorder paida karte hain, ye model.'],
        ['Comorbidity', 'Ek vyakti me ek se zyada disorders ka saath hona.'],
        ['Prevalence', 'Population me kisi disorder wale logon ka anupaat.'],
        ['Treatment gap', 'Jinhe ilaaj ki zaroorat hai unme se kitno ko ilaaj nahi mila.'],
        ['Stigma', 'Mental illness ke prati negative attitudes jo bhedbhaav aur sharm paida karte hain.'],
        ['Self-stigma', 'Samaaj ke negative vichaaron ko khud par lagu kar lena.'],
        ['Mental Healthcare Act 2017', 'India ka kanoon jo mental health care ka adhikaar aur dignity sunishchit karta hai.'],
        ['Advance directive', 'Pehle se likha nirdesh ki beemari ke dauraan ilaaj kaise ho.']
      ]]
    ],
    outro: 'Aaj humne dekha ki disorder ek label nahi, kai factors ka mel hai, aur madad maangna samajhdaari hai. Quiz try karo aur dekho ki 4 D aur stress bucket kitne yaad rahe. Agle chapter me anxiety, OCD aur trauma ko kareeb se samjhenge: wo cheezein jo aksar "bas tension hai" keh kar taal di jaati hain.',
    takeaways: [
      'Disorder ka faisla deviance, distress, dysfunction aur danger ko milakar, culture ke context me hota hai.',
      'DSM-5-TR aur ICD-11 diagnosis ki common bhasha dete hain; vyakti pehle, label baad me.',
      'Biopsychosocial + diathesis-stress: vulnerability aur stress milkar symptoms laate hain; coping aur support raahat dete hain.',
      'India me ~10% adults ko mental disorder, par treatment gap 70-92%.',
      'Mental Healthcare Act 2017: care ka adhikaar, suicide attempt par saza nahi, dignity aur advance directives.'
    ],
    quiz: [
      ['"4 Ds" me kya shaamil nahi hai?', ['Deviance', 'Distress', 'Dysfunction', 'Diet'], 3, '4 Ds: deviance, distress, dysfunction, danger.'],
      ['India me official records ke liye aam taur par kaunsa classification use hota hai?', ['DSM', 'ICD', 'MBTI', 'MMPI'], 1, 'India aur zyada tar desh WHO ka ICD use karte hain.'],
      ['Diathesis-stress model kya kehta hai?', ['Sirf genes disorder paida karte hain', 'Vulnerability aur stress milkar disorder paida karte hain', 'Sirf stress zimmedar hai', 'Disorders random hote hain'], 1, 'Vulnerability (diathesis) + stress = symptoms.'],
      ['National Mental Health Survey (2015-16) me treatment gap kitna tha?', ['5-10%', '20-30%', '70-92%', '0%'], 2, 'Zyada tar logon ko koi ilaaj nahi mila.'],
      ['Mental Healthcare Act 2017 suicide attempt ke baare me kya kehta hai?', ['Ye apraadh hai aur saza milegi', 'Attempt karne wale ko gambhir stress me maana jaayega aur care di jaayegi', 'Iska koi zikr nahi', 'Sirf parivaar ki zimmedari'], 1, 'Section 115 effectively decriminalize karta hai aur care par zor deta hai.'],
      ['Mental illness aur violence ke baare me sahi baat?', ['Zyada tar mental illness wale violent hote hain', 'Wo aksar violence ke shikaar hone ka zyada risk rakhte hain', 'Sirf depression violence paida karta hai', 'Koi rishta nahi kabhi'], 1, 'Zyada tar violent nahi hote aur victimization ka risk zyada hota hai.']
    ],
    more: [
      ['National Mental Health Survey of India (NIMHANS)', 'https://indianmhs.nimhans.ac.in', 'link'],
      ['OpenStax Psychology 2e · Chapter 15: Psychological Disorders', OS(15), 'book'],
      ['The Live Love Laugh Foundation · mental health awareness (India)', 'https://www.thelivelovelaughfoundation.org', 'link']
    ]
  });

  /* 6.2 */
  C({
    id: 'anxiety-ocd-trauma', level: 6, mins: 19, visual: 'panicCycle',
    visualCap: 'Panic attack ka chakra: ek body sensation → khatarnak interpretation → aur darr → aur sensations. CBT isi chakra ko "interpretation" wale point par todti hai.',
    title: 'Anxiety, OCD aur trauma',
    tag: 'GAD, panic, phobias, social anxiety, OCD (jo "safai pasand" hona nahi hai), PTSD, kaaran aur kaam karne wale ilaaj',
    intro: 'Pichhle chapter me humne disorder ki line samjhi aur stress bucket dekhi. Aaj sabse common mental health problems ki baat: anxiety, panic, OCD aur trauma. Exam hall me dil ki dhadkan tez hona tumne bhi mehsoos kiya hoga; aaj samjhenge ki ye alarm kab madad karta hai aur kab khud problem ban jaata hai. Achhi khabar pehle hi sun lo: ye sabse zyada ilaaj-yogya problems me se hain.',
    hook: 'Exam ya interview se pehle ghabrahat <b>normal</b> hai, balki faidemand bhi. Par agar ghabrahat har din, har cheez par ho; ya achanak bina wajah lage ki dil band ho jaayega; ya ek hi vichaar baar-baar aaye aur haath dhote-dhote ghante beet jaayein, tab ye <b>anxiety disorder</b> ho sakta hai. Achhi baat: ye sabse zyada ilaaj-yogya mental disorders me se hain.',
    blocks: [
      ['h', 'Normal anxiety vs anxiety disorder'],
      ['p', 'Anxiety body ka alarm system hai (Chapter 2.2 aur 4.3). Disorder tab kehte hain jab alarm (1) situation ke hisaab se <b>bahut zyada</b> baje, (2) <b>lambe samay</b> tak bajta rahe, aur (3) zindagi me <b>rukawat</b> daale. Anxiety disorders duniya me sabse common mental disorders hain.'],
      ['table', ['Disorder', 'Mukhya pehchaan', 'Example', 'Effective ilaaj'], [
        ['Generalized anxiety disorder (GAD)', 'Kai cheezon ki zyada, mushkil se control hone wali chinta, zyada tar din, kam se kam 6 mahine; bechaini, thakaan, neend kharab, muscle tension', '"Agar beta late hua to accident? Agar naukri gayi? Agar BP badh gaya?" din bhar', 'CBT, applied relaxation, SSRIs/SNRIs'],
        ['Panic disorder', 'Baar-baar achanak panic attacks + aur attack ka darr ya avoidance (1 mahine+)', 'Metro me achanak dil tez, saans ruki, "main mar jaunga" ka ehsaas', 'CBT (interoceptive exposure), SSRIs'],
        ['Specific phobia', 'Kisi khaas cheez/situation ka tez, beparwah darr aur avoidance', 'Kutte, oonchai, injection, flight, chhipkali', 'Exposure therapy (bahut effective)'],
        ['Social anxiety disorder', 'Doosron ke judgement ka tez darr; social situations se bachna', 'Class me sawaal poochhne, phone call, khaana khate dikhne ka darr', 'CBT, exposure, SSRIs'],
        ['Agoraphobia', 'Aisi jagahon ka darr jahan se nikalna ya madad milna mushkil ho', 'Bheed, market, bus; kabhi ghar se nikalna hi band', 'CBT, exposure']
      ]],

      ['h', 'Panic attack: dil ka daura nahi'],
      ['p', 'Panic attack me kuch hi minute me darr chhoti par pahunchta hai: dil zor se dhadakna, pasina, kaanpna, saans na aane jaisa ehsaas, seene me dard, chakkar, haath-pair me jhunjhunahat, aur <b>"main mar jaunga" ya "pagal ho jaunga"</b> ka darr. Ye bahut darawna hota hai par aam taur par khud khatarnak nahi; zyada tar 10-20 minute me shaant ho jaata hai.'],
      ['ex', 'Emergency me "heart attack" jo panic tha', 'Rohit (26) ko office me achanak seene me dard aur saans ki takleef hui; wo emergency pahuncha. ECG aur tests normal aaye. Teen mahine me aisa chaar baar hua, aur ab wo lift aur metro se bachne laga. Ye <b>panic disorder</b> tha. Dhyan do: seene me dard ho to <b>pehle doctor se heart check zaroor karwao</b>. Heart theek nikle aur attacks dohraaye, to psychologist se baat karo: CBT me Rohit ne seekha ki tez dhadkan khatra nahi, aur dheere-dheere metro wapas shuru ki.'],
      ['tip', [
        '<b>5-4-3-2-1 grounding</b> (anxiety ya panic ke waqt): <b>5</b> cheezein jo dikh rahi hain, <b>4</b> jinhe chhoo sakte ho, <b>3</b> awaazein jo sun rahe ho, <b>2</b> khushbuein, <b>1</b> swaad. Ye dhyan ko "agar-magar" se hata kar abhi aur yahan laata hai.',
        'Saath me dheemi saans (lamba exhale). Aur khud se kaho: "Ye panic hai. Ye darawna hai par khatarnak nahi. Ye guzar jaayega."'
      ]],
      ['teacher', 'Ye grounding trick abhi ek baar try karo, jab tum shaant ho. Jo cheez aaraam ke waqt practice ki ho, wahi ghabrahat ke waqt yaad aati hai, bilkul fire drill ki tarah.'],

      ['h', 'OCD: "safai pasand" hona nahi'],
      ['p', '<b>Obsessive-compulsive disorder (OCD)</b> me do cheezein hoti hain:'],
      ['list', [
        '<b>Obsessions</b>: baar-baar aane wale, <b>anchahe</b>, darawne vichaar, images ya urges, jinhe vyakti khud bhi bekaar ya galat maanta hai. Jaise: germs aur gandagi, "kahin maine gas khula to nahi chhoda", kisi apne ko nuksaan pahunchane ka darawna vichaar, cheezein "bilkul sahi" na hone ki bechaini, ya dharmik/naitik shak.',
        '<b>Compulsions</b>: wo baar-baar ke kaam ya mann ke rituals jo obsession ki bechaini kam karne ke liye kiye jaate hain: haath dhona, lock 20 baar check karna, ginti, cheezein seedhi karna, mann me prayer dohraana.',
        'Ye <b>din me ek ghante se zyada</b> le sakte hain ya bahut takleef dete hain. Duniya me lagbhag 1-2% logon ko OCD hota hai.'
      ]],
      ['myth', '"Main thoda OCD hoon, mujhe apni desk saaf pasand hai."', 'Saaf-safai pasand karna ek preference hai aur tumhe khushi deta hai. OCD me vichaar <b>anchahe aur darawne</b> hote hain, aur rituals khushi ke liye nahi, bechaini se bachne ke liye majboori me kiye jaate hain. OCD wale log aksar khud jaante hain ki ye bekaar hai, par ruk nahi paate. Casual "OCD" bolna is gambhir takleef ko halka kar deta hai.'],
      ['teacher', 'Agli baar koi dost mazaak me "main to OCD hoon" kahe, to bas itna socho: saaf-safai use khushi deti hai ya majboori lagti hai? Preference aur disorder ka asli farak yahi hai.'],
      ['p', 'OCD ka sabse effective psychological ilaaj <b>Exposure and Response Prevention (ERP)</b> hai: dheere-dheere darr wali situation ka saamna (jaise darwaze ka handle chhoona) aur compulsion <b>na karna</b> (haath na dhona), jab tak bechaini apne aap kam na ho. Saath me SSRIs bhi madad karti hain.'],

      ['h', 'Trauma aur PTSD'],
      ['p', '<b>Post-traumatic stress disorder (PTSD)</b> kisi bahut darawni ghatna (maut ka khatra, gambhir chot, sexual violence) ko jhelne ya dekhne ke baad ho sakta hai. Symptoms 1 mahine se zyada rehte hain:'],
      ['list', [
        '<b>Intrusions</b>: flashbacks (ghatna dobara ho rahi ho aisa lagna), darawne sapne, yaad aate hi tez darr.',
        '<b>Avoidance</b>: us jagah, logon, baaton ya yaadon se bachna.',
        '<b>Negative changes</b>: khud ko dosh dena, duniya ko khatarnak maanna, emotional sunnapan, doori.',
        '<b>Hyperarousal</b>: hamesha chaukanna rehna, chhoti awaaz par uchhalna, neend aur dhyan ki problem, chidchidapan.'
      ]],
      ['p', 'Zaroori baat: trauma jhelne wale <b>zyada tar log PTSD develop nahi karte</b>; kuch hafton me dheere-dheere sambhal jaate hain (resilience). Risk badhta hai jab trauma bahut gambhir ya baar-baar ho, pehle se trauma ho, aur baad me support na mile. Sadak haadse, baadh (jaise Kerala 2018), domestic violence aur dange jaise anubhavon ke baad PTSD par India me bhi research hui hai. Trauma-focused CBT, prolonged exposure aur EMDR jaise ilaaj effective hain.'],

      ['h', 'Anxiety disorders kyun hote hain?'],
      ['list', [
        '<b>Biology</b>: genes (anxiety parivaar me chalti hai), amygdala ki zyada sensitivity, GABA aur serotonin systems.',
        '<b>Learning</b>: classical conditioning se darr seekha (Little Albert), aur <b>avoidance</b> darr ko zinda rakhta hai: bachne par turant rahat milti hai (negative reinforcement), isliye brain kabhi seekh hi nahi pata ki situation asal me safe thi. Ise Mowrer ki two-factor theory kehte hain.',
        '<b>Cognition</b>: catastrophizing ("sabse bura hi hoga"), khatre par zyada dhyan (attentional bias), aur anischitata ko bilkul bardasht na kar paana (intolerance of uncertainty).',
        '<b>Evolution</b>: saanp, oonchai, ajnabi jaise purane khatron ka darr jaldi seekhna (prepared learning).'
      ]],
      ['ex', 'Avoidance ka jaal', 'Ananya ko class me bolne se darr lagta hai. Wo presentation ke din "beemar" ho jaati hai; turant rahat. Agli baar darr aur bada, kyunki usne kabhi dekha hi nahi ki bolna sambhav tha. Har avoidance darr ko thoda aur mazboot karta hai. Ilaaj ulta raasta hai: chhote, sahne layak steps me saamna (pehle dost ke saamne 1 minute, phir chhote group ke saamne...).'],
      ['teacher', 'Ek line yaad rakho: "Jis cheez se bhaago, wo peechha karti hai." Har baar bachne se mili rahat darr ko agli baar ke liye aur mazboot karti hai. Chhote, sahne layak steps hi raasta hain.'],
      ['terms', [
        ['Anxiety disorder', 'Aisi anxiety jo zyada, lambi aur zindagi me rukawat daalne wali ho.'],
        ['Generalized anxiety disorder', 'Kai cheezon ki lagataar, mushkil se control hone wali chinta (6+ mahine).'],
        ['Panic attack', 'Achanak tez darr ka daura jo kuch minute me chhoti par pahunche.'],
        ['Panic disorder', 'Baar-baar unexpected panic attacks aur unke darr se jeevan prabhavit hona.'],
        ['Agoraphobia', 'Aisi jagahon ka darr jahan se nikalna ya madad paana mushkil ho.'],
        ['Specific phobia', 'Kisi khaas cheez ya situation ka tez aur beparwah darr.'],
        ['Social anxiety disorder', 'Doosron ke judgement ka tez darr aur social situations se bachna.'],
        ['Obsession', 'Baar-baar aane wala anchaha, takleefdeh vichaar ya image.'],
        ['Compulsion', 'Obsession ki bechaini kam karne ke liye majboori me kiya gaya ritual.'],
        ['OCD', 'Obsessions aur/ya compulsions jo samay lein aur takleef dein.'],
        ['ERP', 'Exposure and Response Prevention: darr ka saamna karte hue ritual na karna; OCD ka main ilaaj.'],
        ['PTSD', 'Trauma ke baad intrusions, avoidance, negative mood aur hyperarousal 1 mahine se zyada.'],
        ['Flashback', 'Traumatic ghatna ka itni vividly yaad aana ki wo abhi hoti lage.'],
        ['Avoidance', 'Darr wali cheezon se bachna, jo darr ko lambe samay me badhata hai.'],
        ['Two-factor theory', 'Darr classical conditioning se seekha aur avoidance (operant) se bana rehta hai (Mowrer).'],
        ['Grounding', 'Dhyan ko vartamaan ke senses par laakar anxiety kam karne ki technique.']
      ]]
    ],
    outro: 'Aaj ka saar: anxiety ek alarm hai, avoidance us alarm ko zinda rakhta hai, aur dheere-dheere saamna use shaant karta hai. Quiz karke dekho ki GAD, panic, OCD aur PTSD ka farak saaf hua ya nahi. Agle chapter me mood ki baat: udaasi aur depression me farak, aur bipolar disorder.',
    takeaways: [
      'Anxiety tab disorder hai jab zyada, lambi aur rukawat daalne wali ho; ye sabse common aur sabse treatable disorders me hain.',
      'Panic attack darawna par aam taur par khatarnak nahi; seene ke dard me pehle heart check zaroor.',
      'OCD = anchahe obsessions + majboori ke compulsions; "safai pasand" hona OCD nahi. ERP sabse effective.',
      'PTSD trauma ke baad ho sakta hai, par zyada tar log resilience dikhate hain.',
      'Avoidance darr ko zinda rakhta hai; exposure (dheere-dheere saamna) use todta hai.'
    ],
    quiz: [
      ['GAD ki mukhya pehchaan kya hai?', ['Ek khaas cheez ka darr', 'Kai cheezon ki lagataar, zyada chinta 6+ mahine', 'Sirf panic attacks', 'Trauma ke flashbacks'], 1, 'Generalized anxiety me chinta har taraf phaili hoti hai.'],
      ['OCD me compulsions kyun kiye jaate hain?', ['Khushi ke liye', 'Obsession ki bechaini kam karne ke liye', 'Doosron ko impress karne ke liye', 'Neend ke liye'], 1, 'Compulsions thodi der rahat dete hain, isliye cycle chalta rehta hai.'],
      ['OCD ka sabse effective psychological ilaaj?', ['Dream analysis', 'Exposure and Response Prevention', 'Sirf aaram', 'Hypnosis'], 1, 'ERP me darr ka saamna aur ritual rokna sikhaya jaata hai.'],
      ['Avoidance anxiety ko lambe samay me kyun badhata hai?', ['Isse neend aati hai', 'Turant rahat avoidance ko reinforce karti hai aur brain seekh nahi pata ki situation safe thi', 'Avoidance se dopamine kam hota hai', 'Ye galat hai, avoidance anxiety khatam karta hai'], 1, 'Negative reinforcement se avoidance badhta hai aur darr bana rehta hai.'],
      ['Trauma ke baad zyada tar logon me kya hota hai?', ['Sabko PTSD hota hai', 'Zyada tar log samay ke saath sambhal jaate hain (resilience)', 'Sab depression me chale jaate hain', 'Koi asar nahi hota'], 1, 'PTSD kuch logon ko hota hai; resilience sabse common hai.'],
      ['Panic attack ke dauraan kaunsa thought sabse common hai?', ['"Mujhe bhookh lagi hai"', '"Main mar jaunga ya control kho dunga"', '"Mujhe neend aa rahi hai"', '"Sab theek hai"'], 1, 'Catastrophic interpretation panic ka core hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · 15.4-15.6 Anxiety, OCD, PTSD', OS(15), 'book'],
      ['NIMH: Anxiety Disorders (detailed, reliable info)', 'https://www.nimh.nih.gov/health/topics/anxiety-disorders', 'link'],
      ['Crash Course Psychology: Anxiety and OCD', YT('Crash Course Psychology OCD and anxiety disorders'), 'video']
    ]
  });

  /* 6.3 */
  C({
    id: 'mood-disorders', level: 6, mins: 19, visual: 'moodChart',
    visualCap: 'Mood ke patterns: aam utaar-chadhav, depression ka lamba gehra dip, aur bipolar me depression ke saath mania ya hypomania. Har pattern par tap karo.',
    title: 'Depression aur bipolar disorder',
    tag: 'Udaasi vs depression, symptoms, bipolar I/II, Beck ka triad, rumination, ilaaj, aur suicide prevention ki zaroori baatein',
    intro: 'Pichhle chapter me darr aur chinta ki baat hui; aaj mood ki. Har kisi ke kuch din bure jaate hain, aur ye bilkul normal hai. Aaj samjhenge ki udaasi kab depression ban jaati hai, bipolar me kya hota hai, aur kisi apne ki madad kaise karein. Ye chapter thoda bhaari lag sakta hai, isliye aaram se padho; beech me break lena bhi bilkul theek hai.',
    hook: 'Udaasi aur depression me utna hi farak hai jitna <b>baarish aur baadh</b> me. Udaasi zindagi ka hissa hai aur guzar jaati hai. Depression ek beemari hai jo hafton-mahino tak soch, neend, bhookh, energy aur ummeed sab ko dubo deti hai. Duniya me lagbhag <b>28 crore</b> log depression ke saath jee rahe hain.',
    blocks: [
      ['h', 'Major depressive disorder'],
      ['p', 'Diagnosis ke liye kam se kam <b>2 hafte</b> tak, zyada tar din, neeche me se <b>5 ya zyada</b> symptoms, jinme kam se kam ek ya to <b>udaas mood</b> ho ya <b>interest/khushi ka khatam hona (anhedonia)</b>:'],
      ['list', [
        'Udaas, khaali ya chidchida mood (bachchon aur teens me chidchidapan zyada dikhta hai)',
        'Pehle pasand wali cheezon me interest khatam',
        'Neend bahut kam ya bahut zyada',
        'Bhookh aur weight me badlav',
        'Thakaan, energy ki kami',
        'Bekaar hone ya zyada guilt ka ehsaas',
        'Dhyan lagane aur faisle lene me mushkil',
        'Bahut dheema ho jaana ya bechaini',
        'Maut ya suicide ke baare me baar-baar vichaar'
      ]],
      ['p', 'Depression mahilaon me purushon se lagbhag <b>do guna</b> zyada diagnose hota hai (purush aksar kam batate hain aur nashe me chhupate hain). India jaise deshon me depression aksar <b>shareerik shikayaton</b> ke roop me bhi aata hai: "poore badan me dard", "kamzori", "ghabrahat", "neend nahi aati". Isliye kai log saalon tak sirf vitamin aur painkiller lete rehte hain.'],
      ['teacher', 'Socho, tumhare ghar ya mohalle me koi hai jo saalon se "kamzori" ya "badan dard" ki shikayat karta hai aur reports normal aati hain? Har baar ye depression nahi hota, par ye sawaal poochhna zaroori hai. Yahi samajh kisi ka ilaaj saalon pehle shuru karwa sakti hai.'],
      ['p', '<b>Persistent depressive disorder (dysthymia)</b>: kam gehra par lambe samay (adults me 2 saal ya zyada) tak rehne wala depressed mood. <b>Postpartum depression</b>: bachche ke janm ke baad (aksar pehle kuch hafton-mahino me), jo sirf "baby blues" se zyada gehra aur lamba hota hai; ise bhi ilaaj chahiye.'],

      ['h', 'Bipolar disorder: do dhruv'],
      ['table', ['Type', 'Kya hota hai'], [
        ['Bipolar I', 'Kam se kam ek <b>manic episode</b>: kam se kam 1 hafta asaamanya roop se ooncha, khush ya chidchida mood aur badhi energy. Saath me: neend ki zaroorat bahut kam, khud ko mahan samajhna, tez-tez bolna, vichaaron ki daud, dhyan bhatakna, aur risky kaam (paise udaana, laaparwah driving). Aksar depression episodes bhi hote hain.'],
        ['Bipolar II', 'Kam se kam ek <b>hypomanic episode</b> (mania jaisa par halka aur chhota, kam se kam 4 din, zindagi itni nahi bigadti) + kam se kam ek major depressive episode.'],
        ['Cyclothymia', 'Kam se kam 2 saal tak halke ups aur downs jo poore episode ki criteria tak nahi pahunchte.']
      ]],
      ['ex', '"Wo to bahut energetic hai" jo asal me mania tha', 'Karan (24) ne teen raat bina soye ek "duniya badalne wala" startup plan banaya, credit card se 4 lakh ki shopping ki, aur doston ko raat 3 baje call karke ghanton bolta raha. Parivaar ko pehle laga "bahut josh me hai". Phir wo itna chidchida hua ki office me jhagda ho gaya. Psychiatrist ne <b>bipolar I</b> diagnose kiya. Mood stabilizer aur regular neend ke saath wo dheere-dheere sambhla. Mania ko "achha mood" samajhna common galti hai.'],
      ['p', 'Bipolar disorder ki heritability bahut zyada hai (lagbhag 60-85%). Ise <b>mood stabilizers</b> (jaise lithium) aur psychoeducation se manage kiya jaata hai. Sirf antidepressant dena kai baar mania trigger kar sakta hai, isliye sahi diagnosis zaroori hai.'],

      ['h', 'Depression kyun hota hai?'],
      ['list', [
        '<b>Biology</b>: genes (heritability ~35-40%), stress hormones (HPA axis), inflammation par research, aur brain circuits me badlav. (Simple "serotonin kam" wala model purana ho chuka hai; Chapter 2.1.)',
        '<b>Beck ka cognitive triad</b>: apne baare me ("main bekaar hoon"), duniya ke baare me ("koi mujhe pasand nahi karta") aur bhavishya ke baare me ("kabhi kuch theek nahi hoga") negative soch.',
        '<b>Rumination</b>: ek hi dukh bhari baat ko baar-baar mann me ghumana. Susan Nolen-Hoeksema ki research ke hisaab se rumination depression ko lamba aur gehra karta hai.',
        '<b>Attribution style</b>: buri ghatnaon ko internal ("meri galti"), stable ("hamesha aisa hoga") aur global ("har cheez kharab hai") maanna; hopelessness.',
        '<b>Life events aur social factors</b>: kisi apne ko khona, naukri jaana, garibi, bhedbhaav, rishton me hinsa, akelapan.'
      ]],
      ['teacher', 'Beck ka triad yaad rakhne ki trick: "main, duniya, kal". Jab mann kahe "main bekaar", "sab kharab", "kuch nahi badlega", to samjho soch par ek kaala chashma chadh gaya hai. Chashma utaarna seekha ja sakta hai, aur yahi CBT karti hai.'],

      ['h', 'Ilaaj kaam karta hai'],
      ['list', [
        '<b>Psychotherapy</b>: CBT (soch ke patterns), Interpersonal Therapy (rishte aur life transitions), aur <b>Behavioural Activation</b> (chhote-chhote meaningful kaam dobara shuru karna).',
        '<b>Antidepressants</b> (jaise SSRIs): asar aane me aam taur par 2-6 hafte lagte hain. Apne aap achanak band nahi karni chahiye; doctor ke saath dheere kam ki jaati hain.',
        'Gambhir depression me <b>therapy + dawai</b> saath me aksar sabse achha. Exercise, neend aur social support madadgaar hain.',
        '<b>ECT</b> (modern, anaesthesia ke saath) gambhir ya dawaiyon se theek na hone wale depression me bahut effective ho sakti hai, filmon ki darawni tasveer se bilkul alag.'
      ]],
      ['ex', 'Behavioural activation: "mood ka intezaar mat karo"', 'Depression kehta hai "jab mann karega tab karunga", par mann tab karta hai jab kuch karte ho. Meera ne roz ek list banayi: 10 minute dhoop me walk, ek dost ko message, plant ko paani, 1 page padhna. Har kaam ke baad mood 0-10 me likha. Do hafte me usne dekha ki "karne" se mood thoda uthta hai, chahe shuru me mann na ho. Goa me Sangath ka <b>Healthy Activity Program</b>, jisme trained lay counsellors ne behavioural activation diya, ek bade trial me depression ke liye effective paaya gaya.'],

      ['h', 'Suicide prevention: jo har kisi ko pata hona chahiye'],
      ['p', 'NCRB ke hisaab se 2022 me India me <b>1,70,000 se zyada</b> logon ki suicide se maut hui, jinme bada hissa yuvaon ka tha. Har suicide ke peeche kai log hote hain jo baad me gehre dukh me rehte hain. Suicide <b>roka ja sakta hai</b>.'],
      ['list', [
        '<b>Warning signs</b>: marne ya "bojh hone" ki baat karna, hopelessness, doston-parivaar se katna, apni pyaari cheezein baant dena, achanak shaant ho jaana (depression ke baad), nasha badhna, alvida jaise messages.',
        '<b>Seedhe poochho</b>: "Kya tumhare mann me suicide ka khayal aa raha hai?" Research dikhati hai ki seedha aur parwah se poochhna vichaar <b>nahi</b> daalta, balki aksar rahat deta hai.',
        '<b>Suno, judge mat karo</b>, aur agar turant khatra ho to vyakti ko akela mat chhodo.',
        '<b>Khatarnak cheezon tak pahunch hatao</b> (dawaiyan, zehreele padarth) jahan sambhav ho.',
        '<b>Madad se jodo</b>: helpline, doctor, bharosemand bade.'
      ]],
      ['note', 'Agar tumhe khud aise vichaar aa rahe hain, to ye yaad rakho: is mushkil me tumhara saath dene wale log hain aur madad maujood hai. <b>Tele-MANAS: 14416</b> ya <b>1-800-891-4416</b> (24x7, free, kai bhashaon me). Turant khatre me <b>112</b> par call karo ya nazdeeki hospital emergency jao. Kisi bharosemand vyakti ko abhi batao.'],
      ['myth', 'Jo suicide ki baat karte hain wo sach me kuch nahi karte; ye bas attention ke liye hai.', 'Suicide se marne wale bahut se log pehle kisi na kisi tarah apni takleef zahir karte hain. Har aisi baat ko gambhirta se lena chahiye. "Attention" maangna bhi asal me <b>madad</b> maangna hai.'],
      ['teacher', 'Ye hissa padhna aasaan nahi tha, aur agar thoda bhaari laga ho to ye bilkul normal hai. Ek baat dil me rakh lo: madad maangna kamzori nahi, himmat hai, chahe wo tumhare liye ho ya kisi dost ke liye.'],
      ['terms', [
        ['Major depressive disorder', 'Kam se kam 2 hafte tak udaas mood ya anhedonia aur doosre symptoms.'],
        ['Anhedonia', 'Pehle khushi dene wali cheezon me khushi ya interest khatam hona.'],
        ['Persistent depressive disorder', 'Lamba (2+ saal) chalne wala halka-medium depressed mood.'],
        ['Postpartum depression', 'Bachche ke janm ke baad hone wala depression.'],
        ['Bipolar I disorder', 'Kam se kam ek manic episode wala mood disorder.'],
        ['Bipolar II disorder', 'Hypomania aur major depression ke episodes.'],
        ['Mania', 'Kam se kam 1 hafte tak asaamanya ooncha/chidchida mood aur badhi energy, gambhir impairment ke saath.'],
        ['Hypomania', 'Mania jaisa par halka aur chhota episode.'],
        ['Cyclothymia', '2+ saal tak halke mood ups aur downs.'],
        ['Cognitive triad', 'Khud, duniya aur bhavishya ke baare me negative soch (Beck).'],
        ['Rumination', 'Dukh bhari baaton ko baar-baar mann me ghumana.'],
        ['Behavioural activation', 'Chhote, meaningful kaam dobara shuru karke mood sudharna.'],
        ['Mood stabilizer', 'Bipolar disorder me mood ko santulit rakhne wali dawai (jaise lithium).'],
        ['ECT', 'Anaesthesia me di jaane wali electroconvulsive therapy; gambhir depression me effective.']
      ]]
    ],
    outro: 'Aaj humne dekha ki depression ek ilaaj-yogya beemari hai, aalas ya kamzori nahi, aur suicide roka ja sakta hai. Quiz se apni samajh check karo. Agle chapter me schizophrenia aur personality disorders ka sach dekhenge, filmon wali galatfahmiyon se door.',
    takeaways: [
      'Depression = kam se kam 2 hafte, 5+ symptoms (udaas mood ya anhedonia sahit); India me aksar shareerik shikayaton ke roop me.',
      'Bipolar I me mania, bipolar II me hypomania + depression; sahi diagnosis zaroori.',
      'Beck ka triad, rumination aur hopelessness depression ko chalate hain.',
      'Therapy (CBT, behavioural activation), dawaiyan aur unka mel effective hain.',
      'Suicide roka ja sakta hai: seedhe poochho, suno, akela mat chhodo, madad se jodo (Tele-MANAS 14416).'
    ],
    quiz: [
      ['Major depressive disorder ke liye symptoms kam se kam kitne samay tak hone chahiye?', ['2 din', '2 hafte', '2 mahine', '2 saal'], 1, 'DSM ke hisaab se kam se kam 2 hafte.'],
      ['Pehle pasand ki cheezon me khushi khatam hona kya kehlata hai?', ['Mania', 'Anhedonia', 'Rumination', 'Hypomania'], 1, 'Anhedonia depression ka core symptom hai.'],
      ['Bipolar I aur bipolar II me mukhya farak?', ['Bipolar I me mania, bipolar II me hypomania', 'Bipolar II zyada gambhir hai', 'Bipolar I sirf bachchon me', 'Koi farak nahi'], 0, 'Bipolar I me poora manic episode hota hai.'],
      ['Beck ka cognitive triad kin teen cheezon ke baare me negative soch hai?', ['Khana, neend, kaam', 'Khud, duniya, bhavishya', 'Parents, dost, teachers', 'Past, present, future'], 1, 'Self, world aur future ke baare me negative views.'],
      ['Suicide ke baare me seedhe poochhne par research kya kehti hai?', ['Isse idea aata hai', 'Isse idea nahi aata aur aksar rahat milti hai', 'Kabhi nahi poochhna chahiye', 'Sirf doctor poochh sakta hai'], 1, 'Parwah se seedha poochhna safe aur madadgaar hai.'],
      ['Antidepressants ka asar aam taur par kitne samay me dikhta hai?', ['Ek din me', '2-6 hafte me', 'Ek saal me', 'Turant'], 1, 'Asar aane me kuch hafte lagte hain; achanak band nahi karni chahiye.']
    ],
    more: [
      ['WHO: Depression fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/depression', 'link'],
      ['Feeling Good (David Burns) · CBT par research-tested self-help book', GR('Feeling Good David Burns'), 'book'],
      ['Tele-MANAS (24x7 free mental health helpline, India)', 'https://telemanas.mohfw.gov.in', 'link']
    ]
  });
})();
