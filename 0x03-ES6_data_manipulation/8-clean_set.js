const cleanSet = (set, startString) => {
  // Check if the first argument is a Set and the second argument is a String
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid arguments: expected a Set and a String');
  }

  // Filter the set values and remove the startString prefix
  const result = [...set]
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');

  return result;
};
