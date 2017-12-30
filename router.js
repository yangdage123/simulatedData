var express = require('express');
var router = express.Router();
var config = require('./config.js');

var routes = config.routes;
for(var i = 0; i < routes.length; i++){
    (function (n) {
        router.get(routes[n].path, function (req, res) {
            res.json({
                status: 200,
                data: routes[n].data
            });
        });
    })(i)
}

module.exports = router;