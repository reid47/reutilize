export default input => {
  let val = 5381;
  let i = input.length;

  while (i) {
    val = (val * 33) ^ input.charCodeAt(--i);
  }

  return (val >>> 0).toString(36);
};
