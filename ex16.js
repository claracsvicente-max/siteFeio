import prompt from 'prompt-sync'
let ler = prompt()

console.log('qual a capacidade de litros do seu carro')
let n1 = Number(ler())

console.log('quantos qulometros seu carro percorre por litro')
let n2 = Number(ler())

console.log('quantos quilomestros tem a viajem')
let n3 = Number(ler())

let y = car(n1, n2, n3)

console.log('você precisa parar ' + y + ' vezes para abastecer')

function car(n1, n2, n3){
    let x = Math.ceil(n3 / (n1 * n2))
    return x
}