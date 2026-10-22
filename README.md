# Manovigyan: Psychology A to Z

Psychology zero se advanced tak seekhne ke liye ek free, interactive website, Hinglish me, real-life (Indian) examples ke saath. Poora course ek teacher ki tarah tumse seedhi baat karta hai.

- **8 levels, 54 chapters**: Foundations → Brain & Biology → Learning, Memory & Cognition → Motivation, Emotion, Development & Personality → Social Psychology → Mental Health & Therapy → Advanced & Applied → **Dark Psychology & Manipulation** (pehchaano aur bacho)
- **Teacher voice**: har chapter ki shuruaat aur ant me teacher ka message, beech me teacher ke tips, teacher jaisa quiz feedback, aur home par "Aaj ki class"
- **66 motion graphics**: animated, kai interactive (neuron firing, brain map, Pavlov, forgetting curve, Asch experiment, stress bucket, CBT triangle, hot state meter, scam funnel, dark-pattern checkout…)
- **17 interactive labs**: Stroop test, reaction time, digit span, Müller-Lyer illusion, visual search, serial position, conditioning simulator, Cognitive Reflection Test, Wason task, mini Big Five, guided breathing, anchoring, framing, CBT thought record, manipulation radar, scam ya asli, na kehne ka gym
- **Har chapter me**: real examples, famous studies, myth vs fact, key terms, "Socho" sawaal, takeaways, quiz (instant explanation ke saath), aur aage padhne ke links
- **Levels achieve karo**: chapter quiz 60%+ = chapter complete; level exam (12 random sawaal) 70%+ = agla level unlock. XP, daily streak, 15 badges, level medals aur final certificate
- **Glossary A to Z** (800+ terms, apne aap har chapter se banta hai), **flashcards** (Leitner spaced repetition), **search**
- **Resources library**: free textbooks (NCERT, OpenStax), university courses, YouTube, books (beginner → advanced), podcasts, research tools, Indian exams/career links, scam/fraud reporting tools, aur helplines
- Light/dark mode, phone par bottom navigation, `prefers-reduced-motion` ka samman, aur koi build step nahi

> Ye site educational hai. Ye kisi diagnosis ya therapy ka replacement nahi. Mental health emergency me India me **Tele-MANAS: 14416** (24x7, free) ya **112** par call karein. Cyber fraud ho jaaye to turant **1930** ya cybercrime.gov.in.
>
> Level 8 manipulation ko **pehchaanne aur usse bachne** ke liye hai, kisi ko manipulate karne ke liye nahi.

## Chalana (local)

Koi install nahi chahiye. Seedha `index.html` browser me kholo, ya ek chhota server chalao:

```bash
python3 -m http.server 8000
# phir http://localhost:8000 kholo
```

Progress (XP, quiz scores, badges, flashcards) sirf usi browser ke `localStorage` me save hota hai.

## GitHub Pages par deploy

1. Repo ke **Settings → Pages** me jao.
2. **Source: Deploy from a branch** chuno, branch `main` (ya jis branch par ye code hai) aur folder `/ (root)`.
3. Kuch minute me site `https://<username>.github.io/<repo-name>/` par live ho jaayegi.

## Structure

```
index.html                 # shell: sidebar, topbar, tab bar, script tags
assets/css/style.css       # saare styles (design tokens, light + dark theme)
assets/js/core.js          # namespace, helpers, icons, progress store (XP, streak, badges)
assets/js/levels.js        # 8 levels ka metadata, teacher notes, badges, daily facts
assets/js/content/*.js     # chapters (level1.js … level8b.js)
assets/js/visuals1-8.js    # motion graphics (SVG/canvas), level ke hisaab se
assets/js/labs.js          # 14 interactive labs
assets/js/labs8.js         # Level 8 ke 3 labs
assets/js/resources.js     # resource library aur helplines
assets/js/app.js           # router aur saare views (home, path, chapter, quiz, exam, glossary, flashcards, profile, certificate, search)
tools/check-content.js     # content checker: node tools/check-content.js [--voice]
```

Routes plain hash tokens hain: `#home`, `#path`, `#c-<chapter-id>`, `#exam-<n>`, `#labs`, `#lab-<id>`, `#glossary`, `#cards`, `#resources`, `#profile`, `#certificate`.

## Naya chapter kaise jodein

Kisi bhi `assets/js/content/*.js` file me `PSY.chapter({...})` add karo:

```js
C({
  id: 'my-topic', level: 3, mins: 12, visual: 'forgetting',   // visual optional
  title: 'Chapter ka naam',
  tag: 'Ek line ka summary',
  intro: 'Teacher ka opening message (tum se seedhi baat)',
  hook: 'Shuruaat ka sawaal ya kahani',
  blocks: [
    ['h', 'Section heading'],
    ['p', 'Paragraph (simple HTML jaise <b> chalega)'],
    ['ex', 'Real-life example ka title', 'Body ya [paragraphs]'],
    ['case', 'Famous study ka naam', 'Body'],
    ['terms', [['Term', 'Definition'], ...]],         // glossary me apne aap judte hain
    ['myth', 'Myth', 'Fact'],
    ['list', ['...']], ['steps', [['Step', 'Detail'], ...]],
    ['table', ['Col 1', 'Col 2'], [['a', 'b'], ...]],
    ['compare', ['Left title', 'Body'], ['Right title', 'Body']],
    ['tip', 'Try this'], ['note', 'Dhyan do'], ['quote', 'Quote', 'Kisne kaha'],
    ['think', 'Sawaal', 'Jawab'],
    ['vis', 'visualKey', 'Caption'], ['lab', 'labKey'],
    ['teacher', 'Beech me teacher ka tip ya sawaal']
  ],
  outro: 'Teacher ka closing message: recap + quiz + agla chapter',
  takeaways: ['...'],
  quiz: [['Sawaal', ['A', 'B', 'C', 'D'], 1 /* sahi option ka index */, 'Explanation']],
  more: [['Resource ka naam', 'https://...', 'book' /* ya video, link, podcast */]]
});
```

Chapter order file aur script tag ke order se tay hota hai.

Commit se pehle `node tools/check-content.js --voice` chalao: ye har chapter, quiz answer index, visual/lab reference aur teacher-voice coverage check karta hai.

### Teacher voice ke niyam

- Learner ko "tum" se bulao (aap nahi), Hinglish me, chhote aur garam sentences.
- Gender-neutral raho: "tum seekhoge/seekhogi" ki jagah "seekho", "tumhe samajh aayega", "tumne dekha hoga", ya "chalo hum dekhte hain".
- Teacher ke tips kuch naya jodein (trick, common galti, apni life se sawaal), upar ka paragraph dohrayein nahi.
