import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe quantos açais pequenos, médios e grandes você irá comprar')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let b = a(n1, n2, n3)

console.log('o total a pagar é R$' + b)

function a(n1, n2, n3){
    let x = (n1 * 13.50) + (n2 * 15.00) + (n3 * 17.50)
    return x
}