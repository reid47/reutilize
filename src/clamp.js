export default (min, max) => num => (num < min ? min : num > max ? max : num);
