/* Level 7 (part 2) · Culture, Advanced Research, Careers */
(function () {
  const C = window.PSY.chapter;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 7.4 */
  C({
    id: 'culture-psychology', level: 7, mins: 18, visual: 'fishTank',
    visualCap: 'Masuda aur Nisbett (2001) ka fish tank: analytic nazar beech ki badi machhli par jaati hai, holistic nazar poore scene aur rishton par. Toggle karke dono tarah se dekho.',
    title: 'Culture aur psychology',
    tag: 'WEIRD problem, individualism-collectivism, holistic vs analytic soch, tight-loose cultures, Indian psychology aur acculturation',
    intro: 'Pichhle chapter me psychology ko kaam aur khel me dekha. Aaj ek kadam peeche hat kar poochhenge: jo kuch humne poore course me padha, wo kitna "universal" hai? Tumhara self, tumhari soch, aur takleef kehne ka tareeka, sab culture se rang lete hain. Aaj ye rang pehchaanna seekhenge.',
    hook: 'Ek American student se poochho "tum kaun ho?" Jawab: "Main creative hoon, ambitious hoon, music pasand hai." Ek gaon ki Indian dadi se poochho. Jawab: "Main Sharma ji ki patni hoon, teen bachchon ki maa, is gaon ki bahu." <b>Dono sahi hain.</b> Culture tay karta hai ki "self" ka matlab kya hai, aur psychology ke kai "universal" niyam asal me kitne universal hain.',
    blocks: [
      ['h', 'WEIRD problem'],
      ['p', '2010 me Joseph Henrich, Steven Heine aur Ara Norenzayan ne ek mashhoor paper me dikhaya ki top psychology journals ke lagbhag <b>96%</b> participants un deshon se the jahan duniya ki sirf <b>~12%</b> aabadi rehti hai. Zyada tar American college students. Unhone in samples ko <b>WEIRD</b> kaha: Western, Educated, Industrialized, Rich, Democratic. Aur kai experiments me WEIRD log duniya ke baaki logon se <b>alag</b> nikle (jaise visual illusions, fairness games, self-concept). Matlab "insaan aise hote hain" kehne se pehle poochhna chahiye: <b>kaun se insaan?</b>'],

      ['h', 'Individualism aur collectivism'],
      ['compare', ['Individualism', 'Vyakti pehle: apne lakshya, uniqueness, independence. "Main" ki bhasha. Self ko personal traits se describe karna. Zyada US, Western Europe, Australia me.'], ['Collectivism', 'Group pehle: parivaar, samudaay, harmony, zimmedari. "Hum" ki bhasha. Self ko rishton aur roles se describe karna. Zyada East aur South Asia, Africa, Latin America me.']],
      ['p', 'Harry Triandis ne isme <b>vertical</b> (hierarchy maanna) aur <b>horizontal</b> (barabari) ka farak joda. India ke baare me Durganand Sinha aur R.C. Tripathi ne dikhaya ki yahan dono tendencies <b>saath-saath</b> rehti hain (Chapter 4.7): career me personal ambition aur shaadi-tyohaar me parivaar ki raay. Aur shehar-gaon, umar aur varg ke hisaab se bhi bahut farak hai. Culture ek <b>average tendency</b> hai, har vyakti ka label nahi.'],
      ['teacher', 'Khud par try karo: "main kaun hoon?" ke 5 jawab likho. Kitne traits hain (creative, shy) aur kitne rishte ya roles (beta/beti, dost, student)? Zyada tar Indians me dono ka mix milta hai, bilkul jaisa Sinha aur Tripathi ne kaha.'],

      ['h', 'Holistic vs analytic soch'],
      ['case', 'Fish tank (Masuda aur Nisbett, 2001)', 'Japanese aur American students ko underwater scenes ke animated clips dikhaye gaye: beech me badi, tez machhliyan aur aas-paas paudhe, pathar, chhote jeev. Baad me jo yaad tha bataane ko kaha gaya. Americans ne zyada tar <b>badi machhli</b> se shuru kiya ("ek badi machhli baayein taraf ja rahi thi"). Japanese participants ne aksar <b>context</b> se shuru kiya ("ek talaab jaisa tha") aur background ke baare me lagbhag <b>60% zyada</b> statements diye. Jab wahi machhli naye background me dikhayi gayi, Japanese use pehchaanne me zyada atke: unke liye machhli aur uska mahaul jude hue the.'],
      ['teacher', 'Ruko, isse ye nateeja mat nikaalna ki "Japanese aise hote hain, Americans waise". Ye average tendencies hain; har group ke andar bahut variety hai. Stereotype aur research finding me yahi farak hai.'],
      ['p', 'Richard Nisbett ki book <i>The Geography of Thought</i> ke hisaab se East Asian cultures zyada <b>holistic</b> (rishte, context, change, beech ka raasta) aur Western cultures zyada <b>analytic</b> (object, categories, rules, logic) soch ki taraf jhukte hain. Ye attribution ke farak se bhi juda hai (Chapter 5.1 me Joan Miller ki India-US study).'],

      ['h', 'Tight aur loose cultures'],
      ['p', 'Michele Gelfand aur saathiyon (2011) ne 33 deshon me naapa ki social norms kitne <b>sakht (tight)</b> hain aur unke todne par kitni sakhti hoti hai. India un deshon me tha jahan norms kaafi tight paaye gaye. Research ke hisaab se jin samaajon ne itihaas me zyada khatre jhele (aabadi ka ghanapan, akaal, beemariyan, yuddh), wahan coordination ke liye sakht norms zyada bane. Tight cultures me order aur self-control zyada, loose cultures me creativity aur badlaav ke liye khulaapan zyada hota hai. Dono ke apne fayde aur nuksaan hain.'],

      ['h', 'Culture, emotions aur mental health'],
      ['list', [
        '<b>Display rules</b> aur <b>ideal affect</b> (Chapter 4.2, 7.2) culture se badalte hain.',
        '<b>Idioms of distress</b>: India me log aksar takleef ko "tension", "ghabrahat", "dil baith raha hai" ya shareerik dard ke roop me batate hain. Achha clinician is bhasha ko samajhta hai.',
        '<b>Help-seeking</b>: kai parivaar pehle dharmik sthalon ya healers ke paas jaate hain. Gujarat ki Mira Datar dargah par <b>"Dava aur Dua"</b> project me psychiatrists aur dargah ke saath milkar kaam karke logon tak ilaaj pahunchaya gaya, aastha ka samman karte hue.',
        '<b>Parivaar</b>: Indian context me parivaar ko ilaaj me shaamil karna aksar zaroori aur faydemand hai (Chapter 6.4).'
      ]],

      ['h', 'Indian psychology aur indigenization'],
      ['p', 'Indian psychologists ne lambe samay se kaha ki Western theories ko bina soche lagu karna kaafi nahi; psychology ko <b>local context</b> me bhi jaanchna aur banana chahiye (<b>indigenization</b>). Kuch udaharan:'],
      ['list', [
        '<b>Durganand Sinha</b>: psychology ke indigenization aur Indian vikas ke muddon par kaam ke liye jaane jaate hain.',
        '<b>Jai B.P. Sinha</b>: <b>nurturant-task leader</b> model: Indian organizations me wo leader effective jo kaam par sakht bhi ho aur subordinates ka "abhibhavak" ki tarah khayal bhi rakhe.',
        '<b>Sudhir Kakar</b>: psychoanalysis ko Indian parivaar, bachpan aur mythology ke context me samjhaya (jaise <i>The Inner World</i>).',
        '<b>Anasakti</b> (non-attachment, Gita se prerit) ko Pande aur Naidu (1992) ne ek psychological construct ki tarah naapa aur stress ke saath uska rishta dekha.',
        'Yoga aur meditation par aaj duniya bhar me scientific research ho rahi hai: ye Indian parampara se aaye practices ka empirical study hai.'
      ]],
      ['note', 'Indigenous psychology ka matlab "pracheen granth me sab likha hai" nahi. Achhi indigenous psychology local concepts ko utni hi sakht scientific jaanch se guzaarti hai jitni kisi aur theory ko.'],

      ['h', 'Acculturation: do cultures ke beech'],
      ['p', 'John Berry ke model ke hisaab se jab koi naye culture me jaata hai (jaise Bihar se Mumbai, ya Delhi se Toronto), to do sawaal hote hain: apni culture kitni banaye rakhein? Nayi culture se kitna judein?'],
      ['table', ['Strategy', 'Apni culture rakhi?', 'Nayi culture se jude?', 'Example'], [
        ['Integration', 'Haan', 'Haan', 'Ghar me Tamil aur Pongal, office me naye dost aur local tyohaar bhi'],
        ['Assimilation', 'Nahi', 'Haan', 'Apni bhasha aur rivaaz chhod kar poori tarah naye culture jaisa ban jaana'],
        ['Separation', 'Haan', 'Nahi', 'Sirf apne community ke logon ke saath rehna'],
        ['Marginalization', 'Nahi', 'Nahi', 'Na purani se jude, na nayi se: aksar sabse zyada stress']
      ]],
      ['p', 'Research me <b>integration</b> aam taur par sabse achhe psychological adjustment se juda paaya gaya hai, par ye tabhi sambhav hai jab naya samaaj bhi swagat karne wala ho.'],
      ['teacher', 'Tumne ya tumhare kisi jaanne wale ne kabhi naye shehar ya hostel me shift kiya hai? Ghar ka khana aur nayi jagah ke dost, dono ko saath rakhna hi integration hai.'],

      ['h', 'Evolution aur culture saath-saath'],
      ['p', 'David Buss (1989) ki 37 cultures ki study me purushon ne partner me youth aur attractiveness ko, aur mahilaon ne resources aur ambition ko zyada weight diya; par <b>dono</b> ne <b>kindness aur intelligence</b> ko sabse upar rakha. Baad ki research (Alice Eagly aur Wendy Wood) ne dikhaya ki jin samaajon me gender barabari zyada hai, wahan ye farak kam ho jaate hain. Matlab evolution tendencies deta hai, aur culture unhe badhata ya ghatata hai.'],
      ['terms', [
        ['Cross-cultural psychology', 'Alag cultures me behaviour aur mental processes ki tulna.'],
        ['WEIRD', 'Western, Educated, Industrialized, Rich, Democratic samples jin par zyada research hui.'],
        ['Individualism', 'Vyakti ke lakshya aur independence ko pehle rakhne wala cultural orientation.'],
        ['Collectivism', 'Group ki harmony aur zimmedari ko pehle rakhne wala cultural orientation.'],
        ['Holistic thinking', 'Context, rishton aur badlaav par dhyan dene wali soch.'],
        ['Analytic thinking', 'Objects, categories aur niyamon par dhyan dene wali soch.'],
        ['Tight culture', 'Sakht social norms aur unke todne par kam sahansheelta wala culture.'],
        ['Loose culture', 'Lachile norms aur zyada sahansheelta wala culture.'],
        ['Idioms of distress', 'Kisi culture me takleef ko vyakt karne ke khaas tareeke.'],
        ['Indigenization', 'Psychology ko local cultural context me jaanchna aur viksit karna.'],
        ['Nurturant-task leader', 'Kaam par sakht aur saath hi parwah karne wala leader (J.B.P. Sinha).'],
        ['Anasakti', 'Non-attachment ka psychological construct (Pande & Naidu).'],
        ['Acculturation', 'Naye culture ke sampark me aane par psychological aur cultural badlaav.'],
        ['Integration', 'Apni culture rakhte hue nayi culture se judne ki strategy.']
      ]]
    ],
    outro: 'Aaj ka saar: zyada tar research WEIRD logon par hui hai, culture soch, self aur takleef ki bhasha ko shape karta hai, aur integration aam taur par sabse achha raasta hai. Quiz karo. Agle chapter me research ki gehraai me utrenge: psychometrics, replication crisis aur open science.',
    takeaways: [
      'Zyada tar research WEIRD samples par hui; "universal" daavon se pehle poochho: kaun se log?',
      'Individualism-collectivism average tendencies hain; India me dono saath dikhte hain.',
      'Holistic vs analytic soch (fish tank): culture ye bhi badalta hai ki hum kya notice karte hain.',
      'India relatively tight-norm culture hai; mental health ki bhasha aur help-seeking bhi culture se shape hote hain.',
      'Indigenous psychology aur acculturation (integration best) culture ko gambhirta se lene ke tareeke hain.'
    ],
    quiz: [
      ['WEIRD ka "W" kya hai?', ['Wealthy', 'Western', 'Wise', 'World'], 1, 'Western, Educated, Industrialized, Rich, Democratic.'],
      ['Fish tank study me Japanese participants ne kis cheez ke baare me zyada bataya?', ['Sirf badi machhli', 'Background aur context', 'Kuch yaad nahi tha', 'Machhli ke rang'], 1, 'Holistic soch context par zyada dhyan deti hai.'],
      ['Berry ke model me "apni culture rakhte hue nayi se judna" kaunsi strategy hai?', ['Assimilation', 'Separation', 'Integration', 'Marginalization'], 2, 'Integration aam taur par sabse achha adjustment deti hai.'],
      ['Nurturant-task leader model kisne diya?', ['Sudhir Kakar', 'Jai B.P. Sinha', 'Durganand Sinha', 'Girindrasekhar Bose'], 1, 'J.B.P. Sinha ka Indian organizations par model.'],
      ['Buss ki 37 cultures study me dono genders ne sabse upar kya rakha?', ['Paisa', 'Kindness aur intelligence', 'Height', 'Religion'], 1, 'Gender farak the, par kindness aur intelligence dono ke liye top par.'],
      ['"Tension" ya "ghabrahat" jaise shabd se takleef batana kya kehlata hai?', ['Idiom of distress', 'Acculturation', 'WEIRD', 'Analytic thinking'], 0, 'Culture-specific tareeke se distress vyakt karna.']
    ],
    more: [
      ['The Geography of Thought (Richard Nisbett)', GR('The Geography of Thought Nisbett'), 'book'],
      ['The WEIRDest People in the World (Joseph Henrich)', GR('The WEIRDest People in the World'), 'book'],
      ['Rule Makers, Rule Breakers (Michele Gelfand)', GR('Rule Makers Rule Breakers Gelfand'), 'book']
    ]
  });

  /* 7.5 */
  C({
    id: 'research-advanced', level: 7, mins: 20, visual: 'targets',
    visualCap: 'Reliability vs validity, dartboard ki tarah: reliable matlab baar-baar ek hi jagah, valid matlab sahi jagah (bullseye). Reliable hona zaroori hai, par kaafi nahi.',
    title: 'Advanced research, psychometrics aur replication crisis',
    tag: 'Reliability, validity, research designs, statistics ki jhalak, meta-analysis, replication crisis, open science aur research paper kaise padhein',
    intro: 'Pichhle chapter me humne poocha "kaun se log?"; aaj poochhenge "kitna pakka?". Is course me tumne bahut si studies padhi hain; aaj seekhenge ki unhe parkhein kaise: test reliable hai ya nahi, design kya keh sakta hai, aur kuch famous findings dohraane par kyun gayab ho gayi. Ye chapter tumhe ek samajhdaar reader banata hai, sirf believer nahi.',
    hook: '2015 me 270 scientists ki ek team ne psychology ki top journals ki <b>100 published studies</b> ko dobara kiya. Original studies me se 97% me significant result tha; dobara karne par sirf <b>~36%</b> me. Kya iska matlab psychology "fake" hai? Nahi. Ye science ka <b>khud ko pakadna aur sudharna</b> hai, aur isse psychology pehle se kahin zyada mazboot bani hai.',
    blocks: [
      ['h', 'Psychometrics: naapne ka science'],
      ['p', 'Psychology ki zyada tar cheezein (anxiety, intelligence, personality) seedhe dikhti nahi, isliye unhe <b>tests aur scales</b> se naapte hain. Ek achha test do sawaalon ka jawab deta hai:'],
      ['table', ['Reliability (consistency)', 'Kaise check karte hain'], [
        ['Test-retest', 'Same test kuch hafton baad dobara: kya scores similar aaye?'],
        ['Inter-rater', 'Do alag examiners ne same jawab ko similar score kiya?'],
        ['Internal consistency', 'Test ke alag items same cheez naap rahe hain? (Aam taur par <b>Cronbach\'s alpha</b>; ~0.70 se upar theek maana jaata hai)']
      ]],
      ['table', ['Validity (sahi cheez naapna)', 'Matlab'], [
        ['Face validity', 'Dekhne me lagta hai ki sahi cheez naap raha hai (sabse kamzor)'],
        ['Content validity', 'Concept ke saare zaroori hisse cover karta hai'],
        ['Criterion validity', 'Asli outcome se rishta: abhi ke (concurrent) ya bhavishya ke (predictive), jaise entrance test aur college performance'],
        ['Construct validity', 'Sach me wahi theoretical concept naap raha hai: milte-julte tests se correlate (convergent), alag cheezon se nahi (discriminant)']
      ]],
      ['ex', 'Tuti hui weighing machine', 'Ek machine roz tumhara weight 5 kilo zyada batati hai: <b>reliable</b> (har baar same) par <b>valid nahi</b> (galat). Ek doosri machine har baar alag number deti hai: na reliable, na valid. Isliye reliability <b>zaroori</b> hai par <b>kaafi nahi</b>. Upar ka dartboard yahi dikhata hai.'],
      ['teacher', 'Ek trick: reliability = "har baar same", validity = "sahi jagah". Dartboard par tight group bullseye se door ho, to reliable par invalid. Quiz me ye sawaal zaroor milega.'],

      ['h', 'Research designs ki gehrai'],
      ['list', [
        '<b>Between-subjects</b>: alag log alag conditions me. <b>Within-subjects</b>: same log saari conditions me (kam log chahiye, par order effects; isliye <b>counterbalancing</b>: aadhe log A phir B, aadhe B phir A).',
        '<b>Factorial design</b>: ek saath do ya zyada IVs (jaise music × neend). <b>Interaction</b> tab jab ek IV ka asar doosre IV par depend kare ("music sirf thake logon ko nuksaan karta hai").',
        '<b>Quasi-experiment</b>: random assignment sambhav nahi (gender, school ke policy changes), isliye cause ka daava kamzor.',
        '<b>Longitudinal / cohort</b>: same logon ko saalon follow karna.',
        '<b>Single-case design</b> (ABAB): ek vyakti me baseline (A), treatment (B), wapas baseline, phir treatment. Clinical practice me upyogi.',
        '<b>Qualitative methods</b>: in-depth interviews, focus groups, thematic analysis: "kitna" ke bajay "kaisa aur kyun". <b>Mixed methods</b> dono ko jodte hain.'
      ]],

      ['h', 'Statistics: agla kadam'],
      ['table', ['Sawaal', 'Common test'], [
        ['Do groups ke mean me farak?', 't-test'],
        ['Teen ya zyada groups / kai factors?', 'ANOVA'],
        ['Do continuous variables ka rishta?', 'Correlation (Pearson r)'],
        ['Kai variables se outcome predict karna?', 'Regression'],
        ['Categories ke frequencies me farak?', 'Chi-square']
      ]],
      ['list', [
        '<b>Type I error</b>: effect nahi tha par "significant" mil gaya (false positive). <b>Type II error</b>: effect tha par pakad nahi paaye (false negative).',
        '<b>Statistical power</b>: asli effect ko pakadne ka chance (aam taur par 80% ka target). Chhote samples ki power kam hoti hai, aur unme mile "significant" results zyada galat hone ka chance rakhte hain.',
        'Effect size aur confidence intervals report karna p-value se zyada informative hai (Chapter 1.4). Kai researchers ab <b>Bayesian statistics</b> bhi use karte hain jo evidence ki taakat ko seedhe naapta hai.'
      ]],
      ['teacher', 'Yahan sab confuse hote hain, isliye ek example: fire alarm bina aag ke baje = Type I (false alarm). Aag lagi par alarm chup = Type II (miss). Dono galtiyan hain, bas alag tarah ki.'],

      ['h', 'Meta-analysis aur publication bias'],
      ['p', '<b>Systematic review</b> ek sawaal par saari relevant studies ko tay tareeke se dhoondhta hai; <b>meta-analysis</b> unke results ko statistically milata hai (forest plot me har study ka effect aur overall average). Par ek problem hai: <b>publication bias</b> (file drawer problem). "Significant" results journals me zyada chhapte hain aur "koi effect nahi" wale draaz me pade rehte hain. Isse literature me effects asal se bade dikhte hain. Funnel plots jaise tools is bias ko pakadne ki koshish karte hain.'],

      ['h', 'Replication crisis'],
      ['vis', 'replication', 'Open Science Collaboration (2015): original studies vs replications me significant results aur average effect size.'],
      ['list', [
        '<b>Ego depletion</b> ("willpower ek battery hai jo khatam hoti hai"): 2016 ke 23-lab replication me effect lagbhag zero mila.',
        '<b>Power posing</b> (2 minute "superhero pose" se hormones badalna): hormonal effects replicate nahi hue; original authors me se ek ne khud kaha ki ab wo is effect par vishwas nahi karti.',
        'Kuch <b>priming</b> studies (jaise "budhape" se jude shabd padh kar log dheere chalne lage) bhi dohraane par nahi mile.',
        '<b>Fraud</b> rare hai par hua hai: Dutch social psychologist Diederik Stapel ne data gadha tha; unke dazanon papers retract hue.'
      ]],
      ['p', '<b>Kaaran kya the?</b> Chhote samples, <b>p-hacking</b> (analysis ko tab tak badalte rehna jab tak p &lt; .05 na aa jaaye), <b>HARKing</b> (Hypothesizing After Results are Known: result dekh kar hypothesis banana aur dikhana ki pehle se thi), flexible analysis ke kai raaste ("garden of forking paths"), publication bias, aur "naye, chaunkane wale" results ko inaam dene wala system.'],
      ['teacher', 'School ke kisi practical me result ko "jaisa hona chahiye" waisa dikhane ka mann kabhi hua tha? Wahi chhota sa khinchav jab poori field me hota hai, to replication crisis banti hai. Imaandaar process, chahe result boring ho, science ki asli taaqat hai.'],
      ['h', 'Open science: sudhaar'],
      ['list', [
        '<b>Preregistration</b>: data lene se pehle hypothesis aur analysis plan public platform (jaise OSF) par register karna.',
        '<b>Registered reports</b>: journal method dekh kar <b>pehle</b> hi publish karne ka vaada karta hai, result chahe jo aaye.',
        '<b>Open data aur materials</b>: doosre log check aur dohra sakein.',
        '<b>Bade samples aur multi-lab studies</b> (Many Labs, Psychological Science Accelerator) jinme duniya bhar ke labs, India sahit, shaamil hote hain.',
        'Replication ko "boring" nahi, zaroori kaam maanna.'
      ]],

      ['h', 'Research paper kaise padhein'],
      ['steps', [
        ['Abstract', 'Ek paragraph me poori kahani. Pehle yahi padho.'],
        ['Introduction', 'Sawaal kyun important hai, pichhli research kya kehti hai, aur hypothesis.'],
        ['Method', 'Kaun participants (kitne, kahan se: WEIRD?), design, measures, procedure. Sabse important critical hissa.'],
        ['Results', 'Statistics: effect sizes, CIs, p-values. Kya preregistered tha?'],
        ['Discussion', 'Authors ka interpretation, limitations aur aage ka kaam. Dhyan do kahin data se zyada daava to nahi.']
      ]],
      ['tip', [
        'Papers dhoondhne ke liye: <b>Google Scholar</b>, <b>PubMed</b>, <b>PsyArXiv</b> (free preprints), aur <b>Unpaywall</b> browser extension (legal free versions). Kai authors email karne par apna paper khushi se bhej dete hain.',
        'Apni pehli chhoti study: sawaal → literature → hypothesis → ethics permission → preregister → data (PsyToolkit jaise free tools) → analysis (JASP/jamovi) → APA style me likhna.'
      ]],
      ['terms', [
        ['Psychometrics', 'Psychological tests aur measurement ka science.'],
        ['Reliability', 'Measurement ki consistency.'],
        ['Test-retest reliability', 'Samay ke saath same test par similar scores.'],
        ['Inter-rater reliability', 'Alag scorers ke beech sahmati.'],
        ['Cronbach\'s alpha', 'Internal consistency ka common maap.'],
        ['Validity', 'Test wahi naapta hai jo naapne ka daava karta hai.'],
        ['Content validity', 'Concept ke saare hisse cover karna.'],
        ['Criterion validity', 'Asli outcomes se test ka rishta.'],
        ['Construct validity', 'Test sach me theoretical concept ko naap raha hai.'],
        ['Counterbalancing', 'Order effects ko control karne ke liye conditions ka kram badalna.'],
        ['Factorial design', 'Ek saath do ya zyada independent variables wala experiment.'],
        ['Interaction effect', 'Ek IV ka asar doosre IV ke level par depend karna.'],
        ['Quasi-experiment', 'Bina random assignment ka experiment-jaisa design.'],
        ['Type I error', 'False positive: effect na hote hue bhi significant result.'],
        ['Type II error', 'False negative: asli effect ko na pakad paana.'],
        ['Statistical power', 'Asli effect ko detect karne ki probability.'],
        ['Publication bias', 'Significant results ka zyada publish hona.'],
        ['Replication crisis', 'Kai famous findings ka dohraane par na milna.'],
        ['p-hacking', 'Analysis ko tab tak badalna jab tak significant result na aaye.'],
        ['HARKing', 'Result dekhne ke baad hypothesis banana aur use pehle ki dikhana.'],
        ['Preregistration', 'Study se pehle hypothesis aur analysis plan public register karna.'],
        ['Registered report', 'Results se pehle method ke aadhar par publication ka faisla.'],
        ['Open science', 'Data, materials aur methods ko khula rakhne ka movement.']
      ]]
    ],
    outro: 'Aaj ka saar: achha measure reliable aur valid dono hota hai, aur replication crisis ne psychology ko kamzor nahi, zyada imaandaar banaya. Quiz karo. Agle chapter me Level 7 ka aakhri sawaal: psychology me career kaise banayein, aur ye safar aage kaise chalta rahe.',
    takeaways: [
      'Reliability = consistency, validity = sahi cheez naapna; reliability zaroori par kaafi nahi.',
      'Design choices (within/between, factorial, quasi) tay karte hain ki kis tarah ka nateeja nikal sakta hai.',
      'Chhote samples, p-hacking, HARKing aur publication bias ne replication crisis paida ki.',
      'OSC 2015: ~97% → ~36% significant; effect sizes lagbhag aadhe.',
      'Preregistration, registered reports, open data aur bade multi-lab studies psychology ko mazboot bana rahe hain.'
    ],
    quiz: [
      ['Weighing machine jo har baar 5 kilo zyada batati hai: kaisi hai?', ['Reliable aur valid', 'Reliable par valid nahi', 'Valid par reliable nahi', 'Na reliable na valid'], 1, 'Har baar same (reliable) par galat (invalid).'],
      ['Entrance test ke score aur college ke marks ka rishta kaunsi validity hai?', ['Face', 'Content', 'Criterion (predictive)', 'Inter-rater'], 2, 'Bhavishya ke outcome se rishta predictive (criterion) validity hai.'],
      ['Analysis ko tab tak badalte rehna jab tak p < .05 na aaye, kya kehlata hai?', ['Preregistration', 'p-hacking', 'Meta-analysis', 'Counterbalancing'], 1, 'Ye replication crisis ke mukhya kaaranon me se ek hai.'],
      ['OSC (2015) me replications me lagbhag kitne % significant results mile?', ['97%', '~36%', '~80%', '0%'], 1, 'Original 97% vs replication ~36%.'],
      ['Type I error kya hai?', ['False negative', 'False positive', 'Sahi result', 'Sample chhota hona'], 1, 'Effect na hote hue significant result milna.'],
      ['Registered report me journal kab publish karne ka faisla karta hai?', ['Results dekh kar', 'Method aur plan dekh kar, results se pehle', 'Kabhi nahi', 'Sirf significant hone par'], 1, 'Isse publication bias kam hota hai.'],
      ['Within-subjects design me order effects kaise control karte hain?', ['Random sampling', 'Counterbalancing', 'Double-blind', 'Meta-analysis'], 1, 'Conditions ka kram alag-alag participants me badalna.']
    ],
    more: [
      ['Open Science Framework (OSF) · preregistration aur open data', 'https://osf.io', 'link'],
      ['PsyArXiv · free psychology preprints', 'https://psyarxiv.com', 'link'],
      ['Science Fictions (Stuart Ritchie) · replication crisis par padhne layak book', GR('Science Fictions Stuart Ritchie'), 'book']
    ]
  });

  /* 7.6 */
  C({
    id: 'psychology-careers', level: 7, mins: 15, visual: 'careerPath',
    visualCap: 'India me psychology ka career map: Class 12 se alag-alag raaste. Kisi bhi box par tap karke dekho kya karna padta hai.',
    title: 'Psychology me career (India)',
    tag: 'BA se licensed clinical psychologist tak, RCI, NET, aur HR, UX, sports, forensic, research jaise raaste; skills, internships aur aage kaise seekhte rahein',
    intro: 'Level 7 ka ye aakhri chapter hai, aur ab tak tumne psychology ka ek bada naksha dekh liya hai. Aaj baat tumhare aage ke raaste ki: padhai, license, alag-alag careers, aur wo skills jo sach me kaam aati hain. Psychology ko profession na bhi banana ho, to bhi ye chapter dikhayega ki ye samajh har field me kaise kaam aati hai.',
    hook: '"Psychology padh ke kya karoge? Pagalon ka ilaaj?" Ye sawaal har psychology student kabhi na kabhi sunta hai. Asal me insaani mann aur behaviour ki samajh <b>har jagah</b> chahiye: hospital, school, company, startup, adalat, khel ka maidan, aur policy banane wale offices. Ye course khatam karke aage kaise badhein, chalo dekhte hain.',
    blocks: [
      ['h', 'Padhai ka raasta'],
      ['steps', [
        ['Class 12', 'Koi bhi stream chal sakta hai; kai universities me psychology 12th me padhna zaroori nahi, par madad karta hai. Entrance ke liye CUET-UG ya university ke apne tests.'],
        ['BA / BSc Psychology', '3 saal (NEP 2020 ke baad kai jagah 4 saal ka honours/research option). Basics + research methods + statistics.'],
        ['MA / MSc', 'Specialization: Clinical, Counselling, Industrial-Organizational, Health, Forensic, Sports, Developmental, Applied, Neuropsychology, etc. Entrance: CUET-PG ya university tests.'],
        ['Professional ya research training', 'Licensed clinical/rehabilitation psychologist ke liye <b>RCI-approved</b> professional program (pehle M.Phil Clinical Psychology; NEP ke baad isme badlav ho rahe hain, isliye RCI website par latest check karo). Research aur teaching ke liye <b>PhD</b>; college lecturer ke liye <b>UGC-NET</b> (aur JRF se fellowship).']
      ]],
      ['note', 'India me "clinical psychologist" title aur psychological assessment/therapy ke kuch kaam ke liye <b>Rehabilitation Council of India (RCI)</b> me registration zaroori hai. Sirf online certificate ya short course se koi licensed therapist nahi ban jaata. Kisi se therapy lene se pehle bhi unka RCI registration ya qualification check karo.'],
      ['teacher', 'Ye note ek baar aur padh lo. Instagram par "certified therapist in 30 days" jaise ads bahut dikhte hain. Sahi training lambi hoti hai, kyunki kisi ke mann ki zimmedari chhoti cheez nahi.'],

      ['h', 'Career options'],
      ['table', ['Career', 'Kya karte hain', 'Typical qualification'], [
        ['Clinical psychologist', 'Mental disorders ka assessment aur therapy; hospitals, clinics, private practice', 'MA/MSc + RCI-approved clinical training + RCI registration'],
        ['Counselling psychologist / counsellor', 'Students, couples, career, stress; schools, colleges, NGOs, online platforms', 'MA Counselling/Applied Psychology (+ supervised practice)'],
        ['School psychologist', 'Learning disabilities, behaviour, exam stress, teacher training', 'MA + school/educational psychology training'],
        ['I/O psychologist, HR, OD', 'Hiring tests, training, employee well-being, leadership, culture', 'MA I/O Psychology ya HR (MBA HR bhi common raasta)'],
        ['UX researcher', 'Users ko interview, usability testing, product decisions me psychology', 'Psychology degree + research skills + UX portfolio'],
        ['Rehabilitation psychologist', 'Disability, chot ke baad recovery', 'RCI-approved rehabilitation psychology training'],
        ['Neuropsychologist', 'Brain injury, dementia, stroke ke baad cognitive assessment', 'Clinical training + neuropsychology specialization'],
        ['Forensic psychologist', 'Courts, prisons, police, victim support', 'MA Forensic Psychology/Criminology'],
        ['Sports psychologist', 'Athletes ka focus, pressure, recovery', 'MA Sports Psychology ya related'],
        ['Researcher / professor', 'Research, teaching, publications', 'PhD (+ NET for teaching)'],
        ['Public health / NGO / policy', 'Community mental health, behaviour change campaigns, behavioural insights', 'MA/MPH, field experience'],
        ['Data / behavioural science', 'Statistics, experiments, product aur policy decisions', 'Psychology + strong stats/programming (R, Python)']
      ]],
      ['teacher', 'Is table me ek row dhoondho jise padhte hi mann me "haan, ye!" aaya. Abhi faisla zaroori nahi; bas us row ko note kar lo, aur neeche wale 30 din ke plan me usi par ek kadam rakho.'],

      ['h', 'Skills jo tumhe alag banayengi'],
      ['list', [
        '<b>Research aur statistics</b>: JASP/jamovi se shuru, phir R ya Python. Ye har field me kaam aata hai.',
        '<b>Likhna</b>: saaf reports, case notes, research papers (APA style).',
        '<b>Counselling microskills</b>: active listening, empathy, reflection, open questions (training aur supervision ke saath).',
        '<b>Cultural competence</b>: alag bhasha, jaati, dharm, gender, sexuality, class ke logon ke saath sensitivity.',
        '<b>Ethics</b>: confidentiality, consent, apni training ki seema ke andar kaam karna.',
        '<b>Ek doosra domain</b>: data, design, HR, education, law ya sports. Psychology + X ka mel bahut powerful hai.',
        '<b>Bhashayein</b>: India me client ki bhasha me baat kar paana bahut bada plus hai.'
      ]],

      ['h', 'Experience kaise lein?'],
      ['list', [
        'Hospitals ke psychiatry/psychology departments, NGOs aur schools me <b>internships</b> (aksar summer me).',
        'Professors ke saath <b>research assistant</b> banna; chhote projects aur poster presentations.',
        'Trained hone ke baad helplines ya peer-support programs me <b>volunteering</b> (bina training ke crisis counselling mat karo).',
        '<b>Conferences</b> aur professional bodies: National Academy of Psychology (India), Indian Association of Clinical Psychologists, aur international bodies jaise APA ke student memberships.',
        'Online free courses (Coursera, SWAYAM/NPTEL, Yale Open Courses) aur is website ke resources se apne interest ki field gehrai se padho.'
      ]],

      ['h', 'Psychologist ki apni mental health'],
      ['p', 'Doosron ki takleef sunna emotionally bhaari hota hai. Achhe professionals <b>supervision</b> lete hain (senior ke saath cases discuss karna), apni <b>boundaries</b> rakhte hain, khud bhi therapy lete hain jab zaroorat ho, aur <b>burnout</b> ke signs (thakaan, cynicism, doori) ko pehchaante hain. "Healer ko bhi healing chahiye" koi kamzori nahi, professional zimmedari hai.'],
      ['teacher', 'Ye baat sirf psychologists ke liye nahi. Jo bhi doosron ka khayal rakhta hai, use apna khayal bhi rakhna padta hai: khaali cup se chai nahi daali ja sakti.'],

      ['h', 'Is course ke baad: agla kadam'],
      ['tip', [
        '<b>Agle 30 din ka plan</b>:',
        'Hafte 1: Glossary aur flashcards se saare levels revise karo; sabse kamzor 3 chapters dobara padho aur unke quiz 100% tak le jao.',
        'Hafte 2: Resources page se ek textbook (OpenStax ya NCERT Class 11-12) ke 3-4 chapters padho.',
        'Hafte 3: Apni pasand ki ek field chuno (clinical, I/O, UX, research...) aur us par ek book + ek video course shuru karo.',
        'Hafte 4: Ek chhota project: kisi topic par 1-page research summary, ya PsyToolkit par ek simple experiment, ya kisi professional se informational interview.'
      ]],
      ['quote', 'Insaan ke paas sab kuch chheena ja sakta hai, sivaay ek cheez ke: kisi bhi haalat me apna nazariya chunne ki aakhri azaadi.', 'Viktor Frankl, Man\'s Search for Meaning (psychiatrist aur Holocaust survivor)'],
      ['terms', [
        ['RCI', 'Rehabilitation Council of India: clinical aur rehabilitation professionals ko register aur regulate karta hai.'],
        ['UGC-NET', 'College/university lecturer aur JRF ke liye national eligibility test.'],
        ['JRF', 'Junior Research Fellowship: PhD research ke liye fellowship.'],
        ['Supervision', 'Senior professional ke saath apne cases aur practice ki niyamit charcha.'],
        ['Scope of practice', 'Apni training aur license ki seema ke andar kaam karna.'],
        ['Informational interview', 'Kisi professional se unke career ke baare me seekhne ke liye baatcheet.']
      ]]
    ],
    outro: 'Aaj ka saar: psychology ka raasta lamba hai par bahut khula hai, aur sahi training, ethics aur self-care har kadam par zaroori hain. Quiz karo, aur phir Level 7 ka exam do. Uske baad ek aakhri, khaas Level 8 tumhara intezaar kar raha hai: dark psychology aur manipulation, yaani unhe pehchaanna aur unse apna bachav karna.',
    takeaways: [
      'Raasta: BA/BSc → MA/MSc specialization → (RCI-approved professional training ya PhD/NET).',
      'Licensed clinical psychologist ke liye RCI registration zaroori; short online courses kaafi nahi.',
      'Psychology + koi doosra domain (data, design, HR, sports, law) bahut strong combination hai.',
      'Internships, research assistantship aur supervised practice se experience banta hai.',
      'Psychologists ko bhi supervision, boundaries aur self-care chahiye.'
    ],
    quiz: [
      ['India me licensed clinical psychologist banne ke liye kis sanstha me registration zaroori hai?', ['UGC', 'RCI', 'NCERT', 'AICTE'], 1, 'Rehabilitation Council of India.'],
      ['College lecturer banne ke liye common eligibility exam?', ['UPSC', 'UGC-NET', 'JEE', 'NEET'], 1, 'UGC-NET (aur JRF fellowship ke liye bhi).'],
      ['UX researcher ka kaam kya hai?', ['Dawai likhna', 'Users ko samajh kar products ko aasaan aur upyogi banana', 'Court me gawahi', 'Sirf surveys bechna'], 1, 'User research aur usability testing.'],
      ['Psychologists ke liye "supervision" ka matlab?', ['Boss ka niyantran', 'Senior ke saath cases aur practice ki niyamit charcha', 'CCTV', 'Exam invigilation'], 1, 'Quality aur self-care dono ke liye zaroori.'],
      ['Bina training ke kya nahi karna chahiye?', ['Psychology ki kitaab padhna', 'Crisis counselling ya therapy dena', 'Research paper padhna', 'Conference attend karna'], 1, 'Scope of practice ke bahar kaam khatarnak ho sakta hai.']
    ],
    more: [
      ['Rehabilitation Council of India', 'https://rehabcouncil.nic.in', 'link'],
      ['UGC-NET (National Testing Agency)', 'https://ugcnet.nta.ac.in', 'link'],
      ['Man\'s Search for Meaning (Viktor Frankl)', GR('Man\'s Search for Meaning'), 'book']
    ]
  });
})();
