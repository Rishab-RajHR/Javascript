// Break and Continue

// Break => Break statement is used to exit the loop immediately when a certain condition is met. In switch, it breaks out the execution of more code inside the switch. In loop, it breaks out the loop and continues the program(if any).

/*for(let i=1; i<=10; i++){
    if(i===5){
       break;
    }
    console.log(i);
} */

// Continue => continue statement used to skip the current iteration and start executing the code from next iteration.

/*for(let i=1; i<=10; i++){
    if(i===5){
       continue;
    }
    console.log(i);
} */

for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        if(i==j){  // same will be skipped
            continue;
        }
         console.log(i,j)
    }
}