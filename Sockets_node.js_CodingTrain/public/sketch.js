//client code
//send message to server, and receive message to server
//this is p5 btw
var socket;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(51);

    //for hosting on glitch
    // const port = process.env.PORT || 3000;
    //connect to the server
    socket = io.connect('http://localhost:3000');

    //when it receive a comeback message, trigger the function newDrawing
    socket.on('mouse', function(data){
        console.log("Got:" + data.x + " " + data.y);
        //draw a blue circle
        fill(0,0,255);
        noStroke();
        ellipse(data.x, data.y, 60, 60);
    });
}


function mouseDragged(){

    fill(255);
    noStroke();
    
    ellipse(mouseX, mouseY, 60, 60);

    sendmouse(mouseX,mouseY);
}

function sendmouse(xpos,ypos){

    //we are sending!
    console.log('sendmouse:' + xpos + ',' + ypos);

    //make a little object with x and y
    var data = {
        x: xpos,
        y: ypos
    };

    //send that object to the socket, mouse is the name
    socket.emit('mouse',data);

}

