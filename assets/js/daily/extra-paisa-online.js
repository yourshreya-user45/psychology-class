/* Roz ki Psychology · Paisa aur online (extra). Format: README.md ("Roz ki Psychology ka format"). */
(function () {
  const S = window.PSY.situation;

  /* ---------- Paisa ---------- */

  S({
    id: 'salary-aate-hi-kharcha', cat: 'paisa', level: 1, kind: 'anjaane',
    title: 'Salary 1 tareekh ko aati hai, aur 20 tareekh tak khatam. Har mahine aisa kyun?',
    hook: 'Mahine ki shuruaat me raja, aakhir me "bhai, UPI kar de, 1 ko lauta dunga".',
    story: [
      'Pune. Imran Shaikh, 26, ek IT company me support engineer. Har mahine 1 tareekh ko phone par message aata hai: "₹48,000 credited." Usi shaam doston ke saath Koregaon Park me dinner, ₹2,200. Agle din nayi earphones, "kab se soch raha tha". Weekend par Lonavala trip. Imran ko kabhi nahi lagta ki wo zyada kharch kar raha hai; account me itna paisa dikh raha hai.',
      'Rent ₹12,000 aur ghar bhejne ke ₹10,000 ke baad bhi 10 tareekh tak sab theek lagta hai. 18 tareekh ko balance ₹3,100. Ab Imran har chai par sochta hai, Swiggy ki jagah Maggi. 26 tareekh ko dost Rahul se ₹2,000 udhaar. "Agle mahine se pakka bachat karunga," wo khud se kehta hai. Ye wo pichhle saat mahine se keh raha hai.',
      'Mazedaar baat: Imran ko apni salary pata hai, rent pata hai, sab hisaab aata hai. Par mahine ke beech me usse kabhi nahi pata hota ki "kitna bacha hai jo kharch kar sakta hoon".'
    ],
    guess: ['Tumhe kya lagta hai, Imran ki asli galti kya hai?', ['Salary kam hai', 'Wo bachat ko "jo bachega" maanta hai, aur dimaag poore balance ko kharch karne layak samajhta hai', 'Imran fizool-kharchi karta hai, use paisa ki kadar nahi'], 1, 'Jab tak bachat "aakhir me jo bache" hai, kuch nahi bachega. Account ka bada number dimaag ko "abhi bahut hai" ka signal deta hai.'],
    kya: 'Salary aate hi kharcha tez ho jaata hai, aur mahine ke aakhir me kadki. Log bachat ko kharche ke baad ka hissa maante hain, isliye wo hissa kabhi bachta hi nahi.',
    kyun: [
      ['Mental accounting', 'Economist Richard Thaler ne dikhaya ki hum paise ko dimaag me alag-alag "dabbon" me rakhte hain. Imran ke dimaag me ek hi dabba hai: "account me jo hai". Usme rent, ghar ka paisa aur bachat sab mila hua hai, isliye ₹48,000 dekh kar dimaag sochta hai ki bahut gunjaish hai.'],
      ['Present bias', 'Aaj ka dinner aur earphones abhi khushi dete hain; bachat ka fayda saalon baad. Dimaag paas ki khushi ko door ke fayde se zyada vazan deta hai. Isliye "agle mahine se" hamesha agle mahine rehta hai.'],
      ['Mahine ki shuruaat ka "ameeri" feeling', 'Balance jab bada dikhta hai, chhote kharche "kuch nahi" lagte hain. ₹500 ka Uber ₹48,000 ke saamne chhota hai, ₹3,100 ke saamne bada. Ek hi kharcha, alag mahsoos.']
    ],
    kaise: [
      '1 tareekh: salary aayi, bada number dikha, mood achha.',
      'Pehla hafta: "treat to banta hai" wale kharche, kyunki gunjaish lag rahi hai.',
      'Beech ka mahina: chhote-chhote kharche jinka koi hisaab nahi.',
      '18-20 tareekh: achanak dikhta hai ki balance kam hai. Kanjoosi shuru.',
      'Aakhri hafta: udhaar ya credit card, aur "agle mahine pakka" ka vaada.'
    ],
    irada: 'Ye poori tarah <b>anjaane me</b> hota hai. Imran jaanbujh kar paisa nahi uda raha, aur koi use bewakoof bhi nahi bana raha. Uska dimaag bas wahi kar raha hai jo wo karta hai: jo saamne dikh raha hai use "available" maanna, aur aaj ki khushi ko pehle rakhna.',
    gap: 'Imran ko pata hai ki bachat zaroori hai. Par "bachat karunga" ek iraada hai, system nahi. Har kharche ke waqt use alag se faisla lena padta hai ki "ye zaroori hai ya nahi", aur thake hue mann se ye faisla aksar kharche ke haq me jaata hai. Jaankari kaafi nahi; <b>default</b> badalna padta hai.',
    real: ['"Save More Tomorrow" (Thaler aur Benartzi, 2004)', 'Richard Thaler aur Shlomo Benartzi ne ek American company me employees ko ye option diya ki wo abhi nahi, balki agli salary badhne par bachat badhayein, aur ye apne aap ho. Pehle group me average savings rate lagbhag 3.5% se badh kar teen-chaar saal me 13% se upar pahunch gaya. Log wahi the; bas bachat "default" ban gayi aur har baar sochna nahi pada.'],
    fix: [
      '<b>Pehle bachat, phir kharcha</b>: salary aane ke din hi ek auto-transfer (SIP ya RD) set karo, chahe ₹2,000 se shuru ho. Jo account me dikhega hi nahi, wo kharch nahi hoga.',
      '<b>Alag dabbe banao</b>: rent aur ghar wala paisa ek account me, roz ka kharcha doosre me. Mental accounting ko apne fayde ke liye use karo.',
      '<b>Hafte ka budget</b>: mahine ke kharche ko 4 se bhaag do. "Is hafte ₹3,500" mahine ke ₹14,000 se zyada samajh aata hai.',
      '<b>Treat ko plan karo</b>: "1 tareekh ka dinner" budget me rakho, taaki khushi bhi mile aur guilt bhi na ho.'
    ],
    teacher: 'Maine dekha hai ki log kehte hain "salary kam hai, isliye bachat nahi hoti". Aksar asli wajah kram hai: pehle kharcha, phir bachat. Kram ulta karke ek mahina try karo, aur dekho kya hota hai.',
    chapters: ['thinking-decisions', 'cognitive-biases', 'motivation'],
    tags: ['salary', 'bachat', 'mental accounting', 'present bias', 'budget', 'kadki']
  });

  S({
    id: 'upi-card-se-kharcha-zyada', cat: 'paisa', level: 2, kind: 'anjaane',
    title: 'Cash se ₹200 dete waqt sochte hain, UPI se ₹2,000 bina soche. Kyun?',
    hook: 'Note haath se jaata hai to chubhta hai. "Ting" ki awaaz se kuch nahi chubhta.',
    story: [
      'Delhi, North Campus. Tenzin Dolma, 20, Sikkim se aayi hai aur PG me rehti hai. Uski roommate Shalini ki mummy har mahine use ₹6,000 cash deti hain, ek lifafe me. Tenzin ke papa usse ₹6,000 UPI par bhejte hain. Dono ka kharcha lagbhag ek jaisa hona chahiye tha.',
      'Par mahine ke beech Tenzin ka balance ₹900 tha, aur Shalini ke lifafe me abhi ₹2,400 the. Tenzin ne app me history dekhi: canteen ₹40, ₹60, ₹35... Blinkit ₹349, Zomato ₹278, ek "sirf ₹99" wala subscription jo bhool gayi thi, aur Sarojini se ek top ₹650 jo "QR tha to le liya". Har kharcha chhota tha. Kisi ek par bhi use dard nahi hua tha.',
      'Shalini ne hans kar kaha, "Main jab ₹500 ka note todti hoon na, to do baar sochti hoon. Tootne ke baad wo ₹500 nahi rehta, bas chhutta reh jaata hai." Tenzin ne us raat apni UPI history ka total kiya aur chup ho gayi.'
    ],
    guess: ['Tenzin ka kharcha zyada kyun hua?', ['Tenzin Shalini se zyada laaparwah hai', 'UPI me paisa dete waqt "dard" mehsoos nahi hota, aur kharche dikhte nahi, isliye dimaag ka brake kam lagta hai', 'Delhi me UPI wali dukaanein mehngi hain'], 1, 'Paisa dene ka dard ek natural brake hai. Jab dena bahut aasaan ho jaata hai, brake dheela ho jaata hai.'],
    kya: 'Log card, UPI ya wallet se aksar cash ke mukable zyada kharch karte hain, aur unhe yaad bhi kam rehta hai ki kitna kharch hua. Chhote digital kharche jud kar bada number ban jaate hain.',
    kyun: [
      ['Pain of paying', 'Drazen Prelec aur George Loewenstein (1998) ne ye idea diya ki paisa dene me ek chhota sa emotional "dard" hota hai, aur yahi dard kharche par brake lagata hai. Shalini ka note todna dard deta hai. Tenzin ka QR scan karna lagbhag kuch nahi.'],
      ['Transparency ki kami', 'Cash me tum lifafa patla hote dekhte ho. UPI me balance tab tak nahi dikhta jab tak tum khud na kholo. Jo dikhta nahi, wo dimaag me ginti me nahi aata.'],
      ['Decoupling (dena aur lena alag)', 'Cash me dena aur cheez lena ek hi pal me hota hai. Digital me ye judaav kamzor hota hai, aur subscription me to dena aur lena poori tarah alag ho jaata hai. ₹99 wala subscription isi wajah se bhool gaya.'],
      ['Chhote kharche ka bhram', '₹40 aur ₹60 alag-alag "kuch nahi" lagte hain. Dimaag har kharche ko akela tolta hai, unka jod nahi. Mahine ka total sirf history kholne par dikhta hai.']
    ],
    kaise: [
      'Paisa account me aaya, ek number ki tarah; haath me kuch nahi.',
      'Har jagah QR, ek tap, ek "ting". Koi rukawat nahi.',
      'Chhote kharche, har ek akela "theek" lagta hai.',
      'Kharche ka koi physical signal nahi, isliye brake nahi lagta.',
      'Mahine ke beech achanak balance dekh kar jhatka.'
    ],
    irada: 'Tenzin ki taraf se ye <b>anjaane me</b> hai. Wo jaanbujh kar zyada kharch nahi kar rahi; uske dimaag ka natural brake (dard) bas kaam nahi kar raha kyunki payment me koi dard bacha hi nahi. Shalini bhi koi khaas samajhdari nahi dikha rahi; cash ka format khud hi uske liye brake ka kaam kar raha hai.',
    gap: 'Tenzin ko pata hai ki ₹60 aur ₹60 milkar ₹120 hote hain. Problem ginti ki nahi, <b>mehsoos</b> karne ki hai. Faisla pal bhar me hota hai, aur us pal me dimaag sirf "ye chhota hai" dekhta hai, mahine ka total nahi. Jaankari baad me aati hai, kharcha pehle ho chuka hota hai.',
    real: ['"Always leave home without it" (Prelec aur Simester, 2001)', 'MIT ke kuch students se basketball match ke tickets ke liye sealed bid lagwayi gayi. Jinhe bataya gaya ki payment credit card se hogi, unki bolin cash wale group se kaafi zyada thi, kuch cases me lagbhag dugni. Ye ek chhoti study thi, aur baad ki studies me ye effect hamesha itna bada nahi mila. Isliye "dugna" ko niyam mat samjho; par seedha sabak yahi hai ki digital payment kharche ka brake dheela kar sakta hai.'],
    fix: [
      '<b>Dard wapas lao</b>: har shaam 1 minute UPI history dekho aur din ka total ek note me likho. Dekhna hi brake hai.',
      '<b>Alag "kharcha" account</b>: hafte ka budget us account me daalo jisse UPI judi hai. Balance khatam to hafta khatam.',
      '<b>Fun kharche ke liye cash</b>: bahar khaana, shopping jaise kharchon ke liye hafte ka cash nikal lo.',
      '<b>Subscription audit</b>: mahine me ek baar autopay aur mandates check karo, aur jo use nahi hota use band karo.',
      '<b>10 second ka sawaal</b>: QR scan karne se pehle khud se poocho, "Agar ye cash hota, to kya abhi dena theek lagta?"'
    ],
    teacher: 'UPI bura nahi; ye bahut kaam ki cheez hai. Bas ye yaad rakho ki jo cheez dena aasaan banati hai, wo kharch karna bhi aasaan banati hai. Brake tumhe khud lagana padega.',
    chapters: ['thinking-decisions', 'cognitive-biases', 'emotion'],
    tags: ['upi', 'cash', 'credit card', 'pain of paying', 'kharcha', 'subscription']
  });

  S({
    id: 'menu-ka-sabse-mehenga-dish', cat: 'paisa', level: 2, kind: 'jaanbujh',
    title: 'Menu me ₹2,400 wali dish koi nahi leta. Phir bhi wo wahan kyun hai?',
    hook: 'Wo dish bikne ke liye nahi hai. Wo isliye hai ki baaki sab "theek-thaak" lage.',
    story: [
      'Bengaluru, Indiranagar. Ananya aur Vikram ki shaadi ki pehli saalgirah. Naye restaurant ka menu bhaari kaagaz par hai. Sabse upar, ek box me: "Chef ka Special Lobster Thali, 2400". Uske neeche "Signature Mutton Biryani, 950" aur "Paneer Tikka Biryani, 720". Kahin bhi ₹ ka nishaan nahi, bas number. Vikram bola, "2400? Pagal hain kya." Phir mutton biryani order ki, aur use wo ab "reasonable" lag rahi thi.',
      'Wines me teen glass the: 450, 900 aur 1100. Ananya ne 900 wala liya, "beech wala safe hai". Dessert me "Grandma ki Phirni" ke saath ek chhoti si kahani likhi thi. Bill aaya ₹3,600. Ghar jaate waqt Ananya ne kaha, "Achha tha, par pata nahi itna kaise ho gaya."',
      'Usi restaurant ke maalik Rohan ne teen mahine pehle ek menu consultant ko bulaya tha. Consultant ki pehli baat: "Lobster thali ko upar box me rakho. Wo zyada bikegi nahi, par biryani ko sasta dikhayegi. Aur ₹ ka sign hata do."'
    ],
    guess: ['₹2,400 wali thali menu par kyun hai?', ['Ameer customers ke liye', 'Ek anchor ki tarah: uske baad ₹950 ki biryani "theek" lagne lagti hai', 'Chef ki khaas recipe dikhane ke liye'], 1, 'Kuch cheezein bikne ke liye nahi, <b>tulna</b> badalne ke liye rakhi jaati hain.'],
    kya: 'Restaurant aur dukaanein jaanbujh kar menu ya price list aise banati hain ki customer wahi chune jisme unka munafa zyada ho: ek bahut mehenga item, beech ka "safe" option, bina ₹ sign ke daam, aur kahaniyon wale naam.',
    kyun: [
      ['Anchoring', 'Tversky aur Kahneman ne dikhaya ki pehla dikha number baaki faislon ko kheench leta hai. ₹2,400 dekhne ke baad Vikram ka dimaag ₹950 ko us anchor se tolta hai, apne normal ₹400 ki biryani se nahi.'],
      ['Decoy aur compromise effect', 'Teen option ho to log aksar beech wala chunte hain, kyunki wo "na kanjoos, na fizool" lagta hai. Ananya ka 900 wala glass yahi hai. Aur restaurant ne beech wale par hi sabse zyada margin rakha hai.'],
      ['Pain of paying kam karna', '₹ ka nishaan "paisa" yaad dilata hai. Sirf "950" likhne se daam kam chubhta hai. Saath me "Grandma ki Phirni" jaisi kahani khaane ko emotion se jodti hai, keemat se nahi.'],
      ['Attention ka design', 'Box, bold font aur page par jagah tay karti hain ki aankh pehle kahan jaayegi. Jo cheez restaurant bechna chahta hai, wahi box me hoti hai.']
    ],
    kaise: [
      'Consultant aur maalik dekhte hain ki kis dish me munafa zyada hai.',
      'Upar ek bahut mehenga anchor item, box me.',
      'Asli "target" dishes uske paas, ab sasti dikhti hain.',
      'Teen size ya teen daam, jahan beech wala sabse fayde ka hai.',
      '₹ sign hata kar, kahaniyon wale naam de kar, kharche ka dard kam.'
    ],
    irada: '<b>Rohan aur consultant jaanbujh kar</b> menu design kar rahe hain: unhe pata hai ki lobster thali kam bikegi, aur wo yahi chahte hain. <b>Ananya aur Vikram autopilot par</b> hain: unhe lag raha hai ki unhone khud soch kar chuna, par tulna ka framework pehle se set tha. Ye dhokha nahi, marketing hai; bas jaankari tumhe faisla wapas deti hai.',
    gap: 'Vikram ne lobster thali par hans diya, yaani use laga ki wo jhaanse me nahi aaya. Par anchor ko pehchaanna aur us se bachna do alag cheezein hain. Research me dekha gaya hai ki log jaante hue bhi ki number random hai, us number se kheenche jaate hain. Hum samajhte hain ki hamara faisla "khaane" par hai, jabki wo "tulna" par hota hai.',
    real: ['Menu par ₹/$ sign ka asar (Cornell, 2009)', 'Cornell University ke hospitality researchers (Yang, Kimes aur Sessarego) ne ek restaurant me teen tarah ke menu try kiye: daam "$12.00" ki tarah, "twelve dollars" likh kar, aur sirf "12". Sirf number wale menu par logon ne average thoda zyada kharch kiya. Ye ek hi restaurant ki study thi, par aaj kai restaurant isi idea par menu banate hain.'],
    fix: [
      '<b>Apna anchor pehle set karo</b>: menu kholne se pehle socho, "Aaj ek insaan ka ₹600 tak."',
      '<b>Box wale item ko ignore karo</b>: wo tumhe bechne ke liye nahi, tulna badalne ke liye hai. Seedha khaane ko dekho jo tum chahte ho.',
      '<b>Beech wale ka sawaal</b>: "Agar sirf ye ek option hota, to kya is daam par lena theek lagta?"',
      '<b>Mann me ₹ wapas lagao</b>: "950" ko "₹950, yaani teen din ka auto ka kharcha" padho.'
    ],
    teacher: 'Agli baar kisi menu ya price list me ek ajeeb sa mehenga item dikhe, to ruk kar muskurao aur socho: ye kis cheez ko sasta dikhane ke liye yahan hai? Ye ek sawaal hi kaafi hai.',
    chapters: ['cognitive-biases', 'thinking-decisions', 'attitudes-persuasion'],
    tags: ['menu', 'restaurant', 'anchoring', 'decoy', 'pricing', 'marketing']
  });

  S({
    id: 'har-mahine-10-percent-scheme', cat: 'paisa', level: 3, kind: 'jaanbujh',
    title: '"Har mahine 10% guaranteed." Samajhdar log bhi aisi scheme me paisa kyun laga dete hain?',
    hook: 'Pehle teen mahine paisa time par aaya. Wahi to plan ka hissa tha.',
    story: [
      'Nagpur. Ek housing society ka WhatsApp group. Society ke purane member Sanjay Bhagat, sabke "Sanjay bhaiya", ek din bataate hain ki unke ek "Dubai wale contact" ki trading company har mahine 10% return deti hai. "Main khud chhe mahine se le raha hoon." Screenshots daalte hain. Lata Kulkarni, 58, retired school teacher, ₹50,000 lagati hain, bas dekhne ke liye. Agle mahine ₹5,000 time par aate hain. Phir agle mahine bhi.',
      'Teesre mahine Lata ji ne FD tod kar ₹3 lakh aur laga diye. Unke bhatije Nikhil ne bhi ₹2 lakh lagaye. Sanjay ne bataya ki naye log laane par 2% "referral bonus" milega. Society ke Ganesh utsav me log is scheme ki baatein karte the; jo nahi juda tha, use "darpok" kaha jaata tha. Bank me kaam karne wali Farzana ne ek baar poocha, "Company SEBI me registered hai?" Group me jawab aaya, "Didi, bank wale to FD ka 7% hi dila sakte hain."',
      'Aathve mahine payment "technical reason" se ruk gaya. Phir "naye rules" aaye: paisa nikalne ke liye ₹10,000 "processing fee". Gyarahve mahine Sanjay ka number band tha. Society me koi kisi se aankh nahi mila raha tha. Lata ji ko sabse zyada dard is baat ka tha ki Nikhil ko unhone hi joda tha.'
    ],
    guess: ['Is scheme ne logon ka bharosa sabse zyada kis cheez se jeeta?', ['Bade return ke vaade se', 'Shuru ke time par aaye payments aur jaan-pehchaan wale logon se: return ka asli source naye logon ka paisa tha', 'Screenshots aur Dubai wali kahani se'], 1, 'Vaada sirf kheenchta hai. Bharosa <b>shuru ke asli payments</b> aur <b>apne logon</b> se banta hai, aur wahi Ponzi ka engine hai.'],
    kya: 'Ponzi scheme me purane investors ko "return" naye investors ke paise se diya jaata hai. Shuru me sab sach lagta hai, kyunki paisa sach me aata hai. Jab naye log aana kam hote hain, scheme gir jaati hai, aur zyada tar log apna mool paisa bhi kho dete hain.',
    kyun: [
      ['Early payouts aur reinforcement', 'Lata ji ka pehla ₹5,000 sabse taakatwar marketing thi. Ek asli reward shak ko khatam kar deta hai, aur log apni marzi se paisa badha dete hain. Scheme chalane wala jaanta hai ki shuru ke payment ek kharcha nahi, bait hai.'],
      ['Affinity fraud aur trust', 'Fraud jab apni community ke andar se aata hai (society, biradari, dharm, alumni group), to log sawaal kam poochte hain. "Sanjay bhaiya" par shak karna apne hi logon par shak karna lagta hai.'],
      ['Social proof aur FOMO', 'Utsav me sab baatein kar rahe the, aur na judna "darpok" hona ban gaya. Jab bahut log kuch kar rahe hon, dimaag maan leta hai ki unhone check kar liya hoga (Level 5, conformity).'],
      ['Sunk cost aur escalation', 'Payment rukne par "processing fee" maangi gayi. Jo pehle hi lakhon laga chuka hai, wo ek aur chhota sa payment de deta hai, "warna sab doob jaayega". Isse scheme ko aakhri baar aur paisa mil jaata hai.']
    ],
    kaise: [
      'Bharose wala chehra: community ka koi purana, izzatdaar insaan.',
      'Chhota test investment, aur time par aaye "returns".',
      'Bada investment, referral bonus: purane investors khud naye laate hain.',
      'Social pressure: na judne wale ka mazaak, sawaal poochne wale ko "negative".',
      'Payments me der, naye bahane aur fees, phir number band.'
    ],
    irada: 'Scheme banane wala aur shayad Sanjay <b>jaanbujh kar</b> ye kar rahe hain: wo jaante hain ki return naye paise se aa raha hai aur scheme ek din girega. Kuch purane investors <b>aadhe-jaankar</b> ban jaate hain: referral bonus ke liye log laate hain, aur shak ko dabaate hain. Lata ji aur Nikhil jaise log <b>autopilot par</b> hain: trust, social proof aur shuru ke asli payment unke dimaag ka "check karo" wala button band kar dete hain.',
    gap: 'Lata ji padhi-likhi hain, unhone zindagi bhar bacchon ko hisaab sikhaya. Unhe pata hai ki "zyada return = zyada risk". Par ye jaankari ek "general" niyam hai, aur Sanjay bhaiya, society, aur time par aaye ₹5,000 ek "specific" kahani. Dimaag aksar niyam ki jagah kahani par chalta hai. Aur jab paisa aa raha ho, sawaal poochna nuksaan jaisa lagta hai.',
    real: ['Charles Ponzi (1920) aur Bernie Madoff (2008)', '1920 me Boston me Charles Ponzi ne postal reply coupons ke naam par 45 din me 50% return ka vaada kiya; naye logon ka paisa purano ko diya jaata raha, aur kuch hi mahino me scheme gir gayi. Isi se naam pada "Ponzi scheme". Bernie Madoff ne dashakon tak ameer logon aur charities ko har saal steady, kam par "pakka" return dikhaya; 2008 me scheme khuli, kaagaz par dikhaye gaye nuksaan lagbhag $65 billion the, aur use 150 saal ki saza hui. Madoff ki kahani batati hai ki bahut zyada return hi nahi, <b>bahut steady</b> return bhi red flag hai.'],
    fix: [
      '<b>Red flags yaad rakho</b>: "guaranteed" bada return, har mahine fixed payout, referral par commission, "secret" trading ya foreign contact, aur paisa nikalne par nayi fees.',
      '<b>Registration check karo</b>: investment advice ya scheme SEBI ya RBI me registered hai ya nahi, unki official website par khud dekho. India me unregulated deposit schemes chalana kanoon ke khilaf hai (Banning of Unregulated Deposit Schemes Act, 2019).',
      '<b>Ek sawaal jo poochna hai</b>: "Ye 10% aata kahan se hai? Kaun sa business itna kamaata hai, har mahine, bina nuksaan ke?" Seedha jawab na mile to ruk jao.',
      '<b>Apno ko bachane ki script</b>: "Mujhe tum par shak nahi, scheme par hai. Mujhe likhit me registration number bhejo, phir baat karte hain."',
      '<b>Phans gaye to</b>: cyber fraud ke liye 1930 par call karo ya cybercrime.gov.in par report karo; unregulated deposit ke liye RBI ka Sachet portal (sachet.rbi.org.in) hai. Sharm mat karo, jitni jaldi report, utni zyada umeed.'
    ],
    teacher: 'Jo log aisi scheme me phanste hain, wo bewakoof nahi hote; wo bharosa karne wale hote hain. Isliye niyam yaad rakho, insaan nahi: "guaranteed bada return" sun kar sawaal poochna izzat ki baat hai, darpok hone ki nahi.',
    chapters: ['scam-psychology', 'conformity-obedience', 'cognitive-biases'],
    tags: ['ponzi', 'scam', 'investment', 'affinity fraud', 'social proof', 'guaranteed return']
  });

  S({
    id: 'dukaandaar-special-rate', cat: 'paisa', level: 1, kind: 'dono',
    title: '"Didi, aapke liye special rate." Ye sun kar hum maan kyun jaate hain?',
    hook: 'Chai aayi, naam pooch liya, "aap to ghar ki ho". Mol-bhaav wahi khatam ho gaya.',
    story: [
      'Jaipur, Bapu Bazaar. Meenakshi apni behen ki shaadi ke liye bandhej ki saree dekhne aayi hai. Pehli dukaan par dukaandaar Arif bhai ne turant ladke ko bola, "Didi ke liye chai lao." Phir poocha, "Aap Ajmer se ho? Meri nani bhi wahin ki thi." Bees saree khol kar dikhayi, ek-ek ki tareef ki.',
      'Meenakshi ko ek saree pasand aayi. Arif bhai ne kaha, "Bahar ₹4,500 ki hai, aapke liye special rate ₹3,800. Aap to ghar ki ho." Meenakshi ne socha tha ki ₹3,000 se upar nahi jaayegi. Par chai pee li thi, itni saree khulwa li thi, aur "nani" wali baat bhi thi. Mol-bhaav karna ab badtameezi lag raha tha. Usne ₹3,800 de diye.',
      'Agli gali me wahi saree, wahi kaam, ₹3,200 me tangi thi. Meenakshi ko gussa kam, sharm zyada aayi: "Main itni aasaani se kaise maan gayi?"'
    ],
    guess: ['Meenakshi ne mol-bhaav kyun nahi kiya?', ['Saree sach me sasti lag rahi thi', 'Chai, tareef aur "aap ghar ki ho" ne ek rishta aur karz ka ehsaas bana diya, jisme mol-bhaav galat lagne laga', 'Meenakshi ko mol-bhaav aata hi nahi'], 1, '"Special rate" daam ki baat nahi, <b>rishte</b> ki baat hai. Rishte me mol-bhaav nahi kiya jaata, aur yahi trick hai.'],
    kya: 'Dukaandaar chhoti mehmaan-nawazi, tareef aur apnapan dikha kar customer ka mol-bhaav kam kar dete hain. "Special rate" sun kar lagta hai ki humein fayda mil raha hai, chahe daam bazaar se zyada ho.',
    kyun: [
      ['Reciprocity', 'Robert Cialdini ne isse "len-den ka niyam" kaha: koi kuch de (chai, time, bees saree kholna), to humein lautane ka mann karta hai. Meenakshi ne paisa de kar wo "karz" utaara.'],
      ['Liking', 'Hum unse zyada maante hain jo humein pasand aate hain ya humse jude lagte hain. "Meri nani bhi Ajmer ki thi" ek chhota sa connection hai, aur connection ke saath shak kam ho jaata hai.'],
      ['"Special" ka frame', '"Aapke liye special" sun kar lagta hai ki ₹700 bach gaye. Asal me ₹4,500 wala "bahar ka daam" ek anchor hai jise kisi ne check nahi kiya.']
    ],
    kaise: [
      'Swagat: chai, naam, "kahan se ho?"',
      'Connection: koi common baat, jaise sheher, rishtedaar ya bhasha.',
      'Mehnat dikhana: bahut saara maal khol kar dikhana.',
      'Ek ooncha "bahar ka daam", phir "aapke liye special".',
      'Customer ko mol-bhaav karna rude lagta hai, aur deal ho jaati hai.'
    ],
    irada: '<b>Arif bhai jaanbujh kar</b> ye karte hain: unke liye ye roz ka hunar hai, saalon me seekha hua ki chai aur apnapan bikri badhate hain. Shayad wo isse dhokha nahi, dhanda maante hain. <b>Meenakshi autopilot par</b> thi: reciprocity aur liking itne gehre niyam hain ki wo bina soche chalte hain. Use pata hi nahi chala ki kab "kharidari" "rishta nibhana" ban gayi.',
    gap: 'Meenakshi ne ghar se socha tha "₹3,000 se upar nahi". Par wo faisla thande dimaag se liya gaya tha. Dukaan me chai, tareef aur rishte ka emotional mahaul tha, aur us pal me "achha insaan" dikhna ₹800 se zyada zaroori lag raha tha.',
    real: ['Coke aur raffle tickets (Dennis Regan, 1971)', 'Psychologist Dennis Regan ke experiment me ek "participant" (asal me researcher ka saathi) break me ek doosre participant ke liye bina maange ek Coke le aaya. Baad me usne raffle tickets bechne ki baat ki. Jinhe Coke mila tha, unhone lagbhag dugne tickets kharide, chahe unhe wo insaan khaas pasand bhi na ho. Chhota sa tohfa, bada len-den.'],
    fix: [
      '<b>Chai ko karz mat banao</b>: chai li hai to "shukriya" kaafi hai; daam ka faisla alag hai.',
      '<b>Pehle 2-3 dukaan ghoom lo</b>: asli bazaar daam ka andaza tumhara anchor hona chahiye, dukaandaar ka "bahar ka daam" nahi.',
      '<b>Pyaar se mol-bhaav</b>: "Bhaiya, saree bahut sundar hai, aur aap bahut achhe ho. Mera budget ₹3,000 hai. Ho sakta hai to batao, warna koi baat nahi."',
      '<b>Chalne ki taaqat</b>: "Pehle thoda aur dekh lete hain, phir batate hain" bolna bilkul theek hai. Jo bandhan sirf chai se bana, wo tumhe rok nahi sakta.'
    ],
    teacher: 'Achhe dukaandaar ki mehmaan-nawazi ka maza lo, wo bhi bazaar ka ek sundar hissa hai. Bas yaad rakho: shukriya ek cheez hai, daam doosri. Dono ko alag rakhna seekh lo.',
    chapters: ['attitudes-persuasion', 'social-cognition'],
    tags: ['bazaar', 'mol-bhaav', 'reciprocity', 'liking', 'special rate', 'shopping']
  });

  /* ---------- Online ---------- */

  S({
    id: 'influencer-honest-review-paid', cat: 'online', level: 2, kind: 'jaanbujh',
    title: '"Ye mera honest review hai, sponsored nahi." Phir har video me wahi brand kyun?',
    hook: 'Review "honest" tha, discount code bhi tha, aur commission bhi. Bas ye aakhri baat kahin likhi nahi thi.',
    story: [
      'Ludhiana. Harpreet Kaur, 22, B.Com final year. Pichhle ek saal se wo ek skincare creator "GlowWithNaina" ko dekhti hai. Naina ki awaaz pyaari hai, wo apne pimples bina filter dikhati hai, aur kehti hai, "Main sirf wahi recommend karti hoon jo maine khud use kiya." Harpreet ko lagta hai jaise wo ek badi behen hai.',
      'Ek din Naina ne ek naye serum ki video daali: "Honest review, koi paid partnership nahi. Teen hafte use kiya, skin glass jaisi ho gayi." Neeche discount code "NAINA20". Harpreet ne ₹1,299 ka serum kharid liya, apni do mahine ki pocket money ka bada hissa. Do hafte baad uske chehre par jalan aur daane.',
      'Comments me kisi ne likha: "Didi, isi brand ka teesra product hai is mahine." Naina ne us comment ko delete kar diya. Baad me ek beauty forum par Harpreet ne padha ki brand creators ko har sale par commission deta hai, aur "NAINA20" jaise code isi ke liye hote hain. Naina ki video me ye kahin nahi likha tha.'
    ],
    guess: ['Is kahani me sabse bada dhokha kya hai?', ['Serum kharab tha', 'Paid rishta chhupa kar use "honest review" bataya gaya, aur Harpreet ka bharosa ad ki jagah dosti par tha', 'Harpreet ne bina soche kharida'], 1, 'Product kharab hona alag baat hai. Asli problem ye hai ki ad ko <b>dost ki salah</b> bana kar pesh kiya gaya, taaki Harpreet ka "ye ad hai" wala alarm baje hi na.'],
    kya: 'Kuch creators paid promotion, free products ya affiliate commission ko chhupa kar ya chhota likh kar use "honest review" ki tarah dikhate hain. Viewer use ek dost ki salah maan kar bharosa kar leta hai.',
    kyun: [
      ['Persuasion knowledge', 'Researchers Friestad aur Wright (1994) ne bataya ki jab humein pata hota hai ki koi humein kuch bech raha hai, to dimaag ek "defence mode" me chala jaata hai. Ad chhupane ka matlab hai ye defence band karna. "Sponsored nahi" wali line yahi karti hai.'],
      ['Parasocial relationship', 'Harpreet ko Naina ek badi behen jaisi lagti hai, par Naina use jaanti bhi nahi. Ye ek-tarfa rishta hai (Horton aur Wohl ne 1956 me TV ke liye ye shabd diya). Ek-tarfa rishte me bhi bharosa poora hota hai.'],
      ['Authenticity ka performance', 'Pimples dikhana, "main bhi tumhari jaisi hoon" bolna: ye sab sach ho sakta hai, par yahi "imaandari" ka image ad ko taakat deta hai. Jitna real creator, utna mehenga uska chhupa hua ad.'],
      ['Commitment aur dissonance', 'Saal bhar ka bharosa ek investment hai. Isliye "teesra product" wala comment padh kar bhi pehla khayal aata hai, "Nahi, Naina aisi nahi hai."']
    ],
    kaise: [
      'Creator mahino tak "real" aur imaandaar image banata hai.',
      'Brand paisa, free product ya har sale par commission offer karta hai.',
      'Video "honest review" ki tarah banti hai; disclosure chhupa, chhota ya gayab.',
      'Discount code: viewer ko lagta hai fayda mil raha hai; creator ko commission.',
      'Sawaal poochne wale comments delete, taaki image bani rahe.'
    ],
    irada: '<b>Naina aur brand jaanbujh kar</b> paid rishta chhupa rahe hain: dono jaante hain ki "ad" likhne se bikri ghategi, isliye usse hata diya. <b>Harpreet autopilot par</b> hai: parasocial bharose ne uska "ye ad hai kya?" wala sawaal chup kara diya. Har creator aisa nahi karta; bahut se log saaf "#ad" likhte hain, aur wahi sahi tareeka hai.',
    gap: 'Harpreet jaanti hai ki influencers ko paise milte hain. Par ye general jaankari hai. Jab ek khaas insaan, jise wo "jaanti" hai, kehta hai "ye sponsored nahi", to dimaag us insaan par bharosa karta hai, niyam par nahi. Bharose ko check karna dosti tod dene jaisa lagta hai.',
    real: ['ASCI ki influencer advertising guidelines (India, 2021)', 'Advertising Standards Council of India (ASCI) ne 2021 me niyam banaye ki agar creator ka brand ke saath koi bhi "material connection" hai (paisa, free product, commission, trip), to post par saaf aur pehle hi dikhne wala label hona chahiye, jaise #ad, #collab, #sponsored ya #partnership, aur wo hashtags ke dher me chhupa nahi hona chahiye. 2023 me Government of India ke Department of Consumer Affairs ne bhi celebrities aur influencers ke liye endorsement disclosure ki guidelines jaari ki.'],
    fix: [
      '<b>Teen sawaal</b>: Discount ya affiliate code hai? Isi brand ki baar-baar videos hain? Koi kami bataayi gayi ya sirf tareef? Teeno "haan, haan, nahi" to ad maan kar dekho.',
      '<b>Description aur caption padho</b>: #ad, #collab, "paid partnership" label. Na ho aur code ho, to shak karna bilkul theek hai.',
      '<b>Doosre source</b>: kharidne se pehle 2-3 alag reviews, ingredients ki list, aur ho sake to dermatologist ki salah. Skin par naya product pehle patch test karke.',
      '<b>Report karo</b>: chhupi hui promotion ki shikayat ASCI ke paas, aur galat product ya refund ke liye National Consumer Helpline 1915.'
    ],
    teacher: 'Kisi creator ko pasand karna bilkul theek hai. Bas ek chhoti si aadat daalo: jab bhi koi "honest" bole aur saath me code de, ek pal ruk kar socho ki is sentence se kisko paisa milta hai.',
    chapters: ['attitudes-persuasion', 'dark-patterns', 'social-cognition'],
    tags: ['influencer', 'paid promotion', 'review', 'asci', 'parasocial', 'affiliate']
  });

  S({
    id: 'rage-bait-gussa-wale-post', cat: 'online', level: 3, kind: 'jaanbujh',
    title: 'Kuch pages jaanbujh kar gussa dilane wale post kyun daalte hain? Aur wahi sabse zyada kyun dikhte hain?',
    hook: 'Deepa ka gussa sachcha tha. Usse kamaayi kisi aur ki ho rahi thi.',
    story: [
      'Kolkata. Deepa Banerjee, 31, ek school me Maths teacher. Raat 11 baje uski feed me ek page "Seedhi Baat Daily" ka post aata hai: ek photo aur bada sa text, "Aaj kal ke teachers sirf salary ke liye kaam karte hain. Sahi ya galat?" 40,000 comments. Deepa ne likha, phir mita kar dobara likha, aur aakhir me ek lambi reply daal di. 1:30 baje tak wo logon se behas kar rahi thi. Subah 7 baje ki class me uski aankhein jal rahi thi.',
      'Agle hafte usi page ne post kiya, "Teachers ki chhuttiyan band honi chahiye." Phir "Ghar pe tuition lene wale teachers asli chor hain." Deepa ne har baar jawab diya. Uske mama ji ne ek post share karke family group me likha, "Dekho, sab yahi soch rahe hain." Ab Deepa ki feed me har doosra post kisi na kisi par gussa tha.',
      'Page chalane wala Aman, 24, ek chhote sheher me baitha teen aur pages chalata hai. Uske liye ye ek business hai: views aur engagement se page bada hota hai, phir paid promotions aur monetisation aate hain. Usne apne dost ko bataya tha, "Achhe post pe 200 like aate hain. Gussa wale pe 20,000 comment. Algorithm comment dekhta hai, matlab nahi." Aman ko teachers se koi dushmani nahi. Agle mahine wo doctors par yahi karega.'
    ],
    guess: ['Is post ko sabse zyada kisne aage badhaya?', ['Un logon ne jo page se sahmat the', 'Deepa jaise logon ne jo gusse me jawab de rahe the, kyunki har comment aur share algorithm ke liye "engagement" hai', 'Page ke paid ads ne'], 1, 'Algorithm ke liye gussa aur pyaar me farq nahi; dono "engagement" hain. Jo galat post ko kaatne aaye, unhone hi use sabse zyada failaya.'],
    kya: 'Kuch accounts jaanbujh kar aise post banate hain jo logon ko gussa dilayein: kisi group ka mazaak, aadha sach, ya "sahi ya galat?" wala bhadkau sawaal. Gussa comments aur shares laata hai, engagement-based ranking us post ko aur logon tak pahunchati hai, aur page ko reach aur paisa milta hai. Ise <b>rage bait</b> kehte hain.',
    kyun: [
      ['Engagement-based ranking', 'Bahut se platform feed me wo dikhate hain jis par log zyada ruken, comment karein ya share karein. Ye system ye nahi poochta ki engagement khushi se aaya ya gusse se. Isliye Deepa ka gussa wala comment bhi us post ke liye ek "vote" ban gaya.'],
      ['Moral-emotional language', 'Psychologist William Brady aur saathiyon ne paaya ki jin posts me "chor", "sharm", "dhokha" jaise naitik-emotional shabd hote hain, wo kuch topics par zyada share hote hain. "Asli chor hain" jaisi line isi liye chuni jaati hai.'],
      ['Outrage ka social reward', 'Gussa post karne par likes aur "sahi kaha" wale reply milte hain. Brady ki baad ki research ne dikhaya ki jinhe aise reward milte hain, wo aage aur zyada outrage post karne lagte hain. Ye operant conditioning hai: platform logon ko gussa karna "sikhata" hai.'],
      ['Identity threat aur negativity bias', 'Deepa ke liye ye sirf ek post nahi, uski pehchaan par hamla tha. Apni group ki izzat par chot dimaag ko khatre jaisi lagti hai, aur khatre ko ignore karna mushkil hai. Upar se dimaag buri khabar ko achhi se zyada vazan deta hai.']
    ],
    kaise: [
      'Page ek group chunta hai jiske log online bahut hain (teachers, doctors, maa-baap).',
      'Aadha sach ya generalisation, naitik shabdon ke saath, aur "sahi ya galat?" ka sawaal.',
      'Group ke log apni izzat bachane aate hain; doosre log "sahi kaha" bolte hain. Dono taraf engagement.',
      'Algorithm post ko aur logon ko dikhata hai; family groups me share, screenshots.',
      'Page badhta hai, Aman kamaata hai; Deepa ki feed gusse se bhar jaati hai, neend aur mood dono jaate hain.'
    ],
    irada: '<b>Aman jaanbujh kar</b> gussa bech raha hai: use pata hai ki gussa engagement laata hai, aur wo topic badalta rahega, kyunki uska maqsad paisa hai, baat nahi. <b>Algorithm ka koi "iraada" nahi</b>: wo bas engagement maximise karne ke liye bana hai, aur gussa us metric ke liye kaam karta hai. <b>Deepa aur mama ji autopilot par</b> hain: Deepa apni izzat bachane ke liye jawab de rahi hai, mama ji "sab yahi soch rahe hain" maan kar share kar rahe hain. Dono ko lagta hai ki wo sach ke liye lad rahe hain, jabki wo Aman ki kamaayi badha rahe hain.',
    gap: 'Deepa ko pata hai ki "trolls ko feed mat karo". Par jab post uski apni pehchaan par ho, to chup rehna haar jaisa lagta hai, jaise wo baat maan li gayi. Gussa ek fast system hai; "ye bait hai" wala khayal slow system. Raat 11 baje, thake hue dimaag me fast system jeet jaata hai. Aur ek jawab dene ke baad use "defend" karna padta hai, isliye 1:30 baj jaate hain.',
    real: ['Moral-emotional words aur sharing (Brady aur saathi, 2017)', 'William Brady aur saathiyon ne kuch vivaadit topics par lakhon tweets dekhe aur paaya ki jin tweets me moral-emotional shabd zyada the, wo average me zyada retweet hue. Baad me kuch researchers ne isi tarah ke data par dobara analysis kiya aur paaya ki ye effect topic aur dataset ke hisaab se badalta hai, aur hamesha bada nahi hota. Isliye seekh ye nahi ki "gussa hamesha viral hota hai", balki ye ki gussa failne ki ek asli taakat hai jise kuch log jaanbujh kar use karte hain.'],
    fix: [
      '<b>Naam do</b>: koi post padh kar gussa aaye to khud se poocho, "Is post ko mere gusse se kya milta hai?" Bas ye naam dene se dimaag ka slow system jaagta hai.',
      '<b>Comment mat karo, quote mat karo</b>: jawab dena bhi engagement hai. Agar sach me sahi baat kehni hai, to apni alag post likho, us page ka naam ya screenshot liye bina.',
      '<b>Feed ko sikhao</b>: "Not interested", "Show fewer", mute ya unfollow. Algorithm wahi seekhta hai jo tum karte ho.',
      '<b>Family group ke liye script</b>: "Mama ji, ye page har hafte kisi na kisi par aisa hi likhta hai, views ke liye. Isko share karke hum unhi ki madad kar dete hain."',
      '<b>Raat ka niyam</b>: 10 baje ke baad behas nahi. Kal subah bhi wo post wahi rahega, aur tab shayad jawab dene ka mann hi na ho.'
    ],
    teacher: 'Apni izzat ke liye bolna galat nahi. Bas jagah aur waqt khud chuno, wo page nahi jo tumhara gussa bech raha hai. Sabse taakatwar jawab kabhi-kabhi scroll kar dena hota hai.',
    chapters: ['helping-aggression', 'group-behavior', 'operant-conditioning'],
    tags: ['rage bait', 'algorithm', 'outrage', 'social media', 'engagement', 'troll']
  });

  S({
    id: 'game-bas-ek-aur-match', cat: 'online', level: 1, kind: 'dono',
    title: 'Online game me "bas ek aur match" bolte-bolte raat ke 2 kaise baj jaate hain?',
    hook: 'Match ek point se haara. Reward box me "rare skin" ki jhalak. Aur kal ki streak bachani hai.',
    story: [
      'Lucknow. Yash Srivastava, 15, class 10. Raat 10:30 baje mummy ne kaha, "Bas, ab so jao." Yash ne kaha, "Bas ek aur match, promise." Wo match wo aakhri round me sirf ek kill se haar gaya. "Itne paas tha! Ek aur."',
      'Agla match jeeta, aur reward box khula: is baar sirf aam coins, par screen par dikha ki ek dost ko "legendary skin" mila. Phir notification: "Daily streak: 29 din! Kal login karo aur 30 din ka special reward pao." Aur "Season khatam hone me 2 din baaki." Jab Yash ne phone rakha, raat ke 1:50 baj rahe the. Agle din school me Maths ka test tha.'
    ],
    guess: ['Yash ko "ek aur match" ke liye sabse zyada kya kheench raha tha?', ['Game bahut mazedaar hai, bas', 'Game ke design me jaanbujh kar daale gaye "lagbhag jeet", random reward aur streak, jo rukne ka sahi pal hi nahi aane dete', 'Yash me self-control nahi hai'], 1, 'Maza to hai hi. Par "bas ek aur" ka asli engine wo hooks hain jo designer ne <b>rukne ki jagah</b> hatane ke liye banaye.'],
    kya: 'Bahut se online games me kuch features jaanbujh kar aise banaye jaate hain ki khelne wala "ek aur" ke chakkar me ghanton khelta rahe: random reward box, near-miss (bas thoda sa haarna), daily streak, aur time-limited season.',
    kyun: [
      ['Variable reward', 'Reward box me kabhi aam coins, kabhi kuch rare. B.F. Skinner ki research ne dikhaya ki jab reward ka andaza na ho (variable ratio), to behaviour sabse zyada chalta rehta hai. "Shayad agli baar" wala khayal kabhi khatam nahi hota.'],
      ['Near-miss', 'Ek kill se haarna haar jaisa nahi, "lagbhag jeet" jaisa lagta hai. Gambling par hui research me dekha gaya ki near-miss dimaag me jeet jaise reward hisson ko bhi active karta hai, aur dobara khelne ka mann badhata hai.'],
      ['Streak aur loss aversion', '29 din ki streak ab ek "cheez" hai jo kho sakti hai. Daniel Kahneman aur Amos Tversky ne dikhaya ki khone ka dard paane ki khushi se bada lagta hai. Isliye Yash khelne ke liye nahi, streak <b>na khone</b> ke liye bhi khel raha hai.']
    ],
    kaise: [
      'Game me koi saaf "end" nahi; har match ke baad turant "Play again".',
      'Haar ko near-miss ki tarah dikhaya jaata hai: "itne paas the!"',
      'Random reward box: kabhi kuch khaas, zyada tar kuch nahi.',
      'Streak aur season timer: rukne par kuch "khone" ka dar.',
      'Raat ki thakaan me self-control aur kamzor, aur "ek aur" chalta rehta hai.'
    ],
    irada: 'Ye <b>dono</b> taraf ki kahani hai. <b>Game designers jaanbujh kar</b> ye features banate hain: unki team "retention" aur "daily active users" jaise numbers ko badhane ke liye dekhti hai ki kaun sa feature log zyada der rokta hai. <b>Yash autopilot par</b> hai: wo sach me maanta hai ki "bas ek aur" aakhri hoga. Uska dimaag reward, near-miss aur streak par natural tareeke se react kar raha hai, wo kamzor nahi.',
    gap: 'Yash ko pata hai ki kal test hai. Par "ek aur" ka faisla har baar sirf ek match ka lagta hai, poori raat ka nahi. Har chhota faisla theek lagta hai; galti unke jod me hai. Aur teenage dimaag me reward system jaldi tez hota hai jabki brake (planning, self-control) dheere-dheere pakta hai, isliye ye kheench aur bhi taakatwar lagti hai.',
    real: ['WHO aur "gaming disorder"', 'World Health Organization ne ICD-11 me "gaming disorder" ko shaamil kiya, jo 2022 se laagu hai. Iska matlab ye nahi ki game khelna bimari hai; zyada tar log bina problem ke khelte hain. Ye tab hai jab mahino tak game par control na rahe, wo baaki zindagi se upar ho jaaye, aur nuksaan ke baad bhi chalta rahe. India me NIMHANS, Bengaluru ka SHUT clinic (Service for Healthy Use of Technology) isi tarah ki madad deta hai.'],
    fix: [
      '<b>Matches me limit, minutes me nahi</b>: "Aaj 3 match" ginna aasaan hai, "45 minute" me "ek aur" ghus jaata hai.',
      '<b>Near-miss ke baad ka niyam</b>: "Haar ke turant baad naya match nahi." Yahi pal sabse khatarnaak hai.',
      '<b>Streak se ijazat le lo</b>: khud ko bolo, "Streak tootna theek hai." Ek baar tootne do; dekho kuch nahi hota.',
      '<b>Phone kamre ke bahar</b>: sone ke time phone doosre kamre me charge karo. Willpower ki jagah doori.',
      '<b>Agar control nahi ho raha</b>: kisi bade se baat karo. Tele-MANAS 14416 par free aur confidential baat ho sakti hai.'
    ],
    teacher: 'Game khelna bura nahi, maza zaroori hai. Bas ye pehchaano ki "bas ek aur" tumhari awaaz nahi, game ke design ki awaaz hai. Pehchaan liya, to aadha kaam ho gaya.',
    chapters: ['operant-conditioning', 'dark-patterns', 'adolescence-adulthood'],
    tags: ['gaming', 'online game', 'variable reward', 'near miss', 'streak', 'neend']
  });
})();
