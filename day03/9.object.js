/**
 * 一切皆对象
 * 值对象
 *   undefined number string boolean
 * 引用对象
 * function object array new Number() new Array()
 */

console.log(typeof('aaaa'));//string
console.log(typeof([]));//object
console.log(typeof({}));//object
console.log(typeof(new Array()));//object
console.log(typeof(function(){}));//function

console.log({} instanceof Object);//true
console.log(Object instanceof Function);//true

