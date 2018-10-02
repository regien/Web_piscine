#!/usr/bin/env node

const	ft_is_sort = (tab) => {
	let	holder = tab.slice(0);
	holder.sort();
	if (JSON.stringify(tab) === JSON.stringify(holder))
		return true;
	else
		return false;
}


let		vaina = new Array("1", "2", "3");
let		pendejada = new Array("!/@#;^", "42", "Hello World", "hi", "zZzZzZz", "What are we doing now");

console.log(ft_is_sort(vaina) ? "The array is sorted" : "The array is not sorted" );
console.log(ft_is_sort(pendejada) ? "The array is sorted" : "The array is not sorted" );