const       args = process.argv;

if (args.length != 5) {
    console.log("Incorrect Parameters");
    process.exit();
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

console.log(do_op(args[2], args[3], args[4]));