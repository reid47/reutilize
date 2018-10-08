export default obj => {
  const keys = Object.keys(obj);
  const length = keys.length;
  const entries = Array(length);
  for (let i = 0; i < length; i++) {
    const key = keys[i];
    entries[i] = [key, obj[key]];
  }
  return entries;
};
