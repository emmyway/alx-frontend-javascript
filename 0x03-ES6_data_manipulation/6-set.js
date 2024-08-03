export default const setFromArray = (array) => {
  // Check if the argument is an array
  if (!Array.isArray(array)) {
    throw new Error('The argument must be an array');
  }

  // Create and return a Set from the array
  return new Set(array);
};
