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


const	i = -1;
const	test1 = ft_split("esta pendejada deberia no fallar");
const	test2 = ft_split("");
const	test3 = ft_split("             ");
const	test4 = ft_split(45);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
