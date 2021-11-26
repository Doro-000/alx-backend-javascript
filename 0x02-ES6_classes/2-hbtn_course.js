/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      return new Error();
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      return new Error();
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) {
      return new Error();
    }
    this._students = val;
  }
}
