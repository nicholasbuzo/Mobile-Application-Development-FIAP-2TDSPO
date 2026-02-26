"use strict";
// Criando type produto
Object.defineProperty(exports, "__esModule", { value: true });
// Criando aray de produtos
const produtos = [
    {
        id: 1,
        nome: "Kefine Klean",
        preco: 219.9,
        categoria: "IEMs",
        emEstoque: true,
    },
    {
        id: 2,
        nome: "Hifiman HE400se",
        preco: 321.5,
        categoria: "Headphones",
        emEstoque: false,
    },
    {
        id: 3,
        nome: "Fosi SK02",
        preco: 449.9,
        categoria: "DACs/AMPs",
        emEstoque: true,
    },
];
// Criando função para exibir produtos
function exibirProduto(produto) {
    // Formata o preço no padrão brasileiro: R$ 5.999,00
    const precoFormatado = produto.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    // Define ícone e texto conforme disponibilidade
    const status = produto.emEstoque ? "✅ disponível" : "❌ indisponível";
    // Monta e retorna a string final
    return `[${produto.categoria}] ${produto.nome} - ${precoFormatado} ${status}`;
}
console.log("=== Catálogo de Produtos ===\n");
for (const produto of produtos) {
    console.log(exibirProduto(produto));
}
//# sourceMappingURL=index.js.map