function curryN(fn,n){
	
	n = n ?? fn.length;
	
	return function(arg){
		
		if(n > 1) return curryN(fn.bind(this, arg), n-1);		
		return fn.call(this, arg);
	}	
	



}


module.exports = curryN
