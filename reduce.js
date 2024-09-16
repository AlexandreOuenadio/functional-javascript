module.exports = function countWords(inputWords){
	return inputWords.reduce((acc, curr) => {
		if (Object.keys(acc).includes(curr)){
			acc[curr] += 1
		}else{
			acc[curr] = 1
		}

		return acc



	}, {})

}
