const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const sendPaymentRequestToAPI = require('./5-payment');

describe('testing hooks', function () {
  let mySpy;
  beforeEach(function () {
    mySpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    mySpy.restore();
  });

  it('with 100 and 20', function () {
    sendPaymentRequestToAPI(100, 20);
    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.calledWith('The total is: 120')).to.be.true;
  });

  it('with 10 only', function () {
    sendPaymentRequestToAPI(10, 10);
    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.calledWith('The total is: 20')).to.be.true;
  });
});
