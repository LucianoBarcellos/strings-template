//let pessoa = prompt("qual e seu nome?").toUpperCase()
//let cor = prompt("qual é a sua cor favorita?")
//let citacao = prompt("Qual é sua citação favorita")

//let fraseConcatenacao = "A cor favorita de " + pessoa + "e" + cor + ". \"" + citacao + "\""
//let fraseTemplateString = `A cor favorita de ${pessoa} e ${cor}. "${citacao}"`

//console.log("concatenacao: ", fraseConcatenacao)
//console.log("templeteS tring:", fraseTemplateString)

//let fraseQuebraLinha = "nome: " + pessoa + "\ncor favorita: " + cor

//let fraseQuebraLinhaTemplateString = `nome: ${pessoa} \ncor favorita: ${cor}`

//console.log(fraseQuebraLinhaTemplateString)

//console.log("luciano seu".length)//.toUpperCase()

//console.log(pessoa.length)

//console.log(pessoa.includes("A"));


let nome = prompt("digitie seu nome:")
let email = prompt("digite seu email:")


console.log(`o ${email} foi cadastrado com sucesso. Boas vindas ${nome}`)
console.log(`O nome ${nome} tem ${nome.length} numeros de caracteres`)

console.log(`o ${email} foi cadastrado com sucesso. Boas vindas ${nome}`.replaceAll("r", "x").toLowerCase())

console.log(email.includes("@"))