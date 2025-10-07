// Arrays Methods

/* let arr = [45,56,45]
console.log(arr.length) */

// Push()=> Adds elements to the end of the array
// arr.push(34, 23)
// console.log(arr)

// Pop()=> Removes the last element from the array
// arr.pop()
// console.log(arr)

// shift() => removes the first element from the array
// arr.shift()
// console.log(arr)

// unshift() => Adds elements to the beginning of the array
// arr.unshift(12)
// console.log(arr)

// indexof() => Returns the index of the first occurence of a value in the array
/* let dc = ["superman", "bataman", "flash"]
let result = dc.indexOf("superman")  // if not present, it returns -1
console.log(result) */

// concat() => Joins two or more arrays

/* let dc =["superman", "batman", "flash"]
let marvels = ["thor", "ironman", "hulk"]
let heros = dc.concat(marvels)
console.log(heros) */


// spread operator() => It is used to expand an array into its elements

/*let dc =["superman", "batman", "flash"]
let marvels = ["thor", "ironman", "hulk"]
let heros = dc.concat(marvels)
console.log(heros) 
let heros1 = [...dc, ...marvels]
console.log(heros1)*/


/*// reverse() => Reverses the order of the elements in an array
let dc = ["superman", "batman", "flash"]
dc.reverse()
// console.log(dc)

// sort() => sorts the elements of an array in place and returns the sorted array
dc.sort()
// console.log(dc)

let nums = [34, 56, 12, 34, 65, 78, 43]
nums.sort()
// console.log(nums)  // Here the sorting will be done in ascending order

// include() => determines whether an array includes a certain value among its entries, returning true or false as appropriate

let num1 = nums.includes(34)
console.log(num1)  // true */


// splice(start, count) => It changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

/*let marks = [89, 67, 56, 34, 76, 90, 99]
// marks.splice(2, 3)
// console.log(marks) // [89, 67, 90, 99]

// For adding in splice => splice(start, count, addition)
marks.splice(2, 2, 45, 45, 45)
console.log(marks)  // [89, 67, 45, 45, 45, 90, 99] */

// slice(start, end) => It returns a shallow copy of a portion of an array into a  new array object selected from start to end (end not included in the selection) where start and end represent the index of items in that array. The original array will not be  modified.

let marks = [89, 67, 56, 34, 76, 90, 99]

let marks1 = marks.slice(2, 5)
console.log(marks1)

