const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'recipes.db');
const db = new sqlite3.Database(dbPath);

console.log('Initializing database...');

// Drop existing tables and recreate
db.run('DROP TABLE IF EXISTS recipes', function(err) {
    if (err) console.error(err);
});
db.run('DROP TABLE IF EXISTS levels', function(err) {
    if (err) console.error(err);
});

console.log('Creating tables...');

// Create tables
db.run(`CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    name_zh TEXT,
    name_en TEXT,
    name_ja TEXT,
    name_ko TEXT,
    name_fr TEXT,
    name_es TEXT
)`, function(err) {
    if (err) console.error(err);
});

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
)`, function(err) {
    if (err) console.error(err);
    insertRecipes();
});

function insertRecipes() {
    console.log('Inserting recipes...');
    const recipes = [
        { id: 1, slug: 'kung-pao-chicken', name_zh: '宫保鸡丁', name_en: 'Kung Pao Chicken', name_ja: 'カンパオチキン', name_ko: '쿵파오 치킨', name_fr: 'Poulet Kung Pao', name_es: 'Pollo Kung Pao' },
        { id: 2, slug: 'mapo-tofu', name_zh: '麻婆豆腐', name_en: 'Mapo Tofu', name_ja: 'マーボー豆腐', name_ko: '마파두부', name_fr: 'Tofu Mapo', name_es: 'Tofu Mapo' },
        { id: 3, slug: 'fried-rice', name_zh: '蛋炒饭', name_en: 'Egg Fried Rice', name_ja: 'チャーハン', name_ko: '볶음밥', name_fr: 'Riz sauté aux oeufs', name_es: 'Arroz frito con huevos' },
        { id: 4, slug: 'sweet-sour-pork', name_zh: '糖醋里脊', name_en: 'Sweet and Sour Pork', name_ja: '酢豚', name_ko: '탕수육', name_fr: 'Porc aigre-doux', name_es: 'Cerdo agridulce' }
    ];

    let insertedRecipes = 0;
    recipes.forEach(r => {
        db.run('INSERT INTO recipes (id, slug, name_zh, name_en, name_ja, name_ko, name_fr, name_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [r.id, r.slug, r.name_zh, r.name_en, r.name_ja, r.name_ko, r.name_fr, r.name_es],
            function(err) {
                if (err) console.error('Error inserting recipe:', err);
                insertedRecipes++;
                if (insertedRecipes === recipes.length) {
                    insertLevels();
                }
            }
        );
    });
}

function insertLevels() {
    console.log('Inserting levels...');
    
    // Kung Pao Chicken
    const kpData = [
        { l:1, i:'鸡胸肉200g,花生50g,葱2根,生抽2勺,白糖1勺', s:'鸡胸肉洗净擦干，切成1.5cm见方的小丁|锅中放入2勺油，加热至中等温度|放入鸡丁，用锅铲翻炒约3分钟至颜色变白|加入2勺生抽和1勺白糖，快速翻炒均匀|放入花生，关火继续翻炒1分钟让花生变香|出锅装盘即可享用' },
        { l:2, i:'鸡胸肉250g,花生60g,干辣椒3个,葱2根,姜3片,蒜3瓣,生抽2勺,料酒1勺,白糖1勺', s:'鸡胸肉洗净，切成1.5cm小丁，加1勺料酒腌10分钟|葱切段，姜切片，蒜拍扁，干辣椒剪段|锅中放2勺油，中火烧热，先炒香葱姜蒜和干辣椒|放入腌好的鸡丁，大火快速翻炒2分钟至变色|加入2勺生抽和1勺白糖调味，继续翻炒|放入花生，关火再翻炒几下让香味混合|出锅装盘，趁热享用' },
        { l:3, i:'鸡胸肉300g,花生70g,干辣椒5个,花椒1勺,葱2根,姜4片,蒜4瓣,生抽2勺,老抽1勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺', s:'鸡胸肉去筋膜切1.5cm小丁，加料酒、淀粉抓匀腌15分钟|碗中调酱汁：白糖、醋、生抽、老抽混合均匀|花生先炸至金黄捞出备用|锅中留少许油，先炸花椒出香，捞掉花椒|放入干辣椒段炸至微焦|放入葱姜蒜大火爆香|放入腌好的鸡丁，大火快速翻炒1分钟至变色|倒入调好的酱汁，快速翻炒均匀让每块肉都裹上汁|最后放入炸好的花生，翻炒均匀|出锅装盘，趁热享用' },
        { l:4, i:'鸡胸肉350g,花生80g,干辣椒6个,花椒1.5勺,葱白3段,姜5片,蒜5瓣,生抽2.5勺,老抽1.5勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1小勺,白胡椒粉1小勺', s:'鸡胸肉去筋膜切1.2cm小丁，加料酒、盐、白胡椒粉、淀粉抓匀腌20分钟|精确调碗汁：白糖、醋、生抽、老抽比例为4:3:5:3，加少许水|花生先炸至金黄酥脆捞出|另起锅，冷油下花椒小火炸1分钟出香，捞掉花椒|下辣椒段炸至暗红油亮|放入葱姜蒜大火爆香30秒|滑入腌好的鸡丁，大火快速翻炒1分钟至表面变白|倒入碗汁，大火翻炒约1分钟让酱汁浓稠均匀裹住|最后加入炸好的花生和葱白段|快速翻炒10秒，立即出锅装盘，趁热享用' },
        { l:5, i:'鸡胸肉400g,花生100g,干辣椒8个,花椒2勺,葱白4段,姜6片,蒜6瓣,生抽3勺,老抽2勺,料酒3勺,醋2勺,白糖3勺,淀粉2.5勺,盐1.5小勺,白胡椒粉1.5小勺,香油1勺,鸡精1小勺', s:'鸡胸肉去筋膜切1cm小丁，加料酒、盐、白胡椒粉、淀粉、少许油抓匀腌25分钟|精确调碗汁：白糖、醋、生抽、老抽比例为3:2:3:2，加少许水和淀粉|花生先炸至金黄酥脆捞出|冷油下花椒小火炸1.5分钟出香，捞掉花椒|下辣椒段炸至暗红油亮|放入葱姜蒜大火爆香30秒|滑入腌好的鸡丁，大火快速翻炒1分钟至变色|倒入碗汁，大火翻炒约1分钟让酱汁浓稠|加入炸好的花生|淋上香油，撒上鸡精|快速翻炒10秒，立即关火装盘，趁热享用' }
    ];
    
    // Mapo Tofu
    const mtData = [
        { l:1, i:'嫩豆腐400g,猪肉末100g,生抽2勺,白糖1勺', s:'嫩豆腐切成2cm见方的小块|锅中放入1勺油，中火烧热|放入猪肉末，用锅铲炒散|炒至肉变色|加入豆腐块，轻轻翻炒|加入生抽和白糖调味|小火煮2分钟|出锅装盘' },
        { l:2, i:'嫩豆腐400g,猪肉末150g,葱2根,姜2片,蒜2瓣,生抽2勺,豆瓣酱1勺,白糖1勺', s:'嫩豆腐切成2cm见方的小块|开水焯2分钟捞出沥干|葱、姜、蒜切末|锅中放2勺油，炒香葱姜蒜|加入肉末炒散至变色|加豆瓣酱炒出红油|放入豆腐|加生抽、白糖、少许水|小火煮3分钟|撒葱花，轻轻翻炒|出锅' },
        { l:3, i:'嫩豆腐450g,猪肉末200g,干辣椒4个,花椒1勺,葱2根,姜3片,蒜3瓣,生抽2.5勺,豆瓣酱2勺,料酒1勺,白糖1勺,淀粉1勺', s:'嫩豆腐切2cm块，淡盐水焯3分钟沥干|肉末加料酒、淀粉抓匀|干辣椒剪段|锅中放2勺油，炸香花椒辣椒捞出|下肉末大火炒散出油|加豆瓣酱炒红油|下葱姜蒜炒香|加水|下豆腐|加生抽、白糖|小火煮|勾芡|撒葱花' },
        { l:4, i:'嫩豆腐500g,猪肉末250g,干辣椒6个,花椒1.5勺,青蒜2根,葱2根,姜4片,蒜4瓣,生抽3勺,豆瓣酱2.5勺,料酒1.5勺,醋1勺,白糖1.5勺,淀粉1.5勺,盐1小勺', s:'嫩豆腐切2cm块，淡盐水焯3分钟沥干|肉末腌10分钟|青蒜切小段|冷油炸花椒捞出|下辣椒炸香|下肉末炒散|加豆瓣酱炒红油|下姜蒜炒香|加水|下豆腐|加生抽、醋、白糖|煮5分钟|分两次勾芡|撒青蒜|轻轻拌匀' },
        { l:5, i:'嫩豆腐550g,猪肉末300g,干辣椒8个,花椒2勺,青蒜3根,葱3根,姜5片,蒜5瓣,生抽3.5勺,豆瓣酱3勺,老抽1勺,料酒2勺,醋1.5勺,白糖2勺,淀粉2勺,盐1.5小勺,香油1勺', s:'嫩豆腐切1.8cm块，淡盐水焯4分钟|肉末腌15分钟|青蒜切斜段|冷油炸花椒1.5分钟捞出|下辣椒炸微焦|下肉末炒散出油|加豆瓣酱炒红油|下姜蒜炒香|加水|下豆腐|加生抽、老抽、醋、白糖|煮6分钟|分三次勾芡|撒青蒜|淋香油|出锅' }
    ];
    
    // Fried Rice
    const frData = [
        { l:1, i:'隔夜米饭300g,鸡蛋2个,葱1根,盐少许', s:'鸡蛋打散|锅中放油烧热|倒入蛋液快速炒散至凝固盛出|再加少许油|放入米饭，锅铲压散|炒至米饭粒粒分明|加入炒好的鸡蛋|加盐调味|撒葱花|出锅' },
        { l:2, i:'隔夜米饭350g,鸡蛋3个,胡萝卜50g,青豆30g,葱2根,生抽1勺,盐少许', s:'鸡蛋打散加盐|胡萝卜切小丁焯水|锅中炒鸡蛋盛出|炒米饭至粒粒分明|加胡萝卜、青豆、鸡蛋|加生抽、盐调味|撒葱花' },
        { l:3, i:'隔夜米饭400g,鸡蛋3个,胡萝卜60g,青豆40g,玉米粒40g,虾仁50g,葱2根,姜1片,生抽1.5勺,蚝油1勺,盐少许', s:'鸡蛋打散|胡萝卜、青豆、玉米洗净|虾仁腌5分钟|炒鸡蛋盛出|炒虾仁盛出|炒米饭|加所有配料|加生抽、蚝油调味|撒葱花' },
        { l:4, i:'隔夜米饭450g,鸡蛋4个,胡萝卜70g,青豆50g,玉米粒50g,虾仁80g,火腿50g,葱3根,姜2片,生抽2勺,蚝油1.5勺,盐少许,白胡椒粉少许', s:'所有配料切好|虾仁腌好|炒鸡蛋|炒虾仁|炒火腿|炒米饭|加所有材料|调味|出锅' },
        { l:5, i:'隔夜米饭500g,鸡蛋4个,胡萝卜80g,青豆60g,玉米粒60g,虾仁100g,火腿60g,腊肠40g,干贝10g,葱3根,姜3片,蒜2瓣,生抽2.5勺,蚝油2勺,盐少许,白胡椒粉少许,香油1勺', s:'干贝泡发撕丝|所有配料切好|虾仁腌好|炒鸡蛋|炒虾仁、干贝、腊肠|炒米饭|加所有材料|调味|撒葱花|淋香油' }
    ];
    
    // Sweet and Sour Pork
    const sspData = [
        { l:1, i:'猪里脊250g,白糖3勺,醋2勺,番茄酱1勺,盐少许', s:'猪里脊切1.5cm丁|加少许盐、淀粉抓匀|锅中放油烧热|放入肉丁炸至金黄捞出|锅中留少许油|加白糖、醋、番茄酱、少许水|小火熬至浓稠|放入炸好的肉丁|快速翻炒均匀|出锅' },
        { l:2, i:'猪里脊300g,胡萝卜50g,青红椒各半个,白糖4勺,醋2.5勺,番茄酱1.5勺,生抽1勺,盐少许,淀粉适量', s:'猪里脊切1.5cm丁|加盐、料酒、淀粉腌15分钟|胡萝卜、青红椒切小块|肉丁炸至金黄捞出|熬糖醋汁|放入肉丁和蔬菜|快速翻炒裹匀|出锅' },
        { l:3, i:'猪里脊350g,胡萝卜60g,青红椒各半个,菠萝50g,白糖5勺,醋3勺,番茄酱2勺,生抽1勺,料酒1勺,盐少许,淀粉适量,葱姜适量', s:'猪里脊切丁腌20分钟|菠萝切块|肉丁炸两次|熬糖醋汁|下肉丁和蔬菜|翻炒裹汁|出锅' },
        { l:4, i:'猪里脊400g,胡萝卜70g,青红椒各半个,菠萝80g,洋葱50g,白糖6勺,醋3.5勺,番茄酱2.5勺,生抽1.5勺,料酒1.5勺,盐少许,淀粉适量,葱姜蒜适量,白胡椒粉少许', s:'猪里脊切丁腌25分钟|所有配料切好|炸肉丁至酥脆|炒洋葱姜蒜|熬糖醋汁|下肉丁和配料|翻炒裹汁|出锅' },
        { l:5, i:'猪里脊450g,胡萝卜80g,青红椒各半个,菠萝100g,洋葱60g,青椒50g,白糖7勺,醋4勺,番茄酱3勺,生抽2勺,料酒2勺,盐少许,淀粉适量,葱姜蒜适量,白胡椒粉少许,香油1勺,熟芝麻少许', s:'猪里脊切1cm丁腌30分钟|所有配料切好|炸肉丁两次更酥脆|炒洋葱姜蒜|调糖醋汁熬浓稠|下肉丁和所有配料|快速翻炒|淋香油撒芝麻|出锅' }
    ];
    
    let totalLevels = 0;
    let insertedLevels = 0;
    
    const allData = [
        { rid:1, data:kpData },
        { rid:2, data:mtData },
        { rid:3, data:frData },
        { rid:4, data:sspData }
    ];
    
    allData.forEach(recipe => {
        totalLevels += recipe.data.length;
        recipe.data.forEach(d => {
            db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [recipe.rid, d.l, d.i, d.i, d.i, d.i, d.i, d.i, d.s, d.s, d.s, d.s, d.s, d.s, '好吃', 'Delicious', '美味しい', '맛있는', 'Délicieux', 'Delicioso'],
                function(err) {
                    if (err) console.error('Error inserting level:', err);
                    insertedLevels++;
                    if (insertedLevels === totalLevels) {
                        console.log('Database initialized successfully! Total levels:', insertedLevels);
                        db.close();
                    }
                }
            );
        });
    });
}
