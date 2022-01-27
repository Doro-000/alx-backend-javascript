const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should sum', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).equal(6);
  });

  it('should subtract', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).equal(-4);
  });

  it('should divide', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should not divide by 0', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).equal('Error');
  });
});
