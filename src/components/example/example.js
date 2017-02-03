/**
 * Example components
 * @function
 * @param  {string} value String value
 * @return {string} 'Hello, ${value}' value
 *
 * @example
 * import { example } from 'components/example/example.js';
 * example('World!'); // Hello, world!
 */
export const example = (value) => {
  return `Hello, ${value}`;
};
