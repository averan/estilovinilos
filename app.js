var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        if (req.url === '/') {
            html = fs.readFileSync('index.html');
        } else if (req.url === '/vinilos-infantil.html') {
            html = fs.readFileSync('vinilos-infantil.html');
        } else if (req.url === '/vinilos-hogar.html') {
            html = fs.readFileSync('vinilos-hogar.html');
        } else if (req.url === '/vinilos-frases.html') {
            html = fs.readFileSync('vinilos-frases.html');
        } else if (req.url === '/vinilos-eventos.html') {
            html = fs.readFileSync('vinilos-eventos.html');
        } else if (req.url === '/vinilos-adolescente.html') {
            html = fs.readFileSync('vinilos-adolescente.html');
        } else if (req.url === '/murales.html') {
            html = fs.readFileSync('murales.html');
        } else if (req.url === '/colores-de-vinilos-1.html') {
            html = fs.readFileSync('colores-de-vinilos-1.html');
        } else if (req.url === '/colocacion.html') {
            html = fs.readFileSync('colocacion.html');
        } else if (req.url === '/quienes-somos-3.html') {
            html = fs.readFileSync('quienes-somos-3.html');
        } else if (req.url === '/preguntas-frecuentes-2.html') {
            html = fs.readFileSync('preguntas-frecuentes-2.html');
        }
        else {
            html = fs.readFileSync('index.html');
        }

        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
