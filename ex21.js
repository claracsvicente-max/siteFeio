import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe com quantos graus você se encotra')
let n1 = Number(ler())

let y = f(n1)

console.log('voce está com febre. ' + y)

function f(n1){
    let x = n1 >= 37.3
    return x
}