import prompt from 'prompt-sync'
let ler = prompt()

console.log('Qual é o personagem de Friends que trabalha com TI?')
let n1 = ler()

let a = fre(n1)

console.log('resposta correta. ' + a)

function fre(n1){
    let x = n1 == 'chandler'
    return x
}