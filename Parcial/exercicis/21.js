function trampoline (fun) {
    while (typeof fun == 'function') {
        fun = fun();
    }
    return fun;
}

function my_filter_index (arr, f, res, i) {
    if (arr.length === 0) {
        return res
    } 
    else {
        let [car, ...cdr] = arr
        if (f(car)) {
            res.push(i)
        }
        return my_filter_index(cdr,f,res,i+1)
    }
}

function my_filter_index_trampoline(aa, ff, rr, ii) {
    
    function my_filter_index_tr(arr, f, res, i) {
        
        if (arr.length === 0) {
            return res
        } 
        else {
            let [car, ...cdr] = arr
            if (f(car)) {
                res.push(i)
            }
            return function() {
                
                return my_filter_index_tr(cdr,f,res,i+1)
            }
        }
    }
    
    return trampoline(my_filter_index_tr(aa, ff, rr, ii))
}

console.log(my_filter_index_trampoline([...Array(10000).keys()],x=>x%2===0,[],0))
