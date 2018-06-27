var	readline = require('readline');

var	rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var recursive_function_solved = () => {
rl.question('>>tacoshell:', function(answer) {
	if (isNaN(parseInt(answer)))
		console.log(answer + " is not a number");
	else if (parseInt(answer) % 2 === 0)
		console.log("The number " + answer + " is Even");
	else
		console.log("The number " + answer + " is Odd");
	recursive_function_solved();
})};

recursive_function_solved();



