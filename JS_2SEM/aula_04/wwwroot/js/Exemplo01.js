var data = {
    //array de rótulos do gráficos
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //propriedade do gráfico
    datasets: [{
        label: 'Vendas 2023',
        data:[12, 19, 5, 9, 22, 5]
    }]
};
//configurações do gráficos
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

//Criar o gráfico de barras
var ctx = document.querySelector('#grafico').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});