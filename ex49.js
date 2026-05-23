import prompt from 'prompt-sync'
import random from 'random'
let ler = prompt()

console.log('você escolhe par ou impar')
let t = ler()

console.log('escolha um número de 1 a 5')
let n1 = Number(ler())

let n2 = random.int(1, 6)

let x = jogo(t, n1, n2)

console.log(`jogador pediu ${t}
jogador ${n1} x maquina ${n2}

${x}`)

function jogo(t, n1, n2){
    let tex = ''

    if(t == 'par'){
        let v = (n1 + n2) % 2

        if(v == 0){
            tex = 'jogador venceu'
        }

        else if(v == 1){
            tex = 'maquina venceu'
        }
    }

    else if(t == 'impar'){
        let v = (n1 + n2) % 2

        if(v == 0){
            tex = 'maquina venceu'
        }

        else if(v == 1){
            tex = 'jogador venceu'
        }
    }

    return tex
}