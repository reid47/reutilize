export default (min, max) => {
  if (max == null) {
    min = 0;
    max = min;
  }

  return Math.random() * (max - min) + min;
};
