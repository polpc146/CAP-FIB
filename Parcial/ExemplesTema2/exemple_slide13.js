/****
     Invocar el shell de rhino:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2
     i fer:
     js> load("./exemple_slide13.js")
     així podreu jugar amb aquestes funcions dins de Rhino
****/

function expressio_qualsevol() {
    print("pas 1 ");
    let x = (2 + 3 * 5);
    print("pas 2 ");
    let y = (4 - 3 * 3);
    return x*y
}

function expressio_qualsevol_amb_continuacions() {
    let k = new Continuation();
    print("pas 1 ");
    let x = (2 + k(3 * 5));
    print("pas 2 ");
    let y = (4 - 3 * 3);
    return x*y
}

