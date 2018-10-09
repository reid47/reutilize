import randomInt from './randomInt';

export default () => {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};
