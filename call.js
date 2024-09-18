module.exports = function duckCount(){
	let numberOfQuacks = 0

	for (let i=0; i<arguments.length; i++){
		if (Object.prototype.hasOwnProperty.call(arguments[i], "quack")){
			numberOfQuacks++;
		}
	}

	return numberOfQuacks

}
