export default (...funcs) => arg => funcs.reduce((acc, func) => func(acc), arg);
