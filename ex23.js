import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a altura e largura do retnagulo 1')
let n1 = Number(ler())
let n2 = Number(ler())

console.log('informe a altura e largura do retangulo 2')
let n3 = Number(ler())
let n4 = Number(ler())

let a = t1(n1, n2)
let b = t2(n3, n4)
let c = com(t1, t2)

console.log('o primeiro retangulo tem area de ' + a)
console.log('o segundo retangulo tem area de ' + b)
console.log('eles sao iguais ' + c)

function t1(n1, n2){
    let x1 = n1 * n2
    return x1
}

function t2(n3, n4){
    let x2 = n3 * n4
    return x2
}

function com(t1, t2){
    let y = t1 == t2
    return y
}