import prompt from 'prompt-sync'
let ler = prompt();

console.log('informe a altura do triangulo')
let n1 = Number(ler())

console.log('informe a base do triangulo')
let n2 = Number(ler())

let y = tri(n1, n2)

console.log('a area do triangulo é ' + y)

function tri(n1, n2){
    let x = (n1 * n2) / 2
    return x
}