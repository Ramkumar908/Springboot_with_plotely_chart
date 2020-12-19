

$(document).ready(function()
		{
	google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

	
		})
  function drawChart() {
	 $(document).ready(
   	            function() {
       	           $.ajax({
   	                    url : "/linechart",
   	                    dataType: "json",
   	                    
   	                    success : function(jsonData) {
       	                  console.log(jsonData) 
   	                    		
       	                 var data = new  google.visualization.DataTable();
       	                  data.addColumn('number','year');
       	                  data.addColumn('number','sales');
       	                  data.addColumn('number','expenses');
       	                  for(var i=0;i<jsonData.length;i++)
       	                	  {
       	                	console.log(jsonData[i]);
                            console.log(jsonData[i].year);
                            console.log(jsonData[i].sales);
                            console.log(jsonData[i].expenses)
                            data.addRow([jsonData[i].year, jsonData[i].sales,jsonData[i].expenses]);
       	                	  }


       var options = {
         title: 'Company Performance',
         curveType: 'function',
         legend: { position: 'bottom' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

       chart.draw(data, options);
     }



   	        	                    
   	                     //}
   	                    
	                     
	                    
   	                });
   	            });
     }
       	
           
       