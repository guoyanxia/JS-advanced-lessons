//JSON本质是一个字符串
//在JSON中。凡是key属性都要加引号
var obj4 = { x: 1, y: 2, a: [1, 3, 5], b: "xyz" };
var json4 = '{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';

// JSON.stringify  复合对象转换为字符串
JSON.stringify({ x: 5 });// '{"x":5}'
// JSON.parse的用法 
var jsonStr4 = '[1,"x",true,{"y":2,"z":3}]';
var o4 = JSON.parse(jsonStr4);
console.log(o4);//[1, "x", true, Object]
// JSON.stringify 中的replacer回调var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);//find key a  find key z  {"a":12345,"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}]}
// JSON.parse(text[, reviver])
var o8 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); // 1 2 4 6 5 3如果是复合对象，先找最里层
        return v;       
    });
console.log(o8);



var o6 = JSON.parse('{"p": 5}', function (k, v) {
    console.log("回调调用");//几个属性和key就回调几次
    if(k === '') return v;     // 
    return v * 2;              //先执行
});                            // { p: 10 }
console.log(o6);
