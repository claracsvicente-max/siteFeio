import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe duas cores primarias')
let c1 = ler()
let c2 = ler()

let x = c(c1, c2)

console.log('a combinação é: ' + x)

function c(c1, c2){
    let tex = ''

    if(c1 == 'azul' && c2 == 'vermelho' || c1 == 'vermelho' && c2 == 'azul'){
        tex = 'roxo'
    }

    else if(c1 == 'amarelo' && c2 == 'azul' || c1 == 'azul' && c2 == 'amarelo'){
        tex = 'verde'
    }

    else if(c1 == 'vermelho' && c2 == 'amarelo' || c1 == 'amarelo' && c2 == 'vermelho'){
        tex =  'laranja'
    }

    else if(c1 == 'vermelho' && c2 == 'vermelho'){
        tex = 'vermelho'
    }

    else if(c1 == 'amarelo' && c2 == 'amarelo'){
        tex = 'amarelo'
    }

    else if(c1 == 'azul' && c2 == 'azul'){
        tex = 'azul'
    }

    else{
        tex = 'nula'
    }

    return tex
}