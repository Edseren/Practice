var p1b = document.querySelector("#p1");
var p2b = document.querySelector("#p2");
var resetb = document.getElementById("resetb");
var p1dis = document.querySelector("#p1dis");
var p2dis = document.querySelector("#p2dis");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;
var numinput = document.querySelector("input");
var toplay = document.querySelector("p span");




p1b.addEventListener("click", function() {
      if(!gameover){
           p1score++;
      if(p1score === winningscore){
           p1dis.classList.add("winer");
           gameover = true;
    }
           p1dis.textContent = p1score;
    }
});



p2b.addEventListener("click", function() {
      if(!gameover){
           p2score++;
      if(p2score === winningscore){
           p2dis.classList.add("winer");
           gameover = true;
    }
           p2dis.textContent = p2score;
    }      
});


resetb.addEventListener("click", function(){
    reset();


});


function reset(){
    p1score = 0;
    p2score = 0;
    p1dis.textContent = 0;
    p2dis.textContent = 0;
    p1dis.classList.remove("winer");
    p2dis.classList.remove("winer");
    gameover = false;
}

    


numinput.addEventListener("change", function(){
    toplay.textContent = this.value;
    winningscore = Number(this.value);
    reset();

});