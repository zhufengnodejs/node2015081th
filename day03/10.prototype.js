
function Person(){

}
console.log(Person.prototype.constructor ==Person);

var o1 = new Object();
console.log(o1.__proto__ == Object.prototype);


/*
var obj = new Object();
var o2 = {
    name:'zfpx'
}*/


function Parent(){

}
Parent.prototype.say = function(){
    console.log('hello');
}
function Child(){

}
Child.prototype = Parent.prototype;
Child.prototype = new Parent();
var c1 = new Child();
c1.say();

/*function Hello(){
    console.log('world');
}*/

/*
var Hello = new Function('name','console.log(name);');
var Function = new Function('name','console.log(name);');
Hello('world');*/
var Object = new Functin();
console.log(Function.__proto__ ==Function.prototype);
