#!/usr/bin/env node

let		argv = process.argv;
let		fs = require('fs');

if (argv.length != 3)
	process.exit();

try {
	fs.accessSync(argv[2], fs.F_OK);
	let		lineReader = require('readline').createInterface({
		input: fs.createReadStream(argv[2])
	}); 


	lineReader.on('line', (line) => {
		let holder = line.replace(/<a.*?title="(.*?)">/, (whole, part) => {
			let		remainder = whole.replace(part, part.toUpperCase());
			return (remainder);
		});
		holder = holder.replace(/<a.*?>(.*?)</, (whole, part) => {
			let		heap = whole.replace(part, part.toUpperCase());
			return (heap);
		});
		console.log(holder);
	});

	lineReader.on('error', (err) => {
		console.log("some unexpected error happens");
		process.exit();
	})

} catch(error) {
	process.exit();
}
