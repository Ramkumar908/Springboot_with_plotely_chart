$(document).ready(function(){
  
	 google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(barchart);
     google.charts.setOnLoadCallback(CurvedLinechart);
	 google.charts.setOnLoadCallback(Varience);
      google.charts.setOnLoadCallback(drawChart);

     


});




// Barchart js start from here 


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
				        width: 400,
				        height: 350,
				        bar: {groupWidth: "95%"},
				        legend: { position: "none" },
				      };
			 var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
		      chart.draw(data, options);
			
		}
		
	})
     }
       

function CurvedLinechart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales'],
      ['2004',  300],
      ['2005',  2000],
      ['2007',  400]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data);
  }

//End the curved single line chart

// start the varience chart 
function Varience() {
	$.ajax({
		url:"/VarienceChart",
		datatype:"json",
		success:function(jsonData)
		{
			var data = new google.visualization.DataTable();
            data.addColumn('number', 'year');
            data.addColumn('number', 'sales');
            for(var i=0;i<jsonData.length;i++)
            	{
            	console.log(jsonData[i]);
                console.log(jsonData[i].year);
                console.log(jsonData[i].sales);
                 data.addRow([jsonData[i].year, jsonData[i].sales]);
            	}
            	
            var options = {
            	       title: 'Company Performance',
            	       width:300,
            	       height:80,
            	       isStacked:true	  
            	    };  
            var chart = new google.visualization.BarChart(document.getElementById('container'));
            chart.draw(data,options);
			
		}
	})
    }



// end the varience chart



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
// Pie chart js end here 
   