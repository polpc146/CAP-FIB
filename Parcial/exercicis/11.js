function callcc(f) {
    
    let kont = new Continuation();
    return f(kont);
}

function current_continuation() {
    
    return callcc(new Continuation());
}
