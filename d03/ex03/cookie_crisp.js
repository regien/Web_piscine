var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(req, res) {
	var		keys = Object.keys(req.query);

	if (keys.length != 0) {
		let		buffer = "";
		let		i;
		let		index;
		let		str;

		for (i = 0; i < keys.length; ++i) {
			if (keys[i] === "action" && req.query[keys[i]] === "set") {
				let		second_i;

				str = keys.find(function (element) { return element === "name" });
				index = keys.findIndex(function (element) { return element === "name" });
				if (index != -1) {
				second_i = keys.findIndex(function (element) { return element === "value" });
					if (index != -1)
						res.cookie(req.query[keys[index]], req.query[keys[second_i]]);
				}
			}
			else if (keys[i] === "action" && req.query[keys[i]] === "get") {
				str = keys.find(function (element) { return element === "name" });
				index = keys.findIndex(function (element) { return element === "name" });
				str = req.cookies[req.query[keys[index]]];
				if (index != -1) {
					buffer = buffer + str + '\n';
				}
			}

			else if (keys[i] === "action" && req.query[keys[i]] === "del") {
				index = keys.findIndex(function (element) { return element === "name" });
				res.clearCookie(req.query[keys[index]]);
			}
		}
		res.send(buffer);
	}
});


app.listen(8100, function() {
	console.log("server listen in port 8100");
});
