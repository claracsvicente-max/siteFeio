import prompt from 'prompt-sync'
let ler = prompt()

console.log('inorme o tamanho dos lados do triangulo')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let x = t(n1, n2, n3)

console.log(x)

function t(n1, n2, n3){
    let tex = ''

    if(n1 == n2 && n1 == n3 && n2 == n3){
        tex = 'é um triangulo equilatero'
    }

    else if(n1 == n2 && n1 != n3 && n2 != n3 || n1 != n2 && n1 != n3 && n2 == n3){
        tex = 'é um triangulo isoceles'
    }

    else if(n1 != n2 && n2 != n3 && n1 != n3){
        tex = 'é um triangulo escaleno'
    }

    return tex
}