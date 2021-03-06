export default function() {
  const length = arguments.length;

  return arg => {
    let i = 0;
    while (i < length) arg = arguments[i++](arg);
    return arg;
  };
}
