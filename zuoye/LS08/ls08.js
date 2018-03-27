//重点掌握********************************************************************
console.log(typeof new Function());// function创建了一个函数
console.log(typeof new Array());	 // object创建一个对象
console.log(typeof new Date());	 //  object创建一个对象
console.log(typeof new new Function());//object函数实例化对象，Function本身是一个函数，new又是一个函数，再new是函数实例化对象
console.log(Function instanceof Function);//true本身是一个函数
console.log(Array instanceof Function);//true函数是对象
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Array instanceof Object);//true
console.log(Function instanceof Object);//true
console.log(Math instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

var a =new Math();//报错，Math本身是一个对象
var a=new Array(5);//创建一个长度为5的数组
var b=new Array("5");//创建一个元素为5的数组

//任何对象都有原型,每一个构造函数都有一个prototype属性，指向另一个对象。
Obiect instanceof Function;//true 
var o={};
o._proto_===Object.prototype;//true
//************************************************************************
function Hello(){
}
//对类的prototype对象进行修改，增加方法method
Hello.prototype.method=function(){
alert("prototype测试");
}
var obj=new Hello(); //创建类Hello的实例
obj.method(); //调用obj的method方法
//***********************************************************************************
//argrments的使用
var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象

    console.log(foo.arguments.length);//4
    console.log(arguments.length);//4
	console.log(foo.length);//2
};
foo(1,2,3,4);//arguments.length是实参的个数，foo.length是形参的个数

//bind事件绑定参数问题
var class1=function(a,b,c,d){
	console.log(a+b+c+d);
}
var class2={};
var class3=class1.bind(class2,1,2);
class3(3,4);//10
//*****************************************
var class1=function(a,b,c,d){
	console.log(a+b+c+d);
}//函数
var class2={};//对象
var class3=class1.bind(class2,1,2,3);
class3(4);//10

//caller 获取 调用当前函数的函数
function fun(){
    console.log(fun.caller)//这里必须写在fun里面，因为caller只有函数执行过程中才有效
}
fun();//null
////////////////////////////////////////////////////////////////////////
function a(){
    fun();
    function fun(){
        console.log(fun.caller)//这里必须写在fun里面，因为caller只有函数执行过程中才有效
    }
}
a();//a函数function a(){
    /*fun();
    function fun(){
        console.log(fun.caller)//这里必须写在fun里面，因为caller只有函数执行过程中才有效
    }
}*/
//*******************************************************************************************
//callee经常使用为阶乘
function a (){
    console.log(arguments.callee)
}
a();//结果为a函数本身
//阶乘*******************************************************************************
function sum (num){
    if(num <= 1){
        return 1;
    }else{
        return num * (sum(num - 1))
    }
}
console.log(sum(5))//结果:5*4*3*2*1=120
//改写*************************************************************************************
(function(num){
    if (num <= 0)
        return 1;
    else
        return num * arguments.callee(num - 1);
}(5));//结果:5*4*3*2*1=120

//高阶函数的一般应用
//函数作为参数传入
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(x){return x+1;});//7
add(2,-3,Math.abs);
add(2,3,Math.sqrt);