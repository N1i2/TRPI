//number 1
function addNewElement(list, element) {
    for (let index of list) {
        if (index.Name == element.Name) {
            index.sell = element.sell;
            index.count += element.count;
            return;
        }
    }

    list.add(element);
}

function showAllElement(list) {
    for (let index of list) {
        console.log("Название: " + index.Name);
        console.log("Цена: " + index.sell);
        console.log("Количество: " + index.count);
        console.log("\n");
    }
}

function deleteElement(list, element) {
    for (let index of list)
        if (index.Name == element) {
            list.delete(index);
            return;
        }

    console.log('Продукта ' + element + ' нет');
}

let listM = new Set();

console.log('\n\n\n\n\n\n');
listM.add({ Name: "apple", sell: 200, count: 5 })
    .add({ Name: "orange", sell: 350, count: 7 })
    .add({ Name: "watermelon", sell: 700, count: 2 });

showAllElement(listM);

let help = { Name: "grephrute", sell: 400, count: 1 };
addNewElement(listM, help);
help = { Name: "apple", sell: 150, count: 2 };
addNewElement(listM, help);
console.log('/'.padEnd(32, '/'));
showAllElement(listM);
console.log('/'.padEnd(32, '/'));

deleteElement(listM, "orange");
deleteElement(listM, "milk");

console.log('/'.padEnd(32, '/'));
showAllElement(listM);

//number 2
function addNewStudent(list, student) {
    let number = 10000;
    let text = (String)(student.Name);

    for (let i = 0; i < text.length; i++)
        number += (String)(student.Name[i]).charCodeAt();

    text = '' + student.grup + number;
    list.add({
        Name: student.Name,
        zachet: text,
        grup: student.grup
    });
}

function showAllStudent(list) {
    for (let index of list) {
        console.log("Имя: " + index.Name);
        console.log("Номер зачетки: " + index.zachet);
        console.log("Группа: " + index.grup);
        console.log("\n");
    }
}

function deleteStudent(list, student) {
    for (let index of list)
        if (index.zachet == student) {
            list.delete(index);
            return;
        }

    console.log('Студента с зачеткой ' + student + ' нет');
}

function showOnlyGrup(list, grup, vivOrGiv=0) {
    let result;

    if (vivOrGiv==0) {
        result = [...list].filter(student => student.grup == grup);

        if (result.length == 0) {
            console.log("В группе №" + grup + " нет студентов")
            return;
        }

        console.log("Все студенты группы №" + grup);
        result.forEach(index => {
            console.log("Имя: " + index.Name);
            console.log("Номер зачетки: " + index.zachet);
            console.log("Группа: " + index.grup);
            console.log("\n");
        });
    }
    else {
        result = new Set();

        list.forEach(stud => {
            if (stud.grup == grup)
                result.add(stud);
        });

        return result;
    }
}

function sortStudent(list) {
    let hello = new Set();
    let l = [];
    l = [...list];
    l.sort((a, b) => a.zachet > b.zachet ? 1 : -1);

    for (let i of l) {
        addNewStudent(hello, { Name: i.Name, grup: i.grup })
    }

    return hello;
}

alert("Задание 1");
console.clear();
console.log("\n\n\n\n\n");

let student = new Set();

addNewStudent(student,
    { Name: "Петя Иванов", grup: 4 });
addNewStudent(student,
    { Name: "Игорь Иванович", grup: 7 });
addNewStudent(student,
    { Name: "Николай Петрович", grup: 4 });
addNewStudent(student,
    { Name: "Владислав Владимерович", grup: 5 });

showAllStudent(student);
deleteStudent(student, 724043);

console.log('/'.padEnd(32, '/'));
deleteStudent(student, 724043);
console.log('/'.padEnd(32, '/'));

showAllStudent(student);

console.log('/'.padEnd(32, '/'));
let vivodim = showOnlyGrup(student, 4);
vivodim = showOnlyGrup(student, 7);

addNewStudent(student, {
    Name: "Игорь Иванович", grup: 2
});

console.log('/'.padEnd(32, '/'));
student = sortStudent(student);
showAllStudent(student);

//number 3
function addTovar(list, element) {
    if (list.has(creatID(element.Name)))
        return;

    list.set(creatID(element.Name),
        {
            Name: element.Name,
            sell: element.sell,
            count: element.count
        });
}

function showTowar(list) {
    for (let i of list) {
        console.log("Название: " + i[1].Name);
        console.log("Цена: " + i[1].sell);
        console.log("В наличии: " + i[1].count);
        console.log("\n");
    }
}

function deleteTowatID(list, id) {
    if (!list.has(id))
        return;

    list.delete(id);
}

function deleteTowatName(list, Name) {
    for (let i of list)
        if (i[1].Name == Name) {
            list.delete(creatID(Name));
            return;
        }
}

function recreatSell(list, Name, newSell) {
    for (let i of list)
        if (i[1].Name == Name) {
            i[1].sell = newSell;
            return;
        }

    console.log("Такого продукта нет");
}

function recreatCount(list, Name, newCount) {
    for (let i of list)
        if (i[1].Name == Name) {
            i[1].count = newCount;
            return;
        }

    console.log("Такого продукта нет");
}

function summaDoll(list) {
    let numb = 0;
    let summa = 0;

    for (let i of list) {
        summa += (i[1].sell * i[1].count);
        numb++;
    }

    console.log("Есть " + numb + " видов товаров");
    console.log("Сумма всех продуктов равна " + summa);
}

function creatID(element) {
    let number = 0;

    for (let i = 0; i < element.length; i++)
        number += (element[i]).charCodeAt();

    number = element.length + '' + number;

    return Number(number);
}

alert("Задание 2");
console.clear();
console.log('\n\n\n\n')

let towar = new Map();

addTovar(towar,
    { Name: "Тварог", sell: 2, count: 4 });
addTovar(towar,
    { Name: "Молоко", sell: 10, count: 2 });
addTovar(towar,
    { Name: "Грибы", sell: 40, count: 10 });
addTovar(towar,
    { Name: "Яблочки", sell: 12, count: 10 });
addTovar(towar,
    { Name: "Горох", sell: 2, count: 40 });
addTovar(towar,
    { Name: "Грибы", sell: 60, count: 20 });

showTowar(towar);

summaDoll(towar);

let ipTow = creatID("Горох");
deleteTowatID(towar, ipTow);
deleteTowatName(towar, "Молоко");
recreatSell(towar, "Яблочки", 2);
recreatCount(towar, "Тварог", 51);

console.log(''.padEnd(32, '/'));
showTowar(towar, towar);

summaDoll(towar);

//nubmer4
function raschet(list, param) {
    if (list.has(param))
        return list.get(param);

    let result = 0;

    for (let i of param.Name)
        result += i.charCodeAt();
    result = param.grup + '' + result;

    list.set(param, result);

    return result;
}

alert("Задание 3")
console.clear();
console.log('\n\n\n\n');

const cach = new WeakMap();
let stu1 = { Name: "Jone", grup: 7 };
let stu2 = { Name: "Mila", grup: 3 };
let stu3 = { Name: "Max", grup: 11 };

console.log("ID: " + raschet(cach, stu1));
console.log("ID: " + raschet(cach, stu2));
console.log("ID: " + raschet(cach, stu3));
console.log("ID: " + raschet(cach, stu1));
console.log("ID: " + raschet(cach, stu2));
console.log("ID: " + raschet(cach, stu3));

alert("Задание 4");
console.clear();