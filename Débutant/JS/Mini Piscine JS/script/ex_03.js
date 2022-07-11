window.onload=function() {
  var pop=document.getElementsByTagName("div")[2];
  function inc(){
    var name=prompt("quel est votre nom ?");
    if (name==null || name=="") {
      inc();
    }
    else {
      if (confirm("Etes vous sûr que " + name + " est votre nom ?")){
        alert("Bonjour " + name + "!");
        pop.textContent="Bonjour " + name + "!";
      }
      else {
        inc();
      }
    }
  }
  pop.addEventListener("click", inc);

}
