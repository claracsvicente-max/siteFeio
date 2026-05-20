import prompt from 'prompt-sync'
let ler = prompt();

console.log('informe o valor total da compra e o desconto')
let n1 = Number(ler())
let n2 = Number(ler())

let y = des(n1, n2)

console.log('o valor final é de ' + y)

function des(n1, n2){
    let x = n1 - n2
    return x
}