var express = require('express');
var path = require('path')
var fs = require('fs')
var app = express();

app.get('/', function (req, res) {
  		res.send('Hello World');
});

app.listen(3000, function () {
	console.log('app is listening at port 3000');
	console.log(process.env.NODE_ENV);
	console.log(process.cwd());
	console.log(path.delimiter);
	const appDirectory = fs.realpathSync(process.cwd());
	console.log(appDirectory);
	const folder = './package.json';
	console.log(path.resolve(appDirectory,folder));
});
