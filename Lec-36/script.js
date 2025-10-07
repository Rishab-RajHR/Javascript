// setTimeout(callback, delay, ...args)

const btnEle = document.querySelector(".btn");
const stopBtn = document.querySelector(".btn2");
const paraEle = document.querySelector(".para");

/*let timeoutId;
btnEle.addEventListener("click", ()=>{
    timeoutId = setTimeout(()=>{
       console.log("You clicked on button");
    }, 1000)

    console.log("Alex");
})

stopBtn.addEventListener("click", ()=>{
    clearTimeout(timeoutId)
})*/

let intervalId;
btnEle.addEventListener("click", ()=>{
     intervalId = setInterval(()=>{
         paraEle.innerHTML += `<p>Alex AI World</p>`
     }, 1000)
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(intervalId)
})