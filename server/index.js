var bluebird = require('bluebird');
var brototype = require('brototype');
var browserify = require('browserify');
var concat = require('gulp-concat');
var debug = require('debug');
var exec = require('gulp-exec');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var lodash = require('lodash');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var mocha = require('mocha');
var moment = require('moment');
var nodemon = require('gulp-nodemon');
var numeral = require('numeral');
var page = require('page');
var progress = require('progress');
var restify = require('restify');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');
var stringToJs = require('string-to-js');
var superagent = require('superagent');
var uglify = require('gulp-uglify');
var unirest = require('unirest');
var util = require('gulp-util');
var yargs = require('yargs');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

server.get('/api/:name', respond);
server.head('/api/:name', respond);
server.get(/\/?.*/, restify.serveStatic({
  directory: './server/public',
  default: 'index.html'
}));
server.listen(3210, function() {
  console.log('%s listening at %s', server.name, server.url);
});
