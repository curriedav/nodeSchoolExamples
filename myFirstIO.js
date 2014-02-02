function newLinesSync() {
	var fs = require('fs'),
  	data = fs.readFileSync(process.argv[2], {encoding: 'utf8'}),
  	lines = data.split('\n');

	console.log(lines.length-1);
}

newLinesSync();