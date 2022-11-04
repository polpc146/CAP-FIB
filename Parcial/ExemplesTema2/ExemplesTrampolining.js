// Com carregar un fitxer de funcions a node per utilitzar interactivament
// node -i -e "$(< ExemplesTrampolining.js)"

function findIndex(arr, predicate, start = 0) {
    if (0 <= start && start < arr.length) {
        if (predicate(arr[start])) {
            return start;
        }
        return findIndex(arr, predicate, start+1); // tail call
    }
}

function forEach(arr, callback, start = 0) {
    if (0 <= start && start < arr.length) {
        callback(arr[start], start, arr);
        return forEach(arr, callback, start+1); // tail call
    }
}

// >>>>>>>>> TRAMPOLINING <<<<<<<<<

function trampoline (fun) {    
    while (typeof fun == 'function') {
	      fun = fun();
    }
    return fun;
};

// ESQUEMA GENERAL:
//
// const f = (function () {
//      function __f(aa1, aa2, ... , aaN) {
//           if recursiveCase {
//               return function () {
//                         return __f(...);
//               }; 
//           }
//           return baseCase;
//      };
//
//      return function (a1, a2, ... , aN) {
//             return trampoline(__f(a1, a2, ... , aN));
//      }
// })();

const forEachTrampoline = (function () {
    function forEachTR(arr, callback, start = 0) {
	      if (0 <= start && start < arr.length) {
            callback(arr[start], start, arr);
            return function () {
		            return forEachTR(arr, callback, start+1); // tail call
	          };
	      }
	      return undefined;
    }
    
    return function (a, c, s=0) {
	      return trampoline(forEachTR(a,c,s));
    };
})();

const findIndexTrampoline = (function () {
    function findIndexTR(arr, predicate, start = 0) {
	      if (0 <= start && start < arr.length) {
            if (predicate(arr[start])) {
		            return start;  // Els arrays no poden ser arrays de funcions!!!!
            }	    
            return function () {
		            return findIndexTR(arr, predicate, start+1); // tail call
	          };
            
	      }
    }
    
    return function (a, p, s=0) {
	      return trampoline(findIndexTR(a,p,s));
    };
})();




