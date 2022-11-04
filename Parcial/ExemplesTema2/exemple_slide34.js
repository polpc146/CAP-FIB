function callcc(f) {
    let kont = new Continuation();
    return f(kont);
}

let torna  = "qualsevol cosa"
let escapa = new Continuation() // Pregunta: quina continuació captura?!?!?!

function my_break(s) {
    function break_receiver(cont) {
        torna = function() { return cont(s) };
        escapa(s)
    }

    return callcc(break_receiver)
}

function aplana_array_nombres(arr) {
    if (arr.length === 0) {
        return []
    } else if (typeof(arr) === "number") {
        return [my_break(arr)]
    } else {
        let copia = arr.slice(0); // No vull destruir l'array original
        let primer_element = copia.shift();
        let aplanat = aplana_array_nombres(primer_element);
        return aplanat.concat(aplana_array_nombres(copia));
    }
}
