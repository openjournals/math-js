var express = require('express');
var logfmt = require("logfmt");
var app = express();
var exec = require('child_process').execFile;

app.use(logfmt.requestLogger());

app.get('/math', function(req, res){
  exec('./node_modules/MathJax-node/bin/tex2svg', [req.query.math], function (error, stdout, stderr) {
    if (error !== null) {
      res.send("Oh noes!")
    } else {
      res.send(stdout);
    }
  });
});

app.get('/ping', function(req, res){
  res.send("Alive!")
});

var port = Number(process.env.PORT || 4000);

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

module.exports = app;
