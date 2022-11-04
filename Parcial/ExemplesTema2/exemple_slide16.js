/****
     Invocar el shell de rhino:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2
     i fer:
     js> load("./exemple_slide16.js")
     així podreu jugar amb aquestes funcions dins de Rhino
****/

function producte_array(arr) {

    function prod_aux(a,i) {
        if (a.length === i) {
            return 1;
        } else {
            if (a[i] === 0) {
                return 0;
            } else {
                let res = a[i] * prod_aux(a,i+1);
                print("El resultat aquí és: ", res)
                return res;
            }
        }
    }

    let resfinal = prod_aux(arr,0);
    print("El resultat final és: ", resfinal);
}


function producte_array_amb_continuacions(arr) {
    let k = new Continuation();

    function prod_aux(a,i) {
        if (a.length === i) {
            return 1;
        } else {
            if (a[i] === 0) {
                k("El resultat final és: 0");
            } else {
                let res = a[i] * prod_aux(a,i+1);
                print("El resultat aquí és: ", res)
                return res;
            }
        }
    }

    let resfinal = prod_aux(arr,0);
    print("El resultat final és: ", resfinal);
}

