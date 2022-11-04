// Decorator Pattern (first example)
// from JavaScript Patterns by Stoyan Stefanov, OReilly 2010 isbn 978-0-596-80675-0

function Sale(price) { 
    this.price = price || 100;
} 

Sale.prototype.getPrice = function () {
    return this.price;
};


Sale.prototype.decorate = function (decorator) { 
    let overrides = this.constructor.decorators[decorator], // this és l'objecte que està a l'esquerra del '.'
        newobj;                                             // this.constructor seria l'objecte 'Sale'
    
    newobj = Object.create(this)
    newobj.uber = this   
    
    for (let i in overrides) {
	      if (overrides.hasOwnProperty(i)) { 
	          newobj[i] = overrides[i];  // copiem a newobj totes les propietats del decorador, en aquest cas només 
	      }                              // hi ha 'get_price'
    }
    
    return newobj;
};



// Els objecte decoradors s'implementaran com a propietats d'una propietat del constructor
Sale.decorators = {};

Sale.decorators.fedtax = { 
    getPrice: function () {
	      let price = this.uber.getPrice(); 
	      price += price * 5 / 100; 
	      return price;
    }
};

Sale.decorators.quebec = { 
    getPrice: function () {
	      let price = this.uber.getPrice(); 
	      price += price * 7.5 / 100; 
	      return price;
    }
};

Sale.decorators.money = { 
    getPrice: function () {
	      return "$ " + this.uber.getPrice().toFixed(2); 
    }
};

Sale.decorators.cdn = { 
    getPrice: function () {
	      return "CDN$ " + this.uber.getPrice().toFixed(2); 
    }
};


let sale = new Sale(100); 
sale = sale.decorate('fedtax'); 
sale = sale.decorate('quebec'); 
sale = sale.decorate('money'); 
console.log(sale.getPrice());

sale = new Sale(100); 
sale = sale.decorate('fedtax'); 
sale = sale.decorate('cdn'); 
console.log(sale.getPrice());
