let response = fetch("https://jsonplaceholder.typicode.com/todos/1")

// response.then(res => console.log(res))

response
.then(res => res.json())
.then(d => console.log(d))