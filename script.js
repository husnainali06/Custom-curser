 var elementMain = document.querySelector("#main");

 var cursorMove = document.querySelector(".cursor")


 elementMain.addEventListener("mousemove",function(dets){
    cursorMove.style.left = dets.x+"px";
    cursorMove.style.top = dets.y+"px";
     
 })