function trampoline (fun) {
    while (typeof fun == 'function') {
        fun = fun();
    }
    return fun;
}

function my_filter (arr, f, res) {
    if (arr.length === 0) {
        return res
    } 
    else {
        let [car, ...cdr] = arr
        if (f(car)) {
            res.push(car)
        }
        return my_filter(cdr,f,res)
    }
}

function my_filter_trampoline(aa, ff, rr) {
    
    function my_filter_tr(arr, f, res) {
        
        if (arr.length === 0) {
            return res
        } 
        else {
            let [car, ...cdr] = arr
            if (f(car)) {
                res.push(car)
            }
            return function() {
                
                return my_filter_tr(cdr,f,res)
            }
        }
    };
    
    return trampoline(my_filter_tr(aa,ff,rr));
}

console.log(my_filter_trampoline([...Array(20000).keys()], x => x % 2 === 0, []))
