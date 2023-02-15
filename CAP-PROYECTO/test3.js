function test3() {
    
    let a = make_coroutine(function(resume, value) {
        
        resume(b,'a');
        resume(b,'a');
        resume(b,'a');
        resume(b,'a');
        resume(c,'a');
        
    });
    let b = make_coroutine(function(resume, value) {
        
        resume(a,'a');
        resume(a,'a');
        resume(a,'a');
        resume(a,'a');
    });
    let c = make_coroutine(function(resume, value) {
        
        print("Hola");
    });
    
    if (typeof(a) === 'function') {
        
        a('x');
    }
}

test3();
