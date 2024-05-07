let nota1 = parseInt(prompt("Insira a primeira nota:"));
let nota2 = parseInt(prompt("Insira a segunda nota:"));
let nota3 = parseInt(prompt("Insira a terceira nota:"));
let nota4 = parseInt(prompt("Insira a quarta nota:"));

let nota = (nota1 + nota2 + nota3 + nota4) / 4;

if(nota >= 7) {
    alert("Parabéns!você passou");
}

else if(nota < 7 && notat >= 5){
    alert("Esta de recuperação, se importe mais na próxima");
}

else {
    alert("Você reprovou.");
}