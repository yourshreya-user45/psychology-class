/* Roz ki Psychology · Padhai, kaam aur paisa. Format: README.md ("Roz ki Psychology ka format"). */
(function () {
  const S = window.PSY.situation;

  /* ---------- PADHAI ---------- */

  S({
    id: 'exam-raat-pehle', cat: 'padhai', level: 1, kind: 'anjaane',
    title: 'Poora semester time tha, phir bhi padhai exam se ek raat pehle hi kyun hoti hai?',
    hook: 'Mahina bhar "abhi bahut time hai", aur phir raat 2 baje chai, Maggi aur poora syllabus.',
    story: [
      'Pune ke ek hostel me Rohan ka Thermodynamics ka paper Monday subah 10 baje tha. Syllabus 45 din pehle aa gaya tha. Usne ek sundar timetable bhi banaya tha, rang-birange pens se. Pehle hafte "pehle notes collect kar leta hoon", doosre hafte India-Australia series, teesre hafte "dimaag fresh ho to padhunga".',
      'Sunday raat 11 baje Rohan ne kitaab kholi. Room me chai ka teesra cup, phone par seniors ke "important questions" wala PDF. Raat 3 baje usne khud se kaha: "Bas, agle semester se pakka roz padhunga." Paper me ek poora unit chhoot gaya. Aur sabse ajeeb baat: pichhle semester bhi yahi line boli thi.'
    ],
    guess: ['Tumhe kya lagta hai, Rohan baar-baar aisa kyun karta hai?', ['Wo aalsi hai aur use padhai ki parwah nahi', 'Door ki deadline dimaag ko "asli" nahi lagti, aur kitaab kholne ki bechaini se bachna turant rahat deta hai', 'Use pressure me hi achha padhna aata hai'], 1, 'Procrastination time ki nahi, <b>mood ki problem</b> hai: hum kaam se nahi, kaam se judi buri feeling se bhaagte hain.'],
    kya: 'Log kaam ko tab tak taalte hain jab tak deadline itni paas na aa jaaye ki darr, kaam ki bechaini se bada ho jaaye. Phir raat bhar ek saath sab karte hain aur khud se vaada karte hain ki agli baar alag hoga.',
    kyun: [
      ['Present bias', 'Dimaag aaj ke aaram ko door ke fayde se zyada vazan deta hai. 45 din pehle exam ek "future Rohan" ki problem thi. Aaj ka Rohan cricket chunta raha, kyunki uska maza abhi tha aur marks ka nuksaan door.'],
      ['Mood repair', 'Kitaab kholte hi "itna saara hai, kuch samajh nahi aayega" wali bechaini aati hai. Phone uthate hi wo bechaini turant kam ho jaati hai. Ye rahat ek reward hai (Level 3, operant conditioning), isliye taalna khud ek aadat ban jaata hai.'],
      ['Planning fallacy', 'Rohan ne socha "ek raat me ho jaayega". Hum kaam ka time hamesha best-case maan kar aankte hain: na neend, na confusion, na "ye topic to kabhi padha hi nahi".'],
      ['Massed practice ka dhokha', 'Raat bhar ratna agle din kuch yaad rakhwa deta hai, isliye lagta hai tareeka kaam karta hai. Par ek saath ratta (massed practice) jaldi bhoolta hai; thoda-thoda kai dino me padhna (spacing) zyada tikta hai.']
    ],
    kaise: [
      'Syllabus aata hai: deadline door hai, darr shunya.',
      'Timetable banta hai: plan banane se hi "kuch kiya" wali feeling aa jaati hai.',
      'Har baar kitaab ke paas jaate hi halki bechaini, aur phone se turant rahat.',
      'Deadline paas: darr ab bechaini se bada ho gaya, to kaam shuru.',
      'Raat bhar ratta, aadha syllabus chhoota, aur agle semester ka naya vaada.'
    ],
    irada: 'Ye poori tarah <b>anjaane me</b> hota hai. Rohan jaanbujh kar fail nahi hona chahta. Uska dimaag bas har pal "abhi achha kya lagega" chun raha hai, aur ye chhote-chhote faisle mil kar ek bada nuksaan ban jaate hain.',
    gap: 'Rohan ko pata hai roz padhna behtar hai. Par ye jaankari "cold state" me hai (timetable banate waqt). Faisla "hot state" me hota hai, jab bechaini saamne hai aur phone haath me. Jaankari bechaini ko kam nahi karti, isliye jaanna kaafi nahi padta.',
    real: ['College students par procrastination study (Tice aur Baumeister, 1997)', 'Psychologists Dianne Tice aur Roy Baumeister ne ek semester tak students ko follow kiya. Taalne wale students semester ki shuruaat me kam stressed aur zyada khush the, par end tak unka stress aur bimaariyan zyada ho gayi, aur unke marks bhi kam aaye. Yaani taalna shuru me sasta lagta hai aur baad me mehenga padta hai.'],
    fix: [
      '<b>2 minute rule</b>: "Padhna hai" nahi, "sirf kitaab khol kar pehla page padhna hai". Shuru karna sabse mushkil hissa hai; shuru hone ke baad bechaini kam ho jaati hai.',
      '<b>Bada kaam todo</b>: "Thermodynamics padhna" ki jagah "Unit 2 ke 5 numericals". Chhota kaam kam darrata hai.',
      '<b>Phone doosre kamre me</b>: rahat ka button door ho, to bechaini ko sehna aasaan hai.',
      '<b>Nakli deadline banao</b>: dost ke saath tay karo, "Friday ko ek doosre ko Unit 1 padha kar sunayenge." Kisi aur ke saamne ka vaada zyada tikta hai.',
      'Ek din chhoot jaaye to "ab to sab bekaar" mat socho. Agle din wahin se shuru karo.'
    ],
    teacher: 'Agar ye kahani tumhari bhi hai, to khud ko aalsi mat bolo. Bhaagna kitaab se nahi, us bechaini se hota hai. Bechaini ke saath bas do minute baith jao, phir dekho kaam kaise chal padta hai.',
    chapters: ['motivation', 'operant-conditioning', 'cognitive-biases'],
    tags: ['procrastination', 'exam', 'present bias', 'padhai', 'deadline', 'hostel']
  });

  S({
    id: 'highlight-padh-liya', cat: 'padhai', level: 1, kind: 'anjaane',
    title: 'Poori kitaab highlight kar di, teen baar padh li, phir bhi test me kuch yaad kyun nahi aaya?',
    hook: 'Page peela, neela, gulabi ho gaya. Lagta tha sab aa gaya. Test me pen ruk gaya.',
    story: [
      'Lucknow ki Fatima NEET ki taiyaari kar rahi thi. Biology ki NCERT par usne itna highlight kiya tha ki safed hissa dhoondhna padta tha. Har chapter teen baar padha. Har baar padhte waqt lagta, "Haan, ye to pata hai."',
      'Coaching ke weekly test me sawaal aaya: "Nephron me glucose ka reabsorption kahan hota hai?" Fatima ko yaad tha ki ye page ke right side, neeche, gulabi highlight me tha. Par jawab? Kuch nahi. Uski dost Shreya, jisne kam padha tha par har chapter ke baad khud se sawaal poochhti thi, sahi kar gayi. Fatima ka sawaal tha: "Maine to zyada padha tha, phir?"'
    ],
    guess: ['Fatima ke saath kya hua?', ['Uski memory kamzor hai', 'Baar-baar padhne se cheez <i>jaani-pehchaani</i> lagne lagi, par use dimaag se <i>nikaalne</i> ki practice kabhi nahi hui', 'Usne galat kitaab padhi'], 1, 'Pehchaan lena aur yaad kar paana do alag skills hain. Test doosri wali maangta hai.'],
    kya: 'Log baar-baar padhte hain, highlight karte hain, notes copy karte hain, aur jab page jaana-pehchaana lagta hai to maan lete hain ki seekh liya. Phir test me jawab nahi aata.',
    kyun: [
      ['Illusion of competence', 'Teesri baar padhte waqt page "fluent" lagta hai: shabd jaane-pehchaane, flow aasaan. Dimaag is aasaani ko "mujhe aata hai" samajh leta hai. Par Fatima ne kabhi bina dekhe jawab nikaalne ki koshish nahi ki thi.'],
      ['Recognition vs recall', 'Page saamne ho to pehchaanna (recognition) aasaan hai. Exam me khaali sawaal se jawab nikaalna (recall) padta hai. Fatima ko jagah aur rang yaad tha, kyunki wahi usne baar-baar dekha tha.'],
      ['Testing effect', 'Shreya har chapter ke baad khud se sawaal poochhti thi. Har baar yaad nikaalne ki mehnat us yaad ka raasta mazboot karti hai (Level 3, memory). Mushkil lagne wali padhai aksar zyada tikti hai; isse "desirable difficulty" kehte hain.']
    ],
    kaise: [
      'Padhna shuru: highlighter haath me, sab kuch important lagta hai.',
      'Doosri-teesri reading: page fluent lagta hai, confidence badhta hai.',
      'Kabhi kitaab band karke khud ko test nahi kiya, kyunki wo mushkil aur bura lagta.',
      'Exam me khaali page: recall maanga gaya, practice sirf recognition ki thi.'
    ],
    irada: 'Fatima <b>anjaane me</b> ye kar rahi hai. Wo mehnat kar rahi hai, bas galat cheez ki. Dimaag aasaan aur achha mehsoos hone wala tareeka chunta hai, aur "achha mehsoos hona" ko "seekh lena" samajh leta hai.',
    gap: 'Bahut se students ne suna hai ki self-test behtar hai. Phir bhi re-reading karte hain, kyunki self-test me galat hona padta hai, aur galat hona bura lagta hai. Re-reading turant achha feel karwati hai; self-testing baad me achha result deti hai. Dimaag turant wali feeling chunta hai.',
    real: ['Learning techniques ka bada review (Dunlosky aur saathi, 2013)', 'John Dunlosky aur saathiyon ne das common padhai techniques par sau se zyada studies dekhi. Highlighting aur re-reading ko unhone "low utility" maana, jabki practice testing (khud ko test karna) aur distributed practice (thoda-thoda kai dino me) ko "high utility". Isse pehle Roediger aur Karpicke (2006) ne dikhaya tha ki jo students ek baar padh kar khud ko test karte the, wo ek hafte baad baar-baar padhne walon se zyada yaad rakh paaye, jabki padhne walon ko zyada confidence tha.'],
    fix: [
      '<b>Kitaab band karo, khaali page lo</b>: jo padha, bina dekhe likho. Jo nahi likh paaye, wahi tumhara asli syllabus hai.',
      '<b>Highlight ki jagah sawaal</b>: margin me likho "Glucose reabsorption kahan?" aur jawab neeche chhupa do.',
      '<b>Spacing</b>: aaj padha, kal 5 minute dohrao, phir 3 din baad, phir ek hafte baad.',
      '<b>Kisi ko samjhao</b>: chhote bhai-behen ya dost ko bina notes ke samjhao. Jahan atko, wahan gap hai.',
      'Myth bust: "Main visual learner hoon, isliye rang zaroori hain" jaisi learning styles ki baat ko research ka support nahi milta. Tareeka topic ke hisaab se chuno, label ke hisaab se nahi.'
    ],
    teacher: 'Padhai jab thodi mushkil lage, tab ghabrao mat. Wo mushkil hi yaad ko pakka kar rahi hai. Aasaan lagna aur aana, do alag cheezein hain.',
    chapters: ['memory', 'forgetting', 'critical-thinking'],
    tags: ['highlight', 're-reading', 'testing effect', 'illusion of competence', 'NEET', 'padhai']
  });

  S({
    id: 'exam-hall-blank', cat: 'padhai', level: 2, kind: 'anjaane',
    title: 'Ghar par sab yaad tha, exam hall me baithte hi dimaag blank kyun ho gaya?',
    hook: 'Raat ko mummy ko poora answer suna diya tha. Subah question paper dekhte hi sab gayab.',
    story: [
      'Chennai ke Karthik ne 12th board ke Chemistry paper ke liye mahine bhar padhai ki thi. Raat ko apni amma ko organic reactions ek-ek karke sunaye, bina atke. Subah exam centre ek anjaana school tha. Gate par bheed, kisi ne kaha "is baar paper bahut tough aayega", invigilator ne zor se ghadi dekh kar time bataya.',
      'Paper haath me aaya. Pehla sawaal wahi reaction tha jo kal raat sunaya tha. Karthik ka dil tez dhadakne laga, haath thande, aur dimaag me ek safed parda. Usne socha, "Mujhe kuch nahi aata, main fail ho jaunga." Bees minute baad, teesra sawaal karte waqt achanak wo pehla reaction yaad aa gaya. Tab tak wo bahut ghabra chuka tha.'
    ],
    guess: ['Karthik ke saath asal me kya hua?', ['Usne theek se padha hi nahi tha', 'Yaad dimaag me thi, par darr ne use bahar nikaalne ka raasta band kar diya', 'Raat ko padhne se sab bhool gaya'], 1, 'Memory "gayi" nahi thi, bas <b>retrieval</b> ruk gaya tha. Isliye bees minute baad wapas aa gayi.'],
    kya: 'Log achhi tarah padh kar bhi exam, interview ya stage par achanak blank ho jaate hain, aur baad me sab yaad aa jaata hai. Phir maan lete hain ki "mera dimaag hi kamzor hai".',
    kyun: [
      ['Stress aur retrieval', 'Achanak darr par body fight-or-flight me jaati hai (Level 2, nervous-endocrine): dil tez, haath thande. Is haalat me dimaag khatre par focus karta hai, aur yaad nikaalne wala system kuch der ke liye dheema pad jaata hai. Memory dimaag me hi thi; darwaza band tha.'],
      ['Context-dependent memory', 'Karthik ne ghar ke kamre me, aaram se, bolkar padha tha. Exam hall me jagah, aawaaz, mahaul sab alag tha. Yaad ke saath uska mahaul bhi judta hai, aur mahaul badalne par yaad nikaalna thoda mushkil ho sakta hai.'],
      ['Catastrophic thinking', '"Mujhe kuch nahi aata, fail ho jaunga" wali soch ne ek pal ke blank ko poori aafat bana diya. Ab dimaag ka hissa sawaal par nahi, darr par laga tha. Darr ne aur darr paida kiya.']
    ],
    kaise: [
      'Exam se pehle: bheed, afwaahein ("paper tough aayega"), anjaani jagah.',
      'Pehla sawaal: dil tez, body alarm mode me.',
      'Retrieval atka: jawab "jeebh par" hai, par nahi aa raha.',
      'Darr ka spiral: "kuch nahi aata" wali soch, aur zyada ghabrahat.',
      'Body shaant hui, mahaul ki aadat hui, aur yaad wapas aa gayi, par time chala gaya.'
    ],
    irada: 'Ye bilkul <b>anjaane me</b> hota hai. Karthik ne kuch galat nahi kiya; body ka alarm system apna kaam kar raha tha, bas galat jagah par. Bahar wale log (afwaah udaane wale dost bhi) aksar anjaane me darr badha dete hain.',
    gap: 'Karthik ko pata hai "ghabrana nahi chahiye". Par ghabrahat soch se nahi, body se shuru hoti hai, aur "mat ghabrao" bolne se body shaant nahi hoti. Isliye jaanna kaafi nahi; body ko shaant karne ka tareeka practice karna padta hai.',
    real: ['Divers wali memory study (Godden aur Baddeley, 1975)', 'Scotland me deep-sea divers ne shabdon ki list ya to zameen par ya paani ke andar yaad ki. Jo list paani me yaad ki, wo paani me zyada achhi yaad aayi, aur jo zameen par yaad ki, wo zameen par. Ek dhyaan dene wali baat: 1980 me unhi researchers ne dekha ki jab shabd sirf pehchaanne the (recognition), to jagah ka utna asar nahi tha. Yaani mahaul sabse zyada khaali page se yaad nikaalne (recall) me asar karta hai.'],
    fix: [
      '<b>Exam jaisi practice</b>: ghar par ghadi laga kar, table par baith kar, bina notes ke mock paper do. Dimaag ko exam wala mahaul pehle se jaana-pehchaana ho jaaye.',
      '<b>Blank ho to body pehle</b>: pen rakho, 4 second saans andar, 6 second bahar, paanch baar. Lambi saans bahar chhodna body ko shaant karta hai.',
      '<b>Sawaal chhodo, ruko mat</b>: jo nahi aa raha uspar nishaan lagao aur aage badho. Aksar doosra sawaal karte waqt yaad laut aati hai, jaise Karthik ke saath hua.',
      '<b>Gate ki afwaahon se door</b>: exam se pehle 15 minute akele raho, kisi se "kya padha" mat poochho.',
      'Agar exam ka darr hafton tak neend, khana ya saans par asar karne lage, to akele mat jhelo. Tele-MANAS (14416) par free me baat ho sakti hai.'
    ],
    teacher: 'Agar exam me kabhi tumhara dimaag blank hua hai, to yaad rakho: padha hua gaya nahi tha, bas darwaza kuch der band tha. Saans lo, aage badho, darwaza khul jaayega.',
    chapters: ['memory', 'stress-coping', 'nervous-endocrine'],
    tags: ['exam anxiety', 'blank', 'retrieval', 'board exam', 'stress', 'memory']
  });

  S({
    id: 'sharma-ji-ka-beta', cat: 'padhai', level: 2, kind: 'dono',
    title: '"Sharma ji ke bete ko dekho" sun kar padhai badhti kyun nahi, aur ghat kyun jaati hai?',
    hook: 'Papa ka iraada motivation dena tha. Beti ne us din se Maths ki copy kholna band kar diya.',
    story: [
      'Ludhiana me Simran ke 10th ke pre-boards me Maths me 71 aaye. Raat ke khaane par papa ne kaha, "Gupta ji ki Rhea ke 96 aaye hain. Wo bhi tumhare saath hi tuition jaati hai. Tumhe kya kami hai?" Mummy ne dheere se joda, "Rhea to subah 5 baje uthti hai." Papa ka matlab bura nahi tha. Unhe laga thoda jhatka lagega to beti mehnat karegi.',
      'Agle din Simran tuition gayi, par Rhea se baat nahi ki. Ghar aa kar Maths ki jagah English padhti rahi, "jismein main achhi hoon". Family WhatsApp group me Gupta ji ne Rhea ka result share kiya; Simran ne group mute kar diya. Final boards me Maths me 68 aaye. Papa hairaan the: "Itna samjhaya, phir bhi?"'
    ],
    guess: ['Papa ki comparison ne kaam kyun nahi kiya?', ['Simran ziddi hai, use samjhana bekaar hai', 'Comparison ne mehnat ki jagah "main hi kam hoon" wali feeling jagai, aur dimaag ne us dard se bachne ke liye Maths se hi doori bana li', 'Rhea Simran se zyada intelligent hai'], 1, 'Upar ki comparison kabhi-kabhi prerna deti hai, par sirf tab jab lage "main bhi wahan pahunch sakta/sakti hoon". Warna wo sharm banti hai, aur sharm se insaan chhupta hai.'],
    kya: 'Ghar wale bachche ki tulna kisi "behtar" bachche se karte hain, ye soch kar ki isse mehnat badhegi. Bachcha aksar ulta us subject, us dost, ya padhai se hi doori bana leta hai.',
    kyun: [
      ['Upward social comparison', 'Hum apni qeemat doosron se tulna karke aankte hain. Rhea ke 96 ke saamne Simran ke 71 achanak "failure" ban gaye, jabki khud me wo theek-thaak number tha. Tulna ne naap-tol ki line hi badal di.'],
      ['Self-worth protection', 'Agar Simran poori mehnat karke bhi kam laaye, to iska matlab hoga "main sach me kam hoon". Isse bachne ke liye dimaag mehnat hi kam kar deta hai, taaki baad me kaha ja sake "maine to padha hi nahi tha". Isse self-handicapping kehte hain.'],
      ['Fixed vs growth soch', '"Tumhe kya kami hai?" aur "Rhea 5 baje uthti hai" se message gaya: farq tumhare andar hai. Jab bachcha maan le ki qaabiliyat fixed hai, to mehnat ka matlab hi khatam lagta hai.'],
      ['Big-fish-little-pond', 'Tuition me sab "toppers" ke beech Simran ka apne baare me khayal aur gir gaya. Apni ability ka andaza hum aas-paas ke group se lagate hain, asli number se nahi.']
    ],
    kaise: [
      'Result aata hai; parents ko chinta hoti hai.',
      'Chinta "motivation" ke roop me nikalti hai: kisi aur ka naam, kisi aur ka number.',
      'Bachche ko mehnat ki jagah sharm aur gussa mehsoos hota hai.',
      'Bachav: us subject, us dost, us group se doori; asaan subject me chhupna.',
      'Result aur girta hai; parents ko lagta hai "aur sakhti chahiye", aur chakra ghoomta rehta hai.'
    ],
    irada: 'Ye <b>dono</b> taraf se hai. Papa <b>jaanbujh kar</b> comparison karte hain, par ek galat theory ke saath: "jhatka lagega to sudhregi". Unka iraada pyaar ka hai, nuksaan anjaane me hota hai. Simran ka doori banana poori tarah <b>anjaane me</b> hai; wo khud ko bachaa rahi hai, use pata bhi nahi.',
    gap: 'Bahut se parents jaante hain ki comparison bura lagta hai, kyunki unke saath bhi hua tha. Phir bhi karte hain, kyunki chinta ke pal me sabse taiyaar, sabse aasaan line wahi hoti hai jo unhone khud suni thi. Aur bachche jaante hain ki "dil par nahi lena chahiye", par sharm ek feeling hai, decision nahi.',
    real: ['Big-fish-little-pond effect (Herbert Marsh)', 'Psychologist Herbert Marsh aur saathiyon ne kai deshon ke data me dekha ki same ability wale students ka apne academic talent ke baare me khayal (self-concept) tab kam hota hai jab wo zyada tez students wale school ya class me hote hain. Yaani aas-paas kaun hai, ye tay karta hai ki hum khud ko kitna qaabil maante hain.'],
    fix: [
      '<b>Parents ke liye</b>: kisi aur ka naam hatao, kal wale apne bachche se tulna karo. "Pichhle test me 62 the, ab 71. Kaunsa chapter better hua?"',
      '<b>Process ki taareef</b>: "Tumne rozana practice ki, wo dikh raha hai" bolo, "tum intelligent ho" ya "tum kamzor ho" nahi.',
      '<b>Bachchon ke liye</b>: jab koi tulna kare, shaanti se bolo: "Mujhe pata hai aap chinta me ho. Mujhe Rhea nahi banna, mujhe apne 71 ko 80 banana hai. Ismein madad karoge?"',
      '<b>Doosre ke number ko jaankari banao</b>: "Rhea ne ye chapter kaise kiya?" ek sawaal hai; "Rhea jaisi bano" ek sazaa hai.',
      'Agar tulna se bachcha lagataar udaas, chup ya bechain rehne lage, to school counsellor ya Tele-MANAS (14416) se baat karo.'
    ],
    teacher: 'Tumhara race kisi Sharma ji ke bete ya Gupta ji ki beti se nahi hai. Tumhara asli rival kal wala tum ho, aur use haraana sabse zyada mazedaar hai.',
    chapters: ['social-cognition', 'motivation', 'adolescence-adulthood'],
    tags: ['comparison', 'parents', 'self-worth', 'sharma ji ka beta', 'board exam', 'growth mindset']
  });

  S({
    id: 'sab-engineering', cat: 'padhai', level: 3, kind: 'anjaane',
    title: 'Dil design me tha, phir bhi form engineering ka kyun bhara? "Sab le rahe hain" ka jaadu.',
    hook: 'Class ke 40 me se 32 ne PCM liya. Aniket ne bhi. Teen saal baad wo khud se poochh raha tha: "Main yahan kya kar raha hoon?"',
    story: [
      'Nagpur me Aniket bachpan se sketchbook me buildings aur characters banata tha. 10th ke baad stream chunne ka time aaya. Class ke zyadatar dost PCM aur JEE coaching le rahe the. Mama ji ne kaha, "Engineering me scope hai, design-wesign ka koi bharosa nahi." Coaching ke bahar banner tha: "Hamare 300 students IIT me".',
      'Aniket ne kisi se nahi poocha ki design me kya hota hai, kitni naukriyan hain, kaun se college hain. Bas sab ke saath form bhar diya. Teesre saal B.Tech me usne ek hackathon me app ka UI banaya aur judges ne sabse zyada usi ki taareef ki. Hostel ki chhat par usne apne dost Joseph se kaha, "Mujhe lagta hai main teen saal pehle hi ye kar sakta tha." Joseph ne hans kar kaha, "Main bhi. Main to sirf isliye aaya kyunki tu aa raha tha."'
    ],
    guess: ['Aniket ne engineering kyun chuni?', ['Usne soch-samajh kar decide kiya ki engineering usse behtar hai', 'Jab sab ek raasta lete hain, dimaag use "sabse safe aur sahi" maan leta hai; asli jaankari ki jagah bheed ne faisla kiya', 'Mama ji ne zabardasti karwayi'], 1, 'Joseph ne Aniket ko follow kiya, Aniket ne class ko. Ho sakta hai class me kai log isi tarah ek-doosre ko follow kar rahe hon, aur kisi ne asal me chuna hi na ho.'],
    kya: 'Log bade faisle (stream, course, college, naukri) aksar is aadhar par lete hain ki zyadatar log kya kar rahe hain, khud ki pasand aur asli jaankari ko kam vazan dete hain. Baad me lagta hai ki faisla unka tha hi nahi.',
    kyun: [
      ['Social proof', 'Jab cheez anishchit ho, hum doosron ko dekh kar tay karte hain ki sahi kya hai. 40 me se 32 PCM le rahe hain, to dimaag nishkarsh nikaalta hai: "Itne log galat nahi ho sakte." Par shayad un 32 me bhi zyadatar isi soch se aaye the.'],
      ['Conformity aur belonging', 'Alag raasta lene ka matlab hai doston se alag coaching, alag baatein, alag group. 15 saal ki umar me group se alag hona darra deta hai (Level 5, conformity).'],
      ['Availability heuristic', 'Coaching banner par 300 IIT waale dikhte hain; design karke achha kamaane wale log Aniket ki zindagi me dikhte hi nahi the. Jo jaldi yaad aata hai, wahi zyada "possible" lagta hai. Jo engineering karke khush nahi hain, wo bhi kisi banner par nahi dikhte.'],
      ['Information cascade', 'Har insaan apni chhoti jaankari chhod kar pichhle logon ke faisle ko follow karta hai. Joseph ne Aniket ko, Aniket ne class ko follow kiya. Bheed badi dikhti hai, par uske peeche jaankari bahut kam hoti hai.']
    ],
    kaise: [
      'Anishchit faisla, kam jaankari, aur 15-16 saal ki umar.',
      'Aas-paas ka signal: dost, rishtedaar, banners, sab ek hi taraf.',
      'Khud ki pasand ko "bachpana" ya "risky" maan kar side me rakhna.',
      'Bheed ke saath form bharna; "galat hua to sab ka hoga" wali rahat.',
      'Saalon baad asli dilchaspi kisi aur jagah se nikal aati hai.'
    ],
    irada: 'Aniket aur Joseph dono <b>anjaane me</b> bheed ke saath chale. Mama ji ka iraada bhi bura nahi tha; unki jaankari purani thi. Coaching ka banner zaroor <b>sochi-samjhi marketing</b> hai: wo sirf jeetne walon ko dikhata hai, baaki ko nahi. Par asli faisla autopilot par hua.',
    gap: 'Aniket ko pata tha ki use design pasand hai. Phir bhi chupchaap form bhar diya, kyunki alag chalne ka darr turant aur pakka tha, aur galat career ka nuksaan door aur dhundhla. Dimaag turant wale darr se bachata hai, door wale nuksaan se nahi.',
    real: ['Asch ke line experiments (1950s)', 'Solomon Asch ne students ko lines ki lambai milaane ko kaha, ek aasaan kaam. Kamre ke baaki log chhupe actors the jo kuch rounds me jaanbujh kar galat jawab dete the. Lagbhag teen-chauthai participants ne kam se kam ek baar group ke saath galat jawab diya, haalaanki zyadatar jawaab akele sahi the. Ek baat dhyaan dene wali: jab group me sirf ek insaan bhi sahi jawab deta tha, to conformity bahut ghat jaati thi. Baad ki studies me ye asar alag-alag deshon aur dauron me kam-zyada mila.'],
    fix: [
      '<b>Bheed ka sawaal poochho</b>: "Ye log ye kyun le rahe hain? Kya inhone research kiya hai, ya sab ek doosre ko dekh rahe hain?"',
      '<b>Teen logon se baat karo</b> jo us field me 5 saal se kaam kar rahe hain, ek jo khush hai aur ek jo chhod chuka hai. Banner ki jagah asli kahaniyan suno.',
      '<b>"Ek saal baad" test</b>: socho ek saal baad ye subject roz padhte huye kaisa lagega. Doston ke saath hone ki feeling hata kar.',
      '<b>Pehla alag insaan bano</b>: Asch me ek sahi jawab doosron ki himmat badha deta tha. Class me koi aur bhi chupke se kuch aur chahta ho sakta hai.',
      'Rishtedaar ko jawab: "Mama ji, aapki baat samajh aayi. Design ke baare me thoda research karke aapko dikhaana hai, phir saath me decide karein?"'
    ],
    teacher: 'Bheed me chalna galat nahi, bas bheed ko apna GPS mat banao. Pehle khud poochho, phir chalo, chahe wahi raasta ho.',
    chapters: ['conformity-obedience', 'thinking-decisions', 'cognitive-biases'],
    tags: ['career', 'stream', 'herd', 'social proof', 'engineering', 'conformity']
  });

  S({
    id: 'paper-tough-tha', cat: 'padhai', level: 3, kind: 'anjaane',
    title: 'Achhe marks aaye to "maine mehnat ki", kam aaye to "paper hi tough tha". Aisa kyun?',
    hook: 'Ek hi student, do semester, do alag kahaniyan. Dono me hero wahi.',
    story: [
      'Kolkata ki Debjani ke pehle semester me Economics me 88 aaye. Usne maa ko phone kiya: "Maine roz raat 2 ghante padha, isliye." Doston ko bhi yahi bataya. Doosre semester me Statistics me 54 aaye. Is baar canteen me boli: "Sir ne syllabus ke bahar se poocha. Aur checking bhi bahut strict thi. Aadhi class ke kam aaye."',
      'Uske dost Tenzin ne dheere se kaha, "Pichhle semester me bhi wahi sir the." Debjani chup ho gayi. Raat ko usne apni copy kholi: aadhe galat sawaal wahi the jo usne "baad me karungi" soch kar chhod diye the. Par agle din bhi kisi ne poocha, to jawab wahi tha: "Paper tough tha yaar."'
    ],
    guess: ['Debjani aisa kyun karti hai?', ['Wo jhooth bol rahi hai aur jaanti hai', 'Dimaag apni izzat bachane ke liye safalta ko andar aur nakaami ko bahar ki wajah se jodta hai, aksar bina humein bataye', 'Statistics sach me mushkil hai, isme koi psychology nahi'], 1, 'Paper ho sakta hai thoda tough ho bhi. Psychology ye nahi kehti ki bahar ki wajah kabhi nahi hoti; kehti hai ki hum <b>hamesha</b> ek hi taraf jhukte hain.'],
    kya: 'Log achhe result ka credit khud lete hain (mehnat, dimaag) aur bure result ki wajah bahar dhoondhte hain (paper, teacher, kismat, checking). Isse turant achha lagta hai, par agli baar sudhaarne ke liye kuch haath nahi aata.',
    kyun: [
      ['Self-serving bias', 'Dimaag ko apni achhi image pasand hai. 88 aaye to "main achhi hoon" ka saboot; 54 aaye to "main achhi hoon" ko bachaane ke liye wajah bahar chali gayi. Is jhukaav ko self-serving bias kehte hain (Level 5, social cognition).'],
      ['Attribution', 'Hum har result ki wajah dhoondhte hain: andar ki (mehnat, ability) ya bahar ki (paper, kismat). Wajah kahan rakhi, ye tay karta hai ki agli baar kya karenge. Agar wajah "paper" hai, to Debjani ke paas sudhaarne ke liye kuch bacha hi nahi.'],
      ['Cognitive dissonance', '"Main mehnati hoon" aur "maine sawaal chhod diye the" dono ek saath sach hon, to andar takleef hoti hai. Sabse aasaan raasta ek nayi kahani hai: "syllabus ke bahar tha".'],
      ['Social cover', '"Aadhi class ke kam aaye" kehne se akelapan nahi lagta. Group ka sahara bias ko aur mazboot karta hai.']
    ],
    kaise: [
      'Result aata hai; dimaag turant ek kahani dhoondhta hai.',
      'Achha result: kahani "mere andar" ki. Bura result: kahani "bahar" ki.',
      'Doston ke saamne kahani dohraai, aur har baar zyada sach lagne lagi.',
      'Asli galti (chhode huye sawaal) kahani ke peeche chhup gayi.',
      'Agla exam: wahi tareeka, wahi galti.'
    ],
    irada: 'Ye zyadatar <b>anjaane me</b> hai. Debjani jaanbujh kar jhooth nahi bol rahi; use sach me lagta hai paper tough tha. Bias wahi hai jo hamein mehsoos hi nahi hota. Copy kholne par jo dikha, wo use ek pal ke liye <b>jaanbujh kar</b> andekha karna pada, aur wahin se ek chhota faisla hota hai.',
    gap: 'Debjani ne copy me dekh liya ki galti kahan thi. Phir bhi agle din "paper tough tha" hi kaha. Kyunki galti maanna ek turant ki chot hai, aur sudhaar ka fayda door hai. Ego ko bachana ek reflex hai; seekhna ek faisla.',
    fix: [
      '<b>Result ke baad 3 column</b>: "Mere control me tha", "Mere control me nahi tha", aur "Agli baar ek cheez alag". Pehle column ko kabhi khaali mat chhodo.',
      '<b>Achhe result par bhi bahar dekho</b>: "Kya paper aasaan tha? Kya kismat ne madad ki?" Dono taraf ek hi tarazu.',
      '<b>Copy pehle, kahani baad me</b>: result ke din kisi ko wajah batane se pehle apni copy dekho.',
      'Dost ko jawab dene ka imaandaar tareeka: "Thoda paper bhi tough tha, par maine teen sawaal chhod diye the. Agli baar time ka plan pehle banana hai."'
    ],
    teacher: 'Apni galti maanna kamzori nahi, ek super-power hai: jo galti tumhari hai, sirf wahi theek karna tumhare haath me hai. Paper ko theek karna tumhare haath me nahi.',
    chapters: ['social-cognition', 'cognitive-biases', 'attitudes-persuasion'],
    tags: ['self-serving bias', 'attribution', 'result', 'excuse', 'dissonance', 'college']
  });

  /* ---------- KAAM ---------- */

  S({
    id: 'meeting-me-chup', cat: 'kaam', level: 1, kind: 'anjaane',
    title: 'Meeting me sab chup, aur bahar aate hi sab complain. Aisa kyun?',
    hook: '"Koi sawaal?" Sannata. Do minute baad chai ki machine par: "Ye plan to bekaar hai yaar."',
    story: [
      'Bengaluru ki ek IT company me Monday 11 baje meeting thi. Manager Ritika ne naya plan bataya: har Friday ko client ke saath 8 baje raat ki call. Slide khatam karke usne poocha, "Sab theek hai? Koi concern?" Das logon ki team me koi nahi bola. Manjunath ne socha, "Shayad sirf mujhe problem hai, baaki sab to khush lag rahe hain."',
      'Meeting ke baad chai ki machine par Ayesha boli, "8 baje? Mera to beta ghar par akela hota hai." Manjunath: "Mujhe bhi problem hai." Teesre ne kaha, "Mujhe laga tum log theek ho." Pata chala das me se saat log khush nahi the. Par plan pass ho chuka tha, kyunki Ritika ko laga sab sehmat hain.'
    ],
    guess: ['Sab chup kyun the?', ['Team ko kaam se matlab nahi hai', 'Har insaan ne doosron ki chuppi ko unki sehmati samjha, aur khud ko akela maan kar chup raha', 'Ritika strict hai isliye sab darte hain'], 1, 'Sab ek-doosre ko dekh kar chup the. Chuppi ne chuppi ko janam diya.'],
    kya: 'Group me log apni asehmati nahi bolte, kyunki sab doosron ko chup dekh kar maan lete hain ki baaki sab sehmat hain. Baad me akele me ya chhote group me sab wahi baat bolte hain.',
    kyun: [
      ['Pluralistic ignorance', 'Manjunath ne doosron ke chehre dekhe, sab shaant the, to socha "sirf mujhe problem hai". Baaki sab bhi yahi soch rahe the. Sab andar se ek jaisa sochte the, par bahar ki chuppi ne sab ko galat jaankari di (Level 5, group behavior).'],
      ['Social risk', 'Akele bolne wala "negative" ya "team player nahi" dikh sakta hai. Ek insaan ke liye bolne ka risk turant aur pakka hai, fayda anishchit.'],
      ['Diffusion of responsibility', 'Das log hain, to har koi sochta hai "koi aur bol dega". Jitna bada group, utna kam har ek ka zimma lagta hai.']
    ],
    kaise: [
      'Leader poochhta hai: "Koi concern?", aksar aise tone me jo jaldi "nahi" chahta hai.',
      'Har insaan doosron ke chehre padhta hai; sab neutral dikhne ki koshish me hain.',
      'Chuppi ko sehmati maan liya jaata hai, dono taraf se.',
      'Bahar chhote, safe group me asli baat nikalti hai.',
      'Faisla pass ho chuka hota hai; ab shikayat sirf gussa badhati hai.'
    ],
    irada: 'Team ki chuppi <b>anjaane me</b> hai: koi plan bigaadna nahi chahta, sab bas safe khel rahe hain. Ritika bhi anjaane me galti karti hai: wo "koi concern?" ko sach me poochh rahi hai, par chuppi ko sehmati maan leti hai.',
    gap: 'Manjunath jaanta hai ki baad me complain karne se kuch nahi badlega. Phir bhi meeting me nahi bola, kyunki us pal me "akela galat dikhne" ka darr chai par "mujhe bhi problem hai" sunne ki rahat se pehle aata hai. Usse pata hi nahi tha ki baaki saat bhi usi ke saath hain.',
    real: ['Princeton me drinking par study (Prentice aur Miller, 1993)', 'Deborah Prentice aur Dale Miller ne Princeton ke students se poochha ki campus ki heavy drinking culture se wo kitne comfortable hain, aur unke hisaab se baaki students kitne comfortable hain. Zyadatar students ne socha baaki log unse zyada comfortable hain. Yaani sab andar se thoda asehaj the, par sab ko lagta tha ki asehaj sirf wo hain. Yahi pluralistic ignorance hai.'],
    fix: [
      '<b>Leaders ke liye</b>: "Koi concern?" ki jagah poochho "Is plan me sabse badi problem kya ho sakti hai?" Isse problem bolna normal ban jaata hai.',
      '<b>Anonymous input</b>: meeting se pehle ya baad me ek chhota form: "1-5 me kitne comfortable ho?"',
      '<b>Team member ke liye</b>: pehle bolne wale bano, par narmi se: "Ek practical concern hai, shayad sirf mera ho: 8 baje ki call kuch logon ke liye mushkil hogi. Kya 6 baje ho sakti hai?"',
      '<b>Pehle ek saathi dhoondho</b>: meeting se pehle ek colleague se baat karo. Do log bolein, to baaki bhi bolne lagte hain.',
      'Chai par complain karne se pehle khud se poochho: "Ye baat meeting me kaise boli ja sakti thi?"'
    ],
    teacher: 'Agli baar jab meeting me chuppi ho, yaad rakhna: shayad aadha kamra wahi soch raha hai jo tum. Kisi ek ko pehle bolna padta hai.',
    chapters: ['group-behavior', 'conformity-obedience', 'social-cognition'],
    tags: ['meeting', 'office', 'pluralistic ignorance', 'silence', 'team', 'speak up']
  });

  S({
    id: 'interview-30-second', cat: 'kaam', level: 1, kind: 'anjaane',
    title: 'Interview ka faisla pehle kuch second me hi kyun ho jaata hai?',
    hook: 'Resume ek jaisa tha. Ek ne darwaze par muskura kar "Good morning" kaha, doosra phone par message type karta aaya.',
    story: [
      'Hyderabad ke ek startup me Imran ek marketing role ke liye interview le raha tha. Pehli candidate Lakshmi andar aayi, aankh mila kar haath milaaya, "Thank you for having me" kaha aur baithte hi company ke latest ad campaign ka zikr kiya. Imran ne man me socha, "Ye achhi lag rahi hai." Baaki 40 minute ke interview me uske kamzor jawab bhi Imran ko "nervous hogi" lage.',
      'Doosra candidate Gaurav das minute late aaya (Metro ruk gayi thi), haath me phone, saans phooli hui. Pehle sawaal ka jawab thoda bikhra hua tha. Iske baad uske achhe jawab bhi Imran ko "ratte huye" lage. Shaam ko HR ne poocha kise lena chahiye, Imran ne bina soche kaha "Lakshmi". Baad me notes padhe to Gaurav ke technical jawab zyada mazboot the.'
    ],
    guess: ['Imran ne Lakshmi ko kyun chuna?', ['Lakshmi sach me behtar candidate thi', 'Pehle kuch second ke impression ne baaki interview ko dekhne ka chashma bana diya', 'Imran ko Gaurav pasand nahi tha'], 1, 'Pehla impression jaldi banta hai, aur phir baaki sab usi ke hisaab se padha jaata hai. Ye Imran ki nahi, insaani dimaag ki aadat hai.'],
    kya: 'Interviewer (aur hum sab) kuch second me kisi ke baare me ek raay bana lete hain, aur phir baaki jaankari ko usi raay ke hisaab se padhte hain: pasand aaya to galti maaf, pasand nahi aaya to taareef bhi shaq.',
    kyun: [
      ['Thin slicing', 'Dimaag chhoti-si jhalak (muskaan, aankh milaana, aawaaz, chaal) se jaldi anumaan lagata hai. Ye fast hai aur kabhi-kabhi sahi bhi, par ye zyada style pakadta hai, skill nahi.'],
      ['Halo effect', 'Lakshmi ki ek achhi baat (confident shuruaat) ne uski har baat par roshni daal di. Ek achha gun doosre gunon ke baare me bhi achha andaza karwata hai (Level 5, social cognition).'],
      ['Confirmation bias', 'Raay ban gayi, to Imran wahi dhoondhne laga jo usse match kare. Gaurav ke achhe jawab "ratte huye" lage, Lakshmi ke kamzor jawab "nervousness". Ek hi saboot, do alag matlab.'],
      ['Primacy effect', 'Jo pehle aata hai, wo yaad aur raay par zyada asar daalta hai. Gaurav ka late aana ek bahar ki ghatna thi, par wo uski pehli tasveer ban gayi.']
    ],
    kaise: [
      'Pehle 30 second: chehra, haath milaana, pehla vaakya.',
      'Dimaag chupchaap ek label laga deta hai: "achha" ya "theek nahi".',
      'Baaki interview: label ke hisaab se sawaal aur jawab ka matlab.',
      'Faisle ke waqt: feeling yaad aati hai, notes nahi.'
    ],
    irada: 'Imran ka bias <b>anjaane me</b> hai; wo imaandaari se best candidate chunna chahta tha. Lakshmi ki achhi shuruaat shayad <b>jaanbujh kar</b> taiyaar ki gayi thi, aur ye galat nahi, smart hai. Problem tab hai jab interviewer ki pehli feeling hi faisla ban jaaye.',
    gap: 'Imran ne training me padha tha "first impression par mat jao". Phir bhi gaya, kyunki pehla impression soch se nahi, ek feeling se banta hai, aur faisle ke waqt feeling notes se zyada zor se bolti hai.',
    real: ['"Half a minute" study (Ambady aur Rosenthal, 1993)', 'Nalini Ambady aur Robert Rosenthal ne logon ko teachers ke bina aawaaz wale chhote video clips dikhaye (10 second, aur baad me 5 aur 2 second ke bhi). Itne chhote clips se di gayi ratings, students ki poore semester baad di gayi ratings se kaafi mel khaati thi. Dhyaan rahe: isse ye nahi sabit hota ki pehla impression skill ko sahi naapta hai; ye dikhata hai ki hum kitni jaldi aur pakki raay bana lete hain.'],
    fix: [
      '<b>Candidate ke liye</b>: pehle 30 second ki taiyaari karo: time se 10 minute pehle pahuncho, phone band, aankh milao, ek seedha line: "Good morning, mujhe is role ke baare me baat karne ka intezaar tha."',
      '<b>Shuruaat bigde to reset</b>: "Sorry, Metro ruk gayi thi. Ek minute saans le loon, phir shuru karte hain." Bahar ki wajah ko seedha naam do.',
      '<b>Interviewer ke liye</b>: har candidate se same sawaal, same order, aur har jawab ka number usi waqt likho (structured interview).',
      '<b>Faisle se pehle notes</b>: pehle likhe number padho, phir feeling se milaao. Agar dono alag hain, to poochho kyun.'
    ],
    teacher: 'Pehle 30 second par poori zindagi tay nahi hoti, par darwaza wahi khulta hai. Thodi taiyaari karo, aur doosron ko judge karte waqt apne pehle impression par bhi ek sawaal-chinh lagao.',
    chapters: ['social-cognition', 'attraction-relationships', 'applied-psychology'],
    tags: ['interview', 'first impression', 'halo effect', 'thin slicing', 'job', 'hiring']
  });

  S({
    id: 'deadline-kam-padti', cat: 'kaam', level: 2, kind: 'anjaane',
    title: '"Do din ka kaam hai" bola tha, do hafte lag gaye. Har baar deadline kam kyun padti hai?',
    hook: 'Har project ke pehle hum optimist, aur har project ke end me thake huye.',
    story: [
      'Kochi ki ek agency me Thomas ne client ki website ke liye boss se kaha, "Sir, Friday tak ho jaayega." Usne sirf coding ka time socha tha: teen din. Wo ye bhool gaya ki client ne abhi tak logo nahi bheja, ek colleague chhutti par hai, aur pichhli website me bhi payment page par do din atke the.',
      'Friday aaya. Logo Wednesday ko aaya, client ne do baar rang badalwaye, payment page phir atka. Thomas ne raat 1 baje tak kaam kiya, phir bhi agle Thursday ko deliver hua. Boss ne poocha, "Agli baar kitna time?" Thomas ne thoda soch kar kaha, "Agli baar pakka teen din." Uske colleague ne halke se muskura diya.'
    ],
    guess: ['Thomas ne pichhle anubhav se kyun nahi seekha?', ['Wo jhooth bol raha hai taaki boss khush ho', 'Time aankte waqt dimaag sirf is kaam ki "best case" kahani dekhta hai, pichhle projects ka asli data nahi', 'Client ki galti thi, Thomas ki nahi'], 1, 'Thomas pichhli baar ko "special case" maanta hai. Har baar "is baar alag hai" lagta hai, aur har baar nahi hota.'],
    kya: 'Log kisi kaam ka time aankte waqt use kam aankte hain, chahe pehle bhi kai baar aisa hua ho. Wo sirf kaam ke steps sochte hain, rukawatein nahi.',
    kyun: [
      ['Planning fallacy', 'Thomas ne "andar ka nazariya" liya: is project ke steps, ek ke baad ek, sab theek chalte huye. Usne "bahar ka nazariya" nahi liya: "Pichhli paanch websites me asal me kitna time laga?"'],
      ['Optimism aur control ka bhram', 'Hum sochte hain ki jo hamare haath me hai (coding) wahi time tay karega. Par asli der aksar un cheezon se hoti hai jo haath me nahi (client ka logo, chhutti).'],
      ['Social pressure', 'Boss ke saamne "do hafte" bolna kamzor lagta hai. Chhota number achha dikhta hai, aur us pal ki taareef baad ke stress se zyada vazan rakhti hai.'],
      ['Memory bias', 'Pichhli baar ki der ko Thomas ne "client ki wajah se" yaad rakha, apni estimate ki galti ke roop me nahi. Isliye seekh hi nahi bani.']
    ],
    kaise: [
      'Kaam aata hai; dimaag ek seedhi, saaf kahani banata hai.',
      'Estimate: sirf hamare haath wale steps, sab smooth.',
      'Chhota number bola jaata hai; boss khush, hum bhi.',
      'Rukawatein aati hain, jo "unexpected" lagti hain, par har baar aati hain.',
      'Deadline miss, raat ka kaam, aur agla estimate phir chhota.'
    ],
    irada: 'Ye <b>anjaane me</b> hota hai. Thomas ko sach me lagta hai teen din kaafi hain. Kabhi-kabhi log <b>jaanbujh kar</b> bhi chhota number bolte hain, kaam lene ke liye ya boss ko khush karne ke liye, par zyadatar ye dimaag ki aadat hai, chaal nahi.',
    gap: 'Thomas ko yaad hai ki pichhli baar der hui thi. Par estimate karte waqt dimaag "is baar" ki kahani me itna doob jaata hai ki pichhla data yaad hi nahi aata. Jaankari yaaddaasht me hai, estimate ke waqt saamne nahi.',
    real: ['Thesis aur Sydney Opera House', 'Roger Buehler, Dale Griffin aur Michael Ross (1994) ne final-year students se poochha ki unki thesis kab tak poori hogi. Average andaza lagbhag 34 din tha; asal me average lagbhag 56 din lage, aur aadhe se bhi kam students apne andaaze tak khatam kar paaye. Bade level par Sydney Opera House ka plan 1963 tak khatam hone ka tha; wo 1973 me khula, aur kharcha shuruaati andaaze se kai guna zyada aaya.'],
    fix: [
      '<b>Bahar ka nazariya</b>: estimate se pehle poochho, "Pichhle 3 aise kaam me asal me kitna time laga?" Wahi tumhara starting number hai.',
      '<b>Buffer jodo</b>: apne andaaze me kam se kam 50% jodo, aur us buffer ko "extra" nahi, "normal" maano.',
      '<b>Bahar ki dependency likho</b>: "Ye tab hoga jab client logo bhejega." Boss ko bolo: "Logo milne ke 3 working din baad."',
      '<b>Estimate diary</b>: har kaam ka bola hua aur asli time ek line me likho. Ek mahine me tumhe apna "multiplier" pata chal jaayega.',
      'Boss se kehne ki line: "Best case Friday, par realistic Tuesday. Tuesday pakka, aur Friday tak ki poori koshish rahegi."'
    ],
    teacher: 'Tumhara pichhla anubhav sabse imaandaar estimate hai. Usse poochho, apni ummeed se nahi.',
    chapters: ['thinking-decisions', 'cognitive-biases', 'applied-psychology'],
    tags: ['deadline', 'planning fallacy', 'estimate', 'office', 'project', 'time management']
  });

  S({
    id: 'boss-haan-peeche-shikayat', cat: 'kaam', level: 2, kind: 'dono',
    title: 'Boss ke saamne "haan sir, bilkul", aur peeche "ye kya bakwaas hai". Do chehre kyun?',
    hook: 'Galti pata thi, data pata tha. Par boss ke saamne zubaan se sirf "Yes sir" nikla.',
    story: [
      'Surat ki ek textile company me Bhavesh sales analyst tha. GM Arvind sir ne monthly meeting me kaha, "Is quarter Rajasthan me 30% zyada stock bhejo, wahan demand hai." Bhavesh ke paas data tha ki pichhle do quarter se Rajasthan me returns badh rahe the. Usne slide par nazar daali, phir Arvind sir ke chehre par, aur kaha, "Ji sir, bilkul sahi."',
      'Lunch par Bhavesh ne apne colleague Shabnam se kaha, "Sir ko kuch pata nahi, stock waapas aayega." Shabnam boli, "To bataya kyun nahi?" Bhavesh: "Pichhli baar Deepak ne sawaal kiya tha, us din se sir uski har report me galti nikaalte hain." Teen mahine baad stock waapas aaya. Arvind sir ne poocha, "Kisi ne pehle kyun nahi bataya?"'
    ],
    guess: ['Bhavesh chup kyun raha?', ['Bhavesh darpok aur chaaplus hai', 'Team me sach bolne ki keemat pehle dikh chuki thi (Deepak), to sabne seekh liya ki chup rehna safe hai', 'Bhavesh ko apne data par bharosa nahi tha'], 1, 'Chuppi ek aadat nahi, ek seekhi hui cheez hai. Team ne Deepak ke saath jo hua usse seekha.'],
    kya: 'Kai log senior ke saamne sehmati jataate hain aur peeche asehmati, gussa ya mazaak. Problem aksar insaan me nahi, us mahaul me hoti hai jahan sach bolne ki keemat chukaani padti hai.',
    kyun: [
      ['Psychological safety', 'Jab team ko lagta hai ki sawaal ya galti bolne par sazaa milegi, to log chup ho jaate hain. Deepak ke saath hua "case" sab ke liye ek sabak bana (Level 3, observational learning).'],
      ['Power distance', 'Kai jagah, ghar se office tak, senior se asehmat hona "badtameezi" maana jaata hai. Bhavesh ki chuppi me darr ke saath sanskaar bhi hai (Level 7, culture-psychology).'],
      ['Ingratiation', '"Bilkul sahi sir" bolna turant fayda deta hai: boss khush, koi jhagda nahi. Kuch log ise <b>jaanbujh kar</b> strategy bana lete hain: har baat par haan, taaki promotion me naam aaye.'],
      ['Venting as relief', 'Lunch par shikayat karne se Bhavesh ka gussa nikal gaya, aur bolne ki zaroorat kam lagi. Peeche ki shikayat ek safety valve hai jo asli problem ko chhupa deti hai.']
    ],
    kaise: [
      'Boss ek faisla bolta hai, aksar pakke andaaz me.',
      'Team member ke paas ulta data hai, par pichhla anubhav kehta hai "bolna risky hai".',
      'Saamne sehmati; andar dissonance.',
      'Peeche shikayat se dissonance kam hoti hai.',
      'Galti hoti hai; boss poochhta hai "kisi ne bataya kyun nahi?", aur chakra jaari.'
    ],
    irada: 'Ye <b>dono</b> taraf se hai. Arvind sir ne shayad <b>anjaane me</b> ek darr ka mahaul banaya; unhe lagta hai unka darwaza "hamesha khula hai". Deepak ki reports me galti nikaalna shayad <b>jaanbujh kar</b> tha, ya kam se kam ek pattern tha. Bhavesh ki chuppi ek samjha-bujha faisla hai jo dheere-dheere autopilot ban gaya.',
    gap: 'Bhavesh jaanta tha ki chup rehne se company ka nuksaan hoga. Phir bhi chup raha, kyunki company ka nuksaan door aur sab ka tha, aur boss ki naraazgi turant aur sirf uski. Insaan turant aur personal risk se zyada bachta hai.',
    real: ['Psychological safety par research (Amy Edmondson) aur Google ka Project Aristotle', 'Harvard ki Amy Edmondson ne hospital teams ko study kiya aur paaya ki achhi teams zyada galtiyan <i>report</i> kar rahi thi, kam nahi, kyunki wahan galti bolna safe tha. Baad me 1999 me unhone "psychological safety" ko naapne ka tareeka diya. Google ke andar ki Project Aristotle research (results 2015-16 me public huye) me bhi team ki safalta ka sabse bada factor psychological safety mila.'],
    fix: [
      '<b>Employee ke liye, sawaal ki shakl me</b>: "Sir, ek cheez samajhni thi: Rajasthan me pichhle do quarter returns badhe hain. Kya stock badhane se pehle ek chhota trial kar sakte hain?" Sawaal attack nahi lagta.',
      '<b>Data saath, aur meeting ke baad akele</b>: sab ke saamne asehmat hona boss ko defensive banata hai; 5 minute akele me baat zyada sunta hai.',
      '<b>Boss ke liye</b>: meeting me ek insaan ko "devil\'s advocate" bana do jiska kaam hi kamzori dhoondhna hai. Aur jo galti bataaye, sab ke saamne shukriya karo.',
      '<b>Shikayat ko suggestion banao</b>: lunch par shikayat se pehle khud se poochho, "Is shikayat ka ek suggestion kya hoga?"'
    ],
    teacher: 'Jo log sirf "haan" bolte hain, unse boss ko sach nahi milta. Narmi se, sawaal ki shakl me, data ke saath bolo; tumhari ek line company ka teen mahine ka nuksaan bacha sakti hai.',
    chapters: ['conformity-obedience', 'applied-psychology', 'observational-learning'],
    tags: ['boss', 'office', 'psychological safety', 'yes man', 'feedback', 'speak up']
  });

  S({
    id: 'credit-chor-colleague', cat: 'kaam', level: 3, kind: 'jaanbujh',
    title: 'Idea tumhara tha, taareef kisi aur ko mili. Credit chor colleague kaise kaam karta hai?',
    hook: '"Hum log soch rahe the..." se shuru hua vaakya, aur khatam hua uske naam ke saath.',
    story: [
      'Gurugram ki ek marketing firm me Kunal ne Tuesday ko team ke WhatsApp group par ek idea daala: Diwali campaign me chhote shehron ke dukaandaaron ki asli kahaniyan. Senior colleague Shalini ne reply kiya, "Interesting, sochte hain." Thursday ko client presentation me Shalini ne kaha, "Mere dimaag me ek idea aaya tha," aur wahi idea, thode naye shabdon me, pesh kar diya.',
      'Client ko idea bahut pasand aaya. Director ne meeting ke baad Shalini ki peeth thapthapaayi. Kunal chup raha; use laga "bolunga to choti baat lagegi". Agle mahine phir aisa hua, is baar ek client email me. Kunal ki dost Harpreet boli, "Ye ek baar ka nahi hai yaar. Ye uska tareeka hai."'
    ],
    guess: ['Shalini kya kar rahi hai, aur ye chalta kyun hai?', ['Shalini ko sach me yaad nahi ki idea kiska tha', 'Shalini jaanbujh kar dhundhle shabdon aur sahi time ka use karti hai, aur log idea ko us insaan se jodte hain jo use sabse confident tareeke se bolta hai', 'Kunal ka idea achha nahi tha, Shalini ne use behtar banaya'], 1, 'Kabhi-kabhi log sach me bhool jaate hain (iske liye bhi ek naam hai, cryptomnesia). Par jab ye baar-baar, sirf boss ke saamne, aur sirf junior ke ideas ke saath ho, to wo bhool nahi, pattern hai.'],
    kya: 'Kuch log doosron ke idea, kaam ya mehnat ko apne naam se pesh karte hain, aksar itni chaalaaki se ki seedha "chori" bolna mushkil ho. Jinka credit jaata hai, wo aksar chup reh jaate hain.',
    kyun: [
      ['Visibility ka khel', 'Boss ke saamne jo pehle aur confident bolta hai, idea uske naam se yaad hota hai. Shalini ne WhatsApp ka "sochte hain" bol kar idea ko thanda kiya, aur presentation me garm karke apna bana liya.'],
      ['Dhundhle shabd', '"Hum log soch rahe the", "mere dimaag me aaya" jaise shabd itne vague hote hain ki baad me pakadna mushkil ho. Ye jaanbujh ki chaal ho sakti hai, kyunki isse "maine kab kaha ki mera hai?" bolne ki jagah bachi rehti hai.'],
      ['Matthew effect', 'Jo pehle se jaana-maana hai, credit usi ki taraf khinchta hai. Director ko lagta hai Shalini senior hai, to achha idea uska hi hoga. Junior ka kaam senior ke naam me ghul jaata hai.'],
      ['Victim ka darr', 'Kunal ko laga bolne par wo "petty" ya "team player nahi" dikhega. Credit chor isi darr par tikta hai.']
    ],
    kaise: [
      'Junior idea kisi kam-visible jagah daalta hai (WhatsApp, side chat).',
      'Credit chor use halka karta hai ("interesting, dekhte hain") taaki uski aawaaz dhimi pade.',
      'Boss ya client ke saamne idea ko apne shabdon me, confident tone me pesh karta hai.',
      'Taareef usi ko; asli insaan chup, kyunki bolna risky lagta hai.',
      'Kaam ho gaya, to pattern dohraaya jaata hai.'
    ],
    irada: 'Yahan Shalini <b>jaanbujh kar</b> kaam kar rahi hai: sahi time, dhundhle shabd, aur ek pattern. Director ka bias (senior ko credit dena) <b>anjaane me</b> hai, par wo is chaal ko kaam karne deta hai. Kunal ki chuppi bhi darr ka autopilot hai.',
    gap: 'Kunal jaanta hai ki chup rehne se ye phir hoga. Phir bhi chup raha, kyunki bolne ka nuksaan (awkward pal, "jhagdalu" image) turant aur saaf tha, aur chup rehne ka nuksaan dheere aur dhundhla. Aur use ye bhi darr tha ki shayad wo galat ho, shayad Shalini ko sach me yaad na ho.',
    real: ['Matthew effect (Robert Merton, 1968)', 'Sociologist Robert Merton ne science me dekha ki jab ek famous aur ek kam-jaana scientist milkar ya alag-alag ek jaisa kaam karte hain, to credit zyada famous wale ko milta hai. Unhone ise Bible ki ek line ke naam par "Matthew effect" kaha: jiske paas hai, use aur diya jaayega. Office me senior aur junior ke beech yahi hota hai.'],
    fix: [
      '<b>Paper trail</b>: idea hamesha email ya document me likho, apne naam aur date ke saath. "Jaisa maine Tuesday ke email me suggest kiya tha" bolna aasaan ho jaata hai.',
      '<b>Meeting me apni jagah wapas lo, shaanti se</b>: "Thank you Shalini, ise aage le jaane ke liye. Jab maine ye Tuesday ko group me share kiya tha, to mera ek aur point tha..." Na gussa, na ilzaam, bas tathya.',
      '<b>Pehle seedha baat</b>: akele me: "Shalini, Diwali wala idea maine diya tha. Agli baar presentation me humara naam saath me jaaye to achha lagega." Agar wo maan jaati hai, achha. Agar pattern jaari rahe, manager tak likh kar jao.',
      '<b>Director ke saath 1-on-1</b>: apne kaam ka monthly chhota update do. Visibility tumhara haq hai, ghamand nahi.',
      '<b>Leaders ke liye</b>: presentation me poochho, "Is idea par kis-kis ne kaam kiya?"'
    ],
    teacher: 'Apne kaam ka credit maangna laalach nahi, imaandaari hai. Shaanti se, likhit me, aur tathya ke saath bolo; credit chor dhundhle shabdon par jeete hain, saaf shabdon se haarte hain.',
    chapters: ['dark-psychology-intro', 'defense-boundaries', 'group-behavior'],
    tags: ['credit', 'office politics', 'colleague', 'workplace manipulation', 'visibility', 'matthew effect']
  });

  S({
    id: 'salary-pehla-number', cat: 'kaam', level: 3, kind: 'dono',
    title: 'Salary negotiation me jo pehla number bolta hai, aksar wahi jeet kyun jaata hai?',
    hook: 'HR ne poocha "Expected CTC?" Neha ne dar ke maare kam number bol diya, aur poori negotiation usi ke aas-paas ghoomti rahi.',
    story: [
      'Mumbai ki ek fintech me Neha ka final round khatam hua. HR Zoya ne muskura kar poocha, "Aapki current CTC 8 lakh hai. Expected kya hai?" Neha ne research kiya tha ki is role ka market 12 se 15 lakh hai. Par us pal use darr laga ki zyada bola to offer chala jaayega. Usne kaha, "9-10 lakh theek rahega."',
      'Zoya ne thoda socha aur kaha, "Hum 9.5 de sakte hain." Neha ne raahat ki saans li. Do mahine baad pata chala ki usi team me ussi role ke liye aaye Rahul ne pehle hi "14 lakh" bola tha, aur use 13 mila tha. Neha ne apne papa se kaha, "Main kam me bik gayi." Papa bole, "Number tumne khud bola tha beta."'
    ],
    guess: ['Neha ko kam salary kyun mili?', ['Neha Rahul se kam qaabil thi', 'Pehla number ek "anchor" ban gaya, aur poori baatcheet usi ke aas-paas ghoomi', 'Company ne jaanbujh kar dhokha diya'], 1, 'Neha ka research ek taraf tha, uska bola hua number doosri taraf. Negotiation research se nahi, bole huye number se chali.'],
    kya: 'Negotiation me pehla bola hua number (salary, ghar ka kiraya, bazaar me daam) baaki baatcheet ki disha tay kar deta hai. Log usi ke aas-paas aage-peeche hote hain, chahe wo number kitna bhi bekaar ho.',
    kyun: [
      ['Anchoring', 'Pehla number dimaag me ek khoonta gaad deta hai. "9-10 lakh" sun kar Zoya ka dimaag usi ke aas-paas sochne laga, aur Neha ka bhi. 12-15 ka research peeche chala gaya.'],
      ['Current salary ka anchor', 'HR ka "current CTC 8 lakh" bolna bhi ek anchor tha. Neha ne naye role ki qeemat ko purani salary se joda, market se nahi. Kai jagah ye sawaal isi liye poocha jaata hai.'],
      ['Loss aversion', 'Offer jaane ka darr, zyada paisa milne ki khushi se bada laga. Nuksaan ka darr hamein kam maangne par majboor karta hai.'],
      ['Gender aur norms', 'Research me ye bhi dikhta hai ki kai log, khaaskar jinhe bachpan se "zyada mat maango" sikhaya gaya ho, apne liye kam maangte hain, jabki doosron ke liye behtar negotiate karte hain. Ye sab par lagu nahi, par Neha ke "darr" me ye bhi ho sakta hai.']
    ],
    kaise: [
      'HR ek anchor rakhta hai: "Current CTC kya hai?"',
      'Phir poochha jaata hai: "Expected?", taaki pehla number candidate bole.',
      'Darr me candidate ek safe, kam number bolta hai.',
      'Company thoda neeche counter karti hai; candidate ko lagta hai jeet gaye.',
      'Baad me pata chalta hai ki market kya tha.'
    ],
    irada: 'Ye <b>dono</b> hai. HR ka "current CTC" aur "pehle aap bataiye" poochhna aksar <b>jaanbujh kar</b> ki gayi strategy hai; ye unka kaam hai, dhokha nahi. Neha ka kam number bolna <b>anjaane me</b> tha: darr aur anchor ne milkar faisla kiya.',
    gap: 'Neha ne research kiya tha, use 12-15 pata tha. Phir bhi 9-10 bola, kyunki research ek shaant shaam ko hua, aur number ek tension wale pal me bolna pada. Us pal darr ne dimaag ki jaankari ko peeche dhakel diya.',
    real: ['Wheel of fortune experiment (Tversky aur Kahneman, 1974)', 'Amos Tversky aur Daniel Kahneman ne logon ke saamne ek wheel ghumaaya jo (chupke se set karke) 10 ya 65 par rukta tha. Phir poocha ki UN me African deshon ka percentage kitna hai. Jinhe 10 dikha, unka median andaza lagbhag 25% tha; jinhe 65 dikha, unka lagbhag 45%. Ek bilkul random number ne andaze ko kheench liya. Baad ki negotiation research (jaise Galinsky aur Mussweiler, 2001) me bhi dikha ki pehla offer aksar final deal ko kaafi had tak tay karta hai.'],
    fix: [
      '<b>Market ko anchor banao, purani salary ko nahi</b>: "Is role ke liye market range 12-15 lakh hai, aur mere experience ke hisaab se 14 lakh sahi baithta hai."',
      '<b>Pehle wo bolein, agar ho sake</b>: "Is role ka budget kya hai? Uske hisaab se baat aage badhaate hain."',
      '<b>Agar bolna hi pade, to thoda upar</b>: apne research ke upar wale hisse se shuru karo, neeche se nahi. Neeche aana aasaan hai, upar jaana mushkil.',
      '<b>Pehle se likh kar rakho</b>: interview se pehle apna number, aur ek line, phone ke note me likho aur bolne ki practice karo, taaki tension me bhi wahi nikle.',
      'Counter ke baad jaldi haan mat bolo: "Thank you. Kya final jawab 1-2 din me de doon?" Rukna bhi ek power hai.'
    ],
    teacher: 'Pehla number koi kismat nahi, ek chaal hai. Agli baar wo chaal tum chalo: apna research yaad rakho, saans lo, aur wo number bolo jo tumhare kaam ki asli qeemat hai.',
    chapters: ['cognitive-biases', 'thinking-decisions', 'attitudes-persuasion'],
    tags: ['salary', 'negotiation', 'anchoring', 'CTC', 'job offer', 'interview']
  });

  /* ---------- PAISA ---------- */

  S({
    id: 'free-ke-chakkar', cat: 'paisa', level: 1, kind: 'jaanbujh',
    title: '"Buy 2 Get 1 Free" dekh kar wo cheez bhi kyun khareed li jo chahiye hi nahi thi?',
    hook: 'Ek shampoo lene gaye the. Ghar aaye teen shampoo, ek free tote bag aur ₹600 kam.',
    story: [
      'Jaipur ke ek supermarket me Pooja sirf ek shampoo lene gayi thi, ₹220 ka. Shelf par bada sa peela board tha: "Buy 2 Get 1 FREE!" Teen bottles ₹440 me. Pooja ne socha, "Ek free mil raha hai, chhodna bewakoofi hogi." Billing counter par ek aur board: "₹999 se upar ki shopping par FREE tote bag." Uska bill ₹780 tha. Usne ek biscuit ka bada pack aur ek face wash utha liya, "bag bhi to mil raha hai."',
      'Ghar aa kar dekha: shampoo ki do bottles bathroom ke cupboard me chhe mahine padi rahi, face wash expire ho gaya, aur tote bag kabhi use nahi hua. Pooja ki saas ne poocha, "Ek shampoo ke liye ₹1,000?" Pooja boli, "Par mummy, free tha na."'
    ],
    guess: ['"Free" itna kheenchta kyun hai?', ['Pooja ko shopping ka shauk hai', '"Free" shabd dimaag me nuksaan ka darr hata deta hai, aur hum use doosri cheezon se alag tarah se tolte hain', 'Offer sach me sasta tha'], 1, 'Free cheez ka koi "downside" nahi dikhta. Par uski asli qeemat wo cheez hai jo tumne uske chakkar me khareedi.'],
    kya: 'Log "free" offer ke liye zaroorat se zyada khareed lete hain, ya ek minimum bill tak pahunchne ke liye bekaar cheezein jodte hain. Unhe lagta hai unhone bachaya, jabki kharcha badh gaya.',
    kyun: [
      ['Zero price effect', '"Free" sirf "bahut sasta" nahi hai, dimaag ke liye ek alag category hai. Zero par koi nuksaan ka risk nahi dikhta, isliye hum soche bina utha lete hain. Pooja ne teesri bottle ki keemat nahi, "free" ki khushi dekhi.'],
      ['Loss aversion', '"Free chhodna bewakoofi hogi" yaani offer chhodna ek nuksaan jaisa laga. Nuksaan ka dard fayde ki khushi se zyada hota hai.'],
      ['Goal gradient', '₹780 se ₹999 tak pahunchna ek "target" ban gaya. Target paas ho, to hum use poora karne ke liye aur zor lagate hain, chahe target khud bekaar ho.']
    ],
    kaise: [
      'Dukaan ek bada, rang-birang "FREE" board lagati hai, wahan jahan nazar pehle jaaye.',
      'Customer ki asli zaroorat (ek shampoo) peeche chhoot jaati hai.',
      'Billing par ek aur "free" threshold, aur khareed aur badhti hai.',
      'Ghar par bachi hui, bekaar cheezein, par dimaag yaad rakhta hai "bachat" ko.'
    ],
    irada: 'Dukaan ki taraf se ye poori tarah <b>jaanbujh kar</b> hai: "Buy 2 Get 1" aur "₹999 par free" sab soch-samajh kar design kiye gaye offers hain, kyunki ye average bill badhate hain. Pooja ki taraf se ye <b>anjaane me</b> hai; use sach me lagta hai usne paisa bachaya.',
    gap: 'Pooja jaanti hai ki "free kuch nahi hota". Ye line usne kai baar boli hai. Phir bhi shelf ke saamne "free" ki khushi turant thi, aur bekaar kharche ka ehsaas chhe mahine baad aaya. Jaankari shelf par nahi, ghar ke cupboard me thi.',
    real: ['Hershey Kiss vs Lindt truffle (Shampanier, Mazar aur Ariely, 2007)', 'Researchers ne logon ko do chocolates me se ek chunne ko kaha: ek mehengi Lindt truffle aur ek sasti Hershey\'s Kiss. Jab dono ka daam thoda tha (truffle 15 cent, Kiss 1 cent), zyadatar log truffle lete the. Jab dono ka daam barabar 1 cent ghataya gaya (truffle 14 cent, Kiss free), to zyadatar log free Kiss par shift ho gaye, haalaanki farq wahi 14 cent ka tha. "Free" ne faisle ka tareeka hi badal diya.'],
    fix: [
      '<b>List leke jao</b>: list me jo nahi hai, use lene se pehle 10 second ruko aur poochho, "Agar ye free na hota, to kya ise abhi khareedna tha?"',
      '<b>Per-unit nahi, total dekho</b>: "Zaroorat ₹220 ki thi, bill ₹1,000 ka hai." Bill ka number bolo, bachat ka nahi.',
      '<b>Threshold ko ignore karo</b>: "₹999 par free" dikhe, to socho ki tote bag ki qeemat ₹219 hai. Kya tum ₹219 me tote bag khareedte?',
      '<b>Expiry check</b>: bulk me lene se pehle dekho ki khatam hone se pehle expire to nahi hoga.'
    ],
    teacher: '"Free" ek shabd nahi, ek chaabi hai jo seedha khushi ka darwaza kholti hai. Darwaza khulne do, par bill ka number dekh kar hi andar jao.',
    chapters: ['dark-patterns', 'attitudes-persuasion', 'cognitive-biases'],
    tags: ['free', 'sale', 'offer', 'supermarket', 'zero price', 'shopping']
  });

  S({
    id: '999-vs-1000', cat: 'paisa', level: 1, kind: 'jaanbujh',
    title: '₹999 aur ₹1,000 me sirf ek rupaye ka farq hai. Phir ₹999 itna sasta kyun lagta hai?',
    hook: 'Shoes ₹2,999 ke the. Deepak ke dimaag me laga "do hazaar ke aas-paas". Asal me teen hazaar the.',
    story: [
      'Delhi ke Lajpat Nagar me Deepak apne bhai ki shaadi ke liye shoes dekh raha tha. Ek dukaan me shoes ₹3,000 ke the, doosri dukaan me waise hi shoes ₹2,999. Deepak ne doosri dukaan se liye aur dost ko bataya, "Teen hazaar se kam me mil gaye."',
      'Usi din usne ek shirt ₹1,499 me, ek belt ₹799 me, aur ek perfume ₹1,299 me liya. Har cheez "hazaar ke aas-paas" lagi. Ghar par UPI ki history dekhi to total ₹6,596 tha. Usne budget ₹4,000 rakha tha. "Itna kaise ho gaya?" usne poocha. Sab bills me ek cheez common thi: aakhri ank 9.'
    ],
    guess: ['₹2,999 itna sasta kyun laga?', ['Deepak ko maths nahi aata', 'Dimaag number ko baayein se padhta hai aur pehle ank par zyada vazan deta hai; "2" dekh kar "do hazaar" ki category me rakh diya', 'Doosri dukaan sach me sasti thi'], 1, 'Ek rupaye ka farq nahi, pehle ank ka farq. "2" aur "3" dimaag ko bahut alag lagte hain.'],
    kya: 'Log ₹99, ₹499, ₹999 jaise daamon ko unke asli daam se kaafi sasta mehsoos karte hain, aur aisi kai cheezein milkar budget se bahut zyada kharch karwa deti hain.',
    kyun: [
      ['Left-digit bias', 'Hum number baayein se padhte hain, aur dimaag pehle ank par faisla kar leta hai. ₹2,999 me "2" pehle aata hai, to dimaag use "do hazaar wala" maan leta hai, jabki ye teen hazaar se sirf ek rupaya kam hai.'],
      ['Mental shortcut', 'Har daam ko poora padhna mehnat hai. Bheed wali dukaan me, shaadi ki jaldi me, dimaag shortcut leta hai: "pehla ank dekho, aage badho."'],
      ['Chhote-chhote kharche', 'Har cheez alag-alag "hazaar ke aas-paas" lagi, to koi bhi ek cheez bada kharcha nahi lagi. Total ka ehsaas tab hua jab UPI history saamne aayi.']
    ],
    kaise: [
      'Dukaan daam ko ₹X,999 ya ₹X99 rakhti hai.',
      'Customer pehla ank padhta hai aur use ek sasti category me daal deta hai.',
      'Har cheez "kam" lagti hai, isliye zyada cheezein judti hain.',
      'Total budget se upar; par har ek faisla "sahi" laga tha.'
    ],
    irada: 'Dukaan ki taraf se ye <b>jaanbujh kar</b> hai: ₹999 jaise daam (charm pricing) soch-samajh kar rakhe jaate hain. Deepak <b>anjaane me</b> isme phansta hai; use lagta hai usne "teen hazaar se kam" me achhi deal li.',
    gap: 'Deepak ko pata hai ki ₹2,999 asal me ₹3,000 hai. Agar koi poochhe to wo turant bata dega. Par dukaan me koi nahi poochhta; dimaag apne aap pehla ank padh kar aage badh jaata hai. Jaankari hai, par use use karne ka pal nahi aata.',
    real: ['Purani gaadiyon ke daam aur odometer (Lacetera, Pope aur Sydnor, 2012)', 'Researchers ne America me lakhon used car auctions ka data dekha. Gaadi ki qeemat odometer ke 10,000-mile ke "round" number paar karte hi achanak gir jaati thi: 79,900 miles wali gaadi 80,100 miles wali se kaafi mehengi bikti thi, jabki farq sirf 200 miles ka tha. Log baayein wale ank par itna dhyaan dete hain ki 200 miles "das hazaar" jitne lagte hain.'],
    fix: [
      '<b>Daam ko round karo</b>: ₹2,999 dekhte hi zor se bolo "teen hazaar". Ek second ki aadat bias ko tod deti hai.',
      '<b>Running total</b>: shopping ke waqt phone ke calculator me har cheez jodte jao, ya cart me "total" dekho, item ka daam nahi.',
      '<b>Budget pehle, dukaan baad me</b>: "Aaj ₹4,000" decide karke jao, aur UPI me ek alag account ya limit rakho.',
      'Shaadi jaise mauke par yaad rakho: dimaag pehle se thaka aur jaldi me hai, to shortcut zyada lega. Thoda dheere chalo.'
    ],
    teacher: 'Ek rupaya kam karne se cheez sasti nahi hoti, sirf sasti dikhti hai. Daam ko poora padho, round karke bolo, aur total par nazar rakho.',
    chapters: ['dark-patterns', 'cognitive-biases', 'sensation-perception'],
    tags: ['999', 'charm pricing', 'left digit', 'shopping', 'budget', 'UPI']
  });

  S({
    id: 'emi-wala-phone', cat: 'paisa', level: 2, kind: 'dono',
    title: '"Sirf ₹3,999 mahina" me liya phone, ab har mahine ki tension. EMI itni aasaan kyun lagti hai?',
    hook: '₹80,000 ka phone sun kar ruk gaye the. "₹3,999 mahina, no-cost EMI" sun kar card nikal gaya.',
    story: [
      'Indore me 24 saal ke Sameer ki pehli naukri thi, ₹35,000 mahina. Ek shopping festival me naya phone ₹80,000 ka tha. Daam dekh kar wo ruk gaya. Phir neeche likha tha: "No-cost EMI, sirf ₹3,999/month." Sameer ne socha, "Chaar hazaar to main dosto ke saath weekend me uda deta hoon." Do click me order ho gaya.',
      'Teen mahine baad usne ek smartwatch bhi EMI par li, aur ek laptop bhi, "kaam ke liye". Ab har mahine ki 5 tareekh ko ₹11,000 se zyada kat jaate the. Ek din dost Farhan ne trip ka plan banaya; Sameer ke account me ₹2,000 the. Farhan ne poocha, "Bhai, tu to achha kamaata hai?" Sameer ne phone ki screen dekhi, jo ab utni chamakdaar nahi lagti thi.'
    ],
    guess: ['₹80,000 se ruka, ₹3,999 par kyun nahi?', ['Sameer ko paise ki samajh nahi', 'Chhote mahine ke hisse me baanta hua daam dimaag ko "dard" mehsoos nahi karwata, aur future ka paisa aaj ke paise jitna asli nahi lagta', 'No-cost EMI sach me free hai'], 1, 'Dimaag total nahi, "is mahine ka dard" tolta hai. EMI dard ko chhota karke chhupa deti hai.'],
    kya: 'Log badi cheez ko EMI ya credit par aasaani se le lete hain jo poore paise dekar shayad na lete. Phir kai EMIs milkar har mahine ki tankhwah ka bada hissa kha jaati hain.',
    kyun: [
      ['Pain of paying', 'Cash ya ek saath bada payment dene me dimaag ko sach me "dard" jaisa lagta hai. EMI aur card us dard ko chhote, door ke tukdon me baant dete hain. ₹80,000 dukhta hai; ₹3,999 nahi.'],
      ['Present bias', 'Phone aaj milega, paisa kal jaayega. Aaj ki khushi turant aur saaf hai; kal ka bojh dhundhla. "Future Sameer" ka paisa aaj ke Sameer ko asli nahi lagta.'],
      ['Mental accounting', 'Sameer ne ₹3,999 ko "weekend ke kharche" se tola. Par weekend ka kharcha band nahi hua; EMI uske upar judi. Hum paise ko alag-alag dibbon me rakhte hain aur bhool jaate hain ki sab ek hi jeb se ja raha hai.'],
      ['Framing', '"No-cost" sun kar laga koi nuksaan nahi. Kai baar "no-cost" EMI me discount chhod dena padta hai, ya processing fee lagti hai; wo chhoti likhawat me hota hai.']
    ],
    kaise: [
      'Bada daam dikhta hai; dimaag rukta hai.',
      'Turant neeche chhota monthly number dikhaya jaata hai, "no-cost" ke saath.',
      'Monthly number ko kisi chhote kharche se tola jaata hai.',
      'Ek EMI aasaan lagti hai, to doosri bhi; har ek alag-alag "chhoti".',
      'Saari EMIs milkar har mahine ka bada bojh ban jaati hain.'
    ],
    irada: 'Ye <b>dono</b> hai. Seller aur platform <b>jaanbujh kar</b> monthly number bada aur total daam chhota dikhate hain; ye soch-samjha design hai. Sameer ka faisla <b>anjaane me</b> hai: wo bewakoof nahi, uske dimaag ko jaise number dikhaye gaye, waise hi usne tola.',
    gap: 'Sameer jaanta hai ki ₹3,999 x 20 = ₹80,000. Calculator se poocho to wo bata dega. Par khareedte waqt uske dimaag ne guna kiya hi nahi, kyunki chhota number dekh kar koi alarm hi nahi baja. Jaankari tab kaam aati hai jab alarm baje.',
    real: ['Cash vs credit card wali study (Prelec aur Simester, 2001)', 'MIT ke Drazen Prelec aur Duncan Simester ne MBA students se basketball tickets ke liye sealed bid lagwayi. Aadhe students ko kaha gaya ki payment cash me hogi, aadhon ko credit card se. Credit card wale group ne kaafi zyada bid lagayi, kuch cases me lagbhag double. Paisa ek hi tha; sirf dene ka tareeka badla, aur dard kam laga.'],
    fix: [
      '<b>Total bolo, monthly nahi</b>: EMI dekhte hi zor se poochho, "Kul kitna? Kitne mahine? Koi fee?"',
      '<b>EMI rule</b>: saari EMIs milkar tankhwah ke ek chhote hisse se zyada na hon. Pehle se apni limit likh lo, jaise "take-home ka 15%".',
      '<b>48 ghante ka rule</b>: ₹10,000 se upar ki koi bhi cheez cart me daalo aur do din baad dekho. Aksar chahat utar jaati hai.',
      '<b>Pehle bachao, phir khareedo</b>: agar 6 mahine me phone chahiye, to har mahine ₹4,000 alag account me daalo. Paisa jud jaaye aur chahat bani rahe, tab lo.',
      'Agar EMIs ya loan app ka bojh itna badh jaaye ki neend udne lage, to kisi bharose wale se baat karo. Aur agar koi loan app dhamki de ya fraud lage, to 1930 (cyber fraud helpline) par call karo.'
    ],
    teacher: 'EMI paisa nahi bachati, sirf dard ko aage dhakel deti hai. Har chhote number ke peeche ka bada number dekho, phir faisla karo.',
    chapters: ['cognitive-biases', 'thinking-decisions', 'dark-patterns'],
    tags: ['EMI', 'credit card', 'phone', 'present bias', 'no-cost EMI', 'debt']
  });

  S({
    id: 'cashback-ke-chakkar', cat: 'paisa', level: 2, kind: 'dono',
    title: '₹50 cashback ke liye ₹500 ka order? Cashback aur coins ka jaadu kaise chalta hai?',
    hook: '"Bas ek aur order karo, gold member ban jaoge." Nisha ne wo order kiya. Phir ek aur.',
    story: [
      'Bhopal ki Nisha college me thi aur ek food app par "5 orders me 1 free meal" wala card chal raha tha. App me 5 me se 2 khaane pehle se "bonus" ke roop me bhare huye the. Usne socha, "Bas teen hi bache." Agla order karte waqt app ne kaha "₹50 cashback, sirf ₹399 se upar". Uska order ₹280 ka tha; usne ek dessert jod diya.',
      'Mahine ke end me Nisha ne hisaab lagaya: cashback me ₹320 mile, par khaane par ₹4,800 kharch hua, jo pichhle mahine se lagbhag double tha. Uski roommate Ritu boli, "Tu to hostel ka khaana bhi chhod chuki hai." Nisha ke paas ab wallet me ₹320 ke "coins" the, jo sirf usi app par chalte the, aur unhe "barbaad na ho" isliye ek aur order karna pada.'
    ],
    guess: ['Nisha ne "bachat" ke chakkar me zyada kharch kyun kiya?', ['Nisha ko khaane ka bahut shauk hai', 'Card par pehle se bhare points, threshold aur sirf-app-wale coins ne har baar "bas ek aur" ka bahana diya', 'Cashback sach me fayde ka sauda tha'], 1, 'Cashback tab fayda hai jab tum waise bhi khareedte. Jab cashback hi khareedne ki wajah ban jaaye, to wo marketing ka kharcha hai jo tumhari jeb se ja raha hai.'],
    kya: 'Log cashback, coins, loyalty points aur "ek aur order par reward" ke chakkar me zyada aur baar-baar khareedte hain, aur bachat ka hisaab lagate hain, kharche ka nahi.',
    kyun: [
      ['Endowed progress effect', 'Card par pehle se 2 "bonus" bhare the, to Nisha ko laga wo aadhe raste par hai. Jab lagta hai hum pehle se shuru kar chuke hain, to target poora karne ki chahat badh jaati hai.'],
      ['Goal gradient', 'Target jitna paas, utna zyada zor. "Bas teen bache" se "bas ek bacha" tak aate-aate order ki raftaar badh gayi.'],
      ['Mental accounting', 'Cashback ke ₹50 "extra" lage, jaise muft ka paisa. Aur app ke coins asli paisa nahi lage, isliye unhe kharch karna aasaan tha, par unhe "use" karne ke liye naya order karna pada.'],
      ['Sunk cost / waste aversion', '"Coins barbaad na ho jaayein" wali feeling ne ek aur kharcha karwaya. Bacha hua reward ek chhota boss ban jaata hai jo kehta hai "mujhe use karo".']
    ],
    kaise: [
      'App ek "progress" dikhata hai, kabhi-kabhi pehle se aadha bhara.',
      'Har order par threshold ("₹399 se upar"), jo order thoda badha deta hai.',
      'Reward app ke apne coins me milta hai, jo bahar kaam nahi aate.',
      'Coins ko "use" karne ke liye naya order; chakra phir shuru.'
    ],
    irada: 'Ye <b>dono</b> hai. App ka reward system <b>jaanbujh kar</b> design kiya gaya hai taaki tum baar-baar aao; ye business ka tareeka hai. Nisha ka "bas ek aur" <b>anjaane me</b> hai; use lagta hai wo smart shopper hai jo deals pakad rahi hai.',
    gap: 'Nisha jaanti hai ki ₹50 ke liye ₹120 ka extra dessert bachat nahi. Par app ka screen hamesha bachat dikhata hai ("₹50 saved!"), kabhi total kharcha nahi. Jo screen dikhaata hai, dimaag wahi ginta hai.',
    real: ['Car wash ka loyalty card (Nunes aur Drèze, 2006)', 'Researchers ne ek car wash par customers ko do tarah ke card diye. Ek card par 8 stamp lagane the. Doosre par 10 stamp the, par 2 pehle se lage huye the, yaani dono me 8 hi bache. Pehle se lage stamp wale card ke customers ne kaafi zyada baar card poora kiya, aur tezi se. Asli kaam barabar tha; sirf "shuruaat ho chuki hai" ki feeling ne farq daala.'],
    fix: [
      '<b>Asli sawaal</b>: "Agar cashback na hota, to kya ye order hota?" Agar jawab "nahi" hai, to cashback ek jaal hai.',
      '<b>Mahine ka total dekho</b>: app ke "orders" section me har mahine ka kul kharcha jodo. Bachat nahi, kharcha ginna hai.',
      '<b>Threshold ke liye mat jodo</b>: ₹280 ka order ₹280 hi rehne do. ₹120 extra dekar ₹50 bachaana ₹70 ka nuksaan hai.',
      '<b>Notifications band</b>: "Aapke coins expire hone wale hain!" jaise alerts ek trigger hain. App ki marketing notifications off karo.',
      'Coins expire ho jaayein to hone do. Wo kabhi tumhara paisa tha hi nahi.'
    ],
    teacher: 'Cashback ek inaam nahi, ek chaara hai. Tum fish nahi, customer ho. Pehle zaroorat dekho, phir offer.',
    chapters: ['dark-patterns', 'operant-conditioning', 'cognitive-biases'],
    tags: ['cashback', 'coins', 'food app', 'loyalty', 'reward', 'shopping']
  });

  S({
    id: 'loss-wala-share', cat: 'paisa', level: 3, kind: 'anjaane',
    title: 'Fayde wala share turant bech diya, nuksaan wala saalon se pakad ke baithe hain. Kyun?',
    hook: '"Jab tak wapas apne daam par nahi aata, nahi bechunga." Teen saal ho gaye.',
    story: [
      'Kanpur ke Suresh uncle ne 2021 me ek dost ki tip par ek company ke share ₹420 par liye, ₹50,000 ke. Saath me ek bade bank ke share bhi liye. Bank ka share 15% badha to unhone turant bech diya: "Profit book karo, kaun jaane kal kya ho." Doosra share girte-girte ₹180 par aa gaya.',
      'Unke bete Abhishek ne kaha, "Papa, is company ke results lagataar kharab hain. Bech do, wo paisa kahin achhi jagah lagao." Suresh uncle bole, "Bechunga to nuksaan pakka ho jaayega. Abhi to sirf kaagaz par hai. Wapas ₹420 aayega, tab bechunga." Teen saal baad share ₹150 par tha, aur jo bank ka share bech diya tha, wo double ho chuka tha.'
    ],
    guess: ['Suresh uncle aisa kyun karte hain?', ['Unhe company par bharosa hai, isliye pakde baithe hain', 'Nuksaan "pakka" karne ka dard itna bada lagta hai ki dimaag use taalta hai, aur fayda jaldi "surakshit" karna chahta hai', 'Unhe share market samajh nahi aata'], 1, 'Unka faisla company ke future par nahi, ₹420 wale purane number par tika hai. Market ko ye number nahi pata.'],
    kya: 'Investors fayde wale shares jaldi bech dete hain aur nuksaan wale lambe samay tak pakad kar rakhte hain, is ummeed me ki "wapas apne daam par aayega". Aksar ulta karna behtar hota hai.',
    kyun: [
      ['Loss aversion', 'Nuksaan ka dard utne hi fayde ki khushi se zyada hota hai (Kahneman aur Tversky ki prospect theory). Share bechna matlab nuksaan ko "asli" bana dena, aur dimaag us dard ko taalta hai.'],
      ['Disposition effect', 'Fayde me hum "risk mat lo, book karo" sochte hain; nuksaan me "ek aur mauka do" sochte hain. Isliye winners jaldi bikte hain aur losers pakde rehte hain.'],
      ['Anchoring', '₹420 ek khoonta ban gaya. Suresh uncle har din share ko us number se tolte hain, aaj ki company ki haalat se nahi. Market ke liye ₹420 ka koi matlab nahi.'],
      ['Mental accounting aur ego', 'Har share ka alag "khaata" hai, aur bechne ka matlab hai us khaate ko "galat faisla" likh kar band karna. Dost ki tip galat thi, ye maanna bhi dukhta hai.']
    ],
    kaise: [
      'Share kharida; khareed ka daam dimaag me anchor ban gaya.',
      'Fayda: dimaag kehta hai "jaldi surakshit karo".',
      'Nuksaan: dimaag kehta hai "abhi kaagaz par hai, ruko".',
      'Har din purane daam se tolna; naya data ignore.',
      'Achhe share chale gaye, kharab share portfolio me bache.'
    ],
    irada: 'Ye poori tarah <b>anjaane me</b> hai. Suresh uncle ko lagta hai wo "dhairya" rakh rahe hain, jo ek gun lagta hai. Par asal me unka dimaag nuksaan ke dard se bach raha hai. Unhone pehle ek dost ki tip par bina research share liya tha; wo bhi ek autopilot faisla tha.',
    gap: 'Suresh uncle jaante hain ki purane daam se kuch farq nahi padta. Abhishek ne unhe kai baar samjhaya. Phir bhi nahi bechte, kyunki bechne ka button dabate hi nuksaan "pakka" ho jaata hai, aur us pal ka dard tark se zyada zor se bolta hai. Kaagaz par nuksaan bhi nuksaan hai, par mehsoos nahi hota.',
    real: ['Investors ke trading accounts par study (Terrance Odean, 1998)', 'Economist Terrance Odean ne America ki ek discount brokerage ke hazaaron accounts ka data dekha. Investors fayde wale shares, nuksaan wale shares ke mukable kaafi zyada aasaani se bechte the. Aur jo fayde wale share unhone beche, wo baad me average un nuksaan wale shares se behtar chale jo unhone pakad kar rakhe. Yaani ye aadat sirf bhavnaatmak nahi, mehengi bhi thi.'],
    fix: [
      '<b>"Aaj khareedta?" test</b>: har share ke liye poochho, "Agar mere paas ye share na hota aur aaj ye paisa cash me hota, to kya ise aaj ke daam par khareedna banta?" Agar nahi, to pakad kar rakhna bhi ek "khareed" hai.',
      '<b>Pehle se exit rule</b>: khareedte waqt hi likh lo: "Agar company ke do results lagataar kharab aaye, ya share 25% gira, to dobaara sochna hai." Rule shaant waqt me banta hai, kaam tension me aata hai.',
      '<b>Khareed daam chhupao</b>: kai apps me "avg buy price" dikhna band ya kam kiya ja sakta hai. Aaj ki keemat aur company ki haalat dekho.',
      '<b>Tip par nahi</b>: kisi bhi dost, WhatsApp group ya YouTube tip par paisa lagane se pehle company ke results khud dekho.',
      'Agar samajh na aaye, to index fund ya SEBI-registered advisor ki madad lo.'
    ],
    teacher: 'Market ko nahi pata ki tumne kis daam par khareeda tha, aur use parwah bhi nahi. Purane number ko jaane do; aaj ka faisla aaj ke tathyon se karo.',
    chapters: ['cognitive-biases', 'thinking-decisions', 'emotion'],
    tags: ['share market', 'loss aversion', 'disposition effect', 'investment', 'anchoring', 'stock']
  });

  S({
    id: 'sab-bech-rahe-hain', cat: 'paisa', level: 3, kind: 'dono',
    title: 'Market gira, WhatsApp group me sab "becho becho" chillaye, aur sab ne bech diya. Bheed paisa kaise doobati hai?',
    hook: 'Ek din pehle sab "abhi khareedo, rocket hai" bol rahe the. Agle din wahi log "sab bech do".',
    story: [
      'Ahmedabad ke Karan aur Meghna, ek IT couple, ne apni bachat se mutual funds aur kuch shares liye the. Ek "Stock Tips Pro" naam ke Telegram group me 40,000 log the. March 2020 me Covid ki khabar ke saath market roz gir raha tha. Group me har ghante message: "Market aur 30% girega, sab bech do!" "Maine sab bech diya, aap bhi bachao!" Neeche screenshots, "loss bachaya" ke.',
      'Meghna ka mann tha ruk jaayein, par Karan ne raat 11 baje sab bech diya: "Sab bech rahe hain, hum kyun phanse?" Agle kuch mahinon me market tezi se upar gaya. Usi group me ab naye message aane lage: "Ye penny stock 5 guna hoga, abhi khareedo!" Karan ne socha, "Pichhli baar galti hui, is baar nahi chhodunga."'
    ],
    guess: ['Karan ne sab kyun bech diya?', ['Usne market ko analyse karke sahi faisla liya', 'Darr ke pal me 40,000 logon ki bheed ka "sab bech rahe hain" ek saboot jaisa laga, aur nuksaan ka darr soch par bhaari pada', 'Meghna ki baat na maanna uska ego tha'], 1, 'Bheed ka darr sach jaisa lagta hai. Par group me sabse zor se bolne wale zaroori nahi ki sabse zyada jaante hon, aur kuch to us darr se kamaate bhi hain.'],
    kya: 'Log market girne par darr me, bheed ko dekh kar, sab bech dete hain, aur market chadne par laalach me, bheed ko dekh kar, khareedte hain. Yaani mehenga khareedna aur sasta bechna.',
    kyun: [
      ['Herd behaviour', 'Jab anishchitata ho, hum bheed ko follow karte hain. Group me 40,000 log, aur sab "becho" bol rahe hain, to dimaag maanta hai "ye log kuch jaante hain". Par zyadatar log bhi bas ek doosre ko dekh rahe the.'],
      ['Loss aversion aur panic', 'Girte market me nuksaan ka dard turant aur bada lagta hai. Darr me body alarm mode me jaati hai (Level 4, emotion), aur dimaag "abhi bacho" chunta hai, "lambi soch" nahi.'],
      ['Availability aur screenshots', '"Loss bachaya" wale screenshots aur dramatic messages har ghante saamne the. Jo cheez baar-baar dikhti hai, wo zyada sach aur zyada sambhav lagti hai.'],
      ['FOMO ka ulta sira', 'Market chadhte hi wahi bheed laalach ka sur badal leti hai: "abhi khareedo". Karan ka "is baar nahi chhodunga" wahi darr hai, bas ulti disha me. Isi pal ka fayda kuch log jaanbujh kar uthate hain.']
    ],
    kaise: [
      'Bahar ek darr ki khabar; market girta hai.',
      'Group/social media me dramatic messages aur screenshots ki baarish.',
      'Bheed bechti hai; akele rukna bewakoofi lagta hai.',
      'Market sambhalta hai; nuksaan pakka ho chuka hota hai.',
      'Ab FOMO: wahi group naye "rocket" tips deta hai, aur log phir bheed ke peeche.'
    ],
    irada: 'Ye <b>dono</b> hai. Karan aur group ke zyadatar log <b>anjaane me</b> darr aur bheed ke peeche chale. Par aise kuch groups ke chalane wale <b>jaanbujh kar</b> pump-and-dump karte hain: pehle sasta share khud khareedte hain, phir group me "rocket hai" bol kar daam badhwate hain, aur jab log khareedte hain to khud bech kar nikal jaate hain. SEBI ne aise kai cases me action liya hai.',
    gap: 'Karan ne kai baar suna tha "darr me mat becho, lambi soch rakho". Meghna ne bhi kaha. Par raat 11 baje, 40,000 logon ke darr ke beech, wo line ek kamzor aawaaz thi, aur bheed ki aawaaz bahut zor ki. Jaankari akeli thi; darr ke saath 40,000 log the.',
    real: ['March 2020 ka Covid crash', 'Covid ke darr me March 2020 me Indian market (Sensex aur Nifty) kuch hi hafton me lagbhag ek-tihaai se zyada gira. Par isi saal ke end tak dono index naye record high par pahunch gaye. Jo log girte market me darr me beche aur bahar baithe rahe, unhone wo recovery kho di. Ye guarantee nahi ki har baar market itni jaldi sambhlega; par ye dikhata hai ki darr ke pal ka faisla aksar mehenga padta hai.'],
    fix: [
      '<b>Plan pehle, darr baad me</b>: shaant waqt me likho: "Market 20% gire to mera plan kya hai?" Aur darr ke waqt sirf us likhe plan ko padho.',
      '<b>24 ghante ka rule</b>: girte market me koi bhi bada bechne ka faisla agle din subah tak taalo. Raat ka darr subah aksar chhota lagta hai.',
      '<b>Tip groups chhodo ya mute karo</b>: Telegram/WhatsApp "stock tips" groups aur unregistered "advisors" se door raho. Advisor SEBI-registered hai ya nahi, SEBI ki website par check karo.',
      '<b>"Guaranteed return" = red flag</b>: koi bhi app ya group pakka munafa, "insider tip" ya "sirf aaj" bole, to ruk jao. Fraud ho to 1930 par call karo ya cybercrime.gov.in par report karo.',
      'Ghar me ek "devil\'s advocate": Meghna jaise kisi se faisle se pehle baat karo jo bheed me nahi hai.'
    ],
    teacher: 'Bheed hamesha galat nahi hoti, par bheed ko kabhi tumhare paise ki parwah nahi hoti. Darr me faisla mat lo; shaanti me bana hua plan hi darr me tumhara sabse achha dost hai.',
    chapters: ['conformity-obedience', 'scam-psychology', 'cognitive-biases'],
    tags: ['herd', 'panic selling', 'stock tips', 'telegram', 'pump and dump', 'FOMO']
  });
})();
