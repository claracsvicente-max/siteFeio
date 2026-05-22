import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe todas as suas notas bimestrais')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

console.log('informe sua quantidade de faltas')
let fa = Number(ler())

let a = x(n1, n2, n3, fa)

console.log('a situação do aluno é: ' + a)

function x(n1, n2, n3, fa){
    let med = (n1 + n2 + n3) / 3

    let tex = ''

    if(med >= 8 && fa <= 30){
        tex = 'aprovado com sucesso'
    }

    else if(med >= 6 && med < 8 && fa <= 30){
        tex = 'aprovado'
    }

    else if(med >= 3 && med < 6 && fa <= 30){
        tex = 'recuperação'
    }

    else if(med < 3 && med != 0){
        tex = 'reprovado'
    }

    else if(med == 0){
        tex = 'desitente'
    }

    else if(med >= 8 && fa > 30 || med >= 6 && med < 8 && fa > 30 || med >= 3 && med < 6 && fa > 30){
        tex = 'reprovado'
    }

    return tex
}