var str = '<h1>A</h1><h2>B</h2><p>Foobar</p><h3>C</h3>'
//console.log(str.match(/<h(.)>.*?<\/h\1>/g));
//console.log(str.match(/<(.)>.*?<\/\1>/g));
console.log(str.match(/<.*?>.*?<\/\1>/g));

var test = "<body>Hello World <a href=http://cyan.com title=\"a link\">This is a link</a>";
//console.log(test.match(/<(.)>.*?<\/\1>/g));
console.log(test.match(/<.*?\1>.*?<\/\1>/g));
