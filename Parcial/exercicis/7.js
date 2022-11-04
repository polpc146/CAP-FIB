/*Solució:

El problema és que en fer

    Universe = function Universe () {
        return instance;
    };
    
mantenim el prototipus de l’objecte resultat de la primera crida a new Universe() i per tant qualsevol propietat que s’hagi definit després de crear la primera (i única) instància de Universe es perdrà (no serà visible).*/
