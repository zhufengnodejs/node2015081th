/**
 * 实现外部作用域访问内部作用域变量的方法
 *
 */
function City(name){
    this.name = name;
    this.age = 0;
}
var cityFactory = function(name){
    var city = new City(name);
    return function(){
        return city;
    }
}
var beijing = cityFactory('北京');
console.log(beijing);