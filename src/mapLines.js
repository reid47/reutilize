import lines from './lines';
import map from './map';

export default func => str => map(func)(lines(str));
