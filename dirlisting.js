var fs = require('fs'),
	path = require('path');

module.exports = function (dirName, fileExten, cb) {
 fs.readdir(dirName, function (err, files) {
 	if (err) {
 		cb(err);
 	} else {
 		var filteredfiles = [];
 		files.forEach(function (file) {
			if (path.extname(file) === '.' + fileExten) {
				filteredfiles.push(file);
			}
 		});
 		cb(null, filteredfiles);
 	}
 });
};