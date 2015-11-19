#一、每个函数都有一个属性叫做prototype。
这个prototype的属性值是一个对象，默认的只有一个叫做constructor的属性，指向这个函数本身

![protptype](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype1.jpg)

#二、Object.prototype
Object也是一个函数，也有自己的prototype

![object](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype2.jpg)

#三、隐式原型
每个函数function都有一个prototype，即原型。
每个对象都有一个__proto__，可成为隐式原型，隐式原型指向创建它的函数的prototype。
obj这个对象本质上是被Object函数创建的，因此obj.__proto__=== Object.prototype。我们可以用一个图来表示。

![object](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype3.jpg)

#四、自定义函数的prototype。自定义函数的prototype本质上就是和 var obj = {} 是一样的，都是被Object创建，所以它的__proto__指向的就是Object.prototype。
但是Object.prototype确实一个特例——它的__proto__指向的是null

![fun](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype4.jpg)

#五、循环引用
所有的function都是new Function()创建出来的，所以它的__proto__也指向Function.prototype

![curcle](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype5.jpg)

#六、Function.prototype也是一个由Object创建出来的对象，它的__proto__也指向Object.prototype

![obj](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype6.jpg)

#七、完整图例

![total](http://7xjf2l.com2.z0.glb.qiniucdn.com/prototype7.jpg)