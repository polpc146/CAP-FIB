function Universe() {
	  let instance = this;
    
	  this.start_time = 0;
	  this.bang = "Big";
    
	  Universe = function Universe () {
		    return instance;
	  };
}

Universe.prototype.nothing = true;

let uni = new Universe();

Universe.prototype.everything = true;

let uni2 = new Universe();

console.log(uni === uni2);
console.log(uni.nothing && uni.everything && uni2.everything && uni2.nothing);
console.log(uni.bang);
console.log(uni2.bang);
console.log(uni.start_time);
console.log(uni2.start_time);
console.log(uni.constructor === Universe);
console.log(uni2.constructor === Universe);

