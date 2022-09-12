function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor digite um número!')
    } else {
        let n = Number(num.value) //convertendo o valor de num para numero
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option') //criando um elemento html de forma dinâmica
            item.text = `${n} * ${c} = ${n*c}` //item.text = parte de dentro do option, que será igual a numero digitado vezes o contador
            item.value = `tab${c}` //indiferente para o Javascript mas importante para uma linguagem como o PHP
            tab.appendChild(item) //adicionar um elemento filho que será o "item"
            c++
        }
    }
    
}