export default func => arr => {
  const result = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const element = arr[i];
    if (func(arr[i], i, length)) result.push(element);
  }
  return result;
};
