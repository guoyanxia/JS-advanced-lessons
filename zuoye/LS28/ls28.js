
//let声明变量时不进行变量提升
console.log(a);//报错
let a = 2;
console.log(a);

//-------------------------------------
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();//undefined
//上面代码等价于-------------------------
var temp = new Date();
function f() {
	var temp;
    console.log(temp);
    if(false){
         temp = "Hi!";//变量提升，函数作用于内
    }
}
f();
//------------------------------------
var temp = new Date();
function f() {
    console.log(temp);
       let temp = "Hi!";//变量提升，函数作用于内
}
f();//报错，let暂时性死区，temp锁死在f()函数中，不去外层找
//---------------------------
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();//当前时间，Let锁死在if语句块中，f()中没有temp变量声明，所以会去外层找
//---------------------
let 不可以重命名
let a=1;
let a=2;//报错

//-----------
var 可以重命名，实现覆盖
//var和let声明的变量也不可以重名

//--------------ES6中变量的解构赋值
let [a,b,[c],d]=[2,3,[true],'ab'];
console.log(a,b,c,d);
// 2 3 true "ab"
//如果匹配不到则输出undefined
let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

//应用，对换
var a=1,b=['2'];
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);

//允许有默认值
var [foo3 = true] = [];//foo3 为 true
//如果没有默认值，而且匹配不到，则输出undefined

// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null,三等为false，所以不认为是undefined,不输出默认值

//------------------
var [x=1]=[];
var [y=1]=[undefined];
console.log(x,y);
// 1 1

//---------
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false
//-----------------------
let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//true

//应用，
let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);
// [1, 3, 5]

//----------------
//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"

//字符串，数字的解构赋值
//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString: s1} = 123;
console.log(s1); //

//函数参数的解构
//函数参数的解构也可以使用默认值,下例中用了两次的解构赋值
function move1({x = 0, y = 0} = {}) {//为x,y设置默认值
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

//----------------------------------------------
//注意，下面的写法会得到不一样的结果。
function move2({x, y} = { x: 0, y: 0 }) {//为函数参数设置默认值
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]
//上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果