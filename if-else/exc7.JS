let preco = parseFloat(prompt("Insira o valor da compra: "))

if(preco <= 100.00){
   alert("O produto custa: " + preco)
}
else if(preco >= 100 && preco <= 200) {
let precoV = preco * 0.9;

    alert("O produto custa: " + precoV)
}
else if(preco > 200) {
    let precoV = preco * 0.8;
    
        alert("O produto custa: " + precoV)
 }