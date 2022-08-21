var agora = new Date() //sempre date pra pegar data, hora, dia, mês...
var hora = agora.getHours() //var hora recebe a var agora(que tem o elemento date) com o parametro que puxa a hora do sistema
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}

//aqui temos no exemplo uma condição aninhada
