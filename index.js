const http = require('http');
const port = process.env.PORT || 3000;

const app = http.createServer((req,res) => {
	res.writeHead(200, {'Content-type': 'text/plain'});

	const system = req.headers['user-agent'].split('(')[1].split(')')[0];
	const user = {
		ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
		language: req.headers['accept-language'].split(',')[0],
		os: system,
	}
	res.end(JSON.stringify(user));
});

app.listen(port, () => `Listening on port ${port}`); 
