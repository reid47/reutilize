const hasOwnProperty = Object.prototype.hasOwnProperty;

export default prop => obj => hasOwnProperty.call(obj, prop);
