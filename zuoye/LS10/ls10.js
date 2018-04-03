var a =10;
var b=20;
function fn(){
	var a=100;
	var c=200;
	function bar(){
		var a=500;
		d=600;//d是全局变量
    }
bar();
	console.log(a,b,c,d);
}
fn();
//通过new Function创建的函数对象不一定遵从静态词法作用域
//通过function引入一个新的作用域来限制变量的作用域，解决变量污染问题，实际上是变量提升
//作用域链是动态生成的，但仍旧遵从词法作用域
//没有块作用域
function test(o){
 2         var i = 0;
 3         if(typeof o == "object"){
 4             var j = 0;                    
 5             for(var k=0; k < 10; k++){
 6                 document.write(k);
 7             }
 8             document.write(k);            //k是可以被访问到的,即使他在for子句内
 9         }
10         document.write(j);                //说明j是可以被访问到的,即使他在if子句内
11     }
//有函数作用域，函数限定变量的作用域
var x = "globol value";
2     var getValue = function(){
3         var x;
4         alert(x);    //弹出"undefined"
5         x = "local value";
6         alert(x);    //弹出"local value";
7     }
8     getValue();


