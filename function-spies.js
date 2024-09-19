function Spy(target, method){
	const spy = {
		count: 0
	}
	const targetedMethod = target[method]	
	
	target[method] = function () {
		spy.count++
		return targetedMethod.apply(target, arguments)
	}
	
	return spy

}


module.exports = Spy
