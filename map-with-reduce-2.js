function map(arr, fn, thisArg){
	
	return arr.reduce(function(acc, curr, index, array) {
		
		return acc.concat([fn.call(thisArg, curr, index, array)])		
	
	}, [])	


}


module.exports = map
