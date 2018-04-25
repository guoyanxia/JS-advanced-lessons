//创建对象的三种方式
var obj1={
	name:guo,
	age:1,
}
var obj2=Object.create(obj1);//obj2创建原型指向obj1
obj2.name='guo';
obj2.age=1;
var Obj3=function(name,age){//Obj3大写充当一个类
	this.name=name;
	this.age=age;
}
var obj3=new Obj3('guo',1);//实例化对象

obj3 instanceof Obj3//true
//属性
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);//y:2,x:1默认先输出可枚举属性

//原型
var a={}；
a.__proto__;//
a.__proto__===Object.prototype//true
//通过自变量创建的对象的原型是Object.prototype
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__);//Object {}
console.log(obj.__proto__ === Object.prototype);//true

//通过create原型创建的对象
//多了对象同一个原型
var obj1={x:2};
var obj2=Object.create(obj1)
obj2.y=3;
var obj3=Object.create(obj1)
obj3.y=3;
console.log(obj2.x)//2自身找不到属性，去原型上找到
obj2.__proyo__.x=5;
ocnsole.log(obj3.x)//5

//原型链上的属性操作
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.hasOwnProperty("z"));//false 通过实例化的对象调用
console.log(Object.keys(obj));//原型方法
//删除原型链上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了


//当一个函数与new结合，该函数将作为构造函数来使用，用来创建JS对象,首字母大写
var Person=function(){
	name:'jack';
	console.log('hi');
}
var p=new Person();
console.log(p);
//个性定义在自身，共性定义在原型上
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayhi=function(){
	console.log(this.name,this.age);
}
var p=new Person('mike',23);
p.sayhi();//hi
p.__proto__===Person.prototype;
Person.__proto__===Function.prototype//true
Person.__proto__.__proto__===Object.prototype//true
Person.__proto__.__proto__.__proto__===null//true

//constructor
var p1=new Person('jack',21);
p1.constructor;//Person(){};

//原型
var arr=new Array();
arr.__proto__===Array.prototype;
arr.__proto__.__proto__===Object.prototype;
arr.__proto__.__proto__.__proto__===null;