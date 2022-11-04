function callcc(f) {
    
    let kont = new Continuation();
    return f(kont);
}

function arg_fc() {
    return callcc(function(k) {
        k( function(x) {
            k( function(y) {
                return x; })})});
};

let f = arg_fc();
f(true);
print(f(false));

/*Solució:
 
Aquest programa, en ser executat per primer cop, arg_fc(), retorna la funció:

    function(x) {
        k( function(y) {
            return x;  
        })
    }
    
que és assignada a f. En fer f(true) s’executa aquesta funció, que torna al punt on vam retornar una funció que va ser assignada a f. Aquest cop, la funció assignada a f és:

    function(y) {
    return x;  
    }
    
que, com la primera invocació ha estat amb paràmetre true, x té com a valor true. Aquesta funció sempre retornarà true, no importa quin sigui el seu argument.
Així doncs, bastant obvi a partir d’aquest experiment, hem aconseguit una funció que, a partir de la segona invocació, sempre retornarà l’argument de la primera invocació.*/
