alert("Chapter 6 starts here")
// task 1
var v=10;
document.write("\n The value of v is:", v)
document.write("</br>-----------------------")
++v;
document.write("</br></br> The value of ++v is:", v)
document.write("</br>Now the value of v is:", v)
document.write("</br>")
document.write("</br>")
v++;
document.write("</br> The value of v++ is:", v)
document.write("</br> The value of v is:", v)
--v;
document.write("</br></br> The value of --v is:", v)
document.write("</br> The value of v is:", v)
v--;
document.write("</br></br> The value of v-- is:", v)
document.write("</br> The value of v is:", v)
document.write("</br>")
document.write("</br>")
document.write("</br>")
document.write("Task 2")
document.write("</br>")
// task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("</br> </br>Result:",result)
--a;
document.write("</br>--a:",--a)
var stp1= --a - --b;
document.write("</br>--a - --b:",stp1)
var stp2= --a - --b + ++b;
document.write("</br>Result:",stp2)
var stp3= --a - --b + ++b + b--;
document.write("</br>Result:",stp3)
// task3
document.write("</br>")
document.write("</br>")
document.write("</br>")
var name= prompt("Hello User!! </br> Please Enter Your Name", "Enter name here")
// tsk 5
document.write("</br>")
document.write("Task 5")
document.write("</br>")
var tab= prompt("Please Enter a number")
document.write("</br>",tab,"x1 =",tab*1)
document.write("</br>",tab,"x2 =",tab*2)
document.write("</br>",tab,"x3 =",tab*3)
document.write("</br>",tab,"x4 =",tab*4)
document.write("</br>",tab,"x5 =",tab*5)
document.write("</br>",tab,"x6 =",tab*6)
document.write("</br>",tab,"x7 =",tab*7)
document.write("</br>",tab,"x8 =",tab*8)
document.write("</br>",tab,"x9 =",tab*9)
document.write("</br>",tab,"x10 =",tab*10)
// task 6
document.write("</br>")
document.write("</br>")
document.write("Task 6")
document.write("</br>")
var name= (prompt("Enter Your Name: "))
var clas= (prompt("Enter Your Class: "))
var mathmarks= parseInt(prompt("Enter Maths Marks: "))
var scimarks= parseInt(prompt("Enter Science Marks: "))
var engmarks= parseInt(prompt("Enter English Marks: "))
var totalmarks=300;
var obtmarks= mathmarks+ scimarks+engmarks;
var grade;
var per= (obtmarks/totalmarks)*100;
if (per>=90){
    grade = "A+"
}
else if (per>=80 && per<90){
    grade = "A"
}
else if (per>=70 && per<=79){
    grade = "B"
}
else if (per>=60 && per<=69){
    grade = "C"
}
else if (per>=50 && per<=59){
    grade = "D"
}
else if (per>=40 && per<=49){
    grade = "Promoted"
}

else if (per>=0 && per<=39){
    grade = "Fail"
}
else
{
    grade = "no grade"    
}
var marksheet= `
--------------------
JAWAN PAKISTAN
--------------------
Student Name = ${name}
Class = ${clas}
--------------------
Subjects | Marks
Math | ${mathmarks}
English | ${engmarks}
Science | ${scimarks}
--------------------
Obtained Marks: ${obtmarks}
Total Marks: ${totalmarks}
Percentage: ${per}
Grade: ${grade}

`
console.log(marksheet);
