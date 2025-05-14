// // 1
// var dObj= new Date();
// // 2
// var dStr=String(new Date())
// // 3
// var dObj= new Date();
// var day= dObj.getDay();
// // 4
// var nameOfDay = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
// var dday = ttime.getDay();
// var day= nameOfDay[dday]
// alert("Today is " + day);
// // 5
// var dObj= new Date();
// var day= dObj.getDay();
// var time=dObj.getTime();
// // 6
// var dObj= new Date("2020/dec/31");
// // 7
// var dObj= new Date("1992/feb/2");
// // 8
// alert(new Date("Jan 1, 1980").getTime());
// // 9
// var dObj= new Date("1992/feb/2");
// // 10
// var dObj= new Date("2025/jan/14");
// // 14
// var age=parseInt(prompt("enter your age"))
// var byear= 2025-age;
// alert("Your birth year is: " + byear)
// // chapter 35-37
// // 1
// function displayAlert(){}
// // 2
// function askName(){
//     var userName= prompt("Enter name")
// }
// // 3
// function call1(){
//     function call2(){
//     }
//             function call3(){}
//     call2();
//     call3();
// }
// // 4
// function concat(a,b){
//     var result = a+b;
//     return result;
// }
// concat(5,6)
// // 5
// function mul(a,b,c){
//     var result = a*b*c;
//     return result;
// }
// mul(2,4,2)
// // 6
// function calculateAverage(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; 
//   }
//   var average = sum / numbers.length; 
//   return average;
// }
// // 7
// function add(a, b) {
//   return a + b;
// }
// var result = add(3, 5); 
// alert(result); 
// // 8
// function letterCount(word) {
//   var counts = {}; 
//   word = word.toLowerCase(); 
//   for (var i = 0; i < word.length; i++) {
//     var letter = word[i];
//     if (counts[letter]) {
//       counts[letter]++; 
//     } else {
//       counts[letter] = 1; 
//     }
//   }
//   return counts;
// }
// // 9
// function chkArray(name){
//    var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
//     if(array.includes(name)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//     var enter=prompt("enter name")
//     alert(chkArray(enter))
// // 10
// function revArr(){
// var array = ['a','b','c','d','e']
// var revArray = array.reverse();
// return revArray
// }
// alert(revArr() )
// // 11
// var word = prompt("Enter a word to check if it's a palindrome:");
// if (checkPalindrome(word)) {
//   alert(word + " is a palindrome!");
// } else {
//   alert(word + " is not a palindrome.");
// }
// // 12
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
// // 13
// function frstUpper(sentence) {
//   let words = sentence.split(" "); //let is used to declare "words" as a local variable
//   var capitalizedWords = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizedWords.join(" ");
// }
// // 14
// var day = prompt("Enter a day (e.g., Monday)");

// switch (day.toLowerCase()) {
//   case "monday":
//     alert("Start of the work week!");
//     break;
//   case "tuesday":
//     alert("Second day of work.");
//     break;
//   case "wednesday":
//     alert("Midweek already.");
//     break;
//   case "thursday":
//     alert("Almost there!");
//     break;
//   case "friday":
//     alert("Last working day!");
//     break;
//   case "saturday":
//   case "sunday":
//     alert("It's the weekend!");
//     break;
//   default:
//     alert("Invalid day entered.");
// }
// // 15
var day = prompt("Enter your City Name ");

switch (day.toLowerCase()) {
  case "karachi":
    alert("You are a Karachiite");
    break;
  case "lahore":
    alert("You are a Lahori");
    break;
  case "islamabad":
    alert("You are a Burger");
    break;
  case "hyderabad":
    alert("welcome");
    break;
  default:
    alert("Invalid city entered.");
}





