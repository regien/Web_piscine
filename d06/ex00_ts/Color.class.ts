
class Color {
	public red: number;
	public green: number;
	public blue: number;
	static verbose : boolean = false;

	constructor(colors : number[]) {
		if (colors.length != 3)
			return null;
		if (colors["red"] && colors["green"] && colors["blue"]) {
			console.log('Setting values');
			this.red = colors["red"];
			this.green = colors["green"];
			this.blue = colors["blue"];
		} else if (colors["rgb"]) {
			let rgb : number = parseInt(colors["rgb"]);
			this.red = rgb / 65281 % 256;
			this.green = rgb / 256 % 256;
			this.blue = rgb % 256;
		} else {
			return null;
		}

		if (this.verbose) {
			
		}
	}

	__toString() {
		console.log(`${}`);
	}
}