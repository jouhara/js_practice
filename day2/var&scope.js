console.log("helloooo");
//let var const
//let const new
//var old

let a=10;
var b=20;
const c=30;
console.log(a,b,c)

//scopes
/* global scope

 */
var d=40
//block scope,some thig inside curly brace if(tru){}
//if, for while
//function or local scope...
//varbl dclred with var are not block scop
{
    var e=90;
    let f=100;
    console.log(e,f)
}
//console.log(e,f)
function fun1(){
    let a1=10;
var b1=20;
const c1=30;
console.log("fun",a1,b1,c1)
}
fun1()
//console.log("out",a1,b1,c1)

for(var i=0;i<5;i++){
}
console.log(i)//as var it is accesible outside so use et
//var/let and const are function scope
