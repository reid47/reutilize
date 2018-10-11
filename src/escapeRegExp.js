const regexSpecialCharPattern = /[.*+?^${}()|[\]\\]/g;

export default str => str.replace(regexSpecialCharPattern, '\\$&');
