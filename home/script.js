
// let nome = "Diogo Felipe";
// let idade = 25;

// // CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// // INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`)


// console.log(typeof nome)
// console.log(typeof idade)

// let soma = "5" + 3 // 53 string 
// let sub = "5" - 3 // 2 number

// console.log(soma)
// console.log(sub)

// console.log(typeof soma)
// console.log(typeof sub)

// let numero = "ab" // string

// let convertido = Number(numero)

// console.log(typeof convertido)


// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR
// "10" == 10 -> true

// VALIDA IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false

// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1: dhfjdshfkjdsh
//             break;
// }

// ESTRUTURA DE REPETIÇÃO
let frutas = ["Maçã", "Banana", "Acerola", "Uva"]

console.log(frutas);


frutas.forEach(function(fruta) {
    console.log("Nome: " + fruta);
})

frutas.forEach(fruta => console.log(fruta))