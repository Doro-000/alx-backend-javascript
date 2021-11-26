/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new Error();
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new Error();
    }
    this._currency = val;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error();
    }
    return amount * conversionRate;
  }
}
