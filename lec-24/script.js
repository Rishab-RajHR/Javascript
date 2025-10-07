// Traversing the DOM means to navigate through the elements of the document. (from one element to another)

const grandParent = document.querySelector(".grand-parent")

// const child = document.querySelector(".child")
const next = document.getElementById("next")

// console.log(child) -> We will get the child element
// console.log(grandParent) -> We will get all the values of the grandParent element

/*
    downwards
    upwards
    sideways 

*/

//  downwards********
// console.log(grandParent.children[0])
// grandParent.children[0].style.backgroundColor = "red"


// upwards*******
// console.log(child.parentElement.parentElement)
// console.log(child.closest(".grand-parent"))


// sideways*******
// console.log(child.nextElementSibling)
console.log(next.previousElementSibling)