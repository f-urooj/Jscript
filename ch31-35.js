// chapter 31
// 1
var ttime = new Date()
    console.log(ttime);
alert(ttime);

// 2
var nameOfMonth = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];
var mmonth = ttime.getMonth();
var month=nameOfMonth[mmonth]
alert("Current Month: " + month);

// 3
var nameOfDay = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
var dday = ttime.getDay();
var day= nameOfDay[dday]
alert("Today is " + day);

// 4
var nameOfDay = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
var dday = ttime.getDay();
var day= nameOfDay[dday]
if(day==='Sun' || day==='Sat'){
alert("It's funday" );
}

// 5
var dayOfMonth= new Date();
var ddate= dayOfMonth.getDate();
if(ddate<16)
{
    alert("First Fifteen Days of Month")
}
else if(ddate>=16){
    alert("Last Fifteen Days of Month")
}

// 6
var time1 = new Date()
    console.log(time1);
alert("Current Date: " + time1);
var time2= new Date()
let minutesSinceEpoch = Math.floor(time2.getTime() / 60000);
alert("Ellapsed Minutes since January 1, 1970: " + minutesSinceEpoch);
let date = new Date();
let millisecondsSinceEpoch = date.getTime();
alert("Ellapsed Milliseconds since Jan 1, 1970:", millisecondsSinceEpoch);
// 7
var ntime=new Date()
alert(ntime)
var ntimee= ntime.getTime();
if(ntimee<'12'){
    alert("its AM")
}
else if(ntimee>='12'){
alert("its PM")
}
// 8
var ldate= new Date("2020/dec/31")
alert("Later Date: " + ldate)
// 9
var ramStart = new Date('2015-06-18');
var today = new Date();
var difInMs = today.getTime() - ramStart.getTime();
var daysPassed = Math.floor(difInMs / (1000 * 60 * 60 * 24));
alert("Days passed since 1st Ramadan (June 18, 2015): " + daysPassed);
// 10
var refDate= new Date("2015/jan/1");
var todayy= new Date("2015/dec/5");
var diff= todayy.getTime()-refDate.getTime();
var secpas = Math.floor(diff / (1000 * 60 ));
alert("On reference date " + todayy +', ' + secpas + " seconds have passed since beginging of 2015")
// 11
var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log("Current Hour:", currentHour)
currentDate.setHours(currentHour + 1);
alert(" New Date & Time (1 hour ahead): " + currentDate);
// 12
var age=parseInt(prompt("enter your age"))
var byear= 2025-age;
alert("Your birth year is: " + byear)
