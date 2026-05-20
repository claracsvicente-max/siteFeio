import prompt from 'prompt-sync'
let ler = prompt();

console.log('informe o lado do quadrado')
let n1 = Number(ler())

let ar = area(n1)

console.log('a area é ' + ar)

function area(n1){
    let k = n1 * n1
    return k
}