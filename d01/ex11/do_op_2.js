#!/usr/bin/env node

let argv = process.argv;

if (argv.length != 3)
{
	console.log("incorrect number of parameters");
	process.exit();
}

const	check = (str) => {
	let		operator_n = 0;
	let		last_op;

	for (let i = 0; str[i]; i++) {
		if ((str[i] >= '0' && str[i] <= '9') || str[i] === ' ' || str[i] === '\n' || str[i] === '\t')
			;
		else if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '\/' || str[i] === '%') {
			operator_n++;
			last_op = str[i];
		}
		else
			return (false);
	}
	if (operator_n != 1)
		return (false);
	return (last_op);
}

var         do_op = (first, op, second) => {
    var     op_1 = parseInt(first);
    var     operator = op.trim();
    var     op_2 = parseInt(second);
    var     result; 

    if (operator === "+")
        result = op_1 + op_2;
    else if (operator === "-")
        result = op_1 - op_2;
    else if (operator === "*")
        result = op_1 * op_2;
    else if (operator === "/")
        result = op_1 / op_2;
    else if (operator === "%")
        result = op_1 % op_2;
    else
        console.log("Incorrect Parameters");
    return (result);
}


var		last_op;

if ((last_op = check(argv[2].trim(), last_op)) === false)
{
	console.log("syntax error");
	process.exit();
}

let		holder = argv[2].trim().split(last_op);

if (holder.length != 2) {
	console.log("syntax error");
	process.exit();
}

console.log(do_op(holder[0].trim(), last_op, holder[1].trim()));
