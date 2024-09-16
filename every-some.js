module.exports = function checkUsersValid(goodUsers){
	return function allUsersValid (submittedUsers){
		return submittedUsers.every(u => goodUsers.some(gu => gu.id == u.id))
	}
	
}
