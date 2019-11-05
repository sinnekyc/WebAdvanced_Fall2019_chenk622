//host code
//receive message from client and send them back

//require the library
var express = require('express');


var app = express();
//localhost 3000
var server = app.listen(3000);

//the app to use everything in the public directory
app.use(express.static('public'));

console.log("My socket server is running!");


//require the library
var socket = require ('socket.io');

var io = socket(server);

//new connection trigger
io.sockets.on('connection', newConnection)
 
//would need a socket.io server and a socket.io client
function newConnection(socket){
   console.log('new connection' + socket.id);

   //if there is a message called mouse, trigger this function
   //message coming from client
   socket.on('mouse',mouseMsg);

   
   function mouseMsg(data){
       //message coming out
       socket.broadcast.emit('mouse', data);
       //io.sockets.emit('mouse',data);  you want the message to come back to where it comes from
       console.log(data);
   }

}