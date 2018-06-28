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

export ft_split;
