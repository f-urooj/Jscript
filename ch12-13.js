// // task1
var ch = prompt("Enter a character from A to Z or a to z or from 0-9:");
if (ch.length === 1) {
    var ascii = ch.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
        alert("You entered an uppercase letter");
    } else if (ascii >= 97 && ascii <= 122) {
        alert("You entered a lowercase letter");
        
    } else if (ascii >= 48 && ascii <= 57) {
        alert("You entered a number");
        } else {
        alert("You entered a special character or something else");
    
    }
} else {
    alert("Please enter exactly one character.");
}
// task 2
var int1 = prompt("Enter number1:");
var int2 = prompt("Enter number2:");

if(int1> int2){
    alert("Number 1 is larger")
}
else if(int2> int1){
    alert("Number 2 is larger")
}
else if(int1===int2){
    alert("Numbers are equal")
}
// tasl 3
var int3 = prompt("Enter a number:");

if(int3> 0){
    alert("Number is positive")
}
else if(int2< 0){
    alert("Number is negative")
}
else if(int3===0){
    alert("Number is equal to zero")
}
// tsk 4
alert("Task 4")
var vo= prompt("Enter a character:")
if(vo.length===1){
    if(vo=="a" || vo=="e" || vo=="i" || vo=="o" || vo=="u")
        alert("True")
    else {
        alert("False")
    }
}
// task 5
alert("Task 5")
var pass= prompt("Enter your password:")
if(pass==null){
 pass= prompt("Please enter your password")
}
if(pass!=null){
var pass1= prompt("Enter your password again:")
if(pass==pass1){
    alert("Correct")
}
else{
    alert("Incorrect password")
}
}
// task 6
alert("Task 6")
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day"
alert(greeting)}
else{
    greeting = "Good evening";
    alert(greeting)
}
// tasl 7
alert("Task 7")
var time= prompt("Please enter current time in clock format", "for example 1PM=1300")
if(time>=0 && time<1200){
    alert("Good Morning")
}
else if (time>=1200 && time<1700){
    alert("Good Afternoon")
}
else if (time>=1700 && time<2100){
    alert("Good Evening")
}
else if (time>=2100 && time<2359){
    alert("Good Night")
}

