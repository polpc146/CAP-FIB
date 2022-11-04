function Cafe() {
    
    this.price = 1;
    this.ingredients = "Cafe";
}

Cafe.prototype.getPrice = function() {
    
    return this.price;
}

Cafe.prototype.getIngredients = function() {
    
    return this.ingredients;
}

Cafe.prototype.decorate = function(decorator) {
    
    let overrides = this.constructor.decorators[decorator],
        newobj;
        
    newobj = Object.create(this)
    newobj.uber = this
    
    for (let i in overrides) {
        
        if (overrides.hasOwnProperty(i)) {
            
            newobj[i] = overrides[i];
        }
    }
    
    return newobj;
}

Cafe.decorators = {};

Cafe.decorators.llet = {
    
    getPrice: function() {
        
        let price = this.uber.getPrice();
        price += 0.5;
        return price;
    },
    
    getIngredients: function() {
        
        let ingredients = this.uber.getIngredients();
        ingredients = ingredients + ", llet";
        return ingredients;
    }
}

Cafe.decorators.xocolata = {
    
    getPrice: function() {
        
        let price = this.uber.getPrice();
        price += 0.75;
        return price;
    },
    
    getIngredients: function() {
        
        let ingredients = this.uber.getIngredients();
        ingredients = ingredients + ", xocolata";
        return ingredients;
    }
}

Cafe.decorators.crema = {
    
    getPrice: function() {
        
        let price = this.uber.getPrice();
        price += 0.5;
        return price;
    },
    
    getIngredients: function() {
        
        let ingredients = this.uber.getIngredients();
        ingredients = ingredients + ", crema";
        return ingredients;
    }
}

let c = new Cafe();
c = c.decorate('llet');
c = c.decorate('xocolata');
c = c.decorate('crema');
console.log(c.getPrice());
console.log(c.getIngredients());
