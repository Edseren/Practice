var answer = prompt("are we there yet");

while(answer !== "yes" && answer !== "yeah") {
    var answer = prompt("are we there yet?");
}

alert("yaY, we made it!");

//alternative version 

var answer = prompt("are we there yet");

while(answer.indexOf("yes") === -1 ) {
    var answer = prompt("are we there yet?");
}
alert("yaY, we made it!");

