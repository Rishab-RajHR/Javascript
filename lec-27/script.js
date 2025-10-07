// Runtime Error occurs when code is syntatically  and Compilation Error also known as Syntax Error
try{
   console.log("Try block will throw an error");
   console.log(Alex); // This will throw a reference Error because Alex is not defined
}catch(err){
     console.log(err.name); // ReferenceError: Alex is not defined
     console.log(err.message); // Alex is not defined
     console.log("catch block will caught it")
}
finally{
   console.log("This is finally block"); // This will always execute
}