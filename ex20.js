import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe seu salário base, bonos mensal em porcentagem e total de desconto em reais')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let x = s(n1, n2, n3)

console.log('seu salario liquido é de R$' + x)

function s(n1, n2, n3){
    let s1 = n2 / 100 * n1
    let s2 = (n1 - (n3 - s1))
    return s2
}