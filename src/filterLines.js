import lines from './lines';
import filter from './filter';

export default func => str => filter(func)(lines(str));
