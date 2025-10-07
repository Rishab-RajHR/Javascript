// Scopes (Variable & Function)

// global scope -> can be accessed outside

// var a = 23;

// function globalScope() {
//     console.log(a);
// }
// globalScope()
// console.log(a);


// Local scope -> cannot be accessed outside
// function localScope(){
//   let b = 34;
//   console.log(b);
// }

// //console.log(b)
// localScope()

// functionScope should be called inside the function

// function functionScope() {
//     if(true) {
//        var a = 54; // declared inside block
//        console.log("inner a:-", a); // 54
//     }
//     console.log("outer a:-", a); // 54 -- still accessible
// }

// functionScope()

// Block Scope should be declared with var & let not outside

function blockScope() {
    if(true) {
       let a = 65;
       const b = 54; 
       console.log("inner a:-", a); 
       console.log("inner b:-", b); 
    }
    
}

blockScope()