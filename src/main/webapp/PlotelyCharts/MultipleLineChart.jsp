<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
 <script src="/plugins/plotlyjs/plotly-latest.min.js"></script>
 <script src="/plugins/plotlyjs/jquery-3.5.1.min.js"></script>
 <script src="/newjs/PlotelyMultipleLineChart.js"></script>
<body>
<div id="graphDiv"></div>
<!--  <script>
multiplechart()

 function multiplechart()
{
const rand = () => Math.random();
var x = [1, 2, 3, 4, 5];
const new_data = (trace) => Object.assign(trace, {y: x.map(rand)});

// add random data to three line traces
var data = [
	{mode:'lines', line: {color: "#b55400"}},
	{mode: 'lines', line: {color: "#393e46"}}
].map(new_data);

var layout = {
	title: 'API RESPONSE MULTIPLE LINE CHARTS',
	uirevision:'true',
	xaxis: {autorange: true},
	yaxis: {autorange: true}
};



var myPlot = document.getElementById('myDiv');

var cnt = 0;
var interval = setInterval(function() {
	data = data.map(new_data);

	// user interaction will mutate layout and set autorange to false
	// so we need to reset it to true
	layout.xaxis.autorange = true;
	layout.yaxis.autorange = true;

	// not changing uirevision will ensure that user interactions are unchanged
	// layout.uirevision = rand();

	Plotly.newPlot('graphDiv', data, layout);
	if(cnt === 100) clearInterval(interval);
}, 2500);
}
</script>-->
</body>
</html>