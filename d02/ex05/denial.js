const	spawn = require('child_process').spawn;
let	fs = require('fs');
let	args = process.argv;

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
		holder.push(temp);
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

//	if (check_for_chars(buffer) === 0 || isNaN(parseInt(buffer)))
//		process.stdout.write("'" + buffer + "' is not a number");
	if (buffer === 'EOF') {
		process.stdout.write('\n');
		process.exit();
	}
	if (eval(buffer) == "undefined")
		;
/*	else if (parseInt(buffer) % 2 === 0)
		process.stdout.write("The number " + buffer + " is Even");
	else if (parseInt(buffer) % 2 === 1)
		process.stdout.write("The number " + buffer + " is Odd");*/
	display_prompt();
})

function match_my_keyword(keyword) {
	if (keyword === "name")
		return (1);
	else if (keyword === "surname")
		return (1);
	else if (keyword === "mail")
		return (1);
	else if (keyword === "ip")
		return (1);
	else if (keyword === "pseudo")
		return (1);
	return (0);
}


if (args.length != 4)
	process.exit();

var	data = fs.readFileSync(args[2].toString());
var	default_word = args[3].trim();
var	holder = [];
// remmber that you need to take care of the 4 argument which is basically the line that you are primarily reading

if (!match_my_keyword(default_word)) {
	process.stdout.write("Bad keyword\n");
	process.exit();
}
	
data = data.toString().split('\n');
data = cleanArray(data);

if ((split_file(data, holder)) == 0) {
	process.stdout.write("Error in the file\n");
	process.exit();
}
console.log(holder);

console.log(data);

display_prompt();
