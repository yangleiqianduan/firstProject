var http = require("http");
var url = require("url");
var fs = require('fs');
var path = require('path');
/**
 * url.parse(request.url)
 * {
 * 	protocol: null,
 * 	slashes: null,
 * 	auth: null,
 * 	host: null,
 * 	port: null,
 * 	hostname: null,
 * 	hash: null,
 * 	search: '?dj=1',
 * 	query: 'dj=1',
 * 	pathname: '/aa/add.html',
 * 	path: '/aa/add.html?dj=1',
 * 	href: '/aa/add.html?dj=1'
 * 	}
 */

// 创建服务器
http.createServer(function (request, response) {
	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	// 输出请求的文件名
	console.log("Request for " + pathname + " received.");
	console.log(/.html/.test(pathname))
	if (!/.ajax/.test(pathname)) {
		// 从文件系统中读取请求的文件内容
		fs.readFile(pathname.substr(1), function (err, data) {
			if (err) {
				console.log(err);
				// HTTP 状态码: 404 : NOT FOUND
				// Content Type: text/plain
				response.writeHead(404, {'Content-Type': 'text/html'});
			}
			else {
				// HTTP 状态码: 200 : OK
				// Content Type: text/plain
				response.writeHead(200, {'Content-Type': 'text/html'});

				// 响应文件内容
				response.write(data.toString());
			}
			//  发送响应数据
			response.end();
		});
	}
	else {
		console.log(request.url.replace(/.ajax$/i, '.json'))
		var mockPath = path.join(__dirname, 'mock', request.url.replace(/.ajax$/i, '.json'));
		response.writeHead(200, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Set-Cookie': '__token=asdfasdf;domain=localhost:8888;'
		});
		fs.createReadStream(mockPath, {
			autoClose: true
		}).pipe(response);
	}
}).listen(8888);

// 控制台会输出以下信息
console.log('Server running at http://localhost:8888/');


