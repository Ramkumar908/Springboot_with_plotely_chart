$(document).ready(function(){
	barchart();
})

function barchart()
{
	$.ajax({
		url:'/VarienceChart',
		dataType:'json',
		success:function(jsonData)
		{
			console.log(jsonData)
			//$('#tabledata').html(data);
			var tabledata = '';
			
			$.each(jsonData, function(index, data) {
				console.log(data);
				tabledata += '<tr><td>'+data.year+'</td><td>'+data.sales+'</td></tr>';
			});
             // console.log(tabledata);
			//$('#tablevalue').html(tabledata);
			$('#tablevalue').append(tabledata);
			//console.log(jsonData);
			// var data = JSON.stringify(jsonData);
				function unpack(data, key) {
				return data.map(function(row) {
						return row[key];
					});
				}
			 
            
			 var trace1 = {
					  type: 'bar',
					  x: unpack(jsonData, "year"),
					  y: unpack(jsonData, "sales"),
					  marker: {
					      color: '#C8A2C8',
					      line: {
					          width: 2.5
					      }
					  }
					};

					var data = [ trace1 ];

					var layout = { 
							 dragmode: "pan",
			                    barmode: "group",
			                    showlegend: false,
			                    xaxis: {
			                    	title:'year'
			                    },
			                    yaxis: {
			                        autorange: true,
			                        fixedrange: true,
			                        title: "sales"
			                    }
					};

					var config = {responsive: true}

					Plotly.newPlot('myDiv', data, layout, config ,{scrollZoom: true});
		}
	})
}