var express = require('express');
var router = require('./router');
var config = require('./config');
var app = express();
var port = config.port || 3000;
var routes = config.routes || [];
console.log(config.routes || [])

for(var i = 0; i < routes.length; i++){
    (function (n) {
        var router = routes[n];
        app.get(router.path, function (req, res) {
            res.json({
                status: 200,
                data: router.data
            });
        });
    })(i)
}

var server = app.listen(port, function () {
   console.log('server start!listen ' + port +'...');
});
