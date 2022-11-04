(function () {
    let value = 0;
    let kont = new Continuation();
    print(value);
    if (value === 5)
        print("Ha arribat a 5 gracies a la continuacio");
    else {
        value++;
        kont(kont);
    }
})();

/*Solució:

El problema aquí és que no estem utilitzant correctament Continuation().
La versió que vam veure a classe utilitza

    function current_continuation() {
        print("Agafem la continuacio");
        return new Continuation();
    }
    
i fa l’assignació let kont = current_continuation();. En aquest cas la continuació assignada a kont és aquella que captura precisament el moment del programa en que s’assigna un valor a kont (per definició de Continuation()). 
En el programa de la pregunta, el problema és que la continuació captura el retorn al prompt principal, a l’entorn d’execució, així doncs invocar kont implica acabar el programa.*/
