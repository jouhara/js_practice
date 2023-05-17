console.log(a)//undefined
var a=10;
console.log(a);
/*
all variables will be hoisted at the top of the file and they are declared with undefined value
var a ;
console.log(a);
var a=10;
console.log(a)

in case of var 
var a =undefined hoisted , var a is in a temporal zone (memory allocated and dedad zone completed);
console.log(a); not in temporal one
var a=10;
console.log(a)


in case of var 
let a ; hoisted , var a is in a temporal zone (memory not allocated );
console.log(a);  in temporal one
var a=10;  dedad zone completed
console.log(a)
*/

/**
 const _name='kkk';
 const $nme='iii';
 const _='ppp';
 const $='kkk';
 const img1='ooo.png';
 const 1imh='lll' wrong;
 const img-nme=''' wong
 */