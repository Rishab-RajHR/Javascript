// Strings =>  Immutable 
let str1 = 'learn'
let str2 = "javascript"

// indexing => starts from 0
// console.log(str1[0])
// console.log(str2[2])

// concat() => Joins two or more strings
// console.log(str1 + " " + str2)
// str3 = str1.concat(str2)
// console.log(str3)
// console.log("The name of this course is " + str1 + " " + str2)

// string interpolation => Template literals
// console.log(`The name of this course is ${str1} ${str2}`)

// escape characters => \n, \t, \\, \', \"
console.log("it\'ll be alright")

let myName = new String("Alex")
  console.log(myName)

// Object value is never compared it's reference is compared
let myName1 = new String("Alex")
let myName2 = new String("Alex")
console.log(myName1 == myName2)  // false
