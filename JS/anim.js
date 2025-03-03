window.onload = function(){
var element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);
element.className = "slidein";
};

function listener(event) {
    var l = document.createElement("li");
    var compt = event.elapsedTime+1;
    var compt2 = event.elapsedTime-3;
    var compt3 =  event.elapsedTime-1;
    switch(event.type) {
      case "animationstart":
        l.innerHTML = compt + " - Je suis curieux" ;
        break;
      case "animationend":
        l.innerHTML = compt2 + " - Je suis dynamique ";
        break;
      case "animationiteration":
        l.innerHTML = compt3 + " - Je suis responsable ";
        break;
    }
    document.getElementById("output").appendChild(l);
  }



  