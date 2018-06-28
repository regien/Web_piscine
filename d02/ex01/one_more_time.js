let	args = process.argv;

let	meses = [
	"Ajanvier",
	"Février",
	"Mars",
	"Avril",
	"Mai",
	"Juin",
	"Kuillet",
	"Août",
	"Septembre",
	"Octobre",
	"Novembre",
	"Décembre"
]

let	dias = [
	"Lundi",
	"Mardi",
	"Mercredi",
	"Jeudi",
	"Vendredi",
	"Samedi",
	"Dimanche"
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
	if (island === 5 && gaps === 4)
		return (1);
	else
		return (0);
}

/*
** You are suppossed to pass an array here, dont make it protected because it doesnt
** worht it
*/

function	match_items(holder, objeto) {
	let		day;
	let		n_day;
	let		month;
	let		year;
	let		time;
	let		i;

	if (holder.length != 5)
		return (0);
	day = dias.findIndex(function(element) {
		if (holder[0] === element)
			return (element);
	}) + 1;
	if (day ===  0)
		return (0);
	objeto.day = day;

	n_day = parseInt(holder[1]);
	if (isNaN(n_day) || n_day < 0 || n_day > 31)
		return (0);
	objeto.n_day = n_day;

	month = meses.findIndex(function(element) {
		if (holder[2] === element)
			return (element);
	}) + 1;
	if (month === 0)
		return (0);
	objeto.month = month;

	year = parseInt(holder[3]);
	if (year < 0 || year > 9999)
		return (0);
	objeto.year = year;

	time = holder[4].split(':');
	if (time.length != 3)
		return (0);
	time.forEach(function (element) {element = parseInt(element)});
	for (i = 0; time[i]; i++) {
		if (time[i] < 0 || time[i] > 59)
			return (0);
	}
	objeto.time = time;
	return (1);
}


if (args.length != 3)
	process.exit();


let		store = [];
let		str = args[2].toString();
var		objeto = {};
var		date_final;

if (!(count_island_spaces(str)) || !(match_items(ft_split(str), objeto))) {
	console.log("Wrong Format");
	process.exit();
}

date_final = new Date(objeto.year, objeto.month, objeto.n_day, objeto.time[0], objeto.time[1], objeto.time[2], 0);
process.stdout.write((date_final.getTime() / 1000) + '\n');








