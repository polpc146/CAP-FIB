function test1() {
    
    let a = make_coroutine(function(resume, value) {
        
        print(1);
        print(resume(b,'a'));
        print(6);
        print(resume(b, 7));
        print("Aquí acaba l'execució");
    });
    let b = make_coroutine(function(resume, value) {
        
        print(2);
        print(resume(c,'a'));
        print(8);
        print(resume(c, 9));
        print("Això no s'escriu mai");
    });
    let c = make_coroutine(function(resume, value) {
        
        print(3);
        print(resume(d,'a'));
        print(10);
        print(resume(d, 11));
        print("Això no s'escriu mai");
    });
    let d = make_coroutine(function(resume, value) {
        
        print(4);
        print(resume(a, 5));
        print(12);
        print(resume(a, 13));
        print("Això no s'escriu mai");
    });
    
    if (typeof(a) === 'function') {
        
        a('x');
    }
}

test1();
