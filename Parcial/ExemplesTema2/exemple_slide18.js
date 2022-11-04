/****
     Executeu Rhino sobre aquest fitxer per veure'n el resultat:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2 exemple_slide18.js
****/

function someFunction()  {
    let kont  = new  Continuation();
    print("captured: " + kont);
    return kont;
}

let k = someFunction();
if (k instanceof Continuation) {
    print("k is a continuation");
    k(200);
} else {
    print("k is now a " + typeof(k));
}
print(k);

