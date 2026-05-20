import prompt from 'prompt-sync'
let ler = prompt();

console.log('Informe quantos lados tem um octogono')
let n1 = Number(ler())

let y = oct(n1)

console.log('o perimetro do octagono é ' + y)

function oct(n1){
    let x = n1 * 8
    return x
}