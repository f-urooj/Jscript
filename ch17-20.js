// // task 1
// var mArry=[[],[],[]]
// // 2
// var marr= [['0','1','2','3'],['1','0','1','2'],['2','1','0','1']]
// document.write(marr[0]+"</br>"+marr[1]+"</br>"+marr[2])
// // 3
// for(i=0; i<=10; i++){
//     document.write(i+"</br>")
// }
// // 4
// var tab= parseInt(prompt("Enter a number to see its table: "))
// var len=parseInt(prompt("enter length of table: "))
// for(i=1; i<=len; i++){
//     document.write(tab + 'x' + len + '=' + (tab*i)+"</br>")
// }
// // 5
// document.write("</br>")
// document.write("</br>")
// var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
// for(i=0; i<fruits.length; i++){
//     document.write(fruits[i]+'</br>')
//     document.write("element at index"+ i +'='+fruits[i] +"</br>")
// }
// 6
// document.write('<h5>Counting:</h5>'+'</br>')
// for(i=0; i<=10; i++){
//     document.write([i]+',')
// }
// document.write('<h5>Reverse Counting:</h5>'+'</br>')
// for(i=10; i>0; i--){
//     document.write([i] +',')
// }
// var eve=[];
// document.write('<h5>Even:</h5>'+'</br>')
// for(i=0; i<=20; i++){
//     if(i%2==0){
//         eve.push(i);}
// }
// document.write(eve)
// var od=[];
// document.write('<h5>Odd:</h5>'+'</br>')
// for(i=0; i<=20; i++){
//     if(i%2!=0){
// od.push(i)
//     }
// }
// document.write(od)
// var ser=[];
// document.write('<h5>Series:</h5>'+'</br>')
// for(i=0; i<=20000; i++){
//     if(i%2000==0){
//         ser.push(i);}
// }
// document.write(ser)
// 7
// var b = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var u= prompt("What would you like to have?")
// for(var i=0; i < b.length; i++){
//     if(b.includes(u)){
//         alert("Please proceed for checkout")
//     }
//     else if(!b.includes(u)){
//         alert("We are Sorry, we're out of stock")
//     }break;
// }
// 8
var lar = ['24', '53', '78', '91', '12']
document.write('Array is'+lar+"</br>")
var max= Math.max(...lar)
document.write("Largest number in above array is" + max + '</br>')
// 9
var sm = ['24', '53', '78', '91', '12']
document.write('Array is'+sm+"</br>")
var min= Math.min(...sm)
document.write("Smallest number in above array is" + min + '</br>')
// 10
document.write("</br>")
document.write("</br>")
var ran=[];
for(i=5; i<=100; i++){
    if(i%5==0){
        ran.push([i])
    }
}
document.write(ran+"</br>")
