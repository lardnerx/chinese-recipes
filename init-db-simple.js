const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'recipes.db');

if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('Old database removed');
}

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    name_zh TEXT,
    name_en TEXT,
    name_ja TEXT,
    name_ko TEXT,
    name_fr TEXT,
    name_es TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS levels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_id INTEGER,
    level INTEGER,
    ingredients_zh TEXT,
    ingredients_en TEXT,
    ingredients_ja TEXT,
    ingredients_ko TEXT,
    ingredients_fr TEXT,
    ingredients_es TEXT,
    steps_zh TEXT,
    steps_en TEXT,
    steps_ja TEXT,
    steps_ko TEXT,
    steps_fr TEXT,
    steps_es TEXT,
    note_zh TEXT,
    note_en TEXT,
    note_ja TEXT,
    note_ko TEXT,
    note_fr TEXT,
    note_es TEXT
  )`, () => {
    insertAllData();
  });
});

function insertAllData() {
  const recipes = [
    { id:1, slug:'kung-pao-chicken', name_zh:'宫保鸡丁', name_en:'Kung Pao Chicken', name_ja:'カンパオチキン', name_ko:'쿵파오 치킨', name_fr:'Poulet Kung Pao', name_es:'Pollo Kung Pao' },
    { id:2, slug:'mapo-tofu', name_zh:'麻婆豆腐', name_en:'Mapo Tofu', name_ja:'マーボー豆腐', name_ko:'마파두부', name_fr:'Tofu Mapo', name_es:'Tofu Mapo' },
    { id:3, slug:'fried-rice', name_zh:'蛋炒饭', name_en:'Egg Fried Rice', name_ja:'チャーハン', name_ko:'볶음밥', name_fr:'Riz sauté aux oeufs', name_es:'Arroz frito con huevos' },
    { id:4, slug:'sweet-sour-pork', name_zh:'糖醋里脊', name_en:'Sweet and Sour Pork', name_ja:'酢豚', name_ko:'탕수육', name_fr:'Porc aigre-doux', name_es:'Cerdo agridulce' }
  ];

  let recipeCount = 0;
  recipes.forEach(r => {
    db.run('INSERT INTO recipes (id, slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [r.id, r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es],
      (err) => {
        if (err) console.error(err);
        recipeCount++;
        if (recipeCount === recipes.length) insertLevels();
      }
    );
  });
}

function insertLevels() {
  const levelsData = [
    {
      recipeId:1,
      levels:[
        {
          level:1,
          ing_zh:'鸡胸肉200g,花生米50g,葱花2根,生抽2勺,白糖1勺',
          ing_en:'Chicken breast 200g, Peanuts 50g, Green onions 2, Light soy sauce 2tbsp, Sugar 1tbsp',
          ing_ja:'鶏胸肉200g,落花生50g,ネギ2本,薄口醤油2大さじ,砂糖1大さじ',
          ing_ko:'닭가슴살200g,땅콩50g,대파2개,간장2큰술,설탕1큰술',
          ing_fr:'Blanc de poulet 200g, Arachides 50g, Oignons verts 2, Sauce soja légère 2càs, Sucre 1càs',
          ing_es:'Pechuga de pollo 200g, Cacahuetes 50g, Cebollas verdes 2, Salsa soja clara 2cuch, Azúcar 1cuch',
          st_zh:'鸡胸肉洗净擦干，切成1.5cm方块|锅入油，中火加热|放入鸡肉翻炒约3分钟至变白|加入生抽和白糖，快速翻炒|放入花生，关火翻炒几下|装盘即可',
          st_en:'Wash and dry chicken, cut into 1.5cm cubes|Heat oil in pan over medium|Add chicken, stir fry for 3 mins until white|Add soy sauce and sugar, stir quickly|Add peanuts, turn off heat and stir|Serve',
          st_ja:'鶏肉を洗って水を切り、1.5cm角に切る|フライパンに油を入れて中火に熱する|鶏肉を入れて約3分炒めて白くする|醤油と砂糖を入れて素早く炒める|落花生を入れ、火を止めて炒める|盛り付け',
          st_ko:'닭가슴살을 씻고 물기를 닦아 1.5cm로 썰기|팬에 기름을 넣고 중불로 달구기|닭고기를 넣고 약3분 볶아 흰색으로|간장과 설탕을 넣고 빠르게 볶기|땅콩을 넣고 불 끄고 볶기|접시에 담기',
          st_fr:'Laver et sécher le poulet, couper en cubes de 1.5cm|Chauffer l\'huile à feu moyen|Ajouter le poulet, faire revenir 3 mins|Ajouter la sauce soja et le sucre, mélanger|Ajouter les arachides, éteindre|Servir',
          st_es:'Lavar y secar el pollo, cortar en cubos de 1.5cm|Calentar aceite a fuego medio|Añadir el pollo, freír 3 mins|Añadir salsa soja y azúcar, mezclar|Añadir cacahuetes, apagar|Servir',
          n_zh:'简单快手菜，新手入门',
          n_en:'Quick & easy for beginners',
          n_ja:'簡単初心者向け',
          n_ko:'초보자용 간단 레시피',
          n_fr:'Facile pour débutants',
          n_es:'Fácil para principiantes'
        },
        {
          level:2,
          ing_zh:'鸡胸肉250g,花生米60g,干红辣椒3个,葱花2根,姜片3片,蒜3瓣,生抽2勺,料酒1勺,白糖1勺',
          ing_en:'Chicken breast 250g, Peanuts 60g, Dried chili 3, Green onions 2, Ginger 3 slices, Garlic 3, Light soy sauce 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp',
          ing_ja:'鶏胸肉250g,落花生60g,乾燥唐辛子3本,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2大さじ,料理酒1大さじ,砂糖1大さじ',
          ing_ko:'닭가슴살250g,땅콩60g,말린고추3개,대파2개,생강3쪽,마늘3개,간장2큰술,요리술1큰술,설탕1큰술',
          ing_fr:'Blanc de poulet 250g, Arachides 60g, Piment sec 3, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2càs, Vin de cuisine 1càs, Sucre 1càs',
          ing_es:'Pechuga de pollo 250g, Cacahuetes 60g, Chile seco 3, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2cuch, Vino de cocina 1cuch, Azúcar 1cuch',
          st_zh:'鸡胸肉洗净切丁，加料酒腌10分钟|葱切葱花，姜切片，蒜切片，辣椒剪段|锅入油，中火，炒香葱姜蒜和辣椒|放入鸡肉大火快炒2分钟|加生抽和白糖，翻炒均匀|最后加花生，关火翻炒|装盘',
          st_en:'Wash chicken, cut into cubes, marinate with wine 10 mins|Chop green onions, slice ginger/garlic, cut chili|Heat oil, medium, stir fry aromatics and chili|Add chicken, high heat 2 mins|Add soy sauce & sugar|Add peanuts & turn off|Serve',
          st_ja:'鶏肉を洗って切り、酒で10分漬ける|ネギを切り、ショウガ・ニンニクをスライス、唐辛子を切る|油を熱し、香りを出す|鶏肉を強火で2分炒める|醤油と砂糖を入れる|落花生を入れて火を止める|盛り付け',
          st_ko:'닭가슴살을 씻고 썰어 요리술로10분 절이기|대파 썰고, 생강·마늘 썰고, 고추 썰기|팬에 기름 넣고 중불로 향 내기|닭고기를 강불로2분 볶기|간장과 설탕 넣기|땅콩 넣고 불 끄기|접시에 담기',
          st_fr:'Laver le poulet, couper en cubes, mariner au vin 10 mins|Couper oignons verts, gingembre/ail, piment|Chauffer l\'huile, faire revenir aromatiques|Ajouter poulet, feu fort 2 mins|Ajouter soja & sucre|Ajouter arachides et éteindre|Servir',
          st_es:'Lavar pollo, cortar en cubos, marinar con vino 10 mins|Picar cebollas, cortar jengibre/ajo, chile|Calentar aceite, sofreír aromáticos|Añadir pollo, fuego fuerte 2 mins|Añadir soja & azúcar|Añadir cacahuetes y apagar|Servir',
          n_zh:'香料加入，风味提升',
          n_en:'Flavor boosted with aromatics',
          n_ja:'香り豊かに',
          n_ko:'향긋한 풍미',
          n_fr:'Plus aromatique',
          n_es:'Más aromático'
        },
        {
          level:3,
          ing_zh:'鸡胸肉300g,花生米70g,干红辣椒5个,花椒1勺,葱白2段,姜4片,蒜4瓣,生抽2勺,老抽1勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺',
          ing_en:'Chicken breast 300g, Peanuts 70g, Dried chili 5, Sichuan pepper 1tbsp, White scallion 2, Ginger 4, Garlic 4, Light soy sauce 2tbsp, Dark soy sauce 1tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp',
          ing_ja:'鶏胸肉300g,落花生70g,乾燥唐辛子5本,山椒1大さじ,白ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油2大さじ,濃口醤油1大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ',
          ing_ko:'닭가슴살300g,땅콩70g,말린고추5개,산초1큰술,대파흰부2개,생강4쪽,마늘4개,간장2큰술,진간장1큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술',
          ing_fr:'Blanc de poulet 300g, Arachides 70g, Piment sec 5, Poivre du Sichuan 1càs, Oignon blanc 2, Gingembre 4, Ail 4, Sauce soja légère 2càs, Sauce soja noire 1càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs',
          ing_es:'Pechuga de pollo 300g, Cacahuetes 70g, Chile seco 5, Pimienta de Sichuan 1cuch, Cebolla blanca 2, Jengibre 4, Ajo 4, Salsa soja clara 2cuch, Salsa soja oscura 1cuch, Vino 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch',
          st_zh:'鸡胸肉去筋膜，切1.5cm丁，加料酒、淀粉抓匀腌15分钟|调酱汁：糖、醋、生抽、老抽混合均匀|花生先炸金黄捞出|锅留底油，炸花椒出香，捞去花椒|放入辣椒段炸至微焦|下葱姜蒜大火爆香|放入鸡肉，大火快炒1分钟|倒酱汁，翻炒均匀裹住|最后加花生，翻炒几下|装盘',
          st_en:'Trim chicken, cut into 1.5cm, marinate wine/starch 15 mins|Mix sauce: sugar, vinegar, both soy sauces|Fry peanuts golden first|Heat oil, fry Sichuan pepper until fragrant, remove|Fry chili until slightly charred|Stir fry aromatics|Add chicken, high heat 1 min|Add sauce, coat well|Add peanuts|Serve',
          st_ja:'鶏肉の筋を取り1.5cmに切り、酒・片栗粉で15分漬ける|ソースを混ぜる：砂糖、酢、両方の醤油|先に落花生を炒めておく|油を熱し、山椒を炒めて香りを出し取る|唐辛子を少し焦げるまで炒める|香りを出す|鶏肉を強火で1分炒める|ソースを入れて絡める|落花生を入れる|盛り付け',
          st_ko:'닭가슴살 힘줄 제거하고 1.5cm 썰어 요리술·전분으로15분 절이기|소스 섞기：설탕, 식초, 간장 모두|먼저 땅콩을 황금색으로 볶아 빼기|기름을 열고 산초 볶아 제거|고추를 약간 탈 때까지 볶기|향 내기|닭고기를 강불로1분 볶기|소스 넣고 골고루|땅콩 넣기|접시에 담기',
          st_fr:'Nettoyer le poulet, couper en 1.5cm, mariner vin/fécule 15 mins|Mélanger la sauce|Faire frire les arachides d\'abord|Chauffer l\'huile, faire revenir le poivre du Sichuan, puis enlever|Faire frire le piment|Faire revenir les aromatiques|Ajouter le poulet, feu fort 1 min|Ajouter la sauce|Ajouter arachides|Servir',
          st_es:'Recortar el pollo, cortar en 1.5cm, marinar vino/almidón 15 mins|Mezclar la salsa|Freír los cacahuetes primero|Calentar aceite, freír pimienta de Sichuan, quitar|Freír el chile|Sofreír aromáticos|Añadir pollo, fuego fuerte 1 min|Añadir salsa|Añadir cacahuetes|Servir',
          n_zh:'经典麻辣口味，层次分明',
          n_en:'Classic spicy & numbing flavor',
          n_ja:'定番麻辣味',
          n_ko:'클래식 마라맛',
          n_fr:'Saveur classique épicée',
          n_es:'Sabor clásico picante'
        },
        {
          level:4,
          ing_zh:'鸡胸肉350g,花生米80g,干红辣椒6个,花椒1.5勺,葱白3段,姜5片,蒜5瓣,生抽2.5勺,老抽1.5勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1小勺,白胡椒粉1小勺',
          ing_en:'Chicken breast 350g, Peanuts 80g, Dried chili 6, Sichuan pepper 1.5tbsp, White scallion 3, Ginger 5, Garlic 5, Light soy sauce 2.5tbsp, Dark soy sauce 1.5tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1tsp, White pepper 1tsp',
          ing_ja:'鶏胸肉350g,落花生80g,乾燥唐辛子6本,山椒1.5大さじ,白ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油2.5大さじ,濃口醤油1.5大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1小さじ,白胡椒1小さじ',
          ing_ko:'닭가슴살350g,땅콩80g,말린고추6개,산초1.5큰술,대파흰부3개,생강5쪽,마늘5개,간장2.5큰술,진간장1.5큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1작은술,후추1작은술',
          ing_fr:'Blanc de poulet 350g, Arachides 80g, Piment sec 6, Poivre du Sichuan 1.5càs, Oignon blanc 3, Gingembre 5, Ail 5, Sauce soja légère 2.5càs, Sauce soja noire 1.5càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1càc, Poivre blanc 1càc',
          ing_es:'Pechuga de pollo 350g, Cacahuetes 80g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Cebolla blanca 3, Jengibre 5, Ajo 5, Salsa soja clara 2.5cuch, Salsa soja oscura 1.5cuch, Vino 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1cucharadita, Pimienta blanca 1cucharadita',
          st_zh:'鸡胸肉去筋膜，切1.2cm丁，加料酒、盐、白胡椒粉、淀粉抓匀腌20分钟|调精确碗汁：糖、醋、生抽、老抽按比例|花生炸至酥脆|冷油下花椒小火炸1分钟出香，捞去|下辣椒段炸暗红油亮|放入葱姜蒜大火爆香30秒|滑入鸡肉，大火快炒1分钟至变白|倒碗汁，大火翻炒约1分钟裹住|最后加花生和葱白|快速翻炒10秒，立即出锅',
          st_en:'Trim chicken, cut to 1.2cm, marinate with wine, salt, pepper, starch 20 mins|Make precise sauce ratio|Fry peanuts crispy|Cold oil, fry Sichuan pepper on low 1 min, remove|Fry chili to dark red|Sear aromatics on high 30 sec|Slide in chicken, high heat 1 min|Add sauce, high heat stir 1 min|Add peanuts & white scallion|Quick stir 10 sec, serve immediately',
          st_ja:'鶏肉を切り、酒、塩、胡椒、片栗粉で20分漬ける|正確なソースを作る|落花生をカリカリに炒める|冷たい油に山椒を弱火で1分炒めて香りを出し取る|唐辛子を濃く炒める|強火で30秒香りを出す|鶏肉を滑り入れて強火で1分|ソースを入れて1分炒める|最後に落花生と白ネギ|10秒だけ炒めてすぐ盛り付け',
          st_ko:'닭가슴살 썰어 요리술, 소금, 후추, 전분으로20분 절이기|정확한 소스 비율로 만들기|땅콩을 바삭하게 볶기|차가운 기름에 산초 약불로1분 볶고 제거|고추를 진하게 볶기|강불로30초 향 내기|닭고기 넣고 강불로1분|소스 넣고1분 볶기|마지막으로 땅콩과 대파|10초만 빠르게 볶고 즉시 접시에',
          st_fr:'Couper le poulet, mariner avec vin, sel, poivre, fécule 20 mins|Faire une sauce précise|Faire frire les arachides croustillantes|Huile froide, faire revenir le poivre du Sichuan à feu doux 1 min, enlever|Faire frire le piment en rouge foncé|Faire revenir aromatiques à feu fort 30 sec|Ajouter le poulet, feu fort 1 min|Ajouter la sauce, feu fort 1 min|Ajouter arachides et oignon blanc|Mélanger 10 sec, servir immédiatement',
          st_es:'Cortar el pollo, marinar con vino, sal, pimienta, almidón 20 mins|Hacer salsa precisa|Freír cacahuetes crujientes|Aceite frío, freír pimienta de Sichuan a fuego suave 1 min, quitar|Freír el chile en rojo oscuro|Sofreír aromáticos a fuego fuerte 30 seg|Añadir el pollo, fuego fuerte 1 min|Añadir salsa, fuego fuerte 1 min|Añadir cacahuetes y cebolla blanca|Mezclar 10 seg, servir inmediatamente',
          n_zh:'正宗宫保，麻辣鲜香',
          n_en:'Authentic Kung Pao, spicy & fragrant',
          n_ja:'本格カンパオ、ピリ辛香り',
          n_ko:'정통 쿵파오, 맛있는 향',
          n_fr:'Authentique Kung Pao, épicé & aromatique',
          n_es:'Auténtico Kung Pao, picante y aromático'
        },
        {
          level:5,
          ing_zh:'鸡胸肉400g,花生米100g,干红辣椒8个,花椒2勺,葱白4段,姜6片,蒜6瓣,生抽3勺,老抽2勺,料酒3勺,醋2勺,白糖3勺,淀粉2.5勺,盐1.5小勺,白胡椒粉1.5小勺,香油1勺,鸡精1小勺',
          ing_en:'Chicken breast 400g, Peanuts 100g, Dried chili 8, Sichuan pepper 2tbsp, White scallion 4, Ginger 6, Garlic 6, Light soy sauce 3tbsp, Dark soy sauce 2tbsp, Cooking wine 3tbsp, Vinegar 2tbsp, Sugar 3tbsp, Cornstarch 2.5tbsp, Salt 1.5tsp, White pepper 1.5tsp, Sesame oil 1tbsp, Chicken bouillon 1tsp',
          ing_ja:'鶏胸肉400g,落花生100g,乾燥唐辛子8本,山椒2大さじ,白ネギ4本,ショウガ6枚,ニンニク6個,薄口醤油3大さじ,濃口醤油2大さじ,料理酒3大さじ,酢2大さじ,砂糖3大さじ,片栗粉2.5大さじ,塩1.5小さじ,白胡椒1.5小さじ,ごま油1大さじ,チキンブイヨン1小さじ',
          ing_ko:'닭가슴살400g,땅콩100g,말린고추8개,산초2큰술,대파흰부4개,생강6쪽,마늘6개,간장3큰술,진간장2큰술,요리술3큰술,식초2큰술,설탕3큰술,전분2.5큰술,소금1.5작은술,후추1.5작은술,참기름1큰술,치킨스톡1작은술',
          ing_fr:'Blanc de poulet 400g, Arachides 100g, Piment sec 8, Poivre du Sichuan 2càs, Oignon blanc 4, Gingembre 6, Ail 6, Sauce soja légère 3càs, Sauce soja noire 2càs, Vin 3càs, Vinaigre 2càs, Sucre 3càs, Fécule 2.5càs, Sel 1.5càc, Poivre blanc 1.5càc, Huile de sésame 1càs, Bouillon de poulet 1càc',
          ing_es:'Pechuga de pollo 400g, Cacahuetes 100g, Chile seco 8, Pimienta de Sichuan 2cuch, Cebolla blanca 4, Jengibre 6, Ajo 6, Salsa soja clara 3cuch, Salsa soja oscura 2cuch, Vino 3cuch, Vinagre 2cuch, Azúcar 3cuch, Almidón 2.5cuch, Sal 1.5cucharadita, Pimienta blanca 1.5cucharadita, Aceite de sésamo 1cuch, Caldo de pollo 1cucharadita',
          st_zh:'鸡胸肉去筋膜，切1cm小丁，加料酒、盐、白胡椒粉、淀粉、少许油抓匀腌25分钟|调精确碗汁：糖、醋、生抽、老抽按完美比例，加少许水|花生炸至金黄酥脆|冷油下花椒小火炸1.5分钟出香，捞去|下辣椒段炸至暗红油亮|下葱姜蒜大火爆香30秒|滑入鸡肉，大火快炒1分钟|倒碗汁，大火翻炒约1分钟至浓稠|加炸花生|淋香油，撒鸡精|快速翻炒10秒，立即关火出锅！',
          st_en:'Trim chicken, cut 1cm, marinate with wine, salt, pepper, starch, little oil 25 mins|Perfect sauce ratio|Fry peanuts to golden crispy|Cold oil, fry Sichuan pepper low 1.5 mins, remove|Fry chili to dark red shine|Sear aromatics high 30 sec|Slide in chicken, high 1 min|Add sauce, high heat stir to thicken ~1 min|Add fried peanuts|Drizzle sesame oil, sprinkle bouillon|Quick stir 10 sec, turn off immediately!',
          st_ja:'鶏肉を切り、酒、塩、胡椒、片栗粉、少し油で25分漬ける|完璧なソース|落花生をカリカリ黄金に|冷たい油、山椒弱火1.5分炒めて香りを出し取る|唐辛子を濃く炒める|強火で30秒香りを出す|鶏肉を滑り入れて強火1分|ソースを入れて強火で濃くなるまで約1分|炒めた落花生を入れる|ごま油を垂らし、ブイヨンを振る|10秒だけ炒めてすぐ火を消す！',
          st_ko:'닭가슴살 썰어 요리술, 소금, 후추, 전분, 약간 기름으로25분 절이기|완벽한 소스 비율|땅콩을 황금 바삭으로|차가운 기름, 산초 약불1.5분 볶고 제거|고추를 진하게 볶기|강불로30초 향 내기|닭고기 넣고 강불1분|소스 넣고 강불로 걸쭉해지게 약1분|볶은 땅콩 넣기|참기름 뿌고 스톡 뿌리기|10초만 빠르게 볶고 즉시 불 끄기！',
          st_fr:'Couper le poulet, mariner avec vin, sel, poivre, fécule, peu d\'huile 25 mins|Ratio sauce parfait|Faire frire les arachides croustillantes dorées|Huile froide, faire revenir le poivre du Sichuan à feu doux 1.5 mins, enlever|Faire frire le piment en rouge brillant|Faire revenir aromatiques à feu fort 30 sec|Ajouter le poulet, feu fort 1 min|Ajouter la sauce, feu fort jusqu\'à épaissir ~1 min|Ajouter les arachides frites|Verser l\'huile de sésame, saupoudrer le bouillon|Mélanger 10 sec, éteindre immédiatement!',
          st_es:'Cortar el pollo, marinar con vino, sal, pimienta, almidón, poco aceite 25 mins|Ratio salsa perfecto|Freír cacahuetes crujientes dorados|Aceite frío, freír pimienta de Sichuan a fuego suave 1.5 mins, quitar|Freír el chile en rojo brillante|Sofreír aromáticos a fuego fuerte 30 seg|Añadir el pollo, fuego fuerte 1 min|Añadir salsa, fuego fuerte hasta espesar ~1 min|Añadir cacahuetes fritos|Rociar aceite de sésamo, espolvorear caldo|Mezclar 10 seg, apagar inmediatamente!',
          n_zh:'大师级宫保鸡丁，人间绝味！',
          n_en:'Master level Kung Pao, heavenly flavor!',
          n_ja:'マスター級カンパオチキン、天国の味！',
          n_ko:'마스터급 쿵파오 치킨, 천국 맛！',
          n_fr:'Poulet Kung Pao niveau maîtrise, goût divin!',
          n_es:'Pollo Kung Pao nivel maestro, ¡sabor celestial!'
        }
      ]
    }
  ];

  let totalInserted = 0;
  const totalToInsert = 5;

  levelsData[0].levels.forEach(levelData => {
    db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [1, levelData.level, levelData.ing_zh, levelData.ing_en, levelData.ing_ja, levelData.ing_ko, levelData.ing_fr, levelData.ing_es, levelData.st_zh, levelData.st_en, levelData.st_ja, levelData.st_ko, levelData.st_fr, levelData.st_es, levelData.n_zh, levelData.n_en, levelData.n_ja, levelData.n_ko, levelData.n_fr, levelData.n_es],
      (err) => {
        if (err) console.error('Insert error:', err);
        totalInserted++;
        if (totalInserted === totalToInsert) {
          console.log('Database initialized successfully!');
          verifyData();
        }
      }
    );
  });
}

function verifyData() {
  db.all('SELECT * FROM recipes', (err, recipes) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log('Recipes:', recipes.length);

    db.all('SELECT * FROM levels', (err, levels) => {
      if (err) {
        console.error('Error:', err);
        return;
      }
      console.log('Levels:', levels.length);

      db.close(() => console.log('Done!'));
    });
  });
}
