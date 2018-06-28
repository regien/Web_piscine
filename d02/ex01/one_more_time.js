let args = process.argv;

let	Meses = [
	"ajanvier",
	"février",
	"mars",
	"avril",
	"mai",
	"juin",
	"juillet",
	"août",
	"septembre",
	"octobre",
	"novembre",
	"décembre"
]

let	dias [
	"lundi",
	"mardi",
	"mercredi",
	"jeudi",
	"vendredi",
	"samedi",
	"dimanche"
]

function	ft_split(str) {

	let		len;
	let		string;
	let		buffer;
	let		i;
	let		holder;

	holder = [];
	buffer = "";
	if (typeof str != 'string')
		return (holder);
	string = str.toString();
	len = string.length;
	i = 0;
	while (i < len) {
		if (string[i] !=  '\t' && string[i] != ' ') {
			while((string[i] !=  '\t' && string[i] != ' ') && i < len) {
				buffer += string[i];
				++i;
			}
			holder.push(buffer);
			buffer = "";
		}
		else
			;
		++i;
	}
	return (holder);
};

//		WORKING
function	count_island_spaces(str) {
	let		i;
	let		island = 0;
	let		gaps = 0;
	let		check_spaces;

	for (i = 0; i < str.length; ++i) {
		if ((str[i] != ' ' && str[i] != '\t' && str[i] != '\n')) {
			while (str[i] != ' '&& i < str.length)
				++i;
			island++;
		}
		if (str[i] == ' ') {
			check_spaces = 0;
			while (str[i] == ' ' && i < str.length) {
				gaps++;
				check_spaces++;
				i++;
			}
			if (check_spaces != 1)
				return (0);
		}
		else if (str[i] == '\t' || str[i] == '\n')
			return (0);
	}
	console.log(island);
	console.log(gaps);
	if (island === 5 && gaps === 4)
		return (1);
	else
		return (0);
}

/*
function	match_value_in_array {
}
*/

/*
** You are suppossed to pass an array here, dont make it protected because it doesnt
** worht it
*/

function	match_items(holder) {
	let		day; // array
	let		n_day; // int
	let		month; // array
	let		year; //int
	let		time; // parse, .split(':') and it should give 3 ints

	day = dias.find(function(element) {
		if (holder[0] === element)
			return (element)
	});
	if (day === "undefined")
		return (0);
	n_day = parseInt(holder[i]);
	if (isNaN(n_day) || n_day < 0 || n_day > 31))
		return (0);
	month = meses.find(function(element) {
		if (holder[2] === element)
			return (element);
	});
	
}


if (args.length != 3)
	process.exit();


let		store = [];
let		str = args[2].toString();

console.log(ft_split(str));
console.log(count_island_spaces(str));











