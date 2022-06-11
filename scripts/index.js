var element = document.getElementById("viewless");
/*function expand(){
    x.style.display="block";
    element.innerHTML="View less";
}*/

function expand() {
    var x = document.getElementById('none');
    if (x.style.display === 'none') {
        element.innerHTML="View less"
      x.style.display = 'block';
    } else {
        element.innerHTML="View More"
      x.style.display = 'none';
    }
  }