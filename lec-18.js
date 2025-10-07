// Recursion =>  function calling itself until it generate the output

/*function recursive(){
   console.log("This is a recursive function")
}
recursive()*/


// base condition => where the function will return

function coding(num){
   if(num===0){
    console.log("Coding has been done!")
    return 
   }else{
       console.log("I'm doing Coding")
       coding(num-1)
   }
}
coding(5)

// Factorial => 5! = 5*4*3*2*1 = 120 / 5*4! / 4*3!
// n! = n*n-1*n-2*n-3....1 / n*(n-1)!

function Factorial(n){
     if(n === 1){
        return 1
     }
     let fact = n*Factorial(n-1)
     return fact
}
/*
5*4!
4*3!
3*2!
2*1!
*/

console.log(Factorial(5))