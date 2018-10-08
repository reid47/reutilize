export default (literals, ...interpolations) => {
  const literalCount = literals.length;
  const output = Array(literalCount + interpolations.length);
  const funcIndices = [];

  let count = 0;
  for (let i = 0; i < literalCount; i++) {
    output[count++] = literals[i];
    if (i < literalCount - 1) {
      const interp = interpolations[i];
      output[count] = interp;
      if (typeof interp === 'function') funcIndices.push(count);
      count++;
    }
  }

  return context => {
    for (let i = 0, length = funcIndices.length; i < length; i++) {
      output[funcIndices[i]] = output[funcIndices[i]](context);
    }

    return output.join('');
  };
};
