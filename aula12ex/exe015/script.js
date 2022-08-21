function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criou uma tag img dinamicamente(sem usar o HTML)
        img.setAttribute('id', 'foto') //criou um id chamado foto pra tag img acima
        if (fsex[0].checked) {
            genero = 'um Homem'
            if (idade >=0 && idade <= 3) {
                //bb
                img.setAttribute('src', 'bb.png')
            } else if (idade > 3 && idade <= 7) {
                //criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade > 7 && idade <= 17) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade > 17 && idade <= 45) {
                //adolescente
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade > 45 && idade <= 65) {
                //adulto
                img.setAttribute('src', 'adultom.png')
            } else if (idade > 65) {
                //velho
                img.setAttribute('src', 'velhom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >=0 && idade <= 3) {
                //bb
                img.setAttribute('src', 'bb.png')
            }else if (idade > 3 && idade <= 7) {
                //criança
                img.setAttribute('src', 'criancaf.png')
            } else if (idade > 7 && idade <= 17) {
                //adolescente
                img.setAttribute('src', 'jovemf.png')
            } else if (idade > 17 && idade <= 45) {
                //adulta
                img.setAttribute('src', 'adolescentef.png')
            }else if (idade > 45 && idade <= 65) {
                //mulher mais experiente
                img.setAttribute('src', 'adultof.png')
            }else if (idade > 65) {
                //idosa
                img.setAttribute('src', 'velhof.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}