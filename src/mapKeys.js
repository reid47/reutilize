import keys from './keys';

export default func => obj => keys(obj).map(func);
