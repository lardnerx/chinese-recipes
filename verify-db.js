const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('C:\\trae_projects\\caipu0516\\recipes-new.db');

const ids = [3, 5, 16, 27, 30];
db.all(`SELECT r.name_zh, l.level, l.steps_en, l.ingredients_en FROM recipes r JOIN levels l ON l.recipe_id = r.id WHERE r.id IN (${ids.join(',')}) AND l.level = 1 ORDER BY r.id`, (err, rows) => {
  if (err) { console.error(err); return; }
  rows.forEach(r => {
    console.log(r.name_zh);
    console.log('  INGREDIENTS: ' + r.ingredients_en);
    console.log('  STEPS: ' + (r.steps_en || ''));
    console.log('');
  });
  db.close();
});