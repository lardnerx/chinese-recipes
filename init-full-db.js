const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'recipes.db');

// Remove old database
if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log('Old database removed');
}

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    console.log('Creating tables...');
    
    db.run(`CREATE TABLE recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE,
        name_zh TEXT,
        name_en TEXT,
        name_ja TEXT,
        name_ko TEXT,
        name_fr TEXT,
        name_es TEXT
    )`);

    db.run(`CREATE TABLE levels (
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
    console.log('Inserting recipes...');
    
    const recipes = [
        { id:1, slug:'kung-pao-chicken', name_zh:'宫保鸡丁', name_en:'Kung Pao Chicken', name_ja:'カンパオチキン', name_ko:'쿵파오 치킨', name_fr:'Poulet Kung Pao', name_es:'Pollo Kung Pao' },
        { id:2, slug:'mapo-tofu', name_zh:'麻婆豆腐', name_en:'Mapo Tofu', name_ja:'マーボー豆腐', name_ko:'마파두부', name_fr:'Tofu Mapo', name_es:'Tofu Mapo' },
        { id:3, slug:'fried-rice', name_zh:'蛋炒饭', name_en:'Egg Fried Rice', name_ja:'チャーハン', name_ko:'볶음밥', name_fr:'Riz sauté aux oeufs', name_es:'Arroz frito con huevos' },
        { id:4, slug:'sweet-sour-pork', name_zh:'糖醋里脊', name_en:'Sweet and Sour Pork', name_ja:'酢豚', name_ko:'탕수육', name_fr:'Porc aigre-doux', name_es:'Cerdo agridulce' }
    ];
    
    let rc = 0;
    recipes.forEach(r => {
        db.run('INSERT INTO recipes (id, slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [r.id, r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es],
            (err) => {
                if (err) console.error(err);
                rc++;
                if (rc === 4) insertKungPao();
            }
        );
    });
}

function insertKungPao() {
    console.log('Inserting Kung Pao Chicken levels...');
    
    const levels = [
        { l:1,
            ing_zh:'鸡胸肉200g,花生米50g,葱花2根,生抽2勺,白糖1勺',
            ing_en:'Chicken breast 200g, Peanuts 50g, Green onions 2, Light soy sauce 2tbsp, Sugar 1tbsp',
            ing_ja:'鶏胸肉200g,落花生50g,ネギ2本,薄口醤油2大さじ,砂糖1大さじ',
            ing_ko:'닭가슴살200g,땅콩50g,대파2개,간장2큰술,설탕1큰술',
            ing_fr:'Blanc de poulet 200g, Arachides 50g, Oignons verts 2, Sauce soja légère 2càs, Sucre 1càs',
            ing_es:'Pechuga de pollo 200g, Cacahuetes 50g, Cebollas verdes 2, Salsa soja clara 2cuch, Azúcar 1cuch',
            st_zh:'鸡胸肉洗净擦干，切成1.5cm方块|锅入油，中火加热|放入鸡肉翻炒约3分钟至变白|加入生抽和白糖，快速翻炒|放入花生，关火翻炒几下|装盘即可',
            st_en:'Wash and dry chicken, cut into 1.5cm cubes|Heat oil in pan over medium|Add chicken, stir fry for 3 mins until white|Add soy sauce and sugar, stir quickly|Add peanuts, turn off heat and stir|Serve',
            st_ja:'鶏肉を洗って水を切り、1.5cm角に切る|フライパンに油を入れて中火に熱する|鶏肉を入れて約3分炒めて白くする|醤油と砂糖を入れて素早く炒める|落花生を入れ、火を止めて炒める|盛り付ける',
            st_ko:'닭가슴살을 씻고 물기를 닦아 1.5cm로 썰기|팬에 기름을 넣고 중불로 달구기|닭고기를 넣고 약3분 볶아 흰색으로|간장과 설탕을 넣고 빠르게 볶기|땅콩을 넣고 불 끄고 볶기|접시에 담기',
            st_fr:'Laver et sécher le poulet, couper en cubes de 1.5cm|Chauffer l\'huile à feu moyen|Ajouter le poulet, faire revenir 3 mins|Ajouter la sauce soja et le sucre, mélanger|Ajouter les arachides, éteindre|Servir',
            st_es:'Lavar y secar el pollo, cortar en cubos de 1.5cm|Calentar aceite a fuego medio|Añadir el pollo, freír 3 mins|Añadir salsa soja y azúcar, mezclar|Añadir cacahuetes, apagar|Servir',
            n_zh:'简单快手菜，新手入门版',
            n_en:'Quick & easy for beginners',
            n_ja:'簡単初心者向け',
            n_ko:'초보자용 간단 레시피',
            n_fr:'Facile pour débutants',
            n_es:'Fácil para principiantes'
        },
        { l:2,
            ing_zh:'鸡胸肉250g,花生米60g,干红辣椒3个,葱花2根,姜片3片,蒜3瓣,生抽2勺,料酒1勺,白糖1勺',
            ing_en:'Chicken breast 250g, Peanuts 60g, Dried chili 3, Green onions 2, Ginger 3 slices, Garlic 3, Light soy sauce 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp',
            ing_ja:'鶏胸肉250g,落花生60g,乾燥唐辛子3本,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2大さじ,料理酒1大さじ,砂糖1大さじ',
            ing_ko:'닭가슴살250g,땅콩60g,말린고추3개,대파2개,생강3쪽,마늘3개,간장2큰술,요리술1큰술,설탕1큰술',
            ing_fr:'Blanc de poulet 250g, Arachides 60g, Piment sec 3, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2càs, Vin de cuisine 1càs, Sucre 1càs',
            ing_es:'Pechuga de pollo 250g, Cacahuetes 60g, Chile seco 3, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2cuch, Vino de cocina 1cuch, Azúcar 1cuch',
            st_zh:'鸡胸肉洗净切丁，加料酒腌10分钟|葱切葱花，姜切片，蒜切片，辣椒剪段|锅入油，中火，炒香葱姜蒜和辣椒|放入鸡肉大火快炒2分钟|加生抽和白糖，翻炒均匀|最后加花生，关火翻炒|装盘',
            st_en:'Wash chicken, cut into cubes, marinate with wine 10 mins|Chop green onions, slice ginger/garlic, cut chili|Heat oil, medium, stir fry aromatics and chili|Add chicken, high heat 2 mins|Add soy sauce & sugar|Add peanuts & turn off|Serve',
            st_ja:'鶏肉を洗って切り、酒で10分漬ける|ネギを切り、ショウガ・ニンニクをスライス、唐辛子を切る|油を熱し、香りを出す|鶏肉を強火で2分炒める|醤油と砂糖を入れる|落花生を入れて火を止める|盛り付け',
            st_ko:'닭가슴살을 씻고 썰어 요리술로 10분 절이기|대파 썰고, 생강·마늘 썰고, 고추 썰기|팬에 기름 넣고 중불로 향 내기|닭고기를 강불로 2분 볶기|간장과 설탕 넣기|땅콩 넣고 불 끄기|접시에 담기',
            st_fr:'Laver le poulet, couper en cubes, mariner au vin 10 mins|Couper oignons verts, gingembre/ail, piment|Chauffer l\'huile, faire revenir aromatiques|Ajouter poulet, feu fort 2 mins|Ajouter soja & sucre|Ajouter arachides et éteindre|Servir',
            st_es:'Lavar pollo, cortar en cubos, marinar con vino 10 mins|Picar cebollas, cortar jengibre/ajo, chile|Calentar aceite, sofreír aromáticos|Añadir pollo, fuego fuerte 2 mins|Añadir soja & azúcar|Añadir cacahuetes y apagar|Servir',
            n_zh:'香料加入，风味更佳',
            n_en:'Flavor boosted with aromatics',
            n_ja:'香り豊かに',
            n_ko:'향긋한 풍미',
            n_fr:'Plus aromatique',
            n_es:'Más aromático'
        },
        { l:3,
            ing_zh:'鸡胸肉300g,花生米70g,干红辣椒5个,花椒1勺,葱白2段,姜4片,蒜4瓣,生抽2勺,老抽1勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺',
            ing_en:'Chicken breast 300g, Peanuts 70g, Dried chili 5, Sichuan pepper 1tbsp, White scallion 2, Ginger 4, Garlic 4, Light soy sauce 2tbsp, Dark soy sauce 1tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp',
            ing_ja:'鶏胸肉300g,落花生70g,乾燥唐辛子5本,山椒1大さじ,白ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油2大さじ,濃口醤油1大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ',
            ing_ko:'닭가슴살300g,땅콩70g,말린고추5개,산초1큰술,대파흰부2개,생강4쪽,마늘4개,간장2큰술,진간장1큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술',
            ing_fr:'Blanc de poulet 300g, Arachides 70g, Piment sec 5, Poivre du Sichuan 1càs, Oignon blanc 2, Gingembre 4, Ail 4, Sauce soja légère 2càs, Sauce soja noire 1càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs',
            ing_es:'Pechuga de pollo 300g, Cacahuetes 70g, Chile seco 5, Pimienta de Sichuan 1cuch, Cebolla blanca 2, Jengibre 4, Ajo 4, Salsa soja clara 2cuch, Salsa soja oscura 1cuch, Vino 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch',
            st_zh:'鸡胸肉去筋膜，切1.5cm丁，加料酒、淀粉抓匀腌15分钟|调酱汁：糖、醋、生抽、老抽混合均匀|花生先炸金黄捞出|锅留底油，炸花椒出香，捞去花椒|放入辣椒段炸至微焦|下葱姜蒜大火爆香|放入鸡肉，大火快炒1分钟|倒酱汁，翻炒均匀裹住|最后加花生，翻炒几下|装盘',
            st_en:'Trim chicken, cut into 1.5cm, marinate wine/starch 15 mins|Mix sauce: sugar, vinegar, both soy sauces|Fry peanuts golden first|Heat oil, fry Sichuan pepper until fragrant, remove|Fry chili until slightly charred|Stir fry aromatics|Add chicken, high heat 1 min|Add sauce, coat well|Add peanuts|Serve',
            st_ja:'鶏肉の筋を取り1.5cmに切り、酒・片栗粉で15分漬ける|ソースを混ぜる：砂糖、酢、両方の醤油|先に落花生を炒めておく|油を熱し、山椒を炒めて取り除く|唐辛子を少し焦げるまで炒める|香りを出す|鶏肉を強火で1分炒める|ソースを入れて絡める|落花生を入れる|盛り付け',
            st_ko:'닭가슴살 힘줄 제거하고 1.5cm 썰어 요리술·전분으로 15분 절이기|소스 섞기：설탕, 식초, 간장 모두|먼저 땅콩을 황금색으로 볶아 빼기|기름을 열고 산초 볶아 제거|고추를 약간 탈 때까지 볶기|향 내기|닭고기를 강불로 1분 볶기|소스 넣고 골고루|땅콩 넣기|접시에 담기',
            st_fr:'Nettoyer le poulet, couper en 1.5cm, mariner vin/fécule 15 mins|Mélanger la sauce|Faire frire les arachides d\'abord|Chauffer l\'huile, faire revenir le poivre du Sichuan, puis enlever|Faire frire le piment|Faire revenir les aromatiques|Ajouter le poulet, feu fort 1 min|Ajouter la sauce|Ajouter arachides|Servir',
            st_es:'Recortar el pollo, cortar en 1.5cm, marinar vino/almidón 15 mins|Mezclar la salsa|Freír los cacahuetes primero|Calentar aceite, freír pimienta de Sichuan, quitar|Freír el chile|Sofreír aromáticos|Añadir pollo, fuego fuerte 1 min|Añadir salsa|Añadir cacahuetes|Servir',
            n_zh:'经典麻辣口味，层次分明',
            n_en:'Classic spicy & numbing flavor',
            n_ja:'定番麻辣味',
            n_ko:'클래식 마라맛',
            n_fr:'Saveur classique épicée',
            n_es:'Sabor clásico picante'
        },
        { l:4,
            ing_zh:'鸡胸肉350g,花生米80g,干红辣椒6个,花椒1.5勺,葱白3段,姜5片,蒜5瓣,生抽2.5勺,老抽1.5勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1小勺,白胡椒粉1小勺',
            ing_en:'Chicken breast 350g, Peanuts 80g, Dried chili 6, Sichuan pepper 1.5tbsp, White scallion 3, Ginger 5, Garlic 5, Light soy sauce 2.5tbsp, Dark soy sauce 1.5tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1tsp, White pepper 1tsp',
            ing_ja:'鶏胸肉350g,落花生80g,乾燥唐辛子6本,山椒1.5大さじ,白ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油2.5大さじ,濃口醤油1.5大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1小さじ,白胡椒1小さじ',
            ing_ko:'닭가슴살350g,땅콩80g,말린고추6개,산초1.5큰술,대파흰부3개,생강5쪽,마늘5개,간장2.5큰술,진간장1.5큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1작은술,후추1작은술',
            ing_fr:'Blanc de poulet 350g, Arachides 80g, Piment sec 6, Poivre du Sichuan 1.5càs, Oignon blanc 3, Gingembre 5, Ail 5, Sauce soja légère 2.5càs, Sauce soja noire 1.5càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1càc, Poivre blanc 1càc',
            ing_es:'Pechuga de pollo 350g, Cacahuetes 80g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Cebolla blanca 3, Jengibre 5, Ajo 5, Salsa soja clara 2.5cuch, Salsa soja oscura 1.5cuch, Vino 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1cucharadita, Pimienta blanca 1cucharadita',
            st_zh:'鸡胸肉去筋膜，切1.2cm丁，加料酒、盐、白胡椒粉、淀粉抓匀腌20分钟|调精确碗汁：糖、醋、生抽、老抽按比例|花生炸至酥脆|冷油下花椒小火炸1分钟出香，捞去|下辣椒段炸暗红油亮|放入葱姜蒜大火爆香30秒|滑入鸡肉，大火快炒1分钟至变白|倒碗汁，大火翻炒约1分钟裹住|最后加花生和葱白|快速翻炒10秒，立即出锅',
            st_en:'Trim chicken, cut to 1.2cm, marinate with wine, salt, pepper, starch 20 mins|Make precise sauce ratio|Fry peanuts crispy|Cold oil, fry Sichuan pepper on low 1 min, remove|Fry chili to dark red|Sear aromatics on high 30 sec|Slide in chicken, high heat 1 min|Add sauce, high heat stir 1 min|Add peanuts & white scallion|Quick stir 10 sec, serve immediately',
            st_ja:'鶏肉を切り、酒、塩、胡椒、片栗粉で20分漬ける|正確なソースを作る|落花生をカリカリに炒める|冷たい油に山椒を弱火で1分炒めて取り除く|唐辛子を濃く炒める|強火で30秒香りを出す|鶏肉を滑り入れ、強火で1分|ソースを入れて1分炒める|最後に落花生と白ネギ|10秒だけ炒めてすぐ盛り付け',
            st_ko:'닭가슴살 썰어 요리술, 소금, 후추, 전분으로 20분 절이기|정확한 소스 비율로 만들기|땅콩을 바삭하게 볶기|차가운 기름에 산초 약불로 1분 볶고 제거|고추를 진하게 볶기|강불로 30초 향 내기|닭고기 넣고 강불로 1분|소스 넣고 1분 볶기|마지막으로 땅콩과 대파|10초만 빠르게 볶고 즉시 접시에',
            st_fr:'Couper le poulet, mariner avec vin, sel, poivre, fécule 20 mins|Faire une sauce précise|Faire frire les arachides croustillantes|Huile froide, faire revenir le poivre du Sichuan à feu doux 1 min, enlever|Faire frire le piment en rouge foncé|Faire revenir aromatiques à feu fort 30 sec|Ajouter le poulet, feu fort 1 min|Ajouter la sauce, feu fort 1 min|Ajouter arachides et oignon blanc|Mélanger 10 sec, servir immédiatement',
            st_es:'Cortar el pollo, marinar con vino, sal, pimienta, almidón 20 mins|Hacer salsa precisa|Freír cacahuetes crujientes|Aceite frío, freír pimienta de Sichuan a fuego suave 1 min, quitar|Freír el chile a rojo oscuro|Sofreír aromáticos a fuego fuerte 30 seg|Añadir el pollo, fuego fuerte 1 min|Añadir salsa, fuego fuerte 1 min|Añadir cacahuetes y cebolla blanca|Mezclar 10 seg, servir inmediatamente',
            n_zh:'正宗宫保，麻辣鲜香',
            n_en:'Authentic Kung Pao, spicy & fragrant',
            n_ja:'本格カンパオ、ピリ辛香り',
            n_ko:'정통 쿵파오, 맛있는 향',
            n_fr:'Authentique Kung Pao, épicé & aromatique',
            n_es:'Auténtico Kung Pao, picante y aromático'
        },
        { l:5,
            ing_zh:'鸡胸肉400g,花生米100g,干红辣椒8个,花椒2勺,葱白4段,姜6片,蒜6瓣,生抽3勺,老抽2勺,料酒3勺,醋2勺,白糖3勺,淀粉2.5勺,盐1.5小勺,白胡椒粉1.5小勺,香油1勺,鸡精1小勺',
            ing_en:'Chicken breast 400g, Peanuts 100g, Dried chili 8, Sichuan pepper 2tbsp, White scallion 4, Ginger 6, Garlic 6, Light soy sauce 3tbsp, Dark soy sauce 2tbsp, Cooking wine 3tbsp, Vinegar 2tbsp, Sugar 3tbsp, Cornstarch 2.5tbsp, Salt 1.5tsp, White pepper 1.5tsp, Sesame oil 1tbsp, Chicken bouillon 1tsp',
            ing_ja:'鶏胸肉400g,落花生100g,乾燥唐辛子8本,山椒2大さじ,白ネギ4本,ショウガ6枚,ニンニク6個,薄口醤油3大さじ,濃口醤油2大さじ,料理酒3大さじ,酢2大さじ,砂糖3大さじ,片栗粉2.5大さじ,塩1.5小さじ,白胡椒1.5小さじ,ごま油1大さじ,チキンブイヨン1小さじ',
            ing_ko:'닭가슴살400g,땅콩100g,말린고추8개,산초2큰술,대파흰부4개,생강6쪽,마늘6개,간장3큰술,진간장2큰술,요리술3큰술,식초2큰술,설탕3큰술,전분2.5큰술,소금1.5작은술,후추1.5작은술,참기름1큰술,치킨스톡1작은술',
            ing_fr:'Blanc de poulet 400g, Arachides 100g, Piment sec 8, Poivre du Sichuan 2càs, Oignon blanc 4, Gingembre 6, Ail 6, Sauce soja légère 3càs, Sauce soja noire 2càs, Vin 3càs, Vinaigre 2càs, Sucre 3càs, Fécule 2.5càs, Sel 1.5càc, Poivre blanc 1.5càc, Huile de sésame 1càs, Bouillon de poulet 1càc',
            ing_es:'Pechuga de pollo 400g, Cacahuetes 100g, Chile seco 8, Pimienta de Sichuan 2cuch, Cebolla blanca 4, Jengibre 6, Ajo 6, Salsa soja clara 3cuch, Salsa soja oscura 2cuch, Vino 3cuch, Vinagre 2cuch, Azúcar 3cuch, Almidón 2.5cuch, Sal 1.5cucharadita, Pimienta blanca 1.5cucharadita, Aceite de sésamo 1cuch, Caldo de pollo 1cucharadita',
            st_zh:'鸡胸肉去筋膜，切1cm小丁，加料酒、盐、白胡椒粉、淀粉、少许油抓匀腌25分钟|调精确碗汁：糖、醋、生抽、老抽按完美比例，加少许水|花生炸至金黄酥脆|冷油下花椒小火炸1.5分钟出香，捞去|下辣椒段炸至暗红油亮|下葱姜蒜大火爆香30秒|滑入鸡肉，大火快炒1分钟|倒碗汁，大火翻炒约1分钟至浓稠|加炸花生|淋香油，撒鸡精|快速翻炒10秒，立即关火出锅！',
            st_en:'Trim chicken, cut 1cm, marinate with wine, salt, pepper, starch, little oil 25 mins|Perfect sauce ratio|Fry peanuts to golden crispy|Cold oil, fry Sichuan pepper low 1.5 mins, remove|Fry chili to dark red shine|Sear aromatics high 30 sec|Slide in chicken, high 1 min|Add sauce, high heat stir to thicken ~1 min|Add fried peanuts|Drizzle sesame oil, sprinkle bouillon|Quick stir 10 sec, turn off immediately!',
            st_ja:'鶏肉を切り、酒、塩、胡椒、片栗粉、少し油で25分漬ける|完璧なソース|落花生をカリカリ黄金に|冷たい油、山椒弱火1.5分炒めて取る|唐辛子を濃く炒める|強火で30秒香りを出す|鶏肉を滑り入れて強火1分|ソースを入れて強火で濃くなるまで約1分|炒めた落花生を入れる|ごま油を垂らし、ブイヨンを振る|10秒だけ炒めてすぐ火を消す！',
            st_ko:'닭가슴살 썰어 요리술, 소금, 후추, 전분, 약간 기름으로 25분 절이기|완벽한 소스 비율|땅콩을 황금 바삭으로|차가운 기름, 산초 약불 1.5분 볶고 제거|고추를 진하게 볶기|강불로 30초 향 내기|닭고기 넣고 강불 1분|소스 넣고 강불로 걸쭉해지게 약1분|볶은 땅콩 넣기|참기름 뿌고 스톡 뿌리기|10초만 볶고 즉시 불 끄기!',
            st_fr:'Couper le poulet, mariner avec vin, sel, poivre, fécule, peu d\'huile 25 mins|Ratio sauce parfait|Faire frire les arachides croustillantes dorées|Huile froide, faire revenir le poivre du Sichuan à feu doux 1.5 mins, enlever|Faire frire le piment en rouge brillant|Faire revenir aromatiques à feu fort 30 sec|Ajouter le poulet, feu fort 1 min|Ajouter la sauce, feu fort jusqu\'à épaissir ~1 min|Ajouter les arachides frites|Verser l\'huile de sésame, saupoudrer le bouillon|Mélanger 10 sec, éteindre immédiatement!',
            st_es:'Cortar el pollo, marinar con vino, sal, pimienta, almidón, poco aceite 25 mins|Ratio salsa perfecto|Freír cacahuetes crujientes dorados|Aceite frío, freír pimienta de Sichuan a fuego suave 1.5 mins, quitar|Freír el chile en rojo brillante|Sofreír aromáticos a fuego fuerte 30 seg|Añadir el pollo, fuego fuerte 1 min|Añadir salsa, fuego fuerte hasta espesar ~1 min|Añadir cacahuetes fritos|Rociar aceite de sésamo, espolvorear caldo|Mezclar 10 seg, apagar inmediatamente!',
            n_zh:'大师级宫保鸡丁，人间绝味！',
            n_en:'Master level Kung Pao, heavenly flavor!',
            n_ja:'マスター級カンパオチキン、天国の味！',
            n_ko:'마스터급 쿵파오 치킨, 천국 맛!',
            n_fr:'Poulet Kung Pao niveau maîtrise, goût divin!',
            n_es:'Pollo Kung Pao nivel maestro, ¡sabor celestial!'
        }
    ];
    
    let i = 0, total = levels.length;
    levels.forEach(l => {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [1, l.l, l.ing_zh, l.ing_en, l.ing_ja, l.ing_ko, l.ing_fr, l.ing_es, l.st_zh, l.st_en, l.st_ja, l.st_ko, l.st_fr, l.st_es, l.n_zh, l.n_en, l.n_ja, l.n_ko, l.n_fr, l.n_es],
            (err) => {
                if (err) console.error(err);
                i++;
                if (i === total) insertMapo();
            }
        );
    });
}

function insertMapo() {
    console.log('Inserting Mapo Tofu levels...');
    
    const levels = [
        { l:1,
            ing_zh:'嫩豆腐400g,猪肉末100g,生抽2勺,白糖1勺',
            ing_en:'Soft tofu 400g, Minced pork 100g, Light soy sauce 2tbsp, Sugar 1tbsp',
            ing_ja:'柔らかい豆腐400g,豚ひき肉100g,薄口醤油2大さじ,砂糖1大さじ',
            ing_ko:'연한두부400g,돼지고기다진것100g,간장2큰술,설탕1큰술',
            ing_fr:'Tofu mou 400g, Viande hachée de porc 100g, Sauce soja légère 2càs, Sucre 1càs',
            ing_es:'Tofu suave 400g, Carne picada de cerdo 100g, Salsa soja clara 2cuch, Azúcar 1cuch',
            st_zh:'豆腐切2cm方块|锅入油，中火|放肉末炒散，约2分钟至变色|放豆腐，轻轻推动|加生抽和白糖|小火煮2分钟入味|轻轻翻匀，装盘',
            st_en:'Cut tofu into 2cm cubes|Heat oil, medium|Add minced pork, break up, cook ~2 mins to color change|Add tofu, gently push|Add soy sauce and sugar|Low heat 2 mins to flavor|Gently mix, serve',
            st_ja:'豆腐を2cm角に切る|フライパンに油を入れ中火|ひき肉を炒めて約2分|豆腐を入れて優しく押す|醤油と砂糖を入れる|弱火で2分|優しく混ぜて盛り付け',
            st_ko:'두부를 2cm로 썰기|팬에 기름 넣고 중불|돼지고기 다진 것을 볶아 약2분|두부를 넣고 부드럽게 밀기|간장과 설탕 넣기|약불 2분|부드럽게 섞어 담기',
            st_fr:'Couper le tofu en cubes de 2cm|Chauffer l\'huile, feu moyen|Ajouter viande hachée, défaire, cuisiner ~2 mins|Ajouter tofu, pousser doucement|Ajouter sauce soja & sucre|Feu doux 2 mins|Mélanger, servir',
            st_es:'Cortar el tofu en cubos de 2cm|Calentar aceite, fuego medio|Añadir carne picada, deshacer, cocinar ~2 mins|Añadir tofu, empujar suavemente|Añadir salsa soja & azúcar|Fuego suave 2 mins|Mezclar, servir',
            n_zh:'简单麻婆，新手入门',
            n_en:'Simple Mapo for beginners',
            n_ja:'簡単麻婆豆腐',
            n_ko:'초보자용 마파두부',
            n_fr:'Mapo simple pour débutants',
            n_es:'Mapo simple para principiantes'
        },
        { l:2,
            ing_zh:'嫩豆腐400g,猪肉末150g,葱花2根,姜片2片,蒜2瓣,生抽2勺,豆瓣酱1勺,白糖1勺',
            ing_en:'Soft tofu 400g, Minced pork 150g, Green onions 2, Ginger 2, Garlic 2, Light soy sauce 2tbsp, Broad bean paste 1tbsp, Sugar 1tbsp',
            ing_ja:'柔らかい豆腐400g,豚ひき肉150g,ネギ2本,ショウガ2枚,ニンニク2個,薄口醤油2大さじ,豆板醤1大さじ,砂糖1大さじ',
            ing_ko:'연한두부400g,돼지고기다진것150g,대파2개,생강2쪽,마늘2개,간장2큰술,된장고추장1큰술,설탕1큰술',
            ing_fr:'Tofu mou 400g, Viande hachée de porc 150g, Oignons verts 2, Gingembre 2, Ail 2, Sauce soja légère 2càs, Pâte de fèves 1càs, Sucre 1càs',
            ing_es:'Tofu suave 400g, Carne picada de cerdo 150g, Cebollas verdes 2, Jengibre 2, Ajo 2, Salsa soja clara 2cuch, Pasta de habas 1cuch, Azúcar 1cuch',
            st_zh:'豆腐切2cm，开水焯2分钟，沥干|葱、姜、蒜切末|锅入油，炒香葱姜蒜|放肉末炒散出油|加豆瓣酱，小火炒红油|放豆腐，轻推|加生抽、白糖、少许水|小火煮3分钟|撒葱花，装盘',
            st_en:'Cut tofu 2cm, blanch in boiling water 2 mins, drain|Mince green onions, ginger, garlic|Heat oil, stir fry aromatics|Add minced pork, cook until oil comes out|Add bean paste, low heat fry red oil|Add tofu, gently push|Add soy sauce, sugar, little water|Low heat 3 mins|Sprinkle green onions, serve',
            st_ja:'豆腐を2cmに切り、熱湯で2分ゆでる|ネギ、ショウガ、ニンニクをみじん切り|油を熱して香りを出す|ひき肉を炒めて油が出るまで|豆板醤を弱火で炒めて赤い油|豆腐を入れて優しく|醤油、砂糖、少し水|弱火3分|ネギを振って盛り付け',
            st_ko:'두부를 2cm 썰고 끓는 물에 2분 데쳐 물기 빼기|대파, 생강, 마늘 다지기|팬에 기름 넣고 향 내기|돼지고기 볶아 기름이 나올 때까지|된장고추장 약불로 볶아 빨간 기름|두부 넣고 부드럽게 밀기|간장, 설탕, 약간 물|약불3분|대파 뿌려 담기',
            st_fr:'Couper tofu 2cm, blanchir dans l\'eau bouillante 2 mins, égoutter|Mincer les oignons verts, gingembre, ail|Chauffer l\'huile, faire revenir aromatiques|Ajouter viande hachée, cuisiner jusqu\'à l\'huile|Ajouter pâte de fèves, feu doux pour huile rouge|Ajouter tofu, pousser doucement|Ajouter soja, sucre, peu d\'eau|Feu doux 3 mins|Saupoudrer oignons verts, servir',
            st_es:'Cortar tofu 2cm, escaldar en agua hirviendo 2 mins, escurrir|Picar cebollas verdes, jengibre, ajo|Calentar aceite, sofreír aromáticos|Añadir carne picada, cocinar hasta que salga aceite|Añadir pasta de habas, fuego suave para aceite rojo|Añadir tofu, empujar suavemente|Añadir soja, azúcar, poco agua|Fuego suave 3 mins|Espolvorear cebollas verdes, servir',
            n_zh:'加入豆瓣酱，风味提升',
            n_en:'With bean paste, richer flavor',
            n_ja:'豆板醤で香りUP',
            n_ko:'된장고추장으로 풍미UP',
            n_fr:'Avec la pâte de fèves, plus de goût',
            n_es:'Con pasta de habas, más sabor'
        },
        { l:3,
            ing_zh:'嫩豆腐450g,猪肉末200g,干红辣椒4个,花椒1勺,葱花2根,姜3片,蒜3瓣,生抽2.5勺,豆瓣酱2勺,料酒1勺,白糖1勺,淀粉1勺',
            ing_en:'Soft tofu 450g, Minced pork 200g, Dried chili 4, Sichuan pepper 1tbsp, Green onions 2, Ginger 3, Garlic 3, Light soy sauce 2.5tbsp, Broad bean paste 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp, Cornstarch 1tbsp',
            ing_ja:'柔らかい豆腐450g,豚ひき肉200g,乾燥唐辛子4本,山椒1大さじ,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2.5大さじ,豆板醤2大さじ,料理酒1大さじ,砂糖1大さじ,片栗粉1大さじ',
            ing_ko:'연한두부450g,돼지고기다진것200g,말린고추4개,산초1큰술,대파2개,생강3쪽,마늘3개,간장2.5큰술,된장고추장2큰술,요리술1큰술,설탕1큰술,전분1큰술',
            ing_fr:'Tofu mou 450g, Viande hachée de porc 200g, Piment sec 4, Poivre du Sichuan 1càs, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2.5càs, Pâte de fèves 2càs, Vin de cuisine 1càs, Sucre 1càs, Fécule 1càs',
            ing_es:'Tofu suave 450g, Carne picada de cerdo 200g, Chile seco 4, Pimienta de Sichuan 1cuch, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2.5cuch, Pasta de habas 2cuch, Vino de cocina 1cuch, Azúcar 1cuch, Almidón 1cuch',
            st_zh:'豆腐切2cm，淡盐水焯3分钟沥干|肉末加料酒、淀粉抓匀|辣椒剪段|锅入油，先炸花椒和辣椒出香，捞去|下肉末大火炒散出油|加豆瓣酱，小火炒红油|下葱姜蒜炒香|加小半碗水|下豆腐，轻推|加生抽、白糖|小火煮3分钟|淋淀粉水勾芡|撒葱花，装盘',
            st_en:'Cut tofu 2cm, blanch light salt water 3 mins, drain|Marinate minced pork with wine & starch|Cut chili|Heat oil, fry Sichuan pepper & chili fragrant, remove|Add minced pork high heat until oil out|Add bean paste low fry red oil|Stir fry aromatics|Add little more than half water|Add tofu, gently push|Add soy sauce & sugar|Low 3 mins|Starch slurry to thicken|Sprinkle green onions, serve',
            st_ja:'豆腐2cm切り、薄い塩水で3分ゆでる|ひき肉に酒と片栗粉を混ぜる|唐辛子切る|油で山椒と唐辛子を炒めて香りを出し取る|強火でひき肉を炒めて油が出るまで|豆板醤弱火で炒めて赤い油|香りを出す|半分より少し多い水を入れる|豆腐を入れて優しく|醤油と砂糖|弱火3分|片栗粉水でとろみ|ネギを振って盛り付け',
            st_ko:'두부2cm 썰고 옅은 소금물에 3분 데치기|돼지고기 요리술과 전분 섞기|고추 썰기|기름으로 산초와 고추 볶아 향 내고 제거|강불로 돼지고기 볶아 기름 나올 때까지|된장고추장 약불로 볶아 빨간 기름|향 내기|반분 이상 물 넣기|두부 넣고 부드럽게|간장과 설탕|약불3분|전분 물로 걸쭉|대파 뿌려 담기',
            st_fr:'Couper tofu 2cm, blanchir eau salée légère 3 mins, égoutter|Macerer viande hachée avec vin & fécule|Couper piment|Chauffer l\'huile, faire frire poivre du Sichuan & piment, enlever|Ajouter viande hachée feu fort jusqu\'à huile|Ajouter pâte de fèves feu doux pour huile rouge|Faire revenir aromatiques|Ajouter un peu plus d\'une demi-eau|Ajouter tofu, pousser doucement|Ajouter soja & sucre|Feu doux 3 mins|Fécule pour épaissir|Saupoudrer oignons verts, servir',
            st_es:'Cortar tofu 2cm, escaldar agua salada ligera 3 mins, escurrir|Marinar carne picada con vino & almidón|Cortar chile|Calentar aceite, freír pimienta de Sichuan & chile, quitar|Añadir carne picada fuego fuerte hasta aceite|Añadir pasta de habas fuego suave para aceite rojo|Sofreír aromáticos|Añadir un poco más de media agua|Añadir tofu, empujar suavemente|Añadir soja & azúcar|Fuego suave 3 mins|Almidón para espesar|Espolvorear cebollas verdes, servir',
            n_zh:'麻辣鲜香，经典麻婆',
            n_en:'Spicy & fragrant, classic Mapo',
            n_ja:'ピリ辛香り豊かな定番麻婆',
            n_ko:'매콤향긋한 클래식 마파',
            n_fr:'Épicé & aromatique, Mapo classique',
            n_es:'Picante y aromático, Mapo clásico'
        },
        { l:4,
            ing_zh:'嫩豆腐500g,猪肉末250g,干红辣椒6个,花椒1.5勺,青蒜2根,葱花2根,姜4片,蒜4瓣,生抽3勺,豆瓣酱2.5勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺,盐1小勺',
            ing_en:'Soft tofu 500g, Minced pork 250g, Dried chili 6, Sichuan pepper 1.5tbsp, Garlic sprouts 2, Green onions 2, Ginger 4, Garlic 4, Light soy sauce 3tbsp, Broad bean paste 2.5tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp, Salt 1tsp',
            ing_ja:'柔らかい豆腐500g,豚ひき肉250g,乾燥唐辛子6本,山椒1.5大さじ,ニンニクの芽2本,ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油3大さじ,豆板醤2.5大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ,塩1小さじ',
            ing_ko:'연한두부500g,돼지고기다진것250g,말린고추6개,산초1.5큰술,마늘싹2개,대파2개,생강4쪽,마늘4개,간장3큰술,된장고추장2.5큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술,소금1작은술',
            ing_fr:'Tofu mou 500g, Viande hachée de porc 250g, Piment sec 6, Poivre du Sichuan 1.5càs, Pousses de ail 2, Oignons verts 2, Gingembre 4, Ail 4, Sauce soja légère 3càs, Pâte de fèves 2.5càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs, Sel 1càc',
            ing_es:'Tofu suave 500g, Carne picada de cerdo 250g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Brotes de ajo 2, Cebollas verdes 2, Jengibre 4, Ajo 4, Salsa soja clara 3cuch, Pasta de habas 2.5cuch, Vino 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch, Sal 1cucharadita',
            st_zh:'豆腐切2cm，淡盐水焯3分钟沥干|肉末加料酒、盐、淀粉腌10分钟|青蒜切小段，辣椒剪段|冷油下花椒小火炸香，捞去|下辣椒段炸香|下肉末大火炒散出油|加豆瓣酱小火炒红油|下姜蒜炒香|加小半碗水|下豆腐轻推|加生抽、醋、白糖|小火煮5分钟|分两次勾芡|撒青蒜，轻拌匀，装盘',
            st_en:'Cut tofu 2cm, blanch light salt water 3 mins, drain|Marinate minced pork with wine, salt, starch 10 mins|Cut garlic sprouts, cut chili|Cold oil, fry Sichuan pepper low fragrant, remove|Fry chili sections fragrant|High heat fry minced pork until oil out|Add bean paste low fry red oil|Stir fry ginger & garlic|Add little more than half water|Add tofu gently|Add soy sauce, vinegar, sugar|Low 5 mins|Thicken in two stages|Sprinkle garlic sprouts, gently mix, serve',
            st_ja:'豆腐2cm切り、薄い塩水で3分ゆでる|ひき肉に酒、塩、片栗粉で10分漬ける|ニンニクの芽を小さく切り、唐辛子切る|冷たい油に山椒弱火で炒めて香りを出し取る|唐辛子炒める|強火でひき肉炒めて油が出るまで|豆板醤弱火で炒めて赤い油|ショウガとニンニク炒める|半分以上水入れる|豆腐優しく|醤油、酢、砂糖|弱火5分|2回に分けてとろみ|ニンニクの芽振って盛り付け',
            st_ko:'두부2cm 썰고 옅은 소금물에 3분 데치기|돼지고기 요리술, 소금, 전분으로 10분 절이기|마늘싹 작게 썰고 고추 썰기|차가운 기름에 산초 약불로 볶아 향 내고 제거|고추 볶기|강불로 돼지고기 볶아 기름 나올 때까지|된장고추장 약불로 볶아 빨간 기름|생강과 마늘 볶기|반분 이상 물 넣기|두부 부드럽게|간장, 식초, 설탕|약불5분|2번에 걸쳐 걸쭉|마늘싹 뿌려 담기',
            st_fr:'Couper tofu 2cm, blanchir eau salée légère 3 mins, égoutter|Macerer viande hachée avec vin, sel, fécule 10 mins|Couper pousses d\'ail, couper piment|Huile froide, faire frire poivre du Sichuan à feu doux, enlever|Faire frire sections de piment|Faire frire viande hachée à feu fort jusqu\'à huile|Ajouter pâte de fèves feu doux pour huile rouge|Faire revenir gingembre & ail|Ajouter peu plus d\'une demi-eau|Ajouter tofu doucement|Ajouter soja, vinaigre, sucre|Feu doux 5 mins|Épaissir en deux étapes|Saupoudrer pousses d\'ail, mélanger, servir',
            st_es:'Cortar tofu 2cm, escaldar agua salada ligera 3 mins, escurrir|Marinar carne picada con vino, sal, almidón 10 mins|Cortar brotes de ajo, cortar chile|Aceite frío, freír pimienta de Sichuan a fuego suave, quitar|Freír secciones de chile|Freír carne picada a fuego fuerte hasta aceite|Añadir pasta de habas fuego suave para aceite rojo|Sofreír jengibre & ajo|Añadir poco más de media agua|Añadir tofu suavemente|Añadir soja, vinagre, azúcar|Fuego suave 5 mins|Espesar en dos etapas|Espolvorear brotes de ajo, mezclar, servir',
            n_zh:'层次更丰富的麻婆豆腐',
            n_en:'More complex flavor layers',
            n_ja:'層の豊かな麻婆豆腐',
            n_ko:'풍부한 층을 가진 마파두부',
            n_fr:'Couches de saveur plus complexes',
            n_es:'Capas de sabor más complejas'
        },
        { l:5,
            ing_zh:'嫩豆腐550g,猪肉末300g,干红辣椒8个,花椒2勺,青蒜3根,葱花3根,姜5片,蒜5瓣,生抽3.5勺,豆瓣酱3勺,老抽1勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1.5小勺,香油1勺',
            ing_en:'Soft tofu 550g, Minced pork 300g, Dried chili 8, Sichuan pepper 2tbsp, Garlic sprouts 3, Green onions 3, Ginger 5, Garlic 5, Light soy sauce 3.5tbsp, Broad bean paste 3tbsp, Dark soy sauce 1tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1.5tsp, Sesame oil 1tbsp',
            ing_ja:'柔らかい豆腐550g,豚ひき肉300g,乾燥唐辛子8本,山椒2大さじ,ニンニクの芽3本,ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油3.5大さじ,豆板醤3大さじ,濃口醤油1大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1.5小さじ,ごま油1大さじ',
            ing_ko:'연한두부550g,돼지고기다진것300g,말린고추8개,산초2큰술,마늘싹3개,대파3개,생강5쪽,마늘5개,간장3.5큰술,된장고추장3큰술,진간장1큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1.5작은술,참기름1큰술',
            ing_fr:'Tofu mou 550g, Viande hachée de porc 300g, Piment sec 8, Poivre du Sichuan 2càs, Pousses de ail 3, Oignons verts 3, Gingembre 5, Ail 5, Sauce soja légère 3.5càs, Pâte de fèves 3càs, Sauce soja noire 1càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1.5càc, Huile de sésame 1càs',
            ing_es:'Tofu suave 550g, Carne picada de cerdo 300g, Chile seco 8, Pimienta de Sichuan 2cuch, Brotes de ajo 3, Cebollas verdes 3, Jengibre 5, Ajo 5, Salsa soja clara 3.5cuch, Pasta de habas 3cuch, Salsa soja oscura 1cuch, Vino 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1.5cucharadita, Aceite de sésamo 1cuch',
            st_zh:'豆腐切1.8cm，淡盐水焯4分钟沥干|肉末加料酒、盐、淀粉腌15分钟|青蒜切斜段，辣椒剪段|冷油下花椒小火炸1.5分钟出香，捞去|下辣椒段炸至微焦|下肉末大火炒散出油|加豆瓣酱小火炒红油|下姜蒜炒香|加小半碗水|下豆腐轻推|加生抽、老抽、醋、白糖|小火煮6分钟|分三次勾芡|撒青蒜和葱花|淋香油，装盘！',
            st_en:'Cut tofu 1.8cm, blanch light salt water 4 mins, drain|Marinate minced pork with wine, salt, starch 15 mins|Cut garlic sprouts on angle, cut chili|Cold oil, fry Sichuan pepper low 1.5 mins, remove|Fry chili until slightly charred|High heat fry minced pork until oil out|Add bean paste low fry red oil|Stir fry ginger & garlic|Add little more than half water|Add tofu gently|Add soy sauce, dark soy, vinegar, sugar|Low 6 mins|Thicken in three stages|Sprinkle garlic sprouts & green onions|Drizzle sesame oil, serve!',
            st_ja:'豆腐1.8cm切り、薄い塩水で4分ゆでる|ひき肉に酒、塩、片栗粉で15分漬ける|ニンニクの芽は斜め切り、唐辛子切る|冷たい油に山椒弱火で1.5分炒めて香り出し取る|唐辛子を少し焦げるまで炒める|強火でひき肉炒めて油が出るまで|豆板醤弱火で炒めて赤い油|ショウガとニンニク炒める|半分以上水入れる|豆腐優しく|薄口醤油、濃口醤油、酢、砂糖|弱火6分|3回に分けてとろみ|ニンニクの芽とネギ振って|ごま油を垂らし盛り付け！',
            st_ko:'두부1.8cm 썰고 옅은 소금물에 4분 데치기|돼지고기 요리술, 소금, 전분으로 15분 절이기|마늘싹은 비스듬히 썰고 고추 썰기|차가운 기름에 산초 약불로 1.5분 볶아 향 내고 제거|고추를 약간 탈 때까지 볶기|강불로 돼지고기 볶아 기름 나올 때까지|된장고추장 약불로 볶아 빨간 기름|생강과 마늘 볶기|반분 이상 물 넣기|두부 부드럽게|간장, 진간장, 식초, 설탕|약불6분|3번에 걸쳐 걸쭉|마늘싹과 대파 뿌려|참기름 뿌려 담기！',
            st_fr:'Couper tofu 1.8cm, blanchir eau salée légère 4 mins, égoutter|Macerer viande hachée avec vin, sel, fécule 15 mins|Couper pousses d\'ail en biais, couper piment|Huile froide, faire frire poivre du Sichuan à feu doux 1.5 mins, enlever|Faire frire piment jusqu\'à légèrement carbonisé|Faire frire viande hachée à feu fort jusqu\'à huile|Ajouter pâte de fèves feu doux pour huile rouge|Faire revenir gingembre & ail|Ajouter peu plus d\'une demi-eau|Ajouter tofu doucement|Ajouter soja clair, soja noir, vinaigre, sucre|Feu doux 6 mins|Épaissir en trois étapes|Saupoudrer pousses d\'ail & oignons verts|Verser l\'huile de sésame, servir!',
            st_es:'Cortar tofu 1.8cm, escaldar agua salada ligera 4 mins, escurrir|Marinar carne picada con vino, sal, almidón 15 mins|Cortar brotes de ajo en diagonal, cortar chile|Aceite frío, freír pimienta de Sichuan a fuego suave 1.5 mins, quitar|Freír chile hasta ligeramente carbonizado|Freír carne picada a fuego fuerte hasta aceite|Añadir pasta de habas fuego suave para aceite rojo|Sofreír jengibre & ajo|Añadir poco más de media agua|Añadir tofu suavemente|Añadir soja clara, soja oscura, vinagre, azúcar|Fuego suave 6 mins|Espesar en tres etapas|Espolvorear brotes de ajo & cebollas verdes|Rociar aceite de sésamo, servir!',
            n_zh:'大师级麻婆豆腐，人间绝味！',
            n_en:'Master level Mapo Tofu, heavenly flavor!',
            n_ja:'マスター級麻婆豆腐、天国の味！',
            n_ko:'마스터급 마파두부, 천국 맛！',
            n_fr:'Tofu Mapo niveau maîtrise, goût divin!',
            n_es:'Tofu Mapo nivel maestro, ¡sabor celestial!'
        }
    ];
    
    let i = 0, total = levels.length;
    levels.forEach(l => {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [2, l.l, l.ing_zh, l.ing_en, l.ing_ja, l.ing_ko, l.ing_fr, l.ing_es, l.st_zh, l.st_en, l.st_ja, l.st_ko, l.st_fr, l.st_es, l.n_zh, l.n_en, l.n_ja, l.n_ko, l.n_fr, l.n_es],
            (err) => {
                if (err) console.error(err);
                i++;
                if (i === total) insertFriedRice();
            }
        );
    });
}

function insertFriedRice() {
    console.log('Inserting Fried Rice levels...');
    
    const levels = [
        { l:1,
            ing_zh:'米饭300g,鸡蛋2个,葱花1根,生抽1勺,盐1小勺',
            ing_en:'Cooked rice 300g, Eggs 2, Green onion 1, Light soy sauce 1tbsp, Salt 1tsp',
            ing_ja:'ご飯300g,卵2個,ネギ1本,薄口醤油1大さじ,塩1小さじ',
            ing_ko:'밥300g,달걀2개,대파1개,간장1큰술,소금1작은술',
            ing_fr:'Riz cuit 300g, Oeufs 2, Oignon vert 1, Sauce soja légère 1càs, Sel 1càc',
            ing_es:'Arroz cocido 300g, Huevos 2, Cebolla verde 1, Salsa soja clara 1cuch, Sal 1cucharadita',
            st_zh:'鸡蛋打散|锅入油，中火|倒入蛋液，炒散至凝固|倒入米饭，翻炒约2分钟|加生抽和盐|翻炒均匀|撒葱花，装盘',
            st_en:'Beat eggs|Heat oil, medium|Pour eggs, scramble until set|Add rice, stir ~2 mins|Add soy sauce & salt|Mix well|Sprinkle green onions, serve',
            st_ja:'卵を割る|フライパンに油、中火|卵を入れて炒める|ご飯を入れて約2分炒める|醤油と塩を入れる|混ぜる|ネギを振って盛り付け',
            st_ko:'달걀을 풀어놓기|팬에 기름 넣고 중불|달걀 넣고 볶기|밥 넣고 약2분 볶기|간장과 소금 넣기|골고루 섞기|대파 뿌려 담기',
            st_fr:'Battre les oeufs|Chauffer l\'huile, feu moyen|Verser les oeufs, brouiller|Ajouter le riz, mélanger ~2 mins|Ajouter soja & sel|Mélanger|Saupoudrer oignons verts, servir',
            st_es:'Batir los huevos|Calentar aceite, fuego medio|Verter huevos, revolver|Añadir arroz, mezclar ~2 mins|Añadir soja & sal|Mezclar bien|Espolvorear cebollas verdes, servir',
            n_zh:'简单蛋炒饭，新手入门',
            n_en:'Simple fried rice for beginners',
            n_ja:'簡単チャーハン',
            n_ko:'초보자용 볶음밥',
            n_fr:'Riz sauté simple pour débutants',
            n_es:'Arroz frito simple para principiantes'
        },
        { l:2,
            ing_zh:'米饭350g,鸡蛋3个,胡萝卜50g,葱花2根,生抽1.5勺,料酒1勺,盐1小勺',
            ing_en:'Cooked rice 350g, Eggs 3, Carrot 50g, Green onion 2, Light soy sauce 1.5tbsp, Cooking wine 1tbsp, Salt 1tsp',
            ing_ja:'ご飯350g,卵3個,ニンジン50g,ネギ2本,薄口醤油1.5大さじ,料理酒1大さじ,塩1小さじ',
            ing_ko:'밥350g,달걀3개,당근50g,대파2개,간장1.5큰술,요리술1큰술,소금1작은술',
            ing_fr:'Riz cuit 350g, Oeufs 3, Carotte 50g, Oignon vert 2, Sauce soja légère 1.5càs, Vin de cuisine 1càs, Sel 1càc',
            ing_es:'Arroz cocido 350g, Huevos 3, Zanahoria 50g, Cebolla verde 2, Salsa soja clara 1.5cuch, Vino de cocina 1cuch, Sal 1cucharadita',
            st_zh:'鸡蛋加料酒打散|胡萝卜切小丁|锅入油，炒香胡萝卜丁|盛出备用|另起锅炒鸡蛋|加米饭大火炒散|加炒好的胡萝卜|加生抽和盐|翻炒均匀|撒葱花，装盘',
            st_en:'Beat eggs with wine|Dice carrot|Heat oil, stir fry carrot|Remove set aside|Scramble eggs separately|Add rice, high heat stir|Add fried carrot|Add soy sauce & salt|Mix well|Sprinkle green onions, serve',
            st_ja:'卵に酒を入れて割る|ニンジンを小さく切る|油を熱しニンジンを炒める|取り出しておく|別に卵を炒める|ご飯を強火で炒める|炒めたニンジンを入れる|醤油と塩|混ぜる|ネギを振って盛り付け',
            st_ko:'달걀에 요리술 넣고 풀기|당근 작게 썰기|기름 열고 당근 볶기|빼놓기|따로 달걀 볶기|밥 강불로 볶기|볶은 당근 넣기|간장과 소금|골고루|대파 뿌려 담기',
            st_fr:'Battre les oeufs avec du vin|Couper la carotte en dés|Chauffer l\'huile, faire revenir la carotte|Retirer réserver|Brouiller les oeufs séparément|Ajouter le riz, feu fort|Ajouter la carotte frite|Ajouter soja & sel|Mélanger|Saupoudrer oignons verts, servir',
            st_es:'Batir los huevos con vino|Cortar la zanahoria en dados|Calentar aceite, sofreír la zanahoria|Quitar reservar|Revolver los huevos separadamente|Añadir arroz, fuego fuerte|Añadir zanahoria frita|Añadir soja & sal|Mezclar bien|Espolvorear cebollas verdes, servir',
            n_zh:'加入胡萝卜，颜色更好看',
            n_en:'With carrot for better color',
            n_ja:'ニンジンで彩りよく',
            n_ko:'당근으로 색감 좋게',
            n_fr:'Avec la carotte pour une belle couleur',
            n_es:'Con zanahoria para mejor color'
        },
        { l:3,
            ing_zh:'米饭400g,鸡蛋3个,胡萝卜50g,青豆50g,葱花3根,生抽2勺,老抽1勺,料酒1勺,盐1.5小勺,白胡椒粉1小勺',
            ing_en:'Cooked rice 400g, Eggs 3, Carrot 50g, Peas 50g, Green onion 3, Light soy sauce 2tbsp, Dark soy sauce 1tbsp, Cooking wine 1tbsp, Salt 1.5tsp, White pepper 1tsp',
            ing_ja:'ご飯400g,卵3個,ニンジン50g,グリンピース50g,ネギ3本,薄口醤油2大さじ,濃口醤油1大さじ,料理酒1大さじ,塩1.5小さじ,白胡椒1小さじ',
            ing_ko:'밥400g,달걀3개,당근50g,완두콩50g,대파3개,간장2큰술,진간장1큰술,요리술1큰술,소금1.5작은술,후추1작은술',
            ing_fr:'Riz cuit 400g, Oeufs 3, Carotte 50g, Petits pois 50g, Oignon vert 3, Sauce soja légère 2càs, Sauce soja noire 1càs, Vin de cuisine 1càs, Sel 1.5càc, Poivre blanc 1càc',
            ing_es:'Arroz cocido 400g, Huevos 3, Zanahoria 50g, Guisantes 50g, Cebolla verde 3, Salsa soja clara 2cuch, Salsa soja oscura 1cuch, Vino de cocina 1cuch, Sal 1.5cucharadita, Pimienta blanca 1cucharadita',
            st_zh:'鸡蛋加料酒打散|胡萝卜切丁，青豆焯水|先炒鸡蛋盛出|炒胡萝卜和青豆|加米饭大火炒散|加炒好的鸡蛋|加生抽、老抽、盐、白胡椒|大火翻炒均匀|撒葱花，装盘',
            st_en:'Beat eggs with wine|Dice carrot, blanch peas|Scramble eggs first remove|Stir fry carrot & peas|Add rice high heat stir|Add fried eggs|Add light & dark soy, salt, pepper|High heat mix well|Sprinkle green onions, serve',
            st_ja:'卵に酒を入れて割る|ニンジンを切り、グリンピースを湯通し|先に卵を炒めて取る|ニンジンとグリンピース炒める|ご飯を強火で炒める|炒めた卵を入れる|薄口醤油、濃口醤油、塩、白胡椒|強火で混ぜる|ネギを振って盛り付け',
            st_ko:'달걀에 요리술 넣고 풀기|당근 썰고 완두콩 데치기|먼저 달걀 볶아 빼기|당근과 완두콩 볶기|밥 강불로 볶기|볶은 달걀 넣기|간장, 진간장, 소금, 후추|강불로 골고루|대파 뿌려 담기',
            st_fr:'Battre les oeufs avec du vin|Couper la carotte, blanchir les petits pois|Brouiller les oeufs d\'abord retirer|Faire revenir la carotte & petits pois|Ajouter le riz feu fort|Ajouter les oeufs frits|Ajouter soja clair & noir, sel, poivre|Feu fort mélanger bien|Saupoudrer oignons verts, servir',
            st_es:'Batir los huevos con vino|Cortar la zanahoria, escaldar guisantes|Revolver los huevos primero quitar|Sofreír zanahoria & guisantes|Añadir arroz fuego fuerte|Añadir huevos fritos|Añadir soja clara & oscura, sal, pimienta|Fuego fuerte mezclar bien|Espolvorear cebollas verdes, servir',
            n_zh:'色香味俱全的蛋炒饭',
            n_en:'Color, aroma & taste perfect',
            n_ja:'色・香り・味完璧',
            n_ko:'색·향·맛 완벽',
            n_fr:'Couleur, arôme & goût parfaits',
            n_es:'Color, aroma y sabor perfectos'
        },
        { l:4,
            ing_zh:'米饭450g,鸡蛋4个,胡萝卜60g,青豆60g,火腿肠50g,葱花3根,蒜末1勺,姜末1勺,生抽2.5勺,老抽1.5勺,料酒1.5勺,盐2小勺,白胡椒粉1.5小勺,香油1小勺',
            ing_en:'Cooked rice 450g, Eggs 4, Carrot 60g, Peas 60g, Ham sausage 50g, Green onion 3, Minced garlic 1tbsp, Minced ginger 1tbsp, Light soy sauce 2.5tbsp, Dark soy sauce 1.5tbsp, Cooking wine 1.5tbsp, Salt 2tsp, White pepper 1.5tsp, Sesame oil 1tsp',
            ing_ja:'ご飯450g,卵4個,ニンジン60g,グリンピース60g,ハムソーセージ50g,ネギ3本,ニンニクみじん切り1大さじ,ショウガみじん切り1大さじ,薄口醤油2.5大さじ,濃口醤油1.5大さじ,料理酒1.5大さじ,塩2小さじ,白胡椒1.5小さじ,ごま油1小さじ',
            ing_ko:'밥450g,달걀4개,당근60g,완두콩60g,햄소세지50g,대파3개,마늘다진것1큰술,생강다진것1큰술,간장2.5큰술,진간장1.5큰술,요리술1.5큰술,소금2작은술,후추1.5작은술,참기름1작은술',
            ing_fr:'Riz cuit 450g, Oeufs 4, Carotte 60g, Petits pois 60g, Saucisse de jambon 50g, Oignon vert 3, Ail haché 1càs, Gingembre haché 1càs, Sauce soja légère 2.5càs, Sauce soja noire 1.5càs, Vin de cuisine 1.5càs, Sel 2càc, Poivre blanc 1.5càc, Huile de sésame 1càc',
            ing_es:'Arroz cocido 450g, Huevos 4, Zanahoria 60g, Guisantes 60g, Salchicha de jamón 50g, Cebolla verde 3, Ajo picado 1cuch, Jengibre picado 1cuch, Salsa soja clara 2.5cuch, Salsa soja oscura 1.5cuch, Vino de cocina 1.5cuch, Sal 2cucharadita, Pimienta blanca 1.5cucharadita, Aceite de sésamo 1cucharadita',
            st_zh:'鸡蛋加料酒打散|胡萝卜、火腿肠切丁，青豆焯水|先炒鸡蛋盛出|爆香姜蒜|炒胡萝卜、青豆、火腿肠|加米饭大火炒散至粒粒分明|加炒好的鸡蛋|加生抽、老抽、盐、白胡椒|大火快速翻炒约2分钟|淋香油|撒葱花，装盘',
            st_en:'Beat eggs with wine|Dice carrot & sausage, blanch peas|Scramble eggs first remove|Sear ginger & garlic fragrant|Stir fry carrot, peas, sausage|Add rice high heat stir to separate grains|Add fried eggs|Add soy sauces, salt, pepper|High heat quick stir ~2 mins|Drizzle sesame oil|Sprinkle green onions, serve',
            st_ja:'卵に酒を入れて割る|ニンジン、ソーセージ切り、グリンピース湯通し|先に卵を炒めて取る|ショウガとニンニクを香りよく炒める|ニンジン、グリンピース、ソーセージ炒める|ご飯を強火で一粒一粒に炒める|炒めた卵を入れる|醤油、塩、胡椒|強火で約2分炒める|ごま油を垂らす|ネギを振って盛り付け',
            st_ko:'달걀에 요리술 넣고 풀기|당근, 소세지 썰고 완두콩 데치기|먼저 달걀 볶아 빼기|생강과 마늘 향 내기|당근, 완두콩, 소세지 볶기|밥 강불로 한알씩 볶기|볶은 달걀 넣기|간장, 소금, 후추|강불로 약2분 빠르게 볶기|참기름 뿌리기|대파 뿌려 담기',
            st_fr:'Battre les oeufs avec du vin|Couper carotte & saucisse, blanchir petits pois|Brouiller les oeufs d\'abord retirer|Faire revenir gingembre & ail parfumé|Faire revenir carotte, petits pois, saucisse|Ajouter le riz feu fort mélanger grains séparés|Ajouter les oeufs frits|Ajouter les sauces soja, sel, poivre|Feu fort mélanger rapidement ~2 mins|Verser l\'huile de sésame|Saupoudrer oignons verts, servir',
            st_es:'Batir los huevos con vino|Cortar zanahoria & salchicha, escaldar guisantes|Revolver los huevos primero quitar|Sofreír jengibre & ajo aromático|Sofreír zanahoria, guisantes, salchicha|Añadir arroz fuego fuerte mezclar granos separados|Añadir huevos fritos|Añadir salsas soja, sal, pimienta|Fuego fuerte mezclar rápidamente ~2 mins|Rociar aceite de sésamo|Espolvorear cebollas verdes, servir',
            n_zh:'经典扬州炒饭风味',
            n_es:'Estilo Yangzhou clásico',
            n_fr:'Style Yangzhou classique',
            n_ko:'클래식 양주 볶음밥',
            n_ja:'クラシックヤンチャーハン',
            n_en:'Classic Yangzhou style'
        },
        { l:5,
            ing_zh:'米饭500g,鸡蛋5个,胡萝卜70g,青豆70g,虾仁100g,葱花4根,蒜末1.5勺,姜末1.5勺,生抽3勺,老抽2勺,料酒2勺,盐2.5小勺,白胡椒粉2小勺,香油1.5小勺,鸡精1小勺',
            ing_en:'Cooked rice 500g, Eggs 5, Carrot 70g, Peas 70g, Shrimp 100g, Green onion 4, Minced garlic 1.5tbsp, Minced ginger 1.5tbsp, Light soy sauce 3tbsp, Dark soy sauce 2tbsp, Cooking wine 2tbsp, Salt 2.5tsp, White pepper 2tsp, Sesame oil 1.5tsp, Chicken bouillon 1tsp',
            ing_ja:'ご飯500g,卵5個,ニンジン70g,グリンピース70g,エビ100g,ネギ4本,ニンニクみじん切り1.5大さじ,ショウガみじん切り1.5大さじ,薄口醤油3大さじ,濃口醤油2大さじ,料理酒2大さじ,塩2.5小さじ,白胡椒2小さじ,ごま油1.5小さじ,チキンブイヨン1小さじ',
            ing_ko:'밥500g,달걀5개,당근70g,완두콩70g,새우100g,대파4개,마늘다진것1.5큰술,생강다진것1.5큰술,간장3큰술,진간장2큰술,요리술2큰술,소금2.5작은술,후추2작은술,참기름1.5작은술,치킨스톡1작은술',
            ing_fr:'Riz cuit 500g, Oeufs 5, Carotte 70g, Petits pois 70g, Crevettes 100g, Oignon vert 4, Ail haché 1.5càs, Gingembre haché 1.5càs, Sauce soja légère 3càs, Sauce soja noire 2càs, Vin de cuisine 2càs, Sel 2.5càc, Poivre blanc 2càc, Huile de sésame 1.5càc, Bouillon de poulet 1càc',
            ing_es:'Arroz cocido 500g, Huevos 5, Zanahoria 70g, Guisantes 70g, Gambas 100g, Cebolla verde 4, Ajo picado 1.5cuch, Jengibre picado 1.5cuch, Salsa soja clara 3cuch, Salsa soja oscura 2cuch, Vino de cocina 2cuch, Sal 2.5cucharadita, Pimienta blanca 2cucharadita, Aceite de sésamo 1.5cucharadita, Caldo de pollo 1cucharadita',
            st_zh:'虾仁去壳去线，加料酒、盐腌10分钟|鸡蛋打散|胡萝卜切丁，青豆焯水|先炒虾仁盛出|炒鸡蛋盛出|爆香姜蒜|炒胡萝卜、青豆|加米饭大火炒散至粒粒分明|加炒好的虾仁和鸡蛋|加生抽、老抽、盐、白胡椒|大火快速翻炒约2分钟|淋香油，撒鸡精|快速翻炒10秒|撒葱花，立即装盘！',
            st_en:'Peel & devein shrimp, marinate wine & salt 10 mins|Beat eggs|Dice carrot, blanch peas|Scramble shrimp first remove|Scramble eggs remove|Sear ginger & garlic fragrant|Stir fry carrot & peas|Add rice high heat stir grains separate|Add fried shrimp & eggs|Add soy sauces, salt, pepper|High heat quick stir ~2 mins|Drizzle sesame oil, sprinkle bouillon|Quick stir 10 sec|Sprinkle green onions, serve immediately!',
            st_ja:'エビの殻と背ワタを取り、酒と塩で10分漬ける|卵を割る|ニンジン切り、グリンピース湯通し|先にエビを炒めて取る|卵を炒めて取る|ショウガとニンニク香りよく炒める|ニンジンとグリンピース炒める|ご飯を強火で一粒一粒に炒める|炒めたエビと卵を入れる|醤油、塩、胡椒|強火で約2分炒める|ごま油を垂らし、ブイヨンを振る|10秒だけ炒める|ネギを振ってすぐ盛り付け！',
            st_ko:'새우 껍질 벗고 등줄기 제거하고 요리술, 소금으로 10분 절이기|달걀 풀기|당근 썰고 완두콩 데치기|먼저 새우 볶아 빼기|달걀 볶아 빼기|생강과 마늘 향 내기|당근과 완두콩 볶기|밥 강불로 한알씩 볶기|볶은 새우와 달걀 넣기|간장, 소금, 후추|강불로 약2분 빠르게 볶기|참기름 뿌리고 스톡 뿌리기|10초만 빠르게 볶기|대파 뿌려 즉시 담기！',
            st_fr:'Peler & déveiner les crevettes, mariner vin & sel 10 mins|Battre les oeufs|Couper carotte, blanchir petits pois|Faire revenir les crevettes d\'abord retirer|Brouiller les oeufs retirer|Faire revenir gingembre & ail parfumé|Faire revenir carotte & petits pois|Ajouter le riz feu fort mélanger grains séparés|Ajouter crevettes frites & oeufs|Ajouter les sauces soja, sel, poivre|Feu fort mélanger rapidement ~2 mins|Verser l\'huile de sésame, saupoudrer le bouillon|Mélanger rapidement 10 sec|Saupoudrer oignons verts, servir immédiatement!',
            st_es:'Pelar & quitar las venas de las gambas, marinar vino & sal 10 mins|Batir los huevos|Cortar zanahoria, escaldar guisantes|Sofreír las gambas primero quitar|Revolver los huevos quitar|Sofreír jengibre & ajo aromático|Sofreír zanahoria & guisantes|Añadir arroz fuego fuerte mezclar granos separados|Añadir gambas fritas & huevos|Añadir salsas soja, sal, pimienta|Fuego fuerte mezclar rápidamente ~2 mins|Rociar aceite de sésamo, espolvorear caldo|Mezclar rápidamente 10 seg|Espolvorear cebollas verdes, servir inmediatamente!',
            n_zh:'大师级扬州炒饭！',
            n_en:'Master level Yangzhou fried rice!',
            n_ja:'マスター級ヤンチャーハン！',
            n_ko:'마스터급 양주 볶음밥！',
            n_fr:'Riz sauté Yangzhou niveau maîtrise!',
            n_es:'¡Arroz frito Yangzhou nivel maestro!'
        }
    ];
    
    let i = 0, total = levels.length;
    levels.forEach(l => {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [3, l.l, l.ing_zh, l.ing_en, l.ing_ja, l.ing_ko, l.ing_fr, l.ing_es, l.st_zh, l.st_en, l.st_ja, l.st_ko, l.st_fr, l.st_es, l.n_zh, l.n_en, l.n_ja, l.n_ko, l.n_fr, l.n_es],
            (err) => {
                if (err) console.error(err);
                i++;
                if (i === total) insertSweetSour();
            }
        );
    });
}

function insertSweetSour() {
    console.log('Inserting Sweet & Sour Pork levels...');
    
    const levels = [
        { l:1,
            ing_zh:'猪里脊肉250g,番茄酱3勺,白糖2勺,生抽1勺',
            ing_en:'Pork tenderloin 250g, Ketchup 3tbsp, Sugar 2tbsp, Light soy sauce 1tbsp',
            ing_ja:'豚ロース250g,トマトケチャップ3大さじ,砂糖2大さじ,薄口醤油1大さじ',
            ing_ko:'돼지등심250g,토마토케첩3큰술,설탕2큰술,간장1큰술',
            ing_fr:'Filet de porc 250g, Ketchup 3càs, Sucre 2càs, Sauce soja légère 1càs',
            ing_es:'Lomo de cerdo 250g, Ketchup 3cuch, Azúcar 2cuch, Salsa soja clara 1cuch',
            st_zh:'猪肉切1cm厚片|锅入油，中火|煎猪肉两面各约2分钟至熟|盛出猪肉|锅留底油，加番茄酱、白糖、生抽|小火煮至冒泡|倒回猪肉|翻炒均匀裹汁|装盘',
            st_en:'Cut pork 1cm thick slices|Heat oil, medium|Fry pork ~2 mins each side until cooked|Remove pork|Leave oil, add ketchup, sugar, soy sauce|Low heat until bubbly|Return pork|Stir to coat|Serve',
            st_ja:'豚肉を1cm厚さに切る|フライパンに油、中火|豚肉の両面を約2分ずつ焼く|豚肉を取る|油を残し、ケチャップ、砂糖、醤油を入れる|弱火で泡が出るまで|豚肉を戻す|炒めてソースを絡める|盛り付け',
            st_ko:'돼지고기 1cm 두께로 썰기|팬에 기름 넣고 중불|돼지고기 양면 약2분씩 구워 익히기|돼지고기 빼기|기름 남겨놓고 케첩, 설탕, 간장 넣기|약불로 거품이 날 때까지|돼지고기 돌려놓기|볶아 소스 골고루|담기',
            st_fr:'Couper le porc en tranches de 1cm d\'épaisseur|Chauffer l\'huile, feu moyen|Faire frire le porc ~2 mins de chaque côté|Retirer le porc|Laisser l\'huile, ajouter ketchup, sucre, sauce soja|Feu doux jusqu\'à bouillonnant|Rajouter le porc|Mélanger pour enrober|Servir',
            st_es:'Cortar el cerdo en rodajas de 1cm de grosor|Calentar aceite, fuego medio|Freír el cerdo ~2 mins por cada lado hasta cocido|Quitar el cerdo|Dejar el aceite, añadir ketchup, azúcar, salsa soja|Fuego suave hasta burbujeante|Devolver el cerdo|Mezclar para cubrir|Servir',
            n_zh:'简单糖醋里脊入门版',
            n_en:'Simple sweet & sour for beginners',
            n_ja:'簡単酢豚初心者版',
            n_ko:'초보자용 간단 탕수육',
            n_fr:'Porc aigre-doux simple pour débutants',
            n_es:'Cerdo agridulce simple para principiantes'
        },
        { l:2,
            ing_zh:'猪里脊肉300g,鸡蛋1个,淀粉3勺,番茄酱4勺,白糖3勺,生抽1.5勺,料酒1勺,醋1勺',
            ing_en:'Pork tenderloin 300g, Egg 1, Cornstarch 3tbsp, Ketchup 4tbsp, Sugar 3tbsp, Light soy sauce 1.5tbsp, Cooking wine 1tbsp, Vinegar 1tbsp',
            ing_ja:'豚ロース300g,卵1個,片栗粉3大さじ,トマトケチャップ4大さじ,砂糖3大さじ,薄口醤油1.5大さじ,料理酒1大さじ,酢1大さじ',
            ing_ko:'돼지등심300g,달걀1개,전분3큰술,토마토케첩4큰술,설탕3큰술,간장1.5큰술,요리술1큰술,식초1큰술',
            ing_fr:'Filet de porc 300g, Oeuf 1, Fécule 3càs, Ketchup 4càs, Sucre 3càs, Sauce soja légère 1.5càs, Vin de cuisine 1càs, Vinaigre 1càs',
            ing_es:'Lomo de cerdo 300g, Huevo 1, Almidón 3cuch, Ketchup 4cuch, Azúcar 3cuch, Salsa soja clara 1.5cuch, Vino de cocina 1cuch, Vinagre 1cuch',
            st_zh:'猪肉切1cm条，加料酒腌10分钟|鸡蛋打散加淀粉抓匀|调糖醋汁：番茄酱、白糖、生抽、醋|锅入油，中火|煎猪肉至金黄|盛出|锅留底油，倒糖醋汁|煮至冒泡|倒回猪肉|翻炒均匀|装盘',
            st_en:'Cut pork 1cm strips, marinate wine 10 mins|Beat egg + starch mix|Mix sweet & sour sauce: ketchup, sugar, soy, vinegar|Heat oil, medium|Fry pork golden|Remove|Leave oil, pour sauce|Cook bubbly|Return pork|Stir|Serve',
            st_ja:'豚肉を1cmの棒切り、酒で10分漬ける|卵割って片栗粉と混ぜる|酢豚ソース：ケチャップ、砂糖、醤油、酢|油を熱し中火|豚肉を黄金色に焼く|取る|油を残しソースを入れる|泡が出るまで煮る|豚肉を戻す|炒める|盛り付け',
            st_ko:'돼지고기 1cm 길이로 썰고 요리술로 10분 절이기|달걀 풀고 전분 섞기|탕수 소스：케첩, 설탕, 간장, 식초|팬에 기름 넣고 중불|돼지고기 황금색으로 구워|빼기|기름 남겨놓고 소스 붓기|거품 날 때까지 끓이기|돼지고기 돌려놓기|볶기|담기',
            st_fr:'Couper le porc en lamelles de 1cm, mariner au vin 10 mins|Battre oeuf + fécule mélanger|Mélanger la sauce aigre-doux: ketchup, sucre, soja, vinaigre|Chauffer l\'huile, feu moyen|Faire frire le porc doré|Retirer|Laisser l\'huile, verser la sauce|Cuire bouillonnant|Rajouter le porc|Mélanger|Servir',
            st_es:'Cortar el cerdo en tiras de 1cm, marinar con vino 10 mins|Batir huevo + almidón mezclar|Mezclar salsa agridulce: ketchup, azúcar, soja, vinagre|Calentar aceite, fuego medio|Freír el cerdo dorado|Quitar|Dejar el aceite, verter la salsa|Cocinar burbujeante|Devolver el cerdo|Mezclar|Servir',
            n_zh:'外酥里嫩的糖醋里脊',
            n_en:'Crispy outside, tender inside',
            n_ja:'外はカリカリ中は柔らかい',
            n_ko:'겉바속촉',
            n_fr:'Croustillant à l\'extérieur, tendre à l\'intérieur',
            n_es:'Crujiente por fuera, tierno por dentro'
        },
        { l:3,
            ing_zh:'猪里脊肉350g,鸡蛋1个,淀粉4勺,番茄酱5勺,白糖4勺,生抽2勺,料酒1.5勺,醋2勺,盐1小勺,白胡椒粉1小勺',
            ing_en:'Pork tenderloin 350g, Egg 1, Cornstarch 4tbsp, Ketchup 5tbsp, Sugar 4tbsp, Light soy sauce 2tbsp, Cooking wine 1.5tbsp, Vinegar 2tbsp, Salt 1tsp, White pepper 1tsp',
            ing_ja:'豚ロース350g,卵1個,片栗粉4大さじ,トマトケチャップ5大さじ,砂糖4大さじ,薄口醤油2大さじ,料理酒1.5大さじ,酢2大さじ,塩1小さじ,白胡椒1小さじ',
            ing_ko:'돼지등심350g,달걀1개,전분4큰술,토마토케첩5큰술,설탕4큰술,간장2큰술,요리술1.5큰술,식초2큰술,소금1작은술,후추1작은술',
            ing_fr:'Filet de porc 350g, Oeuf 1, Fécule 4càs, Ketchup 5càs, Sucre 4càs, Sauce soja légère 2càs, Vin de cuisine 1.5càs, Vinaigre 2càs, Sel 1càc, Poivre blanc 1càc',
            ing_es:'Lomo de cerdo 350g, Huevo 1, Almidón 4cuch, Ketchup 5cuch, Azúcar 4cuch, Salsa soja clara 2cuch, Vino de cocina 1.5cuch, Vinagre 2cuch, Sal 1cucharadita, Pimienta blanca 1cucharadita',
            st_zh:'猪肉切1.5cm条，加料酒、盐、白胡椒粉腌15分钟|鸡蛋打散加淀粉抓匀|调糖醋汁：番茄酱、白糖、生抽、醋|锅入多油，中火|炸猪肉至金黄酥脆|盛出|锅留底油，倒糖醋汁|煮至粘稠|倒回猪肉|快速翻炒裹汁|装盘',
            st_en:'Cut pork 1.5cm strips, marinate wine, salt, pepper 15 mins|Beat egg + starch mix|Mix sweet & sour sauce|Heat more oil, medium|Deep fry pork crispy golden|Remove|Leave oil, pour sauce|Cook thick|Return pork|Quick stir coat|Serve',
            st_ja:'豚肉1.5cm棒切り、酒、塩、白胡椒で15分漬ける|卵割って片栗粉混ぜる|酢豚ソース|多めの油中火で熱し|豚肉をカリカリ黄金色に揚げる|取る|油を残しソースを入れる|とろみがつくまで煮る|豚肉を戻す|素早く炒めてソースを絡める|盛り付け',
            st_ko:'돼지고기 1.5cm 길이로 썰고 요리술, 소금, 후추로 15분 절이기|달걀 풀고 전분 섞기|탕수 소스|팬에 기름 많이 넣고 중불|돼지고기 바삭 황금색으로 튀기|빼기|기름 남겨놓고 소스 붓기|걸쭉해질 때까지 끓이기|돼지고기 돌려놓기|빠르게 볶아 소스 골고루|담기',
            st_fr:'Couper le porc en lamelles de 1.5cm, mariner vin, sel, poivre 15 mins|Battre oeuf + fécule mélanger|Mélanger la sauce aigre-doux|Chauffer plus d\'huile, feu moyen|Faire frire le porc croustillant doré|Retirer|Laisser l\'huile, verser la sauce|Cuire épais|Rajouter le porc|Mélanger rapidement enrober|Servir',
            st_es:'Cortar el cerdo en tiras de 1.5cm, marinar con vino, sal, pimienta 15 mins|Batir huevo + almidón mezclar|Mezclar salsa agridulce|Calentar más aceite, fuego medio|Freír el cerdo crujiente dorado|Quitar|Dejar el aceite, verter la salsa|Cocinar espeso|Devolver el cerdo|Mezclar rápidamente cubrir|Servir',
            n_zh:'经典糖醋里脊',
            n_en:'Classic sweet & sour pork',
            n_ja:'定番酢豚',
            n_ko:'클래식 탕수육',
            n_fr:'Porc aigre-doux classique',
            n_es:'Cerdo agridulce clásico'
        },
        { l:4,
            ing_zh:'猪里脊肉400g,鸡蛋2个,淀粉5勺,番茄酱6勺,白糖5勺,生抽2.5勺,料酒2勺,醋2.5勺,盐1.5小勺,白胡椒粉1.5小勺,菠萝100g,青红椒各半个',
            ing_en:'Pork tenderloin 400g, Eggs 2, Cornstarch 5tbsp, Ketchup 6tbsp, Sugar 5tbsp, Light soy sauce 2.5tbsp, Cooking wine 2tbsp, Vinegar 2.5tbsp, Salt 1.5tsp, White pepper 1.5tsp, Pineapple 100g, Green & red bell pepper half each',
            ing_ja:'豚ロース400g,卵2個,片栗粉5大さじ,トマトケチャップ6大さじ,砂糖5大さじ,薄口醤油2.5大さじ,料理酒2大さじ,酢2.5大さじ,塩1.5小さじ,白胡椒1.5小さじ,パイナップル100g,ピーマンと赤ピーマン各半分',
            ing_ko:'돼지등심400g,달걀2개,전분5큰술,토마토케첩6큰술,설탕5큰술,간장2.5큰술,요리술2큰술,식초2.5큰술,소금1.5작은술,후추1.5작은술,파인애플100g,청·홍피망 각 반개',
            ing_fr:'Filet de porc 400g, Oeufs 2, Fécule 5càs, Ketchup 6càs, Sucre 5càs, Sauce soja légère 2.5càs, Vin de cuisine 2càs, Vinaigre 2.5càs, Sel 1.5càc, Poivre blanc 1.5càc, Ananas 100g, Poivrons vert & rouge la moitié chacun',
            ing_es:'Lomo de cerdo 400g, Huevos 2, Almidón 5cuch, Ketchup 6cuch, Azúcar 5cuch, Salsa soja clara 2.5cuch, Vino de cocina 2cuch, Vinagre 2.5cuch, Sal 1.5cucharadita, Pimienta blanca 1.5cucharadita, Piña 100g, Pimientos verde & rojo la mitad cada uno',
            st_zh:'猪肉切1.5cm条，加料酒、盐、白胡椒粉腌20分钟|鸡蛋打散加淀粉抓匀|菠萝、青红椒切块|调糖醋汁|锅入多油，中火|炸猪肉至金黄酥脆两次复炸一次|盛出|锅留底油，炒青红椒|倒糖醋汁|煮至粘稠|倒回猪肉和菠萝|快速翻炒裹汁|装盘',
            st_en:'Cut pork 1.5cm strips, marinate wine, salt, pepper 20 mins|Beat eggs + starch mix|Cut pineapple & peppers|Mix sweet & sour sauce|Heat more oil, medium|Deep fry pork crispy golden, double fry|Remove|Leave oil, stir fry peppers|Pour sauce|Cook thick|Return pork & pineapple|Quick stir coat|Serve',
            st_ja:'豚肉1.5cm棒切り、酒、塩、白胡椒で20分漬ける|卵2個割って片栗粉混ぜる|パイナップルとピーマン切る|酢豚ソース|多めの油中火で熱し|豚肉をカリカリ黄金色に2度揚げ|取る|油を残しピーマン炒める|ソースを入れる|とろみがつくまで煮る|豚肉とパイナップル戻す|素早く炒めてソース絡める|盛り付け',
            st_ko:'돼지고기 1.5cm 길이로 썰고 요리술, 소금, 후추로 20분 절이기|달걀2개 풀고 전분 섞기|파인애플과 피망 썰기|탕수 소스|팬에 기름 많이 넣고 중불|돼지고기 바삭 황금색으로 2번 튀기|빼기|기름 남겨놓고 피망 볶기|소스 붓기|걸쭉해질 때까지 끓이기|돼지고기와 파인애플 돌려놓기|빠르게 볶아 소스 골고루|담기',
            st_fr:'Couper le porc en lamelles de 1.5cm, mariner vin, sel, poivre 20 mins|Battre oeufs + fécule mélanger|Couper ananas & poivrons|Mélanger la sauce aigre-doux|Chauffer plus d\'huile, feu moyen|Faire frire le porc croustillant doré, frire deux fois|Retirer|Laisser l\'huile, faire revenir poivrons|Verser la sauce|Cuire épais|Rajouter le porc & ananas|Mélanger rapidement enrober|Servir',
            st_es:'Cortar el cerdo en tiras de 1.5cm, marinar con vino, sal, pimienta 20 mins|Batir huevos + almidón mezclar|Cortar piña & pimientos|Mezclar salsa agridulce|Calentar más aceite, fuego medio|Freír el cerdo crujiente dorado, freír dos veces|Quitar|Dejar el aceite, sofreír pimientos|Verter la salsa|Cocinar espeso|Devolver el cerdo & piña|Mezclar rápidamente cubrir|Servir',
            n_zh:'菠萝糖醋里脊配彩椒',
            n_en:'Sweet & sour with pineapple & peppers',
            n_ja:'パイナップルとピーマンの酢豚',
            n_ko:'파인애플과 피망 탕수육',
            n_fr:'Porc aigre-doux avec ananas & poivrons',
            n_es:'Cerdo agridulce con piña & pimientos'
        },
        { l:5,
            ing_zh:'猪里脊肉450g,鸡蛋2个,淀粉6勺,番茄酱7勺,白糖6勺,生抽3勺,料酒2.5勺,醋3勺,盐2小勺,白胡椒粉2小勺,菠萝150g,青红椒各半个,洋葱半个,香油1勺,鸡精1小勺',
            ing_en:'Pork tenderloin 450g, Eggs 2, Cornstarch 6tbsp, Ketchup 7tbsp, Sugar 6tbsp, Light soy sauce 3tbsp, Cooking wine 2.5tbsp, Vinegar 3tbsp, Salt 2tsp, White pepper 2tsp, Pineapple 150g, Green & red bell pepper half each, Onion half, Sesame oil 1tbsp, Chicken bouillon 1tsp',
            ing_ja:'豚ロース450g,卵2個,片栗粉6大さじ,トマトケチャップ7大さじ,砂糖6大さじ,薄口醤油3大さじ,料理酒2.5大さじ,酢3大さじ,塩2小さじ,白胡椒2小さじ,パイナップル150g,ピーマンと赤ピーマン各半分,玉ねぎ半分,ごま油1大さじ,チキンブイヨン1小さじ',
            ing_ko:'돼지등심450g,달걀2개,전분6큰술,토마토케첩7큰술,설탕6큰술,간장3큰술,요리술2.5큰술,식초3큰술,소금2작은술,후추2작은술,파인애플150g,청·홍피망 각 반개,양파 반개,참기름1큰술,치킨스톡1작은술',
            ing_fr:'Filet de porc 450g, Oeufs 2, Fécule 6càs, Ketchup 7càs, Sucre 6càs, Sauce soja légère 3càs, Vin de cuisine 2.5càs, Vinaigre 3càs, Sel 2càc, Poivre blanc 2càc, Ananas 150g, Poivrons vert & rouge la moitié chacun, Oignon la moitié, Huile de sésame 1càs, Bouillon de poulet 1càc',
            ing_es:'Lomo de cerdo 450g, Huevos 2, Almidón 6cuch, Ketchup 7cuch, Azúcar 6cuch, Salsa soja clara 3cuch, Vino de cocina 2.5cuch, Vinagre 3cuch, Sal 2cucharadita, Pimienta blanca 2cucharadita, Piña 150g, Pimientos verde & rojo la mitad cada uno, Cebolla la mitad, Aceite de sésamo 1cuch, Caldo de pollo 1cucharadita',
            st_zh:'猪肉切1.2cm条，加料酒、盐、白胡椒粉腌25分钟|鸡蛋打散加淀粉抓匀|菠萝、青红椒、洋葱切块|调糖醋汁|锅入多油，中火|炸猪肉至金黄酥脆两次复炸更脆|盛出|锅留底油，炒洋葱、青红椒|倒糖醋汁|煮至粘稠发亮|倒回猪肉和菠萝|快速翻炒裹汁|淋香油，撒鸡精|快速翻炒10秒|立即装盘！',
            st_en:'Cut pork 1.2cm strips, marinate wine, salt, pepper 25 mins|Beat eggs + starch mix|Cut pineapple, peppers, onion|Mix sweet & sour sauce|Heat more oil, medium|Deep fry pork crispy golden, double fry extra crisp|Remove|Leave oil, stir fry onion & peppers|Pour sauce|Cook thick & glossy|Return pork & pineapple|Quick stir coat|Drizzle sesame oil, sprinkle bouillon|Quick stir 10 sec|Serve immediately!',
            st_ja:'豚肉1.2cm棒切り、酒、塩、白胡椒で25分漬ける|卵2個割って片栗粉混ぜる|パイナップル、ピーマン、玉ねぎ切る|酢豚ソース|多めの油中火で熱し|豚肉をカリカリ黄金色に2度揚げてよりカリカリに|取る|油を残し玉ねぎとピーマン炒める|ソースを入れる|とろみがついてツヤツヤになるまで煮る|豚肉とパイナップル戻す|素早く炒めてソース絡める|ごま油垂らし、ブイヨン振る|10秒だけ素早く炒める|すぐ盛り付け！',
            st_ko:'돼지고기 1.2cm 길이로 썰고 요리술, 소금, 후추로25분 절이기|달걀2개 풀고 전분 섞기|파인애플, 피망, 양파 썰기|탕수 소스|팬에 기름 많이 넣고 중불|돼지고기 바삭 황금색으로 2번 튀겨 더 바삭하게|빼기|기름 남겨놓고 양파와 피망 볶기|소스 붓기|걸쭉하고 광택이 날 때까지 끓이기|돼지고기와 파인애플 돌려놓기|빠르게 볶아 소스 골고루|참기름 뿌리고 스톡 뿌리기|10초만 빠르게 볶기|즉시 담기！',
            st_fr:'Couper le porc en lamelles de 1.2cm, mariner vin, sel, poivre 25 mins|Battre oeufs + fécule mélanger|Couper ananas, poivrons, oignon|Mélanger la sauce aigre-doux|Chauffer plus d\'huile, feu moyen|Faire frire le porc croustillant doré, frire deux fois plus croustillant|Retirer|Laisser l\'huile, faire revenir oignon & poivrons|Verser la sauce|Cuire épais & brillant|Rajouter le porc & ananas|Mélanger rapidement enrober|Verser l\'huile de sésame, saupoudrer le bouillon|Mélanger rapidement 10 sec|Servir immédiatement!',
            st_es:'Cortar el cerdo en tiras de 1.2cm, marinar con vino, sal, pimienta 25 mins|Batir huevos + almidón mezclar|Cortar piña, pimientos, cebolla|Mezclar salsa agridulce|Calentar más aceite, fuego medio|Freír el cerdo crujiente dorado, freír dos veces más crujiente|Quitar|Dejar el aceite, sofreír cebolla & pimientos|Verter la salsa|Cocinar espeso & brillante|Devolver el cerdo & piña|Mezclar rápidamente cubrir|Rociar aceite de sésamo, espolvorear caldo|Mezclar rápidamente 10 seg|Servir inmediatamente!',
            n_zh:'大师级糖醋里脊！',
            n_en:'Master level sweet & sour pork!',
            n_ja:'マスター級酢豚！',
            n_ko:'마스터급 탕수육！',
            n_fr:'Porc aigre-doux niveau maîtrise!',
            n_es:'¡Cerdo agridulce nivel maestro!'
        }
    ];
    
    let i = 0, total = levels.length;
    levels.forEach(l => {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [4, l.l, l.ing_zh, l.ing_en, l.ing_ja, l.ing_ko, l.ing_fr, l.ing_es, l.st_zh, l.st_en, l.st_ja, l.st_ko, l.st_fr, l.st_es, l.n_zh, l.n_en, l.n_ja, l.n_ko, l.n_fr, l.n_es],
            (err) => {
                if (err) console.error(err);
                i++;
                if (i === total) {
                    console.log('Database initialized successfully!');
                    db.close();
                }
            }
        );
    });
}
