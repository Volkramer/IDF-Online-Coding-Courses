window.onload=function() {
  var click=0;
  var doc=document.getElementsByTagName("div")[2];
  doc.textContent=0;
  function inc(){
    doc.textContent=click++;
  }
  doc.addEventListener("click", inc);
}
