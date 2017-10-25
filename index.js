const http = require('http');
const port = process.env.port || 3000;

const app = http.createServer((req,res) => {
	res.writeHead(200, {'Content-type': 'text/plain'});
	
	const os = req.headers['user-agent'].split('(')[1].split(')')[0];
	const user = {
		ip: req.connection.remoteAddress,
		language: req.headers['accept-language'].split(',')[0],
		os: os,
	}
	res.end(JSON.stringify(user));
});

app.listen(3000, () => 'Listening on port 3000'); 
