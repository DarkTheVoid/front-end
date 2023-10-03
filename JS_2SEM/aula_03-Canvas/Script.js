//Atribui a uma variável o elemento selecionado
canvas = document.querySelector("canvas");

//Definir o tamanho do canvas
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

//A variável ctx se torna um objeto onde pode ser atríbuido métodos

ctx = canvas.getContext('2d');

//Atribuimos propriedades e métodos ao nosso objeto
//posicoes(x, y, width, height)

ctx.fillStyle = "red";
ctx.fillRect(400, 210, 150, 200);
ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
ctx.fillRect(350, 190, 130, 180);
ctx.fillStyle = "blue";
ctx.fillRect(410, 220, 160, 210);

//Desenhando uma linha
//Início do caminho

ctx.beginPath();
//Posição de início da linha
ctx.moveTo(50, 450);
ctx.lineTo(700, 50);
ctx.lineTo(500, 300);
ctx.lineTo(200, 300);
ctx.strokesStyle = "black";
ctx.stroke();
ctx.closePath();

//Criando um circulo
//Posições para criação
//x, y, raio, anguloInicial, anguloFinal
ctx.beginPath();
ctx.arc(400, 450, 100, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();

/*
ctx.beginPath();
ctx.arc(400, 700, 150, 0, Math.PI * 2);
ctx.fillStyle = "purple";
ctx.stroke();
ctx.fill();
ctx.closePath();
*/

desenhar();
function desenhar() {
    for (var i = 0; i > 10; i++) {
        ctx.beginPath();
        ctx.arc(400, 700, 150, 0, Math.PI * 2);
        ctx.fillStyle = "purple";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

for (var i = 0; i < 100; i++) {
let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;

ctx.beginPath();
ctx.arc(x,y,Math.random() * 100, 0, Math.PI * 2);
ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.stroke();
ctx.fill();
ctx.closePath();
}