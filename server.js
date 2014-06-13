var express = require('express');
var app = express();
var exec = require('child_process').execFile;

app.get('/math', function(req, res){
  exec('./node_modules/MathJax-node/bin/tex2svg', [req.query.math], function (error, stdout, stderr) {
  res.send(stdout);
  });
});

var server = app.listen(4000, function() {
  console.log('Listening on port %d', server.address().port);
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});
