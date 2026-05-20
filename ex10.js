import prompt from 'prompt-sync'
let ler = prompt();

console.log('Informe todas as suas notas bimestrais em potugues')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())
let n4 = Number(ler())
let n5 = Number(ler())

let y = med(n1, n2, n3, n4, n5)

console.log('a média é ' + y)

function med(n1, n2, n3, n4, n5){
    let x = (n1 + n2 + n3 + n4+ n5) / 5
    return x
}