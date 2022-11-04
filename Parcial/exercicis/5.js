function A() {
    this.a = 0;
    this.b = 1;
}

A.prototype.retornaA = function() { return this.a }
A.prototype.retornaB = function() { return this.b }

// provem...
let aa = new A();
aa.a = aa.a + 1;
aa.b = aa.b + 1;
console.log(aa.retornaA());
console.log(aa.retornaB());

/*function B() {
    this.a = 100;
    this.c = 101;
}

B.prototype = Object.create(A.prototype); // el que hem vist a classe
B.prototype.constructor = B;
B.prototype.retornaC = function() { return this.c }

// provem...
let bb = new B();
console.log(bb.retornaA());
console.log(bb.retornaB());
console.log(bb.retornaC());*/

/*El problema és que els mètodes heretats que depenen d'atributs de la superclasse no funcionaran bé. Això s'arregla fent servir el constructor de la superclasse per afegir els atributs necessaris. En l'exemple, tot plegat s'arreglaria amb una crida a A.call(this) dins de B:*/

function B() {
    A.call(this);
    this.a = 100;
    this.c = 101;
}

B.prototype = Object.create(A.prototype); // el que hem vist a classe
B.prototype.constructor = B;
B.prototype.retornaC = function() { return this.c }

// provem...
let bb = new B();
console.log(bb.retornaA());
console.log(bb.retornaB());
console.log(bb.retornaC());
