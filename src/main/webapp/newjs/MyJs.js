$(document).ready(function(){
  
	 google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(linechart);
    google.charts.setOnLoadCallback(barchart);

});


// Pie chart js start from here 
function drawChart() {
	
           $.ajax({
                url : "/Piechart",
                dataType:"json",                
                success : function(jsonData) {
                //	console.log(jsonData)
                     
                	var data = new google.visualization.DataTable();
                    data.addColumn('string', 'activity');
                    data.addColumn('number', 'hours');
                    for(var i=0;i<jsonData.length;i++)
                    	{
                    	console.log(jsonData[i]);
                        console.log(jsonData[i].activity);
                        console.log(jsonData[i].hours);
                         data.addRow([jsonData[i].activity, jsonData[i].hours]);

                    	}



        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
                }
           });
	
      }
// Pie chart end here 




// Line chhart starts from here 
  function linechart() {
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
     }// Line char js end here 
       	
  //Barchart starts from here 
  function barchart() {
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
           
       