/**
 *  预先解释
 *  在程序运行开始的时候要进行安排变量
 *    变量 var a = ''声明并不赋值
 *    函数表达式 var fn = function(){} 声明不赋值
 *    函数定义 function(){} 声明并赋值
 *    this 声明并赋值
 *
 *  函数每调用一次，都会产生一个新的上下文环境
 *  函数在定义的时候(不是调用的时候)已经确定里面的自由变量的作用域
 */
console.log(num);//undefined
var num = 9;//
hello();
world();
function hello(){//
    console.log('先执行后定义');
}
var world = function(){//
    console.log('先执行后定义');
}
