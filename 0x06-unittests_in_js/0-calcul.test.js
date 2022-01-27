const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('whole number', function() {
    assert.equal(calculateNumber(1, 4), 5);
  });

  it('should round up', function() {
    assert.equal(calculateNumber(1.5, 4.5), 7);
  });

  it('should round down', function() {
    assert.equal(calculateNumber(1.2, 4.2), 5);
  });
});
