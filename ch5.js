alert("Chapter 5 starts here")
// task 1
var a= 3;
var b=7;
var c= a+b;
document.write("\n <h5> Sum of 3 and 7 is</h5> ", c)
// task 2
var a= 3;
var b=7;
var c= a-b;
document.write("\n <h5>Subtraction of 3 and 7 is</h5>", c)
var a= 3;
var b=7;
var c= a*b;
document.write("\n <h5>Multiplication of 3 and 7 is</h5>", c)
var a= 3;
var b=7;
var c= a/b;
document.write("\n <h5>Division of 3 and 7 is</h5>", c)
var a= 9;
var b=3;
var c= a%b;
document.write("\n <h5> Modulus of 9 and 3 is</h5>", c)
// tsk 3
var newVariable= 10;
document.write("\n <h5>Value after variable declaration is</h5>", newVariable)
var newv = 5;
document.write("\n <h5>Initial Value</h5>", newv)
newv++;
document.write("\n <h5>Value after increment is:</h5>", newv)
newv +=7;
document.write("\n <h5>Value after adding 7 is:</h5>", newv)
newv --;
document.write("\n <h5>Value after decrement is:</h5>", newv)
newv%3;
document.write("\n <h5>The remainder is:</h5>", newv)
// task 4
var tick= 600;
document.write("\n <h5>Total cost of buying 5 tickets is:</h5>", tick*5)
// task 5
var tab=5;
document.write("\n <h5>Table of 5:</h5>")
document.write("\n <h5>5x1=5  \n  5x2=10 \n 5x3=15 \n 5x4=20 \n 5x5=25 \n 5x6=30 \n 5x7=35 \n 5x8=40 \n 5x9=45 \n 5x10=50</h5>")
// task 6
var cel= 28
var feren= cel * (9/5)+32
console.log(feren);
var cel= (feren-32) * (5/9)
console.log(cel);
document.write( cel, "\n <h5>Celcius is equal to </h5>", feren, "<h5>Ferenheit</h5>")
document.write( feren, "\n <h5>Fereheit is equal to </h5>", cel, "<h5>Celcius</h5>")
// task 8
document.write("\n <h4>Task 8</h4>")
var totalmarks= 850;
var marksobt=681;
var per= (marksobt/totalmarks)*100;
document.write("\n <h5>Total Marks: 850</h5>")
document.write("\n <h5>Marks Obtained: 681</h5>")
document.write("\n <h5>Percentage: </h5>", per)

// task 9
document.write("\n <h4>Task 9</h4>")

var dollar = 104.80;
var riy=28;
var totalcurr= 10*dollar + 25*riy
document.write("<h4>Total Currency in PKR is: </h4>", totalcurr)
// task10
document.write("\n <h4>Task 10</h4>")

var vari=((10+5)*10)/2 ;
console.log(vari);
// task11
document.write("\n <h4>Task 11</h4>")

var cyear= 2025
let age= prompt("Please Enter Your Birth Year", "yyyy")
var yourage= cyear-age
console.log(yourage);
alert(" Your Age is " + yourage)



