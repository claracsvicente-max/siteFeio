import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe sua nota, a nota de corte e a nota minima para aprovacao')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let x = si(n1, n2, n3)

console.log(x)

function si(n1, n2, n3){
    let tex = ''

    if(n1 < n2){
        tex = 'candidato não passou'
    }

    else if(n1 >= n3){
        tex = 'candiato aprovado'
    }

    else if(n1 > n2 && n1 < n3){
        tex = 'candidato na lista de espera'
    }

    return tex
}