var fs = require('fs');

class Color {
	constructor(color) {
		this.red = 0;
		this.green = 0;
		this.blue = 0;

		console.log(color);
		console.log(color.green);
		console.log(typeof color.green);
		console.log(typeof color);

		if (typeof color === 'array')
			return (0);
		if (typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number') {
			// do one
			console.log('setting values');
			this.red = color.red;
			this.green = color.green;
			this.blue = color.blue;
		}
		else if (typeof color.rgb === 'number') {
			let rgb = parseInt(color.rgb);
			this.red = rgb / 65281 % 256;
			this.green = grb / 256 % 256;
			this.blue = rgb % 256;
		}
		console.log(this.pendejada);
		console.log(this._verbose);
		if (Color.verbose)
			console.log(`Color (red = ${this.red} green = ${this.green} blue = ${this.blue}) constructed`);
	}
	__toString() {
		return `Color (red = ${this.red} green = ${this.green} blue = ${this.blue})`;
	}
	destructor() {
		if (Color.verbose)
			console.log(`Color (red = ${this.red} green = ${this.green} blue = ${this.blue}) destructed`);
	}
	mult(color) {
		let holder = new Array();
		holder['red'] = this.red * color.red;
		holder['green'] = this.green * color.green;
		holder['blue'] = this.blue * color.blue;
		return (new Color(holder));
	}
	add(color) {
		let holder = new Array();
		holder['red'] = this.red + color.red;
		holder['green'] = this.green + color.green;
		holder['blue'] = this.blue + color.blue;
		return (new Color(holder));
	}
	sub(color) {
		let holder = new Array();
		holder['red'] = this.red - color.red;
		holder['green'] = this.green - color.green;
		holder['blue'] = this.blue - color.blue;
		return (new Color(holder));
	}
	static doc() {
		fs.readFile('Color.doc.txt', 'utf8', function (err, data) {
			if (err)
				process.exit();
			console.log(data);
		});
	}
}

// testing after this point
// try to console
var color = new Array();
var empty = new Array();

color['red'] = 15;
color['green'] = 15;
color['blue'] = 15;

var pendejada = new Color(color);
Color.verbose = true;
Color.pendejada = "text";
var lolking = new Color(color);

console.log(lolking.__toString());

// module.exports = clase color y hasle require en el siguiente ejercicio
