import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe o dia, numero do dia da semana, mes e ano')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())
let n4 = Number(ler())

let x = d(n2)
let y = m(n3)

console.log(`enviado ${x}, ${n1} de ${y} de ${n4}`)

function d(n2){
    let tex = ''

    if(n2 == 0){
        tex = 'domingo'
    }

    else if(n2 == 1){
        tex = 'segunda'
    }

    else if(n2 == 2){
        tex = 'terça'
    }

    else if(n2 == 3){
        tex = 'quarta'
    }

    else if(n2 == 4){
        tex = 'quinta'
    }

    else if(n2 == 5){
        tex = 'sexta'
    }

    else if(n2 == 6){
        tex = 'sabado'
    }

    return tex
}

function m(n3){
    let tex2 = ''

    if(n3 == 1){
        tex2 = 'janeiro'
    }

    else if(n3 == 2){
        tex2 = 'fevereiro'
    }

    else if(n3 == 3){
        tex2 = 'março'
    }

    else if(n3 == 4){
        tex2 = 'abril'
    }

    else if(n3 == 5){
        tex2 = 'maio'
    }

    else if(n3 == 6){
        tex2 = 'junho'
    }

    else if(n3 == 7){
        tex2 = 'julho'
    }

    else if(n3 == 8){
        tex2 = 'agosto'
    }

    else if(n3 == 9){
        tex2 = 'setembro'
    }

    else if(n3 == 10){
        tex2 = 'outubro'
    }

    else if(n3 == 11){
        tex2 = 'novembro'
    }

    else if(n3 == 12){
        tex2 = 'dezembro'
    }

    return tex2
}