import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe o nnumero  do mes')
let n1 = Number(ler())

let x = me(n1)

console.log(x)

function me(n1){
    let tex = ''

    if(n1 == 1){
        tex = 'janeiro'
    }

    else if(n1 == 2){
        tex = 'fevereiro'
    }

    else if(n1 == 3){
        tex = 'março'
    }

    else if(n1 == 4){
        tex = 'abril'
    }

    else if(n1 == 5){
        tex = 'maio'
    }

    else if(n1 == 6){
        tex = 'junho'
    }

    else if(n1 == 7){
        tex = 'julho'
    }

    else if(n1 == 8){
        tex = 'agosto'
    }

    else if(n1 == 9){
        tex = 'setembro'
    }

    else if(n1 == 10){
        tex = 'outubro'
    }

    else if(n1 == 11){
        tex = 'novembro'
    }

    else if(n1 == 12){
        tex = 'dezembro'
    }

    else{
        tex = 'mes invalido'
    }

    return tex
}