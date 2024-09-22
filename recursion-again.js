function getDependencies(module){
	
	const dependencies = [];
	
	(function a(module){
		
		if (!Object.prototype.hasOwnProperty.call(module,"dependencies")) return;
		
		const directDependencies = Object.keys(module.dependencies).map(d => [d, module.dependencies[d]])
		directDependencies.forEach(([dName, dModule]) => {
			dependencies.push(`${dName}@${dModule.version}`)
			a(dModule)	
			
		})
	})(module);

	return dependencies.sort();
	
	

	
	

}



module.exports = getDependencies
