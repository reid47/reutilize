const arraySlice = Array.prototype.slice;

export default (obj, start, end) => arraySlice.call(obj, start, end);
