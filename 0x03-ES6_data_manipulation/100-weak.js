// weakMap.js
export const weakMap = new WeakMap();

// queryAPI.js
import { weakMap } from './weakMap.js';

export const queryAPI = (endpoint) => {
  // Validate the endpoint argument
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Use the endpoint object as the key in the WeakMap
  const count = weakMap.get(endpoint) || 0;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count + 1);

  // Check if the count is >= 5 and throw an error if true
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
};
