function my_reduce(f,arr,v) {
    if (arr.length === 0) {
        return v
    } 
    else {
        let [car, ...cdr] = arr
        return f(car,my_reduce(f,cdr,v))
    }
}

console.log(my_reduce((x,y) => x*y,[1,2,3,4,5,6,7,8,9],1))
console.log(my_reduce((x,y) => x+y,['h','o','l','a'],''))

//Solució:

function my_reduce_cps(f,arr,v, ret) {
    if (arr.length === 0) {
        return ret(v)
    } 
    else {
        let [car, ...cdr] = arr
        return my_reduce_cps(f, cdr, v, function(r) {return ret(f(car,r))})
    }
}

console.log(my_reduce_cps((x,y) => x*y,[1,2,3,4,5,6,7,8,9],1, function(x) {return x}))
console.log(my_reduce_cps((x,y) => x+y,['h','o','l','a'],'', function(x) {return x}))
