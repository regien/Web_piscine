var express = require('express');
var app = express();


app.get('/', function(req, res) {
	var		keys = Object.keys(req.query);

	if (keys.length != 0) {
		let		i;
		let		holder = "";
		for (i = 0; i < keys.length; ++i) {
			holder = holder + (keys[i] + "=" + req.query[keys[i]] + '\n');
		}
		res.send(holder);
	}
	res.end();
});


app.listen(8100, function() {
	console.log("server listen in port 8100");
});
