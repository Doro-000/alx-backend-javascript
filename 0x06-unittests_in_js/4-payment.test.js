const chai = require('chai');

const { expect } = chai;

const sinon = require('sinon');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('calculateNumber', function () {
  it('test function', function () {
    const myStub = sinon.stub(Utils, 'calculateNumber');
    const mySpy = sinon.spy(console, 'log');
    myStub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.calledWith('The total is: 10')).to.be.true;
    mySpy.restore();
    myStub.restore();
  });
});
