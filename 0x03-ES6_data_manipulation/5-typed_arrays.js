const createInt8TypedArray = (length, position, value) => {
  // Check if position is within the bounds of the array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a view of the buffer as an Int8Array
  const int8View = new Int8Array(buffer);

  // Set the value at the specified position
  int8View[position] = value;

  return int8View;
};
