export default obj => {
  if (!obj || typeof obj !== 'object') return false;
  return Object.keys(obj).length === 0;
};
