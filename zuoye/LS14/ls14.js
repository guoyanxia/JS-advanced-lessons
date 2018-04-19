//三种方法定义对象
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=function(){
	this.z=3;
}
var obj3=new obj3()

//对象属性的特性
//属性的值，可写性，可配置性，可枚举性


//设置属性特性
//part1 defineProperty方法设置enumerable
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}//y:2

//一旦使用了configurable为false，其他特性将不能再被改变
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？
person.name = "Lucy";
console.log(person.name);//输出什么？
delete person.name;//因为可配置性为false
console.log(person.name);//输出什么？

//给对象添加属性
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}//遍历不到，如果不明确设置属性，默认为false
//console.log(obj.w);//有w，但上边for...in遍历不到


//对象访问器的属性特性
//可配置属性，可枚举属性，
//读取属性，写入属性默认为undefined
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"

//属性特性描述符
//访问：getOwnPropertyDescriptor(）
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//Object {value: 5, writable: true, enumerable: true, configurable: true}



//Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举

var obj2=Object.create({x:1});
obj2.y=2;
Object.defineProperty(obj2,"z",{value:3});
console.log(Object.keys(obj2));//["y"]
console.log(Object.getOwnPropertyNames(obj2));// ["y", "z"]


// Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
console.log(obj2.hasOwnProperty("x"));
console.log(obj2.propertyIsEnumerable("x"));

// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
console.log("x" in obj2,"y" in obj2,"z" in obj2,);//true,true,true
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
for(var k in obj2){ //遍历不到x属性
    console.log(k,obj2[k]);
}
console.log(obj2.hasOwnProperty("x"),obj2.hasOwnProperty("y"));






//对象是否可扩展 isExtensible           Object.preventExtensions();
//不可扩展就是指不可以添加新的属性
//新对象默认是可扩展的无论何种方式创建的对象，这里使用的是字面量方式
var empty1 = {a:1};
console.log(Object.isExtensible(empty1));//true
//使用传统方式为不可扩展对象添加属性
    empty.b = 2;//静默失败,不抛出错误
    empty["c"] = 3;//静默失败,不抛出错误
//对象是否密封 isSealed                 Object.preventExtensions();
//密封指不可以添加，不可以删除属性
//新建的对象默认不是密封的
    var empty = {};
    console.log(Object.isSealed(empty));//false
//对象是否冻结 isFrozen               Object.preventExtensions();
//冻结指不可以添加，删除，修改