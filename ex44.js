import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe dois numeros')
let n1 = Number(ler())
let n2 = Number(ler())

console.log('informe a operação matematica')
let t = ler()

let x = o(n1, n2, t)

console.log(`o resultado da operação ${t} é ${x}`)

function o(n1, n2, t){
    let tex = ''

    if(t == 'soma'){
        let s = n1 + n2
        tex = s
    }

    else if(t == 'subtracao'){
        let s1 = n1 - n2
        tex = s1
    }

    else if(t == 'multiplicacao'){
        let m = n1 * n2
        tex = m
    }

    else if(t == 'divisao'){
        let d = n1 / n2
        tex = d
    }

    else if(t == 'resto da divisao'){
        let r = n1 % n2
        tex = r
    }

    else if(t == 'potencia'){
        let p = n1 ** n2
        tex = p
    }

    else{
        tex = 'operação não suportada'
    }

    return tex
}