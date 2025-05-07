// 1
var f=prompt("Enter your first name: ")
var l=prompt("Enter your last name: ")
var full= f + l;
alert("Welcome to our Website Dear " + full)
// 2
var m=prompt("Enter your favorite mobile phone model: ")
var find= m.length;
alert("Length of string is: "+ find)
// 3
var pak="Pakistani"
var fin= pak.indexOf('n');
alert("index of n is: " + fin)
// 4
var hel="Hello World"
var fi= hel.lastIndexOf('l');
alert("index of last l is: " +fi)
// 5
var pa="Pakistani"
var ff= pa.charAt('3');
alert("Character at index 3 : " + ff)
// 6
 var first=prompt("Enter your first name: ")
var l=prompt("Enter your last name: ")
var result = first.concat(" ", l)
alert(result)
// 7
var c="Hyderabad"
var rep= c.replace("Hyder","Islam")
alert("Before Replacement: " + c)
alert("After Replacement: " + rep)
// 8
var message = "Ali and Sami are best friends. They play cricket and football together"
var ffind= message.replaceAll("and", "&")
alert("Before Replacement: " + message)
alert("After Replacement: " + ffind)
// 9
var val= "472";
alert("value: "+val)
var ty= typeof(val)
alert("type: "+ty)
var val1 = Number(val);
alert("value: "+val1)
var ty1= typeof(val1)
alert("type: "+ty1)
// 10
 var use=prompt("Enter your first name: ");
 var us1 = use.toUpperCase();
 alert(us1)
// 11
var us=prompt("Enter your Last name: ");
var u1 = us.slice(0,1)
var u2= u1.toUpperCase();
var u3= us.replace(u1, u2)
alert("User input: " + us)
alert("Title Case: " + u3)
// 12
var num = 35.36 ;
var num1= num.toString();
var num3= num1.replace(".","")
alert("Number: " + num)
alert("Result: " + num3)
// 13
var user= prompt("Enter you name: ")
for (var i = 0; i < user.length; i++) {
    var cc = username.charCodeAt(i);
    if(cc==33 || cc==44 || cc==46 || cc==64){
        // if(user.includes("@")){
        alert("Please enter valid username")
        break;
    }
    else{
        alert("username accepted")
    }
}
let username;
let isValid = false;

while (!isValid) {
    username = prompt("Enter your username:");
    isValid = true;
    for (let i = 0; i < username.length; i++) {
        let charCode = username.charCodeAt(i);

        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            alert("Invalid username! It should not contain any of the following characters: @ . , !");
            isValid = false;
            break;
        }
    }
    if (isValid) {
        alert("Username accepted: " + username);
    }
}
// 14
var b = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var u= prompt("What would you like to have?")
var bak=u.toLowerCase();
for(var i=0; i < b.length; i++){
    if(b.includes(bak)){
        alert("Please proceed for checkout")
    }
    else if(!b.includes(bak)){
        alert("We are Sorry, we're out of stock")
    }break;
}
// 15
var pas=( prompt("Enter password: ",'password123'))
if(pas>=65 || pas<=90 || pas>=97 || pas<=122 && pas>=48 || pas<=57 ){
    if(!(pas[0]>=48 && pas[0]<=57)){
        if(pas.length>=6){
            alert("you entered correct password")
        }
    }
}
else{
    alert("please enter correct pasword which includes alphabets and num ")
}



