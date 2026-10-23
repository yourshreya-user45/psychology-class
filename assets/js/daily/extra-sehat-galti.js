/* Roz ki Psychology · Sehat aur jaante huye bhi galti (extra). Format: README.md ("Roz ki Psychology ka format"). */
(function () {
  const S = window.PSY.situation;

  /* ---------- Sehat ---------- */

  S({
    id: 'chips-packet-bliss-point', cat: 'sehat', level: 1, kind: 'jaanbujh',
    title: 'Chips ka packet khatam kiye bina haath kyun nahi rukta?',
    hook: '"Bas do-teen chips" se shuru hua, aur packet ki aakhri crumbs tak ungliyan chaat li.',
    story: [
      'Raat ke 10 baje. Lucknow me Sana apne hostel room me assignment likh rahi thi. Bhookh nahi thi, bas "kuch chabane" ka mann tha. Canteen se ₹50 ka masala chips ka bada packet le aayi. Socha: "Do-teen kha kar band karke rakh dungi, kal ke liye."',
      'Laptop par ek video chal raha tha. Haath packet me jaata, mooh tak aata, phir wapas packet me. Pandrah minute baad haath ko packet ke andar sirf hawa mili. Sana ne packet ulta kiya, crumbs bhi kha liye. Phir khud par gussa: "Mujhe to bhookh bhi nahi thi! Mujhme self-control hi nahi hai kya?"'
    ],
    guess: ['Sana packet kyun nahi rok paayi?', ['Uska self-control kamzor hai', 'Chips ka swaad, crunch aur namak itni baareeki se tune kiye jaate hain ki "bas" ka signal der se aaye', 'Use asal me bahut bhookh lagi thi'], 1, 'Ye sirf Sana ki kamzori nahi thi. Packet ke peeche ek team baithi hai jiska kaam hi hai ki "bas" kehna mushkil ho.'],
    kya: 'Log bina bhookh ke bhi packaged snacks (chips, namkeen, biscuit) shuru karte hain aur packet khatam hone par hi rukte hain. Phir saara dosh apne "kamzor willpower" par daal dete hain.',
    kyun: [
      ['Bliss point', 'Food scientist Howard Moskowitz jaise experts ka kaam tha namak, cheeni ya fat ki wo <b>exact matra</b> dhoondhna jahan swaad sabse zyada pasand aaye: na kam, na zyada. Journalist Michael Moss ki kitaab "Salt Sugar Fat" (2013) isi industry ke andar ki kahani batati hai. Sana ka masala chips isi tarah test karke banaya gaya tha.'],
      ['Sensory-specific satiety', 'Jab ek hi swaad baar baar milta hai to dimaag ka mazaa us swaad ke liye dheere dheere kam hota hai, aur hum rukte hain. Isliye ghar ki daal-roti ek had ke baad "bas" lagti hai. Snacks me masala, namak, khatta aur crunch ka mix is "bore hone" wale signal ko der se aane deta hai.'],
      ['Mooh me ghulne wala crunch', 'Kuch snacks crunch ke turant baad mooh me ghul jaate hain. Food industry me ye maana jaata hai ki aisa khana dimaag ko "kuch khaas khaya hi nahi" jaisa lagta hai, to pet bharne ka ehsaas kamzor rehta hai. Haath agla chip uthata rehta hai.'],
      ['Autopilot eating', 'Laptop par video, haath packet me: dhyaan kahin aur ho to dimaag gin hi nahi paata kitna kha liya. Rukne ka signal packet ka khaali hona ban jaata hai, pet ka bharna nahi.']
    ],
    kaise: [
      'Cue: raat, padhai ka stress, "kuch chabane" ka mann.',
      'Bada packet haath me: rukne ka koi natural break point nahi.',
      'Swaad aur crunch ka mix dimaag ko bore nahi hone deta.',
      'Screen par dhyaan, haath autopilot par.',
      'Packet khaali hone par hi "stop", aur phir guilt.'
    ],
    irada: 'Yahan <b>jaanbujh kar</b> kaam kaun kar raha hai? Snack companies. Unki R&D teams taste test karke soch-samajh kar swaad, namak, crunch aur packet size tay karti hain, taaki product baar baar khareeda jaaye. Ye unka business hai, koi saazish nahi, par unka irada saaf hai. Sana ki taraf se khana <b>anjaane me</b> hota hai: wo packet khatam karne ka plan nahi bana rahi thi.',
    gap: 'Sana jaanti hai chips "healthy" nahi hain. Par ye jaankari packet kholne se pehle kaam karti hai, packet khulne ke baad nahi. Ek baar swaad shuru ho gaya to faisla dimaag ka wo hissa leta hai jo mazaa dhoondhta hai, hisaab nahi lagata. Isliye "bas thoda sa" ka plan aksar packet ke saath hi khatam hota hai.',
    real: ['NIH ka ultra-processed food study (Kevin Hall aur saathi, 2019)', 'USA ke National Institutes of Health me 20 adults ko do-do hafte do tarah ka khana diya gaya: ek ultra-processed, ek kam processed. Dono me calories, cheeni, fat aur fibre milte-julte rakhe gaye, aur log jitna chahein utna kha sakte the. Ultra-processed wale hafton me log roz lagbhag 500 calories zyada kha gaye aur unka wazan badha. Study chhoti thi, par ek tight controlled lab setting me hui thi.'],
    fix: [
      '<b>Packet nahi, katori</b>: thoda sa katori me nikaalo, packet band karke door rakh do. Rukne ka point khud banao.',
      '<b>Chhote packets kharido</b>: ₹10 wala packet khud ek "stop" hai.',
      '<b>Screen ke saath nahi</b>: khaate waqt sirf khao. Dhyaan wapas aayega to "bas" ka signal bhi time par aayega.',
      '<b>Pehle poocho</b>: "Bhookh hai, ya bas bore/stressed hoon?" Agar bore ho to paani, chai ya 5 minute walk try karo.',
      '<b>Crunch ka option</b>: bhuna chana, makhana ya kheera bhi crunch dete hain, aur jaldi pet bharte hain.'
    ],
    teacher: 'Agla packet kholte waqt yaad rakhna: tumhare saamne ek team ka saalon ka research hai. Haar jaana sharm ki baat nahi. Bas packet ki jagah katori use karo, aur jeet tumhari taraf jhukne lagegi.',
    chapters: ['sensation-perception', 'motivation', 'dark-patterns'],
    tags: ['chips', 'junk food', 'bliss point', 'food industry', 'satiety', 'snacking']
  });

  S({
    id: 'detox-tea-ummeed', cat: 'sehat', level: 2, kind: 'jaanbujh',
    title: 'Detox tea aur "magic" supplement par log itna bharosa kyun kar lete hain?',
    hook: '21 din, ₹2,499, aur "toxins bahar". Wazan 2 kilo gira, 10 din me wapas aa gaya.',
    story: [
      'Jaipur ki Meenal, 29 saal, cousin ki shaadi se teen mahine pehle "thoda slim" hona chahti thi. Instagram par ek fitness page ki post dikhi: "21-day Detox Tea Challenge". Before-after photos, saath me sau se zyada comments: "Meri belly fat gayab!", "Sabse best product!". Neeche likha tha: "100% natural, ayurvedic, toxins flush out karo." Price ₹2,499, "sirf aaj 40% off". Meenal ne order kar diya.',
      'Pehle hafte me 2 kilo kam hue. Meenal khush: "Dekha, kaam kar raha hai!" Par chai peene ke baad din me kai baar washroom bhaagna padta, aur office meeting me pet me marod. Teesre hafte chai band ki, 10 din me wazan wapas. Meenal ki dost Rukhsana ne ingredients padhe: usme senna tha, jo ek laxative hai. Meenal boli: "Par itne logon ka kaam kiya, mera kyun nahi? Shayad maine diet theek se follow nahi ki."'
    ],
    guess: ['Meenal ke 2 kilo kam kyun hue?', ['Detox tea ne body ke toxins nikaal diye', 'Laxative aur kam khaane se zyada tar paani aur pet ka saaman nikla, fat nahi', 'Ayurvedic herbs ne metabolism tez kar diya'], 1, 'Taraazu ne kam dikhaya, par fat nahi gaya tha. Isliye wazan utni hi jaldi wapas aaya.'],
    kya: 'Log "detox", "fat burner", "magic powder" jaise products par bharosa kar lete hain, khaas kar jab koi deadline (shaadi, photo, vacation) ho. Kaam na kare to dosh product ko nahi, khud ko dete hain.',
    kyun: [
      ['Body ka apna detox system', 'Hamara <b>liver aur kidneys</b> har din, har minute khoon saaf karte hain. Ek healthy body me "toxins jama ho kar" chai se nikalne wali koi cheez nahi hoti. "Detox" ek marketing shabd hai jiska koi saaf medical matlab nahi diya jaata, isliye use galat saabit karna bhi mushkil hai.'],
      ['Social proof aur testimonials', 'Sau comments aur before-after photos dekh kar dimaag sochta hai "itne log galat nahi ho sakte". Par wo comments chune hue hote hain: jinpar kaam nahi hua, wo post nahi karte. Ye <b>survivorship bias</b> hai. Photos me lighting, angle, pose aur paani ka wazan bhi bada farak daalte hain.'],
      ['Confirmation bias aur hope', 'Meenal paisa aur ummeed dono laga chuki thi. Pehle hafte ka 2 kilo "dekha, kaam kar raha hai" ban gaya. Jab wazan wapas aaya, to dimaag ne product ki jagah khud ko dosh diya ("maine diet theek se nahi ki"). Ummeed jitni badi, sach dekhna utna mushkil.'],
      ['Scarcity aur deadline', '"Sirf aaj 40% off" aur shaadi ki deadline: dono milkar sochne ka time chheen lete hain. Jaldi me liya faisla zyada emotional hota hai.']
    ],
    kaise: [
      'Insecurity ka moment: shaadi, photo, kisi ka comment.',
      'Ad ek aasaan wada deta hai: kam mehnat, kam time, "natural".',
      'Testimonials aur before-after se bharosa, timer se jaldi.',
      'Laxative ya kam khaane se taraazu par turant farak: "kaam kar raha hai!"',
      'Product band, wazan wapas, aur dosh khud par. Kai log agla product le aate hain.'
    ],
    irada: 'Bechne wala <b>jaanbujh kar</b> ummeed bech raha hai: "detox" jaisa shabd, chuni hui photos, timer aur testimonials sab soch-samajh kar lagaye gaye hain. Kai promoters ko paise milte hain par wo saaf nahi batate ki post sponsored hai. Meenal <b>anjaane me</b> fasti hai: wo bewakoof nahi hai, bas jaldi me hai aur ummeed karna chahti hai.',
    gap: 'Meenal ko "kahin" pata tha ki 21 din me jaadu nahi hota. Par jab koi cheez hamari insecurity ko chhooti hai, to dimaag sabooth nahi, sukoon dhoondhta hai. "Shayad ye wala alag ho" wali soch pichhli har nakaami ko bhula deti hai.',
    real: ['"Detox" ka matlab poochne wala experiment (Sense About Science, 2009)', 'UK ki sanstha Sense About Science se jude young scientists ne 2009 me kai "detox" products banane wali companies se poocha ki detox ka matlab kya hai aur kaun se toxins nikalte hain. Koi bhi company saaf jawab ya sabooth nahi de paayi. India me ASCI (Advertising Standards Council of India) ke 2021 ke guidelines kehte hain ki influencers ko paid promotion par saaf label (jaise #ad) lagana chahiye.'],
    fix: [
      '<b>Teen sawaal poocho</b>: "Kaunsa toxin? Kahan se nikla? Kis study me?" Jawab gol-mol ho to ruko.',
      '<b>Ingredients padho</b>: senna jaise laxative ho to samjho wazan paani ka girega, fat ka nahi.',
      '<b>#ad aur discount code dekho</b>: promoter ko paisa mil raha ho to review ek ad hai.',
      '<b>Deadline ke liye bhi asli rasta</b>: thoda kam khana, protein aur sabzi zyada, roz chalna, neend. Dheema hai, par tikta hai.',
      '<b>Doctor ya registered dietitian se poocho</b>, khaas kar agar koi dawai chal rahi ho ya pregnancy ho.'
    ],
    teacher: 'Jo cheez "bina mehnat, jaldi aur 100% natural" teeno ek saath wada kare, use dekh kar dimaag me ek chhoti si ghanti bajni chahiye. Ummeed rakhna galat nahi; bas use bechne walon ke haath me mat do.',
    chapters: ['attitudes-persuasion', 'critical-thinking', 'scam-psychology'],
    tags: ['detox', 'supplement', 'influencer', 'weight loss', 'testimonial', 'pseudoscience']
  });

  S({
    id: 'doctor-se-sach-chhupana', cat: 'sehat', level: 3, kind: 'jaanbujh',
    title: 'Patient doctor se jaanbujh kar sach kyun chhupate hain, jabki nuksaan unka hi hai?',
    hook: '"Sharab to nahi peete na?" "Nahi doctor sahab." Aur BP ki dawai ka dose teesri baar badh gaya.',
    story: [
      'Mangaluru ke Prakash Shetty, 54 saal, bank se retire hone wale hain. Do saal se BP ki dawai chal rahi hai, par BP control me nahi aata. Har mahine OPD me 4-5 minute milte hain. Doctor Fernandes report dekhte hue poochte hain: "Dawai roz le rahe ho na? Sharab-cigarette to nahi?" Prakash muskura kar kehte hain: "Bilkul nahi, sab theek hai." Sach ye hai ki weekend par 3-4 peg hote hain, cigarette phir shuru ho gayi hai, aur jis din peena ho, us din wo dawai skip kar dete hain, kyunki kisi ne bataya tha "dono saath lena khatarnaak hai".',
      'Patni Sunita sab jaanti hai. Ek baar doctor ke saamne bolne wali thi, par Prakash ki nazar dekh kar chup ho gayi: "Bahar ke aadmi ke saamne inki izzat kam nahi karni." Doctor ko lagta hai dawai kaam nahi kar rahi, to wo dose badhate hain, phir ek nayi dawai jodte hain. Ek din bina sharab wale din dono dawaiyan poori le kar Prakash ko chakkar aaya aur bathroom me gir gaye. Hospital me naye doctor ne aaram se, bina judge kiye poocha. Tab pehli baar poori kahani bahar aayi.'
    ],
    guess: ['Prakash ke BP ka asli masla kya tha?', ['Dawaiyan kamzor thi, aur strong dawai chahiye thi', 'Doctor ke paas galat jaankari thi, isliye har faisla galat base par ho raha tha', 'Prakash ki body dawai ka asar nahi leti'], 1, 'Doctor ka har faisla sahi tha, us jaankari ke hisaab se jo use di gayi thi. Galat thi jaankari.'],
    kya: 'Bahut se patients doctor se apni aadatein (sharab, cigarette, tambaaku), dawai skip karna, ya doctor ki salah se asehmati chhupa lete hain. Wo jaante hain ki sach nahi bol rahe. Isse galat diagnosis, galat dose aur khatarnaak side effects ho sakte hain.',
    kyun: [
      ['Social desirability bias', 'Hum doosron ke saamne "achhe" dikhna chahte hain. Doctor ek authority hai, aur "nahi peete" bolna Prakash ko ek achha patient banata hai. Ye jawab sach ke liye nahi, image ke liye diya jaata hai.'],
      ['Shame aur judgement ka dar', 'Patient lecture, daant ya "aapki galti hai" wali nazar se bachna chahta hai. Shame insaan ko chhupne par majboor karta hai, sudhaarne par nahi. Prakash ko lagta tha sach bolna = khud ko kamzor maan lena.'],
      ['Sawaal ki banawat', '"Sharab to nahi peete na?" jaisa sawaal pehle se "nahi" ki ummeed rakhta hai. Isse sach bolna aur mushkil ho jaata hai. "Hafte me kitni baar peete ho?" jaisa normal sawaal sach ko aasaan banata hai. Rush OPD me ye farak aksar chhoot jaata hai.'],
      ['Parivaar ki chuppi', 'Sunita ne izzat bachane ke liye chuppi rakhi. Parivaar ka "ghar ki baat ghar me" wala niyam yahan sehat ke khilaaf kaam karta hai. Ek teesri jaankari ki line bhi band ho gayi.']
    ],
    kaise: [
      'Aadat ya dawai skip karna shuru hota hai, aksar kisi aadhi-adhoori jaankari se ("dono saath khatarnaak").',
      'Doctor ka chhota, leading sawaal aur shame milkar "sab theek hai" bulwa dete hain.',
      'Doctor galat base par dose badhata ya nayi dawai jodta hai.',
      'Parivaar chup rehta hai; jhooth har visit ke saath pakka hota jaata hai.',
      'Koi side effect ya emergency (chakkar, girna) aakhir sach bahar laati hai, kaafi nuksaan ke baad.'
    ],
    irada: 'Prakash <b>jaanbujh kar</b> sach chhupa rahe hain: unhe pata hai wo peete hain aur dawai skip karte hain, aur wo soch-samajh kar "nahi" bolte hain. Unka maqsad doctor ko nuksaan pahunchana nahi, apni image aur shame se bachna hai. Sunita bhi <b>jaanbujh kar</b> chup hai, izzat ke liye. Doctor ka leading sawaal <b>anjaane me</b> chuppi ko aasaan bana deta hai: wo bas time ki kami me jaldi kar rahe hain.',
    gap: 'Prakash jaante hain ki doctor ko sach pata hona chahiye. Par us ek pal me sach ki keemat turant hai (sharam, lecture), aur jhooth ki keemat door aur dhundhli (kabhi baad me, shayad). Dimaag turant wala dard taalne ko zyada wazan deta hai, chahe baad wala dard kahin bada ho.',
    real: ['Patients doctor se kya chhupate hain (Levy aur saathi, JAMA Network Open, 2018)', 'USA me do bade online surveys (hazaaron log) me 81% aur 61% logon ne maana ki unhone kabhi na kabhi doctor se koi zaroori jaankari chhupayi. Sabse aam baatein: doctor ki salah se asehmat hona aur instructions samajh na aana. Sabse aam wajah: judge kiye jaane ya lecture sunne ka dar, aur sharam. Ye self-reported online survey tha, to asli tasveer thodi alag ho sakti hai.'],
    fix: [
      '<b>Patient ke liye script</b>: "Doctor, ek baat pichhli baar nahi batayi: weekend par drink hota hai, aur us din dawai chhoot jaati hai." Doctor ke liye ye jaankari hai, character certificate nahi.',
      '<b>Pehle se likh kar le jao</b>: dawai kab chhooti, kya side effect hua, kitna peete ya smoke karte ho. Kaagaz dikhana bolne se aasaan lagta hai.',
      '<b>Doctor aur health workers ke liye</b>: "Kya" nahi, "kitna" poocho: "Hafte me kitne din drink hota hai?" Aur jawab par react mat karo, note karo.',
      '<b>Parivaar ke liye</b>: patient ke saamne aaram se kaho, "Main bhi saath hoon, doctor ko poori baat batate hain." Akele me doctor ko bataana bhi ek rasta hai.',
      '<b>Sharab chhodna mushkil lag raha ho</b> to ye kamzori nahi, ek medical masla hai: doctor se seedha baat karo, ya Tele-MANAS (14416) par free, confidential salah lo. Emergency me 112.'
    ],
    teacher: 'Doctor ke paas jaao to apni sehat ka poora data le kar jaao, achhi image nahi. Doctor sirf utna hi theek kar sakta hai jitna use pata hai.',
    chapters: ['social-cognition', 'emotion', 'getting-help'],
    tags: ['doctor', 'patient', 'jhooth', 'sharab', 'dawai', 'shame', 'social desirability']
  });

  S({
    id: 'shaadi-thoda-aur-lo', cat: 'sehat', level: 1, kind: 'dono',
    title: 'Shaadi aur party me "arre thoda aur lo" sun kar hum zyada kyun kha lete hain?',
    hook: 'Pet keh raha tha "bas", par mausi ne teesri baar gulab jamun plate me rakh diya.',
    story: [
      'Indore me Vikram ki mausi ke ghar griha pravesh ki puja thi. Vikram, 32 saal, doctor ne kuch hafte pehle sugar "borderline" bataya tha. Usne socha tha: "Aaj ek plate, mithai bas ek."',
      'Khaana shuru hua. Mausi khud plate le kar ghoom rahi thi: "Arre Vikram, itna sa? Ek puri aur lo. Ye kachori maine khud banayi hai." Vikram ne mana kiya, to mausi boli: "Hamare ghar aa kar sharma rahe ho? Mere haath ka nahi khaoge?" Bagal me baithe chacha teesri plate le rahe the. Vikram ne bhi le liya. Phir gulab jamun, phir doosra, kyunki "shubh mauka hai." Ghar aate waqt pet bhaari tha aur mann me ek hi line: "Phir se ho gaya."'
    ],
    guess: ['Vikram zyada kyun kha gaya?', ['Khaana bahut swadisht tha, isliye', 'Mana karna mausi ko "na" bolne jaisa laga, aur sab ko khaate dekh kar dimaag ne bhi wahi kiya', 'Vikram ko us din zyada bhookh thi'], 1, 'Plate me khaana pet ki bhookh se nahi, rishton ke dabaav aur aas-paas ke logon se bhara gaya.'],
    kya: 'Shaadi, puja, party me log apne plan se kahin zyada kha lete hain. Mezbaan pyaar se zor dete hain, aur mehmaan "na" bolne ko badtameezi samajh kar le lete hain.',
    kyun: [
      ['Social facilitation of eating', 'Research me ye baar baar dikha hai ki log doosron ke saath, khaas kar dost aur parivaar ke saath, akele ke mukable zyada khaate hain. Khaana lamba chalta hai, baatein hoti hain, aur plate bharti rehti hai.'],
      ['Modeling (doosron ko dekh kar khaana)', 'Hum anjaane me aas-paas ke logon ki speed aur matra copy karte hain. Chacha ki teesri plate ne Vikram ke dimaag me "normal" ki line hi badal di.'],
      ['Pyaar aur "na" ka dar', 'Bharat me khilana pyaar aur izzat dikhane ka tareeka hai. Mausi ke liye "aur lo" = "tum mere apne ho". Vikram ke liye "na" bolna = mausi ka dil todna. Isliye wo pet ki nahi, rishte ki sun raha tha.']
    ],
    kaise: [
      'Mezbaan pyaar se, khud plate le kar zor deta hai.',
      'Mehmaan pehli baar "na" bolta hai, mezbaan emotional line bolta hai.',
      'Aas-paas sab kha rahe hain: zyada khaana normal lagne lagta hai.',
      'Mehmaan haar maan kar "chalo thoda sa" bolta hai, aur ye baar baar hota hai.',
      'Baad me pet bhaari aur guilt.'
    ],
    irada: 'Mausi <b>jaanbujh kar</b> zor de rahi thi: unhe pata hai wo Vikram ko aur khilana chahti hain, aur emotional line ("mere haath ka nahi khaoge?") soch kar bolti hain. Par unka irada pyaar hai, nuksaan nahi. Vikram <b>anjaane me</b>, aadat se hi plate badhata gaya: dimaag rishte aur bheed ko follow kar raha tha, apna plan nahi.',
    gap: 'Vikram ko apni sugar report yaad thi. Par party me faisla ek baar nahi, dus baar lena padta hai, har baar kisi ke pyaar ke saamne. Har "na" thoda thakata hai, aur ek point par "chalo, aaj ke din" jeet jaata hai.',
    real: ['Doosron ke saath khaane par research (de Castro; Herman, Roth aur Polivy, 2003)', 'Psychologist John de Castro ne logon ki roz ki food diaries se dikhaya ki jab log doosron ke saath khaate the to unke meal akele ke meals se kaafi bade hote the. Peter Herman, Deborah Roth aur Janet Polivy ke 2003 ke review ne aisi kai studies jodi aur bataya ki doosre log hamare khaane ki matra ko bahut zyada prabhavit karte hain, aur hum ise aksar maante bhi nahi.'],
    fix: [
      '<b>Pyaar se, saaf "na"</b>: "Mausi, aapke haath ka khaana to best hai! Bas doctor ne meetha kam bola hai, ek gulab jamun aapke naam ka khaa liya." Taareef + wajah + chhota haan.',
      '<b>Plate thodi bhari rakho</b>: khaali plate dekh kar hi log aur daalte hain. Plate me thoda sa rehne do.',
      '<b>Pehle plan, phir party</b>: jaane se pehle tay karo "ek mithai, ek roti kam". Pehle se liya faisla dabaav me tikta hai.',
      '<b>Dheere khao, baaton me raho</b>: plate dheere khatam hogi, to refill kam hoga.',
      '<b>Mezbaan ho to</b>: "aur lo" ek baar bolo, phir mehmaan ki "na" maan lo. Ye bhi pyaar hai.'
    ],
    teacher: 'Mausi ka pyaar plate ki matra se nahi naapa jaata. Ek pyaar bhari "na" rishta nahi todti, aur sehat ka khayal rakhna bhi unke liye khushi ki baat hogi.',
    chapters: ['conformity-obedience', 'culture-psychology', 'motivation'],
    tags: ['shaadi', 'party', 'khaana', 'social pressure', 'overeating', 'mehmaan']
  });

  /* ---------- Galti: jaante huye bhi ---------- */

  S({
    id: 'red-light-koi-nahi-dekh-raha', cat: 'galti', level: 1, kind: 'jaanbujh',
    title: 'Red light par koi nahi dekh raha, to signal tod diya. Pata tha galat hai, phir bhi kyun?',
    hook: 'Raat ke 11:40. Khaali chauraha. Laal batti 90 second ki. "Kaun dekh raha hai?"',
    story: [
      'Hyderabad. Raat ke 11:40. Karthik Reddy, 26 saal, office se bike par ghar ja raha tha. Chauraha bilkul khaali, signal laal, timer par 90 second. Bagal me ek scooter wala ruka, idhar-udhar dekha aur nikal gaya.',
      'Karthik ne socha: "Na traffic hai, na police. 90 second baith kar kya karunga? Sab to tod rahe hain." Usne bhi dekha, accelerator ghumaya aur nikal gaya. Agle din apne chhote cousin ko scooter chalana sikhate hue wahi Karthik bol raha tha: "Signal kabhi mat todna, chahe koi ho ya na ho."'
    ],
    guess: ['Karthik ne signal kyun toda?', ['Use traffic rules pata hi nahi the', 'Usne khud ko samjha liya ki "is baar" risk zero hai aur sab yahi karte hain', 'Wo bahut jaldi me tha'], 1, 'Karthik ko rule pata tha, aur doosron ko sikha bhi raha tha. Usne bas us pal ke liye ek "exception" bana liya.'],
    kya: 'Log rule jaante hain, use sahi bhi maante hain, phir bhi jab koi dekh na raha ho to tod dete hain. Aur turant ek wajah bhi bana lete hain: "khaali tha", "sab karte hain", "bas ek baar".',
    kyun: [
      ['Rationalisation', 'Galat kaam se pehle ya baad dimaag ek "theek-thaak" wajah dhoondh leta hai, taaki hum khud ko achha insaan maante rahein. "Khaali road par signal ka koi matlab nahi" Karthik ki apni banayi wajah thi.'],
      ['Kam dikhne wala risk', 'Khaali road par risk zero lagta hai. Par raat ko hi kai haadse hote hain: ek gaadi tez aa rahi ho jo dikhi na ho, ya koi pedestrian andhere me ho. Dimaag "abhi kuch nahi dikh raha" ko "kuch nahi hoga" samajh leta hai.'],
      ['Descriptive norm', 'Scooter wale ko jaate dekh kar Karthik ke dimaag me signal ka matlab badal gaya: "yahan to log aise hi karte hain." Doosre kya karte hain, wo hamare liye "normal" tay karta hai, chahe rule kuch bhi kahe.']
    ],
    kaise: [
      'Situation: khaali road, lamba signal, thakaan.',
      'Koi aur todta hai: "normal" ki line khisak jaati hai.',
      'Dimaag wajah banata hai: "koi risk nahi, koi nahi dekh raha."',
      'Signal toda, kuch nahi hua: agli baar ye aur aasaan.',
      'Doosron ko wahi rule sikhate waqt koi takraav nahi lagta.'
    ],
    irada: 'Karthik ne <b>jaanbujh kar</b> signal toda: use pata tha laal batti hai, rule pata tha, aur usne soch kar faisla liya. Ye bhool nahi thi, ek choice thi. Wo bura insaan nahi hai; bas us pal usne apne liye ek chhoot le li.',
    gap: 'Hum sab ke andar "rule sahi hai" aur "par mere liye abhi chalta hai" dono ek saath reh sakte hain. Rule ka fayda dhundhla aur door lagta hai (kisi din haadsa ruk jaata hai), aur 90 second ka intezaar abhi, saamne. Jab koi dekh na raha ho, to sirf hamara apna iraada bachta hai, aur thaka dimaag use aasaani se jhuka deta hai.',
    real: ['Signal todne wale ko dekh kar log bhi todte hain (Lefkowitz, Blake aur Mouton, 1955)', 'Texas me ek classic field study me ek aadmi jaanbujh kar "Don\'t walk" signal par road paar karta tha. Jab wo achhe suit me hota tha, to zyada log uske peeche signal tod dete the, purane kapdon wale ke mukable. Matlab, doosron ka rule todna, khaas kar "izzatdaar" dikhne walon ka, hamare liye rule todna aasaan bana deta hai.'],
    fix: [
      '<b>Pehle se tay rule</b>: "Laal matlab ruko. Khaali ho ya bhara." Har baar sochna hi nahi padega, to excuse ki jagah nahi bachegi.',
      '<b>Intezaar ko kaam do</b>: 90 second me ek gaana, ek gehri saans, ya ghar ka plan. Intezaar khaali lage to todne ka mann zyada hota hai.',
      '<b>Khud se sawaal</b>: "Agar mera chhota cousin ye dekh raha hota, to kya karta?" Kisi ke dekhne ka khayal hi bahut kuch badal deta hai.',
      '<b>Doosron ko dekh kar mat chalo</b>: agla wala tode, tab bhi ruko. Shayad tumhe dekh kar teesra bhi ruk jaaye.'
    ],
    teacher: 'Character wahi hai jo hum tab karte hain jab koi nahi dekh raha. Achhi baat ye hai ki use roz ke chhote faislon me banaya ja sakta hai, aur laal batti utni hi achhi jagah hai jitni koi aur.',
    chapters: ['social-cognition', 'conformity-obedience', 'thinking-decisions'],
    tags: ['traffic', 'red light', 'rule', 'rationalisation', 'norms', 'signal']
  });

  S({
    id: 'ek-jhooth-se-teen', cat: 'galti', level: 2, kind: 'jaanbujh',
    title: 'Ek chhota jhooth chhupane ke liye doosra, phir teesra. Ye silsila kyun nahi rukta?',
    hook: '"Report almost ready hai" se shuru hua tha. Teen din baad IT team, client aur HR sab kahani me the.',
    story: [
      'Pune ki ek company me Neha Joshi, 27 saal, analyst hai. Somvaar ko team lead Abhishek ne poocha: "Neha, wo quarterly report kahan tak pahunchi?" Neha ne abhi shuru bhi nahi kiya tha. Muh se nikla: "Almost ready hai, kal bhej dungi." Mangalwaar raat tak report aadhi bhi nahi hui.',
      'Budhwar subah Neha ne mail kiya: "Laptop crash ho gaya, file corrupt ho gayi. Dobara bana rahi hoon." Abhishek ne helpfully IT ko CC kar diya: "Neha ka data recover karo." IT wale Imran ne call kiya: "Ma\'am, laptop de dijiye, check karte hain." Neha ne kaha: "Ghar par chhod aayi." Ab ek jhooth ke liye teen aur jhooth. Shukravaar ko client call me Abhishek ne bata diya ki "data loss" hua hai. Neha raat bhar report banati rahi, par uske pet me ek ajeeb si gaanth thi, aur ajeeb baat ye ki teesra jhooth bolte waqt pehle jitna bura nahi laga tha.'
    ],
    guess: ['Neha ne pehle din hi sach kyun nahi bola?', ['Wo ek jhoothi insaan hai', 'Pehla jhooth ek chhota, turant ka bachav tha, aur har agla jhooth pichhle ko bachane ke liye zaroori lagne laga', 'Use naukri jaane ka pakka dar tha'], 1, 'Silsila ek bade faisle se nahi, chhote-chhote "abhi ke liye" faislon se banta hai.'],
    kya: 'Log ek chhota jhooth bolte hain (deadline, ghar par, dosti me), phir use bachane ke liye doosra, teesra. Har kadam pe sach bolne ki keemat badhti jaati hai, aur jhooth bolna aasaan lagta jaata hai.',
    kyun: [
      ['Brain ka dhalna (emotional adaptation)', 'Pehla jhooth bolte waqt jo ghabrahat aur bura lagna hota hai, wo dimaag ka ek warning signal hai. Research batata hai ki baar baar apne fayde ke liye jhooth bolne par ye signal dheema padta jaata hai. Isliye Neha ko teesra jhooth pehle jitna bura nahi laga.'],
      ['Consistency ka dabaav', 'Ek baar "almost ready" bol diya to uske baad har baat usi kahani se mel khani chahiye. Kahani ko sachcha dikhane ke liye nayi details judti hain: crash, corrupt file, laptop ghar par.'],
      ['Sach ki badhti keemat', 'Pehle din sach ki keemat thi: "Abhi shuru nahi kiya, Thursday tak dungi." Teesre din sach ka matlab tha teen jhooth maanna, IT aur client ke saamne bhi. Jitna aage jaao, peeche lautna utna mehenga lagta hai, to dimaag aage hi chalta hai.'],
      ['Doosre log kahani badha dete hain', 'Abhishek ne madad ke liye IT ko joda, client ko bataya. Achhe iraade wale logon ne anjaane me jhooth ko aur bada aur pakka kar diya.']
    ],
    kaise: [
      'Sharam ya dar ka ek pal: pehla chhota jhooth.',
      'Jhooth ki ek detail khulne lagti hai: use bachane ke liye doosra jhooth.',
      'Doosre log (boss, IT, client) shaamil: kahani public ho jaati hai.',
      'Har jhooth ke saath andar ka "bura lagna" thoda kam.',
      'Sach bolna ab bahut mehenga lagta hai, to silsila chalta rehta hai, ya kabhi achanak toot jaata hai.'
    ],
    irada: 'Neha <b>jaanbujh kar</b> har jhooth bol rahi hai: use pata hai report shuru nahi hui thi aur laptop crash nahi hua. Uska maqsad kisi ko nuksaan nahi, bas apni image aur us din ki sharam se bachna hai. Abhishek aur Imran <b>anjaane me</b> kahani ka hissa ban gaye.',
    gap: 'Neha jaanti hai ki jhooth pakda ja sakta hai aur sach behtar hai. Par har moment me faisla ye nahi hota ki "sach ya jhooth", balki ye hota hai ki "aaj sharam jhelo, ya kal tak taal do". Taalna hamesha aasaan lagta hai. Aur jab dimaag ka warning signal dheema ho jaata hai, to agla jhooth "itna bura nahi" lagta.',
    real: ['"The brain adapts to dishonesty" (Garrett, Lazzaro, Ariely aur Sharot, Nature Neuroscience, 2016)', 'Is study me logon ko ek task me apne fayde ke liye jhooth bolne ka mauka diya gaya aur unka brain scan (fMRI) kiya gaya. Jo log baar baar jhooth bolte gaye, unke amygdala (emotion se juda hissa) ka response har jhooth ke saath kam hota gaya, aur unke jhooth bhi bade hote gaye. Study chhoti aur lab setting me thi, par ye "slippery slope" ka ek brain-level sabooth deti hai.'],
    fix: [
      '<b>Pehle jhooth se pehle ka pause</b>: jab sawaal achanak aaye, kaho "Ek minute, check karke batana theek rahega" ya simply "Dopahar tak exact update mil jaayega." Time lo, jhooth mat lo.',
      '<b>Aadhe sach ki script</b>: "Sach batau to abhi shuru nahi kiya. Thursday tak pakka bhejna possible hai." Ye sunne me bura lagta hai, par iska silsila nahi banta.',
      '<b>Jaldi palto</b>: agar ek jhooth bol diya, to agle 24 ghante me sudhaar lo: "Kal maine galat bola tha, asal me..." Pehle din ki maafi teesre din ki maafi se kahin sasti hai.',
      '<b>Leaders ke liye</b>: bura update laane wale ko daanto mat. Jahan sach bolna safe hai, wahan jhooth ka silsila shuru hi kam hota hai.'
    ],
    teacher: 'Agla jhooth bolne se pehle khud se poocho: "Ise bachane ke liye kitne aur bolne padenge?" Ek chhota sach aaj chubhega, par kal ka pahaad usse bahut bhaari hoga.',
    chapters: ['emotion', 'brain-structure', 'social-cognition'],
    tags: ['jhooth', 'lying', 'office', 'slippery slope', 'amygdala', 'honesty']
  });

  S({
    id: 'sab-karte-hain-chhoti-chori', cat: 'galti', level: 3, kind: 'jaanbujh',
    title: 'Achhe log bhi "sab karte hain" bol kar bill aur expense claim me chhoti chori kyun kar lete hain?',
    hook: 'Family dinner ka bill "client meeting" ban gaya. Kisi ne nahi poocha, kyunki sab yahi karte the.',
    story: [
      'Bengaluru ki ek mid-size company ki sales team. Farah Siddiqui, 24 saal, ka pehla mahina. Expense claim bharne baithi to senior Ravi Menon ne madad ki: "Auto ka bill nahi milta, to ₹200 roz daal do, sab daalte hain. Aur Saturday ka dinner client wale code me daal dena, manager bhi wahi karte hain." Farah ne dekha, Ravi ke claim me family ke saath gaye restaurant ka ₹3,800 ka bill "client lunch" bana hua tha.',
      'Ravi kharaab aadmi nahi hai. Wo ghar ka EMI bharta hai, mandir me daan deta hai, team ke juniors ki madad karta hai. Uski logic hai: "Company targets ke liye raat 10 baje tak kaam karwati hai, overtime nahi deti. Ye to bas apna hisaab barabar karna hai. Aur itni badi company ko ₹3,000 se kya farak?" Manager Deepak har mahine 40 claims bina padhe approve kar deta hai. Farah ko andar se ajeeb laga, par pehle hi mahine me "ajeeb" banne ka dar bhi tha. Usne ₹200 wala auto daal diya. Teen mahine baad wo Saturday ka dinner bhi daal rahi thi, aur ab utna ajeeb nahi lag raha tha. Ek saal baad internal audit aaya.'
    ],
    guess: ['Ravi jaise "achhe" log ye kaise kar lete hain?', ['Wo andar se bure log hain jo achhe hone ka natak karte hain', 'Wo apne kaam ko aise shabdon aur wajahon me lapet lete hain ki unki "achhe insaan" wali image bachi rahe', 'Unhe pata hi nahi ki ye galat hai'], 1, 'Ravi jaanta hai ye niyam ke khilaaf hai. Bas usne apne dimaag me ise "chori" kehna band kar diya hai.'],
    kya: 'Imaandaar maane jaane wale log bhi expense, bill, tax ya attendance me "chhoti" gadbad kar lete hain. Wo khud ko chor nahi maante, kyunki unke paas har baar ek wajah hoti hai. Ye aadat dheere-dheere badhti hai aur nayi team members tak pahunch jaati hai.',
    kyun: [
      ['Moral disengagement (Albert Bandura)', 'Bandura ne bataya ki log apne morals ko "switch off" kiye bina galat kaam kaise karte hain: <b>naam badal kar</b> ("chori" nahi, "hisaab barabar"), <b>tulna karke</b> ("bade log to crore udate hain"), <b>nuksaan chhota bata kar</b> ("company ko kya farak"), aur <b>zimmedari baant kar</b> ("sab karte hain, manager bhi"). Ravi ke har vaakya me ek mechanism hai.'],
      ['Self-concept maintenance', 'Hum "thoda sa" galat isliye kar lete hain kyunki itne me apni "achha insaan" wali image nahi tootti. Researchers Nina Mazar, On Amir aur Dan Ariely ne ise "fudge factor" jaisa bataya: log poori chori nahi, bas utni karte hain jitni par wo khud ko imaandaar maante reh sakein.'],
      ['Social norms', 'Farah ke liye Ravi aur manager "normal" ki definition the. Naye insaan ke liye group ka niyam kitaab ke niyam se zyada asli lagta hai. "Ajeeb" na lagne ka dar imaandaari ke khayal par bhaari pad gaya.'],
      ['Slippery slope', '₹200 auto se shuru hua, family dinner tak pahuncha. Har chhota kadam pichhle ke baad "bas thoda aur" lagta hai, isliye bada farak kabhi mehsoos hi nahi hota. Bina padhe approve karne wala system ise aur aasaan banata hai.']
    ],
    kaise: [
      'Naya insaan aata hai; senior "sab karte hain" bol kar tareeka sikhata hai.',
      'Chhoti, aasaan gadbad se shuruaat: koi poochta nahi.',
      'Dimaag shabd badalta hai: "chori" se "adjustment" ya "hisaab barabar".',
      'Har mahine thoda aur; pehle wali ghabrahat gayab.',
      'Audit, complaint ya ek naya imaandaar manager: achanak sab "chhoti baat" badi ho jaati hai, naukri aur naam dono par.'
    ],
    irada: 'Ravi aur baad me Farah <b>jaanbujh kar</b> galat claim bharte hain: unhe pata hai bill client ka nahi tha. Par wo apne aap ko ek kahani sunate hain jisme ye chori nahi lagti. Manager Deepak ka bina padhe approve karna bhi ek <b>jaanbujh kar</b> chuni hui laaparwahi hai: use pata hai kya chal raha hai. Company ke niyam saaf na hona aur overtime ka gussa is mahaul ko khaad dete hain.',
    gap: 'Ravi jaanta hai ki policy kya kehti hai. Par imaandaari ka sawaal har baar "kya ye galat hai?" ki tarah nahi aata. Wo aata hai "kya ye itna galat hai?" ki tarah. Aur jab jawab ek group, ek wajah aur ek chhote amount me lipta ho, to dimaag aasaani se "nahi" bol deta hai.',
    real: ['"Sign at the top" study aur uska retraction (2012 se 2021)', '2012 me PNAS me ek mashhoor paper aaya (Shu, Mazar, Gino, Ariely, Bazerman) jisme claim tha ki form ke upar sign karwane se log zyada imaandaari se bharte hain. Baad me khud authors ki team ki bade sample wali study me ye effect dobara nahi mila (2020), aur 2021 me researchers ne paper ke ek insurance data set me gadbad (fabricated data) pakdi. Paper retract ho gaya. Ironically, imaandaari par bani study khud data ki imaandaari par fail hui. Seekh: ek "jaadui trick" par mat tiko; system aur culture dono par kaam karo.'],
    fix: [
      '<b>Apne liye ek line</b>: "Agar ye claim mere naam ke saath company newsletter me chhape, to kya theek lagega?" Jo jawab sharmaye, wo claim nahi.',
      '<b>Senior ko pyaar se na</b>: "Thanks, par jo asli bill hai bas wahi claim me jaayega. Mujhe isi me sukoon hai." Apne baare me bola gaya jawab group par ilzaam nahi lagata, aur tumhari line bhi saaf rehti hai.',
      '<b>Asli shikayat seedhe uthao</b>: overtime ka masla hai to HR ya manager se overtime ki baat karo, bill me nahi.',
      '<b>Organisations ke liye</b>: saaf, aasaan policy (jaise bina receipt auto ke liye fixed allowance), random checks, approvers ke liye chhote claims ka bhi sample review, aur leaders ka khud example banna.',
      '<b>Bolne ka safe rasta</b>: anonymous ethics line ya trusted manager, taaki nayi Farah ko pehle mahine me hi "na" bolne ka sahara mile.'
    ],
    teacher: 'Imaandaari ka asli test bade scam me nahi, ₹200 ke auto bill me hota hai. Wahan apni line khud tay karo, kyunki baaki sab line dheere-dheere wahi se khisakti hain.',
    chapters: ['social-cognition', 'conformity-obedience', 'applied-psychology'],
    tags: ['expense claim', 'chori', 'moral disengagement', 'bandura', 'office', 'ethics', 'sab karte hain']
  });

  S({
    id: 'ek-aur-peg-kal-meeting', cat: 'galti', level: 1, kind: 'dono',
    title: '"Chal ek aur peg, kuch nahi hota" sun kar haan kyun nikal jaata hai, jabki kal subah meeting hai?',
    hook: '9:30 baje socha tha "do drink, 11 baje ghar". Raat 1:15 par cab book ho rahi thi.',
    story: [
      'Kolkata me Shubham, 30 saal, college ke dost Anirban ki promotion party me tha. Agle din subah 9 baje uski ek zaroori client presentation thi. Ghar se nikalte waqt usne khud se kaha: "Do drink, 11 baje ghar, 7 baje uthna hai."',
      'Do drink ho gaye. Anirban ne glass bhar diya: "Arre chal na, ek aur. Itne saal baad mile hain, kuch nahi hota." Sab hans rahe the, purani baatein chal rahi thi. Shubham ne kaha "bas last", phir "achha, ye last". Raat 1:15 par cab book hui. Subah alarm teen baar snooze hua, sir bhaari tha, aur presentation ki pehli slide par hi wo atak gaya.'
    ],
    guess: ['Shubham ka plan kyun toota?', ['Use apne kaam ki parwaah nahi hai', 'Dost ke dabaav ke saath, har drink ke baad "kal" aur dhundhla hota gaya aur "abhi ka mazaa" aur saaf', 'Drinks bahut strong the'], 1, 'Plan 9:30 wale Shubham ne banaya tha, par faisle 12 baje wale Shubham ne liye.'],
    kya: 'Log party me drinks ki ek limit soch kar jaate hain, par doston ke "ek aur" aur maahaul me wo limit baar baar khisakti rehti hai, chahe agle din kuch zaroori ho.',
    kyun: [
      ['Present bias', 'Dimaag "abhi" ke mazaa ko "kal" ke nuksaan se zyada wazan deta hai. 12 baje doston ki hansi saamne thi, subah ki presentation door ki baat lag rahi thi.'],
      ['Peer pressure aur social norms', '"Kuch nahi hota" aur sab ka glass bhara hona: "na" bolna party kharaab karne jaisa lagta hai. Group me jo normal ho, wahi hum karte hain.'],
      ['Alcohol myopia', 'Psychologists Claude Steele aur Robert Josephs (1990) ne bataya ki sharab dhyaan ko saamne ki cheezon tak simit kar deti hai. Doston ka "ek aur" saaf dikhta hai, kal ki meeting dhundhli ho jaati hai. Har drink agli "na" ko aur mushkil banata hai.']
    ],
    kaise: [
      'Party se pehle saaf plan: "do drink, 11 baje ghar".',
      'Dost glass bharta hai, "kuch nahi hota" bolta hai.',
      'Ek "haan" ke baad har agla "haan" aasaan; kal ka khayal dhundhla.',
      'Plan ka koi exit point nahi tha: ghadi aur glass dono bhool gaye.',
      'Subah thakaan, der, aur kaam par asar.'
    ],
    irada: 'Anirban <b>jaanbujh kar</b> glass bharta hai aur "ek aur" bolta hai: wo party chalti rakhna chahta hai, Shubham ka bura nahi chahta, par use pata hai wo dabaav daal raha hai. Shubham <b>aadha jaanta, aadha autopilot</b> par hai: use pata hai kal meeting hai, phir bhi har "ek aur" bina soche haan me badal jaata hai.',
    gap: 'Shubham ne plan banaya tha, par plan me ye nahi socha tha ki "na" kaise bolega aur kab uthega. Iraade sober dimaag me bante hain; faisle party ke maahaul me hote hain. Bina exit plan ke iraada pehle dabaav par hi jhuk jaata hai.',
    real: ['Alcohol myopia (Steele aur Josephs, American Psychologist, 1990)', 'Claude Steele aur Robert Josephs ne apne review me samjhaya ki sharab "rokne wale" vichaaron (jaise kal ki zimmedari) ko kamzor karti hai aur saamne ke cues (dost, mood, maahaul) ko zyada taakatwar bana deti hai. Isliye pehle se bana plan aur pehle se tay kiya exit point party ke andar ki "willpower" se zyada kaam aate hain.'],
    fix: [
      '<b>Exit pehle tay karo</b>: cab 11 baje ke liye schedule kar do ya kisi dost ko bolo "11 baje mujhe yaad dilana".',
      '<b>Glass bhara rakho</b>: do drink ke baad soda, nimbu paani ya paani. Bhara glass dekh kar "ek aur" kam aata hai.',
      '<b>Seedhi, halki line</b>: "Kal 9 baje client presentation hai, aaj itna hi. Next weekend poori raat pakki!" Wajah + dosti dono.',
      '<b>Dost ho to</b>: ek "na" sunte hi maan lo. Sachcha dost kal ki meeting bhi yaad rakhta hai.',
      '<b>Agar aksar limit toot-ti ho</b> ya peene par control mushkil lage, to kisi doctor se baat karo, ya Tele-MANAS (14416) par free, confidential salah lo.'
    ],
    teacher: 'Party me "na" bolna party kharaab karna nahi, apne kal ko bachana hai. Exit plan pehle bana lo, taaki 12 baje wale khud ko sochna hi na pade.',
    chapters: ['conformity-obedience', 'thinking-decisions', 'motivation'],
    tags: ['party', 'drinks', 'peer pressure', 'present bias', 'alcohol myopia', 'dost']
  });

  S({
    id: 'challenger-pehle-bhi-theek-raha', cat: 'galti', level: 3, kind: 'dono',
    title: 'Risk pata ho, phir bhi "pehle bhi sab theek raha" soch kar organisation aage kyun badh jaati hai?',
    hook: 'Engineers ne raat bhar mana kiya. Agli subah Challenger udaa, aur 73 second baad toot gaya.',
    story: [
      '27 January 1986 ki raat. America ki Morton Thiokol company ke engineers, jo space shuttle ke rocket boosters banate the, NASA ke saath ek teleconference par the. Agle din Florida me bahut thand ki bhavishyavani thi. Engineer Roger Boisjoly aur unke saathi baar baar keh rahe the ki boosters ke joints ko seal karne wali rubber ki <b>O-rings</b> thand me sakht ho jaati hain aur theek se seal nahi kartin. Pichhli udaanon me bhi O-rings ke jalne ke nishaan mile the. Unki salah thi: launch mat karo.',
      'Par pehle bhi nishaan mile the aur shuttle sahi-salamat lauti thi. NASA ki taraf se sawaal aaye, schedule ka dabaav tha. Company ke managers ne alag se baat ki, aur ek senior manager ne engineering head se kaha ki "engineering topi utaar kar management topi pehno". Faisla palat gaya: launch ki manzoori. 28 January ki subah, kaafi thand me, Challenger udaa. 73 second baad wo hawa me toot gaya. Andar baithe saaton log, jinme school teacher Christa McAuliffe bhi thi, maare gaye.',
      'Ye sirf space ki kahani nahi. Ek building contractor jo "pichhli teen buildings me bhi itna hi sariya laga tha" bol kar design se kam lagata hai. Ek hospital ward jahan "itni jaldi me haath dhone ka time kahan" ek aadat ban jaata hai, kyunki ab tak infection nahi phaila. Ek startup jo "pichhli baar bhi bina full testing ke launch kiya, kuch nahi hua" bol kar payment feature live kar deta hai.'
    ],
    guess: ['Challenger ka faisla asal me kis cheez ne liya?', ['Ek-do laaparwah logon ne', 'Saalon me "chhoti gadbad, par kuch nahi hua" ne dheere-dheere risk ko normal bana diya, aur us raat dabaav ne aakhri dhakka diya', 'Engineers ne warning saaf nahi di'], 1, 'Warning saaf thi. Par jo cheez pehle das baar "chal gayi", use gyarahvi baar khatarnaak maanna organisation ke liye sabse mushkil hota hai.'],
    kya: 'Organisations (aur log) jab kisi chhoti gadbad ke saath baar baar bach nikalte hain, to wo gadbad "normal" lagne lagti hai. Phir koi warning de bhi, to "pehle bhi theek raha" ka tark use dabaa deta hai, khaas kar deadline, paise ya izzat ke dabaav me.',
    kyun: [
      ['Normalisation of deviance (Diane Vaughan)', 'Sociologist Diane Vaughan ne apni kitaab "The Challenger Launch Decision" (1996) me ye shabd diya. Matlab: jab niyam se thoda hatna baar baar bina nuksaan ke hota hai, to wo hatna hi naya niyam ban jaata hai. O-ring ke nishaan pehle "khatra" the, phir "jaana-pehchaana, acceptable risk" ban gaye.'],
      ['Outcome bias', 'Hum faisle ko uske nateeje se aankte hain, process se nahi. "Shuttle lauti, matlab faisla sahi tha." Par bach nikalna aur sahi hona alag cheezein hain. Har safal udaan ne galat sabak pakka kiya.'],
      ['Groupthink aur authority ka dabaav', 'Jab schedule, client aur bosses sab ek taraf ho, to "na" bolne wale par sabooth ka bojh aa jaata hai: "saabit karo ki khatra hai", na ki "saabit karo ki safe hai". Engineering topi utaarne wali line ne technical sawaal ko management ka sawaal bana diya.'],
      ['Doosri taraf ka autopilot', 'Kai log us raat ya pehle ke saalon me koi galat iraada nahi rakh rahe the. Wo bas wahi kar rahe the jo hamesha hota aaya tha. Aadat ne sawaal poochna band kar diya tha.']
    ],
    kaise: [
      'Ek chhoti gadbad dikhti hai (O-ring ke nishaan, kam sariya, skip kiya gaya haath dhona).',
      'Kuch bura nahi hota: gadbad "acceptable" maan li jaati hai.',
      'Baar baar bach nikalne se ye naya normal ban jaata hai; documents me bhi.',
      'Ek din halaat badalte hain (bahut thand, bada load, naya feature), koi warning deta hai.',
      'Dabaav me log "pehle bhi theek raha" ko sabooth maan lete hain, aur haadsa hota hai.'
    ],
    irada: 'Ye <b>dono</b> ka mel hai. Us raat launch ki manzoori dene wale managers ke saamne warning thi; unhone <b>jaanbujh kar</b> risk lene ka faisla liya, schedule aur dabaav ko zyada wazan de kar. Par is faisle ki zameen saalon ke <b>autopilot</b> ne banayi thi: logon ne bina soche chhoti gadbad ko normal maan liya tha, kisi bure iraade se nahi, aadat se. Contractor, hospital aur startup ki kahaniyon me bhi yahi hota hai: koi ek shortcut chunta hai, baaki sab aadat se use normal maan lete hain.',
    gap: 'Sab jaante hain "safety pehle". Par roz ke kaam me risk koi ek bada faisla nahi hota; wo sau chhote "is baar chalta hai" se banta hai, aur har ek ke baad kuch bura nahi hota. Jab tak koi haadsa na ho, tab tak sab theek dikhta hai. Isliye warning dene wala "dar phailane wala" lagta hai, aur bach nikalna sabooth.',
    real: ['Challenger (1986) aur Columbia (2003)', 'Challenger ke baad bani Rogers Commission ne paaya ki O-ring ki problem pehle se jaani-pehchani thi aur faisle ke process me khamiyan thi; engineers ki warnings upar tak theek se nahi pahunchi. Vaughan ne apne research me dikhaya ki ye kisi ek villain ki nahi, ek dheere-dheere bane culture ki kahani thi. 2003 me Columbia shuttle ke haadse ki jaanch (CAIB) ne bhi foam girne ki "jaani-pehchani" problem me wahi pattern paaya aur Vaughan ke kaam ka zikr kiya.'],
    fix: [
      '<b>"Pehle bhi chal gaya" ko sabooth mat maano</b>: khud se poocho, "Ye safe hai, ya ab tak bas kismat achhi rahi?"',
      '<b>Sabooth ka bojh palto</b>: risky kaam me sawaal ye ho "saabit karo ki safe hai", na ki "saabit karo ki khatra hai".',
      '<b>Chhoti gadbad ko likho aur gino</b>: near-miss (bal bal bache) bhi report ho. Hospital me checklist, site par independent inspection, startup me release se pehle test checklist.',
      '<b>Bolne walon ko suraksha do</b>: "Kis cheez se ye fail ho sakta hai?" meeting me ek tay sawaal ho. Warning dene wale ko shukriya kaho, chahe baad me kuch na ho.',
      '<b>Dabaav ke waqt rukne ka niyam</b>: jab deadline sabse paas ho, tab safety ka faisla kisi aise insaan ke paas ho jis par us deadline ka seedha bojh na ho.'
    ],
    teacher: 'Agli baar jab koi bole "pehle bhi aise hi kiya tha, kuch nahi hua", to ek pal ruk kar socho: kya ye safe hai, ya bas ab tak kismat achhi rahi hai? Ye ek sawaal kai haadse rok sakta hai.',
    chapters: ['group-behavior', 'conformity-obedience', 'cognitive-biases'],
    tags: ['challenger', 'normalisation of deviance', 'safety', 'groupthink', 'organisation', 'risk', 'diane vaughan']
  });

})();
