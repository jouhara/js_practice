//unary, binary
const a=10;
console.log(a,-a)//10,-10

//+,-<*,/,%,**     ** sqrr  sqr root **(1/2) cube **(1/3)
//operatr precidenc

/**
 * BODMAS
 * 
 */
const val1=3*4+2*6/2//18
//assignmnt opertr right to left
const c=8;
//arith metic opertor left to right
x=1,y=2;
let z=3-(x=y+1)//0

//shorthnd += etc
//incriment dcrimnnt
const s=12;
s++;//s=s+1 post incremnt
//pre incrmnt 
//++s dfrnce is
 "2">1//true
 true==1//true
 fale==0//true
 "01"==1//tru
 ''==false//tru
 //srict equalty ===//checks  datatypes
 false==0//trye
 false===0//flse
 null===undefined//flse
 null==undefined//true

 "h"||10//h
 ''||10//10 or doesnt check second value if fisrt is truthy, it print frst, if all falsy last value returned, 
 null||undefined||0//0

 let uname=prompt("enter name")//if cancel null
 if (uname===''|| unmae===null){
    uname=anonymous;
 }