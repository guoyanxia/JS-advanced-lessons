//函数定义与声明方式
//通过function构造函数实例化，可以动态创建函数
var max=new Function("a","b","return a>b?a:b;");
Function instanceof Function;//true
var str="return a>b?a:b";
var max=new Function("a","b",str);
max(2,3);//3 动态

//调用函数的主体
//part1
function foo(){
	console.log("foo");
}
foo();//window位主体
//part2
var x=45;
var test=function(){
	console.log(this.x);
}
var obj={
	x=23;
}
obj.test=test;
obj.test();//23函数主体为obj
test();//函数主体为window
//part3
var x=45;
var obj={
	x:23,
	test:function(/*主体为Obj*/){
		function foo(//主体为window){
			console.log(this.x);
		}
		foo();
	}
};
obj.test();//45 嵌套函数中的this是window为主体

//call()
obja={
	x:11
};
 objb={
	x:22
};
obja.foo=function(){
	console.log(this.x);
}
obja.foo.call(objb);//22只要数据类型，结构相似，就可以调用其他对象的方法

//apply()
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i can swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.apply(me,[3,4]);//i can fly ___ 5 6     i'm ABC i can swim ___ 3 4


//参数的数量问题
//多余的参数保存在arguments中，类数组对象，形参数量小于实参
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10


//参数类型与传递方式
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}

console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a); // step 4444  a仍为1 函数执行完，x被释放