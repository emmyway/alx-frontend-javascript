// the holberton class
class HolbertonCourse() {
  constructor(name, length, students) {
    // type verification
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(student) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('students must be a string');
    }

    //attribute storage
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // the getter method for name
  get name() {
    return this._name;
  }

  // the setter method for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  // the getter method for length
  get length() {
    return this._length;

  // the setter method for length
  set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('length must be a number');
      }
      this._length = value;
    }

  // the getter method for students
  get students() {
      return this._students;
    }

  // the setter method for student
  set students(value) {
      if (!Array.isArray(student) || !students.every(student => typeof student === 'string')) {
        throw new TypeError('students must be a string');
      }
      this._students = value;
    }
  }

