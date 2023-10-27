let num = [1,63,75,8,35,22,76]
let tot = num.reduce(function(acumulador, val, ind, ar) {
    acumulador += val
    return acumulador
}, 20) //soma +20

console.log(tot)