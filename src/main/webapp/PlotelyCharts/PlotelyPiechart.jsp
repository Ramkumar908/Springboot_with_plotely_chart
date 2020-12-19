<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
  <script src="/plugins/plotlyjs/plotly-latest.min.js"></script>
  <script src="/plugins/plotlyjs/jquery-3.5.1.min.js"></script>
  <script src="/newjs/PlotelyPiechart.js"></script>  
</head>
<body>
<div id='myDiv'><!-- Plotly chart will be drawn inside this DIV --></div>
<!--<script>
Plotly(piechart())
 function piechart()
{
	
var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('myDiv', data, layout);
}
</script>  -->

</body>
</html>