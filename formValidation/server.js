var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

app.use(cors())

const users = {
	"users": [
		{
			"name": "Prashant Sahni",
			"title": "Associate Consultant"
		},
		{
			"name": "Pankaj",
			"title": "Technical Architect"
		},
		{
			"name": "Ashish",
			"title": "Associate Consultant"
		},
		{
			"name": "Diljon",
			"title": "Senior Software Engg."
		}
	]
};

app.get('/users', function(req, res, next) {
  res.json(users);
});


app.get('/users/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.get('/ajax_demo', function(req, res, next) {
  res.sendFile(path.join(__dirname, "./ajax.html"));
});

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
});


// For simple http requests
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//   console.log('Server running on 8080...');
// });

