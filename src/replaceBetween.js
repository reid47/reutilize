import escapeRegExp from './escapeRegExp';

export default (startPattern, endPattern, replacement) => str => {
  const regex = new RegExp(escapeRegExp(startPattern) + '.*' + escapeRegExp(endPattern));
  return str.replace(regex, replacement);
};
