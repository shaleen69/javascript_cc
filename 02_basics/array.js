const arr1=[1,2,3,4,5]
console.log(arr1);
console.log("A",arr1);
arr1.slice(1,3)
console.log(arr1);
arr1.splice(1,3)
console.log(arr1);

//in slice copy is made while in splice reference is passed so any chages in original array wil reflect changes

const marvel_he=["thor","ironman","spiderman"]
const dc_he=["superman","flash","batman"]
marvel_he.push(dc_he)
console.log(marvel_he);

const another_array=[1,2,3,[4,5,6],7,6,7,[4,5]]
console.log(another_array);

const real_array=another_array.flat(Infinity)
console.log(real_array);
console.log(Array.isArray("Shaleen"));
console.log(Array.from("Shaleen"));