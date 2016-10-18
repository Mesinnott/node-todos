let express = require("express")
let server = express()

server.use(express.static(__dirname + "/public"))


server.listen(8080, function(){
  console.log("The server is running on port 8080")
})