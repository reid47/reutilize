import repeat from './repeat';

export default (length, char) => str => {
  const strLength = str.length;
  if (strLength >= length) return str;
  const padding = repeat(length - strLength)(char || ' ');
  return padding + str;
};
