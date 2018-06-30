var http = require('http');
var fs = require('fs');
var	url = require('url');


var str = "pendejadas";

var server = http.createServer(function (req, res) {

				if (req.method === "GET") {

				console.log(req.url);
				var q = url.parse(req.url, true);
				var filename = "." + q.pathname;
//				res.writeHead(200, { "Content-Type": "text/html" });
//				res.writeHead(200, { "Content-Type": "text/plain" });
//				fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
//				fs.createReadStream("./test.txt", "UTF-8").pipe(res);
//				str.pipe(res);
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.write("no seas pendejo esto te tomo tanto tiempo?");
				res.end();
//				res.send("pendejos");
				console.log("pendejo");
				console.log(q.host);
				} else if (req.method === "POST") {

				var body = "";
				req.on("data", function (chunk) {
								body += chunk;
								});

				req.on("end", function(){
								res.writeHead(200, { "Content-Type": "text/html" });
								res.end(body);
								});
				}

				}).listen(3000);
