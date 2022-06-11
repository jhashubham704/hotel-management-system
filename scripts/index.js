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

 function login(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        console.log(this.readyState);
        if(this.readyState===4 && this.status===200){
            var data=this.response;
            var Jdata=JSON.parse(data); 
            alert("login Successfully");
        }else{
            alert("Invalid login");
        }
 }
 xhttp.open('GET',"login.txt", true);
 xhttp.send();
}