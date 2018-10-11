export default func => obj => {
  const result = {};
  for (const key in obj) result[func(key)] = obj[key];
  return result;
};
