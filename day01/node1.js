console.log('给第一个客人点单');
var eat = function(){
    console.log('吃饭');
}
setTimeout(function(){
    eat();
},2000)

console.log('给下一个客人点单');