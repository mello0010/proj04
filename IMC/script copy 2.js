let peso = Number(prompt("Insira seu peso"));
let altura = Number(prompt("Insira sua altura"));

let imc = peso / (altura * altura)

if (imc < 18.5) {
    alert("abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal")
} else if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso")
} alert {
}