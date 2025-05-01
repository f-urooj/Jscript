// 1
for(var i=0; i<=10; i++)
// 2
for(var i=0; i<=12; i++)
// 3
for(var i=0; i <= 4; i++)
// 4
for(var c=0; c<100; c++){
console.log(c);}
// 5
for(i=3; i>0; i--){
    console.log(i); 
}
// 6
var arr=[10];
// 7
var flag= true;
// 8
var pet=['dog','cat','horse','sparrow','parrot','peigon','chicken','eagle']
for(i=0; i<pet.length; i++){
    console.log(i);
}
// 9
for(var i=0; i<10; i++)
{
    if(i===1){
        alert(i);
        break;
    }
}
// 10
var fname= prompt("Enter first name: ")
var username=['urooj','fatima','tehzeeb','hamza','wasi','hammad','dua','ramal'];
for(i=0; i<username.length; i++){
    if(username.includes(fname)){
        alert("Enter")
        break;
    }
else if(!username.includes(fname)){
    alert("Please write correct username")
    break;
}
}
// 11
var list=['urooj','fatima','tehzeeb','hamza','wasi','hammad','dua','ramal'];
var userInput= prompt("Enter first name: ")
var matchFound = false;
for (var i = 0; i < list.length; i++) {
if (userInput === list[i]) {
alert("Match found");
matchFound = true;
break;
}
else if(userInput != list[i]) {
    alert("Match isn't found");
matchFound = false;
break;
}
};
// 12
var firstArr = ['a', 'b', 'c', 'd', 'e', 'f'];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++){
    for (var n = 0; n < secondArr.length; n++){
        document.write(firstArr[i]+secondArr[n] +"</br>")
    }
}