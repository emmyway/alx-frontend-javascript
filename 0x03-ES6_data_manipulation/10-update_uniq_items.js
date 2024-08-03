const updateUniqueItems = (map) => {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Create a new Map to avoid modifying the original map
  const updatedMap = new Map(map);

  // Iterate over the entries in the map
  for (const [key, value] of updatedMap.entries()) {
    // Check if the quantity is 1 and update it to 100
    if (value === 1) {
      updatedMap.set(key, 100);
    }
  }

  return updatedMap;
};
