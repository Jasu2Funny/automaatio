import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
// Luodaan express-palvelin instanssi
const app = express();
 
// Määritellään vakiot
const port = 3000;
const host = 'localhost';
 
// Määritellään polut
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
 
app.listen(port, host, () => {
    console.log(`http://${host}:${port} kuuntelee...`);
});