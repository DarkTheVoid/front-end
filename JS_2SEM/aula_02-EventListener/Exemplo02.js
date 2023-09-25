const visor = document.querySelector("#visor");

//Adicionando um ouvinte do evento para keydown no documento

document.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
        visor.textContent = "Tecla A pressiona"
    } else if (event.key === "d" || event.key === "D") {
        visor.textContent = "Tecla D pressiona"
    }

    visor.textContent = event.key;
})