#!/usr/bin/env node

let argv = process.argv;

if (argv.length < 3)
    process.exit();

let look_for = argv[2];
let holder = [];
let split;

for (let i = 3; i < argv.length; i++)
{
    split = argv[i].split(":");
    holder[split[0]] = split[1];
}

if (holder[look_for])
    console.log(holder[look_for]);