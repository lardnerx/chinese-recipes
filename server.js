const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

const dbPath = path.join(__dirname, 'recipes.db');
const db = new sqlite3.Database(dbPath);

app.get('/api/recipes', (req, res) => {
    db.all('SELECT * FROM recipes', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/recipe/:slug', (req, res) => {
    const slug = req.params.slug;
    db.get('SELECT * FROM recipes WHERE slug = ?', [slug], (err, recipe) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!recipe) {
            res.status(404).json({ error: 'Recipe not found' });
            return;
        }
        db.all('SELECT * FROM levels WHERE recipe_id = ?', [recipe.id], (err, levels) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ recipe, levels });
        });
    });
});

app.get('/api/recipe/:slug/level/:level', (req, res) => {
    const slug = req.params.slug;
    const level = parseInt(req.params.level);
    db.get('SELECT * FROM recipes WHERE slug = ?', [slug], (err, recipe) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!recipe) {
            res.status(404).json({ error: 'Recipe not found' });
            return;
        }
        db.get('SELECT * FROM levels WHERE recipe_id = ? AND level = ?', [recipe.id, level], (err, levelData) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ recipe, level: levelData });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});