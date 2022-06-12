var element = document.getElementById("viewless");
/*function expand(){
    x.style.display="block";
    element.innerHTML="View less";
}*/

function expand() {
    var x = document.getElementById('none');
    if (x.style.display === 'none') {
        element.innerHTML="View Less"
      x.style.display = 'block';
    } else {
        element.innerHTML="View More"
      x.style.display = 'none';
    }
  }
  var c= document.getElementById('uname');
  var d= document.getElementById('psw');
  function login(){
  var xhr = new XMLHttpRequest(); 
  var n= c.value;
  var p= d.value;   
  var userData = {        
      username : n,        
      password : p
  }    
  xhr.open('POST',"login.txt");    
  xhr.send(JSON.stringify(userData));
  alert("Login Successfully");
  document.getElementById('change').innerHTML="LOG OUT";
}

