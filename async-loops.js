function loadUsers(userIds, load, done){
	
	const users = [];

	let loadCompleted = false;

	userIds.forEach(function (userId, index){
		load(userIds[index], function(user){
			users[index] = user
			if (users.length === userIds.length && users.every(u => ![undefined, null].includes(u))){
				loadCompleted = true;
			} 
		})
			
	})
	
	
	if (loadCompleted) return done(users);

	


}

module.exports = loadUsers
