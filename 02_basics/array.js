const arr1=[1,2,3,4,5]
console.log(arr1);
console.log("A",arr1);
arr1.slice(1,3)
console.log(arr1);
arr1.splice(1,3)
console.log(arr1);

//in slice copy is made while in splice reference is passed so any chages in original array wil reflect changes