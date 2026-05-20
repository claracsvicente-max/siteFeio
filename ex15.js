import prompt from 'prompt-sync'
let ler = prompt()

console.log('qual o valor total de sua compra e em quantas vezes você quer parcelar')
let n1 = Number(ler())
let n2 = Number(ler())

let y = par(n1, n2)

console.log(`sua compra de R$${n1} parcelada em ${n2}x de R$${y} foi comcluida`)

function par(n1, n2){
    let x = n1 / n2
    return x
}