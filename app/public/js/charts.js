class ProsumerChart {
    constructor(elementId) {
        this.chart = new Chart($(elementId), {
            // The type of chart we want to create
            type: 'line',
    
            // The data for our dataset
            data: {
                labels: [],
                datasets: [{
                    label: 'Production (Wh)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: []
                }]
            },
    
            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            maxTicksLimit: 5
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 8
                        }
                    }]
                }
            }
        });
        console.log(this.chart);
    }

    addData(data, label) {
        this.chart.data.labels.push(label);
        this.chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        this.chart.update();
    }

}

/* function productionChart (elementId) {
    //var ctx = document.getElementById(elementId).getContext('2d');
    var chart = new Chart($(elementId), {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Production (Wh)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });
}

 */