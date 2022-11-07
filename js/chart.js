window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,  
	title:{
		text: "Sales by Year"
	},
	axisY: {
		title: "Units Sold",
		valueFormatString: "#0,,.",
		suffix: "mn",
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]
	},
	data: [{
		yValueFormatString: "#,### Units",
		xValueFormatString: "YYYY",
		type: "spline",
		dataPoints: [
			{x: new Date(2002, 0), y: 2506000},
			{x: new Date(2011, 0), y: 1872000},
			{x: new Date(2012, 0), y: 2140000},
			{x: new Date(2013, 0), y: 7289000},
			{x: new Date(2014, 0), y: 4830000},
			{x: new Date(2015, 0), y: 2009000},
			{x: new Date(2016, 0), y: 2840000},
			{x: new Date(2017, 0), y: 2396000},
			{x: new Date(2018, 0), y: 1613000},
			{x: new Date(2019, 0), y: 2821000},
			{x: new Date(2020, 0), y: 2000000}
		]
	}]
});
chart.render();

}