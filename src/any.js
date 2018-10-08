export default func => array => {
  const length = array.length;
  for (let i = 0; i < length; i++) if (func(array[i])) return true;
  return false;
};
