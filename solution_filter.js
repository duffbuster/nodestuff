var fs = require('fs');
module.exports = function(dir, filterStr) {
	var regex = new RegExp('\\.' + process.argv[3] + '$');

	fs.readdir(dir, function(err, list) {
		if (err) throw err;
		list.forEach(function (file) {
			if (regex.test(file)) {
				console.log("poopy");
				return(file);
				
			}
		});
	});
};