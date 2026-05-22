const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'recipes-new.db');
const db = new sqlite3.Database(dbPath);

const allRecipes = [
  { id: 1, slug: 'kung-pao-chicken', name_zh: '宫保鸡丁', name_en: 'Kung Pao Chicken', name_ja: 'カンパオチキン', name_ko: '쿵파오 치킨', name_fr: 'Poulet Kung Pao', name_es: 'Pollo Kung Pao' },
  { id: 2, slug: 'mapo-tofu', name_zh: '麻婆豆腐', name_en: 'Mapo Tofu', name_ja: 'マーボー豆腐', name_ko: '마파두부', name_fr: 'Tofu Mapo', name_es: 'Tofu Mapo' },
  { id: 3, slug: 'fried-rice', name_zh: '蛋炒饭', name_en: 'Egg Fried Rice', name_ja: 'チャーハン', name_ko: '볶음밥', name_fr: 'Riz sauté aux oeufs', name_es: 'Arroz frito con huevos' },
  { id: 4, slug: 'sweet-sour-pork', name_zh: '糖醋里脊', name_en: 'Sweet and Sour Pork', name_ja: '酢豚', name_ko: '탕수육', name_fr: 'Porc aigre-doux', name_es: 'Cerdo agridulce' },
  { id: 5, slug: 'red-braised-pork', name_zh: '红烧肉', name_en: 'Red Braised Pork', name_ja: '紅焼肉', name_ko: '홍소고기', name_fr: 'Porc braisé rouge', name_es: 'Cerdo guisado rojo' },
  { id: 6, slug: 'hot-pot', name_zh: '火锅', name_en: 'Hot Pot', name_ja: '火鍋', name_ko: '훠궈', name_fr: 'Fondue chinoise', name_es: 'Olla china' },
  { id: 7, slug: 'peking-duck', name_zh: '北京烤鸭', name_en: 'Peking Duck', name_ja: '北京ダック', name_ko: '베이징 오리', name_fr: 'Canard laqué de Pékin', name_es: 'Pato laqueado de Pekín' },
  { id: 8, slug: 'dumplings', name_zh: '饺子', name_en: 'Dumplings', name_ja: '餃子', name_ko: '만두', name_fr: 'Raviolis chinois', name_es: 'Dumplings chinos' },
  { id: 9, slug: 'xiao-long-bao', name_zh: '小笼包', name_en: 'Xiaolongbao', name_ja: '小籠包', name_ko: '샤오롱바오', name_fr: 'Xiaolongbao', name_es: 'Xiaolongbao' },
  { id: 10, slug: 'kung-pao-shrimp', name_zh: '宫保虾球', name_en: 'Kung Pao Shrimp', name_ja: 'カンパオ海老', name_ko: '쿵파오 새우', name_fr: 'Crevettes Kung Pao', name_es: 'Camarones Kung Pao' },
  { id: 11, slug: 'twice-cooked-pork', name_zh: '回锅肉', name_en: 'Twice Cooked Pork', name_ja: '回鍋肉', name_ko: '회포육', name_fr: 'Porc cuit deux fois', name_es: 'Cerdo cocido dos veces' },
  { id: 12, slug: 'fish-fragrant-pork', name_zh: '鱼香肉丝', name_en: 'Fish-Fragrant Pork', name_ja: '魚香肉絲', name_ko: '어향육사', name_fr: 'Porc parfumé au poisson', name_es: 'Cerdo aromatizado a pescado' },
  { id: 13, slug: 'black-bean-sauce-ribs', name_zh: '豆豉排骨', name_en: 'Black Bean Sauce Ribs', name_ja: '豆豉排骨', name_ko: '두시 갈비', name_fr: 'Côtes de porc sauce soja', name_es: 'Costillas salsa soja negra' },
  { id: 14, slug: 'steamed-fish', name_zh: '清蒸鱼', name_en: 'Steamed Fish', name_ja: '蒸し魚', name_ko: '찜생선', name_fr: 'Poisson vapeur', name_es: 'Pescado al vapor' },
  { id: 15, slug: 'braised-shrimp', name_zh: '油焖大虾', name_en: 'Braised Shrimp', name_ja: '油煮え海老', name_ko: '기름 삶은 새우', name_fr: 'Crevettes braisées', name_es: 'Camarones guisados' },
  { id: 16, slug: 'sichuan-spicy-fish', name_zh: '水煮鱼', name_en: 'Sichuan Spicy Fish', name_ja: '四川麻辣魚', name_ko: '쓰촨 마라 생선', name_fr: 'Poisson épicé du Sichuan', name_es: 'Pescado picante de Sichuan' },
  { id: 17, slug: 'dry-pot-chicken', name_zh: '干锅鸡', name_en: 'Dry Pot Chicken', name_ja: '乾鍋鶏', name_ko: '건냄비 닭', name_fr: 'Poulet en pot sec', name_es: 'Pollo en olla seca' },
  { id: 18, slug: 'yangzhou-fried-rice', name_zh: '扬州炒饭', name_en: 'Yangzhou Fried Rice', name_ja: '揚州炒飯', name_ko: '양주 볶음밥', name_fr: 'Riz sauté de Yangzhou', name_es: 'Arroz frito de Yangzhou' },
  { id: 19, slug: 'clay-pot-rice', name_zh: '煲仔饭', name_en: 'Clay Pot Rice', name_ja: '土鍋ご飯', name_ko: '토솥밥', name_fr: 'Riz en pot de terre', name_es: 'Arroz en olla de barro' },
  { id: 20, slug: 'congee', name_zh: '粥', name_en: 'Congee', name_ja: 'お粥', name_ko: '죽', name_fr: 'Congee', name_es: 'Gachas de arroz' },
  { id: 21, slug: 'steamed-pork-bun', name_zh: '肉包子', name_en: 'Steamed Pork Bun', name_ja: '肉包子', name_ko: '고기만두', name_fr: 'Pain farci au porc', name_es: 'Pan relleno de cerdo' },
  { id: 22, slug: 'spring-onion-pancake', name_zh: '葱油饼', name_en: 'Spring Onion Pancake', name_ja: 'ネギ焼き', name_ko: '파전', name_fr: 'Crêpe aux oignons', name_es: 'Tortilla de cebolla' },
  { id: 23, slug: 'tang-yuan', name_zh: '汤圆', name_en: 'Tangyuan', name_ja: '団子', name_ko: '탕위안', name_fr: 'Tangyuan', name_es: 'Tangyuan' },
  { id: 24, slug: 'zongzi', name_zh: '粽子', name_en: 'Zongzi', name_ja: '粽', name_ko: '종자', name_fr: 'Zongzi', name_es: 'Zongzi' },
  { id: 25, slug: 'moon-cake', name_zh: '月饼', name_en: 'Moon Cake', name_ja: '月餅', name_ko: '월병', name_fr: 'Gâteau de lune', name_es: 'Pastel de luna' },
  { id: 26, slug: 'century-egg', name_zh: '皮蛋', name_en: 'Century Egg', name_ja: '皮蛋', name_ko: '계란절임', name_fr: 'Œuf du siècle', name_es: 'Huevo del siglo' },
  { id: 27, slug: 'stir-fried-greens', name_zh: '炒青菜', name_en: 'Stir-Fried Greens', name_ja: '野菜炒め', name_ko: '야채 볶음', name_fr: 'Légumes sautés', name_es: 'Verduras salteadas' },
  { id: 28, slug: 'eggplant-in-garlic-sauce', name_zh: '鱼香茄子', name_en: 'Eggplant in Garlic Sauce', name_ja: '魚香茄子', name_ko: '어향 가지', name_fr: 'Aubergine sauce ail', name_es: 'Berenjena salsa ajo' },
  { id: 29, slug: 'dry-fried-green-beans', name_zh: '干煸四季豆', name_en: 'Dry-Fried Green Beans', name_ja: '乾燥インゲン炒め', name_ko: '건조볶음 강낭콩', name_fr: 'Haricots verts frits', name_es: 'Judías verdes fritas' },
  { id: 30, slug: 'bok-choy-garlic', name_zh: '蒜蓉小白菜', name_en: 'Bok Choy with Garlic', name_ja: 'ニンニク小白菜', name_ko: '마늘 청경채', name_fr: 'Pak choi à l\'ail', name_es: 'Bok choy con ajo' },
  { id: 31, slug: 'sour-spicy-soup', name_zh: '酸辣汤', name_en: 'Hot and Sour Soup', name_ja: '酸辣湯', name_ko: '신라탕', name_fr: 'Soupe aigre-pimentée', name_es: 'Sopa agria picante' },
  { id: 32, slug: 'wonton-soup', name_zh: '馄饨汤', name_en: 'Wonton Soup', name_ja: 'ワンタンスープ', name_ko: '훈톤 수프', name_fr: 'Soupe wonton', name_es: 'Sopa wonton' },
  { id: 33, slug: 'egg-drop-soup', name_zh: '蛋花汤', name_en: 'Egg Drop Soup', name_ja: '卵花スープ', name_ko: '계란탕', name_fr: 'Soupe aux œufs', name_es: 'Sopa de huevo' },
  { id: 34, slug: 'luffa-soup', name_zh: '丝瓜汤', name_en: 'Luffa Soup', name_ja: 'ヘチマスープ', name_ko: '수세미 수프', name_fr: 'Soupe de luffa', name_es: 'Sopa de luffa' },
  { id: 35, slug: 'lotus-root-soup', name_zh: '莲藕汤', name_en: 'Lotus Root Soup', name_ja: 'レンコンスープ', name_ko: '연근 수프', name_fr: 'Soupe de lotus', name_es: 'Sopa de raíz de loto' },
  { id: 36, slug: 'sweet-red-bean-soup', name_zh: '红豆汤', name_en: 'Sweet Red Bean Soup', name_ja: 'あんこスープ', name_ko: '팥죽', name_fr: 'Soupe haricots rouges', name_es: 'Sopa frijoles rojos' },
  { id: 37, slug: 'kung-pao-tofu', name_zh: '宫保豆腐', name_en: 'Kung Pao Tofu', name_ja: 'カンパオ豆腐', name_ko: '쿵파오 두부', name_fr: 'Tofu Kung Pao', name_es: 'Tofu Kung Pao' },
  { id: 38, slug: 'dongpo-pork', name_zh: '东坡肉', name_en: 'Dongpo Pork', name_ja: '東坡肉', name_ko: '동파육', name_fr: 'Porc Dongpo', name_es: 'Cerdo Dongpo' },
  { id: 39, slug: 'lion-head-meatballs', name_zh: '狮子头', name_en: 'Lion Head Meatballs', name_ja: '獅子頭', name_ko: '사자머리', name_fr: 'Boulettes tête de lion', name_es: 'Albóndigas cabeza león' },
  { id: 40, slug: 'sweet-potato-soup', name_zh: '红薯糖水', name_en: 'Sweet Potato Soup', name_ja: 'サツマイモスープ', name_ko: '고구마 수프', name_fr: 'Soupe patate douce', name_es: 'Sopa de camote' },
  { id: 41, slug: 'spicy-tofu-salad', name_zh: '皮蛋豆腐', name_en: 'Century Egg Tofu', name_ja: '皮蛋豆腐', name_ko: '계란절임 두부', name_fr: 'Tofu œuf siècle', name_es: 'Tofu huevo siglo' },
  { id: 42, slug: 'cold-cucumber-salad', name_zh: '拍黄瓜', name_en: 'Cucumber Salad', name_ja: 'きゅうりサラダ', name_ko: '오이 샐러드', name_fr: 'Salade concombre', name_es: 'Ensalada pepino' },
  { id: 43, slug: 'spicy-chicken-feet', name_zh: '泡椒凤爪', name_en: 'Spicy Chicken Feet', name_ja: '鶏足ピリ辛', name_ko: '닭발 매운맛', name_fr: 'Pattes poulet piment', name_es: 'Patas pollo picantes' },
  { id: 44, slug: 'sugar-tomatoes', name_zh: '糖拌西红柿', name_en: 'Sugar Tomatoes', name_ja: '砂糖トマト', name_ko: '설탕 토마토', name_fr: 'Tomates au sucre', name_es: 'Tomates con azúcar' },
  { id: 45, slug: 'cold-noodles', name_zh: '凉面', name_en: 'Cold Noodles', name_ja: '冷麺', name_ko: '냉면', name_fr: 'Nouilles froides', name_es: 'Fideos fríos' },
  { id: 46, slug: 'fried-chicken', name_zh: '炸鸡', name_en: 'Fried Chicken', name_ja: '唐揚げ', name_ko: '후라이드 치킨', name_fr: 'Poulet frit', name_es: 'Pollo frito' },
  { id: 47, slug: 'scallion-oil-chicken', name_zh: '葱油鸡', name_en: 'Scallion Oil Chicken', name_ja: 'ネギ油鶏', name_ko: '파기름 닭', name_fr: 'Poulet huile ciboule', name_es: 'Pollo aceite cebollino' },
  { id: 48, slug: 'white-cut-chicken', name_zh: '白切鸡', name_en: 'White Cut Chicken', name_ja: '白切り鶏', name_ko: '백절계', name_fr: 'Poulet cuit blanc', name_es: 'Pollo cocido blanco' },
  { id: 49, slug: 'soy-sauce-chicken', name_zh: '酱油鸡', name_en: 'Soy Sauce Chicken', name_ja: '醤油鶏', name_ko: '간장 닭', name_fr: 'Poulet sauce soja', name_es: 'Pollo salsa soja' },
  { id: 50, slug: 'tea-smoked-duck', name_zh: '樟茶鸭', name_en: 'Tea-Smoked Duck', name_ja: '茶燻製ダック', name_ko: '차 훈제 오리', name_fr: 'Canard fumé thé', name_es: 'Pato ahumado té' },
  { id: 51, slug: 'roast-pork', name_zh: '叉烧', name_en: 'Char Siu', name_ja: '叉焼', name_ko: '차슈', name_fr: 'Char Siu', name_es: 'Char Siu' },
  { id: 52, slug: 'white-pepper-pig-stomach', name_zh: '白胡椒猪肚', name_en: 'White Pepper Pig Stomach', name_ja: '白胡椒豚胃', name_ko: '백후추 돼지위', name_fr: 'Estomac porc poivre blanc', name_es: 'Estómago cerdo pimienta' },
  { id: 53, slug: 'five-flower-pork', name_zh: '梅菜扣肉', name_en: 'Pork with Preserved Vegetables', name_ja: '梅菜扣肉', name_ko: '매채고기', name_fr: 'Porc légumes conservés', name_es: 'Cerdo vegetales conservados' },
  { id: 54, slug: 'sweet-sour-ribs', name_zh: '糖醋排骨', name_en: 'Sweet and Sour Ribs', name_ja: '酢豚排骨', name_ko: '탕수 갈비', name_fr: 'Côtes aigre-douces', name_es: 'Costillas agridulces' }
];

const allLevels = [];

// ========== 宫保鸡丁 - Kung Pao Chicken ==========
allLevels.push(
  { recipe: 1, level: 1,
    ingredients_zh: '鸡胸肉200g，花生50g，葱2根，生抽2勺，白糖1勺',
    ingredients_en: 'Chicken breast 200g, Peanuts 50g, Green onions 2, Light soy sauce 2 tbsp, Sugar 1 tbsp',
    ingredients_ja: '鶏胸肉200g, 落花生50g, ネギ2本, 薄口醤油2大さじ, 砂糖1大さじ',
    ingredients_ko: '닭가슴살200g, 땅콩50g, 대파2개, 간장2큰술, 설탕1큰술',
    ingredients_fr: 'Blanc poulet 200g, Arachides 50g, Oignons verts 2, Sauce soja 2 càs, Sucre 1 càs',
    ingredients_es: 'Pechuga pollo 200g, Cacahuetes 50g, Cebollas verdes 2, Salsa soja 2 cdas, Azúcar 1 cda',
    steps_zh: '鸡胸肉洗净擦干，切成1.5cm小丁|锅中放入2勺油烧热|放入鸡丁翻炒约3分钟至表面变白|加入2勺生抽和1勺白糖翻炒均匀|放入花生米关火翻炒1分钟|出锅装盘即可',
    steps_en: 'Wash and dry chicken, cut into 1.5cm cubes|Heat 2 tbsp oil in pan|Add chicken and stir-fry 3 minutes until white|Add 2 tbsp soy sauce and 1 tbsp sugar, stir well|Add peanuts, turn off heat and stir 1 minute|Serve',
    steps_ja: '鶏胸肉を洗い1.5cm角に切る|フライパンに油2大さじを熱する|鶏肉を入れて3分炒める|醤油2と砂糖1を加えて混ぜる|落花生を加えて火を止め1分炒める|盛り付ける',
    steps_ko: '닭가슴살을 씻어 1.5cm로 자르다|팬에 기름2큰술을 데우다|닭고기를 넣고 3분간 볶다|간장2와 설탕1을 넣고 섞다|땅콩을 넣고 불끄고 1분간 볶다|접시에 담다',
    steps_fr: 'Laver et couper le poulet en cubes de 1.5cm|Chauffer 2 càs d\'huile|Ajouter le poulet et faire revenir 3 min|Ajouter sauce soja et sucre, mélanger|Ajouter les arachides, éteindre et mélanger 1 min|Servir',
    steps_es: 'Lavar y cortar pollo en cubos de 1.5cm|Calentar 2 cdas de aceite|Agregar pollo y saltear 3 minutos|Agregar salsa soja y azúcar, mezclar|Agregar cacahuetes, apagar fuego y mezclar 1 min|Servir',
    note_zh: '新手入门级，简单快手', note_en: 'Beginner level, quick and easy', note_ja: '初心者向け、簡単', note_ko: '초보자용, 빠르고 쉬움', note_fr: 'Niveau débutant, rapide', note_es: 'Nivel principiante, rápido'
  },
  { recipe: 1, level: 2,
    ingredients_zh: '鸡胸肉250g，花生60g，干红辣椒3个，葱2根，姜3片，蒜3瓣，生抽2勺，料酒1勺，白糖1勺',
    ingredients_en: 'Chicken breast 250g, Peanuts 60g, Dried chili 3, Green onions 2, Ginger 3 slices, Garlic 3 cloves, Soy sauce 2 tbsp, Wine 1 tbsp, Sugar 1 tbsp',
    ingredients_ja: '鶏胸肉250g, 落花生60g, 唐辛子3本, ネギ2本, 生姜3枚, ニンニク3片, 醤油2大さじ, 酒1大さじ, 砂糖1大さじ',
    ingredients_ko: '닭가슴살250g, 땅콩60g, 마른고추3개, 대파2개, 생강3쪽, 마늘3개, 간장2큰술, 요리술1큰술, 설탕1큰술',
    ingredients_fr: 'Blanc poulet 250g, Arachides 60g, Piment sec 3, Oignons verts 2, Gingembre 3 tr, Ail 3 g, Sauce soja 2 càs, Vin 1 càs, Sucre 1 càs',
    ingredients_es: 'Pechuga pollo 250g, Cacahuetes 60g, Chile seco 3, Cebollas verdes 2, Jengibre 3 rod, Ajo 3 d, Salsa soja 2 cdas, Vino 1 cda, Azúcar 1 cda',
    steps_zh: '鸡胸肉洗净切丁，加料酒腌10分钟|葱姜蒜切好，辣椒剪成小段|锅中放油，中火爆香葱姜蒜和辣椒|放入鸡丁大火快速翻炒2分钟|加入生抽和白糖翻炒均匀|最后放入花生，关火翻炒几下|装盘上桌',
    steps_en: 'Dice chicken, marinate with wine for 10 min|Chop onion/ginger/garlic, cut chili|Heat oil, stir-fry aromatics and chili on medium|Add chicken, stir-fry on high for 2 min|Add soy sauce and sugar, stir well|Add peanuts, turn off heat and stir|Serve',
    steps_ja: '鶏肉を切り酒で10分漬ける|ネギ生姜ニンニクを刻み唐辛子を切る|油を熱し香味野菜と唐辛子を炒める|鶏肉を加え強火で2分炒める|醤油と砂糖を加え混ぜる|落花生を加え火を止め混ぜる|盛り付ける',
    steps_ko: '닭고기를 자르고 술로 10분간 절이다|파 생강 마늘을 썰고 고추를 자르다|기름을 데우고 향신료와 고추를 볶다|닭고기를 넣고 강불로 2분간 볶다|간장과 설탕을 넣고 섞다|땅콩을 넣고 불끄고 섞다|접시에 담다',
    steps_fr: 'Couper le poulet, mariner avec vin 10 min|Hacher oignon/gingembre/ail, couper piment|Chauffer huile, revenir aromates et piment|Ajouter poulet, sauter à feu vif 2 min|Ajouter sauce soja et sucre, mélanger|Ajouter arachides, éteindre et mélanger|Servir',
    steps_es: 'Cortar pollo, marinar con vino 10 min|Picar cebolla/jengibre/ajo, cortar chile|Calentar aceite, sofreír aromáticos y chile|Agregar pollo, saltear a fuego alto 2 min|Agregar salsa soja y azúcar, mezclar|Agregar cacahuetes, apagar y mezclar|Servir',
    note_zh: '入门进阶，有香料加持', note_en: 'Intermediate level, with spices', note_ja: '中級、スパイス付き', note_ko: '중급, 향신료 포함', note_fr: 'Niveau intermédiaire, épices', note_es: 'Nivel intermedio, especias'
  },
  { recipe: 1, level: 3,
    ingredients_zh: '鸡胸肉300g，花生70g，干红辣椒5个，花椒1勺，葱白2段，姜4片，蒜4瓣，生抽2勺，老抽1勺，料酒1.5勺，醋1勺，白糖1.5勺，淀粉1.5勺',
    ingredients_en: 'Chicken 300g, Peanuts 70g, Dried chili 5, Sichuan pepper 1 tbsp, Scallion 2, Ginger 4 sl, Garlic 4 cl, Light soy sauce 2 tbsp, Dark soy 1 tbsp, Wine 1.5 tbsp, Vinegar 1 tbsp, Sugar 1.5 tbsp, Cornstarch 1.5 tbsp',
    ingredients_ja: '鶏肉300g, 落花生70g, 唐辛子5本, 山椒1大さじ, ネギ2本, 生姜4枚, ニンニク4片, 薄口醤油2, 濃口醤油1, 酒1.5, 酢1, 砂糖1.5, 片栗粉1.5大さじ',
    ingredients_ko: '닭고기300g, 땅콩70g, 마른고추5개, 산초1큰술, 대파2개, 생강4쪽, 마늘4개, 간장2, 진간장1, 요리술1.5, 식초1, 설탕1.5, 전분1.5큰술',
    ingredients_fr: 'Poulet 300g, Arachides 70g, Piment sec 5, Poivre Sichuan 1 càs, Oignon blanc 2, Gingembre 4 tr, Ail 4 g, Sauce soja 2, Noire 1, Vin 1.5, Vinaigre 1, Sucre 1.5, Fécule 1.5 càs',
    ingredients_es: 'Pollo 300g, Cacahuetes 70g, Chile seco 5, Pimienta Sichuan 1 cda, Cebolla 2, Jengibre 4 r, Ajo 4 d, Salsa soja 2, Oscura 1, Vino 1.5, Vinagre 1, Azúcar 1.5, Almidón 1.5 cdas',
    steps_zh: '鸡胸肉切1.5cm丁，加料酒淀粉抓匀腌15分钟|碗汁：糖醋生抽老抽混合均匀|花生炸至金黄捞出备用|锅留底油，小火炸花椒出香后捞出|下辣椒段炸至微焦|下葱姜蒜大火爆香|放鸡肉大火快炒1分钟至变色|倒碗汁快速翻炒裹匀|加花生翻炒几下即可装盘',
    steps_en: 'Cut chicken into 1.5cm cubes, marinate with wine and cornstarch 15 min|Mix sauce: sugar, vinegar, soy sauces|Fry peanuts golden, set aside|Fry Sichuan pepper in oil until fragrant, remove|Fry chili until slightly charred|Stir-fry aromatics on high heat|Add chicken, stir-fry 1 min|Add sauce and stir quickly to coat|Add peanuts, toss and serve',
    steps_ja: '鶏肉を1.5cmに切り酒と片栗粉で15分漬ける|ソースを混ぜる|落花生を黄金色に炒める|山椒を油で香りが出るまで炒め取り出す|唐辛子を焦げ目がつくまで炒める|香味野菜を強火で炒める|鶏肉を加え1分炒める|ソースを加えて絡める|落花生を加えて混ぜ盛り付ける',
    steps_ko: '닭고기를 1.5cm로 자르고 술과 전분으로 15분 절이다|소스를 섞다|땅콩을 황금빛으로 볶다|산초를 기름에 향기나게 볶아 건지다|고추를 약간 탈색하게 볶다|향신료를 강불로 볶다|닭고기를 넣고 1분 볶다|소스를 넣고 코팅|땅콩을 넣고 섞어 접시에 담다',
    steps_fr: 'Couper poulet 1.5cm, mariner vin+fécule 15 min|Mélanger sauce|Frire arachides dorées|Frire poivre Sichuan parfumé, retirer|Frire piment légèrement carbonisé|Revenir aromates à feu vif|Ajouter poulet, sauter 1 min|Ajouter sauce, mélanger|Ajouter arachides, servir',
    steps_es: 'Cortar pollo 1.5cm, marinar vino+almidón 15 min|Mezclar salsa|Freír cacahuetes dorados|Freír pimienta Sichuan aromática, retirar|Freír chile ligeramente carbonizado|Sofreír aromáticos fuego alto|Agregar pollo, saltear 1 min|Agregar salsa, mezclar|Agregar cacahuetes, servir',
    note_zh: '经典麻辣口味', note_en: 'Classic spicy numbing flavor', note_ja: 'クラシック麻辣味', note_ko: '클래식 마라 맛', note_fr: 'Saveur piquante classique', note_es: 'Sabor picante clásico'
  },
  { recipe: 1, level: 4,
    ingredients_zh: '鸡胸肉350g，花生80g，干辣椒6个，花椒1.5勺，葱白3段，姜5片，蒜5瓣，生抽2.5勺，老抽1.5勺，料酒2勺，醋1.5勺，白糖2勺，淀粉2勺，盐1小勺，白胡椒1小勺',
    ingredients_en: 'Chicken 350g, Peanuts 80g, Dried chili 6, Sichuan pepper 1.5 tbsp, Scallion 3, Ginger 5 sl, Garlic 5 cl, Soy sauce 2.5, Dark soy 1.5, Wine 2, Vinegar 1.5, Sugar 2, Cornstarch 2 tbsp, Salt 1 tsp, White pepper 1 tsp',
    ingredients_ja: '鶏肉350g, 落花生80g, 唐辛子6本, 山椒1.5, ネギ3本, 生姜5枚, ニンニク5, 醤油2.5, 濃口1.5, 酒2, 酢1.5, 砂糖2, 片栗粉2, 塩1, 白胡椒1',
    ingredients_ko: '닭고기350g, 땅콩80g, 고추6개, 산초1.5, 대파3, 생강5, 마늘5, 간장2.5, 진간장1.5, 요리술2, 식초1.5, 설탕2, 전분2, 소금1, 후추1',
    ingredients_fr: 'Poulet 350g, Arachides 80g, Piment 6, Poivre Sichuan 1.5, Oignon 3, Gingembre 5 tr, Ail 5 g, Sauce soja 2.5, Noire 1.5, Vin 2, Vinaigre 1.5, Sucre 2, Fécule 2, Sel 1 càc, Poivre blanc 1 càc',
    ingredients_es: 'Pollo 350g, Cacahuetes 80g, Chile 6, Pimienta Sichuan 1.5 cda, Cebolla 3, Jengibre 5 r, Ajo 5 d, Salsa soja 2.5, Oscura 1.5, Vino 2, Vinagre 1.5, Azúcar 2, Almidón 2, Sal 1 cdita, Pimienta blanca 1 cdita',
    steps_zh: '鸡胸肉切1.2cm丁，加料酒盐胡椒淀粉抓匀腌20分钟|调碗汁：糖醋生抽老抽比例完美混合|花生小火炸至酥脆金黄|冷油下花椒小火炸1分钟出香捞出|下辣椒段炸至暗红油亮|下葱姜蒜大火爆香30秒|滑入鸡肉大火快炒1分钟至变白|倒碗汁大火翻炒1分钟裹匀|加花生和葱白快速翻炒10秒|立即出锅装盘',
    steps_en: 'Cut chicken 1.2cm cubes, marinate with wine/salt/pepper/cornstarch 20 min|Mix perfect sauce ratio|Fry peanuts until crispy golden|Fry Sichuan pepper on low 1 min, remove|Fry chili until dark red|Stir-fry aromatics on high 30 sec|Add chicken, stir-fry on high 1 min|Add sauce, stir 1 min to coat|Add peanuts and scallion, toss 10 sec|Serve immediately',
    steps_ja: '鶏肉1.2cm切り酒塩胡椒片栗粉で20分漬ける|完璧なソースを混ぜる|落花生をカリカリに炒める|山椒を弱火で1分炒め取り出す|唐辛子を暗赤色に炒める|香味野菜を強火で30秒炒める|鶏肉を加え強火で1分炒める|ソースを加え1分絡める|落花生とネギを加え10秒炒める|すぐに盛り付ける',
    steps_ko: '닭고기1.2cm로 자르고 소금후추전분으로 20분 절이다|완벽한 소스를 섞다|땅콩을 바삭하게 볶다|산초를 약불로 1분 볶아 건지다|고추를 어둡게 볶다|향신료를 강불로 30초 볶다|닭고기를 넣고 강불로 1분 볶다|소스를 넣고 1분 코팅|땅콩과 대파를 넣고 10초 볶다|즉시 접시에 담다',
    steps_fr: 'Couper poulet 1.2cm, mariner sel/poivre/fécule 20 min|Mélanger sauce parfaite|Frire arachides croustillantes|Frire poivre Sichuan à feu doux 1 min|Frire piment rouge foncé|Revenir aromates à feu vif 30 sec|Ajouter poulet, sauter 1 min|Ajouter sauce, sauter 1 min|Ajouter arachides oignon, sauter 10 sec|Servir immédiatement',
    steps_es: 'Cortar pollo 1.2cm, marinar sal/pimienta/almidón 20 min|Mezclar salsa perfecta|Freír cacahuetes crujientes|Freír pimienta Sichuan fuego bajo 1 min|Freír chile rojo oscuro|Sofreír aromáticos fuego alto 30 seg|Agregar pollo, saltear 1 min|Agregar salsa, saltear 1 min|Agregar cacahuetes cebolla, 10 seg|Servir inmediatamente',
    note_zh: '正宗宫保，专业水准', note_en: 'Authentic Kung Pao, professional', note_ja: '本格カンパオ、プロ級', note_ko: '정통 쿵파오, 프로 수준', note_fr: 'Kung Pao authentique, pro', note_es: 'Kung Pao auténtico, profesional'
  },
  { recipe: 1, level: 5,
    ingredients_zh: '鸡胸肉400g，花生100g，干辣椒8个，花椒2勺，葱白4段，姜6片，蒜6瓣，生抽3勺，老抽2勺，料酒3勺，醋2勺，白糖3勺，淀粉2.5勺，盐1.5小勺，白胡椒1.5小勺，香油1勺',
    ingredients_en: 'Chicken 400g, Peanuts 100g, Dried chili 8, Sichuan pepper 2 tbsp, Scallion 4, Ginger 6, Garlic 6, Soy sauce 3, Dark soy 2, Wine 3, Vinegar 2, Sugar 3, Cornstarch 2.5 tbsp, Salt 1.5 tsp, Pepper 1.5 tsp, Sesame oil 1 tbsp',
    ingredients_ja: '鶏肉400g, 落花生100g, 唐辛子8, 山椒2, ネギ4, 生姜6, ニンニク6, 醤油3, 濃口2, 酒3, 酢2, 砂糖3, 片栗粉2.5, 塩1.5, 白胡椒1.5, ごま油1',
    ingredients_ko: '닭고기400g, 땅콩100g, 고추8, 산초2, 대파4, 생강6, 마늘6, 간장3, 진간장2, 요리술3, 식초2, 설탕3, 전분2.5, 소금1.5, 후추1.5, 참기름1',
    ingredients_fr: 'Poulet 400g, Arachides 100g, Piment 8, Poivre Sichuan 2 càs, Oignon 4, Gingembre 6 tr, Ail 6 g, Sauce soja 3, Noire 2, Vin 3, Vinaigre 2, Sucre 3, Fécule 2.5, Sel 1.5 càc, Poivre 1.5 càc, Huile sésame 1 càs',
    ingredients_es: 'Pollo 400g, Cacahuetes 100g, Chile 8, Pimienta Sichuan 2 cdas, Cebolla 4, Jengibre 6 r, Ajo 6 d, Salsa soja 3, Oscura 2, Vino 3, Vinagre 2, Azúcar 3, Almidón 2.5, Sal 1.5 cd, Pimienta 1.5 cd, Aceite sésamo 1 cda',
    steps_zh: '鸡胸肉去筋膜切1cm小丁，加料酒盐胡椒淀粉少许油抓匀腌25分钟|调碗汁：糖醋生抽老抽完美比例加少许水|花生小火炸至金黄酥脆捞出|冷油下花椒小火炸1.5分钟出香捞出|下辣椒段炸至微焦|下葱姜蒜大火爆香30秒|滑入鸡肉大火快炒1分钟至变色|倒碗汁大火翻炒至浓稠裹匀|加炸花生快速翻炒|淋香油撒少许葱花|快速翻炒10秒立即关火出锅',
    steps_en: 'Trim chicken, cut 1cm cubes, marinate with wine/salt/pepper/oil 25 min|Mix perfect sauce with water|Fry peanuts golden crispy|Fry Sichuan pepper on low 1.5 min|Fry chili until charred|Stir-fry aromatics on high 30 sec|Add chicken, stir-fry 1 min|Add sauce, stir until thickened|Add peanuts and toss|Drizzle sesame oil and scallions|Toss 10 sec and serve',
    steps_ja: '鶏肉の筋膜を取り1cm切り、酒塩胡椒油で25分漬ける|完璧なソースを水で溶く|落花生をカリカリに炒める|山椒を弱火で1.5分炒める|唐辛子を焦げ目がつくまで炒める|香味野菜を強火で30秒|鶏肉を加え1分炒める|ソースを加えとろみが出るまで炒める|落花生を加え混ぜる|ごま油とネギをかける|10秒炒めてすぐ盛り付ける',
    steps_ko: '닭고기 손질해 1cm 자르고 소금후추기름으로 25분 절이다|완벽한 소스를 물로 섞다|땅콩을 바삭하게 볶다|산초를 약불로 1.5분 볶다|고추를 탈색하게 볶다|향신료를 강불로 30초|닭고기를 넣고 1분 볶다|소스를 넣고 걸쭉해질 때까지 볶다|땅콩을 넣고 섞다|참기름과 대파를 뿌리다|10초 볶고 즉시 접시에 담다',
    steps_fr: 'Parer le poulet, couper 1cm, mariner sel/poivre/huile 25 min|Mélanger sauce parfaite avec eau|Frire arachides croustillantes|Frire poivre Sichuan feu doux 1.5 min|Frire piment carbonisé|Revenir aromates feu vif 30 sec|Ajouter poulet, sauter 1 min|Ajouter sauce, réduire jusqu\'à épaississement|Ajouter arachides|Arroser huile sésame oignons|Sauter 10 sec, servir immédiatement',
    steps_es: 'Limpiar pollo, cortar 1cm, marinar sal/pimienta/aceite 25 min|Mezclar salsa perfecta con agua|Freír cacahuetes crujientes|Freír pimienta Sichuan fuego bajo 1.5 min|Freír chile carbonizado|Sofreír aromáticos fuego alto 30 seg|Agregar pollo, saltear 1 min|Agregar salsa, reducir hasta espesar|Agregar cacahuetes|Rociar aceite sésamo cebollas|Saltear 10 seg, servir inmediatamente',
    note_zh: '大师级宫保鸡丁，人间绝味', note_en: 'Master level, heavenly flavor', note_ja: 'マスター級、天国の味', note_ko: '마스터급, 천국 맛', note_fr: 'Niveau maître, saveur divine', note_es: 'Nivel maestro, sabor celestial'
  }
);

// ========== 麻婆豆腐 - Mapo Tofu ==========
allLevels.push(
  { recipe: 2, level: 1,
    ingredients_zh: '嫩豆腐400g，猪肉馅100g，豆瓣酱2勺',
    ingredients_en: 'Soft tofu 400g, Minced pork 100g, Doubanjiang 2 tbsp',
    ingredients_ja: '柔らかい豆腐400g, 挽肉100g, トウバンジャン2大さじ',
    ingredients_ko: '연한 두부400g, 다진 돼지고기100g, 두반장2큰술',
    ingredients_fr: 'Tofu doux 400g, Porc haché 100g, Doubanjiang 2 càs',
    ingredients_es: 'Tofu suave 400g, Cerdo picado 100g, Doubanjiang 2 cdas',
    steps_zh: '豆腐切成2cm方块，用盐水泡5分钟去腥|锅中放油，下肉末炒散变色|加豆瓣酱炒出红油|加蒜末姜末炒香|加入半碗水烧开|放入豆腐块，轻轻推匀不要翻碎|加生抽和糖调味|小火煮5分钟让豆腐入味|撒葱花出锅',
    steps_en: 'Cut tofu into 2cm cubes, soak in salt water 5 min|Heat oil, stir-fry minced pork until brown|Add doubanjiang, stir until red oil releases|Add garlic and ginger|Add water and bring to boil|Gently add tofu, push don\'t stir|Add soy sauce and sugar|Simmer 5 min|Sprinkle scallions and serve',
    steps_ja: '豆腐を2cm角に切り塩水で5分浸す|油を熱し挽肉を炒める|トウバンジャンを加え赤い油が出るまで炒める|ニンニク生姜を加える|水を加え沸かす|豆腐を加え優しく押す|醤油と砂糖を加える|弱火で5分煮る|ネギを散らす',
    steps_ko: '두부2cm로 자르고 소금물에 5분 담그다|기름 데우고 다진고기 볶다|두반장 넣고 붉은기름 나올때까지 볶다|마늘 생강 넣다|물 넣고 끓이다|두부 넣고 부드럽게 밀다|간장 설탕 넣다|약불 5분 끓이다|파 뿌리다',
    steps_fr: 'Couper tofu 2cm, tremper eau salée 5 min|Chauffer huile, revenir porc haché|Ajouter doubanjiang, jusqu\'à huile rouge|Ajouter ail gingembre|Ajouter eau, porter ébullition|Ajouter tofu doucement|Ajouter sauce soja sucre|Mijoter 5 min|Parsemer oignons',
    steps_es: 'Cortar tofu 2cm, remojar agua sal 5 min|Calentar aceite, sofreír cerdo picado|Agregar doubanjiang hasta aceite rojo|Agregar ajo jengibre|Agregar agua, hervir|Agregar tofu suavemente|Agregar salsa soja azúcar|Cocer 5 min|Espolvorear cebollas',
    note_zh: '新手入门级，简单快手', note_en: 'Beginner level, quick and easy', note_ja: '初心者向け簡単', note_ko: '초보자용 쉬움', note_fr: 'Débutant rapide facile', note_es: 'Principiante rápido fácil'
  },
  { recipe: 2, level: 2,
    ingredients_zh: '嫩豆腐400g，肉馅150g，郫县豆瓣酱2.5勺，葱2根，姜3片，蒜3瓣，生抽1.5勺',
    ingredients_en: 'Soft tofu 400g, Minced pork 150g, Pixian doubanjiang 2.5 tbsp, Scallions 2, Ginger 3 sl, Garlic 3 cl, Soy sauce 1.5 tbsp',
    ingredients_ja: '豆腐400g, 挽肉150g, 郫県トウバンジャン2.5, ネギ2, 生姜3, ニンニク3, 醤油1.5',
    ingredients_ko: '두부400g, 다진고기150g, 피엔두반장2.5, 파2, 생강3, 마늘3, 간장1.5',
    ingredients_fr: 'Tofu 400g, Porc haché 150g, Doubanjiang Pixian 2.5 càs, Oignons 2, Gingembre 3 tr, Ail 3 g, Sauce soja 1.5 càs',
    ingredients_es: 'Tofu 400g, Cerdo picado 150g, Doubanjiang Pixian 2.5 cdas, Cebollas 2, Jengibre 3 r, Ajo 3 d, Salsa soja 1.5 cdas',
    steps_zh: '嫩豆腐切小块，开水焯1分钟去豆腥味|锅中放少许油，肉末炒至变色出油|加2.5勺郫县豆瓣酱小火炒出红油|放入蒜末姜末爆香|加入小半碗水或高汤烧开|小心放入豆腐，不要翻动以免碎|加生抽调味，小火炖3分钟|淋水淀粉勾薄芡|撒花椒粉和葱花出锅',
    steps_en: 'Cut tofu into small cubes, blanch 1 min|Heat oil, fry minced pork until brown|Add 2.5 tbsp doubanjiang, stir until red oil|Add garlic and ginger, stir-fry|Add half bowl water or broth, boil|Carefully add tofu, don\'t stir|Add soy sauce, simmer 3 min|Add cornstarch water to thicken|Sprinkle Sichuan pepper and scallions',
    steps_ja: '豆腐を小さく切り1分湯通し|油を熱し挽肉を炒める|トウバンジャン2.5を加え赤い油になるまで|ニンニク生姜を加え炒める|水またはスープを加え沸かす|豆腐を注意深く加える|醤油を加え3分煮る|水溶き片栗粉でとろみ|山椒とネギを散らす',
    steps_ko: '두부 작게 썰어 1분 데치다|기름 데우고 다진고기 볶다|두반장2.5 넣고 붉은기름 나올때까지|마늘 생강 넣고 볶다|물 또는 육수 넣고 끓이다|두부 조심히 넣다|간장 넣고 3분 끓이다|전분물로 걸쭉하게|산초와 파 뿌리다',
    steps_fr: 'Couper tofu petits cubes, blanchir 1 min|Chauffer huile, revenir porc haché|Ajouter 2.5 càs doubanjiang jusqu\'à huile rouge|Ajouter ail gingembre, revenir|Ajouter eau ou bouillon, bouillir|Ajouter tofu avec précaution|Ajouter sauce soja, mijoter 3 min|Lier à la fécule|Parsemer poivre Sichuan oignons',
    steps_es: 'Cortar tofu cubos pequeños, escaldar 1 min|Calentar aceite, sofreír cerdo picado|Agregar 2.5 cdas doubanjiang hasta aceite rojo|Agregar ajo jengibre, sofreír|Agregar agua o caldo, hervir|Agregar tofu con cuidado|Agregar salsa soja, cocer 3 min|Epesar con almidón|Espolvorear pimienta Sichuan cebollas',
    note_zh: '入门进阶，有香料加持', note_en: 'Intermediate, with spices', note_ja: '中級スパイス付き', note_ko: '중급 향신료 포함', note_fr: 'Intermédiaire avec épices', note_es: 'Intermedio con especias'
  },
  { recipe: 2, level: 3,
    ingredients_zh: '嫩豆腐500g，猪肉馅200g，郫县豆瓣酱3勺，葱白2段，姜4片，蒜4瓣，生抽2勺，老抽半勺，白糖1勺，淀粉1勺',
    ingredients_en: 'Soft tofu 500g, Minced pork 200g, Pixian doubanjiang 3 tbsp, Scallion 2, Ginger 4 sl, Garlic 4 cl, Soy sauce 2, Dark soy 0.5, Sugar 1, Cornstarch 1 tbsp',
    ingredients_ja: '豆腐500g, 挽肉200g, 郫県トウバンジャン3, ネギ2, 生姜4, ニンニク4, 醤油2, 濃口0.5, 砂糖1, 片栗粉1',
    ingredients_ko: '두부500g, 다진고기200g, 피엔두반장3, 파2, 생강4, 마늘4, 간장2, 진간장0.5, 설탕1, 전분1',
    ingredients_fr: 'Tofu 500g, Porc haché 200g, Doubanjiang 3 càs, Oignon blanc 2, Gingembre 4 tr, Ail 4 g, Sauce soja 2, Noire 0.5, Sucre 1, Fécule 1 càs',
    ingredients_es: 'Tofu 500g, Cerdo picado 200g, Doubanjiang 3 cdas, Cebolla 2, Jengibre 4 r, Ajo 4 d, Salsa soja 2, Oscura 0.5, Azúcar 1, Almidón 1 cda',
    steps_zh: '豆腐切1.5cm方块，开水焯2分钟捞出沥干|锅中放油中火，炒肉末至金黄酥香|加3勺郫县豆瓣酱，小火慢慢炒出红油|加蒜末姜末葱白末炒香|加半碗高汤或水烧开|放入豆腐，轻轻晃动锅子使豆腐均匀受热|加生抽老抽白糖调味|小火炖5分钟让豆腐充分入味|分两次淋水淀粉勾芡|撒大量花椒粉和葱花，浇一勺热油激香',
    steps_en: 'Cut tofu 1.5cm cubes, blanch 2 min, drain|Heat oil, fry minced pork until golden|Add 3 tbsp doubanjiang, stir on low for red oil|Add garlic, ginger, scallion|Add half bowl broth or water, boil|Add tofu, gently shake pan|Add soy sauces and sugar|Simmer 5 min|Add cornstarch water twice to thicken|Sprinkle Sichuan pepper and scallions, drizzle hot oil',
    steps_ja: '豆腐1.5cm角に切り2分湯通し|油を熱し挽肉を黄金色に炒める|トウバンジャン3を弱火で赤い油に|ニンニク生姜ネギを加える|スープ半分加え沸かす|豆腐を加え優しく揺らす|醤油と砂糖を加える|5分煮る|水溶き片栗粉を2回加える|山椒ネギを散らし熱い油をかける',
    steps_ko: '두부1.5cm로 잘라 2분 데치기|기름 데우고 다진고기 황금빛으로 볶기|두반장3 약불로 붉은기름에|마늘 생강 파 넣기|육수 반 넣고 끓이기|두부 넣고 부드럽게 흔들기|간장 설탕 넣기|5분 끓이기|전분물 2회 넣어 걸쭉하게|산초 파 뿌리고 뜨거운기름 붓기',
    steps_fr: 'Couper tofu 1.5cm, blanchir 2 min|Chauffer huile, frire porc haché doré|Ajouter 3 càs doubanjiang feu doux huile rouge|Ajouter ail gingembre oignon|Ajouter bouillon ou eau, bouillir|Ajouter tofu, secouer poêle|Ajouter sauces soja sucre|Mijoter 5 min|Lier à la fécule 2 fois|Parsemer poivre Sichuan oignons, huile chaude',
    steps_es: 'Cortar tofu 1.5cm, escaldar 2 min|Calentar aceite, freír cerdo picado dorado|Agregar 3 cdas doubanjiang fuego bajo aceite rojo|Agregar ajo jengibre cebolla|Agregar caldo o agua, hervir|Agregar tofu, mover sartén|Agregar salsas soja azúcar|Cocer 5 min|Epesar con almidón 2 veces|Espolvorear pimienta Sichuan cebollas, aceite caliente',
    note_zh: '经典麻辣口味', note_en: 'Classic spicy numbing flavor', note_ja: 'クラシック麻辣味', note_ko: '클래식 마라 맛', note_fr: 'Saveur piquante classique', note_es: 'Sabor picante clásico'
  },
  { recipe: 2, level: 4,
    ingredients_zh: '嫩豆腐500g，肉馅250g，郫县豆瓣酱3.5勺，花椒1勺，葱白3段，姜5片，蒜5瓣，生抽2勺，老抽1勺，料酒2勺，白糖1.5勺，淀粉1.5勺，鸡精少许',
    ingredients_en: 'Tofu 500g, Minced pork 250g, Doubanjiang 3.5 tbsp, Sichuan pepper 1 tbsp, Scallions 3, Ginger 5 sl, Garlic 5 cl, Soy 2, Dark soy 1, Wine 2, Sugar 1.5, Cornstarch 1.5 tbsp, MSG pinch',
    ingredients_ja: '豆腐500g, 挽肉250g, トウバンジャン3.5, 山椒1, ネギ3, 生姜5, ニンニク5, 醤油2, 濃口1, 酒2, 砂糖1.5, 片栗粉1.5, 味精少々',
    ingredients_ko: '두부500g, 다진고기250g, 두반장3.5, 산초1, 파3, 생강5, 마늘5, 간장2, 진간장1, 요리술2, 설탕1.5, 전분1.5, MSG약간',
    ingredients_fr: 'Tofu 500g, Porc haché 250g, Doubanjiang 3.5 càs, Poivre Sichuan 1 càs, Oignons 3, Gingembre 5 tr, Ail 5 g, Sauce soja 2, Noire 1, Vin 2, Sucre 1.5, Fécule 1.5 càs, MSG',
    ingredients_es: 'Tofu 500g, Cerdo picado 250g, Doubanjiang 3.5 cdas, Pimienta Sichuan 1 cda, Cebollas 3, Jengibre 5 r, Ajo 5 d, Salsa soja 2, Oscura 1, Vino 2, Azúcar 1.5, Almidón 1.5 cdas, MSG',
    steps_zh: '豆腐切1.5cm方块，盐水浸泡5分钟后焯水2分钟|肉末加料酒白胡椒粉拌匀腌制5分钟|锅中多放些油，肉末炒至金黄酥脆|加郫县豆瓣酱小火慢炒，直到红油充分析出|加姜末蒜末葱白末炒出浓郁香味|加高汤烧开后煮2分钟让汤底浓郁|放入豆腐小火煮5分钟，期间轻轻推动|调好水淀粉，分三次淋入勾芡|撒大量花椒粉和葱花|浇一勺热油激发出香味，立刻出锅',
    steps_en: 'Cut tofu 1.5cm, soak salt water 5 min, blanch 2 min|Mix pork with wine and pepper, marinate 5 min|More oil, fry pork until golden crispy|Fry doubanjiang on low until red oil fully releases|Add ginger garlic scallion until fragrant|Add broth, boil 2 min for rich flavor|Add tofu, simmer 5 min, gently push|Mix cornstarch water, add in 3 batches to thicken|Lots of Sichuan pepper and scallions|Drizzle hot oil, serve immediately',
    steps_ja: '豆腐1.5cmに切り塩水5分後2分湯通し|挽肉に酒胡椒で5分漬ける|多めの油で挽肉を黄金色に炒める|トウバンジャンを弱火で赤い油が十分出るまで炒める|生姜ニンニクネギを加え香り豊かに|スープを加え2分煮込む|豆腐を加え弱火で5分煮る|水溶き片栗粉を3回に分けて加える|たっぷりの山椒とネギ|熱い油をかけてすぐに盛り付ける',
    steps_ko: '두부1.5cm 소금물5분 후 2분 데치기|다진고기에 후추로 5분 절이기|기름 많이 두르고 고기 황금빛으로 볶기|두반장 약불로 붉은기름 충분히 나올때까지|생강 마늘 파 넣고 향기롭게|육수 넣고 2분 끓이기|두부 넣고 약불 5분 끓이기|전분물 3회 나눠 넣기|산초 파 듬뿍|뜨거운기름 붓고 즉시 접시에 담기',
    steps_fr: 'Couper tofu 1.5cm, tremper eau salée 5 min, blanchir 2 min|Mariner porc avec vin poivre 5 min|Plus d\'huile, frire porc doré croustillant|Frire doubanjiang feu doux huile rouge complète|Ajouter gingembre ail oignon parfumé|Ajouter bouillon, bouillir 2 min|Ajouter tofu, mijoter 5 min|Fécule diluée en 3 fois|Beaucoup poivre Sichuan oignons|Huile chaude, servir immédiatement',
    steps_es: 'Cortar tofu 1.5cm, remojar agua sal 5 min, escaldar 2 min|Marinar cerdo vino pimienta 5 min|Más aceite, freír cerdo dorado crujiente|Freír doubanjiang fuego bajo aceite rojo completo|Agregar jengibre ajo cebolla fragante|Agregar caldo, hervir 2 min|Agregar tofu, cocer 5 min|Almidón agua en 3 veces|Mucha pimienta Sichuan cebollas|Aceite caliente, servir inmediatamente',
    note_zh: '地道川味，麻辣鲜香', note_en: 'Authentic Sichuan flavor', note_ja: '本格四川風味', note_ko: '정통 쓰촨 풍미', note_fr: 'Saveur authentique Sichuan', note_es: 'Sabor auténtico Sichuan'
  },
  { recipe: 2, level: 5,
    ingredients_zh: '嫩豆腐500g，肉馅300g，郫县豆瓣酱4勺，花椒2勺，葱白4段，姜6片，蒜6瓣，生抽3勺，老抽1.5勺，料酒2勺，白糖2勺，淀粉2勺，盐1小勺，白胡椒1小勺，鸡精少许，香油1勺',
    ingredients_en: 'Tofu 500g, Pork 300g, Doubanjiang 4 tbsp, Sichuan pepper 2 tbsp, Scallions 4, Ginger 6, Garlic 6, Soy 3, Dark soy 1.5, Wine 2, Sugar 2, Cornstarch 2 tbsp, Salt 1 tsp, Pepper 1 tsp, MSG, Sesame oil 1 tbsp',
    ingredients_ja: '豆腐500g, 挽肉300g, トウバンジャン4, 山椒2, ネギ4, 生姜6, ニンニク6, 醤油3, 濃口1.5, 酒2, 砂糖2, 片栗粉2, 塩1, 胡椒1, 味精, ごま油1',
    ingredients_ko: '두부500g, 다진고기300g, 두반장4, 산초2, 파4, 생강6, 마늘6, 간장3, 진간장1.5, 요리술2, 설탕2, 전분2, 소금1, 후추1, MSG, 참기름1',
    ingredients_fr: 'Tofu 500g, Porc 300g, Doubanjiang 4 càs, Poivre Sichuan 2 càs, Oignons 4, Gingembre 6 tr, Ail 6 g, Sauce soja 3, Noire 1.5, Vin 2, Sucre 2, Fécule 2 càs, Sel 1 càc, Poivre 1 càc, MSG, Huile sésame 1 càs',
    ingredients_es: 'Tofu 500g, Cerdo 300g, Doubanjiang 4 cdas, Pimienta Sichuan 2 cdas, Cebollas 4, Jengibre 6 r, Ajo 6 d, Salsa soja 3, Oscura 1.5, Vino 2, Azúcar 2, Almidón 2 cdas, Sal 1 cd, Pimienta 1 cd, MSG, Aceite sésamo 1 cda',
    steps_zh: '豆腐切成1.5cm方块，用淡盐水浸泡10分钟，再焯水2分钟捞起沥干|肉馅加料酒白胡椒粉盐淀粉抓匀腌10分钟|锅中放油烧热，下肉馅大火炒散至金黄焦香|加郫县豆瓣酱小火慢炒出红油（约3分钟）|加姜末蒜末葱白末炒香，加花椒粉炒出麻味|加入高汤大火烧开转中火煮3分钟让味道融合|轻轻放入豆腐块，小火煮6-8分钟|分三次淋入水淀粉勾芡，每次都要轻轻推动|淋入香油，撒花椒粉葱花|浇一勺滚烫热油激发出香味，立即出锅装盘',
    steps_en: 'Cut tofu 1.5cm cubes, soak salt water 10 min, blanch 2 min, drain|Marinate pork with wine/pepper/salt/cornstarch 10 min|Heat oil, fry pork on high until golden crispy|Fry doubanjiang on low for 3 min for red oil|Add ginger garlic scallion, add pepper powder for numbing|Add broth, boil then medium 3 min|Gently add tofu, simmer 6-8 min|Add cornstarch water in 3 batches, gently push|Add sesame oil, Sichuan pepper, scallions|Drizzle boiling hot oil, serve immediately',
    steps_ja: '豆腐1.5cmに切り塩水10分浸し2分湯通し|挽肉に酒塩胡椒片栗粉で10分漬ける|油熱し挽肉強火で黄金色に炒める|トウバンジャン弱火で3分赤い油に|生姜ニンニクネギ加え山椒で痺れを|スープ加え強火沸騰後中火3分|豆腐を優しく加え弱火6-8分|水溶き片栗粉3回に分けて加える|ごま油山椒ネギを加える|熱々の油をかけてすぐに盛り付ける',
    steps_ko: '두부1.5cm 소금물10분 데치기2분|다진고기 소금후추전분10분 절이기|기름 데우고 강불로 황금빛 볶기|두반장 약불 3분 붉은기름|생강 마늘 파 산초 넣기|육수 끓인 후 중불 3분|두부 넣고 약불 6-8분|전분물 3회 나눠 넣기|참기름 산초 파 넣기|뜨거운기름 붓고 즉시 접시에 담기',
    steps_fr: 'Couper tofu 1.5cm, tremper eau salée 10 min, blanchir 2 min|Mariner porc vin/poivre/sel/fécule 10 min|Huile chaude, frire porc feu vif doré|Frire doubanjiang feu doux 3 min pour huile rouge|Ajouter gingembre ail oignon, poivre Sichuan|Ajouter bouillon, bouillir puis mijoter 3 min|Ajouter tofu doucement, mijoter 6-8 min|Fécule diluée en 3 fois|Ajouter huile sésame, poivre Sichuan, oignons|Huile bouillante, servir immédiatement',
    steps_es: 'Cortar tofu 1.5cm, remojar agua sal 10 min, escaldar 2 min|Marinar cerdo vino/pimienta/sal/almidón 10 min|Aceite caliente, freír cerdo fuego alto dorado|Freír doubanjiang fuego bajo 3 min aceite rojo|Agregar jengibre ajo cebolla, pimienta Sichuan|Agregar caldo, hervir luego medio 3 min|Agregar tofu suave, cocer 6-8 min|Almidón agua en 3 veces|Agregar aceite sésamo, pimienta Sichuan, cebollas|Aceite hirviendo, servir inmediatamente',
    note_zh: '大师级麻婆豆腐，麻辣鲜香俱全', note_en: 'Master level, perfect balance', note_ja: 'マスター級完璧な味', note_ko: '마스터급 완벽한 맛', note_fr: 'Niveau maître, équilibre parfait', note_es: 'Nivel maestro, equilibrio perfecto'
  }
);

// ========== 通用菜谱数据（3-54） ==========
// 为每道菜定义专属的步骤和食材（中文），并翻译成其他语言

const recipeDetails = {
  3: { // 蛋炒饭 - Egg Fried Rice
    zh_steps: {
      1: ['剩米饭用勺子打散，避免结块|鸡蛋打入碗中搅散|锅中放油烧热，倒入蛋液快速炒散|加入米饭大火翻炒，让每粒米饭裹上蛋液|加少许盐调味，撒葱花翻炒均匀出锅'],
      2: ['剩米饭提前从冰箱取出回温，用手捏散|鸡蛋打散加少许盐搅匀|锅中放油烧热，倒入蛋液炒至半熟盛出|锅中再放少许油，加入米饭大火翻炒|倒入炒好的鸡蛋继续翻炒均匀|加盐和少许鸡精调味，撒葱花出锅'],
      3: ['米饭用隔夜饭最佳，提前用手捏散|鸡蛋打散，胡萝卜切小丁，青豆洗净|锅中放油，先炒胡萝卜丁和青豆至断生盛出|锅中再放油，倒入蛋液炒散|加入米饭大火快速翻炒，让米粒粒分明|加入炒好的蔬菜丁翻炒均匀|加盐、白胡椒粉调味，撒葱花出锅'],
      4: ['隔夜米饭提前回温，用手充分捏散|鸡蛋3个打散，加少许料酒去腥|火腿切小丁，胡萝卜切丁，青豆焯水|锅中放油，先炒鸡蛋至凝固盛出|锅中放油，爆香葱花，加火腿丁翻炒|加入米饭大火翻炒至粒粒分明|倒入炒好的鸡蛋和蔬菜丁翻炒|加盐、白胡椒粉、少许生抽调味，翻炒均匀出锅'],
      5: ['隔夜米饭回温捏散，打入一个蛋黄拌匀让米饭呈金黄色|蛋白和另外2个鸡蛋打散，加少许盐和料酒|虾仁切小丁用料酒腌制，火腿、胡萝卜切小丁，青豆、玉米粒备好|锅中放油，先滑炒虾仁变色盛出|锅中放油，炒蛋白至凝固盛出|锅中放油，爆香葱花，加火腿胡萝卜丁翻炒|加入米饭大火翻炒至粒粒分明，蛋香四溢|加入虾仁、蛋白、青豆、玉米粒翻炒|加盐、白胡椒粉、少许生抽调味|撒葱花翻炒均匀即可出锅装盘']
    },
    zh_ingredients: {
      1: '剩米饭300g，鸡蛋2个，葱1根，盐少许',
      2: '隔夜米饭300g，鸡蛋2个，葱2根，盐少许，鸡精少许',
      3: '隔夜米饭350g，鸡蛋3个，胡萝卜50g，青豆30g，葱2根，盐，白胡椒粉',
      4: '隔夜米饭400g，鸡蛋3个，火腿50g，胡萝卜50g，青豆30g，葱2根，盐，白胡椒粉，生抽少许',
      5: '隔夜米饭400g，鸡蛋3个，虾仁50g，火腿30g，胡萝卜30g，青豆20g，玉米粒20g，葱2根，盐，白胡椒粉，生抽，料酒'
    }
  },
  4: { // 糖醋里脊 - Sweet and Sour Pork
    zh_steps: {
      1: ['猪里脊肉洗净切成条状|加少许盐和料酒腌制10分钟|锅中放油烧热，放入肉条煎至两面金黄|加番茄酱和白糖翻炒均匀|加少许水焖煮2分钟，收汁即可出锅'],
      2: ['猪里脊肉切条状，加盐料酒腌制15分钟|鸡蛋打散，肉条裹上蛋液再裹上淀粉|锅中放油烧至六成热，放入肉条炸至金黄捞出|锅中留底油，加番茄酱、白糖、白醋炒匀|放入炸好的肉条快速翻炒裹上酱汁|撒白芝麻即可出锅'],
      3: ['猪里脊肉切1cm厚片，用刀背拍松后切条|加盐、料酒、白胡椒粉腌制15分钟|调面糊：淀粉、面粉、鸡蛋、水调成糊状|肉条裹上面糊，放入六成热油中炸至金黄捞出|油温升至七成热，复炸30秒使外皮更酥脆|锅中放少许油，加番茄酱、白糖、白醋、少许水煮开|倒入水淀粉勾芡，放入炸好的肉条快速翻炒|酱汁均匀裹上后立即出锅'],
      4: ['猪里脊肉切1cm厚片，用刀背十字形拍松，切成条|加盐、料酒、白胡椒粉、少许生抽腌制20分钟|调脆炸糊：淀粉和面粉2:1比例，加鸡蛋和水调成酸奶状|肉条先裹一层干淀粉，再挂上脆炸糊|油温六成热，逐个放入肉条炸至微黄捞出|油温升至七成热，全部复炸1分钟至金黄酥脆|酱汁：番茄酱、白糖、白醋、生抽、水按比例调好|锅中少许油，倒入酱汁煮开，加淀粉水勾芡|放入炸好的肉条快速翻炒裹匀酱汁|淋少许热油使酱汁更亮，撒芝麻葱花出锅'],
      5: ['猪里脊肉去筋膜，切1cm厚片，用刀背十字形拍松后切条|加盐、料酒、白胡椒粉、生抽、姜汁腌制20分钟|调脆炸糊：淀粉与面粉2:1，加鸡蛋、水和少许油调成糊，醒10分钟|肉条先裹干淀粉，再均匀挂上脆炸糊|油温六成热，逐条放入炸至微黄捞出（约2分钟）|油温升至七成热，全部复炸1分钟至金黄酥脆|锅中放少许油，炒香蒜末|加番茄酱、白糖、白醋、生抽、橙汁调匀煮开|加淀粉水勾芡至浓稠透亮，加少许热油搅匀使酱汁更亮|倒入炸好的肉条快速翻炒，每个肉条均匀裹上酱汁|撒白芝麻和葱花，立即出锅装盘']
    },
    zh_ingredients: {
      1: '猪里脊肉300g，番茄酱3勺，白糖2勺，料酒1勺，盐少许',
      2: '猪里脊肉300g，鸡蛋1个，淀粉50g，番茄酱4勺，白糖3勺，白醋1勺，料酒，盐，白芝麻',
      3: '猪里脊肉350g，鸡蛋1个，淀粉50g，面粉30g，番茄酱5勺，白糖4勺，白醋2勺，生抽1勺，料酒，盐，白胡椒粉，白芝麻',
      4: '猪里脊肉400g，鸡蛋1个，淀粉60g，面粉30g，番茄酱5勺，白糖4勺，白醋2勺，生抽1勺，料酒，盐，白胡椒粉，姜，白芝麻，葱',
      5: '猪里脊肉400g，鸡蛋1个，淀粉70g，面粉35g，番茄酱6勺，白糖5勺，白醋3勺，生抽1勺，橙汁1勺，料酒，盐，白胡椒粉，姜，蒜，白芝麻，葱'
    }
  },
  5: { // 红烧肉 - Red Braised Pork
    zh_steps: {
      1: ['五花肉洗净切成3cm方块|锅中放水烧开，放入肉块焯水2分钟捞出|锅中放少许油，加入肉块煎至两面微黄|加生抽和老抽翻炒上色|加开水没过肉块，加葱姜和冰糖|大火烧开后转小火炖40分钟|转大火收汁至汤汁浓稠即可'],
      2: ['五花肉切3cm方块，冷水下锅加料酒焯水5分钟捞出洗净|锅中放少许油，加冰糖小火炒至融化呈琥珀色|放入肉块翻炒均匀上色|加葱段姜片八角，加料酒生抽老抽|加开水没过肉面，大火烧开转小火炖1小时|加盐调味，继续炖20分钟|转大火收汁至汤汁浓稠，每块肉裹上酱汁即可'],
      3: ['五花肉切3cm方块，冷水下锅加姜片料酒焯水5分钟，捞出洗净|锅中放少许油，加冰糖小火炒糖色至枣红色|放入肉块翻炒上色，加八角桂皮香叶等香料|加葱段姜片，加料酒生抽老抽翻炒均匀|加开水没过肉，大火烧开转小火炖1.5小时|加盐和少许冰糖调味，继续炖30分钟至肉软烂|转大火收汁至浓稠，不停翻动以免粘锅|汤汁收至裹住每块肉即可出锅'],
      4: ['五花肉切3cm方块，冷水加姜片料酒焯水5分钟，捞出用温水洗净|锅中放少许油，加冰糖小火炒至枣红色冒小泡|放入肉块快速翻炒上色|加葱段姜片、八角、桂皮、香叶、干辣椒|加料酒、生抽、老抽翻炒出香味|加开水没过肉，大火烧开后撇去浮沫|转小火盖盖炖1.5小时至肉能用筷子轻松插入|加盐调味，继续炖20分钟|转大火收汁，不断翻动防止粘锅|汤汁浓稠包裹每块肉时，撒少许葱花即可出锅'],
      5: ['五花肉选三层肥两层瘦最佳，切成3cm方块|冷水加姜片、料酒、花椒焯水5分钟，捞出温水洗净|锅中放少许油，加冰糖小火炒至枣红色冒密集小泡|放入肉块快速翻炒至每面均匀上色|加葱段、姜片、八角2个、桂皮1小段、香叶2片、干辣椒2个|沿锅边淋入料酒去腥，加生抽老抽炒出酱香味|加开水没过肉面2cm，大火烧开，彻底撇净浮沫|转小火盖盖慢炖1.5-2小时至肉酥烂|加盐和少许冰糖调味，继续炖20分钟|挑出香料，转大火收汁，用锅铲不停翻动|汤汁收至浓稠发亮，包裹每块肉时关火出锅']
    },
    zh_ingredients: {
      1: '五花肉500g，葱2根，姜3片，冰糖20g，生抽2勺，老抽1勺',
      2: '五花肉500g，葱2根，姜4片，八角1个，冰糖30g，生抽2勺，老抽1勺，料酒2勺，盐少许',
      3: '五花肉600g，葱2根，姜5片，八角1个，桂皮1小段，香叶2片，冰糖40g，生抽2勺，老抽1勺，料酒2勺，盐少许',
      4: '五花肉600g，葱2根，姜5片，八角2个，桂皮1小段，香叶2片，干辣椒2个，冰糖50g，生抽3勺，老抽2勺，料酒2勺，盐少许',
      5: '五花肉700g，葱3根，姜6片，八角2个，桂皮1小段，香叶2片，干辣椒2个，花椒1小勺，冰糖60g，生抽3勺，老抽2勺，料酒3勺，盐适量'
    }
  },
  6: { // 火锅 - Hot Pot
    zh_steps: {
      1: ['超市买火锅底料和蘸料|各种食材清洗干净，蔬菜切好，肉类切片|锅中加水烧开，放入火锅底料煮开|先煮耐煮的食材如土豆、萝卜|再涮肉片和蔬菜|调好蘸料即可享用'],
      2: ['准备火锅底料、蘸料和各种食材|肉类切薄片，蔬菜洗净切好，豆腐切块，粉丝泡软|锅中加水烧开，放入火锅底料和姜片葱段煮10分钟|调制蘸料：芝麻酱、蒜末、葱花、香油、生抽|先涮肉类再涮蔬菜，注意火候|随时加汤保持汤量']},
    zh_ingredients: {
      1: '火锅底料1包，蘸料1份，肥牛片200g，蔬菜拼盘1份，豆腐200g，粉丝1把',
      2: '火锅底料1包，芝麻酱，蒜末，葱花，肥牛片300g，羊肉片200g，蔬菜拼盘，豆腐，粉丝，土豆，萝卜'
    }
  },
  7: { // 北京烤鸭 - Peking Duck
    zh_steps: {
      1: ['超市购买现成的烤鸭|将烤鸭放入预热好的烤箱180度加热10分钟|取出后趁热片下鸭肉|准备荷叶饼、甜面酱、葱丝和黄瓜条|取一张荷叶饼，放上鸭肉、葱丝、黄瓜条和甜面酱|卷起来即可享用'],
      2: ['购买现成烤鸭，烤箱预热180度|烤鸭放入烤箱加热10-15分钟至皮脆|趁热将鸭肉片成薄片，带皮带肉|鸭骨架可留作熬汤|准备荷叶饼上锅蒸2分钟变软|甜面酱加少许糖和香油调匀|摆盘：鸭肉片整齐摆放，配荷叶饼、葱丝、黄瓜条和甜面酱']},
    zh_ingredients: {
      1: '烤鸭1只，荷叶饼20张，甜面酱半碗，葱2根，黄瓜1根',
      2: '烤鸭1只，荷叶饼20张，甜面酱半碗，葱3根，黄瓜1根，白糖少许，香油少许'
    }
  },
  8: { // 饺子 - Dumplings
    zh_steps: {
      1: ['猪肉馅加姜末葱花，加盐生抽料酒拌匀|饺子皮可以直接买现成的|取一张饺子皮，放适量馅料在中间|对折捏紧边缘，做成半月形|锅中烧开水，放入饺子煮至浮起|加半碗凉水再次煮开，重复2次即可捞出'],
      2: ['猪肉馅加姜末葱花、盐、生抽、料酒、香油顺一个方向搅匀|白菜切碎加盐腌制10分钟，挤干水分加入肉馅中拌匀|取饺子皮放适量馅料，对折捏紧，边缘捏出褶子|锅中烧开水加少许盐，下饺子轻轻搅动不粘底|水开后加半碗凉水，反复3次至饺子全部浮起|捞出装盘，配醋或生抽蘸料'],
      3: ['猪肉馅加姜末葱花、盐、生抽、老抽、料酒、白胡椒粉、鸡蛋顺一个方向搅至上劲|韭菜洗净切碎，用少许油拌匀防止出水，加入肉馅中拌匀|面粉加水和成面团醒30分钟，搓条切小剂子擀成圆形皮|取皮放馅料，对折捏紧边缘，用拇指和食指捏出褶子|锅中烧开水，下饺子轻轻搅动，盖盖煮至浮起|加半碗凉水，反复3次，最后一次不加盖煮至皮透亮|捞出装盘，配醋蒜蓉蘸料']},
    zh_ingredients: {
      1: '猪肉馅300g，饺子皮40张，姜1小块，葱2根，盐，生抽，料酒',
      2: '猪肉馅300g，白菜200g，饺子皮40张，姜，葱，盐，生抽，料酒，香油',
      3: '猪肉馅300g，韭菜200g，面粉300g，姜，葱，盐，生抽，老抽，料酒，白胡椒粉，鸡蛋1个'
    }
  },
  9: { // 小笼包 - Xiaolongbao
    zh_steps: {
      1: ['超市购买速冻小笼包|蒸锅加水烧开，蒸笼铺上蒸笼纸|放入小笼包，间隔一定距离|大火蒸8-10分钟|准备姜丝和醋作为蘸料|趁热食用，小心汤汁烫口'],
      2: ['猪肉馅加姜末葱花、盐生抽料酒白糖拌匀|猪皮冻切碎加入肉馅中拌匀（这是汤汁的关键）|面粉加温水和成面团醒20分钟|面团搓条切小剂子，擀成中间厚边缘薄的皮|取皮放馅料，用拇指和食指打褶子收口|蒸锅水开后放上小笼包，大火蒸8分钟|配姜丝醋碟食用']},
    zh_ingredients: {
      1: '速冻小笼包20个，姜1块，醋3勺',
      2: '猪肉馅300g，猪皮冻150g，面粉300g，姜，葱，盐，生抽，料酒，白糖，醋'
    }
  },
  10: { // 宫保虾球 - Kung Pao Shrimp
    zh_steps: {
      1: ['大虾去壳去虾线洗净，用料酒腌5分钟|锅中放油烧热，放入虾仁翻炒至变色|加生抽和白糖翻炒均匀|放入花生米翻炒几下|撒葱花出锅即可'],
      2: ['大虾去壳开背去虾线，加料酒盐淀粉抓匀腌10分钟|切葱花姜末蒜末，干辣椒剪段|调碗汁：生抽、糖、醋、淀粉、水调匀|锅中油烧热，下虾仁滑炒变色盛出|锅中爆香葱姜蒜辣椒|倒入虾仁和碗汁快速翻炒|加花生米翻炒均匀出锅']},
    zh_ingredients: {
      1: '大虾300g，花生50g，生抽2勺，白糖1勺，料酒1勺，葱1根',
      2: '大虾350g，花生60g，干辣椒3个，葱姜蒜，生抽2勺，白糖1勺，醋1勺，淀粉1勺，料酒，盐'
    }
  },
  11: { // 回锅肉 - Twice Cooked Pork
    zh_steps: {
      1: ['五花肉整块放入冷水锅中，加姜片料酒煮20分钟至熟|捞出放凉后切成薄片|蒜苗切斜段，青红椒切片|锅中放少许油，放入肉片煎至两面微卷出油|加豆瓣酱炒出红油|加蒜苗和青红椒翻炒均匀|加少许生抽和糖调味，翻炒均匀即可'],
      2: ['五花肉整块冷水下锅，加姜片、料酒、花椒煮25分钟至能用筷子插入|捞出过凉水，切成3mm厚薄片|蒜苗切斜段，青红椒切块，姜蒜切片|锅中不放油，直接下肉片中火煎至出油微卷|把肉拨到一边，下豆瓣酱炒出红油|加豆豉和姜蒜片炒香|加蒜苗和青红椒大火翻炒|加少许生抽和糖调味，翻炒均匀即可出锅']},
    zh_ingredients: {
      1: '五花肉300g，蒜苗3根，青椒1个，红椒1个，姜3片，豆瓣酱2勺，料酒，生抽，糖',
      2: '五花肉400g，蒜苗4根，青椒1个，红椒1个，姜4片，蒜3瓣，豆瓣酱2勺，豆豉1勺，料酒，花椒，生抽，糖'
    }
  },
  12: { // 鱼香肉丝 - Fish-Fragrant Pork
    zh_steps: {
      1: ['猪里脊肉切丝，加料酒生抽淀粉抓匀腌10分钟|木耳泡发切丝，胡萝卜切丝，青椒切丝|调鱼香汁：生抽、糖、醋、淀粉、水调匀|锅中放油，下肉丝滑炒变色盛出|锅中爆香蒜末姜末葱花，加豆瓣酱炒出红油|加胡萝卜丝木耳丝翻炒|倒回肉丝翻炒均匀|倒入鱼香汁快速翻炒，汤汁收浓即可出锅'],
      2: ['猪里脊肉切丝，加盐料酒白胡椒粉淀粉抓匀腌15分钟|木耳泡发切丝，胡萝卜切丝，青椒切丝，笋切丝|调鱼香汁：生抽、糖、醋、料酒、淀粉、水、少许老抽调匀|锅中多放油，下肉丝滑炒变色盛出|锅中留底油，下蒜末姜末葱花爆香，加豆瓣酱炒出红油|加胡萝卜丝木耳丝笋丝大火翻炒断生|倒回肉丝，加青椒丝翻炒|沿锅边倒入鱼香汁快速翻炒，汤汁收浓裹匀即可出锅']},
    zh_ingredients: {
      1: '猪里脊肉300g，木耳50g，胡萝卜1根，青椒1个，葱姜蒜，豆瓣酱2勺，生抽2勺，糖2勺，醋2勺，淀粉，料酒',
      2: '猪里脊肉350g，木耳50g，胡萝卜1根，青椒1个，笋50g，葱姜蒜，豆瓣酱2勺，泡椒2个，生抽2勺，糖2勺，醋2勺，老抽少许，料酒，淀粉'
    }
  },
  13: { // 豆豉排骨 - Black Bean Sauce Ribs
    zh_steps: {
      1: ['排骨洗净斩小段，用清水浸泡30分钟去血水|豆豉稍微剁碎，大蒜切末|排骨沥干水分，加豆豉、蒜末、生抽、料酒、糖拌匀腌20分钟|将排骨放入盘中铺平|蒸锅水开后放入排骨，大火蒸20分钟|取出撒葱花即可'],
      2: ['排骨斩小段，清水浸泡30分钟后沥干|豆豉剁碎，大蒜切末，姜切末，红椒切小丁|排骨加豆豉、蒜末、姜末、生抽、老抽、料酒、糖、白胡椒粉、淀粉抓匀腌30分钟|加少许油拌匀锁住水分|将排骨铺在盘中，不要重叠|蒸锅水开后放入排骨，大火蒸25-30分钟|取出撒红椒丁和葱花即可']},
    zh_ingredients: {
      1: '排骨500g，豆豉2勺，大蒜3瓣，生抽2勺，料酒1勺，糖1勺，葱1根',
      2: '排骨500g，豆豉3勺，大蒜5瓣，姜1小块，红椒半个，生抽2勺，老抽半勺，料酒2勺，糖1勺，白胡椒粉，淀粉，葱'
    }
  },
  14: { // 清蒸鱼 - Steamed Fish
    zh_steps: {
      1: ['鲜鱼处理干净，两面各划几刀|鱼身抹上少许盐和料酒，放上姜片和葱段|蒸锅水开后放入鱼，大火蒸8-10分钟|倒掉盘中的蒸鱼水，去掉姜葱|葱切丝铺在鱼身上|锅中烧热油，浇在葱丝上激出香味|淋上蒸鱼豉油即可'],
      2: ['鲜鱼处理干净，两面各划三刀便于入味|鱼身抹盐和料酒，塞入姜片葱段，腌制10分钟|蒸锅水烧开，放入鱼大火蒸8-10分钟（视大小）|蒸好后倒掉盘中腥水，去掉姜葱|重新铺上新鲜的葱丝和红椒丝|锅中烧热油至冒烟，浇在葱丝上|沿盘边淋入蒸鱼豉油，趁热食用']},
    zh_ingredients: {
      1: '鲜鱼1条（约500g），姜1块，葱2根，料酒2勺，蒸鱼豉油3勺，油3勺',
      2: '鲜鱼1条（约600g），姜1块，葱3根，红椒半个，料酒2勺，蒸鱼豉油3勺，油3勺，盐少许'
    }
  },
  15: { // 油焖大虾 - Braised Shrimp
    zh_steps: {
      1: ['大虾剪去须脚，开背去虾线，洗净沥干|锅中放油烧热，放入大虾煎至两面变红|加姜片蒜片炒香|加料酒、生抽、糖和少许水|盖盖焖2分钟至入味|开盖收汁，撒葱花出锅'],
      2: ['大虾剪去须脚开背去虾线，用料酒腌10分钟|锅中多放油烧热，放入大虾煎至两面金黄|加姜末蒜末葱花爆香|加料酒、生抽、老抽、糖、番茄酱和少许水|盖盖中火焖3分钟让虾入味|开盖大火收汁至浓稠|淋少许香油，撒葱花装盘']},
    zh_ingredients: {
      1: '大虾400g，姜4片，蒜3瓣，葱2根，料酒2勺，生抽2勺，糖1勺',
      2: '大虾500g，姜1块，蒜5瓣，葱3根，料酒2勺，生抽2勺，老抽半勺，糖1勺，番茄酱1勺，香油'
    }
  },
  16: { // 水煮鱼 - Sichuan Spicy Fish
    zh_steps: {
      1: ['草鱼处理干净，片下鱼肉切成薄片|鱼片加料酒盐淀粉抓匀腌15分钟|锅中放油，下豆瓣酱炒出红油|加姜蒜末和花椒炒香|加适量水烧开煮5分钟出味|放入鱼片煮至变色（约2分钟）|连汤带鱼倒入大碗中|撒上干辣椒段和花椒，浇上热油即可'],
      2: ['草鱼处理干净，片下鱼肉切成薄片，鱼骨切段|鱼片加料酒盐白胡椒粉淀粉蛋清抓匀腌20分钟|锅中放油，下鱼骨煎至两面金黄盛出|锅中放油，下豆瓣酱、姜蒜末、花椒小火炒出红油|加适量水烧开，放入鱼骨煮10分钟出味|捞出鱼骨放大碗底|汤中加盐糖调味，逐片放入鱼片煮至变白|连汤带鱼倒入碗中|撒大量干辣椒段花椒和蒜末，浇上滚烫热油']},
    zh_ingredients: {
      1: '草鱼1条，豆瓣酱3勺，干辣椒10个，花椒2勺，姜蒜，料酒，盐，淀粉',
      2: '草鱼1条，豆瓣酱4勺，干辣椒15个，花椒3勺，姜蒜，蛋清1个，料酒，盐，白胡椒粉，淀粉，糖'
    }
  },
  17: { // 干锅鸡 - Dry Pot Chicken
    zh_steps: {
      1: ['鸡肉斩小块，加料酒生抽腌15分钟|土豆切条，青红椒切块，洋葱切块|锅中放油，下鸡块煎至两面金黄盛出|锅中放油，下豆瓣酱和姜蒜炒香|加土豆条翻炒，加少许水焖至断生|倒回鸡块，加青红椒和洋葱翻炒|加生抽糖调味，大火收汁即可'],
      2: ['鸡腿肉斩小块，加料酒生抽老抽淀粉抓匀腌20分钟|土豆切条，藕切片，芹菜切段，青红椒切块，洋葱切块|锅中多放油，下鸡块炸至金黄捞出|土豆条和藕片也炸至微黄捞出|锅中留底油，下豆瓣酱、姜蒜、干辣椒、花椒小火炒香|加洋葱和芹菜翻炒|倒回鸡块、土豆、藕片大火翻炒|加生抽、糖、孜然粉调味|最后加青红椒翻炒均匀，撒熟芝麻出锅']},
    zh_ingredients: {
      1: '鸡腿肉400g，土豆1个，青红椒各1个，洋葱半个，姜蒜，豆瓣酱2勺，生抽，料酒，糖',
      2: '鸡腿肉500g，土豆1个，藕1节，芹菜2根，青红椒各1个，洋葱半个，干辣椒5个，花椒1勺，豆瓣酱2勺，姜蒜，生抽，老抽，料酒，糖，孜然粉，熟芝麻'
    }
  },
  18: { // 扬州炒饭 - Yangzhou Fried Rice
    zh_steps: {
      1: ['隔夜米饭用勺子打散|火腿切丁，鸡蛋打散，葱切葱花|锅中放油烧热，倒入蛋液炒散|加入米饭大火翻炒均匀|加火腿丁翻炒|加盐调味，撒葱花翻炒均匀出锅'],
      2: ['隔夜米饭提前捏散|鸡蛋打散加少许盐，火腿切丁，虾仁切丁，青豆洗净，胡萝卜切丁|锅中放油，先炒鸡蛋至凝固盛出|锅中放油，爆香葱花，加虾仁炒变色|加火腿丁胡萝卜丁青豆翻炒|加入米饭大火翻炒至粒粒分明|倒回鸡蛋翻炒，加盐和白胡椒粉调味|撒葱花翻炒均匀即可出锅']},
    zh_ingredients: {
      1: '隔夜米饭400g，鸡蛋2个，火腿50g，葱2根，盐少许',
      2: '隔夜米饭500g，鸡蛋3个，虾仁50g，火腿50g，青豆30g，胡萝卜30g，葱2根，盐，白胡椒粉'
    }
  },
  19: { // 煲仔饭 - Clay Pot Rice
    zh_steps: {
      1: ['大米淘洗干净，在砂锅中泡水30分钟|腊肠切片，姜切丝|泡好的米大火烧开转小火焖煮至水分收干|铺上腊肠和姜丝，沿锅边淋少许油|盖盖继续小火焖10分钟|关火再焖5分钟，撒葱花淋酱油即可'],
      2: ['大米淘洗后砂锅中泡水30分钟|腊肠切片，腊肉切片，香菇泡发切片，青菜焯水|米大火烧开转小火煮至水分快收干|铺上腊肠、腊肉、香菇、姜丝|沿锅边淋一圈油（形成锅巴的关键）|盖盖小火焖12-15分钟|听到滋滋声时关火再焖5分钟|摆上焯好的青菜，淋上调好的酱油汁|撒葱花即可']},
    zh_ingredients: {
      1: '大米200g，腊肠2根，姜1块，葱1根，生抽2勺，油少许',
      2: '大米250g，腊肠2根，腊肉50g，香菇3朵，青菜2颗，姜1块，葱1根，生抽2勺，老抽半勺，糖少许，油'
    }
  },
  20: { // 粥 - Congee
    zh_steps: {
      1: ['大米淘洗干净，加少许油和盐腌10分钟|锅中加足量水烧开，放入大米|大火烧开后转小火慢煮30分钟|期间不时搅拌防止粘底|煮至米粒开花粥变浓稠即可|可配咸菜或皮蛋食用'],
      2: ['大米淘洗干净，加少许油和盐腌15分钟让米更容易煮烂|皮蛋去壳切小块，瘦肉切丝加盐料酒腌一下|锅中加水烧开，放入大米和少许姜丝|大火烧开后转小火慢煮35-40分钟|煮至米粒开花粥变浓稠|加入皮蛋和肉丝继续煮5分钟|加盐和白胡椒粉调味，撒葱花即可']},
    zh_ingredients: {
      1: '大米100g，水1500ml，盐少许，油少许',
      2: '大米120g，皮蛋2个，瘦肉100g，姜丝少许，水1500ml，盐，白胡椒粉，葱花，料酒'
    }
  },
  21: { // 肉包子 - Steamed Pork Bun
    zh_steps: {
      1: ['面粉加酵母温水揉成面团，醒发至2倍大|猪肉馅加姜末葱花盐生抽料酒拌匀|醒好的面团揉匀排气，搓条切小剂子|擀成中间厚边缘薄的圆皮|包入馅料，收口捏紧|放入蒸笼二次醒发15分钟|大火蒸15分钟关火焖3分钟即可'],
      2: ['面粉加酵母白糖温水揉成光滑面团，醒发至2倍大|猪肉馅加姜末葱花、盐、生抽、老抽、料酒、白胡椒粉、香油顺一个方向搅匀，加少许水搅上劲|面团揉匀排气，搓成长条切成均匀小剂子|擀成中间厚边缘薄的圆形面皮|取皮放适量馅料，一个褶一个褶地收口|包好的包子放蒸笼二次醒发15-20分钟至体积明显变大|水开后大火蒸15分钟，关火焖3分钟防止回缩']},
    zh_ingredients: {
      1: '面粉300g，酵母3g，温水150ml，猪肉馅300g，姜，葱，盐，生抽，料酒',
      2: '面粉400g，酵母4g，白糖少许，温水200ml，猪肉馅400g，姜，葱，盐，生抽，老抽，料酒，白胡椒粉，香油'
    }
  },
  22: { // 葱油饼 - Spring Onion Pancake
    zh_steps: {
      1: ['面粉加温水揉成光滑面团，醒20分钟|葱切葱花|面团擀成薄片，刷一层油，撒盐和葱花|卷起来盘成圆形，再擀成薄饼|锅中放油烧热，放入饼煎至两面金黄|用锅铲轻轻拍松即可出锅'],
      2: ['面粉加少许盐，用温水和成柔软面团，醒30分钟|葱切葱花，面粉加盐和热油调成油酥|面团分成小剂子，擀成长椭圆形|刷上油酥，撒上大量葱花|从一头卷起成长条，再盘成圆形|擀成薄饼|锅中多放油烧热，放入饼中小火煎至两面金黄酥脆|用锅铲拍松，出锅切块即可']},
    zh_ingredients: {
      1: '面粉300g，葱5根，盐，油',
      2: '面粉400g，葱10根，盐，油，面粉（油酥用）'
    }
  },
  23: { // 汤圆 - Tangyuan
    zh_steps: {
      1: ['糯米粉加温水揉成光滑面团|黑芝麻炒熟磨碎，加猪油和糖拌匀成馅|面团搓条切小剂子，按扁包入芝麻馅|收口搓圆|锅中水烧开，放入汤圆煮至浮起|再煮2分钟即可捞出食用'],
      2: ['糯米粉加温水揉成光滑面团，盖布醒15分钟|黑芝麻炒熟碾碎，花生炒熟碾碎，加猪油和白糖拌匀成馅，冰箱冷藏凝固|面团搓成长条切成均匀小剂子|取剂子按扁，放入馅料后用虎口收口搓圆|锅中水烧开，轻轻放入汤圆|煮至汤圆全部浮起后再煮2-3分钟|碗中放少许桂花和糖，连汤盛入即可']},
    zh_ingredients: {
      1: '糯米粉300g，黑芝麻100g，猪油50g，白糖50g',
      2: '糯米粉400g，黑芝麻100g，花生50g，猪油60g，白糖80g，干桂花少许'
    }
  },
  24: { // 粽子 - Zongzi
    zh_steps: {
      1: ['糯米提前浸泡4小时，粽叶洗净泡软|五花肉切块加生抽老抽料酒腌2小时|两片粽叶叠起卷成锥形|放一层糯米，放一块肉，再盖一层糯米|将粽叶折过来包紧，用绳子扎紧|放入大锅，加水没过粽子，煮2小时即可'],
      2: ['糯米提前浸泡6小时，粽叶洗净泡软剪去硬蒂|五花肉切块加生抽老抽料酒糖五香粉腌4小时|咸蛋黄备用|两片粽叶叠起折成漏斗形|先放少量糯米，再放肉和半个蛋黄|再盖上糯米压实|将粽叶折过来包紧，用棉绳扎紧不漏米|大锅中加水没过粽子，大火烧开转小火煮3小时|关火焖1小时口味更佳']},
    zh_ingredients: {
      1: '糯米500g，五花肉300g，粽叶20片，绳子，生抽，老抽，料酒',
      2: '糯米600g，五花肉400g，咸蛋黄5个，粽叶30片，棉绳，生抽，老抽，料酒，糖，五香粉'
    }
  },
  25: { // 月饼 - Moon Cake
    zh_steps: {
      1: ['转化糖浆、枧水、花生油混合搅匀|加入面粉揉成面团醒2小时|莲蓉馅分成小份搓圆|面团分成小剂子按扁，包入莲蓉馅|放入月饼模压出花型|表面刷蛋液，烤箱预热180度烤20分钟|回油2天口感更佳'],
      2: ['转化糖浆、枧水、花生油充分混合乳化|筛入面粉和奶粉揉成面团，包保鲜膜醒3小时|咸蛋黄喷白酒烤5分钟至表面干爽|莲蓉馅包入咸蛋黄搓圆|面团分成小剂子按扁，包入莲蓉蛋黄馅|放入月饼模压出花型|表面喷水，烤箱预热200度烤5分钟定型|取出刷蛋液，转180度再烤15分钟至金黄|冷却后密封回油2-3天口感最佳']},
    zh_ingredients: {
      1: '中筋面粉200g，转化糖浆150g，枧水3g，花生油50g，莲蓉馅300g',
      2: '中筋面粉250g，转化糖浆180g，枧水4g，花生油60g，奶粉20g，莲蓉馅400g，咸蛋黄10个，白酒少许'
    }
  },
  26: { // 皮蛋 - Century Egg
    zh_steps: {
      1: ['皮蛋剥壳，用冷开水冲洗干净|用细线或刀将皮蛋切成瓣状|姜切末，加醋和生抽调成蘸汁|皮蛋摆盘，淋上蘸汁即可'],
      2: ['皮蛋剥壳冲洗干净，用细线切成6瓣|嫩豆腐切片在开水中烫一下摆盘中央|皮蛋瓣围绕豆腐摆放|姜切末，加醋、生抽、香油、少许糖调成汁|淋在皮蛋和豆腐上|撒葱花和花生碎即可']},
    zh_ingredients: {
      1: '皮蛋3个，姜1块，醋3勺，生抽2勺',
      2: '皮蛋3个，嫩豆腐1盒，姜1块，葱1根，花生碎少许，醋3勺，生抽2勺，香油1勺，糖少许'
    }
  },
  27: { // 炒青菜 - Stir-Fried Greens
    zh_steps: {
      1: ['青菜洗净，切成段|锅中放油烧热，放入蒜末爆香|放入青菜大火快速翻炒|加少许盐调味|翻炒至青菜变软即可出锅'],
      2: ['青菜洗净沥干水分，切段|蒜切末，干辣椒切段（可选）|锅中放油烧热，下蒜末干辣椒爆香|放入青菜大火快速翻炒约1分钟|沿锅边淋少许水产生蒸汽|加盐和少许糖调味|翻炒均匀即可出锅，保持翠绿色']},
    zh_ingredients: {
      1: '青菜400g，蒜3瓣，盐少许，油2勺',
      2: '青菜500g，蒜5瓣，干辣椒2个（可选），盐，糖少许，油2勺'
    }
  },
  28: { // 鱼香茄子 - Eggplant in Garlic Sauce
    zh_steps: {
      1: ['茄子洗净切长条|锅中放油烧热，放入茄子煎至变软|加蒜末姜末葱花炒香|加豆瓣酱炒出红油|加生抽糖醋和少许水|翻炒均匀，煮至茄子入味|撒葱花出锅'],
      2: ['茄子洗净切长条，撒少许盐腌10分钟去水|肉末加料酒生抽腌一下|锅中多放油，下茄子煎至两面金黄变软盛出|锅中留底油，下肉末炒散变色|加豆瓣酱、蒜末、姜末炒出红油|加入茄子翻炒|调鱼香汁：生抽、糖、醋、水、淀粉调匀|倒入锅中快速翻炒，汤汁收浓即可出锅']},
    zh_ingredients: {
      1: '茄子3根，蒜末姜末葱花，豆瓣酱2勺，生抽2勺，糖1勺，醋1勺',
      2: '茄子3根，猪肉馅100g，蒜末姜末葱花，豆瓣酱2勺，生抽2勺，糖2勺，醋2勺，料酒，淀粉'
    }
  },
  29: { // 干煸四季豆 - Dry-Fried Green Beans
    zh_steps: {
      1: ['四季豆去两头和筋，掰成段|锅中放油烧热，放入四季豆中火煎至表皮起皱|加蒜末和干辣椒炒香|加少许盐和生抽调味|翻炒均匀即可出锅'],
      2: ['四季豆去两头和筋，掰成段，沥干水分|猪肉馅加料酒生抽腌一下|锅中多放油，下四季豆中火煸炒至表皮起皱变软盛出|锅中留底油，下肉末炒散至金黄|加蒜末、姜末、干辣椒段、花椒炒香|倒回四季豆大火翻炒|加盐、生抽、少许糖调味|翻炒均匀即可出锅']},
    zh_ingredients: {
      1: '四季豆400g，蒜3瓣，干辣椒3个，盐，生抽',
      2: '四季豆500g，猪肉馅100g，蒜5瓣，姜少许，干辣椒5个，花椒1勺，盐，生抽，糖少许，料酒'
    }
  },
  30: { // 蒜蓉小白菜 - Bok Choy with Garlic
    zh_steps: {
      1: ['小白菜洗净，对半切开或整棵|蒜切末|锅中放油烧热，放入一半蒜末爆香|放入小白菜大火翻炒|加少许盐调味|炒至小白菜变软，加剩下蒜末翻炒几下即可出锅'],
      2: ['小白菜洗净沥干，每棵对半切开|蒜切末，红椒切小丁点缀用|锅中放油烧热，下大部分蒜末爆香|放入小白菜大火快速翻炒约1分钟|沿锅边淋少许水产生蒸汽|加盐和少许糖调味|加剩下的蒜末和红椒丁|翻炒均匀即可出锅']},
    zh_ingredients: {
      1: '小白菜400g，蒜5瓣，盐少许',
      2: '小白菜500g，蒜8瓣，红椒半个，盐，糖少许'
    }
  },
  31: { // 酸辣汤 - Hot and Sour Soup
    zh_steps: {
      1: ['木耳泡发切丝，豆腐切丝，鸡蛋打散|锅中加水烧开，放入木耳和豆腐丝|加生抽、醋、白胡椒粉和盐调味|水淀粉勾芡使汤变浓稠|转圈淋入蛋液形成蛋花|撒葱花出锅即可'],
      2: ['木耳泡发切丝，香菇泡发切丝，豆腐切丝，笋切丝，瘦肉切丝加料酒腌一下|鸡蛋打散，香菜切末|锅中加水或高汤烧开，放入肉丝煮至变色|加入木耳丝香菇丝笋丝豆腐丝煮3分钟|加生抽、老抽、醋、白胡椒粉、盐调味|水淀粉分次勾芡至浓稠度适中|转圈淋入蛋液形成漂亮的蛋花|淋香油，撒香菜末和葱花即可']},
    zh_ingredients: {
      1: '嫩豆腐1盒，木耳5朵，鸡蛋1个，生抽2勺，醋3勺，白胡椒粉1勺，盐，淀粉',
      2: '嫩豆腐1盒，木耳5朵，香菇3朵，笋50g，瘦肉50g，鸡蛋1个，生抽2勺，老抽半勺，醋4勺，白胡椒粉1勺，盐，淀粉，香菜，香油'
    }
  },
  32: { // 馄饨汤 - Wonton Soup
    zh_steps: {
      1: ['猪肉馅加姜末葱花盐生抽拌匀|取馄饨皮放馅料，对折捏紧，两角弯回捏合|锅中水烧开，放入馄饨煮至浮起|碗中放生抽香油紫菜虾皮|连汤带馄饨盛入碗中，撒葱花即可'],
      2: ['猪肉馅加姜末葱花、盐、生抽、料酒、白胡椒粉、少许水搅上劲|取馄饨皮放适量馅料，对折成三角形，两角弯回捏合|锅中烧开水，放入馄饨煮至全部浮起（约3分钟）|准备汤底：碗中放生抽、香油、白胡椒粉、紫菜、虾皮、葱花|先舀一勺热汤冲入碗中，再盛入馄饨|撒香菜末即可']},
    zh_ingredients: {
      1: '馄饨皮30张，猪肉馅200g，姜葱，盐，生抽，紫菜，虾皮，香油',
      2: '馄饨皮40张，猪肉馅300g，姜葱，盐，生抽，料酒，白胡椒粉，紫菜，虾皮，香油，香菜'
    }
  },
  33: { // 蛋花汤 - Egg Drop Soup
    zh_steps: {
      1: ['鸡蛋打散搅匀|锅中加水烧开，加少许盐调味|水淀粉勾薄芡|转圈淋入蛋液，用筷子搅散形成蛋花|撒葱花，淋少许香油即可出锅'],
      2: ['鸡蛋2个打散搅匀|番茄切小块，葱切花，香菜切末|锅中放少许油，下番茄块炒出汁|加适量水烧开煮2分钟|加盐和白胡椒粉调味|水淀粉勾薄芡|转圈淋入蛋液，用筷子轻轻搅动形成漂亮蛋花|撒葱花和香菜末，淋香油出锅']},
    zh_ingredients: {
      1: '鸡蛋2个，盐少许，淀粉1勺，葱花，香油',
      2: '鸡蛋2个，番茄1个，葱，香菜，盐，白胡椒粉，淀粉1勺，香油'
    }
  },
  34: { // 丝瓜汤 - Luffa Soup
    zh_steps: {
      1: ['丝瓜去皮切成滚刀块|锅中放少许油，加姜片爆香|放入丝瓜翻炒几下|加适量水烧开煮3分钟|加盐调味，撒葱花即可出锅'],
      2: ['丝瓜去皮切成滚刀块|木耳泡发撕小朵|鸡蛋打散|锅中放少许油，加姜丝爆香|放入丝瓜块翻炒至变软|加适量水或高汤烧开，放入木耳|煮3分钟至丝瓜透明|加盐和白胡椒粉调味|转圈淋入蛋液形成蛋花|撒葱花即可出锅']},
    zh_ingredients: {
      1: '丝瓜2根，姜3片，盐少许，葱1根',
      2: '丝瓜2根，鸡蛋1个，木耳5朵，姜，葱，盐，白胡椒粉'
    }
  },
  35: { // 莲藕汤 - Lotus Root Soup
    zh_steps: {
      1: ['莲藕去皮切片，排骨斩段焯水|排骨放入锅中加水大火烧开转小火炖30分钟|加入莲藕继续炖30分钟|加盐调味，撒葱花即可'],
      2: ['排骨斩段冷水下锅加姜片料酒焯水5分钟捞出洗净|莲藕去皮切滚刀块，花生提前泡水|排骨放入锅中加足量水，加姜片大火烧开转小火炖40分钟|加入莲藕和花生继续炖40分钟至莲藕粉糯|加盐和少许白胡椒粉调味|撒葱花即可']},
    zh_ingredients: {
      1: '排骨300g，莲藕1节，姜3片，盐，葱',
      2: '排骨500g，莲藕2节，花生50g，姜5片，盐，白胡椒粉，料酒，葱'
    }
  },
  36: { // 红豆汤 - Sweet Red Bean Soup
    zh_steps: {
      1: ['红豆提前浸泡4小时以上|将红豆放入锅中加足量水大火烧开|转小火慢煮1小时至红豆软烂|加冰糖搅拌至融化|煮至汤汁浓稠即可关火'],
      2: ['红豆提前浸泡过夜|陈皮泡软切丝备用|红豆放入锅中加足量水大火烧开|倒掉第一遍水去除涩味|重新加水和陈皮大火烧开转小火慢煮1.5小时|煮至红豆开花软烂|加冰糖和少许桂花煮至融化|再煮10分钟至汤汁浓稠即可']},
    zh_ingredients: {
      1: '红豆200g，冰糖50g',
      2: '红豆300g，冰糖80g，陈皮1小块，干桂花少许'
    }
  },
  37: { // 宫保豆腐 - Kung Pao Tofu
    zh_steps: {
      1: ['豆腐切方块，用厨房纸吸干水分|锅中放油烧热，放入豆腐块煎至两面金黄|加生抽和糖翻炒均匀|加花生米和葱花翻炒|出锅即可'],
      2: ['老豆腐切方块，用厨房纸吸干水分|锅中多放油，下豆腐块煎至六面金黄酥脆盛出|锅中留底油，爆香葱花姜末蒜末和干辣椒段|加入煎好的豆腐翻炒|调碗汁：生抽、糖、醋、淀粉、水调匀|倒入碗汁快速翻炒裹匀|加花生米翻炒几下出锅']},
    zh_ingredients: {
      1: '老豆腐400g，花生50g，生抽2勺，白糖1勺，葱2根',
      2: '老豆腐500g，花生60g，干辣椒3个，葱姜蒜，生抽2勺，糖1勺，醋1勺，淀粉1勺'
    }
  },
  38: { // 东坡肉 - Dongpo Pork
    zh_steps: {
      1: ['五花肉正方块，焯水5分钟捞出|砂锅底铺葱段和姜片|肉皮朝下放入砂锅，加料酒生抽老抽冰糖|加开水没过肉块，大火烧开转小火炖1小时|翻面肉皮朝上继续炖30分钟|转大火收汁即可'],
      2: ['五花肉切成10cm见方块，用草绳扎紧防散|冷水下锅加姜片料酒焯水10分钟捞出|砂锅底铺葱段姜片|肉皮朝下放入砂锅，加料酒、生抽、老抽、冰糖、八角|加开水没过肉块2cm，大火烧开转小火炖2小时|翻面肉皮朝上，继续炖1小时至酥烂|取出装盘，汤汁大火收浓浇在肉上']},
    zh_ingredients: {
      1: '五花肉500g，葱2根，姜5片，生抽3勺，老抽2勺，冰糖30g，料酒3勺',
      2: '五花肉800g，葱3根，姜8片，八角2个，生抽4勺，老抽3勺，冰糖50g，料酒半碗'
    }
  },
  39: { // 狮子头 - Lion Head Meatballs
    zh_steps: {
      1: ['猪肉馅加姜末葱花、盐、生抽、料酒顺一个方向搅匀|加少许淀粉和水继续搅上劲|将肉馅团成大肉丸|锅中放油，放入肉丸煎至表面金黄|加开水没过肉丸一半，加生抽调味|盖盖小火炖20分钟即可'],
      2: ['五花肉和瘦肉一起剁成肉馅（手工剁口感更好）|加姜末葱花、盐、生抽、料酒、白胡椒粉、鸡蛋、淀粉顺一个方向搅上劲|荸荠去皮切碎加入肉馅中拌匀增加口感|将肉馅团成4个大肉丸|锅中多放油烧至六成热，下肉丸炸至表面金黄定型|锅中留底油，加葱姜爆香，加水和生抽老抽烧开|放入肉丸，盖盖小火炖40分钟至酥烂|青菜焯水围边，肉丸装盘，汤汁收浓浇上']},
    zh_ingredients: {
      1: '猪肉馅400g，姜葱，盐，生抽，料酒，淀粉少许',
      2: '五花肉400g，瘦肉200g，荸荠5个，鸡蛋1个，姜葱，盐，生抽，老抽，料酒，白胡椒粉，淀粉，青菜'
    }
  },
  40: { // 红薯糖水 - Sweet Potato Soup
    zh_steps: {
      1: ['红薯去皮切滚刀块|姜切片拍松|红薯和姜片放入锅中加足量水大火烧开|转小火煮20分钟至红薯软烂|加冰糖或红糖煮至融化即可'],
      2: ['红薯和紫薯去皮切滚刀块（混合颜色更好看）|姜切片拍松，红枣洗净|锅中加水烧开，放入姜片和红枣煮5分钟|加入红薯紫薯块大火烧开转小火煮20分钟|加冰糖或红糖煮至融化|煮至汤汁微甜浓稠，红薯软糯即可关火']},
    zh_ingredients: {
      1: '红薯500g，姜3片，冰糖50g',
      2: '红薯300g，紫薯200g，红枣10颗，姜5片，冰糖80g'
    }
  },
  41: { // 皮蛋豆腐 - Century Egg Tofu
    zh_steps: {
      1: ['嫩豆腐整块放入盘中|皮蛋剥壳切成小丁|姜切末，葱切花|皮蛋丁撒在豆腐上|生抽、醋、香油调成汁淋上|撒上姜末和葱花即可'],
      2: ['嫩豆腐切片在开水中烫一下，捞出摆盘|皮蛋剥壳切小丁，榨菜切末|姜切末，蒜切末，葱切花，红椒切小丁|皮蛋丁、榨菜末撒在豆腐上|生抽、醋、糖、香油、辣椒油调成汁|淋在豆腐上，撒姜末蒜末葱花红椒丁|花生碎点缀即可']},
    zh_ingredients: {
      1: '嫩豆腐1盒，皮蛋2个，姜，葱，生抽2勺，醋1勺，香油1勺',
      2: '嫩豆腐1盒，皮蛋2个，榨菜少许，姜蒜葱，红椒半个，花生碎，生抽2勺，醋2勺，糖少许，香油，辣椒油'
    }
  },
  42: { // 拍黄瓜 - Cucumber Salad
    zh_steps: {
      1: ['黄瓜洗净，用刀背拍裂后切成段|蒜切末|黄瓜加盐腌5分钟，倒掉多余水分|加蒜末、生抽、醋、糖、香油拌匀即可'],
      2: ['黄瓜洗净用刀背拍裂（让黄瓜自然裂开更入味）|切成小段，加少许盐腌10分钟|倒掉腌出的水分|蒜切末，干辣椒剪段|锅中烧热油，下花椒和干辣椒炸香|蒜末放在黄瓜上，浇上热油|加生抽、醋、糖、香油拌匀|撒熟芝麻即可']},
    zh_ingredients: {
      1: '黄瓜2根，蒜3瓣，生抽2勺，醋2勺，糖1勺，香油1勺，盐',
      2: '黄瓜2根，蒜5瓣，干辣椒3个，花椒1小勺，生抽2勺，醋3勺，糖1勺，香油1勺，盐，熟芝麻'
    }
  },
  43: { // 泡椒凤爪 - Spicy Chicken Feet
    zh_steps: {
      1: ['鸡爪剪去指甲，洗净|锅中加水烧开，放入鸡爪煮15分钟|捞出过凉水，沥干|泡椒切段，加泡椒水、盐、糖、醋调成泡汁|鸡爪放入泡汁中，冰箱冷藏浸泡4小时以上即可'],
      2: ['鸡爪剪去指甲，每个斩成两半|锅中加水烧开，加姜片料酒八角，放入鸡爪煮15分钟|捞出过冰水（使鸡爪更Q弹），沥干|泡椒和野山椒切段，加泡椒水、花椒、盐、糖、白醋、凉开水调成泡汁|鸡爪放入泡汁中，加姜片蒜片和芹菜段增香|冰箱冷藏浸泡过夜更入味']},
    zh_ingredients: {
      1: '鸡爪500g，泡椒200g，泡椒水半碗，盐，糖，醋',
      2: '鸡爪600g，泡椒200g，野山椒100g，花椒1勺，姜，蒜，芹菜，盐，糖，白醋'
    }
  },
  44: { // 糖拌西红柿 - Sugar Tomatoes
    zh_steps: {
      1: ['西红柿洗净去蒂|切成薄片或瓣状|摆入盘中|均匀撒上白糖即可'],
      2: ['西红柿洗净去蒂|切成均匀薄片|摆入盘中呈花形|撒上白糖，再撒少许盐提鲜|放入冰箱冷藏15分钟口感更佳|食用前可撒少许桂花点缀']},
    zh_ingredients: {
      1: '西红柿3个，白糖3勺',
      2: '西红柿3个，白糖4勺，盐少许，干桂花少许'
    }
  },
  45: { // 凉面 - Cold Noodles
    zh_steps: {
      1: ['面条煮熟捞出过凉水，沥干|黄瓜切丝，豆芽焯水|芝麻酱加水调稀，加生抽醋糖调成酱汁|面条装碗，放上黄瓜丝和豆芽|淋上酱汁，撒葱花即可'],
      2: ['面条煮熟捞出过冰水，沥干水分，加少许油拌匀防粘|鸡胸肉煮熟撕成丝，黄瓜切丝，豆芽焯水|芝麻酱用温水调开，加生抽、醋、糖、蒜泥、辣椒油、花椒粉调成酱汁|面条装碗，摆上鸡丝、黄瓜丝、豆芽、花生碎|淋上调好的酱汁，撒葱花和熟芝麻|拌匀即可食用']},
    zh_ingredients: {
      1: '面条300g，黄瓜1根，豆芽100g，芝麻酱2勺，生抽2勺，醋2勺，糖1勺',
      2: '面条400g，鸡胸肉1块，黄瓜1根，豆芽100g，花生碎，熟芝麻，芝麻酱3勺，生抽2勺，醋3勺，糖1勺，蒜泥，辣椒油，花椒粉，葱'
    }
  },
  46: { // 炸鸡 - Fried Chicken
    zh_steps: {
      1: ['鸡腿肉切块，加盐料酒白胡椒粉腌20分钟|面粉和淀粉混合|鸡肉裹上粉料|锅中油烧至六成热，放入鸡肉炸至金黄捞出|油温升高再复炸1分钟即可'],
      2: ['鸡腿去骨切块，加盐、料酒、白胡椒粉、蒜末、姜末、生抽腌30分钟|面粉和淀粉1:1混合，加少许盐和胡椒粉拌匀|鸡肉先裹一层粉料，再蘸蛋液，再裹一层粉料（反复裹粉更酥脆）|锅中油烧至六成热，放入鸡肉炸至微黄捞出|油温升至七成热，全部复炸1-2分钟至金黄酥脆|捞出控油即可']},
    zh_ingredients: {
      1: '鸡腿肉500g，面粉100g，淀粉100g，盐，料酒，白胡椒粉',
      2: '鸡腿肉600g，鸡蛋1个，面粉100g，淀粉100g，盐，料酒，白胡椒粉，蒜，姜，生抽'
    }
  },
  47: { // 葱油鸡 - Scallion Oil Chicken
    zh_steps: {
      1: ['鸡腿肉加盐料酒姜片腌20分钟|锅中加水烧开，放入鸡腿蒸15分钟至熟|取出切块装盘|葱切花，姜切末铺在鸡肉上|锅中烧热油浇在葱姜上激出香味|淋上生抽即可'],
      2: ['鸡腿或整鸡加盐料酒姜片葱段腌30分钟|锅中加水烧开，放入鸡肉大火蒸20分钟至熟透|取出斩块装盘|大量葱花和姜末铺在鸡肉上|锅中烧热油至冒烟，均匀浇在葱姜上|淋入蒸鱼豉油或生抽|可加少许红椒圈点缀']},
    zh_ingredients: {
      1: '鸡腿2个，葱5根，姜1块，盐，料酒，生抽，油',
      2: '鸡腿3个或小鸡1只，葱10根，姜1块，红椒半个，盐，料酒，蒸鱼豉油，油'
    }
  },
  48: { // 白切鸡 - White Cut Chicken
    zh_steps: {
      1: ['鸡洗净，锅中加水烧开加姜片料酒|手提鸡头放入开水中烫10秒提起，重复3次|整鸡放入锅中，转小火煮20分钟|关火焖10分钟至熟|捞出过冰水使皮更脆|斩块装盘，配姜葱蘸料食用'],
      2: ['鸡处理干净，锅中加足量水加姜片葱段料酒烧开|手提鸡头将鸡浸入开水中烫10秒提起，反复3次使皮收紧|整鸡放入锅中，大火烧开后转小火煮15分钟|关火盖盖焖15分钟至刚好熟透（用筷子插入大腿无血水）|捞出立即放入冰水中浸泡10分钟使皮脆肉滑|斩块装盘|姜葱蘸料：姜末葱花加盐，浇热油激香加少许生抽']},
    zh_ingredients: {
      1: '三黄鸡1只，姜1块，葱2根，料酒3勺',
      2: '三黄鸡1只，姜1块，葱3根，料酒3勺，冰水一盆，姜（蘸料），葱（蘸料），盐，生抽，油'
    }
  },
  49: { // 酱油鸡 - Soy Sauce Chicken
    zh_steps: {
      1: ['鸡腿加生抽老抽料酒姜片腌30分钟|锅中放少许油，放入鸡腿煎至两面金黄|加腌鸡的酱汁和适量水|大火烧开转小火焖20分钟至熟|转大火收汁，不断浇淋鸡腿使其上色|取出切块，淋上锅中酱汁即可'],
      2: ['鸡半只洗净沥干，加生抽老抽料酒姜片葱段腌1小时（中间翻面）|锅中放油烧热，放入鸡煎至两面金黄|加入腌鸡的酱汁、冰糖、八角、桂皮和适量水（没过鸡的一半）|大火烧开转小火，盖盖焖25分钟|打开盖，不断用勺子舀汤汁浇淋鸡身使其均匀上色|转大火收汁至汤汁浓稠|取出斩块装盘，淋上剩余酱汁即可']},
    zh_ingredients: {
      1: '鸡腿2个，生抽3勺，老抽2勺，料酒2勺，姜4片',
      2: '鸡半只，生抽4勺，老抽3勺，料酒3勺，冰糖20g，姜5片，葱2根，八角1个，桂皮1小段'
    }
  },
  50: { // 樟茶鸭 - Tea-Smoked Duck
    zh_steps: {
      1: ['鸭腿加盐花椒五香粉涂抹均匀腌制2小时|锅中放茶叶、糖、米，架上篦子|放入鸭腿，盖盖中小火熏10分钟|熏好的鸭腿放入蒸锅蒸30分钟|取出切块即可'],
      2: ['鸭腿加盐、花椒、五香粉、料酒、姜片涂抹均匀腌制4小时|锅中放茶叶、糖、米、八角、桂皮，架上篦子铺上锡纸|放入鸭腿，盖盖中小火熏10-15分钟至茶香入味|熏好的鸭腿放入蒸锅大火蒸30-40分钟至熟透|锅中多放油烧至七成热，放入鸭腿炸至皮脆色深|取出切块装盘即可']},
    zh_ingredients: {
      1: '鸭腿2个，茶叶2勺，糖2勺，米2勺，盐，花椒，五香粉',
      2: '鸭腿2个，茶叶3勺，糖3勺，米3勺，八角1个，桂皮1段，盐，花椒，五香粉，料酒，姜'
    }
  },
  51: { // 叉烧 - Char Siu
    zh_steps: {
      1: ['猪肩肉切长条，加叉烧酱、生抽、料酒、糖腌2小时|烤箱预热200度，烤盘铺锡纸|放入肉条烤20分钟|取出刷一层蜂蜜，翻面再烤15分钟|取出切片即可'],
      2: ['猪肩肉或梅花肉切长条，用叉子扎孔便于入味|加叉烧酱、生抽、老抽、料酒、蚝油、糖、蒜末腌过夜|烤箱预热200度，烤盘铺锡纸放上烤架|肉条放在烤架上，烤25分钟|取出刷一层蜂蜜和腌汁的混合液|翻面继续烤20分钟至表面焦香|取出稍微放凉后切片，剩余的烤盘汁淋上']},
    zh_ingredients: {
      1: '猪肩肉500g，叉烧酱3勺，生抽2勺，料酒1勺，糖1勺，蜂蜜2勺',
      2: '猪肩肉600g，叉烧酱4勺，生抽2勺，老抽1勺，料酒2勺，蚝油1勺，糖2勺，蒜3瓣，蜂蜜3勺'
    }
  },
  52: { // 白胡椒猪肚 - White Pepper Pig Stomach
    zh_steps: {
      1: ['猪肚用盐和面粉反复搓洗去腥，冲洗干净|锅中加水烧开，放入猪肚焯水5分钟捞出切条|猪肚放入锅中加水、姜片、白胡椒粒|大火烧开转小火炖1小时|加盐调味，撒枸杞和葱花即可'],
      2: ['猪肚用盐和面粉反复搓洗去黏液，冲洗干净，翻面去掉油脂|锅中加水加姜片料酒，放入猪肚焯水10分钟捞出|猪肚切条，白胡椒粒用刀背拍碎|锅中加足量水，放入猪肚、白胡椒碎、姜片、红枣|大火烧开转小火炖1.5小时至猪肚软烂|加盐和少许白胡椒粉调味|加枸杞煮5分钟，撒葱花即可']},
    zh_ingredients: {
      1: '猪肚1个，白胡椒粒2勺，姜5片，盐，枸杞少许，葱',
      2: '猪肚1个，白胡椒粒3勺，姜8片，红枣5颗，枸杞少许，盐，白胡椒粉，料酒，葱'
    }
  },
  53: { // 梅菜扣肉 - Pork with Preserved Vegetables
    zh_steps: {
      1: ['五花肉整块煮20分钟至七成熟捞出|梅干菜泡发洗净切碎|五花肉切片，皮朝下摆入碗中|梅干菜加生抽糖炒一下铺在肉上|蒸锅水开后放入，大火蒸1小时|倒扣装盘即可'],
      2: ['五花肉整块冷水下锅加姜片料酒煮30分钟至七成熟捞出|趁热在猪皮上扎小孔，抹老抽上色|锅中放油烧热，猪皮朝下煎至金黄起泡|梅干菜泡发洗净挤干水分，切碎|锅中放油炒香姜末蒜末，加梅干菜翻炒，加生抽糖料酒调味|五花肉切0.5cm厚片，皮朝下整齐码入碗中|铺上炒好的梅干菜压实|蒸锅水开后放入，大火蒸1.5小时至肉酥烂|取出倒扣盘中，撒葱花即可']},
    zh_ingredients: {
      1: '五花肉400g，梅干菜100g，姜，葱，生抽2勺，料酒，糖',
      2: '五花肉600g，梅干菜150g，姜，蒜，葱，生抽3勺，老抽2勺，料酒2勺，糖1勺'
    }
  },
  54: { // 糖醋排骨 - Sweet and Sour Ribs
    zh_steps: {
      1: ['排骨斩小段洗净，冷水下锅焯水捞出|锅中放油，加冰糖小火炒至融化|放入排骨翻炒上色|加料酒、生抽、醋和糖|加开水没过排骨，大火烧开转小火炖30分钟|转大火收汁至浓稠，撒芝麻即可'],
      2: ['排骨斩小段，冷水加姜片料酒焯水5分钟捞出洗净|锅中放油，加冰糖小火炒至枣红色|放入排骨翻炒上色，加姜片八角|加料酒、生抽、老抽、醋、糖|加开水没过排骨，大火烧开转小火炖40分钟至软烂|转大火收汁，不断翻动排骨|汤汁浓稠裹住每块排骨时，撒白芝麻和葱花出锅']
    },
    zh_ingredients: {
      1: '排骨500g，冰糖30g，料酒2勺，生抽2勺，醋3勺，糖2勺，白芝麻',
      2: '排骨600g，冰糖40g，姜4片，八角1个，料酒2勺，生抽2勺，老抽1勺，醋4勺，糖3勺，白芝麻，葱'
    }
  }
};

// 翻译助手函数 - 使用短语级匹配
function translateSteps(zhStepsArr, lang) {
  const phrases = {
    en: [
      ['锅中放油烧热，放入', 'Heat oil in a pan, add '],
      ['锅中放油烧至六成热', 'Heat oil to medium-high'],
      ['锅中放油烧至七成热', 'Heat oil to high'],
      ['锅中放油烧热', 'Heat oil in a pan'],
      ['锅中放少许油', 'Heat a little oil in a pan'],
      ['锅中多放油烧热', 'Heat more oil in a pan'],
      ['锅中多放油，下', 'Add more oil to the pan, add '],
      ['锅中留底油', 'Leave a little oil in the pan'],
      ['锅中放油，下', 'Heat oil, add '],
      ['锅中放油', 'Heat oil in a pan'],
      ['锅中加水烧开', 'Bring water to a boil'],
      ['锅中加足量水', 'Add enough water to the pot'],
      ['锅中加足量水烧开', 'Bring enough water to a boil'],
      ['大火烧开转小火炖', 'Bring to a boil then simmer on low heat for '],
      ['大火烧开转小火', 'Bring to a boil then reduce to low heat'],
      ['大火烧开后转小火', 'Bring to a boil then reduce to low heat'],
      ['大火烧开转中火', 'Bring to a boil then reduce to medium heat'],
      ['转大火收汁至', 'Increase to high heat and reduce sauce until '],
      ['转大火收汁', 'Increase to high heat to reduce the sauce'],
      ['大火收汁至浓稠', 'Reduce sauce on high heat until thickened'],
      ['大火快速翻炒', 'Quickly stir-fry on high heat'],
      ['大火翻炒至粒粒分明', 'Stir-fry on high heat until each grain is separate'],
      ['放入锅中大火蒸', 'Place in a steamer and steam on high heat for '],
      ['蒸锅水开后放入', 'When the steamer water boils, add '],
      ['蒸锅水开后大火蒸', 'When the steamer water boils, steam on high heat for '],
      ['烤箱预热', 'Preheat the oven to '],
      ['盖盖小火焖', 'Cover and simmer on low heat for '],
      ['盖盖中火焖', 'Cover and cook on medium heat for '],
      ['加开水没过肉', 'Add boiling water to cover the meat'],
      ['加开水没过', 'Add boiling water to cover '],
      ['加适量水烧开', 'Add some water and bring to a boil'],
      ['加适量水或高汤烧开', 'Add some water or broth and bring to a boil'],
      ['加适量水', 'Add some water'],
      ['加少许水焖煮', 'Add a little water and braise'],
      ['加少许水', 'Add a little water'],
      ['沿锅边淋入', 'Drizzle along the edge of the pan'],
      ['用刀背拍松', 'Tenderize with the back of a knife'],
      ['用刀背拍裂后切成段', 'Smash with the back of a knife then cut into segments'],
      ['用刀背十字形拍松', 'Tenderize crosswise with the back of a knife'],
      ['切成均匀薄片', 'Slice evenly into thin pieces'],
      ['切成薄片或瓣状', 'Slice thinly or into wedges'],
      ['切薄片', 'Slice thinly'],
      ['切成薄片', 'Slice into thin pieces'],
      ['切成滚刀块', 'Cut into rolling chunks'],
      ['切成小丁', 'Cut into small dice'],
      ['切滚刀块', 'Cut into rolling chunks'],
      ['切成小块', 'Cut into small pieces'],
      ['切成条状', 'Cut into strips'],
      ['切成段', 'Cut into sections'],
      ['切成斜段', 'Cut diagonally'],
      ['切成丝', 'Cut into shreds'],
      ['斩成两半', 'Chop in half'],
      ['斩小块', 'Chop into small pieces'],
      ['斩段', 'Chop into sections'],
      ['剁成肉馅', 'Mince the meat'],
      ['加少许盐腌制', 'Add a pinch of salt and marinate'],
      ['加少许盐和料酒腌制', 'Add a pinch of salt and wine to marinate'],
      ['加料酒生抽淀粉抓匀腌', 'Mix with wine, soy sauce and cornstarch, marinate for '],
      ['加料酒盐淀粉抓匀腌', 'Mix with wine, salt and cornstarch, marinate for '],
      ['加料酒生抽老抽淀粉抓匀腌', 'Mix with wine, soy sauce, dark soy and cornstarch, marinate for '],
      ['加盐、生抽、料酒顺一个方向搅匀', 'Mix salt, soy sauce and wine in one direction until combined'],
      ['加盐、生抽、料酒、白胡椒粉、鸡蛋、淀粉顺一个方向搅上劲', 'Mix salt, soy sauce, wine, pepper, egg and cornstarch in one direction until sticky'],
      ['加盐和白胡椒粉调味', 'Season with salt and white pepper'],
      ['加盐、白胡椒粉调味', 'Season with salt and white pepper'],
      ['加盐和少许糖调味', 'Season with salt and a little sugar'],
      ['加盐调味', 'Season with salt'],
      ['加生抽和糖调味', 'Season with soy sauce and sugar'],
      ['加生抽老抽炒出酱香味', 'Add light and dark soy sauce, stir until fragrant'],
      ['加生抽老抽翻炒上色', 'Add light and dark soy sauce, stir to color'],
      ['加生抽老抽白糖调味', 'Season with soy sauce, dark soy and sugar'],
      ['加生抽老抽糖', 'Add light soy, dark soy and sugar'],
      ['加生抽和白糖翻炒均匀', 'Add soy sauce and sugar, stir well'],
      ['加生抽、糖翻炒均匀', 'Add soy sauce and sugar, stir well'],
      ['加生抽、糖、醋翻炒均匀', 'Add soy sauce, sugar and vinegar, stir well'],
      ['加生抽、糖、醋、少许水', 'Add soy sauce, sugar, vinegar and a little water'],
      ['加生抽糖醋和少许水', 'Add soy sauce, sugar, vinegar and a little water'],
      ['加生抽调味', 'Season with soy sauce'],
      ['加少许生抽', 'Add a little soy sauce'],
      ['加生抽和少许糖调味', 'Season with soy sauce and a little sugar'],
      ['加料酒和盐腌', 'Marinate with wine and salt'],
      ['加料酒去腥', 'Add wine to remove gamey flavor'],
      ['加料酒、生抽、老抽翻炒出香味', 'Add wine, light and dark soy, stir until fragrant'],
      ['加料酒、生抽、老抽翻炒均匀', 'Add wine, light and dark soy, stir well'],
      ['加料酒、生抽、老抽', 'Add wine, light soy sauce, dark soy sauce'],
      ['加料酒生抽老抽', 'Add wine, light soy sauce, dark soy sauce'],
      ['加料酒生抽', 'Add wine and soy sauce'],
      ['加料酒腌', 'Marinate with wine for '],
      ['加冰糖炒至融化', 'Add rock sugar and stir until melted'],
      ['加冰糖小火炒至融化', 'Add rock sugar and stir on low heat until melted'],
      ['加冰糖小火炒至枣红色', 'Add rock sugar and cook on low heat until dark red'],
      ['加冰糖小火炒糖色至枣红色', 'Add rock sugar on low heat until caramel color turns dark red'],
      ['翻炒均匀即可出锅', 'Stir well and serve'],
      ['翻炒均匀即可出锅装盘', 'Stir well and plate'],
      ['翻炒均匀即可', 'Stir-fry evenly and done'],
      ['翻炒均匀', 'Stir-fry evenly'],
      ['翻炒上色', 'Stir-fry until colored'],
      ['快速翻炒均匀', 'Quickly stir-fry evenly'],
      ['快速翻炒裹匀', 'Quickly stir-fry to coat evenly'],
      ['反复3次', 'Repeat 3 times'],
      ['反复搓洗', 'Scrub repeatedly'],
      ['捞出沥干水分', 'Remove and drain well'],
      ['捞出过凉水', 'Remove and rinse with cold water'],
      ['捞出过冰水', 'Remove and soak in ice water'],
      ['捞出控油', 'Remove and drain oil'],
      ['捞出沥干', 'Remove and drain'],
      ['捞出放凉', 'Remove and let cool'],
      ['捞出过凉水沥干', 'Remove, rinse with cold water and drain'],
      ['洗净沥干水分', 'Wash and drain well'],
      ['洗净沥干', 'Wash and drain'],
      ['洗净切片', 'Wash and slice'],
      ['洗净切块', 'Wash and cut into pieces'],
      ['洗净切段', 'Wash and cut into sections'],
      ['洗净去蒂', 'Wash and remove the stem'],
      ['洗净擦干', 'Wash and pat dry'],
      ['清洗干净', 'Wash clean'],
      ['冲洗干净', 'Rinse clean'],
      ['倒入蛋液快速炒散', 'Pour in the beaten eggs and quickly stir to scramble'],
      ['倒入蛋液炒散', 'Pour in the beaten eggs and stir to scramble'],
      ['倒入蛋液炒至半熟盛出', 'Pour in the beaten eggs, cook until half done and set aside'],
      ['鸡蛋打散', 'Beat the eggs'],
      ['鸡蛋打散搅匀', 'Beat the eggs until smooth'],
      ['鸡蛋打散加少许盐', 'Beat the eggs with a pinch of salt'],
      ['淋入蛋液形成蛋花', 'Drizzle in the beaten eggs to form egg ribbons'],
      ['转圈淋入蛋液', 'Drizzle the beaten eggs in a circular motion'],
      ['腌', 'marinate for '],
      ['腌制', 'marinate'],
      ['浸泡', 'soak for '],
      ['泡发', 'soak until soft'],
      ['焯水', 'blanch for '],
      ['焯水捞出', 'blanch and drain'],
      ['汤圆浮起', 'tangyuan float to the surface'],
      ['煮至浮起', 'cook until they float'],
      ['煮至饺子浮起', 'cook until dumplings float'],
      ['煮至浓稠', 'cook until thickened'],
      ['煮至汤汁浓稠', 'cook until the soup thickens'],
      ['煮至入味', 'cook until flavored'],
      ['煮至变白', 'cook until white'],
      ['煮至变色', 'cook until color changes'],
      ['煮至金黄', 'cook until golden'],
      ['煮至断生', 'cook until done'],
      ['煮至软烂', 'cook until tender'],
      ['煮至透明', 'cook until translucent'],
      ['轻轻推动', 'Gently push'],
      ['用锅铲不停翻动', 'Keep turning with a spatula'],
      ['不要翻动', 'Do not stir'],
      ['翻面', 'Flip over'],
      ['倒扣装盘', 'Flip onto a plate'],
      ['倒扣盘中', 'Flip onto a plate'],
      ['取出切块', 'Remove and cut into pieces'],
      ['取出切片', 'Remove and slice'],
      ['取出斩块', 'Remove and chop into pieces'],
      ['切成1cm厚片', 'Cut into 1cm thick slices'],
      ['切成3cm方块', 'Cut into 3cm cubes'],
      ['切成2cm方块', 'Cut into 2cm cubes'],
      ['切成1.5cm方块', 'Cut into 1.5cm cubes'],
      ['切成1.5cm小丁', 'Cut into 1.5cm cubes'],
      ['切成小块', 'Cut into small pieces'],
      ['撒葱花', 'Sprinkle scallions'],
      ['撒葱花翻炒均匀', 'Sprinkle scallions and stir well'],
      ['撒葱花翻炒均匀即可出锅', 'Sprinkle scallions, stir well and serve'],
      ['撒葱花即可', 'Sprinkle scallions and serve'],
      ['撒葱花即可出锅', 'Sprinkle scallions and serve'],
      ['撒葱花和熟芝麻', 'Sprinkle scallions and toasted sesame'],
      ['撒白芝麻和葱花', 'Sprinkle white sesame and scallions'],
      ['撒熟芝麻', 'Sprinkle toasted sesame'],
      ['撒少许葱花', 'Sprinkle a little scallions'],
      ['撒上白糖', 'Sprinkle with sugar'],
      ['均匀撒上白糖', 'Sprinkle evenly with sugar'],
      ['装盘即可', 'Plate and serve'],
      ['出锅装盘即可', 'Remove from heat and plate'],
      ['出锅装盘', 'Remove from heat and plate'],
      ['即可出锅', 'Ready to serve'],
      ['即可食用', 'Ready to eat'],
      ['即可享用', 'Enjoy'],
      ['立即出锅装盘', 'Serve immediately'],
      ['立即出锅', 'Serve immediately'],
      ['即可关火', 'Turn off the heat'],
      ['关火出锅', 'Turn off heat and serve'],
      ['关火再焖', 'Turn off heat and let rest covered for '],
      ['关火焖', 'Turn off heat and let rest for '],
      ['盖盖焖', 'Cover and let cook for '],
      ['盖盖炖', 'Cover and simmer for '],
      ['小火慢煮', 'Simmer gently for '],
      ['小火煮', 'Simmer on low heat for '],
      ['小火炖', 'Simmer on low heat for '],
      ['大火蒸', 'Steam on high heat for '],
      ['大火煮', 'Cook on high heat for '],
      ['大火烧开', 'Bring to a boil'],
      ['大火烧开后', 'After bringing to a boil'],
      ['大火炒', 'Stir-fry on high heat for '],
      ['中火煎', 'Fry on medium heat until '],
      ['小火炸', 'Deep-fry on low heat until '],
      ['小火炒出红油', 'Stir on low heat until red oil releases'],
      ['小火慢炒', 'Stir slowly on low heat'],
      ['小火慢慢炒出红油', 'Stir slowly on low heat until red oil releases'],
      ['炒出红油', 'Stir-fry until red oil releases'],
      ['炒出香味', 'Stir-fry until fragrant'],
      ['炒出浓郁香味', 'Stir-fry until richly fragrant'],
      ['炒出酱香味', 'Stir-fry until the sauce is fragrant'],
      ['爆香', 'Sauté until fragrant'],
      ['爆香葱姜蒜', 'Sauté scallions, ginger and garlic until fragrant'],
      ['爆香蒜末', 'Sauté minced garlic until fragrant'],
      ['爆香葱花', 'Sauté scallions until fragrant'],
      ['香气四溢', 'until fragrant'],
      ['炒匀', 'Stir-fry evenly'],
      ['拌匀', 'Mix well'],
      ['搅匀', 'Stir well'],
      ['搅上劲', 'Stir until sticky'],
      ['抓匀', 'Mix evenly'],
      ['调匀', 'Mix well'],
      ['调成汁', 'Mix into a sauce'],
      ['调成糊状', 'Mix into a batter'],
      ['调成面糊', 'Mix into a batter'],
      ['调成酸奶状', 'Mix until yogurt-like consistency'],
      ['调脆炸糊', 'Make crispy frying batter'],
      ['调碗汁', 'Mix the sauce'],
      ['烧热油', 'Heat oil until hot'],
      ['锅中烧热油', 'Heat oil in a pan until hot'],
      ['锅中烧热油至冒烟', 'Heat oil in a pan until smoking'],
      ['浇上热油', 'Pour hot oil over'],
      ['浇一勺热油', 'Pour a spoonful of hot oil over'],
      ['浇一勺滚烫热油', 'Pour a spoonful of sizzling hot oil over'],
      ['淋上热油', 'Drizzle hot oil over'],
      ['淋上蒸鱼豉油', 'Drizzle steamed fish soy sauce around'],
      ['淋入少许香油', 'Drizzle a little sesame oil'],
      ['淋入水淀粉', 'Drizzle in cornstarch water'],
      ['淋入水淀粉勾芡', 'Drizzle in cornstarch water to thicken'],
      ['勾芡', 'Thicken with cornstarch water'],
      ['水淀粉勾芡', 'Thicken with cornstarch water'],
      ['水淀粉勾薄芡', 'Thicken lightly with cornstarch water'],
      ['分次淋入水淀粉勾芡', 'Drizzle cornstarch water in batches to thicken'],
      ['分三次淋入勾芡', 'Drizzle in 3 batches to thicken'],
      ['分三次淋入水淀粉勾芡', 'Drizzle cornstarch water in 3 batches to thicken'],
      ['用盐水泡', 'Soak in salted water for '],
      ['用清水浸泡', 'Soak in water for '],
      ['用淡盐水浸泡', 'Soak in lightly salted water for '],
      ['盐水中浸泡', 'Soak in salted water for '],
      ['用盐和面粉反复搓洗', 'Scrub repeatedly with salt and flour'],
      ['冷水下锅加姜片料酒焯水', 'Place in cold water with ginger and wine, bring to a boil and blanch'],
      ['冷水下锅焯水', 'Place in cold water and bring to a boil, blanch'],
      ['冷水下锅', 'Place in cold water'],
      ['冷水加姜片料酒焯水', 'Place in cold water with ginger and wine, bring to a boil'],
      ['水开后', 'When the water boils'],
      ['水烧开', 'Water brought to a boil'],
      ['水烧开后', 'After water boils'],
      ['开水中烫', 'Dip in boiling water for '],
      ['过冰水', 'Soak in ice water'],
      ['沥干水分', 'Drain well'],
      ['沥干水', 'Drain water'],
      ['沥干', 'Drain'],
      ['洗净', 'Wash'],
      ['清洗干净', 'Clean thoroughly'],
      ['冲洗干净', 'Rinse clean'],
      ['冲洗', 'Rinse'],
      ['去壳', 'Shell'],
      ['去虾线', 'Devein'],
      ['去皮', 'Peel'],
      ['去蒂', 'Remove stem'],
      ['去筋膜', 'Trim fat'],
      ['剪去须脚', 'Trim the legs'],
      ['片下鱼肉', 'Fillet the fish'],
      ['开背去虾线', 'Butterfly and devein'],
      ['全部浮起', 'All float to the surface'],
      ['沉淀出味', 'Let the flavors meld'],
      ['直至熟透', 'Until fully cooked'],
      ['熟透', 'Fully cooked'],
      ['回油', 'Let rest and soften'],
      ['切花刀', 'Score in a crosshatch pattern'],
      ['刷蛋液', 'Brush with egg wash'],
      ['包保鲜膜', 'Cover with plastic wrap'],
      ['撒干面粉', 'Sprinkle with flour'],
      ['揉成面团', 'Knead into a dough'],
      ['揉成光滑面团', 'Knead into a smooth dough'],
      ['醒发', 'Let rise until '],
      ['醒面', 'Let the dough rest for '],
      ['擀成薄片', 'Roll into a thin sheet'],
      ['擀成薄饼', 'Roll into a thin pancake'],
      ['擀成圆形', 'Roll into a circle'],
      ['包入馅料', 'Fill with the filling'],
      ['捏合', 'Pinch to seal'],
      ['捏紧收口', 'Pinch the opening tightly'],
      ['捏出褶子', 'Pinch pleats'],
      ['收口捏紧搓圆', 'Pinch the opening tight and roll into a ball'],
      ['收口搓圆', 'Seal and roll into a ball'],
      ['搓条切小剂子', 'Roll into a log and cut into small pieces'],
      ['搓成长条', 'Roll into a long log'],
      ['对折捏紧', 'Fold in half and pinch tightly'],
      ['加入', 'Add '],
      ['放入', 'Add '],
      ['倒在', 'Pour into '],
      ['倒入', 'Pour in '],
      ['铺上', 'Spread over '],
      ['铺在', 'Spread on '],
      ['铺', 'Spread'],
      ['摆放', 'Arrange'],
      ['摆盘', 'Arrange on a plate'],
      ['摆入盘中', 'Arrange on a plate'],
      ['整鸡', 'whole chicken'],
      ['鸡半只', 'half chicken'],
      ['鸡腿', 'chicken thighs'],
      ['鸡肉', 'chicken'],
      ['鸡块', 'chicken pieces'],
      ['鸭腿', 'duck legs'],
      ['鸭肉', 'duck meat'],
      ['鱼片', 'fish fillet'],
      ['鱼骨', 'fish bones'],
      ['鲜鱼', 'fresh fish'],
      ['排骨', 'ribs'],
      ['大虾', 'shrimp'],
      ['虾仁', 'shrimp meat'],
      ['鸡爪', 'chicken feet'],
      ['五花肉', 'pork belly'],
      ['猪肩肉', 'pork shoulder'],
      ['猪里脊肉', 'pork tenderloin'],
      ['猪肚', 'pork stomach'],
      ['里脊肉', 'tenderloin'],
      ['肉馅', 'ground meat'],
      ['肉末', 'minced meat'],
      ['肉片', 'meat slices'],
      ['肉丝', 'shredded meat'],
      ['肉丸', 'meatball'],
      ['肉块', 'meat chunks'],
      ['肉条', 'meat strips'],
      ['瘦肉', 'lean meat'],
      ['肥牛片', 'beef slices'],
      ['羊肉片', 'lamb slices'],
      ['猪皮', 'pork skin'],
      ['饺子皮', 'dumpling wrappers'],
      ['馄饨皮', 'wonton wrappers'],
      ['2张', '2 pieces'],
      ['适量', 'appropriate amount'],
      ['少许', 'a little'],
      ['比特', 'bit'],
      ['细线切', 'cut with a thin thread'],
      ['压花', 'press with a mold'],
      ['刻成花', 'carve into flower shape'],
      ['切成花形', 'cut into flower shape'],
      ['红豆提前浸泡', 'Soak red beans overnight'],
      ['糯米提前浸泡', 'Soak glutinous rice in advance for '],
      ['糯米粉加温水揉成光滑面团', 'Mix glutinous rice flour with warm water and knead into a smooth dough'],
      ['粽叶洗净泡软', 'Wash bamboo leaves and soak until soft'],
      ['香味', 'fragrant'],
      ['入味', 'flavored'],
      ['完美', 'perfect'],
      ['剩米饭', 'Leftover rice'],
      ['隔夜米饭', 'Overnight rice'],
      ['米饭', 'rice'],
      ['蛋液', 'beaten egg'],
      ['葱花', 'chopped scallions'],
      ['姜末', 'minced ginger'],
      ['蒜末', 'minced garlic'],
      ['姜片', 'ginger slices'],
      ['姜丝', 'ginger shreds'],
      ['蒜片', 'garlic slices'],
      ['葱段', 'scallion segments'],
      ['干辣椒', 'dried chilies'],
      ['花椒', 'Sichuan pepper'],
      ['豆瓣酱', 'chili bean paste'],
      ['白胡椒粉', 'white pepper'],
      ['鸡精', 'chicken bouillon'],
      ['蚝油', 'oyster sauce'],
      ['香油', 'sesame oil'],
      ['水淀粉', 'cornstarch water'],
      ['番茄酱', 'ketchup'],
      ['高汤', 'broth'],
      ['上汤', 'broth'],
      ['面粉', 'flour'],
      ['糯米粉', 'glutinous rice flour'],
      ['开水', 'boiling water'],
      ['温水', 'warm water'],
      ['炒散', 'stir-fry to break up'],
      ['炒香', 'stir until fragrant'],
      ['炒匀', 'stir evenly'],
      ['翻炒', 'stir-fry'],
      ['煎至', 'pan-fry until '],
      ['炸至', 'deep-fry until '],
      ['蒸至', 'steam until '],
      ['煮至', 'cook until '],
      ['炖至', 'simmer until '],
      ['焖至', 'braise until '],
      ['焯至', 'blanch until '],
      ['烤至', 'roast until '],
      ['打散', 'break apart'],
      ['搅散', 'stir to break up'],
      ['捏散', 'break apart with fingers'],
      ['揉匀', 'knead evenly'],
      ['按扁', 'flatten'],
      ['压扁', 'flatten'],
      ['排气', 'release air'],
      ['醒发', 'let rise until doubled'],
      ['醒面', 'let the dough rest'],
      ['发好', 'fully risen'],
      ['回温', 'bring to room temperature'],
      ['提前', 'in advance'],
      ['先', 'first '],
      ['再', 'then '],
      ['最后', 'finally '],
      ['然后', 'then '],
      ['接着', 'next '],
      ['重新', 'again '],
      ['分钟', ' minutes'],
      ['小时', ' hours'],
      ['片刻', ' for a moment'],
      ['不时', 'occasionally'],
      ['视', 'depending on'],
      ['左右', 'about'],
      ['趁热', 'serve hot'],
      ['去壳', 'shell'],
      ['去皮', 'peel'],
      ['去籽', 'remove seeds'],
      ['去蒂', 'remove stem'],
      ['去筋膜', 'remove membrane'],
      ['去腥', 'remove fishy smell'],
      ['去骨', 'debone'],
      ['去刺', 'remove bones'],
      ['划几刀', 'score a few times'],
      ['切花刀', 'score crosswise'],
      ['剁碎', 'chop finely'],
      ['斩块', 'chop into pieces'],
      ['斩段', 'chop into sections'],
      ['撕成', 'tear into '],
      ['掰成', 'break into '],
      ['搓圆', 'roll into balls'],
      ['搓成长条', 'roll into a log'],
      ['擀开', 'roll out'],
      ['擀平', 'roll flat'],
      ['收口', 'seal the opening'],
      ['封口', 'seal the opening'],
      ['捏紧', 'pinch tight'],
      ['捏合', 'pinch together'],
      ['卷起', 'roll up'],
      ['卷成', 'roll into '],
      ['扎紧', 'tie tightly'],
      ['刷油', 'brush with oil'],
      ['刷蛋液', 'brush with egg wash'],
      ['晾凉', 'let cool'],
      ['放凉', 'let cool'],
      ['冷却', 'let cool down'],
      ['盛出', 'set aside'],
      ['盛入', 'ladle into '],
      ['捞出', 'remove and drain'],
      ['取出', 'take out'],
      ['倒回', 'return to the pan'],
      ['倒扣', 'invert onto'],
      ['备用', 'set aside'],
      ['重新放油', 'add fresh oil'],
      ['锅中再加少许油', 'add a little more oil to the pan'],
      ['锅中再放少许油', 'add a little more oil to the pan'],
      ['锅中再放油', 'add more oil to the pan'],
      ['开盖收汁', 'remove lid and reduce sauce'],
      ['开盖大火收汁', 'remove lid and reduce on high heat'],
      ['收干汤汁', 'reduce sauce until thick'],
      ['汤汁收浓', 'reduce until thickened'],
      ['小火慢炖', 'simmer gently on low heat'],
      ['小火熬煮', 'simmer on low heat'],
      ['中小火', 'medium-low heat'],
      ['大火烧开转中小火', 'Bring to a boil then reduce to medium-low heat'],
      ['盖盖中小火', 'cover and cook on medium-low heat for '],
      ['关火后再焖', 'turn off heat and let rest covered for '],
      ['关火后', 'after turning off the heat'],
      ['出锅前', 'before serving'],
      ['冷藏', 'refrigerate'],
      ['冰箱冷藏', 'store in fridge'],
      ['密封保存', 'store in an airtight container'],
      ['生炒', 'stir-fry raw'],
      ['拌匀', 'mix well'],
      ['调匀', 'mix well'],
      ['充分搅匀', 'mix thoroughly'],
      ['搅拌均匀', 'stir evenly'],
      ['搅上劲', 'stir until sticky and firm'],
      ['顺一个方向搅', 'stir in one direction'],
      ['朝一个方向搅', 'stir in one direction'],
      ['大约', 'approximately'],
      ['约', 'about'],
      ['以上', 'or more'],
      ['以下', 'or less'],
      ['用勺子', 'with a spoon'],
      ['用刀', 'with a knife'],
      ['用手', 'with your hands'],
      ['用筷子', 'with chopsticks'],
      ['避免结块', 'to avoid clumping'],
      ['结块', 'clumping'],
      ['打入碗中', 'crack into a bowl'],
      ['裹上蛋液', 'coated with egg'],
      ['让每粒米饭', 'making sure each grain of rice is '],
      ['每粒', 'each grain'],
      ['粒粒分明', 'each grain separate and distinct'],
      ['水分收干', 'liquid is absorbed'],
      ['水分快收干', 'liquid is almost absorbed'],
      ['煮出味', 'cook until flavored'],
      ['出味', 'release flavor'],
      ['变软', 'becomes soft'],
      ['变白', 'turns white'],
      ['变色', 'changes color'],
      ['变黄', 'turns yellow'],
      ['变红', 'turns red'],
      ['变脆', 'becomes crispy'],
      ['变稠', 'thickens'],
      ['煮熟', 'cook thoroughly'],
      ['煮透', 'cook through'],
      ['煮烂', 'cook until very soft'],
      ['煮软', 'cook until tender'],
      ['至熟', 'until cooked through'],
      ['至软', 'until soft'],
      ['至烂', 'until very soft'],
      ['至浓稠', 'until thickened'],
      ['至金黄', 'until golden'],
      ['至两面金黄', 'until golden on both sides'],
      ['至断生', 'until just cooked through'],
      ['至透明', 'until translucent'],
      ['至入味', 'until flavored'],
      ['至水分收干', 'until liquid is absorbed'],
      ['至水干', 'until water is gone'],
      ['至表面金黄', 'until the surface is golden'],
      ['轻轻推动', 'gently move'],
      ['用锅铲不停翻动', 'keep turning with a spatula'],
      ['不要翻动', 'do not stir'],
      ['翻面', 'flip over'],
      ['切开', 'cut open'],
      ['切大块', 'cut into large pieces'],
      ['切小块', 'cut into small pieces'],
      ['切成滚刀块', 'cut into rolling chunks'],
      ['切成厚片', 'cut into thick slices'],
      ['切成细丝', 'cut into thin shreds'],
      ['切成小丁', 'cut into small dice'],
      ['切成薄片', 'slice thinly'],
      ['切片', 'slice'],
      ['切丝', 'cut into shreds'],
      ['切丁', 'cut into dice'],
      ['切块', 'cut into pieces'],
      ['切段', 'cut into sections'],
      ['切条', 'cut into strips'],
      ['切末', 'mince'],
      ['切碎', 'finely chop'],
      ['剁末', 'mince finely'],
      ['剁成末', 'mince finely'],
      ['拍扁', 'smash flat'],
      ['拍裂', 'smash open'],
      ['猪肉', 'pork'],
      ['牛肉', 'beef'],
      ['鸡肉', 'chicken'],
      ['鱼肉', 'fish'],
      ['虾仁', 'shrimp'],
      ['大虾', 'large shrimp'],
      ['排骨', 'ribs'],
      ['里脊', 'tenderloin'],
      ['肉馅', 'ground meat'],
      ['肉末', 'minced meat'],
      ['肉丝', 'shredded meat'],
      ['肉片', 'meat slices'],
      ['肉块', 'meat chunks'],
      ['肉条', 'meat strips'],
      ['瘦肉', 'lean meat'],
      ['五花肉', 'pork belly'],
      ['饺子皮', 'dumpling wrappers'],
      ['馄饨皮', 'wonton wrappers'],
      ['熟芝麻', 'toasted sesame'],
      ['白芝麻', 'white sesame'],
      ['黑芝麻', 'black sesame'],
      ['花生碎', 'crushed peanuts'],
      ['花生米', 'peanuts'],
      ['，', ', '],
      ['鸡蛋', 'eggs'],
      ['大火翻炒', 'stir-fry on high heat'],
      ['从冰箱取出', 'take out from the refrigerator'],
      ['冰箱', 'refrigerator'],
      ['炒好的', 'the cooked '],
      ['继续', 'continue to '],
      ['加少许盐调味', 'Season with a pinch of salt'],
      ['加少许盐', 'add a pinch of salt'],
      ['加盐和', 'add salt and '],
      ['加糖和', 'add sugar and '],
      ['加醋和', 'add vinegar and '],
      ['加水中', 'add water and '],
      ['调味', 'season'],
      ['出锅', 'serve'],
      ['去血水', 'remove blood water'],
      ['泡软', 'soak until soft'],
      ['淘洗', 'rinse'],
      ['沥油', 'drain oil'],
      ['擦干', 'pat dry'],
      ['片下', 'fillet'],
      ['剪去', 'trim off'],
      ['去内脏', 'remove innards'],
      ['切半', 'cut in half'],
      ['对半切', 'cut in half'],
      ['对半切开', 'cut in half'],
      ['掰成小朵', 'break into small florets'],
      ['撕小朵', 'tear into small pieces'],
      ['撕成小朵', 'tear into small florets'],
      ['下入', 'add '],
      ['铺平', 'spread evenly'],
      ['倒入盘中', 'pour onto a plate'],
      ['盛入碗中', 'ladle into a bowl'],
      ['盛入盘中', 'ladle onto a plate'],
      ['盛出备用', 'set aside'],
      ['捞出备用', 'remove and set aside'],
      ['沥干备用', 'drain and set aside'],
      ['留着', 'reserve'],
      ['捞出沥油', 'remove and drain oil'],
      ['煎至两面金黄', 'pan-fry until golden on both sides'],
      ['煎至两面金黄盛出', 'pan-fry until golden on both sides and set aside'],
      ['下锅', 'add to the pan'],
      ['下油', 'add oil'],
      ['倒入锅中', 'pour into the pan'],
      ['放入锅中', 'place in the pan'],
      ['取出切块', 'take out and cut into pieces'],
      ['取出切片', 'take out and slice'],
      ['切成两半', 'cut in half'],
      ['压成泥', 'mash into a paste'],
      ['切成细末', 'finely mince'],
      ['掐成段', 'break into sections'],
      ['手握成团', 'shape into balls with hands'],
      ['挤出', 'squeeze out'],
      ['冲洗', 'rinse'],
      ['泡发后', 'after soaking until soft'],
      ['冷水泡', 'soak in cold water'],
      ['依次', 'in order'],
      ['分别', 'separately'],
      ['一起', 'together'],
      ['同时', 'at the same time'],
      ['中小火', 'medium-low heat'],
      ['中大火', 'medium-high heat'],
      ['温水泡', 'soak in warm water'],
      ['焯烫', 'blanch briefly'],
      ['过冷水', 'rinse with cold water'],
      ['过凉', 'rinse with cold water'],
      ['热水中烫', 'dip in hot water'],
      ['用厨房纸', 'with paper towel'],
      ['用清水', 'with clean water'],
      ['用冷水', 'with cold water'],
      ['用热水', 'with hot water'],
      ['吸干水分', 'pat dry with paper towel'],
      ['表面水分', 'surface water'],
      ['切掉', 'cut off'],
      ['切去', 'cut off'],
      ['片去', 'slice off'],
      ['浮沫', 'scum/foam'],
      ['撇去浮沫', 'skim off the foam'],
      ['撇去', 'skim off'],
      ['浮起', 'float'],
      ['浮', 'float'],
      ['沉底', 'sink to the bottom'],
      ['微黄', 'slightly golden'],
      ['微焦', 'slightly burnt'],
      ['粘锅', 'stick to the pan'],
      ['防粘', 'prevent sticking'],
      ['防粘锅', 'prevent sticking'],
      ['不粘锅', 'non-stick pan'],
      ['翻动', 'turn/stir'],
      ['翻炒片刻', 'stir-fry for a moment'],
      ['炒至变色', 'stir-fry until color changes'],
      ['炒至发白', 'stir-fry until white'],
      ['炒至断生', 'stir-fry until just cooked'],
      ['炒熟', 'stir-fry until cooked through'],
      ['炒透', 'stir-fry thoroughly'],
      ['泡发切丝', 'soak until soft and shred'],
      ['泡发切片', 'soak until soft and slice'],
      ['切大段', 'cut into large sections'],
      ['切小段', 'cut into small sections'],
      ['切斜片', 'cut diagonally'],
      ['切菱形片', 'cut into diamond-shaped slices'],
      ['切圆片', 'cut into round slices'],
      ['切滚刀', 'cut into rolling chunks'],
      ['切薄片', 'slice thinly'],
      ['切厚片', 'cut into thick slices'],
      ['切碎末', 'finely mince'],
      ['打花刀', 'score'],
      ['抹匀', 'spread evenly'],
      ['抹上', 'spread over'],
      ['抹盐', 'rub with salt'],
      ['抹干', 'wipe dry'],
      ['挂糊', 'coat with batter'],
      ['沾上', 'coat with'],
      ['裹匀', 'coat evenly'],
      ['裹淀粉', 'coat with cornstarch'],
      ['裹面粉', 'coat with flour'],
      ['撒匀', 'sprinkle evenly'],
      ['浇在', 'pour over'],
      ['淋在', 'drizzle over'],
      ['倒在', 'pour onto '],
      ['摆在', 'arrange on '],
      ['放入大碗', 'place in a large bowl'],
      ['盖上盖子', 'cover with lid'],
      ['盖保鲜膜', 'cover with plastic wrap'],
      ['大火煮沸', 'bring to a rolling boil'],
      ['转中火', 'reduce to medium heat'],
      ['转小火', 'reduce to low heat'],
      ['转中小火', 'reduce to medium-low heat'],
      ['调中火', 'reduce to medium heat'],
      ['调小火', 'reduce to low heat'],
      ['保持小火', 'maintain low heat'],
      ['保持中火', 'maintain medium heat'],
      ['保持大火', 'maintain high heat'],
      ['离火', 'remove from heat'],
      ['端下', 'remove from stove'],
      ['冷油', 'cold oil'],
      ['热油', 'hot oil'],
      ['温油', 'warm oil'],
      ['热锅', 'hot pan'],
      ['凉水', 'cold water'],
      ['温水', 'warm water'],
      ['冰水', 'ice water'],
      ['保鲜', 'keep fresh'],
      ['防氧化', 'prevent oxidation'],
      ['沥水', 'drain water'],
      ['自然冷却', 'let cool naturally'],
      ['彻底放凉', 'cool completely'],
      ['立刻', 'immediately'],
      ['马上', 'immediately'],
      ['随时', 'anytime'],
      ['反复', 'repeatedly'],
      ['多次', 'multiple times'],
      ['共', 'total of '],
      ['每次', 'each time'],
      ['每隔', 'every '],
      ['总量', 'total amount'],
      ['充分', 'thoroughly'],
      ['完全', 'completely'],
      ['稍微', 'slightly'],
      ['略', 'slightly'],
      ['微微', 'slightly'],
      ['轻轻', 'gently'],
      ['小心', 'carefully'],
      ['用力', 'firmly'],
      ['快速', 'quickly'],
      ['慢慢地', 'slowly'],
      ['逐一', 'one by one'],
      ['分别', 'separately'],
      ['另外', 'separately'],
      ['混合', 'mix together'],
      ['搅拌', 'stir/mix'],
      ['搅打', 'whisk'],
      ['打发', 'whip'],
      ['打蛋', 'beat eggs'],
      ['加水', 'add water'],
      ['加油', 'add oil'],
      ['加粉', 'add flour'],
      ['加油脂', 'add fat'],
      ['香料', 'spices'],
      ['调料', 'seasoning'],
      ['酱汁', 'sauce'],
      ['卤汁', 'marinade/broth'],
      ['汤汁', 'soup/sauce'],
      ['原汤', 'original broth'],
      ['葱姜水', 'scallion-ginger water'],
      ['花椒水', 'Sichuan pepper water'],
      ['蛋清', 'egg white'],
      ['蛋黄', 'egg yolk'],
      ['全蛋', 'whole egg'],
      ['蛋白', 'egg white'],
      ['豆腐皮', 'tofu skin'],
      ['豆腐干', 'dried tofu'],
      ['粉丝', 'vermicelli'],
      ['粉条', 'vermicelli'],
      ['木耳', 'wood ear mushrooms'],
      ['香菇', 'shiitake mushrooms'],
      ['金针菇', 'enoki mushrooms'],
      ['平菇', 'oyster mushrooms'],
      ['白菜', 'bok choy'],
      ['菠菜', 'spinach'],
      ['油菜', 'green vegetables'],
      ['生菜', 'lettuce'],
      ['韭菜', 'chives'],
      ['豆芽', 'bean sprouts'],
      ['豆苗', 'pea shoots'],
      ['芹菜', 'celery'],
      ['香菜', 'cilantro'],
      ['西芹', 'celery'],
      ['胡萝卜', 'carrot'],
      ['土豆', 'potato'],
      ['土豆丝', 'shredded potato'],
      ['藕', 'lotus root'],
      ['莲藕', 'lotus root'],
      ['山药', 'Chinese yam'],
      ['芋头', 'taro'],
      ['茄子', 'eggplant'],
      ['番茄', 'tomato'],
      ['黄瓜', 'cucumber'],
      ['南瓜', 'pumpkin'],
      ['冬瓜', 'winter melon'],
      ['苦瓜', 'bitter melon'],
      ['玉米', 'corn'],
      ['青豆', 'green peas'],
      ['豌豆', 'peas'],
      ['豆角', 'green beans'],
      ['扁豆', 'lentils'],
    ],
    ja: [
      ['锅中放油烧热', '鍋に油を熱する'],
      ['锅中放少许油', '鍋に少々油を熱する'],
      ['锅中留底油', '鍋に少々油を残す'],
      ['锅中放油', '鍋に油を入れる'],
      ['锅中加水烧开', '鍋に水を入れて沸騰させる'],
      ['大火烧开转小火炖', '強火で沸騰させ弱火で煮込む'],
      ['转大火收汁', '強火で煮詰める'],
      ['大火快速翻炒', '強火で手早く炒める'],
      ['大火翻炒', '強火で炒める'],
      ['翻炒均匀', '均一に炒める'],
      ['翻炒均匀即可出锅', '均一に炒めて盛り付ける'],
      ['快速翻炒', '手早く炒める'],
      ['出锅装盘', '盛り付ける'],
      ['即可出锅', '完成'],
      ['即可', ''],
      ['装盘即可', '盛り付けて完成'],
      ['清洗干净', 'きれいに洗う'],
      ['洗净', '洗う'],
      ['冲洗干净', '洗い流す'],
      ['焯水', '湯通しする'],
      ['过凉水', '冷水にさらす'],
      ['沥干水分', '水気を切る'],
      ['沥干', '水気を切る'],
      ['搅匀', 'よく混ぜる'],
      ['抓匀', '揉み込む'],
      ['拌匀', 'よく混ぜる'],
      ['调味', '味付け'],
      ['加盐调味', '塩で味付け'],
      ['加少许盐', '少々塩を加える'],
      ['加生抽', '醤油を加える'],
      ['加料酒', '酒を加える'],
      ['加糖', '砂糖を加える'],
      ['加冰糖', '氷砂糖を加える'],
      ['放入', '加える'],
      ['加入', '加える'],
      ['倒入', '注ぐ'],
      ['盛出', '取り出す'],
      ['装盘', '盛り付ける'],
      ['摆盘', '盛り付ける'],
      ['撒葱花', 'ネギを散らす'],
      ['撒', '散らす'],
      ['盖盖', '蓋をする'],
      ['关火', '火を止める'],
      ['关火出锅', '火を止めて盛り付ける'],
      ['切成薄片', '薄切りにする'],
      ['切片', '薄切り'],
      ['切丝', '千切り'],
      ['切丁', 'さいの目切り'],
      ['切块', '一口大に切る'],
      ['切末', 'みじん切り'],
      ['切碎', '細かく刻む'],
      ['切段', '小口切り'],
      ['打散', '溶く'],
      ['腌制', '漬け込む'],
      ['腌', '漬ける'],
      ['浸泡', '浸す'],
      ['泡发', '戻す'],
      ['去皮', '皮をむく'],
      ['切', '切る'],
      ['鸡蛋', '卵'],
      ['豆腐', '豆腐'],
      ['葱', 'ネギ'],
      ['姜', '生姜'],
      ['蒜', 'ニンニク'],
      ['生抽', '醤油'],
      ['老抽', '濃口醤油'],
      ['醋', '酢'],
      ['糖', '砂糖'],
      ['盐', '塩'],
      ['油', '油'],
      ['大火', '強火'],
      ['中火', '中火'],
      ['小火', '弱火'],
      ['锅中', '鍋に'],
      ['鸡蛋打散', '卵を溶く'],
    ],
    ko: [
      ['锅中放油烧热', '팬에 기름을 데우다'],
      ['锅中放少许油', '팬에 기름을 조금 두르다'],
      ['锅中留底油', '팬에 약간의 기름을 남기다'],
      ['洗净', '씻다'],
      ['焯水', '데치다'],
      ['沥干水分', '물기를 빼다'],
      ['沥干', '물기를 빼다'],
      ['搅匀', '잘 젓다'],
      ['抓匀', '버무리다'],
      ['拌匀', '잘 섞다'],
      ['翻炒均匀', '고루 볶다'],
      ['快速翻炒', '빠르게 볶다'],
      ['放入', '넣다'],
      ['加入', '넣다'],
      ['打散', '풀다'],
      ['腌制', '절이다'],
      ['去皮', '껍질 벗기다'],
      ['切', '자르다'],
      ['撒', '뿌리다'],
      ['大火', '강불'],
      ['中火', '중불'],
      ['小火', '약불'],
      ['盐', '소금'],
      ['糖', '설탕'],
      ['油', '기름'],
      ['生抽', '간장'],
      ['醋', '식초'],
      ['出锅', '접시에 담다'],
      ['鸡蛋', '계란'],
      ['豆腐', '두부'],
      ['葱', '대파'],
      ['姜', '생강'],
      ['蒜', '마늘'],
    ],
    fr: [
      ['洗净', 'laver'],
      ['切', 'couper'],
      ['锅中放油烧热', 'Chauffer l\'huile dans une poêle'],
      ['焯水', 'blanchir'],
      ['翻炒均匀', 'remuer uniformément'],
      ['沥干', 'égoutter'],
      ['拌匀', 'mélanger'],
      ['放入', 'ajouter'],
      ['加入', 'ajouter'],
      ['大火', 'feu vif'],
      ['中火', 'feu moyen'],
      ['小火', 'feu doux'],
      ['即可', ''],
      ['撒', 'parsemer'],
      ['盐', 'sel'],
      ['糖', 'sucre'],
      ['油', 'huile'],
      ['鸡蛋', 'oeuf'],
      ['豆腐', 'tofu'],
      ['生抽', 'sauce soja'],
      ['出锅', 'servir'],
    ],
    es: [
      ['洗净', 'lavar'],
      ['切', 'cortar'],
      ['焯水', 'escaldar'],
      ['翻炒', 'saltear'],
      ['拌匀', 'mezclar'],
      ['放入', 'agregar'],
      ['加入', 'agregar'],
      ['大火', 'fuego alto'],
      ['小火', 'fuego bajo'],
      ['撒', 'espolvorear'],
      ['盐', 'sal'],
      ['糖', 'azúcar'],
      ['油', 'aceite'],
      ['鸡蛋', 'huevo'],
      ['豆腐', 'tofu'],
      ['即可', ''],
      ['出锅', 'servir'],
    ]
  };
  
  const dict = phrases[lang] || [];
  dict.sort((a, b) => b[0].length - a[0].length);
  
  const isChinese = (ch) => /[\u4e00-\u9fff]/.test(ch);
  const isWordChar = (ch) => /[\w\u4e00-\u9fff]/.test(ch);
  
  return zhStepsArr.map(zhText => {
    let text = zhText;
    for (const [zh, trans] of dict) {
      const escaped = zh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      text = text.replace(new RegExp(escaped, 'g'), (match, offset) => {
        const prev = offset > 0 ? text[offset - 1] : ' ';
        const next = offset + match.length < text.length ? text[offset + match.length] : ' ';
        const needsLeading = isWordChar(prev);
        const needsTrailing = isWordChar(next);
        const paddedTrans = (needsLeading ? ' ' : '') + trans + (needsTrailing ? ' ' : '');
        return paddedTrans;
      });
    }
    return text.replace(/\s+/g, ' ').trim() || zhText;
  });
}

function translateIngredients(zhIngredients, lang) {
  if (lang === 'zh') return zhIngredients;
  
  const dict = {
    en: [
      [/，/g, ', '],
      [/葱/g, 'scallions'],
      [/姜/g, 'ginger'],
      [/蒜/g, 'garlic'],
      [/盐/g, 'salt'],
      [/糖/g, 'sugar'],
      [/生抽/g, 'soy sauce'],
      [/老抽/g, 'dark soy'],
      [/料酒/g, 'cooking wine'],
      [/醋/g, 'vinegar'],
      [/油/g, 'oil'],
      [/淀粉/g, 'cornstarch'],
      [/鸡蛋/g, 'eggs'],
      [/猪肉/g, 'pork'],
      [/鸡肉/g, 'chicken'],
      [/排骨/g, 'ribs'],
      [/豆腐/g, 'tofu'],
      [/五花肉/g, 'pork belly'],
      [/克/g, 'g'],
      [/勺/g, ' tbsp'],
      [/小勺/g, ' tsp'],
      [/少许/g, ' pinch'],
      [/适量/g, ' to taste'],
      [/(\d+)个/g, (m,n)=>n],
      [/(\d+)根/g, (m,n)=>n],
      [/(\d+)片/g, (m,n)=>n+' slices'],
      [/(\d+)瓣/g, (m,n)=>n+' cloves'],
      [/小白菜/g, 'bok choy'],
      [/干辣椒/g, 'dried chilies'],
      [/豆瓣酱/g, 'chili bean paste'],
      [/白胡椒粉/g, 'white pepper'],
      [/番茄酱/g, 'ketchup'],
      [/糯米粉/g, 'glutinous rice flour'],
      [/虾仁/g, 'shrimp'],
      [/冰糖/g, 'rock sugar'],
      [/白糖/g, 'sugar'],
      [/花椒/g, 'Sichuan pepper'],
      [/鸡精/g, 'chicken bouillon'],
      [/蚝油/g, 'oyster sauce'],
      [/香油/g, 'sesame oil'],
      [/高汤/g, 'broth'],
      [/草鱼/g, 'grass carp'],
      [/青菜/g, 'greens'],
      [/牛肉/g, 'beef'],
      [/虾/g, 'shrimp'],
      [/面粉/g, 'flour'],
      [/红薯/g, 'sweet potato'],
      [/剩米饭/g, 'Leftover rice'],
      [/隔夜米饭/g, 'Overnight rice'],
      [/米饭/g, 'rice'],
      [/肉馅/g, 'ground pork'],
      [/肉末/g, 'minced meat'],
      [/猪里脊肉/g, 'pork tenderloin'],
      [/里脊肉/g, 'tenderloin'],
      [/里脊/g, 'tenderloin'],
      [/鸡胸肉/g, 'chicken breast'],
      [/鸡腿肉/g, 'chicken thigh'],
      [/速冻/g, 'frozen'],
    ],
    ja: [
      [/，/g, '、'],
      [/葱/g, 'ネギ'],
      [/姜/g, '生姜'],
      [/蒜/g, 'ニンニク'],
      [/生抽/g, '醤油'],
      [/老抽/g, '濃口醤油'],
      [/料酒/g, '料理酒'],
      [/醋/g, '酢'],
      [/淀粉/g, '片栗粉'],
      [/鸡蛋/g, '卵'],
      [/糖/g, '砂糖'],
      [/油/g, '油'],
      [/克/g, 'g'],
      [/勺/g, '大さじ'],
      [/小勺/g, '小さじ'],
      [/少许/g, '少々'],
      [/适量/g, '適量'],
      [/盐/g, '塩'],
      [/根/g, '本'],
      [/片/g, '枚'],
      [/瓣/g, '片'],
      [/个/g, '個'],
      [/剩米饭/g, '残り飯'],
      [/隔夜米饭/g, '前日のご飯'],
      [/米饭/g, 'ご飯'],
      [/肉馅/g, '挽肉'],
      [/肉末/g, '挽肉'],
      [/猪里脊肉/g, '豚ヒレ肉'],
      [/里脊肉/g, 'ヒレ肉'],
      [/鸡胸肉/g, '鶏胸肉'],
      [/鸡腿肉/g, '鶏もも肉'],
      [/冰糖/g, '氷砂糖'],
      [/白糖/g, '砂糖'],
      [/干辣椒/g, '唐辛子'],
      [/花椒/g, '山椒'],
      [/豆瓣酱/g, '豆板醤'],
      [/白胡椒粉/g, '白胡椒'],
      [/鸡精/g, '鶏がらスープの素'],
      [/蚝油/g, 'オイスターソース'],
      [/香油/g, 'ごま油'],
      [/番茄酱/g, 'ケチャップ'],
      [/高汤/g, 'スープ'],
      [/草鱼/g, '草魚'],
      [/小白菜/g, '白菜'],
      [/青菜/g, '青菜'],
      [/牛肉/g, '牛肉'],
      [/虾仁/g, '海老'],
      [/虾/g, '海老'],
      [/面粉/g, '小麦粉'],
      [/糯米粉/g, '白玉粉'],
    ],
    ko: [
      [/，/g, ', '],
      [/葱/g, '대파'],
      [/姜/g, '생강'],
      [/蒜/g, '마늘'],
      [/生抽/g, '간장'],
      [/老抽/g, '진간장'],
      [/料酒/g, '요리술'],
      [/醋/g, '식초'],
      [/淀粉/g, '전분'],
      [/鸡蛋/g, '계란'],
      [/糖/g, '설탕'],
      [/油/g, '기름'],
      [/克/g, 'g'],
      [/勺/g, '큰술'],
      [/小勺/g, '작은술'],
      [/少许/g, '약간'],
      [/适量/g, '적당량'],
      [/盐/g, '소금'],
      [/根/g, '뿌리'],
      [/片/g, '조각'],
      [/瓣/g, '쪽'],
      [/个/g, '개'],
      [/剩米饭/g, '남은 밥'],
      [/隔夜米饭/g, '묵은 밥'],
      [/米饭/g, '밥'],
      [/肉馅/g, '갈은 돼지고기'],
      [/肉末/g, '다진 고기'],
      [/猪里脊肉/g, '돼지 등심'],
      [/里脊肉/g, '등심'],
      [/鸡胸肉/g, '닭가슴살'],
      [/鸡腿肉/g, '닭다리살'],
      [/冰糖/g, '얼음 설탕'],
      [/白糖/g, '설탕'],
      [/干辣椒/g, '마른 고추'],
      [/花椒/g, '산초'],
      [/豆瓣酱/g, '두반장'],
      [/白胡椒粉/g, '흰 후추'],
      [/鸡精/g, '닭 육수'],
      [/蚝油/g, '굴 소스'],
      [/香油/g, '참기름'],
      [/番茄酱/g, '케첩'],
      [/高汤/g, '육수'],
      [/虾仁/g, '새우'],
      [/虾/g, '새우'],
      [/面粉/g, '밀가루'],
    ],
    fr: [
      [/，/g, ', '],
      [/葱/g, 'oignon'],
      [/姜/g, 'gingembre'],
      [/蒜/g, 'ail'],
      [/生抽/g, 'sauce soja'],
      [/老抽/g, 'soja noir'],
      [/料酒/g, 'vin'],
      [/醋/g, 'vinaigre'],
      [/淀粉/g, 'fécule'],
      [/鸡蛋/g, 'oeufs'],
      [/糖/g, 'sucre'],
      [/油/g, 'huile'],
      [/克/g, 'g'],
      [/勺/g, 'càs'],
      [/小勺/g, 'càc'],
      [/少许/g, 'peu'],
      [/适量/g, 'selon goût'],
      [/盐/g, 'sel'],
      [/根/g, ''],
      [/片/g, ' tranche'],
      [/瓣/g, ' gousse'],
      [/个/g, ''],
      [/剩米饭/g, 'Riz restant'],
      [/隔夜米饭/g, 'Riz d\'hier'],
      [/米饭/g, 'riz'],
      [/肉馅/g, 'viande hachée'],
      [/肉末/g, 'viande hachée'],
      [/猪里脊肉/g, 'filet de porc'],
      [/鸡胸肉/g, 'blanc de poulet'],
      [/鸡腿肉/g, 'cuisse de poulet'],
      [/冰糖/g, 'sucre candi'],
      [/白糖/g, 'sucre'],
      [/干辣椒/g, 'piments séchés'],
      [/花椒/g, 'poivre Sichuan'],
      [/豆瓣酱/g, 'pâte de haricots'],
      [/白胡椒粉/g, 'poivre blanc'],
      [/鸡精/g, 'bouillon de poule'],
      [/蚝油/g, 'sauce d\'huître'],
      [/香油/g, 'huile de sésame'],
      [/番茄酱/g, 'ketchup'],
      [/高汤/g, 'bouillon'],
      [/虾仁/g, 'crevettes'],
      [/虾/g, 'crevettes'],
      [/面粉/g, 'farine'],
      [/糯米粉/g, 'farine de riz gluant'],
    ],
    es: [
      [/，/g, ', '],
      [/葱/g, 'cebolla'],
      [/姜/g, 'jengibre'],
      [/蒜/g, 'ajo'],
      [/生抽/g, 'salsa soja'],
      [/老抽/g, 'soja oscura'],
      [/料酒/g, 'vino'],
      [/醋/g, 'vinagre'],
      [/淀粉/g, 'almidón'],
      [/鸡蛋/g, 'huevos'],
      [/糖/g, 'azúcar'],
      [/油/g, 'aceite'],
      [/克/g, 'g'],
      [/勺/g, 'cda'],
      [/小勺/g, 'cdita'],
      [/少许/g, 'pizca'],
      [/适量/g, 'al gusto'],
      [/盐/g, 'sal'],
      [/根/g, ''],
      [/片/g, ' rodaja'],
      [/瓣/g, ' diente'],
      [/个/g, ''],
      [/剩米饭/g, 'Arroz sobrante'],
      [/隔夜米饭/g, 'Arroz del día anterior'],
      [/米饭/g, 'arroz'],
      [/肉馅/g, 'carne molida'],
      [/肉末/g, 'carne picada'],
      [/猪里脊肉/g, 'lomo de cerdo'],
      [/鸡胸肉/g, 'pechuga de pollo'],
      [/鸡腿肉/g, 'muslo de pollo'],
      [/冰糖/g, 'azúcar piedra'],
      [/白糖/g, 'azúcar'],
      [/干辣椒/g, 'chiles secos'],
      [/花椒/g, 'pimienta Sichuan'],
      [/豆瓣酱/g, 'pasta de frijoles'],
      [/白胡椒粉/g, 'pimienta blanca'],
      [/鸡精/g, 'caldo de pollo'],
      [/蚝油/g, 'salsa de ostras'],
      [/香油/g, 'aceite de sésamo'],
      [/番茄酱/g, 'ketchup'],
      [/高汤/g, 'caldo'],
      [/虾仁/g, 'camarones'],
      [/虾/g, 'camarones'],
      [/面粉/g, 'harina'],
      [/糯米粉/g, 'harina de arroz glutinoso'],
    ]
  };
  
  let result = zhIngredients;
  const rules = dict[lang] || [];
  for (const [pattern, replacement] of rules) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

// 为菜谱3-54生成所有语言的数据
for (let recipeId = 3; recipeId <= 54; recipeId++) {
  const detail = recipeDetails[recipeId];
  if (!detail) continue;
  
  for (let level = 1; level <= 2; level++) {
    const zhStepsStr = detail.zh_steps[level] ? detail.zh_steps[level][0] : '暂无步骤';
    const zhSteps = zhStepsStr.split('|');
    
    const zhIngredients = detail.zh_ingredients[level] || '暂无食材';
    
    const enSteps = translateSteps(zhSteps, 'en').join('|');
    const jaSteps = translateSteps(zhSteps, 'ja').join('|');
    const koSteps = translateSteps(zhSteps, 'ko').join('|');
    const frSteps = translateSteps(zhSteps, 'fr').join('|');
    const esSteps = translateSteps(zhSteps, 'es').join('|');
    
    const enIngredients = translateIngredients(zhIngredients, 'en');
    const jaIngredients = translateIngredients(zhIngredients, 'ja');
    const koIngredients = translateIngredients(zhIngredients, 'ko');
    const frIngredients = translateIngredients(zhIngredients, 'fr');
    const esIngredients = translateIngredients(zhIngredients, 'es');
    
    const levelNotes = {
      1: { zh: '简单入门版', en: 'Simple beginner version', ja: '簡単初心者版', ko: '초보자용', fr: 'Version débutant', es: 'Versión principiante' },
      2: { zh: '丰富进阶版', en: 'Advanced version', ja: '中級版', ko: '중급용', fr: 'Version avancée', es: 'Versión avanzada' }
    };
    
    allLevels.push({
      recipe: recipeId,
      level: level,
      ingredients_zh: zhIngredients,
      ingredients_en: enIngredients,
      ingredients_ja: jaIngredients,
      ingredients_ko: koIngredients,
      ingredients_fr: frIngredients,
      ingredients_es: esIngredients,
      steps_zh: zhStepsStr,
      steps_en: enSteps,
      steps_ja: jaSteps,
      steps_ko: koSteps,
      steps_fr: frSteps,
      steps_es: esSteps,
      note_zh: levelNotes[level].zh,
      note_en: levelNotes[level].en,
      note_ja: levelNotes[level].ja,
      note_ko: levelNotes[level].ko,
      note_fr: levelNotes[level].fr,
      note_es: levelNotes[level].es,
    });
  }
}

// 插入数据到数据库
db.serialize(() => {
  db.run('DROP TABLE IF EXISTS levels');
  db.run('DROP TABLE IF EXISTS recipes');

  db.run(`CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    name_zh TEXT, name_en TEXT, name_ja TEXT, name_ko TEXT, name_fr TEXT, name_es TEXT,
    category TEXT
  )`);

  db.run(`CREATE TABLE levels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_id INTEGER,
    level INTEGER,
    ingredients_zh TEXT, ingredients_en TEXT, ingredients_ja TEXT, ingredients_ko TEXT, ingredients_fr TEXT, ingredients_es TEXT,
    steps_zh TEXT, steps_en TEXT, steps_ja TEXT, steps_ko TEXT, steps_fr TEXT, steps_es TEXT,
    note_zh TEXT, note_en TEXT, note_ja TEXT, note_ko TEXT, note_fr TEXT, note_es TEXT,
    FOREIGN KEY(recipe_id) REFERENCES recipes(id)
  )`);

  const insertRecipe = db.prepare('INSERT INTO recipes (slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?)');
  for (const r of allRecipes) {
    insertRecipe.run(r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es);
  }
  insertRecipe.finalize();

  const insertLevel = db.prepare(`INSERT INTO levels (recipe_id, level,
    ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es,
    steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es,
    note_zh, note_en, note_ja, note_ko, note_fr, note_es
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  for (const l of allLevels) {
    insertLevel.run(l.recipe, l.level,
      l.ingredients_zh, l.ingredients_en, l.ingredients_ja, l.ingredients_ko, l.ingredients_fr, l.ingredients_es,
      l.steps_zh, l.steps_en, l.steps_ja, l.steps_ko, l.steps_fr, l.steps_es,
      l.note_zh, l.note_en, l.note_ja, l.note_ko, l.note_fr, l.note_es
    );
  }
  insertLevel.finalize();

  db.all('SELECT COUNT(*) as cnt FROM recipes', (e, r) => {
    console.log(`Total recipes: ${r[0].cnt}`);
  });
  db.all('SELECT COUNT(*) as cnt FROM levels', (e, r) => {
    console.log(`Total levels: ${r[0].cnt}`);
    console.log('Database initialized successfully!');
  });
});