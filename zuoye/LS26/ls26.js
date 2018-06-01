//异步的几种形式：回调函数，事件监听机制，发布订阅，Promise


//ajax异步请求的实现：
//1----创建xhr对象
var xhr = new XMLHttpRequest();
//2----配置发送参数
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
//使用get()方法得到数据，true表示使用异步方式，false表示使用同步方式，默认情况下是true
//3----发送
xhr.send();
//4----处理响应


/*
处理响应中的status （xhr.status == 200 ）
xhr.status是http协议的状态码：200成功、404没有找到资源、500服务器报错
处理响应中的readyState是状态值（0,1,2,3,4）
readyState==0表示xhr对象初始化完成
readyState==1表示请求已经发出
readyState== 2表示服务器端数据已经完全返回
readyState== 3表示正在解析数据
readyState== 4表示数据解析完成，可以使用了
*/
//前后端交互
//前段代码：
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
xhr.send();

//后端代码：
var http = require("http");
var url = require("url");
http.createServer(function (req, res) {
    var getDataStr = url.parse(req.url).query;
	res.writeHead(200, {
        "Content-Type": "text/plain",
       "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Methods": "GET, POST"
    });
    setTimeout(function () {
        res.end("你好，我已收到你发的信息："+getDataStr);
    },20000*Math.random());
}).listen(8080,"127.0.0.1");//监听信息，一旦监听到信息，立马响应前面的函数
console.log("start server!");


function Student(name,age) {
    this.name = name;
    this.age = age;
}//构造函数
Person.prototype.show = function(){
    console.log("i'm",this.name,",i'm ",this.age,"years old!")
}
module.exports = Student;//抛出模块
//----------------------------------------
var Student=require("./Student");
var s=new Student('guo',21);
s.show();