$(document).ready(function(){
	
	 google.charts.load('current', {packages: ['corechart']});
	  google.charts.setOnLoadCallback(drawChart);
})

function drawChart() {
            // Define the chart to be drawn.
            var data = google.visualization.arrayToDataTable([
               ['Year', 'Sales'],
               ['2012',  900],
               ['2013',  -1000]
               
            ]);

            var options = {
               title: 'Company Performance',
               width:300,
               height:100,
               isStacked:true	  
            };  

            // Instantiate and draw the chart.
            var chart = new google.visualization.BarChart(document.getElementById('container'));
            chart.draw(data,options);
         }
