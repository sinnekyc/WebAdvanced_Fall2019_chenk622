var information = "Hello people";
var atributes = ["Blue","Green","Apple"];

console.log("Hello");

// alert("Focus!" + " " + information);

//document.write("<p>" + information + "</p>")

console.log(atributes[1]);



var myMSG = document.getElementsByClassName("msg");

for(var i=0; i<atributes.length; i++){
    // document.write("<p>"+ atributes[i] +"</p>");
    console.log(atributes[i]);

    for(var i=0;i< myMSG.length;i++){
        myMSG[i].innerHTML = atributes[i];
    }


}