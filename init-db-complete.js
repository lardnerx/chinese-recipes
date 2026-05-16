const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'recipes.db');
if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
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
        insertRecipes();
    });
});

function insertRecipes() {
    const recipes = [
        { id:1, slug:'kung-pao-chicken', name_zh:'宫保鸡丁', name_en:'Kung Pao Chicken', name_ja:'カンパオチキン', name_ko:'쿵파오 치킨', name_fr:'Poulet Kung Pao', name_es:'Pollo Kung Pao' },
        { id:2, slug:'mapo-tofu', name_zh:'麻婆豆腐', name_en:'Mapo Tofu', name_ja:'マーボー豆腐', name_ko:'마파두부', name_fr:'Tofu Mapo', name_es:'Tofu Mapo' },
        { id:3, slug:'fried-rice', name_zh:'蛋炒饭', name_en:'Egg Fried Rice', name_ja:'チャーハン', name_ko:'볶음밥', name_fr:'Riz sauté aux oeufs', name_es:'Arroz frito con huevos' },
        { id:4, slug:'sweet-sour-pork', name_zh:'糖醋里脊', name_en:'Sweet and Sour Pork', name_ja:'酢豚', name_ko:'탕수육', name_fr:'Porc aigre-doux', name_es:'Cerdo agridulce' }
    ];

    let count = 0;
    recipes.forEach(r => {
        db.run('INSERT INTO recipes (id, slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [r.id, r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es],
            (err) => {
                if (err) console.error('Recipe error:', err);
                count++;
                if (count === recipes.length) insertLevels();
            }
        );
    });
}

function insertLevels() {
    const levels = [];
    
    // Kung Pao Chicken (1)
    levels.push({ recipe:1, level:1,
        ing_zh:'鸡胸肉200g,花生50g,葱2根,生抽2勺,白糖1勺',
        ing_en:'Chicken breast 200g, Peanuts 50g, Green onions 2, Light soy sauce 2tbsp, Sugar 1tbsp',
        ing_ja:'鶏胸肉200g,落花生50g,ネギ2本,薄口醤油2大さじ,砂糖1大さじ',
        ing_ko:'닭가슴살200g,땅콩50g,대파2개,간장2큰술,설탕1큰술',
        ing_fr:'Blanc de poulet 200g, Arachides 50g, Oignons verts 2, Sauce soja légère 2càs, Sucre 1càs',
        ing_es:'Pechuga de pollo 200g, Cacahuetes 50g, Cebollas verdes 2, Salsa soja clara 2cuch, Azúcar 1cuch',
        st_zh:'鸡胸肉洗净擦干，切成1.5cm见方的小丁|锅中放入2勺油，加热至中等温度|放入鸡丁，用锅铲翻炒约3分钟至颜色变白|加入2勺生抽和1勺白糖，快速翻炒均匀|放入花生，关火继续翻炒1分钟让花生变香|出锅装盘即可享用',
        st_en:'Wash and dry chicken, cut into 1.5cm cubes|Heat 2tbsp oil in pan over medium|Add chicken, stir fry ~3 mins until white|Add 2tbsp soy sauce and 1tbsp sugar, stir quickly|Add peanuts, turn off heat and stir 1 min|Serve',
        st_ja:'鶏肉洗い水切り、1.5cm角切り|フライパンに油2大さじ中火|鶏肉入れ約3分炒め白く|醤油2大さじと砂糖1大さじ入れ素早く|落花生入れ火止め1分炒め|盛り付け',
        st_ko:'닭가슴살 씻고 물기 닦아 1.5cm로 썰기|팬에 기름 2큰술 중불|닭고기 넣고 약3분 볶아 흰색|간장 2큰술과 설탕 1큰술 넣고 빠르게|땅콩 넣고 불 끄고 1분 볶아|접시에',
        st_fr:'Laver et sécher poulet, couper en cubes 1.5cm|Chauffer 2càs huile à feu moyen|Ajouter poulet, faire revenir ~3 mins jusqu\'à blanc|Ajouter 2càs soja et 1càs sucre, mélanger vite|Ajouter arachides, éteindre et mélanger 1 min|Servir',
        st_es:'Lavar y secar pollo, cortar en cubos 1.5cm|Calentar 2cuch aceite a fuego medio|Añadir pollo, freír ~3 mins hasta blanco|Añadir 2cuch soja y 1cuch azúcar, revolver rápido|Añadir cacahuetes, apagar y revolver 1 min|Servir',
        n_zh:'新手入门级，简单快手', n_en:'Beginners level, quick and easy',
        n_ja:'初心者向け簡単', n_ko:'초보자용 쉬움', n_fr:'Niveau débutant, rapide', n_es:'Nivel principiante, fácil'
    });
    levels.push({ recipe:1, level:2,
        ing_zh:'鸡胸肉250g,花生60g,干红辣椒3个,葱2根,姜3片,蒜3瓣,生抽2勺,料酒1勺,白糖1勺',
        ing_en:'Chicken breast 250g, Peanuts 60g, Dried chili 3, Green onions 2, Ginger 3, Garlic 3, Light soy sauce 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp',
        ing_ja:'鶏胸肉250g,落花生60g,乾燥唐辛子3本,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2大さじ,料理酒1大さじ,砂糖1大さじ',
        ing_ko:'닭가슴살250g,땅콩60g,말린고추3개,대파2개,생강3쪽,마늘3개,간장2큰술,요리술1큰술,설탕1큰술',
        ing_fr:'Blanc de poulet 250g, Arachides 60g, Piment sec 3, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2càs, Vin 1càs, Sucre 1càs',
        ing_es:'Pechuga de pollo 250g, Cacahuetes 60g, Chile seco 3, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2cuch, Vino 1cuch, Azúcar 1cuch',
        st_zh:'鸡胸肉洗净切丁，加料酒腌10分钟|葱切葱花，姜蒜切片，辣椒剪段|锅加油中火，炒香葱姜蒜辣椒|放入鸡肉大火快炒2分钟|加生抽和白糖翻炒均匀|最后加花生关火翻炒|装盘',
        st_en:'Wash and cut chicken, marinate with wine 10 mins|Chop green onions, slice ginger/garlic, cut chili|Heat oil medium, stir fry aromatics and chili|Add chicken high heat 2 mins|Add soy sauce and sugar, stir well|Add peanuts turn off heat and stir|Serve',
        st_ja:'鶏肉洗い切り酒で10分漬け|ネギ切り、ショウガニンニクスライス、唐辛子切る|油中火で香り炒め|鶏肉強火2分炒め|醤油と砂糖入れ混ぜ|最後に落花生火止め炒め|盛り付け',
        st_ko:'닭가슴살 씻고 썰어 요리술로10분 절이기|대파 썰고 생강마늘 썰고 고추 썰기|팬에 기름 중불 향기 내기|닭고기 강불2분 볶아|간장과 설탕 넣고 섞기|땅콩 넣고 불 끄고 볶아|접시에',
        st_fr:'Laver et couper poulet, mariner au vin 10 mins|Hacher oignons verts, couper gingembre/ail, couper piment|Chauffer huile moyen, faire revenir aromatiques/piment|Ajouter poulet feu fort 2 mins|Ajouter soja et sucre, mélanger|Ajouter arachides éteindre et mélanger|Servir',
        st_es:'Lavar y cortar pollo, marinar con vino 10 mins|Picar cebollas verdes, cortar jengibre/ajo, cortar chile|Calentar aceite medio, sofreír aromáticos/chile|Añadir pollo fuego fuerte 2 mins|Añadir soja y azúcar, mezclar|Añadir cacahuetes apagar y revolver|Servir',
        n_zh:'入门进阶，有香料加持', n_en:'Intermediate, with aromatics',
        n_ja:'中級、香り付き', n_ko:'중급 향신료', n_fr:'Intermédiaire, avec aromatiques', n_es:'Intermedio, con aromáticos'
    });
    levels.push({ recipe:1, level:3,
        ing_zh:'鸡胸肉300g,花生70g,干红辣椒5个,花椒1勺,葱白2段,姜4片,蒜4瓣,生抽2勺,老抽1勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺',
        ing_en:'Chicken breast 300g, Peanuts 70g, Dried chili 5, Sichuan pepper 1tbsp, White scallion 2, Ginger 4, Garlic 4, Light soy sauce 2tbsp, Dark soy sauce 1tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp',
        ing_ja:'鶏胸肉300g,落花生70g,乾燥唐辛子5本,山椒1大さじ,白ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油2大さじ,濃口醤油1大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ',
        ing_ko:'닭가슴살300g,땅콩70g,말린고추5개,산초1큰술,대파흰부2개,생강4쪽,마늘4개,간장2큰술,진간장1큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술',
        ing_fr:'Blanc de poulet 300g, Arachides 70g, Piment sec 5, Poivre du Sichuan 1càs, Oignon blanc 2, Gingembre 4, Ail 4, Sauce soja légère 2càs, Sauce soja noire 1càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs',
        ing_es:'Pechuga de pollo 300g, Cacahuetes 70g, Chile seco 5, Pimienta de Sichuan 1cuch, Cebolla blanca 2, Jengibre 4, Ajo 4, Salsa soja clara 2cuch, Salsa soja oscura 1cuch, Vino 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch',
        st_zh:'鸡胸肉去筋膜切1.5cm丁，加料酒淀粉抓匀腌15分钟|调碗汁：糖、醋、生抽、老抽混合均匀|花生先炸金黄捞出|锅留底油炸花椒香捞出|放辣椒炸微焦|下葱姜蒜大火爆香|放鸡肉大火快炒1分钟|倒碗汁翻炒裹匀|最后加花生翻炒装盘',
        st_en:'Trim chicken 1.5cm, marinate with wine/starch 15 mins|Mix sauce: sugar, vinegar, both soy|Fry peanuts first golden|Heat oil fry Sichuan pepper fragrant remove|Fry chili slightly charred|Stir fry aromatics high|Add chicken high 1 min|Add sauce coat well|Add peanuts stir and serve',
        st_ja:'鶏肉筋取り1.5cm切り酒片栗粉15分漬け|ソース混ぜ：砂糖、酢、両方醤油|落花生先に炒め|油で山椒炒め香り出し取る|唐辛子炒め|香り強火炒め|鶏肉強火1分|ソース入れ混ぜ|落花生入れ盛り付け',
        st_ko:'닭가슴살 힘줄 제거1.5cm切り요리술전분15分 절이기|소스 섞기：설탕、식초、양쪽 간장|땅콩先에 황금으로 볶아|기름으로 산초 볶아 향 내고 제거|고추 볶아 약간焦|향기 강불 볶아|닭고기 강불1分|소스 넣고 섞어|땅콩 넣고 접시에',
        st_fr:'Nettoyer poulet 1.5cm, mariner vin/fécule 15 mins|Mélanger sauce: sucre, vinaigre, deux sojas|Faire frire arachides d\'abord doré|Chauffer huile faire revenir poivre Sichuan parfumé retirer|Faire frire piment légèrement carbonisé|Faire revenir aromatiques feu fort|Ajouter poulet feu fort 1 min|Ajouter sauce mélanger bien|Ajouter arachides mélanger et servir',
        st_es:'Recortar pollo 1.5cm, marinar vino/almidón 15 mins|Mezclar salsa: azúcar, vinagre, dos sojas|Freír cacahuetes primero dorado|Calentar aceite freír pimienta Sichuan perfumado retirar|Freír chile ligeramente carbonizado|Sofreír aromáticos fuego fuerte|Añadir pollo fuego fuerte 1 min|Añadir salsa mezclar bien|Añadir cacahuetes revolver y servir',
        n_zh:'经典麻辣口味', n_en:'Classic spicy numbing',
        n_ja:'定番麻辣味', n_ko:'클래식 마라', n_fr:'Saveur épicée classique', n_es:'Sabor picante clásico'
    });
    levels.push({ recipe:1, level:4,
        ing_zh:'鸡胸肉350g,花生80g,干红辣椒6个,花椒1.5勺,葱白3段,姜5片,蒜5瓣,生抽2.5勺,老抽1.5勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1小勺,白胡椒1小勺',
        ing_en:'Chicken breast 350g, Peanuts 80g, Dried chili 6, Sichuan pepper 1.5tbsp, White scallion 3, Ginger 5, Garlic 5, Light soy sauce 2.5tbsp, Dark soy sauce 1.5tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1tsp, White pepper 1tsp',
        ing_ja:'鶏胸肉350g,落花生80g,乾燥唐辛子6本,山椒1.5大さじ,白ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油2.5大さじ,濃口醤油1.5大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1小さじ,白胡椒1小さじ',
        ing_ko:'닭가슴살350g,땅콩80g,말린고추6개,산초1.5큰술,대파흰부3개,생강5쪽,마늘5개,간장2.5큰술,진간장1.5큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1작은술,후추1작은술',
        ing_fr:'Blanc de poulet 350g, Arachides 80g, Piment sec 6, Poivre du Sichuan 1.5càs, Oignon blanc 3, Gingembre 5, Ail 5, Sauce soja légère 2.5càs, Sauce soja noire 1.5càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1càc, Poivre blanc 1càc',
        ing_es:'Pechuga de pollo 350g, Cacahuetes 80g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Cebolla blanca 3, Jengibre 5, Ajo 5, Salsa soja clara 2.5cuch, Salsa soja oscura 1.5cuch, Vino 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1cucharadita, Pimienta blanca 1cucharadita',
        st_zh:'鸡胸肉去筋膜切1.2cm丁，加料酒盐白胡椒淀粉抓匀腌20分钟|调精确碗汁：糖醋生抽老抽比例完美|花生炸酥脆|冷油下花椒小火炸1分钟香捞出|下辣椒炸暗红油亮|下葱姜蒜大火爆香30秒|滑入鸡肉大火快炒1分钟至变白|倒碗汁大火翻炒约1分钟裹匀|最后加花生和葱白快速翻炒10秒|立即出锅',
        st_en:'Trim chicken 1.2cm, marinate with wine/salt/pepper/starch 20 mins|Perfect sauce ratio|Fry peanuts crispy|Cold oil fry Sichuan pepper low 1min fragrant remove|Fry chili dark red shine|Stir fry aromatics high 30sec|Slide chicken high 1min to white|Add sauce high 1min coat|Add peanuts/white scallion quick 10sec|Serve immediately',
        st_ja:'鶏肉筋取り1.2cm切り酒塩白胡椒片栗粉20分漬け|完璧なソース比率|落花生カリカリ|冷たい油山椒弱火1分香り出し取る|唐辛子暗く赤く炒め|香り強火30秒|鶏肉滑り入れ強火1分白く|ソース入れ強火1分|最後に落花生と白ネギ10秒|すぐ盛り付け',
        st_ko:'닭가슴살 힘줄 제거1.2cm切り요리술소금후추전분20分 절이기|완벽한 소스 비율|땅콩 바삭바삭|차가운 기름 산초 약불1分 향 내고 제거|고추 어둡게 빨간색으로|향기 강불30秒|닭고기 슬라이드 강불1分 흰색|소스 넣고 강불1分|땅콩과 대파 빠르게10秒|즉시 접시에',
        st_fr:'Nettoyer poulet 1.2cm, mariner vin/sel/poivre/fécule 20 mins|Ratio sauce parfait|Faire frire arachides croustillantes|Huile froide faire revenir poivre Sichuan feu doux 1min parfumé retirer|Faire frire piment rouge brillant foncé|Faire revenir aromatiques feu fort 30sec|Glisser poulet feu fort 1min à blanc|Ajouter sauce feu fort 1min|Ajouter arachides/oignon blanc rapide 10sec|Servir immédiatement',
        st_es:'Recortar pollo 1.2cm, marinar vino/sal/pimienta/almidón 20 mins|Ratio salsa perfecta|Freír cacahuetes crujientes|Aceite frío freír pimienta Sichuan fuego suave 1min perfumada retirar|Freír chile rojo brillante oscuro|Sofreír aromáticos fuego fuerte 30seg|Deslizar pollo fuego fuerte 1min a blanco|Añadir salsa fuego fuerte 1min|Añadir cacahuetes/cebolla blanca rápida 10seg|Servir inmediatamente',
        n_zh:'正宗宫保，专业水准', n_en:'Authentic professional',
        n_ja:'本格カンパオプロ', n_ko:'정통 쿵파오 프로', n_fr:'Authentique professionnel', n_es:'Auténtico profesional'
    });
    levels.push({ recipe:1, level:5,
        ing_zh:'鸡胸肉400g,花生100g,干红辣椒8个,花椒2勺,葱白4段,姜6片,蒜6瓣,生抽3勺,老抽2勺,料酒3勺,醋2勺,白糖3勺,淀粉2.5勺,盐1.5小勺,白胡椒1.5小勺,香油1勺',
        ing_en:'Chicken breast 400g, Peanuts 100g, Dried chili 8, Sichuan pepper 2tbsp, White scallion 4, Ginger 6, Garlic 6, Light soy sauce 3tbsp, Dark soy sauce 2tbsp, Cooking wine 3tbsp, Vinegar 2tbsp, Sugar 3tbsp, Cornstarch 2.5tbsp, Salt 1.5tsp, White pepper 1.5tsp, Sesame oil 1tbsp',
        ing_ja:'鶏胸肉400g,落花生100g,乾燥唐辛子8本,山椒2大さじ,白ネギ4本,ショウガ6枚,ニンニク6個,薄口醤油3大さじ,濃口醤油2大さじ,料理酒3大さじ,酢2大さじ,砂糖3大さじ,片栗粉2.5大さじ,塩1.5小さじ,白胡椒1.5小さじ,ごま油1大さじ',
        ing_ko:'닭가슴살400g,땅콩100g,말린고추8개,산초2큰술,대파흰부4개,생강6쪽,마늘6개,간장3큰술,진간장2큰술,요리술3큰술,식초2큰술,설탕3큰술,전분2.5큰술,소금1.5작은술,후추1.5작은술,참기름1큰술',
        ing_fr:'Blanc de poulet 400g, Arachides 100g, Piment sec 8, Poivre du Sichuan 2càs, Oignon blanc 4, Gingembre 6, Ail 6, Sauce soja légère 3càs, Sauce soja noire 2càs, Vin 3càs, Vinaigre 2càs, Sucre 3càs, Fécule 2.5càs, Sel 1.5càc, Poivre blanc 1.5càc, Huile de sésame 1càs',
        ing_es:'Pechuga de pollo 400g, Cacahuetes 100g, Chile seco 8, Pimienta de Sichuan 2cuch, Cebolla blanca 4, Jengibre 6, Ajo 6, Salsa soja clara 3cuch, Salsa soja oscura 2cuch, Vino 3cuch, Vinagre 2cuch, Azúcar 3cuch, Almidón 2.5cuch, Sal 1.5cucharadita, Pimienta blanca 1.5cucharadita, Aceite de sésamo 1cuch',
        st_zh:'鸡胸肉去筋膜切1cm小丁，加料酒盐白胡椒淀粉少许油抓匀腌25分钟|调精确碗汁：糖醋生抽老抽完美比例加少许水|花生炸金黄酥脆|冷油下花椒小火炸1.5分钟香捞出|下辣椒段炸微焦|下肉末大火炒散出油|下葱姜蒜大火爆香30秒|滑入鸡肉大火快炒1分钟|倒碗汁大火翻炒约1分钟至浓稠|加炸花生|淋香油撒鸡精|快速翻炒10秒|立即关火出锅',
        st_en:'Trim chicken 1cm small, marinate with wine/salt/pepper/starch/little oil 25 mins|Perfect sauce ratio with little water|Fry peanuts golden crispy|Cold oil fry Sichuan pepper low 1.5min fragrant remove|Fry chili slightly charred|High heat fry aromatics 30sec|Slide chicken high 1min|Add sauce high 1min to thicken|Add fried peanuts|Drizzle sesame oil sprinkle bouillon|Quick stir 10sec|Turn off and serve immediately',
        st_ja:'鶏肉筋取り1cm小切り酒塩白胡椒片栗粉少し油で25分漬け|完璧なソース比率少し水|落花生黄金カリカリ|冷たい油山椒弱火1.5分香り出し取る|唐辛子少し焦|香り強火30秒|鶏肉滑り入れ強火1分|ソース入れ強火1分濃く|炒めた落花生入れ|ごま油垂らしブイヨン|10秒|すぐ火止め盛り付け',
        st_ko:'닭가슴살 힘줄 제거1cm小切り요리술소금후추전분약간 기름으로25分 절이기|완벽한 소스 비율 약간 물|땅콩 황금 바삭|차가운 기름 산초 약불1.5分 향 내고 제거|고추 약간焦|향기 강불30秒|닭고기 슬라이드 강불1分|소스 넣고 강불1分 걸쭉하게|볶은 땅콩 넣어|참기름 뿌려 스톡|10秒|즉시 불 끄고 접시에',
        st_fr:'Nettoyer poulet 1cm petit, mariner vin/sel/poivre/fécule/peu huile 25 mins|Ratio sauce parfait peu d\'eau|Faire frire arachides dorées croustillantes|Huile froide faire revenir poivre Sichuan feu doux 1.5min parfumé retirer|Faire frire piment légèrement carbonisé|Faire revenir aromatiques feu fort 30sec|Glisser poulet feu fort 1min|Ajouter sauce feu fort 1min à épaissir|Ajouter arachides frites|Verser huile de sésame saupoudrer bouillon|Mélanger rapide 10sec|Éteindre et servir immédiatement',
        st_es:'Recortar pollo 1cm pequeño, marinar vino/sal/pimienta/almidón/peu aceite 25 mins|Ratio salsa perfecta poco agua|Freír cacahuetes doradas crujientes|Aceite frío freír pimienta Sichuan fuego suave 1.5min perfumada retirar|Freír chile ligeramente carbonizado|Sofreír aromáticos fuego fuerte 30seg|Deslizar pollo fuego fuerte 1min|Añadir salsa fuego fuerte 1min a espesar|Añadir cacahuetes fritos|Rociar aceite de sésamo espolvorear caldo|Mezclar rápida 10seg|Apagar y servir inmediatamente',
        n_zh:'大师级宫保鸡丁，人间绝味', n_en:'Master level, heavenly flavor',
        n_ja:'マスター級、天国の味', n_ko:'마스터급, 천국 맛', n_fr:'Niveau maîtrise, divin', n_es:'Nivel maestro, sabor celestial'
    });
    
    // Mapo Tofu (2) - Quick version for demo, following same pattern
    for (let i = 1; i <= 5; i++) {
        levels.push({ recipe:2, level:i,
            ing_zh: `嫩豆腐${400+i*20}g,猪肉末${100+i*20}g,干红辣椒${i}个,花椒${i*0.3}勺,葱${i}根,姜${i+1}片,蒜${i+1}瓣,生抽${2+i*0.2}勺,豆瓣酱${i*0.5}勺,料酒${i*0.3}勺,醋${i*0.2}勺,白糖${1+i*0.2}勺,淀粉${i*0.3}勺${i>2?',盐1小勺':''}`,
            ing_en: `Soft tofu ${400+i*20}g, Minced pork ${100+i*20}g, Dried chili ${i}, Sichuan pepper ${i*0.3}tbsp, Green onions ${i}, Ginger ${i+1}, Garlic ${i+1}, Light soy sauce ${2+i*0.2}tbsp, Broad bean paste ${i*0.5}tbsp, Cooking wine ${i*0.3}tbsp, Vinegar ${i*0.2}tbsp, Sugar ${1+i*0.2}tbsp, Cornstarch ${i*0.3}tbsp${i>2?', Salt 1tsp':''}`,
            ing_ja: `柔らかい豆腐${400+i*20}g,豚ひき肉${100+i*20}g,乾燥唐辛子${i}本,山椒${i*0.3}大さじ,ネギ${i}本,ショウガ${i+1}枚,ニンニク${i+1}個,薄口醤油${2+i*0.2}大さじ,豆板醤${i*0.5}大さじ,料理酒${i*0.3}大さじ,酢${i*0.2}大さじ,砂糖${1+i*0.2}大さじ,片栗粉${i*0.3}大さじ${i>2?',塩1小さじ':''}`,
            ing_ko: `연한두부${400+i*20}g,돼지고기다진것${100+i*20}g,말린고추${i}개,산초${i*0.3}큰술,대파${i}개,생강${i+1}쪽,마늘${i+1}개,간장${2+i*0.2}큰술,된장고추장${i*0.5}큰술,요리술${i*0.3}큰술,식초${i*0.2}큰술,설탕${1+i*0.2}큰술,전분${i*0.3}큰술${i>2?',소금1작은술':''}`,
            ing_fr: `Tofu mou ${400+i*20}g, Viande hachée de porc ${100+i*20}g, Piment sec ${i}, Poivre du Sichuan ${i*0.3}càs, Oignons verts ${i}, Gingembre ${i+1}, Ail ${i+1}, Sauce soja légère ${2+i*0.2}càs, Pâte de fèves ${i*0.5}càs, Vin ${i*0.3}càs, Vinaigre ${i*0.2}càs, Sucre ${1+i*0.2}càs, Fécule ${i*0.3}càs${i>2?', Sel 1càc':''}`,
            ing_es: `Tofu suave ${400+i*20}g, Carne picada de cerdo ${100+i*20}g, Chile seco ${i}, Pimienta de Sichuan ${i*0.3}cuch, Cebollas verdes ${i}, Jengibre ${i+1}, Ajo ${i+1}, Salsa soja clara ${2+i*0.2}cuch, Pasta de habas ${i*0.5}cuch, Vino ${i*0.3}cuch, Vinagre ${i*0.2}cuch, Azúcar ${1+i*0.2}cuch, Almidón ${i*0.3}cuch${i>2?', Sal 1cucharadita':''}`,
            st_zh: '豆腐切2cm方块|锅加油中火|放肉末炒散|加豆瓣酱小火炒红油|放豆腐轻推|加调料|小火煮入味|勾芡撒葱花装盘',
            st_en: 'Cut tofu 2cm|Heat oil medium|Add minced pork break up|Add bean paste low fry red oil|Add tofu gently|Add seasonings|Low cook to infuse|Thicken sprinkle green onions serve',
            st_ja: '豆腐2cm切り|油中火|ひき肉炒め散らす|豆板醤弱火炒め赤い油|豆腐入れ優しく|調味料入れ|弱火煮込み|とろみネギ振り盛り付け',
            st_ko: '두부2cm 썰기|기름 중불|돼지고기 볶아 산개|된장고추장 약불 볶아 빨간 기름|두부 넣고 부드럽게|양념 넣고|약불 맛 배이게|걸쭉하게 대파 뿌려 접시에',
            st_fr: 'Couper tofu 2cm|Chauffer huile moyen|Ajouter viande hachée défaire|Ajouter pâte de fèves feu doux huile rouge|Ajouter tofu doucement|Ajouter assaisonnements|Feu doux infuser|Épaissir saupoudrer oignons verts servir',
            st_es: 'Cortar tofu 2cm|Calentar aceite medio|Añadir carne picada deshacer|Añadir pasta de habas fuego suave aceite rojo|Añadir tofu suavemente|Añadir condimentos|Feu suave infundir|Espesar espolvorear cebollas verdes servir',
            n_zh: `麻婆豆腐难度${i}级`, n_en: `Mapo Tofu difficulty ${i}`,
            n_ja: `マーボー豆腐難易度${i}`, n_ko: `마파두부 난이도${i}`, n_fr: `Tofu Mapo difficulté ${i}`, n_es: `Tofu Mapo dificultad ${i}`
        });
    }
    
    // Egg Fried Rice (3)
    for (let i = 1; i <= 5; i++) {
        levels.push({ recipe:3, level:i,
            ing_zh: `米饭${300+i*20}g,鸡蛋${2+i}个,胡萝卜${i>2?'50g':''}${i>3?'豌豆50g':''},葱${i}根,生抽${1+i*0.2}勺,料酒${i>1?'1勺':''},盐1小勺`,
            ing_en: `Cooked rice ${300+i*20}g, Eggs ${2+i}, Carrot ${i>2?'50g':''}${i>3?', Peas 50g':''}, Green onions ${i}, Light soy sauce ${1+i*0.2}tbsp, Cooking wine ${i>1?'1tbsp':''}, Salt 1tsp`,
            ing_ja: `ご飯${300+i*20}g,卵${2+i}個,ニンジン${i>2?'50g':''}${i>3?',グリーンピース50g':''},ネギ${i}本,薄口醤油${1+i*0.2}大さじ,料理酒${i>1?'1大さじ':''},塩1小さじ`,
            ing_ko: `밥${300+i*20}g,달걀${2+i}개,당근${i>2?'50g':''}${i>3?',완두콩50g':''},대파${i}개,간장${1+i*0.2}큰술,요리술${i>1?'1큰술':''},소금1작은술`,
            ing_fr: `Riz cuit ${300+i*20}g, Oeufs ${2+i}, Carotte ${i>2?'50g':''}${i>3?', Petits pois 50g':''}, Oignons verts ${i}, Sauce soja légère ${1+i*0.2}càs, Vin ${i>1?'1càs':''}, Sel 1càc`,
            ing_es: `Arroz cocido ${300+i*20}g, Huevos ${2+i}, Zanahoria ${i>2?'50g':''}${i>3?', Guisantes 50g':''}, Cebollas verdes ${i}, Salsa soja clara ${1+i*0.2}cuch, Vino ${i>1?'1cuch':''}, Sal 1cucharadita`,
            st_zh: '鸡蛋打散|锅放油炒散盛出|再加少许油|放米饭炒散|加调料|放鸡蛋翻炒|撒葱花装盘',
            st_en: 'Beat eggs|Heat oil scramble eggs set aside|Add little more oil|Add rice stir break apart|Add seasonings|Add eggs stir|Sprinkle green onions serve',
            st_ja: '卵割る|油で卵炒め取り出し|少し油足す|ご飯入れ炒め散らす|調味料入れ|卵入れ混ぜ|ネギ振り盛り付け',
            st_ko: '달걀 풀기|기름으로 달걀 볶아 내고|조금 기름 더 넣고|밥 넣고 볶아 산개|양념 넣고|달걀 넣고 섞어|대파 뿌려 접시에',
            st_fr: 'Battre oeufs|Chauffer huile brouiller oeufs mettre de côté|Ajouter peu plus d\'huile|Ajouter riz mélanger défaire|Ajouter assaisonnements|Ajouter oeufs mélanger|Saupoudrer oignons verts servir',
            st_es: 'Batir huevos|Calentar aceite revolver huevos poner aside|Añadir poco más aceite|Añadir arroz revolver deshacer|Añadir condimentos|Añadir huevos revolver|Espolvorear cebollas verdes servir',
            n_zh: `蛋炒饭难度${i}级`, n_en: `Fried Rice difficulty ${i}`,
            n_ja: `チャーハン難易度${i}`, n_ko: `볶음밥 난이도${i}`, n_fr: `Riz sauté difficulté ${i}`, n_es: `Arroz frito dificultad ${i}`
        });
    }
    
    // Sweet and Sour Pork (4)
    for (let i = 1; i <= 5; i++) {
        levels.push({ recipe:4, level:i,
            ing_zh: `猪里脊${250+i*20}g,白糖${3+i}勺,醋${2+i}勺,番茄酱${i}勺,盐${i*0.3}小勺${i>2?'胡萝卜50g,青椒50g':''}`,
            ing_en: `Pork tenderloin ${250+i*20}g, Sugar ${3+i}tbsp, Vinegar ${2+i}tbsp, Ketchup ${i}tbsp, Salt ${i*0.3}tsp${i>2?', Carrot 50g, Green bell pepper 50g':''}`,
            ing_ja: `豚ロース${250+i*20}g,砂糖${3+i}大さじ,酢${2+i}大さじ,ケチャップ${i}大さじ,塩${i*0.3}小さじ${i>2?',ニンジン50g,ピーマン50g':''}`,
            ing_ko: `돼지등심${250+i*20}g,설탕${3+i}큰술,식초${2+i}큰술,케찹${i}큰술,소금${i*0.3}작은술${i>2?',당근50g,청피망50g':''}`,
            ing_fr: `Filet de porc ${250+i*20}g, Sucre ${3+i}càs, Vinaigre ${2+i}càs, Ketchup ${i}càs, Sel ${i*0.3}càc${i>2?', Carotte 50g, Poivron vert 50g':''}`,
            ing_es: `Solomillo de cerdo ${250+i*20}g, Azúcar ${3+i}cuch, Vinagre ${2+i}cuch, Ketchup ${i}cuch, Sal ${i*0.3}cucharadita${i>2?', Zanahoria 50g, Pimiento verde 50g':''}`,
            st_zh: '猪肉切条腌入味|油炸金黄|调糖醋汁|炒汁收浓|放肉翻炒|撒葱花装盘',
            st_en: 'Cut pork strips marinate|Fry golden|Make sweet sour sauce|Simmer sauce to thicken|Add pork stir|Sprinkle green onions serve',
            st_ja: '豚肉切り漬け込み|油で黄金色炒め|酢豚ソース作り|ソース煮込みとろみ|豚肉入れ混ぜ|ネギ振り盛り付け',
            st_ko: '돼지고기 썰어 절이기|기름으로 황금색으로|탕수육 소스 만들기|소스 끓여 걸쭉하게|돼지고기 넣고 섞어|대파 뿌려 접시에',
            st_fr: 'Couper porc en bandes mariner|Faire frire doré|Faire sauce aigre-doux|Faire mijoter sauce à épaissir|Ajouter porc mélanger|Saupoudrer oignons verts servir',
            st_es: 'Cortar cerdo en tiras marinar|Freír dorado|Hacer salsa agridulce|Hacer hervir salsa a espesar|Añadir cerdo revolver|Espolvorear cebollas verdes servir',
            n_zh: `糖醋里脊难度${i}级`, n_en: `Sweet and Sour Pork difficulty ${i}`,
            n_ja: `酢豚難易度${i}`, n_ko: `탕수육 난이도${i}`, n_fr: `Porc aigre-doux difficulté ${i}`, n_es: `Cerdo agridulce dificultad ${i}`
        });
    }
    
    let levelCount = 0;
    levels.forEach(l => {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [l.recipe, l.level, l.ing_zh, l.ing_en, l.ing_ja, l.ing_ko, l.ing_fr, l.ing_es, l.st_zh, l.st_en, l.st_ja, l.st_ko, l.st_fr, l.st_es, l.n_zh, l.n_en, l.n_ja, l.n_ko, l.n_fr, l.n_es],
            (err) => {
                if (err) console.error('Level error:', err);
                levelCount++;
                if (levelCount === levels.length) verifyData();
            }
        );
    });
}

function verifyData() {
    db.all('SELECT * FROM recipes', (err, recipes) => {
        if (err) console.error('Error:', err);
        else console.log('Recipes:', recipes.length);
        
        db.all('SELECT * FROM levels', (err, levels) => {
            if (err) console.error('Error:', err);
            else console.log('Levels:', levels.length);
            
            db.close(() => console.log('Done! Database initialized successfully!'));
        });
    });
}
