let	fs = require('fs');
let	args = process.argv;

function cleanArray(actual) {
	var newArray = new Array();
	for (var i = 0; i < actual.length; i++) {
		if (actual[i]) {
			newArray.push(actual[i]);
		}
	}
	return newArray;
}

function	return_objetctsplited(file, resolve) {
	let		temp = {};
	let		rem;
	let		i;

	for (i = 0; file[i]; i++) {
		temp = {};
		rem = parseInt(file[i]);
		if (isNaN(rem))
			return (0);
		temp.order = rem;
		i++;

		rem = file[i].split(" --> ")
		temp.start = rem[0];
		temp.end = rem[1];
		i++;

		rem = file[i].trim();
		temp.word = rem;

		resolve.push(temp);
	}
	return (1);
}

function	getting_values_to_compare(resolved) {
	let		i;
	let		temp_splitter;
	let		e;
	let		total_sec = 0;

	for (i = 0; resolved[i]; ++i) {
		temp_splitter = resolved[i].start.split(":");

		total_sec = (parseInt(temp_splitter[0]) * 60 * 60) + (parseInt(temp_splitter[1]) * 60) + temp_splitter[2]
		resolved[i].sec_start = total_sec;

		temp_splitter = resolved[i].end.split(":");
		total_sec = (parseInt(temp_splitter[0]) * 60 * 60) + (parseInt(temp_splitter[1]) * 60) + temp_splitter[2]
		resolved[i].sec_end = total_sec;

		resolved[i].concat_string = resolved[i].start + " --> " + resolved[i].end;
	}
	return (1);
}

function	sort_by_sec(resolved) {
	let		i;
	let		temp;
	let		len = resolved.length - 1;

	for (i = 0; resolved[i]; ++i) {
		if (i  === len)
			break ;
		else if (resolved[i].sec_start > resolved[i + 1].sec_start) {
			temp = resolved[i].sec_start;
			resolved[i].sec_start = resolved[i + 1].sec_start;
			resolved[i + 1].sec_start = temp;

			temp = resolved[i].word;
			resolved[i].word = resolved[i + 1].word;
			resolved[i + 1].word = temp;

			temp = resolved[i].concat_string;
			resolved[i].concat_string = resolved[i + 1].concat_string;
			resolved[i + 1].concat_string = temp;
			i = -1;
		}
	}
}

function	print_result(resolved) {
	let		i;

	for (i = 0; resolved[i]; ++i) {
		if (i != 0)
			process.stdout.write('\n');
		process.stdout.write(resolved[i].order + '\n');
		process.stdout.write(resolved[i].concat_string + '\n');
		process.stdout.write(resolved[i].word + '\n');
	}
}

if (args.length != 3)
	process.exit();

let		resolved = [];

try {
	var data = fs.readFileSync(args[2].toString());
	data = data.toString().split('\n');
	data = cleanArray(data);

	return_objetctsplited(data, resolved);
	getting_values_to_compare(resolved);
	sort_by_sec(resolved);
	print_result(resolved);
} catch(err) {
	console.log("invalid argument or file doesn't exist");
	process.exit();
}
