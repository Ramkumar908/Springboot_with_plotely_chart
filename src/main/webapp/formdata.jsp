<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>

<form id="submitForm" action="saveUser" method="post">&nbsp;
   <label>id</label> <input name="id" type="text"> <br>
   <label>country</label> <input name="country" type="text"> <br>
   <label>tech</label> <input name="tech" type="text"> <br>
   <input value="Submit Form" type="submit">
</form>
<script type="text/javascript">
$('#submitForm').submit(function(e) {
    // reference to form object
var form = this;
    // for stopping the default action of element
    e.preventDefault();
    // mapthat will hold form data
    var formData = {}
//iterate over form elements   
    $.each(this, function(i, v){
    var input = $(v);
    // populate form data as key-value pairs
        // with the name of input as key and its value as value
    formData[input.attr("name")] = input.val();
    });
    $.ajax({
        type: form.attr('post'), // method attribute of form
        url: form.attr('saveUser'),  // action attribute of form
        dataType : 'json',
    // convert form data to json format
        data : JSON.stringify(formData),
        
    });
});
</script>
</body>
</html>