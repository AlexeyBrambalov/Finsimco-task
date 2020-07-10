var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
 Chart.defaults.global.defaultFontColor = 'dodgerblue';
 Chart.defaults.global.defaultFontSize = 16;


// Data with datasets options
var data = {
    labels: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"],
      datasets: [
        {
            label: "Teams",
            fill: true,
            backgroundColor: [
                'blue', "blue", "blue", "blue", "blue", "blue"],
            data: [11, 9, 4, 20, 25, 30]
        }
    ]
};

// Notice how nested the beginAtZero is
var options = {
        title: {
                  display: true,
                  text: 'Teams score',
                  position: 'top'
              },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
};

// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});



var canvas2 = document.getElementById("barChart2");
var ctx2 = canvas2.getContext('2d');

// Global Options:
 Chart.defaults.global.defaultFontColor = 'dodgerblue';
 Chart.defaults.global.defaultFontSize = 16;


// Data with datasets options
var data2 = {
    labels: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"],
      datasets: [
        {
            label: "Teams",
            fill: true,
            backgroundColor: [
                'blue', "blue", "blue", "blue", "blue", "blue"],
            data: [1, 2, 3, 4, 5, 6]
        }
    ]
};

// Notice how nested the beginAtZero is
var options2 = {
        title: {
                  display: true,
                  text: 'Teams score',
                  position: 'top'
              },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
};

// Chart declaration:
var myBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: options2
});




var ctx3 = document.getElementById('graph').getContext('2d');
var chart = new Chart(ctx3, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["January 2020", "January 2021", "January 2022"],
		// Information about the dataset
    datasets: [{
			label: "Framestatic",
			borderColor: 'royalblue',
            data: [100.4, 139.8, 140, 130, 100, 110],
            lineTension: 0,
		},
            {
			label: "Star Hotel",
			borderColor: 'red',
            data: [106.4, 119.8, 140, 130, 110, 100],
            lineTension: 0,
        },
        {
			label: "Techo",
			borderColor: 'yellow',
            data: [100.4, 130.8, 110, 130, 150, 120],
            lineTension: 0,
        },
        {
			label: "Super Foods",
			borderColor: 'green',
            data: [122.4, 129.8, 120, 120, 120, 130],
            lineTension: 0,
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
            text: 'Precipitation in Toronto',
            position: 'top'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Precipitation in mm'
                },
                ticks: {
                    beginAtZero:true
                }
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
        },

	}
});
