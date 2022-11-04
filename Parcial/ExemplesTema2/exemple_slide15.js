/****
     Invocar el shell de rhino:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2
     i fer:
     js> load("./exemple_slide15.js")
     així podreu jugar amb aquestes funcions dins de Rhino
****/

function factorial(n) {

    function fact_aux(n,m) {
        if (n === 0) {
            return m
        } else {
            let res = fact_aux(n-1,m*n)
            print("pas ", n-1)
            return res
        }
    }

    return fact_aux(n,1)
}

function factorial_cont(n) {
    let kont = new Continuation()

    function fact_aux(n,m) {
        if (n === 0) {
            kont(m)
        } else {
            let res = fact_aux(n-1,m*n)
            print("pas ", n-1)
            return res
        }
    }

    return fact_aux(n,1)
}
