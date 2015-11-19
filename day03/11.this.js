/**
 * this
 *
 */
//1.构造函数
function Person(){
    this.name = 'zfpx';
    this.say = function(n){
        console.log(this.name+n);
    }
}

var p = new Person();

//函数作为对象的属性
p.say();
var p2 = {name:'age'};
p2.say = p.say;
p2.say();//age

//当调call apply
//参数是谁this就是谁
p2.say.call(p,'zfpx');//zfpx
p2.say.apply(p,['zfpx']);

//在全局下面调用
var say2 = p2.say;
say2(); //undefined
var sp = say2.bind(p2);

sp('age');
