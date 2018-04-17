//所有对象的key值都是字符串值

//对象的定义
var dog={
	age:5,
	name:'doudou',
	jump:function(){console.log('跳');}
}
console.log(dog.age);
console.log(dog.name)
dog.jump();
//对象的分类
//part1
console.log(typeof Array);//function
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);
console.log(typeof Math);//object
console.log(typeof JSON);//object
//part2
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");
//所有的变量都是对象，对象的类型是，string，number等
//function的深层理解
onsole.log(Function instanceof Function);//true
onsole.log((new Function()) instanceof Function);//true,实例化出来一个函数
onsole.log((new (new Function())) instanceof Function);//false实例化出来一个对象


//访问器属性，set（），get（）方法
//访问和设置时不加括号
var o = {
    _x:1.0,//key名称不能和方法名称重复
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//关注优先级的高低，访问器高于key属性
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x);//因为get()方法优先级高于key属性，所以o.x调用了get()


//过滤作用
var p1={
	_name:'jack',
	_age:23,
	set age(val){
		if(val>0&&val<150){
			this._age=val;
		}else{
			console.log('请设置正常的年龄');
		}
	}，
	get age(){
		return this._age;
	}
};
p1.age=178;
//一切对象的源头都是空
//创建对象的方式
var o={
	x:12
}
o.__proto__===Object.prototype;
var o2=Object.create(o);
o2.__proto__===o;
var person=function(name){
	this.name=name;
}
var p=new person('abc');
p.__proto__===person.prototype;

//对象属性的增删改查
var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);

//[]和.访问的区别  for循环
var obj={x1:12,x2:23,x3:34}
for(var i=1;i<4;i++){
    console.log(obj["x"+i]);
}
