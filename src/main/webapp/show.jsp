<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>

<style>
table, th, td {
  border: 2px solid black;
}
</style>

<meta charset="ISO-8859-1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<title>Graph view</title>
</head>

<table id="mytable" border="2">
<thead>
        <tr>
        <th>Id</th>
        <th>Country</th>
        <th>Tech</th>
        </tr>
        </thead>
        <tbody id="tbody"></tbody>
        </table>
       <p>click for show result</p>
<body>
     
	 <script type="text/javascript">
        $(document).ready(
                function() {
                    $.ajax({
                        url : "/GetData",
                        success : function(result) {
                           // var id = [];
                            //var country = [];
                            //var tech=[];
                            console.log(result);
                            //for(var  i=0;i<result.length;i++)
                               // {
                            	//var eachrow = "<tr>"
                                  //  + "<td>" + result[i].id + "</td>"
                                    //+ "<td>" + result[i].country + "</td>"
                                    //+ "<td>" + result[i].tech+ "</td>"
                                   //+ "</tr>";
                        //$('#tbody').append(eachrow);
                                
                                
                                //}
                                $("p").click(function(){
                                	 $("p").toggle();
   showresult(result);
  });
                            
                         
                        }
                    });
                });
        function showresult(data)
        {

        	for(var  i=0;i<data.length;i++)
             {
         	var eachrow = "<tr>"
                + "<td>" + data[i].id + "</td>"
                 + "<td>" + data[i].country + "</td>"
                 + "<td>" + data[i].tech+ "</td>"
                + "</tr>";
     $('#tbody').append(eachrow);
             
             
             }
            
         }
        
     </script>   
     
        
</body>
</html>