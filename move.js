var pos=0;
let imgObj=document.getElementById("myImage");
function init() {
    // imgObj=document.getElementById("myImage");
    imgObj.style.position= 'relative';
    imgObj.style.left='0px';
}
var pos=0;
var MoveT=true;
function moveRight() {

    if ( !MoveT){
        imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
        pos--;
        if(pos<0){
            MoveT=true;
        }
    }
    else if(MoveT){
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        pos++;
        if (pos>10){
            MoveT=false;
        }
    }
    alert("pos"+pos)
}
window.onload= init;