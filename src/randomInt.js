export default (min, max) => {
  if (max == null) {
    min = 0;
    max = min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};
