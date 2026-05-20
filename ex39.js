import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe seu peso e sua altura')
let ps = Number(ler())
let al = Number(ler())

let a = imc(ps, al)
let b = cla(a)

console.log(`seu imc é de ${a}
sua clasificação é ${b}`)

function imc(ps, al){
    let x = ps / (al * al) 
    return x
}

function cla(imc){
    let tex = ''

    if(imc >= 40){
        tex = 'obesidade grau III'
    }

    else if(imc >= 35 && imc < 40){
        tex = 'obesidade grau II'
    }

    else if(imc >= 30 && imc < 35){
        tex = 'obesidade grau I'
    }

    else if(imc >= 25 && imc < 30){
        tex = 'sobrepeso'
    }

    else if(imc >= 18.5 && imc < 25){
        tex = 'peso normal'
    }

    else if(imc < 18.5){
        tex = 'abaixo do peso'
    }

    return tex
}