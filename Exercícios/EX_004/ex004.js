const canvas = document.querySelector("#pintarCanvas");
canvas.width = 1000;
canvas.height = 680;

ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;
var quadrado = 50;

desenhar();

function desenhar() {
    ctx.ClearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, quadrado, quadrado);

    document.querySelector("#coordenada").textContent = `X = ${x}  Y = ${y}`;
}

document.addEventListener('keydown', (event) => {
    if(event.key === "a" || event.key === "A" || event.key === "arrowLeft"){
        if(x > 0) {
            x -= 10;
            desenhar();
        }
    }
    else if (event.key === "d" || event.key === "D" || event.key === "arrowRight"){
        if(x + quadrado < canvas.width) {
            x += 10;
            desenhar();
        }
    }
    else if (event.key === "w" || event.key === "W" || event.key === "arrowTop"){
        if(y > 0) {
            y -= 10;
            desenhar();
        }
    }
    else if (event.key === "s" || event.key === "S" || event.key === "arrowBottom"){
        if(y + quadrado < canvas.width) {
            y += 10;
            desenhar();
        }
    }
})

