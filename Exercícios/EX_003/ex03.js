
const pais = document.querySelector("#PaisSelecionado");
const infoPais = document.querySelector("#paisSelecionadoMostrar");

const informacoesPaises = {
    brasil: {
        nome:"Brasil",
        capital: "Brasília",
        populacao: "209 milhões",
        idioma: "Português"
    },
    eua: {
        nome:"Estados Unidos da América",
        capital: "Washington, D.C.",
        populacao: "331 milhões",
        idioma: "Inglês"
    }, 
    canada: {
        nome:"Canadá",
        capital: "Ottawa",
        populacao: "37 milhões",
        idioma: "Inglês e Francês"
    },
}

function AtualizarPais() {
    const paisValor = pais.value;
    const paisInfo = informacoesPaises[paisValor];

    infoPais.textContent = `Pais: ${paisInfo.nome}, Capital: ${paisInfo.capital}, População: ${paisInfo.populacao}, Idioma: ${paisInfo.idioma}`
};

pais.addEventListener("change", AtualizarPais);