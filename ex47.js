import prompt from 'prompt-sync'
let ler = prompt()

console.log(`informe quantos ingressos você quer hoje
MEIA-ENTRADA
INTEIRA`)
let i = Number(ler())
let m = Number(ler())

console.log('informe o dia da semana')
let s = ler()

console.log('informe se o filme é nacional')
let n = ler()

let a = x(i, m, s, n)

console.log(a)

function x(i, m, s, n){
    let tex = ''

    if(s == 'quarta' && n == 'nao'){
        let d =  (i + m) * 14.25
        tex = `total a se pagar é R$${d}`
    }

    else if(n == 'sim'){
        let d2 = (i + m) * 5
        tex = `o total a se pagar é R$${d2}`
    }

    else if(s != 'quarta' && n == 'nao'){
        let d3 = (i * 28.50) + (m * 14.25)
        tex = `o total a se pagar R$${d3}`
    }

    return tex
}