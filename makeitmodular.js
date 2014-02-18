var fs = require('fs'),
	path = require('path'),
	dirlisting = require('./dirlisting');

var directory = process.argv[2],
	fileExtension = process.argv[3];

dirlisting(directory, fileExtension, function (err, files) {
	if (err) console.log(err);

	files.forEach(function (file) {
		console.log(file);
	});
});