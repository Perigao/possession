// hearer_地区转换
let areaSwitch_btn = document.querySelector(".area a");
let cityChoose = document.getElementById("citySwitch");

// 地区转换
areaSwitch_btn.onclick = function(){
    cityChoose.style.display = 'block';
}
// cityChoose.onmouseout = function(){
//     cityChoose.style.display = 'none';
// }
// hearer_我的驴妈妈列表
let mylvMother_btn = document.querySelector(".mylvMother");
let lvList =  document.querySelector(".lvList");

areaSwitch_btn.onmouseout = function(){
    cityChoose.style.display = 'none';
}
// 我的驴妈妈列表
mylvMother_btn.onmouseover = function(){
    lvList.style.visibility = 'visible';
    mylvMother_btn.style.background = '#fff';
}
mylvMother_btn.onmouseout = function(){
    lvList.style.visibility = 'hidden';
    mylvMother_btn.style.background = 'none';
}

// hearer_微信二维码
let weChat_btn = document.querySelector(".pictures .p1");
let weChat =  document.querySelector(".weChat");

// 微信二维码
weChat_btn .onmouseover = function(){
    weChat.style.display = 'block';
}
weChat_btn .onmouseout = function(){
    weChat.style.display = 'none';
}

// hearer_链接
let href_btn =  document.querySelector(".pictures .p2");
let href =  document.querySelector(".href");

// 链接
href_btn .onmouseover = function(){
    href.style.display = 'block';
}
href_btn .onmouseout = function(){
    href.style.display = 'none';
}

// hearer_号码
let allNum_btn =  document.querySelector(".teleNum");
let allNum =  document.querySelector(".allNum");

// 号码
allNum_btn .onmouseover = function(){
    allNum.style.display = 'block';
}
allNum_btn .onmouseout = function(){
    allNum.style.display = 'none';
}

// hearer_合作中心
let oppCenter_btn = document.querySelector(".oppCenter");
let centerList =  document.querySelector(".centerList"); 

// 合作中心
oppCenter_btn.onmouseover = function(){
    centerList.style.visibility = 'visible';
    oppCenter_btn.style.background = '#fff';
}
oppCenter_btn.onmouseout = function(){
    centerList.style.visibility = 'hidden';
    oppCenter_btn.style.background = 'none';
}

// nav_出境游
let outboundTrip_btn = document.querySelector(".outboundTrip_btn");
let outboundTrip = document.querySelector(".outboundTrip");
let triangle1 = document.querySelector(".triangle1");

// 出境游
outboundTrip_btn .onmouseover = function(){
    outboundTrip.style.display = 'block';
    triangle1.style.backgroundPosition = -21+"px "+ -130 +"px";
}
outboundTrip.onmouseout = function(){
    outboundTrip.style.display = 'none';
    triangle1.style.backgroundPosition = -21+"px "+ -119 +"px";
}

// nav_旅游攻略
let strategy_btn = document.querySelector(".strategy_btn");
let strategy = document.querySelector(".strategy");
let triangle2 = document.querySelector(".triangle2");

// 旅游攻略
strategy_btn .onmouseover = function(){
    strategy.style.display = 'block';
    triangle2.style.backgroundPosition = -21+"px "+ -130 +"px";
}
strategy .onmouseout = function(){
    strategy.style.display = 'none';
    triangle2.style.backgroundPosition = -21+"px "+ -119 +"px";
}

// banner图
var bannerMain = document.querySelector(".bannerMain");
var picture = document.querySelectorAll(".picture");
var btn = document.querySelectorAll(".circle ul li");
var isNow = 0;
// 抽取方法
var autoPlay = function(ind){
    for(let i =0 ; i < btn.length ; i++){
        btn[i].className = ' ';
        picture[i].className = 'picture';
    }
    btn[ind].className = 'Light';
    picture[ind].className= 'active picture';
}
// 小圆点
for(let i = 0 ; i < btn.length ; i++){
    btn[i].index = i;
    btn[i].onmousemove = function(){
        isNow = this.index;
        autoPlay(isNow);
    }
}
//定时器
var timer = setInterval(function(){
    isNow++;
    if (isNow > picture.length - 1) {
        isNow = 0;
    }
    autoPlay(isNow);
},2000)

var time = setInterval (function(){
    isNow++;
    if(isNow > pictures.length-1){
        isNow = 0;
    }
    autoPlay(isNow);
},2000)


// banner图上定位的drag
let vertical_btn = document.querySelectorAll(".verticalList li");
let contentRight = document.querySelectorAll(".contentRight .contentMain");

for(let i = 0 ; i <vertical_btn.length ; i++){
    vertical_btn[i].onclick = function(){
        for(let j = 0 ; j <vertical_btn.length ; j++){
            vertical_btn[j].className = ' ';
            contentRight[j].style.visibility = 'hidden' ;
        }
        vertical_btn[i].className = 'selected';
        contentRight[i].style.visibility = 'visible' ;
    }
}

// 日期
let defaultDate = document.querySelectorAll('#data');
for (let i = 0; i <defaultDate.length; i++) {
    defaultDate[i].valueAsDate = new Date();
}

// 滑过切换导航 
let listNav_btn = document.querySelectorAll(".listNav_head ul li");
let listNav_body_btn = document.querySelectorAll(".listNav_Main .block");
let listNav = document.querySelector(".listNav");

for(let i = 0; i <listNav_btn.length; i++){
    listNav_btn[i].onmousemove = function(){
        for(let j = 0 ; j<listNav_btn.length ; j++){
            listNav_btn[j].className = '';
            listNav_body_btn[j].style.visibility = 'hidden';

        }
        listNav_btn[i].className = 'active';
        listNav_body_btn[i].style.visibility = 'visible';
        if(i==0){
            listNav.style.height = 640+"px";
        }
        if(i==1||i==2){
            listNav.style.height = 350+"px";
        }
    }
}

// content模块头部地区点击切换
let content_head_btn = document.querySelectorAll(".content_head ul li");

for(let i = 0 ; i < content_head_btn.length ; i++){
    content_head_btn[i].onclick = function(){
        for(let j = 0 ; j <  content_head_btn.length ; j++){
            content_head_btn[j].className = ' ';
        }
        content_head_btn[i].className = 'active';
    }
}

// 最右侧固定定位滑过特效
let skip_btn = document.querySelectorAll(".fixedRight .top li");
let rightHidden =document.querySelectorAll(".boxHidden");
for(let i = 0 ; i <skip_btn.length ; i++){
    skip_btn [i].onmousemove = function(){
        for(let j = 0 ; j<skip_btn.length; j++){
            rightHidden[j].style.visibility = 'hidden';
        }
        rightHidden[i].style.visibility = 'visible';
    }
}

for(let i = 0 ; i <skip_btn.length ; i++){
    skip_btn [i].onmouseout = function(){
        for(let j = 0 ; j<skip_btn.length; j++){
            rightHidden[j].style.visibility = 'hidden';
        }
    }
}