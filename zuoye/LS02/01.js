

<!-- 包装对象 -->
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];
function foo() { 
    console.log("foo function!");
};<!-- 函数也是对象 -->
function fee(){
	无返回值；
}
var new=fee();
console.log(new);<!-- undefined -->
console.log(typeof null);<!-- Object -->
var str="text";
str.p=4;<!-- 设置临时对象属性 -->
var t=str.p;<!-- 临时对象已释放，再输出t时为undefined -->


<!-- 数据类型转换 -->
//Part 1
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));

if(new Boolean(false)){
    console.log("执行");
}

//Part 2
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.345xx"));//
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));

console.log(parseFloat("123.345xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.345xx"));
console.log(parseInt("32343,345xx"));

//Part 3
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));

<!-- 方法 -->
/*Number*/
console.log(NaN === NaN);<!-- false -->
console.log(isNaN("12,3"));<!-- true -->
console.log(Math.floor(3.8));<!-- 3 -->
console.log(Math.floor(-3.8));<!-- -4 -->
console.log(Math.ceil(3.2));<!-- 4 -->
console.log(Math.ceil(-3.2));<!-- -3 -->
console.log(Math.round(-3.2));<!-- -3 -->
console.log(Math.round(-3.5));<!-- -3 -->
console.log(Math.round(-3.8));<!-- -3 -->

/*string方法*/
var str="abc-def-ghi-jkl-mn";
console.log("abc\ndefghi\\\n\'mn\'");
console.log(str.split("-"));
/*VM245:2 abc
defghi\
'mn'*/
VM245:3 (5) ["abc", "def", "ghi", "jkl", "mn"]
var str="abc-def-ghi-jkl-mn";
console.log(str.split("-",2));
console.log(str.concat("-opq"));
console.log(str.substr(4,7));
console.log(str.substring(4,7));
console.log(str.slice(2));
console.log(str.slice(2,5));
console.log(str.slice(2,-2));
console.log(str.slice(-2));
console.log(str.bold());
console.log(str.link());
console.log(str.fontcolor("red"));
console.log(str.fontsize(50));
VM549:2 (2) ["abc", "def"]
VM549:3 abc-def-ghi-jkl-mn-opq
VM549:4 def-ghi
VM549:5 def
VM549:6 c-def-ghi-jkl-mn
VM549:7 c-d
VM549:8 c-def-ghi-jkl-
VM549:9 mn
VM549:10 <b>abc-def-ghi-jkl-mn</b>
VM549:11 <a href="undefined">abc-def-ghi-jkl-mn</a>
VM549:12 <font color="red">abc-def-ghi-jkl-mn</font>
VM549:13 <font size="50">abc-def-ghi-jkl-mn</font>
 
/* Boolaen*//*所有对象都是真值*/
Boolaen({});/*true*/
Boolaen([]);/*true*/
Boolaen(new Boolean(false));/*true*/
Boolaen(function foo(){});/*true*/


