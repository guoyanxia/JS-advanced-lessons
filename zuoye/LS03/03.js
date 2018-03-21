/*算术运算符*/
var i=1;
var b=++i + ++i + ++i;
b;/*9*/

/*注意++和--的隐式类型转换*/
var x = "1";
console.log(++x); //2 ，转换为数字类型
var x = "1";
console.log(x+1);//11转换为字符串
 x+=1;
console.log(x);/*11*/
x/=1;
console.log(x);/*11*/

/*关系运算符*/
//part1
console.log(3===3);/*true*/
console.log(3==="3");/*false*/
console.log(3=="3");/*true*/
console.log(3==new String(3));/*true*/
console.log(3===new String(3));/*false*/

//part2
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);/*false*/
console.log(obj1 == obj2);/*false*/
console.log(obj1 === obj2);/*false*/
console.log(obj1 == new String("xyz"));/*false*/

//取反
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);/*false*/
console.log(obj1 !== obj2);/*true*/
console.log(obj1 != obj2);//true
console.log(obj1 != new String("xyz"));//true


var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:(new Boolean(false))};
console.log(obj1.z==obj2.z);/*true*/
//强制转换
var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:Boolean(new Boolean(false))};
console.log(obj1.z==obj2.z);// false

//逻辑运算符
console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);

console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);

//短路原则

var a=(new Boolean(false))||23;
console.log(a,typeof a);

console.log(new Boolean(false)&&0);
// 0问号


// Boolean {[[PrimitiveValue]]: false} "object"
//操作数非布尔类型，&&短路原则
console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"Jack"});
console.log(null&&"hello");
console.log({}&&"world");

//操作数非布尔类型，||短路原则
console.log(2||4);
console.log(0||4);
console.log({x:2}||{name:"Jack"});
console.log(null||"hello");
console.log({}||"world");