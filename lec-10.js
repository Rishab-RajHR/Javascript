//  Arrays  => Non primitive data type store collection of multiple items in one array

// When we want to store the large value then it is called Array

/*let myArr = [89, 98, 67, 76]
console.log(myArr)*/

// indexing => Starts with 0 and ends with n-1 of the size

/*let myArr = [89, 98, 67, 76]
console.log(myArr[2])*/

// .length => To access the length we use the length method

/*let myArr = [89, 98, 67, 76]
console.log(myArr.length)*/

// .length-1 for accessing the last index

/*let Arr = [89, 98, 67, 76]
console.log(Arr[Arr.length-1])*/

// typeof => tells the type of the array

/*let myArr = [89, 98, false, "kishan"]
console.log(typeof myArr)*/

// nested array => Array inside an array

/*let arr = [23, "Alex", [34, "LearnCoding",[56, 67]]]
console.log(arr[2][2][1])*/

// Comparing the two arrays

/* let arr1 = [23, 45]
let arr2 = [23, 45]

console.log(arr1===arr2) */ // false because of the reference of the array

// Concat => To join two arrays
/* let arr1 = [23, 45]
let arr2 = [12, 55]

let arr3 = arr1.concat(arr2)
console.log(arr3)
console.log(arr3[0])
console.log(arr3[1])
console.log(arr3[2])
console.log(arr3[3]) */

// for loop => To iterate through the array

/*let arr1 = [23, 45]
let arr2 = [12, 55]

let arr3 = arr1.concat(arr2)
console.log(arr3)

for(let i=0; i<=arr3.length-1; i++) {
    console.log(arr3[i])
}*/


// for of => To iterate through the array

let arr1 = [23, 45]
let arr2 = [12, 55]

let arr3 = arr1.concat(arr2)
console.log(arr3)

for(let varr of arr3) {
    console.log(varr)
}