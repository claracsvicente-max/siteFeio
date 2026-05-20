import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe quantas gramas deu o seu sorvete')
let n1 = Number(ler())

let a = g(n1)

console.log(a)

function g(n1){
    let tex = ''

    if(n1 < 1000 && n1 > 0){
        let x = (n1 / 100)* 3.50
        tex = 'o total a pagar e ' + x
    }

    else if(n1 >= 1000){
        let y = (n1 / 100) * 3
        tex = 'o total a pagar é ' + y
    }

    else{
        tex = 'peso invalido'
    }

    return tex
}