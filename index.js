let express = require("express")
let server = express()

server.use(express.static(__dirname + "/public"))

//CRUD APPLICATION
let todos= [];
function addTodo(todo){
  todos.push(todo);
}

function removeTodo(index){
  todos.splice(index, 1)
}






server.listen(8080, function(){
  console.log("The server is running on port 8080")
})