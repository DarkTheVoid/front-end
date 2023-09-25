/*
var Perfil = {
    Nome: document.getElementById('NomeCompleto').value,
    Idade: document.getElementById('Idade').value,
    Cidade: document.getElementById('Cidade').value,
}*/


var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function Enviar() {

    var Nome = document.querySelector('#NomeCompleto').value;
    var Idade = parseInt(document.querySelector('#Idade').value);
    var Cidade = document.querySelector('#Cidade').value;

    var ValidarCampos = validar(Nome, Idade, Cidade);
    console.log(ValidarCampos);
    if (ValidarCampos == true) {
        barraProgresso.style.display = "block";
        barra(Nome, Idade, Cidade);
    }
}


function validar(Nome, Idade, Cidade) {
    if (Nome == "" || Idade == "" || Cidade == "") {
        document.querySelector("#resultado").innerHTML =
            `<div class="alert alert-danger fade show" role="alert">
             <span> Certifique-se de que todos os campos foram preenchidos.</span>
             <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
             </div>`;
        return false
    } else if (Idade < 0 || Idade >= 150) {
        document.querySelector("#resultado").innerHTML =
            `<div class="alert alert-success fade show" role="alert">
    <span> Idade inválida</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`
        return false;
    } else {
        return true
    }
}

//Barra de progresso
function barra(Nome, Idade, Cidade) {
    var progresso = 0;
    var barra = document.querySelector(".progress-bar");

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";

            document.querySelector("#resultado").innerHTML = `<div class="alert alert-success fade show" role="alert">
            <span>informações: ${Nome}, ${Idade} anos de idade, mora na cidade de ${Cidade}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
        } else {
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 50);; //aumenta a cada 50 milisegundos
}