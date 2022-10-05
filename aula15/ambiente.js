let num = [5,8,2,9,3]
num[5] = 7 //adiciona mais um elemento ao array na posição que defini, que no caso é a sexta posição já que meu indice começa em zero

num.push(6) //o push adiciona um elemento a ultima posição do array, independente de quantos indices ele tenha
 
num.sort() //o sort pega todos os elementos e os coloca em ordem crescente

num.push(1) //se adicionar o numero depois do sort o numero adicionado nao entra na ordem crescente, vai para o fim do array

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`) //length define o tamanho do array
console.log(`O numero que esta na posição zero é o ${num[0]}`) //mostrar isoladamente o numero que esta na posição zero
console.log(`o numero buscado esta na posição ${num.indexOf(6)}`) //o indexOf busca valores dentro de um vetor, no caso onde esta o valor 6, se colocar um numero que não existe ele vai dar o resultado de -1 e significa que aquele numero nao tem no vetor

let pos = num.indexOf(2)
if (pos== -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}