let a = 0
while(a < 18) {

 a = parseInt(prompt("Insira a sua idade: "))

 if(a<18){
    console.log("Idade invalida (Idade mínima = 18 anos)")
 }
}
console.log("Idade válida")