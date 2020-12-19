
$(document).ready(function() {

      lineChart();
	//piechart();
	

})


function piechart()
{
	var myDiv = document.getElementById('piegraph');

	$.ajax({
		url:'/Barchart',
		dataType:json,
		success:function(jsonData)
		{
			var element = new Array(jsonData.length);
			var density = new Array(jsonData.length);
			//console.log(jsonData)
			for(var i=0;i<jsonData.length;i++)
				{
				element[i] = jsonData[i].element;
				density[i] = jsonData[i].density;
				
				}
	
var data = [{
 // values: [19, 26, 55],
  values:element,
labels:density,
  type: 'pie'
}];

console.log(data);
var layout = {
  height: 400,
  width: 500,
  title:'Api response pie chart'
};

Plotly.newPlot('myDiv', data, layout);
}
	
});
}



//Plotely Linechart starts here 
function lineChart() {
	$.ajax({
		url : '/VarienceChart',
		datatype : 'json',
		success : function(jsondata) {
			
			
			var x;
            var data = JSON.stringify(jsondata);
			function unpack(data, key) {
			return data.map(function(row) {
					return row[key];
				});
			}

			var trace1 = {
				type : "scatter",
				x : unpack(jsondata, "year"),
				y : unpack(jsondata, "sales"),
				
				
			};

			var data = [ trace1 ];
			

			var layout = {
                    dragmode: "pan",
                    xaxis: {
                        autorange: true,
                        fixedrange: true,
                        type: "linear",
                        title:'year'

                        //type: "date"
                    },
                    yaxis: {
                        autorange: true,
                        fixedrange: true,
                        type: "linear",
                        title: "sales"
                    },
                    margin: {
                        t: 40,
                        l: 50,
                        r: 30
                    },
                    showlegend: false
                };

			var config = {
				responsive : true
			}

			Plotly.newPlot('myDiv', data, layout,{scrollZoom:true}, config);
		}

	})
}


// the pie chart js code is stat from here 
