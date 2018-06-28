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

const	args = process.argv;

if (args.length < 3) {
	process.exit();
}

let		i;
let		holder = ft_split(args[2]);

for	(i = 0; holder[i]; ++i) {
	if (i != 0)
		process.stdout.write(' ');
	process.stdout.write(holder[i]);
}
process.stdout.write('\n');
