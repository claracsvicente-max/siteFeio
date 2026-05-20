import prompt from 'prompt-sync'
let ler = prompt();

console.log('informe suas tres notas de matemática')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let y = med(n1, n2, n3)

console.log('sua média em matemática é ' + y)

function med(n1, n2, n3){
    let x = (n1 + n2 + n3) / 3
    return x
}