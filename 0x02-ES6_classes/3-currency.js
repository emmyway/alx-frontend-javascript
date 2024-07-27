export defaukt class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // code and name getter
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // code and name setter
  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  // method displays output in this order: name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
