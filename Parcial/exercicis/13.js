function callcc(f) {
    
    let kont = new Continuation();
    return f(kont);
}

print(callcc(function(k) {return 2 + 4 * k(5)}));
print(2 + 4 * callcc(function(k) {return 5}));

/*Solució:

La primera expressió retorna 5 i la segona en retorna 22.
Això és degut a que la primera ignora tot allò que no retorna la continuació i ho ignora, a diferència de la segona que si ho té en compte ja que no forma part de la funció.*/
