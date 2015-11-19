var n = 1;
var s = 'hello';
var f = 'global f';
function fn(){
    console.log(n);//undefined
    console.log(s);//hello
    n = 2;
    var n=3;
    var f = 'fn -f';
    function inner(){
        console.log(n);//3
        console.log(s);//hello
        console.log(f);//'f'
        var f = 'f';
    }
    inner();
}
fn();

/**
 * 全局代码的上下文内容
 *  普通变量
 *  函数定义 函数声明 函数表达
 *  this
 * 函数内部
 *  参数
 *  arguments
 *  自由变量的取值
 *
 **/