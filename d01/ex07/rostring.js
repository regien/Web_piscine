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

const   args = process.argv;
let		holder = [];
let		i;
let		second_last = "";
let		split;

if (args.length < 3)
	process.exit();
split = ft_split(args[2]);

i = -1;
while(split[++i]) {
	if (i === 1)
		second_last = split[i];
	else
		holder.push(split[i]);
}
holder.push(second_last);

i = -1;
while (holder[++i]) {
	if (i != 0)
		process.stdout.write(' ');
	process.stdout.write(holder[i]);
}
process.stdout.write('\n');
