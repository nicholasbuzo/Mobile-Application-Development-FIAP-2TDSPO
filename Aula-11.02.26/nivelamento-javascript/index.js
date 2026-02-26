// A linha 10 e a linha 16 estão comentadas para que o código possa ser testado sem dar erros

// Exibindo uma mensagem

console.log("Olá, mundo! Este é um script JavaScript.");

// Criando variáveis

// Forma antiga, evitar
//var nome = "João"; // Funciona, mas não é recomendado
// Usado para valores que mudam
let idade = 25;
idade = 26; // Permitido
// Usado para valores constantes
const PI = 3.1415;
//PI = 3; // Erro! Não é permitido

// Tipos de dados primitivos

// String => Texto
let mensagem = "Olá, mundo!";
let nome = 'Carlos';
let frase = `Bem-vindo, ${nome}!`; // Template literal

// Number => Números
let idade2 = 25;
let preco = 19.99;
let negativo = -8;

// Boolean => Lógico (true or false)
let logado = true;
let maior = 18 > 20; // false

// null - Vazio intencional
let carrinho = null; // Definido pelo programador

// Undefined
let endereco; // JavaScript define como undefined automaticamente

// Arrays e Objetos

// Array => Lista ordenada de valores. Acessa elementos por índice (começando em 0). Útil para coleções homogêneas.
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // "Maçã"
console.log(frutas.length); // 3
frutas.push("Uva"); // Adiciona ao fim

// Objeto => Estrutura de dados com pares chave-valor. Ideal para representar entidades com propriedades.
let pessoa = { 
  nome: "Carlos", 
  idade: 30,
  ativo: true
};
console.log(pessoa.nome); // "Carlos"
console.log(pessoa["idade"]); // 30 (notação alternativa)

// Condicionais - if, else if, else

let hora = 14;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// switch - escolha entre diversas opções
let cor = "azul";
switch (cor) {
  case "vermelho":
    console.log("A cor escolhida foi vermelho.");
    break;
    // break => para o código caso a opção seja escolhida
  case "azul":
    console.log("A cor escolhida foi azul.");
    break;
  default:
    console.log("Cor não reconhecida.");
}

// Laços de repetição (Loops)

// for => repetição com contador, utilizado quando se sabe quantas vezes se deve repetir
for (let i = 0; i < 5; i++) { // contando de 0 à 4
  console.log("Contador:", i);
}

// while => repetição enquanto uma condição for verdadeira, usado quando se sabe apenas o momento que o código deve parar
let contador = 0;
while (contador < 3) { // contando até 2
  console.log("Número:", contador);
  contador++;
}

// Funções e Escopo
// Funções => Blocos de código reutilizáveis

// Função tradicional
function saudacao(nome) { // nome = parâmetro
  return "Olá, " + nome + "!";
}
console.log(saudacao("Maria")); // Função retorna uma mensagem

// Arrow Function => Forma moderna
const dobro = (numero) => numero * 2;
console.log(dobro(5));

// Escopo de variáveis
// Escopo global e local
let global = "Sou global"; // Atribúida fora da função, logo, a mesma existe no código todo
function testarEscopo() {
  let local = "Sou local"; // Atribuída dentro da função, logo, se a mesma for usada fora, quebrará o sistema
  console.log(global);
  console.log(local);
}
testarEscopo();
console.log(global);
// console.log(local); // Erro

// Callback => Uma função pode ser passada como parâmetro para outra função
function processar(callback) {
  console.log("Processando..."); // Mostra "Processando..."
  callback();
}
processar(() => console.log("Finalizado!")); // Executa a função recebida como parâmetro

// Função assíncrona
async function pegarDados() { // async => indica que a função retorna uma promessa

  return "Dados recebidos!";
}
pegarDados().then(console.log); // then => recebe o resultado quando a função termina
