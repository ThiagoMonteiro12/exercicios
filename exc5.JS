let n1 = (prompt("Insira o primeiro número"));
let n2 = (prompt("Insira o segundo número"));
let n3 = (prompt("Insira o terceiro número número"));

if (n1<n2 && n2<n3){
    alert("O número está em ordem crescente");
}
else if (n1>n2 && n2>n3){
    alert("O número está em ordem decrescente");
}
else{
    alert("O número não está em uma ordem lógica")
}