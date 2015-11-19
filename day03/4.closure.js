/**
 * 闭包是函数运行时产生的那个私有作用域
 * 1.在全局代码的时候，全局上下文。每次调用函数又会产生上下文
 * 2.作用域地盘概念，抽象的概念。没有变量。
 * 通过作用域中的上下文来获取变量
 *
 *
 */
/*var a = 10;
var fn;
var bar = function(x){
    var b = 5;
    fn(x+b);
    console.log(a);
}
fn = function(y){
    var c = 5;
    console.log(y+c);//20
}
bar(10);*/
/**
 * 产生闭包的二种方式
 * 1.函数作为方法的返回值
 * 2.函数作为方法的参数
 *
 */
var i=9;
function fo(){
    i=0;
    return function(n){
        return n+i++;
    }
}
var f = fo();
var a = f(15);console.log(a);//15
var b = fo()(15);console.log(b);//15
var c = fo()(20);console.log(c);//20
var d = f(20);console.log(d);//21
