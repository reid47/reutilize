export default func => obj => {
  const result = {};
  for (const key in obj) result[key] = func(obj[key]);
  return result;
};
