/* Metadata for the two libraries: Roz ki Psychology (situations) and Smart Dimaag (skills). */
(function () {
  const PSY = window.PSY;

  PSY.libLevels = {
    1: { name: 'Basic', color: 'var(--good)', desc: 'Roz ki seedhi situations, ek-do concepts.' },
    2: { name: 'Gehra', color: 'var(--accent)', desc: 'Kai concepts ek saath, thoda gehra vishleshan.' },
    3: { name: 'Expert', color: 'var(--spark)', desc: 'Uljhi situations, kai log, chhupe irade.' }
  };

  PSY.dailyKinds = {
    anjaane: { name: 'Anjaane me', desc: 'Dimaag autopilot par: insaan ko pata hi nahi ki kyun kar raha hai.' },
    jaanbujh: { name: 'Jaanbujh kar', desc: 'Koi soch-samajh kar, apne fayde ke liye kar raha hai.' },
    dono: { name: 'Dono', desc: 'Ek taraf sochi-samjhi chaal, doosri taraf anjaane me reaction.' }
  };

  PSY.dailyCats = [
    ['ghar', 'Ghar aur parivaar', 'home', 'Maa-baap, bhai-behen, rishtedaar, shaadi aur tyohaar.'],
    ['dosti', 'Dosti aur rishte', 'heart', 'Dost, crush, partner, jhagde, jalan aur breakup.'],
    ['samaaj', 'Bheed aur samaaj', 'users', 'Bheed, queue, road, padosi, "log kya kahenge".'],
    ['padhai', 'Padhai aur exams', 'book', 'Padhai, exam, marks, coaching aur career ke faisle.'],
    ['kaam', 'Office aur kaam', 'briefcase', 'Boss, colleagues, meetings, interviews aur salary.'],
    ['paisa', 'Paisa aur shopping', 'wallet', 'Sale, EMI, offers, investment aur kharche.'],
    ['online', 'Phone aur social media', 'phone', 'Reels, likes, WhatsApp, online jhagde aur FOMO.'],
    ['sehat', 'Aadatein aur sehat', 'leaf', 'Gym, diet, neend, nasha aur roz ki aadatein.'],
    ['galti', 'Jaante huye bhi galti', 'alert', 'Pata hai galat hai, phir bhi karte hain. Aisa kyun?'],
    ['manipulation', 'Manipulation ki kahaniyan', 'mask', 'Judi hui kahaniyan: chaal kaise shuru hoti hai, kaise phansati hai, kaise niklein.']
  ];

  PSY.skillCats = [
    ['active', 'Active aur tez dimaag', 'bolt', 'Focus, memory, energy aur jaldi seekhne ki aadatein.'],
    ['critical', 'Critical thinking', 'eye', 'Claim ko parakhna, bias pakadna, sahi sawaal poochhna.'],
    ['problem', 'Problem solving', 'puzzle', 'Problem ki jad dhoondhna aur jaldi, smart solution nikalna.'],
    ['creative', 'Creativity', 'sparkles', 'Naye ideas, alag nazariya aur atke dimaag ko kholna.'],
    ['communication', 'Communication', 'chat', 'Sunna, samjhana, mushkil baat, kahani se baat kehna.'],
    ['room', 'Smart in every room', 'users', 'Meeting, interview, party: har jagah samajhdaar aur confident.'],
    ['eq', 'Emotional intelligence', 'heart', 'Gussa, dabaav aur doosron ke emotions ko samajhna aur sambhalna.']
  ];
})();
