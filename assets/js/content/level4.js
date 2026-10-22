/* Level 4 · Dil aur Safar · Motivation, Emotion, Stress */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 4.1 */
  C({
    id: 'motivation', level: 4, mins: 18, visual: 'maslow',
    visualCap: 'Maslow ka pyramid neeche se upar banta hai. Har level par tap karke real example dekho. (Aaj ka research kehta hai needs itni sakht seedhi me nahi chalti, par framework upyogi hai.)',
    title: 'Motivation: hum kyun karte hain jo karte hain',
    tag: 'Drives, arousal, Maslow, self-determination theory, bhookh ka science aur goals jo sach me poore hon',
    intro: '<b>Level 4 me swagat hai!</b> Level 3 me humne dimaag ki soch dekhi; ab dil ki baari hai: kya cheez humein chalati hai, hum kya mehsoos karte hain, aur zindagi bhar kaise badalte hain. Shuruaat motivation se, yaani wo sawaal jo har subah ka alarm poochhta hai: "uthein ya nahi?" Aaj ke aakhir tak tumhare paas ek aisa plan hoga jo goals ko sach me poora karne me madad kare.',
    hook: 'Ek hi class me ek student raat 2 baje tak coding seekhta hai bina kisi ke kahe, aur doosra marks ke darr se bhi kitaab nahi kholta. Ek hi insaan subah gym jaane ka plan banata hai aur alarm band karke so jaata hai. <b>Kya cheez humein chalati hai, aur kya rokti hai?</b>',
    blocks: [
      ['h', 'Motivation kya hai?'],
      ['p', '<b>Motivation</b> wo andruni process hai jo behaviour ko <b>shuru</b> karti hai, <b>disha</b> deti hai, aur <b>tikaaye</b> rakhti hai. Isme teen cheezein naapi jaati hain: activation (shuru karna), persistence (rukawat ke bawajood lage rehna) aur intensity (kitni taakat se).'],

      ['h', 'Motivation ki theories'],
      ['table', ['Theory', 'Mukhya idea', 'Example', 'Kamzori'], [
        ['Instinct theory (McDougall)', 'Behaviour janmajaat instincts se', 'Bachche ka doodh peena', 'Sirf naam dena ("social hai kyunki social instinct hai") explanation nahi'],
        ['Drive-reduction (Clark Hull)', 'Need → drive (bechaini) → behaviour → drive kam. Body <b>homeostasis</b> (santulan) chahti hai', 'Pyaas lagi → paani piya → bechaini khatam', 'Curiosity, roller coaster jaise "drive badhane wale" kaam nahi samjhata'],
        ['Arousal theory', 'Hum <b>optimal</b> level ki arousal chahte hain, na bahut kam na bahut zyada', 'Bore hokar phone uthana; zyada stress me shanti dhoondhna', 'Optimal level har vyakti ka alag'],
        ['Incentive theory', 'Bahar ke rewards behaviour ko <b>kheenchte</b> hain', 'Bonus ke liye overtime; dessert dekh kar bhookh na hote hue bhi khana', 'Andruni motivation ko kam aankti hai']
      ]],
      ['p', '<b>Yerkes-Dodson law</b> (1908): performance arousal ke saath badhti hai, ek point tak; uske baad zyada arousal performance girata hai (ulta U). <b>Aasaan</b> kaam me thoda zyada arousal theek hai, <b>mushkil</b> kaam (exam, nayi skill) me kam arousal behtar hai.'],
      ['vis', 'yerkes', 'Slider khiskao: arousal badhne par performance kaise badalti hai? Aasaan aur mushkil kaam ke liye curve alag hai.'],
      ['ex', 'Penalty shootout aur board exam', 'Practice me 10 me se 9 penalty goal karne wala player World Cup final me miss kar deta hai. Board exam me jo sawaal ghar par aate the, hall me "blank" ho jaate hain. Bahut zyada arousal working memory ko overload kar deti hai. Isliye exam se pehle ki raat jaagna (thakaan) aur 5 cup chai (over-arousal) dono nuksaan karte hain.'],

      ['teacher', 'Iska seedha upyog: exam se pehle ki ghabrahat ko zero karne ki koshish mat karo, bas use "medium" par lao. Thodi tension tumhe alert rakhti hai; problem sirf bahut zyada tension hai.'],
      ['h', 'Maslow ki hierarchy of needs (1943)'],
      ['steps', [
        ['Physiological', 'Khana, paani, neend, garmi. Bhookha insaan philosophy nahi sochta.'],
        ['Safety', 'Suraksha, ghar, naukri ki stability, sehat.'],
        ['Love aur belonging', 'Parivaar, dost, rishte, kisi group ka hissa hona.'],
        ['Esteem', 'Izzat, achievement, self-respect, pehchaan.'],
        ['Self-actualization', 'Apni poori potential tak pahunchna: "jo ban sakte ho, wo banna."']
      ]],
      ['p', 'Maslow ne baad me <b>self-transcendence</b> (khud se badi kisi cheez ke liye jeena) bhi joda. <b>Aalochana</b>: log hamesha neeche se upar nahi chalte; garib log bhi gehre rishte aur kala ko pehle rakhte hain, aur sainik apni safety se upar desh ko. Collectivist cultures me belonging aksar esteem se pehle hai. 2011 me Tay aur Diener ki 123 deshon ki study ne paaya ki ye needs duniya bhar me universal hain, par <b>sakht kram me</b> poori hone ki zaroorat nahi.'],

      ['h', 'Self-determination theory: andar ki aag'],
      ['p', 'Edward Deci aur Richard Ryan ki <b>self-determination theory (SDT)</b> kehti hai ki hamari teen buniyadi psychological needs hain. Jab ye poori hoti hain, <b>intrinsic motivation</b> (kaam ka khud ka maza) badhta hai:'],
      ['list', [
        '<b>Autonomy</b>: ye mehsoos karna ki kaam apni marzi se chuna hai, majboori me nahi.',
        '<b>Competence</b>: ye mehsoos karna ki is kaam me pakad badh rahi hai.',
        '<b>Relatedness</b>: doosron se juda hona, unki parwah aur unse parwah milna.'
      ]],
      ['compare', ['Intrinsic motivation', 'Kaam khud me mazedaar ya meaningful hai. Bachcha khud se drawing karta hai; tumhe guitar seekhne me shauk se maza aata hai. Zyada creativity, zyada lagan.'], ['Extrinsic motivation', 'Bahar ke reward ya punishment ke liye. Marks, paisa, taareef, saza ka darr. Upyogi, par reward hatte hi behaviour aksar ruk jaata hai.']],
      ['case', 'Overjustification effect (Lepper, Greene aur Nisbett, 1973)', 'Nursery ke jo bachche markers se drawing karna pasand karte the, unhe teen groups me baanta gaya. Ek group ko pehle se bataya ki drawing par "Good Player" certificate milega. Kuch hafton baad free time me <b>certificate wale group ne kam drawing ki</b>, baakiyon ke mukable. Jab pasandida kaam ke liye <b>controlling reward</b> diya jaata hai, to dimaag sochne lagta hai "ye to inaam ke liye tha", aur andar ki khushi ghat sakti hai.'],
      ['teacher', 'Apne baare me socho: koi aisa shauk tha jo tuition, competition ya marks se judne ke baad bojh lagne laga? Agar haan, to overjustification effect tumne khud jee kar dekha hai.'],
      ['ex', 'Har kitaab padhne par ₹50?', 'Agar bachcha pehle se kahaniyan pasand karta hai aur tum har kitaab par paise dena shuru karo, to padhna "naukri" ban sakta hai. Behtar: specific, informational taareef ("Tumne Tenali Raman ki kahani kitne mazedaar tareeke se sunayi!"), choice dena (kaunsi kitaab padhni hai), aur saath padhna (relatedness). Jo kaam pehle se boring hai, uske liye chhota reward shuru karne me madad kar sakta hai.'],

      ['h', 'Bhookh: sirf pet ki baat nahi'],
      ['list', [
        '<b>Biology</b>: khaali pet <b>ghrelin</b> hormone chhodta hai (bhookh badhao); fat cells <b>leptin</b> chhodti hain (bas, kaafi hai). <b>Hypothalamus</b> in signals ko jodta hai. Blood sugar aur insulin bhi role nibhate hain.',
        '<b>Set point</b>: body ek weight range ko "defend" karti hai; diet par metabolism dheema ho jaata hai, isliye wajan ghatana mushkil aur wapas aana aasaan.',
        '<b>Psychology</b>: khane ki khushboo, dekhna, time ("1 baj gaya, lunch time"), boredom, stress-eating.',
        '<b>Social aur culture</b>: dosto ke saath hum zyada khaate hain. Badi plate aur bade packet = zyada khana (<b>unit bias</b>).'
      ]],
      ['ex', '"Arre thoda aur lo, beta!"', 'Indian mehmaan-nawazi me "aur lo" ek pyaar ka tareeka hai, aur "na" kehna kai baar bad-tameezi lagta hai. Shaadi ke buffet me log 2-3 plate le lete hain jabki pet pehle hi bhar chuka hota hai. Ye dikhata hai ki khana sirf biological need nahi, social behaviour bhi hai. Chhoti plate, dheere khana aur pehle sabzi-salad jaise chhote badlaav kaam aate hain.'],

      ['h', 'Goals jo sach me poore hon'],
      ['p', 'Locke aur Latham ki <b>goal-setting theory</b> ke hisaab se <b>specific aur challenging</b> goals ("roz 30 minute, 20 maths sawaal") vague goals ("achhe se padhunga") se kahin behtar kaam karte hain, khaas kar feedback ke saath. David McClelland ne <b>need for achievement</b> ko ek alag motive bataya: kuch logon ko mushkil kaam me excellence ka khud ka maza aata hai.'],
      ['tip', [
        '<b>WOOP method</b> (Gabriele Oettingen, research-based): <b>W</b>ish (kya chahiye?), <b>O</b>utcome (poora hone par kaisa lagega?), <b>O</b>bstacle (mere andar ki sabse badi rukawat kya hai?), <b>P</b>lan ("Agar ___ hua, to ___ karna hai").',
        'Example: Wish: roz subah 30 minute padhai. Obstacle: alarm ke baad phone uthana. Plan: "Agar alarm baje, to phone uthaye bina seedha table par baithna hai; phone raat ko doosre kamre me charge hoga." Ye <b>implementation intentions</b> (Peter Gollwitzer) kai studies me goals poore karne ka chance badhate hain.'
      ]],
      ['teacher', 'Abhi 2 minute do aur apna ek WOOP likh daalo; sirf padhne se kaam nahi chalega. Obstacle wala hissa sabse zaroori hai, wahan poori imaandari rakhna.'],
      ['p', '<b>Sexual motivation</b> bhi biology (hormones), psychology aur culture ka mix hai. Psychology aur medicine ki mainstream samajh ye hai ki <b>sexual orientation</b> chunne ki cheez nahi aur koi disorder nahi; iske peeche biological aur environmental factors ka complex mel hai. India me Supreme Court ne 2018 me (Navtej Singh Johar case) consensual same-sex relationships ko apraadh ki shreni se bahar kiya.'],
      ['terms', [
        ['Motivation', 'Behaviour ko shuru karne, disha dene aur tikaaye rakhne wali process.'],
        ['Instinct', 'Janmajaat, unlearned behaviour pattern.'],
        ['Drive-reduction theory', 'Physiological need se paida bechaini (drive) ko kam karne ki koshish behaviour chalati hai, ye theory.'],
        ['Homeostasis', 'Body ka andruni santulan banaye rakhne ka jhukaav.'],
        ['Arousal theory', 'Hum optimal level ki arousal banaye rakhne ke liye motivated hote hain, ye theory.'],
        ['Yerkes-Dodson law', 'Performance arousal ke saath ek point tak badhti hai phir girti hai (ulta U).'],
        ['Incentive', 'Bahar ka positive ya negative stimulus jo behaviour ko kheenchta ya dhakelta hai.'],
        ['Hierarchy of needs', 'Maslow ka model: physiological se self-actualization tak needs ka pyramid.'],
        ['Self-actualization', 'Apni poori potential tak pahunchne ki need.'],
        ['Self-determination theory', 'Autonomy, competence aur relatedness ki needs intrinsic motivation badhati hain (Deci & Ryan).'],
        ['Intrinsic motivation', 'Kaam ko uske khud ke maze ya matlab ke liye karna.'],
        ['Extrinsic motivation', 'Bahar ke reward ya punishment ke liye kaam karna.'],
        ['Overjustification effect', 'Pasandida kaam par controlling reward dene se intrinsic motivation ghatna.'],
        ['Ghrelin', 'Pet se nikalne wala hormone jo bhookh badhata hai.'],
        ['Leptin', 'Fat cells ka hormone jo pet bharne (satiety) ka signal deta hai.'],
        ['Set point', 'Wo weight range jise body defend karne ki koshish karti hai.'],
        ['Need for achievement', 'Mushkil kaam me excellence paane ki khwahish (McClelland).'],
        ['Implementation intention', '"Agar X, to Y karna hai" jaisa specific plan.']
      ]]
    ],
    outro: 'Saar: motivation andar aur bahar dono se aati hai, aur autonomy, competence aur relatedness milein to andar ki aag tiki rehti hai. Quiz do, aur apna WOOP plan kal subah hi test karo. Agle chapter me motivation ke saathi, emotions, ki baat: darr pehle aata hai ya dil ki dhadkan?',
    takeaways: [
      'Motivation behaviour ko shuru, disha aur tikaav deti hai.',
      'Yerkes-Dodson: medium arousal best; mushkil kaam me kam arousal behtar.',
      'Maslow ka pyramid upyogi framework hai, par needs sakht kram me nahi chalti.',
      'Autonomy, competence, relatedness se intrinsic motivation badhti hai; controlling rewards use ghata sakte hain.',
      'Specific goals + "agar-to" plans (WOOP) goals poore karne ka chance badhate hain.'
    ],
    quiz: [
      ['Pyaas lagne par paani peena aur bechaini ka khatam hona kis theory se samjhaya jaata hai?', ['Arousal theory', 'Drive-reduction theory', 'Incentive theory', 'Instinct theory'], 1, 'Need → drive → behaviour → drive reduction.'],
      ['Yerkes-Dodson law ke hisaab se mushkil exam ke liye kaunsi arousal best hai?', ['Bahut zyada', 'Bahut kam (neend jaisi)', 'Medium-se-kam', 'Arousal ka koi asar nahi'], 2, 'Mushkil kaam me optimal arousal kam hoti hai; zyada arousal performance girati hai.'],
      ['Maslow ke pyramid me sabse upar kya hai?', ['Esteem', 'Safety', 'Self-actualization', 'Love/belonging'], 2, 'Self-actualization pyramid ki choti par hai.'],
      ['Self-determination theory ki teen needs kaunsi hain?', ['Khana, paani, neend', 'Autonomy, competence, relatedness', 'Paisa, power, fame', 'Id, ego, superego'], 1, 'Deci aur Ryan ke hisaab se ye teen needs intrinsic motivation ko poshit karti hain.'],
      ['Drawing pasand karne wale bachchon ko certificate dene ke baad unhone kam drawing ki. Ye kya hai?', ['Overjustification effect', 'Learned helplessness', 'Drive reduction', 'Homeostasis'], 0, 'Controlling external reward ne intrinsic motivation ghata di.'],
      ['Kaunsa hormone bhookh badhata hai?', ['Leptin', 'Ghrelin', 'Melatonin', 'Oxytocin'], 1, 'Ghrelin pet se nikal kar bhookh ka signal deta hai; leptin satiety ka.'],
      ['"Agar alarm baje, to seedha table par baithna hai" jaisa plan kya kehlata hai?', ['Implementation intention', 'Drive', 'Incentive', 'Self-actualization'], 0, 'Specific "agar-to" plan implementation intention hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 10: Emotion and Motivation', OS(10), 'book'],
      ['Drive (Daniel Pink) · intrinsic motivation par popular book', GR('Drive Daniel Pink'), 'book'],
      ['Crash Course Psychology: Motivation', YT('Crash Course Psychology motivation'), 'video']
    ]
  });

  /* 4.2 */
  C({
    id: 'emotion', level: 4, mins: 18, visual: 'emotionTheories',
    visualCap: 'Emotion ki chaar mukhya theories, ek hi situation (trek par saanp) par. Har tab par tap karke dekho ki kram kaise badalta hai.',
    title: 'Emotion: dil ki baat ka science',
    tag: 'James-Lange se appraisal tak, universal expressions, rasa theory, aur emotions ko sambhalne ke tested tareeke',
    intro: 'Pichhle chapter me dekha ki hum kyun karte hain jo karte hain; aaj dekhenge ki hum <b>kya mehsoos</b> karte hain aur kyun. Gussa, darr, khushi, jalan: ye sab roz tumhare andar aate-jaate hain, par inka science kam log jaante hain. Aaj ke aakhir tak emotions sambhalne ke do-teen tested tareeke tumhari jeb me honge.',
    hook: 'Trek par achanak saanp dikha. Dil dhadakne laga, pair wahin jam gaye, aur darr laga. Par <b>pehle kya hua</b>? Darr laga isliye dil dhadka, ya dil dhadka isliye darr laga? Ye sawaal 130 saal se psychologists ko pareshaan kar raha hai.',
    blocks: [
      ['h', 'Emotion ke teen hisse'],
      ['list', [
        '<b>Physiological arousal</b>: body ka response (dil tez, pasina, pet me gadbad).',
        '<b>Expressive behaviour</b>: chehra, awaaz, body language (aankhein phailna, cheekhna).',
        '<b>Conscious experience</b>: andar ka ehsaas aur uski samajh ("mujhe darr lag raha hai").'
      ]],
      ['h', 'Emotion ki theories'],
      ['table', ['Theory', 'Kram', 'Ek line me'], [
        ['James-Lange (1880s)', 'Saanp → body kaanpi → "main darr gaya"', 'Hum darte hain <b>kyunki</b> kaanpte hain. Body pehle, emotion baad me.'],
        ['Cannon-Bard (1920s)', 'Saanp → body + darr <b>ek saath</b>', 'Thalamus ek saath body aur cortex dono ko signal bhejta hai.'],
        ['Schachter-Singer two-factor (1962)', 'Saanp → arousal + "ye khatra hai" label → darr', 'Emotion = arousal + cognitive label. Same arousal alag label se alag emotion.'],
        ['Lazarus appraisal', 'Saanp → "kya ye khatarnak hai?" (appraisal) → darr + arousal', 'Situation ka matlab nikalna emotion ko tay karta hai, aksar pal bhar me, bina jaane.']
      ]],
      ['teacher', 'Ruko, chaar theories ek saath confuse karti hain, to ek trick suno: <b>James-Lange</b> = body pehle, <b>Cannon-Bard</b> = ek saath, <b>Schachter-Singer</b> = body + label, <b>Lazarus</b> = matlab pehle. Har theory par saanp wala example chala kar dekho, kram apne aap baith jaayega.'],
      ['case', 'Adrenaline ka experiment (Schachter aur Singer, 1962)', [
        'Participants ko "vitamin" bata kar adrenaline ka injection diya gaya (dil tez, haath kaanpna). Kuch ko sach bataya gaya ki ye side effects honge, kuch ko nahi. Phir unhe ek actor ke saath waiting room me bithaya gaya jo ya to bahut khush ("euphoric") tha ya gusse me.',
        'Jinhe side effects ka pata nahi tha, wo apni arousal ko actor ke mood ke hisaab se label karne lage: khush actor ke saath zyada khush, gussail ke saath zyada gussail. Jinhe pata tha, unhone arousal ko injection ka asar maana. (Baad ki replications me results utne saaf nahi aaye, par "arousal ko label karna" ka idea bahut influential raha.)'
      ]],
      ['case', 'Darawna pul aur "pyaar" (Dutton aur Aron, 1974)', 'Canada me ek ladki interviewer ne purushon se survey bharwaya aur apna phone number diya. Jo purush ek <b>hilte, oonche suspension bridge</b> par mile, unme se lagbhag 50% ne baad me call kiya; ek <b>neeche, mazboot pul</b> par mile purushon me sirf ~12%. Darr ki arousal ko kuch logon ne <b>attraction</b> samajh liya: <b>misattribution of arousal</b>. Isliye horror movie date ka "secret weapon" maani jaati hai!'],
      ['p', '<b>Do raaste</b>: neuroscientist Joseph LeDoux ne dikhaya ki khatre ka signal thalamus se <b>seedha amygdala</b> tak bhi jaata hai ("low road", tez par rough), aur cortex se hokar bhi ("high road", dheema par detailed). Isliye rassi dekh kar pehle uchhal jaate ho, phir cortex batata hai "arre, rassi hai". Emotion kabhi-kabhi soch se pehle aata hai.'],

      ['h', 'Kya chehre ke expressions universal hain?'],
      ['p', 'Psychologist <b>Paul Ekman</b> ne Papua New Guinea ke Fore logon par research ki jo bahar ki duniya, films ya photos se lagbhag anjaan the. Wo khushi, dukh, gussa, darr, hairani aur ghin (disgust) ke chehre pehchaan paaye. Isse <b>6 basic emotions</b> ka idea aaya jo cultures ke paar pehchaane jaate hain. (Aaj kuch researchers kehte hain ki pehchaan utni universal nahi jitni pehle sochi gayi, aur context bahut matter karta hai.)'],
      ['p', 'Par <b>display rules</b> culture ke hisaab se alag hain: kab, kahan aur kitna emotion dikhana theek hai. Ekman aur Friesen ki ek study me Japanese students ne akele me Americans jaise hi expressions dikhaye, par ek authority figure ke saamne negative expressions ko muskaan se chhupa liya. India me bhi bado ke saamne gussa dikhana ya ladkon ka rona aksar "theek nahi" maana jaata hai.'],
      ['teacher', 'Apne ghar ke display rules socho: kaunsa emotion dikhane par daant padti thi, aur kaunsa dikhane par taareef milti thi? Ye niyam hum sab bina likhe seekh lete hain.'],
      ['ex', 'Natya Shastra ke nau rasa', 'Lagbhag do hazaar saal purane <b>Natya Shastra</b> (Bharata Muni) me natak ke liye emotions ka classification hai: shringar (prem), hasya (hasi), karuna (dukh), raudra (krodh), veer (utsaah), bhayanak (bhay), bibhatsa (ghin), adbhut (vismay), aur baad me joda gaya shaant. Ekman ki list (khushi, dukh, gussa, darr, ghin, hairani) se iska mel dilchasp hai. Ye dikhata hai ki emotions ko samjhane ki koshish bahut purani aur cross-cultural hai.'],
      ['p', '<b>Facial feedback hypothesis</b>: chehre ka expression feeling ko thoda badal sakta hai. 1988 ki mashhoor "daanton me pen" study (muskaan jaisa chehra → cartoons zyada funny) ko 2016 me 17 labs ne dohraya aur effect nahi mila. Phir 2022 me "Many Smiles Collaboration" ne 19 deshon me chhota sa effect paaya. Ye <b>replication</b> ki achhi kahani hai: science dheere-dheere sahi jawab ki taraf jaata hai.'],

      ['h', 'Khushi ka science (thoda sa)'],
      ['list', [
        '<b>Hedonic adaptation</b>: nayi bike, naya phone, salary hike: khushi kuch hafton-mahino me "normal" ho jaati hai. Hum nayi baseline ke aadi ho jaate hain.',
        '<b>Relative deprivation</b>: hum apni haalat doosron se compare karke judge karte hain. Instagram par sabki "highlight reel" dekh kar apni zindagi feeki lagti hai.',
        '<b>Paisa aur khushi</b>: garibi se nikalna khushi me bada farak laata hai. Upar ki income par bhi khushi badhti rehti hai par dheere-dheere. Paisa jab experiences, doosron par kharch aur time bachane me lagta hai, to zyada khushi deta hai.'
      ]],

      ['h', 'Emotions ko sambhalna: emotion regulation'],
      ['p', 'James Gross ke model ke hisaab se hum emotion ko alag-alag stage par sambhal sakte hain: situation chunna (party me us vyakti se door baithna), situation badalna, dhyan hataana, <b>matlab badalna (cognitive reappraisal)</b>, aur response ko dabana (suppression).'],
      ['compare', ['Cognitive reappraisal', 'Situation ko alag nazar se dekhna: "Boss ne daanta kyunki wo khud pressure me hai, ye meri value ka faisla nahi." Research me ye negative emotion kam karta hai aur long-term achha hai.'], ['Expressive suppression', 'Andar ubalte hue bahar se chehra shaant rakhna. Thodi der ke liye zaroori ho sakta hai, par lagataar karne se stress badhta hai aur rishton me doori aati hai.']],
      ['tip', [
        '<b>Name it to tame it</b>: emotion ko shabd dena ("mujhe abhi gussa aur thodi sharam mehsoos ho rahi hai"). UCLA ki research (Lieberman aur saathi, 2007) me emotion ko label karne se amygdala ki activity kam dikhi. Jitna specific shabd (sirf "bura" ki jagah "nirasha" ya "jalan"), utna behtar.',
        '<b>Ghabrahat ko excitement bolo</b>: Alison Wood Brooks (2014) ki studies me presentation ya gaane se pehle "I am excited" bolne walon ne "calm down" ki koshish karne walon se behtar perform kiya. Dono me body ki arousal same hai; label alag hai.'
      ]],
      ['teacher', 'Aaj raat ek chhota experiment: din ka sabse bada emotion ek specific shabd me likho. "Bura laga" nahi, balki "insult jaisa laga" ya "akelapan". Ye chhoti aadat bahut door tak jaati hai.'],
      ['myth', 'Emotions ya to "achhe" hote hain ya "bure"; bure emotions ko dabana hi theek hai.', 'Har emotion ka kaam hai: darr khatre se bachata hai, gussa nainsaafi ki taraf dhyan dilata hai, dukh hamein madad maangne aur sochne ko kehta hai. Problem emotion nahi, uski intensity, duration aur hum uske saath kya karte hain, wo hai. Dabane ki jagah samajhna aur reappraise karna zyada kaam karta hai.'],
      ['terms', [
        ['Emotion', 'Physiological arousal, expressive behaviour aur conscious experience ka mel.'],
        ['James-Lange theory', 'Body ka response pehle aata hai aur usse emotion paida hota hai.'],
        ['Cannon-Bard theory', 'Body ka response aur emotion ek saath, alag-alag hote hain.'],
        ['Two-factor theory', 'Emotion = physiological arousal + cognitive label (Schachter-Singer).'],
        ['Cognitive appraisal', 'Situation ka matlab aur mahatva judge karna jo emotion ko tay karta hai (Lazarus).'],
        ['Misattribution of arousal', 'Arousal ke asli kaaran ko galat cheez se jod dena.'],
        ['Basic emotions', 'Wo emotions jo cultures ke paar pehchaane jaate hain (Ekman ke 6).'],
        ['Display rules', 'Culture ke niyam ki kab aur kaise emotion dikhana theek hai.'],
        ['Facial feedback hypothesis', 'Chehre ke expression se emotional anubhav ka thoda badalna.'],
        ['Hedonic adaptation', 'Achhe ya bure badlav ke baad khushi ka purane level par laut aana.'],
        ['Relative deprivation', 'Doosron se tulna karke khud ko kam mehsoos karna.'],
        ['Emotion regulation', 'Apne emotions ko samajhne aur badalne ki processes.'],
        ['Cognitive reappraisal', 'Situation ka matlab badal kar emotion ko badalna.'],
        ['Expressive suppression', 'Emotion ka bahar ka expression dabana.'],
        ['Affect labeling', 'Emotion ko shabd dena, jo uski intensity kam kar sakta hai.']
      ]],
      ['think', 'Ek hi rollercoaster ride ke baad ek dost kehta hai "kitna mazaa aaya!" aur doosra "kabhi nahi dobara!". Body ka arousal to dono ka same tha. Farak kahan hai?', [
        'Two-factor aur appraisal theories ke hisaab se farak <b>interpretation</b> me hai. Ek ne arousal ko "thrill" label kiya, doosre ne "khatra". Pichhle anubhav, control ka ehsaas, aur personality (sensation seeking) is label ko shape karte hain.'
      ]]
    ],
    outro: 'Saar: emotion body, expression aur samajh ka mel hai, aur label badalne se feeling bhi badal sakti hai. Quiz do, phir agle chapter me chalte hain us haalat me jab emotions lambe samay tak "alarm mode" me atak jaate hain: stress.',
    takeaways: [
      'Emotion = body ka arousal + expression + conscious experience.',
      'James-Lange (body pehle), Cannon-Bard (ek saath), two-factor (arousal + label), appraisal (matlab pehle).',
      'Basic expressions kaafi universal hain; display rules culture se badalte hain.',
      'Hedonic adaptation ki wajah se nayi cheezon ki khushi jaldi fiki hoti hai.',
      'Reappraisal aur affect labeling emotions sambhalne ke tested tareeke hain; suppression mehenga hai.'
    ],
    quiz: [
      ['"Hum darte hain kyunki kaanpte hain" kis theory ka vichar hai?', ['Cannon-Bard', 'James-Lange', 'Schachter-Singer', 'Lazarus'], 1, 'James-Lange ke hisaab se body ka response pehle aata hai.'],
      ['Schachter-Singer theory ke hisaab se emotion ke do factor kya hain?', ['Genes aur environment', 'Arousal aur cognitive label', 'Id aur ego', 'Thalamus aur cortex'], 1, 'Two-factor theory: arousal + uska label.'],
      ['Hilte pul par mile purushon ne interviewer ko zyada call kiya. Ye kis concept ka example hai?', ['Display rules', 'Misattribution of arousal', 'Hedonic adaptation', 'Facial feedback'], 1, 'Darr ki arousal ko attraction samajh liya gaya.'],
      ['Japanese students ne authority ke saamne negative expressions chhupaye. Ye kya dikhata hai?', ['Emotions universal nahi', 'Display rules', 'Two-factor theory', 'Overjustification'], 1, 'Culture ke niyam tay karte hain ki emotion kab dikhana theek hai.'],
      ['Nayi bike ki khushi kuch mahino me normal ho jaati hai. Ye kya hai?', ['Relative deprivation', 'Hedonic adaptation', 'Reappraisal', 'Catharsis'], 1, 'Hum nayi baseline ke aadi ho jaate hain.'],
      ['Long-term ke liye kaunsi emotion regulation strategy zyada healthy maani jaati hai?', ['Expressive suppression', 'Cognitive reappraisal', 'Venting (takiya peetna)', 'Emotions ko ignore karna'], 1, 'Reappraisal negative emotion ghatati hai aur suppression jaise costs nahi rakhti.']
    ],
    more: [
      ['OpenStax Psychology 2e · 10.4 Emotion', OS(10), 'book'],
      ['Crash Course Psychology: Feeling All the Feels', YT('Crash Course Psychology emotion feeling all the feels'), 'video'],
      ['Emotions Revealed (Paul Ekman)', GR('Emotions Revealed Paul Ekman'), 'book']
    ]
  });

  /* 4.3 */
  C({
    id: 'stress-coping', level: 4, mins: 18, visual: 'gas',
    visualCap: 'Selye ka General Adaptation Syndrome: alarm (jhatka), resistance (jhoojhna), aur agar stress khatam na ho to exhaustion (thakaan, beemari).',
    title: 'Stress, health aur coping',
    tag: 'Stressors, appraisal, GAS, immune system par asar, burnout, aur science-backed coping toolkit',
    intro: 'Pichhle chapter me emotions ko samjha; aaj unka sabse thakaane wala roop dekhte hain: stress. Exam, deadline, ghar ki tension, inme se kuch na kuch tumne bhi jhela hoga. Aaj ka goal stress ko khatam karna nahi, balki use samajhna aur apni ek coping toolkit banana hai.',
    hook: 'Exam, traffic, EMI, ghar me jhagda, deadline, notifications. Stress ko hum dushman maante hain, par thoda stress hi humein subah uthata aur deadline par kaam karwata hai. Problem tab hai jab <b>alarm kabhi band hi na ho</b>.',
    blocks: [
      ['h', 'Stress kya hai?'],
      ['p', '<b>Stress</b> wo process hai jisme hum kisi ghatna (<b>stressor</b>) ko apne liye khatra ya challenge maante hain aur body-mind usse react karte hain. Dhyan do: stress sirf ghatna me nahi, <b>ghatna aur hamari samajh</b> ke beech me hai.'],
      ['table', ['Stressor ka type', 'Example'], [
        ['Catastrophes', 'Baadh, bhookamp, pandemic, aatankwadi hamla'],
        ['Badi life changes', 'Kisi apne ki maut, shaadi, naya sheher, naukri jaana. Holmes aur Rahe (1967) ki scale me jeevansaathi ki maut sabse oopar (100), talaak 73, shaadi 50: achhi ghatnayein bhi stress deti hain'],
        ['Daily hassles', 'Traffic jam, net slow, line me khade rehna, chhote jhagde. Richard Lazarus ki research me ye chhote roz ke stress health ko badi ghatnaon jitna ya zyada predict karte the'],
        ['Chronic stress', 'Garibi, lambi beemari me dekhbhaal, bhedbhaav, ghar me lagataar tension: lambe samay tak chalne wala stress sabse nuksaandeh']
      ]],
      ['h', 'Appraisal: khatra ya challenge?'],
      ['p', 'Richard Lazarus ke hisaab se hum do sawaal poochhte hain: <b>Primary appraisal</b>: "Kya ye mere liye khatra hai, challenge hai, ya koi farak nahi padta?" <b>Secondary appraisal</b>: "Kya mere paas iska saamna karne ke resources hain?" Ek hi presentation ek ke liye "mauka" (challenge) aur doosre ke liye "barbaadi" (threat) ho sakti hai. Challenge appraisal me body ka response zyada healthy hota hai (dil efficiently pump karta hai), threat me zyada nuksaandeh.'],

      ['teacher', 'Ek baat note karo: stressor hamesha badla nahi ja sakta, par appraisal ko thoda badalna mumkin hai. "Ye mera imtihaan hai" ki jagah "ye meri practice hai" kehna chhota lagta hai, par body ka response sach me badalta hai.'],
      ['h', 'Body ka stress response'],
      ['p', 'Walter Cannon ne <b>fight-or-flight</b> naam diya (Chapter 2.2). Hans Selye ne chooho par research karke dekha ki alag-alag stressors (thand, zehar, chot) body me ek jaisa pattern paida karte hain, jise unhone <b>General Adaptation Syndrome (GAS)</b> kaha:'],
      ['steps', [
        ['Alarm reaction', 'Jhatka! Sympathetic system aur adrenaline turant activate. Body thodi der ke liye kamzor, phir energy mobilize.'],
        ['Resistance', 'Body stressor se jhoojhti hai: cortisol ooncha, energy high, par andar resources kharch ho rahe hain.'],
        ['Exhaustion', 'Agar stress mahino chale, resources khatam: thakaan, beemari, depression ka risk.']
      ]],
      ['p', 'Psychologist Shelley Taylor (2000) ne kaha ki "fight-or-flight" ke alawa ek aur response hai: <b>tend-and-befriend</b>: stress me apno ki dekhbhaal karna aur support dhoondhna, jo oxytocin se juda hai aur mahilaon me khaas taur par dikhta hai.'],

      ['h', 'Stress aur sehat'],
      ['p', '<b>Psychoneuroimmunology</b> wo field hai jo dekhti hai ki mind, nervous system aur immune system kaise jude hain. Kuch mashhoor nateeje:'],
      ['list', [
        'Sheldon Cohen (1991): volunteers ki naak me jaanbujh kar cold virus daala gaya. <b>Zyada stress</b> report karne walon me zukaam hone ka chance kaafi zyada tha.',
        'Kiecolt-Glaser (1995): Alzheimer\'s patients ki dekhbhaal karne wali mahilaon (chronic stress) ke chhote zakhm doosron se lagbhag <b>9 din (24%) zyada</b> der me bhare.',
        'Dil ki beemari: "Type A" personality (jaldbaaz, competitive) par purani research thi; baad me pata chala ki asli khatarnak hissa <b>hostility</b> (lagataar gussa aur shak) hai.',
        'Lamba stress neend, digestion (acidity, IBS), blood pressure aur mental health sab par asar daalta hai.'
      ]],

      ['teacher', 'Apni pichhli exam ki raat yaad karo: kya exam ke theek baad zukaam ya bukhaar pakad liya tha? Kai students ke saath hota hai, aur ab tumhe pata hai kyun.'],
      ['h', 'Coping: stress se kaise niptein'],
      ['compare', ['Problem-focused coping', 'Problem ko hi badalna: study plan banana, boss se baat karna, budget banana. Tab best jab situation par kuch control ho.'], ['Emotion-focused coping', 'Apne emotional response ko sambhalna: dost se baat, exercise, meditation, reappraisal. Tab zaroori jab situation badal na sake (kisi ki maut, beemari ka result).']],
      ['table', ['Strategy', 'Kyun kaam karti hai'], [
        ['Exercise', 'Stress hormones kam, mood behtar, neend achhi. 20-30 minute ki brisk walk bhi kaam ki.'],
        ['Social support', 'Holt-Lunstad (2010) ke meta-analysis me mazboot social rishton wale logon me survival ka chance ~50% zyada tha. Dost aur parivaar sach me "dawai" hain.'],
        ['Slow breathing aur relaxation', 'Parasympathetic system on karta hai (neeche ka lab try karo).'],
        ['Mindfulness', 'Jon Kabat-Zinn ka MBSR program; research me stress aur anxiety me moderate kami.'],
        ['Perceived control', 'Jo control me hai uski list banana; control ka ehsaas stress ka asar ghatata hai.'],
        ['Neend', 'Thaka dimaag har cheez ko zyada khatarnak judge karta hai.'],
        ['Humour aur meaning', 'Hasi tension todti hai; dharm/spirituality kai logon ko matlab aur community deti hai.']
      ]],
      ['note', '<b>Maladaptive coping</b> thodi der rahat deta hai par problem badhata hai: avoidance (kaam taalna), sharaab ya nasha, binge eating, raat bhar scrolling, doosron par gussa nikaalna.'],
      ['lab', 'breathing'],
      ['ex', 'Board exam se pehle ek coping plan', [
        '<b>Problem-focused</b>: syllabus ko 30 din me baanto, roz ka chhota target, purane papers se active recall.',
        '<b>Emotion-focused</b>: roz 20 minute walk ya khel, raat ko 7-8 ghante neend, ek dost/bade se weekly baat, ghabrahat aaye to 4-6 breathing.',
        '<b>Appraisal badlo</b>: "Ye exam meri poori zindagi tay karega" → "Ye ek important exam hai; mere paas aage bhi raaste hain." Sach bhi yahi hai.'
      ]],

      ['teacher', 'Ab ise apne liye bharo: abhi tumhara sabse bada stressor kya hai, aur uske liye ek problem-focused aur ek emotion-focused kadam kya hoga? Likh lo; sirf dimaag me rakhne se kaam nahi chalega.'],
      ['h', 'Resilience aur burnout'],
      ['p', '<b>Resilience</b> mushkil se ubharne ki kshamta hai. Psychologist Ann Masten ise "ordinary magic" kehti hain: ye koi rare superpower nahi, balki aam cheezon se banti hai: ek bharosemand rishta, problem-solving skills, apne upar kuch control ka ehsaas, aur ummeed. Kai log mushkil ke baad <b>post-traumatic growth</b> bhi bataate hain: rishton aur zindagi ki nayi qadar.'],
      ['p', '<b>Burnout</b> ko WHO ki ICD-11 me ek "occupational phenomenon" maana gaya hai (beemari nahi): lagataar workplace stress se (1) gehri thakaan, (2) kaam se mental doori ya cynicism, aur (3) kam efficiency ka ehsaas. Students me bhi "academic burnout" dikhta hai, khaas kar lambi coaching aur competitive exam culture me.'],
      ['note', 'Agar stress itna hai ki neend, khana, padhai/kaam ya rishte hafton se prabhavit hain, ya mann me khud ko nuksaan pahunchane ke vichaar aate hain, to akele mat jhelo. <b>Tele-MANAS: 14416</b> (24x7, free, kai bhashaon me) par turant baat kar sakte ho.'],
      ['terms', [
        ['Stress', 'Ghatnaon ko khatra/challenge samajhne aur uspar react karne ki process.'],
        ['Stressor', 'Wo ghatna ya situation jo stress paida kare.'],
        ['Daily hassles', 'Rozmarra ki chhoti-chhoti pareshaniyan.'],
        ['Primary appraisal', 'Ghatna khatra hai, challenge hai ya irrelevant, ye judge karna.'],
        ['Secondary appraisal', 'Saamna karne ke resources ka andaza lagana.'],
        ['General Adaptation Syndrome', 'Selye ka model: alarm, resistance, exhaustion.'],
        ['Tend-and-befriend', 'Stress me doosron ki dekhbhaal aur support dhoondhne ka response.'],
        ['Psychoneuroimmunology', 'Mind, nervous system aur immune system ke rishte ka study.'],
        ['Type A personality', 'Jaldbaaz, competitive pattern; iska hostility hissa dil ki beemari se juda.'],
        ['Problem-focused coping', 'Stressor ko seedha badalne ki koshish.'],
        ['Emotion-focused coping', 'Stressor ke emotional asar ko sambhalna.'],
        ['Social support', 'Doosron se milne wali emotional aur practical madad.'],
        ['Resilience', 'Mushkil ke baad sambhalne aur ubharne ki kshamta.'],
        ['Post-traumatic growth', 'Trauma ke baad positive psychological badlav.'],
        ['Burnout', 'Lambe workplace stress se thakaan, cynicism aur kam efficiency.']
      ]]
    ],
    outro: 'Saar: stress = stressor + hamari samajh; lamba stress body ko thakata hai, par coping aur support use kaafi had tak sambhal lete hain. Quiz do, aur yaad rakhna, madad maangna kamzori nahi, samajhdari hai. Agle chapter me safar bilkul shuru se shuru karenge: ek bachcha kaise bada hota hai, yaani child development.',
    takeaways: [
      'Stress = stressor + hamari appraisal; chhote daily hassles bhi sehat par bada asar daalte hain.',
      'GAS: alarm, resistance, exhaustion; lamba stress body ko thaka deta hai.',
      'Chronic stress immunity ghatata hai (zukaam, dheere bharte zakhm).',
      'Problem-focused aur emotion-focused coping dono ki zaroorat hai; social support sabse powerful.',
      'Resilience aam cheezon se banti hai; zaroorat ho to help maango (Tele-MANAS 14416).'
    ],
    quiz: [
      ['Selye ke GAS ke teen stages ka sahi kram?', ['Resistance, alarm, exhaustion', 'Alarm, resistance, exhaustion', 'Exhaustion, alarm, resistance', 'Alarm, exhaustion, recovery'], 1, 'Pehle alarm, phir resistance, aur lamba stress ho to exhaustion.'],
      ['"Kya mere paas iska saamna karne ke resources hain?" ye kaunsa appraisal hai?', ['Primary', 'Secondary', 'Tertiary', 'Reappraisal'], 1, 'Secondary appraisal coping resources ko judge karta hai.'],
      ['Kisi apne ki maut jaise na badalne wale stressor ke liye kaunsi coping zyada upyogi hai?', ['Problem-focused', 'Emotion-focused', 'Avoidance', 'Denial'], 1, 'Jab situation badal na sake, emotional response sambhalna zaroori hai.'],
      ['Cohen ki cold virus study ne kya dikhaya?', ['Virus stress paida karta hai', 'Zyada stress wale logon ko zukaam ka chance zyada', 'Stress immunity badhata hai', 'Zukaam se IQ girta hai'], 1, 'Stress aur immune function ka rishta psychoneuroimmunology ka classic saboot hai.'],
      ['Type A personality ka kaunsa hissa dil ki beemari se sabse zyada juda paaya gaya?', ['Jaldbaazi', 'Competitiveness', 'Hostility', 'Mehnat'], 2, 'Baad ki research me hostility asli risk factor nikla.'],
      ['WHO ki ICD-11 me burnout ko kya maana gaya hai?', ['Mental disorder', 'Occupational phenomenon', 'Personality trait', 'Physical disease'], 1, 'Burnout ko workplace se juda phenomenon maana gaya hai, beemari nahi.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 14: Stress, Lifestyle, and Health', OS(14), 'book'],
      ['Crash Course Psychology: Emotion, Stress and Health', YT('Crash Course Psychology emotion stress health'), 'video'],
      ['Tele-MANAS (Government of India mental health helpline)', 'https://telemanas.mohfw.gov.in', 'link']
    ]
  });
})();
