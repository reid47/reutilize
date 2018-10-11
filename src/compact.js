export default arr => {
  const result = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const element = arr[i];
    if (element) result.push(element);
  }
  return result;
};
