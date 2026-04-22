function calcularImposto(valorProduto) {
    let imposto;
    let valorFinal;

    if (valorProduto > 50) {
        imposto = valorProduto * 0.60;
    } else {
        imposto = valorProduto * 0.17;
    }

    valorFinal = valorProduto + imposto;

    return {
        valorOriginal: valorProduto,
        imposto: imposto,
        valorFinal: valorFinal
    };
}

// Exemplo de uso:
let produto = 100; // valor do produto
let resultado = calcularImposto(produto);

console.log("Valor original: $" + resultado.valorOriginal.toFixed(2));
console.log("Imposto: $" + resultado.imposto.toFixed(2));
console.log("Valor final: $" + resultado.valorFinal.toFixed(2));