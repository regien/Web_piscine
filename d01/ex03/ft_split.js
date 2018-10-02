const	ft_split = (str) => {
	let	holder = [];
	let buffer = str.trim().split(/\s+/);
	for (let i = buffer.length - 1; i >= 0; --i) {
		holder.push(buffer[i]);
	}
	return (holder);
}

console.log(ft_split("Hello     World  AAA"));
console.log(ft_split("      Testing     ONE     O   ONE"));