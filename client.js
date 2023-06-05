const net = require('net');

const client = net.createConnection({
    port: 3300,
    host: "localhost"
})

client.on("connect", function () {
    client.write("hello server, i am client")
})

client.on("data", function (data) {
    console.log(data.toString())
})