const sqlite3 = require('sqlite3');
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'recipes-new.db'));
const dataDir = path.join(__dirname, 'public', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Export all recipes
db.all('SELECT * FROM recipes ORDER BY id', [], (err, recipes) => {
  if (err) throw err;

  // Simplify recipes list (remove large fields if any)
  const recipeList = recipes.map(r => ({
    id: r.id, slug: r.slug,
    name_zh: r.name_zh, name_en: r.name_en,
    name_ja: r.name_ja, name_ko: r.name_ko, name_fr: r.name_fr, name_es: r.name_es,
    pdf_path: r.pdf_path
  }));

  fs.writeFileSync(path.join(dataDir, 'recipes.json'), JSON.stringify(recipeList, null, 2));
  console.log(`✅ Exported recipes.json (${recipeList.length} recipes)`);

  // Export each recipe with levels
  let completed = 0;
  recipes.forEach((recipe, index) => {
    db.all('SELECT * FROM levels WHERE recipe_id = ? ORDER BY level', [recipe.id], (err2, levels) => {
      if (err2) throw err2;
      const data = { recipe, levels };
      fs.writeFileSync(path.join(dataDir, `recipe-${recipe.slug}.json`), JSON.stringify(data, null, 2));
      completed++;
      if (completed === recipes.length) {
        console.log(`✅ Exported ${completed} recipe detail files`);
        console.log('🎉 All data exported successfully!');
        db.close();
      }
    });
  });
});