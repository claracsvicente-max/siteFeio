import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe um numero')
let n1 = Number(ler())

let y = p(n1)

console.log('o numero é par. ' + y)

function p(n1){
    let x = n1 % 2
    let xx = x != 1
    return xx
}