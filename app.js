(() => {
  'use strict';

  const q = (type, prompt, word, choices, answer, why) => ({ type, prompt, word, choices, answer, why });
  const romanFor = {
    'ปิด':'pìt','บ้าน':'bâan','ไก่':'gài','ขอบคุณ':'khɔ̀ɔp-khun',
    'ทางออก':'thaang-ɔ̀ɔk','ทางเข้า':'thaang-khâo','ห้องน้ำ':'hɔ̂ng-náam',
    'เปิด':'pə̀ət','วันพุธ':'wan phút','วันพฤหัสบดี':'wan pha-rʉ́-hàt-sa-bɔɔ-dii',
    'วันอาทิตย์':'wan aa-thít','วันนี้':'wan-níi','ช่วยด้วย':'chûai dûai',
    'น้ำเปล่า':'náam-plào','ข้าวผัด':'khâao-phàt','เงินทอน':'ngoen-thɔɔn',
    'รอ':'rɔɔ','ขอน้ำเปล่า':'khɔ̌ɔ náam plào','ปิดเครื่อง':'pìt khrʉ̂ang',
    'ตรงไป':'trong pai','กุญแจ':'gun-jae','ทางหนีไฟ':'thaang nǐi fai',
    'เปิดเครื่อง':'pə̀ət khrʉ̂ang','เจอกัน':'jəə gan',
    'ข้าวผัดไก่':'khâao phàt gài','ไข่เจียว':'khài jiao',
    'เจอกันพรุ่งนี้':'jəə gan phrûng-níi','ขอบคุณมาก':'khɔ̀ɔp-khun mâak',
    'เครื่องเสีย':'khrʉ̂ang sǐa','เจอกันตอนเย็น':'jəə gan tɔɔn yen'
  };
  const w = (thai, roman, meaning) => ({ thai, roman:romanFor[thai]||roman, meaning });
  const g = (thai, roman, hint) => ({ thai, roman, hint });
  const places = ['左', '右', '上', '下'];

  const lessons = [
    {
      title:'そっくり文字の見分け', tagline:'違うところを探すだけ。まずは8文字！', emoji:'🔎',
      insight:'最初から44文字を丸暗記する必要はありません。形が似た文字を並べて、違いを探すところから始めましょう。',
      trick:'「บ と ป」「ด と ต」は、パッと見て同じに感じます。二つを交互に見て、どこが違うか指でなぞってみましょう。',
      glyphs:[g('บ','b','ボー'),g('ป','p','ポー'),g('ด','d','ドー'),g('ต','t','トー'),g('ม','m','モー'),g('น','n','ノー'),g('ก','k','コー'),g('จ','j','チョー')],
      words:[w('มา','maa','来る'),w('นา','naa','田んぼ'),w('ตา','taa','目・祖父'),w('กา','kaa','カラス')],
      questions:[
        q('shape','「b」の音を表す文字は？','',['บ','ป','ด','ม'],'บ','บ は b、ป は p。形がよく似たペアです。'),
        q('shape','「p」の音を表す文字は？','',['ป','บ','ต','น'],'ป','ป が p の音です。'),
        q('shape','「d」の音を表す文字は？','',['ด','ต','จ','ก'],'ด','ด は d、ต は t です。'),
        q('shape','「t」の音を表す文字は？','',['ต','ด','ป','บ'],'ต','ต は t。似た ด と区別しましょう。'),
        q('shape','「m」の音を表す文字は？','',['ม','น','บ','ก'],'ม','ม は m。มา は maa と読みます。'),
        q('shape','「n」の音を表す文字は？','',['น','ม','ต','จ'],'น','น は n。นา は naa と読みます。'),
        q('shape','「k」の音を表す文字は？','',['ก','จ','ด','บ'],'ก','ก は息を強く出さない k の音です。'),
        q('shape','「j / ch」に近い音を表す文字は？','',['จ','ก','น','ม'],'จ','จ は日本語の「チ」「ヂ」に近い音です。'),
        q('swap','「มา」の最初の文字は？','มา',['ม','น','ต','ก'],'ม','มา＝มา (maa)、最初の子音は ม です。'),
        q('swap','「ตา」の最初の文字は？','ตา',['ต','ด','ม','ป'],'ต','ตา (taa) は「目」「祖父」を表す単語です。')
      ]
    },
    {
      title:'母音のかくれんぼ', tagline:'前・後ろ・上・下。文字の位置を探そう！',emoji:'🧩',
      insight:'タイ文字は子音が中心。母音の印は、その左・右・上・下に現れます。左にある母音も、発音では子音のあとに読みます。',
      trick:'例えば ไป は「ไ」が左にありますが、読む順番は「ป の p → ไ の ai」で pai（行く）。目で見る順番と発音の順番が違うのが面白いところ。',
      glyphs:[g('า','aa','右：長いアー'),g('ี','ii','上：長いイー'),g('ู','uu','下：長いウー'),g('ไ','ai','左：アイ'),g('ใ','ai','左：アイ'),g('ม','m','中心の子音'),g('ด','d','中心の子音'),g('ป','p','中心の子音')],
      words:[w('มา','maa','来る'),w('มี','mii','ある・持つ'),w('ดู','duu','見る'),w('ไป','pai','行く'),w('ดี','dii','良い'),w('ปู','puu','カニ'),w('ใบ','bai','葉'),w('ใจ','jai','心')],
      questions:[
        q('vowel','母音の印は、子音のどちら側？','มา',places,'右','มา の า は ม の右側です。'),
        q('vowel','母音の印は、子音のどこ？','มี',places,'上','มี の ี は ม の上です。'),
        q('vowel','母音の印は、子音のどこ？','ดู',places,'下','ดู の ู は ด の下です。'),
        q('vowel','母音の印は、子音のどこ？','ไป',places,'左','ไป の ไ は ป の左です。音は p → ai の順。'),
        q('vowel','母音の印は、子音のどちら側？','กา',places,'右','กา の า は ก の右側です。'),
        q('vowel','母音の印は、子音のどこ？','ดี',places,'上','ดี の ี は ด の上です。'),
        q('vowel','母音の印は、子音のどこ？','ปู',places,'下','ปู の ู は ป の下です。'),
        q('vowel','母音の印は、子音のどこ？','ใบ',places,'左','ใบ の ใ は บ の左。意味は「葉」です。'),
        q('vowel','母音の印は、子音のどこ？','ใจ',places,'左','ใจ は จ + ใ で jai。「心」です。'),
        q('swap','「มี」はどう読む？','มี',['mii（ミー）','maa（マー）','duu（ドゥー）','pai（パイ）'],'mii（ミー）','ม + ี = มี (mii)。上の印は長いイー。')
      ]
    },
    {
      title:'1文字チェンジの魔法',tagline:'たった1か所を替えると、意味が変わる。',emoji:'✨',
      insight:'覚えた母音を動かさず、子音だけ取り替えます。「読めた！」が急に増える練習です。',
      trick:'「มา＝来る」の先頭だけを替えれば「นา＝田」「ตา＝目」「กา＝カラス」。母音 า を読み直す必要はありません。',
      glyphs:[g('ม','m','มา → 来る'),g('น','n','นา → 田'),g('ต','t','ตา → 目'),g('ก','k','กา → カラス'),g('ป','p','ปา → 投げる'),g('ด','d','ดี → 良い'),g('จ','j','ใจ → 心'),g('บ','b','ใบ → 葉')],
      words:[w('มา','maa','来る'),w('นา','naa','田んぼ'),w('ตา','taa','目'),w('กา','kaa','カラス'),w('ปา','paa','投げる'),w('ดี','dii','良い'),w('มี','mii','ある・持つ'),w('ปู','puu','カニ')],
      questions:[
        q('swap','「มา」の ม を น に替えると？','นา',['田んぼ','来る','目','投げる'],'田んぼ','นา (naa) は「田んぼ」。'),
        q('swap','「มา」の ม を ต に替えると？','ตา',['目','カラス','来る','カニ'],'目','ตา (taa) は「目」や「祖父」。'),
        q('swap','「มา」の ม を ก に替えると？','กา',['カラス','田んぼ','良い','葉'],'カラス','กา (kaa) は「カラス」。'),
        q('swap','「มา」の ม を ป に替えると？','ปา',['投げる','来る','年','カニ'],'投げる','ปา (paa) は「投げる」。'),
        q('swap','「ดี」の ด を ม に替えると？','มี',['ある・持つ','良い','見る','来る'],'ある・持つ','ดี (dii) → มี (mii)。'),
        q('swap','「ดู」の ด を ป に替えると？','ปู',['カニ','見る','葉','目'],'カニ','ดู (duu) は「見る」、ปู (puu) は「カニ」。'),
        q('swap','「กา」の ก を ต に替えると？','ตา',['目','カラス','投げる','心'],'目','กา (kaa) → ตา (taa)。'),
        q('swap','「ปา」の ป を น に替えると？','นา',['田んぼ','投げる','心','カニ'],'田んぼ','ปา (paa) → นา (naa)。'),
        q('swap','「ใบ」の บ を จ に替えると？','ใจ',['心','葉','カラス','良い'],'心','ใบ (bai) は葉、ใจ (jai) は心。'),
        q('swap','「มี」の ม を ด に替えると？','ดี',['良い','ある・持つ','来る','年'],'良い','มี (mii) → ดี (dii)。')
      ]
    },
    {
      title:'短い音・長い音',tagline:'のばす・のばさないで意味が変わる。',emoji:'🎵',
      insight:'タイ語では、母音の長さも大切です。まずは短い／長いのペアを見て、文字から推測する練習をします。',
      trick:'า は長い aa、ะ は短い a。ี は長い ii、ิ は短い i。ู は長い uu、ุ は短い u。日本語のカタカナは目安で、実際の音はタイ語音声でも確認しましょう。',
      glyphs:[g('ะ','a','短いア'),g('า','aa','長いアー'),g('ิ','i','短いイ'),g('ี','ii','長いイー'),g('ุ','u','短いウ'),g('ู','uu','長いウー'),g('จ','j','子音'),g('ป','p','子音')],
      words:[w('จะ','ja','～する（助動詞）'),w('มา','maa','来る'),w('ดี','dii','良い'),w('มี','mii','ある・持つ'),w('ดุ','du','厳しい'),w('ดู','duu','見る'),w('ปู','puu','カニ'),w('ปี','pii','年')],
      questions:[
        q('vowel','長い「aa」を表す印は？','',['า','ะ','ี','ุ'],'า','า は長い aa、ะ は短い a です。'),
        q('vowel','短い「a」を表す印は？','',['ะ','า','ู','ี'],'ะ','ะ は短い a です。'),
        q('vowel','長い「ii」を表す印は？','',['ี','ิ','ุ','า'],'ี','ี は長い ii、ิ は短い i です。'),
        q('vowel','短い「i」を表す印は？','',['ิ','ี','ู','ะ'],'ิ','ิ は短い i です。'),
        q('vowel','長い「uu」を表す印は？','',['ู','ุ','า','ี'],'ู','ู は長い uu、ุ は短い u です。'),
        q('vowel','短い「u」を表す印は？','',['ุ','ู','ิ','ะ'],'ุ','ุ は短い u です。'),
        q('swap','「ดู」は何を表す？','ดู',['見る','カニ','良い','来る'],'見る','ดู (duu)＝見る。母音 ู は長い uu です。'),
        q('swap','「ดุ」は何を表す？','ดุ',['厳しい','見る','田んぼ','年'],'厳しい','ดุ (du)＝厳しい。母音 ุ は短い u です。'),
        q('swap','「ปี」は何を表す？','ปี',['年','カニ','心','葉'],'年','ปี (pii)＝年。'),
        q('swap','「มี」はどう読む？','มี',['mii','mi','maa','mu'],'mii','มี は長い ii の音です。')
      ]
    },
    {
      title:'最後の1文字を読む',tagline:'単語の終わりに隠れた音を見つけよう。',emoji:'🕵️',
      insight:'単語の最後の子音にも注目。語末の ด は t、บ は p のように、最初に来たときと音が異なることもあります。',
      trick:'กิน（食べる）・บิน（飛ぶ）・ดิน（土）は、どれも後半が ิน (in)。最初の1文字だけ替わります。',
      glyphs:[g('น','n','語末も n'),g('ม','m','語末も m'),g('ง','ng','鼻に抜く ng'),g('ก','k','語末は k'),g('ด','t','語末では t'),g('บ','p','語末では p'),g('แ','ae','子音の左'),g('ิ','i','子音の上')],
      words:[w('กิน','kin','食べる'),w('บิน','bin','飛ぶ'),w('ดิน','din','土'),w('นาง','naang','女性'),w('มาก','maak','とても'),w('ปิด','pit','閉める'),w('แดง','daeng','赤い'),w('บ้าน','baan','家')],
      questions:[
        q('shape','「กิน」の最後の文字は？','กิน',['น','ก','ง','ม'],'น','กิน は ก + ิ + น。最後は น (n)。'),
        q('shape','「บิน」の最後の文字は？','บิน',['น','บ','ด','ม'],'น','บิน は บ + ิ + น。'),
        q('shape','「มาก」の最後の文字は？','มาก',['ก','ม','น','ง'],'ก','มาก の最後は ก (k)。'),
        q('shape','「ปิด」の最後の文字は？','ปิด',['ด','ป','ต','น'],'ด','ปิด の最後は ด。語末では t の音になります。'),
        q('shape','「นาง」の最後の文字は？','นาง',['ง','น','ม','ก'],'ง','นาง の最後は ง (ng)。'),
        q('vowel','「แดง」の母音 แ は子音のどこ？','แดง',places,'左','แดง の แ は ด より左にあります。'),
        q('swap','「กิน」の ก を บ にすると何になる？','บิน',['飛ぶ','食べる','土','閉める'],'飛ぶ','กิน (kin) → บิน (bin)。'),
        q('swap','「บิน」の บ を ด にすると何になる？','ดิน',['土','飛ぶ','食べる','赤い'],'土','บิน (bin) → ดิน (din)。'),
        q('swap','「มาก」の意味は？','มาก',['とても','来る','年','カニ'],'とても','มาก (maak) は「とても／多い」。'),
        q('swap','「บ้าน」の意味は？','บ้าน',['家','田んぼ','心','葉'],'家','บ้าน (baan) は家。上の ้ は声調記号です。')
      ]
    },
    {
      title:'声調マークの秘密',tagline:'小さな記号にも意味がある。',emoji:'🎼',
      insight:'タイ語の音の高さ（声調）は、子音の種類・母音の長さ・語末・声調記号などで決まります。まずは記号がある単語を見つけ、よく使う言葉を覚えましょう。',
      trick:'「ไก่＝鶏」「ไม่＝～ない」「ข้าว＝ご飯」。上の小さなマークが見つかるかな？ 記号だけで声調を決められるわけではない点に注意。',
      glyphs:[g('่','mai ek','声調記号'),g('้','mai tho','声調記号'),g('ก','k','中子音'),g('ข','kh','高子音'),g('ค','kh','低子音'),g('ไ','ai','左の母音'),g('า','aa','右の母音'),g('ำ','am','母音 am')],
      words:[w('ไก่','kài','鶏'),w('ไม่','mâi','～ない'),w('ใช่','châi','はい・そう'),w('ข้าว','khâao','ご飯'),w('บ้าน','bâan','家'),w('น้ำ','náam','水'),w('ขา','khǎa','脚'),w('ชา','chaa','お茶')],
      questions:[
        q('shape','声調記号「่」がある単語は？','',['ไก่','กา','มา','นา'],'ไก่','ไก่ の ก の上に ่ があります。'),
        q('shape','声調記号「้」がある単語は？','',['บ้าน','มี','ปี','ชา'],'บ้าน','บ้าน の บ の上に ้ があります。'),
        q('swap','「ไม่」はどういう意味？','ไม่',['～ない','鶏','心','来る'],'～ない','ไม่ (mâi) は否定の言葉です。'),
        q('swap','「ใช่」はどういう意味？','ใช่',['はい・そう','ご飯','水','店'],'はい・そう','ใช่ (châi) は「そうです／正しい」です。'),
        q('swap','「ข้าว」はどういう意味？','ข้าว',['ご飯','お茶','家','脚'],'ご飯','ข้าว (khâao) はご飯。'),
        q('swap','「น้ำ」はどういう意味？','น้ำ',['水','鶏','お茶','家'],'水','น้ำ (náam) は水。'),
        q('shape','「ข」と同じく kh に近い音を表す文字は？','ข',['ค','ก','จ','ง'],'ค','ข と ค は子音の種類（高子音／低子音）が異なります。'),
        q('vowel','「ชา」の母音の位置は？','ชา',places,'右','ชา の า は ช の右。'),
        q('swap','「บ้าน」の意味は？','บ้าน',['家','水','鶏','茶'],'家','บ้าน (bâan) は家。'),
        q('swap','「ขา」の意味は？','ขา',['脚','ご飯','否定','心'],'脚','ขา (khǎa) は脚です。')
      ]
    },
    {
      title:'街でタイ文字を読む',tagline:'看板・メニューで見かける単語に挑戦！',emoji:'🏆',
      insight:'1週目の区切りとして、形の見分け・母音の位置・1文字チェンジを全部使います。文字から単語が分かれば大きな前進です。',
      trick:'文字が読めると、タイの街が違って見えます。กาแฟ はコーヒー、ร้าน は店、ข้าว はご飯。読めたら身近な看板でも探してみましょう。',
      glyphs:[g('ก','k','子音'),g('ฟ','f','子音'),g('ร','r','子音'),g('ย','y','子音'),g('ห','h','子音'),g('ช','ch','子音'),g('น','n','子音'),g('อ','o','母音の土台にもなる')],
      words:[w('กาแฟ','kaa-fae','コーヒー'),w('ชา','chaa','お茶'),w('ข้าว','khâao','ご飯'),w('น้ำ','náam','水'),w('ยา','yaa','薬'),w('บ้าน','bâan','家'),w('ไป','pai','行く'),w('ร้าน','ráan','店')],
      questions:[
        q('swap','メニューの「กาแฟ」は？','กาแฟ',['コーヒー','お茶','水','家'],'コーヒー','กาแฟ (kaa-fae) はコーヒー。'),
        q('swap','メニューの「ชา」は？','ชา',['お茶','薬','店','ご飯'],'お茶','ชา (chaa) はお茶。'),
        q('swap','「ข้าว」は？','ข้าว',['ご飯','コーヒー','店','目'],'ご飯','ข้าว (khâao) はご飯。'),
        q('swap','「น้ำ」は？','น้ำ',['水','薬','茶','カラス'],'水','น้ำ (náam) は水。'),
        q('swap','「ยา」は？','ยา',['薬','家','水','田んぼ'],'薬','ยา (yaa) は薬。'),
        q('swap','「บ้าน」は？','บ้าน',['家','店','水','心'],'家','บ้าน (bâan) は家。'),
        q('swap','「ไป」は？','ไป',['行く','来る','良い','飛ぶ'],'行く','ไป (pai) は行く。'),
        q('swap','「ร้าน」は？','ร้าน',['店','コーヒー','ご飯','年'],'店','ร้าน (ráan) は店。'),
        q('vowel','「ไป」の母音 ไ は子音のどこ？','ไป',places,'左','ไป は ป の左に ไ があります。'),
        q('shape','「กาแฟ」の最初の子音は？','กาแฟ',['ก','ฟ','ม','ด'],'ก','กาแฟ は กา + แฟ の2つの音節からなります。')
      ]
    }
  ];

  if(typeof window.THAI_WEEK2 === 'function') lessons.push(...window.THAI_WEEK2(q,w,g));
  if(typeof window.THAI_WEEK3 === 'function') lessons.push(...window.THAI_WEEK3(q,w,g));
  if(typeof window.THAI_WEEK4 === 'function') lessons.push(...window.THAI_WEEK4(q,w,g));
  if(typeof window.THAI_WEEK5 === 'function') lessons.push(...window.THAI_WEEK5(q,w,g));
  if(typeof window.THAI_WEEK6 === 'function') lessons.push(...window.THAI_WEEK6(q,w,g));
  if(typeof window.THAI_WEEK7 === 'function') lessons.push(...window.THAI_WEEK7(q,w,g));
  if(typeof window.THAI_WEEK8 === 'function') lessons.push(...window.THAI_WEEK8(q,w,g));
  if(typeof window.THAI_WEEK9 === 'function') lessons.push(...window.THAI_WEEK9(q,w,g));
  const alphabet = 'ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ ป ผ ฝ พ ฟ ภ ม ย ร ล ว ศ ษ ส ห ฬ อ ฮ'.split(' ');
  const middle = new Set('ก จ ด ต บ ป อ ฎ ฏ'.split(' '));
  const high = new Set('ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห'.split(' '));
  const STORAGE = 'thai-script-seven-v1';
  let progress = loadProgress();
  let selectedDay = Math.max(1, Math.min(lessons.length, Number(progress.lastDay) || 1));
  let view = 'learn';
  let quiz = [];
  let questionIndex = 0;
  let choice = null;
  let score = 0;
  let lastPass = false;
  let toastTimer;
  const root = document.getElementById('app');

  function loadProgress(){
    try{ const v = JSON.parse(localStorage.getItem(STORAGE)); if(v && typeof v === 'object' && v.days && typeof v.days === 'object') return v; }catch(e){}
    return {days:{},lastDay:1};
  }
  function saveProgress(){ try{localStorage.setItem(STORAGE,JSON.stringify(progress));}catch(e){} }
  function completed(){return Object.values(progress.days).filter(v => v && v.passed).length;}
  function shuffle(items){return [...items].sort(() => Math.random() - .5);}
  function html(s){return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function thai(s){return `<span class="thai" lang="th">${html(s)}</span>`;}
  const landscapes = [
    {src:'images/bangkok-wat-arun.webp',place:'バンコク・ワットアルン'},
    {src:'images/chiang-mai-mountains.webp',place:'タイ北部・山と田園'},
    {src:'images/ayutthaya.webp',place:'アユタヤ・歴史遺跡'},
    {src:'images/krabi-coast.webp',place:'クラビ・アンダマン海'},
    {src:'images/sukhothai.webp',place:'スコータイ・古都の風景'},
    {src:'images/isaan.webp',place:'イサーン地方・田園風景'},
    {src:'images/chiang-rai.webp',place:'チェンライ・寺院と自然'},
    {src:'images/phuket.webp',place:'プーケット・南国の海'},
    {src:'images/floating-market.webp',place:'タイ中部・水上市場'},
    {src:'images/bangkok-night.webp',place:'バンコク・夜景'}
  ];

  function renderDayButtons(from,to){
    return lessons.slice(from,to).map((d,i)=>{
      const n=from+i+1;
      const isDone=!!progress.days[n]?.passed;
      return `<button class="day ${selectedDay===n?'active':''} ${isDone?'complete':''}" data-action="day" data-day="${n}" aria-current="${selectedDay===n?'step':'false'}" title="Day ${n}: ${html(d.title)}"><span class="day-number">${isDone?'✓':String(n).padStart(2,'0')}</span><span class="name"><strong>DAY ${n}　${html(d.title)}</strong><small>${isDone?`合格済み・最高 ${progress.days[n].best}/10`:'学習 → 10問クイズ'}</small></span>${isDone?'<span class="check">✓</span>':''}</button>`;
    }).join('');
  }

  function renderWeek(label,from,to){
    const active = selectedDay > from && selectedDay <= to;
    const passed = lessons.slice(from,to).filter((_,i)=>progress.days[from+i+1]?.passed).length;
    return `<details class="week-group" ${active?'open':''}><summary class="week-label">${html(label)}<span class="week-count">${passed}/${to-from}日</span></summary><div class="days">${renderDayButtons(from,to)}</div></details>`;
  }

  function render(){
    const lesson = lessons[selectedDay-1];
    const done = completed();
    root.innerHTML = `
      <div class="shell">
        <header class="masthead">
          <a class="logo" href="#" data-action="home"><span class="logo-mark thai">ก</span><span><span class="logo-word">タイ文字 90日間チャレンジ</span><small>THAI SCRIPT IN 90 DAYS</small></span></a>
          <span class="top-label">🌤️ 日本人のためのタイ文字入門</span>
        </header>
        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow"><span class="dot"></span> 1日10問 × 90日間</div>
            <h1>タイ文字って、<br><em>パズル</em>だったんだ。</h1>
            <p>間違い探し・母音のかくれんぼ・1文字チェンジ。<br>90日間で、タイ語の単語・看板・短いフレーズを読む力を育てよう。</p>
            <div class="hero-stats"><span class="stat"><i>🔎</i> 形を見分ける</span><span class="stat"><i>🧩</i> 母音の位置</span><span class="stat"><i>✨</i> 1文字交換</span></div>
          </div>
          <div class="hero-graphic scenic-hero"><img src="images/bangkok-wat-arun.webp" alt="夕暮れのバンコク、川沿いにそびえるワットアルンをイメージした風景" width="1200" height="677" fetchpriority="high"><span class="scenic-hero-label">THAILAND JOURNEY</span></div>
        </section>
        <div class="content">
          <aside class="sidebar" aria-label="90日間の学習メニュー">
            <div class="progress-summary"><div class="section-label" style="margin:0 0 3px">YOUR PROGRESS</div><div class="count">${done}<small> / ${lessons.length}日 合格</small></div><div class="meter" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${lessons.length}"><div style="width:${done/lessons.length*100}%"></div></div></div>
            ${renderWeek('WEEK 1　基本の文字',0,7)}
            ${renderWeek('WEEK 2　読み方の実践',7,14)}
            ${renderWeek('WEEK 3　読み方の応用',14,21)}
            ${renderWeek('WEEK 4　暮らしのタイ文字',21,28)}
            ${renderWeek('1ヶ月目　復習・実力確認',28,30)}
            ${renderWeek('WEEK 5　現地で読んでみる',30,37)}
            ${renderWeek('WEEK 6　短文を読み解く',37,44)}
            ${renderWeek('WEEK 7　短い文章に挑戦',44,51)}
            ${renderWeek('WEEK 8　実用表現を定着',51,58)}
            ${renderWeek('2ヶ月目　到達度チェック',58,60)}
            ${renderWeek('WEEK 9　生活の表現と週間テスト',60,63)}
            ${renderWeek('WEEK 10　日常を読み進める',63,70)}
            ${renderWeek('WEEK 11　食事とチャット',70,77)}
            ${renderWeek('WEEK 12　職場と安全のタイ文字',77,84)}
            ${renderWeek('WEEK 13　短文の実践と最終テスト',84,90)}
            <button class="guide-link" data-action="guide">📖　タイ文字44字の一覧を見る</button>
          </aside>
          <div class="maincol">
            <main class="panel" id="lesson-main">
              <div class="headline"><div><span class="pill">DAY ${selectedDay} / ${lessons.length} ${progress.days[selectedDay]?.passed?'・合格済み':''}</span><h2>${html(lesson.title)}</h2><p>${html(lesson.tagline)}</p></div><div class="bubble" aria-hidden="true">${lesson.emoji}</div></div>
              <div class="tabs" role="tablist" aria-label="学習とクイズ"><button class="tab ${view==='learn'?'active':''}" data-action="learn" role="tab" aria-selected="${view==='learn'}">① 見て覚える</button><button class="tab ${view!=='learn'?'active':''}" data-action="quiz-tab" role="tab" aria-selected="${view!=='learn'}">② 10問クイズ</button></div>
              ${view==='learn'?renderLearn(lesson):view==='quiz'?renderQuiz():renderResult()}
            </main>
            <div class="mini-legend"><span><b></b> 8問正解で合格</span><span><b></b> 自分のペースで次の日へ</span><span>進捗はこのブラウザに保存されます</span></div>
          </div>
        </div>
        <details class="reference" id="reference"><summary>📚 タイ文字44字の一覧（復習用）</summary><p>子音文字の一覧です。中・高・低は声調を決めるときに関係するグループ名。ฃ と ฅ は現代ではほとんど使われません。全字を一度に覚える必要はありません。</p><div class="alphabet-grid">${alphabet.map(s=>`<div><span lang="th">${s}</span><small>${middle.has(s)?'中子音':high.has(s)?'高子音':'低子音'}</small></div>`).join('')}</div></details>
        <footer class="footer"><span>THAI in 90 · 文字を読む楽しさを、毎日少しずつ。</span><span>※ カタカナ・ローマ字は発音の目安です。声調や正確な発音は音声でも確認してください。 <button class="reset" data-action="reset">進捗をリセット</button></span></footer>
      </div>`;
  }

  function renderLearn(l){
    const scene = landscapes[(selectedDay-1)%landscapes.length];
    return `<div class="learn-body">
      <div class="callout"><strong>💡 今日の発見</strong><br>${html(l.insight)}</div>
      <h3 class="step-heading"><b>1</b> 今日の文字を見比べよう</h3>
      <div class="letters-grid">${l.glyphs.map(x=>`<div class="letter-tile"><div class="glyph thai" lang="th">${html(x.thai)}</div><div class="reading">${html(x.roman)}</div><span class="desc">${html(x.hint)}</span></div>`).join('')}</div>
      <h3 class="step-heading"><b>2</b> 単語で「読めた！」を増やす</h3>
      <div class="word-grid ${l.words.some(x=>x.thai.length>8)?'phrases-grid':''}">${l.words.map(x=>`<div class="word-card"><button class="sound" data-action="speak" data-text="${html(x.thai)}" title="タイ語音声を聞く" aria-label="${html(x.thai)} の音声を再生">♪</button><div class="thai ${x.thai.length>9?'word-long':x.thai.length>5?'word-mid':''}" lang="th">${html(x.thai)}</div><div class="roman">${html(x.roman)}</div><span class="meaning">${html(x.meaning)}</span></div>`).join('')}</div>
      <h3 class="step-heading"><b>3</b> 裏技を使おう</h3>
      <div class="callout" style="background:#fffaf1;border-color:#f6e6c7"><strong style="color:#b17e36">✨ 覚え方のコツ</strong><br>${html(l.trick)}</div>
      <figure class="landscape-inset"><img src="${scene.src}" alt="${html(scene.place)}をイメージしたタイの風景" loading="lazy" width="1200" height="677"><figcaption><span>タイの風景イメージ</span><strong>${html(scene.place)}</strong></figcaption></figure>
      <div class="action-row"><span class="hint-text">覚えたら、10問にチャレンジ！</span><button class="primary" data-action="start">クイズに挑戦する　→</button></div>
    </div>`;
  }

  function renderQuiz(){
    const question = quiz[questionIndex];
    const answered = choice !== null;
    const correct = answered && choice === question.answer;
    const badge = {shape:'🔎 文字を見分ける',vowel:'🧩 母音パズル',swap:'✨ 1文字チェンジ',read:'📖 読み方クイズ',meaning:'📖 意味を読み取る'}[question.type]||'📖 読み方クイズ';
    return `<div class="learn-body" id="quiz-main">
      <div class="quiz-head"><span class="question-label">${badge}</span><span class="quiz-count"><strong>${questionIndex+1}</strong> / 10</span></div>
      <div class="quiz-progress"><div style="width:${(questionIndex+1)*10}%"></div></div>
      <div class="question">${html(question.prompt)}</div>
      ${question.word?`<div class="question-word thai ${question.word.length>9?'word-long':question.word.length>5?'word-mid':''}" lang="th" aria-label="タイ語: ${html(question.word)}">${html(question.word)}</div>`:''}
      <div class="choices">${question.choices.map(x=>{const wasChosen=answered && choice===x;const right=answered && x===question.answer;const cls=right?'correct':wasChosen?'wrong':'';const isThai=/[\u0E00-\u0E7F]/.test(x);return `<button class="choice ${cls}" data-action="answer" data-value="${html(x)}" ${answered?'disabled':''}>${isThai?thai(x):html(x)}${right?' ✓':wasChosen?' ×':''}</button>`}).join('')}</div>
      ${answered?`<div class="explain ${correct?'':'bad'}"><strong>${correct?'◎ 正解！':'もう一歩！　正解：'+html(question.answer)}</strong>${html(question.why)}</div><div class="action-row"><span class="hint-text">正解数 ${score} / ${questionIndex+1}</span><button class="primary" data-action="next">${questionIndex===9?'結果を見る　→':'次の問題へ　→'}</button></div>`:'<p class="tip">答えを1つ選んでください。</p>'}
    </div>`;
  }

  function renderResult(){
    const passed=lastPass;
    return `<div class="result">
      <div class="result-medal">${passed?'🏅':'🌱'}</div>
      <h3>${passed?'合格！ よくできました':'あと少し！ もう一度'}</h3>
      <div class="result-score">${score}<span> / 10問 正解</span></div>
      <p>${passed?'この日の読み方をクリアしました。次も少しずつ進みましょう。':'8問正解で合格です。もう一度見直してから挑戦できます。'}</p>
      <div class="action-row"><button class="secondary" data-action="learn">文字を復習する</button><button class="secondary" data-action="start">もう一度テスト</button>${passed && selectedDay<lessons.length?'<button class="primary" data-action="next-day">次の日へ　→</button>':''}</div>
      ${passed && selectedDay===7?'<p class="foot-note">🌷 1週目クリア！ 8日目からは看板や短いフレーズにも挑戦しましょう。</p>':''}
      ${passed && selectedDay===14?'<p class="foot-note">🌷 2週目クリア！ 15日目からは読み方の応用に挑戦しましょう。</p>':''}
      ${passed && selectedDay===21?'<p class="foot-note">🌷 3週目クリア！ 22日目からは日常の看板やメニューを読んでみましょう。</p>':''}
      ${passed && selectedDay===28?'<p class="foot-note">🌷 4週目クリア！ あと2日で1ヶ月目の実力確認です。</p>':''}
      ${passed && selectedDay===30?'<p class="foot-note">🎉 1ヶ月クリア！ 31日目からは旅や仕事の表示をさらに読みましょう。</p>':''}
      ${passed && selectedDay===37?'<p class="foot-note">🌷 37日目クリア！ 次は短文をまとめて読む練習です。</p>':''}
      ${passed && selectedDay===44?'<p class="foot-note">🌷 44日目クリア！ 次は短い文章を読む一週間です。</p>':''}
      ${passed && selectedDay===51?'<p class="foot-note">🌷 51日目クリア！ 60日目の到達度チェックへ進みましょう。</p>':''}
      ${passed && selectedDay===58?'<p class="foot-note">🌷 58日目クリア！ あと2日で60日達成です。</p>':''}
      ${passed && selectedDay===60?'<p class="foot-note">🎉 60日達成！ 61日目からは生活・仕事の文章をさらに読んでみましょう。</p>':''}
      ${passed && [63,70,77,84].includes(selectedDay)?'<p class="foot-note">🌷 週間テスト合格！ 次の7日間も少しずつ読み進めましょう。</p>':''}
      ${passed && selectedDay===lessons.length?'<p class="foot-note">🎉 90日間達成！ 看板・メニュー・仕事の表示・チャットを読み取る練習を続けましょう。</p>':''}
    </div>`;
  }

  function startQuiz(){
    quiz=shuffle(lessons[selectedDay-1].questions).map(x=>({...x,choices:shuffle(x.choices)}));
    questionIndex=0; choice=null;score=0;view='quiz';render();scrollToPanel();
  }
  function changeDay(n){
    if(!Number.isInteger(n)||n<1||n>lessons.length)return;
    selectedDay=n;progress.lastDay=n;saveProgress();view='learn';choice=null;render();scrollToPanel();
  }
  function finishQuiz(){
    lastPass=score>=8;const old=progress.days[selectedDay]||{best:0,passed:false};
    progress.days[selectedDay]={best:Math.max(old.best,score),passed:old.passed||lastPass};
    saveProgress();view='result';render();scrollToPanel();
  }
  function scrollToPanel(){
    if(window.innerWidth<721) document.getElementById('lesson-main')?.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function showToast(message){
    document.querySelector('.toast')?.remove();clearTimeout(toastTimer);
    const el=document.createElement('div');el.className='toast';el.role='status';el.textContent=message;document.body.appendChild(el);
    toastTimer=setTimeout(()=>el.remove(),3500);
  }
  function playThai(word){
    if(!('speechSynthesis' in window)){showToast('この端末では音声再生が使えません。');return;}
    try{
      window.speechSynthesis.cancel();
      const utterance=new SpeechSynthesisUtterance(word);
      utterance.lang='th-TH';utterance.rate=.8;
      const voice=window.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('th'));
      if(voice) utterance.voice=voice;
      utterance.onerror=()=>showToast('タイ語音声を再生できませんでした。端末の音声設定をご確認ください。');
      window.speechSynthesis.speak(utterance);
    }catch(e){showToast('この端末では音声再生が利用できません。');}
  }
  root.addEventListener('click',event=>{
    const button=event.target.closest('button[data-action],a[data-action]');if(!button)return;
    const action=button.dataset.action;
    if(action==='home'){event.preventDefault();changeDay(1);window.scrollTo({top:0,behavior:'smooth'});}
    if(action==='day')changeDay(Number(button.dataset.day));
    if(action==='guide'){const ref=document.getElementById('reference');ref.open=true;ref.scrollIntoView({behavior:'smooth',block:'start'});}
    if(action==='learn'){view='learn';render();scrollToPanel();}
    if(action==='quiz-tab' || action==='start')startQuiz();
    if(action==='speak')playThai(button.dataset.text);
    if(action==='answer' && view==='quiz' && choice===null){choice=button.dataset.value;if(choice===quiz[questionIndex].answer)score++;render();}
    if(action==='next' && view==='quiz' && choice!==null){if(questionIndex===9)finishQuiz();else{questionIndex++;choice=null;render();scrollToPanel();}}
    if(action==='next-day')changeDay(Math.min(lessons.length,selectedDay+1));
    if(action==='reset'&&window.confirm('90日間の合格記録をすべて消去しますか？')){progress={days:{},lastDay:1};saveProgress();changeDay(1);showToast('進捗をリセットしました。');}
  });
  if('speechSynthesis' in window)window.speechSynthesis.getVoices();
  render();
})();
