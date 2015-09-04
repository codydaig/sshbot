'use strict';

var expect = require('expect.js');
var path = require('path');

var app = require(path.resolve('./lib/app.js'));

describe('lib/app.js', function () {
  
  describe('start', function () {

    it('should have a start method', function () {
      expect(app.start).to.be.a('function');
    });
    
  });

});
