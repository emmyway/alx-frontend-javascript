// Import the Car class
import Car from './10-car.js';

// Define the EVCar class that extends Car
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); // Call the parent class constructor if needed

    // Type verification
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }
    if (typeof range !== 'string') {
      throw new TypeError('range must be a string');
    }

    // Attribute storage
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Setter for brand
  set brand(value) {
    if (typeof value !== 'string') {
      throw new TypeError('brand must be a string');
    }
    this._brand = value;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Setter for motor
  set motor(value) {
    if (typeof value !== 'string') {
      throw new TypeError('motor must be a string');
    }
    this._motor = value;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Setter for color
  set color(value) {
    if (typeof value !== 'string') {
      throw new TypeError('color must be a string');
    }
    this._color = value;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Setter for range
  set range(value) {
    if (typeof value !== 'string') {
      throw new TypeError('range must be a string');
    }
    this._range = value;
  }

  // Method to clone the car
  cloneCar() {
    return new Car(); // Return an instance of Car
  }
}
