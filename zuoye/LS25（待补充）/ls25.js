//<div id="div1" onclick="div1click()"></div>
//<div id="div2"></div>
window.onload = function () {//打开窗口执行
    console.log("window onload");
    var div2 = document.getElementById("div2");//获取结点
    //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    div2.onclick = function () {
        console.log("div2 click");
    }
    // div2.onmouseover = function () {
    //     console.log("div2 mouseover");
    // }//鼠标在div2移动，函数不会执行，因为先执行script中的函数，后执行body中的语句，找不到div2，所以不执行
}

//事件对象event
window.onload = function (e) {
     console.log("window onload");
     console.log("e:", e);
     console.log(e.target);//执行事件的对象
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // 测试0
        console.log(e.type);//click事件类型
        console.log(e.target);//思考target和this此时是否一样？
        console.log(e.target,this)//结果是一样的
        //所有情况都一样么?有没有某种情况不一样呢？
        //有一些情况是不一样的

        // 测试1
        // console.log(e.clientX,e.clientY);
        // console.log(this, "-----", e.target.id);

        // 测试2
        console.log(e);// MouseEvent
        console.log(e.__proto__);//MouseEvent
        console.log(e.__proto__.__proto__);//UIEvent
        console.log(e.__proto__.__proto__.__proto__);//Event
        console.log(e.__proto__.__proto__.__proto__.__proto__);//Object {}
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    }


    //事件响应处理方式
    //HTML事件响应处理<div id='div1' onclick='eventHandler()'></div>
    //DOM0级事件响应处理div1.onclick = eventHandler;
    //DOM2级事件响应处理addEventListener()

    // DOM0级事件处理

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//思考：是覆盖还是两个语句都会输出？
    //覆盖，只输出xx
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应，覆盖之前的点击事件，什么反应都没有
}
// DOM2级事件处理
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);//添加新的事件
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });//思考：是覆盖还是两个语句都会输出？
    div2.removeEventListener("click",eventHandler);//取消事件响应处理
    //下述代码部分，参见事件流部分
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}

