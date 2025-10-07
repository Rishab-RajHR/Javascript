/*const promise = new Promise((res, rej)=>{
    const name = "Alex"
    if(name === "Alex"){
        res("Promise is fulfilled")
    } else{
       rej("Promise failed")
    }
})

console.log(promise);*/



// .then()=> To create a callback function when promise is fullfilled

function fetchData(){
     return new Promise((resolve, reject)=>{
        console.log("fetching Data...");
        setTimeout(()=>{
            const num = Math.random() > 0.3

            if(num === true){

               const data = {
                  id: 2,
                  name: "Alex",
                  course: "JS",
                  duration: 6
               }
               resolve(data)
            }else{
                reject("fetching data failed")
            }
        }, 2000)
     })
}

function handleRes(data){
    console.log("data fetched successfully", data);
}

function handleRej(err){
    console.log("error", error);
}
fetchData().then(handleRes, handleRej)