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

    let rc = 0;
    recipes.forEach(r => {
        db.run('INSERT INTO recipes (id, slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [r.id, r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es],
            (err) => {
                if (err) console.error('Recipe error:', err);
                rc++;
                if (rc === recipes.length) {
                    insertAllLevels();
                }
            }
        );
    });
}

function insertAllLevels() {
    const levels = [
        { recipe:1, level:1,
            ing_zh:'鸡胸肉200g,花生米50g,葱花2根,生抽2勺,白糖1勺',
            ing_en:'Chicken breast 200g, Peanuts 50g, Green onions 2, Light soy sauce 2tbsp, Sugar 1tbsp',
            ing_ja:'鶏胸肉200g,落花生50g,ネギ2本,薄口醤油2大さじ,砂糖1大さじ',
            ing_ko:'닭가슴살200g,땅콩50g,대파2개,간장2큰술,설탕1큰술',
            ing_fr:'Blanc de poulet 200g, Arachides 50g, Oignons verts 2, Sauce soja légère 2càs, Sucre 1càs',
            ing_es:'Pechuga de pollo 200g, Cacahuetes 50g, Cebollas verdes 2, Salsa soja clara 2cuch, Azúcar 1cuch',
            st_zh:'鸡胸肉洗净擦干切小方块,锅加油中火加热,放入鸡肉炒约3分钟至变白,加入生抽和白糖快速翻炒,放入花生关火翻炒几下,装盘即可',
            st_en:'Wash/dry chicken, cut small cubes, heat oil in pan over medium, stir fry chicken ~3 mins until white, add soy sauce & sugar, stir quickly, add peanuts, turn off heat & stir, serve',
            st_ja:'鶏肉洗い水切り小さく切る,フライパンに油中火に熱する,鶏肉入れ約3分炒め白くする,醤油と砂糖入れ素早く炒める,落花生入れ火止め炒める,盛り付ける',
            st_ko:'닭가슴살 씻고 물기 닦아 작게 썰기, 팬에 기름 중불로 달구기, 닭고기 넣고 약3분 볶아 흰색으로, 간장과 설탕 넣고 빠르게 볶기, 땅콩 넣고 불 끄고 볶기, 접시에 담기',
            st_fr:'Laver/sécher poulet, couper petits cubes, chauffer huile à feu moyen, faire revenir poulet ~3 mins jusqu\'à blanc, ajouter sauce soja & sucre, mélanger vite, ajouter arachides, éteindre & mélanger, servir',
            st_es:'Lavar/secar pollo, cortar cubos pequeños, calentar aceite a fuego medio, freír pollo ~3 mins hasta blanco, agregar salsa soja & azúcar, revolver rápido, agregar cacahuetes, apagar & revolver, servir',
            n_zh:'新手入门级，简单快手', n_en:'Beginners level, quick & easy',
            n_ja:'初心者向け簡単', n_ko:'초보자용 쉬움', n_fr:'Niveau débutant, rapide & facile', n_es:'Nivel principiante, rápido y fácil'
        },
        { recipe:1, level:2,
            ing_zh:'鸡胸肉250g,花生米60g,干红辣椒3个,葱花2根,姜片3片,蒜3瓣,生抽2勺,料酒1勺,白糖1勺',
            ing_en:'Chicken breast 250g, Peanuts 60g, Dried chili 3, Green onions 2, Ginger 3, Garlic 3, Light soy sauce 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp',
            ing_ja:'鶏胸肉250g,落花生60g,乾燥唐辛子3本,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2大さじ,料理酒1大さじ,砂糖1大さじ',
            ing_ko:'닭가슴살250g,땅콩60g,말린고추3개,대파2개,생강3쪽,마늘3개,간장2큰술,요리술1큰술,설탕1큰술',
            ing_fr:'Blanc de poulet 250g, Arachides 60g, Piment sec 3, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2càs, Vin de cuisine 1càs, Sucre 1càs',
            ing_es:'Pechuga de pollo 250g, Cacahuetes 60g, Chile seco 3, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2cuch, Vino de cocina 1cuch, Azúcar 1cuch',
            st_zh:'鸡胸肉洗净切丁加料酒腌10分钟,葱切葱花,姜蒜切片,辣椒剪段,锅加油中火炒香葱姜蒜辣椒,放入鸡肉大火快炒2分钟,加生抽和白糖翻炒均匀,最后加花生关火翻炒,装盘',
            st_en:'Wash/cut chicken, marinate with wine 10 mins, chop green onions, slice ginger/garlic, cut chili, heat oil medium, stir fry aromatics/chili, add chicken high heat 2 mins, add soy sauce/sugar, add peanuts, turn off & serve',
            st_ja:'鶏肉洗い切り酒で10分漬ける,ネギ切る,ショウガ・ニンニク切る,唐辛子切る,フライパン油中火で香り出す,鶏肉強火で2分炒める,醤油と砂糖入れ炒める,落花生入れ火止め炒め盛り付け',
            st_ko:'닭가슴살 씻고 썰어 요리술로10분 절이기, 대파 썰고, 생강·마늘 썰고, 고추 썰기, 팬에 기름 중불로 향 내기, 닭고기 강불로2분 볶기, 간장과 설탕 넣고 볶기, 땅콩 넣고 불 끄고 볶아 접시에',
            st_fr:'Laver/couper poulet, mariner au vin 10 mins, hacher oignons verts, couper gingembre/ail, couper piment, chauffer huile moyen, faire revenir aromatiques/piment, ajouter poulet feu fort 2 mins, ajouter soja/sucre, ajouter arachides, éteindre & servir',
            st_es:'Lavar/cortar pollo, marinar con vino 10 mins, picar cebollas verdes, cortar jengibre/ajo, cortar chile, calentar aceite medio, sofreír aromáticos/chile, agregar pollo fuego fuerte 2 mins, agregar soja/azúcar, agregar cacahuetes, apagar & servir',
            n_zh:'入门进阶版，有香料加持', n_en:'Intermediate, added aromatics',
            n_ja:'中級、香り付き', n_ko:'중급, 향신료 추가', n_fr:'Intermédiaire, avec aromatiques', n_es:'Intermedio, con aromáticos'
        },
        { recipe:1, level:3,
            ing_zh:'鸡胸肉300g,花生米70g,干红辣椒5个,花椒1勺,葱白2段,姜4片,蒜4瓣,生抽2勺,老抽1勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺',
            ing_en:'Chicken breast 300g, Peanuts 70g, Dried chili 5, Sichuan pepper 1tbsp, White scallion 2, Ginger 4, Garlic 4, Light soy sauce 2tbsp, Dark soy sauce 1tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp',
            ing_ja:'鶏胸肉300g,落花生70g,乾燥唐辛子5本,山椒1大さじ,白ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油2大さじ,濃口醤油1大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ',
            ing_ko:'닭가슴살300g,땅콩70g,말린고추5개,산초1큰술,대파흰부2개,생강4쪽,마늘4개,간장2큰술,진간장1큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술',
            ing_fr:'Blanc de poulet 300g, Arachides 70g, Piment sec 5, Poivre du Sichuan 1càs, Oignon blanc 2, Gingembre 4, Ail 4, Sauce soja légère 2càs, Sauce soja noire 1càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs',
            ing_es:'Pechuga de pollo 300g, Cacahuetes 70g, Chile seco 5, Pimienta de Sichuan 1cuch, Cebolla blanca 2, Jengibre 4, Ajo 4, Salsa soja clara 2cuch, Salsa soja oscura 1cuch, Vino 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch',
            st_zh:'鸡胸肉去筋膜切1.5cm丁,加料酒淀粉抓匀腌15分钟,调碗汁:糖、醋、生抽、老抽混合,花生先炸金黄捞出,锅留底油炸花椒出香捞去,放辣椒炸微焦,下葱姜蒜大火爆香,放鸡肉大火快炒1分钟,倒碗汁翻炒裹匀,最后加花生翻炒装盘',
            st_en:'Trim chicken cut 1.5cm, marinate with wine/starch 15 mins, mix sauce: sugar, vinegar, both soy, fry peanuts first golden, heat oil fry Sichuan pepper fragrant remove, fry chili slightly charred, stir fry aromatics high heat, add chicken high 1min, add sauce mix well, add peanuts serve',
            st_ja:'鶏肉筋取り1.5cm切り酒・片栗粉で15分漬ける,ソース:砂糖・酢・両方醤油混ぜる,落花生先に炒めおく,油熱し山椒炒め香り出し取る,唐辛子少し焦げ炒める,香り強火で炒める,鶏肉強火1分炒める,ソース入れ混ぜる,落花生入れ盛り付け',
            st_ko:'닭가슴살 힘줄 제거1.5cm切り요리술·전분으로15分절이기,소스:설탕·식초·양쪽간장섞기,땅콩먼저황금색으로볶아놓기,기름열고산초볶아향내고제거,고추약간焦가지볶기,향강불로볶기,닭고기강불1分볶기,소스넣고섞기,땅콩넣고접시에',
            st_fr:'Nettoyer poulet couper 1.5cm, mariner vin/fécule 15 mins, mélanger sauce: sucre, vinaigre, deux sojas, faire frire arachides d\'abord doré, chauffer huile faire revenir poivre Sichuan parfumé retirer, faire frire piment légèrement carbonisé, faire revenir aromatiques feu fort, ajouter poulet feu fort 1min, ajouter sauce mélanger bien, ajouter arachides servir',
            st_es:'Recortar pollo cortar 1.5cm, marinar con vino/almidón 15 mins, mezclar salsa: azúcar, vinagre, dos sojas, freír cacahuetes primero dorado, calentar aceite freír pimienta Sichuan perfumada retirar, freír chile ligeramente carbonizado, sofreír aromáticos fuego fuerte, agregar pollo fuego fuerte 1min, agregar salsa mezclar bien, agregar cacahuetes servir',
            n_zh:'经典麻辣口味', n_en:'Classic spicy numbing flavor',
            n_ja:'定番麻辣味', n_ko:'클래식 마라맛', n_fr:'Saveur épicée classique', n_es:'Sabor picante clásico'
        },
        { recipe:1, level:4,
            ing_zh:'鸡胸肉350g,花生米80g,干红辣椒6个,花椒1.5勺,葱白3段,姜5片,蒜5瓣,生抽2.5勺,老抽1.5勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1小勺,白胡椒粉1小勺',
            ing_en:'Chicken breast 350g, Peanuts 80g, Dried chili 6, Sichuan pepper 1.5tbsp, White scallion 3, Ginger 5, Garlic 5, Light soy sauce 2.5tbsp, Dark soy sauce 1.5tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1tsp, White pepper 1tsp',
            ing_ja:'鶏胸肉350g,落花生80g,乾燥唐辛子6本,山椒1.5大さじ,白ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油2.5大さじ,濃口醤油1.5大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1小さじ,白胡椒1小さじ',
            ing_ko:'닭가슴살350g,땅콩80g,말린고추6개,산초1.5큰술,대파흰부3개,생강5쪽,마늘5개,간장2.5큰술,진간장1.5큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1작은술,후추1작은술',
            ing_fr:'Blanc de poulet 350g, Arachides 80g, Piment sec 6, Poivre du Sichuan 1.5càs, Oignon blanc 3, Gingembre 5, Ail 5, Sauce soja légère 2.5càs, Sauce soja noire 1.5càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1càc, Poivre blanc 1càc',
            ing_es:'Pechuga de pollo 350g, Cacahuetes 80g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Cebolla blanca 3, Jengibre 5, Ajo 5, Salsa soja clara 2.5cuch, Salsa soja oscura 1.5cuch, Vino 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1cucharadita, Pimienta blanca 1cucharadita',
            st_zh:'鸡胸肉去筋膜切1.2cm丁,加料酒盐白胡椒淀粉抓匀腌20分钟,调精确碗汁:糖醋生抽老抽按完美比例,花生炸酥脆,冷油下花椒小火炸1分钟香捞去,下辣椒炸暗红油亮,下葱姜蒜大火爆香30秒,滑入鸡肉大火快炒1分钟至变白,倒碗汁大火翻炒约1分钟裹匀,最后加花生和葱白快速翻炒10秒,立即出锅',
            st_en:'Trim chicken cut 1.2cm, marinate with wine/salt/pepper/starch 20 mins, make perfect sauce ratio, fry peanuts crispy, cold oil fry Sichuan pepper low 1min fragrant remove, fry chili dark red shine, stir fry aromatics high 30sec, slide chicken high 1min to white, add sauce high 1min to coat, add peanuts/white scallion quick 10sec, serve immediately',
            st_ja:'鶏肉筋取り1.2cm切り酒・塩・白胡椒・片栗粉で20分漬ける,完璧なソース比率作る,落花生カリカリに炒める,冷たい油に山椒弱火で1分炒め香り出し取る,唐辛子暗い赤く炒める,香り強火30秒炒める,鶏肉滑り入れ強火1分炒め白く,ソース入れ強火1分絡める,最後に落花生と白ネギ10秒だけ炒めすぐ盛り付け',
            st_ko:'닭가슴살 힘줄 제거1.2cm切り요리술·소금·후추·전분으로20分절이기,완벽한소스비율만들기,땅콩바삭하게볶기,차가운기름에산초약불1分볶아향내고제거,고추어두운붉은색으로볶기,향강불30초볶기,닭고기슬라이드강불1分볶아흰색으로,소스넣고강불1分絡める,마지막에땅콩과대파10秒만볶아즉시접시에',
            st_fr:'Nettoyer poulet couper 1.2cm, mariner avec vin/sel/poivre/fécule 20 mins, faire ratio sauce parfait, faire frire arachides croustillantes, huile froide faire revenir poivre Sichuan feu doux 1min parfumé retirer, faire frire piment rouge brillant foncé, faire revenir aromatiques feu fort 30sec, glisser poulet feu fort 1min à blanc, ajouter sauce feu fort 1min à enrober, ajouter arachides/oignon blanc rapide 10sec, servir immédiatement',
            st_es:'Recortar pollo cortar 1.2cm, marinar con vino/sal/pimienta/almidón 20 mins, hacer ratio salsa perfecto, freír cacahuetes crujientes, aceite frío freír pimienta Sichuan fuego suave 1min perfumada retirar, freír chile rojo brillante oscuro, sofreír aromáticos fuego fuerte 30seg, deslizar pollo fuego fuerte 1min a blanco, agregar salsa fuego fuerte 1min a enrobar, agregar cacahuetes/cebolla blanca rápida 10seg, servir inmediatamente',
            n_zh:'正宗宫保，专业水准', n_en:'Authentic Kung Pao, professional level',
            n_ja:'本格カンパオ、プロ級', n_ko:'정통 쿵파오, 프로 수준', n_fr:'Kung Pao authentique, niveau professionnel', n_es:'Kung Pao auténtico, nivel profesional'
        },
        { recipe:1, level:5,
            ing_zh:'鸡胸肉400g,花生米100g,干红辣椒8个,花椒2勺,葱白4段,姜6片,蒜6瓣,生抽3勺,老抽2勺,料酒3勺,醋2勺,白糖3勺,淀粉2.5勺,盐1.5小勺,白胡椒粉1.5小勺,香油1勺,鸡精1小勺',
            ing_en:'Chicken breast 400g, Peanuts 100g, Dried chili 8, Sichuan pepper 2tbsp, White scallion 4, Ginger 6, Garlic 6, Light soy sauce 3tbsp, Dark soy sauce 2tbsp, Cooking wine 3tbsp, Vinegar 2tbsp, Sugar 3tbsp, Cornstarch 2.5tbsp, Salt 1.5tsp, White pepper 1.5tsp, Sesame oil 1tbsp, Chicken bouillon 1tsp',
            ing_ja:'鶏胸肉400g,落花生100g,乾燥唐辛子8本,山椒2大さじ,白ネギ4本,ショウガ6枚,ニンニク6個,薄口醤油3大さじ,濃口醤油2大さじ,料理酒3大さじ,酢2大さじ,砂糖3大さじ,片栗粉2.5大さじ,塩1.5小さじ,白胡椒1.5小さじ,ごま油1大さじ,チキンブイヨン1小さじ',
            ing_ko:'닭가슴살400g,땅콩100g,말린고추8개,산초2큰술,대파흰부4개,생강6쪽,마늘6개,간장3큰술,진간장2큰술,요리술3큰술,식초2큰술,설탕3큰술,전분2.5큰술,소금1.5작은술,후추1.5작은술,참기름1큰술,치킨스톡1작은술',
            ing_fr:'Blanc de poulet 400g, Arachides 100g, Piment sec 8, Poivre du Sichuan 2càs, Oignon blanc 4, Gingembre 6, Ail 6, Sauce soja légère 3càs, Sauce soja noire 2càs, Vin 3càs, Vinaigre 2càs, Sucre 3càs, Fécule 2.5càs, Sel 1.5càc, Poivre blanc 1.5càc, Huile de sésame 1càs, Bouillon de poulet 1càc',
            ing_es:'Pechuga de pollo 400g, Cacahuetes 100g, Chile seco 8, Pimienta de Sichuan 2cuch, Cebolla blanca 4, Jengibre 6, Ajo 6, Salsa soja clara 3cuch, Salsa soja oscura 2cuch, Vino 3cuch, Vinagre 2cuch, Azúcar 3cuch, Almidón 2.5cuch, Sal 1.5cucharadita, Pimienta blanca 1.5cucharadita, Aceite de sésamo 1cuch, Caldo de pollo 1cucharadita',
            st_zh:'鸡胸肉去筋膜切1cm小丁,加料酒盐白胡椒粉淀粉少许油抓匀腌25分钟,调精确碗汁:糖醋生抽老抽完美比例加少许水,花生炸金黄酥脆,冷油下花椒小火炸1.5分钟香捞去,下辣椒炸暗红油亮,下葱姜蒜大火爆香30秒,滑入鸡肉大火快炒1分钟,倒碗汁大火翻炒约1分钟至浓稠,加炸花生,淋香油撒鸡精,快速翻炒10秒,立即关火出锅!',
            st_en:'Trim chicken cut 1cm small, marinate with wine/salt/pepper/starch/little oil 25 mins, make perfect sauce ratio with little water, fry peanuts golden crispy, cold oil fry Sichuan pepper low 1.5min fragrant remove, fry chili dark red shine, stir fry aromatics high 30sec, slide chicken high 1min, add sauce high 1min to thicken, add fried peanuts, drizzle sesame oil sprinkle bouillon, quick stir 10sec, turn off serve immediately!',
            st_ja:'鶏肉筋取り1cm小さく切り酒・塩・白胡椒・片栗粉・少し油で25分漬ける,完璧なソース比率少し水を加えて作る,落花生黄金カリカリに炒める,冷たい油に山椒弱火で1.5分炒め香り出し取る,唐辛子暗い赤く炒める,香り強火30秒炒める,鶏肉滑り入れ強火1分炒める,ソース入れ強火1分濃くなるまで炒める,炒めた落花生入れ,ごま油垂らしブイヨン振る,10秒だけ炒めすぐ火止め盛り付け!',
            st_ko:'닭가슴살 힘줄 제거1cm 작게切り요리술·소금·후추·전분·약간기름으로25分절이기,완벽한소스비율약간물가해서만들기,땅콩황금바삭하게볶기,차가운기름에산초약불1.5分볶아향내고제거,고추어두운붉은색으로볶기,향강불30초볶기,닭고기슬라이드강불1分볶기,소스넣고강불1分농후하게될때까지볶기,볶은땅콩넣고,참기름뿌리고스톡뿌리기,10秒만볶아즉시불끄고접시에!',
            st_fr:'Nettoyer poulet couper 1cm petit, mariner avec vin/sel/poivre/fécule/peu d\'huile 25 mins, faire ratio sauce parfait avec peu d\'eau, faire frire arachides dorées croustillantes, huile froide faire revenir poivre Sichuan feu doux 1.5min parfumé retirer, faire frire piment rouge brillant foncé, faire revenir aromatiques feu fort 30sec, glisser poulet feu fort 1min, ajouter sauce feu fort 1min jusqu\'à épaissir, ajouter arachides frites, verser huile de sésame saupoudrer bouillon, mélanger rapide 10sec, éteindre servir immédiatement!',
            st_es:'Recortar pollo cortar 1cm pequeño, marinar con vino/sal/pimienta/almidón/poco aceite 25 mins, hacer ratio salsa perfecto con poco agua, freír cacahuetes dorados crujientes, aceite frío freír pimienta Sichuan fuego suave 1.5min perfumada retirar, freír chile rojo brillante oscuro, sofreír aromáticos fuego fuerte 30seg, deslizar pollo fuego fuerte 1min, agregar salsa fuego fuerte 1min hasta espesar, agregar cacahuetes fritos, rociar aceite de sésamo espolvorear caldo, mezclar rápida 10seg, apagar servir inmediatamente!',
            n_zh:'大师级宫保鸡丁，人间绝味!', n_en:'Master level Kung Pao, heavenly flavor!',
            n_ja:'マスター級カンパオチキン、天国の味!', n_ko:'마스터급 쿵파오 치킨, 천국 맛!', n_fr:'Poulet Kung Pao niveau maîtrise, goût divin!', n_es:'Pollo Kung Pao nivel maestro, sabor celestial!'
        },
        { recipe:2, level:1,
            ing_zh:'嫩豆腐400g,猪肉末100g,生抽2勺,白糖1勺',
            ing_en:'Soft tofu 400g, Minced pork 100g, Light soy sauce 2tbsp, Sugar 1tbsp',
            ing_ja:'柔らかい豆腐400g,豚ひき肉100g,薄口醤油2大さじ,砂糖1大さじ',
            ing_ko:'연한두부400g,돼지고기다진것100g,간장2큰술,설탕1큰술',
            ing_fr:'Tofu mou 400g, Viande hachée de porc 100g, Sauce soja légère 2càs, Sucre 1càs',
            ing_es:'Tofu suave 400g, Carne picada de cerdo 100g, Salsa soja clara 2cuch, Azúcar 1cuch',
            st_zh:'豆腐切2cm方块,锅加油中火,放肉末炒散约2分钟至变色,放豆腐轻轻推动,加生抽和白糖,小火煮2分钟入味,轻轻翻匀装盘',
            st_en:'Cut tofu 2cm cubes, heat oil medium, add minced pork break up ~2 mins to color change, add tofu gently push, add soy sauce/sugar, low heat 2 mins to infuse, gently mix serve',
            st_ja:'豆腐2cm角切る,フライパン油中火,ひき肉入れ炒め約2分色変わる,豆腐入れ優しく押す,醤油と砂糖入れる,弱火2分味しみる,優しく混ぜ盛り付け',
            st_ko:'두부2cm 썰기, 팬에 기름 중불, 돼지고기 다진 것 넣고 볶아 약2분 색 바뀜, 두부 넣고 부드럽게 밀기, 간장과 설탕 넣기, 약불 2분 맛 배이게, 부드럽게 섞어 담기',
            st_fr:'Couper tofu cubes 2cm, chauffer huile moyen, ajouter viande hachée défaire ~2 mins changement couleur, ajouter tofu pousser doucement, ajouter soja/sucre, feu doux 2 mins infuser, mélanger doucement servir',
            st_es:'Cortar tofu cubos 2cm, calentar aceite medio, agregar carne picada deshacer ~2 mins cambio color, agregar tofu empujar suavemente, agregar soja/azúcar, fuego suave 2 mins infundir, mezclar suavemente servir',
            n_zh:'新手入门级麻婆', n_en:'Beginners level Mapo',
            n_ja:'初心者向けマーボー', n_ko:'초보자용 마파', n_fr:'Mapo niveau débutant', n_es:'Mapo nivel principiante'
        },
        { recipe:2, level:2,
            ing_zh:'嫩豆腐400g,猪肉末150g,葱花2根,姜片2片,蒜2瓣,生抽2勺,豆瓣酱1勺,白糖1勺',
            ing_en:'Soft tofu 400g, Minced pork 150g, Green onions 2, Ginger 2, Garlic 2, Light soy sauce 2tbsp, Broad bean paste 1tbsp, Sugar 1tbsp',
            ing_ja:'柔らかい豆腐400g,豚ひき肉150g,ネギ2本,ショウガ2枚,ニンニク2個,薄口醤油2大さじ,豆板醤1大さじ,砂糖1大さじ',
            ing_ko:'연한두부400g,돼지고기다진것150g,대파2개,생강2쪽,마늘2개,간장2큰술,된장고추장1큰술,설탕1큰술',
            ing_fr:'Tofu mou 400g, Viande hachée de porc 150g, Oignons verts 2, Gingembre 2, Ail 2, Sauce soja légère 2càs, Pâte de fèves 1càs, Sucre 1càs',
            ing_es:'Tofu suave 400g, Carne picada de cerdo 150g, Cebollas verdes 2, Jengibre 2, Ajo 2, Salsa soja clara 2cuch, Pasta de habas 1cuch, Azúcar 1cuch',
            st_zh:'豆腐切2cm开水焯2分钟沥干,葱姜蒜切末,锅加油炒香葱姜蒜,放肉末炒散出油,加豆瓣酱小火炒红油,放豆腐轻推,加生抽白糖少许水,小火煮3分钟,撒葱花装盘',
            st_en:'Cut tofu 2cm blanch in boiling water 2 mins drain, mince green onions/ginger/garlic, heat oil stir fry aromatics, add minced pork cook until oil comes out, add bean paste low fry red oil, add tofu gently push, add soy sauce/sugar/little water, low 3 mins, sprinkle green onions serve',
            st_ja:'豆腐2cm切り熱湯で2分ゆで水切る,ネギ・ショウガ・ニンニクみじん切り,フライパン油で香り出す,ひき肉入れ炒め油出るまで,豆板醤弱火で炒め赤い油,豆腐入れ優しく押す,醤油・砂糖・少し水,弱火3分,ネギ振って盛り付け',
            st_ko:'두부2cm 썰고 끓는 물에2分 데치고 물기 빼기, 대파·생강·마늘 다지기, 팬에 기름으로 향 내기, 돼지고기 다진 것 넣고 볶아 기름 나올 때까지, 된장고추장 약불로 볶아 빨간 기름, 두부 넣고 부드럽게 밀기, 간장·설탕·약간 물, 약불3분, 대파 뿌려 담기',
            st_fr:'Couper tofu 2cm blanchir dans eau bouillante 2 mins égoutter, hacher oignons verts/gingembre/ail, chauffer huile faire revenir aromatiques, ajouter viande hachée cuisiner jusqu\'à l\'huile, ajouter pâte de fèves feu doux pour huile rouge, ajouter tofu pousser doucement, ajouter soja/sucre/peu d\'eau, feu doux 3 mins, saupoudrer oignons verts servir',
            st_es:'Cortar tofu 2cm escaldar en agua hirviendo 2 mins escurrir, picar cebollas verdes/jengibre/ajo, calentar aceite sofreír aromáticos, agregar carne picada cocinar hasta que salga aceite, agregar pasta de habas fuego suave para aceite rojo, agregar tofu empujar suavemente, agregar soja/azúcar/poco agua, fuego suave 3 mins, espolvorear cebollas verdes servir',
            n_zh:'入门进阶，有豆瓣酱', n_en:'Intermediate, with bean paste',
            n_ja:'中級、豆板醤入り', n_ko:'중급, 된장고추장 추가', n_fr:'Intermédiaire, avec pâte de fèves', n_es:'Intermedio, con pasta de habas'
        },
        { recipe:2, level:3,
            ing_zh:'嫩豆腐450g,猪肉末200g,干红辣椒4个,花椒1勺,葱花2根,姜3片,蒜3瓣,生抽2.5勺,豆瓣酱2勺,料酒1勺,白糖1勺,淀粉1勺',
            ing_en:'Soft tofu 450g, Minced pork 200g, Dried chili 4, Sichuan pepper 1tbsp, Green onions 2, Ginger 3, Garlic 3, Light soy sauce 2.5tbsp, Broad bean paste 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp, Cornstarch 1tbsp',
            ing_ja:'柔らかい豆腐450g,豚ひき肉200g,乾燥唐辛子4本,山椒1大さじ,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2.5大さじ,豆板醤2大さじ,料理酒1大さじ,砂糖1大さじ,片栗粉1大さじ',
            ing_ko:'연한두부450g,돼지고기다진것200g,말린고추4개,산초1큰술,대파2개,생강3쪽,마늘3개,간장2.5큰술,된장고추장2큰술,요리술1큰술,설탕1큰술,전분1큰술',
            ing_fr:'Tofu mou 450g, Viande hachée de porc 200g, Piment sec 4, Poivre du Sichuan 1càs, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2.5càs, Pâte de fèves 2càs, Vin de cuisine 1càs, Sucre 1càs, Fécule 1càs',
            ing_es:'Tofu suave 450g, Carne picada de cerdo 200g, Chile seco 4, Pimienta de Sichuan 1cuch, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2.5cuch, Pasta de habas 2cuch, Vino de cocina 1cuch, Azúcar 1cuch, Almidón 1cuch',
            st_zh:'豆腐切2cm淡盐水焯3分钟沥干,肉末加料酒淀粉抓匀,辣椒剪段,锅加油先炸花椒辣椒香捞去,下肉末大火炒散出油,加豆瓣酱小火炒红油,下葱姜蒜炒香,加小半碗水,下豆腐轻推,加生抽白糖,小火煮3分钟,淋淀粉水勾芡,撒葱花装盘',
            st_en:'Cut tofu 2cm blanch light salt water 3 mins drain, marinate minced pork with wine/starch, cut chili, heat oil fry Sichuan pepper/chili fragrant remove, add minced pork high heat until oil out, add bean paste low fry red oil, stir fry aromatics, add little more than half water, add tofu gently push, add soy sauce/sugar, low 3 mins, starch slurry thicken, sprinkle green onions serve',
            st_ja:'豆腐2cm切り薄い塩水で3分ゆで水切る,ひき肉酒・片栗粉混ぜる,唐辛子切る,フライパン油で山椒・唐辛子炒め香り出し取る,ひき肉強火で炒め油出るまで,豆板醤弱火で炒め赤い油,香り炒める,半分以上水入れる,豆腐入れ優しく押す,醤油・砂糖,弱火3分,片栗粉水でとろみ,ネギ振って盛り付け',
            st_ko:'두부2cm 썰고 옅은 소금물에3分 데치고 물기 빼기, 돼지고기 요리술·전분 섞기, 고추 썰기, 팬에 기름으로 산초·고추 볶아 향 내고 제거, 돼지고기 강불로 볶아 기름 나올 때까지, 된장고추장 약불로 볶아 빨간 기름, 향 볶기, 반분 이상 물 넣기, 두부 넣고 부드럽게 밀기, 간장·설탕, 약불3分, 전분 물로 걸쭉, 대파 뿌려 담기',
            st_fr:'Couper tofu 2cm blanchir eau salée légère 3 mins égoutter, macérer viande hachée avec vin/fécule, couper piment, chauffer huile faire frire poivre Sichuan/piment parfumé retirer, ajouter viande hachée feu fort jusqu\'à huile, ajouter pâte de fèves feu doux pour huile rouge, faire revenir aromatiques, ajouter peu plus d\'une demi-eau, ajouter tofu pousser doucement, ajouter soja/sucre, feu doux 3 mins, fécule pour épaissir, saupoudrer oignons verts servir',
            st_es:'Cortar tofu 2cm escaldar agua salada ligera 3 mins escurrir, marinar carne picada con vino/almidón, cortar chile, calentar aceite freír pimienta Sichuan/chile perfumado retirar, agregar carne picada fuego fuerte hasta que salga aceite, agregar pasta de habas fuego suave para aceite rojo, sofreír aromáticos, agregar poco más de media agua, agregar tofu empujar suavemente, agregar soja/azúcar, fuego suave 3 mins, almidón para espesar, espolvorear cebollas verdes servir',
            n_zh:'经典麻辣麻婆', n_en:'Classic spicy numbing Mapo',
            n_ja:'定番麻辣マーボー', n_ko:'클래식 마라 마파', n_fr:'Mapo épicée classique', n_es:'Mapo picante clásica'
        },
        { recipe:2, level:4,
            ing_zh:'嫩豆腐500g,猪肉末250g,干红辣椒6个,花椒1.5勺,青蒜2根,葱花2根,姜4片,蒜4瓣,生抽3勺,豆瓣酱2.5勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺,盐1小勺',
            ing_en:'Soft tofu 500g, Minced pork 250g, Dried chili 6, Sichuan pepper 1.5tbsp, Garlic sprouts 2, Green onions 2, Ginger 4, Garlic 4, Light soy sauce 3tbsp, Broad bean paste 2.5tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp, Salt 1tsp',
            ing_ja:'柔らかい豆腐500g,豚ひき肉250g,乾燥唐辛子6本,山椒1.5大さじ,ニンニクの芽2本,ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油3大さじ,豆板醤2.5大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ,塩1小さじ',
            ing_ko:'연한두부500g,돼지고기다진것250g,말린고추6개,산초1.5큰술,마늘싹2개,대파2개,생강4쪽,마늘4개,간장3큰술,된장고추장2.5큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술,소금1작은술',
            ing_fr:'Tofu mou 500g, Viande hachée de porc 250g, Piment sec 6, Poivre du Sichuan 1.5càs, Pousses de ail 2, Oignons verts 2, Gingembre 4, Ail 4, Sauce soja légère 3càs, Pâte de fèves 2.5càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs, Sel 1càc',
            ing_es:'Tofu suave 500g, Carne picada de cerdo 250g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Brotes de ajo 2, Cebollas verdes 2, Jengibre 4, Ajo 4, Salsa soja clara 3cuch, Pasta de habas 2.5cuch, Vino de cocina 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch, Sal 1cucharadita',
            st_zh:'豆腐切2cm淡盐水焯3分钟沥干,肉末加料酒盐淀粉腌10分钟,青蒜切小段,辣椒剪段,冷油下花椒小火炸香捞去,下辣椒段炸香,下肉末大火炒散出油,加豆瓣酱小火炒红油,下姜蒜炒香,加小半碗水,下豆腐轻推,加生抽醋白糖,小火煮5分钟,分两次勾芡,撒青蒜轻拌匀装盘',
            st_en:'Cut tofu 2cm blanch light salt water 3 mins drain, marinate minced pork with wine/salt/starch 10 mins, cut garlic sprouts, cut chili, cold oil fry Sichuan pepper low fragrant remove, fry chili sections fragrant, high heat fry minced pork until oil out, add bean paste low fry red oil, stir fry ginger/garlic, add little more than half water, add tofu gently push, add soy sauce/vinegar/sugar, low 5 mins, thicken in two stages, sprinkle garlic sprouts gently mix serve',
            st_ja:'豆腐2cm切り薄い塩水で3分ゆで水切る,ひき肉酒・塩・片栗粉で10分漬ける,ニンニクの芽小さく切る,唐辛子切る,冷たい油に山椒弱火で炒め香り出し取る,唐辛子炒める,強火でひき肉炒め油出るまで,豆板醤弱火で炒め赤い油,ショウガ・ニンニク炒める,半分以上水入れる,豆腐入れ優しく押す,醤油・酢・砂糖,弱火5分,2回に分けてとろみ,ニンニクの芽振って優しく混ぜ盛り付け',
            st_ko:'두부2cm 썰고 옅은 소금물에3分 데치고 물기 빼기, 돼지고기 요리술·소금·전분으로10分 절이기, 마늘싹 작게 썰기, 고추 썰기, 차가운 기름에 산초 약불로 볶아 향 내고 제거, 고추 볶기, 강불로 돼지고기 볶아 기름 나올 때까지, 된장고추장 약불로 볶아 빨간 기름, 생강·마늘 볶기, 반분 이상 물 넣기, 두부 넣고 부드럽게 밀기, 간장·식초·설탕, 약불5分, 2回에 걸쳐 걸쭉, 마늘싹 뿌려 부드럽게 섞어 담기',
            st_fr:'Couper tofu 2cm blanchir eau salée légère 3 mins égoutter, macérer viande hachée avec vin/sel/fécule 10 mins, couper pousses de ail, couper piment, huile froide faire frire poivre Sichuan feu doux parfumé retirer, faire frire sections de piment parfumées, faire frire viande hachée feu fort jusqu\'à huile, ajouter pâte de fèves feu doux pour huile rouge, faire revenir gingembre/ail, ajouter peu plus d\'une demi-eau, ajouter tofu pousser doucement, ajouter soja/vinaigre/sucre, feu doux 5 mins, épaissir en deux étapes, saupoudrer pousses de ail mélanger doucement servir',
            st_es:'Cortar tofu 2cm escaldar agua salada ligera 3 mins escurrir, marinar carne picada con vino/sal/almidón 10 mins, cortar brotes de ajo, cortar chile, aceite frío freír pimienta de Sichuan fuego suave perfumada retirar, freír secciones de chile perfumadas, freír carne picada fuego fuerte hasta que salga aceite, agregar pasta de habas fuego suave para aceite rojo, sofreír jengibre/ajo, agregar poco más de media agua, agregar tofu empujar suavemente, agregar soja/vinagre/azúcar, fuego suave 5 mins, espesar en dos etapas, espolvorear brotes de ajo mezclar suavemente servir',
            n_zh:'层次丰富麻婆', n_en:'Rich complex flavor Mapo',
            n_ja:'層豊かなマーボー', n_ko:'풍부한 층의 마파', n_fr:'Mapo saveur complexe riche', n_es:'Mapo sabor complejo rico'
        },
        { recipe:2, level:5,
            ing_zh:'嫩豆腐550g,猪肉末300g,干红辣椒8个,花椒2勺,青蒜3根,葱花3根,姜5片,蒜5瓣,生抽3.5勺,豆瓣酱3勺,老抽1勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1.5小勺,香油1勺',
            ing_en:'Soft tofu 550g, Minced pork 300g, Dried chili 8, Sichuan pepper 2tbsp, Garlic sprouts 3, Green onions 3, Ginger 5, Garlic 5, Light soy sauce 3.5tbsp, Broad bean paste 3tbsp, Dark soy sauce 1tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1.5tsp, Sesame oil 1tbsp',
            ing_ja:'柔らかい豆腐550g,豚ひき肉300g,乾燥唐辛子8本,山椒2大さじ,ニンニクの芽3本,ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油3.5大さじ,豆板醤3大さじ,濃口醤油1大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1.5小さじ,ごま油1大さじ',
            ing_ko:'연한두부550g,돼지고기다진것300g,말린고추8개,산초2큰술,마늘싹3개,대파3개,생강5쪽,마늘5개,간장3.5큰술,된장고추장3큰술,진간장1큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1.5작은술,참기름1큰술',
            ing_fr:'Tofu mou 550g, Viande hachée de porc 300g, Piment sec 8, Poivre du Sichuan 2càs, Pousses de ail 3, Oignons verts 3, Gingembre 5, Ail 5, Sauce soja légère 3.5càs, Pâte de fèves 3càs, Sauce soja noire 1càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1.5càc, Huile de sésame 1càs',
            ing_es:'Tofu suave 550g, Carne picada de cerdo 300g, Chile seco 8, Pimienta de Sichuan 2cuch, Brotes de ajo 3, Cebollas verdes 3, Jengibre 5, Ajo 5, Salsa soja clara 3.5cuch, Pasta de habas 3cuch, Salsa soja oscura 1cuch, Vino de cocina 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1.5cucharadita, Aceite de sésamo 1cuch',
            st_zh:'豆腐切1.8cm淡盐水焯4分钟沥干,肉末加料酒盐淀粉腌15分钟,青蒜切斜段,辣椒剪段,冷油下花椒小火炸1.5分钟香捞去,下辣椒段炸微焦,下肉末大火炒散出油,加豆瓣酱小火炒红油,下姜蒜炒香,加小半碗水,下豆腐轻推,加生抽老抽醋白糖,小火煮6分钟,分三次勾芡,撒青蒜和葱花,淋香油装盘!',
            st_en:'Cut tofu 1.8cm blanch light salt water 4 mins drain, marinate minced pork with wine/salt/starch 15 mins, cut garlic sprouts on angle, cut chili, cold oil fry Sichuan pepper low 1.5min fragrant remove, fry chili slightly charred, high heat fry minced pork until oil out, add bean paste low fry red oil, stir fry ginger/garlic, add little more than half water, add tofu gently push, add soy sauce/dark soy/vinegar/sugar, low 6 mins, thicken in three stages, sprinkle garlic sprouts/green onions, drizzle sesame oil serve!',
            st_ja:'豆腐1.8cm切り薄い塩水で4分ゆで水切る,ひき肉酒・塩・片栗粉で15分漬ける,ニンニクの芽斜め切り,唐辛子切る,冷たい油に山椒弱火で1.5分炒め香り出し取る,唐辛子少し焦げるまで炒める,強火でひき肉炒め油出るまで,豆板醤弱火で炒め赤い油,ショウガ・ニンニク炒める,半分以上水入れる,豆腐入れ優しく押す,薄口醤油・濃口醤油・酢・砂糖,弱火6分,3回に分けてとろみ,ニンニクの芽とネギ振って,ごま油垂らし盛り付け!',
            st_ko:'두부1.8cm 썰고 옅은 소금물에4分 데치고 물기 빼기, 돼지고기 요리술·소금·전분으로15分 절이기, 마늘싹은 비스듬히 썰고, 고추 썰기, 차가운 기름에 산초 약불로1.5分 볶아 향 내고 제거, 고추 약간焦가지 볶기, 강불로 돼지고기 볶아 기름 나올 때까지, 된장고추장 약불로 볶아 빨간 기름, 생강·마늘 볶기, 반분 이상 물 넣기, 두부 넣고 부드럽게 밀기, 간장·진간장·식초·설탕, 약불6分, 3回에 걸쳐 걸쭉, 마늘싹과 대파 뿌려, 참기름 뿌려 담기!',
            st_fr:'Couper tofu 1.8cm blanchir eau salée légère 4 mins égoutter, macérer viande hachée avec vin/sel/fécule 15 mins, couper pousses de ail en biais, couper piment, huile froide faire frire poivre Sichuan feu doux 1.5min parfumé retirer, faire frire piment légèrement carbonisé, faire frire viande hachée feu fort jusqu\'à huile, ajouter pâte de fèves feu doux pour huile rouge, faire revenir gingembre/ail, ajouter peu plus d\'une demi-eau, ajouter tofu pousser doucement, ajouter soja clair/soja noir/vinaigre/sucre, feu doux 6 mins, épaissir en trois étapes, saupoudrer pousses de ail/oignons verts, verser huile de sésame servir!',
            st_es:'Cortar tofu 1.8cm escaldar agua salada ligera 4 mins escurrir, marinar carne picada con vino/sal/almidón 15 mins, cortar brotes de ajo en diagonal, cortar chile, aceite frío freír pimienta de Sichuan fuego suave 1.5min perfumada retirar, freír chile ligeramente carbonizado, freír carne picada fuego fuerte hasta que salga aceite, agregar pasta de habas fuego suave para aceite rojo, sofreír jengibre/ajo, agregar poco más de media agua, agregar tofu empujar suavemente, agregar soja clara/soja oscura/vinagre/azúcar, fuego suave 6 mins, espesar en tres etapas, espolvorear brotes de ajo/cebollas verdes, rociar aceite de sésamo servir!',
            n_zh:'大师级麻婆豆腐，人间绝味!', n_en:'Master level Mapo Tofu, heavenly flavor!',
            n_ja:'マスター級マーボー豆腐、天国の味!', n_ko:'마스터급 마파두부, 천국 맛!', n_fr:'Tofu Mapo niveau maîtrise, goût divin!', n_es:'Tofu Mapo nivel maestro, sabor celestial!'
        },
        { recipe:3, level:1,
            ing_zh:'米饭300g,鸡蛋2个,葱花1根,生抽1勺,盐1小勺',
            ing_en:'Cooked rice 300g, Eggs 2, Green onion 1, Light soy sauce 1tbsp, Salt 1tsp',
            ing_ja:'ご飯300g,卵2個,ネギ1本,薄口醤油1大さじ,塩1小さじ',
            ing_ko:'밥300g,달걀2개,대파1개,간장1큰술,소금1작은술',
            ing_fr:'Riz cuit 300g, Oeufs 2, Oignon vert 1, Sauce soja légère 1càs, Sel 1càc',
            ing_es:'Arroz cocido 300g, Huevos 2, Cebolla verde 1, Salsa soja clara 1cuch, Sal 1cucharadita',
            st_zh:'鸡蛋打散,锅加油中火,倒入蛋液炒散至凝固,倒入米饭翻炒约2分钟,加生抽和盐,翻炒均匀,撒葱花装盘',
            st_en:'Beat eggs, heat oil medium, pour eggs scramble to set, add rice stir ~2 mins, add soy sauce/salt, mix well, sprinkle green onions serve',
            st_ja:'卵割る,フライパン油中火,卵入れ炒め固まる,ご飯入れ約2分炒める,醤油と塩入れる,混ぜる,ネギ振って盛り付け',
            st_ko:'달걀을 풀어놓기, 팬에 기름 중불, 달걀 넣고 볶아 굳히기, 밥 넣고 약2분 볶기, 간장과 소금 넣기, 골고루 섞기, 대파 뿌려 담기',
            st_fr:'Battre oeufs, chauffer huile moyen, verser oeufs brouiller à prendre, ajouter riz mélanger ~2 mins, ajouter soja/sel, mélanger bien, saupoudrer oignons verts servir',
            st_es:'Batir huevos, calentar aceite medio, verter huevos revolver a cuajar, agregar arroz mezclar ~2 mins, agregar soja/sal, mezclar bien, espolvorear cebollas verdes servir',
            n_zh:'入门级蛋炒饭', n_en:'Beginners fried rice',
            n_ja:'初心者向けチャーハン', n_ko:'초보자용 볶음밥', n_fr:'Riz sauté niveau débutant', n_es:'Arroz frito nivel principiante'
        },
        { recipe:3, level:2,
            ing_zh:'米饭350g,鸡蛋3个,胡萝卜50g,葱花2根,生抽1.5勺,料酒1勺,盐1小勺',
            ing_en:'Cooked rice 350g, Eggs 3, Carrot 50g, Green onions 2, Light soy sauce 1.5tbsp, Cooking wine 1tbsp, Salt 1tsp',
            ing_ja:'ご飯350g,卵3個,ニンジン50g,ネギ2本,薄口醤油1.5大さじ,料理酒1大さじ,塩1小さじ',
            ing_ko:'밥350g,달걀3개,당근50g,대파2개,간장1.5큰술,요리술1큰술,소금1작은술',
            ing_fr:'Riz cuit 350g, Oeufs 3, Carotte 50g, Oignons