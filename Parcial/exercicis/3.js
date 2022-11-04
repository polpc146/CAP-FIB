function misteri(n){
    let secret = 4;
    n += 2;
    function misteri2(mult) {
        mult *= n;
        return secret * mult;
    }
    return misteri2;
}

function misteri3(param){
    function misteri4(bonus){
        return param(6) + bonus;
    }
    return misteri4;
}

let h = misteri(3);
let j = misteri3(h);
let result = j(2);
console.log(result);

/*El resuñtat obtingut és el següent:

    2
    
Les funcions en Javascript són closures, per tant capturen el context lèxic en el moment de la seva creació. Això és fonamental per entendre aquestexercici.
Aleshores: primer cridem a misteri, que retorna la funció misteri2 amb variables capturades n (que val 5) i secret (que val 4). Aquesta funció és assignada a h.
Ara cridem misteri3, que retorna misteri4 i l'assigna a j. misteri4 captura param (que val misteri2, recordem que estem treballant amb funcions d'ordre superior).
Finalment cridem j(2), és a dir, misteri4(2), que retorna param(6)+2. param, és a dir, misteri2, es crida amb paràmetre 6, i executa 6*n = 6*5 = 30 (valor de mult) i retorna secret * 30 = 4 * 30 = 120. Així, el valor assignat a result serà 120+2 = 122.*/
