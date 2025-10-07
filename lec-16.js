// Function means calling the function again again without rewritting the code

// DRY :- do not repeat yourself

/* function name(){
    // block of code
} 
*/

/*function name(){
     console.log("Function is called")
}
name()
name()
name() */

/*function kishan(){
     console.log("This js course is very good")
     console.log("I'll like the video after completion")
}
kishan()
kishan()*/

// defining number at the time of number creation is called parameter amd calling at the time is called argument

/*function square(num){
    console.log(num*num)
}
square(5)*/

// We can pass any number of parameters in function
/*function simpleInterest(p, r, t){
      let result = (p*r*t)/100
      console.log("result:", result)
}
simpleInterest(10000, 2, 3)*/

// After return there is unreacheable code

function simpleInterest(p, r, t){
      let result = (p*r*t)/100
      console.log("result:", result)
      return result
}
let ans = simpleInterest(10000, 2, 3)
console.log("ans:- ",ans)

