/**
 * 预解释是在作用域内的预解释
 * 在js里除了作局作用域外，只有函数才能创建作用域
 * 作用域有上下级关系，是看当前作用域是在哪个作用下面创建的
 *
 */
var num = 9;
var name = 'zfpx';
var x = 'hello';
function say(){
    console.log(x);//自由变量

    console.log(name);//zfpx
    num = 7;
    console.log(num);//undefined
    var num = 6;
}
say();
//函数在定义的时候，已经确定了函数体内自由变量的作用域取值,不是父作用域
var a = 10;
function  fn(){
    console.log(a);
}
function bar(f){
    var a = 20;
    f();//20
}
bar(fn);