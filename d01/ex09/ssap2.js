#!/usr/bin/env node

const	argv = process.argv;

if (argv.length < 3)
	process.exit();

let		buffer = [];

for (let i = 2; argv[i]; i++) {
	let	holder = argv[i].trim().split(/\s+/);
	buffer = buffer.concat(holder);
}

buffer.sort( (a, b) => {
    if ((a >= 'A' && a <= 'Z') && (b >= 'A' && b <= 'Z')) {
        if (a < b)
            return true;
        else
            return false;
    } else if ((a >= 'a' || < ))
});

for (let i = 0; buffer[i]; ++i)
	console.log(buffer[i]);