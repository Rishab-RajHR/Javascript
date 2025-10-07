/*document.cookie = "fName=learn"
document.cookie = 'lName=coding'
console.log(document.cookie); // data is not override in cookies*/
const nameEle = document.querySelector(".name")
const valueEle = document.querySelector(".value")

document.querySelector(".btn").addEventListener("click", ()=>{
      let name = nameEle.value
      let value = valueEle.value

      document.cookie = `${name}=${value}`
})

document.querySelector(".btn1").addEventListener("click", ()=>{
    alert(document.cookie)
})

 document.cookie = "fName=; expires=Sun, 2 January 2012 12:00:00 GMT"