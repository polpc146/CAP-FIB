function same_fringe(tree1, tree2) {
	let tree1Ends = false;
	let tree2Ends = false;
	let c1 = make_coroutine( function(resume, value) {
		while(resume(c2,tree1) == resume(c3,tree2)){}
		print(tree1Ends && tree2Ends);
	});
	let c2 = make_coroutine( function(resume, value) {
		function recorrerArbol(arbol) {
			for (let i = 0; i < arbol.length; i++) {
				if (Array.isArray(arbol[i])) {
					recorrerArbol(arbol[i]);
				} else {
					//print("tree1: " + arbol[i]);
					resume(c1,arbol[i]);
				}
			}
			
		}
		recorrerArbol(tree1);
		tree1Ends = true;
		
	});
	let c3 = make_coroutine( function(resume, value) {
		function recorrerA(arbol) {
			for (let i = 0; i < arbol.length; i++) {
				if (Array.isArray(arbol[i])) {
					recorrerA(arbol[i]);
				} else {
					//print("tree2: " + arbol[i]);
					resume(c1,arbol[i]);
				}
			}
		}
		recorrerA(tree2);
		tree2Ends = true;
	});
	if (typeof(c1) === 'function') {
		c1('*')
	}
}
