var express = require('express');
var app = express();
//var aRoute = require('./app/routes/a-route');


var topLevelPath = __dirname;
GLOBAL.topLevelPath = topLevelPath;
console.log(GLOBAL.topLevelPath);

// app.use(express.static('app'));

//middleware
app.use(function(request, response, next){
  console.log('using middleware foo');
  next();
});

app.use(function(request, response, next){
  console.log('using middleware bar');
  next();
});


//routes
	//Home route
	app.get('/', function(request, response) {
		//response.sendFile(__dirname + '/app/views/index.html');
		response.send('Are you there? foo bar baz');
	});

	//testing route Route
	//app.use('/routes', aRoute);

//Open port to listen on
app.listen(9999, function() {
	console.log('Server listening on Port 9999');
});