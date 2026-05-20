import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe um número')
let n1 = Number(ler())

let x = dobro(n1)

console.log('o dobro é ' + x)

function dobro(n1){
    let d = n1 * 2
    return d
}