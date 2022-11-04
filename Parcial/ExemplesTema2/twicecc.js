function callcc(f) {
    kont = new Continuation();
    return f(kont)
}

function twicecc(coll) {
    return callcc(function (f) {
        function tmp1(n) {
            return f([n,coll[1]])
        }
        function tmp2() {
            return callcc(function(q) {
                return f([coll[0],q])
            })
        } 
        return tmp1(tmp2())
    })
}

arr = twicecc([0, function(x) { return x } ])
print(arr[1](arr[0]+1))
