/****
     Invocar el shell de rhino:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2
     i fer:
     js> load("./exemple_slide22.js")
     així podreu jugar amb aquestes funcions dins de Rhino
****/

function current_continuation() {
    return new Continuation();
}

function while_cont(condicio_continuacio_bucle, cos_bucle) {
    let kont = current_continuation();
    if (condicio_continuacio_bucle()) {
        cos_bucle();
        kont(kont);
    }     
    return undefined;
}

function comptar_n(n) {
    let count = 0;
    
    function condicio() { return (count < n) }

    function cos() { 
       print("El comptador és",count); 
       count++; 
    }

    return while_cont(condicio,cos);
}
