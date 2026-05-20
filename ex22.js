import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe suas notas bimestrais')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let y = n(m)
let b = m(n1, n2, n3)

console.log('a média do aluno é ' + b)
console.log('o aluno passou ' + y)

function m(n1, n2, n3){
    let med = (n1 + n2 + n3) / 3
    return med
}

function n(med){
    let x = m > 5
    return x
}