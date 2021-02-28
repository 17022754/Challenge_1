var ctx = document.getElementById('myChart').getContext('2d');
var MegaChart = new Chart(myChart, {
    // // The type of chart we want to create
    // type: 'line',

    // // The data for our dataset
    // data: {
    //     labels: ['09.00', '11.00', '13.00', '15.00', '17.00', '19.00', '21.00', '23.00'],
    //     datasets: [{
    //         label: 'My First dataset',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 100, 300, 400, 240, 50, 45, 165]
    //     }]
    // },

    // // Configuration options go here
    // options: {}

    type: 'bar',

    data: {
        datasets: [{
            label: 'Bar Dataset',
            backgroundColor: 'white',
            data: [0, 100, 300, 400, 240, 50, 45, 165],
            order: 2,
        }, {
            label: 'Line Dataset',
            borderColor: 'blue',
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
            text: 'Totaal aantal kilometers',
            position: 'top',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontColor: 'rgb(101, 90, 194)',
        },
        legend: {
            display: false,
        },
        layout: {
            padding: 20,
        },
    }
});