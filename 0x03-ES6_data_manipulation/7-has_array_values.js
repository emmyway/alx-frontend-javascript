export default const hasValuesFromArray = (set, array) => {
  // Check if the first argument is a Set and the second argument is an Array
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new Error('Invalid arguments: expected a Set and an Array');
  }

  // Check if all elements in the array exist in the set
  return array.every(element => set.has(element));
};
