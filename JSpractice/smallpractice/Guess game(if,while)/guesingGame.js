5//create secret numberr
var secretNuumber = 4
//ask user for nr
// 
// var stringgues = prompt("Gues anumber");
// var gues = Number(stringgues);



// //check guess
// if(gues === secretNuumber) {
// alert("You Got It right!");
// }

// //OTHER WISE, check if higher
// else if(gues > secretNuumber) {
//     alert("Too High, Guess again!");
// }
    

// //otherwise than LOWER
// else {
//     alert("Too low, Guess again!")
// }
var stringgues = prompt("Gues anumber");
var gues = Number(stringgues);

while(gues !== secretNuumber) {
    var stringgues = prompt("Gues anumber");
var gues = Number(stringgues);



//check guess
if(gues === secretNuumber) {
alert("You Got It right!");
}

//OTHER WISE, check if higher
else if(gues > secretNuumber) {
    alert("Too High, Guess again!");
}
    

//otherwise than LOWER
else {
    alert("Too low, Guess again!")
}
}

