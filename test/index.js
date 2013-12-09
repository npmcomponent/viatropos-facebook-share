var facebookShare = 'undefined' == typeof window
  ? require('..')
  : require('facebook-share'); // how to do this better?

var assert = require('assert');

describe('facebookShare', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
