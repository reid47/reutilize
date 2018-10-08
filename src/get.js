export default function() {
  const parts = [].slice.call(arguments);
  const length = parts.length;

  return obj => {
    for (let i = 0; i < length; i++) {
      if (!obj) return;
      obj = obj[parts[i]];
    }
    return obj;
  };
}
