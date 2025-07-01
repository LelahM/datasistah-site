const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// MIME type mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = req.url;
    
    // Handle clean URLs - rewrite them to .html files
    if (filePath === '/prompt-mastery') {
        filePath = '/prompt-mastery.html';
    } else if (filePath === '/custom-gpts') {
        filePath = '/custom-gpts.html';
    } else if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Remove query parameters
    filePath = filePath.split('?')[0];
    
    const fullPath = path.join(__dirname, filePath);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';
    
    fs.readFile(fullPath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(port, () => {
    console.log(`Development server running at http://localhost:${port}/`);
    console.log('Clean URLs supported:');
    console.log('  http://localhost:3000/');
    console.log('  http://localhost:3000/prompt-mastery');
    console.log('  http://localhost:3000/custom-gpts');
});
