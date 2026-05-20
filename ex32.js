import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a cor do farol no momento')
let cor = ler()

let x = fa(cor)

console.log(x)

function fa(cor){
    let tex = ''

    if(cor == 'vermelho'){
        tex = 'espere'
    }

    else if(cor == 'verde'){
        tex = 'atravesse'
    }

    else{
        tex = 'farol inoperante'
    }

    return tex
}