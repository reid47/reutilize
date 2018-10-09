import splitOn from './splitOn';

const lineBreakPattern = /\r\n|\r|\n/;

export default splitOn(lineBreakPattern);
