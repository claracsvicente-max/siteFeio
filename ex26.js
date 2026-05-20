import prompt from 'prompt-sync'
let ler = prompt()

console.log('qual a cor do semaforo')
let n1 = ler()

let y = p(n1)

console.log('pode atravesar. ' + y)

function p(n1){
    let x = n1 == 'verde'
    return x
}