export default (prefix, suffix) => str => `${prefix}${str}${suffix == null ? prefix : suffix}`;
