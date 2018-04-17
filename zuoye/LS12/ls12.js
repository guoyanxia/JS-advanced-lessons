//读写函数内部的局部变量
function f1(){
	var x=1;
	function f2(){
		return x++;}
	return f2;
}
var f3=f1();
console.log(f3())//1返回的是函数体执行完的值
console.log(f3());//2因为x变量没有被释放，长期存在

function f1(){
	var x=1;
	function f2(){
		return x++;}
	return f2();
}
var f3=f1();
console.log(f3);//1返回的是一个函数体
console.log(f3);//1
//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体

//形成了两个包裹体
function createinc(startvalue){
	return function(step){
		startvalue+=step;
		return startvalue;
    }
}
var inc=createinc(5);//闭包1
console.log(inc(1));//6
console.log(inc(2));//8
var inc2=createinc(5);//闭包2
console.log(inc(1));//9
console.log(inc2(1));//6

//闭包的常见形式(以函数对象形式返回)
var tmp=100;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);//16
fee(10);//17
fee(10);//18
//作为对象方法返回
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2
//闭包的作用
//可通过闭包来访问隐藏在函数作用域内的局部变量
//使函数中的变量被保存在内存中不被释放（单例模式）
//变量共享问题,使用立即执行表达式
