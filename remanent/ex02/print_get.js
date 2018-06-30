//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();


var $_GET = new Array();
function GET() {
		var pendejada = "?maria=lapendejada&raul=lafiera"
		var url = pendejada.replace("?", "").split("&");
		for (var index = 0; index < url.length; index++) {
				var value = url[index].split("=");
				$_GET[value[0]] = value[1];
		}
}
GET();
console.log($_GET);
