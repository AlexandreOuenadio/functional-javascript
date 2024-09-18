function logger(prefix){
	return function () {
		const argumentsArray = Array.from(arguments)
		console.log.apply(console, [prefix].concat(argumentsArray))
	}
}

module.exports = logger
