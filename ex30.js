import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe o diametro e a altura do cilndro 1')
let c1 = Number(ler())
let c2 = Number(ler())

console.log('informe o diametro e a altura do cilindro 2')
let c3 = Number(ler())
let c4 = Number(ler())

let um = ci1(c1, c2)
let dois = ci2(c3, c4)
let tres = a(ci1, ci2)

console.log(`o primeiro cilindo tem volume de ${um}
o segundo cilindro tem volume de ${dois}
é possivel transferir o primeiro para o segundo. ${tres}`)


function ci1(c1, c2){
    let x = (c1 / 2) * (c1 / 2) * c2 * 3.14
    return x 
}

function ci2(c3, c4){
    let y = (c3 / 2) * (c3 / 2) * c4 * 3.14
    return y
}

function a(ci1, ci2){
    let b = ci1 <= ci2
    return b
}