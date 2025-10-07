// loop condition => repeatation 

/* for
   while
   do...while

   for...in
   for...of

   initialization
   condition
   incre/decre

*/

/* for(intialization; condition; incre/decre){
       // code
} */

/*for(let i = 1; i <= 5; i++ ){
    console.log(i)
}*/


// *******   While loop  = > Entry controlled loop  *********
// let i = 1;

/*while(i<=5){
      console.log(i)
      i++
}*/



// do While loop -> first execute the code then check condition  also called exit controlled loop

/*let i  = 1;
do{
    console.log(i)
    i++
} while(i<=5)*/


// for of => used for Array and for in => used for Object


/*for(let value of myArr){
    console.log(value)
}
let myObj = {
      key : "value"
}
for(let val in obj) {
      console.log(val)
}*/

// Print the odd values
for(let i=1; i<=20; i++){
    if(i%2===0){
        console.log(i)
    }
}