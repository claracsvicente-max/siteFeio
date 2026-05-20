import prompt from 'prompt-sync'
let ler = prompt()

console.log('quantos dolares você quer converter hoje')
let n1 = Number(ler())

let y = dol(n1)

console.log('voce tem agora R$' + y)

function dol(n1){
    let x = n1 * 5.16
    return x
}