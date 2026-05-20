import prompt from 'prompt-sync'
let  ler = prompt() 

console.log('informe um numero')
let n2 = Number(ler())

let x = triplo(n2)

console.log('o triplo é ' + x)

function triplo(n2){
    let t = n2 * 3
    return t
} 