const name="shaleen"
const repocnt=50
//console.log(name + repocnt + "value");
console.log(`Hello my name is ${name} and my repocnt is ${repocnt}`);

const gamename=new String('Shaleen-15-com')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename);

console.log(gamename.charAt(3));
console.log(gamename.indexOf('l'));

const newString=gamename.substring(0,4)
console.log(newString);

const another=gamename.slice(-12,5)
console.log(another);

const newone="  shaleen  "
console.log(newone.trim());

let url="https://kumarshaleen#20.com"
console.log(url.replace('#20','-'));

console.log(url.includes('sundar'));

console.log(gamename.split('-'));

