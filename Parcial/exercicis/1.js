/*Aquest codi us servirà per entendre la diferència:*/

function f1() {
    let l = "let";
    console.log(l);
    console.log(v);
    var v = "var";
}

function f2() {
    var v = "var";
    console.log(l);
    console.log(v);
    let l = "let";
}

/*Si executem f1 el resultat és
    
    let
    undefined
    
En canvi si executem f2 obtenim un error:

    /home/n00ne/CAP/Tema4-Prototipus/resposta.js:10
    console.log(l);
                ^
    ReferenceError: l is not defined
    at f2 (/home/n00ne/CAP/Tema4-Prototipus/resposta.js:10:17)
    at ...*/

/*A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError. The variable is initialized with a value when execution reaches the line of code where it was declared. If no initial value was specified with the variable declaration, it will be initialized with a value of undefined.

This differs from var variables, which will return a value of undefined if they are accessed before they are declared. */
