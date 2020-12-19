
$(document).ready(function(){
	
	google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
})


function drawChart() {
	$.ajax({
		url:"Barchart",
		dataType:"json",
		success:function(jsonData)
		{
			
			 var data = new  google.visualization.DataTable();
			 data.addColumn('string','element');
			 data.addColumn('number','density')
			 for(var i=0;i<jsonData.length;i++)
				 {
				 console.log(jsonData[i]);
                 console.log(jsonData[i].element);
                 console.log(jsonData[i].density);
                  data.addRow([jsonData[i].element, jsonData[i].density]);
				 }
			 var options = {
				        title: "Density of Precious Metals, in g/cm^3",
				        width: 600,
				        height: 400,
				        bar: {groupWidth: "95%"},
				        legend: { position: "none" },
				      };
			 var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
		      chart.draw(data, options);
			
		}
		
	})
     }