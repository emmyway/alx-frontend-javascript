export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // the method
  toSting() {
    return `[object ${this._code}]`;
  }
}
