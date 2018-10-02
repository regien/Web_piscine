#!/usr/bin/env node

const		argv = process.argv;

if (argv.length < 3)
	process.exit();

let			buffer = argv[2].trim().split(/\s+/);
let			first = true;

for(let i = 1; buffer[i]; ++i) {
	if (first)
		first = false;
	else
		process.stdout.write(' ');
	process.stdout.write(buffer[i]);
}

if (first)
	first = false;
else
	process.stdout.write(' ');
process.stdout.write(buffer[0] + '\n');