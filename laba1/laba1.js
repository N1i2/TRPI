//number 1
let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1 / 0;
let answer = true;
let no = null;
let b;


//number2
let res = (45 * 21) / 25;
console.log('Mожет поместиться: ', Math.floor(res));

//number3
i = 2;
a = i++;
b = ++i;

//nubmer 4
let first = "Котик";
let second = "котик";

first = "Котик";
second = "китик";
console.log('2) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = "Кот";
second = "Котик";
console.log('3) ', first, ' и ', second, ' = ', (
    first == second) ? "true" : "false");

first = "Привет";
second = "Пока";
console.log('4) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = 73;
second = "53";
console.log('5) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = false;
second = 0;
console.log('6) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = 54;
second = true;
console.log('7) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = 123;
second = false;
console.log('8) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = true;
second = "3";
console.log('9) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = 3;
second = "5mm";
console.log('10) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = 8;
second = "-2";
console.log('11) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = 34;
second = "34";
console.log('12) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

first = null;
second = undefined;
console.log('13) ', first, ' и ', second, ' = ', 
(first == second) ? "true" : "false");

//nubmer 5
let fName = 'иван';
let sName = 'иванов';
let lName = 'иванович';
let giveName = prompt('Введите имя(имя отчество, ФИО) ваего преподавателя:');
let nameForChecked = giveName.toLowerCase(giveName);

if (
    nameForChecked == fName ||
    nameForChecked == (fName + ' ' + lName) ||
    nameForChecked == (sName + ' ' + fName + ' ' + lName)
)
    alert('Есть такой');
else
    alert('Таких нет');

//nubmer 6
let rusAccess = true;
let anglAccess = true;
let mathAccess = true;

//let rusAccess = false;
//let anglAccess = false;
//let mathAccess = false;

if (rusAccess ||
    anglAccess ||
    mathAccess) {
    if (rusAccess &&
        anglAccess &&
        mathAccess) {
        alert('Студент все успешно сдал');
    }
    else {
        alert('Студента ждет пересдача');
    }
}
else {
    alert('Студент не сдал экзамены');
}

//nubmer 7
first = true;
second = true;
console.log('\n1)', first, ' + ', second, ' = ', first + second);

first = 0;
second = '5';
console.log('2)', first, ' + ', second, ' = ', first + second);

first = 5;
second = 'mm';
console.log('3)', first, ' + ', second, ' = ', first + second);

first = 8;
second = Infinity;
console.log('4)', first, ' / ', second, ' = ', first / second);

first = 9;
second = "\n9";
console.log('5)', first, ' * ', second, ' = ', first * second);

first = null;
second = 1;
console.log('6)', first, ' - ', second, ' = ', first - second);

first = "5";
second = 2;
console.log('7)', first, ' - ', second, ' = ', first - second);

first = "5px";
second = 3;
console.log('8)', first, ' - ', second, ' = ', first - second);

first = true;
second = 3;
console.log('9)', first, ' - ', second, ' = ', first - second);

first = 7;
second = 0;
console.log('10)', first, ' || ', second, ' = ', first || second);

//nubmer 8
let myArray = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        myArray[i - 1] = i + 2;
    else
        myArray[i - 1] = i + "mm";
}

console.log('\n');
for (let i = 0; i < 10; i++) {
    console.log(myArray[i]);
}
//nubmer 9
let nubmerDayOfWeek = prompt('Введите номер от 1 до 7');
const nameDayofWeek = []
nameDayofWeek[0] = "понедельник";
nameDayofWeek[1] = "вторник";
nameDayofWeek[2] = "среда";
nameDayofWeek[3] = "четверг";
nameDayofWeek[4] = "пятница";
nameDayofWeek[5] = "суббота";
nameDayofWeek[6] = "воскресенье";

let ziro = 0;
let last = 6;
let show = true;
numberDayOfWeek = String(nubmerDayOfWeek);

let objDay = {
    1: "Понедельник",
    2: "Вторник",
    3: "Стреда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
}

if (nubmerDayOfWeek == 1)
    alert('Это ' + objDay[1]);

else if (numberDayOfWeek == 2)
    alert('Это ' + objDay[2]);

else if (numberDayOfWeek == 3)
    alert('Это ' + objDay[3]);

else if (numberDayOfWeek == 4)
    alert('Это ' + objDay[4]);

else if (numberDayOfWeek == 5)
    alert('Это ' + objDay[5]);

else if (numberDayOfWeek == 6)
    alert('Это ' + objDay[6]);

else if (numberDayOfWeek == 7)
    alert('Это ' + objDay[7]);

else {
    alert('Произошла ошибка');
    show = false;
}

if (show) {
    const text = ('(то же самое но циклом) \nЭто ' + nameDayofWeek[nubmerDayOfWeek - 1]);
    alert(text);
}

//nubmer 10
function funForTen(threed, second='', first = 'hello') {
    return first + ' ' + second + ' ' + threed;
}

let textFunc = "Обединение трех переменнных =\n" + funForTen(prompt("Введите любое слово: "));

alert(textFunc);

//nubmer 11
let long = 5;
let hight = 5;

function firstFunc(a, b) {
    return (a == b) ? (a * b) : ((a + b) * 2);
}

let secondFunc = function (a, b) {
    return (a == b) ? (a * b) : ((a + b) * 2);
}

let threedFun = (a, b) => (a == b) ? (a * b) : ((a + b) * 2)

let firstRes = firstFunc(long, hight);
let secondRes = secondFunc(long, hight);
let threedRes = threedFun(long, hight);

alert(firstRes);
alert(secondRes);
alert(threedRes);