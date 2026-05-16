const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'recipes.db');
console.log('Creating database at:', dbPath);
const db = new sqlite3.Database(dbPath);

// Create tables
db.serialize(() => {
    console.log('Creating tables...');
    
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
    )`, (err) => {
        if (err) {
            console.error('Error creating tables:', err);
        } else {
            console.log('Tables created!');
            insertData();
        }
    });
});

function insertData() {
    console.log('Inserting data...');
    
    // Insert recipes
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
                if (err) console.error('Recipe error:', err);
                recipeCount++;
                if (recipeCount === recipes.length) {
                    insertLevels();
                }
            }
        );
    });
}

function insertLevels() {
    console.log('Inserting levels...');
    
    const kpIng = '鸡胸肉200g,花生50g,葱2根,生抽2勺,白糖1勺';
    const kpSteps = '鸡胸肉洗净擦干，切成1.5cm见方的小丁|锅中放入2勺油，加热至中等温度|放入鸡丁，用锅铲翻炒约3分钟至颜色变白|加入2勺生抽和1勺白糖，快速翻炒均匀|放入花生，关火继续翻炒1分钟让花生变香|出锅装盘即可享用';
    
    const mtIng = '嫩豆腐400g,猪肉末100g,生抽2勺,白糖1勺';
    const mtSteps = '嫩豆腐切成2cm见方的小块|锅中放入1勺油，中火烧热|放入猪肉末，用锅铲炒散|炒至肉变色|加入豆腐块，轻轻翻炒|加入生抽和白糖调味|小火煮2分钟|出锅装盘';
    
    const frIng = '隔夜米饭300g,鸡蛋2个,葱1根,盐少许';
    const frSteps = '鸡蛋打散|锅中放油烧热|倒入蛋液快速炒散至凝固盛出|再加少许油|放入米饭，锅铲压散|炒至米饭粒粒分明|加入炒好的鸡蛋|加盐调味|撒葱花|出锅';
    
    const sspIng = '猪里脊250g,白糖3勺,醋2勺,番茄酱1勺,盐少许';
    const sspSteps = '猪里脊切1.5cm丁|加少许盐、淀粉抓匀|锅中放油烧热|放入肉丁炸至金黄捞出|锅中留少许油|加白糖、醋、番茄酱、少许水|小火熬至浓稠|放入炸好的肉丁|快速翻炒均匀|出锅';
    
    let levelCount = 0;
    const totalLevels = 20;
    
    for (let i = 1; i <= 5; i++) {
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [1, i, kpIng, kpIng, kpIng, kpIng, kpIng, kpIng, kpSteps, kpSteps, kpSteps, kpSteps, kpSteps, kpSteps, '好吃', 'Delicious', '美味しい', '맛있는', 'Délicieux', 'Delicioso'],
            (err) => { if (err) console.error('Level error:', err); levelCount++; checkDone(); }
        );
        
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [2, i, mtIng, mtIng, mtIng, mtIng, mtIng, mtIng, mtSteps, mtSteps, mtSteps, mtSteps, mtSteps, mtSteps, '好吃', 'Delicious', '美味しい', '맛있는', 'Délicieux', 'Delicioso'],
            (err) => { if (err) console.error('Level error:', err); levelCount++; checkDone(); }
        );
        
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [3, i, frIng, frIng, frIng, frIng, frIng, frIng, frSteps, frSteps, frSteps, frSteps, frSteps, frSteps, '好吃', 'Delicious', '美味しい', '맛있는', 'Délicieux', 'Delicioso'],
            (err) => { if (err) console.error('Level error:', err); levelCount++; checkDone(); }
        );
        
        db.run('INSERT INTO levels (recipe_id, level, ingredients_zh, ingredients_en, ingredients_ja, ingredients_ko, ingredients_fr, ingredients_es, steps_zh, steps_en, steps_ja, steps_ko, steps_fr, steps_es, note_zh, note_en, note_ja, note_ko, note_fr, note_es) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [4, i, sspIng, sspIng, sspIng, sspIng, sspIng, sspIng, sspSteps, sspSteps, sspSteps, sspSteps, sspSteps, sspSteps, '好吃', 'Delicious', '美味しい', '맛있는', 'Délicieux', 'Delicioso'],
            (err) => { if (err) console.error('Level error:', err); levelCount++; checkDone(); }
        );
    }
    
    function checkDone() {
        if (levelCount === totalLevels) {
            console.log('All data inserted!');
            verifyData();
        }
    }
}

function verifyData() {
    console.log('Verifying data...');
    db.all('SELECT * FROM recipes', (err, recipes) => {
        if (err) console.error('Error:', err);
        else console.log('Recipes:', recipes.length);
        
        db.all('SELECT * FROM levels', (err, levels) => {
            if (err) console.error('Error:', err);
            else console.log('Levels:', levels.length);
            
            db.close(() => console.log('Done!'));
        });
    });
}
