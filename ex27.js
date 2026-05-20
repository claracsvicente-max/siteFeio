import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe seu peso e sua altura')
let n1 = Number(ler())
let n2 = Number(ler())

let b = imc(n1, n2)
let a = acima(imc)

console.log(`seu imc é ${b}
esta acima do peso ideal. ${a}`)

function imc(n1, n2){
    let x = n1 / (n2 * n2)
    return x
}

function acima(imc){
    let y = imc > 25
    return y
}