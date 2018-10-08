export default (start, end) => {
  if (end <= start) return [];
  const result = Array(end - start);
  let i = 0;
  while (start < end) result[i++] = start++;
  return result;
};
