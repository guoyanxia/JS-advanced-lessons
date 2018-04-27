var a=1;
function f1(){
	var b=2;
	function f2(){
		console.log(a,b);
}
f2();
}
f1();//变量进行作用域传递
// 1 2

//一般函数中的this(非严格模式下)指代全局对象window
function this(){
	console.log(this===window);
}
this();//true

//通过this修改，添加，删除全局对象属性
var a=10,b=20;
function this(){
	this.a=30;
	delete this.b;

}
this();
console.log(a);//30


//注意
function test(){
	var a=b=2;
}
test();
console.log(a);//undefind 因为这样写a为局部变量
console.log(b);//2



//对象方法中的this（无函数嵌套的情况下）
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x=x;
		this.y=y;
	}
};
point.moveTo(1,1);//this绑定调用此方法的对象，即point 对象
console.log(point)

//构造函数中的this
function Person(age){
	this.age=age;//this指向实例化的对象
}
var p=new Person(20);
p.age;
//实例化多个对象，this 指向当前调用对象
var Person=function(name,age){
	this.name=name;
	this.age=age;
	this.show=function(){
		console.log(this.name,this.age);
	}
}
var p1=new Person('Jack',20);
var p2=new Person('Mike',20);
p1.show();
p2.show();
//
var name='1',age=12;
var Person=function(name,age){
	this.anme=name;
	this.age=age;
	show=function(){
		console.log(this.name,this.age);
	}
}
var p1=new Person('Jack',20);
var p2=new Person('Mike',20);
show();// 1 12 show()相当于一个全局函数

//私有属性 闭包？
//间接调用中的this（call、apply）通过call/applay间接调用的函数中的this（指代第一个参数）
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5 this 指代objB


//this 的缺陷
//有函数嵌套的情况下,this不进行作用域传递、函数嵌套中的this存在缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//被认为成一般函数,this绑定到了window
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定window
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//0,0
console.log(window.x,window.y);//2,2

//解决方法1 使用变量（that或self）软绑定，使this指向正确
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//，软绑定，因为变量可以传递,所以that可以传递到最里面的那一层
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//that此时指向的是point对象
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//Object {x: 2, y: 2}

//解决方法2  通过call和apply来解决，也有缺陷
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了全局
        }
        function moveToY() {
            this.y = y;//this绑定到了全局
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX() this 指向point对象
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//2,0

//解决方法3 使用Function.prototype.bind，使this指向正确
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了point对象
        }
        function moveToY() {
            this.y = y;//this绑定到了point对象
        }
        moveToX.bind(point)();//函数对象的绑定方法
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);

//构造函数中嵌套函数缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:2,y:3}没有移动

//解决方法1
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)

//解决方法二
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        //此处that为实例化出来的p对象
        function moveX(x) {
            this.x+=x;//
        }
        function moveY(y) {
            this.y+=y;//
        }
        moveX.call(this,x);
        moveY.apply(this,[y]);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);

//解决方法3
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        //此处that为实例化出来的p对象
        function moveX(x) {
            this.x+=x;//
        }
        function moveY(y) {
            this.y+=y;//
        }
        moveX.bind(this,x)();
        moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);






