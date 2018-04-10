//IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("4月");
})();//没有分号的话会报错
(function () {
    console.log("9日");
})()
//没有块作用域，无论循环多少次，i都是唯一的一个值，并不会产生10个，只有一个作用域
function f(){
	var get=[];
	for(var i=0;i<10;i++){
		get[i]=function(){
			return i;
        }
    }
	return get; 
}
var tmp=f();
tmp[3]();//10
//利用立即执行表达式解决问题，避免变量污染，变量共享，创建10个作用域
function f(){
	var get=[];
	for(var i=0;i<10;i++){
	(function(j){
		get[j]=function(){
			return j;}
        }(i));
    }
	return get; 
}
var tmp=f();
tmp[3]();//3
//避免闭包中非期望的变量共享问题
for (var i = 0; i < 5; i++) {//for循环中没有独立的块作用域，没有独立的变量
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}//5次循环一下执行完成，再进行定时输出
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);//创建5个独立的作用域
}

var f1 = function() {
    var res = [];
    var fun = null;
    for(var i = 0; i < 10; i++) {
        fun = function() { console.log(i);};//产生闭包
        res.push(fun);
    }
    return res;
}
// 会输出10个10，而不是预期的0 1 2 3 4 5 6 7 8 9
var res = f1();
for(var i = 0; i < res.length; i++) {
    res[i]();
}
//修改成：
var f1 = function() {
    var res = [];
    for(var i = 0; i < 10; i++) {
        // 添加一个IIFE
        (function(index) {
            fun = function() {console.log(index);};
            res.push(fun);
        })(i);
    }
    return res;
}
// 输出结果为0 1 2 3 4 5 6 7 8 9
var res = f1();
for(var i = 0; i < res.length; i++) {
    res[i]();
}