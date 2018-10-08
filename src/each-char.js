export default func => str => {
  const length = str.length;
  for (let i = 0; i < length; i++) func(str[i]);
};
