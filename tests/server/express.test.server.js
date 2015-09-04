'use strict';

var expect = require('expect.js');
var path = require('path');

var express = require(path.resolve('./lib/express'));

describe('lib/express.js', function () {

  describe('start', function () {

    it('it should have a start method', function () {
      expect(express.start).to.be.a('function');
    });
    
  });

});
