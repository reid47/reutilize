/**
 * Returns true if `predicate` returns truthy for any element in
 * `array`, and false otherwise.
 *
 * @param {Function} predicate Predicate function, called with elements of `array`
 * @param {Function} array Array of elements to checl
 *
 * @example
 * const yep = any(n => n > 5)([1, 5, 10, 20]);
 * const nope = any(n => n < 5)([20, 40, 60]);
 */
export default predicate => array => {
  const length = array.length;
  for (let i = 0; i < length; i++) if (predicate(array[i])) return true;
  return false;
};
