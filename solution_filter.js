var fs = require('fs');
module.exports = function(dir, filterStr, callback) {
	var regex = new RegExp('\\.' + process.argv[3] + '$');

	fs.readdir(dir, function(err, list) {
		if (err) throw err;
		list = list.filter(function (file) {
			return regex.test(file);
		});
		callback(null, list);
	});
	
};