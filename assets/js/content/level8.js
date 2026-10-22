/* Level 8 · Chaal aur Dhaal · Dark Psychology & Manipulation (part 1) */
(function () {
  const C = window.PSY.chapter;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 8.1 */
  C({
    id: 'dark-psychology-intro', level: 8, mins: 15, visual: 'hotState',
    visualCap: 'Levers on karke dekho: har lever emotion ka paara chadhata hai aur sochne ki capacity girata hai. Phir "Pause lo" dabao.',
    title: 'Dark psychology kya hai (aur kya nahi)',
    tag: 'Manipulation vs persuasion, hot state, aur samajhdaar log bhi kyun phans jaate hain',
    intro: 'Swagat hai course ke aakhri level me. Ab tak tumne mind ko samajhna seekha; ab dekhenge ki kuch log usi samajh ko doosron ke khilaf kaise use karte hain. Seedhi baat pehle: ye level kisi ko phansana sikhane ke liye nahi hai. Ye chaal ko door se pehchaanne, khud bachne aur apno ko bachane ke liye hai. Chalo shuru karte hain.',
    hook: 'Ek retired professor ko video call aata hai. Saamne police uniform me ek "CBI officer", peeche asli jaisa police station. "Aapke Aadhaar se ek parcel gaya hai jisme drugs mile hain. Aap <b>digital arrest</b> me hain. Call kaata to team ghar aa jaayegi. Kisi ko bataya to case aur bigdega." Agle 30 ghante professor camera ke saamne baithe rehte hain aur zindagi bhar ki bachat "verification" ke liye transfer kar dete hain. Is tarah ke cases India me baar-baar report hue hain. Padha-likha, samajhdaar insaan. Phir bhi kaise? Iska jawab IQ me nahi, <b>psychology</b> me hai.',
    blocks: [
      ['h', '"Dark psychology" ka asli matlab'],
      ['p', '"Dark psychology" internet ka shabd hai, psychology ki koi alag academic branch nahi. Asli research teen jagah milti hai: <b>dark personality traits</b> (narcissism, psychopathy jaise), <b>social influence</b> ki science (Robert Cialdini jaise researchers), aur <b>coercive control, abuse aur fraud</b> par research. Is level me hum inhi teeno ko jod kar dekhenge.'],
      ['p', 'Ek simple definition yaad rakho: <b>manipulation</b> kisi ki soch ya faisle ko <b>chhupe tareeke</b> se badalna hai, unki kamzori ya emotion ka fayda utha kar, aksar <b>apne fayde aur unke nuksaan</b> ke liye.'],
      ['compare', ['Persuasion (samjhana)', 'Seedhi baat, sach, aur saamne wale ko sochne aur "na" kehne ki poori azaadi. Doctor jo risk aur fayde dono batata hai. Dost jo kehta hai: "Mera ye vichaar hai, par faisla tumhara."'], ['Manipulation (phansana)', 'Chhupa irada, adhoora sach, jaldi ka dabaav, darr ya guilt ka istemaal, aur "na" ko mushkil bana dena. Scammer jo kehta hai: "Abhi karo, warna jail."']],
      ['table', ['Test', 'Sawaal', 'Manipulation ka signal'], [
        ['Chhupa?', 'Agar saamne wale ko poori chaal pata chal jaaye, kya tab bhi ye kaam karega?', 'Nahi. Chaal tabhi chalti hai jab chhupi rahe.'],
        ['Choice?', 'Kya "na" kehne ki asli azaadi hai?', '"Na" par darr, guilt ya saza.'],
        ['Fayda?', 'Is faisle se fayda kiska hai?', 'Ek taraf ka fayda, doosre ka nuksaan.'],
        ['Time?', 'Kya sochne aur kisi se poochhne ka waqt diya ja raha hai?', '"Abhi ke abhi", "kisi ko mat batana".']
      ]],
      ['teacher', 'Ye chaar sawaal yaad kar lo: <b>chhupa? choice? fayda? time?</b> Poore level me har chaal ko inhi chaar sawaalon se jaanchenge. Inhe apni jeb ka metal detector samjho.'],

      ['h', 'Hot state: jab dimaag ka brake dheela ho jaata hai'],
      ['p', 'Economist George Loewenstein ne dikhaya ki hum do haalaton me bilkul alag faisle lete hain: <b>cold state</b> (shaant, aaram se) aur <b>hot state</b> (darr, gussa, laalach, sharam, bhookh, thakaan). Hot state me attention <b>sikud</b> jaata hai: bas saamne ka khatra ya inaam dikhta hai, baaki sab dhundhla. Cold state me baith kar hum sochte hain "aisa to kabhi nahi karenge", par hot state me wahi kar baithte hain. Ise <b>hot-cold empathy gap</b> kehte hain.'],
      ['p', 'Lagbhag har manipulation ka pehla kadam yahi hai: <b>tumhe hot state me dhakelna</b>, phir sochne ka waqt chheen lena. Ye chhe levers sabse common hain:'],
      ['list', [
        '<b>Darr</b>: "account band ho jaayega", "police aa rahi hai", "tumhari photo viral kar denge".',
        '<b>Laalach ya ummeed</b>: "₹25 lakh ki lottery", "ghar baithe ₹5,000 roz", "100% guaranteed return".',
        '<b>Jaldi (urgency)</b>: "sirf 10 minute", "aaj raat 9:30 baje bijli kat jaayegi".',
        '<b>Akelapan (isolation)</b>: "kisi ko mat batana", "family ko involve kiya to case bigdega".',
        '<b>Authority</b>: uniform, logo, "RBI officer", "senior sir", sarkari jaisi bhasha.',
        '<b>Sharam ya guilt</b>: "tumhari wajah se maa ki tabiyat bigdi", "log kya kahenge".'
      ]],
      ['teacher', 'Ek pattern note karo: scammer, toxic partner aur pushy salesperson, teeno <b>same levers</b> dabate hain. Sirf kapde alag hain. Ek baar levers pehchaan liye, to ye har jagah dikhne lagenge.'],

      ['h', 'Samajhdaar log kyun phanste hain?'],
      ['p', 'Sabse bada myth: "sirf bewakoof log phanste hain." Research ulta kehti hai. Fraud ke victims har umar aur har education level ke hote hain. Farak IQ ka nahi, <b>situation</b> ka hota hai: thakaan, akelapan, paise ki tangi, koi naya rishta, ya koi aisa topic jahan hum expert nahi.'],
      ['case', 'Gullibility ka expert khud phansa (2008)', 'Psychologist Stephen Greenspan ne <i>Annals of Gullibility</i> naam ki kitaab likhi: log dhoka kyun khaate hain. Usi saal unhone apni retirement bachat ka ek hissa Bernie Madoff ke fund me laga diya, jo itihaas ke sabse bade frauds me se ek nikla. Greenspan ne baad me khud likha ki bharosa, social proof (jaan-pehchaan wale bhi invest kar rahe the) aur apni samajh par zyada yakeen, teeno ne milkar kaam kiya. Lesson: <b>jaankari kaafi nahi, aadat aur system chahiye</b>.'],
      ['list', [
        '<b>Overconfidence</b>: "mujhe koi bewakoof nahi bana sakta" wali soch hi sabse bada risk hai.',
        '<b>Expertise ka illusion</b>: ek field ka expert doosri field me bhi khud ko smart maan leta hai (doctor crypto me, engineer stock tips me).',
        '<b>Bharosa aur tameez</b>: "officer se bahas karna theek nahi", "uncle ne bola hai to sahi hoga".',
        '<b>Sunk cost</b>: itna paisa ya time laga diya, ab peeche kaise hatein.',
        '<b>Sharam</b>: phansne ke baad bhi chup rehna, jisse chaal aur lambi chalti hai.'
      ]],
      ['myth', 'Manipulation sirf kamzor ya kam padhe-likhe logon par kaam karta hai.', 'Manipulation situation aur emotion par kaam karta hai. Doctor, engineer, professor, sab digital arrest jaise scams me phanse hain. Isliye bachav "main smart hoon" nahi, balki <b>"pehle pause, phir faisla"</b> wali aadat hai.'],

      ['h', 'Is level ka naksha'],
      ['steps', [
        ['8.2 Dark Triad', 'Wo personality traits jo manipulation ki taraf jhukaate hain, aur unke signals.'],
        ['8.3 Rishton me manipulation', 'Gaslighting, love bombing, guilt-trip, DARVO, silent treatment, coercive control.'],
        ['8.4 Bazaar ki chaalein', 'Dark patterns, decoy pricing, fake reviews, MLM aur attention trap.'],
        ['8.5 Scam ki psychology', 'Digital arrest, OTP/UPI fraud, task scams, sextortion, voice cloning.'],
        ['8.6 Group ka andhera', 'Cults, propaganda, fake news aur radicalization.'],
        ['8.7 Dhaal', 'Na kehna, boundaries, scripts, aur madad maangna aur dena.']
      ]],
      ['note', 'Ye level <b>pehchaan aur bachav</b> ke liye hai. Yahan likhi chaalein kisi par use karna galat to hai hi, kai baar <b>kanooni apraadh</b> bhi hai (fraud, extortion, domestic abuse). Agar tumhare ya kisi apne ke saath abhi aisa kuch ho raha hai, to Chapter 8.7 ke end me helplines hain. Cyber fraud ke liye turant <b>1930</b>, emergency me <b>112</b>.'],
      ['terms', [
        ['Dark psychology', 'Manipulation, dark traits aur coercion par research ke liye popular shabd; alag academic branch nahi.'],
        ['Manipulation', 'Chhupe tareeke se, kamzori ya emotion ka fayda utha kar, kisi ki soch ya faisla badalna.'],
        ['Persuasion', 'Khule, sachche tareeke se samjhana jahan saamne wale ke paas na kehne ki azaadi ho.'],
        ['Hot state', 'Darr, gussa, laalach ya thakaan jaisi emotional haalat jisme soch-samajh kam ho jaati hai.'],
        ['Hot-cold empathy gap', 'Shaant haalat me ye andaza na laga paana ki emotional haalat me hum kaise behave karenge (Loewenstein).'],
        ['Persuasion knowledge', 'Influence ki chaalon ki samajh, jo unhe pehchaanne aur rokne me madad karti hai (Friestad aur Wright, 1994).'],
        ['Affect labeling', 'Apni feeling ko shabd dena ("mujhe darr lag raha hai"), jisse emotional response thoda kam hota hai.']
      ]],
      ['think', 'Pichhli baar kab kisi ne tumse "abhi ke abhi" faisla karwane ki koshish ki thi? Us waqt chhe me se kaunse levers on the?', [
        'Jaise: sale me "sirf 2 piece bache" (jaldi + scarcity), ya kisi rishtedaar ka "abhi haan bolo warna bura lagega" (guilt + jaldi).',
        'Levers ka naam lene ki aadat hi pehli dhaal hai: naam lete hi hot state thoda thanda hota hai. Matthew Lieberman ki 2007 ki research me feelings ko shabd dene se brain ke alarm centre, amygdala, ka response kam hua. Ise <b>affect labeling</b> kehte hain.'
      ]]
    ],
    outro: 'Aaj ki class ka saar: manipulation dimaag ko hot state me dhakel kar sochne ka waqt chheen leta hai, aur ye kisi ke saath bhi ho sakta hai. Ab quiz do. Agle chapter me un logon se milenge jinke liye ye sab aadat jaisa hai: Dark Triad.',
    takeaways: [
      '"Dark psychology" popular shabd hai; asli research dark traits, social influence aur coercion/fraud par hai.',
      'Persuasion khula aur choice dene wala hai; manipulation chhupa, jaldbaaz aur ek-tarfa fayde wala.',
      'Chaar test: chhupa? choice? fayda? time?',
      'Manipulation pehle hot state banata hai: darr, laalach, jaldi, akelapan, authority, guilt.',
      'Phansna IQ ki nahi, situation ki baat hai; bachav "pause" ki aadat se hota hai.'
    ],
    quiz: [
      ['Persuasion aur manipulation me sabse bada farak kya hai?', ['Persuasion me emotion bilkul nahi hota', 'Manipulation me irada chhupa hota hai aur "na" kehna mushkil banaya jaata hai', 'Manipulation hamesha gair-kanooni hota hai', 'Persuasion sirf ads me hota hai'], 1, 'Emotion dono me ho sakta hai. Farak transparency aur choice ka hai: manipulation chhupi chaal aur dabaav par chalta hai.'],
      ['Loewenstein ke hisaab se "hot state" me kya hota hai?', ['Soch zyada saaf ho jaati hai', 'Attention sikud jaata hai aur turant ka khatra ya inaam hi dikhta hai', 'Memory badh jaati hai', 'Kuch nahi badalta'], 1, 'Darr, laalach ya gusse me attention narrow ho jaata hai, isliye manipulators pehle hot state banate hain.'],
      ['"Kisi ko mat batana, warna case bigad jaayega" kaunsa lever hai?', ['Social proof', 'Reciprocity', 'Isolation (akelapan)', 'Liking'], 2, 'Victim ko reality-check dene wale logon se kaat dena isolation hai. Ye har bade scam aur abusive rishte ka common lever hai.'],
      ['Stephen Greenspan ki kahani kya sikhati hai?', ['Experts kabhi nahi phanste', 'Gullibility par kitaab likhne wala bhi fraud me phans sakta hai; jaankari ke saath aadat chahiye', 'Madoff fraud chhota tha', 'Sirf buzurg phanste hain'], 1, 'Greenspan ne gullibility par kitaab likhi aur usi saal Madoff fraud me paisa gawaya.'],
      ['"Chhupa?" wala test kya poochhta hai?', ['Kya offer sasta hai?', 'Agar saamne wale ko poori chaal pata ho, kya tab bhi ye kaam karega?', 'Kya bolne wala famous hai?', 'Kya ye online hai?'], 1, 'Manipulation tabhi chalta hai jab chhupa rahe. Khul jaaye to kaam nahi karta.'],
      ['Apni feeling ko naam dena ("mujhe abhi darr lag raha hai") kyun madad karta hai?', ['Isse emotion aur badhta hai', 'Affect labeling se emotional response thoda kam hota hai aur sochne ki jagah banti hai', 'Isse manipulator darr jaata hai', 'Koi fayda nahi'], 1, 'Lieberman (2007) ki research me feelings ko shabd dene par amygdala ka response kam hua.']
    ],
    more: [
      ['Influence: The Psychology of Persuasion (Robert Cialdini)', GR('Influence Cialdini'), 'book'],
      ['Annals of Gullibility (Stephen Greenspan)', GR('Annals of Gullibility Greenspan'), 'book'],
      ['Manipulation vs persuasion explained', YT('manipulation vs persuasion psychology explained'), 'video']
    ]
  });

  /* 8.2 */
  C({
    id: 'dark-triad', level: 8, mins: 16, visual: 'darkTriad',
    visualCap: 'Har circle par click karo. Beech ka hissa D-factor hai: saare dark traits ka common core. Neeche se Tetrad ya Light Triad bhi dekho.',
    title: 'Dark Triad: narcissism, Machiavellianism aur psychopathy',
    tag: 'Charm ke peeche ka chehra: dark traits, D-factor, trolls ka sadism, aur aise logon se kaise nipatein',
    intro: 'Pichhli class me levers dekhe the. Aaj un logon ki baat karenge jo ye levers sabse aasaani se dabaate hain. Par pehle ek warning: is chapter ke baad har ex, boss ya rishtedaar "narcissist" lagne lagega. Label lagane se pehle science samajh lo.',
    hook: 'Naye office ka pehla hafta. Ek senior sabse charming hai: tumhara naam yaad rakhta hai, tareef karta hai, coffee pilata hai. Teen mahine baad tumhara idea meeting me uske naam se pesh hota hai, galti hone par blame tumhare sir aata hai, aur sawaal uthane par jawab milta hai: "Itne sensitive mat bano, sab tumhare bhale ke liye tha." Charm se control tak ke is safar ka psychology me ek naam hai.',
    blocks: [
      ['h', 'Teen dark traits'],
      ['p', '2002 me Delroy Paulhus aur Kevin Williams ne teen personality traits ko ek group me rakha, jo alag hote hue bhi aapas me jude hain. Unhone ise <b>Dark Triad</b> naam diya. Ye <b>clinical diagnosis nahi</b>, balki aam logon me paaye jaane wale traits hain: har insaan me thode-bahut, kuch me zyada.'],
      ['table', ['Trait', 'Core', 'Roz ki life me kaisa dikhta hai'], [
        ['Narcissism', 'Khud ko special maanna, tareef ki bhookh, entitlement', 'Har baat me khud ko centre banana, criticism par bhadak jaana, doosron ki success se jalna'],
        ['Machiavellianism', 'Thandi, lambi planning wali chaalbaazi; "end justifies the means"', 'Logon ko seedhi ki tarah use karna, sahi waqt par jhooth, gossip se groups todna'],
        ['Psychopathy (subclinical)', 'Kam empathy, kam guilt, impulsivity, thrill', 'Bina pachhtave ke rule todna, risk lena, doosron ke dard par befikri, upar se smooth charm']
      ]],
      ['p', 'Naam <b>Machiavellianism</b> Italian writer Niccolò Machiavelli ki kitaab <i>The Prince</i> (1513) se aaya, jisme raja ko satta bachane ke liye chaalbaazi ki salaah di gayi thi. 1970 me Richard Christie aur Florence Geis ne ise naapne ka scale (Mach-IV) banaya.'],
      ['teacher', 'Ruko, ek confusion abhi saaf kar lete hain. "Psychopath" film wala serial killer nahi hota. Research me <b>subclinical psychopathy</b> ka matlab hai empathy aur guilt ka kam hona. Aise zyada tar log jail me nahi, offices, families aur social media par milte hain, aksar kaafi successful bhi.'],

      ['h', 'Chautha trait: rozmarra ka sadism'],
      ['case', 'Keede aur "grinder" (Buckels aur saathi, 2013)', 'Participants ko kuch kaamon me se ek chunna tha: gande toilet saaf karna, barf jaise thande paani me haath rakhna, ya ek machine me zinda keede daal kar "pees" dena (keede asal me surakshit the, machine nakli thi). Jinhone "everyday sadism" ke scale par zyada score kiya, unhone keede wala kaam zyada chuna aur use enjoy bhi kiya. Is research ke baad Dark Triad me chautha trait juda: <b>Dark Tetrad</b>.'],
      ['p', '2014 ki ek study (Buckels, Trapnell aur Paulhus) me online <b>trolling</b> enjoy karne wale logon me sadism sabse strongly juda mila: "doosron ko pareshan dekhna mazedaar hai". Isliye trolls ko "feed na karna" (jawab na dena) aksar sabse achhi strategy hoti hai: unhe tumhara reaction hi chahiye.'],

      ['h', 'D-factor: sabka common core'],
      ['p', '2018 me Morten Moshagen, Benjamin Hilbig aur Ingo Zettler ne 9 dark traits (egoism, Machiavellianism, moral disengagement, narcissism, psychological entitlement, psychopathy, sadism, self-interest, spitefulness) ko saath analyse kiya. Sabke andar ek common dhaaga mila, jise unhone <b>D-factor</b> kaha: <b>apna fayda doosron ki keemat par badhana, aur saath me ise sahi thehrane wale vichaar</b> ("duniya aisi hi hai", "wo isi laayak tha").'],
      ['ex', 'Charm pehle, chehra baad me', [
        'Research dikhati hai ki narcissistic log <b>pehli mulaqat</b> me aksar zyada pasand kiye jaate hain: confident, funny, stylish. Delroy Paulhus (1998) ki study me group discussions ke shuru me log unhe pasand karte the, par saat hafton baad wahi log unhe sabse kam pasand karne lage.',
        'Isliye <b>first impression par bada faisla mat lo</b>, chahe wo naya partner ho, business partner, ya koi "guru". Time do, aur dekho ki wo insaan <b>doosron ke saath</b> kaisa hai: waiter, driver, junior, ex.'
      ]],
      ['teacher', 'Ek practical trick: kisi ko parakhna ho to dekho wo un logon se kaise baat karta hai jinse use koi fayda nahi. Ise "waiter test" samjho. Charm sabke liye hota hai, izzat asli logon ki pehchaan hai.'],

      ['h', 'Signals: kab alert hona hai'],
      ['list', [
        '<b>Rules sirf doosron ke liye</b>: khud late aana theek, tumhara late aana "disrespect".',
        '<b>Empathy ka gayab hona</b>: tumhari takleef ke waqt topic badal dena ya mazaak udana.',
        '<b>Aasaani se nikalta jhooth</b>: pakde jaane par bhi bina jhijhak nayi kahani.',
        '<b>Credit lena, blame dena</b>: jeet "meri", haar "tumhari" ya "team ki".',
        '<b>Bahut tez intimacy</b>: kuch dino me "tum jaisa koi nahi mila", bade vaade, raaz maangna.',
        '<b>Pachhtava nahi, sirf sorry ka natak</b>: sorry ke baad wahi pattern dobara.'
      ]],
      ['myth', 'Jisme ye signals dikhein, wo pakka narcissist ya psychopath hai, label laga do.', 'Traits ek <b>spectrum</b> par hote hain, aur do-chaar signals se diagnosis nahi hota. Narcissistic ya Antisocial Personality Disorder ka diagnosis sirf trained clinician lambi assessment ke baad karta hai. Psychiatrists ka <b>Goldwater rule</b> bhi kehta hai ki bina mile kisi public figure ka diagnosis mat karo. Label ki jagah <b>behaviour</b> par dhyan do: "ye behaviour mere liye theek nahi".'],

      ['h', 'Dark traits wale insaan se kaise nipatein'],
      ['steps', [
        ['Behaviour par focus, label par nahi', '"Tum narcissist ho" se jhagda badhta hai. "Meeting me mera idea apne naam se mat batana" saaf aur defend karne layak hai.'],
        ['Sab kuch likhit me', 'Office me baat ke baad ek email summary: "Jaisa aaj tay hua...". Credit chori aur "maine aisa kab kaha" dono mushkil ho jaate hain.'],
        ['Emotion kam dikhao', 'Kuch log reaction se hi khush hote hain. Chhote, boring, factual jawab (popular naam: "grey rock" method) kai baar unki dilchaspi khatam kar dete hain. Ye research-tested technique kam, practical salah zyada hai.'],
        ['"Sudhaarne" ka mission mat lo', 'Badlaav tab aata hai jab insaan khud chahe, aksar therapy ke saath. Tumhari zimmedari apni safety aur sukoon hai.'],
        ['Support system banao', 'Ek trusted dost, mentor ya HR jo tumhara reality-check kare. Akelapan unka sabse bada hathiyar hai.']
      ]],
      ['p', 'Achhi khabar bhi hai: 2019 me Scott Barry Kaufman aur saathiyon ne <b>Light Triad</b> ka idea diya: logon ko saadhan nahi, insaan maanna (Kantianism), har insaan ki izzat (humanism), aur logon ki achhai me bharosa (faith in humanity). Unki research me zyada tar log dark se zyada light traits ki taraf jhuke mile.'],
      ['terms', [
        ['Dark Triad', 'Narcissism, Machiavellianism aur subclinical psychopathy ka group (Paulhus aur Williams, 2002).'],
        ['Dark Tetrad', 'Dark Triad + everyday sadism.'],
        ['Narcissism', 'Grandiosity, tareef ki bhookh aur entitlement wala trait.'],
        ['Machiavellianism', 'Thandi, strategic chaalbaazi aur "end justifies the means" wali soch.'],
        ['Subclinical psychopathy', 'Kam empathy, kam guilt, impulsivity aur thrill-seeking, bina clinical diagnosis ke.'],
        ['Everyday sadism', 'Doosron ki takleef me maza lena, rozmarra ke chhote roop me.'],
        ['D-factor', 'Saare dark traits ka common core: doosron ki keemat par apna fayda, aur use sahi thehrana.'],
        ['Light Triad', 'Kantianism, humanism aur faith in humanity: dark traits ka ulta (Kaufman aur saathi, 2019).'],
        ['Goldwater rule', 'Psychiatric ethics ka niyam: bina examine kiye public figures ka diagnosis na karna.'],
        ['Grey rock method', 'Manipulative insaan ko chhote, neeras, factual jawab dena taaki unhe reaction na mile.']
      ]],
      ['think', 'Ek dost kehta hai: "Mera boss pakka psychopath hai." Is chapter ke hisaab se aage kya poochhna zyada kaam ka hai?', [
        'Label ki jagah behaviour poochho: "Wo exactly kya karta hai? Kab se? Sabke saath ya sirf tumhare saath?" Phir practical steps socho: likhit record, HR, support. Diagnosis ka kaam clinician ka hai; hamara kaam pattern pehchaan kar khud ko bachana hai.'
      ]]
    ],
    outro: 'To aaj humne dekha ki dark traits ek spectrum hain, charm aksar pehla parda hota hai, aur label ki jagah behaviour par dhyan dena zyada kaam ka hai. Quiz do. Agle chapter me sabse nazdeek ke maidan me chalenge: rishte, jahan manipulation pyaar ke kapde pehan kar aata hai.',
    takeaways: [
      'Dark Triad: narcissism, Machiavellianism, subclinical psychopathy; sadism jodne par Dark Tetrad.',
      'Ye spectrum traits hain, diagnosis nahi; label ki jagah behaviour par focus karo.',
      'D-factor: doosron ki keemat par apna fayda, aur use sahi thehrane wali soch.',
      'Charm pehli mulaqat me kaam karta hai; asli chehra time ke saath aur doosron ke saath behaviour me dikhta hai.',
      'Bachav: likhit record, kam emotional reaction, support system, aur "sudhaarne" ka mission nahi.'
    ],
    quiz: [
      ['"Dark Triad" shabd kisne diya?', ['Sigmund Freud', 'Paulhus aur Williams (2002)', 'Stanley Milgram', 'Robert Cialdini'], 1, '2002 me Delroy Paulhus aur Kevin Williams ne teen traits ko is naam se group kiya.'],
      ['Dark Tetrad me chautha trait kaunsa hai?', ['Neuroticism', 'Everyday sadism', 'Introversion', 'Perfectionism'], 1, 'Buckels aur saathiyon ki research ke baad everyday sadism ko joda gaya.'],
      ['D-factor ka core kya hai?', ['Gussa jaldi aana', 'Doosron ki keemat par apna fayda badhana aur use sahi thehrana', 'Sharmila hona', 'Bahut zyada sochna'], 1, 'Moshagen, Hilbig aur Zettler (2018) ne 9 dark traits me ye common core paaya.'],
      ['Paulhus (1998) ki study me narcissistic logon ke baare me kya mila?', ['Wo shuru se hi napasand the', 'Shuru me pasand kiye gaye, par saat hafton baad sabse kam pasand', 'Kisi ne notice nahi kiya', 'Wo sabse achhe leader nikle'], 1, 'Pehli impression achhi, lambe samay me rishta kharab. Isliye first impression par bade faisle risky hain.'],
      ['Office me koi baar-baar credit churata hai. Sabse practical pehla kadam?', ['Sabke saamne use psychopath bolna', 'Meeting ke baad email summary bhejna taaki record rahe', 'Hamesha chup rehna', 'Badla lena'], 1, 'Likhit record credit chori aur "maine kab kaha" dono ko mushkil banata hai.'],
      ['Trolling enjoy karne se sabse strongly kaunsa trait juda mila?', ['Sadism', 'Agreeableness', 'Conscientiousness', 'Openness'], 0, 'Buckels, Trapnell aur Paulhus (2014): trolls ko doosron ki pareshani me maza aata hai, isliye reaction na dena aksar behtar hai.'],
      ['Goldwater rule kya kehta hai?', ['Har kisi ka diagnosis online karo', 'Bina examine kiye public figures ka diagnosis mat karo', 'Psychiatrists politics me nahi aa sakte', 'Sirf medal winners ka test hota hai'], 1, 'Bina proper assessment ke diagnosis galat aur nuksaandeh ho sakta hai.']
    ],
    more: [
      ['Snakes in Suits (Paul Babiak aur Robert Hare)', GR('Snakes in Suits Babiak Hare'), 'book'],
      ['Without Conscience (Robert Hare)', GR('Without Conscience Robert Hare'), 'book'],
      ['Dark Triad explained', YT('dark triad personality psychology explained'), 'video'],
      ['Dark triad (Wikipedia)', 'https://en.wikipedia.org/wiki/Dark_triad', 'link']
    ]
  });

  /* 8.3 */
  C({
    id: 'relationship-manipulation', level: 8, mins: 18, visual: 'abuseCycle',
    visualCap: 'Lenore Walker ka cycle: dot ghoomta rehta hai, aur har chakkar me "maafi aur pyaar" wala hissa chhota, tension wala bada hota jaata hai. Kisi stage par click karo.',
    title: 'Rishton me manipulation: gaslighting, love bombing, guilt-trip',
    tag: 'Jab chaal pyaar ya parivaar ke naam par aaye: gaslighting, love bombing, FOG, DARVO, silent treatment aur coercive control',
    intro: 'Ye chapter shayad sabse personal lagega, kyunki yahan manipulation kisi anjaan scammer se nahi, kisi apne se aata hai. Padhte waqt koi chehra yaad aaye to ruk jaana, ek gehri saans lena, aur yaad rakhna: pattern ko naam dena kisi par ilzaam lagana nahi, khud ko saaf dekhna hai.',
    hook: '"Maine aisa kab kaha? Tum hamesha baat ko badha-chadha kar yaad rakhti ho." Pehli baar ye sunkar Neha ko laga shayad galti sach me uski hai. Phir ye har hafte hone laga. Ek saal baad Neha apni hi memory par shak karne lagi, har baat likh kar rakhne lagi, aur dosto se milna kam kar diya, kyunki "wo use pasand nahi karte the". Koi thappad nahi, chot ka koi nishaan nahi. Par andar kuch toot raha tha. Ise naam dena zaroori hai.',
    blocks: [
      ['h', 'Gaslighting: tumhari reality par hamla'],
      ['p', '<b>Gaslighting</b> wo manipulation hai jisme koi baar-baar tumhari memory, perception ya feelings ko jhootha thehrata hai, jab tak tum khud par shak na karne lago. Naam 1938 ke play <i>Gas Light</i> aur 1944 ki film se aaya: pati ghar ki gas lights dheemi karta hai aur patni ke notice karne par kehta hai "tumhe vaham ho raha hai". 2022 me Merriam-Webster dictionary ne "gaslighting" ko <b>word of the year</b> chuna.'],
      ['table', ['Gaslighting ka roop', 'Kaisa sunai deta hai'], [
        ['Inkaar', '"Maine aisa kabhi kaha hi nahi." (jabki kaha tha)'],
        ['Feelings ko chhota karna', '"Itni si baat par drama?" "Tum overreact kar rahe ho."'],
        ['Memory par shak', '"Tumhari memory kharab hai, doctor ko dikhao."'],
        ['Doosron ko gawah banana', '"Sab kehte hain tum unstable ho."'],
        ['Topic palatna', '"Asli problem to tumhara attitude hai."']
      ]],
      ['p', 'Har inkaar gaslighting nahi hota. Do log ek hi ghatna ko alag yaad rakh sakte hain, kyunki memory har baar reconstruct hoti hai. Gaslighting tab hai jab ye <b>pattern</b> ho, zyada tar ek hi taraf se ho, aur iska asar ye ho ki tum apni reality par bharosa khone lago.'],
      ['teacher', 'Yahan Level 3 ka memory chapter kaam aata hai. Memory sach me badal sakti hai, isliye gaslighting itna asar karta hai: shak ka beej pehle se mitti me hai. Iska antidote simple hai: <b>likh kar rakho</b>. Date, kya hua, kya kaha. Kaagaz par likhi baat ko "tumhe vaham hai" se mitaana mushkil hai.'],

      ['h', 'Love bombing aur intermittent reinforcement'],
      ['p', '<b>Love bombing</b>: rishte ki shuruaat me pyaar, tohfe, tareef aur attention ki baarish. "Tum jaisa koi nahi mila", roz ghanton baat, jaldi "soulmate" aur future plans. Shuru me ye romantic lagta hai. Problem tab hai jab ye <b>control ka setup</b> ho: pehle sab kuch do, phir dheere-dheere chheen lo, taaki saamne wala "shuruaat wala pyaar" wapas paane ke liye kuch bhi kare.'],
      ['p', 'Iske baad aata hai <b>intermittent reinforcement</b>: kabhi bahut pyaar, kabhi bina wajah thandak ya gussa. Kab kya milega, pata nahi. Level 3 ka <b>variable ratio schedule</b> yaad karo: slot machine aur reels isi se addictive hain. Rishte me bhi yahi hota hai: unpredictable pyaar sabse gehra bandhan banata hai.'],
      ['case', 'Traumatic bonding (Dutton aur Painter, 1981)', 'Donald Dutton aur Susan Painter ne abusive rishton ka study karke dikhaya ki do cheezein milkar ek bahut mazboot emotional bandhan banati hain: <b>power ka imbalance</b> aur <b>achhe-bure ka baari-baari aana</b>. Isliye bahar wale poochhte hain "chhodta/chhodti kyun nahi?", par andar wale ke liye ye bandhan nashe jaisa hota hai. Aam bhasha me ise <b>trauma bond</b> kehte hain.'],
      ['p', 'Psychologist Lenore Walker (1979) ne abusive rishton me ek <b>cycle</b> dekha: tension badhna → ghatna (gussa, apmaan, hinsa) → maafi aur pyaar ("honeymoon") → shaanti → phir tension. Upar ka graphic yahi dikhata hai: har chakkar ke saath honeymoon chhota aur tension lamba hota jaata hai. Har rishta is pattern me fit nahi hota, par jahan ye cycle dikhe, wahan "is baar sab badal jaayega" wali ummeed par dhyan se sochna.'],

      ['h', 'FOG: emotional blackmail'],
      ['p', 'Therapist Susan Forward ne <b>emotional blackmail</b> ko teen shabdon me samjhaya: <b>FOG</b> = Fear (darr), Obligation (farz ka bojh), Guilt (apraadh-bodh). Indian parivaaron me ye aksar pyaar aur sanskaar ke kapde pehan kar aata hai.'],
      ['table', ['FOG', 'Example', 'Asli sandesh'], [
        ['Fear', '"Agar us ladke se shaadi ki to is ghar ke darwaze band."', '"Meri marzi se chalo, warna nuksaan tumhara."'],
        ['Obligation', '"Humne tumhe padhaya-likhaya, ab hamari baat to maanni padegi."', '"Ehsaan ke badle apni azaadi do."'],
        ['Guilt', '"Tumhari wajah se maa ka BP badh gaya."', '"Meri feelings ki zimmedari tumhari hai."']
      ]],
      ['p', 'Forward ne blackmail karne walon ke chaar roop bataye: <b>punisher</b> ("aisa kiya to ghar se nikal denge"), <b>self-punisher</b> ("main khud ko kuch kar lunga/lungi"), <b>sufferer</b> ("main to bas dukh jhelne ke liye hoon") aur <b>tantalizer</b> ("meri baat maano to car dila denge").'],
      ['note', 'Agar koi apni jaan lene ki baat kare, to use kabhi halke me mat lo, chahe wo manipulation hi kyun na lage. Unki safety ke liye turant <b>112</b> ya Tele-MANAS <b>14416</b> se madad lo. Professionals ko jodna sahi kadam hai, lekin us dabaav me apni zindagi ka faisla badalna zaroori nahi.'],
      ['teacher', 'Ek baat dil se: FOG ka matlab ye nahi ki tumhare parents ya partner bure insaan hain. Bahut log yahi tareeka apne bachpan me seekh kar aaye hain. Farak pehchaanna hai: jo kehta hai "mujhe dukh hoga", wo feeling share kar raha hai; jo kehta hai "mujhe dukh hua to zimmedar tum", wo control kar raha hai.'],

      ['h', 'DARVO, silent treatment aur triangulation'],
      ['list', [
        '<b>DARVO</b> (psychologist Jennifer Freyd, 1997): pakde jaane par <b>D</b>eny (inkaar), <b>A</b>ttack (ulta hamla), <b>R</b>everse <b>V</b>ictim and <b>O</b>ffender (khud victim ban jaana). "Maine kuch nahi kiya. Tum mujh par ilzaam laga rahe ho? Asal me tum mujhe hurt kar rahe ho!"',
        '<b>Silent treatment</b>: saza ke taur par baat band kar dena, message "seen" karke reply na dena, din-din bhar ignore karna. Kipling Williams ke online ball game (Cyberball) me sirf kuch minute ball na milne par bhi log dukhi aur naraz hue, aur Naomi Eisenberger (2003) ke brain scans me physical pain jaise areas active hue. Isliye silent treatment itna chubhta hai.',
        '<b>Triangulation</b>: kisi teesre ko beech me laana: "Mera ex to aisa kabhi nahi karta tha", "Tumhari behen tumse zyada samajhdaar hai". Maksad: jalan aur insecurity paida karna.',
        '<b>Moving the goalposts</b>: jo maanga wo kar diya to nayi shart: "Haan theek hai, par..." Kabhi kaafi nahi hota.',
        '<b>Future faking</b>: bade vaade ("shaadi ke baad sab badal jaayega") jo kabhi poore nahi hote, bas abhi ka control bachate hain.'
      ]],

      ['h', 'Coercive control: jab chaal pinjra ban jaaye'],
      ['p', 'Sociologist Evan Stark (2007) ne <b>coercive control</b> ka idea diya: abuse sirf maarpeet nahi, balki chhote-chhote rules aur nigrani ka jaal hai jo dheere-dheere azaadi chheen leta hai: phone check karna, location hamesha on rakhwana, paise apne haath me rakhna, dosto aur parivaar se milna kam karwana, kapdon aur khaane par rules. UK ne 2015 me ise apraadh banaya. India me <b>Protection of Women from Domestic Violence Act, 2005</b> me physical ke saath <b>emotional, verbal aur economic abuse</b> ko bhi domestic violence maana gaya hai.'],
      ['ex', '"Pyaar karte ho to password do"', [
        'Aman aur Sana college me hain. Shuru me Sana ka Aman ka phone check karna "cute jealousy" laga. Phir location hamesha on rakhne ki shart aayi, phir "wo dost tumhe message kyun karti hai", phir "aaj mere bina party gaye to rishta khatam". Har kadam chhota tha, isliye kabhi alarm nahi baja.',
        'Ye Level 5 ka <b>foot-in-the-door</b> hi hai: chhoti shart maanne ke baad agli badi shart maanna aasaan. Aur yaad rakho: manipulation kisi bhi gender ka insaan kar sakta hai, aur kisi bhi gender ke saath ho sakta hai.'
      ]],
      ['table', ['Healthy jhagda', 'Manipulation'], [
        ['Masle par baat hoti hai', 'Insaan par hamla hota hai'],
        ['Dono ki feelings maayne rakhti hain', 'Sirf ek ki feelings sach maani jaati hain'],
        ['Galti maani jaati hai, pattern badalta hai', 'Sorry ke baad wahi pattern, ya sorry bhi nahi'],
        ['"Na" kehna safe hai', '"Na" par saza: chuppi, gussa, dhamki'],
        ['Dosto aur parivaar se rishta bana rehta hai', 'Dheere-dheere akelapan badhta hai']
      ]],

      ['h', 'Kya karein: practical scripts'],
      ['steps', [
        ['Pattern ko naam do (pehle apne andar)', 'Diary me likho: date, kya hua, kya kaha, tumhe kaisa laga. Ye tumhara reality anchor hai.'],
        ['Reality-check lo', 'Ek trusted dost, sibling ya counsellor ko poori baat batao. Akelapan manipulation ki oxygen hai.'],
        ['Boundary saaf bolo', '"Phone share karna mujhe theek nahi lagta. Ye trust ki kami nahi, meri privacy hai." Feeling ke saath, bina lambi safai ke.'],
        ['Gaslighting par jawab', '"Tumhe aisa yaad hai, mujhe alag yaad hai. Meri feelings bhi sach hain." Bahas jeetne ki koshish mat karo; apni reality par tike raho.'],
        ['DARVO par jawab', '"Abhi hum us baat par hain jo hua tha. Tumhari feelings par uske baad baat karenge." Topic par wapas aao.'],
        ['Safety pehle', 'Darr lagta ho, dhamki ya hinsa ho, to akele confront mat karo. Women Helpline <b>181</b>, emergency <b>112</b>, NCW helpline <b>7827-170-170</b>, ya mental health ke liye Tele-MANAS <b>14416</b>. Kisi trusted insaan ke saath exit plan banao.']
      ]],
      ['terms', [
        ['Gaslighting', 'Baar-baar kisi ki memory, perception ya feelings ko jhootha thehrana, jab tak wo khud par shak na karne lage.'],
        ['Love bombing', 'Rishte ki shuruaat me pyaar aur attention ki itni baarish ki saamne wala jaldi jud jaaye, aksar control ke liye.'],
        ['Intermittent reinforcement', 'Kabhi inaam, kabhi nahi: unpredictable pattern jo sabse mazboot bandhan ya aadat banata hai.'],
        ['Trauma bond', 'Abuse aur pyaar ke baari-baari aane se bana gehra emotional bandhan (Dutton aur Painter).'],
        ['Cycle of abuse', 'Tension → ghatna → maafi/honeymoon → shaanti ka dohrata chakkar (Lenore Walker).'],
        ['Emotional blackmail', 'Fear, Obligation aur Guilt (FOG) se kisi ko apni baat maanne par majboor karna (Susan Forward).'],
        ['DARVO', 'Deny, Attack, Reverse Victim and Offender: pakde jaane par khud victim ban jaana (Jennifer Freyd).'],
        ['Silent treatment', 'Saza ke taur par baat band karke ignore karna.'],
        ['Triangulation', 'Teesre insaan ko beech me laakar jalan ya insecurity paida karna.'],
        ['Coercive control', 'Nigrani aur rules ka pattern jo dheere-dheere kisi ki azaadi aur rishte chheen le (Evan Stark).'],
        ['Future faking', 'Aise bade vaade jo poore karne ka irada nahi, bas abhi ka control bachane ke liye.']
      ]],
      ['think', 'Tumhara dost kehta hai: "Meri girlfriend roz mera phone check karti hai, par wo bas mujhse bahut pyaar karti hai." Is chapter ke hisaab se kaunse sawaal poochhna madadgaar hoga?', [
        'Judge mat karo; khule sawaal poochho: "Agar tum mana karo to kya hota hai? Kya dosto se milna kam hua hai? Kya tum uske gusse ke darr se cheezein chhupane lage ho?"',
        'Agar "na" kehna safe nahi, aur akelapan badh raha hai, to ye pyaar se zyada control ke signals hain. Dost ko bas itna yakeen dilao ki tum saath ho, chahe wo abhi kuch na kare.'
      ]]
    ],
    outro: 'Aaj ka saar: rishton me manipulation pyaar, farz ya chinta ke kapde pehan kar aata hai, aur pattern, akelapan aur "na" par saza uske asli nishaan hain. Quiz zaroor do, aur agar is chapter ne kuch apna yaad dilaya ho to kisi bharose wale se baat karna. Agle chapter me bazaar chalenge, jahan yahi chaalein apps aur offers ke design me chhupi hain.',
    takeaways: [
      'Gaslighting: baar-baar reality ko jhootha thehrana; antidote: likhit record aur bahar ka reality-check.',
      'Love bombing + intermittent reinforcement = trauma bond; variable reward sabse gehra bandhan banata hai.',
      'FOG (Fear, Obligation, Guilt) emotional blackmail ka formula hai.',
      'DARVO, silent treatment, triangulation, moving goalposts aur future faking common tactics hain.',
      'Coercive control chhote rules aur nigrani ka jaal hai; "na" par saza aur badhta akelapan sabse bade red flags.'
    ],
    quiz: [
      ['"Gaslighting" naam kahan se aaya?', ['Ek scientist ke naam se', '1938 ke play aur 1944 ki film se, jisme pati gas lights dheemi karke patni ko vaham ka ehsaas dilata hai', 'Gas cylinder scam se', 'Ek medical disorder se'], 1, 'Play "Gas Light" aur film "Gaslight" me pati patni ki perception ko jhootha thehrata hai.'],
      ['Unpredictable pyaar aur thandak ka baari-baari aana kis concept se juda hai?', ['Fixed interval schedule', 'Intermittent (variable) reinforcement', 'Extinction', 'Habituation'], 1, 'Variable reinforcement sabse mazboot aur mitne me mushkil pattern banata hai, isliye trauma bond itna gehra hota hai.'],
      ['FOG ka full form kya hai?', ['Fear, Obligation, Guilt', 'Focus, Order, Goal', 'Friend, Others, Group', 'Fight, Obey, Give'], 0, 'Susan Forward ke hisaab se emotional blackmail darr, farz aur guilt par chalta hai.'],
      ['"Maine kuch nahi kiya, ulta tum mujhe hurt kar rahe ho!" kis tactic ka example hai?', ['Love bombing', 'DARVO', 'Future faking', 'Foot-in-the-door'], 1, 'Deny, Attack, Reverse Victim and Offender: pakde jaane par khud victim ban jaana (Freyd, 1997).'],
      ['Cyberball experiments ne silent treatment ke baare me kya dikhaya?', ['Ignore hone ka koi asar nahi hota', 'Kuch minute ka ignore bhi dard deta hai, aur brain me pain jaise areas active hote hain', 'Sirf bachchon ko farak padta hai', 'Isse log khush hote hain'], 1, 'Williams aur Eisenberger ki research: social rejection physical pain jaisa process hota hai.'],
      ['Coercive control ki pehchaan kya hai?', ['Ek baar ka jhagda', 'Chhote rules aur nigrani ka jaal jo dheere-dheere azaadi aur rishte chheen le', 'Sirf maarpeet', 'Partner ka busy rehna'], 1, 'Evan Stark: abuse sirf hinsa nahi, control ka pattern bhi hai.'],
      ['Gaslighting ke khilaf sabse practical pehla kadam?', ['Har baar bahas jeetna', 'Date ke saath likh kar record rakhna aur trusted insaan se reality-check lena', 'Chup chaap maan lena', 'Badle me gaslight karna'], 1, 'Likhit record aur bahar ka reality-check tumhari perception ko anchor dete hain.']
    ],
    more: [
      ['Emotional Blackmail (Susan Forward)', GR('Emotional Blackmail Susan Forward'), 'book'],
      ['Why Does He Do That? (Lundy Bancroft)', GR('Why Does He Do That Lundy Bancroft'), 'book'],
      ['Gaslighting explained (psychology)', YT('gaslighting psychology explained signs'), 'video'],
      ['DARVO (Wikipedia)', 'https://en.wikipedia.org/wiki/DARVO', 'link']
    ]
  });

  /* 8.4 */
  C({
    id: 'dark-patterns', level: 8, mins: 15, visual: 'darkPatterns',
    visualCap: 'Ek nakli checkout screen. Har numbered hissa ek dark pattern hai: click karke pehchaano, ya "X-ray" on karke sab ek saath dekho.',
    title: 'Bazaar ki chaalein: dark patterns, MLM aur attention trap',
    tag: 'Apps, sales aur "business opportunity" me chhupi manipulation: CCPA ke dark patterns, decoy pricing, fake reviews, MLM aur infinite scroll',
    intro: 'Pichhle chapter ki chaalein rishton me thi. Aaj wahi chaalein code aur design me dekhenge: wo button jo dikhta nahi, wo timer jo kabhi khatam nahi hota, wo "sirf 2 room bache". Is class ke baad online shopping karte waqt tumhari nazar badal jaayegi, pakka.',
    hook: 'Raat 11 baje flight booking. "Sirf 2 seats bachi hain!" Timer chal raha hai: 04:59. Seat select karne gaye to ek paid seat pehle se chuni hui. Travel insurance ka box pehle se ticked. Aakhri page par "convenience fee" alag se. Aur insurance hatane ke liye button par likha hai: "Nahi, mujhe safar me risk lena pasand hai." Kisi ne seedha jhooth nahi bola... ya bola? Ise kehte hain <b>dark patterns</b>.',
    blocks: [
      ['h', 'Dark patterns: design jo tumhare khilaf kaam kare'],
      ['p', '2010 me UX designer Harry Brignull ne <b>dark patterns</b> shabd diya (ab inhe "deceptive patterns" bhi kehte hain): website ya app ka aisa design jo tumhe wo karne ki taraf dhakele jo tum shayad nahi chahte: zyada kharch, zyada data dena, ya subscription me phans jaana.'],
      ['p', 'India me <b>Central Consumer Protection Authority (CCPA)</b> ne 2023 me <b>Guidelines for Prevention and Regulation of Dark Patterns</b> jaari ki, jinme 13 tarah ke dark patterns ko unfair trade practice maana gaya. Kuch sabse common:'],
      ['table', ['Dark pattern', 'Kaisa dikhta hai', 'Kaunsa lever'], [
        ['False urgency', '"Sirf 5 min me offer khatam", nakli countdown, "12 log ye dekh rahe hain"', 'Scarcity + jaldi'],
        ['Basket sneaking', 'Checkout par bina poochhe insurance, donation ya add-on judna', 'Default ki taakat'],
        ['Confirm shaming', '"Nahi, mujhe paise bachana pasand nahi" jaisa mana karne ka button', 'Sharam'],
        ['Drip pricing', 'Shuru me kam daam, aakhri step par fees judti jaati hain', 'Commitment (ab itna aage aa gaye)'],
        ['Subscription trap', 'Join karna ek click, cancel karna saat screen, ya option chhupa hua', 'Friction'],
        ['Forced action', '"App download karo tabhi aage badho", "contacts do warna service nahi"', 'Majboori'],
        ['Disguised ads', 'Ad jo review, news ya content jaisa dikhe', 'Bharosa'],
        ['Nagging', 'Baar-baar popup: "Notifications on karo?" jab tak haan na kaho', 'Thakaan']
      ]],
      ['teacher', 'Level 7 ka "nudge" yaad hai? Default aur choice architecture se log achhe faisle ki taraf bhi dhakel sakte hain. Dark pattern wahi tool hai, bas <b>ulti disha</b> me: tumhare fayde ki jagah company ke fayde ke liye. Richard Thaler ne iske liye ek mazedaar shabd diya: <b>sludge</b>.'],

      ['h', 'Daam ki chaalein: decoy aur anchor'],
      ['case', 'The Economist ka subscription (Dan Ariely)', [
        'Behavioral economist Dan Ariely ne MIT students ko ek asli ad jaisa offer dikhaya: <b>Web only $59</b>, <b>Print only $125</b>, <b>Print + Web $125</b>. 84% ne Print + Web chuna. Kisi ne Print only nahi liya.',
        'Phir "Print only" hata diya gaya. Ab 68% ne sasta Web only chuna! Bekaar dikhne wala "Print only" asal me <b>decoy</b> tha: uske saath tulna karke combo "free ka deal" lagta tha. Menu ka bahut mehenga dish aur popcorn ke medium-large size bhi yahi kaam karte hain.'
      ]],
      ['p', '<b>Anchoring</b> (Level 7): pehle bada number dikhao, phir chhota bhi "sasta" lagega. "<s>₹4,999</s> aaj sirf ₹1,499!" Asli keemat kya thi, aur kisne tay ki? Sale se pehle daam badha kar phir "discount" dena isi ka roop hai.'],
      ['p', '<b>Fake reviews aur nakli social proof</b>: paid 5-star reviews, bots, "10,000+ happy customers". India me 2022 me <b>BIS ne online consumer reviews ke liye standard IS 19000</b> banaya, jo paid ya incentivised reviews ko saaf batane ki baat karta hai. Phir bhi review padhte waqt 3-star wale zaroor padho: asli baat aksar wahin milti hai.'],

      ['h', 'MLM: "business opportunity" ke kapdon me pyramid'],
      ['p', '<b>Multi-level marketing (MLM)</b> me kamaai product bechne se zyada <b>naye log jodne</b> par tiki hoti hai. Upar ke kuch log kamate hain; neeche ke zyada tar log apna paisa, time aur rishte gawa dete hain. India me <b>Prize Chits and Money Circulation Schemes (Banning) Act, 1978</b> money circulation schemes par rok lagata hai, aur <b>Consumer Protection (Direct Selling) Rules, 2021</b> pyramid schemes ko mana karte hain. Phir bhi naye naamon se ye chalti rehti hain.'],
      ['ex', 'Purane school dost ka achanak call', [
        'Saalon baad ek purana dost call karta hai: "Yaar, ek opportunity hai, sirf tujhe bata raha hoon." Meeting ek hotel ke hall me. Stage par "diamond level" wale apni car aur Dubai trip ki photos dikhate hain. Sab taaliyan bajate hain, gale milte hain. "Bas ₹30,000 ka starter kit lo aur apne do log jodo."',
        'Levers gino: <b>liking</b> (purana dost), <b>social proof</b> (bheed aur taaliyan), <b>authority</b> ("diamond level"), <b>scarcity</b> ("aaj join karo to bonus"), <b>commitment</b> (paisa daalne ke baad peeche hatna mushkil), aur <b>love bombing</b> (naye member par pyaar ki baarish). Kamaai na ho to blame bhi tum par: "mehnat kam ki, mindset negative hai".'
      ]],
      ['list', [
        '<b>Red flag 1</b>: joining fee ya mehnga starter kit.',
        '<b>Red flag 2</b>: kamaai ka zor product par nahi, recruitment par.',
        '<b>Red flag 3</b>: "financial freedom", "boss bano" jaisi bhasha; income proof ki jagah lifestyle photos.',
        '<b>Red flag 4</b>: sawaal poochhne par "negative log" ka label, aur rishtedaaron ki list banwana.'
      ]],

      ['h', 'Attention trap: jab product tum ho'],
      ['p', 'Free apps paisa tumhare <b>attention</b> se kamaate hain: jitna zyada scroll, utne zyada ads. Isliye design aisa hota hai ki rukna mushkil ho: <b>infinite scroll</b> (koi end nahi; ise banane wale Aza Raskin ne baad me khud iske asar par afsos jataya), <b>autoplay</b>, laal notification dots, <b>streaks</b> (ek din chhoota to sab khatam), aur pull-to-refresh, jise former Google design ethicist Tristan Harris <b>slot machine</b> jaisa kehte hain: kabhi naya mila, kabhi nahi, yaani wahi variable reward.'],
      ['teacher', 'Ek mini experiment karo: aaj raat phone ka screen time dekho, phir socho ki usme se kitna time tumne <b>chuna</b> tha aur kitna app ne le liya. Faisla tumhara hai, par ab tumhe pata hai ki screen ke us paar ek poori team tumhara attention jeetne ke liye baithi hai.'],

      ['h', 'Bachav: smart consumer ki checklist'],
      ['steps', [
        ['Timer dikhe to ruko', 'Nakli urgency ka ilaaj: page band karo, 10 minute baad aao. Offer asli hoga to tab bhi hoga.'],
        ['Aakhri page ka total dekho', 'Pehla daam nahi, final amount compare karo. Pehle se ticked boxes hatao.'],
        ['Cancel ka raasta pehle dhoondo', 'Free trial se pehle dekho ki cancel kaise hota hai. Phone me reminder lagao.'],
        ['Opportunity par 3 sawaal', 'Paisa kahan se aata hai: product se ya naye logon se? Upar wale ki asli income ka proof kya hai? Join karne ki fee kyun?'],
        ['Shikayat karo', 'National Consumer Helpline <b>1915</b> ya consumerhelpline.gov.in, aur e-Daakhil portal par online consumer complaint.']
      ]],
      ['terms', [
        ['Dark pattern', 'Aisa design jo user ko uski marzi ke khilaf faisle ki taraf dhakele (Harry Brignull, 2010).'],
        ['False urgency', 'Nakli timer ya "sirf kuch bache" jaisa dabaav taaki jaldi faisla ho.'],
        ['Basket sneaking', 'Checkout par bina saaf marzi ke cart me cheez jod dena.'],
        ['Confirm shaming', 'Mana karne ke option ko sharmnaak bana kar haan kehwana.'],
        ['Drip pricing', 'Pehle kam daam dikhana, phir aakhri steps me fees jodte jaana.'],
        ['Subscription trap', 'Join aasaan, cancel bahut mushkil.'],
        ['Decoy effect', 'Ek bekaar teesra option jodne se kisi khaas option ka achha lagna.'],
        ['Sludge', 'Nudge ka ulta: design jo friction ya chaal se logon ko unke nuksaan wale faisle ki taraf dhakele.'],
        ['Multi-level marketing (MLM)', 'Business model jisme kamaai ka bada hissa naye log jodne par tika ho.'],
        ['Attention economy', 'Aisa bazaar jahan logon ka attention hi asli product hai jo advertisers ko bikta hai.'],
        ['Infinite scroll', 'Bina end wali feed jo rukne ka natural pal hi khatam kar deti hai.']
      ]],
      ['think', 'Ek food app checkout par likhta hai: "Delivery partner ko ₹20 tip pehle se add hai. Hatane ke liye yahan click karo." Ye dark pattern hai ya nahi? Kyun?', [
        'Ye pehle se ticked add-on hai (basket sneaking jaisa): default tumhare liye tay kar diya gaya. Tip dena achha kaam ho sakta hai, par manipulation ka sawaal "kaam achha hai ya bura" nahi, balki "kya choice saaf aur azaad thi?" hai.',
        'Behtar design: "Tip add karna hai? ₹10 / ₹20 / ₹30 / Abhi nahi", sab barabar dikhte hue.'
      ]]
    ],
    outro: 'Aaj humne dekha ki manipulation sirf insaan nahi karte, design bhi karta hai: nakli timer, chhupe charges, decoy daam aur MLM ki chamak. Quiz do, aur agli baar checkout par ek second ruk kar total zaroor dekhna. Agla chapter sabse zaroori hai: scams, jo sach me logon ki zindagi bhar ki kamaai le jaate hain.',
    takeaways: [
      'Dark patterns design ke zariye manipulation hain; India me CCPA ki 2023 guidelines 13 patterns ko unfair maanti hain.',
      'False urgency, basket sneaking, confirm shaming, drip pricing aur subscription trap sabse common hain.',
      'Decoy aur anchor daam ki tulna ko modte hain; fake reviews nakli social proof hain.',
      'MLM ki kamaai recruitment par tiki hoti hai; joining fee aur "financial freedom" wali bhasha red flags hain.',
      'Free apps attention bechti hain: infinite scroll, streaks aur variable rewards se.'
    ],
    quiz: [
      ['"Dark patterns" shabd kisne diya?', ['Harry Brignull (2010)', 'Daniel Kahneman', 'Steve Jobs', 'CCPA'], 0, 'UX designer Harry Brignull ne 2010 me deceptive design ko ye naam diya.'],
      ['India me dark patterns par guidelines kisne jaari ki?', ['RBI', 'Central Consumer Protection Authority (CCPA), 2023', 'ISRO', 'UGC'], 1, 'CCPA ki 2023 guidelines me 13 dark patterns ko unfair trade practice maana gaya.'],
      ['Checkout par bina poochhe insurance jud jaana kaunsa dark pattern hai?', ['Confirm shaming', 'Basket sneaking', 'Nagging', 'Disguised ad'], 1, 'Cart me bina tumhari saaf marzi ke cheez judna basket sneaking hai.'],
      ['Economist subscription study me "Print only $125" option ka kaam kya tha?', ['Sabse zyada bikna', 'Decoy banna taaki Print + Web achha deal lage', 'Students ko confuse karna band karna', 'Kuch nahi'], 1, 'Decoy hatate hi zyada tar logon ne sasta Web only chuna.'],
      ['MLM ka sabse bada red flag kya hai?', ['Product achha hona', 'Kamaai ka zor naye log jodne aur joining fee par hona', 'Online bechna', 'Team me kaam karna'], 1, 'Jab income ka srot recruitment ho, neeche ke zyada tar log nuksaan me rehte hain.'],
      ['Pull-to-refresh ko slot machine jaisa kyun kaha jaata hai?', ['Isme paise lagte hain', 'Kabhi naya content milta hai, kabhi nahi: variable reward', 'Ise casino ne banaya', 'Isme lights hoti hain'], 1, 'Unpredictable reward sabse zyada baar-baar check karne wala behaviour banata hai.'],
      ['"Nahi, mujhe paise bachana pasand nahi" button kaunsa pattern hai?', ['Drip pricing', 'Confirm shaming', 'Forced action', 'False urgency'], 1, 'Mana karne ko sharmnaak bana kar haan kehwana confirm shaming hai.']
    ],
    more: [
      ['Deceptive Design (Harry Brignull)', 'https://www.deceptive.design/', 'link'],
      ['Predictably Irrational (Dan Ariely)', GR('Predictably Irrational Ariely'), 'book'],
      ['Tristan Harris: attention economy', YT('Tristan Harris attention economy TED'), 'video'],
      ['National Consumer Helpline', 'https://consumerhelpline.gov.in/', 'link']
    ]
  });
})();
