var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));


app.get('/', (req, res, next) => {
	var sessData = req.session;
//	console.log(sessData);
	console.log(req.session);
	sessData.someAttribute = "foo";
	res.send('Returning with some text');
});

app.get('/bar', (req, res, next) => {
	var someAttribute = req.session.someAttribute;
	res.send(`This will print the attribute I set earlier: ${someAttribute}`);
});

app.listen(3000, () => {
	console.log("listening in port 3000");
})
