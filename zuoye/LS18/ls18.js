//数组的创建
//方式一  通过字面量的方式直接创建
var arr=[1,2,3,4];
//方式二 通过Array创建
var arr=new Array('5');

var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}//[undefined*5,5]  当执行到点击事件时，循环已经执行完成，此时i等于5

var a1 = [1,2,3];
var a2 = a1;//对象赋值是引用赋值
a2.length = 0;//a1也受到影响，因为他们指向同个空间
console.log(a1,a2);


var a3 = [1,2,3];
var a4 = a3;
a4 = [];//重新创建了一个对象a4,将以前的a4指向新的对象
console.log(a3,a4);//a4不受影响 

//数组基本操作
//增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：此时数组长度是3，不能彻底删除，将第三个元素改为empty
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始



var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//[empty*2,3,undefined]

//数组相对于普通对象的特别之处 区分元素和属性
0-2的32次方之内的非负整数为对象，其他为属性
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 在正常范围内，自动转换为整数，数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);//101
console.log(a);//[1: "Hi", 100: 0, -1.23: true]

//稀疏数组与多维数组
var a3 = [,,];
console.log(a3.length);//2 最后逗号之后的元素不算

var a1 = [,"abc"];
console.log(a1.length);

for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);//访问不到
//2
 //1 abc
 //false true

 //多维数组的实现  利用循环
 var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);//5*5二维数组
console.log(product);//8

//交错数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(i);//若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);
//数组的静态方法，构造器函数的方法
var bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

console.log(Array.isArray(arguments));//false

function f(){
	arguments.pop();
}
f(1,2,3,4);//报错,因为arguments不是一个数组，而是一个类数组对象

function f(){
	Array.prototype.pop.call(arguments);//间接调用
}
f(1,2,3,4);


//原型方法
//sort()
//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);

//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);

//高阶函数
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组，遍历每一个元素
// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true