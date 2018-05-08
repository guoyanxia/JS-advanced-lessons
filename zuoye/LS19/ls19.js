var arr1=[2,5,8];
arr1.forEach(function(a){console.log(a,this);});
console.log(arr1);

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){console.log(a,i,this);},arr2);
console.log(arr1);


var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
	arr3[i]=a>arr2[i]?a:arr2[i];},arr2);
console.log(arr3);
VM323:6 [2, 6, 8]

//创建对象
var date1=new Date(2018,4,7,14,29,01);
console.log(date1);//月份差一

var date2=new Date('2018-05-07');
console.log(date2);//月份不差一
//
var date3=new Date(1000);//1000毫秒
console.log(date3);//（从1970年1月1日00:00:00开始计算）

var date4=new Date();
console.log(date4);

var date5=new Date(NaN);
console.log(date5);//无效日期，但是date5任然是一个Date对象


var date6=new Date();创建的是一个Date对象
var date7=Date();//创建的是字符串
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());//原型方法

var today=new Date();
today.setMonth(7);
console.log(today);
console.log(today.getDay());
//VM776:3 Tue Aug 07 2018 14:53:01 GMT+0800 (中国标准时间)
//VM776:4 2
//时间运算
var today=new Date();
var newday=new Date(today.getTime()+1000*3600*24*50);
console.log(newday);