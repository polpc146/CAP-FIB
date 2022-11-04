/****
     Executeu Rhino sobre aquest fitxer per veure'n el resultat:
     java -cp <path on s'ha instal·lat Rhino>/rhino1.7.14/lib/rhino-1.7.14.jar org.mozilla.javascript.tools.shell.Main -opt -2 amb.js
****/

function current_continuation() {
    return new Continuation();
}

let { amb_reset, fail, amb, assert } =
    ( function () {
        
        let fail_stack = [];

        function amb_reset() {
            fail_stack = [];
        }
        
        function fail() {
            if (fail_stack.length > 0) {
                let back_track_point = fail_stack.pop();
                back_track_point(back_track_point);
            } else {
                throw 'back-tracking stack exhausted!';
            }
        }
        
        function amb(c) {
            let choices = c.slice() // Faig còpia de l'argument
            let cc = current_continuation();
            if (choices && choices.length > 0) {
                let choice = choices.shift();
                fail_stack.push(cc);
                return choice;
            } else {
                fail();
            }
        }

        
        function assert(condition) {
            if (condition) {
                return true;
            } else {
                fail();
            }
        }
        
        return { amb_reset: amb_reset, fail: fail, amb: amb, assert: assert }
    }());


let arr = [1,2,3,4,5,6,7];
let a = amb(arr);
let b = amb(arr);
let c = amb(arr);

assert(((c*c) === (a*a + b*b)));

print(a,' -- ',b,' -- ', c);

assert((b < a))

print(a,' -- ',b,' -- ', c);

//fail()
