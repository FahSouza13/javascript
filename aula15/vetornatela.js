let valores = [8,1,7,4,2,9]
console.log(valores)

console.log(`------------------------------`)

for( let posicao = 0;  posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

console.log(`------------------------------`)

for(let posicao in valores) {
    console.log(valores[posicao])
}