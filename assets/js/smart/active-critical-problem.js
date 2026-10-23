/* Smart Dimaag · Active dimaag, critical thinking, problem solving. Format: README.md ("Smart Dimaag ka format"). */
(function () {
  const K = window.PSY.skill;

  K({
    id: 'five-whys', cat: 'problem', level: 1,
    q: 'Kisi problem ki asli jad tak kaise pahunchein?',
    short: '"Kyun?" ko paanch baar poochho. Pehla jawab aksar sirf symptom hota hai; jad uske neeche chhupi hoti hai.',
    why: [
      'Ye technique Toyota ke founder Sakichi Toyoda se judi hai, aur Taiichi Ohno ne ise Toyota Production System ka hissa banaya. Machine ruki to sirf fuse badalne ki jagah poocha gaya: fuse kyun uda? Bearing kyun garam hua? Oil pump kyun nahi chala? Pump ka shaft kyun ghisa? Jab tak asli wajah (pump me filter na hona) na mil gayi.',
      'Psychology ke hisaab se hamara dimaag pehle dikhne wale kaaran par ruk jaata hai (fast System 1, Level 3). Har "kyun" dheeme, sochne wale System 2 ko jagata hai aur hume symptom se system tak le jaata hai.'
    ],
    steps: [
      ['Problem ek line me likho', 'Specific aur naapne layak: "Is mahine 3 deadlines miss hui", na ki "main bekaar hoon".'],
      ['Pehla "kyun?"', 'Seedha kaaran: "Kaam aakhri din tak latakta raha."'],
      ['Har jawab par phir "kyun?"', 'Har baar jawab ko facts se check karo, kahani se nahi.'],
      ['Jad pehchaano', 'Jahan jawab aisi cheez ho jo tumhare control me hai, aur jise badalne se upar ki saari kadiyan theek ho jaayein.'],
      ['Ek chhota fix test karo', 'Ek hafte ke liye try karo, phir dekho problem kam hui ya nahi.']
    ],
    example: [
      'Neha har mahine salary aane ke baad 20 tareekh tak broke ho jaati hai.',
      'Kyun? Paise khatam ho jaate hain. Kyun? Online orders bahut hote hain. Kyun? Raat ko thak kar app kholti hai aur "deal" dikh jaati hai. Kyun? Raat ko phone hi relax karne ka akela tareeka hai. Kyun? Din bhar me koi break ya hobby nahi hai.',
      'Jad paisa nahi, <b>thakaan aur boredom</b> nikli. Fix: raat 10 baje ke baad shopping apps logout, aur shaam ko 20 minute walk. Agle mahine kharche kaafi kam hue. Sirf budget app se ye kabhi theek nahi hota, kyunki wo symptom ka ilaaj tha.'
    ],
    script: [
      ['Team meeting me jab sab blame dhoondh rahe hon', '"Kaun galat tha, ye baad me. Pehle samajhte hain ki ye hua kyun, aur uske peeche kya tha."'],
      ['Dost ki problem sunte waqt', '"Achha, aur aisa kyun hua, tumhe kya lagta hai?" (bina judge kiye, bas jad tak jaane me madad)']
    ],
    mistakes: [
      'Kisi insaan par ruk jaana ("kyunki Rahul laaparwah hai"). Insaan ke peeche ka system dekho: Rahul ke paas checklist kyun nahi thi?',
      'Andaze ko fact maan lena. Har "kyun" ka jawab observation ya data se aaye.',
      'Exactly 5 par atakna. Kabhi 3 me jad mil jaati hai, kabhi 7 lagte hain.'
    ],
    drill: 'Aaj ki ek chhoti problem lo (jaise "subah late uthna" ya "phone par time barbaad hona") aur paper par 5 baar "kyun?" likho. Aakhri jawab par ek chhota fix kal try karo.',
    teacher: 'Ye technique sunne me bachchon jaisi lagti hai, aur yahi iski taakat hai. Bachche "kyun" poochhna band nahi karte; hum bade hokar band kar dete hain.',
    chapters: ['thinking-decisions', 'critical-thinking'],
    tags: ['root cause', 'toyota', 'problem', '5 whys', 'jad']
  });
})();
