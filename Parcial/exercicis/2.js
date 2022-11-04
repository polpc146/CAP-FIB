let temp

function f(x) {
    let temp = x
    return function () { return temp }
}
function g(x) {
    temp = x
    return function () { return temp }
}

// [a,b,c,...].map(foo) aplica foo a cada element i retorna
// [foo(a),foo(b),foo(c),...]
let qf = [1,2,3,4,5].map(f)
let qg = [1,2,3,4,5].map(g)

// [a,b,c,...].forEach(foo) aplica foo a cada element però no retorna res
// (undefined)
qf.forEach(function (e) {console.log(e())})
console.log("----")
qg.forEach(function (e) {console.log(e())})

/*El resultat obtingut és el següent:

    1
    2
    3
    4
    5
    ----
    5
    5
    5
    5
    5
    
La justificació és senzillament que la funció/closure que retorna f captura la variable local temp, per
tant cada cop que s'invoca f, la variable capturada per la funció retornada és diferent. En canvi, la
funció/closure que retorna g fa referència a una única variable temp global, que veu modificat el seu
valor cada cop que invoquem g, i acaba valent 5.*/
