import prompt from 'prompt-sync'
let ler = prompt()

console.log('quantos açais você irá commprar hoje')
let n1 = Number(ler())

let y = a(n1)

console.log('total à pagar R$' + y)

function a(n1){
    let x = n1 * 13.5
    return x
}