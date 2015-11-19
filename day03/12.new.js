/**
 * new
 * 1.创建一个新的对象
 * 2.将构造函数作用域赋给这个对象
 *
 */
function Person(name,age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log(this.name);
    }
}

//var p = new Object();
//Person.apply(p);
//return p;
var s = [1,2,3];//Array
var s = new Array();
s[0] = 1;
s[1] = 2;
s[2] = 3;
s.slice(0);
var slice  = Array.prototype.slice;
function create(Person){
    var p = new Object();
    var args = slice.call(arguments,1);
    p.__proto__ = Person.prototype;
    Person.prototype.constructor = Person;
    Person.apply(p,args);
    return p;
}
function Foo(name){
    this.name = name;
    this.hello = function(){
        console.log(this.name);
    }
}
Foo.prototype.my = function(){
    console.log('my');
}
var f = create(Foo,'zfpx');
f.hello();
f.my();
//call apply bind
console.log(Function.prototype.call);