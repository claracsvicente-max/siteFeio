import prompt from 'prompt-sync'
let ler = prompt()

console.log(`informe o nome do livro
quantas paginas o livro possui
e em quantos segundos voce le cada pagina`)
let n1 = ler()
let n2 = Number(ler())
let n3 = Number(ler())

let a = x(n2, n3)

console.log(`voce lera ${n1} em ${a} horas`)

function x(n2, n3){
    let t = (n2 * n3) / 3600
    return t
}