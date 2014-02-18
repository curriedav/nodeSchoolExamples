var http = require('http');

var urlToFetch = process.argv[2];

http.get(urlToFetch, function(response) {
	var body = '';

	response.on('data', function(chunk) {
		console.log(chunk.toString());
	});

	response.on('error', function (err) {
		console.log(err);
	});

	response.on('end', function() {
	});
});