let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.getDay());
console.log(mydate.toLocaleString());

console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.getDate());
console.log(mydate.toLocaleDateString());

let mycreatedDate=new Date("11-07-2024");
console.log(mycreatedDate.toLocaleString());

let myTime=Date.now()
console.log(myTime);
console.log(mycreatedDate.getTime());

let newDate=new Date()
console.log(newDate);

newDate.toLocaleString('default',
    {
        weekday:"long",
    }
)
console.log(newDate);