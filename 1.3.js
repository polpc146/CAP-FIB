function A() {};
A.prototype.propA = "a";
function B() {};
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.propB = "b";
function C() {};
C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;
C.prototype.propC = "c";
let c = new C();
console.log(c.propA);
console.log(c.propB);
console.log(c.propC);