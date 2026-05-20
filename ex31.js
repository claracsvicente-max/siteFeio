import prompt from 'prompt-sync'
let ler = prompt()

console.log(`Qual tipo de ingresso voce ira coprar
INTEIRA_
MEIA-ENTRADA_`)
let tex = ler()

console.log('informe quantos ingressos você irá comprar')
let n = Number(ler())

let y = x(tex, n)

console.log(y)

function x(tex, n){
    let t = ''

    if(tex == 'meia'){
        let um = n * 14.25
        t = 'o total a pagar é R$' + um
    }
    
    else{
        let dois = n * 28.50
        t = 'o total a pagar é R$' + dois
    }

    return t
}