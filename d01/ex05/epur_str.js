function	ft_split(str) {
	let		len;
	let		string;
	let		buffer;
	let		i;
	let		holder;

	holder = [];
	buffer = "";
	string = str.toString();
	len = string.length;
	i = 0;
	if (typeof str != 'string')
		return (holder);
	while (i < len) {
		if (string[i] != '\n' && string[i] !=  '\t' && string[i] != ' ') {
			while((string[i] != '\n' && string[i] !=  '\t' && string[i] != ' ') && i < len) {
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

const	argv = process.argv;
let		holder = [];
let		i;

if (argv.length != 3)
	process.exit();

i = -1;
holder = ft_split(argv[2]);
while (holder[++i]) {
	if (i != 0)
		process.stdout.write(' ');
	process.stdout.write(holder[i]);
}
process.stdout.write('\n');
