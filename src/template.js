export default function(literals) {
  const literalCount = literals.length;
  const interpolationCount = arguments.length - 1;
  const output = Array(literalCount + interpolationCount);
  const funcIndices = [];

  let count = 0;
  for (let i = 0; i < literalCount; i++) {
    output[count++] = literals[i];
    if (i < literalCount - 1) {
      const interp = arguments[i + 1];
      output[count] = interp;
      if (typeof interp === 'function') funcIndices.push(count);
      count++;
    }
  }

  const funcCount = funcIndices.length;

  return context => {
    for (let i = 0; i < funcCount; i++) {
      const func = funcIndices[i];
      output[func] = output[func](context);
    }

    return output.join('');
  };
}
