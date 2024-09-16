let index = 0
module.exports = function reduce(array, func, init){
	let acc = init;
	const curr = array[index];
	acc = func(acc, curr, index, array);
	index++;

	if(index < array.length) return reduce(array, func, acc);
	
	return acc;
}
