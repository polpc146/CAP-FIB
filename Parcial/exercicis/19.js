function trampoline (fun) {
    while (typeof fun == 'function') {
        fun = fun();
    }
    return fun;
}

function reverse (arr, res) {
    if (arr.length === 0) {
        return res
    } 
    else {
        let [car, ...cdr] = arr;
        res.unshift(car);
        return reverse(cdr,res);
    }
}

function reverse_trampoline(aa, rr) {
    
    function reverse_tr(arr, res) {
        
        if (arr.length === 0) {
            return res
        } 
        else {
            let [car, ...cdr] = arr;
            res.unshift(car);
            return function() {
                
                return reverse_tr(cdr,res);
            }
        }
    }
    
    return trampoline(reverse_tr(aa, rr))
}

console.log(reverse_trampoline([...Array(10000).keys()],[]))
