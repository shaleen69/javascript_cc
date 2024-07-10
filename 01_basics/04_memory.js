
// primitive data type uses stack data structure so copy is passed any value change will not reflect
let myyoutubechannel="kumarshaleen"
let anothername=myyoutubechannel;
anothername="chaiaurcode"

console.log(myyoutubechannel);
console.log(anothername);

/// non-primitive data type uses heap data structure so refernce is passed any value change will  reflect
let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1
user2.email="kumarshaleen.com"
console.log(user1.email);
console.log(user2.email);