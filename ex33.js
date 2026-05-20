import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe o ganho bruto mensal e os gastos mensais')
let gan = Number(ler())
let gas = Number(ler())

let x = or(gas, gan)

console.log(x)

function or(gas, gan){
    let tex = ''

    if(gan >= gas){
        tex = 'voce está dentro do orçamento'
    }

    else if(gan < gas){
        tex = 'você esrá fora do orçamento'
    }

    return tex
}