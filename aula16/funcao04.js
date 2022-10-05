// calcular o fatorial do numero 5
// 5! = 5*4*3*2*1 = 120

function fatorial(n) {
    let fat = 1
    for(let c = n ; c > 1 ; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
//1*5=5
//5*4=20
//20*3=60
//60*2=120
//120*1=120
