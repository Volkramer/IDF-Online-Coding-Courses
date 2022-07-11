window.onload=function(){
  var canvas=document.getElementsByTagName("canvas")[0];
  var context=canvas.getContext("2d");
  canvas.style.background=0;
  context.beginPath();
  context.moveTo(6, 6);
  context.lineTo(14, 10);
  context.lineTo(6, 14);
  context.lineTo(6, 6);
  context.stroke();
  context.closePath();

  var music = new Audio("https://www.online-downloader.com/DL/Download/Les-Fatals-Picards-Goldorak-est-mort.ogg");

  canvas.addEventListener("click", function(){
    music.play();
  });

  document.getElementsByTagName("button")[0].addEventListener("click", function(){
    music.pause();
  });

  document.getElementsByTagName("button")[1].addEventListener("click", function(){
    music.pause();
    music.currentTime = 0;
  });

  document.getElementsByTagName("button")[2].addEventListener("click", function(){
    if (music.muted==false){
      music.muted=true;
    }
    else {
      music.muted=false;
    }
  });
}
