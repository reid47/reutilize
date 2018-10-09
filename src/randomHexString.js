import randomInt from './randomInt';
import padStart from './padStart';

const pad = padStart(2, '0');

export default () => {
  const r = pad(randomInt(0, 255).toString(16));
  const g = pad(randomInt(0, 255).toString(16));
  const b = pad(randomInt(0, 255).toString(16));
  return `#${r}${g}${b}`;
};
