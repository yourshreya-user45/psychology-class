/* Resource library: sections of curated learning material. */
(function () {
  const PSY = window.PSY;
  const GR = (q) => `https://www.goodreads.com/search?q=${encodeURIComponent(q)}`;
  const YT = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const book = (title, by, why, level) => ({ type: 'Book', title, by, why, level, url: GR(title + ' ' + by), cta: 'Book dekho' });

  PSY.resources = [
    {
      title: 'Yahan se shuru karo',
      desc: 'Agar abhi kuch nahi padha, to in chaar se shuruaat karo. Sab free hain.',
      items: [
        { type: 'Free textbook', title: 'NCERT Psychology (Class 11 aur 12)', by: 'NCERT', why: 'Hindi aur English dono me free PDF. Indian examples ke saath basics: perfect pehli kitaab, aur board/CUET ke liye bhi.', level: 'Beginner', url: 'https://ncert.nic.in/textbook.php', cta: 'NCERT site kholo' },
        { type: 'Free textbook', title: 'OpenStax Psychology 2e', by: 'Rice University (OpenStax)', why: 'Poori college-level intro textbook, free online aur PDF. Is course ke kai chapters isi ke structure se mel khaate hain.', level: 'Beginner', url: 'https://openstax.org/details/books/psychology-2e', cta: 'Free padho' },
        { type: 'Video series', title: 'Crash Course Psychology', by: 'Hank Green', why: '40 chhote, mazedaar videos jo poori intro psychology cover karte hain. Har chapter ke baad ek video dekhna bahut achha revision hai.', level: 'Beginner', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6', cta: 'Playlist kholo' },
        { type: 'Free modules', title: 'Noba Project', by: 'Diener Education Fund', why: 'Experts ke likhe free, chhote modules: jo topic chaho alag se padho, quizzes ke saath.', level: 'Beginner', url: 'https://nobaproject.com', cta: 'Modules dekho' }
      ]
    },
    {
      title: 'Free university courses',
      desc: 'Duniya ki top universities ke lectures, ghar baithe.',
      items: [
        { type: 'Course', title: 'Introduction to Psychology (PSYC 110)', by: 'Paul Bloom, Yale Open Courses', why: 'Yale ka poora semester course: videos, transcripts aur readings, bilkul free. Bloom ka andaaz bahut engaging hai.', level: 'Beginner', url: 'https://oyc.yale.edu/psychology/psyc-110', cta: 'Course kholo' },
        { type: 'Course', title: 'Introduction to Psychology (Coursera)', by: 'Yale University', why: 'Certificate optional hai; "audit" karke free me padho.', level: 'Beginner', url: 'https://www.coursera.org/learn/introduction-psychology', cta: 'Coursera par dekho' },
        { type: 'Course', title: '9.00SC Introduction to Psychology', by: 'MIT OpenCourseWare', why: 'MIT ka self-paced course: lecture videos, notes aur exams solutions ke saath.', level: 'Beginner', url: 'https://ocw.mit.edu/courses/9-00sc-introduction-to-psychology-fall-2011/', cta: 'MIT OCW kholo' },
        { type: 'Lectures', title: 'Human Behavioral Biology', by: 'Robert Sapolsky, Stanford', why: 'Biology aur behaviour par duniya ki sabse mashhoor lecture series me se ek (YouTube par free).', level: 'Intermediate', url: YT('Robert Sapolsky Human Behavioral Biology Stanford lecture'), cta: 'YouTube par dekho' },
        { type: 'Course', title: 'Learning How to Learn', by: 'Barbara Oakley & Terrence Sejnowski', why: 'Memory aur learning science ko apni padhai me lagane ka sabse popular course (Coursera, free audit).', level: 'Beginner', url: 'https://www.coursera.org/learn/learning-how-to-learn', cta: 'Course dekho' },
        { type: 'Courses (India)', title: 'SWAYAM / NPTEL psychology courses', by: 'Government of India', why: 'Indian professors ke free courses; kai me exam dekar certificate aur credit transfer bhi.', level: 'Beginner–Advanced', url: 'https://swayam.gov.in', cta: 'SWAYAM kholo' },
        { type: 'Study material (India)', title: 'IGNOU eGyanKosh', by: 'IGNOU', why: 'IGNOU ke BA aur MA Psychology ke poore study blocks free PDF me: Indian context aur exam-oriented.', level: 'Beginner–Advanced', url: 'https://egyankosh.ac.in', cta: 'eGyanKosh kholo' }
      ]
    },
    {
      title: 'YouTube aur video',
      desc: 'Concepts ko dekh kar samajhne ke liye.',
      items: [
        { type: 'YouTube', title: 'TED-Ed psychology lessons', by: 'TED-Ed', why: 'Animated, 5-minute lessons: memory, biases, emotions par khoobsurat explainers.', level: 'Beginner', url: YT('TED-Ed psychology'), cta: 'Videos dekho' },
        { type: 'YouTube', title: 'SciShow Psych', by: 'SciShow', why: 'Haal ki psychology research ko aasaan bhasha me samjhane wala channel.', level: 'Beginner', url: YT('SciShow Psych'), cta: 'Channel dekho' },
        { type: 'Course', title: 'Khan Academy: Behavior (MCAT psychology)', by: 'Khan Academy', why: 'Sensation, learning, memory, social psychology par structured free videos aur practice.', level: 'Intermediate', url: 'https://www.khanacademy.org/test-prep/mcat/behavior', cta: 'Khan Academy kholo' },
        { type: 'YouTube', title: 'Crash Course Statistics', by: 'Crash Course', why: 'Statistics ka dar door karne ke liye: research samajhne ke liye zaroori.', level: 'Beginner', url: YT('Crash Course Statistics'), cta: 'Videos dekho' }
      ]
    },
    {
      title: 'Books: shuruaat ke liye (popular science)',
      desc: 'Kahaniyon aur research se bhari, aasaan padhne wali books.',
      items: [
        book('Thinking, Fast and Slow', 'Daniel Kahneman', 'System 1 aur 2, biases aur decision making par Nobel winner ki classic.', 'Beginner'),
        book('Influence', 'Robert Cialdini', 'Persuasion ke 6-7 principles: ads, sales aur roz ki zindagi me manipulation pehchaano.', 'Beginner'),
        book('Man\'s Search for Meaning', 'Viktor Frankl', 'Holocaust survivor psychiatrist ki kitaab: dukh me bhi arth dhoondhna.', 'Beginner'),
        book('Phantoms in the Brain', 'V.S. Ramachandran', 'Phantom limbs aur ajeeb neurological cases se brain ko samajhna; Indian-origin neuroscientist.', 'Beginner'),
        book('The Man Who Mistook His Wife for a Hat', 'Oliver Sacks', 'Neurology ke dilchasp case studies, kahaniyon ki tarah.', 'Beginner'),
        book('Make It Stick', 'Brown, Roediger & McDaniel', 'Learning science: active recall, spacing, interleaving. Har student ko padhni chahiye.', 'Beginner'),
        book('Quiet', 'Susan Cain', 'Introverts ki taakat; personality psychology ka popular parichay.', 'Beginner'),
        book('Stumbling on Happiness', 'Daniel Gilbert', 'Hum bhavishya ki khushi ka andaza itna galat kyun lagate hain.', 'Beginner'),
        book('Feeling Good', 'David Burns', 'CBT par self-help classic; research me isse depression ke symptoms kam hote dikhe (bibliotherapy).', 'Beginner')
      ]
    },
    {
      title: 'Books: textbooks (college level)',
      desc: 'Gehri padhai ke liye standard textbooks. Library ya purani editions bhi kaafi hain.',
      items: [
        book('Psychology', 'David Myers & Nathan DeWall', 'Duniya ki sabse popular intro textbook: saaf likhai aur bahut examples.', 'Intermediate'),
        book('Psychology Indian Subcontinent Edition', 'Robert Baron & Girishwar Misra', 'Indian examples aur research ke saath standard textbook.', 'Intermediate'),
        book('Introduction to Psychology', 'Morgan, King, Weisz & Schopler', 'India me lambe samay se padhaai jaane wali classic.', 'Intermediate'),
        book('The Social Animal', 'Elliot Aronson', 'Social psychology ka sabse padhne layak parichay.', 'Intermediate'),
        book('Biological Psychology', 'James Kalat', 'Neurons se behaviour tak: biopsychology ki standard book.', 'Intermediate'),
        book('Cognitive Psychology', 'E. Bruce Goldstein', 'Perception, attention, memory, language par clear textbook.', 'Intermediate'),
        book('Development Through the Lifespan', 'Laura Berk', 'Developmental psychology ki complete book.', 'Intermediate'),
        book('Abnormal Psychology', 'Butcher, Hooley & Mineka', 'Psychological disorders par detailed, research-based textbook.', 'Intermediate'),
        book('Theories of Personality', 'Feist & Feist', 'Freud se Big Five tak saari personality theories.', 'Intermediate'),
        book('Statistics for Psychology', 'Arthur Aron', 'Psychology students ke liye statistics, dheere aur samjha kar.', 'Intermediate')
      ]
    },
    {
      title: 'Books: advanced aur deep dives',
      desc: 'Jab basics pakke ho jaayein.',
      items: [
        book('Behave', 'Robert Sapolsky', 'Ek behaviour ke peeche second se lekar sadiyon tak ke kaaran: biology, culture, evolution.', 'Advanced'),
        book('The Blank Slate', 'Steven Pinker', 'Nature vs nurture par provocative, research-heavy bahas.', 'Advanced'),
        book('Descartes\' Error', 'Antonio Damasio', 'Emotion aur reason ka gehra rishta: neuroscience ki nazar se.', 'Advanced'),
        book('The Righteous Mind', 'Jonathan Haidt', 'Morality ka psychology: log politics aur dharm par itna kyun bant jaate hain.', 'Advanced'),
        book('Science Fictions', 'Stuart Ritchie', 'Replication crisis, fraud aur bias: science ko critically padhna seekho.', 'Advanced'),
        book('The Undoing Project', 'Michael Lewis', 'Kahneman aur Tversky ki dosti aur unki research ki kahani.', 'Intermediate'),
        book('An Unquiet Mind', 'Kay Redfield Jamison', 'Bipolar disorder par ek psychiatrist ki apni kahani.', 'Intermediate'),
        book('The Inner World', 'Sudhir Kakar', 'Indian bachpan, parivaar aur samaaj ka psychoanalytic adhyayan.', 'Advanced')
      ]
    },
    {
      title: 'Podcasts',
      desc: 'Commute ya walk ke time sunne ke liye.',
      items: [
        { type: 'Podcast', title: 'Hidden Brain', by: 'Shankar Vedantam', why: 'Behaviour ke chhupe patterns par kahani-style episodes; Indian-origin host.', level: 'Beginner', url: 'https://hiddenbrain.org', cta: 'Suno' },
        { type: 'Podcast', title: 'Speaking of Psychology', by: 'American Psychological Association', why: 'Researchers se seedhi baatcheet: sleep, stress, relationships, etc.', level: 'Beginner', url: 'https://www.apa.org/news/podcasts/speaking-of-psychology', cta: 'Suno' },
        { type: 'Podcast', title: 'The Psychology Podcast', by: 'Scott Barry Kaufman', why: 'Creativity, intelligence aur well-being par lambi, gehri baatein.', level: 'Intermediate', url: 'https://scottbarrykaufman.com/podcast/', cta: 'Suno' },
        { type: 'Podcast', title: 'Two Psychologists Four Beers', by: 'Yoel Inbar & Michael Inzlicht', why: 'Replication crisis aur research ke andar ki kahaniyan: advanced learners ke liye.', level: 'Advanced', url: YT('Two Psychologists Four Beers podcast'), cta: 'Suno' }
      ]
    },
    {
      title: 'Websites aur bharosemand references',
      desc: 'Kisi term ya disorder ke baare me reliable jaankari ke liye.',
      items: [
        { type: 'Dictionary', title: 'APA Dictionary of Psychology', by: 'American Psychological Association', why: '25,000+ psychology terms ki authoritative definitions.', level: 'All', url: 'https://dictionary.apa.org', cta: 'Kholo' },
        { type: 'Website', title: 'Simply Psychology', by: 'Saul McLeod & team', why: 'Classic studies aur theories ke student-friendly summaries (exam revision ke liye upyogi).', level: 'Beginner', url: 'https://www.simplypsychology.org', cta: 'Kholo' },
        { type: 'Mental health info', title: 'NIMH Health Topics', by: 'US National Institute of Mental Health', why: 'Disorders ke symptoms, research aur ilaaj par reliable jaankari.', level: 'All', url: 'https://www.nimh.nih.gov/health/topics', cta: 'Kholo' },
        { type: 'Mental health info', title: 'WHO: Mental health', by: 'World Health Organization', why: 'Global data, fact sheets aur guidelines.', level: 'All', url: 'https://www.who.int/health-topics/mental-health', cta: 'Kholo' },
        { type: 'India', title: 'White Swan Foundation', by: 'Bengaluru', why: 'Indian context me mental health jaankari, kai Indian bhashaon me.', level: 'All', url: 'https://www.whiteswanfoundation.org', cta: 'Kholo' },
        { type: 'India', title: 'NIMHANS', by: 'Bengaluru', why: 'India ka pramukh mental health aur neuroscience sansthan: services, courses, research.', level: 'All', url: 'https://nimhans.ac.in', cta: 'Kholo' },
        { type: 'Journal (open access)', title: 'Indian Journal of Psychiatry', by: 'Indian Psychiatric Society', why: 'Indian research free me padho: mental health par Indian data aur reviews.', level: 'Advanced', url: 'https://journals.lww.com/indianjpsychiatry', cta: 'Kholo' }
      ]
    },
    {
      title: 'Research tools (free)',
      desc: 'Khud research padhne aur karne ke liye.',
      items: [
        { type: 'Search', title: 'Google Scholar', by: 'Google', why: 'Research papers dhoondhne ka sabse aasaan tareeka.', level: 'All', url: 'https://scholar.google.com', cta: 'Kholo' },
        { type: 'Search', title: 'PubMed', by: 'US National Library of Medicine', why: 'Medical aur clinical psychology research ka database.', level: 'Intermediate', url: 'https://pubmed.ncbi.nlm.nih.gov', cta: 'Kholo' },
        { type: 'Preprints', title: 'PsyArXiv', by: 'Center for Open Science', why: 'Free psychology preprints (journal se pehle ke versions).', level: 'Advanced', url: 'https://psyarxiv.com', cta: 'Kholo' },
        { type: 'Tool', title: 'Unpaywall', by: 'OurResearch', why: 'Browser extension jo papers ke legal, free versions dhoondhta hai.', level: 'All', url: 'https://unpaywall.org', cta: 'Kholo' },
        { type: 'Software', title: 'JASP', by: 'University of Amsterdam', why: 'Free, point-and-click statistics software (SPSS jaisa), Bayesian bhi.', level: 'Intermediate', url: 'https://jasp-stats.org', cta: 'Download' },
        { type: 'Software', title: 'jamovi', by: 'jamovi project', why: 'Free statistics software, R par based, students ke liye bahut aasaan.', level: 'Intermediate', url: 'https://www.jamovi.org', cta: 'Download' },
        { type: 'Experiments', title: 'PsyToolkit', by: 'Gijsbert Stoet', why: 'Free online experiments aur surveys banao (Stroop, reaction time, etc.).', level: 'Advanced', url: 'https://www.psytoolkit.org', cta: 'Kholo' },
        { type: 'Open science', title: 'Open Science Framework (OSF)', by: 'Center for Open Science', why: 'Studies preregister karo, data aur materials share karo.', level: 'Advanced', url: 'https://osf.io', cta: 'Kholo' },
        { type: 'Tool', title: 'Zotero', by: 'Corporation for Digital Scholarship', why: 'Free reference manager: papers save karo aur APA citations apne aap banao.', level: 'Intermediate', url: 'https://www.zotero.org', cta: 'Download' }
      ]
    },
    {
      title: 'Practice, tests aur apps',
      desc: 'Seekhe hue ko apne upar lagao.',
      items: [
        { type: 'App', title: 'Anki', by: 'Open source', why: 'Spaced-repetition flashcards: is course ke glossary terms bhi isme daal kar pakke karo.', level: 'All', url: 'https://apps.ankiweb.net', cta: 'Download' },
        { type: 'Test', title: 'Project Implicit (IAT)', by: 'Harvard & partners', why: 'Implicit Association Test khud try karo (Chapter 5.5 ke caveats yaad rakhna).', level: 'Intermediate', url: 'https://implicit.harvard.edu', cta: 'Try karo' },
        { type: 'Test', title: 'IPIP personality tests', by: 'International Personality Item Pool', why: 'Free, public-domain, research-based Big Five aur doosre personality scales.', level: 'Intermediate', url: 'https://ipip.ori.org', cta: 'Kholo' },
        { type: 'Test', title: 'VIA Character Strengths survey', by: 'VIA Institute', why: 'Apni 24 character strengths ka free survey (positive psychology).', level: 'Beginner', url: 'https://www.viacharacter.org', cta: 'Survey do' },
        { type: 'App', title: 'Medito', by: 'Medito Foundation', why: 'Free, non-profit meditation aur mindfulness app.', level: 'Beginner', url: 'https://meditofoundation.org', cta: 'Kholo' },
        { type: 'Game', title: 'Bad News', by: 'Cambridge Social Decision-Making Lab', why: 'Fake news ki techniques khel kar seekho (prebunking).', level: 'Beginner', url: 'https://www.getbadnews.com', cta: 'Khelo' }
      ]
    },
    {
      title: 'India: courses, exams aur career',
      desc: 'Psychology ko career banane ke liye official links.',
      items: [
        { type: 'Exams', title: 'National Testing Agency (CUET, UGC-NET)', by: 'Government of India', why: 'CUET-UG/PG (admission) aur UGC-NET (lecturer, JRF) ki official jaankari.', level: 'All', url: 'https://nta.ac.in', cta: 'NTA kholo' },
        { type: 'Exam', title: 'UGC-NET', by: 'NTA', why: 'Psychology me college teaching aur research fellowship ke liye.', level: 'Advanced', url: 'https://ugcnet.nta.ac.in', cta: 'Kholo' },
        { type: 'Regulator', title: 'Rehabilitation Council of India (RCI)', by: 'Government of India', why: 'Clinical aur rehabilitation psychology ke approved courses aur professional registration.', level: 'Advanced', url: 'https://rehabcouncil.nic.in', cta: 'Kholo' },
        { type: 'Distance learning', title: 'IGNOU psychology programmes', by: 'IGNOU', why: 'BA (Hons) Psychology aur MA Psychology distance mode me.', level: 'All', url: 'https://www.ignou.ac.in', cta: 'Kholo' },
        { type: 'Institute', title: 'Central Institute of Psychiatry, Ranchi', by: 'Government of India', why: 'Clinical psychology aur psychiatry training ke liye mashhoor purana sansthan.', level: 'Advanced', url: 'https://cipranchi.nic.in', cta: 'Kholo' }
      ]
    },
    {
      title: 'Dark psychology se bachav (Level 8)',
      desc: 'Manipulation, scams aur fake news ko pehchaanne aur report karne ke liye bharosemand tools aur kitaabein.',
      items: [
        { type: 'Report (India)', title: 'Sanchar Saathi: Chakshu', by: 'Department of Telecommunications', why: 'Fraud calls, SMS aur WhatsApp messages report karo, taaki number band ho sake. "Digital arrest" jaise calls yahan report karo.', level: 'All', url: 'https://sancharsaathi.gov.in', cta: 'Portal kholo' },
        { type: 'Consumer (India)', title: 'National Consumer Helpline (1915)', by: 'Department of Consumer Affairs', why: 'Dark patterns, chhupe charges, nakli offers ya MLM ki shikayat ke liye.', level: 'All', url: 'https://consumerhelpline.gov.in', cta: 'Shikayat karo' },
        { type: 'Safety tool', title: 'StopNCII.org', by: 'Revenge Porn Helpline (SWGfL)', why: 'Intimate photos ke misuse ka darr ho to unka digital fingerprint bana kar platforms par upload rokne me madad.', level: 'All', url: 'https://stopncii.org', cta: 'Kholo' },
        { type: 'Game', title: 'Bad News', by: 'Cambridge Social Decision-Making Lab & DROG', why: 'Khud fake news creator ban kar unki chaalein seekho: research-tested prebunking game.', level: 'Beginner', url: 'https://www.getbadnews.com', cta: 'Khelo' },
        { type: 'Website', title: 'Deceptive Design', by: 'Harry Brignull', why: 'Dark patterns ke types aur asli examples ka sabse jaana-maana collection.', level: 'Beginner', url: 'https://www.deceptive.design', cta: 'Kholo' },
        { type: 'Book', title: 'Influence: The Psychology of Persuasion', by: 'Robert Cialdini', why: 'Reciprocity, scarcity, authority jaise levers ki classic kitaab: chaal samajhne ke liye pehli kitaab.', level: 'Beginner', url: GR('Influence Cialdini'), cta: 'Goodreads' },
        { type: 'Book', title: 'Foolproof', by: 'Sander van der Linden', why: 'Misinformation dimaag ko kaise "infect" karti hai, aur prebunking se immunity kaise banti hai.', level: 'Intermediate', url: GR('Foolproof Sander van der Linden'), cta: 'Goodreads' },
        { type: 'Book', title: 'Emotional Blackmail', by: 'Susan Forward', why: 'FOG (Fear, Obligation, Guilt) ko pehchaanne aur rishton me boundary rakhne ki practical guide.', level: 'Beginner', url: GR('Emotional Blackmail Susan Forward'), cta: 'Goodreads' }
      ]
    },
    {
      title: 'Madad aur helplines',
      desc: 'Seekhna ek taraf, par agar tum ya koi apna mushkil me hai to ye numbers sabse zaroori hain.',
      helpline: {
        title: 'Turant madad (India)',
        text: 'Ye numbers free ya kam kharch ke hain. Number kabhi-kabhi badal sakte hain, isliye official website par latest check karte raho. Turant jaan ka khatra ho to 112 par call karo.',
        nums: [
          ['Tele-MANAS (24x7, free, sarkari)', '14416', 'ya 1-800-891-4416'],
          ['Emergency', '112', 'Police, ambulance, fire'],
          ['iCall (TISS)', '9152987821', 'Psychosocial counselling (din ke samay)'],
          ['Vandrevala Foundation', '+91 9999 666 555', '24x7 mental health support'],
          ['Women helpline', '181', 'Hinsa ya khatre me mahilaon ke liye'],
          ['Childline', '1098', 'Bachchon ki suraksha aur madad'],
          ['Cyber crime', '1930', 'Online fraud aur harassment report (jitni jaldi, utna behtar)'],
          ['NCW helpline', '7827-170-170', 'Mahilaon ke khilaf hinsa ya harassment (24x7)'],
          ['Consumer helpline', '1915', 'Dark patterns, chhupe charges, nakli offers']
        ]
      },
      items: [
        { type: 'Helpline', title: 'Tele-MANAS', by: 'Ministry of Health & Family Welfare', why: 'Rashtriya tele-mental health program: 24x7, kai bhashaon me, free.', level: 'All', url: 'https://telemanas.mohfw.gov.in', cta: 'Website' },
        { type: 'Helpline', title: 'iCall', by: 'Tata Institute of Social Sciences', why: 'Trained professionals se phone, email aur chat counselling.', level: 'All', url: 'https://icallhelpline.org', cta: 'Website' },
        { type: 'Report', title: 'National Cyber Crime Reporting Portal', by: 'Government of India', why: 'Online harassment, fraud aur cyberbullying report karne ke liye.', level: 'All', url: 'https://cybercrime.gov.in', cta: 'Website' }
      ]
    }
  ];
})();
