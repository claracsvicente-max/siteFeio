import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe dois numeros')
let n1 = Number(ler())
let n2 = Number(ler())

let x = soma(n1, n2)

console.log('a soma é ' + x)

function soma(n1, n2){
    let s = n1 + n2
    return s
}