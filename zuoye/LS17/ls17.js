//JavaScript的原型继承是对象-对象的继承
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);//5
subObj_First.x = 5;//给其中一个实例化对象添加了一个属性x
console.log(subObj_Second.x);//1
//this的对象指向调用其方法的函数实体
//模拟类-类继承方式一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);//当作普通函数对待，和new 实例化对象的区别
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);//name添加到了自身上
var s2 = new Student("www",23,2017002);

//模拟类-类继承方式二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);//等价于Student.prototype=Person.prototype
// console.log(Person.prototype.constructor); //
// console.log(Student.prototype.constructor); //
Student.prototype.constructor = Student;//把指飞了的student指向正确
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);



//prototype是函数的一个属性（每个函数都有一个prototype属性），这个属性是一个指针，指向一个对象。它是显示修改对象的原型的属性。
//__proto__是一个对象拥有的内置属性（请注意：prototype是函数的内置属性，__proto__是对象的内置属性），是JS内部使用寻找原型链的属性。

//静态方法与原型方法的区别
//静态方法：属于类 Object.keys({x:1,y:2});返回一个数组
//原型方法：属于对象

//对象的公有，私有属性
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);//123
console.log(a.privateId);//undefined
a.getId();//123,456
