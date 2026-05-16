const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'recipes.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking database contents...\n');

db.all('SELECT * FROM recipes', (err, recipes) => {
    if (err) {
        console.error('Error:', err);
        process.exit(1);
    }
    console.log('Recipes:', recipes.length);
    recipes.forEach(r => console.log(`- ${r.id}: ${r.name_en} (${r.slug})`));
    
    db.all('SELECT * FROM levels', (err, levels) => {
        if (err) {
            console.error('Error:', err);
            process.exit(1);
        }
        console.log('\nLevels:', levels.length);
        for (let i = 1; i <= 4; i++) {
            const count = levels.filter(l => l.recipe_id === i).length;
            console.log(`- Recipe ${i}: ${count} levels`);
        }
        
        if (levels.length > 0) {
            console.log('\nSample level data:');
            console.log('  Recipe ID:', levels[0].recipe_id);
            console.log('  Level:', levels[0].level);
            console.log('  Ingredients:', levels[0].ingredients_zh.substring(0, 50) + '...');
        }
        
        db.close();
    });
});
