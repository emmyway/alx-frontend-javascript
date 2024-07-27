import Currency from '..3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }


  // attribute getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // attribute setters
  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  // displays in given format
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullPrice()}`;
  }

  // static that cal. the amount multiplied by the conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
