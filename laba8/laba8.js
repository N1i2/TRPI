let user1 = {
    name: 'Masha',
    age: 21,
};

let user2 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus',
    }
};

let user3 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false,
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: false, mark: 4 }
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            {
                progrmaming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};

let user7 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
            {
                progrmaming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
        ]
    }
};

let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
};

// NUMB_1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function getCopy(obj) {
    if (typeof obj !== 'object')
        return obj;

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj)
        copy[key] = getCopy(obj[key]);

    return copy;
}

let user1_clone = {...user1};

let user2_clone = getCopy(user2);
let user3_clone = getCopy(user3);


let user4_clone = {...user4};
user4_clone.studies = {...user4.studies};
user4_clone.studies.exams = {...user4.studies.exams};

let user5_clone = {...user5};
user5_clone.studies = {...user5.studies};
user5_clone.studies.department = {...user5.studies.department};
user5_clone.studies.exams = {...user5.studies.exams};
user5_clone.studies.exams[0] = {...user5.studies.exams[0]};
user5_clone.studies.exams[1] = {...user5.studies.exams[1]};

let user6_clone = getCopy(user6);
let user7_clone = getCopy(user7);

let store_clone = getCopy(store);

// NUMB_2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(' NUMBER 2'.padStart(19, '/')+' '.padEnd(11, '/'));

user5_clone.studies.department.group = 12;
user5_clone.studies.exams[1].mark = 10;
alert("Была группа " + user5.studies.department.group + "\nСтала " +  user5_clone.studies.department.group);
console.log(user5);
console.log(user5_clone);

// NUMB_3 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(' NUMBER 3'.padStart(19, '/')+' '.padEnd(11, '/'));

user6_clone.studies.exams[0].professor.name = "Hello World";
alert("Было имя " + user6.studies.exams[0].professor.name + "\nСтала " + user6_clone.studies.exams[0].professor.name);

console.log(user6);
console.log(user6_clone);

// NUMB_4 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(' NUMBER 4'.padStart(19, '/')+' '.padEnd(11, '/'));

user7_clone.studies.exams[1].professor.articles[1].pagesNumber = 3;
alert("Было страниц " + user7.studies.exams[1].professor.articles[1].pagesNumber + "\nСтала " + user7_clone.studies.exams[1].professor.articles[1].pagesNumber);

console.log(user7);
console.log(user7_clone);

// NUMB_5 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(' NUMBER 5'.padStart(19, '/')+' '.padEnd(11, '/'));

for (let post of store_clone.state.profilePage.posts)
    post.message = "hello";
for (let msg of store_clone.state.dialogsPage.messages)
    msg.message = "hello";
console.log(store);
console.log(store_clone);
