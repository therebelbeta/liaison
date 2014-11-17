var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
var port = process.env.PORT || 8080;

var controllers = require('./controllers');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.get('/api', controllers.getApi);

app.get('*', function(request, response) {
  response.sendfile(__dirname + '/public/index.html');
});

app.listen(port);
console.log("server started on port " + port);

// var models_path = __dirname + '/server/models';
// var walk = function(path) {
//   fs.readdirSync(path).forEach(function(file) {
//     var newPath = path + '/' + file;
//     var stat = fs.statSync(newPath);
//     if (stat.isFile()) {
//       if (/(.*)\.js$/.test(file)) {
//         require(newPath);
//       }
//     }
//     else if (stat.isDirectory()) {
//       walk(newPath);
//     }
//   });
// };