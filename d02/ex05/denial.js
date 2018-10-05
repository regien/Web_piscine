let	fs = require('fs');
let	args = process.argv;
var	name = [];
var	surname = [];
var	mail = [];
var	ip = [];
var	pseudo = [];
var	index_keyword;

function	split_file(data, holder) {
	let		i;
	let		temp = {};
	let		spliter;

// there can be some error checking like if spliter.length != 5
	for (i = 1; data[i]; ++i) {
		temp = {};
		spliter = data[i].split(';');
		if (spliter.length != 5)
			return (0);
		temp.name = spliter[0];
		temp.surname = spliter[1];
		temp.mail = spliter[2];
		temp.ip = spliter[3];
		temp.pseudo = spliter[4];
		name[spliter[index_keyword]] = temp.name;
		surname[spliter[index_keyword]] = temp.surname;
		mail[spliter[index_keyword]] = temp.mail;
		ip[spliter[index_keyword]] = temp.ip;
		pseudo[spliter[index_keyword]] = temp.pseudo;
		holder[spliter[index_keyword]] = temp;
	}
	return (1);
}

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
	if (actual[i]) {
	  newArray.push(actual[i]);
	}
  }
  return newArray;
}


function	display_prompt() {
	process.stdout.write('Enter something: ');
}

// you have to modify this for the project
process.stdin.on('data', function(data) {
	const	buffer = data.toString().trim();
	let		process;

	if (buffer === 'EOF') {
		process.stdout.write('\n');
		process.exit();
	}
	if (eval(buffer) == "undefined")
		;
	display_prompt();
})

function match_my_keyword(keyword) {
	if (keyword === "name")
		return (0);
	else if (keyword === "surname")
		return (1);
	else if (keyword === "mail")
		return (2);
	else if (keyword === "ip")
		return (3);
	else if (keyword === "pseudo")
		return (4);
	return (-1);
}


if (args.length != 4)
	process.exit();

var	data = fs.readFileSync(args[2].toString());
var	default_word = args[3].trim();
var	general = [];

if ((index_keyword = match_my_keyword(default_word)) <= -1) {
	process.stdout.write("Bad keyword\n");
	process.exit();
}
data = data.toString().split('\n');
data = cleanArray(data);

if ((split_file(data, general)) == 0) {
	process.stdout.write("Error in the file\n");
	process.exit();
}

display_prompt();
