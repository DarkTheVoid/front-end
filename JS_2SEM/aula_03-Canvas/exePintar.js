const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext("2d");
const corEscolhida = document.querySelector("#corEscolhida");
const botao = document.querySelector("#limpar");
let desenhando = false;

//define a variável como true indicando que o usuário começou a pintar
canvas.addEventListener("mousedown", () => {
    desenhando = true;
});

//define a variável como false quando interrompe o clique
canvas.addEventListener("mouseup", () => {
    desenhando = false;
    ctx.beginPath(); //começa uma nova trajetória
});

//A ação é iniciada assim que o mouse se move, desde que o mousedown continue pressione
canvas.addEventListener("mousemove", desenhar);

//Seleciona a cor a ser utilizada
corEscolhida.addEventListener("input", atualizaCor);

//Chamamos a função desenhar e passamos o event como parâmetro 
//O Event é um objeto que contém atributos que são acionados de acordo com o evento ocorrido

function desenhar(event) {
    if(!desenhando) return;
    //retornam a posição do elemento na tela
    const{clientX, clientY} = event;
    //Obtem as corrdenada do canto esquerdo do topo
    const {left,top} = canvas.getBoundingClientRect();

    //subtrai as coordenadas do canvas, relativizando com o canvas
    const x = clientX - left;
    const y = clientY - top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
// ! = if(desenhando == false)

function atualizaCor(event) {
    ctx.strokeStyle = event.target.value
}

function limpar() {
                    //x, y
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

botao.addEventListener("click", limpar);