//Catalogo dos filmes
//B.1.
const catalogo = [
    {
        id: 1,
        titulo: "Devoradores de Estrelas",
        tipo: "filme",
        ano: 2026,
        generos: ["ficção científica", "aventura", "drama"],
        nota: 10.0,
        assistido: true
    },
    {
        id: 2,
        titulo: "Michael",
        tipo: "filme",
        ano: 2026,
        generos: ["cinebiografia musical", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 3,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["Ficção Científica", "Aventura"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 4,
        titulo: "The Pitt",
        tipo: "serie",
        ano: 2025,
        generos: ["Drama"],
        nota: 9.6,
        assistido: true
    },
    {
        id: 5,
        titulo: "Pulp Fiction",
        tipo: "filme",
        ano: 1994,
        generos: ["Crime", "Thriller"],
        nota: 8.9,
        assistido: false
    },
    {
        id: 6,
        titulo: "The Drama",
        tipo: "filme",
        ano: 2026,
        generos: ["drama", "romance"],
        nota: 8.0,
        assistido: true
    }
];
//Informações do console
//B.2.
console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItem = catalogo[2];
if (terceiroItem.generos && terceiroItem.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero ou nenhum cadastrado.");
}

//Iterações
//B.3.
//foreach
console.log("--- Lista dos Titulos ---");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
//map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);
//filter
const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log(`Existem ${naoAssistidos.length} itens não assistidos.`);
//find
const nota = catalogo.find(item => item.nota >= 9);
if (nota) {
    console.log(`Nota 9 ou maior encontrada: ${nota.titulo} (Nota: ${nota.nota})`);
} else {
    console.log("Nenhum item com nota superior a 9 encontrado.");
}
//reduce
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);
console.log(`Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);
//some e every
const Antigo = catalogo.some(item => item.year < 2000);
const Genero = catalogo.every(item => item.generos.length >= 1);

console.log(`Existe algum item anterior ao ano 2000? ${Antigo ? "Sim" : "Não"}`);
console.log(`Todos os itens possuem pelo menos um gênero? ${Genero ? "Sim" : "Não"}`);
//saida tela
//B.4.
const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;
const qtdNaoAssistidos = catalogo.filter(item => !item.assistido).length;

const mediaGeralNotas = catalogo.reduce((acc, item) => acc + item.nota, 0) / totalItens;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota) 
    .slice(0, 3); 

const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</p>
    <p><strong>Não assistidos:</strong> ${qtdNaoAssistidos}</p>
    <p><strong>Média geral de notas:</strong> ${mediaGeralNotas.toFixed(2)}</p>
    
    <h3>Top 3 Avaliações</h3>
    <ul>
        ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join('')}
    </ul>
`;
