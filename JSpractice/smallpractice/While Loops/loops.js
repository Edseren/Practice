console.log ("1.print numbers from -19 to 19.");
var count = -19;
while(count < 19) {
    console.log("count is: " + count);
    count++;
}
console.log ("2.Print all even numbers betwen 10 and 40");
var count = 10;
while(count < 40) {
    console.log("Count is: " + count);
    count+=2;
}
//alternative to 2.nr
//var count = 10;
//while(count <= 40) {
    //if(count % 2 === 0){
    //console.log(count);
    //}
    //count+=1;
    //}

console.log ("3.Print all odd numbers between 300 and 333.");
var count = 300;
while(count <= 333) {
    if(count % 2 !== 0){
    console.log("Count is: " + count);
    }
    count+=1;
}
//Print all numbers divissable by 5 and 3 betwen 5 and 50.
console.log ("4.Print all numbers divissable by 5 and 3 betwen 5 and 50.");
var count = 5;
while(count <= 50) {
    if(count % 5 === 0 && count % 3 === 0 ){
    console.log("Count is: " + count);
    }
    count+=1;
}

//FOR lOOPS SHORTER VERSION OF LOOPS THAT EXXIST IN SIGULAR LOOP.
console.log("FOR LOOPS EXAMPLE")
var str = "Hello";

for(var i = 0; i < str.length; i++){
    console.log(str[i]);
}
//random 
console.log("Random")
var str = "arragaaanndjfdonfomdfmf ";
 
for(var i = 1; i < str.length; i+=4){
    console.log(str[i]);
}
//for Loop 
console.log("For loops examples")
console.log("printing all numbers betwen -10 and 20")

for(var i = -10; i < 20; i++){
    console.log(i)
}

console.log("2.Print all even numbers betwen 10 and 40")

for(var i =12; i <= 38; i += 2){
    console.log(i);
}
//as if metod in Loop
console.log("IF method in LOOp")

for(var i = 10; i <= 40; i += 1){
    if(i % 2 === 0) {
      console.log(i);
  }
}

//3.Print all odd numbers between 300 and 333.
console.log ("3.Print all odd numbers between 300 and 333.")

for(var i = 300; i <= 333; i += 1){
    if(i % 2 !== 0) {
    console.log(i);
}
}

//Print all numbers divissable by 5 and 3 betwen 5 and 50.
console.log ("4.Print all numbers divissable by 5 and 3 betwen 5 and 50.")

for(var i = 5; i <= 50; i += 1){
    if(i % 5 === 0 && i % 3 === 0 ) {
    console.log(i);
}
}