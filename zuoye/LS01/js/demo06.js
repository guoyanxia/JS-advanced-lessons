// var obj={a:12,b:{c:"ab"}};则a,b都在堆区
// 赋值
var a=2;
var b=a;
a=3;
console.log(b);  /*2*/
var obj1={"key":2};
var obj2=obj1;/*obj2是obj1的一个引用，并没有重新开辟空间*/
obj2.key=3;
console.log(obj1.key);/*3*/
var obj1={"key":2};
var obj2=obj1;
obj2.key=3;
obj2={"key":4};/*obj2 重新开辟内存空间*/
console.log(obj1.key)/*3*/

// 判等
var a=2;
var b=2;
a==b  /*true*/

var c=[1,2];
var d=[1,2];/*c,d是两个不同的内存空间*/
c==d  /*false*/
c===d  /*false*/

d=c;/*赋值*//*c,d是引用同一个内存空间*/
c===d  /*true*/

vara =123;/*基本数据类型*/
var b=new Number(123);/*对象数据类型*/
console.log(a==b);    /*true 发生了隐式数据类型转换，对象转换为基本*/
console.log(a===b)   /*false*/

// 函数参数传递
var a=2;
function foo(x){
	x=3;
}
foo(a);
console.log(a);/*2*/

var a={y:123};
function foo(x){
	x.y=345;/*x是a的一个引用，对x进行改变就是对a进行改变*/
}
foo(a);
console.log(a);/*345*/

var a={y:123};
function foo(x){
	x.y=345;/*x是a的一个引用，对x进行改变就是对a进行改变*/
	x={y:456};/*x重新开辟内存空间*/
}
foo(a);
console.log(a);/*345*/

var a={y:123};
function foo(x){
	x={y:456};/*x重新开辟内存空间,与a无关*/
	x.y=345;
}
foo(a);
console.log(a);/*123*/


console.log(typeof NaN);/*Number*/