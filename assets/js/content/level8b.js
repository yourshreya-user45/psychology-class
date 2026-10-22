/* Level 8 (part 2) · Scams, Groups, Defence */
(function () {
  const C = window.PSY.chapter;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 8.5 */
  C({
    id: 'scam-psychology', level: 8, mins: 20, visual: 'scamFunnel',
    visualCap: 'Har dot ek insaan hai jise scam ka chaara mila. Neeche dhaal on karo aur dekho kitne log har seedhi par bach nikalte hain.',
    title: 'Scam ki psychology: digital arrest se OTP fraud tak',
    tag: 'India ke sabse common scams ka anatomy: hook, hot state, akelapan, action. Aur 1930 wala golden hour',
    intro: 'Agar is poore level se sirf ek chapter yaad rakhna ho, to wo yahi hai. Aaj asli scams ko step by step kholenge, jaise doctor X-ray dekhta hai. Padhne ke baad ye chapter ghar ke buzurgon ke saath zaroor share karna. Shayad tumhari ek baat kisi ki zindagi bhar ki bachat bacha de.',
    hook: '"Beta, main police station me hoon, accident ho gaya, turant ₹50,000 bhejo, papa ko mat batana." Awaaz bilkul tumhare bhai jaisi. Ya: "Aapka bijli connection aaj raat 9:30 baje kat jaayega, turant is number par call karein." Ya: "Congratulations! Ghar baithe YouTube videos like karke ₹5,000 roz kamaiye." Teen alag kahaniyan, ek hi script. Aaj wahi script padhenge.',
    blocks: [
      ['h', 'Har scam ki paanch seedhiyan'],
      ['p', 'Cambridge ke researchers Frank Stajano aur Paul Wilson (2011) ne street hustlers aur frauds ko study karke dikhaya ki scams insaan ki kuch <b>pakki aadaton</b> par chalte hain: authority ki baat maanna, bheed ke peeche chalna, jaldi me faisla, laalach ya zaroorat, aur doosron par daya. Lagbhag har scam in seedhiyon se guzarta hai (upar ka graphic dekho):'],
      ['steps', [
        ['1. Hook (chaara)', 'Darr ("aapke naam par drugs ka parcel"), laalach ("lottery"), ya madad ("refund aapka pending hai").'],
        ['2. Hot state', 'Emotion itna tez ki sochne ki jagah na bache: panic, khushi, sharam.'],
        ['3. Isolation', '"Call mat kaatna", "kisi ko mat batana", screen share, video par nazarbandi.'],
        ['4. Action', 'OTP batana, link kholna, app download, UPI PIN daalna, "safe account" me transfer.'],
        ['5. Extraction aur repeat', 'Paisa gaya; phir "recovery agent" ban kar dobara loot (recovery scam).']
      ]],
      ['teacher', 'Ye paanch seedhiyan ratt lo. Fayda ye hai ki har naya scam alag se yaad nahi rakhna padega. Kahani kuch bhi ho, jaise hi koi kahe "kisi ko mat batana", samjho seedhi 3 aa gayi. Wahi tumhara alarm hai. Usi pal call kaato.'],

      ['h', 'Digital arrest: sabse khatarnak natak'],
      ['p', 'Call aata hai "TRAI", courier ya customs ke naam se: "Aapke Aadhaar se ek parcel gaya hai jisme drugs aur fake passports mile hain" ya "aapka number money laundering me use hua hai". Phir call kisi "CBI/ED/police officer" ko transfer hota hai. Video call par uniform, police station jaisa background, nakli arrest warrant aur "court" ke letter. Victim ko kaha jaata hai ki wo <b>"digital arrest"</b> me hai: camera ke saamne baithe raho, kisi se baat nahi, kamra band. Ghanton ya dino tak. Aakhir me "verification" ke liye saari bachat ek "safe account" me bhejne ko kaha jaata hai, jo kabhi wapas nahi aati.'],
      ['note', '<b>Kanoon me "digital arrest" naam ki koi cheez nahi hai.</b> Police, CBI, ED, customs ya koi bhi agency video call par arrest nahi karti, aur na hi paise "verify" karne ke liye transfer karwati hai. Aisa call aaye to: call kaato, number <b>Sanchar Saathi (Chakshu)</b> par report karo, aur agar paise gaye hain to turant <b>1930</b> ya <b>cybercrime.gov.in</b>.'],
      ['p', 'Psychology dekho: <b>authority</b> (uniform, logo, sarkari bhasha), <b>darr</b> (jail, izzat), <b>isolation</b> (camera se nazarbandi), <b>sharam</b> ("drugs" ka ilzaam, kisi ko batane me jhijhak), aur <b>commitment escalation</b> (pehle chhoti "fine", phir badi rakam). Isiliye 2024 me Pradhan Mantri ne "Mann Ki Baat" me iske khilaf ek seedha mantra diya: <b>Ruko, Socho, Action lo</b>.'],

      ['h', 'OTP, UPI aur KYC wale scams'],
      ['table', ['Scam', 'Script', 'Sach'], [
        ['UPI collect request', '"Paise bhej raha hoon, bas PIN daalo receive karne ke liye" (OLX par purana saamaan bechte waqt)', 'Paise <b>lene</b> ke liye kabhi PIN nahi lagta. PIN daala matlab paise gaye.'],
        ['KYC / bank update', '"Aapka account aaj block ho jaayega, is link par KYC karo"', 'Bank SMS link se KYC nahi karwata. Seedha branch ya official app.'],
        ['Bijli bill', '"Aaj raat 9:30 baje connection katega, is number par call karo"', 'Bijli company kisi personal mobile number se aise SMS nahi bhejti. Official app ya bill par diya number check karo.'],
        ['Fake customer care', 'Google par mila "helpline" number, phir "AnyDesk ya screen-share app download karo"', 'Screen share = tumhara phone unke haath. Number sirf official website ya app se lo.'],
        ['OTP', '"Galti se aapke number par OTP chala gaya, please bata do"', 'OTP kisi ko nahi batana, chahe wo khud ko bank, police ya delivery company bataye.']
      ]],
      ['teacher', 'Ghar me ek rule bana do, likh kar fridge par chipka do: <b>OTP, PIN, CVV kisi ko nahi. Paise lene ke liye PIN nahi.</b> Buzurg ho ya teenager, sirf ye do lines bahut saare scams rok deti hain.'],

      ['h', 'Task scams aur investment groups: laalach ki seedhi'],
      ['ex', '"Ghar baithe kamaao": ek task scam ka safar', [
        'Riya ko WhatsApp aata hai: "Part-time job! YouTube videos like karo, har like ₹50." Pehle din teen likes, aur ₹150 sach me account me aa jaate hain. (<b>Reciprocity aur bharosa</b>: inhone to diya!)',
        'Phir Telegram group: wahan sab apni kamaai ke screenshots daal rahe hain (<b>social proof</b>, zyada tar fake accounts). Ab "prepaid task": ₹1,000 lagao, ₹1,300 pao. Ye bhi mil jaata hai.',
        'Phir ₹10,000 ka task, phir ₹50,000. Ab paisa screen par "dikh raha" hai, par nikalne ke liye "tax" ya "upgrade fee" chahiye. Riya aur paisa daalti hai kyunki itna pehle hi laga chuki hai (<b>sunk cost</b>, Level 7). Aakhir me group gayab.',
        'Yahi pattern WhatsApp "stock tips" groups aur nakli trading apps me hai, jahan screen par jhoothe profit dikhte hain. Lambi dosti ya romance ke baad investment karwane wale scam ko <b>pig butchering</b> kehte hain: pehle "suar ko mota karo", phir halal. Naam bhayanak hai, par chaal bilkul yahi hai.'
      ]],

      ['h', 'Sextortion aur AI voice cloning'],
      ['p', '<b>Sextortion</b>: anjaan number se video call aata hai, saamne nagn video chalti hai, tumhara chehra record karke edit hota hai, phir dhamki: "paise do warna family aur dosto ko bhej denge." Ye <b>sharam</b> ka lever hai, jo victim ko chup rakhta hai. Kya karna hai: <b>paise mat do</b> (dene se maang badhti hai), chat aur number ka screenshot lo, block karo, <b>cybercrime.gov.in</b> par report karo, aur kisi trusted insaan ko batao. Intimate photos ke misuse ke darr me <b>StopNCII.org</b> photo ka digital fingerprint bana kar platforms par uska upload rokne me madad karta hai. Galti tumhari nahi, apraadh unka hai.'],
      ['p', '<b>Voice cloning</b>: aaj AI kuch seconds ki recording (reels, voice notes) se kisi ki awaaz bana sakta hai. "Papa, main musibat me hoon" jaisi call aaye to call kaato, aur us insaan ko unke asli number par khud call karo. Parivaar me ek <b>secret code word</b> tay kar lo jo emergency me poochha jaaye.'],
      ['teacher', 'Ek pal socho: scammers ko tumhari awaaz, photos aur family ke naam kahan se milte hain? Zyada tar public social media se. Isliye privacy settings check karna paranoia nahi, seatbelt lagane jaisa hai.'],

      ['h', 'Agar phans gaye: golden hour'],
      ['steps', [
        ['Turant 1930', 'National Cyber Crime Helpline. Jitni jaldi report, utna zyada chance ki paisa raste me hi freeze ho jaaye. Pehle kuch ghante sabse keemti hain.'],
        ['cybercrime.gov.in', 'Online complaint: transaction ID, screenshots aur number ke saath.'],
        ['Bank ko call', 'Official number par card ya UPI block karwao.'],
        ['Chakshu par report', 'Sanchar Saathi portal par fraud call ya SMS report karo, taaki number band ho sake.'],
        ['"Recovery agent" se bacho', 'Jo kahe "fees do, paisa wapas dila denge", wo agla scammer hai.'],
        ['Sharam chhodo, baat karo', 'Chup rehna scammer ki jeet hai. Batane se doosre bhi bachte hain.']
      ]],
      ['myth', 'Jo scam me phansta hai wo laalchi ya bewakoof hota hai.', 'Scams dimaag ke shortcuts (authority, darr, jaldi, bharosa) par chalte hain jo sabme hain. Victim ko blame karna unhe chup karata hai, aur chuppi me scammer aur logon ko phansata hai. Sahi sawaal "tum kaise phans gaye?" nahi, "ab kya madad chahiye?" hai.'],
      ['lab', 'scamSpot'],
      ['terms', [
        ['Digital arrest scam', 'Fake police/CBI ban kar video call par "arrest" ka natak aur paise transfer karwana. Kanoon me aisi koi cheez nahi.'],
        ['Phishing', 'Nakli message, email ya website se password, OTP ya bank details churana.'],
        ['Vishing', 'Phone call (voice) ke zariye phishing.'],
        ['UPI collect request scam', 'Paise "bhejne" ke naam par PIN daalwa kar asal me paise le lena.'],
        ['Task scam', 'Chhote online tasks ke inaam se shuru karke "prepaid tasks" me badi rakam daalwana.'],
        ['Pig butchering', 'Lambi dosti ya romance ke baad nakli investment platform me paisa lagwane wala scam.'],
        ['Sextortion', 'Intimate photo ya video ki dhamki dekar paise ya aur content maangna.'],
        ['Voice cloning', 'AI se kisi ki awaaz ki nakal banana; emergency scams me use hota hai.'],
        ['Recovery scam', 'Pehle se phanse victim ko "paisa wapas dilane" ke naam par dobara lootna.'],
        ['Golden hour', 'Fraud ke turant baad ka samay jab 1930 par report se paisa freeze hone ka chance sabse zyada hota hai.'],
        ['Commitment escalation', 'Chhoti haan ke baad dheere-dheere badi maangein, jisse peeche hatna mushkil lage.']
      ]],
      ['think', 'Dadi ko call aata hai: "Main bank manager bol raha hoon, aapka ATM card band ho raha hai, card ke peeche ka number aur OTP bata dijiye." Dadi phone tumhe pakda deti hain. Pehla kadam kya ho, aur baad me dadi ko kaise samjhana behtar hai?', [
        'Pehle call kaato, bina bahas ke. Phir card ke peeche diye official number par khud call karke check karo.',
        'Dadi ko daantna nahi. Seedhi baat: "Bank kabhi OTP, CVV ya PIN nahi poochhta. Jo poochhe, wo chor hai." Aur ek kaagaz par bade aksharon me likh kar do: <b>1930</b>.'
      ]]
    ],
    outro: 'Aaj ka saar: har scam hook, hot state, isolation, action aur extraction ki seedhi chadhta hai, aur "kisi ko mat batana" sabse bada alarm hai. Quiz do, phir lab me 8 asli jaise messages pehchaanne ki practice karo. Agle chapter me group ka andhera: cults, propaganda aur fake news, jahan ek insaan nahi, poora group chaal chalta hai.',
    takeaways: [
      'Scam ki 5 seedhiyan: hook → hot state → isolation → action → extraction (aur recovery scam).',
      'Kanoon me "digital arrest" nahi hota; koi agency video call par arrest ya paise "verify" nahi karti.',
      'OTP, PIN, CVV kisi ko nahi; UPI par paise lene ke liye PIN kabhi nahi lagta.',
      'Task aur investment scams pehle chhota inaam dekar bharosa banate hain, phir sunk cost se badi rakam.',
      'Phanse to turant 1930 / cybercrime.gov.in; sextortion me paise mat do; family code word rakho.'
    ],
    quiz: [
      ['Kanoon me "digital arrest" kya hai?', ['CBI ka naya procedure', 'Aisi koi cheez nahi; ye scam ka natak hai', 'Sirf ED kar sakti hai', 'Court ka online order'], 1, 'Koi agency video call par arrest nahi karti, na paise "verify" karwati hai.'],
      ['UPI par paise RECEIVE karne ke liye PIN?', ['Hamesha lagta hai', 'Kabhi nahi lagta; PIN daalne ka matlab paise bhejna', 'Sirf ₹2,000 se upar', 'Sirf raat me'], 1, 'Collect request me PIN daalte hi paise tumhare account se jaate hain.'],
      ['Cyber fraud ke baad sabse pehle kya karna chahiye?', ['Agle din police station jaana', 'Turant 1930 par call ya cybercrime.gov.in par report', 'Scammer ko call karke request karna', 'Kisi ko na batana'], 1, 'Jaldi report se paisa raste me freeze hone ka chance badhta hai.'],
      ['Task scam me shuru me chhote payment sach me kyun milte hain?', ['Company imaandaar hoti hai', 'Bharosa aur commitment banane ke liye, taaki baad me badi rakam daalwayi ja sake', 'Galti se', 'Tax bachane ke liye'], 1, 'Chhota inaam bharosa banata hai; phir sunk cost badi rakam daalwata hai.'],
      ['"Kisi ko mat batana" scam ki kaunsi seedhi hai?', ['Hook', 'Isolation', 'Extraction', 'Reward'], 1, 'Victim ko reality-check dene wale logon se kaatna isolation hai.'],
      ['Sextortion me kya NAHI karna chahiye?', ['Screenshot lena', 'Report karna', 'Paise dena', 'Trusted insaan ko batana'], 2, 'Paise dene se maang badhti hai. Report aur support sahi raasta hai.'],
      ['AI voice cloning se bachne ka smart family tareeka?', ['Phone band rakhna', 'Ek secret code word tay karna aur asli number par call back karna', 'Sirf landline use karna', 'Kuch nahi ho sakta'], 1, 'Code word aur khud call-back karna clone ki hui awaaz ki chaal tod dete hain.']
    ],
    more: [
      ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in/', 'link'],
      ['Sanchar Saathi (Chakshu: fraud call/SMS report)', 'https://sancharsaathi.gov.in/', 'link'],
      ['StopNCII.org', 'https://stopncii.org/', 'link'],
      ['Digital arrest scam explained', YT('digital arrest scam explained India'), 'video']
    ]
  });

  /* 8.6 */
  C({
    id: 'cults-propaganda', level: 8, mins: 17, visual: 'bite',
    visualCap: 'BITE model: har hisse par click karo. Upar se "Healthy group" aur "Controlling group" ka farak bhi dekho.',
    title: 'Group ka andhera: cults, propaganda aur fake news',
    tag: 'Lifton ke nishaan, BITE model, Jonestown, Festinger, illusory truth effect, WhatsApp forwards aur prebunking',
    intro: 'Ab tak manipulation ek insaan se doosre insaan tak tha. Aaj scale badhta hai: jab poora group, koi "guru" ya ek message lakhon logon ki soch ko ek saath modta hai. Level 5 ki social psychology yahan sabse zyada kaam aayegi, to dimaag ka wo drawer khula rakhna.',
    hook: '18 November 1978, Guyana ke jungle me Jonestown naam ki basti. Ek charismatic leader, Jim Jones, ke kehne par 900 se zyada log, jinme lagbhag 300 bachche the, zeher mila drink pee kar mare. Ye log shuru me "barabari aur nayi duniya" ke sapne ke saath jude the: achhe, idealistic insaan. Koi ek din me wahan nahi pahuncha. Asli sawaal ye nahi ki "itne log bewakoof kaise", balki ye hai ki <b>chhote-chhote kadam</b> unhe wahan tak kaise le gaye.',
    blocks: [
      ['h', 'Cult kaise banta hai: dheere-dheere'],
      ['p', 'Psychiatrist Robert Jay Lifton ne 1950s me Korean War ke prisoners aur China ke "thought reform" programs se laute logon ka study kiya. 1961 ki unki kitaab me <b>totalism</b> ke 8 nishaan the. Kuch sabse important, aaj ki bhasha me:'],
      ['table', ['Lifton ka nishaan', 'Matlab', 'Aaj ka example'], [
        ['Milieu control', 'Kya padhna, kisse milna, sab group tay kare', '"Bahar ke log negative hain, unse door raho."'],
        ['Loading the language', 'Apni khaas bhasha jo sochna band kar de', '"Doubt aaye to samjho ye tumhara ego bol raha hai."'],
        ['Demand for purity', 'Kabhi poora na hone wala perfection, guilt ka chakkar', '"Tum abhi poori tarah samarpit nahi ho."'],
        ['Cult of confession', 'Galtiyan sabke saamne kabool karna, jo baad me dabaane me kaam aaye', 'Group "sharing" jiska istemaal baad me control ke liye ho'],
        ['Sacred science', 'Leader ya doctrine par sawaal hi nahi', '"Guru ji galat ho hi nahi sakte."'],
        ['Dispensing of existence', 'Group ke bahar walon ki keemat kam', '"Jo humare saath nahi, wo bhatke hue hain."']
      ]],
      ['p', 'Former cult member aur counsellor Steven Hassan ne ise aasaan banaya: <b>BITE model</b>. Controlling group chaar cheezon ko control karta hai: <b>B</b>ehaviour (kya karo, kab so, kya khao), <b>I</b>nformation (kya jaano), <b>T</b>hought (kya socho) aur <b>E</b>motion (kya mehsoos karo). Upar ke graphic me har hisse ke examples dekho.'],
      ['teacher', 'Ek zaroori baat: har dharmik, spiritual, fitness ya political group cult nahi hota. Farak <b>exit</b> me hai. Kya koi member bina darr, saza ya rishte tootne ke group chhod sakta hai? Kya sawaal poochhna safe hai? Jahan jaana aasaan ho aur sawaal welcome hon, wahan khatra aam taur par kam hota hai.'],

      ['h', 'Achhe log kyun judte hain'],
      ['list', [
        '<b>Transition ka waqt</b>: naya sheher, breakup, naukri jaana, kisi apne ki maut. Akelapan aur "meaning" ki talaash sabse kamzor pal hain.',
        '<b>Love bombing</b>: pehli meetings me itna pyaar aur apnapan jo bahar kahin nahi mila.',
        '<b>Foot-in-the-door</b>: pehle ek free session, phir weekend camp, phir donation, phir naukri chhodna.',
        '<b>Cognitive dissonance</b>: jitna bada tyag kiya, utna zyada "ye sahi hi hoga" maanna padta hai.'
      ]],
      ['case', 'Jab bhavishyavani fail hui (Festinger, 1956)', 'Leon Festinger aur saathi chupke se ek group me shamil hue jo maanta tha ki 21 December 1954 ko pralay aayega aur ek flying saucer unhe bacha lega. Kai members ne naukri aur ghar chhod diye the. Raat beet gayi, kuch nahi hua. Kya unhone vishwas chhoda? Ulta, leader ne naya sandesh diya ki "hamari aastha ne duniya bacha li", aur group ne pehli baar <b>zor-shor se prachaar</b> shuru kar diya. Jitna bada tyag, utna mushkil ye maanna ki sab galat tha. Yahi study <b>cognitive dissonance</b> theory ki neev bani (Level 5).'],
      ['p', 'Jonestown me aakhri raat kai logon ko zabardasti bhi zeher diya gaya, aur bhaagne ke raaste band the. Par wahan tak ka safar saalon ki chhoti-chhoti haan, badhte akelapan aur doubt ko "kamzori" kehne se bana tha.'],

      ['h', 'Propaganda: jhooth ko sach jaisa banana'],
      ['case', 'Illusory truth effect (Hasher aur saathi, 1977)', 'Lynn Hasher aur saathiyon ne logon ko kuch statements kai hafton tak baar-baar dikhaye. Jo statements <b>repeat</b> hue, wo zyada sach lagne lage, chahe galat hon. Baad ki research (Lisa Fazio aur saathi, 2015) ne dikhaya ki <b>sahi jawab pata hone par bhi</b> repetition asar karta hai. Propaganda ka sabse purana niyam yahi hai: ek jhooth baar-baar bolo.'],
      ['list', [
        '<b>Us vs them</b>: duniya ko "hum achhe, wo bure" me baantna (Level 5 ka minimal group paradigm yaad hai?).',
        '<b>Scapegoat</b>: har samasya ka zimmedar ek group.',
        '<b>Fear appeal</b>: "agar abhi nahi jaage to sab khatam".',
        '<b>Bandwagon</b>: "sab jaag chuke hain, ab tumhari baari".',
        '<b>Emotional imagery</b>: tasveeren aur videos jo soch se pehle gussa bhadkaayen.'
      ]],
      ['case', 'Jhooth tez daudta hai (Vosoughi, Roy aur Aral, 2018)', 'MIT researchers ne Twitter par 2006 se 2017 tak ki lagbhag 1.26 lakh khabron ke phailaav ka analysis kiya. <b>Jhoothi khabrein sach se zyada door, gehri aur tez</b> phaili: sach ko 1,500 logon tak pahunchne me jhooth se lagbhag <b>6 guna</b> zyada time laga. Wajah? Jhooth zyada <b>naya</b> aur zyada <b>chaukane wala</b> lagta hai, aur use bots se zyada insaan share karte hain.'],
      ['ex', 'WhatsApp forwards aur bheed (2018)', '2018 me India ke kai rajyon me "bachcha chor gang" ke jhoothe WhatsApp messages aur videos phaile. Anjaan logon ko shak me bheed ne gher liya, aur kai logon ki jaan gayi. Iske baad WhatsApp ne India me ek message ek baar me sirf 5 chats tak forward karne ki limit lagayi aur "Forwarded" label dikhana shuru kiya. Forward button dabane me ek second lagta hai; uska asar kisi ki zindagi ho sakta hai.'],
      ['teacher', 'Ek kadwi sachchai: hum sabse aasaani se unhi messages ko maante hain jo pehle se hamari soch se milte hain (confirmation bias, Level 7). To jab koi message padh kar <b>bahut zyada gussa ya bahut zyada khushi</b> ho, wahi pal ruk kar check karne ka hai. Strong emotion = hot state = manipulation ka darwaza.'],

      ['h', 'Radicalization: seedhi dar seedhi'],
      ['p', 'Psychologist Fathali Moghaddam ne radicalization ko ek <b>imaarat ki seedhiyon</b> jaisa samjhaya: neeche anyaay ka ehsaas, phir gussa aur kisi dushman ki talaash, phir ek group ki alag "moral duniya", phir "hum vs wo" ka pakka bantwara, aur sabse upar hinsa ko sahi maanna. Har manzil par kam log chadhte hain, aur har manzil par group ka asar badhta hai. Arie Kruglanski ki research kehti hai ki <b>significance ki talaash</b>, yaani "meri zindagi maayne rakhe" ki bhookh, is safar ka bada eendhan hai. Aur jo algorithms zyada extreme content dikhate hain, wo ye seedhiyan aur chhoti kar dete hain.'],

      ['h', 'Bachav: prebunking aur SIFT'],
      ['p', '<b>Inoculation theory</b> (William McGuire, 1961) kehti hai ki jaise vaccine kamzor virus dikha kar body ko taiyaar karti hai, waise hi manipulation ki <b>kamzor dose</b> pehle dikhane se dimaag taiyaar ho jaata hai. Cambridge ke Jon Roozenbeek aur Sander van der Linden ne <b>Bad News</b> naam ka game banaya, jisme players khud fake news creator bante hain. Game khelne ke baad logon ne fake headlines ko zyada aasaani se pehchaana. Is poore level ka idea bhi yahi hai: <b>chaal pehle se jaan lo</b>.'],
      ['steps', [
        ['S: Stop', 'Share karne se pehle ruko. Emotion check: kya main hot state me hoon?'],
        ['I: Investigate the source', 'Bhejne wala kaun hai? Account naya hai? Website ka naam asli jaisa par thoda alag?'],
        ['F: Find better coverage', 'Kya bharosemand news sources bhi yahi keh rahe hain? Fact-checkers (jaise PIB Fact Check, Alt News, BOOM, Factly) ne kya kaha?'],
        ['T: Trace to the original', 'Photo ya video asli me kahan se aaya? Reverse image search se purani ya kisi aur jagah ki photo pakdi jaati hai.']
      ]],
      ['p', 'Ye SIFT method digital literacy expert Mike Caulfield ka hai. Deepfake videos ke zamane me ek rule aur jodo: <b>jitna sensational video, utna shak</b>, khaas kar jab usme koi famous insaan kuch chaukane wala keh raha ho.'],
      ['terms', [
        ['Cult', 'Aisa group jo members ke behaviour, information, soch aur emotions par gehra control rakhe aur chhodna mushkil bana de.'],
        ['Totalism', 'Lifton ka shabd: aisa mahaul jo insaan ki poori soch aur pehchaan ko control kare.'],
        ['BITE model', 'Behaviour, Information, Thought, Emotion control: cult pehchaanne ka framework (Steven Hassan).'],
        ['Milieu control', 'Group dwara kisi ke mahaul, information aur rishton par control.'],
        ['Loaded language', 'Group ki khaas bhasha aur thought-stopping clichés jo sawaal band kar dein.'],
        ['Illusory truth effect', 'Baar-baar sunne se baat ka zyada sach lagna, chahe galat ho.'],
        ['Propaganda', 'Logon ki soch modne ke liye ek-tarfa, emotional aur aksar jhoothi information ka systematic istemaal.'],
        ['Scapegoating', 'Har samasya ka dosh kisi ek group par daalna.'],
        ['Radicalization', 'Dheere-dheere extreme vichaaron aur hinsa ko sahi maanne ki taraf badhna.'],
        ['Significance quest', 'Maayne rakhne ki bhookh, jo extremism ki taraf dhakel sakti hai (Kruglanski).'],
        ['Inoculation theory', 'Manipulation ki kamzor dose pehle dekar mann ko asli manipulation ke khilaf mazboot banana (McGuire).'],
        ['Prebunking', 'Jhooth phailne se pehle hi uski chaal samjha dena.'],
        ['SIFT method', 'Stop, Investigate the source, Find better coverage, Trace to the original (Mike Caulfield).']
      ]],
      ['think', 'Family group me ek video aata hai: "Kal se ye cheez band ho jaayegi, abhi stock kar lo! Sabko forward karo." Is par SIFT kaise lagega, aur group me reply aisa kaise ho ki koi naraz bhi na ho?', [
        'Stop: "abhi stock karo" + "sabko forward karo" = jaldi + bandwagon. Investigate: source kya hai? Find: kya kisi bade news source ya sarkari site par ye khabar hai? Trace: video purana to nahi?',
        'Reply me ilzaam nahi, link do: "Maine check kiya, PIB Fact Check ke hisaab se ye purani khabar hai, ye raha link." Sharminda karne ki jagah izzat bachaane wala tareeka zyada log maante hain.'
      ]]
    ],
    outro: 'Aaj humne dekha ki group, guru aur forwards bhi wahi levers dabate hain, bas bade scale par: akelapan, repetition, us-vs-them aur dheere-dheere badhti commitment. Quiz do, phir chalte hain aakhri chapter me, jahan sab kuch jod kar tumhari apni dhaal banayenge.',
    takeaways: [
      'Cults dheere-dheere bante hain: milieu control, loaded language, purity, sacred science (Lifton).',
      'BITE model: Behaviour, Information, Thought, Emotion control; healthy group me exit aur sawaal safe hote hain.',
      'Festinger: bada tyag karne ke baad galti maanna mushkil, isliye vishwas aur pakka ho jaata hai.',
      'Repetition se jhooth sach lagta hai (illusory truth); jhoothi khabrein sach se tez phailti hain.',
      'Bachav: prebunking (inoculation) aur SIFT; strong emotion aaye to share se pehle ruko.'
    ],
    quiz: [
      ['BITE model me chaar cheezein kaunsi hain?', ['Behaviour, Information, Thought, Emotion', 'Belief, Identity, Trust, Ego', 'Body, Intelligence, Time, Energy', 'Bias, Influence, Tactic, Error'], 0, 'Steven Hassan ke hisaab se controlling groups in chaaron par control rakhte hain.'],
      ['Festinger ki "When Prophecy Fails" study me bhavishyavani fail hone ke baad kya hua?', ['Sabne group chhod diya', 'Group ne aur zor se prachaar shuru kiya', 'Leader jail gaya', 'Kuch nahi badla'], 1, 'Bade tyag ke baad galti maanna mushkil tha; dissonance kam karne ke liye vishwas aur pakka hua.'],
      ['Illusory truth effect kya hai?', ['Sach hamesha jeetta hai', 'Baar-baar sunne se baat zyada sach lagne lagti hai, chahe galat ho', 'Illusions sirf aankhon me hote hain', 'Jhooth jaldi bhool jaate hain'], 1, 'Repetition familiarity banata hai, aur dimaag familiarity ko sach samajh leta hai.'],
      ['Vosoughi aur saathiyon (2018) ki study me kya mila?', ['Sach jhooth se tez phailta hai', 'Jhoothi khabrein sach se tez aur door phaili, zyada tar insaanon ki wajah se', 'Sirf bots fake news phailate hain', 'Koi farak nahi'], 1, 'Novelty aur chaunkane wali baat ki wajah se log jhooth zyada share karte hain.'],
      ['2018 ki mob lynching ghatnaon ke baad WhatsApp ne India me kya kiya?', ['App band kar diya', 'Forwarding ko ek baar me 5 chats tak seemit kiya aur "Forwarded" label lagaya', 'Videos ban kar diye', 'Kuch nahi'], 1, 'Viral jhooth ki raftaar kam karne ke liye forward limit lagayi gayi.'],
      ['"Bad News" game kis theory par based hai?', ['Psychoanalysis', 'Inoculation / prebunking', 'Classical conditioning', 'Maslow ki hierarchy'], 1, 'Manipulation ki kamzor dose pehle dene se log asli fake news ke khilaf zyada mazboot hote hain.'],
      ['Group cult hai ya nahi, iska sabse achha practical test kya hai?', ['Group kitna bada hai', 'Kya member bina darr ya saza ke chhod sakte hain aur sawaal poochh sakte hain', 'Group dharmik hai ya nahi', 'Leader kitna famous hai'], 1, 'Exit ki azaadi aur sawaal poochhne ki safety healthy group ki pehchaan hai.']
    ],
    more: [
      ['Combating Cult Mind Control (Steven Hassan)', GR('Combating Cult Mind Control Hassan'), 'book'],
      ['Foolproof (Sander van der Linden)', GR('Foolproof Sander van der Linden'), 'book'],
      ['Bad News game (prebunking)', 'https://www.getbadnews.com/', 'link'],
      ['Illusory truth effect (Wikipedia)', 'https://en.wikipedia.org/wiki/Illusory_truth_effect', 'link']
    ]
  });

  /* 8.7 */
  C({
    id: 'defense-boundaries', level: 8, mins: 18, visual: 'assertSpectrum',
    visualCap: 'Ek situation chuno, phir chaaron style ke jawab dekho. Marker dikhata hai ki jawab spectrum par kahan hai.',
    title: 'Dhaal: na kehna, boundaries aur manipulation-proof dimaag',
    tag: 'Assertiveness, broken record, fogging, DEAR MAN, HALT, if-then plans, kisi victim ki madad, aur khud manipulator na banna',
    intro: 'Course ki aakhri class. Pichhle chhe chapters me chaalein pehchaani; aaj apni dhaal banayenge. Ye chapter padhne se zyada practice ka hai, to beech-beech me scripts zor se bol kar dekhna. Shuru me ajeeb lagega, par yahi asli training hai.',
    hook: 'Friday shaam 6 baje office me ek senior kehta hai: "Yaar, ye report Monday subah tak chahiye, team me sabse reliable to tum hi ho." Weekend ke plans pehle se the. Dimaag me teen jawab aate hain: (1) "Haan haan, ho jaayega", aur poora weekend kharab. (2) "Har baar mera hi number kyun? Ye mera kaam nahi!", aur rishte me khatas. (3) Kuch aur. Wo "kuch aur" hi aaj ka chapter hai.',
    blocks: [
      ['h', 'Chaar style: passive, aggressive, passive-aggressive, assertive'],
      ['table', ['Style', 'Andar ki soch', 'Kaisa dikhta hai', 'Nateeja'], [
        ['Passive', '"Meri zaroorat maayne nahi rakhti."', 'Mann na ho tab bhi haan, chup rehna', 'Gussa andar jama hota hai, log fayda uthaate hain'],
        ['Aggressive', '"Sirf meri zaroorat maayne rakhti hai."', 'Chillaana, ilzaam, dhamki', 'Bahas jeet li, rishta haar gaye'],
        ['Passive-aggressive', '"Seedha nahi bolna, bas jataana hai."', 'Taane, jaanbujh kar late, "theek hai, jaisa tum kaho" ke saath munh banana', 'Confusion aur bharosa kam'],
        ['Assertive', '"Meri aur tumhari, dono ki zaroorat maayne rakhti hai."', 'Saaf, shaant, izzat ke saath "haan" ya "na"', 'Respect bhi bachti hai, rishta bhi']
      ]],
      ['p', 'Assertive hona rude hona nahi hai. Ye apni baat <b>saaf aur izzat se</b> kehne ki skill hai, aur skill ka matlab hai ki ise seekha ja sakta hai. Upar ke graphic me ek situation chuno aur chaaron style ke jawab dekho.'],

      ['h', 'Na kehne ke tools'],
      ['steps', [
        ['Broken record', 'Bina bahas ke apni baat shaanti se dohrana. "Loan guarantee dena mere liye mumkin nahi." "Par yaar..." "Samajh aata hai, phir bhi guarantee dena mere liye mumkin nahi." Ye technique Manuel J. Smith ki 1975 ki kitaab <i>When I Say No, I Feel Guilty</i> se aayi.'],
        ['Fogging', 'Aalochana ka jo hissa sach hai use maan lo, bina jhuke: "Ho sakta hai main is baat me thoda strict hoon. Phir bhi faisla yahi hai."'],
        ['Pause button', '"Abhi faisla nahi. Is par kal baat karte hain." Jaldi ka dabaav ho to pause hi sabse achha jawab hai.'],
        ['Saath me ek option', '"Monday tak poori report mumkin nahi, par ek page ka summary Monday ko mil jaayega, baaki Wednesday tak."'],
        ['Chhota "na", bina lambi safai', 'Jitni lambi safai, utna bada bahas ka maidan. "Nahi, is baar nahi" kaafi hai.']
      ]],
      ['teacher', 'Ek secret: na kehne ke baad guilt aana bilkul normal hai. Iska matlab ye nahi ki kuch galat hua; iska matlab hai ki ek nayi aadat ban rahi hai. Guilt ko ek purana alarm samjho jo practice ke saath dheere-dheere shaant ho jaata hai.'],

      ['h', 'DEAR MAN: mushkil baat ka formula'],
      ['p', 'Psychologist Marsha Linehan ki <b>Dialectical Behaviour Therapy (DBT)</b> (Level 6) me rishton ke liye ek famous skill hai: <b>DEAR MAN</b>. Example: flatmate baar-baar bina poochhe tumhara khaana kha leta hai.'],
      ['table', ['Step', 'Matlab', 'Example'], [
        ['D: Describe', 'Facts, bina ilzaam', '"Is hafte teen baar fridge se mera khaana khatam mila."'],
        ['E: Express', 'Apni feeling', '"Mujhe bura laga, kyunki raat ko khaane ke liye kuch nahi bacha."'],
        ['A: Assert', 'Saaf maang', '"Please mera khaana lene se pehle poochh lena."'],
        ['R: Reinforce', 'Fayda batao', '"Isse ghar ka mahaul achha rahega, aur kabhi-kabhi saath me bana bhi lenge."'],
        ['M: Mindful', 'Topic par tike raho', 'Baat bhatke to wapas aao: "Abhi hum khaane ki baat kar rahe hain."'],
        ['A: Appear confident', 'Aankh milao, shaant awaaz', 'Bina baar-baar "sorry sorry" ke'],
        ['N: Negotiate', 'Beech ka raasta', '"Ek shelf tumhari, ek meri?"']
      ]],

      ['h', 'Manipulation-proof aadatein'],
      ['list', [
        '<b>HALT check</b>: Hungry, Angry, Lonely, Tired. In haalaton me bade faisle mat lo; manipulators aksar inhi palon ko chunte hain.',
        '<b>24 ghante ka rule</b>: paisa, rishta, contract ya "life changing opportunity", koi bhi bada faisla kam se kam ek raat sone ke baad.',
        '<b>Independent channel se verify</b>: call aaya "bank se"? Khud official number par call karo. Message aaya "dost se" paise ke liye? Dost ko call karke poochho.',
        '<b>If-then plan</b>: Peter Gollwitzer ki research me pehle se tay "agar X, to Y" plan banane wale log apne iraade par zyada tike. Jaise: "Agar koi OTP maange, to call kaatna. Agar koi kahe kisi ko mat batana, to sabse pehle kisi ko batana."',
        '<b>Code word</b>: family me emergency ke liye ek secret shabd.',
        '<b>Support circle</b>: 2-3 log jinse kuch bhi poochha ja sake, bina judge hue. Akelapan manipulation ki oxygen hai; rishte uski dawai.'
      ]],
      ['teacher', 'Notice karo: inme se koi bhi tool "smart hona" nahi maangta. Sab <b>aadat aur system</b> hain. Hot state me smartness kaam nahi aati, aadat aati hai. Isliye inhe abhi, cold state me, set kar lo.'],

      ['h', 'Kisi aur ki madad kaise karein'],
      ['p', 'Jab koi dost scam me phansa ho ya abusive rishte me ho, sabse bada nuksaan hum <b>judge karke</b> karte hain: "Itna bewakoof kaise?", "Chhod kyun nahi dete?" Isse wo insaan aur chup ho jaata hai, aur manipulator ka kaam aasaan.'],
      ['steps', [
        ['Suno, bina lecture', '"Mujhe batane ke liye shukriya. Isme tumhari galti nahi hai."'],
        ['Reality reflect karo', '"Jo tumne bataya, wo mujhe theek nahi lagta. Tumhe kaisa lagta hai?"'],
        ['Faisla unka rehne do', 'Abusive rishta chhodna ek process hai: darr, paisa, bachche, trauma bond. Dabaav mat banao, darwaza khula rakho.'],
        ['Practical madad', 'Report karne me saath baitho (1930, cybercrime.gov.in), helpline number do, counsellor dhoondhne me madad karo.'],
        ['Khatra ho to', 'Hinsa ya jaan ka khatra ho to <b>112</b>. Ye dakhal nahi, zimmedari hai.']
      ]],

      ['h', 'Aakhri sawaal: manipulation hamare andar bhi hai?'],
      ['p', 'Imaandaari se dekhein to hum sab kabhi na kabhi guilt-trip karte hain, ruth jaate hain, ya adhoora sach bolte hain. Farak <b>pattern aur irade</b> ka hai. Ethical persuasion jaanchne ke liye ek test hai, <b>TARES</b> (Sherry Baker aur David Martinson, 2001): kya meri baat <b>T</b>ruthful (sach) hai, <b>A</b>uthentic (mujhe khud isme bharosa hai), <b>R</b>espectful (saamne wale ki azaadi ki izzat), <b>E</b>quitable (barabari ka fayda), aur <b>S</b>ocially responsible (samaaj ke liye nuksaandeh nahi)?'],
      ['quote', 'Insaan ko kabhi sirf saadhan ki tarah nahi, hamesha khud ek maqsad ki tarah bhi dekho.', 'Immanuel Kant (bhaavarth)'],
      ['note', '<b>Madad ke numbers (India)</b>: Cyber fraud <b>1930</b> aur cybercrime.gov.in · Emergency <b>112</b> · Women Helpline <b>181</b> · NCW <b>7827-170-170</b> · Child Helpline <b>1098</b> · Consumer Helpline <b>1915</b> · Tele-MANAS (mental health, 24x7, free) <b>14416</b> · iCall <b>9152987821</b> · Fraud call/SMS report: Sanchar Saathi (Chakshu).'],
      ['lab', 'boundary'],
      ['terms', [
        ['Assertiveness', 'Apni zaroorat aur raay saaf aur izzat se rakhna, doosre ki zaroorat ka bhi samman karte hue.'],
        ['Passive-aggressive', 'Naraazgi seedhe kehne ki jagah taane, deri ya chhupe virodh se jataana.'],
        ['Broken record technique', 'Bina bahas ke apni baat shaanti se dohrate rehna (Manuel J. Smith).'],
        ['Fogging', 'Aalochana ke sach hisse ko maan kar bhi apne faisle par tike rehna.'],
        ['DEAR MAN', 'DBT skill: Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate.'],
        ['HALT', 'Hungry, Angry, Lonely, Tired: jin haalaton me bade faisle nahi lene chahiye.'],
        ['Implementation intention', 'Pehle se tay "agar X, to Y" plan jo iraade ko action me badalne me madad kare (Gollwitzer).'],
        ['TARES test', 'Ethical persuasion ke paanch sawaal: Truthful, Authentic, Respectful, Equitable, Socially responsible.'],
        ['Personal boundary', 'Wo seema jo batati hai ki mere saath kya theek hai aur kya nahi.']
      ]],
      ['think', 'Shaadi me ek rishtedaar sabke saamne kehte hain: "Itni umar ho gayi, abhi tak shaadi nahi? Kab tak parents ko tension doge?" Assertive jawab kaisa ho sakta hai?', [
        'Ek option, muskura kar, chhota aur shaant: "Is faisle par soch-samajh kar kaam chal raha hai. Aapki chinta ke liye shukriya." Phir topic badal do: "Waise aapka naya ghar kaisa ban raha hai?"',
        'Na sharmindagi, na jhagda: fogging + boundary. Agar wo baar-baar poochhein, to broken record: same line, same shaanti.'
      ]]
    ],
    outro: 'Aur ye raha poora course! Neev se shuru karke dimaag, memory, emotions, samaaj, mental health, advanced psychology, aur ab manipulation se bachav tak. Aakhri quiz do, phir Level 8 ka exam, aur certificate tumhara intezaar kar raha hai. Ek teacher ke taur par bas ek guzarish: jo seekha hai use apne ghar walon tak pahunchao. Kisi ek ko bhi bacha liya, to ye is course ki sabse badi kamyabi hogi.',
    takeaways: [
      'Chaar style: passive, aggressive, passive-aggressive, assertive; assertive = saaf + izzat.',
      'Na kehne ke tools: broken record, fogging, pause button, ek option dena, chhota "na".',
      'DEAR MAN mushkil baatcheet ka formula hai (DBT).',
      'HALT, 24 ghante ka rule, independent verification, if-then plans aur code word = manipulation-proof aadatein.',
      'Victim ko blame nahi, support: suno, reality reflect karo, practical madad do; khatra ho to 112.'
    ],
    quiz: [
      ['Assertive communication ka core kya hai?', ['Hamesha haan kehna', 'Apni aur saamne wale dono ki zaroorat ki izzat karte hue saaf baat', 'Zor se bolna', 'Taane maarna'], 1, 'Assertive style izzat aur saafgoi dono rakhta hai.'],
      ['Bina bahas ke apni baat shaanti se dohrana kaunsi technique hai?', ['Fogging', 'Broken record', 'Love bombing', 'Triangulation'], 1, 'Manuel Smith ki broken record technique bahas ka maidan hi khatam kar deti hai.'],
      ['DEAR MAN me pehla "A" kis cheez ke liye hai?', ['Attack', 'Assert: apni maang saaf rakhna', 'Avoid', 'Apologize'], 1, 'Describe aur Express ke baad Assert: apni maang saaf bolna.'],
      ['HALT ka matlab kya hai?', ['Hungry, Angry, Lonely, Tired: in haalaton me bade faisle mat lo', 'Help, Ask, Listen, Talk', 'Hold, Act, Leave, Try', 'Bas rukne ka signal'], 0, 'Ye haalaatein hot state banati hain jahan manipulation aasaan hota hai.'],
      ['Scam me phanse dost se sabse pehle kya kehna behtar hai?', ['"Itna bewakoof kaise?"', '"Batane ke liye shukriya, tumhari galti nahi. Chalo 1930 par report karte hain."', '"Mujhe pehle se pata tha"', 'Kuch nahi kehna'], 1, 'Blame victim ko chup karata hai; support aur practical action madad karte hain.'],
      ['If-then plans (implementation intentions) par research kisne ki?', ['Peter Gollwitzer', 'Sigmund Freud', 'Jean Piaget', 'B. F. Skinner'], 0, 'Gollwitzer ki research: pehle se tay "agar X to Y" plan iraade par tikne me madad karta hai.'],
      ['TARES test kis cheez ke liye hai?', ['IQ naapne', 'Persuasion ethical hai ya nahi, ye jaanchne', 'Memory test', 'Personality type'], 1, 'Truthful, Authentic, Respectful, Equitable, Socially responsible.']
    ],
    more: [
      ['When I Say No, I Feel Guilty (Manuel J. Smith)', GR('When I Say No I Feel Guilty'), 'book'],
      ['Set Boundaries, Find Peace (Nedra Glover Tawwab)', GR('Set Boundaries Find Peace'), 'book'],
      ['DBT DEAR MAN skill explained', YT('DBT DEAR MAN interpersonal effectiveness'), 'video'],
      ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in/', 'link']
    ]
  });
})();
