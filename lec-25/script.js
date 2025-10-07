const btnEle = document.querySelector(".btn")

console.log(btnEle)

/* btnEle.onclick = function() {
   console.log("Learn Coding")
 }*/


// There can be parameters in thr function
/*btnEle.addEventListener("click", ()=> {
   console.log("Learn Coding")
})*/

// In the event listener we can add or remove parameters
/*btnEle.addEventListener("click", (e)=> {
   console.log(e.target.innerHTML)
   // console.log(e.target.className)
   // console.log(e.target.tagName)
})*/


btnEle.addEventListener("click", ()=>{
    btnEle.classList.add("btn1")
})

/*function click1(){
    console.log("click 1")
}

function click2(){
    console.log("click 2")
}*/

btnEle.addEventListener("click", click1)
btnEle.addEventListener("click", click2)

// We can remove the event listener that was added
btnEle.removeEventListener("click", click2)