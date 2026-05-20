import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a sua temperatra corporal')
let n1 = Number(ler())

let x = tem(n1)


console.log(`sua temperatura indica estado de ${x}`)

function tem(n1){
    let tex = ''

    if(n1 >= 41){
        tex = 'hipertermia'
    }

    else if(n1 >= 39.6 && n1 < 41){
        tex = 'febre alta'
    }

    else if(n1 >= 37.6 && n1 < 39.6){
        tex = 'febre'
    }

    else if(n1 >= 36 && n1 < 37.6){
        tex = 'normal'
    }

    else{
        tex = 'hipotermia'
    }

    return tex
}