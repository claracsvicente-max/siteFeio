import prompt from 'prompt-sync'
let ler = prompt()

console.log('quantos quilos tem o saco de arroz')
let n1 = Number(ler())

let y = ki(n1)

console.log(`o saco tem ${y} gramas`)

function ki(n1){
    let x = n1 * 1000
    return x
}