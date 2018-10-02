#!/usr/bin/env node

var		argv = process.argv;

if (argv.length != 3)
	process.exit();

const	print_line = (str) => {
	let buffer = str.trim().split(/\s+/);
	let	ptr = "";
	for (let i = 0; buffer[i]; i++) {
		if (i != 0)
			ptr += " ";
		ptr += buffer[i];
	}
	return ptr;
}

process.stdout.write(print_line(argv[2]) + "\n");