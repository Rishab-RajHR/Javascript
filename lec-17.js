let nums = [1,2,3,4,5,6,7,8,9]

// map() => It takes array one by one and perform the operation

/*function double(nums){
     return nums*2
}

let doubles = nums.map(double)
console.log(doubles)*/

/*let doubles = nums.app((nums)=>{
    return nums*2
})
console.log(doubles)*/

let doubles = nums.map((nums)=> nums*2)
// console.log(doubles)



// filter() => It returns the value on the given output [checks the condition is it true or not]
let number = nums.filter((num)=>{
     if(num>5){
        return num
     }
})


/* Different syntax
let number = nums.filter((num)=>{
    return num > 5   
})
     */
console.log(number)

// reduce() => It will return the value of the sum with the help of accumulator[that is used for storing the value]

/*nums.reduce((accumulator, currentValue)=> {
     accumulator = accumulator + currentValue
     return accumulator
})*/

let nums1 = [1,2,3,4,5,6,7,8,9,10]
/*let sum = nums1.reduce((accumulator, currentValue)=> {
      accumulator = accumulator + currentValue
      return accumulator
}, 0)
console.log(sum)*/

/*let sum = nums1.filter((five)=>{
    return five >= 5
})
console.log(sum)*/


// Chaining = > Apply one method after the other
let sum = nums1.filter((five)=>{
     return five >= 5
}).reduce((acc, currVal)=>{
    return acc + currVal
}, 0)
console.log(sum)


let employees = [
     { id: 1, name: "kishan", department: "Sales", salary: 50000, year: 2023 },
     { id: 2, name: "ankush", department: "Marketing", salary: 60000, year: 2022 },
     { id: 3, name: "akhil", department: "Sales", salary: 55000, year: 2008},
     { id: 4, name: "shyam", department: "HR", salary: 45000, year: 2010},
     { id: 5, name: "Bobby", department: "Finance", salary: 70000, year: 2019},
];

let salary = employees.map((emp)=>{
       return emp.salary
})
console.log(salary)

/* For double salary we use 
let salary1 = employees.map((emp)=>{
     return emp.salary*2
})
console.log(salary1) */

// Add Id in the salary2
let salary2 = employees.map((emp)=>{
       return emp.id + "0"
})
console.log(salary2)

// filter() => means to take the value of the range specified

let salaries = employees.filter((emp)=>{
     return emp.salary > 50000
})
console.log(salaries)

// For taking out the specified value that is the name

let salaries1 = employees.filter((emp)=>{
      return emp.salary > 50000
}).map((name)=>{
     return name.name
})
console.log(salaries1)

// reduce() => For taking out the sum
let totalSalary = employees.reduce((acc, currVal)=>{
return acc + currVal.salary
}, 0)
console.log(totalSalary)