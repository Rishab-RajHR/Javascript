  // Conditional Statements *********

/* 
     if
     if...... else
     if...... else if......else
     nested if
*/

// if(true){
//     console.log("My name is Alex")
// }

/*if(false){
    console.log("My name is Alex")
}  else{
    console.log("My name is Tovino Thomas")
}*/

/* let myName = 'Basil'
if(myName == 'Alex'){
       console.log("My name is Alex")
} else {
      console.log("My name is Tovino Thomas")
}*/

// Here we use strict comparison opeator to compare the datatype
/*let myName = 8
if(myName === "8"){
       console.log("My name is Alex")
} else {
      console.log("My name is Tovino Thomas")
}*/

/* let num1 = 6
if(num1 == 8){
    console.log("num1 is 8")
} else if(num1 == 9){
     console.log("num1 is 9")
} 
else{
  console.log("num1 is not found")
} */


// Nested if loop
/*let num2 = 12
if (num2<10){
  if(num2<9){
      console.log('Num2 is smaller than 9 and 10')
  }
}  else{
    console.log('Num2 is greater than 9 and 10')
}*/


// Switch case statement ****************

/*let expression = 1
switch(expression){
    case 1:
      console.log("Expression equal to 1")
      break;
    case 2:
      console.log("Expression equal to 2")
      break;
    default:
      console.log("Expression not eqaul to 1 and 2")
} */

// Ternary Operator => condition ? true:false
let purchase = 20

let discount = purchase  >= 20 ? 3 : 0

console.log(discount)

