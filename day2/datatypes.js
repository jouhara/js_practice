let msg='string';
msg=10;//cause dynmic typed js
//number
let n =10;//int
n=12.9999//float or doubl
n=Infinity;
console.log(n);
console.log(1/0)
n=-Infinity
console.log(n)
console.log(-1/0);
n=NaN;
console.log(n);
console.log("string"/2);//nan
console.log('1'+2);//12
console.log(1+'2');//12
console.log('1'+1+2);//112 cause left run

let x='10';
console.log(+x);//converted to number
console.log(x+20);//1020
console.log(+x+20);//30
console.log(Number(x));//10
console.log(Number(x)+20);//30
console.log(+'hello');//nan
console.log(Number('hello'));//nan
console.log(nan+1);//nan
console.log(.1+.2);//.3 but .3000000
//range of number is -(2^53=1)to(2^53=1)
// so came bigInt
let n1=10;
console.log(typeof(n1))//number
let n11=10n//convertesd to bigint
//string

//'ll' and "hh" valid but '' or "" multiline not posble, and vriable conctiation wuth string difficult

//template string multi line nd num concat posibl
let nu=99
const srt=`
<div>
hello ${nu},${Math.random()}, can call a function but not ab;e to declres
</div>
`











