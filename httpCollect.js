var http = require('http'),
	bl = require('bl');

var urlToFetch = process.argv[2];

http.get(urlToFetch, function (response) {
	response.pipe(bl(function (err, data){
		if (err) {
			return console.log(err)
		}

		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
});