/* Level 3 (part 2) · Forgetting, Thinking, Language, Intelligence */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 3.5 */
  C({
    id: 'forgetting', level: 3, mins: 18, visual: 'forgetting',
    visualCap: 'Ebbinghaus ka forgetting curve: seekhne ke baad pehle kuch ghanton me sabse tez bhoolna. Toggle karo aur dekho har review ke baad curve kaise dheemi hoti jaati hai (spaced repetition).',
    title: 'Bhoolna, jhoothi yaadein aur padhne ka sahi tareeka',
    tag: 'Forgetting curve, interference, false memory, aur science-backed study techniques: active recall, spacing, interleaving',
    hook: 'Kal raat padha chapter aaj subah aadha gayab? Ye aapki kamzori nahi, ye memory ka natural behaviour hai. Achhi khabar: psychology ke paas iska ilaaj hai, aur wo "zyada ghante" nahi, <b>"smart tareeka"</b> hai.',
    blocks: [
      ['h', 'Ebbinghaus ka forgetting curve'],
      ['p', 'German psychologist <b>Hermann Ebbinghaus</b> (1885) ne khud par experiment kiya. Unhone "DAX, BUP, ZOL" jaise bekaar syllables ki list yaad ki aur alag-alag samay baad check kiya kitna yaad hai. Result: <b>seekhne ke baad pehle ghante aur pehle din me sabse tez bhoolna</b>, phir rate dheema. Unhone ye bhi dekha ki dobara seekhne me kam time lagta tha (<b>savings</b>), matlab bhooli cheez bhi poori tarah mitti nahi.'],

      ['h', 'Hum bhoolte kyun hain?'],
      ['list', [
        '<b>Encoding failure</b>: cheez kabhi theek se andar gayi hi nahi. Kya aap bata sakte ho ₹10 ke sikke par kya-kya bana hai? Saalon se dekhte ho, par dhyan kabhi nahi diya. (Nickerson aur Adams, 1979 ne yahi penny ke saath dikhaya.)',
        '<b>Decay</b>: use na karne se memory trace dheere-dheere kamzor.',
        '<b>Proactive interference</b>: purani yaad nayi ko rokti hai. Naya phone number yaad karte waqt purana hi muh se nikalna.',
        '<b>Retroactive interference</b>: nayi yaad purani ko dhundhla karti hai. Nayi bhasha seekhne ke baad school ki doosri bhasha ke shabd bhoolna.',
        '<b>Retrieval failure</b>: memory hai par sahi cue nahi mil raha (tip-of-the-tongue).',
        '<b>Motivated forgetting</b>: dard bhari yaadon ko jaanbujh kar dabana (suppression). Freud ka "repression" (bina pata chale dabana) research me kaafi vivaadit hai.'
      ]],
      ['ex', 'Ghajini aur amnesia', '2008 ki film "Ghajini" me hero ko ek chot ke baad <b>anterograde amnesia</b> hota hai: wo nayi yaadein lambe samay tak nahi rakh pata, isliye tattoos aur photos par likh kar jeeta hai. Ye concept asli hai (H.M. ka case yaad karo), par film ke details dramatic hain. Ulta <b>retrograde amnesia</b> hai: chot se <b>pehle</b> ki yaadein kho jaana, jo aksar sirf haal ki yaadon tak seemit hota hai, poori pehchaan bhoolna (jaise filmon me) bahut rare hai.'],

      ['h', 'Memory reconstruct hoti hai: jhoothi yaadein'],
      ['p', '1932 me <b>Frederic Bartlett</b> ne logon ko ek anjaani lok-katha ("The War of the Ghosts") sunayi aur baad me dohrane ko kaha. Log kahani ko apne culture ke hisaab se badal dete the: anjaane hisse gayab, jaani-pehchaani cheezein jud jaati. Bartlett ne kaha memory <b>reconstruction</b> hai, recording nahi, aur hamare <b>schemas</b> (mental frameworks) yaadon ko shape karte hain.'],
      ['case', '"Lost in the mall" (Loftus aur Pickrell, 1995)', 'Participants ko unke bachpan ki 4 kahaniyan di gayi, parivaar se poochh kar. Teen sach thi, ek jhoothi: 5 saal ki umar me shopping mall me kho jaana aur ek buzurg ka madad karna. Interviews ke baad lagbhag <b>25% logon ne is jhoothi ghatna ko "yaad" kar liya</b>, kuch ne details ke saath. Elizabeth Loftus ka kaam dikhata hai ki <b>suggestion aur leading questions se poori jhoothi yaadein ban sakti hain</b>.'],
      ['p', 'Real duniya me iska bada asar hai. US ke Innocence Project ke hisaab se DNA saboot se bekasoor saabit hue logon ke lagbhag 70% cases me <b>galat eyewitness identification</b> ek kaaran tha. Isliye police lineups aur interviews ke tareeke (non-leading questions, double-blind lineups) psychology research se sudhaare ja rahe hain.'],
      ['myth', 'Kuch logon ki "photographic memory" hoti hai jo har cheez camera ki tarah save karti hai.', 'Kuch bachchon me thodi der ki <b>eidetic imagery</b> dekhi gayi hai, par adults me verified photographic memory ka saboot lagbhag nahi hai. Memory championships jeetne wale log khaas techniques (memory palace, chunking) use karte hain, aur unki normal memory aam logon jaisi hi hoti hai.'],

      ['h', 'Padhne ke tareeke: science kya kehta hai'],
      ['p', '2013 me John Dunlosky aur saathiyon ne sainkdon studies review karke 10 popular study techniques ko rate kiya. Nateeja kai students ke liye chaunkane wala tha:'],
      ['table', ['Technique', 'Kya hai', 'Rating', 'Kaise karein'], [
        ['Practice testing (active recall)', 'Khud ko test karna, bina dekhe yaad karna', '<b>High</b>', 'Chapter band karke likho jo yaad hai; flashcards; purane papers'],
        ['Distributed practice (spacing)', 'Padhai ko alag-alag dino me baantna', '<b>High</b>', 'Ek din 3 ghante ke bajay 3 din 1-1 ghanta; 1-3-7-14 din par revise'],
        ['Interleaved practice', 'Alag-alag tarah ke sawaal mix karke practice', 'Moderate', 'Maths me ek hi type ke 20 sawaal ke bajay mixed sawaal'],
        ['Elaborative interrogation', '"Ye sach kyun hai?" poochhna', 'Moderate', 'Har fact ke saath "kyun?" aur "kaise?"'],
        ['Self-explanation', 'Khud ko step-by-step samjhana', 'Moderate', 'Har step ke baad khud se bolo ki kya hua aur kyun'],
        ['Summarization', 'Saar likhna', 'Low', 'Tabhi kaam ka jab achhe se summary likhna aata ho'],
        ['Highlighting / underlining', 'Rangeen pen se line kheenchna', 'Low', 'Achha mehsoos hota hai par seekhne me kam fayda'],
        ['Rereading', 'Baar-baar padhna', 'Low', 'Familiarity ka dhoka deta hai: "ye to pata hai"']
      ]],
      ['p', 'Highlighting aur rereading "kaam" lagte hain kyunki text <b>familiar</b> lagne lagta hai. Par familiarity aur recall alag hain. Exam me recall chahiye, isliye practice bhi recall ki honi chahiye. Is effect ko <b>testing effect</b> ya <b>retrieval practice</b> kehte hain: yaad <b>nikalne</b> ki koshish hi yaad ko mazboot karti hai, chahe us waqt galat ho.'],
      ['tip', [
        '<b>Ek science-backed study plan</b>:',
        '1) Padho aur samjho (deep encoding, apne examples). 2) Kitaab band karke jo yaad hai likho ya bolo (active recall). 3) Galtiyan check karo. 4) Agle din, phir 3 din baad, phir 1 hafte baad, phir 2 hafte baad yahi karo (spacing). 5) Maths/physics me sawaal mix karo (interleaving). 6) Raat ko poori neend lo (consolidation).',
        '<b>Feynman technique</b>: concept ko aise samjhao jaise 12 saal ke bachche ko samjha rahe ho. Jahan atko, wahi gap hai.'
      ]],

      ['h', 'Mnemonics: yaad rakhne ke jugaad'],
      ['list', [
        '<b>Acronyms</b>: VIBGYOR (rainbow ke rang), "My Very Educated Mother Just Served Us Noodles" (planets ka order).',
        '<b>Method of loci (memory palace)</b>: list ki cheezein apne ghar ke alag-alag kamron me "rakh do" aur mann me ghar me ghoom kar wapas uthao. Ye prachin Greek orators ki technique hai aur aaj memory champions ka sabse bada hathiyaar.',
        '<b>Peg-word system</b>: numbers ko rhyme wale shabdon se jodna ("one-bun, two-shoe").',
        '<b>Story method</b>: list ke items ko ek ajeeb kahani me jodna. Jitni ajeeb, utni yaadgaar.'
      ]],
      ['ex', 'Memory palace se grocery list', 'List: doodh, bread, ande, tamatar, sabun. Ghar ke darwaze par doodh ki nadi beh rahi hai; sofa par bread ka takiya hai; TV par ande nach rahe hain; kitchen me tamatar cricket khel rahe hain; bathroom me sabun gaana ga raha hai. Ab dukaan par mann me ghar ka chakkar lagao. Ajeeb images hi raaz hain.'],
      ['terms', [
        ['Forgetting curve', 'Seekhne ke baad samay ke saath memory ka girna; shuru me sabse tez (Ebbinghaus).'],
        ['Savings', 'Dobara seekhne me pehli baar se kam time lagna.'],
        ['Encoding failure', 'Information ka kabhi theek se memory me na jaana.'],
        ['Decay theory', 'Use na hone se memory trace ke kamzor hone ka vichar.'],
        ['Proactive interference', 'Purani information ka nayi ko yaad karne me rukawat banna.'],
        ['Retroactive interference', 'Nayi information ka purani ko yaad karne me rukawat banna.'],
        ['Anterograde amnesia', 'Chot ke baad nayi yaadein na bana paana.'],
        ['Retrograde amnesia', 'Chot se pehle ki yaadein kho jaana.'],
        ['Reconstructive memory', 'Yaad karte waqt memory ko schemas ke saath dobara banana.'],
        ['Schema', 'Duniya ke baare me mental framework jo perception aur memory ko shape karta hai.'],
        ['Misinformation effect', 'Ghatna ke baad mili galat information se memory ka badalna.'],
        ['False memory', 'Aisi ghatna ki yaad jo kabhi hui hi nahi.'],
        ['Testing effect', 'Khud ko test karne (retrieval practice) se memory ka mazboot hona.'],
        ['Spacing effect', 'Padhai ko samay me baantne se behtar long-term memory.'],
        ['Interleaving', 'Alag-alag topics ya problem types ko mix karke practice karna.'],
        ['Mnemonic', 'Yaad rakhne me madad karne wali technique (acronym, memory palace).'],
        ['Method of loci', 'Cheezon ko jaani-pehchaani jagah ke alag hisson se jodkar yaad rakhna.']
      ]],
      ['think', 'Aapke dost kehte hain: "Maine notes 4 baar padh liye, sab yaad hai." Kya ye pakka hai?', [
        'Shayad nahi. Baar-baar padhne se text <b>familiar</b> lagta hai (illusion of competence), par bina dekhe recall alag skill hai. Test: notes band karke ek blank page par jo yaad hai likho. Jo nahi likh paaye, wahi asli revision ka target hai.'
      ]]
    ],
    takeaways: [
      'Bhoolna shuru me sabse tez hota hai; spaced reviews curve ko dheema karte hain.',
      'Encoding failure, interference aur retrieval failure bhoolne ke mukhya kaaran hain.',
      'Memory reconstruct hoti hai; suggestion se jhoothi yaadein ban sakti hain (Loftus).',
      'Active recall aur spacing sabse effective study techniques hain; rereading aur highlighting kam.',
      'Mnemonics jaise memory palace ajeeb images se yaad ko pakka karte hain.'
    ],
    quiz: [
      ['Ebbinghaus ke forgetting curve ke hisaab se bhoolna kab sabse tez hota hai?', ['Ek mahine baad', 'Seekhne ke turant baad, pehle kuch ghanton/din me', 'Ek saal baad', 'Bhoolna constant rate par hota hai'], 1, 'Curve shuru me tezi se girta hai, phir dheema hota hai.'],
      ['Naya password type karte waqt purana password yaad aana kya hai?', ['Retroactive interference', 'Proactive interference', 'Encoding failure', 'Decay'], 1, 'Purani memory nayi ko rok rahi hai: proactive.'],
      ['Dunlosky (2013) review ke hisaab se kaunsi technique "high utility" hai?', ['Highlighting', 'Rereading', 'Practice testing (active recall)', 'Summarization'], 2, 'Practice testing aur distributed practice dono high utility rated hain.'],
      ['"Lost in the mall" study ne kya dikhaya?', ['Bachche malls me kho jaate hain', 'Suggestion se jhoothi bachpan ki yaadein ban sakti hain', 'Memory perfect hoti hai', 'Shopping memory badhati hai'], 1, 'Lagbhag 25% logon ne jhoothi ghatna yaad kar li.'],
      ['Chot ke baad nayi yaadein na bana paana kya kehlata hai?', ['Retrograde amnesia', 'Anterograde amnesia', 'Proactive interference', 'Repression'], 1, 'Anterograde = aage ki (nayi) yaadein nahi banti.'],
      ['Ek hi type ke sawaalon ki jagah mixed sawaal practice karna kya hai?', ['Spacing', 'Interleaving', 'Chunking', 'Rehearsal'], 1, 'Interleaving alag problem types ko mix karti hai.']
    ],
    more: [
      ['Make It Stick (Brown, Roediger, McDaniel) · learning science ki best book', GR('Make It Stick Brown Roediger McDaniel'), 'book'],
      ['The Learning Scientists · free study guides aur posters', 'https://www.learningscientists.org', 'link'],
      ['Anki · free spaced-repetition flashcards app', 'https://apps.ankiweb.net', 'link']
    ]
  });

  /* 3.6 */
  C({
    id: 'thinking-decisions', level: 3, mins: 18, visual: 'system12',
    visualCap: 'System 1 tez, automatic aur intuitive hai; System 2 dheema, mehnati aur logical. Dono hamare andar chalte hain.',
    title: 'Thinking, problem solving aur decision making',
    tag: 'Concepts, heuristics, System 1 vs System 2, functional fixedness, aur dimaag ke shortcuts ki galtiyan',
    hook: 'Chai ya coffee, kaunsa route, kis message ka reply pehle: aap din bhar faisle lete ho, aur zyada tar bina soche. Dimaag ke ye <b>shortcuts</b> aapka bahut time bachate hain, par kabhi-kabhi bilkul galat raaste par bhi le jaate hain. Is chapter me dono dekhenge.',
    blocks: [
      ['h', 'Concepts aur prototypes'],
      ['p', 'Dimaag duniya ko <b>concepts</b> (categories) me baantta hai: "phal", "dost", "khatra". Har concept ka ek <b>prototype</b> hota hai, yaani sabse typical example. Eleanor Rosch ki research me "bird" ke liye log gauraiya ya kabootar ko penguin ya shuturmurg se jaldi "bird" maante hain. Isliye "Kya penguin bird hai?" ka jawab dene me thoda zyada time lagta hai.'],
      ['h', 'Problem solving ke tareeke'],
      ['table', ['Tareeka', 'Kya hai', 'Example'], [
        ['Trial and error', 'Ek-ek karke try karna', 'Chaabiyon ke guchhe se sahi chaabi dhoondhna'],
        ['Algorithm', 'Step-by-step procedure jo sahi jawab ki guarantee deta hai, par dheema', 'Long division; har possible password try karna'],
        ['Heuristic', 'Mental shortcut: tez, aksar sahi, par guarantee nahi', '"Jahan bheed hai wahan khana achha hoga"'],
        ['Insight', 'Achanak samajh aana', 'Nahate waqt puzzle ka jawab sujhna']
      ]],
      ['h', 'Problem solving ki rukawatein'],
      ['list', [
        '<b>Mental set</b>: ek kaam karne wale tareeke par atak jaana, chahe aasaan tareeka maujood ho. Luchins (1942) ke water-jar experiment me log lambe formula se problems solve karte rahe, aasaan wale par bhi.',
        '<b>Functional fixedness</b>: cheezon ko sirf unke usual kaam ke roop me dekhna.',
        '<b>Confirmation bias</b>: sirf wo saboot dhoondhna jo apni pehli soch ko sahi saabit kare.'
      ]],
      ['case', 'Duncker ka candle problem (1945)', 'Aapko ek mombatti, maachis ki dibbi aur thumbtacks (pin) ka dabba diya jaata hai. Mombatti ko deewar par aise lagao ki jalne par mom neeche table par na gire. Zyada tar log mombatti ko seedhe deewar par pin karne ya mom se chipkane ki koshish karte hain. Jawab: <b>pin ke dabbe ko khaali karo, use deewar par pin karo aur shelf ki tarah use karo</b>. Mushkil isliye lagta hai kyunki dabba "dabba" dikhta hai, shelf nahi: <b>functional fixedness</b>. Jab dabba pehle se khaali diya gaya, logon ne jaldi solve kiya.'],

      ['h', 'System 1 aur System 2'],
      ['p', 'Nobel winner <b>Daniel Kahneman</b> ne apni book <i>Thinking, Fast and Slow</i> me do tarah ki soch ko popular banaya:'],
      ['compare', ['System 1 (tez)', ['Automatic, intuitive, bina mehnat. "2 + 2 = ?", chehre ka gussa pehchaanna, khali sadak par gaadi chalana.', 'Fayda: tez, energy bachata hai. Nuksaan: biases aur jaldbazi ki galtiyan.']], ['System 2 (dheema)', ['Conscious, mehnati, logical. "17 × 24 = ?", form bharna, naye sheher me raasta dhoondhna.', 'Fayda: sahi, flexible. Nuksaan: thaka deta hai, aalsi hai, aksar System 1 ki baat bina check kiye maan leta hai.']]],
      ['lab', 'crt'],

      ['h', 'Heuristics: shortcuts jo dhoka dete hain'],
      ['p', 'Amos Tversky aur Daniel Kahneman ne 1970s me dikhaya ki hum probability aur frequency ka andaza lagane ke liye kuch shortcuts use karte hain:'],
      ['list', [
        '<b>Availability heuristic</b>: jo examples jaldi dimaag me aate hain, unhe zyada common maan lena.',
        '<b>Representativeness heuristic</b>: koi cheez kisi prototype jaisi dikhe to use us category ka maan lena, asli probability ko ignore karke.',
        '<b>Anchoring</b>: pehle mile number par zyada nirbhar rehna (Level 7 me lab ke saath).'
      ]],
      ['ex', 'Plane crash ka darr, sadak ka nahi', 'Plane crash ki khabar din bhar TV par chalti hai, isliye flying darawni lagti hai (availability). Par asli khatra sadak par hai: India me 2022 me sadak haadson me <b>1.68 lakh se zyada</b> log maare gaye (MoRTH report), yaani har ghante lagbhag 19. Phir bhi helmet na pehenne ka darr kam aur flight ka darr zyada lagta hai, kyunki rozmarra ke haadse "khabar" nahi bante.'],
      ['case', 'Linda problem (Tversky aur Kahneman, 1983)', '"Linda 31 saal ki hai, seedhi baat karti hai, bahut smart hai. Student life me wo bhedbhaav aur social justice ke muddon par active thi." Ab batao zyada probable kya hai: (A) Linda bank teller hai, ya (B) Linda bank teller hai <b>aur</b> feminist movement me active hai? Original study me lagbhag <b>85%</b> logon ne B chuna. Par do cheezon ka ek saath sach hona, ek cheez ke sach hone se <b>zyada probable ho hi nahi sakta</b>. Ise <b>conjunction fallacy</b> kehte hain: description "typical feminist" jaisi lagi (representativeness), aur logic peeche reh gaya.'],

      ['h', 'Reasoning: logic aur uski seemayein'],
      ['compare', ['Deductive reasoning', 'General rule se specific nateeja. "Saare insaan mortal hain; Socrates insaan hai; isliye Socrates mortal hai." Agar premises sach hain to nateeja pakka.'], ['Inductive reasoning', 'Specific examples se general rule. "Maine jitne kauve dekhe sab kaale the, isliye saare kauve kaale hain." Upyogi, par galat ho sakta hai.']],
      ['p', '<b>Belief bias</b>: agar nateeja hamari maanyata se mel khaata hai, to hum galat logic ko bhi sahi maan lete hain. "Saari khane ki cheezein healthy hain; samosa khane ki cheez hai; isliye samosa healthy hai" ko log galat bolte hain (premise galat hai), par logic ka structure valid hai. Logic aur sachchai alag hain.'],
      ['lab', 'wason'],

      ['h', 'Creativity'],
      ['p', 'J.P. Guilford ne do tarah ki soch batayi: <b>convergent thinking</b> (ek sahi jawab tak pahunchna, jaise MCQ) aur <b>divergent thinking</b> (ek sawaal ke kai naye jawab, jaise "eent ke kitne use?"). Creativity ke liye research kuch cheezein important batati hai: domain me <b>expertise</b>, <b>intrinsic motivation</b> (kaam me khud ka maza), <b>incubation</b> (problem ko thodi der chhod dena), aur naye anubhavon ke liye openness.'],
      ['tip', 'Abhi 2 minute ka timer lagao aur ek <b>purane akhbaar</b> ke jitne ho sake utne alag-alag use likho (Alternative Uses Test). Pehle 5-6 obvious honge (lapetna, padhna); asli creativity uske baad shuru hoti hai jab dimaag obvious se aage jaane ko majboor hota hai.'],

      ['h', 'Decision making ke jaal'],
      ['list', [
        '<b>Overconfidence</b>: hum apne andaze par zaroorat se zyada bharosa karte hain. Kai studies me log "99% sure" jawabon me bhi kaafi baar galat nikle.',
        '<b>Framing</b>: same information alag shabdon me alag faisle paida karti hai (Level 7 me lab).',
        '<b>Choice overload</b>: bahut zyada options se faisla mushkil aur kam santushti. Iyengar aur Lepper (2000) ki mashhoor jam study me 24 jams ki table par kam log khareede, 6 jams wali par zyada. (Baad ki research me ye effect hamesha nahi milta; ye depend karta hai options kitne complex hain.)',
        '<b>Maximizers vs satisficers</b> (Barry Schwartz): "sabse best" dhoondhne wale (maximizers) aksar "kaafi achha" chunne walon (satisficers) se kam khush rehte hain.'
      ]],
      ['terms', [
        ['Concept', 'Milti-julti cheezon, ideas ya logon ka mental group.'],
        ['Prototype', 'Kisi concept ka sabse typical example.'],
        ['Algorithm', 'Step-by-step procedure jo sahi jawab ki guarantee deta hai.'],
        ['Heuristic', 'Mental shortcut jo tez faisla karata hai par galti bhi kara sakta hai.'],
        ['Mental set', 'Purane kaam karne wale tareeke par atak jaane ki aadat.'],
        ['Functional fixedness', 'Cheezon ko sirf unke usual use ke roop me dekh paana.'],
        ['System 1', 'Tez, automatic, intuitive soch.'],
        ['System 2', 'Dheemi, conscious, mehnati aur logical soch.'],
        ['Availability heuristic', 'Jo examples jaldi yaad aayein unhe zyada common maan lena.'],
        ['Representativeness heuristic', 'Prototype se milta-julta dikhne ke aadhar par probability judge karna.'],
        ['Conjunction fallacy', 'Do events ke saath hone ko ek event se zyada probable maan lena.'],
        ['Deductive reasoning', 'General premises se specific nateeja nikalna.'],
        ['Inductive reasoning', 'Specific observations se general rule banana.'],
        ['Belief bias', 'Nateeja maanyata se mile to galat logic ko bhi sahi maan lena.'],
        ['Divergent thinking', 'Ek problem ke kai naye solutions sochna.'],
        ['Convergent thinking', 'Ek sahi solution tak pahunchna.'],
        ['Incubation', 'Problem ko thodi der chhodne ke baad solution ka sujhna.'],
        ['Overconfidence', 'Apne gyaan aur andaze par zaroorat se zyada bharosa.'],
        ['Choice overload', 'Bahut zyada options se faisla lene me mushkil aur kam santushti.'],
        ['Satisficing', '"Kaafi achha" option milte hi chun lena, sabse best ki talaash ke bajay.']
      ]],
      ['think', 'Ek bat aur ball ₹110 ke hain aur bat ₹100 mehenga hai. Dimaag turant "₹10" kyun kehta hai?', [
        'System 1 ₹110 ko ₹100 + ₹10 me tod deta hai kyunki ye pattern aasaan hai. System 2 check kare to dikhega ki ₹10 ki ball ke saath bat ₹110 ka hoga aur total ₹120. Sahi jawab ₹5 hai. Galti intelligence ki kami nahi, balki <b>check na karne</b> ki hai.'
      ]]
    ],
    takeaways: [
      'Dimaag concepts aur prototypes se duniya ko organize karta hai.',
      'Algorithms pakke par dheeme; heuristics tez par galti-prone.',
      'Mental set aur functional fixedness creativity ko rokte hain (candle problem).',
      'System 1 tez aur biased, System 2 dheema aur logical; mushkil faislon par System 2 ko jagao.',
      'Availability, representativeness, overconfidence aur framing hamare faislon ko chupchaap modte hain.'
    ],
    quiz: [
      ['Plane crash ki khabron ke baad flying ko sadak se zyada khatarnak maanna kaunsa heuristic hai?', ['Representativeness', 'Availability', 'Anchoring', 'Algorithm'], 1, 'Yaadgaar, aasaani se yaad aane wale examples ko zyada common maan lena availability heuristic hai.'],
      ['Duncker ke candle problem me log dabbe ko shelf ki tarah kyun nahi dekh paate?', ['Mental set', 'Functional fixedness', 'Belief bias', 'Overconfidence'], 1, 'Dabbe ko sirf "dabba" (pin rakhne ki cheez) ki tarah dekhna functional fixedness hai.'],
      ['Linda problem me "bank teller aur feminist" chunna kaunsi galti hai?', ['Conjunction fallacy', 'Functional fixedness', 'Mental set', 'Framing'], 0, 'Do events ka saath hona ek event se zyada probable nahi ho sakta.'],
      ['"17 × 24" mann me solve karna kis system ka kaam hai?', ['System 1', 'System 2', 'Dono nahi', 'Sirf memory'], 1, 'Effortful, step-by-step calculation System 2 karta hai.'],
      ['Specific examples se general rule banana kya hai?', ['Deductive reasoning', 'Inductive reasoning', 'Algorithm', 'Belief bias'], 1, 'Inductive reasoning observations se general nateeja nikalti hai.'],
      ['"Ek eent ke kitne use ho sakte hain?" kis tarah ki soch maangta hai?', ['Convergent thinking', 'Divergent thinking', 'Deductive reasoning', 'Algorithm'], 1, 'Kai naye solutions sochna divergent thinking hai.']
    ],
    more: [
      ['Thinking, Fast and Slow (Daniel Kahneman)', GR('Thinking, Fast and Slow Kahneman'), 'book'],
      ['OpenStax Psychology 2e · Chapter 7: Thinking and Intelligence', OS(7), 'book'],
      ['Crash Course Psychology: Cognition', YT('Crash Course Psychology cognition how your mind can amaze and betray you'), 'video']
    ]
  });

  /* 3.7 */
  C({
    id: 'language', level: 3, mins: 15, visual: 'languageStages',
    visualCap: 'Rona se poore sentences tak: bachche ka language development kaafi tay kram me hota hai, chahe bhasha koi bhi ho.',
    title: 'Language: hum bolna kaise seekhte hain',
    tag: 'Phonemes se pragmatics tak, Chomsky vs Skinner, critical period, bilingual dimaag aur kya bhasha soch badalti hai',
    hook: 'Ek 3 saal ka bachcha bina kisi grammar class ke "Mummy, maine khana kha liya, ab khelne jaun?" bol leta hai, jabki adults ko nayi bhasha seekhne me saalon lag jaate hain. Bachche ye kamaal kaise karte hain? Aur kya Hindi bolne wala dimaag duniya ko English bolne wale se alag dekhta hai?',
    blocks: [
      ['h', 'Bhasha ki parten'],
      ['table', ['Level', 'Matlab', 'Example'], [
        ['Phoneme', 'Sabse chhoti awaaz jo matlab badal de', 'Hindi me "kal" aur "khal" alag hain (k vs kh); English bolne walon ko ye farak mushkil lagta hai. Isi tarah "ट" aur "त".'],
        ['Morpheme', 'Sabse chhoti matlab wali unit', '"un-happi-ness" me 3 morphemes; "ladk-on" me 2'],
        ['Syntax (grammar)', 'Shabdon ka order aur niyam', 'Hindi: "Ram ne aam khaya" (Subject-Object-Verb); English: "Ram ate a mango" (SVO)'],
        ['Semantics', 'Shabdon aur sentences ka matlab', '"Bank" = paise wala bank ya nadi ka kinara?'],
        ['Pragmatics', 'Context me bhasha ka use', '"Bahut achha kiya!" taareef bhi ho sakti hai aur taana bhi, tone par depend']
      ]],

      ['h', 'Language development ke stages'],
      ['steps', [
        ['Rona aur cooing (~0-4 mahine)', '"Ooo", "aaa" jaisi awaazein. Bachche janam se hi apni maa ki bhasha ki lay pehchaante hain.'],
        ['Babbling (~6 mahine)', '"ba-ba-ba", "da-da". Shuru me duniya ki lagbhag saari bhashaon ki sounds; ~10-12 mahine tak apni bhasha ki sounds par focus ho jaata hai.'],
        ['Pehla shabd (~12 mahine)', '"Mama", "papa", "doodh". Ek shabd poora sentence hota hai: "doodh!" = "mujhe doodh chahiye".'],
        ['Do-shabd stage (~18-24 mahine)', '<b>Telegraphic speech</b>: "Mummy aao", "Gaadi gayi". Sirf zaroori shabd, telegram jaise. Is umar me vocabulary tezi se badhti hai (vocabulary spurt).'],
        ['Sentences (~2-3 saal)', 'Grammar ke niyam lagne lagte hain. Kabhi zyada bhi: <b>overgeneralization</b>, jaise English seekhne wale bachche "goed" ya "mouses" bolte hain. Ye galti nahi, saboot hai ki bachcha niyam seekh raha hai, sirf nakal nahi.'],
        ['Complex speech (4-5 saal+)', 'Lambe sentences, kahaniyan, jokes, aur pragmatics ki samajh.']
      ]],

      ['h', 'Theories: nakal ya andar se?'],
      ['list', [
        '<b>Skinner (behaviorist)</b>: bachche imitation aur reinforcement se seekhte hain ("mama" bolne par maa ki khushi). Par ye overgeneralization ("goed", jo kisi ne sikhaya nahi) aur bachchon ki tezi ko samjha nahi paata.',
        '<b>Chomsky (nativist)</b>: insaanon me <b>Language Acquisition Device</b> jaisi andruni kshamta hai aur saari bhashaon ke neeche ek <b>universal grammar</b>. Bachche jitna sunte hain usse kahin zyada seekh jaate hain ("poverty of the stimulus").',
        '<b>Interactionist / social</b>: biology + samajik baatcheet dono. Bachche se baat karna, kahaniyan sunana, "baby talk" (dheemi, sur wali bhasha) madad karti hai.',
        '<b>Statistical learning</b>: Saffran aur saathiyon (1996) ne dikhaya ki 8 mahine ke bachche bhi sirf 2 minute sunkar pata laga lete hain ki kaunse syllables aksar saath aate hain, yaani shabdon ki seema kahan hai.'
      ]],
      ['case', 'Genie (1970) aur critical period', 'Genie naam ki ek bachchi ko 13 saal tak ek kamre me band rakha gaya, lagbhag bina kisi baatcheet ke. Bachaaye jaane ke baad usne kaafi shabd seekhe, par <b>poori grammar kabhi nahi seekh payi</b>. Ye <b>critical period hypothesis</b> ka support karta hai: bhasha seekhne ka ek khaas samay hai (bachpan), jiske baad poori fluency mushkil hoti hai. (Genie ke case me abuse ke doosre asar bhi the, isliye ek case se pakka nateeja nahi nikal sakte.) Nayi bhasha ka accent bhi umar ke saath zyada mushkil hota hai.'],

      ['h', 'Bilingual aur multilingual dimaag'],
      ['p', 'India me karodon log do ya zyada bhashayein bolte hain: ghar me Bhojpuri, school me Hindi aur English. Research kya kehti hai?'],
      ['list', [
        'Bilingual bachche har bhasha me shayad thodi kam vocabulary rakhte hain, par <b>dono milakar</b> vocabulary monolinguals jitni ya zyada hoti hai. Bhasha "confuse" nahi karti.',
        '"Bilingual advantage" (better attention control) par research mixed hai: kuch studies me mila, kuch me nahi.',
        'Hyderabad me 2013 ki ek study (Alladi aur saathi) me bilingual patients me dementia ke symptoms monolinguals se average <b>~4.5 saal baad</b> shuru hue, padhe-likhe na hone walon me bhi. Ye "cognitive reserve" ka idea support karta hai, par is par aur research chal rahi hai.'
      ]],

      ['h', 'Kya bhasha soch ko shape karti hai?'],
      ['p', '<b>Linguistic relativity</b> (Sapir-Whorf hypothesis): bhasha hamari soch ko prabhavit karti hai. Strong version (bhasha soch ko <b>tay</b> karti hai) ko support nahi mila. Weak version (bhasha soch ko <b>prabhavit</b> karti hai) ke liye saboot hain:'],
      ['list', [
        'Russian me halke neele (goluboy) aur gehre neele (siniy) ke alag basic shabd hain. Russian bolne wale in shades ko English bolne walon se thoda tez alag kar paaye (Winawer aur saathi, 2007).',
        'Australia ki Guugu Yimithirr bhasha me "left-right" ki jagah "north-south" use hota hai, aur uske bolne wale andhere kamre me bhi disha batane me kamaal ke hain.'
      ]],
      ['ex', 'Chacha, mama, tau, fufa vs "uncle"', 'Hindi me papa ke chhote bhai (chacha), bade bhai (tau), maa ke bhai (mama), aur bua ke pati (fufa) ke alag shabd hain. English me sab "uncle". Hindi bolne wale bachche in rishton ka farak jaldi aur saaf seekhte hain, kyunki bhasha unhe har baar ye farak yaad dilati hai. Bhasha soch ko "kaid" nahi karti, par kuch cheezon ko <b>highlight</b> zaroor karti hai.'],

      ['h', 'Kya janwar bhasha bolte hain?'],
      ['p', 'Madhumakkhiyan "waggle dance" se khane ki disha aur doori batati hain; chimpanzee Washoe ne ~100+ sign language signs seekhe; bonobo Kanzi symbols (lexigrams) se baat karta tha aur bole hue English sentences samajh leta tha. Par kya ye "bhasha" hai? Zyada tar researchers ka kehna hai ki janwar shabd jod sakte hain, par insaanon jaisi <b>naye sentences banane wali grammar (syntax)</b> ka saboot kamzor hai.'],
      ['terms', [
        ['Phoneme', 'Bhasha ki sabse chhoti awaaz jo matlab badal sake.'],
        ['Morpheme', 'Bhasha ki sabse chhoti matlab wali unit.'],
        ['Syntax', 'Sentences me shabdon ke order ke niyam (grammar).'],
        ['Semantics', 'Shabdon aur sentences ka matlab.'],
        ['Pragmatics', 'Social context me bhasha ka sahi use.'],
        ['Babbling', 'Bachche ka "ba-ba", "da-da" jaisi awaazein nikalna (~6 mahine).'],
        ['Telegraphic speech', 'Do-teen zaroori shabdon wale sentences ("Mummy aao").'],
        ['Overgeneralization', 'Grammar ke niyam ko wahan bhi lagana jahan exception ho ("goed").'],
        ['Language acquisition device', 'Chomsky ke hisaab se bhasha seekhne ki andruni kshamta.'],
        ['Universal grammar', 'Saari bhashaon ke neeche common structure ka vichar.'],
        ['Critical period', 'Wo samay jab koi kshamta (jaise bhasha) sabse aasaani se seekhi jaati hai.'],
        ['Statistical learning', 'Patterns ki frequency track karke seekhna (jaise syllables ka saath aana).'],
        ['Linguistic relativity', 'Bhasha soch ko prabhavit karti hai, ye vichar (Sapir-Whorf).'],
        ['Bilingualism', 'Do bhashaon ka upyog karne ki kshamta.']
      ]]
    ],
    takeaways: [
      'Bhasha ki parten: phonemes, morphemes, syntax, semantics, pragmatics.',
      'Bachche ek tay kram me seekhte hain: cooing, babbling, pehla shabd, telegraphic speech, sentences.',
      'Overgeneralization dikhata hai ki bachche niyam seekhte hain, sirf nakal nahi (Chomsky vs Skinner).',
      'Critical period ke baad poori fluency mushkil; bilingualism nuksaan nahi, shayad fayda.',
      'Bhasha soch ko tay nahi karti, par kuch farakon ko highlight karti hai (weak Sapir-Whorf).'
    ],
    quiz: [
      ['"Kal" aur "khal" me k aur kh ka farak bhasha ki kaunsi unit hai?', ['Morpheme', 'Phoneme', 'Syntax', 'Pragmatics'], 1, 'Matlab badalne wali sabse chhoti awaaz phoneme hai.'],
      ['"Mummy aao" jaisi do-shabd speech kya kehlati hai?', ['Babbling', 'Telegraphic speech', 'Overgeneralization', 'Cooing'], 1, 'Sirf zaroori shabd, telegram jaise: telegraphic speech.'],
      ['Bachcha "goed" bolta hai (went ki jagah). Ye kya dikhata hai?', ['Wo nakal kar raha hai', 'Wo grammar ka niyam seekh raha hai (overgeneralization)', 'Use hearing problem hai', 'Wo bilingual hai'], 1, 'Ye galti kisi ne sikhayi nahi, bachcha "-ed" niyam khud laga raha hai.'],
      ['Language Acquisition Device ka idea kisne diya?', ['Skinner', 'Chomsky', 'Piaget', 'Bandura'], 1, 'Noam Chomsky ne andruni bhasha kshamta ka vichar diya.'],
      ['Genie ka case kis idea ko support karta hai?', ['Bilingual advantage', 'Critical period hypothesis', 'Linguistic relativity', 'Statistical learning'], 1, 'Bachpan me bhasha na milne par baad me poori grammar nahi seekh paayi.'],
      ['Sapir-Whorf ka kaunsa version research se zyada support paata hai?', ['Bhasha soch ko poori tarah tay karti hai', 'Bhasha soch ko kuch had tak prabhavit karti hai', 'Bhasha ka soch se koi rishta nahi', 'Sirf janwaron par lagu'], 1, 'Weak version (influence) ke liye saboot hain, strong (determinism) ke liye nahi.']
    ],
    more: [
      ['The Language Instinct (Steven Pinker)', GR('The Language Instinct Pinker'), 'book'],
      ['Crash Course Linguistics (YouTube)', YT('Crash Course Linguistics'), 'video'],
      ['OpenStax Psychology 2e · 7.3 Language', OS(7), 'book']
    ]
  });

  /* 3.8 */
  C({
    id: 'intelligence', level: 3, mins: 18, visual: 'gardner',
    visualCap: 'Howard Gardner ki 8 intelligences. Har petal par tap karo. (Dhyan do: ye model popular hai par research support mixed hai.)',
    title: 'Intelligence: smart hone ka asli matlab',
    tag: 'g factor, Gardner, Sternberg, emotional intelligence, IQ tests (Indian tests bhi), Flynn effect aur iodine ka kamaal',
    hook: 'Sachin Tendulkar, A.R. Rahman, Kalpana Chawla, aur ek kisaan jo aasmaan dekh kar baarish bata deta hai: inme se "intelligent" kaun hai? Jawab depend karta hai ki aap intelligence ki definition kya maante ho. Psychology me ye sabse garma-garam bahas wale topics me se ek hai.',
    blocks: [
      ['h', 'Intelligence kya hai?'],
      ['p', 'Zyada tar psychologists maante hain ki intelligence <b>anubhav se seekhne, problems solve karne aur nayi situations me adapt karne</b> ki kshamta hai. Par ye ek cheez hai ya kai?'],
      ['h', 'Ek general intelligence: g factor'],
      ['p', '1904 me <b>Charles Spearman</b> ne dekha ki jo bachche ek tarah ke test me achhe hain (jaise vocabulary), wo aksar doosre tests me bhi achhe hote hain (jaise maths, puzzles). Is "positive manifold" se unhone <b>g (general intelligence)</b> ka idea diya: ek common mental kshamta jo sab tests ke peeche hai, plus har test ki apni specific kshamta (s).'],
      ['p', '<b>Raymond Cattell</b> ne do hisse kiye: <b>fluid intelligence (Gf)</b>, yaani naye problems solve karna aur patterns pakadna, jo 20s me peak karke dheere ghatti hai; aur <b>crystallized intelligence (Gc)</b>, yaani jama kiya gyaan aur vocabulary, jo umar ke saath badhti rehti hai. Isliye dadaji crossword me aapko hara dete hain, par naye smartphone me aap aage ho. Aaj ka sabse accepted model, <b>CHC model</b>, g ke neeche kai broad abilities rakhta hai.'],

      ['h', 'Multiple intelligences: Gardner'],
      ['p', '<b>Howard Gardner</b> (1983) ne kaha ki ek IQ number bahut kuch chhod deta hai. Unhone 8 alag intelligences batayi:'],
      ['table', ['Intelligence', 'Kya hai', 'Example'], [
        ['Linguistic', 'Shabd aur bhasha', 'Kavi, lekhak (Gulzar)'],
        ['Logical-mathematical', 'Logic, maths, patterns', 'Ramanujan, scientists'],
        ['Spatial', 'Images aur space me sochna', 'Architects, chess players'],
        ['Musical', 'Sur, taal, lay', 'Lata Mangeshkar, A.R. Rahman'],
        ['Bodily-kinesthetic', 'Sharir ka kushal upyog', 'Athletes, dancers, surgeons'],
        ['Interpersonal', 'Doosron ko samajhna', 'Achhe teachers, leaders'],
        ['Intrapersonal', 'Khud ko samajhna', 'Philosophers, counsellors'],
        ['Naturalist', 'Prakriti ke patterns pehchaanna', 'Kisan, botanists, birdwatchers']
      ]],
      ['note', 'Gardner ka model schools me bahut popular hai aur ye yaad dilata hai ki har bachche me alag talent hai. Par research ko ye saboot kam mila ki ye 8 sach me <b>alag-alag</b> "intelligences" hain; kai psychologists inhe talents ya abilities kehna behtar samajhte hain. Aur ye "learning styles" myth (Chapter 1.6) ke saath confuse nahi karna chahiye.'],

      ['h', 'Sternberg aur emotional intelligence'],
      ['p', '<b>Robert Sternberg</b> ki <b>triarchic theory</b>: (1) <b>Analytical</b>: problems ko analyze karna, school wali smartness. (2) <b>Creative</b>: naye situations me naye ideas. (3) <b>Practical</b>: rozmarra me cheezein sambhal lena, "street smart". Ek dukandaar jo mann me hisaab aur graahak ka mood dono padh leta hai, practical intelligence ka example hai.'],
      ['p', '<b>Emotional intelligence (EI)</b>, jo Salovey aur Mayer (1990) ne diya aur Daniel Goleman ki book ne mashhoor kiya: apne aur doosron ke emotions ko <b>pehchaanna, samajhna, use karna aur manage karna</b>. EI rishton aur leadership me upyogi hai, par "IQ se zyada important" jaise daave badha-chadha kar kiye gaye hain, aur EI ko naapne ke tareekon par bahas hai.'],

      ['h', 'Intelligence kaise naapte hain?'],
      ['steps', [
        ['Binet aur Simon (1905), France', 'School me extra madad wale bachchon ko pehchaanne ke liye pehla practical test. "<b>Mental age</b>" ka idea: 8 saal ka bachcha agar 10 saal walon jaisa perform kare to mental age 10.'],
        ['Terman (1916), Stanford-Binet', 'IQ = (mental age ÷ chronological age) × 100. 10 ÷ 8 × 100 = 125.'],
        ['Wechsler (WAIS, WISC)', 'Aaj ka standard: <b>deviation IQ</b>, jisme aapka score apni umar walon se compare hota hai. Mean 100, SD 15 (yaad karo bell curve, Chapter 1.4).'],
        ['India me', 'Binet ka Indian adaptation <b>Binet-Kamat Test</b> (V.V. Kamat, 1930s), <b>Malin\'s Intelligence Scale for Indian Children (MISIC)</b> jo Wechsler par based hai, aur <b>Bhatia\'s Battery</b> jaise tests clinical aur educational settings me use hote hain.']
      ]],
      ['vis', 'bellCurve', '"IQ" button dabao: ~68% logon ka IQ 85-115 ke beech hota hai.'],
      ['p', 'Achhe test ke liye teen cheezein zaroori hain: <b>standardization</b> (sabke liye same procedure aur bade representative group ke norms), <b>reliability</b> (baar-baar dene par similar score), aur <b>validity</b> (jo naapne ka daava hai wahi naape). Level 7 me ye detail me.'],
      ['p', '<b>Flynn effect</b>: 20th century me kai deshon me IQ scores har dashak lagbhag ~3 points badhe. Itni jaldi genes nahi badalte, to kaaran environment hai: behtar poshan, zyada padhai, chhote parivaar, complex mahaul. Kuch deshon me haal ke saalon me ye trend ruk ya ulat bhi raha hai.'],

      ['h', 'Dono kinare: intellectual disability aur giftedness'],
      ['p', '<b>Intellectual disability</b> (DSM-5): intellectual functioning me kami (aam taur par IQ ~70 se kam) <b>aur</b> rozmarra ke adaptive skills (khud ki dekhbhaal, baatcheet, social skills) me dikkat, jo developmental period me shuru ho. Aaj zor IQ number se zyada adaptive functioning aur support ki zaroorat par hai.'],
      ['p', '<b>Giftedness</b>: Lewis Terman ki lambi study (1920s se) me high IQ wale ~1,500 bachchon ko zindagi bhar track kiya gaya. Wo average se zyada swasth aur safal rahe, par sab "genius" nahi bane, aur kai kam IQ wale log bade kaam kar gaye. IQ success ka ek factor hai, akela nahi.'],

      ['h', 'Nature, nurture aur iodine wala namak'],
      ['p', 'Twin studies ke hisaab se adults me IQ ki heritability ~50-80% hai (Chapter 2.4). Par environment ka asar bhi bahut bada aur badla ja sakne wala hai:'],
      ['list', [
        '<b>Schooling</b>: 2018 ke ek meta-analysis (Ritchie aur Tucker-Drob) ke hisaab se har extra saal ki padhai IQ ko lagbhag 1-5 points badhati hai.',
        '<b>Poshan</b>: bachpan ka kuposhan aur anaemia cognitive development ko nuksaan pahunchate hain.',
        '<b>Lead jaisi zehreeli cheezein</b>: bachpan me lead exposure IQ ghatata hai.',
        '<b>Garibi aur stress</b>: kam resources, kam stimulation aur zyada stress development par asar daalte hain.'
      ]],
      ['ex', 'Iodine wala namak: ek chammach me IQ', 'WHO ke hisaab se iodine ki kami duniya me <b>roke ja sakne wale</b> brain damage ka ek bada kaaran hai, khaas kar garbh ke dauraan. India ne iodized namak ko badhawa dene ka rashtriya program chalaya (National Iodine Deficiency Disorders Control Programme). Ek sasta badlaav karodon bachchon ke cognitive development ko bachata hai: <b>"genetic" trait par environment ka asar</b> ka shayad sabse achha example.'],
      ['p', 'Groups ke beech average IQ ke farak (desh, varg) aksar <b>environment</b> (padhai, poshan, test ki bhasha aur culture se jaan-pehchaan) se samjhaye ja sakte hain. Test agar shehri, English-medium culture par bana ho, to gaon ke bachche ke saath nainsaafi ho sakti hai (<b>cultural bias</b>). Aur <b>stereotype threat</b> (Level 5): jab kisi ko yaad dilaya jaaye ki "tumhara group is cheez me kamzor maana jaata hai", to uska performance gir sakta hai.'],
      ['myth', 'IQ janam se fixed hai aur zindagi me kitna safal hoge ye wahi tay karta hai.', 'IQ kaafi stable hota hai par fixed nahi: padhai, poshan aur mahaul usse badalte hain. Aur IQ success ka sirf ek hissa samjhata hai; mehnat (conscientiousness), social skills, mauke aur kismat bhi bade factors hain.'],
      ['terms', [
        ['Intelligence', 'Anubhav se seekhne, problems solve karne aur adapt karne ki kshamta.'],
        ['g factor', 'General intelligence jo alag-alag mental tests ke peeche common hai (Spearman).'],
        ['Fluid intelligence', 'Naye problems solve karne aur patterns pakadne ki kshamta.'],
        ['Crystallized intelligence', 'Jama kiya gyaan aur vocabulary.'],
        ['Multiple intelligences', 'Gardner ka model jisme 8 alag tarah ki intelligences hain.'],
        ['Triarchic theory', 'Sternberg ki theory: analytical, creative, practical intelligence.'],
        ['Emotional intelligence', 'Emotions ko pehchaanne, samajhne aur manage karne ki kshamta.'],
        ['Mental age', 'Kisi umar ke average bachche jaisa performance level (Binet).'],
        ['Intelligence quotient (IQ)', 'Intelligence test ka score; aaj deviation IQ (mean 100, SD 15).'],
        ['Standardization', 'Test ko same procedure se dena aur representative group ke norms banana.'],
        ['Flynn effect', '20th century me IQ scores ka peedhi dar peedhi badhna.'],
        ['Intellectual disability', 'Intellectual functioning aur adaptive skills dono me kami, jo bachpan me shuru ho.'],
        ['Cultural bias', 'Test ka kisi khaas culture ke logon ke favour me hona.'],
        ['Binet-Kamat Test', 'Binet test ka Indian adaptation (V.V. Kamat).']
      ]]
    ],
    takeaways: [
      'Intelligence = seekhna, problem solve karna aur adapt karna; g factor aur kai specific abilities.',
      'Fluid intelligence umar ke saath ghatti, crystallized badhti hai.',
      'Gardner aur Sternberg ne intelligence ki definition ko faila diya; EI rishton me upyogi hai.',
      'Aaj ka IQ deviation score hai (mean 100, SD 15); India me Binet-Kamat aur MISIC jaise tests hain.',
      'Genes aur environment dono matter karte hain: padhai, poshan aur iodine IQ ko badalte hain.'
    ],
    quiz: [
      ['Spearman ka "g" kya hai?', ['Sirf maths ki kshamta', 'Saare mental tests ke peeche common general intelligence', 'Emotional intelligence', 'Genetic factor'], 1, 'Alag tests me performance ke correlation se Spearman ne general factor g ka idea diya.'],
      ['Umar ke saath kaunsi intelligence badhti rehti hai?', ['Fluid', 'Crystallized', 'Dono ghatti hain', 'Spatial'], 1, 'Jama gyaan aur vocabulary (crystallized) umar ke saath badhte hain.'],
      ['Deviation IQ me mean aur SD kya hote hain?', ['Mean 50, SD 10', 'Mean 100, SD 15', 'Mean 100, SD 5', 'Mean 70, SD 15'], 1, 'Wechsler style tests me mean 100 aur SD 15.'],
      ['Sternberg ki theory me "street smart" kaunsi intelligence hai?', ['Analytical', 'Creative', 'Practical', 'Naturalist'], 2, 'Rozmarra me cheezein sambhalna practical intelligence hai.'],
      ['Flynn effect kya hai?', ['IQ umar ke saath ghatta hai', 'Peedhi dar peedhi IQ scores ka badhna', 'Twins ka IQ same hona', 'Gifted bachchon ka safal hona'], 1, '20th century me kai deshon me IQ har dashak ~3 points badha.'],
      ['Iodized namak ka IQ se kya rishta hai?', ['Koi rishta nahi', 'Iodine ki kami se roke ja sakne wala brain damage hota hai; namak isse bachata hai', 'Namak IQ ghatata hai', 'Sirf adults par asar'], 1, 'Iodine ki kami preventable intellectual disability ka bada kaaran hai.'],
      ['Gardner ke model ki ek mukhya aalochana kya hai?', ['Isme sirf 2 intelligences hain', 'Ye saboot kam hai ki ye 8 sach me alag intelligences hain', 'Ye bahut purana hai', 'Ye sirf adults par hai'], 1, 'Kai researchers inhe talents maante hain aur independence ka saboot kamzor hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · 7.4-7.6 Intelligence', OS(7), 'book'],
      ['Crash Course Psychology: Controversy of Intelligence', YT('Crash Course Psychology controversy of intelligence'), 'video'],
      ['NCERT Class 12 Psychology · Chapter 1: Variations in Psychological Attributes', 'https://ncert.nic.in/textbook.php', 'book']
    ]
  });
})();
