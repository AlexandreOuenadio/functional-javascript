function getDependencies(module, totalDeps=new Set()){
	
	if (!Object.prototype.hasOwnProperty.call(module,"dependencies")) return[];
		
	const directDependencies = Object.keys(module.dependencies).map(d => [d, module.dependencies[d]]);
	
	directDependencies.forEach(([dName, dModule]) => {
		totalDeps.add(`${dName}@${dModule.version}`)
		getDependencies(dModule, totalDeps)	
			
	})


	return [...totalDeps].sort();
	
	

	
	

}



module.exports = getDependencies
