window.onload=function() {
  var doc=document.getElementsByTagName("div")[2];
  document.addEventListener("keydown", function(event){
    doc.innerHTML=(doc.innerHTML+event.key).substr(0, 42);
  });
}
