import prompt from 'prompt-sync'
let ler = prompt();

console.log('informe a altura do retangulo')
let n1 = Number(ler())

console.log('informe a base do retangulo')
let n2 = Number(ler())

let x = are(n1, n2)

console.log('a area do retangulo é ' + x)

function are(n1, n2){
    let h = (n1 * n2) 
    return h
}