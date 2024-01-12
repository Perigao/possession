var otherarea = document.getElementById("otherArea");
var area = document.querySelector(".area");
area.onmousemove = function(){
    otherarea.style.display = 'block';
}

area.onmouseout = function(){
    otherarea.style.display = 'none';
}

var login = document.getElementById("login");
var download = document.getElementById("download");
var loginOther = document.getElementById("loginOther");
var downloadOther = document.getElementById("downloadOther");

login.onmousemove = function(){
    loginOther.style.display = 'block';
    loginOther.style.background = 'white';
}

login.onmouseout = function(){
    loginOther.style.display = 'none';
}
download.onmousemove = function(){
    downloadOther.style.display = 'block';
}

download.onmouseout = function(){
    downloadOther.style.display = 'none';
}
var input = document.querySelector("input");
input.onclick = function(){
    input.style.border = 'black';
}
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var picture = document.getElementsByClassName("choose");
var isNow = 0;
//抽取
var autoPlay = function(ind){
    for(var i = 0 ;i < picture.length; i++){
        picture[i].className = 'choose';
    }
    picture[ind].className = 'selected choose';
}
next.onclick = function(){
    isNow++;
    if(isNow > picture.length-1){
        isNow = 0;
    }
    autoPlay(isNow);
}
//上一页
prev.onclick = function(){
    isNow--;
    if(isNow < 0){
        isNow = picture.length-1;
    }
    autoPlay(isNow);
}
//轮播
var time = setInterval (function(){
    next.onclick();
},2000)
prev.onmousemove = function (){
    prev.style.background = '#ff1268';
}
prev.onmouseout = function (){
    prev.style.background = 'black';
}
next.onmousemove = function (){
    next.style.background = '#ff1268';
}
next.onmouseout = function (){
    next.style.background = 'black';
}
























