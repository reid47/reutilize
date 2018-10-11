export default obj => {
  switch (typeof obj) {
    case 'string':
      return obj.length;
    case 'object':
      if (!obj) return;
      return Array.isArray(obj) ? obj.length : Object.keys(obj).length;
  }
};
