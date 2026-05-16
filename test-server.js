const http = require('http');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const PORT = 3000;
const dbPath = path.join(__dirname, 'recipes.db');
const db = new sqlite3.Database(dbPath);

console.log('Starting server...');

const server = http.createServer((req, res) => {
    console.log('Request:', req.method, req.url);
    
    if (req.url.startsWith('/api/')) {
        handleApi(req, res);
    } else if (req.url === '/') {
        serveFile(res, 'public/index.html');
    } else if (req.url === '/index.html') {
        serveFile(res, 'public/index.html');
    } else if (req.url.startsWith('/recipe.html')) {
        serveFile(res, 'public/recipe.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

function serveFile(res, filename) {
    fs.readFile(path.join(__dirname, filename), (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Error');
            return;
        }
        res.writeHead(200, {
            'Content-Type': filename.endsWith('.html') ? 'text/html; charset=utf-8' : 'text/plain'
        });
        res.end(data);
    });
}

function handleApi(req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    
    if (req.url === '/api/recipes') {
        db.all('SELECT * FROM recipes', [], (err, rows) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
                return;
            }
            res.writeHead(200);
            res.end(JSON.stringify(rows));
        });
    } else if (req.url.startsWith('/api/recipe/')) {
        const parts = req.url.split('/');
        if (parts.length >= 4) {
            const slug = parts[3];
            db.get('SELECT * FROM recipes WHERE slug = ?', [slug], (err, recipe) => {
                if (err) {
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: err.message }));
                    return;
                }
                if (!recipe) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'Not Found' }));
                    return;
                }
                db.all('SELECT * FROM levels WHERE recipe_id = ?', [recipe.id], (err, levels) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(JSON.stringify({ error: err.message }));
                        return;
                    }
                    res.writeHead(200);
                    res.end(JSON.stringify({ recipe, levels }));
                });
            });
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
