alert("chapter 9-11")
// task 1
var city= prompt("Please Enter Your City Name:")
if(city==="karachi"){
    alert("Welcome to the city of lights")
}
// tasl 2
var gen= prompt("Please Enter Your Gender:")
if(gen==="male"){
    alert("Good Morning Sir!")
}
else if (gen==="female"){
    alert("Good Morning Ma'am!")

}
// task 3
var col= prompt("Please Enter Color of Traffic Light:")
if(col==="red"){
    alert("Must Stop!")
}
else if (col==="yellow"){
    alert("Ready to move!")
}
else if (col==="green"){
    alert("Move Now")
}
// task 4
var fuel= prompt("Please Enter Your fuel quatity:")
if(fuel<"0.25 litre"){
    alert("Please refill the fuel in your car")
}
// tasl 5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}
// task 7
var num= prompt("Please Enter a number for a secret game:")
if(num==="5"){
    alert("Bingo!!")
}
else if (num==="6"){
    alert("Close enough")
}
// tsak 8
var numm= prompt("Please Enter a number:")
if(numm%3==0){
    alert("Number is divisible by 3")
}
else if (numm%3 !=0){
    alert("Number is not divisible by 3")
}
// task 9
var nbr= prompt("Please Enter a number to check if it's even or odd:")
if(nbr%2==0){
    alert("Number is Even")
}
else if (nbr%2 !=0){
    alert("Number is Odd")
}
// task 11
var n= parseInt (prompt("Please Enter number 1:"))
var x= parseInt(prompt("Please Enter number 2:"))
var g= n+x;
var h= n-x;
var j= n*x;
var k= n/x;
var l= n%x;
document.write("</br> Addition: ", g)
document.write("</br> Subtraction: ", h)
document.write("</br> Multiplication: ", j)
document.write("</br> Division: ", k)
document.write("</br> Remainder: ",l)
