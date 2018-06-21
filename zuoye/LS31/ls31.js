//symbol是基本数据类型，不能使用new命令
//声明变量
let s=Symbol();

var a=Symbol("foo");
console.log(a);//Symbol(foo)
//symbol是独一无二的，不会因为同名覆盖上一个语句
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false
//symbol不能与其他数据类型直接进行运算
var sym = Symbol('My symbol');
//"your symbol is " + sym;//报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'

//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);//Symbol(abc)

//使用Symbol是用[]，而不是用点操作符
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注意中括号内不要加引号，后面介绍加引号和不加引号的区别
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

//注意，Symbol值作为对象属性名时，不能用点运算符，使用中括号是注意使用引号和不用引号的区别
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';//a的属性名变成了一个字符串类型,并不是上面的Symbol()产生的变量
a[mySymbol] // undefined,
a['mySymbol'] // "Hello!"
//上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个
//Symbol值。

//遍历实例一
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]
 Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])})//遍历symbol属性的value值


var obj={c:"xx",d:"yy"}
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
for(var k in obj){console.log(k);}//c d

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//set对象的值是唯一的，不能重复
var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);//1 2 3 4 5 6
//-----------------------------------------------两种方法创建set对象
var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}// 2 3 5 4

// 例一  数组去重
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);//set本来是一个没有重复元素的对象，然后用...散列，再用[]封装为数组
// [1, 2, 3, 4]

//区分基本类型和引用（对象）类型，两个对象总是不相等的，思考下述代码
var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2//因为两个元素指向的不是同一个空间,
//基本数据类型
var set = new Set();
var a={};
var b=a;
set.add(a);
console.log(set.size); // 1
set.add(b);
console.log(set.size); // 1//两个元素指向的是一个空间，指针指向

set.__proto__===Set.prototype