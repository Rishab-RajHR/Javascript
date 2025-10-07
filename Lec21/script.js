const btnEle = document.querySelector(".btn1")
const bodyEle = document.querySelector("body")
const divEle = document.querySelector(".intro")


// console.log(btnEle)

// btnEle.style.backgroundcolor = "red"
// btnEle.style.color = "white"
// btnEle.style.borderRadius = 10 + "px"


// classList
// btnEle.classList.add("btn1")
// btnEle.classList.remove("btn1")

/* 
innerHTML
outerHTML
textContent
innerText
*/


// console.log(divEle.innerHTML)
// console.log(divEle.outerHTML)
console.log(divEle.innerText)
// console.log(divEle.textContent)

/* Here bold text is removed and normal text is implemented*/
// divEle.innerText = "My name is Tovino Thomas"
divEle.innerHTML = "<p>My name is Basil Joseph</p>"

/*
   getAttribute
   setAttribute
   hasAttribute
   removeAttribute
*/

// If you want to change the class and add a new id in plae of class it will be null

// let att = divEle.getAttribute("class")
// console.log(att)

// divEle.setAttribute("id", "intro2")

// hasAattribute -> If particular attribute is present or not
/*let att2 = divEle.hasAttribute("class") // true or false
console.log(att2)*/


// removeAttribute -> If you want to remove the element
divEle.removeAttribute("class")