#!/usr/bin/env node

const	argv = process.argv;

if (argv.length < 3)
	process.exit();

let		buffer = [];

for (let i = 2; argv[i]; i++) {
	let	holder = argv[i].trim().split(/\s+/);
	buffer = buffer.concat(holder);
}

buffer.sort();
for (let i = 0; buffer[i]; ++i)
	console.log(buffer[i]);