function repeat(operation, num) {
	if (num < 0) return;
	
	operation()
	
	if (num % 5 == 0){
		//PAUSE
		setTimeout(() => repeat(operation, --num))
	}else{
		repeat(operation, --num)
	}

}

module.exports = repeat
