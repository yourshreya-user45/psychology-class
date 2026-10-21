/* Level 3 · Sochne ki Kala · Learning, Memory & Cognition */
(function () {
  const C = window.PSY.chapter;
  const OS = (n) => `https://openstax.org/books/psychology-2e/pages/${n}-introduction`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;

  /* 3.1 */
  C({
    id: 'classical-conditioning', level: 3, mins: 16, visual: 'pavlov',
    visualCap: 'Classical conditioning ke teen phase: pehle ghanti neutral hai, phir ghanti + khana saath aate hain, aur aakhir me sirf ghanti se laar aane lagti hai.',
    title: 'Classical conditioning: Pavlov ka kutta aur aap',
    tag: 'Pressure cooker ki seeti, dentist ka drill, aur ads: dimaag cheezon ko jodna kaise seekhta hai',
    hook: 'Phone ki notification tone sunte hi bina dekhe dil me halki si khushi ya ghabrahat? Dentist ke drill ki awaaz se hi daant me sihran? Pressure cooker ki seeti sunte hi bhookh? Ye sab aapke dimaag ne bilkul <b>Pavlov ke kutton</b> ki tarah seekha hai.',
    blocks: [
      ['h', 'Ek galti se mili khoj'],
      ['p', 'Russian scientist <b>Ivan Pavlov</b> 1890s me kutton ke digestion par research kar rahe the (iske liye unhe 1904 me Nobel Prize mila). Unhone ek ajeeb cheez notice ki: kutte khana muh me aane se <b>pehle</b> hi laar tapkane lagte the, jaise khana laane wale assistant ke kadmon ki awaaz sunkar. Pavlov samajh gaye ki kutton ne kuch <b>seekha</b> hai. Isse psychology ki sabse buniyadi learning theory nikli.'],
      ['h', 'Paanch zaroori shabd'],
      ['terms', [
        ['Neutral stimulus (NS)', 'Wo cheez jo shuru me koi khaas response nahi deti. Jaise ghanti ki awaaz.'],
        ['Unconditioned stimulus (UCS)', 'Jo bina seekhe apne aap response paida kare. Jaise muh me khana.'],
        ['Unconditioned response (UCR)', 'UCS ka natural, bina seekha response. Jaise khane par laar.'],
        ['Conditioned stimulus (CS)', 'Pehle ka neutral stimulus jo UCS ke saath jud kar ab khud response paida karta hai. Ghanti, conditioning ke baad.'],
        ['Conditioned response (CR)', 'CS ka seekha hua response. Sirf ghanti par laar.']
      ]],
      ['steps', [
        ['Pehle (before)', 'Ghanti (NS) → koi laar nahi. Khana (UCS) → laar (UCR).'],
        ['Dauraan (during)', 'Ghanti bajao, turant khana do. Kai baar dohrao. Ghanti (NS) + Khana (UCS) → laar (UCR).'],
        ['Baad me (after)', 'Sirf ghanti (ab CS) → laar (ab CR). Kutte ne seekh liya ki ghanti = khana aane wala hai.']
      ]],
      ['ex', 'Pressure cooker ki seeti', [
        'Bachpan se aapne dekha ki seeti bajne ke kuch der baad garam khana milta hai. Seeti (pehle neutral) baar-baar khane (UCS) ke saath aayi. Ab sirf seeti (CS) sunkar bhookh aur muh me paani (CR) aa jaata hai, chahe aap padosi ke ghar me hon!',
        'School ki lunch bell, Zomato ki notification tone, mummy ka "khaana lag gaya" bolna: sab isi tarah conditioned stimulus ban jaate hain.'
      ]],

      ['h', 'Conditioning ke processes'],
      ['list', [
        '<b>Acquisition</b>: association banna. Sabse achha tab hota hai jab CS, UCS se <b>thoda pehle</b> aaye (aam taur par aadha second se kuch seconds), jaise ghanti pehle phir khana. Ulta order (pehle khana phir ghanti) me seekhna kamzor hota hai.',
        '<b>Extinction</b>: agar CS baar-baar bina UCS ke aaye (ghanti bajti rahe par khana na mile), to CR dheere-dheere kamzor hokar khatam ho jaata hai.',
        '<b>Spontaneous recovery</b>: extinction ke kuch samay baad CS dobara aaye to CR thoda wapas aa jaata hai. Matlab association mita nahi tha, sirf dab gaya tha.',
        '<b>Generalization</b>: CS jaise doosre stimuli par bhi response. Ek bell se conditioned kutta milti-julti awaaz par bhi laar tapkaata hai.',
        '<b>Discrimination</b>: sirf asli CS par response dena aur milte-julte par nahi. Jaise apne phone ki ringtone pehchaanna, doosron ki nahi.',
        '<b>Higher-order conditioning</b>: ek CS ko kisi naye neutral stimulus ke saath jodkar use bhi CS bana dena. Jaise ghanti se pehle light jalana; kuch der baad light se hi laar.'
      ]],
      ['lab', 'pavlovsim'],
      ['ex', 'Ek kutte ka kaatna, saare kutton se darr', 'Bachpan me gali ke ek kutte ne kaata (UCS: dard → UCR: darr). Ab har kutta (CS) darr (CR) paida karta hai, chahe chhota pyaara puppy ho: ye <b>generalization</b> hai. Therapy me dheere-dheere safe kutton ke saath anubhav (exposure) se <b>extinction</b> aur <b>discrimination</b> seekhi jaati hai: "har kutta khatarnak nahi".'],

      ['h', 'Darr bhi seekha ja sakta hai (aur bhulaaya bhi)'],
      ['case', 'Little Albert (Watson aur Rayner, 1920)', '9 mahine ke Albert ko safed chuha dikhaya gaya: pehle wo usse khelta tha (NS). Phir har baar chuhe ke saath peeche se lohe ki rod par zor ka hathauda maara gaya (UCS → darr UCR). Kuch hi pairings ke baad Albert chuhe (CS) se rone aur bhaagne laga (CR), aur ye darr safed khargosh, kutte aur fur coat tak <b>generalize</b> ho gaya. Ye dikhata hai ki phobias seekhi ja sakti hain. (Ethics ke liye ye study aaj unacceptable hai; Chapter 1.5 dekho.)'],
      ['case', 'Peter aur khargosh (Mary Cover Jones, 1924)', 'Watson ki student Mary Cover Jones ne ulta kaam kiya. Peter naam ka bachcha khargosh se bahut darta tha. Jones ne Peter ko uska pasandida khana diya aur khargosh ko <b>door</b> se dikhaya, phir har din thoda paas. Kuch hafton me Peter khargosh ko god me lekar khelne laga. Ise <b>counterconditioning</b> kehte hain, aur ye aage chal kar <b>systematic desensitization</b> aur <b>exposure therapy</b> ki neev bani (Level 6).'],

      ['h', 'Taste aversion: ek baar me seekhna'],
      ['p', 'Aam taur par conditioning ke liye kai pairings chahiye. Par <b>taste aversion</b> me ek baar kaafi hai, aur khana aur beemari ke beech ghanton ka gap ho tab bhi seekh ho jaati hai. <b>John Garcia</b> (1966) ke experiments me chuhe ek khaas swaad ko beemari (nausea) se jod lete the, par light ya awaaz ko nahi. Matlab hamara dimaag kuch associations (khana → pet kharab) ke liye <b>biologically prepared</b> hai, kyunki zehreela khana dobara na khaana survival ke liye zaroori tha.'],
      ['ex', 'Pani puri jo phir kabhi achhi nahi lagi', 'Ek baar street pani puri khane ke kuch ghante baad tez pet kharab hua. Saalon tak pani puri dekhte hi ji machalta hai, chahe dimaag jaanta hai ki galti shayad paani ki thi ya kisi aur cheez ki. Chemotherapy ke patients me bhi kai baar therapy se pehle khaye khane se aversion ho jaata hai; isliye doctors kabhi-kabhi therapy se pehle koi "scapegoat" naya swaad dene ki salah dete hain.'],

      ['h', 'Rozmarra me classical conditioning'],
      ['list', [
        '<b>Advertising</b>: product (NS) ko khush chehron, pasandida celebrity, catchy music (UCS → achhi feeling) ke saath baar-baar dikhaya jaata hai. Kuch samay baad sirf product ya logo achhi feeling deta hai (<b>evaluative conditioning</b>).',
        '<b>Emotions aur yaadein</b>: koi gaana jo kisi khaas waqt bajta tha, saalon baad wahi feeling wapas laata hai.',
        '<b>Anxiety</b>: jis jagah ek baar panic attack aaya (jaise metro), wahi jagah anxiety trigger ban sakti hai.',
        '<b>Drug tolerance</b>: body drug lene ke mahaul (jagah, routine) ko drug se jod leti hai aur pehle se counter-response taiyaar karti hai. Isliye naye, anjaane mahaul me same dose zyada khatarnak ho sakti hai: research (jaise Shepard Siegel ki) ise kuch overdose cases se jodti hai.',
        '<b>Immune system</b>: animal studies me immune response ko bhi kisi swaad ke saath condition kiya gaya hai.'
      ]],
      ['myth', 'Conditioning sirf janwaron par kaam karta hai; insaan to soch-samajh kar faisle lete hain.', 'Classical conditioning hamare emotions aur body responses ko lagataar shape karta hai, aksar bina humein pata chale: ads, darr, cravings, aur yahan tak ki body ki dawai ke prati reaction. Socha-samjha faisla bhi in seekhe hue emotions se prabhavit hota hai.'],
      ['think', 'Har baar phone vibrate hone par aapke pet me halki si ghabrahat kyun hoti hai?', [
        'Agar pichhle kuch mahino me kai baar vibration ke baad stressful message aaye (boss, exam result, jhagda), to vibration (pehle neutral) stress (UCS) ke saath jud gayi aur ab khud anxiety (CR) paida karti hai. Achhi khabar: kuch din notifications ko batch me dekhna ya tone badalna is association ko kamzor kar sakta hai.'
      ]],
      ['terms', [
        ['Classical conditioning', 'Learning jisme ek neutral stimulus kisi natural stimulus ke saath jud kar response paida karne lagta hai.'],
        ['Acquisition', 'Conditioning ka shuruaati phase jab association banta hai.'],
        ['Extinction', 'CS ke baar-baar UCS ke bina aane par CR ka kamzor hokar khatam hona.'],
        ['Spontaneous recovery', 'Extinction ke baad kuch samay beetne par CR ka thoda wapas aana.'],
        ['Stimulus generalization', 'CS jaise milte-julte stimuli par bhi CR dena.'],
        ['Stimulus discrimination', 'Sirf asli CS par response dena, milte-julte par nahi.'],
        ['Higher-order conditioning', 'Ek CS ka use karke naye neutral stimulus ko condition karna.'],
        ['Counterconditioning', 'Darr wale CS ko naye, achhe response ke saath jodkar purana response badalna.'],
        ['Taste aversion', 'Kisi khane ko beemari se jodkar usse nafrat seekhna, aksar ek hi baar me.'],
        ['Biological preparedness', 'Kuch associations ko jaldi seekhne ki evolutionary taiyaari.'],
        ['Evaluative conditioning', 'Kisi cheez ko achhi ya buri feeling wale stimulus ke saath jodkar uske prati pasand badalna.']
      ]]
    ],
    takeaways: [
      'NS + UCS baar-baar saath aayein to NS ban jaata hai CS, aur CR paida karta hai.',
      'Extinction se response kamzor hota hai, par spontaneous recovery dikhati hai ki association mita nahi.',
      'Generalization aur discrimination batate hain ki seekha hua kahan tak failta hai.',
      'Phobias seekhi ja sakti hain (Little Albert) aur counterconditioning se kam bhi ki ja sakti hain (Peter).',
      'Taste aversion ek hi baar me seekh jaata hai: hamara dimaag kuch associations ke liye biologically prepared hai.'
    ],
    quiz: [
      ['Pavlov ke experiment me conditioning ke BAAD ghanti kya hai?', ['Unconditioned stimulus', 'Conditioned stimulus', 'Neutral stimulus', 'Unconditioned response'], 1, 'Pehle neutral thi, khane ke saath jud kar ab conditioned stimulus ban gayi.'],
      ['Khana muh me aane par laar aana kya hai?', ['Conditioned response', 'Unconditioned response', 'Conditioned stimulus', 'Generalization'], 1, 'Ye natural, bina seekha response hai.'],
      ['Ghanti baar-baar bajti rahe par khana na mile to kya hoga?', ['Generalization', 'Extinction', 'Acquisition', 'Higher-order conditioning'], 1, 'CS bina UCS ke aane par CR kamzor hota hai: extinction.'],
      ['Ek kutte ke kaatne ke baad saare kutton se darna kya hai?', ['Discrimination', 'Generalization', 'Spontaneous recovery', 'Shaping'], 1, 'Darr milte-julte stimuli tak fail gaya: generalization.'],
      ['Ek baar khana khaakar beemar hone ke baad us khane se nafrat kya kehlata hai?', ['Taste aversion', 'Extinction', 'Latent learning', 'Insight'], 0, 'Garcia effect: taste aversion ek hi trial me aur lambe delay ke bawajood seekha ja sakta hai.'],
      ['Mary Cover Jones ne Peter ka khargosh ka darr kaise kam kiya?', ['Punishment se', 'Khargosh ko pasandida khane ke saath dheere-dheere paas laakar (counterconditioning)', 'Peter ko khargosh se door rakh kar', 'Hypnosis se'], 1, 'Darr wale stimulus ko achhe anubhav ke saath jodna counterconditioning hai.']
    ],
    more: [
      ['OpenStax Psychology 2e · 6.2 Classical Conditioning', OS(6), 'book'],
      ['Crash Course Psychology: How to Train a Brain', YT('Crash Course Psychology how to train a brain classical conditioning'), 'video'],
      ['Simply Psychology: Classical Conditioning', 'https://www.simplypsychology.org/classical-conditioning.html', 'link']
    ]
  });

  /* 3.2 */
  C({
    id: 'operant-conditioning', level: 3, mins: 18, visual: 'operantGrid',
    visualCap: 'Operant conditioning ke chaar raaste: kuch add karo ya hatao, aur behaviour badhao ya ghatao. Har box par tap karke example dekho.',
    title: 'Operant conditioning: reward, punishment aur Instagram',
    tag: 'Skinner box, reinforcement schedules, shaping, aur kyun "kabhi-kabhi milne wala reward" sabse addictive hai',
    hook: 'Instagram ya YouTube chhodna itna mushkil kyun hai? Kyunki har baar refresh karne par <b>kabhi</b> kuch mazedaar milta hai, <b>kabhi</b> nahi. Ye "kabhi-kabhi" wala reward hi sabse powerful hai, aur iska science 80 saal pehle ek chuhe aur kabootar par khoja gaya tha.',
    blocks: [
      ['h', 'Thorndike ki billi aur law of effect'],
      ['p', '1890s me <b>Edward Thorndike</b> ne bhookhi billiyon ko "puzzle box" me band kiya. Bahar khana tha, aur box ek lever dabane se khulta tha. Pehli baar billi ne bahut der idhar-udhar haath maara, achanak lever dab gaya. Har agle trial me wo jaldi nikalne lagi. Thorndike ka <b>law of effect</b>: <i>jis behaviour ke baad achha nateeja aata hai, wo dohraya jaata hai; jiske baad bura, wo kam hota hai.</i>'],
      ['h', 'Skinner aur operant conditioning'],
      ['p', '<b>B.F. Skinner</b> ne isse aage badhaya aur "Skinner box" banaya jisme chuha lever dabaye ya kabootar button par chonch maare to khana mile. Classical conditioning me response <b>automatic</b> hota hai (laar), par <b>operant conditioning</b> me jaanwar ya insaan <b>khud koi action</b> karta hai aur uske <b>consequence</b> se seekhta hai.'],
      ['compare', ['Classical conditioning', 'Do stimuli ke beech association. Response automatic/involuntary (laar, darr). Seekhne wala "passive".'], ['Operant conditioning', 'Behaviour aur uske consequence ke beech association. Behaviour voluntary (padhna, lever dabana). Seekhne wala "active".']],

      ['h', 'Reinforcement vs punishment'],
      ['p', 'Do sawaal poochho: (1) kya kuch <b>add</b> (+) kiya ya <b>remove</b> (−) kiya? (2) kya behaviour <b>badha</b> (reinforcement) ya <b>ghata</b> (punishment)? Isse chaar combinations bante hain:'],
      ['table', ['', 'Behaviour BADHTA hai (reinforcement)', 'Behaviour GHATTA hai (punishment)'], [
        ['Kuch ADD karo (+)', '<b>Positive reinforcement</b>: achha kaam karne par chocolate, taareef, salary, likes.', '<b>Positive punishment</b>: galat kaam par daant, challan, extra homework.'],
        ['Kuch REMOVE karo (−)', '<b>Negative reinforcement</b>: seat belt lagate hi beep band; sar dard me goli lene se dard gayab.', '<b>Negative punishment</b>: der se ghar aane par phone chheen lena; foul par player ko bahar karna.']
      ]],
      ['myth', 'Negative reinforcement ka matlab punishment hai.', 'Bilkul nahi. "Negative" ka matlab hai <b>kuch hataana</b>, aur "reinforcement" ka matlab hai behaviour <b>badhna</b>. Jab aap alarm ka snooze dabate ho aur irritating awaaz band hoti hai, to snooze dabane ka behaviour <b>badhta</b> hai: ye negative reinforcement hai. Avoidance (jaise exam ki tension se bachne ke liye padhai taalna) bhi negative reinforcement se hi chalta hai.'],
      ['p', '<b>Primary reinforcers</b> natural hote hain (khana, paani, garmi). <b>Secondary (conditioned) reinforcers</b> seekhe hue hote hain kyunki wo primary se jude hain: paisa, marks, medals, likes, XP points. Hospitals aur schools me <b>token economy</b> use hoti hai: achhe behaviour par tokens jo baad me inaam me badle ja sakte hain.'],

      ['h', 'Shaping: chhote-chhote kadmon se'],
      ['p', 'Ek kabootar ko table tennis khelna kaise sikhaoge? Wo khud to karega nahi. Skinner ne <b>shaping</b> use ki: target behaviour ke <b>kareeb-kareeb</b> wale behaviour ko step by step reward karna (successive approximations). Pehle ball ki taraf dekhne par khana, phir paas jaane par, phir chonch se chhoone par, phir dhakelne par. Skinner ne sach me kabootaron ko ping-pong khelna sikhaya tha!'],
      ['ex', 'Bachche ko khud padhna sikhana', 'Pehle din kitaab kholne par taareef. Phir ek page dekhne par. Phir ek line padhne par. Phir poora page. Har step par reward, aur dheere-dheere reward ki sharat badhti hai. Yahi tareeka dog training, physiotherapy, aur autism ke liye ABA (Applied Behaviour Analysis) programs me use hota hai.'],

      ['h', 'Reinforcement schedules: kab reward dein?'],
      ['p', '<b>Continuous reinforcement</b> (har baar reward) se seekhna jaldi hota hai, par reward band hote hi behaviour bhi jaldi khatam hota hai. <b>Partial (intermittent) reinforcement</b> (kabhi-kabhi reward) se seekhna dheema, par behaviour bahut zyada tikau hota hai. Chaar partial schedules:'],
      ['table', ['Schedule', 'Matlab', 'Example', 'Pattern'], [
        ['Fixed ratio (FR)', 'Har N responses ke baad reward', 'Coffee card: 10 coffee par 1 free; piece-rate kaam', 'Tez responding, reward ke baad chhota break'],
        ['Variable ratio (VR)', 'Average N responses par, par unpredictable', 'Lottery, slot machines, reels me achha video, machhli pakadna', 'Sabse tez aur sabse tikau responding'],
        ['Fixed interval (FI)', 'Fixed time ke baad pehle response par reward', 'Monthly salary; exam se pehle hi padhai', '"Scallop": reward ke kareeb aate hi tezi'],
        ['Variable interval (VI)', 'Unpredictable time ke baad', 'WhatsApp/email check karna; surprise quiz', 'Dheema par lagataar, steady responding']
      ]],
      ['vis', 'schedules', 'Chaaron schedules ke cumulative response graphs. Line jitni seedhi aur tez upar, behaviour utna zyada. VR sabse tez hai; FI me "scallop" pattern dikhta hai.'],
      ['ex', 'Reels aur slot machine me kya common hai?', [
        'Har swipe ek "lever press" hai. Kabhi bahut mazedaar video, kabhi bekaar: ye <b>variable ratio</b> schedule hai, wahi jo casinos ki slot machines use karti hain. Dimaag ka dopamine system <b>unpredictable reward</b> par sabse zyada active hota hai, isliye "bas ek aur" chalta rehta hai.',
        'Iske khilaf tareeke: app ko home screen se hatao (response cost badhao), notifications band karo, aur time limit lagao. Behaviour ko uske triggers aur rewards badal kar hi badla ja sakta hai, sirf willpower se nahi.'
      ]],

      ['h', 'Punishment kaam karti hai? Kab nahi?'],
      ['p', 'Punishment behaviour ko <b>thodi der</b> ke liye rok sakti hai, khaas kar agar turant aur har baar ho. Par iske nuksaan bhi hain:'],
      ['list', [
        'Ye sirf batati hai kya <b>nahi</b> karna, ye nahi ki kya <b>karna</b> hai.',
        'Darr aur anxiety paida hoti hai, aur behaviour sirf punish karne wale ke saamne rukta hai (chhupkar chalta rehta hai).',
        '<b>Physical punishment</b> aggression sikhati hai: bachcha seekhta hai ki problem maar se suljhti hai. 2016 me Gershoff aur Grogan-Kaylor ke ~1.6 lakh bachchon ke data wale meta-analysis me spanking ka koi fayda nahi mila, balki zyada aggression, anti-social behaviour aur mental health problems se rishta mila.',
        'India me Right to Education Act (2009) school me bachchon ki physical punishment aur mental harassment par rok lagata hai.'
      ]],
      ['tip', 'Behaviour badalne ka better formula: <b>jo chahiye use turant aur specifically reinforce karo</b> ("Tumne aaj khud homework shuru kiya, bahut badhiya!"), aur galat behaviour ke liye <b>negative punishment</b> (thodi der screen band) ya natural consequences. <b>Premack principle</b> ("Dadi ka rule"): pasand ka kaam (TV) na-pasand kaam (homework) ke baad do: "pehle homework, phir cartoon".'],
      ['ex', 'Is website me bhi operant conditioning hai', 'XP points (secondary reinforcer), badges, streaks aur level unlock: ye sab positive reinforcement hai. Streak toot jaane ka darr negative reinforcement jaisa kaam karta hai (roz aao taaki streak ka nuksaan na ho). Duolingo aur fitness apps bhi yahi karte hain. Jaankar use karo to ye tools aapke favour me kaam karte hain.'],
      ['think', 'Ek bachcha supermarket me chocolate ke liye rota hai, aur maa chup karane ke liye chocolate de deti hai. Kaun kise condition kar raha hai?', [
        'Dono ek-doosre ko! Bachche ka rona <b>positively reinforce</b> ho raha hai (rone par chocolate mili), to wo agli baar aur roega. Maa ka chocolate dena <b>negatively reinforce</b> ho raha hai (chocolate dene se irritating rona band hua), to wo agli baar bhi degi. Ye cycle todne ke liye rone par reward band karna padega, aur shuru me rona badhega (<b>extinction burst</b>) phir kam hoga.'
      ]],
      ['terms', [
        ['Law of effect', 'Thorndike ka niyam: achhe consequence wale behaviour dohraye jaate hain, bure wale kam hote hain.'],
        ['Operant conditioning', 'Behaviour aur uske consequences ke beech association se seekhna.'],
        ['Reinforcement', 'Wo consequence jo behaviour ke dohraye jaane ka chance badhaye.'],
        ['Punishment', 'Wo consequence jo behaviour ke dohraye jaane ka chance ghataye.'],
        ['Positive reinforcement', 'Achhi cheez add karke behaviour badhana.'],
        ['Negative reinforcement', 'Buri cheez hata kar behaviour badhana.'],
        ['Positive punishment', 'Buri cheez add karke behaviour ghatana.'],
        ['Negative punishment', 'Achhi cheez hata kar behaviour ghatana.'],
        ['Primary reinforcer', 'Natural reward jaise khana ya paani.'],
        ['Secondary reinforcer', 'Seekha hua reward jaise paisa, marks, likes.'],
        ['Token economy', 'Achhe behaviour par tokens jo baad me rewards me badle ja sakein.'],
        ['Shaping', 'Target behaviour ke kareeb wale steps ko kram se reward karna.'],
        ['Continuous reinforcement', 'Har sahi response par reward.'],
        ['Partial reinforcement', 'Kuch hi responses par reward; behaviour zyada tikau banta hai.'],
        ['Fixed ratio schedule', 'Fixed number of responses ke baad reward.'],
        ['Variable ratio schedule', 'Unpredictable number of responses ke baad reward; sabse tikau behaviour.'],
        ['Fixed interval schedule', 'Fixed time ke baad pehle response par reward.'],
        ['Variable interval schedule', 'Unpredictable time ke baad pehle response par reward.'],
        ['Premack principle', 'Pasandida activity ko kam pasand activity ke reward ki tarah use karna.'],
        ['Extinction burst', 'Reward band hone par extinction se pehle behaviour ka thodi der ke liye badh jaana.']
      ]]
    ],
    takeaways: [
      'Operant conditioning = behaviour + consequence. Reinforcement badhata hai, punishment ghatata hai.',
      'Positive = kuch add, negative = kuch remove. Negative reinforcement punishment nahi hai.',
      'Shaping se complex behaviour chhote steps me sikhaya jaata hai.',
      'Variable ratio schedule (jaise reels, gambling) sabse tez aur tikau behaviour banata hai.',
      'Punishment ki seemayein hain; specific positive reinforcement zyada asardaar hai.'
    ],
    quiz: [
      ['Seat belt lagane par car ki beep band ho jaati hai, isliye log belt lagate hain. Ye kya hai?', ['Positive reinforcement', 'Negative reinforcement', 'Positive punishment', 'Negative punishment'], 1, 'Irritating beep hati (remove) aur behaviour badha: negative reinforcement.'],
      ['Der se ghar aane par teen ka phone ek hafte ke liye le liya gaya. Ye kya hai?', ['Negative punishment', 'Positive punishment', 'Negative reinforcement', 'Shaping'], 0, 'Pasandida cheez hataayi gayi taaki behaviour ghate: negative punishment.'],
      ['Slot machines aur social media feeds kaunsa schedule use karte hain?', ['Fixed ratio', 'Fixed interval', 'Variable ratio', 'Continuous'], 2, 'Unpredictable number of responses ke baad reward: variable ratio.'],
      ['Monthly salary kis schedule ka example hai?', ['Variable interval', 'Fixed interval', 'Fixed ratio', 'Variable ratio'], 1, 'Fixed time (mahina) ke baad reward milta hai.'],
      ['Target behaviour ke kareeb wale steps ko kram se reward karna kya kehlata hai?', ['Chaining', 'Shaping', 'Extinction', 'Generalization'], 1, 'Successive approximations ko reinforce karna shaping hai.'],
      ['"Pehle homework, phir cartoon" kis principle par based hai?', ['Premack principle', 'Law of effect ka ulta', 'Classical conditioning', 'Latent learning'], 0, 'Pasandida activity ko kam pasand activity ka reward banana Premack principle hai.'],
      ['Research ke hisaab se physical punishment (spanking) ka bachchon par kya asar dikha?', ['Behaviour hamesha ke liye sudhar gaya', 'Koi fayda nahi, aur aggression jaise nuksaan se rishta', 'IQ badha', 'Sirf ladkon par fayda'], 1, 'Gershoff & Grogan-Kaylor (2016) meta-analysis ko fayda nahi mila, balki negative outcomes se rishta mila.']
    ],
    more: [
      ['OpenStax Psychology 2e · 6.3 Operant Conditioning', OS(6), 'book'],
      ['Crash Course Psychology: Operant Conditioning', YT('Crash Course Psychology operant conditioning'), 'video'],
      ['Atomic Habits (James Clear) · habits ko behaviour science se banana', GR('Atomic Habits James Clear'), 'book']
    ]
  });

  /* 3.3 */
  C({
    id: 'observational-learning', level: 3, mins: 15, visual: 'bobo',
    visualCap: 'Bandura ke hisaab se dekh kar seekhne ke 4 steps: Attention, Retention, Reproduction, Motivation. Ek bhi kadi tooti to imitation nahi hogi.',
    title: 'Observational aur cognitive learning',
    tag: 'Bobo doll, latent learning, insight, learned helplessness aur self-efficacy',
    hook: 'Kisi ne aapko chopsticks pakadna, cricket me cover drive, ya mummy jaisa tadka lagana reward dekar step by step nahi sikhaya. Aapne <b>dekh kar</b> seekha. Insaan ki sabse badi superpower shayad yahi hai: doosron ke anubhav se seekh lena, bina khud har galti kiye.',
    blocks: [
      ['h', 'Bandura ka Bobo doll experiment'],
      ['case', 'Albert Bandura (1961)', [
        'Bachchon ne ek adult ko ek bade inflatable "Bobo" doll ke saath khelte dekha. Ek group me adult ne doll ko maara, laat maari, hathaude se peeta aur chillaya "Maaro isko!". Doosre group me adult shaanti se khela.',
        'Baad me jab bachchon ko khilono wale kamre me chhoda gaya, aggressive model dekhne wale bachchon ne wahi harkatein, yahan tak ki wahi shabd, <b>nakal</b> kiye. Kai ne naye aggressive tareeke bhi banaye. Ise <b>observational learning</b> ya <b>modeling</b> kehte hain.'
      ]],
      ['p', '1965 ke follow-up me Bandura ne dikhaya ki agar model ko aggression ke liye <b>saza</b> milte dikhi, to bachchon ne kam nakal ki. Par jab unhe nakal karne par inaam ka offer diya gaya, to sab bachche wahi harkatein kar paaye. Matlab: <b>seekhna (learning) aur karna (performance) alag hain</b>. Bachchon ne seekh to liya tha, bas consequence dekh kar kiya nahi.'],
      ['steps', [
        ['Attention', 'Model par dhyan jaana chahiye. Hum unhe zyada dekhte hain jo powerful, attractive, ya hamare jaise hon.'],
        ['Retention', 'Dekhi hui cheez yaad rehni chahiye (mental image ya shabdon me).'],
        ['Reproduction', 'Use karne ki physical aur mental capability honi chahiye. Virat Kohli ko dekh kar cover drive samajhna aur khud maarna alag baat hai.'],
        ['Motivation', 'Karne ki wajah: model ko reward milte dekhna (<b>vicarious reinforcement</b>) ya khud reward ki ummeed.']
      ]],
      ['ex', 'Bachche wahi karte hain jo aap karte ho, wo nahi jo aap kehte ho', 'Papa kehte hain "phone kam use karo" par khud dinner table par scroll karte hain. Research dikhati hai ki jab model ki baat aur kaam alag hon, to bachche aksar <b>kaam</b> ki nakal karte hain. Parents, teachers aur bade bhai-behen sabse powerful models hain.'],

      ['h', 'Media, models aur "entertainment-education"'],
      ['p', 'Agar dekh kar aggression seekha ja sakta hai, to achha behaviour bhi. 1984 me Doordarshan ka serial <b>"Hum Log"</b> India ke shuruaati "entertainment-education" serials me tha, jisme kahani ke zariye family planning aur mahilaon ke adhikaar jaise sandesh diye gaye. Aage chalkar "Main Kuch Bhi Kar Sakti Hoon" (2014) jaise shows ne health aur gender par yahi approach apnaya. Ye Bandura ki social learning theory ka seedha upyog hai.'],
      ['p', 'Media violence aur bachchon ke aggression par research me ek chhota-medium rishta milta hai, par kitna causal hai aur real-world violence se kitna juda, is par experts me bahas hai. Context, parents ki baatcheet aur bachche ki personality bhi role nibhate hain.'],
      ['p', '<b>Mirror neurons</b>: 1990s me Italian scientist Giacomo Rizzolatti ki team ne bandaron me aise neurons dekhe jo khud kaam karne aur doosre ko wahi kaam karte dekhne, dono par fire karte the. Kai log inhe empathy aur imitation ki "chaabi" kehte hain, par insaanon me evidence zyada tar indirect hai, aur popular media inhe zaroorat se zyada hype karta hai.'],

      ['h', 'Latent learning: bina reward ke bhi seekhna'],
      ['case', 'Tolman ke chuhe (1930)', [
        'Edward Tolman ne chuhon ke teen group ek maze me chhode. Group 1 ko har baar end par khana mila, group 2 ko kabhi nahi, aur group 3 ko 11ve din se khana milna shuru hua.',
        'Group 3 ne 11ve din ke baad <b>achanak</b> utna hi achha (balki behtar) perform kiya jitna group 1. Matlab wo pehle din se maze ka <b>"cognitive map"</b> bana rahe the, bas dikhane ki zaroorat nahi thi. Ise <b>latent learning</b> kehte hain: seekhna jo tab tak chhupa rehta hai jab tak zaroorat ya reward na ho.'
      ]],
      ['ex', 'Roz ka raasta', 'Aap saalon se kisi ki gaadi me peeche baith kar office ya college jaate ho, kabhi dhyan se raasta yaad nahi kiya. Ek din khud jaana pada, aur aap aaraam se pahunch gaye. Ye latent learning hai: cognitive map bina koshish ke ban raha tha.'],

      ['h', 'Insight learning: "Aha!" moment'],
      ['p', 'German psychologist <b>Wolfgang Köhler</b> ne 1910s me Tenerife me chimpanzees par kaam kiya. Sultan naam ke chimp ke pinjre ke bahar kela tha jo ek chhadi se pahuncha nahi ja sakta tha. Kuch der koshish ke baad Sultan ruka, phir achanak do chhadiyon ko jodkar lambi chhadi banayi aur kela kheench liya. Ye trial-and-error nahi tha; problem ka <b>sudden restructuring</b> tha, jise <b>insight</b> kehte hain. Aapke saath bhi hota hai: nahate waqt achanak sawaal ka jawab sujh jaana.'],

      ['h', 'Learned helplessness'],
      ['case', 'Seligman aur Maier (1967)', [
        'Kuch kutton ko aise shocks diye gaye jinhe wo kisi tarah rok nahi sakte the. Baad me unhe ek aise box me rakha gaya jahan ek chhoti si deewar kood kar shock se bacha ja sakta tha. Jo kutte pehle bhi bach sakte the ya jinhe shock nahi mila tha, wo turant kood gaye. Par "inescapable shock" wale kutte <b>wahin lete rahe</b> aur shock sehte rahe.',
        'Unhone seekh liya tha ki "kuch bhi karo, farak nahi padta". Seligman ne ise <b>learned helplessness</b> kaha aur depression se joda. (2016 me Maier aur Seligman ne neuroscience ke aadhar par theory ko update kiya: passivity shayad "default" response hai, aur jo seekha jaata hai wo hai <b>control</b>.)'
      ]],
      ['ex', '"Main maths me kabhi achha nahi ho sakta"', 'Rohan ko class 6 se maths me baar-baar kam marks mile, chahe usne koshish ki ho ya nahi. Ab class 10 me wo maths ki kitaab kholta hi nahi: "Kya fayda?" Ye learned helplessness jaisa pattern hai. Ilaaj: chhote, jeetne layak targets (pehle 5 aasaan sawaal), progress dikhana, aur effort ko results se jodna, taaki control ka ehsaas wapas aaye.'],

      ['h', 'Self-efficacy: "Main kar sakta hoon"'],
      ['p', 'Bandura ka ek aur bada concept <b>self-efficacy</b> hai: kisi khaas kaam ko kar paane me apni kshamta par vishwas. Ye confidence se zyada specific hai: aapki maths self-efficacy high aur public speaking self-efficacy low ho sakti hai. Research me high self-efficacy behtar persistence, kam anxiety aur behtar performance se judi hai.'],
      ['list', [
        '<b>Mastery experiences</b> (sabse powerful): khud chhoti-chhoti safaltaayein.',
        '<b>Vicarious experience</b>: apne jaise kisi ko safal hote dekhna ("agar wo kar sakti hai to main bhi").',
        '<b>Verbal persuasion</b>: kisi bharosemand vyakti ka kehna "tum kar sakte ho".',
        '<b>Physiological state</b>: ghabrahat ko "excitement" ki tarah interpret karna.'
      ]],
      ['tip', 'Kisi naye skill (coding, guitar, English speaking) ke liye aaj ka target itna chhota rakho ki fail hona mushkil ho: 10 minute, ek chhota exercise. Har din ki chhoti jeet self-efficacy banati hai, jo aage bade targets ka fuel hai.'],
      ['terms', [
        ['Observational learning', 'Doosron ko dekh kar seekhna; modeling bhi kehte hain.'],
        ['Modeling', 'Kisi model ke behaviour ki nakal karke seekhna.'],
        ['Vicarious reinforcement', 'Model ko reward milte dekh kar behaviour karne ki motivation badhna.'],
        ['Vicarious punishment', 'Model ko saza milte dekh kar behaviour kam karna.'],
        ['Learning-performance distinction', 'Seekha hua hamesha dikhta nahi; consequence ke hisaab se kiya ya nahi kiya jaata hai.'],
        ['Mirror neurons', 'Neurons jo khud action karne aur doosre ko wahi karte dekhne dono par active hote hain.'],
        ['Latent learning', 'Bina reward ke hone wala seekhna jo zaroorat padne par dikhta hai.'],
        ['Cognitive map', 'Kisi jagah ka mental naksha.'],
        ['Insight learning', 'Problem ka achanak samajh aana, jaise "aha!" moment.'],
        ['Learned helplessness', 'Baar-baar control na hone ke anubhav se koshish chhod dene ki seekhi hui aadat.'],
        ['Self-efficacy', 'Kisi khaas kaam ko safalta se kar paane ki kshamta par vishwas.'],
        ['Entertainment-education', 'Kahaniyon aur media ke zariye socially faydemand behaviour sikhane ka tareeka.']
      ]]
    ],
    takeaways: [
      'Hum dekh kar seekhte hain: attention, retention, reproduction, motivation.',
      'Seekhna aur karna alag hain: consequence dekh kar hum seekha hua dikhate ya chhupate hain.',
      'Latent learning aur insight dikhate hain ki learning sirf reward-punishment nahi, soch bhi hai.',
      'Learned helplessness tab hota hai jab lagta hai ki koshish se farak nahi padta; chhoti jeet control wapas laati hai.',
      'Self-efficacy mastery experiences se sabse zyada banti hai.'
    ],
    quiz: [
      ['Bobo doll experiment ne mukhya roop se kya dikhaya?', ['Bachche punishment se seekhte hain', 'Bachche dekh kar aggression ki nakal karte hain', 'Dolls khatarnak hain', 'Classical conditioning'], 1, 'Bachchon ne model ke aggressive behaviour ko observe karke copy kiya.'],
      ['Bandura ke observational learning ke 4 steps ka sahi kram?', ['Motivation, Attention, Reproduction, Retention', 'Attention, Retention, Reproduction, Motivation', 'Retention, Attention, Motivation, Reproduction', 'Reproduction, Retention, Attention, Motivation'], 1, 'Pehle dhyan, phir yaad, phir karne ki kshamta, phir motivation.'],
      ['Tolman ke group 3 ke chuhe reward milte hi achanak achha perform karne lage. Ye kya hai?', ['Insight learning', 'Latent learning', 'Shaping', 'Extinction'], 1, 'Wo pehle se cognitive map bana rahe the; reward ne seekhe hue ko dikhaya.'],
      ['Köhler ke chimp Sultan ne do chhadiyan jodkar kela nikala. Ye kaunsi learning hai?', ['Insight learning', 'Classical conditioning', 'Latent learning', 'Vicarious reinforcement'], 0, 'Problem ka achanak restructuring: insight.'],
      ['Baar-baar fail hone ke baad student ne koshish hi chhod di. Ye kis concept se juda hai?', ['Self-efficacy', 'Learned helplessness', 'Latent learning', 'Modeling'], 1, 'Control na hone ka anubhav koshish chhodne ki taraf le jaata hai.'],
      ['Self-efficacy badhane ka sabse powerful source kya hai?', ['Doosron ki taareef', 'Khud ki chhoti safaltaayein (mastery experiences)', 'TV dekhna', 'Punishment'], 1, 'Bandura ke hisaab se mastery experiences sabse zyada asar daalte hain.']
    ],
    more: [
      ['OpenStax Psychology 2e · 6.4 Observational Learning', OS(6), 'book'],
      ['Simply Psychology: Bobo Doll Experiment', 'https://www.simplypsychology.org/bobo-doll.html', 'link'],
      ['Crash Course Psychology: Learning', YT('Crash Course Psychology observational learning Bandura'), 'video']
    ]
  });

  /* 3.4 */
  C({
    id: 'memory', level: 3, mins: 20, visual: 'memoryModel',
    visualCap: 'Atkinson-Shiffrin model: information sensory memory se short-term aur phir long-term memory me jaati hai. Dhyan na diya to sensory memory se gayab; rehearse na kiya to STM se gayab.',
    title: 'Memory: yaadein kaise banti hain',
    tag: 'Sensory, short-term, working aur long-term memory; encoding, retrieval, aur exam hall me "blank" kyun ho jaate hain',
    hook: 'Aapko bachpan ke ghar ki khushboo yaad hai, par kal dopahar kya khaya tha shayad nahi. Exam me ek jawab "zubaan par" hai par nikal nahi raha. <b>Memory video recorder nahi hai</b>; ye ek jeevit process hai jo cheezein choonti, jodti, aur kabhi-kabhi badal bhi deti hai.',
    blocks: [
      ['h', 'Memory ke teen kaam'],
      ['steps', [
        ['Encoding', 'Information ko dimaag me "daalna": use aisi form me badalna jo store ho sake. Library me nayi kitaab ka catalogue banane jaisa.'],
        ['Storage', 'Information ko samay ke saath sambhal kar rakhna. Kitaab ko shelf par rakhna.'],
        ['Retrieval', 'Zaroorat par information wapas nikalna. Catalogue dekh kar kitaab dhoondhna.']
      ]],
      ['p', 'Memory fail ho to teeno me se kisi bhi step par galti ho sakti hai: shayad dhyan hi nahi diya (encoding failure), shayad samay ke saath kamzor hui (storage), ya shayad hai par mil nahi rahi (retrieval failure).'],

      ['h', 'Multi-store model (Atkinson aur Shiffrin, 1968)'],
      ['table', ['Store', 'Capacity', 'Kitni der', 'Example'], [
        ['Sensory memory', 'Bahut badi', 'Visual (iconic) ~ second ka chhota hissa; auditory (echoic) ~3-4 second', 'Chalti gaadi se dikha board turant gayab; kisi ki baat ka "kya kaha?" pooch kar khud hi yaad aa jaana'],
        ['Short-term memory (STM)', '~7 ± 2 items (aaj ke andaze se ~4 chunks)', 'Bina rehearsal ~15-30 second', 'OTP ko app me type karne tak yaad rakhna'],
        ['Long-term memory (LTM)', 'Lagbhag asimit', 'Minutes se zindagi bhar', 'Apna naam, cycle chalana, school ki yaadein']
      ]],
      ['p', 'Sensory memory se sirf wahi STM me jaata hai jis par <b>attention</b> diya. STM se LTM me jaane ke liye <b>rehearsal</b> (dohraana) aur khaas kar <b>deep encoding</b> (matlab samajhna) chahiye.'],
      ['case', 'Sperling ka partial report (1960)', 'George Sperling ne logon ko 12 letters ka grid ek second ke ~1/20 hisse ke liye dikhaya. Poore grid me se log ~4 letters hi bata paaye. Par jab grid gayab hone ke <b>turant baad</b> ek tone se bataya gaya ki kaunsi row batani hai, to log lagbhag kisi bhi row ke zyada tar letters bata dete the. Matlab poora grid kuch pal ke liye sensory memory me tha, bas bahut jaldi mit jaata hai.'],
      ['lab', 'digitspan'],

      ['h', 'Working memory: dimaag ka whiteboard'],
      ['p', 'Baddeley aur Hitch (1974) ne kaha STM sirf ek "store" nahi, ek active <b>workspace</b> hai jahan hum information par kaam karte hain. Iske hisse:'],
      ['list', [
        '<b>Central executive</b>: boss jo attention baantta hai aur decide karta hai kis cheez par focus karna hai.',
        '<b>Phonological loop</b>: shabd aur awaazein (mann me number dohraana).',
        '<b>Visuospatial sketchpad</b>: images aur jagahein (ghar ke kamre mann me ginna).',
        '<b>Episodic buffer</b> (2000 me joda gaya): sab ko jodkar LTM se connect karna.'
      ]],
      ['ex', 'Gaadi chalate hue phone par baat', 'Phonological loop aur visuospatial sketchpad alag-alag hain, isliye music sunte hue chalana theek-thaak chal jaata hai. Par phone par mushkil baatcheet <b>central executive</b> ko kheench leti hai, jo driving ke decisions ke liye bhi chahiye. Isliye hands-free call bhi driving ko kharab karti hai: problem haath nahi, dimaag ka whiteboard hai.'],

      ['h', 'Encoding: kaise daalein ki tike'],
      ['p', 'Kuch cheezein <b>automatically</b> encode hoti hain (aaj kahan khana khaya, kitni der pehle), par padhai jaisi cheezon ke liye <b>effortful processing</b> chahiye. Kuch powerful tareeke:'],
      ['list', [
        '<b>Levels of processing</b> (Craik aur Lockhart, 1972): shabd ki shape par dhyan (shallow), awaaz par (medium), ya matlab par (deep). Jitna gehra, utna yaad. "Kya ye shabd capital letters me hai?" se zyada "Kya ye shabd is sentence me fit hota hai?" yaad rehta hai.',
        '<b>Self-reference effect</b>: information ko apni zindagi se jodna. "Ye concept mere saath kab hua?"',
        '<b>Chunking</b>: 9876543210 ko 98765-43210 me todna. Shatranj ke master board ko pieces ki jagah "patterns" me dekhte hain.',
        '<b>Visual imagery</b>: "kitaab" se zyada "laal jild wali moti kitaab jo table se gir rahi hai" yaad rehti hai.'
      ]],
      ['ex', '"Ratna" vs "samajhna"', 'Do students ne same chapter padha. Ek ne lines 5 baar padhi (shallow). Doosre ne har concept ko apne examples se samjhaya aur khud se "kyun?" poochha (deep, elaborative). Ek hafte baad doosre ko kahin zyada yaad tha, chahe usne kam time lagaya. Is website ke "Socho" aur real-life example sections isi principle par bane hain.'],

      ['h', 'Long-term memory ke prakaar'],
      ['table', ['Type', 'Sub-type', 'Kya hai', 'Example'], [
        ['Explicit (declarative): "jaanna ki"', 'Episodic', 'Personal events, kab aur kahan', 'Pichhli Diwali par kya hua'],
        ['', 'Semantic', 'Facts aur general knowledge', 'Delhi India ki rajdhani hai'],
        ['Implicit (non-declarative): "jaanna kaise"', 'Procedural', 'Skills aur habits', 'Cycle chalana, typing'],
        ['', 'Priming', 'Pehle dekhi cheez ka anjaane asar', '"Doctor" padhne ke baad "nurse" jaldi pehchaanna'],
        ['', 'Classical conditioning', 'Seekhe hue emotional/body responses', 'Dentist ki smell se ghabrahat']
      ]],
      ['p', 'Yaad karo H.M. (Chapter 2.3): hippocampus ke bina wo nayi <b>explicit</b> yaadein nahi bana sakta tha, par mirror drawing jaisi <b>procedural</b> skill seekh gaya. Matlab ye alag systems hain.'],

      ['h', 'Retrieval: yaadein kaise nikalti hain'],
      ['list', [
        '<b>Recall</b>: bina hint ke nikalna (essay type sawaal). Sabse mushkil.',
        '<b>Recognition</b>: options me se pehchaanna (MCQ). Aasaan; isliye MCQ "aasaan" lagte hain.',
        '<b>Relearning</b>: dobara seekhne me kam time lagna (savings). Bhooli hui cheez bhi "kahin" bachi hoti hai.'
      ]],
      ['p', '<b>Retrieval cues</b> memory ke "handles" hain. <b>Encoding specificity principle</b>: jis context me seekha, wahi context yaad dilane me madad karta hai.'],
      ['case', 'Paani ke neeche yaad karna (Godden aur Baddeley, 1975)', 'Scuba divers ne words ki list ya to zameen par ya paani ke neeche yaad ki, aur test bhi dono jagah hua. Jo list paani ke neeche yaad ki, wo paani ke neeche zyada yaad aayi, aur zameen wali zameen par. Ise <b>context-dependent memory</b> kehte hain. Isi wajah se kitchen me jaakar bhool jaate ho ki kya lene aaye the, aur wapas kamre me aate hi yaad aa jaata hai!'],
      ['list', [
        '<b>State-dependent memory</b>: andruni state (mood, nasha, caffeine) bhi cue banti hai.',
        '<b>Mood-congruent memory</b>: udaas mood me udaas yaadein zyada aati hain, jo depression ke cycle ko mazboot kar sakti hain.',
        '<b>Tip-of-the-tongue</b>: jawab ka pehla akshar ya length pata hai par shabd nahi nikal raha; retrieval failure ka classic example.'
      ]],
      ['lab', 'serial'],
      ['p', '<b>Flashbulb memories</b>: bade, emotional events (jaise koi badi khabar, 2011 World Cup final ka aakhri six) ki yaadein bahut vivid aur pakki lagti hain. Par studies dikhati hain ki ye bhi samay ke saath badalti hain; bas hamara <b>confidence</b> nahi ghatta. Amygdala emotion se yaad ko "bold" kar deta hai, par accurate hona guarantee nahi.'],
      ['terms', [
        ['Encoding', 'Information ko memory me store hone layak form me badalna.'],
        ['Storage', 'Information ko samay ke saath memory me banaye rakhna.'],
        ['Retrieval', 'Stored information ko wapas nikalna.'],
        ['Sensory memory', 'Senses ki information ka bahut chhoti der ka record.'],
        ['Iconic memory', 'Visual sensory memory, second ka chhota hissa.'],
        ['Echoic memory', 'Auditory sensory memory, kuch second.'],
        ['Short-term memory', 'Seemit capacity ki thodi der ki memory (~15-30 s bina rehearsal).'],
        ['Working memory', 'Active mental workspace jahan information par kaam hota hai (Baddeley).'],
        ['Central executive', 'Working memory ka attention control karne wala hissa.'],
        ['Phonological loop', 'Working memory ka verbal/awaaz wala hissa.'],
        ['Visuospatial sketchpad', 'Working memory ka visual aur spatial hissa.'],
        ['Long-term memory', 'Lambi avadhi ki, lagbhag asimit memory.'],
        ['Chunking', 'Information ko meaningful groups me jodkar yaad rakhna.'],
        ['Levels of processing', 'Jitni gehri (matlab wali) processing, utni tikau memory, ye theory.'],
        ['Self-reference effect', 'Apne se jodi gayi information zyada yaad rehna.'],
        ['Explicit memory', 'Facts aur events ki conscious memory (episodic + semantic).'],
        ['Episodic memory', 'Personal anubhavon aur events ki memory.'],
        ['Semantic memory', 'General facts aur gyaan ki memory.'],
        ['Implicit memory', 'Bina conscious yaad ke asar daalne wali memory (skills, priming).'],
        ['Procedural memory', 'Skills aur "kaise karna hai" ki memory.'],
        ['Priming', 'Pehle ke exposure se baad ke response par anjaane asar.'],
        ['Recall', 'Bina hint ke memory se information nikalna.'],
        ['Recognition', 'Diye gaye options me se sahi pehchaanna.'],
        ['Encoding specificity principle', 'Seekhne ke waqt ke cues hi yaad dilane me sabse madadgaar hote hain.'],
        ['Context-dependent memory', 'Same mahaul me yaad behtar aana.'],
        ['State-dependent memory', 'Same andruni state me yaad behtar aana.'],
        ['Mood-congruent memory', 'Current mood se mel khaati yaadein zyada aana.'],
        ['Serial position effect', 'List ke shuru (primacy) aur aakhir (recency) ke items zyada yaad rehna.'],
        ['Flashbulb memory', 'Emotional events ki vivid yaad jo pakki lagti hai par badal sakti hai.']
      ]]
    ],
    takeaways: [
      'Memory = encoding + storage + retrieval; galti kisi bhi step par ho sakti hai.',
      'Sensory → STM (attention se) → LTM (rehearsal aur deep encoding se).',
      'Working memory seemit whiteboard hai; multitasking central executive ko overload karti hai.',
      'Matlab samajh kar (deep) aur apne se jodkar padhna sabse tikau hai.',
      'Context aur cues retrieval me madad karte hain; flashbulb memories bhi galat ho sakti hain.'
    ],
    quiz: [
      ['OTP ko type karne tak yaad rakhna kis memory ka kaam hai?', ['Sensory memory', 'Short-term memory', 'Procedural memory', 'Semantic memory'], 1, 'Thodi der ke liye rakhi seemit information STM hai.'],
      ['Cycle chalana kis tarah ki memory hai?', ['Episodic', 'Semantic', 'Procedural', 'Iconic'], 2, 'Skills implicit procedural memory me rehti hain.'],
      ['Craik aur Lockhart ke hisaab se kaunsi processing sabse tikau memory banati hai?', ['Shape par dhyan', 'Awaaz par dhyan', 'Matlab par dhyan (semantic)', 'Rang par dhyan'], 2, 'Deep, semantic processing sabse achhi memory deti hai.'],
      ['Divers ki study (Godden & Baddeley) kya dikhati hai?', ['Paani memory kharab karta hai', 'Jis context me seekha, usi me yaad behtar', 'Divers ki memory achhi hoti hai', 'Sensory memory lambi hoti hai'], 1, 'Context-dependent memory: encoding aur retrieval ka mahaul match hone par yaad behtar.'],
      ['Working memory ka kaunsa hissa attention ko control karta hai?', ['Phonological loop', 'Central executive', 'Visuospatial sketchpad', 'Episodic memory'], 1, 'Central executive boss ki tarah attention baantta hai.'],
      ['MCQ aam taur par essay sawaalon se aasaan kyun lagte hain?', ['Recognition recall se aasaan hai', 'MCQ chhote hote hain', 'Recall aasaan hai', 'Priming ki wajah se'], 0, 'Options me se pehchaanna (recognition) bina hint nikalne (recall) se aasaan hai.'],
      ['Sperling ke experiment ne kis memory ka astitva dikhaya?', ['Long-term', 'Iconic (visual sensory) memory', 'Procedural', 'Flashbulb'], 1, 'Partial report se dikha ki poora grid thodi der ke liye iconic memory me tha.']
    ],
    more: [
      ['OpenStax Psychology 2e · Chapter 8: Memory', OS(8), 'book'],
      ['Crash Course Psychology: How We Make Memories', YT('Crash Course Psychology how we make memories'), 'video'],
      ['Moonwalking with Einstein (Joshua Foer) · memory champions ki duniya', GR('Moonwalking with Einstein'), 'book']
    ]
  });
})();
