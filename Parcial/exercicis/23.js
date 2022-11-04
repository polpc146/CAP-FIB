let array_de_nombres = [[1,2,3,4],5,[6,[7,[8,9]]]]

function trampoline (fun) {

    while (typeof fun == 'function') {
        
        fun = fun();
    }
    return fun;
}

function suma_array_nombres(arr) {
    
    if (arr.length === 0) {
        
        return 0
    } 
    else if (typeof(arr) === "number") {
        
        return arr
    } 
    else {
        
        let copia = arr.slice(0);
        let primer_element = copia.shift();
        let sumat = suma_array_nombres(primer_element);
        return sumat + suma_array_nombres(copia);
    }
}

/*console.log(suma_array_nombres(array_de_nombres))
console.log(suma_array_nombres([...Array(1000).keys()]))
console.log(suma_array_nombres([...Array(15000).keys()]))*/

function suma_array_nombres_cps(arr, ret) {
    
    if (arr.length === 0) {
        
        return ret(0)
    } 
    else if (typeof(arr) === "number") {
        
        return ret(arr)
    } 
    else {
        
        let copia = arr.slice(0);
        let primer_element = copia.shift();
        return suma_array_nombres_cps(primer_element, function(sumat) {
            return suma_array_nombres_cps(copia, function(v) {return ret(sumat+v)})
        })
    }
}

/*console.log(suma_array_nombres_cps(array_de_nombres,x => x))
console.log(suma_array_nombres_cps([...Array(1000).keys()], x => x))
console.log(suma_array_nombres_cps([...Array(10000).keys()], x => x))*/

function suma_array_nombres_cps_tr(aa, rr) {
    
    function suma_array_nombres_cps_trampolined(arr, ret) {
        
        if (arr.length === 0) {
        
            return ret(0)
        } 
        else if (typeof(arr) === "number") {
            
            return ret(arr)
        } 
        else {
            
            let copia = arr.slice(0);
            let primer_element = copia.shift();
            return function() {
                
                return suma_array_nombres_cps_trampolined(primer_element, function(sumat) {
                    return suma_array_nombres_cps_trampolined(copia, function(v) {return ret(sumat+v)})
                })
            }
        }
    }
    
    return trampoline(suma_array_nombres_cps_trampolined(aa, rr))
}

/*console.log(suma_array_nombres_cps_tr(array_de_nombres,x => x))
console.log(suma_array_nombres_cps_tr([...Array(1000).keys()], x => x))
console.log(suma_array_nombres_cps_tr([...Array(10000).keys()], x => x))*/
