var fs = require('fs');
 
fs.readFile(process.argv[2], {encoding: 'utf8'}, function (err, data) {
	if (err) throw err;
	var lines = data.split('\n');
	
	console.log(lines.length-1);
});
