function map(arr, fn){
	
	return arr.reduce(function(acc, curr) {
		
		return acc.concat([fn(curr)])		
	
	}, [])	


}


module.exports = map
