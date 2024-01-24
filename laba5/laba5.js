function makeCounte() {
    let currentCounte = 1;

    return function () {
        return currentCounte++;
    }
}

let counte = makeCounte();

alert(counte());
alert(counte());
alert(counte());

let counte2 = makeCounte();

alert(counte2());
alert(counte2());

let currentCount = 1;

function makeCounte2() {
    return function () {
        return currentCount++;
    }
}

let counte3 = makeCounte2();
let counte4 = makeCounte2();

alert(counte3());
alert(counte3());

alert(counte4());
alert(counte4());

function PlosPromb(long) {
    return (hight) => {
        return long * hight;
    }
}

let first = PlosPromb(4);
alert(first(5));
alert(first(6));
alert(first(4));

// function Place() {
//     return function GoPlace(value) {
//         switch (value) {
//             case 't':
//                 y += 10;
//                 break;
//             case 'd':
//                 y -= 10;
//                 break;
//             case 'r':
//                 x += 10;
//                 break;
//             case 'l':
//                 x -= 10;
//                 break;
//             default:
//                 alert('Такого выдора нет');
//         }
//     }
// }



function* PlaceGener() {
    let x = +prompt('Введите коодринату X:');
    let y = +prompt('Введите коодринату Y:');

    // let x=0;
    // let y=0;
    while (true) {
        alert('Вы добрались до x=' + x + ', y=' + y);
        const dip = yield;

        switch (dip) {
            case 't':
                x += 10;
                break;
            case 'd':
                x -= 10;
                break;
            case 'r':
                y += 10;
                break;
            case 'l':
                y -= 10;
                break;
            default:
                alert('Такого выдора нет');
        }
    }
}

let generator = PlaceGener();
generator.next();

let hod;

while (true) {
    hod = prompt('\nВведите направление(t-top, d-down, l-left, r-right, e-end)');

    if (hod == 'e')
        break;

    generator.next(hod);
}

// let myPlace = Place();

// while (true) {
//     let hod = prompt('Сейчас вы на x=' + x + ', y=' + y + '\nВведите направление(t-top, d-down, l-left, r-right, e-end)');
//     if (hod == 'e')
//         break;
//     myPlace(hod);
// }

//alert('Вы добрались до x=' + x + ', y=' + y);

for (var prop in window) 
    if (window.hasOwnProperty(prop)) 
        console.log(prop + ' - ' + typeof (window[prop]))

var hello = "hello world"
console.log(hello);
window.hello =" Привет мир"
console.log(hello);
