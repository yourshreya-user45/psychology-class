/* Roz ki Psychology · Padhai aur kaam (extra). Format: README.md ("Roz ki Psychology ka format"). */
(function () {
  const S = window.PSY.situation;

  /* ---------- Padhai ---------- */

  S({
    id: 'group-project-free-rider', cat: 'padhai', level: 1, kind: 'jaanbujh',
    title: 'Group project me ek banda kuch nahi karta, phir bhi marks poore. Kyun?',
    hook: '"Bro, tum log dekh lo, main PPT me naam daal dunga." Aur sach me, sirf naam hi daala.',
    story: [
      'Pune ke ek college me second year ka marketing project: chaar logon ka group, 20 marks, submission Friday ko. Tanvi ne survey banaya, Joseph ne data nikala, Ayesha ne raat 2 baje tak slides banayi. Chautha member Kunal har message par bas "👍" bhejta raha.',
      'Thursday raat Kunal ka message aaya: "Guys, presentation me intro main bol dunga, baaki tum log handle kar lo." Presentation ke baad sir ne poore group ko 17/20 diye. Bahar nikal kar Kunal hansa: "Dekha, team work!" Ayesha ka gussa phoot gaya, par Tanvi ne kaha, "Chhod na, ab kya fayda." Next semester phir wahi group bana.'
    ],
    guess: ['Kunal kuch kyun nahi karta?', ['Wo aalsi hai, bas itni si baat', 'Wo jaanta hai ki marks sabko barabar milenge aur uska hissa koi alag se nahi dekhega', 'Use topic samajh nahi aaya'], 1, 'Jab mehnat dikhti nahi aur inaam barabar bantta hai, to kuch log jaanbujh kar "free ride" chun lete hain.'],
    kya: 'Group me ek-do log jaanbujh kar kaam doosron par chhod dete hain, kyunki unhe pata hai ki result sabka ek hi hoga. Baaki log zyada kaam karte hain, chidhte hain, par aksar bolte nahi.',
    kyun: [
      ['Social loafing', 'Group me log akele ki tulna me kam mehnat karte hain, khaaskar jab har insaan ka hissa alag se naapa nahi jaata. Latané, Williams aur Harkins (1979) ne dekha ki log group me taali bajate ya chillaate waqt akele ke muqable kam zor lagaate hain. Kunal ka 20 marks me hissa kisi ko nahi dikhta, to mehnat ka koi seedha fayda nahi.'],
      ['Free riding (jaanbujh wala roop)', 'Social loafing kai baar anjaane me hota hai. Par Kunal ka case alag hai: wo hisaab laga kar chal raha hai ki "baaki log project girne nahi denge". Ye sochi-samjhi strategy hai, aur ye tabhi chalti hai jab group ke baaki log zimmedaar hon.'],
      ['Sucker effect', 'Jab mehnati log dekhte hain ki koi muft me fayda le raha hai, to agli baar wo bhi mehnat kam kar dete hain, taaki "bewakoof" na banein. Isliye ek free rider poore group ka level gira sakta hai.']
    ],
    kaise: [
      'Group banta hai, kaam baantne ki koi saaf list nahi banti.',
      'Ek member chhote bahaane deta hai ("net nahi tha", "ghar me function hai"), aur dekhta hai ki koi kuch nahi kehta.',
      'Zimmedaar log deadline ke darr se uska kaam bhi kar dete hain.',
      'Marks barabar milte hain, to free riding ka "inaam" pakka ho jaata hai.',
      'Agli baar pattern aur pakka: free rider aur kam karta hai, mehnati log ya to chup rehte hain ya khud bhi dheele pad jaate hain.'
    ],
    irada: 'Kunal <b>jaanbujh kar</b> ye kar raha hai: use pata hai ki kaam doosre karenge aur marks use bhi milenge. Tanvi, Joseph aur Ayesha ka uska kaam chupchaap kar dena zyada tar aadat aur deadline ka darr hai, sochi hui choice nahi.',
    gap: 'Sabko pata hai ki Kunal kuch nahi kar raha. Phir bhi koi bolta nahi, kyunki dosti kharab hone ka darr hai, aur "ab to submit ho gaya" wali thakaan. Har baar ka chhota samjhauta free riding ko sasta bana deta hai.',
    real: ['Taali aur chillane wala experiment (Latané, Williams aur Harkins, 1979)', 'Students ko akele aur groups me zor se taali bajane aur chillane ko kaha gaya. Group jitna bada hua, per insaan awaaz utni kam hoti gayi. Ek version me log aankhon par patti aur headphone pehne the aur sirf sochte the ki saath me koi aur bhi chilla raha hai; tab bhi unki awaaz kam ho gayi. Matlab giravat sirf coordination ki problem nahi thi, mehnat bhi kam hui. Baad ki research ne dikhaya ki jab har insaan ka hissa pehchana jaata hai, to ye asar kaafi ghat jaata hai.'],
    fix: [
      '<b>Pehle din kaam baanto, likh kar</b>: group chat me ek list pin karo: "Tanvi: survey, Joseph: data, Ayesha: slides, Kunal: literature review, deadline Tuesday."',
      '<b>Har hissa dikhne layak banao</b>: shared doc me har section par naam. Jab kaam dikhta hai, loafing kam hota hai.',
      '<b>Beech me check-in</b>: "Tuesday tak sabka hissa doc me chahiye. Jo nahi aaya, wo hum sir ko waise hi batayenge." Seedha, bina gaali-galoch.',
      '<b>Teacher se peer evaluation maango</b>: kai teachers project ke saath "kisne kitna kiya" wala chhota form lete hain. Ye ek line ka sujhav sabke liye fair hai.',
      '<b>Uska kaam chupchaap mat karo</b>: agar deadline bachaani hi pade, to sir ko sach batao ki kaun sa hissa kisne kiya.'
    ],
    teacher: 'Group me sabse achha insaan wo nahi jo sabka bojh chupchaap utha le. Sabse achha wo hai jo pehle hi din kaam ko saaf baant de, taaki kisi ko free ride ki jagah hi na mile.',
    chapters: ['group-behavior', 'motivation'],
    tags: ['group project', 'social loafing', 'free rider', 'college', 'teamwork', 'marks']
  });

  S({
    id: 'coaching-topper-poster', cat: 'padhai', level: 2, kind: 'jaanbujh',
    title: 'Ek hi topper teen coaching ke poster par. Kyun?',
    hook: 'Poster par chamakta chehra, "AIR 7, hamara student". Par wo student kis coaching ka tha? Shayad teeno ka, shayad kisi ka nahi.',
    story: [
      'Kota ke paas ek chhote shehar me Rukmini apne bete Dev ke liye coaching dhoondh rahi thi. Station road par teen bade hoarding: teeno par ek hi ladki ki photo, "All India Rank 7". Ek par likha "Classroom student", doosre par chhote akshar me "Test series", teesre par sirf "Hamara gaurav". Fees: ₹1.4 lakh, ₹1.8 lakh aur ₹2.2 lakh.',
      'Counsellor ne Rukmini ko 40 toppers ki photo wali brochure dikhayi: "Ma\'am, hamare yahan se har saal selection hota hai." Rukmini ne poocha, "Kul kitne bachche padhte hain?" Counsellor muskura kar bola, "Itna mat sochiye, bas bachche ka future dekhiye. Aaj admission lenge to ₹20,000 off." Rukmini ne usi din form bhar diya.'
    ],
    guess: ['Rukmini ko kis cheez ne sabse zyada convince kiya?', ['Coaching ki padhai ki quality', 'Toppers ki photos, jo sirf jeetne walon ko dikhati hain, aur "aaj hi" wala discount', 'Dev ki apni pasand'], 1, 'Brochure me 40 chehre the. Wo hazaaron chehre nahi the jo usi coaching me padh kar select nahi huye.'],
    kya: 'Coaching institutes jaanbujh kar sirf safal students dikhate hain, aksar unhe bhi jinhone sirf ek test series ya crash course liya ho. Parents aur students in posters ko sabooth maan kar lakhon ki fees ka faisla kar lete hain.',
    kyun: [
      ['Survivorship bias', 'Hum sirf "bache huye" ya jeete huye examples dekhte hain aur haare huye gayab ho jaate hain. 40 toppers ki photo se ye pata nahi chalta ki kitne hazaar ne admission liya tha. Success rate ka asli sawaal hi chhup jaata hai.'],
      ['Selective reporting aur framing', '"Hamara student" ka matlab kuch bhi ho sakta hai: do saal classroom, ek mahine ka test series, ya bas ek free mock test. Ek hi topper ko kai institutes isliye claim kar lete hain kyunki har ek ne kahin na kahin uska naam register kiya tha.'],
      ['Authority aur social proof', 'Topper ka chehra ek "authority" ban jaata hai: "is jaisa banna hai to yahan aao". Aur "har saal selection" ka matlab hai sab yahi aa rahe hain. Dimaag sochta hai, itne log galat nahi ho sakte.'],
      ['Scarcity aur urgency', '"Aaj admission to ₹20,000 off" Rukmini ko sawaal poochhne ka time hi nahi deta. Jaldi me liya gaya faisla emotions par chalta hai, data par nahi.']
    ],
    kaise: [
      'Result aate hi institutes toppers se sampark karte hain; jo bhi kabhi unke kisi course me tha, use poster par daala jaata hai.',
      'Course ka type chhote akshar me ya bilkul nahi likha jaata.',
      'Brochure me sirf safal chehre; total students ya success rate ka koi number nahi.',
      'Counselling me parents ka darr ("bachche ka future") jagaaya jaata hai aur "aaj hi" ka offer diya jaata hai.',
      'Parents dusron se sunte hain "wahan se topper nikle", aur cycle aage chalti hai.'
    ],
    irada: 'Marketing team <b>jaanbujh kar</b> ye tasveer banati hai: wo jaanti hai ki poster par sirf jeetne wale hain aur "hamara student" ka matlab dhundhla hai. Rukmini <b>anjaane me</b> survivorship bias ka shikaar hoti hain; unka darr asli hai aur pyaar bhi.',
    gap: 'Rukmini samajhdaar hai, usne sahi sawaal poocha bhi: "kul kitne bachche?" Par jab jawab nahi mila to bhi wo ruki nahi, kyunki bachche ke future ka darr aur discount ki jaldi mil kar sochne ka waqt kha gaye. Sahi sawaal tabhi kaam aata hai jab jawab na milne par hum ruk sakein.',
    real: ['Abraham Wald aur laut kar aaye jahaaz (Doosra Vishwa Yuddh)', 'Statistician Abraham Wald ke saamne sawaal tha ki bombers par extra armour kahan lagaya jaaye. Laut kar aaye jahaazon me goliyon ke chhed wings aur body par zyada the, to pehla khayal tha wahin armour lagao. Wald ne kaha: ye wo jahaaz hain jo bach gaye. Jin jagahon par chhed nahi dikhte (jaise engine), wahan lagne wale jahaaz laute hi nahi. Toppers ke poster bhi "laute huye jahaaz" hain. India me 2024 me Central Consumer Protection Authority ne coaching sector ke misleading ads par guidelines bhi jaari ki, jinme topper ke course jaisi zaroori baatein chhupaana galat maana gaya.'],
    fix: [
      '<b>Denominator poochho</b>: "Pichhle saal is batch me kitne students the, aur unme se kitne select huye?" Jawab gol-mol ho, to wahi tumhara jawab hai.',
      '<b>Topper ka course poochho</b>: "Ye student classroom program me tha ya sirf test series me?"',
      '<b>Pehle demo class, phir fees</b>: do-teen class baith kar dekho padhaate kaise hain; poster nahi, padhai chuno.',
      '<b>"Aaj hi" ko na bolo</b>: "Hum ghar par baat kar ke ek hafte me batayenge." Asli discount ek hafte me gayab nahi hota.',
      '<b>Purane students se baat karo</b>: sirf select huye nahi, wo bhi jo select nahi huye. Unki baat sabse sachchi hogi.'
    ],
    teacher: 'Jab bhi koi sirf jeetne walon ki list dikhaye, ek sawaal yaad rakhna: baaki sab kahan gaye? Ye ek sawaal tumhe lakhon ke galat faisle se bacha sakta hai.',
    chapters: ['cognitive-biases', 'attitudes-persuasion', 'critical-thinking'],
    tags: ['coaching', 'topper', 'survivorship bias', 'advertising', 'parents', 'exam']
  });

  S({
    id: 'imaandaar-thodi-cheating', cat: 'padhai', level: 3, kind: 'jaanbujh',
    title: 'Imaandaar students bhi "bas thodi si" cheating kyun karte hain?',
    hook: '"Ye to internal quiz hai, sir ne padhaya hi nahi, aur sab kar rahe hain." Teen bahaane, ek click, aur answers group me.',
    story: [
      'Bhopal ke ek engineering college me Farhan class ka sabse seedha ladka maana jaata tha: kabhi proxy nahi, kabhi copy nahi. Second year me online internal quiz shuru huye: 20 sawaal, 30 minute, ghar se. Pehle quiz ke dauraan class ke WhatsApp group "CSE-B Official" me kisi ne answers ka screenshot daal diya. Farhan ne group mute kiya, khud quiz diya, 11/20 aaye. Topper list me 40 log 19-20 waale the.',
      'Doosre quiz se pehle Farhan ki dost Sneha ne kaha, "Yaar, internals hi to hain. Sir ne syllabus ka aadha padhaya hi nahi. Aur jab sab kar rahe hain to imaandaari ki saza tumhe kyun mile?" Quiz ke beech Farhan ne group khola, sirf "check" karne ke liye. Teen sawaal match kiye. Agle quiz me paanch. Chauthe quiz tak wo khud answers bhejne laga, "taaki dosto ki madad ho jaaye".',
      'Teen semester baad placement ka coding test proctored hua: camera on, browser locked. Farhan ko wahi topics nahi aaye jo internals me "100%" the. Usne Sneha se kaha, "Main cheater nahi hoon yaar, bas system aisa tha." Aur use sach me aisa hi lagta tha.'
    ],
    guess: ['Farhan ne cheating kyun shuru ki?', ['Wo andar se hamesha se beimaan tha', 'Usne apne liye aisi kahaniyan bana li jinme cheating "cheating" lagti hi nahi thi', 'Use padhai nahi aati thi'], 1, 'Zyada tar log apni nazar me achhe rehna chahte hain. Isliye wo galat kaam nahi chhodte, galat kaam ki definition badal lete hain.'],
    kya: 'Imaandaar log bhi "chhoti" beimaani karte hain jab unke paas acchi kahani ho: "sab karte hain", "system hi galat hai", "madad kar raha hoon". Ye jaanbujh kar kiya gaya kaam hai, par apni achhi image bachaane ke liye dimaag use naya naam de deta hai.',
    kyun: [
      ['Moral disengagement (Albert Bandura)', 'Bandura ne bataya ki log apne moral standards ko "switch off" karne ke kuch tareeke use karte hain: kaam ko acchha naam dena ("dosto ki madad"), zimmedaari baant dena ("sab kar rahe hain"), dosh system par daalna ("sir ne padhaya nahi"), aur nuksaan chhota dikhana ("bas internals hain"). Farhan ne in sab ko ek ek kar ke use kiya.'],
      ['Self-concept maintenance', 'Log utni hi beimaani karte hain jitni unki "main achha insaan hoon" wali image me fit ho jaaye. Isliye cheating aksar thodi-thodi hoti hai. Teen sawaal "check karna" cheating jaisa nahi lagta, aur agle step tak dimaag nayi normal set kar chuka hota hai.'],
      ['Descriptive social norms', 'Jab 40 log 19-20 le aate hain, to "kya normal hai" ki line khisak jaati hai. Imaandaar student ko lagta hai wo khud ka nuksaan kar raha hai. Norm sirf rule nahi batata, ye bhi batata hai ki rule todne ki "keemat" kitni hai.'],
      ['Slippery slope', 'Farhan ne ek din me cheater banne ka faisla nahi kiya. Teen sawaal, phir paanch, phir answers bhejna: har step pichhle se thoda hi bada tha. Chhote kadam bade badlaav ko mehsoos hi nahi hone dete.']
    ],
    kaise: [
      'Mahaul: ghar se online quiz, kamzor nigrani, aur ek group jahan answers khule aam aate hain.',
      'Imaandaari ki "keemat" dikhti hai: 11/20 vs class ke 19-20.',
      'Koi dost bahaane deta hai jo samajhdaar lagte hain: "sab karte hain", "system galat hai".',
      'Pehla chhota kadam: "bas check kar raha tha." Apni image bachi rehti hai.',
      'Kadam badhte jaate hain, aur aakhir me galat kaam ko "madad" ka naam mil jaata hai.',
      'Asli nuksaan der se aata hai: skill bani hi nahi, aur ab pata bhi nahi ki kab gayi.'
    ],
    irada: 'Ye <b>jaanbujh kar</b> hai: Farhan har baar jaanta hai ki wo answers dekh raha ya bhej raha hai. Jo anjaane me hota hai wo hai uska <b>apne aap ko samjhaana</b>: bahaane itne natural lagte hain ki wo sach me khud ko cheater nahi maanta. Sneha bhi jaanbujh kar use is taraf dhakelti hai, shayad isliye ki ek aur insaan saath ho to uska apna guilt kam ho.',
    gap: 'Farhan jaanta tha ki cheating galat hai. Problem jaankari ki nahi thi. Jab ek taraf turant fayda ho (marks, dosto me jagah) aur doosri taraf door ka, dhundhla nuksaan (skill ki kami), aur beech me ek taiyaar bahaana, to sabse sachcha insaan bhi "bas is baar" bol deta hai.',
    real: ['Ariely ke "matrix" experiments, aur un par uthe sawaal', 'Behavioral economist Dan Ariely aur saathiyon (jaise Nina Mazar aur On Amir, 2008) ne logon ko number puzzles diye aur khud score report karne diye. Bahut kam log poori tarah jhooth bole, par kaafi log "thoda sa" badha kar bataate the. Ye "self-concept maintenance" ki soch ka base bana. Par dhyaan rahe: Ariely ka ek mashhoor 2012 ka honesty paper (form ke upar sign karwane wala) 2021 me data par gambhir sawaal uthne ke baad retract hua, aur unke kuch aur nateejon ko baad ki badi replication studies me dohraana mushkil raha. Isliye "log thodi-thodi beimaani karte hain" wali baat ko seedhi sachchai nahi, ek research idea ki tarah padho.'],
    fix: [
      '<b>Apne bahaane pehchaano</b>: "sab karte hain", "system galat hai", "bas thoda sa". Jab dimaag ye bole, ruko aur poochho: "Bina bahaane ke ye kaam kaisa dikhta hai?"',
      '<b>Pehle se rule banao</b>: quiz se pehle hi group archive karo ya phone doosre kamre me. Faisla garam pal me nahi, thande pal me lo.',
      '<b>Asli inaam yaad rakho</b>: internals ka ek number nahi, wo skill jo placement test, interview aur naukri me kaam aayegi.',
      '<b>Akela mat raho</b>: ek-do aise dost dhoondho jo imaandaari ko "bewakoofi" nahi samajhte. Norm chhote group me bhi ban sakta hai.',
      '<b>System badalne ki aawaz uthao</b>: class representative ke zariye sir ko bata sakte hain ki online quiz me answers khule aam ghoom rahe hain. Ye chugli nahi, sabke marks ki keemat bachaana hai.'
    ],
    teacher: 'Beimaani aksar bade faisle se nahi, chhote bahaane se shuru hoti hai. Agli baar jab dimaag kahe "bas is baar", us line ko pakdo. Wahi asli imtihaan hai.',
    chapters: ['social-cognition', 'conformity-obedience', 'research-advanced'],
    tags: ['cheating', 'moral disengagement', 'bandura', 'college', 'online exam', 'social norms', 'imaandaari']
  });

  S({
    id: 'teacher-favourite-student', cat: 'padhai', level: 1, kind: 'dono',
    title: 'Teacher ka "favourite" student aur achha kyun karta jaata hai?',
    hook: 'Ek ko har sawaal par "very good", doosre ko "baith jao". Saal ke end tak dono apne-apne role me fit.',
    story: [
      'Lucknow ke ek school me class 7 ki Maths teacher Shirin ma\'am ko pehle hafte hi lag gaya ki Aditya "tez" hai: front bench, saaf copy, haath sabse pehle upar. Peeche baithne waali Bhavna ne pehle test me 9/20 laaye, to ma\'am ke dimaag me ek label lag gaya: "weak".',
      'Teen mahine baad ma\'am Aditya ko mushkil sawaal dete, galti par kehte "socho, tumse ho jaayega", aur use answer tak pahunchne ke liye 10 second extra dete. Bhavna ka haath upar hota to ma\'am kisi aur ko bula leti. Aditya ne bhi pakad liya ki ma\'am ko kya pasand hai: wo jaanbujh kar har din extra sawaal le kar jaata. Bhavna ne haath uthaana band kar diya. Saal ke end me ma\'am ne staff room me kaha, "Dekha, maine pehle din hi bata diya tha."'
    ],
    guess: ['Aditya aur Bhavna ke marks me farq ka sabse bada kaaran kya hai?', ['Aditya natural genius hai, Bhavna nahi', 'Ma\'am ki shuru wali ummeed ne dono ke saath unka bartaav badla, aur bachchon ne us bartaav ke hisaab se khud ko dhaal liya', 'Bhavna padhti hi nahi'], 1, 'Ma\'am ki bhavishyavaani sach hui, par kuch had tak isliye kyunki unhone khud usse sach banaya.'],
    kya: 'Teacher ke man me kisi student ke baare me jaldi ek ummeed ban jaati hai. Wo ummeed chhote-chhote tareekon se bartaav badalti hai, aur student us bartaav ke hisaab se aur mehnat karte hain ya chhod dete hain.',
    kyun: [
      ['Expectancy effect (Pygmalion effect)', 'Jab teacher kisi se achhe ki ummeed karta hai, to wo anjaane me use zyada mauka, zyada waqt aur garam feedback deta hai. Shirin ma\'am ko nahi lagta ki wo bhed-bhaav kar rahi hain; unhe lagta hai wo bas "sach" dekh rahi hain.'],
      ['Self-fulfilling prophecy', 'Ummeed → bartaav → student ka jawab → ummeed "sahi" saabit. Bhavna ne haath uthaana band kiya kyunki use bulaaya hi nahi jaata tha, aur ma\'am ne ise saboot maan liya ki wo kamzor hai.'],
      ['Student ki jaanbujh wali koshish', 'Aditya ne samajh liya ki ma\'am ki tareef kaise milti hai, aur jaanbujh kar wahi karta raha. Yahi uski mehnat badhaata hai. Matlab favourite banna sirf kismat nahi, ek feedback loop hai.']
    ],
    kaise: [
      'Pehle hafte ki chhoti jaankari (bench, copy, ek test) se label banta hai.',
      'Label se teacher ka bartaav badalta hai: mauke, waqt, tone.',
      'Ek student is garam signal ko pakad kar jaanbujh kar aur mehnat karta hai.',
      'Doosra student thande signal se peeche hat jaata hai.',
      'Saal ke end ka result shuru ki ummeed ko "sahi" saabit karta dikhta hai.'
    ],
    irada: 'Ye <b>dono</b> hai. Shirin ma\'am ki ummeed aur bartaav <b>anjaane me</b> hai; unhe lagta hai wo bas imaandaari se dekh rahi hain. Aditya <b>jaanbujh kar</b> ma\'am ko impress karne wali cheezein karta hai. Bhavna ka peeche hatna aadat se hai, sochi hui choice nahi.',
    gap: 'Lagbhag har teacher maanta hai ki "main sabke saath barabar hoon". Isliye ye asar pakda nahi jaata: ummeed dimaag me hoti hai, bartaav me chhoti-chhoti cheezon me nikalti hai (10 second ka wait, ek muskaan), jinhe hum khud nahi dekh paate.',
    real: ['"Pygmalion in the Classroom" (Rosenthal aur Jacobson, 1968)', 'Robert Rosenthal aur Lenore Jacobson ne ek American school me teachers ko bataya ki ek test ke hisaab se kuch bachche jald hi tezi se aage badhenge. Asal me wo bachche random chune gaye the. Saal ke end me kuch chhoti classes me un "chune huye" bachchon ka IQ score zyada badha. Par dhyaan rahe: is study ke tareekon par baad me kaafi sawaal uthe, aur baad ki research (jaise Lee Jussim aur saathiyon ka review) ne paaya ki classroom me expectation ka asar asli hai par aam taur par chhota hota hai; kuch groups, jaise pehle se peeche chal rahe bachchon par, ye zyada ho sakta hai.'],
    fix: [
      '<b>Teachers ke liye</b>: naam ki list rakho aur har student ko baari-baari bulao, sirf utha hua haath nahi.',
      '<b>Wait time barabar karo</b>: har student ko jawab ke liye utne hi second do. Ye chhoti cheez badi farq daalti hai.',
      '<b>Label par shak karo</b>: "Kya maine ye pehle hafte ke ek test se socha tha?"',
      '<b>Students ke liye</b>: ek chhota sawaal le kar class ke baad jaao: "Ma\'am, ye step samajh nahi aaya, ek baar dekh lenge?" Signal badalne ke liye ek pehla kadam kaafi hai.'
    ],
    teacher: 'Jab bhi kisi ko "tez" ya "kamzor" bolne ka mann ho, yaad rakhna ki tumhari ummeed bhi us kahani ka ek kirdaar hai. Kai baar hum jo dekhte hain, wahi thoda-thoda bana bhi dete hain.',
    chapters: ['social-cognition', 'applied-psychology'],
    tags: ['teacher', 'pygmalion', 'expectation', 'school', 'self-fulfilling prophecy', 'favourite']
  });

  S({
    id: 'exam-se-pehle-game-raat', cat: 'padhai', level: 3, kind: 'dono',
    title: 'Exam se pehle poori raat game, phir "padhta to topper hota". Kyun?',
    hook: 'Fail hua to bahaana taiyaar. Pass hua to "bina padhe" ka swag. Dono haalat me ego safe.',
    story: [
      'Hyderabad ke ek college me final year ka Tenzin hamesha se "potential wala" ladka kehlaata tha. School me bina zyada mehnat ke 90%. College me pehle semester ek baar 6.2 CGPA aaya to Tenzin ko laga jaise kisi ne uski pehchaan cheen li.',
      'Ab har important exam se pehle ek pattern banta hai. Database ke paper se ek raat pehle hostel me BGMI tournament. Raat 3 baje tak khela, subah 9 baje paper. Paper ke baad bahar sabko sunaaya: "Bhai, raat bhar khela, ek page nahi padha." Result aaya 58/100. Tenzin ne hans kar kaha, "Padhta to 90 aate." Roommate Mehul ne dheere se poocha, "To padha kyun nahi?" Tenzin ne baat taal di.',
      'Placement se pehle mock interview tha. Tenzin ne usi raat dost ki shaadi ki sangeet jaana chuna, "bas ek ghante ke liye". Raat 2 baje lauta. Uske mann me ek dhundhli si awaaz thi, "Main ye kyun kar raha hoon?" Par agle din phir wahi line: "Taiyaari hoti to select ho jaata."'
    ],
    guess: ['Tenzin baar-baar exam se pehle aisa kyun karta hai?', ['Use padhai me koi interest nahi', 'Wo apni kaabiliyat ki "asli" jaanch se darta hai, isliye pehle se ek bahaana bana leta hai', 'Use gaming ki lat hai'], 1, 'Agar poori mehnat ke baad bhi 58 aaye, to "main utna tez nahi" maanna padega. Game wali raat us sach se bachaati hai.'],
    kya: 'Log important kaam se pehle khud apne raaste me rukawat daal dete hain (raat bhar jaagna, aakhri waqt tak taalna, party), taaki agar result bura aaye to dosh rukawat par jaaye, kaabiliyat par nahi. Aur achha aaye to "bina taiyaari ke" ka extra credit.',
    kyun: [
      ['Self-handicapping', 'Steven Berglas aur Edward Jones (1978) ne ye naam diya: jab apni kaabiliyat par shak ho aur result important ho, to log pehle se ek rukawat paida kar lete hain. Tenzin ka game asli "kaaran" ban jaata hai, taaki 58 ka matlab "main kamzor hoon" na nikle.'],
      ['Fixed mindset aur "tez" wala label', 'Tenzin ki pehchaan "bina mehnat ke tez" par tiki hai. Is soch me mehnat karna hi ek khatra hai: agar mehnat ke baad bhi kam aaye to label toot jaayega. Carol Dweck ki research is soch ko fixed mindset kehti hai.'],
      ['Attribution aur ego protection', 'Fail hua to dosh bahar (game, raat). Pass hua to credit andar ("bina padhe bhi"). Ye self-serving tareeka dimaag ko turant raahat deta hai, isliye pattern baar-baar dohraaya jaata hai.'],
      ['Aadha jaanna', 'Tenzin ko ek dhundhli awaaz sunaayi deti hai, par wo use poora sochne nahi deta. Self-handicapping aksar is beech wali jagah me chalti hai: na poori tarah sochi hui, na poori tarah anjaani.']
    ],
    kaise: [
      'Ek pehchaan banti hai: "main bina mehnat ke tez hoon."',
      'Ek jhatka aata hai (6.2 CGPA), aur kaabiliyat par chupa shak paida hota hai.',
      'Agla important test aata hai; dimaag pehle se bahaana dhoondhta hai.',
      'Rukawat chuni jaati hai (game, sangeet) aur sabko sunaayi bhi jaati hai, taaki bahaana "public" ho.',
      'Bura result → dosh rukawat par. Ego bachi, par seekh nahi hui.',
      'Lambe samay me asli nuksaan: kam marks, chhoote mauke, aur kabhi pata hi nahi chalta ki poori mehnat se kya hota.'
    ],
    irada: 'Ye <b>dono</b> hai. Tenzin <b>jaanbujh kar</b> game ya sangeet chunta hai aur jaanta hai ki agle din exam hai. Par kyun chun raha hai, ye <b>aadha anjaane me</b> hai: ego bachaane wala hisaab uske saamne poori tarah nahi aata. Wo "jaanta bhi hai, phir bhi aadat se" wahi karta hai.',
    gap: 'Tenzin ko pata hai ki raat bhar jaagna marks girata hai. Par uske liye bura result asli darr nahi; asli darr hai poori mehnat ke baad bura result. Jab tak ye darr naam nahi paata, samajhdaar insaan bhi apne hi raaste me patthar rakhta rahega.',
    real: ['Berglas aur Jones ka "dawai chuno" experiment (1978)', 'Participants ko kuch puzzles diye gaye. Ek group ko aise puzzles mile jo lagbhag hal hi nahi ho sakte the, phir bhi unhe bataya gaya "aapne bahut achha kiya". Is group ko apni safalta samajh nahi aayi. Phir agle test se pehle unhe do (asal me nakli) dawaiyon me se chunna tha: ek jo performance badhaati, ek jo kharab karti. Jinhe "samajh na aane wali" safalta mili thi, unme se zyada logon ne kharab karne wali dawai chuni, khaaskar purush participants me. Unhe ek taiyaar bahaana chahiye tha.'],
    fix: [
      '<b>Pattern ka naam rakho</b>: agli baar exam se pehle koi "bas ek ghanta" plan bane, khud se poochho: "Ye mazaa hai ya bahaana?"',
      '<b>Pehchaan badlo</b>: "main tez hoon" ki jagah "main seekhne wala hoon". Phir mehnat khatra nahi, raasta lagti hai.',
      '<b>Ek baar poori koshish ka experiment</b>: sirf ek test ke liye poori taiyaari, aur result jo bhi aaye, use data maano, faisla nahi.',
      '<b>Kisi ko pehle se batao</b>: roommate ko message bhejo: "Paper se pehle wali raat padhaai, game nahi. Yaad dila dena." Bahar ki commitment bahaane ko kamzor karti hai.',
      '<b>Darr bada lage to baat karo</b>: college counsellor ya Tele-MANAS (14416) par failure ke darr ke baare me baat karna kamzori nahi.'
    ],
    teacher: 'Bahaana ego ko aaj bachaata hai, par kal tumse ye jaanne ka mauka chheen leta hai ki poori mehnat se kya ho sakta tha. Ek baar dar ke bina poori koshish kar ke dekho.',
    chapters: ['motivation', 'social-cognition', 'stress-coping'],
    tags: ['self-handicapping', 'exam', 'procrastination', 'ego', 'mindset', 'college']
  });

  /* ---------- Kaam ---------- */

  S({
    id: 'hiring-apne-jaise-log', cat: 'kaam', level: 3, kind: 'anjaane',
    title: 'Team me sab "apne jaise" log hi kyun hire ho jaate hain?',
    hook: '"Candidate achha tha, par culture fit nahi laga." Is ek line ke peeche kitne achhe log chhoot jaate hain?',
    story: [
      'Bengaluru ki ek fintech startup me 12 logon ki product team hai. Lagbhag sab ek jaise: same type ke bade engineering college, English medium, weekend par trekking, office me cricket aur memes ka group. Team lead Raghav ko naya product manager chahiye.',
      'Final round me do candidate the. Pehle, Arvind: Raghav ke hi college ka, interview ke pehle 5 minute "kaunsa hostel tha?" aur "wo canteen ab bhi hai?" me nikal gaye. Doosri, Lalitha Kujur: Ranchi se, ek sarkari bank me 6 saal digital payments ka kaam, bahut practical jawab, par thodi formal aur jokes par kam hansi. Panel ke teen logon ne kaha, "Arvind ke saath vibe aayi. Lalitha achhi hai, par pata nahi team me fit hogi ya nahi." Arvind select hua.',
      'Ek saal baad product chhote shehron me fail ho raha tha: users ko flow samajh nahi aa raha tha. Kisi ne meeting me poocha, "Humme se kisi ne Tier-3 shehar ke user se kabhi baat ki hai?" Kamre me chuppi. Lalitha ka resume ab bhi Raghav ke mail me tha, us project ke saath jo theek isi problem par tha.'
    ],
    guess: ['Lalitha kyun nahi chuni gayi?', ['Wo kam qualified thi', 'Panel ne jaanbujh kar bhed-bhaav kiya', 'Panel ka "vibe" asal me "humme jaisa" tha, aur ye bina soche hua'], 2, 'Kisi ne bura nahi socha. Bas "achha laga" aur "apne jaisa laga" dimaag me ek hi feeling ban gaye.'],
    kya: 'Interview panel aur teams un logon ko zyada pasand karti hain jo unke jaise hon: college, bolne ka tareeka, shauk. Ise "culture fit" ya "vibe" kaha jaata hai. Dheere-dheere team ek jaisi ho jaati hai aur uske blind spots bhi ek jaise.',
    kyun: [
      ['Similarity / affinity bias', 'Hum un logon ko zyada pasand karte hain aur un par zyada bharosa karte hain jo humse milte-julte hon. Arvind ke saath hostel ki baatein ek garam feeling deti hain, aur dimaag us feeling ko "ye achha candidate hai" padh leta hai.'],
      ['Halo effect', 'Pehle 5 minute ki achhi feeling baaki interview ko rang deti hai. Arvind ke average jawab "smart" lagte hain, Lalitha ke strong jawab "thode rigid".'],
      ['In-group favouritism', 'Social identity theory (Henri Tajfel) ke hisaab se hum apne group ko automatically behtar maante hain. "Humme se ek" hona ek chupi qualification ban jaata hai.'],
      ['Groupthink ka beej', 'Jab sab ek jaise hon, to sab ek jaisa sochte hain aur koi naya sawaal nahi poochhta. Tier-3 users wala blind spot isi ka nateeja tha. Diversity sirf fairness ki baat nahi, achhe faislon ki bhi baat hai.']
    ],
    kaise: [
      'Team ek jaise logon se shuru hoti hai (founders ke dost, same college).',
      'Interview bina fixed sawaalon ke, baat-cheet ki tarah hota hai.',
      'Jo candidate "humme jaisa" hai, uske saath turant connection banta hai.',
      'Ye connection "culture fit" naam se score ban jaata hai.',
      'Har hire team ko aur ek jaisa banata hai; agla "fit" aur sankara ho jaata hai.',
      'Saalon baad team ke blind spots business me dikhte hain.'
    ],
    irada: 'Ye zyada tar <b>anjaane me</b> hota hai. Raghav aur panel jaanbujh kar Lalitha ko nahi hata rahe; unhe sach me lagta hai ki wo "fit" dekh rahe hain. Bias feeling ke roop me aata hai, faisle ke roop me nahi, isliye kisi ko apni galti dikhti nahi.',
    gap: 'Panel ke logon ko diversity training mil chuki thi, aur sab "unconscious bias" ka matlab jaante the. Par jaankari interview ke 45 minute me kaam nahi aati. Jab tak process khud sawaal fix nahi karta, dimaag wahi karta hai jo use aasaan lagta hai: apne jaisa chunna.',
    real: ['"Hiring as cultural matching" (Lauren Rivera, 2012)', 'Sociologist Lauren Rivera ne America ki bade investment banks, law aur consulting firms ki hiring ko andar se study kiya. Unhone paaya ki interviewers aksar shauk, background aur "agar flight cancel ho jaaye aur airport par ghanton atakna pade, to kiske saath waqt achha katega" jaisi baaton par candidates ko parakhte the, aur ye "fit" bahut baar faisle me skill jitna hi bhaari padta tha. Iske ulat, research ki badi meta-analyses (jaise Schmidt aur Hunter, 1998, aur baad ke updates) ne baar-baar dikhaya hai ki structured interviews, jahan sabse same sawaal aur pehle se tay scoring ho, naukri ki performance ka behtar andaza dete hain.'],
    fix: [
      '<b>Structured interview</b>: har candidate se same sawaal, same order me, aur har jawab ka pehle se tay scoring guide (1-5).',
      '<b>Score pehle, discussion baad me</b>: har panel member akele score likhe, phir baat ho. Warna sabse senior ki "vibe" sab par chadh jaati hai.',
      '<b>"Fit" ko define karo</b>: "culture fit" ki jagah "culture add" poochho: "Ye insaan team me kya laayega jo abhi nahi hai?"',
      '<b>Small talk ko score se bahar rakho</b>: college ya hostel ki baat chalo, par wo kisi box me number na bane.',
      '<b>Panel me farq laao</b>: alag background ke log panel me hon, to "apne jaisa" ka matlab apne aap badal jaata hai.'
    ],
    teacher: 'Agli baar jab kisi ke liye "vibe nahi aayi" mehsoos ho, ek pal ruk kar poochhna: vibe kis cheez ki thi, kaam ki ya apne jaisa hone ki? Ye sawaal kisi ki poori career badal sakta hai.',
    chapters: ['prejudice', 'group-behavior', 'applied-psychology'],
    tags: ['hiring', 'interview', 'affinity bias', 'culture fit', 'diversity', 'office']
  });

  S({
    id: 'har-mail-me-boss-cc', cat: 'kaam', level: 1, kind: 'jaanbujh',
    title: 'Colleague har mail me boss ko CC kyun karta hai?',
    hook: '"Hi Meera, file bhej dena. CC: Boss." Ek chhoti si file ke liye itna bada audience?',
    story: [
      'Gurgaon ke ek office me Meera aur Prakash ek hi project par hain. Mangalvaar subah 10:05 par Prakash ka mail aaya: "Hi Meera, kal wali Excel bhej dena please." CC me unke manager, Nandini ma\'am. Meera ne 10:40 par file bhej di.',
      'Ye pehli baar nahi tha. Har chhoti baat par, chahe chai ki meeting ka time ho, Prakash Nandini ma\'am ko CC karta. Aur jab bhi koi kaam poora hota, uska mail aata: "As discussed, maine ye close kar diya hai. Team, thanks!" Meera ko lagne laga ki boss ki nazar me wo bas "file bhejne wali" hai aur Prakash "kaam chalaane wala". Usne socha, "Kya mujhe bhi ab har mail me boss ko CC karna chahiye?"'
    ],
    guess: ['Prakash har baar boss ko CC kyun karta hai?', ['Wo bas organised hai, aur kuch nahi', 'Wo jaanbujh kar boss ki nazar me rehna chahta hai aur dikhaana chahta hai ki kaam wo chala raha hai', 'Boss ne aisa karne ka order diya hai'], 1, 'CC ek chhota sa button hai, par ye har baar ek message bhejta hai: "Dekho, main yahan hoon."'],
    kya: 'Kuch log jaanbujh kar har mail me boss ko CC karte hain taaki unki "visibility" bani rahe, kaam unke naam se juda dikhe, aur kabhi-kabhi doosre par halka sa dabaav bhi bane.',
    kyun: [
      ['Impression management', 'Erving Goffman ne kaha tha ki hum sab ek stage par perform karte hain aur doosron ki nazar me apni ek image banaate hain. Office me Prakash ka stage boss ka inbox hai, aur har CC ek chhota performance.'],
      ['Self-promotion aur visibility', 'Jo kaam dikhta hai, wahi yaad rehta hai. Boss ke inbox me Prakash ka naam baar-baar aata hai, to dimaag use "active" insaan maan leta hai, chahe asli kaam kisi ne bhi kiya ho.'],
      ['CC as soft pressure', 'Boss ke saamne poochhne se Meera par chupa dabaav padta hai: ab der hui to boss ko bhi dikhega. Ye sawaal ko "request" se "public accountability" bana deta hai.']
    ],
    kaise: [
      'Chhota sa kaam, par mail me boss ko CC.',
      'Kaam ho jaaye to "maine close kar diya" wala mail, phir boss ko CC.',
      'Boss ke dimaag me naam aur kaam jud jaate hain.',
      'Baaki colleagues ko lagta hai unka kaam dikh hi nahi raha; wo bhi CC karne ki sochte hain, aur inbox shor se bhar jaata hai.'
    ],
    irada: 'Prakash <b>jaanbujh kar</b> CC karta hai: use pata hai ki boss ki nazar me rehna promotion aur appraisal me kaam aata hai. Nandini ma\'am ka us par "active" ki image banaana zyada tar <b>anjaane me</b> hota hai, bas naam baar-baar dekhne se.',
    gap: 'Meera jaanti hai ki asli kaam usne kiya. Par wo ise "chhoti baat" maan kar chhod deti hai, kyunki khud ko promote karna use "show-off" lagta hai. Is jhijhak ki wajah se kaam karne wale peeche, aur dikhaane wale aage ho jaate hain.',
    fix: [
      '<b>Uske jaisa mat bano, par apna kaam dikhao</b>: hafte me ek baar boss ko chhota update: "Is hafte: client data clean kiya, report ka draft ready, agla step Thursday." Har mail par CC nahi, ek saaf summary.',
      '<b>Kaam ke saath naam jodo</b>: file bhejte waqt sirf "attached" nahi, "Maine Q2 data me 3 galtiyaan theek ki hain, sheet 2 me highlight hai" likho, aur reply-all ka use samajh kar karo.',
      '<b>Seedha baat karo</b>: "Prakash, chhoti cheezon ke liye boss ko CC zaroori nahi lagta. Deadline ka issue ho to hum pehle aapas me baat kar lein?" Shant, bina ilzaam.',
      '<b>Boss se 1:1 me</b>: monthly baat me apne contributions khud batao. Kaam bolta hai, par kabhi-kabhi use awaaz bhi chahiye.'
    ],
    teacher: 'Office me sirf kaam karna kaafi nahi, kaam ka dikhna bhi zaroori hai. Par uske liye har mail me shor nahi chahiye. Ek saaf hafte ka update sau CC se zyada bolta hai.',
    chapters: ['social-cognition', 'applied-psychology'],
    tags: ['office', 'email', 'cc', 'impression management', 'visibility', 'boss']
  });

  S({
    id: 'office-me-jaankari-chhupana', cat: 'kaam', level: 2, kind: 'jaanbujh',
    title: 'Office me kuch log jaankari chhupa kar kyun rakhte hain?',
    hook: '"Wo report kaise banti hai? Arre, thoda complicated hai, main hi kar deta hoon." Aur system hamesha unke haath me rehta hai.',
    story: [
      'Chennai ke ek logistics company ke accounts department me Thomas 11 saal se hai. Har mahine ka GST reconciliation sirf usi ko aata hai. Excel me 40 tabs, macros, aur ek file jiska password sirf use pata hai. Jab bhi naye log poochhte hain, Thomas kehta hai, "Documentation nahi hai, experience se aata hai." Ya fir, "Haan, bata dunga, is mahine bahut kaam hai."',
      'Naye analyst Zoya ne teen baar poocha. Ek baar Thomas ne aadha bataya aur sabse zaroori step skip kar diya. Zoya ne khud koshish ki to galti hui, aur meeting me Thomas ne kaha, "Isliye main kehta hoon, ye kaam har koi nahi kar sakta." Manager Anil ne bhi sir hilaaya. Jab Thomas do hafte ki chhutti par gaya, to filing ki deadline nikal gayi aur ₹50,000 ki late fee lagi.'
    ],
    guess: ['Thomas jaankari kyun nahi baantta?', ['Use sach me samjhaana nahi aata', 'Wo jaanbujh kar khud ko zaroori banaye rakhna chahta hai, kyunki jaankari hi uski taaqat hai', 'Uske paas waqt nahi hai'], 1, 'Jo cheez sirf ek insaan jaanta hai, wo insaan "replace" nahi ho sakta. Thomas ye achhe se samajhta hai.'],
    kya: 'Kuch log jaanbujh kar zaroori jaankari, skills ya files apne paas rakhte hain, taaki unki zaroorat bani rahe. Ise "knowledge hiding" kehte hain. Ye bahaanon me chhupa hota hai: "baad me bataunga", "complicated hai", ya aadhi jaankari dena.',
    kyun: [
      ['Knowledge hiding ke teen roop', 'Research (Connelly aur saathi, 2012) ne teen tarah bataye: <i>evasive hiding</i> (baat taalna, "baad me"), <i>playing dumb</i> (anjaan banna), aur <i>rationalized hiding</i> ("ye confidential hai" jaisa kaaran dena). Thomas pehle do ka mix use karta hai.'],
      ['Jaankari = power', 'Jab sirf ek insaan kuch jaanta hai, to wo "bottleneck" ban jaata hai: uske bina kaam ruk jaata hai. Ye job security aur izzat dono deta hai. Thomas ko darr hai ki sab seekh gaye to uski keemat kam ho jaayegi.'],
      ['Distrust ka chakkar', 'Jo log jaankari chhupate hain, unse bhi log jaankari chhupane lagte hain. Zoya ab Thomas ko apne naye shortcuts nahi batati. Dheere-dheere poori team me "apna-apna sambhalo" wala mahaul ban jaata hai.'],
      ['Manager ki chupi manzoori', 'Anil ka sir hilaana Thomas ke tareeke ko inaam deta hai. Jab tak "sirf Thomas jaanta hai" ko kamzori ki jagah expertise maana jaayega, ye chalta rahega.']
    ],
    kaise: [
      'Ek insaan kisi system ka akela jaankar ban jaata hai.',
      'Wo dekhta hai ki isse use izzat aur suraksha milti hai.',
      'Naye log poochhte hain; jawab me bahaane ya aadhi jaankari milti hai.',
      'Unki galtiyan uski "zaroorat" ka saboot ban jaati hain.',
      'Manager isse expertise samajh kar chhod deta hai.',
      'Ek din wo insaan nahi hota, aur poori company ka kaam atak jaata hai.'
    ],
    irada: 'Thomas <b>jaanbujh kar</b> jaankari chhupata hai: use pata hai ki zaroori step skip karna aur password apne paas rakhna use zaroori banaye rakhega. Manager Anil ka ise chalne dena zyada tar <b>anjaane me</b> hai; unhe ye khatra dikha hi nahi jab tak late fee nahi lagi.',
    gap: 'Anil jaante the ki "ek insaan par sab tika hona" risky hai. Par jab har mahine kaam time par ho raha ho, to badlaav ki zaroorat mehsoos nahi hoti. Khatra tab tak abstract rehta hai jab tak wo ek din bill ban kar nahi aata.',
    real: ['"What goes around comes around" (Černe aur saathi, 2014)', 'Researchers ne kaam karne wale logon aur teams ko study kiya aur paaya ki jo log saathiyon se jaankari chhupate the, unki apni creativity bhi kam hone lagti thi, kyunki badle me saathi bhi unse jaankari aur ideas chhupane lagte the. Distrust ka ye loop chhupane wale ko bhi nuksaan pahunchaata hai. Team me jahan ek doosre se seekhne ka mahaul (mastery climate) tha, wahan ye bura asar kam dikha.'],
    fix: [
      '<b>Manager ke liye: "bus factor" poochho</b>: "Agar kal ye insaan nahi aaye, to kaun ye kaam karega?" Jawab "koi nahi" ho to wo sabse bada risk hai.',
      '<b>Documentation ko kaam ka hissa banao</b>: har important process ka likha hua step-by-step, aur appraisal me iske liye credit.',
      '<b>Sikhaane ko inaam do</b>: "Thomas ne Zoya ko GST reconciliation sikhaaya" ko achievement maano. Jab sikhaana izzat laaye, to chhupana bekaar lagta hai.',
      '<b>Colleague ke roop me</b>: shadow karne ka specific samay maango: "Agle mahine filing ke waqt aapke saath baith kar dekhna hai. Notes bana kar aapse check karwa lenge, theek rahega?" Chhoti, saaf request ko taalna mushkil hota hai.'
    ],
    teacher: 'Jo jaankari sirf tumhare paas hai, wo tumhe aaj zaroori banati hai. Jo jaankari doosron tak pahunchti hai, wo tumhe kal leader banati hai. Ek ko chunna padta hai.',
    chapters: ['group-behavior', 'applied-psychology'],
    tags: ['office', 'knowledge hiding', 'power', 'team', 'manager', 'documentation']
  });

  S({
    id: 'naya-employee-har-kaam-haan', cat: 'kaam', level: 1, kind: 'dono',
    title: 'Naya employee har kaam par "haan" kyun bol deta hai?',
    hook: 'Pehle mahine me apna kaam 40%, doosron ka 60%. Aur seniors bolte hain, "Bahut helpful hai ye bachcha."',
    story: [
      'Jaipur ki ek digital agency me 23 saal ki Harpreet ki pehli naukri. Pehle hafte senior Imran ne kaha, "Harpreet, ye client ka social calendar bana dogi? Mujhe ek urgent kaam hai." Harpreet ne turant "haan sir" bola. Agle din doosre senior ne apna presentation de diya, phir ek aur ne meeting ke notes.',
      'Ek mahine baad Harpreet raat 9 baje tak office me thi, apna hi kaam pending tha. Imran apni chai lete huye bola, "Kal ek aur chhota sa kaam hai, tum to sab sambhaal leti ho." Harpreet ne muskura kar phir "haan" bol diya. Ghar jaate huye use khud par gussa aaya, par agle din bhi mana nahi kar paayi.'
    ],
    guess: ['Harpreet "na" kyun nahi bol paati?', ['Use kaam bahut pasand hai', 'Naye insaan ka "achha dikhne" aur group me jagah banaane ka darr use autopilot par "haan" bulwaata hai', 'Wo kamzor hai'], 1, 'Harpreet ka "haan" sochi hui choice nahi, darr se nikla reflex hai. Aur kuch seniors is reflex ko pehchaan kar jaanbujh kar use use karte hain.'],
    kya: 'Naye log har kaam ke liye haan bol dete hain taaki achha impression bane aur group me jagah mile. Kuch senior colleagues ye pehchaan lete hain aur jaanbujh kar apna kaam unpar dhakelte hain.',
    kyun: [
      ['Belonging aur approval ki zaroorat', 'Naye mahaul me dimaag ka pehla kaam hai "group me accept hona". Na bolna ek risk lagta hai, isliye Harpreet ka haan bina soche nikal jaata hai.'],
      ['Foot-in-the-door', 'Pehla chhota haan agle bade haan ko aasaan banata hai. Ek baar "helpful" ki image ban gayi to use todna aur mushkil lagta hai.'],
      ['Seniors ka jaanbujh wala istemaal', 'Imran jaanta hai ki naya insaan mana nahi karega. "Tum to sab sambhaal leti ho" jaisi tareef asal me ek chupa dabaav hai: tareef do, kaam do.']
    ],
    kaise: [
      'Naya insaan aata hai, accept hone ki fikr ke saath.',
      'Senior ek "chhota sa" kaam deta hai; haan turant nikalta hai.',
      'Senior dekh leta hai ki ye insaan mana nahi karta.',
      'Kaam badhte jaate hain, tareef ke saath.',
      'Apna kaam peeche, thakaan aur gussa badhta hai, par "na" aur mushkil lagta hai.'
    ],
    irada: 'Ye <b>dono</b> hai. Harpreet ka "haan" <b>anjaane me</b>, autopilot par nikalta hai: naye insaan ka darr aur achha dikhne ki chaah. Imran jaise kuch seniors <b>jaanbujh kar</b> ye pehchaan kar apna kaam usi par daalte hain.',
    gap: 'Harpreet jaanti hai ki use mana karna chahiye, wo ghar jaate huye khud se gussa bhi hoti hai. Par subah jab koi saamne khada ho kar poochhta hai, to darr turant jawab deta hai aur samajh baad me aati hai. Isliye taiyaar shabd pehle se chahiye.',
    fix: [
      '<b>Turant haan ki jagah ek pause</b>: "Apni list check kar ke 10 minute me batana theek rahega?" Pause me dimaag ko sochne ka mauka milta hai.',
      '<b>Priority ka sawaal manager par daalo</b>: "Mere paas abhi X aur Y hai. Agar ye lena hai, to kis cheez ko peeche karun?"',
      '<b>Aadha haan</b>: "Poora aaj mushkil hai. Template bana kar dena chalega?" Madad bhi hui, aur apna kaam bhi bacha.',
      '<b>Manager ko bata do</b>: weekly 1:1 me: "Is hafte mera 60% time doosron ke kaam par gaya. Kya ye theek hai, ya apne projects par focus karna hai?"'
    ],
    teacher: 'Naye ho, to helpful dikhna achhi baat hai. Par har haan ek kisi aur cheez ko na hai, aksar apne hi kaam ko. Pehle din se ek pause seekh lo: "Check kar ke batana theek rahega?"',
    chapters: ['conformity-obedience', 'defense-boundaries'],
    tags: ['naukri', 'new joiner', 'boundaries', 'say no', 'office', 'senior']
  });
})();
