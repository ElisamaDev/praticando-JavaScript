console.log("Praticando Condicionais");
const listaparaVistoCanada = new Array(
  `Lista Obrigatória para Passar no Visto Canadense`,
  `°Ingles`,
  `°Dinheiro suficiente`,
  `°Work Permit autorizado`,
  `°Passagens`
);

const idiomaVisto = true;
const temPassagemComprada = true;
const numero = 120000.0;
const numeroBRL = numero.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(numeroBRL);

console.log("Hora da Imigração: ");
console.log(listaparaVistoCanada);

if (idiomaVisto == true) {
  console.log("Inglês OK - Aprovado");
} else if (idiomaVisto == false) {
  console.log("Não fala Inglês - REPROVADO");
}
if (numero >= 100000.0) {
  console.log("Dinheiro Suficiente! Visto Aprovado!");
} else if (numero <= 100000.0) {
  console.log("Não a dinheiro suficiente! Visto Negado!");
}
