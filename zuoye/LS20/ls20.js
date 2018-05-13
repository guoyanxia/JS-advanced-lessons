//正则对象的创建
//通过字面量直接创建
var reg1 = /[bcf]at/gi;
//通过构造函数创建
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]

//正则的语法概述和修饰符 g全局,i忽略大小写,m包含换行
//replace()方法
console.log('a2b3c4d'.replace(/[2-3]/,'x'));//axb3c4d
//正则表达式的元字符 及\相关字符
//          \d:任何数字   'a2d5'.replace(/\d/,'x');"axd5"
//               \D:任何非数字   'A2d5'.replace(/\D/,'x');"x2d5"
//        \w:任何字符(包括数字)    'A2d5'.replace(/\w/,'x');"x2d5"问号
//        \W：任意非字符
//        \s:空格

//关于边界
//       ^:前面是边界
//       $:后面是边界
//       \b:后面是边界，空格   console.log(/oon\b/.test("moon")); true
//       \B:前面是边界，空格

//量词 量词只影响前面一个字符
//？出现0次或1次（最多1次）  +出现1次或多次（至少1次）   *出现0次或多次（任意次）
//{n} 出现n次       {n,m} 出现n到m次      {n,}出现至少n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));//0Bb0b_0aBbb0ba意思是a出现0次或一次的情况，则匹配A,Aa
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));//0BbAb_0BbbAba 意思是a出现一次或多次的情况，则匹配Aa,Aaa
//正则表达式贪婪模式与非贪婪模式
//默认为贪婪模式（即尽可能多的匹配），在量词后加？可设置为非贪婪模式
"12345678".replace(/\d{3,6}/,'X');//X78
//分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));//匹配不到
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//X_11111
//或|运算符
"abcdefghijk".replace(/abcde|fghijk/g,"X");//XX
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//abcdefghijk_X_X
//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//忽略分组（？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//正则对象的属性和方法
//lastindex
var regExp=/a/gi;
console.log(regExp.test('ab'),regExp.lastIndex);// true 1
