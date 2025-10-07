const outerEle = document.querySelector(".outer")
const btnEle = document.querySelector(".btn")
const googleEle = document.getElementById("google")

googleEle.addEventListener("click",()=>{
    console.log("You clicked on google link")

    e.preventDefault() // Prevent the default action of the link
}, false)


// Event flow has two phases: bubbling and capturing
/* 1. Bubbling: starts from the target 
2. Capturing: outer most element */

/*outerEle.addEventListener("click", ()=>{
    console.log("You clicked on outer div")
}, false)

btnEle.addEventListener("click", ()=>{
    console.log("you clicked on button")

    e.stopPropagation() // Prevents the event from bubbling up to the outer element
}, false)*/



// Both events will be triggered when the button is clicked

