function FabricaConsoles() {}

FabricaConsoles.prototype.marca = function() {
    
    return "Consola de joc: " + this.fabricant;
}

FabricaConsoles.prototype.maxfps = function() {
    
    return "Maxim d'fps " + this.fps;
}

FabricaConsoles.factory = function(type) {
    
    let constr = type,
        newconsola;
        
    if (typeof FabricaConsoles[constr] !== "function") {
        
        throw {
            
            name: "Error", message: constr + "doesn't exist"
        };
    }
    
    if (typeof FabricaConsoles[constr].prototype.marca !== "function" || typeof FabricaConsoles[constr].prototype.maxfps !== "function") {
        
        FabricaConsoles[constr].prototype = new FabricaConsoles();
        FabricaConsoles[constr].prototype.constructor = FabricaConsoles[constr];
    }
    
    newconsola = new FabricaConsoles[constr]();
    return newconsola;
}

FabricaConsoles.ps5 = function() {
    
    this.fabricant = "sony";
    this.fps = 120;
}

FabricaConsoles.xbox = function() {
    
    this.fabricant = "microsoft";
    this.fps = 120;
}

let ps = FabricaConsoles.factory('ps5'),
xb = FabricaConsoles.factory('xbox')
console.log(ps.marca());
console.log(ps.maxfps());
console.log(xb.marca());
console.log(xb.maxfps());
