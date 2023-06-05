const net = require('net'); 
const server = net.createServer();
server.listen(3300, "localhost")

server.on("listening", function () {
    console.log("server was launched");
})

server.on("connection", function (socket) {
    socket.on("data", function (data) {
        console.log(data.toString())  
    })

    socket.write("hello client, i am server")
})