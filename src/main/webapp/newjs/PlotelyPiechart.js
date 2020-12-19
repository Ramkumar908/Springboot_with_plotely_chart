$(document).ready(function(){
	piechart();
	
})

function piechart() {
	$.ajax({
	//url : 'https://192.168.167.5:8743/Dashboard/dashboard/api/totalRevenue?Start_date=09-may-2020&End_date=22-jun-2020',
		url:'/VarienceChart',
//		datatype : 'json',
		success : function(jsondata) {
//			var data = JSON.stringify(jsondata);
//			console.log(data);
//			var graphdata = '';
			console.log(jsondata);
        	
			var x;
           var data = JSON.stringify(jsondata);
			function unpack(data, key) {
			return data.map(function(row) {
					return row[key];
		});
			}

			var data = [{
               values: unpack(jsondata, "year"),
                labels: unpack(jsondata, "sales"),
                hoverinfo: "label+value",
                hole: 0.4,
                type: "pie",
                textinfo: "label+value+percent"
            }];

            var layout = {
                margin: {
                    t: 40,
                    l: 30,
                    r: 30
           },
                showlegend: false
            };

			var config = {
				responsive : true
			}

			Plotly.newPlot('myDiv', data, layout, config);
		}

	})
}