window.onload=function() {
  var buttonPlus=document.getElementsByTagName("button")[0];
  var buttonMinus=document.getElementsByTagName("button")[1];
  var size="14px";
  buttonPlus.addEventListener("click", function(event){
    document.body.style.fontSize = (parseInt(document.body.style.fontSize,10)+1)+"px";
  });
}
