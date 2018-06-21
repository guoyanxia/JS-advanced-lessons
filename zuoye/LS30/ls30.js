//新增的箭头函数
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};//涉及到语句块必须加return
f(2);//返回3

//没有参数和有多个参数的情况下，需要使用小括号来表示参数，如果有多条语句则需要有大括号表示函数体
var f = () => 5;
// 等同于
var f = function () {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};

//箭头函数可以与变量解构结合使用
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

//如果返回的是一个对象，则需要用小括号括起来
var getTempItem = itemId => ({ id: itemId, name: "Temp" });
//getTempItem(23);
//--------------------------------------------------------------
// 箭头函数有几个使用注意点。
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21

//-------------------------------------
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42

// ES6 中实现函数参数默认值的方法 ,使用babble查看ES5的写法
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

//--------------------------------------
//...Rest 相当于合并若干参数为一个数组，主要用于函数定义时，代替 arguments，组解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");//输出 ["a","b","c"]
//----------------------------------------------
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//输出 "a",["b","c","d"]
//思考：f("a",["b","c","d"]);//输出 "a",[["b","c","d"]]
f("a");//输出 "a",[]
f();//输出 undefined,[]


//...Spread 扩展操作符 相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[] 