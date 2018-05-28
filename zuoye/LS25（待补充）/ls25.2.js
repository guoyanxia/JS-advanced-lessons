//addEventListener()可以重复添加同类型事件，不会覆盖
div1.addEventListener("myEvent",function(){console.log("yy")},false);//第三个参数不写，默认是false
div1.addEventListener("myEvent",function(){console.log("zz")},false);
//事件流，节点树上流动事件
//两种流动方案：捕获和冒泡

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click",e.target,this);
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click",e.target,this);
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click",e.target,this);
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click",e.target,this);
    },false);
}//div2,div1,body,document
//false：冒泡阶段进行响应 后执行
//true：捕获阶段进行响应，先执行
//this都是指向自己，而target指向的是最精确的触发事件的节点
//div2,div2;div2,div1;div2,body;div2,document
//阻止事件冒泡
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
        e.stopPropagation();
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);//div2 div1  因为在div1中阻止了向上冒泡

    //阻止默认事件响应
    e.preventDefault();