module.exports = function reduce(array, func, init){
	return (function __reduce (index, acc) {
		
		if (index >= array.length) return acc;
		
		acc = func(acc, array[index], index, array);
		
		return __reduce(index + 1, acc);
	})(0, init)

	
}
