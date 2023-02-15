function callcc(f) {
    
    let kont = new Continuation();
    return f(kont);
}

function make_coroutine(coroutine) {
    
    let savedContinuation = "empty";
    let updatedContinuation = function(k) {
        
        savedContinuation = k;
    };
    let resumer = make_resume(updatedContinuation);
    let firstTime = true;
    
    return function(value) {
        
        if (firstTime) {
            
            firstTime = false;
            return coroutine(resumer, value)
        }
        else {
            
            return savedContinuation(value);
        }
    };
}

function make_resume(updateCoroutine) {
    
    return function(nextCoroutine, value) {
        
        let receiver = function(cont) {
            
            updateCoroutine(cont);
            return nextCoroutine(value);
        };
        return callcc(receiver);
    };
}
