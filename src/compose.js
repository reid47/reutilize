export default function() {
  const length = arguments.length;

  return arg => {
    let i = length - 1;
    while (i >= 0) arg = arguments[i--](arg);
    return arg;
  };
}
