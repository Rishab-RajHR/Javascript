const obj = {
    name: "Alex",
    rollNo: 387,
    course: "JS",
    free: "free"
}

// stringify() => converting to the string

const newObj = JSON.stringify(obj)
console.log(newObj)

// parse() => converting to the object

const obj2 = JSON.parse(newObj)
console.log(obj2)
