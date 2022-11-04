let a1 = [[1,2,3,4],5,[6,[7,[8,9]]]]
let a2 = [[[[[1]]]],[1,2,3,4],5,[6,[7,[8,9]]]]
let a3 = [[1,2,3,4],5,[6,[0,[8,9]]]]

function trampoline (fun) {

    while (typeof fun == 'function') {
        
        fun = fun();
    }
    return fun;
}

function callcc (f, cc) {
    
    return f( function (x, ret) { return cc(x) }, cc );
}

function producte_array_nombres(arr) {
    
    if (arr.length === 0) {
        
        return 1
    } 
    else if (typeof(arr) === "number") {
        
        return arr
    } 
    else {
        
        let copia = arr.slice(0);
        let primer_element = copia.shift();
        let prod = producte_array_nombres(primer_element);
        return prod * producte_array_nombres(copia);
    }
}

/*console.log(producte_array_nombres(a1))
console.log(producte_array_nombres(a2))
console.log(producte_array_nombres(a3))*/

function producte_array_nombres_cps(arr, ret) {
    
    if (arr.length === 0) {
        
        return ret(1)
    } 
    else if (typeof(arr) === "number") {
        
        return ret(arr)
    } 
    else {
        
        let copia = arr.slice(0);
        let primer_element = copia.shift();
        return producte_array_nombres_cps(primer_element, function(prod) {
            return producte_array_nombres_cps(copia, function(v) {return ret(v*prod)})
        })
    }
}

/*console.log(producte_array_nombres_cps(a1, x => x))
console.log(producte_array_nombres_cps(a2, x => x))
console.log(producte_array_nombres_cps(a3, x => x))*/

function producte_array_nombres_cps_tr(aa, rr) {
    
    function producte_array_nombres_cps_trampolined(arr, ret) {
        
        if (arr.length === 0) {
        
            return ret(1)
        } 
        else if (typeof(arr) === "number") {
            
            return ret(arr)
        } 
        else {
            
            let copia = arr.slice(0);
            let primer_element = copia.shift();
            return function() {
                
                return producte_array_nombres_cps_trampolined(primer_element, function(prod) {
                    return producte_array_nombres_cps_trampolined(copia, function(v) {return ret(v*prod)})
                })
            }
        }
    }
    
    return trampoline(producte_array_nombres_cps_trampolined(aa, rr))
}

/*console.log(producte_array_nombres_cps_tr(a1, x => x))
console.log(producte_array_nombres_cps_tr(a2, x => x))
console.log(producte_array_nombres_cps_tr(a3, x => x))*/

function producte_array_nombres_amb_escape(aa, rr) {
    
    function producte_array_nombres_callcc(f, kont) {
        
        function producte_array_nombres_cps_trampolined(arr, ret) {
            
            if (arr.length === 0) {
            
                return ret(1)
            } 
            else if (typeof(arr) === "number") {
                
                if(arr === 0) {
                    
                    return kont(0)
                }
                return ret(arr)
            } 
            else {
                
                let copia = arr.slice(0);
                let primer_element = copia.shift();
                return function() {
                    
                    return producte_array_nombres_cps_trampolined(primer_element, function(prod) {
                        return producte_array_nombres_cps_trampolined(copia, function(v) {
                            
                            //console.log(v*prod)
                            return ret(v*prod)})
                    })
                }
            }
        }
        
        return trampoline(producte_array_nombres_cps_trampolined(aa, rr))
    }
    
    return callcc(producte_array_nombres_callcc, rr)
}

/*console.log(producte_array_nombres_amb_escape(a1, x => x))
console.log(producte_array_nombres_amb_escape(a2, x => x))
console.log( producte_array_nombres_amb_escape(a3, x => x))*/
