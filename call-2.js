function duckCount(){
	const objs = Array.from(arguments)
	return objs.filter(o => Object.prototype.hasOwnProperty.call(o, "quack")).length
}

module.exports = duckCount
