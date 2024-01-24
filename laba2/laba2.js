let basikOpirashen = function (simvle, fiest, second) {
    switch (simvle) {
        case '+':
            return fiest + second;

        case '-':
            return fiest - second;

        case '*':
            return fiest * second;

        case '/':
            return fiest / second;

        default:
            Console.log('Тупая ошибка');
            break;
    }
}

function vivodKubs(nubm, step) {
    if (nubm == 0) {
        console.log("Конец");
        return;
    }
    console.log(nubm + ') ' + nubm ** step);

    vivodKubs(--nubm, step);
}

var sumAll = function (Arr) {
    let result = 0;
    for (let i = 0; i < Arr.length; i++)
        result += Arr[i];
    return result/Arr.length;
}

function replaseE(text) {
    let reText = " ";

    for (let i = (text.length - 1); i >= 0; i--) {
        if ((text[i] > 'a' && text[i] < 'z') || (text[i] > 'A' && text[i] < 'Z') || text[i] == ' ')
            reText += text[i];
    }

    return reText;
}

let repitText = (text, numb) => {
    if (numb <= 0)
        return;
    console.log(text);
    repitText(text, --numb)
}

function vivoidText(first, second) {
    let result = [];
    for (let i = 0, index = 0; i < first.length; i++) {
        let bool = true;
        for (let j = 0; j < second.length; j++)
            if (first[i] == second[j])
                bool = false;

        if (bool) {
            result[index] = first[i];
            index++;
        }
    }

    return result;
}

let sim;
let help;
let fNumb;
let sNumb;
let use = false;
//1 задание
help = prompt("Введите операцию(+, -, *, /):");
sim = String(help);

if (help == '+' || help == '-' || help == '*' || help == '/') {
    help = prompt("Введите первое число:");
    fNumb = Number(help);
    help = prompt("Введите второе число:");
    sNumb = Number(help);

    let boolenF = Number.isInteger(fNumb);
    let boolenS = Number.isInteger(sNumb);

    if (!boolenF || !boolenS)
        alert('введенный символ не являеться числом');
    else
        use = true;
}
else
    alert('Сивол введен не верно');

if (use) {
    alert(basikOpirashen(sim, fNumb, sNumb));
}

//2 задание

help = prompt('Введите число жилательно меньше 5)');
let kubs = Number(help);
sim = Number.isInteger(kubs);

if (!sim || kubs <= 0)
    alert('Произошла ошибка');
else
    vivodKubs(kubs, 3);

//3 задание
var elseNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumAll(elseNumb));

//4 заданиe
let text = 'Hel1o W0rld';

console.log(text);
console.log('\n' + replaseE(text));

//5 задание
help = prompt("Введите коичество повторений");
numb = Number(help);
text = "Повторить " + numb + " раз";
if(!Number.isNaN(numb))
repitText(text, numb);

//6 задание
let first = ["Hello", "how", "world", "are", "you", "!!!"];
let second = ["how", "are", "you"];

let res = vivoidText(first, second);

for (let i = 0; i < res.length; i++)
    console.log(res[i]);