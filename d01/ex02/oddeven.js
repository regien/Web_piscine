
function	check_for_chars(str) {
	var		i;
	var		len;

	i = -1;
	len = str.toString().length;
	while (++i < len)
	{
		if (str[i] < '0' || str[i] > '9')
			return (0);
	}
	return (1);
}

function	display_prompt() {
	process.stdout.write('Enter something: ');
}

/*
** trim just remove whitespaces
*/

process.stdin.on('data', function(data) {
	const	buffer = data.toString().trim();

	if (check_for_chars(buffer) === 0 || isNaN(parseInt(buffer)))
		process.stdout.write("'" + buffer + "' is not a number");
	else if (buffer === 'EOF') {
		process.stdout.write('\n');
		process.exit();
	}
	else if (parseInt(buffer) % 2 === 0)
		process.stdout.write("The number " + buffer + " is Even");
	else if (parseInt(buffer) % 2 === 1)
		process.stdout.write("The number " + buffer + " is Odd");
	process.stdout.write('\n');
	display_prompt();
})

display_prompt();
