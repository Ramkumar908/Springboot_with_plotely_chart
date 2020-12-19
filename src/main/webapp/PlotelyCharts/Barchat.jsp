<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
   <script src="/plugins/plotlyjs/jquery-3.5.1.min.js"></script>
   <script src="/plugins/plotlyjs/plotly-latest.min.js"></script> 
     <script src="/newjs/plotBarchart.js"></script> 
     <link rel="stylesheet" href="/css/table.css">
</head>
<body>
<div id='myDiv'></div>
<input id="togglebutton" type="button" value="show table"/>
<table id="displaytable" >
<thead>
  <tr>
    <th>year</th>
    <th>sales</th>
    </tr>
 </thead> 
 <tbody id="tablevalue">
 </tbody>
</table>
<script>
document.getElementById("togglebutton").addEventListener("click", function(button) {    
	   if (document.getElementById("displaytable").style.display === "none")   
	     document.getElementById("displaytable").style.display = "block";
	   else document.getElementById("displaytable").style.display = "none";
	});
</script>
</body>
</html>