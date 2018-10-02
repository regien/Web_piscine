#!/usr/bin/env node

const	argv = process.argv;
let		i;

len = argv.length;
i = 1;
while (++i < len)
	console.log(argv[i]);
