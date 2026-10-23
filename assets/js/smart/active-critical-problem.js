/* Smart Dimaag · Active dimaag, critical thinking, problem solving. Format: README.md ("Smart Dimaag ka format"). */
(function () {
  const K = window.PSY.skill;

  K({
    id: 'five-whys', cat: 'problem', level: 1,
    q: 'Kisi problem ki asli jad tak kaise pahunchein?',
    short: '"Kyun?" ko paanch baar poochho. Pehla jawab aksar sirf symptom hota hai; jad uske neeche chhupi hoti hai.',
    why: [
      'Ye technique Toyota ke founder Sakichi Toyoda se judi hai, aur Taiichi Ohno ne ise Toyota Production System ka hissa banaya. Machine ruki to sirf fuse badalne ki jagah poocha gaya: fuse kyun uda? Bearing kyun garam hua? Oil pump kyun nahi chala? Pump ka shaft kyun ghisa? Jab tak asli wajah (pump me filter na hona) na mil gayi.',
      'Psychology ke hisaab se hamara dimaag pehle dikhne wale kaaran par ruk jaata hai (fast System 1, Level 3). Har "kyun" dheeme, sochne wale System 2 ko jagata hai aur hume symptom se system tak le jaata hai.'
    ],
    steps: [
      ['Problem ek line me likho', 'Specific aur naapne layak: "Is mahine 3 deadlines miss hui", na ki "main bekaar hoon".'],
      ['Pehla "kyun?"', 'Seedha kaaran: "Kaam aakhri din tak latakta raha."'],
      ['Har jawab par phir "kyun?"', 'Har baar jawab ko facts se check karo, kahani se nahi.'],
      ['Jad pehchaano', 'Jahan jawab aisi cheez ho jo tumhare control me hai, aur jise badalne se upar ki saari kadiyan theek ho jaayein.'],
      ['Ek chhota fix test karo', 'Ek hafte ke liye try karo, phir dekho problem kam hui ya nahi.']
    ],
    example: [
      'Neha har mahine salary aane ke baad 20 tareekh tak broke ho jaati hai.',
      'Kyun? Paise khatam ho jaate hain. Kyun? Online orders bahut hote hain. Kyun? Raat ko thak kar app kholti hai aur "deal" dikh jaati hai. Kyun? Raat ko phone hi relax karne ka akela tareeka hai. Kyun? Din bhar me koi break ya hobby nahi hai.',
      'Jad paisa nahi, <b>thakaan aur boredom</b> nikli. Fix: raat 10 baje ke baad shopping apps logout, aur shaam ko 20 minute walk. Agle mahine kharche kaafi kam hue. Sirf budget app se ye kabhi theek nahi hota, kyunki wo symptom ka ilaaj tha.'
    ],
    script: [
      ['Team meeting me jab sab blame dhoondh rahe hon', '"Kaun galat tha, ye baad me. Pehle samajhte hain ki ye hua kyun, aur uske peeche kya tha."'],
      ['Dost ki problem sunte waqt', '"Achha, aur aisa kyun hua, tumhe kya lagta hai?" (bina judge kiye, bas jad tak jaane me madad)']
    ],
    mistakes: [
      'Kisi insaan par ruk jaana ("kyunki Rahul laaparwah hai"). Insaan ke peeche ka system dekho: Rahul ke paas checklist kyun nahi thi?',
      'Andaze ko fact maan lena. Har "kyun" ka jawab observation ya data se aaye.',
      'Exactly 5 par atakna. Kabhi 3 me jad mil jaati hai, kabhi 7 lagte hain.'
    ],
    drill: 'Aaj ki ek chhoti problem lo (jaise "subah late uthna" ya "phone par time barbaad hona") aur paper par 5 baar "kyun?" likho. Aakhri jawab par ek chhota fix kal try karo.',
    teacher: 'Ye technique sunne me bachchon jaisi lagti hai, aur yahi iski taakat hai. Bachche "kyun" poochhna band nahi karte; hum bade hokar band kar dete hain.',
    chapters: ['thinking-decisions', 'critical-thinking'],
    tags: ['root cause', 'toyota', 'problem', '5 whys', 'jad']
  });

  /* ---------- ACTIVE: tez, jaagta dimaag ---------- */

  K({
    id: 'subah-dimaag-tez', cat: 'active', level: 1,
    q: 'Subah uthte hi dimaag tez aur fresh kaise karein?',
    short: 'Pehle neend poori karo, phir uthte hi roshni, thoda movement aur paani. Phone baad me. Koi jaadu nahi, par ye chaar cheezein dimaag ki "boot" speed sach me badalti hain.',
    why: [
      'Uthne ke baad kuch der dimaag dhundhla rehta hai. Ise <b>sleep inertia</b> kehte hain: dimaag ke kuch hisse abhi bhi aadhe neend me hote hain. Ye normal hai, aur iske upar jo karte ho wahi decide karta hai ki ye jaldi hatega ya nahi.',
      'Hamari body clock (<b>circadian rhythm</b>) ko sabse strong signal roshni se milta hai. Subah ki din wali roshni aankhon tak pahunchne se body ko pata chalta hai ki din shuru ho gaya, aur raat ko neend bhi time par aane me madad milti hai (Level 2, neend wala chapter).',
      'Halki exercise ke turant baad attention aur mood me chhota sa sudhaar research me baar baar dikha hai. Chhota, magar real. Neend ki kami ko koi cheez cover nahi karti: kam neend me attention aur memory dono girte hain, chahe kitni bhi chai pi lo.'
    ],
    steps: [
      ['Raat se shuru karo', 'Subah ka dimaag raat ki neend se banta hai. Roz lagbhag ek hi time par sona aur uthna, weekend par bhi bahut zyada farak nahi.'],
      ['Uthte hi roshni', 'Parda kholo, balcony ya chhat par 5-10 minute. Baadal ho tab bhi bahar ki roshni andar ke bulb se kaafi zyada hoti hai.'],
      ['Body hilao', '10 squats, thodi stretching, ya seedhiyan chadhna. Pasina nahi chahiye, bas khoon ka daura.'],
      ['Ek glass paani', 'Raat bhar paani nahi piya. Halki dehydration bhi sir bhaari kar sakti hai.'],
      ['Phone ko 20 minute ruko', 'Uthte hi notifications khol li, to dimaag tumhare plan ki jagah doosron ke agenda par chalne lagta hai.']
    ],
    example: [
      'Arjun, Pune me BCom final year, roz 7 baje alarm snooze karta tha, bistar me hi 25 minute Instagram, phir bhaag kar college. Pehla lecture "dhund" me jaata tha. Wo khud ko "morning person nahi hoon" bolta tha.',
      'Usne ek hafte ka experiment kiya: phone charger kamre ke bahar, alarm ke saath hi uth kar balcony par jaana, wahan 10 squats aur paani ka glass. Instagram sirf nashte ke baad. Pehle do din bura laga, teesre din se pehle lecture me notes khud bante gaye.',
      'Sabse bada badlaav kahan se aaya? Arjun ne note kiya ki phone kamre se bahar hone ki wajah se wo raat ko bhi 40 minute pehle so jaata tha. Asli fix subah ka nahi, <b>raat ka</b> tha.'
    ],
    mistakes: [
      'Neend kaat kar "5 baje uthne wale successful log" ko copy karna. Kam neend ke saath jaldi uthna dimaag ko tez nahi, slow karta hai.',
      'Chai ya coffee ko neend ka replacement samajhna. Caffeine thakaan ko chhupata hai, mitata nahi.',
      'Ek din try karke chhod dena. Body clock ko set hone me kuch din lagte hain.'
    ],
    drill: 'Aaj raat phone ko bistar se door charge par lagao. Kal subah uthte hi 5 minute bahar ki roshni, 10 squats aur ek glass paani. Shaam ko 1 se 10 tak likho ki pehle 2 ghante dimaag kaisa laga.',
    teacher: 'Mujhe bhi lagta tha main subah wala insaan nahi hoon. Phir samajh aaya ki main subah wala nahi, <i>raat ko late phone</i> wala insaan tha.',
    chapters: ['consciousness-sleep', 'nervous-endocrine'],
    tags: ['subah', 'neend', 'roshni', 'exercise', 'morning routine', 'energy']
  });

  K({
    id: 'focus-single-task', cat: 'active', level: 1,
    q: 'Padhai ya kaam me focus kaise badhaein jab dhyan baar baar bhatakta hai?',
    short: 'Ek waqt par ek kaam. Multitasking asal me tez switching hai, aur har switch par dimaag ka kuch hissa pichhle kaam me atka reh jaata hai. Phone door, ek kaam, ek timer.',
    why: [
      'Dimaag do mushkil kaam ek saath nahi karta; wo unke beech <b>switch</b> karta hai. Task-switching par hue experiments me baar baar dikha hai ki har switch me thoda time aur galtiyan badhti hain. Ek switch me farak chhota lagta hai, par din bhar me ye jud jaata hai.',
      'Researcher <b>Sophie Leroy</b> (2009) ne isko <b>attention residue</b> naam diya: jab tum ek kaam adhoora chhod kar doosre par jaate ho, to dhyan ka ek tukda pehle kaam par atka rehta hai. "Bas ek message check karna" bhi isi wajah se mehenga padta hai.',
      'Focus will-power se zyada <b>environment</b> ka khel hai. Jo cheez nazar ke saamne hai, dimaag use baar baar check karta hai. Isliye "himmat se ignore karna" se better hai cheez ko hata dena.'
    ],
    steps: [
      ['Kaam ek line me likho', '"Chapter 4 ke 10 sawaal" ya "report ka intro". Dhundla kaam ("padhai karni hai") par dimaag bhatakta hai.'],
      ['Phone doosre kamre me', 'Silent nahi, door. Notifications band karna pehla step hai, phone ko nazar se hatana doosra.'],
      ['25-45 minute ka timer', 'Ek block me sirf wahi kaam. Beech me koi idea aaye to ek "baad me" kaagaz par likh do aur wapas aao.'],
      ['Switch se pehle "parking note"', 'Kaam chhodna pade to ek line likho: "agla step kya hai". Isse residue kam hota hai aur wapas aana aasaan.'],
      ['Break asli wala', '5 minute chalo, paani piyo. Break me reels dekhna naya input hai, aaram nahi.']
    ],
    example: [
      'Fatima Hyderabad me ek IT company me kaam karti hai. Wo ek saath Excel report, team ka WhatsApp group aur email khol kar baithti thi. Shaam tak lagta tha bahut busy rahi, par report aadhi.',
      'Usne din ko blocks me baanta: 10 se 11 sirf report, WhatsApp desktop band, phone drawer me. Har block ke aakhir me 10 minute sirf messages. Jab boss beech me call karte, wo call ke pehle report me ek line likh deti: "agla: Q3 ka chart".',
      'Pehle hafte hi report ek din pehle khatam hui. Fatima ko sabse zyada hairaani is baat par hui ki group ke messages 10 minute baad padhne se koi nuksaan nahi hua. "Turant reply" ka pressure zyaadatar uske dimaag me tha.'
    ],
    script: [
      ['Colleague beech me baat karne aaye', '"Main 20 minute me free hoti hoon / hota hoon, tab aaram se baat karte hain? Abhi ek cheez khatam kar rahi hoon / raha hoon." (apne hisaab se bolo)'],
      ['Family group par turant reply ka pressure', '"Main padhai ke time phone door rakhta / rakhti hoon, shaam ko sab dekh kar reply karunga / karungi." (ek baar bata do, roz safai nahi)'],
      ['Khud se, jab dhyan bhatke', '"Note kiya. Baad me. Abhi sirf ye."']
    ],
    mistakes: [
      'Ye maan lena ki tum "multitasking me ache ho". Jo log khud ko sabse acha multitasker maante hain, wo aksar test me khaas behtar nahi nikalte.',
      'Phone silent karke table par ulta rakhna. Wo phir bhi dhyan kheenchta hai; door rakhna zyada kaam karta hai.',
      'Shuru me hi 3 ghante ka focus target. 25 minute se shuru karo, dheere dheere badhao.'
    ],
    drill: 'Aaj ek kaam chuno. Phone doosre kamre me, 25 minute ka timer, aur paas me ek "baad me" kaagaz. Timer ke baad gino ki kitni baar dhyan bhatka aur kaagaz par kya likha.',
    teacher: 'Focus koi talent nahi jo kuch logon ke paas hota hai. Wo ek kamra hai jise tum roz thoda saaf karte ho.',
    chapters: ['consciousness-sleep', 'sensation-perception', 'thinking-decisions'],
    tags: ['focus', 'multitasking', 'attention residue', 'concentration', 'pomodoro', 'phone']
  });

  K({
    id: 'jaldi-seekho', cat: 'active', level: 2,
    q: 'Kuch bhi naya jaldi aur pakka kaise seekhein?',
    short: 'Baar baar padhne ki jagah khud ko test karo (retrieval), padhai ko dino me faila do (spacing), aur concept ko kisi bachche ko samjhao. Ye teen tareeke research me sabse zyada kaam ke nikle hain.',
    why: [
      '<b>Retrieval practice</b>: yaad se nikaalna khud ek seekhne ka kaam hai. Roediger aur Karpicke (2006) ke experiment me jin students ne padh kar khud ko test kiya, unhe kuch din baad zyada yaad raha, un students se jinhone wahi time dobara padhne me lagaya. Dobara padhna aasaan lagta hai, isliye "yaad hai" ka jhootha ehsaas deta hai.',
      '<b>Spacing</b>: Ebbinghaus ke zamane se pata hai ki bhoolna tezi se hota hai (forgetting curve). Ek din me 3 ghante ki jagah teen din me ek ek ghanta lagbhag hamesha behtar yaad rehta hai. Thoda bhool kar phir yaad karna dimaag ko strong banata hai.',
      '<b>Feynman technique</b> (physicist Richard Feynman ke naam par mashhoor): concept ko seedhe shabdon me samjhao. Jahan atak jao, wahi tumhara gap hai. Aur ek myth: "main visual learner hoon" jaise <b>learning styles</b> ka koi pakka saboot nahi mila (Pashler aur saathi, 2008 ki review). Content ke hisaab se tareeka chuno, apne "style" ke hisaab se nahi.'
    ],
    steps: [
      ['Padho, phir kitaab band', '10-15 minute padho, phir band karke jo yaad hai wo likho ya bolo. Kharab lagega, yahi seekhna hai.'],
      ['Galtiyan check karo', 'Kitaab khol kar dekho kya chhoota. Sirf wahi dobara padho.'],
      ['Agla round baad me', 'Wahi topic 1 din baad, phir 3 din baad, phir ek hafte baad. Har baar pehle khud se poochho, phir dekho.'],
      ['Bachche ko samjhao', 'Ek imaginary 12 saal ke bachche ko bina jargon ke samjhao. Jahan "matlab... wo..." aaye, wahan gap hai.'],
      ['Topics mila do', 'Practice me alag type ke sawaal mila kar karo (interleaving). Mushkil lagega, par exam me "kaun sa tareeka lagaun" pehchaanna aata hai.']
    ],
    example: [
      'Lakshmi Chennai se hai aur UPSC prelims ki taiyaari kar rahi hai. Wo Polity ki ek hi book chaar baar highlighter se padh chuki thi, fir bhi mock test me Articles gadbad ho jaate.',
      'Usne tareeka badla: har chapter ke baad kitaab band, aur ek khaali page par yaad se "mind dump". Phir galtiyan laal pen se. Har Sunday pichhle hafte ke chapters ke 20 khud banaye sawaal. Raat ko chhote bhai ko dinner par ek Article samjhaati, jo use "boring didi" bolta tha par sawaal poochhta tha.',
      'Pehle do hafte use lagaa ki wo kam padh rahi hai, kyunki pages kam cover hote the. Lekin agle mock me Polity ka score kaafi badha. Lakshmi ka sabse bada seekh: <b>jo mushkil laga, wahi kaam aaya</b>.'
    ],
    script: [
      ['Dost ke saath group study', '"Chal padhte nahi, ek doosre se 10 sawaal poochhte hain. Jo galat ho, wahi revise karenge."'],
      ['Office me naya tool seekhte waqt', '"Main ek baar aapko wapas samjhaun ki maine kya samjha? Jahan galat hoon, wahan rok dena."']
    ],
    mistakes: [
      'Highlight aur dobara padhne ko seekhna samajhna. Ye "pehchaan" banata hai, "yaad se nikaalna" nahi.',
      'Ek raat pehle sab ratna. Exam nikal jaata hai, cheez dimaag se bhi nikal jaati hai.',
      '"Main audio learner hoon" bol kar sirf videos dekhna. Tareeka content par depend karta hai: map ko dekho, bhasha ko bolo, maths ko haath se karo.'
    ],
    drill: 'Aaj jo bhi padha ho, uska ek topic lo. Kitaab band karke 5 minute me jo yaad hai likho. Phir 3 minute me kisi ko (ya mirror ko) bina jargon ke samjhao. Kal wahi topic phir se pehle yaad se likhna.',
    teacher: 'Dimaag ko ye mat dikhao ki cheez kahan likhi hai. Use majboor karo ki cheez khud nikaale. Thoda dard, bahut fayda.',
    chapters: ['memory', 'forgetting', 'applied-psychology'],
    tags: ['retrieval practice', 'spacing', 'feynman', 'padhai', 'learning styles myth', 'exam']
  });

  K({
    id: 'memory-palace', cat: 'active', level: 2,
    q: 'Lambi list ya naam numbers yaad rakhne ke liye memory tez kaise karein?',
    short: 'Cheezon ko jaani pehchaani jagah par rakh do (memory palace) aur chhote tukdon me jodo (chunking). Memory ek muscle se zyada ek storage system hai: achhe se rakho, to aasaani se milegi.',
    why: [
      '<b>Method of loci</b> (memory palace) kam se kam Greek-Roman zamane se use ho raha hai. Hamara dimaag jagah aur raaste yaad rakhne me bahut acha hai. Jab koi abstract cheez kisi jaani pehchaani jagah par ek ajeeb, zinda image ke saath rakhte hain, to use wapas nikaalna aasaan hota hai. Memory championships jeetne wale log zyaadatar yahi tareeka use karte hain; research me unke dimaag "alag" nahi, unka tareeka alag nikla.',
      '<b>Chunking</b>: working memory ek waqt me thodi hi cheezein pakad sakti hai. George Miller (1956) ne "7 plus-minus 2" kaha, baad ki research ise aur kam (lagbhag 4 tukde) maanti hai. Isliye 9876543210 ko hum 98765-43210 bolte hain. Expert chess players poori board positions ko "patterns" ke chunks me dekhte hain.',
      'Ek honest baat: ye tricks <b>list type</b> yaadon ke liye kamaal hain. Samajhna (concept) ek alag kaam hai, uske liye retrieval aur explanation chahiye. Aur "hum dimaag ka sirf 10% use karte hain" ek myth hai; memory badhaana koi chhupa hua dimaag "unlock" karna nahi.'
    ],
    steps: [
      ['Palace chuno', 'Apna ghar. Darwaze se shuru karke 10 fixed jagah: darwaza, joote ka rack, sofa, TV, kitchen ka sink...'],
      ['Har item ko image banao', 'Image jitni ajeeb, funny ya bade size ki, utni yaad. "Doodh" nahi, sofa par doodh ka jharna.'],
      ['Raaste par rakho', 'Ek ek item ek ek jagah. Order me chalo.'],
      ['Wapas chalo', 'Aankhein band karke raasta chalo aur dekho har jagah kya pada hai.'],
      ['Numbers ke liye chunk', 'Lambe number ko 3-4 ke tukdon me todo aur har tukde ko koi matlab do (saal, score, pin code).']
    ],
    example: [
      'Joseph Kochi ke ek school me teacher hain. Har saal 40 naye bachchon ke naam yaad karne me unhe hafte lagte the, aur galat naam bolne par sharminda hote the.',
      'Is baar unhone class ki seating ko hi palace bana diya. Pehli bench par Ananya: unhone use mann me ek anaar pakde dekha. Uske paas Imran, jis ke sir par ek imli ka ped. Harpreet ke haath me harmonium. Har din attendance ke baad 1 minute aankhein band kar ke class "ghoome".',
      'Teesre din tak zyaadatar naam yaad the. Bachchon ko ye bahut acha laga ki sir ne itni jaldi naam yaad kar liye; class ka mahaul pehle hafte me hi garam ho gaya. Joseph ne ek image kabhi kisi ko nahi bataayi, wo unke apne liye thi.'
    ],
    mistakes: [
      'Image ko boring rakhna. "Kele" se kuch yaad nahi rehta, sofa par naachta hua kela rehta hai.',
      'Ek hi palace me baar baar alag lists rakhna bina gap ke. Purani images mil jaati hain; alag lists ke liye alag raaste rakho.',
      'Memory trick ko samajh ka shortcut samajhna. Formula yaad ho gaya, use lagana aana alag skill hai.'
    ],
    drill: 'Kal ki grocery ya kaam ki 10 cheezon ki list banao. Apne ghar ke 10 spots par ek ek ajeeb image ke saath rakho. List chhupa do, 1 ghante baad yaad se likho. Score note karo.',
    teacher: 'Jab maine pehli baar palace try kiya to apni hi ajeeb images par hansi aa gayi. Wahi hansi yaad ka gond hai.',
    chapters: ['memory', 'forgetting'],
    tags: ['memory palace', 'method of loci', 'chunking', 'naam yaad', '10% myth']
  });

  K({
    id: 'boredom-ka-fayda', cat: 'active', level: 3,
    q: 'Kya bina phone ke bore hona sach me dimaag ke liye accha hai, aur kaise karein?',
    short: 'Haan, ek had tak. Khaali waqt me dimaag purani yaadein jodta hai, plan banata hai, ideas mix karta hai. Har khaali pal reels se bhar diya to ye kaam ruk jaata hai. Roz thoda "khaali time" plan karo.',
    why: [
      'Jab hum kisi bahar ke kaam par focus nahi kar rahe hote, dimaag ka ek network (<b>default mode network</b>) active hota hai. Ye apne baare me sochne, past aur future jodne, doosron ke mann ko samajhne jaise kaam se juda hai. Mind-wandering ke kuch nuksaan bhi hain (kaam me galti, kabhi udaasi wale vichaar), par planning aur ideas ke liye ye zaroori bhi hai.',
      '<b>Incubation</b>: kai baar problem chhod kar kuch aur halka karne (nahaana, chalna) ke baad hal achanak aata hai. Research me ye effect milta hai, khaaskar jab beech wala kaam halka ho. Lekin ye guarantee nahi; pehle problem par asli mehnat ki ho tab hi ye kaam karta hai.',
      'Ek mashhoor experiment (Wilson aur saathi, 2014) me log kuch minute akele sochne ke bajaye kai baar khud ko halka electric shock dena chun lete the. Matlab: akele sochna hume asehaj lagta hai, isliye phone turant pakadte hain. Ye aadat hai, kamzori nahi, aur aadat badli ja sakti hai.'
    ],
    steps: [
      ['Ek "khaali slot" chuno', 'Roz ka koi routine waqt: metro, bus stop, nahaana, chai banana. Is me phone nahi.'],
      ['Shuru me asehaj lagega', 'Pehle 2-3 minute haath phone ki taraf jaayega. Bas note karo: "ye aadat hai". Ruko.'],
      ['Dimaag ko ek halka sawaal do', 'Zabardasti nahi, bas ek beej: "is hafte ki sabse ulajhi cheez kya hai?" Phir dimaag ko bhatakne do.'],
      ['Aaye idea ko pakdo', 'Baad me 1 minute me jo bhi aaya likh lo. Zyaadatar bekaar hoga, kabhi kabhi sona.'],
      ['Limit samjho', 'Agar khaali time me sirf chinta ya negative vichaar ghoomte hain, to walk ya kisi se baat behtar hai. Boredom ka matlab khud ko takleef dena nahi.']
    ],
    example: [
      'Gurpreet, Ludhiana ka ek graphic designer, metro me 40 minute ka safar hamesha YouTube Shorts ke saath karta. Office pahunch kar "creative block" ki shikayat karta, ek client ka logo teen hafte se atka tha.',
      'Usne ek hafta try kiya: metro me headphones mein kuch nahi, phone bag me. Pehle din bekaar laga, logon ke joote ginta raha. Teesre din use metro ke map ke rang dekh kar client ke logo ke liye ek line-wala idea aaya. Usne station par utar kar 4 sketch bana liye.',
      'Gurpreet ne isse "magic" nahi maana. Usne note kiya ki idea isliye aaya kyunki wo pichhle teen hafte se problem par kaam kar raha tha; metro ki khaali jagah ne bas tukdon ko milne ka mauka diya. Ab wo hafte me 3 din metro "khaali" rakhta hai, baaki din podcast.'
    ],
    script: [
      ['Koi pooche "kya kar rahe ho, phone nahi chala rahe?"', '"Kuch nahi, bas dimaag ko thoda saans lene de raha hoon / rahi hoon. Iske baad zyada acha kaam hota hai."'],
      ['Bachchon ke saath, jab wo "bore ho raha hai" bolein', '"Thik hai, bore ho lo. Dekhte hain 10 minute me tumhara dimaag kya naya bana ke laata hai."']
    ],
    mistakes: [
      'Ye sochna ki boredom se apne aap genius ideas aayenge. Idea us problem ke aate hain jis par tumne pehle mehnat ki hai.',
      'Khaali time ko podcast ya "productive" content se bharna aur use boredom samajhna. Wo bhi input hai.',
      'Udaasi ya anxiety ke daur me zabardasti akele baith kar sochna. Tab movement aur logon se baat zyada madad karti hai.'
    ],
    drill: 'Aaj ek 10 minute ka kaam (chai banana, bus ka intezaar, walk) bina phone, bina headphones karo. Shuru me dimaag ko ek sawaal do jo tumhe pareshan kar raha hai. Baad me 1 minute me likho ki kya aaya, aur kitni baar phone ki taraf haath gaya.',
    teacher: 'Hamari nani dadi ke paas reels nahi thi, par chhat par baith kar soochne ka waqt tha. Wo waqt bekaar nahi tha; wahi unka "processing time" tha.',
    chapters: ['consciousness-sleep', 'thinking-decisions', 'positive-psychology'],
    tags: ['boredom', 'default mode network', 'incubation', 'creativity', 'phone', 'mind wandering']
  });

  K({
    id: 'brain-games-sach', cat: 'active', level: 3,
    q: 'Kya brain training apps aur games sach me smart banate hain? Phir dimaag tez kaise rakhein?',
    short: 'Zyaadatar nahi. Game me tum us game me behtar hote ho, par ye "general intelligence" me aam taur par nahi badalta. Asli fayda neend, exercise, nayi mushkil skill seekhne aur logon se judne me hai.',
    why: [
      'Isko <b>transfer</b> ki problem kehte hain. <b>Near transfer</b> (game jaisa hi kaam) me sudhaar milta hai; <b>far transfer</b> (padhai, office ke faisle, IQ) me research ka saboot kamzor hai. 2014 me Stanford Center on Longevity aur Max Planck Institute ne dunia ke kai scientists ke saath consensus statement jaari kiya ki brain games ke bade daawon ka strong saboot nahi hai. 2016 me ek badi review (Simons aur saathi) ne bhi lagbhag yahi kaha.',
      'Ek brain training company ko America me Federal Trade Commission ke saath 2016 me settlement karna pada, unke "dimaag tez" wale advertisement claims ki wajah se. Iska matlab ye nahi ki games bure hain; matlab ye hai ki unhe <b>entertainment</b> samjho, dawai nahi.',
      'Jo cheezein dimaag ke liye research me zyada bharosemand dikhti hain: poori neend, regular aerobic exercise (effect moderate, magic nahi), padhai aur nayi mushkil skills (koi bhasha, instrument), aur social judaav. Ye "boring" hain, isliye inka ad nahi banta.'
    ],
    steps: [
      ['Claim pakdo', 'App ya ad kya kehta hai? "Memory 40% tez"? Poochho: kis test par? Kis par test hua?'],
      ['Transfer poochho', 'Tum game me better hue ya asli life ke kaam me? Ye dono alag sawaal hain.'],
      ['Jo chahiye wahi practice karo', 'Mental maths tez chahiye to mental maths karo. Angrezi bolni hai to bolo. Skill transfer kam hota hai, isliye seedha target karo.'],
      ['Ek "mushkil nayi cheez"', 'Jo tumhe asehaj kare: chess club, guitar, nayi bhasha, coding. Mushkil hi seekhna hai.'],
      ['Basics mat chhodo', 'Neend, chalna, logon se milna. Inke bina koi app kaam nahi karti.']
    ],
    example: [
      'Rohit ke papa, Kailash ji, Indore ke retired bank officer hain. Unke ek dost ne family group par ek app ka link bheja: "roz 10 minute, dimaag 10 saal jawan". Kailash ji ne annual subscription le liya aur roz score badhte dekh kar khush hote.',
      'Rohit ne ek din poochha, "Papa, score to badha, par kya aap ab sabzi wale ka hisaab jaldi karte ho? Chashma kam bhoolte ho?" Kailash ji hans pade: "Nahi re, bas us game me tez ho gaya hoon."',
      'Rohit ne unhe app chhodne ko nahi kaha; bas saath me ek plan banaya: subah 30 minute park me walk apne dosto ke saath, aur hafte me do baar pote ke saath shatranj seekhna. Kailash ji ab bolte hain, "Game mazedaar hai, par shatranj me pota mujhe har baar naya sawaal deta hai. Wahi asli kasrat hai."'
    ],
    script: [
      ['Family group par "brain booster" forward', '"Game mazedaar ho sakta hai, par scientists ke review me inka dimaag par bada asar saabit nahi hua. Saath me walk aur kuch naya seekhna zyada kaam ka hai."'],
      ['Koi kahe "mera IQ app se badh gaya"', '"Wah! Ye check karna interesting hoga ki app ke bahar ke kaam me bhi farak dikha ya nahi."']
    ],
    mistakes: [
      'Game ke score ko dimaag ki health ka scorecard samajhna.',
      'Puzzle khelna aur walk chhod dena, kyunki puzzle "dimaag ka kaam" lagta hai.',
      'Ulta extreme: sab games ko bekaar bolna. Mazaa, relax aur dosto se judaav bhi value hai, bas daawa sahi rakho.'
    ],
    drill: 'Apne phone me koi bhi "brain" ya "productivity" app kholo aur uska sabse bada claim likho. Teen sawaal likho: kis cheez par test hua? Game ke bahar fayda dikha? Kaun keh raha hai? Phir aaj 10 minute koi asli nayi skill try karo.',
    teacher: 'Dimaag ko tez rakhne ka shortcut dhoondhna insaani hai. Bas yaad rakho: jo shortcut bik raha hai, usme bechne wale ka fayda pakka hai, tumhara nahi.',
    chapters: ['intelligence', 'critical-thinking', 'research-methods'],
    tags: ['brain games', 'transfer', 'myth', 'intelligence', 'exercise']
  });

  /* ---------- CRITICAL: sahi aur galat ko pehchaanna ---------- */

  K({
    id: 'claim-30-second-check', cat: 'critical', level: 1,
    q: 'WhatsApp ya Instagram par aayi kisi baat ko 30 second me kaise check karein?',
    short: 'Ruko, source dekho, doosri jagah dhoondho, asli jad tak jaao. Post ke andar ghuss kar padhne ki jagah bahar nikal kar check karo (lateral reading).',
    why: [
      'Fake news isliye failti hai kyunki wo hamari <b>emotion</b> ko pakadti hai: gussa, darr, garv. Emotion jaagte hi tez System 1 forward button daba deta hai, sochne wala System 2 baad me aata hai.',
      'Stanford ke researchers (Sam Wineburg aur saathi) ne dekha ki professional fact-checkers website par kam time lagate the aur turant nayi tab khol kar "ye source kaun hai" check karte the. Isko <b>lateral reading</b> kehte hain. Students aur kai padhe likhe log page ke andar hi rehte the aur design se impress ho jaate the.',
      'Mike Caulfield ne isse ek aasaan aadat banaya: <b>SIFT</b> (Stop, Investigate the source, Find better coverage, Trace to the original). Ye sab kuch 30 second se 2 minute me ho jaata hai.'
    ],
    steps: [
      ['S: Stop', 'Forward karne se pehle ruko. Agar gussa ya darr aaya hai, to aur ruko. Ye wahi feeling hai jis ke liye post bana.'],
      ['I: Source kaun hai?', 'Naam search karo. "Doctor sahab" ya "NASA scientist" asli hain? Unka is vishay se lena dena hai?'],
      ['F: Doosri jagah dhoondho', 'Wahi baat search karo. Agar bada news hai to bade, alag alag sources me hoga. Sirf forward me hai to shak karo.'],
      ['T: Jad tak jaao', 'Video ya photo ka asli context? Reverse image search, ya poori video dekhna. Purani photo naye news ke saath aksar ghoomti hai.'],
      ['Shak me, share mat karo', '"Pata nahi sach hai ya nahi, par bhej deta hoon" hi wo tareeka hai jis se jhooth failta hai.']
    ],
    example: [
      'Shaadi ki taiyaari ke beech family group me Meenakshi ki bua ne ek video bheja: "Ye company ka namak khaane se cancer, sabko batao!!" Teen aur rishtedaar ne turant aage bhej diya.',
      'Meenakshi ne 1 minute lagaya. Video me jo "doctor" tha, uska naam search kiya: koi registered profile nahi. Phir "namak cancer" search kiya: fact-check websites par wahi video do saal pehle "fake" bata chuke the. Reverse image search me thumbnail ek purani doosri khabar ka nikla.',
      'Usne group me bua ka mazaak nahi udaya. Bas likha: "Bua, aapne dhyan rakha, achha kiya. Maine check kiya, ye video purana hai aur fact-check me galat nikla, link ye raha. Namak ki chinta ho to hum family doctor se pooch lete hain." Bua ne video delete kar diya, aur agli baar khud poochha: "Meenu, ye sach hai kya?"'
    ],
    script: [
      ['Family group me galat forward', '"Aapne care se bheja, thank you. Maine check kiya to ye galat nikla, link ye raha. Main bhi pehle aise forwards par yakeen kar leta / leti tha."'],
      ['Dost bole "sab log share kar rahe hain"', '"Sab share kar rahe hain, iska matlab ye failta hai, ye nahi ki sach hai. 30 second check karte hain."']
    ],
    mistakes: [
      'Website ki design, "Breaking" ka laal logo, ya views ki ginti dekh kar bharosa karna.',
      'Sirf post ke andar ke "sources" par jaana, jo usi banane wale ne chune hain.',
      'Galat forward bhejne wale ko group me sharminda karna. Log tab apni galti maanne ke bajaye zid pakad lete hain.'
    ],
    drill: 'Aaj apne phone par aaya koi ek forward ya viral post chuno. SIFT ke chaar step karo aur time dekho. Likho: kya mila, aur check se pehle tumhe kitna yakeen tha (1-10) aur baad me kitna.',
    teacher: 'Jo cheez tumhe sabse zyada gussa dilaati hai, wahi sabse pehle check karne layak hai. Gussa ek alarm hai, saboot nahi.',
    chapters: ['critical-thinking', 'scam-psychology', 'cults-propaganda'],
    tags: ['fake news', 'whatsapp', 'fact check', 'SIFT', 'lateral reading', 'misinformation']
  });

  K({
    id: 'correlation-causation', cat: 'critical', level: 1,
    q: 'Do cheezein saath dikhti hain to ek doosre ki wajah hain ya nahi, kaise pehchaanein?',
    short: 'Saath hona (correlation) wajah hona (causation) nahi hai. Har baar teen sawaal poochho: koi teesri cheez dono ko chala rahi hai? Kya ulta ho sakta hai? Kya ye sirf ittefaq hai?',
    why: [
      'Hamara dimaag pattern aur kahani dhoondhne ki machine hai. Do cheezein saath dikhein to wo turant "A ne B kiya" wali kahani bana deta hai. Evolution me ye kaam ka tha (jhaadi hili, sher ho sakta hai), aaj ke data ki duniya me ye bahut dhoka deta hai.',
      'Classic example: garmi me ice cream bhi zyada bikti hai aur doobne ke cases bhi badhte hain. Ice cream doobne ka kaaran nahi; dono ke peeche <b>teesri cheez</b> hai: garmi. Isko <b>confounding variable</b> kehte hain.',
      'Isliye psychology me <b>experiment</b> (random taur par groups banaana, ek ko treatment dena) ko "kaaran" saabit karne ka sabse mazboot tareeka maana jaata hai (Level 1, research methods). Survey aur observation se pattern milta hai, kaaran ka pakka saboot nahi.'
    ],
    steps: [
      ['Claim ko A aur B me todo', '"Jo bachche breakfast karte hain (A), wo exam me ache hote hain (B)."'],
      ['Teesri cheez?', 'Kya koi C dono ko chala raha hai? (Jahan ghar me breakfast ka time hai, wahan shayad padhai ka mahaul, neend aur paisa bhi zyada hai.)'],
      ['Ulta?', 'Kya B, A ki wajah ho sakta hai? (Jo log fit hain wo zyada gym jaate hain, ya gym jaane se fit hain? Dono thode thode.)'],
      ['Ittefaq?', 'Kitne cases dekhe? Do teen kahaniyon se pattern nahi banta.'],
      ['Experiment hua hai?', 'Agar kisi ne random groups bana kar test kiya hai, to kaaran ka daawa mazboot hai.']
    ],
    example: [
      'Kabir ke office ke HR ne email bheja: "Data dikhaata hai ki jo employees office ki yoga class me aate hain, unki performance rating zyada hai. Isliye sab yoga join karein, performance badhegi!"',
      'Kabir ne coffee par apni colleague Sana ke saath socha. Teesri cheez? Yoga class subah 8 baje hai; usme wahi log aate hain jinke ghar ki zimmedari kam hai, jo jaldi aate hain, jinke paas time aur energy hai. Ulta? Ho sakta hai ache performers ko manager khud class bhejte hain. Sana hansi: "Matlab yoga achha ho sakta hai, par is data se ye saabit nahi hota."',
      'Kabir ne HR ko politely likha ki ek chhota test kar sakte hain: kuch teams ko random taur par yoga slot do, kuch ko baad me, aur 3 mahine baad compare karo. HR ne idea pasand kiya. Kabir ka point yoga ke khilaaf nahi tha; wo bas <b>saboot ke saath imaandaar</b> rehna chahta tha.'
    ],
    script: [
      ['Koi kahe "dekho, X karne wale sab log Y hain"', '"Interesting! Kya koi aur cheez dono ke peeche ho sakti hai? Jaise paisa, umar, ya ghar ka mahaul?"'],
      ['News headline "Coffee se lambi zindagi"', '"Ye study log dekh kar ki gayi thi ya experiment tha? Kahin coffee peene wale log waise hi kuch alag to nahi?"']
    ],
    mistakes: [
      'Ulta extreme: har correlation ko bekaar bolna. Correlation ek clue hai, aur kai baar kaaran ki taraf ishaara karta hai; bas akela saboot nahi.',
      'Apni ek do kahaniyon ("mere chacha ne ye kiya aur theek ho gaye") ko pattern samajhna.',
      'Sirf us correlation par shak karna jo tumhari soch ke khilaaf ho, aur jo pasand aaye use maan lena.'
    ],
    drill: 'Aaj news ya social media se ek headline dhoondho jisme "se" ya "ki wajah se" ho (jaise "phone se bachche chidchide"). A aur B likho, phir teesri cheez, ulta, aur ittefaq ke liye ek ek possibility likho.',
    teacher: 'Jab bhi koi kahe "dekho, saath saath hai", mann me ek chhota sa ice cream cone imagine karo. Hasi bhi aayegi aur sawaal bhi.',
    chapters: ['research-methods', 'statistics-basics', 'critical-thinking'],
    tags: ['correlation', 'causation', 'confounding', 'research', 'headline']
  });

  K({
    id: 'argument-galtiyan', cat: 'critical', level: 2,
    q: 'Bahas me saamne wale ki chaalaaki ya galat logic kaise pakdein?',
    short: 'Kuch galtiyan baar baar aati hain: insaan par hamla (ad hominem), baat ko tod marod kar kamzor banaana (strawman), sirf do option dikhaana (false dilemma), aur "ek kadam = tabaahi" (slippery slope). Naam pata ho to pakadna aasaan hai.',
    why: [
      'Ye <b>logical fallacies</b> kaam isliye karti hain kyunki ye hamare shortcuts par chalti hain. Hum message se pehle messenger ko judge karte hain (social cognition), aur do saaf option dimaag ko aaraam dete hain. Unhe pehchaan lena unka asar kaafi kam kar deta hai.',
      'Persuasion research me <b>inoculation</b> (pre-bunking) ka idea hai: jaise vaccine kamzor virus dikha kar body ko taiyaar karti hai, waise hi chaalaaki ke tareeke pehle se pehchaan lene se log baad me unse kam behakte hain. Isliye naam yaad rakhna kaam ka hai.',
      'Ek savdhaani: fallacy ka naam bolna jeetna nahi hai. Kai baar bura argument bhi sahi conclusion tak pahunch sakta hai. Logic ki galti pakdo, phir bhi asli sawaal par wapas aao.'
    ],
    steps: [
      ['Ad hominem', 'Baat chhod kar insaan par hamla: "Tum to abhi college me ho, tumhe kya pata." Sawaal: kya baat galat hai, ya sirf bolne wala pasand nahi?'],
      ['Strawman', 'Tumhari baat ka kamzor version bana kar use giraana: tum bole "roz thoda kam phone", jawab aaya "matlab tum chahte ho hum jungle me rahein?"'],
      ['False dilemma', 'Sirf do raaste: "Ya to engineering, ya life barbaad." Sawaal: teesra, chautha option kya hai?'],
      ['Slippery slope', '"Aaj party jaane diya to kal drugs, parson ghar se bhaag jaayegi." Har kadam ka saboot maango, poori seedhi ka nahi.'],
      ['Shaant reh kar label nahi, sawaal', 'Fallacy ka naam bolne se zyada kaam karta hai uska sawaal poochhna.']
    ],
    example: [
      'Diwali par ghar me Nisha (24) ne kaha ki wo job chhod kar 6 mahine UX design ka course karna chahti hai. Chacha ji bole: "Ye sab Instagram wale bachchon ke idea hain." (ad hominem). Mausi: "Matlab tumhe naukri hi nahi karni, bas ghoomna hai?" (strawman). Papa: "Ya to sarkari naukri ki taiyaari karo, ya ye faltu cheezein." (false dilemma).',
      'Pehle Nisha ko gussa aaya. Phir usne ek ek baat ko sawaal me badla. Chacha ji se: "Idea kahan se aaya, wo chhodo; plan me galti kya dikhti hai?" Mausi se: "Main ghoomne ki baat nahi kar rahi, main 6 mahine ka course aur uske baad job ki baat kar rahi hoon. Ye raha budget." Papa se: "Aur agar teesra raasta ho: course ke saath part-time freelancing, aur 6 mahine me result nahi to wapas job?"',
      'Bahas ek din me khatam nahi hui. Lekin baat "tum galat ho" se "is plan me risk kya hai" par aa gayi. Papa ne aakhir me ek shart rakhi: savings ka ek hissa safe rahega. Nisha ne maana. <b>Logic ki ladai jeetne ki jagah usne baatcheet ko sahi track par laaya.</b>'
    ],
    script: [
      ['Insaan par hamla ho', '"Theek hai, main young hoon. Par meri baat me galti kahan hai, wo batao?"'],
      ['Baat tod marod di gayi', '"Maine ye nahi kaha. Main sirf itna keh raha / rahi hoon ki..." (apni asli baat chhoti line me dohrao)'],
      ['Sirf do option', '"Kya sach me sirf yahi do raaste hain? Ek teesra bhi soch kar dekhein?"'],
      ['Slippery slope', '"Pehle kadam se aakhri kadam tak kaise pahunchenge, uska koi saboot hai?"']
    ],
    mistakes: [
      'Bahas me "ye to ad hominem hai!" chillana. Log label se defensive ho jaate hain; sawaal zyada asar karta hai.',
      'Sirf doosron ki galtiyan pakadna. Ye charon tum bhi karte ho, khaaskar gusse me.',
      'Ye maan lena ki fallacy mili to conclusion galat hai (isko bhi "fallacy fallacy" kehte hain).'
    ],
    drill: 'Aaj kisi TV debate, YouTube comment section ya family group se 10 minute ki bahas dekho. In charon me se jitni galtiyan dikhein, likho, aur har ek ke liye ek shaant sawaal likho jo poochha ja sake.',
    teacher: 'Sabse acha critical thinker wo nahi jo har bahas jeet le. Wo hai jo bahas ko sach ke kareeb le aaye, chahe wo khud galat nikle.',
    chapters: ['critical-thinking', 'attitudes-persuasion', 'cults-propaganda'],
    tags: ['fallacy', 'ad hominem', 'strawman', 'false dilemma', 'slippery slope', 'bahas']
  });

  K({
    id: 'apna-bias-pakdo', cat: 'critical', level: 2,
    q: 'Apne hi dimaag ke bias kaise pakdein, jab mujhe lagta hai main sahi hoon?',
    short: '"Ulta socho": khud se poochho, agar main galat hoon to wo kis wajah se hoga? Doosron ke bias dikhna aasaan hai; apne bias pakadne ke liye ek fixed sawaal ki aadat chahiye.',
    why: [
      '<b>Confirmation bias</b>: hum wahi jaankari dhoondhte, yaad rakhte aur maante hain jo hamari pehle se bani soch se mel khaati hai. Ye bewakoofi nahi, dimaag ki energy bachane ki aadat hai.',
      'Research me <b>bias blind spot</b> bhi dikha hai: log doosron me bias aasaani se dekhte hain, par khud ko "objective" maante hain (Emily Pronin aur saathiyon ka kaam). Isliye "main biased nahi hoon" mehsoos karna khud koi saboot nahi.',
      'Lord, Lepper aur Preston (1984) ke experiment me sirf "nishpaksh raho" kehne se zyada farak nahi pada, lekin jab logon ko kaha gaya ki <b>"consider the opposite"</b> (agar result ulta hota to tum kya sochte?), to unka bias kaafi kam hua. Matlab: niyat nahi, ek fixed tareeka kaam karta hai.'
    ],
    steps: [
      ['Apni raay likho', 'Ek line me, aur kitna yakeen hai (0-100%).'],
      ['Teen kaaran socho ki tumhari raay galat kyun ho sakti hai', 'Asli kaaran, majboot wale. Jo tumhe sabse bura lage, wahi zaroori hai.'],
      ['Ulta test', '"Agar yahi saboot doosri side ke liye hota, to main use kitna maanta / maanti?"'],
      ['Doosri side ka best source padho', 'Unka sabse samajhdaar voice, troll nahi.'],
      ['Yakeen update karo', 'Raay badalna zaroori nahi, par 90% se 70% hona bhi jeet hai.']
    ],
    example: [
      'Deepa Bengaluru me ek startup me hiring karti hai. Ek candidate, Tenzin, interview me pehle 2 minute me nervous hua aur ek simple sawaal par atka. Deepa ne mann me likh diya: "weak". Baaki interview me use Tenzin ki har atki line yaad rahi, aur ek acha project jaldi se bhool gaya.',
      'Interview ke baad Deepa ke paas ek sticky note hai jis par likha hai: "Agar main galat hoon to kyun?" Usne teen kaaran likhe: 1) shuru me nervousness technical skill nahi batati. 2) uska project wala jawab kaafi gehra tha. 3) mujhe aaj sar dard tha aur main jaldi me thi.',
      'Usne ek colleague se apni raay bataaye bina Tenzin ka take-home task check karwaya. Task kaafi acha nikla. Tenzin ko agle round me bulaya gaya. Deepa ne baad me apne team ke liye rule banaya: <b>har interview me score likhne se pehle "ulta socho" box bhara jaayega</b>.'
    ],
    script: [
      ['Team meeting me jab sab ek hi raay par ho', '"Main ek minute ke liye ulta sochta / sochti hoon: agar ye plan fail hua, to sabse sambhav kaaran kya hoga?"'],
      ['Dost se politics ya cricket ki bahas', '"Tumhari side ka sabse mazboot point kya hai? Main use theek se samajhna chahta / chahti hoon."']
    ],
    mistakes: [
      'Bias ke baare me padh kar maan lena ki ab tum bias-free ho. Jaankari akeli kaafi nahi; tareeka chahiye.',
      'Doosri side ka sabse kamzor ya bewakoof example dekh kar "dekha, main sahi tha" kehna.',
      'Har raay par itna shak karna ki faisla hi na ho. Ulta socho, phir faisla lo.'
    ],
    drill: 'Aaj ki ek raay chuno jis par tumhe 80% se zyada yakeen hai (kisi insaan, kisi kharidari, kisi team ke baare me). "Agar main galat hoon to kyun?" ke teen asli kaaran likho, phir naya yakeen % likho.',
    teacher: 'Apne galat hone ka sabse acha signal ek chhoti si chidh hai. Jab "agar main galat hoon to?" poochhne me chidh aaye, samjho wahi jagah dekhni hai.',
    chapters: ['cognitive-biases', 'thinking-decisions', 'social-cognition'],
    tags: ['confirmation bias', 'consider the opposite', 'bias blind spot', 'hiring', 'raay']
  });

  K({
    id: 'numbers-se-dhoka', cat: 'critical', level: 3,
    q: 'Percentage, risk aur numbers ke dhoke se kaise bachein?',
    short: 'Teen sawaal: "kitne me se?" (absolute number), "shuru me kitna tha?" (base rate), aur "jo fail hue wo kahan hain?" (survivorship). Relative risk bada lagta hai, absolute risk aksar chhota hota hai.',
    why: [
      '<b>Relative vs absolute risk</b>: "Is cheez se risk 50% badh jaata hai" sun kar darr lagta hai. Par agar asli risk 1000 me 2 tha aur ab 3 hai, to wo 50% badhna sach hai, magar absolute farak 1000 me sirf 1. Gerd Gigerenzer jaise researchers ne dikhaya hai ki <b>natural frequencies</b> ("1000 me se kitne") me bataane par doctor aur aam log dono zyada sahi samajhte hain. (Yahan numbers sirf samjhaane ke liye example hain.)',
      '<b>Base rate neglect</b>: Kahneman aur Tversky ke kaam me dikha ki hum kahani ki details par dhyan dete hain aur ye bhool jaate hain ki shuru me ek cheez kitni common hai. Bahut rare cheez ke liye bahut acha test bhi galat alarm zyada de sakta hai.',
      '<b>Survivorship bias</b>: hum jeetne walon ki kahaniyan dekhte hain ("college chhod kar billionaire bana"), haarne walon ki nahi, kyunki unki koi kahani nahi chhapti.'
    ],
    steps: [
      ['"Kitne me se?"', 'Percent ko gino me badlo: 1000 log me kitne the, kitne hue.'],
      ['Base rate', 'Ye cheez aam taur par kitni common hai? Agar bahut rare hai, to positive result par turant panic nahi, doosra test.'],
      ['Graph ka axis', 'Y-axis 0 se shuru hota hai ya beech se? Chhota farak bhi bada dikhaya ja sakta hai.'],
      ['Survivors kaun hain?', 'Jin logon ne ye try kiya aur fail hue, unka data kahan hai?'],
      ['Kaun bata raha hai?', 'Number dikhaane wale ka fayda kis taraf hai? Insurance, investment, supplement bechne wale?']
    ],
    example: [
      'Farhan Lucknow me rehta hai. Ek finance influencer ki reel aayi: "Is fund ne pichhle 3 saal me 80% return diya! Mere 90% followers ne profit kamaya!" Farhan SIP ke paise isme daalne wala tha.',
      'Usne apne hostel wale dost Venkat ko call kiya, jo finance padh raha tha. Venkat ne teen sawaal poochhe. "80% kis saal se kis saal? Agar shuruat ek crash ke baad se hai, to har cheez upar hi dikhegi." "90% followers ka data kisne gina? Jo haare wo comment nahi karte." "Kya influencer ko is fund se commission milta hai?" Description me neeche chhota sa "affiliate link" likha tha.',
      'Farhan ne fund ke 10 saal ka record official site par dekha: theek-thaak tha, magic nahi. Usne apna SIP plan nahi badla. Venkat ka ek line wo ab har reel par lagata hai: <b>"Jo number dikhaya, wo chuna gaya hai. Jo nahi dikhaya, wo dhoondho."</b>'
    ],
    script: [
      ['Koi kahe "risk double ho jaata hai!"', '"Double kitne se kitna? 1000 me 1 se 2, ya 10 se 20? Dono me bahut farak hai."'],
      ['Success story sunaayi jaaye', '"Kitne logon ne ye try kiya tha, aur unme se kitne safal hue? Ye number kahin hai?"'],
      ['Medical report me "positive"', '"Doctor, is test me galat positive kitni baar aata hai, aur aage confirm karne ka test kya hai?"']
    ],
    mistakes: [
      'Sirf percent dekh kar darr jaana ya khush ho jaana, asli gintee poochhe bina.',
      'Ek ya do kamaal ki success stories ko "ye kaam karta hai" ka saboot maan lena.',
      'Ulta: sab numbers ko jhooth bolna. Numbers dhoka nahi dete, unka chunav aur presentation dhoka deta hai.'
    ],
    drill: 'Aaj kisi ad, news ya reel me ek percentage dhoondho. Usse "1000 log me se kitne" me badlo (jitna pata ho). Likho ki base rate kya ho sakta hai aur kaunsa number nahi dikhaya gaya.',
    teacher: 'Numbers se darna aasaan hai, unhe chhod dena aur bhi aasaan. Par dhoka numbers nahi dete, unhe chunne wale dete hain. Ek sawaal kaafi hai: kitne me se?',
    chapters: ['statistics-basics', 'cognitive-biases', 'scam-psychology'],
    tags: ['statistics', 'relative risk', 'base rate', 'survivorship bias', 'finance', 'percentage']
  });

  K({
    id: 'steelman-expert', cat: 'critical', level: 3,
    q: 'Doosri raay ko imaandari se kaise samjhein, aur kis expert ki baat kab maanein?',
    short: 'Pehle saamne wale ki baat ko itna acha bolo ki wo khud kahe "haan, yahi meri baat hai" (steelman). Expert ko tab zyada wazan do jab wo apne hi field me bol raha ho, experts ka bada group sehmat ho, aur uska apna fayda na juda ho.',
    why: [
      '<b>Steelmanning</b> strawman ka ulta hai: doosri raay ka sabse mazboot version banaana. Philosopher Daniel Dennett ne Anatol Rapoport ke rules ko mashhoor kiya: kisi ki aalochana se pehle unki baat itni saaf dohrao ki wo kahein "kaash maine aise kaha hota"; phir batao kis baat par sehmat ho; phir kya seekha; tab jaake aalochana.',
      'Ye sirf achha vyavhaar nahi, achhi thinking bhi hai. Jab tum mazboot argument se ladte ho, tab hi pata chalta hai ki tumhari raay tikti hai ya nahi. Aur saamne wala sun-ne ko zyada taiyaar hota hai jab use lagta hai ki use sahi samjha gaya.',
      'Experts ke baare me do galtiyan hoti hain: sab ki aankh band karke maanna, ya "experts bhi galat hote hain" bol kar kisi ko na maanna. Behtar sawaal: kya ye unka field hai? Kya field ka <b>consensus</b> hai ya ek akela "rebel"? Kya track record hai? <b>Conflict of interest</b> kya hai? Kai experts ka sehmat hona ek akele bade naam se zyada bharosemand hai.'
    ],
    steps: [
      ['Unki baat apne shabdon me', '"Agar main sahi samjha / samjhi, to aapka kehna hai..." aur unse confirm karwao.'],
      ['Unka best kaaran dhoondho', 'Wo aisa kyun maante hain? Kaunse dar, values ya experience?'],
      ['Sehmati ke point bolo', 'Kam se kam ek baat jisme tum sach me sehmat ho.'],
      ['Expert check', 'Field match? Consensus? Track record? Fayda kis ka?'],
      ['Tab apni baat', 'Ab tumhara sawaal ya asehmati, unke strong version ke saamne.']
    ],
    example: [
      'Zoya ke dada ji, Hyderabad me, sugar ki dawai chhod kar ek YouTube "health guru" ke kehne par sirf ek kaadha lena chahte the. Zoya ko gussa aaya, par usne pehle steelman kiya.',
      '"Dada ji, aapko lagta hai ki angrezi dawaiyon ke side effects hain, aur aap chahte ho ki body natural tareeke se theek ho. Aur aapko ye bhi bura lagta hai ki doctor 5 minute me nikaal dete hain, theek samjha?" Dada ji ne sir hilaaya: "Haan, bilkul." Zoya: "Isme main sehmat hoon ki doctor ko zyada time dena chahiye, aur khaane ka bahut bada role hai."',
      'Phir usne expert check saath me kiya. Guru ka koi medical degree nahi, aur wo wahi kaadha online bechta tha. Desh ke diabetes doctors aur guidelines ek hi baat kehte hain: dawai doctor ke bina band mat karo. Dada ji ne dawai jaari rakhi, aur Zoya unke saath ek lambi appointment par gayi jahan unhone apne sab sawaal poochhe. <b>Zoya jeeti nahi; dono ek team ban gaye.</b>'
    ],
    script: [
      ['Bahas shuru karne se pehle', '"Mujhe pehle ye theek se samajhna hai. Aapka point ye hai ki..., sahi?"'],
      ['Koi "expert" quote kare', '"Interesting. Kya is field ke zyaadatar experts bhi yahi kehte hain, ya ye ek alag raay hai?"'],
      ['Jab tum sehmat na ho par rishta zaroori ho', '"Is hisse me main aapke saath hoon. Bas is ek baat par meri raay alag hai, kyunki..."']
    ],
    mistakes: [
      'Steelman ko sirf ek "technique" bana dena aur andar se sunna hi nahi. Log farak pakad lete hain.',
      'Doctor, engineer ya celebrity ko har vishay ka expert maan lena. Expertise field ke andar hoti hai.',
      'Consensus ko 100% sach maanna. Wo badalta hai, par naye saboot se badalta hai, viral video se nahi.'
    ],
    drill: 'Aaj ek aisi raay chuno jisse tum puri tarah asehmat ho. Uske sabse samajhdaar samarthak ki tarah 4-5 line me uska best case likho. Phir check karo: kya koi us side ka insaan isse padh kar "haan, yahi" kahega?',
    teacher: 'Jab mujhe kisi ki baat ka steelman banana nahi aata, tab mujhe pata chalta hai ki maine abhi sirf apni hi baat suni hai.',
    chapters: ['critical-thinking', 'attitudes-persuasion', 'social-cognition'],
    tags: ['steelman', 'expert', 'consensus', 'conflict of interest', 'bahas', 'health']
  });

  /* ---------- PROBLEM: problem pakadna aur hal karna ---------- */

  K({
    id: 'badi-problem-tukde', cat: 'problem', level: 1,
    q: 'Bahut badi, overwhelming problem ko kaise shuru karein?',
    short: 'Problem ko tukdon me todo jab tak har tukda itna chhota na ho jaaye ki aaj 15 minute me shuru ho sake. Aur sab dimaag me nahi, kaagaz par.',
    why: [
      'Working memory chhoti hai. Jab ek "badi problem" me bees cheezein ek saath ghoomti hain, dimaag use ek bhaari dher ki tarah mehsoos karta hai, aur hum <b>procrastination</b> me bhaagte hain. Kaagaz par likhna dimaag ka bojh bahar rakh deta hai.',
      'Mathematician George Pólya ne apni kitaab "How to Solve It" (1945) me sikhaaya: anjaani problem ko chhote, jaane pehchaane hisson me todo, aur "pehle kya pata hai" se shuru karo. Productivity writer David Allen ka "<b>next action</b>" idea bhi yahi kehta hai: "shaadi plan karna" kaam nahi, "Ramesh bhaiya ko caterer ka number maangne ka message" kaam hai.',
      'Chhota pehla kadam jeetne se motivation aata hai. Motivation pehle aaye tab kaam karenge, ye ulta hai; aksar kaam shuru karne se motivation aata hai.'
    ],
    steps: [
      ['Brain dump', '5 minute me problem se judi har cheez kaagaz par likh do, bina order ke.'],
      ['Groups banao', 'Milti julti cheezon ko 3-5 dibbon me daalo (paisa, log, documents, time...).'],
      ['Har dibba aur todo', 'Tab tak jab tak har line ek kriya na ban jaaye: "call", "search", "likho", "pooch".'],
      ['Pehla 15 minute ka step', 'Ek chuno jo aaj ho sakta hai. Bas wahi.'],
      ['Bolke socho', 'Atke ho to kisi ko (ya ek rubber duck ko) problem step by step samjhao. Programmers ise "rubber duck debugging" kehte hain; samjhaate samjhaate khud gap dikh jaata hai.']
    ],
    example: [
      'Imran ki behen Shabnam ki shaadi 3 mahine me hai, aur Abbu ne poora intezaam usko saunpa hai. Imran raat ko sochta to dil ghabraata: hall, khaana, mehmaan, kapde, budget, rishtedaaron ki naraazgi... wo Netflix khol leta.',
      'Ek Sunday usne kaagaz liya aur 5 minute me sab likh diya: 34 cheezein. Phir 5 dibbe banaye: venue, khaana, mehmaan list, paisa, rasmein. "Mehmaan list" ko toda: "Ammi se unke side ke naam lena", "Abbu se unke dosto ke", "Shabnam se uske dosto ke", "sab ek Google Sheet me". Pehla step: Ammi ke saath chai par 15 minute.',
      'Usi shaam list ka pehla hissa ban gaya. Imran ne dekha ki darr "34 cheezon" se nahi, "pata nahi kahan se shuru karun" se tha. Agle hafton me wo roz bas sheet khol kar ek ek line tick karta. Shaadi me kuch gadbad bhi hui, par Imran ki neend nahi gayi.'
    ],
    script: [
      ['Boss ek bada vague kaam de', '"Isko main teen hisson me dekh raha / rahi hoon: ..., ... aur .... Pehle kaunsa aapke liye zyada zaroori hai?"'],
      ['Dost overwhelm ho', '"Chal, sab kuch mujhe ek ek karke bata, main likhta / likhti hoon. Phir dekhte hain aaj sirf ek kya ho sakta hai."']
    ],
    mistakes: [
      'Poori planning ko hi kaam samajh lena. Plan 20 minute ka, phir pehla action.',
      'Tukde abhi bhi bade rakhna ("venue final karna"). Agar shuru karne me ghabraahat ho, to tukda abhi bhi bada hai.',
      'Sab kuch akele dimaag me pakde rehna, "mujhe yaad hai".'
    ],
    drill: 'Apni ek atki hui badi cheez chuno (project, ghar shift, exam). 5 minute brain dump, 3-5 dibbe, aur ek 15 minute ka pehla step. Wo step aaj hi karo.',
    teacher: 'Pahaad ko dekh kar koi nahi chadhta. Log bas agle patthar ko dekhte hain. Kaagaz tumhe agla patthar dikhaata hai.',
    chapters: ['thinking-decisions', 'stress-coping', 'motivation'],
    tags: ['problem solving', 'decomposition', 'procrastination', 'next action', 'rubber duck', 'planning']
  });

  K({
    id: 'ulta-socho-inversion', cat: 'problem', level: 2,
    q: 'Jab solution nahi sujh raha, tab ulta soch kar hal kaise nikaalein?',
    short: '"Kaise safal hoon?" ki jagah poochho "Ise pakka fail kaise karun?" Fail hone ki list banao, phir un sab ko ulta kar do. Jo nahi karna, wo aksar jo karna hai usse zyada saaf dikhta hai.',
    why: [
      'Mathematician Carl Jacobi ki salah mashhoor hai: "invert, always invert" (ulta karo). Investor Charlie Munger ne ise rozmarra ke faislon ke liye popular banaya: "Mujhe batao main kahan marunga, taaki main wahan kabhi na jaaun."',
      'Psychology ke hisaab se hamara dimaag nuksaan aur khatre ko zyada tezi se pehchaanta hai (<b>negativity bias</b>, <b>loss aversion</b>). "Kya bigad sakta hai" sochna hume aasaan aur specific lagta hai, jabki "kya achha hoga" aksar vague reh jaata hai. Inversion is aadat ko kaam me laata hai.',
      'Design aur creativity me isse <b>reverse brainstorming</b> kehte hain: pehle problem ko badtar banane ke ideas, phir unka ulta. Ye functional fixedness (ek hi tareeke se dekhna) todne me madad karta hai.'
    ],
    steps: [
      ['Goal saaf likho', '"Is semester attendance 75% ke upar" ya "naye customers ko dukaan par wapas laana".'],
      ['Ulta sawaal', '"Main isko pakka barbaad kaise karunga / karungi?"'],
      ['Fail list', '10 tareeke. Mazaak me bhi chalega, jitne specific utne behtar.'],
      ['Har ek ko palto', 'Har fail tareeke ka ulta ek rule ya action ban jaata hai.'],
      ['Jo abhi ho raha hai, mark karo', 'Fail list me se kya kuch already ho raha hai? Wahi pehla fix hai.']
    ],
    example: [
      'Biju ki Thrissur me ek chhoti bakery hai. Naye log ek baar aate the, phir dobara nahi. Biju "zyada customers kaise laaun" soch soch kar discount ke ads chala raha tha, fayda nahi.',
      'Uski beti Aditi ne, jo MBA kar rahi thi, poochha: "Appa, agar humein customer ko pakka wapas <i>na</i> aane dena ho, to kya karenge?" Dono ne hanste hanste list banayi: der tak line me khada rakho; jo pasand aaya wo agli baar khatam ho; bina muskaan ke bill do; UPI ka QR kaam na kare; bread ka taste har din alag ho.',
      'List padhte hi Biju chup ho gaya. Shaam ko bheed me line sach me lambi hoti thi, aur QR code wala scanner aksar hang hota. Teen hafte me unhone shaam ke liye ek extra counter, naya QR stand aur bestseller ke liye roz fixed quantity rakhi. Discount ads band. Kuch mahine me wahi chehre baar baar dikhne lage. <b>Hal naya idea nahi tha; galtiyan band karna tha.</b>'
    ],
    script: [
      ['Team brainstorming atki ho', '"Chalo ek minute ke liye ulta sochte hain: hum is launch ko pakka flop kaise kar sakte hain? Phir wo sab nahi karenge."'],
      ['Khud ki aadat ke liye', '"Agar main kal ka din pakka barbaad karna chahun, to kya karunga / karungi?" (phir wahi cheezein raat ko hata do)']
    ],
    mistakes: [
      'Sirf fail list bana kar ruk jaana. Palat kar action banana zaroori hai.',
      'Inversion ko negativity samajhna aur team ka mood girana. Ise khel ki tarah karo, hansi ke saath.',
      'Sirf galtiyan hataana kaafi samajhna. Kabhi kabhi kuch naya bhi chahiye; inversion pehla step hai, aakhri nahi.'
    ],
    drill: 'Apna ek goal chuno (fitness, padhai, savings). "Ise pakka fail kaise karun?" ke 10 tareeke likho. Teen aise mark karo jo abhi ho rahe hain, aur un me se ek aaj band karo.',
    teacher: '"Achha kaise banun?" ka jawab aksar dhundla milta hai. "Pakka bekaar kaise banun?" ki list bina kisi lecture ke sab saaf dikha deti hai.',
    chapters: ['thinking-decisions', 'cognitive-biases'],
    tags: ['inversion', 'ulta socho', 'munger', 'reverse brainstorming', 'business', 'problem solving']
  });

  K({
    id: 'pre-mortem', cat: 'problem', level: 2,
    q: 'Kisi plan ke fail hone se pehle hi uski kamzori kaise pakdein?',
    short: 'Pre-mortem karo: maan lo plan 6 mahine baad buri tarah fail ho chuka hai. Ab sab likho ki "ye kyun fail hua". Ye kaam shuru karne se pehle chhupe khatre bahar le aata hai.',
    why: [
      'Psychologist <b>Gary Klein</b> ne ye tareeka banaya aur 2007 me Harvard Business Review me likha. Post-mortem marne ke baad hota hai; pre-mortem shuru se pehle. Daniel Kahneman ne bhi isse apne pasandeeda tareekon me se ek kaha hai.',
      'Ye <b>prospective hindsight</b> par based hai: Mitchell, Russo aur Pennington (1989) ke research me jab logon ko kaha gaya ki ghatna "ho chuki hai", to wo uske kaaran zyada aasaani se soch paaye, us comparison me jab poochha gaya ki "kya ho sakta hai".',
      'Groups me ek aur fayda: plan banne ke baad log doubt bolne se ghabraate hain (<b>groupthink</b>, Level 5). Pre-mortem doubt ko "loyalty" ka sawaal nahi, kaam ka hissa bana deta hai, isliye shaant log bhi bolte hain.'
    ],
    steps: [
      ['Plan sab ko pata ho', 'Ek line me plan aur uska goal.'],
      ['Future me jump', '"Aaj se 6 mahine baad. Ye plan pura flop ho gaya. Bahut bura."'],
      ['Akele likho', 'Har koi 3-5 minute me apne kaaran chupchaap likhe. Pehle bolne se baaki log uski line par chalne lagte hain.'],
      ['Ek ek karke suno', 'Har insaan ek kaaran bole, round me, jab tak list khatam na ho. Senior sab se baad me.'],
      ['Top 3 ka ilaaj', 'Sabse sambhav aur sabse nuksaan wale kaaranon ke liye abhi plan me badlaav ya backup.']
    ],
    example: [
      'Priya aur uske college dost Manoj, Shreya aur Rahul ne Nagpur me ek weekend tiffin service shuru karne ka socha. Excitement full. Shreya ne kaha, "Shuru karne se pehle ek ajeeb game khelte hain: maan lo teen mahine baad ye band ho gaya. Kyun?"',
      'Sab ne phone me 4 minute akele likha. Phir padha. Manoj: "Delivery boy weekend par nahi aaya." Rahul: "Hum sab exams me busy ho gaye." Priya: "Hum ne cost me gas aur packing gini hi nahi, loss me chale." Shreya: "Ek customer ki tabiyat kharab hui aur review viral."',
      'Har ek ka ek hal nikla: do backup delivery wale, exam ke mahine ke liye pehle se menu chhota, ek simple sheet jisme har tiffin ki poori cost, aur kitchen ki safai aur FSSAI registration ki jaankari pehle se. Business teen mahine me bhi chhota hi raha, par loss me nahi gaya. Priya kehti hai, <b>"Hum ne fail hone ka dar pehle ek ghante me jee liya, phir uske liye taiyaar the."</b>'
    ],
    script: [
      ['Office me naya project shuru hote waqt', '"Kya hum 15 minute ek pre-mortem kar sakte hain? Maan lete hain ki ye fail ho gaya, aur sab likhte hain kyun."'],
      ['Family trip plan karte waqt', '"Maan lo trip kharab gayi. Sabse sambhav wajah kya hogi? Train late, kisi ki tabiyat, ya hotel?"']
    ],
    mistakes: [
      'Pre-mortem ko blame ka session banana. Ye "kaun galat hai" nahi, "kya galat ho sakta hai" hai.',
      'Sirf likh kar file me rakh dena. Top 3 kaaranon ke liye plan me asli badlaav nahi kiya to fayda nahi.',
      'Itna dar jaana ki shuru hi na karo. Maqsad plan ko mazboot karna hai, rokna nahi.'
    ],
    drill: 'Apne aane wale kisi plan (exam ki taiyaari, trip, naya routine) ke liye 5 minute pre-mortem karo: "Ye fail ho gaya, kyun?" 5 kaaran likho, aur sabse bade ek ke liye abhi ek backup tay karo.',
    teacher: 'Optimism plan shuru karne ke liye zaroori hai. Pre-mortem use zinda rakhne ke liye. Dono saath chalte hain.',
    chapters: ['thinking-decisions', 'group-behavior', 'cognitive-biases'],
    tags: ['pre-mortem', 'gary klein', 'planning', 'risk', 'groupthink', 'team']
  });

  K({
    id: 'first-principles', cat: 'problem', level: 3,
    q: 'Purane tareeke se hat kar bilkul naya hal kaise sochein (first principles)?',
    short: 'Problem ko us had tak todo jahan sirf pakke facts bachein, aur har "aisa hi hota hai" wali maanyata ko sawaal karo. Phir un facts se naya hal jodo, purani copy se nahi.',
    why: [
      'Ye idea Aristotle tak jaata hai: "first principles" wo buniyaadi baatein jo kisi aur baat se nahi nikaali ja sakti. Aaj kal startup duniya me ye "analogy se sochne" ke ulte ke roop me mashhoor hai. Analogy (doosre jaisa karna) jaldi aur aksar kaafi achha hai; first principles dheema hai, par jab sab ek hi galat maanyata par chal rahe hon tab kaam aata hai.',
      'Psychology me <b>functional fixedness</b> (Karl Duncker ki candle problem) aur <b>mental set</b> (Luchins ke paani ke jug experiment) dikhaate hain ki hum ek baar sikhe hue tareeke se chipak jaate hain, bhale hi aasaan raasta saamne ho. First principles in "set" ko todne ka ek system hai.',
      'Limit samjho: har problem ke liye ye zaroori nahi. Chai banane ke liye first principles nahi chahiye. Ise tab use karo jab problem baar baar wapas aaye, bahut mehengi ho, ya sab "solutions" ek jaise lagein.'
    ],
    steps: [
      ['Maanyataayein likho', '"Ye aise hi hota hai" wali har baat: "tuition ke bina number nahi aate", "shaadi me 500 log zaroori".'],
      ['Har ek par "pakka?"', 'Ye fact hai, niyam hai, ya sirf aadat? Kisne kaha? Saboot kya hai?'],
      ['Buniyaadi tukde', 'Jo sach me bacha: asli zaroorat kya hai (jaise "concept clear ho aur practice ho"), asli cost kya hai.'],
      ['Wahan se naya jodo', 'Sirf buniyaadi tukdon se 3 alag raaste banao, bina purane tareeke ko dekhe.'],
      ['Chhota test', 'Sabse sasta, jaldi test hone wala raasta chuno aur 2 hafte try karo.']
    ],
    example: [
      'Venkat ke ghar me har saal ek hi bahas: Class 10 me bete Aarav ke liye teen tuition, 4 ghante roz travel, aur fir bhi maths me dar. "Sab yahi karte hain" ye maanyata thi.',
      'Venkat ne aur Aarav ki mummy Rekha ne ek raat kaagaz par maanyataayein likhin: "Tuition zaroori", "zyada ghante = zyada marks", "maths me kamzor bachche aise hi hote hain". Phir har ek par sawaal: zyada ghante? Aarav thak kar so jaata tha. Kamzor? Pichhle saal ke chapters samjhe nahi the, baaki usi par khade the. Buniyaadi tukde nikle: <b>purane gap bharna, roz practice, aur galtiyon ko samajhna</b>.',
      'Unhone do tuition band ki. Bache paison se ek teacher ne hafte me do baar sirf purane gap sikhaaye, aur Aarav roz 40 minute ghar me khud se sawaal karta (travel ke 2 ghante bache). Ek mahine me test thoda sudhra, aur sab se badi baat, Aarav ne kaha "maths ab samajh aa raha hai". Hal har bachche ke liye yahi nahi hoga, par ye unki asli problem se nikla tha, padosiyon ki copy se nahi.'
    ],
    script: [
      ['Meeting me "hum hamesha aise hi karte aaye hain"', '"Theek hai, ek minute ke liye maan lo hum aaj zero se shuru kar rahe hain. Asli zaroorat kya hai, aur use poora karne ka sabse seedha tareeka kya hoga?"'],
      ['Ghar me koi kharcha', '"Ye cheez hum asal me kis zaroorat ke liye le rahe hain? Kya wo zaroorat kisi aur tareeke se poori ho sakti hai?"']
    ],
    mistakes: [
      'Har chhoti cheez ko first principles se karna aur thak jaana. Analogy roz ki life ke liye theek hai.',
      '"First principles" bol kar experts ki saari jaankari ko ignore karna. Buniyaadi facts aksar experts se hi milte hain.',
      'Maanyata ko sawaal karte waqt ghar walon ki feelings ko bhi "bekaar maanyata" bol dena. Log ki chinta bhi ek asli data hai.'
    ],
    drill: 'Ek cheez chuno jo tum "sab karte hain isliye" karte ho (koi kharcha, routine, padhai ka tareeka). 5 maanyataayein likho, har ek ke saamne "fact / aadat / pata nahi" likho, aur buniyaadi zaroorat se ek naya tareeka socho.',
    teacher: 'First principles ka matlab dunia ko bewakoof samajhna nahi. Matlab hai ek baar ruk kar poochhna: ye kaam isliye ho raha hai kyunki ye sahi hai, ya sirf isliye kyunki ye jaana pehchaana hai?',
    chapters: ['thinking-decisions', 'intelligence'],
    tags: ['first principles', 'functional fixedness', 'mental set', 'assumptions', 'tuition', 'innovation']
  });

  K({
    id: 'jaldi-smart-faisla', cat: 'problem', level: 3,
    q: 'Faisla jaldi aur smart kaise lein, bina zaroorat se zyada soche?',
    short: 'Pehle dekho faisla palta ja sakta hai ya nahi. Palat sakne wale faisle jaldi lo, "kaafi achha" option par ruk jaao (satisficing). Na palatne wale faislon par hi zyada time aur research lagao.',
    why: [
      'Nobel jeetne wale scientist <b>Herbert Simon</b> ne 1950s me kaha ki insaan "perfect" faisle nahi lete; hum <b>satisfice</b> karte hain: jo pehla option hamari zaroorat ke standard ko poora kare, use chun lete hain. Ye kamzori nahi, seemit time aur jaankari me samajhdaari hai (bounded rationality).',
      'Barry Schwartz aur saathiyon (2002) ne paaya ki jo log har cheez me "best" dhoondhte hain (<b>maximizers</b>), wo aksar apne faislon se kam santusht rehte hain aur zyada pachtaate hain, un logon ke muqable jo "kaafi achha" par ruk jaate hain. Zyada options bhi kai baar faisla mushkil karte hain.',
      'Jeff Bezos ne apne shareholder letters me faislon ko do type me baanta: <b>ek-tarfa darwaze</b> (na palatne wale, jaise ghar khareedna) aur <b>do-tarfa darwaze</b> (palatne wale, jaise naya menu try karna). Galti tab hoti hai jab hum do-tarfa faislon par ek-tarfa wali dheemi soch lagaate hain, ya ulta.'
    ],
    steps: [
      ['Darwaza pehchaano', 'Ye faisla 1 hafte me palta ja sakta hai? Kitni cost par? Haan to ye fast lane me hai.'],
      ['Standard pehle likho', '"Kaafi achha" kya hai, 3 points me (budget, zaroori feature, time). Options dekhne se pehle.'],
      ['Time limit', 'Chhote faisle 2 minute, medium 1 din, bade 1-2 hafte. Deadline ke bina research kabhi khatam nahi hoti.'],
      ['Pehla jo standard poora kare, wahi', 'Fast lane me "aur behtar hoga" ke peeche mat bhaago.'],
      ['Bade faislon me slow lane', 'Na palatne wale faislon par pre-mortem, kisi bharosemand insaan ki raay, aur ek raat ki neend.']
    ],
    example: [
      'Ananya (27, Kolkata) har cheez me best dhoondhti thi. Ek naya phone lene me use 3 hafte lage, 40 review videos, aur aakhir me bhi lagta ki "doosra wala better tha". Usi dauraan use do job offers bhi mile the, aur us par wo sirf ek shaam soch kar haan bol aayi, kyunki "phone ki research me thak gayi thi".',
      'Uski therapist, Dr. Mehra, ne use ek table banane ko kaha: kaunsa faisla palat sakta hai? Phone: 7 din return policy, palat sakta hai. Job: chhodna mumkin, par mehenga aur mushkil. Ananya hansi: "Main ulta kar rahi thi. Phone par ek-tarfa darwaze jaisi research, job par do-tarfa jaisi jaldi."',
      'Ab uske paas ek rule hai: jo cheez return ho sakti hai, uske liye 3 point ka standard aur 30 minute. Jo palti nahi ja sakti (job, ghar, rishta, bada loan), uske liye ek hafta, ek pre-mortem aur do bharosemand logon se baat. Usne pehle se kam time sochne me lagaya, aur faislon se zyada khush rehne lagi.'
    ],
    script: [
      ['Dosto ke saath restaurant chunne me 30 minute', '"Teen criteria bolo: budget, distance, veg option. Jo pehla teeno poore kare, wahi chalte hain. Bura laga to agli baar doosra."'],
      ['Team me chhote faisle par lambi bahas', '"Kya ye faisla agle hafte palta ja sakta hai? Agar haan, to abhi try karte hain aur data dekh kar badal denge."'],
      ['Bade faisle par pressure', '"Ye faisla wapas nahi hota, isliye main ek hafta loonga / loongi. Shukravaar tak jawab doonga / doongi."']
    ],
    mistakes: [
      'Satisficing ka matlab "kuch bhi chalega" samajhna. Standard pehle tay hota hai; bas uske upar ki perfection ke peeche nahi bhaagte.',
      'Bade, na palatne wale faislon ko bhi "gut feeling" par jaldi lena kyunki chhote faislon me thak gaye.',
      'Chhote faislon me "galat" chunne ko apni kamzori samajhna. Do-tarfa darwaze me galti bas data hai.'
    ],
    drill: 'Apne aane wale 5 faisle likho (chhote bade dono). Har ek ke saamne likho: palat sakta hai ya nahi, aur kitna time dena hai. Aaj ek chhota, palatne wala faisla 5 minute me "kaafi achha" standard ke saath le lo.',
    teacher: '"Perfect" faisle ke intezaar me saal nikal jaate hain. Zyaadatar faislon ko perfect nahi, baad me theek kar dene layak hona chahiye.',
    chapters: ['thinking-decisions', 'cognitive-biases', 'positive-psychology'],
    tags: ['decision making', 'satisficing', 'herbert simon', 'maximizer', 'reversible decisions', 'choice overload']
  });
})();
