function getUser(userId){
    return new Promise((resolve)=>{
       console.log("Fetching user data...");
       setTimeout(()=>{
         resolve({userId: userId,
          userName: "Alex"
         })
       }, 5000)
    })
}

function getPosts(userId){
   return new Promise((resolve)=>{
      console.log("Fetching user posts...");
      setTimeout(()=>{
         resolve([{postId: 1, content: "post1"},
          {postId: 2, content: "post2"}
         ])
      }, 5000)
   })
}

function getDetails(post){
    return new Promise((resolve)=>{
        console.log("fecthing account details...");
        setTimeout(()=>{
           resolve({userName: "Alex123", followers: 5000})
        }, 5000)
    })
}

getUser(1).then((user)=>{
    console.log("user: ", user);

    return getPosts(user.userId)
}).then((posts)=>{
    console.log("Posts: ", posts);

    return getDetails(posts)
}).then((details)=>{
    console.log("details: ", details);
}).catch((err)=>{
    console.log("error ", err);
})