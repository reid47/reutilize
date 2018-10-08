export default (...parts) => obj => {
  const length = parts.length;
  for (let i = 0; i < length; i++) {
    if (!obj) return;
    obj = obj[parts[i]];
  }
  return obj;
};
