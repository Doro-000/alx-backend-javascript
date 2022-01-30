const chai = require('chai');

const { expect } = chai;

const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('calculateNumber', function () {
  it('test function', function () {
    const mySpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.calledWith('SUM', 100, 20)).to.be.true;
    mySpy.restore();
  });
});
