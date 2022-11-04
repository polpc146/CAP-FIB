/****
     Invocar el shell de rhino:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2
     i fer:
     js> load("./exemple_slide21.js")
     així podreu jugar amb aquestes funcions dins de Rhino
****/

function bucle_infinit(procediment) {
//    function itera() {
//        procediment();
//        itera();
//    }
//    itera();
     while (true) {
	procediment()
     }
}

function comptar_fins_a_n(n) {

    function bucle(funcio_acabament) {
        let count=0

        bucle_infinit(function() {
            if (count === n) {
                funcio_acabament()
            } else {
                print("El comptador és",count);
                count++;
            }
        });
    }

    let k = new Continuation()
    bucle(k)

}

