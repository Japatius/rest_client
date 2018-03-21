function GetUsers(){
    var url = "http://localhost/rest_api/index.php/api/user/users.html";
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange=function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById('results').innerHTML = xhttp.responseText;
        }
    };
    xhttp.send();
}

function NamesEmails(){
    var url = "http://localhost/rest_api/index.php/api/user/users.html";
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    var jsonData = '';
    var data = '';
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        jsonData = JSON.parse(xhttp.responseText);
        for (x in jsonData) {
          data += jsonData[x].name + ' ' + jsonData[x].email + '<br>';
        }
        document.getElementById('results').innerHTML = data;
      }
    };
    xhttp.send();
  }

function AddUser(){
    var url = "http://localhost/rest_api/index.php/api/user/users.html";
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form=document.getElementById('UserForm');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 201){
            document.getElementById('results').innerHTML = "User added successfully";
        }else{
            document.getElementById('results').innerHTML = "Something went wrong";
        }
    };
    xhttp.send(formData);
}
function UpdateUser(){
    var url = "http://localhost/rest_api/index.php/api/user/users.html";
    var xhttp = new XMLHttpRequest();
    xhttp.open('PUT', url, true);
    var data ={};
    data.id = parseInt(document.getElementById('update_id').value);
    data.name = document.getElementById('update_name').value;
    data.email = document.getElementById('update_email').value;
    data.fact = document.getElementById('update_fact').value;
    
    var jsonData = JSON.stringify(data);
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 201){
            document.getElementById('results').innerHTML = "User updated successfully";
        }else{
            document.getElementById('results').innerHTML = "Something went wrong";
        }
    };
    xhttp.send(jsonData);
}