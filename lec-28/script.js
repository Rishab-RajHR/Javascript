/*const customErr = new Error ("Kishan is not defined")
customErr.name = "Alex"*/

const err = new Error("Required")
err.name = "Error"

let name = prompt("Enter your name")
try{
    if(name === ""){
        throw err
    }
    console.log(name)
}catch(e){
   console.log(e.name);
   console.log(e.message);
}