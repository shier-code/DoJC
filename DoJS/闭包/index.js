/**
 * 什么是闭包：
 * 密闭容器，类似于map,set,用于存储数据
 * 闭包是一个对象，存储数据的格式 key:value
 * 
 * 闭包的优点：
 * 延长外部函数局部变量的生命周期
 * 
 * 闭包的缺点：
 * 容易造成内存泄漏
 * 
 * 注意点：
 * 用完闭包要及时清除
 *  */ 



function fun() {
    var count = 1;

    return function () {
        console.log(count)
    }

}

var fun2=fun();
fun2();
fun2()

//test2

function fun(n,o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n)
        }
    }
}
var a=fun(a)
a.fun(1);
a.fun(2);
a.fun(3);
var b=fun(0).fun(1).fun(2).fun(3)
var c=fun(0).fun(1)
c.fun(2)
c.fun(3)