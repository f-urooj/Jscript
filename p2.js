// 1
var int= prompt("Enter a positive integr: ")
if(int>0){
var int1= Number(int);
alert("Number: " + int1);
var int2= Math.round(int,1);
alert("Round off: " + int2);
var int3= Math.floor(int);
alert("Floor: " + int3);
var int4= Math.ceil(int);
alert("Ceil: " + int4);
}
// 2
var inn= prompt("Enter a negative float point number: ")
if(inn<0){
var inn1= Number(inn);
alert("Number: " + inn1);
var inn2= Math.round(inn,1);
alert("Round off: " + inn2);
var inn3= Math.floor(inn);
alert("Floor: " + inn3);
var inn4= Math.ceil(inn);
alert("Ceil: " + inn4);
}
// 3
var ab= prompt("Enter a number: ")
var ab1= Math.abs(ab)
alert("Absolute value of number you entered is: " + ab1)
// 4
var dice=Math.random();
var num=(dice *6)+1;
var sta= Math.floor(num);
alert("Random value of dice is: " + sta)
// 5
var dice1=Math.random();
var num1=(dice1 *2)+1;
var sta1= Math.floor(num1);
if(sta1==1){
    alert("Random coin value is: " + sta1 + " and it is Heads")
}
else if(sta1==2){
    alert("Random coin value is: " + sta1 + " and it is  Tails")
}
// 6
var dice2=Math.random();
var num2=(dice2 *100)+1;
var sta2= Math.floor(num2);
if(sta2>=1 && sta2<=100){
    alert("Random number b/w 100 and 1 is: " + sta2 )
}
// 7
var ask = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms): ")
var weight = parseFloat(ask)
if(weight==50 || weight==50.2){
        alert("Your weight is: " + weight + " Kilograms" )
}
else {
    alert("Invalid or different weight entered.");
}
// 8
var guess = prompt("Enter a number b/w 1 to 10: ")
var dice3 = Math.random();
var num3 = (dice3 * 10) + 1;
var sta3 = Math.floor(num3);
alert("Random number is: " + sta3 )
if (sta3 == guess) {
    alert("Congratulations you guessed the correct number, Random number is: " + sta3 + "and you entered " + guess)
}
else {
        alert("Invalid or different number entered.")
}