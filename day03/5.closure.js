/**
 * 自执行函数内永远指向全局
 * 如果没有调用，this=全局global
 * 谁调用这个函数this就是谁
 *
 */

var number = 2;
var obj = {
    number: 4,
    fn1:(function(){
        this.number *=2;
        number = number *2;
        var number = 3;
        return function(){
            this.number *=2;
            number *=3;
            console.log(number);
        }})()}
var fn1 = obj.fn1;
console.log(number);//2
fn1();//9
obj.fn1();//27