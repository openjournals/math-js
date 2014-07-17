var request = require('supertest')
  , app = require('../server');

var fs = require('fs');
var exec = require('child_process').execFile;

var logfmt = require("logfmt");

var chai = require('chai');
var assert = chai.assert;

describe('Math JS Routes', function() {
  describe('GET /ping', function() {
    it('should return "Alive!"', function(done) {
      request(app)
      .get('/ping')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err)
          return done(err);
        var result = res.text;
        assert.equal(result, 'Alive!')
        done();
      });
    });
  });

  describe('GET /math with some TeX', function() {
    it('should return an SVG', function(done) {
      request(app)
      .get('/math?math=a')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err)
          return done(err);
        var result = res.text;
        assert.include(result, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">')
        done();
      });
    });
  });

  describe('BENCHMARK MathJax with some TeX', function() {
    it('should return an SVG', function(done) {
      file = fs.readFileSync('./test/fixtures/performance/1.tex', 'utf-8');
      var output = exec('./node_modules/MathJax-node/bin/tex2svg', [file], function (error, stdout, stderr) {
        if (error != null) {
          console.log(process.cwd());
          console.log(error);
          done();
        }
        assert.include(stdout, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">')
        done();
      });
    });
  });
});
