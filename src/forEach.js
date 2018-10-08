export default func => strOrArray => {
  const length = strOrArray.length;
  for (let i = 0; i < length; i++) func(strOrArray[i]);
};
