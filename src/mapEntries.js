export default func => obj => {
  const result = {};
  for (const key in obj) {
    const mappedEntry = func(key, obj[key]);
    result[mappedEntry[0]] = mappedEntry[1];
  }
  return result;
};
