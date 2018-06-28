let args = process.argv;

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
function count_island_spaces(str) {
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

if (args.length != 3)
	process.exit();


let		store = [];
let		str = args[2].toString();

console.log(ft_split(str));
console.log(count_island_spaces(str));











