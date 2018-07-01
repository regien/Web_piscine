var expresss = require('express');
var session = require('express-session');
var app = express();


app.use(session({ secret: 'pendejada'}));


var sess;

app.get('/', function (req, res) {
	sess= req.session;

	sess.username ;
});

app,listen(8100, () => {
	console.log("listening in port 8100");
})
