
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return  matrix && matrix.length && arguments.length ?
  	matrix.map((item, i) => (i % 2) ? item.reverse() : item)
		  .join()
		  .split(',')
		  .map(item => Number(item)) : 
    [];
}
