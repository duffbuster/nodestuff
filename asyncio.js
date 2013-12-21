var fs = require('fs');
var contents = fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) throw err;
	console.log(data.split("\n").length-1);
});

//var res = data.split("\n");
//console.log(res.length - 1);