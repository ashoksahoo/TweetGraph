var socket = io();
var updateGraph = function ( myLineChart, tweets ) {
	for (var i = 0; i < tweets.length; i++) {
		myLineChart.datasets[ 0 ].points[ i ].value = tweets[ i ];

	}
	myLineChart.update();
};
var listenToNewTweetEvent = function ( myLineChart ) {

	socket.on('tweet', function ( tweets ) {
		updateGraph(myLineChart, tweets)
	});
};
var options =
{

	scaleShowGridLines: true,
	scaleGridLineColor: "rgba(0,0,0,.05)",
	scaleGridLineWidth: 1,
	scaleShowHorizontalLines: true,
	scaleShowVerticalLines: true,
	bezierCurve: false,
	bezierCurveTension: 0.4,
	pointDot: true,
	pointDotRadius: 4,
	pointDotStrokeWidth: 1,
	pointHitDetectionRadius: 20,
	datasetStroke: true,
	datasetStrokeWidth: 2,
	datasetFill: true,
	responsive: false,
	maintainAspectRatio: true
};
var ctx = document.getElementById("myChart").getContext("2d");
var drawGraph = function () {
	$.get('/api/tweets').success(function ( data ) {
		var chartdata = {
			labels: [ "10min", '9mins', "8mins", "7min", '6mins', "5mins", "4min", '3mins', "2mins", "1min" ],
			datasets: []
		};
		var dataset = {
			label: "Tweets per Hour",
			fillColor: "rgba(220,220,220,0.7)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: []
		};
		for (var i = 0; i < data.length; i++) {
			var j = data[ i ];
			dataset.data.push(j);
		}
		chartdata.datasets.push(dataset);
		var myLineChart = new Chart(ctx).Line(chartdata, options);
		listenToNewTweetEvent(myLineChart)
		setInterval(function () {
			$.get('/api/tweets').success(function ( data ) {
				for (var i = 0; i < data.length; i++) {
					myLineChart.datasets[ 0 ].points[ i ].value = tweets[ i ];
				}
				myLineChart.update();
			});
		}, 60000);

	});
}();


