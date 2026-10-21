/* Level 5 · Samaaj aur Hum · Social Psychology (part 1) */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 5.1 */
  C({
    id: 'social-cognition', level: 5, mins: 17, visual: 'attribution',
    visualCap: 'Ek hi ghatna, do explanations. Toggle karo: jab doosra kare tab hum kya sochte hain, aur jab hum khud karein tab.',
    title: 'Social cognition: hum doosron ko kaise judge karte hain',
    tag: 'First impressions, halo effect, attribution, fundamental attribution error (aur Indian research), self-serving bias aur self-fulfilling prophecy',
    hook: 'Exam hall me ek student 15 minute der se aaya. Aapne kya socha: <b>"kitna laaparwah hai"</b> ya <b>"shayad traffic me phansa hoga"</b>? Aur jab <b>aap</b> khud der se pahunchte ho, tab aap kya kehte ho? Is chhote se farak me social psychology ka ek bada raaz chhupa hai.',
    blocks: [
      ['h', 'Social psychology kya hai?'],
      ['p', 'Gordon Allport ke shabdon me social psychology ye study karti hai ki hamare vichaar, feelings aur behaviour <b>doosron ki asli, kalpit ya maani hui maujoodgi</b> se kaise prabhavit hote hain. Level 5 me hum dekhenge ki hum doosron ke baare me kaise sochte hain (social cognition), wo humein kaise badalte hain (social influence), aur hum unse kaise judte ya ladte hain (social relations).'],

      ['h', 'First impressions'],
      ['list', [
        '<b>Thin slicing</b>: Ambady aur Rosenthal (1993) ne students ko teachers ki <b>30 second ki bina awaaz</b> wali video dikhayi. Unki ratings poore semester ke baad ke students ke evaluations se kaafi milti-julti nikli. Hum bahut kam information se bahut jaldi judge kar lete hain.',
        '<b>Halo effect</b>: ek achhi quality (jaise achha dikhna) se baaki qualities bhi achhi maan lena: "smart, honest, talented bhi hoga". Isliye interviews me achhe kapde aur aatmavishwas itna asar daalte hain.',
        '<b>Primacy effect</b>: pehli information baad wali se zyada asar daalti hai.'
      ]],
      ['case', 'Ek hi shabd, alag order (Solomon Asch, 1946)', 'Ek group ko kisi vyakti ka description diya: "intelligent, mehnati, impulsive, critical, ziddi, jalne wala". Doosre group ko <b>bilkul wahi shabd ulte order</b> me: "jalne wala, ziddi, critical, impulsive, mehnati, intelligent". Pehle group ne vyakti ko kaafi zyada positive judge kiya. Pehle shabd ne baaki shabdon ke "matlab" ko rang diya.'],

      ['h', 'Attribution: "kyun kiya?"'],
      ['p', 'Fritz Heider ne kaha ki hum sab "naive scientist" hain jo behaviour ke kaaran dhoondhte hain. Do tarah ke explanations:'],
      ['compare', ['Internal (dispositional)', 'Kaaran vyakti ke andar: personality, ability, irada. "Wo der se aaya kyunki <b>laaparwah</b> hai."'], ['External (situational)', 'Kaaran situation me: halaat, kismat, doosre log. "Wo der se aaya kyunki <b>metro band</b> thi."']],
      ['p', 'Harold Kelley ka <b>covariation model</b> teen sawaal poochhta hai. Maan lo Rahul ek stand-up comedian par bahut hansa:'],
      ['table', ['Sawaal', 'Matlab', 'Agar HIGH hai'], [
        ['Consensus', 'Kya baaki log bhi us comedian par hanse?', 'Haan → comedian sach me funny (external)'],
        ['Distinctiveness', 'Kya Rahul sirf is comedian par hansta hai, sab par nahi?', 'Haan → comedian ki wajah se (external)'],
        ['Consistency', 'Kya Rahul har baar is comedian par hansta hai?', 'Haan → ye stable pattern hai']
      ]],
      ['p', 'Low consensus + low distinctiveness + high consistency (sirf Rahul hansta hai, har comedian par, har baar) → "Rahul hi bahut jaldi hansne wala insaan hai" (internal).'],

      ['h', 'Fundamental attribution error'],
      ['p', 'Hum doosron ke behaviour ko samjhate waqt <b>personality ko zyada</b> aur <b>situation ko kam</b> weight dete hain. Lee Ross (1977) ne ise <b>fundamental attribution error (FAE)</b> naam diya.'],
      ['case', 'Castro essay (Jones aur Harris, 1967)', 'Students ne Cuba ke leader Fidel Castro ke paksh ya virodh me likhe essays padhe. Kuch ko bataya gaya ki likhne wale ne <b>apni marzi se</b> side chuni, kuch ko ki side <b>coin toss se di gayi thi</b>. Hairani ki baat: jab pata tha ki side zabardasti di gayi thi, tab bhi readers ne maana ki pro-Castro essay likhne wala asal me Castro ko pasand karta hai. Situation saaf thi, phir bhi hum vyakti ko hi kaaran maan baithe.'],
      ['p', 'Par kya ye sach me "fundamental" (universal) hai? Psychologist <b>Joan Miller</b> (1984) ne Mysore ke Hindu participants aur Americans se poocha ki unke jaanne walon ne achhe ya bure kaam kyun kiye. <b>Americans</b> ne zyada personality wale kaaran diye ("wo selfish hai"), jabki <b>Indian participants</b> ne zyada context aur rishton wale kaaran diye ("uski naukri ka dabaav tha"). Aur ye farak bachchon me kam aur adults me zyada tha, yaani culture ke saath seekha jaata hai. Isliye FAE collectivist cultures me aam taur par kamzor dikhta hai.'],

      ['h', 'Aur bhi attribution biases'],
      ['list', [
        '<b>Actor-observer bias</b>: doosre kare to "uski personality", hum karein to "situation". Doosre ki gaadi ki takkar: "kaisa driver hai!"; apni: "sadak par gaddha tha."',
        '<b>Self-serving bias</b>: safalta ka credit khud ko, nakaami ka blame bahar.',
        '<b>Just-world hypothesis</b> (Melvin Lerner): duniya nyaypoorn hai, "jo hota hai, sahi hota hai". Isse kai baar <b>victim blaming</b> hota hai: "usne aise kapde pehne hi kyun", "garib hai to mehnat nahi ki hogi". Kabhi "sab karmon ka phal hai" jaisi soch bhi kisi ki takleef ke prati humdardi kam kar deti hai.',
        '<b>Hostile attribution bias</b>: ambiguous situation me doosre ka irada bura maan lena (bheed me dhakka lage to "jaanbujh kar maara"). Aggressive bachchon aur adults me ye zyada dikhta hai.'
      ]],
      ['ex', 'Cricket captain ki press conference', 'Jeet ke baad: "Humari planning perfect thi, bowlers ne zabardast mehnat ki." Haar ke baad: "Pitch bahut slow thi, toss haarna bhari pada, umpire ke do galat decisions..." Ye <b>self-serving bias</b> hai. Ye self-esteem bachata hai, par galtiyon se seekhne me rukawat bhi ban sakta hai.'],

      ['h', 'Jo socho wahi ho jaaye: self-fulfilling prophecy'],
      ['case', 'Pygmalion in the classroom (Rosenthal aur Jacobson, 1968)', [
        'Ek school me teachers ko bataya gaya ki ek test ke hisaab se kuch bachche jaldi hi "intellectually bloom" karenge. Asal me ye bachche <b>random</b> chune gaye the. Saal ke ant me in bachchon ke IQ scores (khaas kar chhoti classes me) baakiyon se zyada badhe. Teachers ki ummeed ne unke behaviour (zyada attention, behtar feedback, zyada intezaar) ko badla, aur bachchon ka performance badal gaya.',
        'Dhyan do: baad ki research me ye effect asli to paaya gaya, par aam taur par <b>chhota</b> hai, aur original study ki kai aalochanayein hui. Phir bhi teachers aur parents ki expectations ka asar real hai.'
      ]],
      ['p', '<b>Self-fulfilling prophecy</b>: kisi ke baare me ummeed hamare behaviour ko badalti hai, aur wo behaviour use waisa hi bana deta hai. Agar aap kisi naye colleague ko "rude" maan kar thande tareeke se milo, to wo bhi aapse thanda behave karega, aur aapki "ummeed" sach saabit ho jaayegi.'],
      ['terms', [
        ['Social psychology', 'Doosron ki maujoodgi hamare vichaar, feelings aur behaviour ko kaise prabhavit karti hai, iska study.'],
        ['Thin slicing', 'Bahut kam information se jaldi aur aksar sahi judgement banana.'],
        ['Halo effect', 'Ek positive gun se baaki gunon ko bhi positive maan lena.'],
        ['Primacy effect', 'Pehli information ka baad wali se zyada asar.'],
        ['Attribution', 'Behaviour ke kaaran ka explanation dena.'],
        ['Dispositional attribution', 'Behaviour ko vyakti ki personality ya ability se jodna.'],
        ['Situational attribution', 'Behaviour ko bahar ke halaat se jodna.'],
        ['Covariation model', 'Consensus, distinctiveness aur consistency se attribution decide karna (Kelley).'],
        ['Fundamental attribution error', 'Doosron ke behaviour me personality ko zyada aur situation ko kam weight dena.'],
        ['Actor-observer bias', 'Apne behaviour ko situation se aur doosron ke behaviour ko personality se samjhana.'],
        ['Self-serving bias', 'Safalta ka credit khud ko aur nakaami ka blame bahar dena.'],
        ['Just-world hypothesis', 'Ye maanna ki duniya nyaypoorn hai aur log wahi paate hain jiske wo layak hain.'],
        ['Victim blaming', 'Peedit ko hi uski takleef ka zimmedar thehrana.'],
        ['Hostile attribution bias', 'Ambiguous behaviour me doosre ka irada bura maan lena.'],
        ['Self-fulfilling prophecy', 'Ummeed jo behaviour badal kar khud ko sach kar de.']
      ]],
      ['think', 'Office me ek naya colleague meeting me chup raha aur jaldi nikal gaya. Aapka pehla vichaar "ghamandi hai" aaya. FAE se bachne ke liye kya poochhoge?', [
        'Situation ke sawaal: kya wo naya hai aur abhi comfortable nahi? Kya uske ghar me koi emergency thi? Kya meeting uske kaam se judi nahi thi? Kya uski bhasha ya culture alag hai? Ek ghatna se personality ka faisla karne ke bajay, kuch aur moments dekho aur ho sake to seedhe baat karo.'
      ]]
    ],
    takeaways: [
      'First impressions bahut jaldi bante hain; halo aur primacy effect unhe rang dete hain.',
      'Attribution: internal (personality) vs external (situation); Kelley ke teen sawaal.',
      'Fundamental attribution error: doosron me situation ko kam aankna; Indian research me ye kamzor mila (Joan Miller).',
      'Self-serving bias aur just-world belief humein khud ko bachane me madad karte hain par galat faisle bhi karwate hain.',
      'Expectations self-fulfilling prophecy ban sakti hain.'
    ],
    quiz: [
      ['Doosre ke der se aane ko "laaparwah hai" kehna aur situation ko ignore karna kya hai?', ['Self-serving bias', 'Fundamental attribution error', 'Halo effect', 'Primacy effect'], 1, 'Personality ko zyada aur situation ko kam weight dena FAE hai.'],
      ['Achhe dikhne wale ko smart aur honest bhi maan lena kaunsa effect hai?', ['Halo effect', 'Spotlight effect', 'Just-world', 'Thin slicing'], 0, 'Ek positive gun se baaki gun bhi positive maan lena halo effect hai.'],
      ['Joan Miller ki research me Indian participants ne Americans ke mukable kaise explanations diye?', ['Zyada personality wale', 'Zyada context aur situation wale', 'Koi farak nahi', 'Sirf kismat wale'], 1, 'Indian adults ne zyada contextual attributions diye; FAE culture se juda hai.'],
      ['Jeet ka credit khud ko aur haar ka blame pitch ko dena?', ['Actor-observer bias', 'Self-serving bias', 'Hostile attribution bias', 'Halo effect'], 1, 'Self-serving bias self-esteem bachata hai.'],
      ['"Wo garib hai to zaroor usne mehnat nahi ki hogi" kis bias ka example ho sakta hai?', ['Just-world hypothesis', 'Primacy effect', 'Mere exposure', 'Thin slicing'], 0, 'Duniya ko nyaypoorn maan kar peedit ko zimmedar thehrana just-world soch hai.'],
      ['Kelley ke model me "kya baaki log bhi aisa karte hain?" kaunsa factor hai?', ['Consistency', 'Distinctiveness', 'Consensus', 'Primacy'], 2, 'Consensus doosron ke behaviour se tulna hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 12: Social Psychology', OS(12), 'book'],
      ['Crash Course Psychology: Social Thinking', YT('Crash Course Psychology social thinking'), 'video'],
      ['The Person and the Situation (Ross & Nisbett)', GR('The Person and the Situation Ross Nisbett'), 'book']
    ]
  });

  /* 5.2 */
  C({
    id: 'attitudes-persuasion', level: 5, mins: 18, visual: 'dissonance',
    visualCap: 'Cognitive dissonance: jab behaviour aur belief takraate hain to mann ka taraju bigadta hai. Dekho dimaag use wapas balance karne ke kaunse raaste dhoondhta hai.',
    title: 'Attitudes, dissonance aur persuasion',
    tag: 'LaPiere, foot-in-the-door, Festinger ka $1 experiment, ELM, Cialdini ke principles aur fake news se bachav',
    hook: 'Aap kehte ho "plastic bura hai", par roz plastic bag le aate ho. Smoker jaanta hai cigarette jaanleva hai, phir bhi peeta hai. Aur sale ka "sirf 2 piece bache!" banner dekh kar aap wo cheez kharid lete ho jo chahiye bhi nahi thi. <b>Attitudes</b> kaise bante hain, kaise badalte hain, aur log humein kaise <b>persuade</b> karte hain?',
    blocks: [
      ['h', 'Attitude kya hai?'],
      ['p', '<b>Attitude</b> kisi cheez, vyakti ya idea ke prati evaluation hai (pasand-napasand). Iske teen hisse <b>ABC model</b> se yaad rakho: <b>A</b>ffect (feeling: "mujhe cricket se pyaar hai"), <b>B</b>ehaviour (action: "har match dekhta hoon"), <b>C</b>ognition (belief: "cricket strategy ka khel hai").'],
      ['case', 'LaPiere ka safar (1934)', 'Richard LaPiere ne ek Chinese couple ke saath America me 250 se zyada hotels aur restaurants me safar kiya, us zamane me jab Asians ke khilaf bhedbhaav aam tha. Sirf <b>ek</b> jagah unhe service se mana kiya gaya. Baad me LaPiere ne unhi jagahon ko letter bheja: "Kya aap Chinese mehmaanon ko serve karenge?" Jawab dene walon me se lagbhag <b>92% ne "nahi"</b> kaha! Kehna aur karna bilkul alag the.'],
      ['p', 'Attitude behaviour ko tab achha predict karta hai jab attitude <b>strong</b> ho (apne anubhav se bana, baar-baar socha), <b>specific</b> ho ("roz subah jogging" vs "fitness achhi hai"), aasaani se <b>yaad aaye</b>, aur bahar ka social pressure kam ho.'],

      ['h', 'Ulta bhi hota hai: behaviour attitude badalta hai'],
      ['case', 'Foot-in-the-door (Freedman aur Fraser, 1966)', 'California me researchers ne gharon se poocha ki kya wo apne lawn me ek bada, bhadda "Drive Carefully" board lagane denge. Sirf ~17% ne haan kaha. Doosre group se do hafte pehle sirf ek <b>chhota sa sticker</b> lagane ko kaha gaya tha (jo lagbhag sabne maan liya). Baad me bade board ke liye <b>~76%</b> ne haan kaha! Chhoti haan ne unki self-image badli: "main safety ki parwah karne wala insaan hoon."'],
      ['p', 'Festinger ki <b>cognitive dissonance theory</b> (1957): jab hamare do vichaar, ya vichaar aur behaviour, takraate hain to ek bechaini (dissonance) hoti hai. Use kam karne ke liye hum aksar <b>apna attitude badal dete hain</b>, kyunki kiya hua behaviour wapas nahi ho sakta.'],
      ['case', '$1 vs $20 (Festinger aur Carlsmith, 1959)', [
        'Students ne ek ghanta bahut boring kaam kiya (spools ko tray me rakhna aur pegs ghumana). Phir unse kaha gaya ki agle participant ko bolo ki kaam "bahut mazedaar" tha. Kuch ko is jhooth ke liye <b>$1</b> diya gaya, kuch ko <b>$20</b> (us zamane me badi rakam).',
        'Baad me poochha gaya ki kaam asal me kitna mazedaar tha. <b>$1 wale group ne kaam ko zyada mazedaar</b> bataya! $20 walon ke paas jhooth ka bahana tha ("paison ke liye bola"). $1 walon ke paas koi achha bahana nahi tha, to dissonance kam karne ke liye unhone apna vishwas hi badal liya: "shayad kaam itna bura nahi tha."'
      ]],
      ['list', [
        '<b>Effort justification</b>: jis cheez ke liye zyada mehnat ya takleef uthayi, use zyada value dete hain. Mushkil entrance exam paas karke mile college ko log zyada "best" maante hain.',
        '<b>Post-decision dissonance</b>: do achhe phones me se ek kharidne ke baad hum chune hue ki khoobiyan aur chhode hue ki kamiyan zyada dekhne lagte hain.'
      ]],
      ['ex', 'Smoker ka dimaag', '"Main smoke karta hoon" aur "smoking jaanleva hai" takraate hain. Dissonance kam karne ke raaste: (1) behaviour badlo: chhod do (sabse mushkil). (2) Belief badlo: "itna bhi khatarnak nahi, dadaji 90 saal jiye". (3) Naya belief jodo: "main roz exercise karta hoon to balance ho jaata hai". (4) Importance ghatao: "sab kuch hi to cancer karta hai aaj kal". Upar ka animation yahi dikhata hai.'],

      ['h', 'Persuasion: Elaboration Likelihood Model'],
      ['p', 'Richard Petty aur John Cacioppo ke <b>ELM</b> ke hisaab se persuasion ke do raaste hain:'],
      ['vis', 'elm', 'Do raaste: jab audience motivated aur capable ho to central route (arguments), warna peripheral route (cues).'],
      ['compare', ['Central route', 'Jab sunne wala <b>motivated</b> aur <b>samajhne layak</b> ho, wo arguments ki quality dhyan se dekhta hai. Laptop kharidne wala engineer specs compare karta hai. Is raaste se bana attitude <b>tikau</b> aur behaviour ko predict karne wala hota hai.'], ['Peripheral route', 'Jab interest ya time kam ho, log <b>cues</b> se prabhavit hote hain: celebrity, attractive model, catchy jingle, "10 lakh+ downloads", arguments ki <b>sankhya</b> (quality nahi). Attitude jaldi badalta hai par jaldi wapas bhi jaata hai.']],
      ['list', [
        '<b>Source</b>: expertise aur trustworthiness. Doctor ka white coat wala ad isi liye.',
        '<b>Fear appeals</b>: darr tab kaam karta hai jab saath me "kya karna hai" bhi bataya jaaye. India me 2016 se cigarette packets ke 85% hisse par graphic health warning zaroori hai.',
        '<b>Repetition</b>: baar-baar suni baat sach lagne lagti hai (<b>illusory truth effect</b>). Isi wajah se WhatsApp ki jhoothi khabar, 20 forward ke baad, "sab kehte hain" ban jaati hai.',
        '<b>Audience</b>: teen aur 20s ki umar me attitudes sabse zyada badalte hain ("impressionable years").'
      ]],

      ['h', 'Cialdini ke principles of influence'],
      ['table', ['Principle', 'Matlab', 'Aapne kahan dekha hai'], [
        ['Reciprocity', 'Kuch mila to wapas dene ka dabaav', 'Mall me free sample chakhne ke baad kharidna; shaadi me "unhone kitna diya tha" ka hisaab'],
        ['Commitment / consistency', 'Chhoti haan ke baad badi haan', '"Bas ek free trial le lo" phir subscription'],
        ['Social proof', 'Jo sab kar rahe hain wahi sahi', '"Bestseller", 4.5★ aur 20,000 reviews, sitcom ka laugh track'],
        ['Authority', 'Expert ya authority ki baat maanna', 'Toothpaste ad me "dentist recommended", lab coat'],
        ['Liking', 'Jinhe pasand karte hain unki baat maanna', 'Favourite cricketer ka ad, dost ka "mere liye le lo"'],
        ['Scarcity', 'Kam ya jaldi khatam hone wali cheez zyada keemti lagti hai', '"Sirf 2 left!", "Offer aaj raat 12 baje tak", flash sale timer']
      ]],
      ['tip', 'Agli baar online shopping me "Buy now" dabane se pehle 10 second ruko aur poochho: <b>"Is page par kaunsa principle mujh par kaam kar raha hai?"</b> Timer (scarcity)? Reviews (social proof)? Celebrity (liking)? Sirf pehchaan lene se uska asar kaafi kam ho jaata hai.'],

      ['h', 'Persuasion se bachav: "mental vaccine"'],
      ['p', 'William McGuire ki <b>inoculation theory</b>: jaise vaccine kamzor virus dikha kar body ko taiyaar karti hai, waise hi kisi galat argument ka kamzor roop aur uska jawab pehle se dikhane se log asli manipulation ke prati mazboot hote hain. Aaj ise <b>prebunking</b> kehte hain. "Bad News" jaise games (Roozenbeek aur van der Linden) me log khud fake news banane ki "techniques" khel kar seekhte hain, aur research me isse manipulation pehchaanne ki kshamta badhi.'],
      ['terms', [
        ['Attitude', 'Kisi cheez, vyakti ya idea ka positive ya negative evaluation.'],
        ['ABC model', 'Attitude ke teen hisse: affect, behaviour, cognition.'],
        ['Foot-in-the-door', 'Chhoti request maanne ke baad badi request maanne ka zyada chance.'],
        ['Cognitive dissonance', 'Takraate vichaaron ya vichaar-behaviour ke beech ki bechaini.'],
        ['Effort justification', 'Jis cheez par mehnat ki, use zyada value dena.'],
        ['Elaboration likelihood model', 'Persuasion ke central aur peripheral raaston ka model.'],
        ['Central route', 'Arguments ki quality par dhyan dekar persuade hona.'],
        ['Peripheral route', 'Superficial cues (celebrity, music) se persuade hona.'],
        ['Fear appeal', 'Darr ke zariye persuade karne ki koshish.'],
        ['Illusory truth effect', 'Baar-baar suni baat ko sach maan lena.'],
        ['Reciprocity', 'Kuch milne par badle me kuch dene ka social niyam.'],
        ['Social proof', 'Doosron ke behaviour ko sahi hone ka saboot maanna.'],
        ['Scarcity principle', 'Kam milne wali cheez ko zyada keemti maanna.'],
        ['Inoculation theory', 'Kamzor arguments pehle dikha kar persuasion ke khilaf mazbooti banana.'],
        ['Prebunking', 'Galat information milne se pehle uski techniques samjha dena.']
      ]]
    ],
    takeaways: [
      'Attitude = affect + behaviour + cognition; specific aur strong attitudes hi behaviour predict karte hain.',
      'Behaviour attitude badalta hai: foot-in-the-door aur cognitive dissonance.',
      'Kam bahana (Festinger ka $1) = zyada attitude change.',
      'ELM: central route (arguments) tikau, peripheral route (cues) jaldi par kamzor.',
      'Cialdini ke principles pehchaanna aur prebunking manipulation se bachate hain.'
    ],
    quiz: [
      ['LaPiere ki study kya dikhati hai?', ['Attitude hamesha behaviour predict karta hai', 'Kehna (attitude) aur karna (behaviour) alag ho sakte hain', 'Chinese couples ko kahin service nahi mili', 'Letters behaviour badalte hain'], 1, 'Letter me 92% ne mana kiya, par asal me sirf ek jagah mana hua.'],
      ['Festinger-Carlsmith me kis group ne boring kaam ko zyada mazedaar bataya?', ['$20 wale', '$1 wale', 'Dono barabar', 'Jinhe paise nahi mile'], 1, 'Kam bahane wale group ne dissonance kam karne ke liye attitude badla.'],
      ['Chhote sticker ke baad bada board lagane ki haan zyada milna kya hai?', ['Door-in-the-face', 'Foot-in-the-door', 'Scarcity', 'Reciprocity'], 1, 'Chhoti request ke baad badi request: foot-in-the-door.'],
      ['Celebrity aur catchy music se product pasand aana ELM ka kaunsa route hai?', ['Central', 'Peripheral', 'Dono', 'Koi nahi'], 1, 'Superficial cues peripheral route se kaam karte hain.'],
      ['"Sirf 2 piece bache hain!" kaunsa Cialdini principle hai?', ['Authority', 'Scarcity', 'Liking', 'Reciprocity'], 1, 'Kam milne wali cheez zyada keemti lagti hai.'],
      ['Baar-baar suni jhoothi khabar sach lagne lagti hai. Ye kya hai?', ['Illusory truth effect', 'Effort justification', 'Inoculation', 'Halo effect'], 0, 'Repetition se familiarity aur "sach" hone ka ehsaas badhta hai.']
    ],
    more: [
      ['Influence (Robert Cialdini)', GR('Influence Robert Cialdini'), 'book'],
      ['Bad News game · fake news techniques khel kar seekho', 'https://www.getbadnews.com', 'link'],
      ['Crash Course Psychology: Social Influence', YT('Crash Course Psychology social influence'), 'video']
    ]
  });

  /* 5.3 */
  C({
    id: 'conformity-obedience', level: 5, mins: 18, visual: 'asch',
    visualCap: 'Asch ka experiment khud mehsoos karo: 6 "participants" ek-ek karke jawab denge. Phir aapki baari.',
    title: 'Conformity, compliance aur obedience',
    tag: '"Log kya kahenge": Asch ki lines, Sherif, door-in-the-face, Milgram ke variations, hospital study, aur minority ki taakat',
    hook: '1962 me ek TV prank show me ek aadmi lift me ghusa. Andar ke saare log (actors) jaanbujh kar <b>peeche ki deewar</b> ki taraf munh karke khade the. Kuch seconds me wo aadmi bhi ghoom gaya! India me ise ek line me kehte hain: <b>"Log kya kahenge?"</b> Is chapter me dekhenge ki group, request aur authority hamare behaviour ko kitna badal dete hain.',
    blocks: [
      ['h', 'Conformity: group jaisa ban jaana'],
      ['p', '<b>Conformity</b> asli ya kalpit group pressure ki wajah se apne behaviour ya belief ko group ke hisaab se badalna hai.'],
      ['case', 'Sherif ka chalta hua point (1935)', 'Andhere kamre me ek sthir point of light kuch der baad hilta hua dikhta hai (autokinetic effect, ek illusion). Muzafer Sherif ne logon se poocha ki light kitni hili. Akele me log alag-alag andaze dete the (2 inch, 6 inch). Group me baar-baar bolne par sabke andaze <b>ek common norm</b> par aa gaye, aur baad me akele bhi log wahi norm maante rahe. Jab situation <b>ambiguous</b> ho, hum doosron ko information ka srot maante hain.'],
      ['case', 'Asch ki lines (1951-1956)', [
        'Solomon Asch ne ek bilkul saaf task diya: teen lines me se kaunsi line standard line ke barabar hai? Akele me log 99% sahi the. Par experiment me participant ke saath 6-7 log aur the, jo asal me <b>actors</b> the aur kuch trials me jaanbujh kar <b>ek hi galat jawab</b> dete the. Participant aakhir me jawab deta tha.',
        'Nateeja: critical trials me lagbhag <b>37%</b> jawab group ke galat jawab se mel khaate the. Lagbhag <b>75%</b> participants ne kam se kam ek baar conform kiya, aur ~25% ne kabhi nahi. Baad me kai logon ne kaha unhe pata tha jawab galat hai, par "alag dikhna" nahi chahte the.'
      ]],
      ['table', ['Type', 'Kyun conform karte hain', 'Example'], [
        ['Informational influence', 'Group ko sahi information ka srot maan kar (khaas kar jab hum unsure hon)', 'Naye sheher me jidhar bheed ja rahi hai udhar chalna; Sherif'],
        ['Normative influence', 'Accept hone aur rejection se bachne ke liye', 'Asch; shaadi me "status" ke liye kharcha; kapde aur fashion']
      ]],
      ['p', 'Conformity kab zyada hoti hai? Group me <b>3-4 log</b> ho jaane par (usse zyada se khaas farak nahi), jab group <b>ekmat</b> ho (Asch ke variation me sirf ek "saathi" ke sahi jawab dene se conformity bahut gir gayi), jab jawab <b>sabke saamne</b> dena ho, jab group ka status ooncha ho, aur collectivist cultures me (Bond aur Smith ke 1996 meta-analysis me collectivist deshon me conformity zyada mili).'],
      ['ex', '"Log kya kahenge?"', 'Bina zaroorat ke mehngi shaadi aur karza, padosi ke bachche jaisa course chunna, ya "ladkiyan raat ko bahar nahi jaati" jaise niyam: kai baar hum ye kisi ke kehne se nahi, balki ek <b>kalpit audience</b> ke darr se karte hain. Ye normative influence ka sabse Indian roop hai. Dilchasp baat: aksar "log" bhi andar se wahi chahte hain jo aap chahte ho, par sab chup rehte hain (<b>pluralistic ignorance</b>, Chapter 5.7).'],

      ['h', 'Compliance: request maanna'],
      ['list', [
        '<b>Foot-in-the-door</b>: chhoti request phir badi (pichhla chapter).',
        '<b>Door-in-the-face</b>: pehle bahut badi request (jise mana kar diya jaata hai), phir asli chhoti request. Cialdini (1975) ke experiment me students se pehle 2 saal tak har hafte juvenile centre me volunteer karne ko kaha gaya (sabne mana kiya), phir sirf ek din zoo trip par chaperone banne ko. ~50% maan gaye, jabki seedhe zoo trip poochhne par sirf ~17%.',
        '<b>Low-ball</b>: achha deal maan lene ke baad shartein badal dena ("insurance aur fitting alag se lagega").',
        '<b>That\'s-not-all</b>: decide karne se pehle hi extra add karna ("aur saath me ye bhi free!"). Teleshopping ka favourite.'
      ]],

      ['h', 'Obedience: authority ki baat maanna'],
      ['p', 'Chapter 1.5 me aapne Milgram ka experiment dekha: 65% log 450 volt tak gaye. Milgram ne baad me <b>kai variations</b> kiye jo dikhate hain ki obedience kab ghatti-badhti hai:'],
      ['vis', 'milgram', 'Original Milgram study: har voltage par kitne % participants jaari rahe.'],
      ['table', ['Variation', 'Poore 450 V tak gaye'], [
        ['Original (learner doosre kamre me)', '65%'],
        ['Learner usi kamre me', '40%'],
        ['Participant ko learner ka haath shock plate par dabana pada', '30%'],
        ['Experimenter phone par order de raha tha', '~22%'],
        ['Order ek "aam aadmi" ne diya, scientist ne nahi', '20%'],
        ['Do saathi "teachers" ne aage karne se mana kar diya', '10%'],
        ['Yale ki jagah ek purani office building', '47.5%']
      ]],
      ['list', [
        '<b>Gradual escalation</b>: 15 volt ke chhote steps; har step pichhle se thoda hi bada. Foot-in-the-door jaisa.',
        '<b>Agentic state</b>: log khud ko authority ka "agent" maanne lagte hain: "zimmedari unki hai, main bas order maan raha hoon".',
        '<b>Victim se doori</b>: jitna door aur anjaan victim, utna aasaan.',
        '<b>Legitimate authority</b>: lab coat, Yale ka naam, "experiment ke liye zaroori hai".'
      ]],
      ['case', 'Hospital ki nurses (Hofling aur saathi, 1966)', 'Raat ki shift me nurses ko ek anjaan "doctor" ka phone aaya: ek patient ko "Astroten" naam ki dawai ki 20 mg dose do. Dabbe par saaf likha tha max dose 10 mg hai, aur hospital ke niyam phone par order lene se rokte the. Phir bhi <b>22 me se 21 nurses</b> dawai dene ke liye taiyaar thi (dawai asal me nakli thi aur unhe raste me rok liya gaya). Real duniya me bhi authority ke saamne savaal poochhna kitna mushkil hai, ye study dikhati hai. (Baad ki ek study me jab nurses ko jaani-pehchaani dawai aur saathiyon se baat karne ka mauka mila, obedience kaafi kam thi.)'],

      ['h', 'Minority influence aur na kehne ki taakat'],
      ['p', 'Serge Moscovici (1969) ke experiment me jab group ke do "actors" <b>lagataar</b> neeli slides ko "hari" kehte rahe, to baaki participants ne bhi ~8% jawabon me "hara" kaha. <b>Consistent</b> minority dheere-dheere majority ki soch badal sakti hai. Itihaas ke zyada tar bade samajik badlaav (sati pratha ka virodh, mahilaon ke voting adhikaar, swatantrata andolan) isi tarah chhote, lagataar groups se shuru hue.'],
      ['p', 'Milgram ke "rebels", whistleblowers, aur Gandhi ji ka <b>satyagraha</b> (anyaypoorn kanoon ka shaant, sochi-samjhi avagya) dikhate hain ki authority ke saamne principle par khada hona mumkin hai. Research ke hisaab se ek bhi saathi milne par na kehna kai guna aasaan ho jaata hai: isliye kisi galat cheez par bolne wale pehle insaan ka saath dena itna important hai.'],
      ['terms', [
        ['Conformity', 'Group pressure ki wajah se behaviour ya belief badalna.'],
        ['Informational social influence', 'Doosron ko sahi information ka srot maan kar conform karna.'],
        ['Normative social influence', 'Accept hone aur rejection se bachne ke liye conform karna.'],
        ['Autokinetic effect', 'Andhere me sthir light ka hilta hua dikhna (Sherif).'],
        ['Compliance', 'Seedhi request ke jawab me behaviour badalna.'],
        ['Door-in-the-face', 'Badi request ke inkaar ke baad chhoti request maanne ka zyada chance.'],
        ['Low-ball technique', 'Haan milne ke baad deal ki shartein badalna.'],
        ['Obedience', 'Authority ke order par behaviour badalna.'],
        ['Agentic state', 'Khud ko authority ka agent maan kar zimmedari chhod dena.'],
        ['Minority influence', 'Consistent chhote group ka majority ki soch badalna.'],
        ['Pluralistic ignorance', 'Sab andar se ek hi baat sochte hain par maan lete hain ki doosre alag sochte hain.']
      ]],
      ['think', 'Asch ke experiment me aap hote to kya karte? Aur kis cheez se aapke liye sahi jawab dena aasaan hota?', [
        'Zyada tar log sochte hain "main kabhi conform nahi karta", par research kehti hai ki 75% ne kam se kam ek baar kiya. Sahi jawab aasaan hota agar: ek bhi aur vyakti sahi jawab deta, jawab likh kar (private) dena hota, ya group anjaan aur kam important hota. Real life me bhi: kisi galat cheez par pehli awaaz uthane wale ka saath do.'
      ]]
    ],
    takeaways: [
      'Ambiguous situation me informational influence (Sherif), saaf situation me bhi normative influence (Asch).',
      'Asch: ~37% critical trials me conformity; ek saathi milte hi conformity bahut girti hai.',
      'Compliance techniques: foot-in-the-door, door-in-the-face, low-ball, that\'s-not-all.',
      'Milgram ke variations: victim paas ho ya authority kamzor ho to obedience girti hai.',
      'Consistent minority aur ek saathi bhi badlaav la sakte hain.'
    ],
    quiz: [
      ['Asch ke experiment me lagbhag kitne % participants ne kam se kam ek baar conform kiya?', ['5%', '25%', '75%', '100%'], 2, 'Lagbhag teen-chauthai ne kam se kam ek critical trial me group ka galat jawab diya.'],
      ['Naye sheher me bheed ke peeche chalna kaunsa influence hai?', ['Normative', 'Informational', 'Obedience', 'Minority'], 1, 'Unsure hone par group ko information ka srot maanna informational influence hai.'],
      ['Pehle bahut badi request (mana), phir chhoti request maanna kya hai?', ['Foot-in-the-door', 'Door-in-the-face', 'Low-ball', 'That\'s-not-all'], 1, 'Badi request ke baad chhoti "kam" lagti hai aur reciprocity ka dabaav bhi hota hai.'],
      ['Milgram ke kis variation me obedience sabse kam (10%) thi?', ['Phone par order', 'Do saathi teachers ne mana kar diya', 'Learner usi kamre me', 'Purani office building'], 1, 'Doosron ka virodh dekh kar log bhi aasaani se ruk gaye.'],
      ['Hofling ki hospital study me kitni nurses dawai dene ko taiyaar thi?', ['22 me se 2', '22 me se 11', '22 me se 21', 'Koi nahi'], 2, 'Anjaan doctor ke phone order par bhi lagbhag sab taiyaar thi.'],
      ['Moscovici ke experiment ne kya dikhaya?', ['Majority hamesha jeetti hai', 'Consistent minority bhi majority ko prabhavit kar sakti hai', 'Rang dekhna subjective hai', 'Obedience universal hai'], 1, 'Lagataar "hara" kehne wali minority ne doosron ke jawab badle.']
    ],
    more: [
      ['Simply Psychology: Asch Conformity Experiment', 'https://www.simplypsychology.org/asch-conformity.html', 'link'],
      ['Obedience to Authority (Stanley Milgram)', GR('Obedience to Authority Milgram'), 'book'],
      ['Crash Course Psychology: Social Influence', YT('Crash Course Psychology 38 social influence'), 'video']
    ]
  });

  /* 5.4 */
  C({
    id: 'group-behavior', level: 5, mins: 16, visual: 'loafing',
    visualCap: 'Ringelmann ka rope pulling: log badhne par group ki kul taakat badhti hai, par har vyakti ki mehnat ghatti jaati hai (social loafing).',
    title: 'Group behaviour: bheed, team aur groupthink',
    tag: 'Social facilitation, social loafing, deindividuation, group polarization aur groupthink: group me hum alag kyun ho jaate hain',
    hook: 'Akele bathroom me gaana gaate ho to sur sahi lagta hai; 50 logon ke saamne awaaz kaanp jaati hai. Par cricket stadium me 50,000 logon ke beech aap bhi gala phaad kar chillate ho. College ke group project me ek banda saara kaam karta hai aur baaki "moral support". <b>Group humein kaise badalta hai?</b>',
    blocks: [
      ['h', 'Social facilitation: doosron ke saamne'],
      ['p', '1898 me Norman <b>Triplett</b> ne dekha ki cyclists doosron ke saath race karte waqt akele ke mukable tez chalaate the. Ye psychology ke pehle social experiments me se ek tha. Par kabhi-kabhi doosron ke saamne performance <b>girti</b> bhi hai. Robert <b>Zajonc</b> (1965) ne puzzle suljhaya: doosron ki maujoodgi <b>arousal badhati</b> hai, aur arousal <b>dominant (sabse aadat wala) response</b> ko mazboot karta hai.'],
      ['list', [
        '<b>Achhi tarah seekha, aasaan kaam</b>: dominant response sahi hai → audience ke saamne <b>behtar</b>.',
        '<b>Naya, mushkil kaam</b>: dominant response aksar galat → audience ke saamne <b>kharab</b>.'
      ]],
      ['ex', 'Pool table aur audience', 'Michaels aur saathiyon (1982) ne college ke pool players ko chupke se dekha. Jab chaar log paas aakar dekhne lage, <b>achhe players</b> ka success 71% se 80% ho gaya, aur <b>kamzor players</b> ka 36% se ghat kar 25%. Isliye pehli baar gaadi chalate waqt koi peeche se dekhe to galti zyada hoti hai, par experienced driver ko farak nahi padta.'],

      ['h', 'Social loafing: "koi aur kar lega"'],
      ['p', 'French engineer Max <b>Ringelmann</b> ne 1900s ke aas-paas dekha ki rassi kheenchne me jab log badhte hain, to <b>har vyakti</b> akele se kam zor lagata hai. Bibb Latané (1979) ne taali bajane aur chillane ke experiments me bhi yahi paaya. Ise <b>social loafing</b> kehte hain: group me individual effort ka ghatna jab individual contribution dikhta na ho.'],
      ['tip', 'Group project me loafing kaise rokein: (1) har member ka <b>alag, dikhne wala</b> hissa ho ("Priya: research, Aman: slides"), (2) group chhota rakho, (3) kaam ko meaningful banao, (4) peer evaluation rakho. Jab "kisne kya kiya" dikhta hai, loafing kam ho jaati hai.'],

      ['h', 'Deindividuation: bheed me kho jaana'],
      ['p', 'Jab log <b>anonymous</b> hon, bade group me hon aur arousal zyada ho, to unka self-awareness aur personal zimmedari ka ehsaas ghat jaata hai. Ise <b>deindividuation</b> kehte hain. Isse mob violence, dangon me tod-phod, aur online trolling (fake account ke peeche) samjhaye jaate hain. Par deindividuation sirf bura nahi: ye group ke norm ko follow karne ko badhata hai. Agar bheed ka norm achha ho (jaise kisi tyohaar me sab naach rahe hon), to log zyada khule aur khush hote hain.'],
      ['case', 'Halloween ki toffiyan (Diener aur saathi, 1976)', 'Halloween par 1,300 se zyada bachche gharon me "trick-or-treat" ke liye aaye. Ek researcher ne kaha "sirf ek toffee lena" aur kamre se chali gayi (chhupke dekha ja raha tha). Jo bachche <b>group me</b> aaye aur jinse <b>naam nahi poochha</b> gaya (anonymous), unme se ~57% ne extra toffiyan uthayi. Jo <b>akele</b> the aur jinka <b>naam poochha</b> gaya, unme sirf ~8% ne. Anonymity + group = niyam todna aasaan.'],

      ['h', 'Group polarization: discussion ke baad aur extreme'],
      ['p', 'Jab ek jaisi soch wale log discuss karte hain, to group ka faisla un sabke shuruaati average se <b>aur zyada extreme</b> ho jaata hai. Thode se risky log milkar bahut risky ho jaate hain; thode cautious log bahut cautious. Ek jaisi raay wale WhatsApp groups, YouTube recommendations aur social media "echo chambers" isi wajah se logon ko zyada polarized banate hain.'],

      ['h', 'Groupthink: jab smart log milkar galti karte hain'],
      ['p', 'Irving <b>Janis</b> (1972) ne America ke kuch bade policy failures (jaise 1961 ka Bay of Pigs invasion) ka study karke <b>groupthink</b> ki baat ki: jab group me <b>ekta (harmony) ki chahat</b> sahi faisle se zyada important ho jaaye. 1986 me <b>Challenger</b> space shuttle ka haadsa bhi aksar is ka example diya jaata hai: engineers ne thand me O-rings ke fail hone ki chetavni di thi, par launch ka dabaav jeet gaya.'],
      ['table', ['Groupthink ke symptoms', 'Bachav ke tareeke'], [
        ['Illusion of invulnerability ("hum galat ho hi nahi sakte")', 'Leader apni raay <b>sabse aakhir</b> me de'],
        ['Virodh karne walon par dabaav aur self-censorship', 'Kisi ko jaanbujh kar <b>devil\'s advocate</b> banao'],
        ['Unanimity ka bhram (chup = sahmati)', 'Anonymous feedback ya voting'],
        ['"Mindguards": buri khabar leader tak na pahunchne dena', 'Bahar ke experts ko bulao, sub-groups me alag discuss karo']
      ]],
      ['ex', 'Office meeting ka "sab theek hai"', 'Boss ne naya plan bataya aur poocha "koi problem?" Sab chup. Baad me chai par sab kehte hain "ye plan to fail hoga". Ye groupthink aur pluralistic ignorance ka mel hai. Achhe leaders isliye pehle juniors se raay maangte hain aur "is plan me sabse badi kamzori kya hai?" jaisa sawaal poochhte hain.'],
      ['p', '<b>Leadership</b> par research do bade styles dikhati hai: <b>task-focused</b> (kaam aur targets par) aur <b>relationship-focused</b> (team ke mood aur rishton par). Sabse effective leaders situation ke hisaab se dono ka mel karte hain. <b>Transformational leaders</b> ek inspiring vision dete hain aur team ko khud se badhkar sochne ko prerit karte hain.'],
      ['terms', [
        ['Social facilitation', 'Doosron ki maujoodgi me aasaan/achhi tarah seekhe kaam me behtar performance.'],
        ['Social inhibition', 'Doosron ki maujoodgi me naye/mushkil kaam me kharab performance.'],
        ['Dominant response', 'Kisi situation me sabse aadat wala, sabse jaldi aane wala response.'],
        ['Social loafing', 'Group me individual effort ka ghatna jab contribution dikhta na ho.'],
        ['Deindividuation', 'Group aur anonymity me self-awareness aur personal zimmedari ka ghatna.'],
        ['Group polarization', 'Discussion ke baad group ki raay ka aur extreme hona.'],
        ['Echo chamber', 'Aisa mahaul jahan sirf apni jaisi raay sunai de.'],
        ['Groupthink', 'Harmony ki chahat me group ka bina critical soche galat faisla lena.'],
        ['Devil\'s advocate', 'Jaanbujh kar virodhi pakSh rakhne wala vyakti, taaki kamzoriyan saamne aayein.'],
        ['Transformational leadership', 'Inspiring vision se team ko prerit karne wali leadership.']
      ]]
    ],
    takeaways: [
      'Audience aasaan kaam behtar aur mushkil kaam kharab karti hai (arousal + dominant response).',
      'Social loafing: group me mehnat ghatti hai; individual contribution dikhao.',
      'Anonymity + bheed = deindividuation; group ka norm tay karta hai behaviour.',
      'Ek jaisi soch wale groups discussion ke baad aur extreme ho jaate hain.',
      'Groupthink se bachav: leader aakhir me bole, devil\'s advocate, anonymous feedback.'
    ],
    quiz: [
      ['Expert pool players audience ke saamne behtar aur naye players kharab khele. Ye kya dikhata hai?', ['Social loafing', 'Social facilitation (dominant response)', 'Groupthink', 'Deindividuation'], 1, 'Audience arousal badhati hai jo dominant response ko mazboot karti hai.'],
      ['Group project me ek member kam mehnat karta hai kyunki "koi aur kar lega". Ye kya hai?', ['Social loafing', 'Group polarization', 'Conformity', 'Obedience'], 0, 'Group me individual effort ghatna social loafing hai.'],
      ['Diener ki Halloween study me sabse zyada extra toffiyan kin bachchon ne uthayi?', ['Akele aur naam bataye hue', 'Group me aur anonymous', 'Akele aur anonymous', 'Parents ke saath'], 1, 'Group + anonymity se deindividuation hua.'],
      ['Ek jaisi raay wale log discuss karke aur extreme ho jaate hain. Ye kya hai?', ['Groupthink', 'Group polarization', 'Social facilitation', 'Minority influence'], 1, 'Discussion shuruaati jhukaav ko aur mazboot karta hai.'],
      ['Groupthink rokne ka ek achha tareeka kya hai?', ['Leader pehle apni raay de', 'Kisi ko devil\'s advocate banana', 'Virodh karne walon ko meeting se bahar karna', 'Jaldi faisla lena'], 1, 'Jaanbujh kar virodhi pakSh rakhne se kamzoriyan saamne aati hain.'],
      ['Ringelmann ke rope pulling me kya paaya gaya?', ['Har vyakti zyada zor lagata hai', 'Log badhne par har vyakti ka zor ghatta hai', 'Group ki taakat ghatti hai', 'Koi farak nahi'], 1, 'Kul taakat badhti hai par per-person effort ghatta hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · 12.4 Conformity, Compliance, and Obedience', OS(12), 'book'],
      ['Crash Course Psychology: Prejudice and discrimination / groups', YT('Crash Course Psychology groupthink social loafing'), 'video'],
      ['Victims of Groupthink (Irving Janis)', GR('Victims of Groupthink Janis'), 'book']
    ]
  });
})();
