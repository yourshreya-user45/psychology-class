/* Level 6 (part 2) · Psychosis, Personality, Neurodevelopment, Therapy, Getting help */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 6.4 */
  C({
    id: 'schizophrenia-personality', level: 6, mins: 20, visual: 'schizSymptoms',
    visualCap: 'Schizophrenia ke symptoms teen groups me: positive (kuch "juda"), negative (kuch "ghata") aur cognitive. Kisi bhi card par tap karo.',
    title: 'Schizophrenia, personality aur doosre disorders',
    tag: 'Psychosis ka sach (split personality nahi), dopamine, family ka role, personality disorder clusters, eating disorders aur Dhat syndrome',
    hook: 'Filmon me "split personality" ko aksar schizophrenia bata diya jaata hai. Ye sabse common galatfahmi hai. Schizophrenia me personality "do tukdon" me nahi batti; balki <b>reality se rishta</b> kamzor padta hai. Aur sahi ilaaj aur parivaar ke saath bahut se log achhi zindagi jeete hain.',
    blocks: [
      ['h', 'Schizophrenia kya hai?'],
      ['p', '<b>Schizophrenia</b> ek gambhir mental disorder hai jo soch, perception, emotion aur behaviour ko prabhavit karta hai. WHO ke hisaab se duniya me lagbhag <b>300 me se 1</b> vyakti ko ye hota hai. Aam taur par <b>late teens se early 30s</b> me shuru hota hai, purushon me thoda jaldi. Ise <b>psychotic disorder</b> kehte hain kyunki isme <b>psychosis</b> (reality se sampark toota hua) hota hai.'],
      ['table', ['Symptom group', 'Kya hai', 'Example'], [
        ['Positive symptoms', 'Normal anubhav me kuch <b>juda</b>', '<b>Hallucinations</b> (zyada tar awaazein sunna jo doosron ko nahi sunti); <b>delusions</b> (pakke galat vishwas: "padosi mujhe zeher de rahe hain", "TV news mere liye secret message hai"); bikhri hui baat aur behaviour'],
        ['Negative symptoms', 'Normal kaamon me kuch <b>ghata</b>', 'Chehre par emotion kam (flat affect), motivation ki kami (avolition), bahut kam bolna, khushi na mehsoos hona, logon se katna'],
        ['Cognitive symptoms', 'Soch ki kshamta me kami', 'Dhyan, working memory, planning me dikkat; ye rozmarra aur naukri ko sabse zyada prabhavit karte hain']
      ]],
      ['myth', 'Schizophrenia ka matlab "split personality" (do alag log) hai, aur aise log khatarnak hote hain.', '"Split" ka matlab soch aur reality ke beech dooriyan hai, do personalities nahi (wo dissociative identity disorder hai, jo bilkul alag aur rare hai). Schizophrenia wale zyada tar log violent nahi hote; wo khud violence aur shoshan ke shikaar zyada hote hain. Risk tab badhta hai jab ilaaj na ho aur nasha saath ho.'],

      ['h', 'Kaaran: genes, dopamine aur mahaul'],
      ['list', [
        '<b>Genes</b>: heritability lagbhag 80%. Identical twin ko ho to doosre twin ka risk ~40-50% (100% nahi, matlab environment bhi zaroori).',
        '<b>Dopamine hypothesis</b>: kuch brain raaston (mesolimbic) me zyada dopamine activity positive symptoms se judi hai; isliye dopamine ko block karne wali antipsychotic dawaiyan hallucinations aur delusions kam karti hain. Prefrontal area me kam activity negative aur cognitive symptoms se judi maani jaati hai. Glutamate system bhi role nibhata hai.',
        '<b>Brain structure</b>: kuch logon me ventricles (brain ki khaali jagah) bade aur kuch areas me grey matter kam dikhta hai.',
        '<b>Environment</b>: garbh me infection ya kuposhan, janm ke samay complications, bachpan ka trauma, shehri tanaav, migration, aur <b>teenage me bhaari cannabis use</b> risk badhate hain.',
        'Sab milkar <b>diathesis-stress</b> pattern banate hain.'
      ]],
      ['h', 'Ilaaj aur parivaar ka role'],
      ['p', '<b>Antipsychotic dawaiyan</b> mukhya ilaaj hain. Purani (jaise haloperidol) me muscle stiffness aur <b>tardive dyskinesia</b> (anchahe movements) jaise side effects zyada the; nayi (jaise risperidone, olanzapine) me weight badhna aur sugar jaise side effects ka dhyan rakhna padta hai. <b>Clozapine</b> un logon me kaam aa sakti hai jinpar doosri dawaiyan kaam nahi karti.'],
      ['p', 'Dawai ke saath <b>psychosocial ilaaj</b> zaroori hai: family psychoeducation (parivaar ko beemari samjhana), CBT for psychosis, social skills training aur supported employment. Research me paaya gaya hai ki ghar me bahut zyada criticism, gussa ya over-involvement (<b>high expressed emotion</b>) relapse ka risk badhata hai, aur shaant, supportive parivaar relapse ghatata hai.'],
      ['ex', 'India me parivaar ki taakat', 'WHO ki 1970s se 1990s tak ki international studies me India jaise kuch deshon me schizophrenia ke kuch outcomes Western deshon se behtar dikhe. Ek sambhavit kaaran maana gaya parivaar ka saath rehna aur care me shaamil hona. (Is finding par baad me bahas bhi hui.) Chennai ki SCARF jaisi sansthaon ne Indian context me community aur family-based care par mahatvapurn kaam kiya hai. Parivaar ko sahi jaankari aur support mile, to wo ilaaj ka sabse bada hissa ban sakta hai.'],

      ['h', 'Dissociative disorders'],
      ['p', 'Dissociation me consciousness, memory, identity ya perception ke normal jodd me tootan hota hai. <b>Depersonalization/derealization</b> (khud ko ya duniya ko anreal ya sapne jaisa mehsoos karna), <b>dissociative amnesia</b> (zaroori personal yaadein, aksar trauma se judi, bhool jaana) aur bahut rare <b>dissociative identity disorder (DID)</b>, jise pehle "multiple personality" kehte the aur jo gambhir bachpan ke trauma se juda maana jaata hai. DSM me "possession" jaisi cultural expressions ka bhi zikr hai; India me kai baar aise anubhavon ko pehle dharmik nazar se dekha jaata hai.'],

      ['h', 'Personality disorders'],
      ['p', '<b>Personality disorder</b> sochne, mehsoos karne aur logon se judne ka aisa <b>lamba, sakht aur inflexible</b> pattern hai jo culture ki ummeedon se bahut alag ho, kai situations me dikhe, takleef ya impairment de, aur teenage ya early adulthood se shuru ho. DSM inhe teen clusters me baantta hai:'],
      ['table', ['Cluster', 'Theme', 'Disorders'], [
        ['A: odd / eccentric', 'Ajeeb ya shakki soch, logon se doori', 'Paranoid (sab par shak), schizoid (rishton me bilkul ruchi nahi), schizotypal (ajeeb vishwas aur behaviour)'],
        ['B: dramatic / emotional', 'Tez emotions, impulsivity, rishton me tufaan', 'Antisocial (doosron ke adhikaaron ki parwah nahi, kanoon todna), borderline (emotional instability, chhod diye jaane ka darr, self-harm), histrionic (attention ki tez zaroorat), narcissistic (ghamand, taareef ki bhookh, empathy kam)'],
        ['C: anxious / fearful', 'Chinta aur darr', 'Avoidant (rejection ke darr se katna), dependent (doosron par had se zyada nirbharta), obsessive-compulsive personality (perfectionism aur control; OCD se alag)']
      ]],
      ['p', '<b>Borderline personality disorder</b> ke liye Marsha Linehan ki <b>Dialectical Behaviour Therapy (DBT)</b> research me effective paayi gayi hai (agle chapter me). "Psychopath" shabd aam bolchaal me bahut use hota hai; clinically ye antisocial personality se juda par alag concept hai (jaise kam empathy, kam guilt, charm ke saath manipulation), jise Robert Hare ki checklist se naapa jaata hai.'],

      ['h', 'Eating disorders aur culture se jude syndromes'],
      ['list', [
        '<b>Anorexia nervosa</b>: bahut kam khana, khatarnak kam weight, weight badhne ka tez darr aur body ki galat tasveer. Psychiatric disorders me sabse zyada mortality wale disorders me se.',
        '<b>Bulimia nervosa</b>: binge eating (thodi der me bahut zyada khana, control khote hue) + compensatory behaviour (ulti karna, laxatives, bahut zyada exercise).',
        '<b>Binge-eating disorder</b>: binge episodes bina compensatory behaviour ke; sabse common eating disorder.',
        'India ke shehri yuvaon me body image pressure aur social media ki wajah se eating disorders badhte hue report ho rahe hain.'
      ]],
      ['p', '<b>Cultural concepts of distress</b>: kuch takleefein khaas cultures me khaas roop me dikhti hain. South Asia me <b>Dhat syndrome</b> ek jaana-maana udaharan hai: semen (dhatu) kho jaane ki chinta, jise kamzori, thakaan aur anxiety ka kaaran maana jaata hai. DSM-5 ise "cultural concept of distress" ke roop me zikr karta hai. Achhe clinician aise anubhavon ko culture ki bhasha me samajh kar ilaaj karte hain, mazaak ya dismiss nahi karte.'],
      ['terms', [
        ['Schizophrenia', 'Psychotic disorder jisme hallucinations, delusions, negative aur cognitive symptoms hote hain.'],
        ['Psychosis', 'Reality se sampark toota hua hona.'],
        ['Hallucination', 'Bina asli stimulus ke kuch sunna, dekhna ya mehsoos karna.'],
        ['Delusion', 'Saboot ke bawajood pakka galat vishwas.'],
        ['Positive symptoms', 'Normal anubhav me jude symptoms (hallucinations, delusions).'],
        ['Negative symptoms', 'Normal kaamon me kami (flat affect, avolition).'],
        ['Dopamine hypothesis', 'Kuch brain raaston me zyada dopamine activity psychosis se judi hai, ye vichar.'],
        ['Antipsychotics', 'Psychosis ke symptoms kam karne wali dawaiyan.'],
        ['Tardive dyskinesia', 'Lambe antipsychotic use se anchahe facial/body movements.'],
        ['Expressed emotion', 'Parivaar me criticism, hostility ya over-involvement ka level.'],
        ['Dissociation', 'Memory, identity ya perception ke normal jodd me tootan.'],
        ['Dissociative identity disorder', 'Do ya zyada alag identities wala rare dissociative disorder.'],
        ['Personality disorder', 'Lamba, sakht aur takleefdeh personality pattern.'],
        ['Borderline personality disorder', 'Emotional instability, chhod diye jaane ka darr aur impulsivity wala disorder.'],
        ['Antisocial personality disorder', 'Doosron ke adhikaaron ki lagataar anadekhi wala disorder.'],
        ['Anorexia nervosa', 'Khatarnak kam weight aur weight badhne ka tez darr wala eating disorder.'],
        ['Bulimia nervosa', 'Binge eating aur compensatory behaviour wala eating disorder.'],
        ['Cultural concept of distress', 'Culture-specific tareeke jisse takleef anubhav aur vyakt ki jaati hai (jaise Dhat syndrome).']
      ]]
    ],
    takeaways: [
      'Schizophrenia = positive, negative aur cognitive symptoms; split personality nahi.',
      'Genes, dopamine/glutamate, brain development aur environment (jaise teenage cannabis) milkar risk banate hain.',
      'Antipsychotics + family psychoeducation + psychosocial support se outcomes behtar; low expressed emotion relapse ghatata hai.',
      'Personality disorders teen clusters me: A (odd), B (dramatic), C (anxious); borderline ke liye DBT effective.',
      'Eating disorders gambhir hain; culture takleef ke roop ko shape karta hai (Dhat syndrome).'
    ],
    quiz: [
      ['Schizophrenia me "awaazein sunna jo doosron ko nahi sunti" kya hai?', ['Delusion', 'Hallucination', 'Flat affect', 'Avolition'], 1, 'Bina asli stimulus ke perception hallucination hai.'],
      ['Kaunsa negative symptom hai?', ['Delusion', 'Hallucination', 'Flat affect (emotion kam dikhna)', 'Bikhri baat'], 2, 'Negative symptoms normal kaamon me kami hain.'],
      ['Schizophrenia ke baare me sahi baat?', ['Ye split personality hai', 'Isme reality se sampark kamzor hota hai', 'Ye sirf budhape me hota hai', 'Ye hamesha violence laata hai'], 1, 'Schizophrenia psychosis hai, multiple personality nahi.'],
      ['Ghar me zyada criticism aur hostility schizophrenia me kis cheez ka risk badhata hai?', ['Recovery', 'Relapse', 'IQ', 'Dopamine kam hona'], 1, 'High expressed emotion relapse se juda hai.'],
      ['Emotional instability, chhod diye jaane ka darr aur self-harm kis disorder se jude hain?', ['Schizoid', 'Borderline personality disorder', 'Avoidant', 'OCD'], 1, 'Ye borderline personality disorder ki khaasiyatein hain; DBT effective hai.'],
      ['Dhat syndrome kya hai?', ['Ek genetic disease', 'South Asia ka cultural concept of distress: semen loss ki chinta', 'Ek eating disorder', 'Ek personality disorder'], 1, 'DSM-5 ise cultural concept of distress ke roop me batata hai.']
    ],
    more: [
      ['NIMH: Schizophrenia', 'https://www.nimh.nih.gov/health/topics/schizophrenia', 'link'],
      ['The Center Cannot Hold (Elyn Saks) · schizophrenia ke saath jeene wali law professor ki memoir', GR('The Center Cannot Hold Elyn Saks'), 'book'],
      ['Crash Course Psychology: Schizophrenia and Dissociative Disorders', YT('Crash Course Psychology schizophrenia dissociative disorders'), 'video']
    ]
  });

  /* 6.5 */
  C({
    id: 'neurodevelopmental', level: 6, mins: 17, visual: 'spectrum',
    visualCap: 'Autism ek seedhi line ("thoda" se "bahut") nahi hai. Har autistic vyakti ka profile alag hota hai. Alag logon ke profile dekho.',
    title: 'ADHD, autism aur learning disabilities',
    tag: '"Taare Zameen Par" se aage: neurodevelopmental disorders, myths vs facts, aur school-ghar me sahi support',
    hook: '2007 ki film <b>"Taare Zameen Par"</b> ke Ishaan ko sab "aalsi", "badtameez" aur "bewakoof" samajhte the. Asal me use <b>dyslexia</b> tha. Is film ne lakhon Indian parents aur teachers ko pehli baar learning disabilities ke baare me sochne par majboor kiya. Is chapter me un conditions ko samjhenge jo brain ke develop hone ke tareeke se judi hain.',
    blocks: [
      ['h', 'Neurodevelopmental disorders kya hain?'],
      ['p', 'Ye conditions <b>bachpan me develop hote brain</b> ke farak se judi hain aur aam taur par school jaane se pehle ya shuruaati school years me dikhne lagti hain. Inme ADHD, autism spectrum disorder, specific learning disorders, intellectual disability, communication disorders aur tic disorders shaamil hain. <b>Neurodiversity</b> ka nazariya kehta hai ki ye sirf "kamiyaan" nahi, dimaag ke kaam karne ke alag tareeke bhi hain, jinke saath challenges aur strengths dono aate hain; aur samaaj ka mahaul (support ya rukawat) farak paida karta hai.'],

      ['h', 'ADHD'],
      ['p', '<b>Attention-deficit/hyperactivity disorder</b> me attention aur/ya hyperactivity-impulsivity ke lagataar patterns hote hain jo umar ke hisaab se zyada hon, kam se kam 6 mahine se, 12 saal se pehle shuru hue, aur <b>do ya zyada settings</b> (ghar, school) me dikhte hon.'],
      ['compare', ['Inattention', 'Dhyan jaldi bhatakna, careless galtiyan, cheezein kho dena, instructions follow na kar paana, lambe mental effort wale kaam se bachna, bhoolna.'], ['Hyperactivity-impulsivity', 'Baith na paana, hath-pair hilaate rehna, bahut bolna, baari ka intezaar na kar paana, beech me bolna, bina soche karna.']],
      ['p', 'Teen presentations: mostly inattentive, mostly hyperactive-impulsive, ya combined. Duniya me lagbhag <b>5-7% bachchon</b> me ADHD paaya jaata hai, aur kai logon me ye adulthood tak chalta hai. Heritability lagbhag 70-80%. Brain ke executive function aur reward/dopamine systems me farak se juda hai.'],
      ['myth', 'ADHD buri parenting, zyada sugar, ya bas "aalsi" hone se hota hai; bachcha chahe to dhyan de sakta hai.', 'ADHD ek strongly genetic neurodevelopmental condition hai. Sugar ka koi saboot nahi (Chapter 1.6). ADHD wale log interesting cheezon par ghanton focus kar sakte hain (hyperfocus), par "boring par zaroori" kaam me dhyan lagana unke liye sach me mushkil hai: problem willpower nahi, dimaag ka attention regulation hai.'],
      ['p', '<b>Ilaaj</b>: chhote bachchon (6 saal se kam) me pehle <b>behavioural parent training</b>; bade bachchon aur adults me <b>stimulant dawaiyan</b> (jaise methylphenidate) research me effective hain, doctor ki nigrani me. Saath me school accommodations, organization skills training aur adults ke liye CBT.'],
      ['tip', 'ADHD wale student ke liye: kaam ko 15-20 minute ke chhote blocks me baanto (beech me movement break), checklist aur visual timer, phone doosre kamre me, ek kaam ek waqt me, aur kaam poora hone par turant chhota reward. Class me aage baithna aur written instructions bhi madad karte hain.'],

      ['h', 'Autism spectrum disorder (ASD)'],
      ['p', 'Autism me do mukhya areas me lagataar farak hote hain: (1) <b>social communication aur interaction</b> (eye contact, gestures, baatcheet ka aana-jaana, rishte samajhna) aur (2) <b>restricted, repetitive behaviours aur interests</b> (ek jaise movements ya bolna, routine me badlav se pareshani, kisi topic me bahut gehri ruchi, aur awaaz, roshni, sparsh ke prati zyada ya kam sensitivity).'],
      ['p', '"Spectrum" ka matlab hai ki autism har vyakti me bahut alag dikhta hai: kuch log bolte nahi aur unhe din bhar support chahiye, kuch PhD karte hain aur sirf kuch situations me support chahiye. DSM-5 support ki zaroorat ke 3 levels batata hai. WHO ke hisaab se duniya me lagbhag <b>100 me se 1</b> bachche ko autism hai; India me alag-alag studies ke andaze alag hain, aur bahut se bachche abhi bhi diagnose nahi hote.'],
      ['list', [
        '<b>Shuruaati signs</b> (doctor se baat karne layak): ~12 mahine tak naam par response na dena ya ungli se ishaara na karna, ~16 mahine tak koi shabd na bolna, ya pehle seekhi bhasha/skills ka kho jaana.',
        '<b>Kaaran</b>: mukhya roop se genetic (heritability ~80%) aur garbh ke dauraan ke kuch factors.',
        '<b>Early intervention</b>: speech therapy, occupational therapy, aur <b>parent-mediated</b> programs jinme parents ko roz ke khel me baatcheet badhane ki training di jaati hai (jaise South Asia me test kiya gaya PASS program). India me disability certification ke liye <b>ISAA</b> (Indian Scale for Assessment of Autism) use hota hai.'
      ]],
      ['myth', 'Vaccines (jaise MMR) se autism hota hai.', '1998 ki jis study ne ye daava kiya tha (Andrew Wakefield), wo dhokhadhadi nikli: journal ne 2010 me use wapas le liya aur Wakefield ka medical license radd hua. Lakhon bachchon par hui badi studies me vaccines aur autism ka koi rishta nahi mila. Vaccine na lagwana bachchon ko khatarnak beemariyon ke risk me daalta hai.'],

      ['h', 'Specific learning disorders'],
      ['list', [
        '<b>Dyslexia</b>: padhne me dikkat (shabdon ko decode karna, spelling), normal intelligence ke bawajood.',
        '<b>Dyscalculia</b>: numbers aur maths me dikkat.',
        '<b>Dysgraphia</b>: likhne me dikkat (handwriting, spelling, vichaar ko likhit roop dena).'
      ]],
      ['p', 'Ye aam taur par school-age bachchon me 5-15% tak paaye jaate hain. India me <b>Rights of Persons with Disabilities Act, 2016</b> specific learning disabilities ko disability ke roop me maanta hai, aur boards (jaise CBSE) eligible students ko extra time, scribe ya kuch subjects me chhoot jaisi suvidhayein dete hain. Jitni jaldi pehchaan aur sahi teaching (structured, multisensory), utna achha.'],
      ['ex', 'Ishaan aur Nikumbh sir', 'Film me art teacher Ram Shankar Nikumbh ne Ishaan ko "kamzor" ki jagah alag tareeke se seekhne wala bachcha dekha: reet par ungli se akshar banwana, clay se letters, aur uski painting ki shakti ko pehchaanna. Research ke hisaab se dyslexia ke liye <b>structured phonics</b> aur multisensory teaching sach me madad karti hai. Aur sabse bada farak padta hai jab bachche ko "bewakoof" ki jagah "tum alag tareeke se seekhte ho" ka message milta hai.'],

      ['h', 'Support kaise karein?'],
      ['list', [
        'Jaldi pehchaan: developmental milestones par nazar, aur shak ho to paediatrician, child psychologist ya developmental clinic se baat.',
        'Labels insult ki tarah nahi ("woh to autistic hai yaar" mazaak me nahi), balki samajh aur support ke liye.',
        'Strengths par focus: kai ADHD wale log creative aur energetic hote hain, kai autistic log detail, patterns aur imaandari me bahut achhe.',
        'Inclusion: classroom me chhote badlav (seating, breaks, written instructions, sensory-friendly space) sabke liye faydemand hote hain.'
      ]],
      ['terms', [
        ['Neurodevelopmental disorder', 'Brain development ke farak se judi conditions jo bachpan me dikhti hain.'],
        ['Neurodiversity', 'Dimaag ke kaam karne ke alag tareekon ko natural variation maanne ka nazariya.'],
        ['ADHD', 'Attention aur/ya hyperactivity-impulsivity ke lagataar patterns wala neurodevelopmental disorder.'],
        ['Executive function', 'Planning, attention control, working memory aur self-control jaise mental skills.'],
        ['Hyperfocus', 'Interesting kaam par bahut gehra, lamba focus (ADHD me aksar).'],
        ['Autism spectrum disorder', 'Social communication me farak aur restricted/repetitive behaviours wala spectrum disorder.'],
        ['Sensory sensitivity', 'Awaaz, roshni, sparsh jaise inputs ke prati zyada ya kam sensitivity.'],
        ['Early intervention', 'Bachpan me jaldi shuru kiya gaya support aur therapy.'],
        ['Specific learning disorder', 'Padhne, likhne ya maths me khaas dikkat, normal intelligence ke bawajood.'],
        ['Dyslexia', 'Padhne aur spelling me khaas dikkat.'],
        ['Dyscalculia', 'Numbers aur maths me khaas dikkat.'],
        ['Dysgraphia', 'Likhne me khaas dikkat.'],
        ['RPwD Act 2016', 'India ka disability adhikaar kanoon jo specific learning disabilities ko bhi shaamil karta hai.']
      ]]
    ],
    takeaways: [
      'Neurodevelopmental disorders brain development ke farak hain; challenges ke saath strengths bhi.',
      'ADHD genetic hai, buri parenting ya sugar se nahi; behaviour therapy aur dawaiyan effective.',
      'Autism ek spectrum hai: har vyakti alag; early intervention madad karta hai; vaccines autism nahi karti.',
      'Dyslexia/dyscalculia normal intelligence ke saath hote hain; RPwD Act 2016 accommodations deta hai.',
      'Jaldi pehchaan, sahi teaching aur respect sabse bada farak laate hain.'
    ],
    quiz: [
      ['ADHD ke liye symptoms kam se kam kitni settings me dikhne chahiye?', ['Ek', 'Do ya zyada', 'Sirf school', 'Sirf ghar'], 1, 'Ghar, school jaisi do ya zyada settings me.'],
      ['Vaccines aur autism ke baare me sahi baat?', ['Vaccines autism karti hain', 'Badi studies me koi rishta nahi mila; original daava dhokhadhadi tha', 'Sirf MMR se hota hai', 'Abhi pata nahi'], 1, 'Wakefield ki study retract hui aur bade data me koi link nahi.'],
      ['Dyslexia kis cheez me khaas dikkat hai?', ['Maths', 'Padhna aur spelling', 'Chalna', 'Sunna'], 1, 'Dyslexia reading-related learning disorder hai.'],
      ['Autism ko "spectrum" kyun kehte hain?', ['Kyunki ye rangon se juda hai', 'Kyunki har vyakti me iska roop aur support ki zaroorat bahut alag hoti hai', 'Kyunki ye theek ho jaata hai', 'Kyunki sirf ladkon me hota hai'], 1, 'Profiles aur support needs me bahut variety hoti hai.'],
      ['6 saal se chhote ADHD wale bachche ke liye pehla recommended ilaaj?', ['Sirf dawai', 'Behavioural parent training', 'Kuch nahi', 'ECT'], 1, 'Chhote bachchon me pehle parent training recommend ki jaati hai.'],
      ['India me kaunsa kanoon specific learning disabilities ko disability maanta hai?', ['MHCA 2017', 'RPwD Act 2016', 'RTE 2009', 'IPC'], 1, 'Rights of Persons with Disabilities Act 2016.']
    ],
    more: [
      ['WHO: Autism fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders', 'link'],
      ['NeuroTribes (Steve Silberman) · autism ka itihaas', GR('NeuroTribes Steve Silberman'), 'book'],
      ['Crash Course Psychology: autism and ADHD', YT('ADHD explained psychology Crash Course'), 'video']
    ]
  });

  /* 6.6 */
  C({
    id: 'therapies', level: 6, mins: 20, visual: 'cbtTriangle',
    visualCap: 'CBT ka cognitive triangle: thoughts, feelings aur behaviours ek-doosre ko chalate hain. Ek ko badlo, baaki bhi badalte hain.',
    title: 'Therapy kaise kaam karti hai',
    tag: 'Psychodynamic, humanistic, behaviour therapy, CBT, DBT, ACT, dawaiyan, ECT, aur India me lay counsellors ka kamaal',
    hook: '"Therapy to pagalon ke liye hoti hai" ya "bas baatein hi to karni hain, dost se kar lunga": ye soch India me karodon logon ko madad lene se rokti hai. Asal me therapy ek <b>skill-based, research-tested process</b> hai, jaise physiotherapy body ke liye. Is chapter me dekhenge ki alag therapies kya karti hain, aur kitna kaam karti hain.',
    blocks: [
      ['h', 'Do bade raaste'],
      ['compare', ['Psychotherapy', 'Trained professional ke saath baatcheet aur structured techniques se soch, emotions aur behaviour badalna. Clinical psychologists, counsellors, psychiatrists (kuch) karte hain.'], ['Biomedical therapy', 'Dawaiyan ya brain par seedha asar daalne wale treatments (ECT, rTMS). Psychiatrist (medical doctor) prescribe karta hai.']],

      ['h', 'Psychodynamic therapy'],
      ['p', 'Freud ki psychoanalysis se nikli. Lakshya: <b>unconscious conflicts</b> aur purane rishton ke patterns ko samajhna (insight). Techniques: <b>free association</b> (jo mann me aaye bina roke bolna), <b>dream analysis</b>, <b>resistance</b> (kuch topics se bachna) aur <b>transference</b> (therapist par purane rishton ki feelings daalna) par kaam, aur therapist ka <b>interpretation</b>. Aaj ki <b>short-term psychodynamic therapy</b> kam sessions me rishton ke patterns par focus karti hai, aur research me iske achhe nateeje bhi mile hain.'],

      ['h', 'Humanistic (client-centered) therapy'],
      ['p', 'Carl Rogers ki therapy me therapist "expert" nahi, balki ek garam, sachcha saathi hai jo client ko khud apne jawab dhoondhne me madad karta hai. Teen core conditions: <b>genuineness</b>, <b>unconditional positive regard</b> aur <b>empathy</b>. Mukhya technique <b>active listening</b> aur reflection hai.'],
      ['ex', 'Reflection kaisa sunai deta hai', [
        '<b>Client</b>: "Ghar me sab kehte hain bas engineering karo, par mujhe lagta hai main kuch aur ke liye bana hoon. Main confused hoon."',
        '<b>Therapist (reflection)</b>: "Lagta hai aap parivaar ki ummeedon aur apni andar ki awaaz ke beech khinchav mehsoos kar rahe ho, aur ye confusion bhaari lag raha hai."',
        'Na salah, na judgement: bas itna samajhna ki client khud ko suna hua mehsoos kare. Yahi har achhi counselling ki neev hai.'
      ]],

      ['h', 'Behaviour therapy: naya seekhna'],
      ['p', 'Learning principles (Level 3) ka use karke problem behaviours ko badalna, bina "kyun" me zyada jaaye.'],
      ['list', [
        '<b>Exposure therapy</b>: darr wali cheez ka dheere-dheere, safe tareeke se saamna, jab tak darr kam na ho jaaye (habituation aur naya safety learning). Phobias, PTSD, OCD (ERP) ke liye bahut effective.',
        '<b>Systematic desensitization</b> (Joseph Wolpe): relaxation seekh kar, darr ki seedhi (hierarchy) banakar neeche se upar badhna.',
        '<b>Virtual reality exposure</b>: flight, oonchai ya trauma scenes ka VR me saamna.',
        '<b>Aversive conditioning</b>: unwanted behaviour ko kisi apriya cheez se jodna (jaise alcohol ke saath ulti laane wali dawai). Ethical aur long-term asar par sawaal hain.',
        '<b>Token economies</b> aur reinforcement programs (hospitals, schools).'
      ]],
      ['vis', 'exposure', 'Exposure therapy ka graph: bachne (avoidance) par turant rahat par darr waisa hi rehta hai; tike rehne par darr apne aap girta hai, aur har session me peak chhota hota jaata hai.'],
      ['steps', [
        ['Kutte ki photo dekhna', 'Darr 20/100. Tab tak dekho jab tak darr aadha na ho jaaye.'],
        ['Kutte ka video', 'Darr 35/100.'],
        ['Door se patte me bandha kutta dekhna', 'Darr 50/100.'],
        ['Kutte wale kamre me rehna', 'Darr 70/100.'],
        ['Shaant kutte ko chhoona', 'Darr 90/100 se shuru, phir dheere-dheere kam. Har step tab, jab pichhla aasaan lagne lage.']
      ]],

      ['h', 'Cognitive therapies aur CBT'],
      ['p', '<b>Albert Ellis</b> ki <b>REBT</b> ka <b>ABC model</b>: <b>A</b>ctivating event (exam me fail) khud <b>C</b>onsequence (depression) paida nahi karta; beech me <b>B</b>elief hai ("mujhe har cheez me perfect hona <i>chahiye</i>, warna main bekaar hoon"). Irrational "musts" ko challenge karna therapy hai. <b>Aaron Beck</b> ki cognitive therapy <b>automatic thoughts</b> aur <b>cognitive distortions</b> ko pakadne aur saboot se jaanchne par focus karti hai. Aaj ka <b>CBT</b> cognitive aur behavioural techniques ka mel hai, aur depression, anxiety, OCD, insomnia, eating disorders jaise kai problems ke liye sabse zyada tested therapy hai.'],
      ['table', ['Cognitive distortion', 'Example'], [
        ['All-or-nothing', '"Ek sawaal galat hua, poora paper barbaad."'],
        ['Catastrophizing', '"Interview kharab gaya to kabhi naukri nahi milegi, zindagi khatam."'],
        ['Mind reading', '"Wo zaroor mujhe bewakoof samajh raha hoga."'],
        ['Fortune telling', '"Mujhe pata hai main fail ho jaunga."'],
        ['Overgeneralization', '"Ek baar dil toota, ab koi kabhi pyaar nahi karega."'],
        ['Labeling', '"Main loser hoon." (galti ko pehchaan bana dena)'],
        ['Should statements', '"Mujhe kabhi gussa nahi aana chahiye."'],
        ['Personalization', '"Mummy-papa ka jhagda meri wajah se hai."'],
        ['Emotional reasoning', '"Mujhe darr lag raha hai, matlab khatra zaroor hai."'],
        ['Mental filter', '10 taareefon me se 1 aalochana par hi atak jaana.']
      ]],
      ['lab', 'thoughtrecord'],

      ['h', 'Third-wave therapies'],
      ['list', [
        '<b>DBT (Dialectical Behaviour Therapy)</b>, Marsha Linehan: borderline personality disorder aur baar-baar self-harm ke liye. Chaar skills: mindfulness, distress tolerance (bina nuksaan ke tough pal jhelna), emotion regulation, interpersonal effectiveness. "Dialectical" = acceptance aur change dono saath.',
        '<b>ACT (Acceptance and Commitment Therapy)</b>: vichaaron se ladne ke bajay unhe "sirf vichaar" ki tarah dekhna (defusion), takleefdeh feelings ko jagah dena, aur apne <b>values</b> ki taraf kadam badhana.',
        '<b>MBCT (Mindfulness-Based Cognitive Therapy)</b>: depression ke wapas aane (relapse) ka risk ghatane me research-supported.'
      ]],
      ['p', 'Saath hi <b>group therapy</b> (doosron se seekhna, akelepan ka khatm hona), <b>family therapy</b> (problem ko parivaar ke system me dekhna) aur <b>couples therapy</b>, aur self-help groups (jaise Alcoholics Anonymous).'],

      ['h', 'Biomedical therapies'],
      ['table', ['Category', 'Kis liye', 'Examples / dhyan dene layak'], [
        ['Antidepressants', 'Depression, anxiety, OCD', 'SSRIs (fluoxetine, sertraline), SNRIs. 2-6 hafte me asar; achanak band nahi'],
        ['Anti-anxiety', 'Thodi der ki gambhir anxiety', 'Benzodiazepines: jaldi asar par dependence ka risk; sirf short-term'],
        ['Antipsychotics', 'Schizophrenia, mania', 'Risperidone, olanzapine; side effects ki monitoring'],
        ['Mood stabilizers', 'Bipolar disorder', 'Lithium (blood level check zaroori), valproate'],
        ['Stimulants', 'ADHD', 'Methylphenidate'],
        ['ECT', 'Gambhir/treatment-resistant depression', 'Anaesthesia ke saath; bahut effective; kuch samay memory par asar'],
        ['rTMS', 'Kuch depression cases', 'Magnetic pulses se brain area ko stimulate karna; bina anaesthesia']
      ]],
      ['note', 'Psychiatric dawaiyan sirf doctor ki salah se lo aur band bhi doctor ke saath karo. Internet ya doston ki dawai kabhi mat lo. Side effects ho to chhupao mat, doctor ko batao; aksar dose ya dawai badal kar theek ho jaata hai.'],

      ['h', 'Kya therapy sach me kaam karti hai?'],
      ['p', '1977 me Smith aur Glass ke mashhoor <b>meta-analysis</b> (375 studies) aur 1980 ke bade follow-up me paaya gaya ki therapy lene wala average vyakti ilaaj na lene wale <b>lagbhag 75-80% logon se behtar</b> tha. Alag therapies ke beech farak aksar chhota hota hai; sabse bada common factor hai <b>therapeutic alliance</b>: client aur therapist ke beech bharosa aur saath kaam karne ka rishta. Saath hi ummeed, empathy aur ek saaf plan.'],
      ['case', 'Goa ke lay counsellors (Sangath: MANAS aur PREMIUM trials)', 'India me psychologists bahut kam hain. Vikram Patel aur Sangath ki team ne community ke aam logon ko (bina psychology degree ke) training di ki wo depression aur anxiety ke liye seedha structured counselling dein. Goa ke primary health centres me hue bade trials (MANAS, 2010; aur Healthy Activity Program, 2017) me in <b>lay counsellors</b> ka ilaaj effective paaya gaya aur sasta bhi. Is "task-sharing" model ko ab duniya ke kai deshon me apnaya ja raha hai.'],
      ['terms', [
        ['Psychotherapy', 'Trained professional ke saath psychological techniques se ilaaj.'],
        ['Free association', 'Mann me jo aaye bina roke bolna (psychodynamic).'],
        ['Transference', 'Purane rishton ki feelings ko therapist par daalna.'],
        ['Resistance', 'Therapy me kuch topics ya badlav se unconscious bachav.'],
        ['Client-centered therapy', 'Rogers ki therapy: genuineness, unconditional positive regard, empathy.'],
        ['Active listening', 'Dhyan se sunna, reflect karna aur samajh dikhana.'],
        ['Exposure therapy', 'Darr wali cheez ka dheere-dheere safe saamna.'],
        ['Systematic desensitization', 'Relaxation ke saath fear hierarchy par dheere-dheere badhna (Wolpe).'],
        ['Fear hierarchy', 'Darr wali situations ki kam se zyada ki seedhi.'],
        ['ABC model', 'Activating event, Belief, Consequence (Ellis).'],
        ['Automatic thoughts', 'Situation me apne aap aane wale tez vichaar (Beck).'],
        ['Cognitive distortions', 'Soch ke galat, negative patterns (catastrophizing, mind reading).'],
        ['CBT', 'Cognitive aur behavioural techniques ka mel; sabse zyada tested therapy.'],
        ['DBT', 'Dialectical behaviour therapy: mindfulness, distress tolerance, emotion regulation, interpersonal skills.'],
        ['ACT', 'Acceptance and commitment therapy: defusion, acceptance, values.'],
        ['Therapeutic alliance', 'Client aur therapist ke beech bharose aur sahyog ka rishta.'],
        ['Lay counsellor', 'Bina professional degree ke trained community vyakti jo structured counselling deta hai.'],
        ['rTMS', 'Repetitive transcranial magnetic stimulation; magnetic pulses se brain stimulation.']
      ]]
    ],
    takeaways: [
      'Psychodynamic insight par, humanistic acceptance par, behaviour therapy naye learning par, aur CBT soch-behaviour badalne par focus karti hai.',
      'Exposure (dheere-dheere saamna) phobias, OCD aur PTSD ka sabse powerful tool hai.',
      'ABC model: ghatna nahi, uske baare me belief emotion paida karta hai.',
      'Dawaiyan aur ECT gambhir cases me zaroori aur effective; sirf doctor ki salah se.',
      'Therapy kaam karti hai (average client ~75-80% untreated logon se behtar); therapeutic alliance sabse bada factor; trained lay counsellors bhi effective.'
    ],
    quiz: [
      ['Therapist par purane rishton ki feelings daalna kya kehlata hai?', ['Resistance', 'Transference', 'Free association', 'Reflection'], 1, 'Transference psychodynamic therapy ka important concept hai.'],
      ['Carl Rogers ki therapy ke core conditions?', ['Punishment, reward, extinction', 'Genuineness, unconditional positive regard, empathy', 'Id, ego, superego', 'ABC'], 1, 'Client-centered therapy ke teen core conditions.'],
      ['Ellis ke ABC model me "B" kya hai?', ['Behaviour', 'Belief', 'Brain', 'Balance'], 1, 'Activating event aur Consequence ke beech Belief hai.'],
      ['"Mujhe darr lag raha hai, matlab khatra zaroor hai" kaunsa distortion hai?', ['Labeling', 'Emotional reasoning', 'Personalization', 'Mental filter'], 1, 'Feeling ko fact maan lena emotional reasoning hai.'],
      ['Borderline personality disorder ke liye kaunsi therapy khaas taur par bani?', ['DBT', 'ECT', 'Psychoanalysis', 'Token economy'], 0, 'Marsha Linehan ki DBT.'],
      ['Smith aur Glass (1977) ke meta-analysis ka mukhya nateeja?', ['Therapy kaam nahi karti', 'Average therapy client ~75-80% untreated logon se behtar', 'Sirf dawai kaam karti hai', 'Sirf psychoanalysis kaam karta hai'], 1, 'Therapy ka overall asar kaafi bada paaya gaya.'],
      ['Goa ke Sangath trials ne kya dikhaya?', ['Sirf psychiatrists hi ilaaj kar sakte hain', 'Trained lay counsellors depression ka effective aur sasta ilaaj de sakte hain', 'Therapy India me kaam nahi karti', 'Dawai hi ek raasta hai'], 1, 'Task-sharing model effective paaya gaya.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 16: Therapy and Treatment', OS(16), 'book'],
      ['Crash Course Psychology: Getting Help (therapy)', YT('Crash Course Psychology getting help psychotherapy'), 'video'],
      ['Sangath · Indian mental health research & services', 'https://sangath.in', 'link']
    ]
  });

  /* 6.7 */
  C({
    id: 'getting-help', level: 6, mins: 15, visual: 'algee',
    visualCap: 'Mental Health First Aid ka ALGEE action plan: koi bhi seekh sakta hai, jaise CPR.',
    title: 'Madad kab, kahan aur kaise',
    tag: 'Professional help kab lein, India me kahan milegi, therapist kaise chunein, dost ki madad (ALGEE), aur suicide prevention',
    hook: 'Agar aapka dost raat 1 baje message kare, <i>"yaar, sab kuch bekaar lagta hai, kuch samajh nahi aa raha"</i>, to aap kya likhoge? Zyada tar log ya to ghabra jaate hain ya "chill kar, sab theek ho jaayega" likh dete hain. Is chapter me wo simple skills hain jo kisi ki zindagi me sach me farak la sakti hain, shayad bacha bhi sakti hain.',
    blocks: [
      ['h', 'Professional madad kab lein?'],
      ['list', [
        'Udaasi, chinta ya bechaini <b>2 hafte se zyada</b> rahe aur kam na ho.',
        'Padhai, kaam, neend, khana ya rishte <b>lagataar</b> prabhavit ho rahe hon.',
        'Khud ko nuksaan pahunchane ya marne ke vichaar aayein (turant madad).',
        'Takleef se bachne ke liye nasha, sharab ya kisi aur cheez par nirbharta badhe.',
        'Bina medical kaaran ke shareerik takleefein (dard, thakaan) jo jaati na hon.',
        'Koi bada trauma ya nuksaan hua ho aur sambhalna mushkil lag raha ho.'
      ]],
      ['p', 'Yaad rakho: madad lene ke liye "bahut bura" hone ka intezaar zaroori nahi. Jaise dant dard me jaldi dentist jaana behtar hai, waise hi jaldi ki madad chhoti problem ko badi banne se rokti hai.'],

      ['h', 'India me madad kahan milegi?'],
      ['table', ['Kahan', 'Kya milta hai'], [
        ['Tele-MANAS (14416 / 1-800-891-4416)', 'Sarkari, 24x7, free, kai bhashaon me counselling; zaroorat ho to aage referral.'],
        ['Sarkari hospital ka psychiatry OPD', 'District hospitals, medical colleges, AIIMS, NIMHANS (Bengaluru) jaise sansthan; kam kharch ya free.'],
        ['District Mental Health Programme (DMHP)', 'Kai districts me community level par mental health services.'],
        ['RCI-registered clinical psychologists', 'Therapy aur psychological assessment. Rehabilitation Council of India ke registration (CRR number) se check kar sakte ho.'],
        ['Psychiatrists', 'Diagnosis aur dawai; gambhir problems me zaroori.'],
        ['College/university counselling centres', 'Students ke liye aksar free.'],
        ['NGOs aur helplines', 'Jaise iCall (TISS), Vandrevala Foundation, Sangath; kai jagah sliding-scale fees.']
      ]],
      ['h', 'Achha therapist kaise chunein?'],
      ['list', [
        '<b>Qualification</b> poochho: kis degree aur training ke saath practice karte hain? Clinical psychologist ke liye RCI registration.',
        '<b>Approach</b>: CBT, psychodynamic, etc. Aapki problem ke liye kaunsa evidence-based hai?',
        '<b>Comfort</b>: 2-3 sessions me agar bharosa aur samajh mehsoos na ho, to doosra therapist dhoondhna bilkul theek hai. Therapeutic alliance hi sabse bada factor hai.',
        '<b>Red flags</b>: ek session me "poora ilaaj" ka vaada, confidentiality ki parwah na karna, shaming ya judgement, aapki marzi ke bina dharmik/personal vichaar thopna, ya professional seema todna (dosti, paison ka len-den, romantic interest).'
      ]],

      ['h', 'Dost ki madad: ALGEE'],
      ['p', '<b>Mental Health First Aid</b> ek training program hai (Australia me shuru, ab India sahit kai deshon me) jo aam logon ko sikhata hai ki mental health crisis me pehli madad kaise karein, jaise CPR physical emergency me. Iska action plan <b>ALGEE</b> hai:'],
      ['steps', [
        ['A: Approach, assess, assist', 'Shaant samay aur jagah chuno. Dhyan do: kya suicide ya khud ko nuksaan ka khatra hai? Agar haan, turant madad.'],
        ['L: Listen non-judgementally', 'Beech me salah ya lecture mat do. Suno, sir hilao, unki feelings ko maan do: "Ye sach me bahut mushkil lag raha hoga."'],
        ['G: Give support and information', 'Bharosa dilao ki ye kamzori nahi aur madad maujood hai. Practical madad offer karo.'],
        ['E: Encourage professional help', 'Doctor, psychologist ya helpline ki taraf dheere se badhao; chaho to saath chalne ki offer karo.'],
        ['E: Encourage other supports', 'Dost, parivaar, neend, exercise, routine aur jo cheezein pehle madad karti thi.']
      ]],
      ['table', ['Ye kaho', 'Ye mat kaho'], [
        ['"Mujhe batane ke liye shukriya. Main sun raha hoon."', '"Sab theek ho jaayega, chill kar."'],
        ['"Ye sach me bhaari lag raha hoga."', '"Tumhare paas sab kuch hai, phir udaas kyun?"'],
        ['"Kya tum chahoge ki hum saath me kisi se baat karein?"', '"Mujhe bhi aisa hota hai, bas ignore karo."'],
        ['"Kya tum khud ko nuksaan pahunchane ke baare me soch rahe ho?"', '"Aisa mat socho, ye paap hai / log kya kahenge."'],
        ['"Main kal phir check karunga."', '"Positive socho, yoga karo, sab theek."']
      ]],

      ['h', 'Suicide ke khatre me kya karein'],
      ['p', 'Agar koi suicide ke vichaar bata raha hai ya warning signs dikh rahe hain (Chapter 6.3):'],
      ['list', [
        '<b>Seedhe aur shaanti se poochho</b>: "Kya tum suicide ke baare me soch rahe ho?" Ye vichaar nahi daalta.',
        '<b>Suno aur saath raho</b>. Agar turant khatra hai to unhe akela mat chhodo.',
        '<b>Khatarnak cheezon</b> ko pahunch se door karo (dawaiyan, zehreele padarth, dhaar wali cheezein), jahan safe ho.',
        '<b>Madad se jodo</b>: Tele-MANAS 14416, ya turant khatre me 112 ya nazdeeki emergency.',
        '<b>Raaz mat rakho</b>: jaan bachane ke liye kisi bharosemand bade ya professional ko batana dosti todna nahi hai.',
        '<b>Khud ka bhi khayal rakho</b>: kisi ko support karna bhaari ho sakta hai; aap bhi kisi se baat karo.'
      ]],
      ['note', [
        '<b>Helplines (India)</b>:',
        'Tele-MANAS: <b>14416</b> ya <b>1-800-891-4416</b> (24x7, free, sarkari) · Emergency: <b>112</b> · iCall (TISS): <b>9152987821</b> (din ke samay, Mon-Sat) · Vandrevala Foundation: <b>+91 9999 666 555</b> (24x7).',
        'Numbers kabhi badal sakte hain; Resources page par list hai aur official websites par latest jaankari dekho.'
      ]],

      ['h', 'Rozmarra ki mental fitness'],
      ['p', 'Self-care ilaaj ka replacement nahi, par neev zaroor hai. Research-supported basic aadatein:'],
      ['list', [
        '<b>Neend</b>: roz same time uthna (Chapter 2.6).',
        '<b>Movement</b>: hafte me zyada din 20-30 minute ki walk ya koi bhi physical activity.',
        '<b>Connection</b>: hafte me kam se kam kuch log jinse dil ki baat kar sako.',
        '<b>Sharab aur nasha</b> kam: ye thodi der rahat dete hain par mood aur neend ko kharab karte hain.',
        '<b>Meaning aur kaam</b>: chhote lakshya, kisi ki madad, shauk.',
        '<b>Digital boundaries</b>: notifications kam, sone se pehle screen band, comparison wale content se doori.'
      ]],
      ['p', '<b>Aapke adhikaar</b> (Mental Healthcare Act 2017): confidentiality, dignity, sarkari facilities me sasti ya muft care, ilaaj ke baare me jaankari paane ka adhikaar, advance directive aur nominated representative, aur zanjeer ya amaanveeya vyavhaar se suraksha.'],
      ['terms', [
        ['Mental Health First Aid', 'Mental health crisis me pehli madad dene ki training (aam logon ke liye).'],
        ['ALGEE', 'Approach, Listen, Give support, Encourage professional help, Encourage other supports.'],
        ['Non-judgemental listening', 'Bina salah, aalochana ya lecture ke dhyan se sunna.'],
        ['Tele-MANAS', 'India ka 24x7 free sarkari mental health helpline (14416).'],
        ['RCI', 'Rehabilitation Council of India, jo clinical psychologists ko register karta hai.'],
        ['DMHP', 'District Mental Health Programme: district level par mental health services.'],
        ['Warning signs', 'Wo baatein ya behaviour jo suicide ke khatre ka sanket ho sakte hain.'],
        ['Means restriction', 'Khud ko nuksaan pahunchane ke saadhano tak pahunch kam karna; suicide prevention ka proven tareeka.']
      ]]
    ],
    takeaways: [
      '2 hafte se zyada takleef, rozmarra me rukawat, ya khud ko nuksaan ke vichaar: professional madad lo.',
      'India me Tele-MANAS (14416), sarkari psychiatry OPD, RCI-registered psychologists aur NGOs madad dete hain.',
      'Therapist chunte waqt qualification, approach aur comfort dekho; red flags pehchaano.',
      'ALGEE: approach, listen, give support, encourage professional help, encourage other supports.',
      'Suicide risk me seedhe poochho, saath raho, khatarnak cheezein hatao, aur madad se jodo.'
    ],
    quiz: [
      ['ALGEE me "L" ka matlab?', ['Lecture dena', 'Listen non-judgementally', 'Leave alone', 'Laugh'], 1, 'Bina judgement ke sunna ALGEE ka core hai.'],
      ['India ka 24x7 free sarkari mental health helpline number?', ['100', '14416', '1930', '181'], 1, 'Tele-MANAS: 14416 (ya 1-800-891-4416).'],
      ['Udaas dost ke liye kaunsa jawab sabse madadgaar hai?', ['"Chill kar, sab theek ho jaayega"', '"Mujhe batane ke liye shukriya, main sun raha hoon. Ye bhaari lag raha hoga."', '"Tumhare paas sab kuch hai"', '"Aisa mat socho"'], 1, 'Sunna aur feelings ko validate karna sabse madadgaar hai.'],
      ['Clinical psychologist ki qualification India me kahan check kar sakte hain?', ['RCI registration (CRR number)', 'Aadhaar', 'PAN card', 'Facebook page'], 0, 'Rehabilitation Council of India clinical psychologists ko register karta hai.'],
      ['Koi turant suicide ke khatre me ho to kya nahi karna chahiye?', ['Seedhe poochhna', 'Saath rehna', 'Unhe akela chhod dena aur baat raaz rakhna', 'Helpline/emergency se jodna'], 2, 'Turant khatre me akela chhodna aur raaz rakhna khatarnak hai.'],
      ['Therapy me kaunsa red flag hai?', ['Therapist ka confidentiality samjhana', 'Ek session me poore ilaaj ka vaada', 'Qualification batana', 'Goals set karna'], 1, 'Jaadui ilaaj ke vaade ek red flag hain.']
    ],
    more: [
      ['Tele-MANAS official website', 'https://telemanas.mohfw.gov.in', 'link'],
      ['iCall (TISS) psychosocial helpline', 'https://icallhelpline.org', 'link'],
      ['Rehabilitation Council of India (registration check)', 'https://rehabcouncil.nic.in', 'link']
    ]
  });
})();
