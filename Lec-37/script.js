/*setTimeout(printName, 1000)

function printName() {
    console.log("Alex");
}*/

// document.querySelector(".btn").addEventListener("click", printName)

function sum(a, b, callback){
   let result = a + b;
   console.log("sum: result - ", result); // 10
   callback(result)
}

function showResult(result){
  console.log("show: result is-", result); // undefined because callback is not a function
  console.log(result);
}

sum(5, 5, showResult)