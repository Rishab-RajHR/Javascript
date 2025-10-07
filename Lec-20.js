// Number => used to store the datatype

/*const num = 100

const num1 = new Number(200)
console.log(num1)*/



// const num1 = new Number(200.76543)
// console.log(num1.toString())
// console.log(num1.toFixed())
// console.log(num1.toPrecision(4))
// console.log(num1.toLocaleString())

// Math()=> abs, asine, log, min, max

/* console.log(Math.round(2.845))
 console.log(Math.ceil(2.93)) // top value
console.log(Math.ceil(2.99))  // bottom value
console.log(Math.min(3, 7, 5, 7, 9)) 
console.log(Math.max(3, 7, 5, 7, 9)) 
console.log(Math.pow(2, 3))  */

/* const randomNum = Math.floor(Math.random()*10 + 1)
console.log(randomNum) */

/* min = 10 , max = 20 */
let min = 10
let max = 20
const num2 = Math.floor(Math.random()*(max-min+1)) + min
console.log(num2)