function trampoline (fun) {
    while (typeof fun == 'function') {
        fun = fun();
    }
    return fun;
}

function my_map (arr,f,res) {
    if (arr.length === 0) {
        return res
    } 
    else {
        let [car, ...cdr] = arr;
        res.push(f(car));
        return my_map(cdr,f,res);
    }
}

function my_map_trampoline (aa, ff, rr) {
    
    function my_map_tr(arr, f, res) {
        
        if (arr.length === 0) {
            return res
        } 
        else {
            let [car, ...cdr] = arr;
            res.push(f(car));
            return function() {
                
                return my_map_tr(cdr,f,res);
            }
        }
    }
    
    return trampoline(my_map_tr(aa, ff, rr))
}

console.log(my_map_trampoline([...Array(10000).keys()], x => x+1, []))
