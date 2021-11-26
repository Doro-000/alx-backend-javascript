/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new Error();
    }
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error();
    }
    this._name = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
