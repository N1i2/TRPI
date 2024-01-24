//function
function exBox(start, cur) {
    if (Array.isArray(cur))
        cur.reduce(exBox, start);
    else
        start.push(cur);

    return start;
}

function sumMass(start, cur) {
    if (Array.isArray(cur))
        start = cur.reduce(sumMass, start);
    else
        start += cur;

    return start;
}

function newObj(...obj) {
    let result = {};

    Object.assign(result, ...obj);

    return result;
}

function piromid(hight = (Math.random() * 7) + 3) {
    let char = '*';

    if (!Number.isInteger(hight))
        hight = (Math.random() * 7) + 3

    for (let i = 1; i <= (hight * 2); i += 2)
        console.log(' '.repeat(hight - i / 2) + char.repeat(i));
}
//relis
//number 1
let mass = [1, [1, 2, [3, 4]], [2, 4]];
var sMass = [];

sMass = mass.reduce(exBox, []);

console.log(sMass);

//number 2
let summ = mass.reduce(sumMass, 0);

console.log(summ);

//number 3 ??????????????????????????????????????????????????????????????
let student = [
    {
        name: "renat",
        age: 21,
        number: 123,
    },
    {
        name: "kolia",
        age: 10,
        number: 6
    },
    {
        name: "max",
        age: 20,
        number: 4
    },
    {
        name: "pedro",
        age: 19,
        number: 5
    },
    {
        name: "mia",
        age: 19,
        number: 4
    },];

let result=[];

for(let i=0, jo=0;i<student.length;i++, jo=0)
{
    if(student[i].age>=17)
    {
        for(let j=0;j<result.length;j++)
        {
            if (result[j].key == student[i].number) {
                result[j].stud.push(student[i]);
                jo++;
                break;
            }
        }

        if (jo == 0) 
            result.push({ key: student[i].number, stud: [student[i]] });
    }
}

//number 4
let myString = "kolleH";
let total1 = '';
let total2 = '';

for (let i = 0; i < myString.length; i++)
    total1 += myString[i].charCodeAt();

for (let i = 0; i < total1.length; i++) {
    if (total1[i] == '7')
        total2 += '1';
    else
        total2 += total1[i];
}
console.log(total1);
console.log(total2);
console.log(total1 - total2);

//number 5
let objekt = [
    {
        a: 1,
        b: 2
    },
    {
        b: 3,
        c: 3
    }];

objekt[2] = newObj(objekt[0], objekt[1]);
console.log('a = ' + objekt[2].a + ', b = ' + objekt[2].b + ', c =  ' + objekt[2].c)

//number 6
let hight = +prompt("Введите высоту пирмиды");

(hight != 0) ? piromid(hight) : piromid((Math.random() * 7) + 3);
