// Date => for the current date and hour data

/* let date = new Date()
console.log(date) */

/*let date = new Date()
console.log(date.toString())*/

/*let date = new Date()
console.log(date.toLocaleString())*/

/*let date = new Date()
console.log(date.toDateString())*/

// It gives the number in milliseconds
/*let date = new Date()
let d = Date.now()
console.log(d)*/

// When giving the argument 
/*let date = new Date(0)
console.log(date.toDateString())*/


// Different types of argument in date => Date(year, month, date, hour, minute, second, millisecond)
/*let date = new Date("2012 3 23")
console.log(date.toISOString())
console.log(date.toString())*/


let d = new Date("2012 3 23")
// getMethods
console.log(d.getDate())
// setMethods
console.log(d.setDate(24))