let value=true;
console.log(typeof(value));

value=String(value);
console.log(typeof(value));
console.log(value)

value=''+true;//concatination
console.log(typeof(value));

console.log(1,typeof(1));
console.log(1,typeof String(1));

console.log(null,typeof(null));
console.log(typeof String(null));//null as string
console.log(typeof String(undefined));
//nuerical conversion
console.log("6"*"2")//12 
//same with + will giv 62
console.log("abc"/"2")//nan , any mathematical oprtion with string not ahv number will gv nan
console.log(typeof Number("30"))
console.log("3",typeof Number("30"))
console.log(typeof Number("30"))
console.log("3",typeof Number("30"))
//any non empty string is true
Boolean(null)//false
Boolean(undefined)//false
Boolean(NaN)//false
" "// true, caouse space is a string