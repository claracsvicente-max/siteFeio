import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe o numero do dia da semana')
let n1 = Number(ler())

let x = se(n1)

console.log(x)

function se(n1){
    let tex = ''

    if(n1 == 0){
        tex = 'domingo'
    }

    else if(n1 == 1){
        tex = 'segunda'
    }

    else if(n1 == 2){
        tex = 'terca'
    }

    else if(n1 == 3){
        tex = 'quarta'
    }

    else if(n1 == 4){
        tex = 'quinta'
    }

    else if(n1 == 5){
        tex = 'sexta'
    }

    else if(n1 == 6){
        tex = 'sabado'
    }

    else{
        tex = 'dia da semana invalido'
    }

    return tex
}