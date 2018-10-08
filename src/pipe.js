export default function() {
  const funcs = [].slice.call(arguments);
  return arg => funcs.reduce((acc, func) => func(acc), arg);
}
