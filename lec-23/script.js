const divEle = document.querySelector(".container")

// console.log(divEle)

const paraEle = document.createElement("p")
paraEle.textContent = "This is a paragraph"
// paraEle.style.fontsize = 20 + "px"
paraEle.classList.add("para")
// divEle.appendChild(paraEle)

/*
append()
prepend()
before()
after()
*/

// divEle.append("Alex", paraEle)
// divEle.prepend(paraEle)
// divEle.before(paraEle)
divEle.after(paraEle)
// paraEle.remove()
divEle.remove()