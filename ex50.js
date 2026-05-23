import prompt from 'prompt-sync'
import random from 'random'
let ler = prompt()

console.log(`vamos jogar jokenpo!!!
escolha entre
PEDRA
PAPEL
TESOURA`)
let j = ler()

let m = random.int(1, 4)

let x = jogo(j, m)

console.log(`JOO-KENN-POO
    
${x}`)

function jogo(j, m){
    let tex = ``

    if(j == `pedra`){
        if(m == 1){
            tex = `jogador pedra X maquina pedra
        empate`
        }

        else if(m == 2){
            tex = `joador pedra X maquina papel
        maquina venceu`
        }

        else if(m == 3){
            tex = `jogador pedra X maquina tesoura
        jogador venceu`
        }
    }

    else if(j == 'papel'){
        if(m == 1){
            tex = `jogador papel X maquina pedra
        jogador venceu`
        }

        else if(m == 2){
            tex = `joogador papel X maquina papel
        empate`
        }

        else if(m == 3){
            tex = `jogador papel X maquina tesoura
        maquina venceu`
        }
    }

    else if(j == 'tesoura'){
        if(m == 1){
            tex = `jogador tesoura X maquina pedra
        maquina venceu`
        }

        else if(m == 2){
            tex = `jogador tesoura X maquina papel
        jogador venceu`
        }

        else if(m == 3){
            tex = `jogador tesoura X maquina tesoura
        empate`
        }
    }

    return tex
}