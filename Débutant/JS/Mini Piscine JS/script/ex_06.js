window.onload=function(){
  class Hero {
    constructor(name, classe, intelligence, force) {
      this.name = name;
      this.classe = classe;
      this.intelligence = intelligence;
      this.force = force;
    }

    toString() {
      document.getElementsByTagName("div")[2].innerText=document.getElementsByTagName("div")[2].innerText + "Je suis " + this.name + " le " + this.classe + ", j'ai " + this.intelligence + " points d'intelligence et " + this.force + " points de force !\n";
    }
  }

  var mage = new Hero("amadeus", "mage", 10, 3);
  var guerrier = new Hero("pontius", "guerrier", 3, 10);
  mage.toString();
  guerrier.toString();
}
