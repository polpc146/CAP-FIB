function trampoline (fun) {
    while (typeof fun == 'function') {
        fun = fun();
    }
    return fun;
}

function suma_ridicula(m,n) {
    if (n == 0) {
        return m;
    } 
    else {
        return suma_ridicula(m+1,n-1)
    }
}

function suma_ridicula_trampoline(mm, nn) {
    
    function suma_ridicula_tr(m, n) {
        
        if (n ==0) {
            
            return m;
        }
        else {
            
            return function() {
                
                return suma_ridicula_tr(m+1, n-1)
            }
        }
    }
    
    return trampoline(suma_ridicula_tr(mm, nn))
}

console.log(suma_ridicula_trampoline(2,16000))
