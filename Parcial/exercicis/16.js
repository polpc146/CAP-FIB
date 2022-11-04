function collatz(n) {
    if (n === 1) {
        return 0
    } 
    else {
        let m = (n % 2 === 0) ? n/2 : 3*n+1 // operador ternari
        return 1 + collatz(m)
    }
}

console.log(collatz(7));

//Solucio:

function collatz_cps(n, ret) {
    
    if (n === 1) {
        return ret(0)
    }
    else {
        let m = (n % 2 === 0) ? n/2 : 3*n+1 // operador ternari
        return collatz_cps(m, function(v) {return ret(1+v)})
    }
}

console.log(collatz_cps(7, function(x) {return x}))
