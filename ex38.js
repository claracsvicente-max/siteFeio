import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe suas tres notas bimestrais')
let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let a = med(n1, n2, n3)
let b = si(a)

console.log(`a media do aluno é ${a}
situaçõ do aluno: ${b}`)

function med(n1, n2, n3){
    let x = (n1 + n2 + n3) / 3
    return x
}

function si(med){
    let tex = ''

    if(med >= 8){
        tex = 'aporvado com sucesso'
    }

    else if(med >= 6 && med < 8){
        tex = 'aprovado'
    }

    else if(med >= 3 && med < 6){
        tex = 'recupeção'
    }

    else if(med < 3 && med != 0){
        tex = 'reprovado'
    }

    else if(med == 0){
        tex = 'desistente'
    }

    return tex
}