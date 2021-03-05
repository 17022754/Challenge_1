var myChart = document.getElementById('myChart').getContext('2d');
// Global font and sizes of the charts
    Chart.defaults.global.defaultFontFamily='Poppins';
    Chart.defaults.global.defaultFontsize= 12;
    Chart.defaults.global.defaultFontColor= 'rgb(255, 255, 255)';
    Chart.defaults.scale.gridLines.display = false;
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = true;

var BarLineChart = new Chart(myChart, {

    type: 'bar',

    data: {
        datasets: [{
            barPercentage: 0.5,
            label: 'Kilometer per uur',
            backgroundColor: 'rgb(104, 111, 252)',
            data: [0, 100, 300, 400, 240, 50, 45, 165],
            order: 2,
        }, {
            label: 'Line Dataset',
            borderColor: 'rgb(113, 166, 225)',
            data: [0, 100, 300, 400, 240, 50, 45, 165],
            order: 1,

            // Changes this dataset to become a line
            type: 'line'
        }],
        labels: ['09.00', '11.00', '13.00', '15.00', '17.00', '19.00', '21.00', '23.00']
    },
    options:{
        title: {
            display: true,
            text: 'Totaal aantal afgelegde kilometers',
            position: 'top',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart2 = document.getElementById('myChart2').getContext('2d');

var BarChart = new Chart(myChart2, {
    type: 'bar',

    data: {
        datasets: [{
            barPercentage: 0.4,
            label: 'Liters per kilometers',
            backgroundColor: 'rgb(163, 160, 251)',
            data: [40, 30, 20, 10]
        }],
        labels: [20, 40, 60, 80]
    },
    options:{
        title: {
            display: true,
            text: 'Totaal aantal liters benzine verbruikt',
            position: 'top',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart3 = document.getElementById('myChart3').getContext('2d');

var BarChart = new Chart(myChart3, {
    type: 'bar',

    data: {
        datasets: [{
            barPercentage: 0.4,
            label: 'Versnelling per uur',
            backgroundColor: 'rgb(113, 166, 225)',
            data: [4, 2, 4, 6]
        }],
        labels: ['09.00', '11.00', '13.00', '15.00']
    },
    options:{
        title: {
            display: true,
            text: 'Totale versnelling afgelopen uren',
            position: 'top',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart4 = document.getElementById('myChart4').getContext('2d');

var LineLineChart = new Chart(myChart4, {

    type: 'line',

    data: {
        datasets: [{
            label: 'Temperatuur in graden',
            borderColor: 'rgb(113, 166, 225)',
            data: [0, 49, -10, 80, 30, -2, 45],
            order: 2,
        }, {
            label: 'Regenval mm per uur',
            backgroundColor: 'rgb(104, 111, 252)',
            data: [100, 50, 80, 0, 35, 70, 20],
            order: 1,

            // Changes this dataset to become a line
            type: 'line'
        }],
        labels: ['Ma', 'Di', 'Wo', 'Do', 'Vrij', 'Za', 'Zo']
    },
    options:{
        title: {
            display: true,
            text: 'Temperatuur op Mars uitgezet tegen regenval',
            position: 'top',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart5 = document.getElementById('myChart5').getContext('2d');

var BarChart = new Chart(myChart5, {
    type: 'bar',

    data: {
        datasets: [{
            barPercentage: 0.4,           
            label: '% hoeveelheid per maand',
            backgroundColor: [
                'rgb(104, 111, 252)', 'rgb(163, 160, 251)', 'rgb(113, 166, 225)'
            ],
            data: [60, 30, 20]
        }],
        labels: ['Zandstormen', 'Straling', 'Overig']
    },
    options:{
        title: {
            display: true,
            text: 'Hoeveelheid natuurstormen',
            position: 'top',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart6 = document.getElementById('myChart6').getContext('2d');

var DonutPieChart = new Chart(myChart6, {
    type: 'pie',

    data: {
        datasets: [{
            label: '% per dag eten',
            backgroundColor: [
                'rgb(163, 160, 251)', 'rgb(113, 166, 225)', 'rgb(104, 111, 252)'
            ],
            data: [20, 30, 50]
        }],
        labels: ['% Koolhydraten', '% Eiwitten', '% Vetten']
    },
    options:{
        title: {
            display: true,
            text: 'Aanbevolen voedselinname per dag',
            position: 'top',
        },
        legend: {
            display: true,
            position: 'right',
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart7 = document.getElementById('myChart7').getContext('2d');

var HorizontalChart = new Chart(myChart7, {
    type: 'horizontalBar',

    data: {
        datasets: [{
            barPercentage: 0.2,
            label: '% water over',
            backgroundColor: 'rgb(113, 166, 225)',
            data: [70]
        }],
        labels: ['water']
    },
    options:{
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

var myChart8 = document.getElementById('myChart8').getContext('2d');

var HorizontalChart = new Chart(myChart8, {
    type: 'horizontalBar',

    data: {
        datasets: [{
            barPercentage: 0.2,
            label: '% vast voedsel over',
            backgroundColor: 'rgb(163, 160, 251)',
            data: [70]
        }],
        labels: ['vast voedsel']
    },
    options:{
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 15,
        },
    }
});

