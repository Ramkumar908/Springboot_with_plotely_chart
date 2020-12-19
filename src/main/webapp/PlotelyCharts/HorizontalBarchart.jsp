<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
 <script src="/plugins/plotlyjs/plotly-latest.min.js"></script>  
   <script src="/plugins/plotlyjs/jquery-3.5.1.min.js"></script>
</head>
<body>
	<div id='myDiv'><!-- Plotly chart will be drawn inside this DIV --></div>
<script type="text/javascript">

//show negativity using this chart for varience
/*var data = [{
  type: 'bar',
  x: [23],
  y: ['giraffes'],
  orientation: 'h'
}];*/

// show  top x recharge voucher using this chart
var data = [{
	  type: 'bar',
	  x: [23,25,45,56,50],
	  y: [0,20,40.60,80],
	  orientation: 'h'
	}];

Plotly.newPlot('myDiv', data);



</script>
</body>
</html>