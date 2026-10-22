/* Level 5 (part 2) · Prejudice, Relationships, Helping & Aggression */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 5.5 */
  C({
    id: 'prejudice', level: 5, mins: 19, visual: 'robbersCave',
    visualCap: 'Robbers Cave (1954): do groups banaye, unhe compete karwaya, dushmani badhi, aur phir common goals ne doori ghatayi. Dekho tension meter har phase me kaise badalta hai.',
    title: 'Prejudice, stereotypes aur discrimination',
    tag: 'In-group vs out-group, Robbers Cave, implicit bias, stereotype threat (UP ki caste study), aur cricket se doori kaise ghati',
    intro: 'Pichhle chapter me dekha ki group humein kaise badalta hai. Aaj uska sabse dardnak roop dekhenge: "hum vs woh" wali soch, jo jaati, dharm, rang aur state ke naam par logon ko baant deti hai. Ye chapter thoda personal lag sakta hai, aur yahi iski taakat hai. Saath me ye bhi dekhenge ki research ke hisaab se ye doori kam kaise hoti hai.',
    hook: 'Kisi ka naam ya surname sun kar hi uski jaati, dharm ya state ka andaza lagana, aur phir uske baare me "aise log to aise hi hote hain" wala faisla kar lena: ye hum sab kabhi na kabhi karte hain, aksar bina jaane. Psychology poochhti hai: <b>ye aata kahan se hai, aur ise kam kaise karein?</b>',
    blocks: [
      ['h', 'Teen alag cheezein'],
      ['table', ['Term', 'Kya hai', 'Example'], [
        ['Stereotype (soch)', 'Kisi group ke baare me generalized belief', '"Is state ke log kanjoos hote hain"'],
        ['Prejudice (feeling)', 'Group ke prati negative attitude ya feeling', 'Us group ke logon ko dekh kar chidh ya shak'],
        ['Discrimination (behaviour)', 'Group membership ki wajah se alag aur anuchit vyavhaar', 'Ghar kiraye par na dena, naukri me reject karna']
      ]],
      ['p', 'Prejudice <b>explicit</b> (khule taur par maana hua) bhi ho sakta hai aur <b>implicit</b> (bina jaane, automatic associations) bhi. Bahut se log jo khule taur par barabari me vishwas karte hain, unke andar bhi kuch implicit associations ho sakte hain.'],
      ['teacher', 'Ek aasaan trick: <b>stereotype = soch, prejudice = feeling, discrimination = kaam</b>. Ek dimaag me, ek dil me, ek haathon me. Exam me koi example aaye to bas poochho: ye soch hai, feeling hai ya action?'],

      ['h', 'Hum vs woh: social identity'],
      ['p', 'Henri <b>Tajfel</b> aur John Turner ki <b>social identity theory</b> (1979): hamari self-esteem ka ek hissa hamare <b>groups</b> (desh, dharm, college, cricket team) se aata hai. Apne group ko achha mehsoos karne ke liye hum <b>in-group favouritism</b> karte hain, aur kabhi out-group ko neeche dikhate hain.'],
      ['case', 'Minimal group paradigm (Tajfel, 1971)', 'British school ke ladkon ko bataya gaya ki unhe do groups me baanta ja raha hai, is aadhar par ki unhe <b>Klee ki painting pasand hai ya Kandinsky ki</b> (asal me random baanta gaya). Group ke members ek-doosre ko jaante bhi nahi the, koi itihaas nahi, koi muqabla nahi. Phir bhi jab unhe points baantne ko kaha gaya, unhone <b>apne group ko zyada</b> diye, aur kai baar to kul fayda kam karke bhi "unse zyada" rehna chuna. Itne bekaar aadhar par bhi "hum vs woh" ban gaya.'],
      ['teacher', 'Ab socho, painting ki pasand jaisi bekaar cheez se itna favouritism, to college, state ya cricket team jaisi badi pehchaan ka asar kitna hota hoga? India-Pakistan match ke din apni feelings ek baar yaad karo.'],
      ['p', '<b>Out-group homogeneity effect</b>: "woh sab ek jaise hain", jabki "humare group me to har tarah ke log hain". Hum apne group ki variety dekhte hain, doosre ki nahi.'],

      ['h', 'Robbers Cave: muqabla se dushmani'],
      ['case', 'Muzafer Sherif ka summer camp (1954)', [
        'Oklahoma ke Robbers Cave park me 11-12 saal ke 22 ladkon ko do groups me baanta gaya jo pehle ek-doosre ke baare me nahi jaante the. Ek hafte me har group ne apna naam (Eagles aur Rattlers), jhanda aur niyam bana liye.',
        'Phir unke beech muqable (tug-of-war, baseball) karwaye gaye jisme inaam sirf jeetne wale ko tha. Jaldi hi gaali-galauj, jhande jalana aur cabin me tod-phod shuru ho gayi. Sirf saath khana khilane jaisa <b>contact</b> kaafi nahi tha; khane ki ladaai ho gayi.',
        'Aakhir me researchers ne <b>superordinate goals</b> banaye: aise kaam jo dono groups ke milkar hi ho sakte the (paani ki supply theek karna, phansi truck ko saath kheenchna, movie ke liye paise jodna). Dheere-dheere dushmani ghati aur dosti badhi. Ye <b>realistic conflict theory</b> ka classic saboot hai: seemit resources ke liye muqabla prejudice paida karta hai.'
      ]],

      ['h', 'Prejudice ki cognitive jaden'],
      ['list', [
        '<b>Categorization</b>: dimaag cheezon ko groups me baant kar energy bachata hai; logon ke saath bhi. Ye natural hai, par stereotypes ki zameen bhi.',
        '<b>Illusory correlation</b>: ek group ke kisi member ki ek buri khabar yaad reh jaati hai aur "ye log aise hi hote hain" ban jaati hai.',
        '<b>Just-world belief</b> aur <b>scapegoating</b>: frustration ke time kisi kamzor group ko dosh dena (aarthik mandi me "bahar walon" ko).',
        '<b>Confirmation bias</b>: stereotype ke khilaf wale examples ko "exception" maan kar ignore karna.'
      ]],

      ['h', 'Implicit bias aur IAT'],
      ['p', '<b>Implicit Association Test (IAT)</b> (Greenwald aur saathi, 1998) naapta hai ki hum do concepts ko kitni jaldi jodte hain (jaise ek group ke chehre + "achha" vs "bura" shabd). Kai logon me automatic associations unke khule vishwas se alag nikalte hain. Project Implicit par ise khud try karke dekho.'],
      ['note', 'IAT par research me bahas hai: ek vyakti ka score baar-baar dene par kaafi badal sakta hai, aur akela IAT score kisi ke asli behaviour ko kamzor tareeke se predict karta hai. Isliye ise kisi ko "biased" ya "unbiased" ka label dene ke liye nahi, balki samaaj ke level par patterns samajhne aur khud par sochne ke tool ki tarah dekhna chahiye.'],

      ['h', 'Stereotype threat'],
      ['p', 'Claude <b>Steele</b> aur Joshua Aronson (1995) ne dikhaya ki jab Black American students ko bataya gaya ki ek test unki "intellectual ability" naapta hai, to unka performance gira; jab wahi test "problem solving puzzle" bataya gaya, to farak lagbhag gayab ho gaya. Jab kisi ko apne group ke negative stereotype ki <b>yaad dilayi</b> jaaye, to "kahin main ise sach na saabit kar doon" ki chinta performance gira sakti hai.'],
      ['case', 'Uttar Pradesh me jaati aur maze (Hoff aur Pandey, 2006)', 'World Bank ki economists Karla Hoff aur Priyanka Pandey ne UP ke gaon ke 11-12 saal ke ladkon ko maze (bhool-bhulaiya) suljhane diye, inaam ke saath. Jab kisi ki <b>jaati announce nahi ki gayi</b>, "low-caste" aur "high-caste" ladkon ka performance lagbhag <b>barabar</b> tha. Jab har ladke ka naam, gaon aur jaati <b>sabke saamne bataayi gayi</b>, to low-caste ladkon ka performance kaafi gir gaya aur ek bada gap paida ho gaya. Ability same thi; sirf jaati ko yaad dilane se farak aaya. Ye dikhata hai ki samajik pehchaan ki yaad bhi asli performance ko prabhavit kar sakti hai.'],
      ['teacher', 'Ye study dhyan se dobara padhna, kyunki yahan sab ek galti karte hain: farak <b>ability</b> me nahi tha, sirf <b>yaad dilane</b> me tha. Stereotype threat ka matlab ye nahi ki stereotype sach hai; matlab ye hai ki uska bojh performance ko neeche kheench leta hai.'],

      ['h', 'India ke context me prejudice'],
      ['p', 'India me jaati, dharm, kshetra, bhasha, gender aur rang ke aadhar par prejudice aur discrimination ki lambi aur dardnak kahani hai, aur research ise aaj bhi naukri, kiraye ke ghar aur shaadi ke faislon me dikhati hai. Matrimonial ads me "fair" ki maang aur fairness creams ka bazaar <b>colourism</b> ka udaharan hai. North-East ke logon ke saath bade shehron me nasli tippaniyan bhi report hoti hain. Samvidhan ka <b>Article 15</b> dharm, jaati, nasl, ling ya janm-sthaan ke aadhar par bhedbhaav ko mana karta hai, aur <b>Article 17</b> untouchability ko khatam karta hai. Psychology ka kaam ye samajhna hai ki ye attitudes kaise bante hain aur kaise badle ja sakte hain.'],

      ['h', 'Prejudice kaise kam ho?'],
      ['p', 'Gordon <b>Allport</b> (1954) ki <b>contact hypothesis</b>: alag groups ke beech contact prejudice ghata sakta hai, agar contact me ye sharten hon: <b>barabar status</b>, <b>common goals</b>, <b>cooperation</b> (muqabla nahi), aur <b>authority ya institution ka support</b>. Pettigrew aur Tropp (2006) ke 500 se zyada studies ke meta-analysis ne paaya ki contact sach me prejudice kam karta hai, khaas kar jab ye sharten poori hon.'],
      ['case', 'Cricket team jo jaatiyon ko jodti hai (Matt Lowe, 2021)', 'UP ke gaon me ek research me ~1,200 yuvaon ko cricket leagues me rakha gaya. Kuch teams <b>mixed-caste</b> thi (alag jaatiyon ke log ek hi team me), kuch same-caste. Jo log alag jaati ke saathiyon ke saath <b>ek team</b> me khele (collaborative contact), unki doosri jaati ke logon se dosti badhi aur wo unhe trade ya saathi chunne me zyada khule the. Par jinka contact sirf <b>virodhi team</b> ke roop me hua (adversarial contact), unme ye fayda nahi dikha. Matlab sirf milna nahi, <b>saath milkar kaam karna</b> zaroori hai, bilkul Robbers Cave jaisa.'],
      ['list', [
        '<b>Jigsaw classroom</b> (Elliot Aronson, 1971): har student ke paas paheli ka ek hissa; poora seekhne ke liye sabko ek-doosre par nirbhar rehna padta hai. Isse mixed classes me prejudice ghata aur self-esteem badhi.',
        '<b>Superordinate identity</b>: "hum sab is team/college/desh ke hain" wali badi pehchaan.',
        '<b>Perspective taking</b> aur <b>individuation</b>: vyakti ko group ka "sample" nahi, apni kahani wala insaan dekhna.',
        '<b>Norms</b>: jab leaders aur dost khule taur par bhedbhaav ko galat kehte hain, to prejudiced behaviour ghatta hai.'
      ]],
      ['terms', [
        ['Stereotype', 'Kisi group ke members ke baare me generalized belief.'],
        ['Prejudice', 'Group membership ke aadhar par negative attitude ya feeling.'],
        ['Discrimination', 'Group membership ke aadhar par anuchit behaviour.'],
        ['Implicit bias', 'Bina jaane, automatic associations jo judgement ko prabhavit karein.'],
        ['Social identity theory', 'Self-esteem ka hissa groups se aata hai, isliye in-group favouritism (Tajfel & Turner).'],
        ['In-group favouritism', 'Apne group ke members ko tarjeeh dena.'],
        ['Minimal group paradigm', 'Bekaar aadhar par bane groups me bhi favouritism dikhana.'],
        ['Out-group homogeneity effect', 'Doosre group ke sab members ko ek jaisa maanna.'],
        ['Realistic conflict theory', 'Seemit resources ke liye muqabla groups me dushmani paida karta hai.'],
        ['Superordinate goal', 'Aisa lakshya jo dono groups milkar hi paa sakein.'],
        ['Scapegoating', 'Frustration ke liye kisi kamzor group ko dosh dena.'],
        ['Implicit Association Test (IAT)', 'Concepts jodne ki speed se implicit associations naapne wala test.'],
        ['Stereotype threat', 'Negative stereotype ki yaad se performance ka girna.'],
        ['Contact hypothesis', 'Sahi sharton me groups ka contact prejudice ghata sakta hai (Allport).'],
        ['Jigsaw classroom', 'Cooperative learning jisme har student ka hissa zaroori hota hai (Aronson).'],
        ['Colourism', 'Twacha ke rang ke aadhar par bhedbhaav.']
      ]]
    ],
    outro: 'Aaj humne dekha ki stereotype, prejudice aur discrimination kahan se aate hain, aur barabar status wala, saath milkar kaam karne wala contact unhe kaise kam karta hai. Quiz me Robbers Cave aur UP wali studies par khaas dhyan dena. Agle chapter me mood thoda halka hoga: attraction, pyaar aur rishte.',
    takeaways: [
      'Stereotype (soch), prejudice (feeling), discrimination (behaviour) alag hain.',
      'Bekaar aadhar par bhi "hum vs woh" ban jaata hai (minimal groups); muqabla dushmani badhata hai (Robbers Cave).',
      'Stereotype threat performance gira sakta hai: UP ki caste study me jaati batane se gap paida hua.',
      'IAT samaaj ke patterns ke liye upyogi, par individual "label" ke liye nahi.',
      'Barabar status + common goals + cooperation wala contact prejudice ghatata hai (mixed-caste cricket teams).'
    ],
    quiz: [
      ['"Is group ke log kanjoos hote hain" kya hai?', ['Discrimination', 'Stereotype', 'Prejudice', 'Superordinate goal'], 1, 'Group ke baare me generalized belief stereotype hai.'],
      ['Tajfel ke minimal group study ne kya dikhaya?', ['Groups me hamesha dosti hoti hai', 'Bekaar aadhar par bane groups me bhi in-group favouritism hota hai', 'Bachche paintings nahi samajhte', 'Muqabla zaroori hai'], 1, 'Sirf "group" ka label hi favouritism ke liye kaafi tha.'],
      ['Robbers Cave me dushmani kis cheez se kam hui?', ['Sirf saath khana khana', 'Superordinate goals', 'Aur muqable', 'Groups ko alag rakhna'], 1, 'Milkar hi poore hone wale lakshyon ne doori ghatayi.'],
      ['Hoff aur Pandey ki UP study me low-caste ladkon ka performance kab gira?', ['Jab inaam badha', 'Jab sabke saamne jaati announce ki gayi', 'Jab maze aasaan tha', 'Kabhi nahi'], 1, 'Jaati yaad dilane se stereotype threat jaisa asar dikha.'],
      ['Allport ke contact hypothesis ki ek zaroori shart kya hai?', ['Ek group ka status ooncha ho', 'Barabar status aur common goals', 'Sirf ek baar milna', 'Muqabla'], 1, 'Barabar status, common goals, cooperation aur institutional support.'],
      ['Matt Lowe ki cricket study me kis tarah ka contact faydemand tha?', ['Virodhi team ke roop me (adversarial)', 'Ek hi team me saath khelna (collaborative)', 'Sirf dekhna', 'Online'], 1, 'Mixed-caste teams me saath khelne se cross-caste dosti badhi.']
    ],
    more: [
      ['Project Implicit (Harvard) · IAT khud try karo', 'https://implicit.harvard.edu', 'link'],
      ['The Nature of Prejudice (Gordon Allport)', GR('The Nature of Prejudice Allport'), 'book'],
      ['Crash Course Psychology: Prejudice and Discrimination', YT('Crash Course Psychology prejudice discrimination'), 'video']
    ]
  });

  /* 5.6 */
  C({
    id: 'attraction-relationships', level: 5, mins: 17, visual: 'sternberg',
    visualCap: 'Sternberg ka triangle of love: intimacy, passion aur commitment ke mel se alag-alag tarah ka pyaar. Kisi bhi kone ya kinare par tap karo.',
    title: 'Attraction, pyaar aur rishte',
    tag: 'Proximity, mere exposure, similarity, Sternberg ka triangle, attachment styles, Gottman ke "four horsemen" aur arranged vs love marriage research',
    intro: 'Pichhle chapter me dekha ki log ek-doosre se door kaise hote hain. Aaj ulta sawaal: hum kisi ke kareeb kyun aate hain, aur rishta tikta kaise hai? Dosti, pyaar, shaadi, sab is chapter me hai, aur sab tumhari apni zindagi se seedha judta hai.',
    hook: 'Tumhare sabse kareebi dost kaun hain? Shayad wo jo school me bagal me baithte the, ya hostel me agle kamre me rehte the. Pyaar aur dosti me "kismat" ka bada hissa asal me <b>proximity</b> aur kuch simple psychological niyam hain. Aur rishta tikta kaise hai, iska bhi science hai.',
    blocks: [
      ['h', 'Hum kisse attract hote hain?'],
      ['list', [
        '<b>Proximity</b>: jo paas hote hain, unse dosti ka chance sabse zyada. Festinger, Schachter aur Back (1950) ki MIT student housing study me log sabse zyada apne <b>bagal wale darwaze</b> ke padosi se dost bane, aur seedhiyon ke paas rehne walon ke zyada dost the.',
        '<b>Mere exposure effect</b> (Robert Zajonc, 1968): jo cheez ya chehra baar-baar dikhe, wo dheere-dheere zyada pasand aane lagta hai. Ek mazedaar study me logon ne apni <b>mirror image</b> (jaise wo khud ko roz aaine me dekhte hain) wali photo ko pasand kiya, jabki unke dosto ne unki <b>asli</b> photo ko (jaise wo use roz dekhte hain).',
        '<b>Physical attractiveness</b>: 1966 ke ek "computer dance" study (Walster aur saathi) me randomly match kiye gaye college students me, partner ko dobara milne ki ichchha ko sabse zyada partner ki <b>attractiveness</b> ne predict kiya, intelligence ya personality ne nahi. Par lambe rishton me log aksar apne jaise attractive partner chunte hain (<b>matching hypothesis</b>).',
        '<b>Similarity</b>: "opposites attract" se zyada "birds of a feather": milte-julte values, interests aur attitudes attraction ka strong predictor hain.',
        '<b>Reciprocity</b>: jo humein pasand karta hai, use hum zyada pasand karne lagte hain.'
      ]],
      ['teacher', 'Apne school ke best friend ko yaad karo. Kya wo bench par bagal me baithte the? Agar haan, to "kismat" ke saath proximity ka bhi haath tha. Mirror image wali baat bhi khud check karo: apni selfie aur kisi doosre ki kheenchi photo me se tumhe kaunsi zyada achhi lagti hai?'],
      ['p', '<b>"What is beautiful is good"</b> stereotype: attractive logon ko hum zyada smart, dayalu aur safal maan lete hain (halo effect). Research me attractive logon ko naukri aur kuch adalati faislon me bhi fayda milta dikha hai: ye ek tarah ka bias hai jiska humein dhyan rakhna chahiye.'],

      ['h', 'Pyaar ke prakaar'],
      ['compare', ['Passionate love', 'Tez attraction, excitement, "butterflies", saath rehne ki tadap. Rishte ki shuruaat me sabse tez; samay ke saath aam taur par shaant hota hai.'], ['Companionate love', 'Gehri dosti, bharosa, saath-saath zindagi bitane ka sukoon. Samay ke saath badhta hai aur lambe rishton ki neev hai.']],
      ['p', 'Robert <b>Sternberg</b> ka <b>triangular theory of love</b> (1986) teen ingredients batata hai: <b>intimacy</b> (kareebi, samajh), <b>passion</b> (attraction, excitement) aur <b>commitment</b> (saath rehne ka faisla). Inke alag mel se alag tarah ka pyaar banta hai, jaise upar ke triangle me dikhaya gaya hai. Teeno ho to <b>consummate love</b>, jo aadarsh hai par banaye rakhne ke liye mehnat maangta hai.'],
      ['teacher', 'Ruko, triangle me ek common galti hoti hai: passion kam hone ka matlab pyaar khatam hona nahi. Intimacy + commitment wala <b>companionate love</b> bhi poora pyaar hai, aur lambe rishton me aksar wahi sabse mazboot hota hai.'],

      ['h', 'Adult attachment styles'],
      ['p', 'Hazan aur Shaver (1987) ne Bowlby-Ainsworth ke bachpan ke attachment idea ko adult romantic rishton par lagaya:'],
      ['table', ['Style', 'Kaisa lagta hai', 'Rishte me'], [
        ['Secure', '"Kareeb aana aasaan hai; partner par bharosa hai, aur akela bhi theek hoon."', 'Zyada santushti, conflicts ko suljhana'],
        ['Anxious', '"Darr lagta hai partner mujhe chhod dega; baar-baar reassurance chahiye."', 'Jealousy, message ka jawab na aaye to bechaini'],
        ['Avoidant', '"Zyada kareebi se ghutan hoti hai; apni independence pasand hai."', 'Emotional doori, problems se bachna']
      ]],
      ['p', 'Achhi khabar: attachment style poori tarah fixed nahi. Ek secure partner ya therapy ke saath log dheere-dheere zyada secure ban sakte hain ("earned security").'],

      ['h', 'Rishte tikte kaise hain?'],
      ['p', 'Psychologist <b>John Gottman</b> ne lab me hazaron couples ko jhagadte aur baat karte dekha. Unke hisaab se stable couples me jhagde hote hain, par <b>positive aur negative interactions ka ratio lagbhag 5:1</b> hota hai. Unhone chaar khatarnak patterns batayi jinhe wo "four horsemen" kehte hain:'],
      ['table', ['Horseman', 'Kaisa dikhta hai', 'Antidote (ilaaj)'], [
        ['Criticism', '"Tum hamesha bhool jaate ho, tum kitne laaparwah ho!" (vyakti par hamla)', 'Gentle start-up: "Mujhe bura laga jab bill late hua; kya hum reminder laga sakte hain?"'],
        ['Contempt', 'Taana, aankhein ghumana, mazaak udana, neecha dikhana', 'Appreciation aur respect ki culture banana. (Contempt divorce ka sabse strong predictor mila.)'],
        ['Defensiveness', '"Meri galti nahi, tum bhi to..."', 'Apni zimmedari ka chhota hissa bhi maan lena'],
        ['Stonewalling', 'Chup ho jaana, baat se door chale jaana', '20 minute ka break lekar shaant hona, phir laut kar baat karna']
      ]],
      ['teacher', 'Yaad rakhne ki trick: chaar horsemen C-C-D-S, aur sabse khatarnak <b>Contempt</b>. Agli baar ghar me behas ho, to note karo ki shabd kaam ke baare me hain ("bill late hua") ya insaan ke baare me ("tum laaparwah ho"). Pehla suljhata hai, doosra chot karta hai.'],
      ['list', [
        '<b>Self-disclosure</b>: dheere-dheere apne baare me gehri baatein share karna kareebi badhata hai. Arthur Aron (1997) ke "36 sawaalon" wale experiment me ajnabiyon ne 45 minute me ek-doosre ke kaafi kareeb mehsoos kiya.',
        '<b>Equity</b>: rishte tab santushtidaayak lagte hain jab dono ko lagta hai ki dena-lena lagbhag barabar hai (ghar ka kaam bhi!).',
        '<b>Responsiveness</b>: partner ki khushi aur pareshani par dhyan aur parwah dikhana.'
      ]],

      ['h', 'Arranged vs love marriage: research kya kehti hai?'],
      ['p', 'India me abhi bhi bahut si shaadiyan parivaar ki bhoomika ke saath (arranged ya "arranged-love") hoti hain. Is par research seemit aur mixed hai. Kuch chhoti studies me (jaise 1980s me Jaipur ki ek study) love marriage wale couples me pyaar samay ke saath thoda ghata aur arranged wale couples me badha, aur America me rehne wale Indian couples par ek study me arranged aur love marriages ki santushti lagbhag <b>barabar</b> mili. Par in studies ke sample chhote hain aur bahut se factors (parivaar ka support, talaak ka social stigma) asar daalte hain.'],
      ['note', 'Research jo cheez saaf batati hai: shaadi kaise bhi shuru ho, <b>dono ki marzi (consent)</b>, aapsi respect, achhi baatcheet aur barabari santushti ke liye zaroori hain. Zabardasti ki shaadi (forced marriage) aur dahej jaise dabaav psychological aur kanooni dono tarah se nuksaandeh hain.'],
      ['p', '<b>Akelapan</b> bhi ek bada mudda hai. WHO ne 2023 me social connection par ek commission banaya, kyunki research me lamba akelapan sehat ke liye utna hi khatarnak paaya gaya jitne kuch bade risk factors. Dosti aur rishte "luxury" nahi, sehat ki zaroorat hain.'],
      ['terms', [
        ['Proximity', 'Bhougolik nazdeeki, jo attraction aur dosti badhati hai.'],
        ['Mere exposure effect', 'Baar-baar dekhne se kisi cheez ya vyakti ki pasand badhna.'],
        ['Matching hypothesis', 'Log apne jaise attractive partner chunte hain, ye vichar.'],
        ['"What is beautiful is good" stereotype', 'Attractive logon ko achhe gunon wala maan lena.'],
        ['Passionate love', 'Tez attraction aur excitement wala pyaar.'],
        ['Companionate love', 'Gehri dosti, bharose aur sukoon wala pyaar.'],
        ['Triangular theory of love', 'Intimacy, passion aur commitment se pyaar ke prakaar (Sternberg).'],
        ['Consummate love', 'Intimacy, passion aur commitment teeno wala pyaar.'],
        ['Adult attachment style', 'Romantic rishton me secure, anxious ya avoidant pattern.'],
        ['Four horsemen', 'Gottman ke chaar khatarnak patterns: criticism, contempt, defensiveness, stonewalling.'],
        ['Self-disclosure', 'Apne baare me personal baatein share karna.'],
        ['Equity theory', 'Rishte me dena-lena barabar lagne par santushti zyada.']
      ]],
      ['think', 'Ek couple roz ladta hai par phir bhi khush hai, aur doosra kabhi nahi ladta par door ho raha hai. Gottman ke hisaab se kya farak ho sakta hai?', [
        'Ladna khud problem nahi. Farak <b>kaise</b> ladte hain aur baaki samay kaisa hai, usme hai. Pehla couple shayad bina contempt ke ladta hai, jaldi "repair" karta hai (sorry, hasi, haath pakadna), aur din me kai positive moments rakhta hai (5:1). Doosra couple shayad stonewalling kar raha hai: mudde dabaye ja rahe hain aur emotional doori badh rahi hai.'
      ]]
    ],
    outro: 'Aaj ka saar: proximity, similarity aur exposure se attraction shuru hota hai, aur respect, baatcheet aur 5:1 wala ratio rishte ko tikata hai. Quiz me Sternberg aur Gottman wale sawaal dhyan se karna. Agla chapter Level 5 ka aakhri hai: hum kab madad karte hain, aur kab aggression dikhate hain.',
    takeaways: [
      'Proximity, mere exposure, similarity aur reciprocity attraction ke bade predictors hain.',
      'Passionate love samay ke saath shaant hota hai; companionate love badhta hai.',
      'Sternberg: intimacy + passion + commitment = consummate love.',
      'Gottman: contempt sabse khatarnak; achhe rishton me positive:negative ~5:1.',
      'Shaadi kaise bhi ho, consent, respect aur baatcheet santushti ki chaabi hain.'
    ],
    quiz: [
      ['MIT housing study me log sabse zyada kisse dost bane?', ['Same course walon se', 'Bagal ke darwaze wale padosi se', 'Sabse attractive logon se', 'Doosre sheher walon se'], 1, 'Proximity dosti ka bahut strong predictor hai.'],
      ['Baar-baar dekhne se kisi gaane ki pasand badhna kya hai?', ['Matching hypothesis', 'Mere exposure effect', 'Equity', 'Self-disclosure'], 1, 'Familiarity se liking badhti hai.'],
      ['Sternberg ke hisaab se intimacy + commitment, par passion nahi, kya kehlata hai?', ['Romantic love', 'Companionate love', 'Fatuous love', 'Infatuation'], 1, 'Gehri dosti aur commitment bina tez passion ke companionate love hai.'],
      ['Gottman ke hisaab se divorce ka sabse strong predictor kaunsa "horseman" hai?', ['Criticism', 'Contempt', 'Defensiveness', 'Stonewalling'], 1, 'Taana aur neecha dikhana (contempt) sabse khatarnak paaya gaya.'],
      ['"Darr lagta hai partner chhod dega, baar-baar reassurance chahiye" kaunsa attachment style hai?', ['Secure', 'Anxious', 'Avoidant', 'Disorganized'], 1, 'Abandonment ka darr anxious attachment ki pehchaan hai.'],
      ['Attraction ke baare me research ke hisaab se kya zyada sahi hai?', ['Opposites attract', 'Similarity attract karti hai', 'Sirf paisa matter karta hai', 'Proximity ka koi role nahi'], 1, 'Milte-julte values aur interests zyada strong predictor hain.']
    ],
    more: [
      ['The Seven Principles for Making Marriage Work (John Gottman)', GR('Seven Principles for Making Marriage Work Gottman'), 'book'],
      ['Crash Course Psychology: Aggression vs Altruism / attraction', YT('Crash Course Psychology attraction love relationships'), 'video'],
      ['Attached (Levine & Heller) · adult attachment par popular book', GR('Attached Levine Heller'), 'book']
    ]
  });

  /* 5.7 */
  C({
    id: 'helping-aggression', level: 5, mins: 18, visual: 'bystander',
    visualCap: 'Darley aur Latané (1968): jitne zyada log "sun" rahe the, utne kam participants ne seizure ke dauraan madad ki.',
    title: 'Madad aur aggression',
    tag: 'Bystander effect, Good Samaritan, empathy-altruism, frustration-aggression, garmi, media violence aur cyberbullying',
    intro: 'Pichhle chapter me dekha ki hum kisi ke kareeb kyun aate hain. Level 5 ke is aakhri chapter me do ulti cheezein saath dekhenge: madad aur aggression. Sadak par koi gira ho aur bheed bas dekh rahi ho, aisa scene tumne bhi dekha hoga. Aaj samjhenge ki log kyun nahi rukte, aur us pal me kya karna chahiye.',
    hook: '1964, New York: Kitty Genovese naam ki mahila par uske ghar ke paas hamla hua. Akhbaar ne likha "38 log dekhte rahe aur kisi ne madad nahi ki". Baad me pata chala ki ye kahani badha-chadha kar likhi gayi thi; kuch logon ne police ko call kiya tha aur zyada tar ne poora hamla dekha hi nahi tha. Par isne ek zaroori sawaal khada kiya: <b>kya bheed me log madad karne se katrate hain?</b>',
    blocks: [
      ['h', 'Bystander effect'],
      ['case', 'Seizure experiment (Darley aur Latané, 1968)', 'College students ek intercom par doosre "students" se baat kar rahe the (asal me recordings). Achanak ek "student" ko seizure aane laga aur wo madad maangne laga. Jo participant sochta tha ki wo <b>akela</b> sun raha hai, unme se ~85% ne seizure khatam hone se pehle madad ke liye bahar jaakar bataya. Jo sochte the ki <b>ek aur</b> vyakti sun raha hai, ~62%. Aur jo sochte the ki <b>chaar aur</b> log sun rahe hain, sirf ~31%.'],
      ['p', 'Ise <b>bystander effect</b> kehte hain: jitne zyada log maujood, kisi ek ke madad karne ka chance utna kam. Do mukhya kaaran:'],
      ['list', [
        '<b>Diffusion of responsibility</b>: "itne log hain, koi na koi kar hi dega." Zimmedari sab me bat jaati hai.',
        '<b>Pluralistic ignorance</b>: sab doosron ko dekh kar situation ko judge karte hain, aur jab sab shaant dikhte hain to sab sochte hain "shayad emergency nahi hai".'
      ]],
      ['case', 'Dhuen se bhara kamra (Latané aur Darley, 1968)', 'Students ek form bhar rahe the jab vent se dhuan aane laga. <b>Akele</b> participants me ~75% ne kuch minute me report kiya. Jab participant ke saath do log (actors) the jo dhuan dekh kar bhi kuch nahi kar rahe the, sirf ~10% ne report kiya, chahe kamra dhuen se bhar gaya aur wo khaans rahe the!'],
      ['teacher', 'Ruko, diffusion of responsibility aur pluralistic ignorance me sab confuse hote hain. Seizure study = "koi aur karega" (zimmedari bat gayi). Dhuen wala kamra = "sab shaant hain, to shayad kuch nahi hua" (situation galat padhi). Pehla <b>kaun</b> karega ka sawaal hai, doosra <b>kya</b> ho raha hai ka.'],
      ['steps', [
        ['Notice karna', 'Phone me khoye ya jaldi me hon to cheez dikhti hi nahi.'],
        ['Emergency samajhna', 'Kya ye sach me madad ki situation hai? (Pluralistic ignorance yahan rokti hai.)'],
        ['Zimmedari lena', '"Mujhe karna chahiye." (Diffusion of responsibility yahan rokti hai.)'],
        ['Jaanna ki kya karna hai', 'Ambulance number, first aid, ya kisi ko bulana.'],
        ['Madad karne ka faisla', 'Khatra, sharam aur "galat ho gaya to?" ke darr ke bawajood.']
      ]],
      ['tip', [
        '<b>Agar tumhe madad chahiye</b>, bheed se "koi madad karo!" mat kaho. Kisi <b>ek vyakti</b> ko chuno aur seedha kaho: "Aap, neeli shirt wale bhaiya, 112 par call kariye!" Isse diffusion of responsibility khatam ho jaati hai.',
        '<b>Agar tum bystander ho</b>: pehle "koi aur karega" wale vichaar ko pehchaano. Sadak haadse me madad karne walon ko India me <b>Good Samaritan</b> suraksha milti hai (2016 ke Supreme Court guidelines aur Motor Vehicles Act me 2019 ka sanshodhan): police unhe pareshaan nahi kar sakti aur unhe apna naam batana zaroori nahi.'
      ]],

      ['h', 'Hum madad kyun karte hain?'],
      ['list', [
        '<b>Evolutionary</b>: <b>kin selection</b> (apne rishtedaron ki madad se apne genes aage badhte hain) aur <b>reciprocal altruism</b> ("aaj main, kal tum").',
        '<b>Social norms</b>: reciprocity norm (madad mili to madad karo) aur social responsibility norm (jo nirbhar hain unki madad karo).',
        '<b>Empathy-altruism hypothesis</b> (Daniel Batson): jab hum kisi ke liye sach me empathy mehsoos karte hain, to hum <b>uske bhale</b> ke liye madad karte hain, sirf apne fayde ke liye nahi.',
        '<b>Mood</b>: "feel good, do good": achhe mood me log zyada madad karte hain. Aur kabhi guilt ya udaasi kam karne ke liye bhi (negative state relief).'
      ]],
      ['case', 'Jaldi me Good Samaritan (Darley aur Batson, 1973)', 'Princeton ke theology students ko doosri building me ek talk dena tha; kuch ko <b>"Good Samaritan"</b> (raste me ghayal ki madad karne wale ki dharmik kahani) par hi bolna tha. Raste me ek aadmi giraa hua, karahta hua mila (actor). Jinhe kaha gaya tha ki wo <b>late ho rahe hain</b>, unme se sirf ~10% ruke; jinke paas <b>time tha</b>, unme ~63% ne madad ki. Kuch jaldi wale students to aadmi ke upar se kood kar nikal gaye, Good Samaritan par bhashan dene ke liye! Personality ya dharmik vichaar se zyada <b>situation (jaldi)</b> ne behaviour tay kiya.'],
      ['teacher', 'Ye study har baar sochne par majboor karti hai. College ya office ki jaldi me tumne kitni baar kisi ko nazarandaaz kiya hoga, bina bure insaan hue? Agli baar jaldi ho, to bas ek second ruk kar dekhna ki raste me koi madad to nahi maang raha.'],

      ['h', 'Aggression: nuksaan pahunchane wala behaviour'],
      ['p', 'Psychology me <b>aggression</b> kisi ko jaanbujh kar physical ya emotional nuksaan pahunchane wala behaviour hai. <b>Hostile aggression</b> gusse se aata hai (nuksaan hi maksad); <b>instrumental aggression</b> kisi aur maksad ka zariya hota hai (lootne ke liye maarna).'],
      ['table', ['Factor', 'Research kya kehti hai'], [
        ['Biology', 'Genes, kam serotonin activity, kuch had tak testosterone, aur prefrontal cortex ki kamzori (impulse control) se juda. Alcohol inhibitions ghata kar aggression badhata hai.'],
        ['Frustration-aggression', 'Dollard (1939): lakshya me rukawat se gussa. Berkowitz ne sudhar kiya: koi bhi aversive cheez (dard, garmi, badbu, bhed-bhaav) aggression ka chance badhati hai.'],
        ['Garmi', 'Kai studies me zyada garam dino aur shehron me violent crimes zyada paaye gaye.'],
        ['Weapons effect', 'Berkowitz aur LePage (1967): kamre me bandook dikhne se gusse me log zyada aggressive bane. Hathiyaar sirf tool nahi, "cue" bhi hain.'],
        ['Social learning', 'Bandura ka Bobo doll: aggression dekh kar seekha jaata hai, khaas kar jab reward milta dikhe.'],
        ['Culture', 'Kuch samajon me "izzat" (culture of honour) ke naam par aggression ko zyada sweekriti milti hai.']
      ]],
      ['p', '<b>Media violence aur video games</b>: research me violent games aur thodi der ke aggressive thoughts/feelings ke beech chhota rishta milta hai. Par ye <b>gambhir real-world violence</b> paida karte hain, iska saboot kamzor hai, aur experts me bahas jaari hai. American Psychological Association (2015, 2020) ne kaha ki violent games ko seedhe criminal violence ka kaaran batane ka saboot kaafi nahi.'],
      ['myth', 'Gussa nikaal do (takiya peeto, cheekho) to gussa kam ho jaayega (catharsis).', 'Research (jaise Bushman, 2002) ke hisaab se venting gusse ko aur badhata hai. Behtar hai: thoda samay aur doori, dheemi saans, physical exercise (bina gusse ke focus ke), aur baad me shaant hokar "I feel" statements me baat karna. Gusse ko pehchaan kar uske peeche ki zaroorat (izzat, nyay) ko address karna CBT-based anger management ka hissa hai.'],
      ['teacher', 'Apna aakhri bada gussa yaad karo. Chillane ke baad sach me shaanti mili thi, ya baat aur bigdi? Agli baar 10 gehri saans aur thodi doori try karo; research ka paksh usi taraf hai.'],

      ['h', 'Online aggression aur cyberbullying'],
      ['p', 'Anonymity (deindividuation), turant reaction ki suvidha aur victim ka dard na dikhna online aggression ko aasaan banate hain: trolling, body-shaming, rape threats, private photos leak karna. Iska mental health par gambhir asar hota hai, khaas kar teenagers par.'],
      ['note', 'Agar tum ya koi jaanne wala online harassment ya cyber crime ka shikaar hai: screenshots save karo, account block/report karo, kisi bharosemand bade ko batao, aur India me <b>cybercrime.gov.in</b> par ya <b>1930</b> (National Cyber Crime Helpline) par report karo. Emotional support ke liye Tele-MANAS <b>14416</b>.'],
      ['terms', [
        ['Bystander effect', 'Zyada logon ki maujoodgi me kisi ek ke madad karne ka chance kam hona.'],
        ['Diffusion of responsibility', 'Group me zimmedari ka bat jaana: "koi aur karega".'],
        ['Pluralistic ignorance', 'Doosron ki shaanti dekh kar situation ko galat samajhna.'],
        ['Altruism', 'Doosre ke bhale ke liye nihsvaarth madad.'],
        ['Kin selection', 'Rishtedaaron ki madad se apne genes ko aage badhane ki evolutionary pravritti.'],
        ['Reciprocal altruism', 'Is ummeed me madad karna ki baad me badle me madad milegi.'],
        ['Empathy-altruism hypothesis', 'Sachchi empathy nihsvaarth madad paida karti hai (Batson).'],
        ['Aggression', 'Jaanbujh kar nuksaan pahunchane wala behaviour.'],
        ['Hostile aggression', 'Gusse se, nuksaan pahunchane ke maksad se kiya gaya aggression.'],
        ['Instrumental aggression', 'Kisi aur lakshya ke liye zariya ke roop me aggression.'],
        ['Frustration-aggression hypothesis', 'Lakshya me rukawat se aggression ka chance badhta hai.'],
        ['Weapons effect', 'Hathiyaar dikhne se aggressive vichaar aur behaviour badhna.'],
        ['Catharsis', 'Gussa nikaalne se gussa kam hone ka vichaar (research support nahi karti).'],
        ['Cyberbullying', 'Digital madhyamon se kisi ko pareshaan, dhamkana ya badnaam karna.']
      ]]
    ],
    outro: 'Aaj ka saar: bheed me madad ghatti hai, par "koi aur karega" ko pehchaanne aur kisi ek vyakti ko seedha bolne se ye chakra toot sakta hai; aggression biology, situation aur seekhne ka mel hai. Pehle is chapter ka quiz karo, phir Level 5 ka exam: social cognition se lekar madad aur aggression tak sab ek saath. Samaaj ka poora safar tumne kar liya hai, ab dikhane ki baari hai.',
    takeaways: [
      'Bystander effect: diffusion of responsibility aur pluralistic ignorance madad rokte hain.',
      'Madad chahiye to kisi ek vyakti ko seedha bolo; India me Good Samaritans ko kanooni suraksha hai.',
      'Situation (jaise jaldi) aksar personality se zyada tay karti hai ki hum madad karenge ya nahi.',
      'Aggression biology, frustration, garmi, hathiyaar ke cues aur social learning ka mel hai.',
      'Venting gussa badhata hai; online harassment ko 1930 ya cybercrime.gov.in par report karo.'
    ],
    quiz: [
      ['Darley-Latané seizure study me madad sabse zyada kab hui?', ['Jab chaar aur log sun rahe the', 'Jab participant sochta tha wo akela hai', 'Jab ek aur sun raha tha', 'Kabhi nahi'], 1, 'Akele participants me ~85% ne madad ki.'],
      ['"Itne log hain, koi na koi kar dega" kis concept ko dikhata hai?', ['Pluralistic ignorance', 'Diffusion of responsibility', 'Kin selection', 'Catharsis'], 1, 'Group me zimmedari bat jaati hai.'],
      ['Good Samaritan study me madad ka sabse bada predictor kya tha?', ['Dharmik vishwas', 'Jaldi me hona ya na hona', 'Talk ka topic', 'Personality'], 1, 'Late hone wale students me se sirf ~10% ruke.'],
      ['Emergency me madad maangne ka sabse effective tareeka?', ['Bheed se zor se "koi madad karo"', 'Kisi ek vyakti ko chun kar seedha kaam batana', 'Chupchaap intezaar karna', 'Social media par post karna'], 1, 'Specific vyakti ko bolne se diffusion of responsibility khatam hoti hai.'],
      ['Kamre me bandook dikhne se aggression badhna kya kehlata hai?', ['Weapons effect', 'Frustration-aggression', 'Catharsis', 'Social facilitation'], 0, 'Berkowitz aur LePage ne dikhaya ki hathiyaar aggressive cue hain.'],
      ['India me cyber crime report karne ka helpline number?', ['100', '1930', '14416', '108'], 1, '1930 National Cyber Crime Helpline hai (aur cybercrime.gov.in).']
    ],
    more: [
      ['OpenStax Psychology 2e · 12.6-12.7 Aggression & Prosocial Behavior', OS(12), 'book'],
      ['Crash Course Psychology: Aggression vs Altruism', YT('Crash Course Psychology aggression vs altruism'), 'video'],
      ['National Cyber Crime Reporting Portal', 'https://cybercrime.gov.in', 'link']
    ]
  });
})();
