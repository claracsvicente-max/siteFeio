import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe um numero')
let n3 = Number(ler())

let a = met(n3)

console.log('a metade é ' + a)

function met(n3){
    let x = n3 / 2
    return x
}