var express = require('express');
var router = require('./router');
var app = express();
app.use('', router);

var server = app.listen(8080, function () {
   console.log('server start!listen 8080...');
});
