// 1
var allLower = userInput.toLowerCase();
// 2
var x=prompt("write smthng: ")
x=x.toLowerCase();
// 3
var y=prompt("write smthng: ")
y=y.toUpperCase();
// 4
var a=prompt("write smthng: ")
var z =a.toLowerCase();
// 5
var b="hello";
alert(b);
var c=b.toUpperCase();
alert(c);
// 6
var city=prompt("Enter your city: ");
var u1 = city.slice(0,1)
var u2= u1.toUpperCase();
var u3= city.replace(u1, u2)
alert("city input: " + city)
alert("Title Case: " + u3)
// ch 22
// 1
var sameWord= "captain"
var d= sameWord.slice(1,3)
alert(d);
// 2
var animal= "elephant"
var seg= animal.slice(2,6)
alert(seg);
// 3
var an= 'abcdefgh'
var len= an.length;
// 4
var text = "To be or not to be.";
 var indx = text.indexOf("be");
 console.log(indx);
// 5
var text = "To be or not to be.";
 var indx = text.lastIndexOf("be");
 console.log(indx);
//  6
var text='go'
var indx=text.lastIndexOf('go');
// 7
var indexNum;
var text;
if(indexNum>0 && indexNum < text.length){

}
// 8
var ch='abcde'
var findchar= ch.charAt(2)
console.log(findchar);
// 9
var charr= 'abcdefghijklmnop'
var cha= charr.charAt(10);
console.log(cha);
// 10
var str= 'abcdefghijklmnop'
str=str.length
console.log(str);
var x= str.charAt(16);
console.log(x);
// 11
var input='abcdefghij'
var cha= input.charAt(5);
console.log(cha);
// 12
if(varr[2]=='c'){

}
// 13
var arr=[]
var input=['a','b','c','d']
for(i=0; i<input.length; i++){
arr[i]=input[i];
}
console.log(arr);
// 14
var reply='no';
console.log(reply);
var revisedReply= reply.replace('no','yes');
console.log(revisedReply);
// 15
var str='1';
console.log(str);
var revisedStr= str.replace('1','one');
console.log(revisedStr);
// 16
var y = x.replace(/a/g, "z");
// ch 26
// 1
var i=20.67;
var e=Math.round(i,2)
console.log(e);
// 2
var origNum=20.67;
var roundNum=Math.ceil(origNum)
console.log(roundNum);
// 3
var origNum=20.67;
var roundNum=Math.floor(origNum)
console.log(roundNum);
// 4
var origNum=0.5;
var roundNum=Math.floor(origNum)
console.log(roundNum);
// 5
var num=Math.random();
var num2=(num *50)+1;
var sta2= Math.floor(num2);
console.log(sta2);
// 6
var dice=Math.random();
var num=(dice *6)+1;
var sta= Math.floor(num);
alert("Random value of dice is: " + sta)
// 7
var dice1=Math.random();
var num1=(dice1 *2)+1;
var sta1= Math.floor(num1);
if(sta1==1){
    alert("Random coin value is: " + sta1 + " and it is Heads")
}
else if(sta1==2){
    alert("Random coin value is: " + sta1 + " and it is  Tails")
}
// ch 28
// 1 & 2
var str='123';
var int=parseInt(str);
// 3
var str1='123.23';
var int=parseFloat(str1);
// 4
isNaN();
parseFloat();
parseInt();
// 5
var int2=123;
var str2=int2.toString();
console.log(str2);
console.log(typeof str2);
// 6
var int2=42;
var str2=int2.toString();
console.log(str2);
console.log(typeof str2);
// 7
var str1='13.5';
var int5=parseInt(str1);
console.log(int5);
console.log(typeof int5);
// ch 30
// 1
var numbr=12.3456796;
var newNum=numbr.toFixed(4);
console.log(numbr);
console.log(newNum);
console.log(typeof newNum);

// 2
var numbr_1=12.3456796;
numbr_1= Number(numbr_1.toFixed(2))
console.log(numbr_1);
console.log(typeof numbr_1);
// 3

if(numbr_1.toFixed(2).length> 4){}

// 4
var number=12.3456796;
 number=String(number.toFixed(2));
alert(number + typeof number) 