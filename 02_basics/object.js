
//Part-1
const mysym=Symbol("")
const Jsuser={
    name:"Shaleen",
    "full name":"Kumar Shaleen",
    age:18,
    mysym:"mykey1",
    location:"Jaipur",
    email:"kumarshaleen05@gmail.com",
    isloggedin:false,
    lastloggedin:["Monday,Tuesday"]
}

console.log(Jsuser.isloggedin);
console.log(Jsuser.email);
console.log(Jsuser);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.mysym);
console.log(Jsuser[mysym]);

Jsuser.email="kumarshaleen123@gmail.com"
console.log(Jsuser.email);
console.log(Jsuser.mysym);
//Object.freeze(Jsuser)
Jsuser.email="annama02@gmail.com"
console.log(Jsuser.email);

Jsuser.greeting=function(){
    console.log("My name is Kshaleen");
}
Jsuser.falana=function(){
    console.log("My name is falana sharma");
}
console.log(Jsuser.greeting());
console.log(Jsuser.falana());

//-------------------------------------------------------------------------------------------------

//Part-2
const user={
    email:"kumarshaleen05@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kumar",
            lastname:"Shaleen",
        }
    }
}
console.log(user.fullname.userfullname);
const obj1={1:"a",2:"b"}
const obj2={2:"c",3:"d"}
//const obj3={obj1,obj2};
const obj3=Object.assign(obj1,obj2);
//const obj3={...obj1,...obj2};
console.log(obj3);

const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="Sammy"
tinderuser.isloggedin=false

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));




