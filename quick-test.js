const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'recipes.db');
console.log('Testing database at:', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
        return;
    }
    console.log('Database opened successfully!');
    
    db.all('SELECT * FROM recipes', [], (err, recipes) => {
        if (err) {
            console.error('Error querying recipes:', err);
            return;
        }
        console.log('\nRecipes found:', recipes.length);
        recipes.forEach(r => {
            console.log(`- ${r.id}: ${r.name_en} (${r.slug})`);
        });
        
        db.all('SELECT * FROM levels', [], (err, levels) => {
            if (err) {
                console.error('Error querying levels:', err);
                return;
            }
            console.log('\nLevels found:', levels.length);
            
            db.close(() => {
                console.log('\nDone! Database is working correctly.');
            });
        });
    });
});
