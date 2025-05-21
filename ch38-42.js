// 1
function power(a, b) {
    var result = 1;
    var isNegative = b < 0;
    b = Math.abs(b);
    for (let i = 0; i < b; i++) {
        result *= a;
    }
  return isNegative ? 1 / result : result;
}
// 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
// 3
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function triangleArea(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle sides.";
    }
    var s = semiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// 4
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function calculatePercentage(m1, m2, m3) {
    var totalMarks = m1 + m2 + m3;
    var percentage = (totalMarks / 300) * 100;
    return percentage;
}
function mainFunction(m1, m2, m3) {
    var avg = calculateAverage(m1, m2, m3);
    var perc = calculatePercentage(m1, m2, m3);
       console.log("Marks: ", m1, m2, m3);
    console.log("Average Marks: " + avg.toFixed(2));
    console.log("Percentage: " + perc.toFixed(2) + "%");
}
// 5
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// 6
function removeVowels(sentence) {
    var result = "";
    for (var i = 0; i < sentence.length && i < 25; i++) {
        var char = sentence[i];
        if (!'aeiouAEIOU'.includes(char)) {
            result += char;
        }
    }
    return result;
}
// 7
function countSuccessiveVowels(sentence) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < sentence.length - 1; i++) {
        var first = sentence[i];
        var second = sentence[i + 1];
        if (vowels.includes(first) && vowels.includes(second)) {
            var pair = first.toLowerCase() + second.toLowerCase();
            switch (pair) {
                case "aa":
                case "ae":
                case "ai":
                case "ao":
                case "au":
                case "ea":
                case "ee":
                case "ei":
                case "eo":
                case "eu":
                case "ia":
                case "ie":
                case "ii":
                case "io":
                case "iu":
                case "oa":
                case "oe":
                case "oi":
                case "oo":
                case "ou":
                case "ua":
                case "ue":
                case "ui":
                case "uo":
                case "uu":
                    count++;
                    break;
                default:
                    break;
            }
        }
    }
    return count;
}
// 8
function toMeters(km) {
    return km * 1000;
}function toFeet(km) {
    return km * 3280.84;
}function toInches(km) {
    return km * 39370.1;
}function toCentimeters(km) {
    return km * 100000;
}
function convertDistance(km) {
    console.log("Distance in kilometers: " + km + " km");
    console.log("In meters: " + toMeters(km));
    console.log("In feet: " + toFeet(km));
    console.log("In inches: " + toInches(km));
    console.log("In centimeters: " + toCentimeters(km));
}
// 9
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12;
    if (hoursWorked <= regularHours) {
        return 0;
    } else {
        let overtimeHours = hoursWorked - regularHours;
        let overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    }
}
// 10
function calculateNotes(hundreds) {
    let amount = hundreds * 100;

    if (amount % 10 !== 0) {
        console.log("Amount should be divisible by 10.");
        return;
    }
    let notes100 = Math.floor(amount / 100);
    amount %= 100;
    let notes50 = Math.floor(amount / 50);
    amount %= 50;
    let notes10 = Math.floor(amount / 10);
    console.log("Total notes:");
    console.log("100s: " + notes100);
    console.log("50s: " + notes50);
    console.log("10s: " + notes10);
}




