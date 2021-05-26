var startTime = new Date().getTime();

var makeShapeVisible = function(){
  var shape = document.getElementById("shape");
  var top = Math.random() * 100;
  var left = Math.random() * 100;
  var width = Math.random() * 100 + 50;
  shape.style.top = top +"px";
  shape.style.left = left +"px";
  shape.style.width = width + "px";

  if(Math.random() < 0.5) {
    shape.style.borderRadius = "50%";
    } else {
    shape.style.borderRadius = "0";
  }

  shape.style.display = "block";
  startTime = new Date().getTime();
}

setTimeout(makeShapeVisible, Math.random() * 1000);

document.getElementById("shape").onclick = function(){
var shape = this;
  
  shape.style.display = "none";

  var finishTime = new Date().getTime();
  var reactionTime = (finishTime - startTime) / 1000;
  document.getElementById("reactionTime").innerHTML = reactionTime + "seconds";
  setTimeout(makeShapeVisible, Math.random() * 1000);
}
