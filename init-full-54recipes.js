const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

let dbPath = path.join(__dirname, 'recipes-full.db');
if (fs.existsSync(dbPath)) {
    try {
        fs.unlinkSync(dbPath);
    } catch (e) {
        console.log('Could not delete old DB, using temp name:', e.message);
        dbPath = path.join(__dirname, 'recipes-temp.db');
    }
}

console.log('Creating DB at:', dbPath);

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
        console.log('Tables created');
        insertRecipes();
    });
});

const allRecipes = [
    { id:1, slug:'kung-pao-chicken', name_zh:'宫保鸡丁', name_en:'Kung Pao Chicken', name_ja:'カンパオチキン', name_ko:'쿵파오 치킨', name_fr:'Poulet Kung Pao', name_es:'Pollo Kung Pao' },
    { id:2, slug:'mapo-tofu', name_zh:'麻婆豆腐', name_en:'Mapo Tofu', name_ja:'マーボー豆腐', name_ko:'마파두부', name_fr:'Tofu Mapo', name_es:'Tofu Mapo' },
    { id:3, slug:'fried-rice', name_zh:'蛋炒饭', name_en:'Egg Fried Rice', name_ja:'チャーハン', name_ko:'볶음밥', name_fr:'Riz sauté aux oeufs', name_es:'Arroz frito con huevos' },
    { id:4, slug:'sweet-sour-pork', name_zh:'糖醋里脊', name_en:'Sweet and Sour Pork', name_ja:'酢豚', name_ko:'탕수육', name_fr:'Porc aigre-doux', name_es:'Cerdo agridulce' },
    { id:5, slug:'red-braised-pork', name_zh:'红烧肉', name_en:'Red Braised Pork', name_ja:'紅焼肉', name_ko:'홍소고기', name_fr:'Porc braisé rouge', name_es:'Cerdo guisado rojo' },
    { id:6, slug:'hot-pot', name_zh:'火锅', name_en:'Hot Pot', name_ja:'火鍋', name_ko:'훠궈', name_fr:'Fondue chinoise', name_es:'Olla china' },
    { id:7, slug:'peking-duck', name_zh:'北京烤鸭', name_en:'Peking Duck', name_ja:'北京ダック', name_ko:'베이징 오리', name_fr:'Canard laqué de Pékin', name_es:'Pato laqueado de Pekín' },
    { id:8, slug:'dumplings', name_zh:'饺子', name_en:'Dumplings', name_ja:'餃子', name_ko:'만두', name_fr:'Raviolis chinois', name_es:'Dumplings chinos' },
    { id:9, slug:'xiao-long-bao', name_zh:'小笼包', name_en:'Xiaolongbao', name_ja:'小籠包', name_ko:'샤오롱바오', name_fr:'Xiaolongbao', name_es:'Xiaolongbao' },
    { id:10, slug:'kung-pao-shrimp', name_zh:'宫保虾球', name_en:'Kung Pao Shrimp', name_ja:'カンパオ海老', name_ko:'쿵파오 새우', name_fr:'Crevettes Kung Pao', name_es:'Camarones Kung Pao' },
    { id:11, slug:'twice-cooked-pork', name_zh:'回锅肉', name_en:'Twice Cooked Pork', name_ja:'回鍋肉', name_ko:'회포육', name_fr:'Porc cuit deux fois', name_es:'Cerdo cocido dos veces' },
    { id:12, slug:'fish-fragrant-pork', name_zh:'鱼香肉丝', name_en:'Fish-Fragrant Pork', name_ja:'魚香肉絲', name_ko:'어향육사', name_fr:'Porc parfumé au poisson', name_es:'Cerdo aromatizado a pescado' },
    { id:13, slug:'black-bean-sauce-ribs', name_zh:'豆豉排骨', name_en:'Black Bean Sauce Ribs', name_ja:'豆豉排骨', name_ko:'두시 갈비', name_fr:'Côtes de porc sauce soja noire', name_es:'Costillas en salsa de soja negra' },
    { id:14, slug:'steamed-fish', name_zh:'清蒸鱼', name_en:'Steamed Fish', name_ja:'蒸し魚', name_ko:'찜생선', name_fr:'Poisson vapeur', name_es:'Pescado al vapor' },
    { id:15, slug:'shrimp-kung-bao', name_zh:'油焖大虾', name_en:'Braised Shrimp', name_ja:'油煮え海老', name_ko:'기름 삶은 새우', name_fr:'Crevettes braisées', name_es:'Camarones guisados' },
    { id:16, slug:'sichuan-spicy-fish', name_zh:'水煮鱼', name_en:'Sichuan Spicy Fish', name_ja:'四川麻辣魚', name_ko:'쓰촨 마라 생선', name_fr:'Poisson épicé du Sichuan', name_es:'Pescado picante de Sichuan' },
    { id:17, slug:'dry-pot-chicken', name_zh:'干锅鸡', name_en:'Dry Pot Chicken', name_ja:'乾鍋鶏', name_ko:'건냄비 닭', name_fr:'Poulet en pot sec', name_es:'Pollo en olla seca' },
    { id:18, slug:'yangzhou-fried-rice', name_zh:'扬州炒饭', name_en:'Yangzhou Fried Rice', name_ja:'揚州炒飯', name_ko:'양주 볶음밥', name_fr:'Riz sauté de Yangzhou', name_es:'Arroz frito de Yangzhou' },
    { id:19, slug:'clay-pot-rice', name_zh:'煲仔饭', name_en:'Clay Pot Rice', name_ja:'土鍋ご飯', name_ko:'토솥밥', name_fr:'Riz en pot de terre', name_es:'Arroz en olla de barro' },
    { id:20, slug:'congee', name_zh:'粥', name_en:'Congee', name_ja:'お粥', name_ko:'죽', name_fr:'Congee', name_es:'Gachas de arroz' },
    { id:21, slug:'steamed-pork-bun', name_zh:'肉包子', name_en:'Steamed Pork Bun', name_ja:'肉包子', name_ko:'고기만두', name_fr:'Petit pain farci au porc', name_es:'Panecillo relleno de cerdo' },
    { id:22, slug:'spring-onion-pancake', name_zh:'葱油饼', name_en:'Spring Onion Pancake', name_ja:'ネギ焼き', name_ko:'파전', name_fr:'Crêpe aux oignons verts', name_es:'Tortilla de cebollas verdes' },
    { id:23, slug:'tang-yuan', name_zh:'汤圆', name_en:'Tangyuan', name_ja:'団子', name_ko:'탕위안', name_fr:'Tangyuan', name_es:'Tangyuan' },
    { id:24, slug:'zongzi', name_zh:'粽子', name_en:'Zongzi', name_ja:'粽', name_ko:'종자', name_fr:'Zongzi', name_es:'Zongzi' },
    { id:25, slug:'moon-cake', name_zh:'月饼', name_en:'Moon Cake', name_ja:'月餅', name_ko:'월병', name_fr:'Gâteau de lune', name_es:'Pastel de luna' },
    { id:26, slug:'century-egg', name_zh:'皮蛋', name_en:'Century Egg', name_ja:'皮蛋', name_ko:'계란절임', name_fr:'Oeuf du siècle', name_es:'Huevo del siglo' },
    { id:27, slug:'stir-fried-kale', name_zh:'炒青菜', name_en:'Stir-Fried Greens', name_ja:'野菜炒め', name_ko:'야채 볶음', name_fr:'Légumes sautés', name_es:'Verduras salteadas' },
    { id:28, slug:'eggplant-in-garlic-sauce', name_zh:'鱼香茄子', name_en:'Eggplant in Garlic Sauce', name_ja:'魚香茄子', name_ko:'어향 가지', name_fr:'Aubergine sauce ail', name_es:'Berenjena en salsa de ajo' },
    { id:29, slug:'dry-fried-green-beans', name_zh:'干煸四季豆', name_en:'Dry-Fried Green Beans', name_ja:'乾燥インゲン豆炒め', name_ko:'건조 볶음 강낭콩', name_fr:'Haricots verts frits secs', name_es:'Judías verdes fritas secas' },
    { id:30, slug:'bok-choy-garlic', name_zh:'蒜蓉小白菜', name_en:'Bok Choy with Garlic', name_ja:'ニンニク小白菜', name_ko:'마늘 청경채', name_fr:'Pak choi à l\'ail', name_es:'Bok choy con ajo' },
    { id:31, slug:'sour-spicy-soup', name_zh:'酸辣汤', name_en:'Hot and Sour Soup', name_ja:'酸辣湯', name_ko:'신라탕', name_fr:'Soupe aigre-pimentée', name_es:'Sopa agria y picante' },
    { id:32, slug:'wonton-soup', name_zh:'馄饨汤', name_en:'Wonton Soup', name_ja:'ワンタンスープ', name_ko:'훈톤 수프', name_fr:'Soupe wonton', name_es:'Sopa wonton' },
    { id:33, slug:'egg-drop-soup', name_zh:'蛋花汤', name_en:'Egg Drop Soup', name_ja:'卵花スープ', name_ko:'계란탕', name_fr:'Soupe aux oeufs', name_es:'Sopa de huevo' },
    { id:34, slug:'luffa-soup', name_zh:'丝瓜汤', name_en:'Luffa Soup', name_ja:'ヘチマスープ', name_ko:'수세미 수프', name_fr:'Soupe de luffa', name_es:'Sopa de luffa' },
    { id:35, slug:'lotus-root-soup', name_zh:'莲藕汤', name_en:'Lotus Root Soup', name_ja:'レンコンスープ', name_ko:'연근 수프', name_fr:'Soupe de racine de lotus', name_es:'Sopa de raíz de loto' },
    { id:36, slug:'sweet-red-bean-soup', name_zh:'红豆汤', name_en:'Sweet Red Bean Soup', name_ja:'あんこスープ', name_ko:'팥죽', name_fr:'Soupe de haricots rouges', name_es:'Sopa de frijoles rojos dulces' },
    { id:37, slug:'kung-pao-tofu', name_zh:'宫保豆腐', name_en:'Kung Pao Tofu', name_ja:'カンパオ豆腐', name_ko:'쿵파오 두부', name_fr:'Tofu Kung Pao', name_es:'Tofu Kung Pao' },
    { id:38, slug:'braised-pork-belly', name_zh:'东坡肉', name_en:'Dongpo Pork', name_ja:'東坡肉', name_ko:'동파육', name_fr:'Porc Dongpo', name_es:'Cerdo Dongpo' },
    { id:39, slug:'lion-head-meatballs', name_zh:'狮子头', name_en:'Lion\'s Head Meatballs', name_ja:'獅子頭', name_ko:'사자머리', name_fr:'Boulettes de viande tête de lion', name_es:'Albóndigas cabeza de león' },
    { id:40, slug:'sweet-potato-soup', name_zh:'红薯糖水', name_en:'Sweet Potato Soup', name_ja:'サツマイモスープ', name_ko:'고구마 수프', name_fr:'Soupe de patate douce', name_es:'Sopa de camote' },
    { id:41, slug:'spicy-tofu-salad', name_zh:'皮蛋豆腐', name_en:'Century Egg Tofu', name_ja:'皮蛋豆腐', name_ko:'계란절임 두부', name_fr:'Tofu aux oeufs du siècle', name_es:'Tofu con huevos del siglo' },
    { id:42, slug:'cold-cucumber-salad', name_zh:'拍黄瓜', name_en:'Cucumber Salad', name_ja:'きゅうりサラダ', name_ko:'오이 샐러드', name_fr:'Salade de concombre', name_es:'Ensalada de pepino' },
    { id:43, slug:'spicy-chicken-feet', name_zh:'泡椒凤爪', name_en:'Spicy Chicken Feet', name_ja:'鶏足ピリ辛', name_ko:'닭발 매운맛', name_fr:'Pattes de poulet picantes', name_es:'Pattes de pollo picantes' },
    { id:44, slug:'sugar-tomatoes', name_zh:'糖拌西红柿', name_en:'Sugar Tomatoes', name_ja:'砂糖トマト', name_ko:'설탕 토마토', name_fr:'Tomates au sucre', name_es:'Tomates con azúcar' },
    { id:45, slug:'cold-noodles', name_zh:'凉面', name_en:'Cold Noodles', name_ja:'冷麺', name_ko:'냉면', name_fr:'Nouilles froides', name_es:'Fideos fríos' },
    { id:46, slug:'fried-chicken', name_zh:'炸鸡', name_en:'Fried Chicken', name_ja:'唐揚げ', name_ko:'후라이드 치킨', name_fr:'Poulet frit', name_es:'Pollo frito' },
    { id:47, slug:'scallion-oil-chicken', name_zh:'葱油鸡', name_en:'Scallion Oil Chicken', name_ja:'ネギ油鶏', name_ko:'파기름 닭', name_fr:'Poulet à l\'huile de ciboule', name_es:'Pollo con aceite de cebollino' },
    { id:48, slug:'white-cut-chicken', name_zh:'白切鸡', name_en:'White Cut Chicken', name_ja:'白切り鶏', name_ko:'백절계', name_fr:'Poulet cuit à blanc', name_es:'Pollo cocido en blanco' },
    { id:49, slug:'soy-sauce-chicken', name_zh:'酱油鸡', name_en:'Soy Sauce Chicken', name_ja:'醤油鶏', name_ko:'간장 닭', name_fr:'Poulet à la sauce soja', name_es:'Pollo en salsa soja' },
    { id:50, slug:'tea-smoked-duck', name_zh:'樟茶鸭', name_en:'Tea-Smoked Duck', name_ja:'茶燻製ダック', name_ko:'차 훈제 오리', name_fr:'Canard fumé au thé', name_es:'Pato ahumado con té' },
    { id:51, slug:'roast-pork', name_zh:'叉烧', name_en:'Char Siu', name_ja:'叉焼', name_ko:'차슈', name_fr:'Char Siu', name_es:'Char Siu' },
    { id:52, slug:'white-pepper-pig-stomach', name_zh:'白胡椒猪肚', name_en:'White Pepper Pig Stomach', name_ja:'白胡椒豚胃袋', name_ko:'백후추 돼지위', name_fr:'Estomac de porc au poivre blanc', name_es:'Estómago de cerdo con pimienta blanca' },
    { id:53, slug:'five-flower-pork', name_zh:'梅菜扣肉', name_en:'Pork with Preserved Vegetables', name_ja:'梅菜扣肉', name_ko:'매채고기', name_fr:'Porc aux légumes conservés', name_es:'Cerdo con vegetales conservados' },
    { id:54, slug:'sweet-sour-ribs', name_zh:'糖醋排骨', name_en:'Sweet and Sour Ribs', name_ja:'酢豚排骨', name_ko:'탕수 갈비', name_fr:'Côtes aigre-douces', name_es:'Costillas agridulces' }
];

function insertRecipes() {
    console.log('Inserting', allRecipes.length, 'recipes');
    let count = 0;
    allRecipes.forEach(r => {
        db.run('INSERT INTO recipes (id, slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [r.id, r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es],
            (err) => {
                if (err) console.error('Recipe error:', r.slug, err.message);
                count++;
                if (count === allRecipes.length) {
                    console.log('Recipes inserted');
                    insertLevels();
                }
            }
        );
    });
}

function insertLevels() {
    const levels = [];
    
    console.log('Preparing levels data...');
    
    // Original 4 recipes full data
    levels.push(
        { recipe:1, level:1, ing_zh:'鸡胸肉200g,花生50g,葱2根,生抽2勺,白糖1勺', ing_en:'Chicken breast 200g, Peanuts 50g, Green onions 2, Light soy sauce 2tbsp, Sugar 1tbsp', ing_ja:'鶏胸肉200g,落花生50g,ネギ2本,薄口醤油2大さじ,砂糖1大さじ', ing_ko:'닭가슴살200g,땅콩50g,대파2개,간장2큰술,설탕1큰술', ing_fr:'Blanc de poulet 200g, Arachides 50g, Oignons verts 2, Sauce soja légère 2càs, Sucre 1càs', ing_es:'Pechuga de pollo 200g, Cacahuetes 50g, Cebollas verdes 2, Salsa soja clara 2cuch, Azúcar 1cuch', st_zh:'鸡胸肉洗净擦干，切成1.5cm见方的小丁|锅中放入2勺油，加热至中等温度|放入鸡丁，用锅铲翻炒约3分钟至颜色变白|加入2勺生抽和1勺白糖，快速翻炒均匀|放入花生，关火继续翻炒1分钟让花生变香|出锅装盘即可享用', st_en:'Wash and dry chicken, cut into 1.5cm cubes|Heat 2tbsp oil in pan over medium|Add chicken, stir fry ~3 mins until white|Add 2tbsp soy sauce and 1tbsp sugar, stir quickly|Add peanuts, turn off heat and stir 1min|Serve', st_ja:'鶏肉洗い水切り、1.5cm角切り|フライパンに油2大さじ中火|鶏肉入れ約3分炒め白く|醤油2大さじと砂糖1大さじ入れ素早く|落花生入れ火止め1分炒め|盛り付け', st_ko:'닭가슴살 씻고 물기 닦아 1.5cm로 썰기|팬에 기름 2큰술 중불|닭고기 넣고 약3분 볶아 흰색|간장 2큰술과 설탕 1큰술 넣고 빠르게|땅콩 넣고 불 끄고 1분 볶아|접시에', st_fr:'Laver et sécher poulet, couper en cubes 1.5cm|Chauffer 2càs huile à feu moyen|Ajouter poulet, faire revenir ~3 mins jusqu\'à blanc|Ajouter 2càs soja et 1càs sucre, mélanger vite|Ajouter arachides, éteindre et mélanger 1min|Servir', st_es:'Lavar y secar pollo, cortar en cubos 1.5cm|Calentar 2cuch aceite a fuego medio|Añadir pollo, freír ~3 mins hasta blanco|Añadir 2cuch soja y 1cuch azúcar, revolver rápido|Añadir cacahuetes, apagar y revolver 1min|Servir', n_zh:'新手入门级，简单快手', n_en:'Beginners level, quick and easy', n_ja:'初心者向け簡単', n_ko:'초보자용 쉬움', n_fr:'Niveau débutant, rapide', n_es:'Nivel principiante, fácil' },
        { recipe:1, level:2, ing_zh:'鸡胸肉250g,花生60g,干红辣椒3个,葱2根,姜3片,蒜3瓣,生抽2勺,料酒1勺,白糖1勺', ing_en:'Chicken breast 250g, Peanuts 60g, Dried chili 3, Green onions 2, Ginger 3, Garlic 3, Light soy sauce 2tbsp, Cooking wine 1tbsp, Sugar 1tbsp', ing_ja:'鶏胸肉250g,落花生60g,乾燥唐辛子3本,ネギ2本,ショウガ3枚,ニンニク3個,薄口醤油2大さじ,料理酒1大さじ,砂糖1大さじ', ing_ko:'닭가슴살250g,땅콩60g,말린고추3개,대파2개,생강3쪽,마늘3개,간장2큰술,요리술1큰술,설탕1큰술', ing_fr:'Blanc de poulet 250g, Arachides 60g, Piment sec 3, Oignons verts 2, Gingembre 3, Ail 3, Sauce soja légère 2càs, Vin 1càs, Sucre 1càs', ing_es:'Pechuga de pollo 250g, Cacahuetes 60g, Chile seco 3, Cebollas verdes 2, Jengibre 3, Ajo 3, Salsa soja clara 2cuch, Vino 1cuch, Azúcar 1cuch', st_zh:'鸡胸肉洗净切丁，加料酒腌10分钟|葱切葱花，姜蒜切片，辣椒剪段|锅加油中火，炒香葱姜蒜辣椒|放入鸡肉大火快炒2分钟|加生抽和白糖翻炒均匀|最后加花生关火翻炒|装盘', st_en:'Wash and cut chicken, marinate with wine 10 mins|Chop green onions, slice ginger/garlic, cut chili|Heat oil medium, stir fry aromatics and chili|Add chicken high heat 2 mins|Add soy sauce and sugar, stir well|Add peanuts turn off heat and stir|Serve', st_ja:'鶏肉洗い切り酒で10分漬け|ネギ切り、ショウガニンニクスライス、唐辛子切る|油中火で香り炒め|鶏肉強火2分炒め|醤油と砂糖入れ混ぜ|最後に落花生火止め炒め|盛り付け', st_ko:'닭가슴살 씻고 썰어 요리술로10분 절이기|대파 썰고 생강마늘 썰고 고추 썰기|팬에 기름 중불 향기 내기|닭고기 강불2분 볶아|간장과 설탕 넣고 섞기|땅콩 넣고 불 끄고 볶아|접시에', st_fr:'Laver et couper poulet, mariner au vin 10 mins|Hacher oignons verts, couper gingembre/ail, couper piment|Chauffer huile moyen, faire revenir aromatiques/piment|Ajouter poulet feu fort 2 mins|Ajouter soja et sucre, mélanger|Ajouter arachides éteindre et mélanger|Servir', st_es:'Lavar y cortar pollo, marinar con vino 10 mins|Picar cebollas verdes, cortar jengibre/ajo, cortar chile|Calentar aceite medio, sofreír aromáticos/chile|Añadir pollo fuego fuerte 2 mins|Añadir soja y azúcar, mezclar|Añadir cacahuetes apagar y revolver|Servir', n_zh:'入门进阶，有香料加持', n_en:'Intermediate, with aromatics', n_ja:'中級、香り付き', n_ko:'중급 향신료', n_fr:'Intermédiaire, avec aromatiques', n_es:'Intermedio, con aromáticos' },
        { recipe:1, level:3, ing_zh:'鸡胸肉300g,花生70g,干红辣椒5个,花椒1勺,葱白2段,姜4片,蒜4瓣,生抽2勺,老抽1勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺', ing_en:'Chicken breast 300g, Peanuts 70g, Dried chili 5, Sichuan pepper 1tbsp, White scallion 2, Ginger 4, Garlic 4, Light soy sauce 2tbsp, Dark soy sauce 1tbsp, Cooking wine 1.5tbsp, Vinegar 1tbsp, Sugar 1.5tbsp, Cornstarch 1.5tbsp', ing_ja:'鶏胸肉300g,落花生70g,乾燥唐辛子5本,山椒1大さじ,白ネギ2本,ショウガ4枚,ニンニク4個,薄口醤油2大さじ,濃口醤油1大さじ,料理酒1.5大さじ,酢1大さじ,砂糖1.5大さじ,片栗粉1.5大さじ', ing_ko:'닭가슴살300g,땅콩70g,말린고추5개,산초1큰술,대파흰부2개,생강4쪽,마늘4개,간장2큰술,진간장1큰술,요리술1.5큰술,식초1큰술,설탕1.5큰술,전분1.5큰술', ing_fr:'Blanc de poulet 300g, Arachides 70g, Piment sec 5, Poivre du Sichuan 1càs, Oignon blanc 2, Gingembre 4, Ail 4, Sauce soja légère 2càs, Sauce soja noire 1càs, Vin 1.5càs, Vinaigre 1càs, Sucre 1.5càs, Fécule 1.5càs', ing_es:'Pechuga de pollo 300g, Cacahuetes 70g, Chile seco 5, Pimienta de Sichuan 1cuch, Cebolla blanca 2, Jengibre 4, Ajo 4, Salsa soja clara 2cuch, Salsa soja oscura 1cuch, Vino 1.5cuch, Vinagre 1cuch, Azúcar 1.5cuch, Almidón 1.5cuch', st_zh:'鸡胸肉去筋膜切1.5cm丁，加料酒淀粉抓匀腌15分钟|调碗汁：糖、醋、生抽、老抽混合均匀|花生先炸金黄捞出|锅留底油炸花椒香捞出|放辣椒炸微焦|下葱姜蒜大火爆香|放鸡肉大火快炒1分钟|倒碗汁翻炒裹匀|最后加花生翻炒装盘', st_en:'Trim chicken 1.5cm, marinate with wine/starch 15 mins|Mix sauce: sugar, vinegar, both soy|Fry peanuts first golden|Heat oil fry Sichuan pepper fragrant remove|Fry chili slightly charred|Stir fry aromatics high|Add chicken high 1 min|Add sauce coat well|Add peanuts stir and serve', st_ja:'鶏肉筋取り1.5cm切り酒片栗粉15分漬け|ソース混ぜ：砂糖、酢、両方醤油|落花生先に炒め|油で山椒炒め香り出し取る|唐辛子炒め|香り強火炒め|鶏肉強火1分|ソース入れ混ぜ|落花生入れ盛り付け', st_ko:'닭가슴살 힘줄 제거1.5cm切り요리술전분15분 절이기|소스 섞기：설탕、식초、양쪽 간장|땅콩先에 황금으로 볶아|기름으로 산초 볶아 향기 내고 제거|고추 볶아 약간焦|향기 강불 볶아|닭고기 강불1分|소스 넣고 섞기|땅콩 넣고 접시에', st_fr:'Nettoyer poulet 1.5cm, mariner vin/fécule 15 mins|Mélanger sauce: sucre, vinaigre, deux sojas|Faire frire arachides d\'abord doré|Chauffer huile faire revenir poivre Sichuan parfumé retirer|Faire frire piment légèrement carbonisé|Faire revenir aromatiques feu fort|Ajouter poulet feu fort 1 min|Ajouter sauce mélanger bien|Ajouter arachides mélanger et servir', st_es:'Recortar pollo 1.5cm, marinar vino/almidón 15 mins|Mezclar salsa: azúcar, vinagre, dos sojas|Freír cacahuetes primero dorado|Calentar aceite freír pimienta Sichuan perfumada retirar|Freír chile ligeramente carbonizado|Sofreír aromáticos fuego fuerte|Añadir pollo fuego fuerte 1 min|Añadir salsa mezclar bien|Añadir cacahuetes revolver y servir', n_zh:'经典麻辣口味', n_en:'Classic spicy numbing', n_ja:'定番麻辣味', n_ko:'클래식 마라', n_fr:'Saveur épicée classique', n_es:'Sabor picante clásico' },
        { recipe:1, level:4, ing_zh:'鸡胸肉350g,花生80g,干红辣椒6个,花椒1.5勺,葱白3段,姜5片,蒜5瓣,生抽2.5勺,老抽1.5勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1小勺,白胡椒1小勺', ing_en:'Chicken breast 350g, Peanuts 80g, Dried chili 6, Sichuan pepper 1.5tbsp, White scallion 3, Ginger 5, Garlic 5, Light soy sauce 2.5tbsp, Dark soy sauce 1.5tbsp, Cooking wine 2tbsp, Vinegar 1.5tbsp, Sugar 2tbsp, Cornstarch 2tbsp, Salt 1tsp, White pepper 1tsp', ing_ja:'鶏胸肉350g,落花生80g,乾燥唐辛子6本,山椒1.5大さじ,白ネギ3本,ショウガ5枚,ニンニク5個,薄口醤油2.5大さじ,濃口醤油1.5大さじ,料理酒2大さじ,酢1.5大さじ,砂糖2大さじ,片栗粉2大さじ,塩1小さじ,白胡椒1小さじ', ing_ko:'닭가슴살350g,땅콩80g,말린고추6개,산초1.5큰술,대파흰부3개,생강5쪽,마늘5개,간장2.5큰술,진간장1.5큰술,요리술2큰술,식초1.5큰술,설탕2큰술,전분2큰술,소금1작은술,후추1작은술', ing_fr:'Blanc de poulet 350g, Arachides 80g, Piment sec 6, Poivre du Sichuan 1.5càs, Oignon blanc 3, Gingembre 5, Ail 5, Sauce soja légère 2.5càs, Sauce soja noire 1.5càs, Vin 2càs, Vinaigre 1.5càs, Sucre 2càs, Fécule 2càs, Sel 1càc, Poivre blanc 1càc', ing_es:'Pechuga de pollo 350g, Cacahuetes 80g, Chile seco 6, Pimienta de Sichuan 1.5cuch, Cebolla blanca 3, Jengibre 5, Ajo 5, Salsa soja clara 2.5cuch, Salsa soja oscura 1.5cuch, Vino 2cuch, Vinagre 1.5cuch, Azúcar 2cuch, Almidón 2cuch, Sal 1cucharadita, Pimienta blanca 1cucharadita', st_zh:'鸡胸肉去筋膜切1.2cm丁，加料酒盐白胡椒淀粉抓匀腌20分钟|调精确碗汁：糖醋生抽老抽比例完美|花生炸酥脆|冷油下花椒小火炸1分钟香捞出|下辣椒炸暗红油亮|下葱姜蒜大火爆香30秒|滑入鸡肉大火快炒1分钟至变白|倒碗汁大火翻炒约1分钟裹匀|最后加花生和葱白快速翻炒10秒|立即出锅', st_en:'Trim chicken 1.2cm, marinate with wine/salt/pepper/starch 20 mins|Perfect sauce ratio|Fry peanuts crispy|Cold oil fry Sichuan pepper low 1min fragrant remove|Fry chili dark red shine|Stir fry aromatics high 30sec|Slide chicken high 1min to white|Add sauce high 1min coat|Add peanuts/white scallion quick 10sec|Serve immediately', st_ja:'鶏肉筋取り1.2cm切り酒塩白胡椒片栗粉20分漬け|完璧なソース比率|落花生カリカリ|冷たい油山椒弱火1分香り出し取る|唐辛子暗く赤く炒め|香り強火30秒|鶏肉滑り入れ強火1分白く|ソース入れ強火1分|最後に落花生と白ネギ10秒|すぐ盛り付け', st_ko:'닭가슴살 힘줄 제거1.2cm切り요리술소금후추전분20분 절이기|완벽한 소스 비율|땅콩 바삭바삭|차가운 기름 산초 약불1分 향기 내고 제거|고추 어둡게 빨간색으로|향기 강불30秒|닭고기 슬라이드 강불1分 흰색|소스 넣고 강불1分|땅콩과 대파 빠르게10秒|즉시 접시에', st_fr:'Nettoyer poulet 1.2cm, mariner vin/sel/poivre/fécule 20 mins|Ratio sauce parfait|Faire frire arachides croustillantes|Huile froide faire revenir poivre Sichuan feu doux 1min parfumé retirer|Faire frire piment rouge brillant foncé|Faire revenir aromatiques feu fort 30sec|Glisser poulet feu fort 1min à blanc|Ajouter sauce feu fort 1min|Ajouter arachides/oignon blanc rapide 10sec|Servir immédiatement', st_es:'Recortar pollo 1.2cm, marinar vino/sal/pimienta/almidón 20 mins|Ratio salsa perfecta|Freír cacahuetes crujientes|Aceite frío freír pimienta Sichuan fuego suave 1min perfumada retirar|Freír chile rojo brillante oscuro|Sofreír aromáticos fuego fuerte 30seg|Deslizar pollo fuego fuerte 1min a blanco|Añadir salsa fuego fuerte 1min|Añadir cacahuetes/cebolla blanca rápida 10seg|Servir inmediatamente', n_zh:'正宗宫保，专业水准', n_en:'Authentic professional', n_ja:'本格カンパオプロ', n_ko:'정통 쿵파오 프로', n_fr:'Authentique professionnel', n_es:'Auténtico profesional' },
        { recipe:1, level:5, ing_zh:'鸡胸肉400g,花生100g,干红辣椒8个,花椒2勺,葱白4段,姜6片,蒜6瓣,生抽3勺,老抽2勺,料酒3勺,醋2勺,白糖3勺,淀粉2.5勺,盐1.5小勺,白胡椒1.5小勺,香油1勺', ing_en:'Chicken breast 400g, Peanuts 100g, Dried chili 8, Sichuan pepper 2tbsp, White scallion 4, Ginger 6, Garlic 6, Light soy sauce 3tbsp, Dark soy sauce 2tbsp, Cooking wine 3tbsp, Vinegar 2tbsp, Sugar 3tbsp, Cornstarch 2.5tbsp, Salt 1.5tsp, White pepper 1.5tsp, Sesame oil 1tbsp', ing_ja:'鶏胸肉400g,落花生100g,乾燥唐辛子8本,山椒2大さじ,白ネギ4本,ショウガ6枚,ニンニク6個,薄口醤油3大さじ,濃口醤油2大さじ,料理酒3大さじ,酢2大さじ,砂糖3大さじ,片栗粉2.5大さじ,塩1.5小さじ,白胡椒1.5小さじ,ごま油1大さじ', ing_ko:'닭가슴살400g,땅콩100g,말린고추8개,산초2큰술,대파흰부4개,생강6쪽,마늘6개,간장3큰술,진간장2큰술,요리술3큰술,식초2큰술,설탕3큰술,전분2.5큰술,소금1.5작은술,후추1.5작은술,참기름1큰술', ing_fr:'Blanc de poulet 400g, Arachides 100g, Piment sec 8, Poivre du Sichuan 2càs, Oignon blanc 4, Gingembre 6, Ail 6, Sauce soja légère 3càs, Sauce soja noire 2càs, Vin 3càs, Vinaigre 2càs, Sucre 3càs, Fécule 2.5càs, Sel 1.5càc, Poivre blanc 1.5càc, Huile de sésame 1càs', ing_es:'Pechuga de pollo 400g, Cacahuetes 100g, Chile seco 8, Pimienta de Sichuan 2cuch, Cebolla blanca 4, Jengibre 6, Ajo 6, Salsa soja clara 3cuch, Salsa soja oscura 2cuch, Vino 3cuch, Vinagre 2cuch, Azúcar 3cuch, Almidón 2.5cuch, Sal 1.5cucharadita, Pimienta blanca 1.5cucharadita, Aceite de sésamo 1cuch', st_zh:'鸡胸肉去筋膜切1cm小丁，加料酒盐白胡椒淀粉少许油抓匀腌25分钟|调精确碗汁：糖醋生抽老抽完美比例加少许水|花生炸金黄酥脆|冷油下花椒小火炸1.5分钟香捞出|下辣椒段炸微焦|下肉末大火炒散出油|下葱姜蒜大火爆香30秒|滑入鸡肉大火快炒1分钟|倒碗汁大火翻炒约1分钟至浓稠|加炸花生|淋香油撒鸡精|快速翻炒10秒|立即关火出锅', st_en:'Trim chicken 1cm small, marinate with wine/salt/pepper/starch/little oil 25 mins|Perfect sauce ratio with little water|Fry peanuts golden crispy|Cold oil fry Sichuan pepper low 1.5min fragrant remove|Fry chili slightly charred|High heat fry aromatics 30sec|Slide chicken high 1min|Add sauce high 1min to thicken|Add fried peanuts|Drizzle sesame oil sprinkle bouillon|Quick stir 10sec|Turn off and serve immediately', st_ja:'鶏肉筋取り1cm小切り酒塩白胡椒片栗粉少し油で25分漬け|完璧なソース比率少し水|落花生黄金カリカリ|冷たい油山椒弱火1.5分香り出し取る|唐辛子少し焦|香り強火30秒|鶏肉滑り入れ強火1分|ソース入れ強火1分濃く|炒めた落花生入れ|ごま油垂らしブイヨン|10秒|すぐ火止め盛り付け', st_ko:'닭가슴살 힘줄 제거1cm小切り요리술소금후추전분약간 기름으로25分 절이기|완벽한 소스 비율 약간 물|땅콩 황금 바삭|차가운 기름 산초 약불1.5分 향기 내고 제거|고추 약간焦|향기 강불30秒|닭고기 슬라이드 강불1分|소스 넣고 강불1分 걸쭉하게|볶은 땅콩 넣어|참기름 뿌려 스톡|10秒|즉시 불 끄고 접시에', st_fr:'Nettoyer poulet 1cm petit, mariner vin/sel/poivre/fécule/peu huile 25 mins|Ratio sauce parfait peu d\'eau|Faire frire arachides dorées croustillantes|Huile froide faire revenir poivre Sichuan feu doux 1.5min parfumé retirer|Faire frire piment légèrement carbonisé|Faire revenir aromatiques feu fort 30sec|Glisser poulet feu fort 1min|Ajouter sauce feu fort 1min à épaissir|Ajouter arachides frites|Verser huile de sésame saupoudrer bouillon|Mélanger rapide 10sec|Éteindre et servir immédiatement', st_es:'Recortar pollo 1cm pequeño, marinar vino/sal/pimienta/almidón/peu aceite 25 mins|Ratio salsa perfecta poco agua|Freír cacahuetes doradas crujientes|Aceite frío freír pimienta Sichuan fuego suave 1.5min perfumada retirar|Freír chile ligeramente carbonizado|Sofreír aromáticos fuego fuerte 30seg|Deslizar pollo fuego fuerte 1min|Añadir salsa fuego fuerte 1min a espesar|Añadir cacahuetes fritos|Rociar aceite de sésamo espolvorear caldo|Mezclar rápida 10seg|Apagar y servir inmediatamente', n_zh:'大师级宫保鸡丁，人间绝味', n_en:'Master level, heavenly flavor', n_ja:'マスター級、天国の味', n_ko:'마스터급, 천국 맛', n_fr:'Niveau maîtrise, divin', n_es:'Nivel maestro, sabor celestial' }
    );
    
    for (let recipeId = 2; recipeId <= 54; recipeId++) {
        for (let level = 1; level <= 5; level++) {
            const recipe = allRecipes.find(r => r.id === recipeId);
            const baseIngredients = `${recipe.name_zh}主料${200 + recipeId * 10 + level * 20}g${level > 2 ? ',葱2根,姜3片,蒜3瓣' : ''}${level > 3 ? ',生抽2勺,料酒1勺,盐1小勺' : ''}${level > 4 ? ',白糖1勺,淀粉1勺,香油1勺' : ''}`;
            const baseSteps = '食材洗净处理|锅加油烧热|放入食材翻炒|加调料调味|炒熟装盘';
            levels.push({
                recipe: recipeId, level: level,
                ing_zh: baseIngredients,
                ing_en: `${recipe.name_en} main ingredient ${200 + recipeId * 10 + level * 20}g${level > 2 ? ', Green onions 2, Ginger 3, Garlic 3' : ''}${level > 3 ? ', Light soy sauce 2tbsp, Cooking wine 1tbsp, Salt 1tsp' : ''}${level > 4 ? ', Sugar 1tbsp, Cornstarch 1tbsp, Sesame oil 1tbsp' : ''}`,
                ing_ja: `${recipe.name_ja}材料${200 + recipeId * 10 + level * 20}g${level > 2 ? ',ネギ2本,ショウガ3枚,ニンニク3個' : ''}${level > 3 ? ',薄口醤油2大さじ,料理酒1大さじ,塩1小さじ' : ''}${level > 4 ? ',砂糖1大さじ,片栗粉1大さじ,ごま油1大さじ' : ''}`,
                ing_ko: `${recipe.name_ko} 주재료${200 + recipeId * 10 + level * 20}g${level > 2 ? ',대파2개,생강3쪽,마늘3개' : ''}${level > 3 ? ',간장2큰술,요리술1큰술,소금1작은술' : ''}${level > 4 ? ',설탕1큰술,전분1큰술,참기름1큰술' : ''}`,
                ing_fr: `${recipe.name_fr} ingrédient principal ${200 + recipeId * 10 + level * 20}g${level > 2 ? ', Oignons verts 2, Gingembre 3, Ail 3' : ''}${level > 3 ? ', Sauce soja légère 2càs, Vin 1càs, Sel 1càc' : ''}${level > 4 ? ', Sucre 1càs, Fécule 1càs, Huile de sésame 1càs' : ''}`,
                ing_es: `${recipe.name_es} ingrediente principal ${200 + recipeId * 10 + level * 20}g${level > 2 ? ', Cebollas verdes 2, Jengibre 3, Ajo 3' : ''}${level > 3 ? ', Salsa soja clara 2cuch, Vino 1cuch, Sal 1cucharadita' : ''}${level > 4 ? ', Azúcar 1cuch, Almidón 1cuch, Aceite de sésamo 1cuch' : ''}`,
                st_zh: baseSteps,
                st_en: 'Wash and prep ingredients|Heat oil in pan|Add ingredients and stir fry|Add seasonings|Cook through and serve',
                st_ja: '材料洗い下処理|油でフライパン熱く|材料入れ炒め|調味料入れ|炒め盛り付け',
                st_ko: '재료 씻고 준비|기름으로 팬 뜨겁게|재료 넣고 볶아|양념 넣고|익혀 접시에',
                st_fr: 'Laver et préparer ingrédients|Chauffer huile dans la poêle|Ajouter ingrédients et faire sauter|Ajouter assaisonnements|Cuire et servir',
                st_es: 'Lavar y preparar ingredientes|Calentar aceite en la sartén|Añadir ingredientes y saltear|Añadir condimentos|Cuire et servir',
                n_zh: `${recipe.name_zh}难度${level}级`,
                n_en: `${recipe.name_en} difficulty ${level}`,
                n_ja: `${recipe.name_ja}難易度${level}`,
                n_ko: `${recipe.name_ko} 난이도${level}`,
                n_fr: `${recipe.name_fr} difficulté ${level}`,
                n_es: `${recipe.name_es} dificultad ${level}`
            });
        }
    }
    
    console.log('Inserting', levels.length, 'levels');
    
    let levelCount = 0;
    levels.forEach(l => {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [l.recipe, l.level, l.ing_zh, l.ing_en, l.ing_ja, l.ing_ko, l.ing_fr, l.ing_es, l.st_zh, l.st_en, l.st_ja, l.st_ko, l.st_fr, l.st_es, l.n_zh, l.n_en, l.n_ja, l.n_ko, l.n_fr, l.n_es],
            (err) => {
                if (err) console.error('Level error:', l.recipe, l.level, err.message);
                levelCount++;
                if (levelCount === levels.length) {
                    verifyData();
                }
            }
        );
    });
}

function verifyData() {
    db.all('SELECT * FROM recipes', (err, recipes) => {
        if (err) console.error('Error:', err);
        else console.log('Recipes count:', recipes.length);
        
        db.all('SELECT * FROM levels', (err, levels) => {
            if (err) console.error('Error:', err);
            else console.log('Levels count:', levels.length);
            
            db.close(() => {
                console.log('Done! Database initialized successfully with 54 recipes!');
                console.log('DB path:', dbPath);
                
                const fs = require('fs');
                const targetPath = path.join(__dirname, 'recipes.db');
                if (dbPath !== targetPath) {
                    if (fs.existsSync(targetPath)) {
                        try {
                            fs.unlinkSync(targetPath);
                        } catch (e) {
                            console.log('Could not replace old DB, but new DB is at:', dbPath);
                        }
                    }
                    try {
                        fs.renameSync(dbPath, targetPath);
                        console.log('Moved to:', targetPath);
                    } catch (e) {
                        console.log('Could not rename, keep as:', dbPath);
                    }
                }
            });
        });
    });
}
