function A() {
    this.propA = 'a';
}

function B() {
    A.call(this);
    this.propB = 'b';
}

B.prototype = Object.create(A.prototype); // el que hem vist a classe
B.prototype.constructor = B;

function C() {
    B.call(this);
    this.propC = 'c';
}

C.prototype = Object.create(B.prototype); // el que hem vist a classe
C.prototype.constructor = C;

let c = new C();
console.log(c.propA);
console.log(c.propB);
console.log(c.propC);
