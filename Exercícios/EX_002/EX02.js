const aumentar = document.querySelector("#aumentar");
const diminuir = document.querySelector("#diminuir");
const zerar = document.querySelector("#zerar");
const Contar = document.querySelector("#contador");

let contador = 0;

function aumentContador() {
    contador++;
    Contar.textContent = contador
}

function diminuirContador() {
    contador--;
    Contar.textContent = contador

    if (contador < 0) {
        document.querySelector("#alert").innerHTML =
        `<div class="alert alert-danger fade show" role="alert">
        <span> Não é possível.</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`
    } else {
        contador--;
    } return true;
}

function zerarContador() {
    contador = 0;
    Contar.textContent = contador
}


aumentar.addEventListener("click", aumentContador);
diminuir.addEventListener("click", diminuirContador);
zerar.addEventListener("click", zerarContador);