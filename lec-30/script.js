// lexical environment=> Refers to the object
/*function Alex(){
    const obj = {
        a: 20,
        x: ()=>{
            console.log(this);
        }
    }
    obj.x()
}
Alex()*/

/*const obj = {
    a: 20,
    x: function(){
        const y = ()=>{
           console.log(this);
        }
        y()
    }
}

obj.x()*/

// call()-> Defining and calling

const student = {
    name: "Alex",
    rollNo: 257,

    printDetails: function(){
        console.log(this.name + " " + this.rollNo );

    }

}

// student.printDetails()

// call()=> method is used here

const student1 = {
    name: "Learn",
    rollNo: 400
}

// All call(), apply() and bind() can override the property
// student.printDetails.call(student1, "Delhi")
// In call we give arguments easily but in apply we give arguments in the form of array
// student.printDetails.apply(student1, ["Delhi"])
// Bind()=>In bind we store and create the copy of array and call it
const detail = student.printDetails.bind(student1)
detail()
