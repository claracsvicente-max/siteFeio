import prompt from 'prompt-sync'
let ler = prompt()

console.log(`informe a capacidade do tanque 
e quantos litro de gasolina tem no tanque`)
let n1 = Number(ler())
let n2 = Number(ler())

let y = a(n1, n2)

console.log('o carro precisa ser abastecido. ' + y)

function a(n1, n2){
    let x = n1 / n2
    let xx = x >= 3
    return xx
}