// Object => Used to store the data (key-value pair)

/* let obj = {}
console.log(obj)
console.log(typeof obj) */

/* let obj = 
{   
    key1: "value" ,
    key2: "value2"
} */

// If key-value is of two words it should be in double quotes
/*let myDetails = {
    name: "Alex",
    course: "javascript",
    price: 3999,
    isEmpty: false,
    "lec num": 14
}*/

// dot notation
/*console.log(myDetails.price)
// bracket notation
console.log(myDetails["price"])

console.log(myDetails["lec num"])*/

// Modifying the data
/*myDetails.isEmpty = true
console.log(myDetails)

// Adding the data
myDetails.lastName = "Pandian"
console.log(myDetails)*/

// Deleting the data
/*delete myDetails.lastName
console.log(myDetails)*/

let myDetails = {
    name: "Alex",
    course: "javascript",
    price: 3999,
    isEmpty: false,
    lecNum: 14,
    courses: {
        py: "python",
        js: "javascript"
    },
}

// console.log(myDetails.courses.js)

// Accessing the value of the key
/*for(let key in myDetails){
      console.log(key)
    //  console.log(myDetails[key])
}*/

// Object through constructor => we have to add the value one by one
let person = new Object()
person.name = "kishan"
person.price = 3999

console.log(person)