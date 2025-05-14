// // 1
// var fname=prompt("enter first name")
// var lname=prompt("enter last name")
// var fullName=fname + lname
// alert("hello " + fullName)
// // 2
// var n1=parseInt(prompt("enter first num"))
// var n2=parseInt(prompt("enter second num"))
// var n3=n1 + n2
// alert("sum: " + n3)
// // 3
// function calculator(){
// var num1=parseInt(prompt("enter first num"))
// var num2=parseInt(prompt("enter second num"))
// var op=prompt("enter operator")
// if(op=='+'){
// var num3=num1 + num2
// alert("sum: " + num3)
// }
// else if(op=='-'){
//  num3=num1 - num2
// alert("sub: " + num3)
// }
// else if(op=='/'){
//  num3=num1 / num2
// alert("division: " + num3)
// }
// else if(op=='*'){
//  num3=num1 * num2
// alert("mul: " + num3)
// }
// return num3;
// }
// calculator()
// // 4
// function squaring(){
//     var num1=prompt("enter a number")
//     var result= num1*num1;
//     alert("square of the number you entered is: " + result)
//     return result;
// }
// squaring()
// // 5
// function factorial() {
//         var num1=prompt("enter a number")
//   if (num1 < 0) {
//     return "Error: Factorial not defined for negative numbers.";
//   }
//   let result = 1;
//   for (let i = 2; i <= num1; i++) {
//     result *= i;
//   }
//   return result;
// }
// alert(factorial())
// // 6
// function counting(){
// var sIn=parseInt(prompt("enter start number"))
// var eIn=parseInt(prompt("enter end number"))
//   document.write("Counting from " + sIn + " to " + eIn + " is: " + "</br>")
// for(i=sIn; i<=eIn; i++){
//   document.write( i + "</br>")
// }
// return i;
// }
// counting()
// // 7
// calculateHypotenuse()
// function calculateHypotenuse() {
//   var base = parseFloat(prompt("Enter Base value"));
//   var perpendicular = parseFloat(prompt("Enter Perpendicular value"));

//   function squareSum() {
//     return (base * base) + (perpendicular * perpendicular);
//   }

//   var hypo = Math.sqrt(squareSum());
//   alert("Hypotenuse: " + hypo);
//   return hypo;
// }
// calculateHypotenuse();
// // 8
// function areaOfR(width,height){
// var A= width*height
// return A;
// }
// alert("Area of Rectangle is: " + areaOfR(8,15))
// // 9
// function checkPalindrome(str) {
//   var cleanStr = str.toLowerCase()
//   var reversedStr = cleanStr.split('').reverse().join('');
//   if (cleanStr === reversedStr) {
//     return true; 
//   } else {
//     return false;
//   }
// }
// var word = prompt("Enter a word to check if it's a palindrome:");
// if (checkPalindrome(word)) {
//   alert(word + " is a palindrome!");
// } else {
//   alert(word + " is not a palindrome.");
// }
// // 10
// function frstUpper(sentence) {
//   var words = sentence.split(" ");
//   var capitalizedWords = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizedWords.join(" ");
// }
// var str = "a quick brown fox";
// alert("String is: " + str);
// alert("First Upper: " + frstUpper(str));
// // 11
// function findLongestWord(str) {
//   var words = str.split(" "); 
//   var longest = "";
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }
// var example = "Web Development Tutorial";
// var longestWord = findLongestWord(example);
// alert("Longest word is: " + longestWord); 
// // 12
function calcCircumference(radius){
  return 2*3.142*radius;
}
function calcArea(radius){
  return 3.142*radius*radius;
}
var rad=parseFloat(prompt("Enter radius to calculate Area and circumference"))
// calcArea(rad)
// calcCircumference(rad)
document.write("Circumference of circle is: " + calcCircumference(rad)+"</br>")
document.write("Area of circle is: " + calcArea(rad))