import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe seus ganhos mensais e sues gastos mensais')
let ganho = Number(ler())
let gasto = Number(ler())

let x = or(ganho, gasto)

console.log(x)

function or(ganho, gasto){
    let o = (gasto / ganho) * 100

    let tex = ''

    if(gasto > ganho){
        tex = 'Orçamento comprometido! Hora de rever seus gastos!'
    }

    else if(o >= 81 && o <= 100){
        tex = 'Cuidado, seu orçamento pode ficar comprometido!'
    }

    else if(o >= 51 && o <= 80){
        tex = 'Atenção, melhor conter os gastos!'
    }

    else if(o >= 21 && o <= 50){
        tex = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!'
    }

    else if(o >= 0 && 0 <= 20){
        tex = 'Parabéns, está gerenciando bem seu orçamento!'
    }

    return tex
}