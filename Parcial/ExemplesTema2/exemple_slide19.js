/****
     Executeu Rhino sobre aquest fitxer per veure'n el resultat:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2 exemple_slide19.js
****/

function current_continuation() {
    print("Agafem la continuacio");
    return new Continuation();
}

let value = 0,
    kont = current_continuation();

print(value);
if (value === 5) {
    print("Ha arribat a 5 gracies a la continuacio");
} else {
    value++;
    kont(kont);
}


