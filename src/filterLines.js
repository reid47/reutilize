import lines from './lines';

export default func => str => lines(str).filter(func);
