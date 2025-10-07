/*function Alex(){
    var name = "Alex"

    function dispName(){
      console.log(name);
    }
    dispName()
}

Alex()*/

/*function Alex(){
    var name = "Alex"

    function dispName(){
      console.log(name);
    }
    return dispName
}

const name = Alex()*/

function Alex(){  // outer function cannot access inner function
    var name = "Alex"

    function dispName(){  // Not valid outside the function
      console.log(name);
      var name1 = "JS" 
    }
    name = "Learn Coding"
    console.log(name1); // Reference error
    return dispName
}

Alex()