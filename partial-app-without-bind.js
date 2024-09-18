function logger(prefix){
	return function () {
		const argumentsArray = Array.from(arguments)
		argumentsArray.unshift(prefix)
		console.log.apply(null, argumentsArray)
	}
}

module.exports = logger
