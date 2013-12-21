var fs = require('fs');
var patt = new RegExp('\\.' + process.argv[3] + '$');
fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function (file) {
		if (patt.test(file))
			console.log(file);
	});
});