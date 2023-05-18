const a =true;
const b=false;
console.log(a,b)

const obj={
    key1:"val1",
    name:"jo",
    val1:{a:20,b:30},
    x:10,
    y:true,
    0:50,
    true:78//obj.true wrong soo obj['true]
}
console.log(obj)
console.log(obj.key);
console.log(['x']);//key allways string so in quote
console.log(obj.val1.a)

//null undefined
const x=null;
console.log(x)//null typeof(x)//object
let y;
console.log(y);//undefined..type undefined
y=undefined;//undefined
