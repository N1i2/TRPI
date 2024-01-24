console.log('\n\n\n\n\n\n');

//number 1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let hello = ["Привет", "Пока", "И как", "Дела"];

let [Y] = hello;

alert(Y);

//number 2 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let user = { Name: "Колян", Age: 19 };

let admin = { ...user, admin_nik: "N1i2" };

alert("Человек по имени " + admin.Name +
    " это админ с ником " + admin.admin_nik +
    " и ему " + admin.Age + " лет");

//number 3 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likeCount: 12 },
                { id: 2, message: 'By', likeCount: 1 },
            ],
            newPostText: 'Adout me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            message: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [],
    },
}

let { state:
    { profilePage: { posts },
        dialogsPage: { dialogs, message: Mess },
        sidebar } } = store;

console.log('Все likeCount');

for (let i of posts)
    console.log(i.likeCount);

let evenId = dialogs.filter(s => s.id % 2 == 0 && s.name == 'Andrey');

console.log('\nВсе с чеьными Id');

for (let i of evenId)
    console.log('Имя: ' + i.name + ', Id: ' + i.id);

Mess = Mess.map((Mess) => { return { ...Mess, message: 'Hello user' } });


console.log('\nВсе message');

for (let i of Mess)
    console.log('id: ' + i.id + ', message: ' + i.message);

//number 4 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let tasks = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS      ', isDone: true },
    { id: 3, title: 'ReactJS ', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL ', isDone: false },
];

let tesk={id:6, title: 'Hello   ', isDone:true};

tasks=[...tasks, tesk];

console.log('\nЗадание номер 4');

for (let i of tasks)
    console.log('id: ' + i.id + ', \ttitle: ' + i.title + ',\tisDone: ' + i.isDone);

//number 5 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let number = [1, 2, 3];
let number1 = [1, 2];
let number2 = [1, 16, 3, 2];

alert(sumValue(...number));
alert(sumValue(...number1));
alert(sumValue(...number2));

function sumValue(x = 0, y = 0, z = 0) {
    return x + y + z;
}