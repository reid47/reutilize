export default function() {
  const length = arguments.length;

  return obj => {
    for (let i = 0; i < length; i++) {
      if (!obj) return;
      obj = obj[arguments[i]];
    }
    return obj;
  };
}
