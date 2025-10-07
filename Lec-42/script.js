function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           const data = {
              userName: "Alex",
              userId: 345,
              course: "JS"
           }
           resolve(data)
        }, 2000)
    })
}

/*async function getUserData(){
    const data = await fetchData()
    console.log(data);
}

getUserData()*/

async function getUserData(){
    try{
        console.log("fetching Data...");
        const data = await fetchData()
        console.log("fetched data: ", data);
    }catch(err){
        console.log(err);
    }
}

getUserData()