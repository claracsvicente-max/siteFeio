import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe sua faculdade')
let t = ler()

console.log('informe se você é isento e se nao for informe a sua porcentagem de desconto')
let i = ler()
let n2 = Number(ler())

let x = me(t, i, n2)

console.log(x)

function me(t, i, n2){
    let tex = ''  

    if(i == 'sim'){
        tex = '0.00'
    }

    else if(t == 'si'){
        let d = 550.00 - (n2 / 100 * 550.00)
        tex = d
    }

    else if(t == 'ads'){
        let d2 = 750.00 - (n2 / 100 * 750.00)
        tex = d2
    }

    else if(t == 'cs'){
        let d3 = 1150.00 - (n2 / 100 * 1150.00)
        tex = d3
    }

    else if(t == 'ec'){
        let d4 = 1300.00 - (n2 / 100 * 1300.00)
        tex = d4
    }

    else if(t == 'es'){
        let d5 = 950.00 - (n2 / 100 * 950.00)
        tex = d5
    }

    else{
        tex = 'faculdade inexistente'
    }

    return tex
}