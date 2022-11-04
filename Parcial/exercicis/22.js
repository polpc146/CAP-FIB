function trampoline (fun) {

    while (typeof fun == 'function') {
        
        fun = fun();
    }
    return fun;
}

function member(x,arr) {
    
    if (arr.length === 0) {
        
        return false
    } 
    else {
        
        let [car, ...cdr] = arr
        return (x === car) || member(x,cdr)
    }
}

/*console.log(member(834,[...Array(1000).keys()]))
console.log(member(10001,[...Array(1000).keys()]))
console.log(member(10000,[...Array(10000).keys()]))*/

function member_cps(x, arr, ret) {
    
    if (arr.length === 0) {
        
        return ret(false)
    } 
    else {
        
        let [car, ...cdr] = arr
        if (x === car) {
            
            return ret(true)
        }
        return member_cps(x, cdr, function(v) {return ret(v)})
    }
}

/*console.log(member_cps(834,[...Array(1000).keys()],x => x))
console.log(member_cps(10001,[...Array(1000).keys()],x => x))
console.log(member_cps(10000,[...Array(10000).keys()], x => x))*/

function member_cps_trampolined(xx, aa, rr) {
    
    function member_cps_tr(x, arr, ret) {
        
        if (arr.length === 0) {
            
            return ret(false)
        } 
        else {
            
            let [car, ...cdr] = arr
            if (x === car) {
                
                return ret(true)
            }
            return function() {
                
                return member_cps_tr(x, cdr, function(v) {return ret(v)})
            }
        }
    }
    
    return trampoline(member_cps_tr(xx, aa, rr))
}

/*console.log(member_cps_trampolined(834,[...Array(1000).keys()],x => x))
console.log(member_cps_trampolined(10001,[...Array(1000).keys()],x => x))
console.log(member_cps_trampolined(10000,[...Array(10000).keys()], x => x))*/
