/*console.log(this);
// strict mode, non strict mode

// this substitution
function Alex(){
    console.log(this);
}

window.Alex()*/

const obj = {
    a: 20,
    b: function(){
       console.log(this);
       console.log(this.a); // We can access the value of a through dot 
    }
}

obj.b()