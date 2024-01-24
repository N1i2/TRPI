// Number 1 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log('\n'.padEnd(10, '\n'));

const types = ["Ботинки", "Красовки", "Сандали"];
const jtype = ["Кожанная", "Зимняя", "Витровка"];
const colors = ["red", "green", "blue", "pink"];

let produkt = {
    boots: {
        boot: [],
        sniker: [],
        sundal: [],
        allProd: [],
    },
    jacket: {
        skin: [],
        winter: [],
        lite: [],
        allProd: [],
    },

    AddProdukt(type, id, size, color, price) {
        Name = types[type - 1];
        color = colors[color - 1];
        let element = {
            Name,
            id,
            size,
            color,
            price,
        }

        if (type == 1)
            this.boots.boot.push(element);
        else if (type == 2)
            this.boots.sniker.push(element);
        else
            this.boots.sundal.push(element);

        this.boots.allProd.push(element);
    },

    AddProduktJeckt(type, id, size, color, price) {
        Name = jtype[type - 1];
        color = colors[color - 1];

        let element = {
            Name,
            id,
            size,
            color,
            price,
        }

        if (type == 1)
            this.jacket.skin.push(element);
        else if (type == 2)
            this.jacket.winter.push(element);
        else
            this.jacket.lite.push(element);

        this.jacket.allProd.push(element);
    },

    showInfo() {
        console.log("Обувь");
        for (let i = 0; i < types.length; i++) {
            console.log("\n\nРаздел " + types[i])

            for (let j of this.boots.allProd) {
                if (j.Name == types[i]) {
                    console.log('\nID = ' + j.id +
                        '\nРазмером ' + j.size +
                        '\nЦвета: ' + j.color +
                        '\nСтоимостью ' + j.price + '$\n'.padEnd(50, '='));
                }
            }
        }
        console.log("Куртки");
        for (let i = 0; i < jtype.length; i++) {
            console.log("\n\nРаздел " + jtype[i]);

            for (let j of this.jacket.allProd) {
                if (j.Name == jtype[i]) {
                    console.log('\nID = ' + j.id +
                        '\nРазмером ' + j.size +
                        '\nЦвета: ' + j.color +
                        '\nСтоимостью ' + j.price + '$\n'.padEnd(50, '='));
                }
            }
        }
    },

    GetFilterInfo(filt, loc) {
        let help = this.boots.allProd;

        switch (loc) {
            case 'p':
                help = help.filter((prod) => prod.price <= filt)
                break;
            case 's':
                help = help.filter((prod) => prod.size <= filt)
                break;
            case 'c':
                help = help.filter((prod) => prod.color == filt)
                break;
        }

        let result = [];

        for (let i of help)
            result.push(i.id);

        return result;
    },
}

produkt.AddProdukt(1, 1, 45, 1, 70);
produkt.AddProdukt(2, 2, 15, 4, 111);
produkt.AddProdukt(3, 3, 120, 3, 75);
produkt.AddProdukt(2, 4, 57, 2, 120);
produkt.AddProdukt(1, 5, 44, 2, 55);

produkt.AddProduktJeckt(1, 6, 50, 2, 100);
produkt.AddProduktJeckt(2, 7, 150, 3, 30);
produkt.AddProduktJeckt(3, 8, 50, 4, 70);

produkt.showInfo();

// Number 2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let char = ['p', 's', 'c'];
let filt;
let help;

for (let i = 0; i < char.length; i++) {
    help = [];
    if (i == 0) {
        filt = +prompt("Введите фильтр цены(цифра)");
        console.log("По цене == " + filt);
    }
    else if (i == 1) {
        filt = +prompt("Введите фильтр размера(цифра)");
        console.log("По размеру == " + filt);
    }
    else {
        filt = prompt("Введите фильтр цвет(на англ.)");
        console.log("По цвету == " + filt);
    }

    help = produkt.GetFilterInfo(filt, char[i]);

    if (help.length == 0)
        console.log('Таких нет');
    else
        for (let i of help)
            console.log('id = ' + i);
}

alert('\nНажмите энтер что бы отчистить консоль\n');
console.clear();

// Number 3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let newProdukt = {
    boots: {
        boot: [],
        sniker: [],
        sundal: [],
        allProd: [],
        helpPrice: [],
    },

    AddProdukt(type, id, size, color, price, dis) {
        Name = types[type - 1];
        color = colors[color - 1];

        this.boots.helpPrice[0] = price;
        this.GetPrice = dis;
        let endPrice = this.boots.helpPrice[0];

        let element = {
            Name,
            id,
            size,
            color,
            price,
            dis,
            endPrice,
        }

        if (type == 1)
            this.boots.boot.push(element);
        else if (type == 2)
            this.boots.sniker.push(element);
        else
            this.boots.sundal.push(element);

        this.boots.allProd.push(element);
    },

    set GetPrice(dis) {
        this.boots.helpPrice[0] = (this.boots.helpPrice[0] - this.boots.helpPrice[0] * (dis / 100)).toFixed(2);
    },
    get GetPrice() {
        return this.boots.helpPrice[0].endPrice;
    },

    showInfo() {
        for (let i = 0; i < 3; i++) {
            console.log("\n\nРаздел " + types[i])

            for (let j of this.boots.allProd) {
                if (j.Name == types[i]) {
                    console.log('\nID = ' + j.id +
                        '\nРазмером ' + j.size +
                        '\nЦвета: ' + j.color +
                        '\nСтоимостью ' + j.price +
                        '\nКонечная цена с учетом скидки ' + j.dis + '% состовляет ' + j.endPrice +
                        '$\n'.padEnd(50, '='));
                }
            }
        }
    },
}

newProdukt.AddProdukt(1, 1, 45, 1, 70, 15);
newProdukt.AddProdukt(2, 2, 15, 4, 111, 11);
newProdukt.AddProdukt(3, 3, 120, 3, 75, 30);
newProdukt.AddProdukt(2, 4, 57, 2, 200, 20);
newProdukt.AddProdukt(1, 5, 44, 2, 55, 60);

newProdukt.showInfo();

// Number 4 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Object.defineProperty(newProdukt.boots.allProd[2], 'price', {
    writable: true,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(newProdukt.boots.allProd[2], 'id', {
    writable: false,
    enumerable: true,
    configurable: false,
});


console.log(newProdukt.boots.allProd[2].price)
newProdukt.boots.allProd[2].price = 50;
console.log(newProdukt.boots.allProd[2].price)

console.log(newProdukt.boots.allProd[2].id);
newProdukt.boots.allProd[2].id = 7;
console.log(newProdukt.boots.allProd[2].id);

// Number 5-6 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let allProdukt = {
    boots: {
        boot: [],
        sniker: [],
        sundal: [],
        allProd: [],
        helpPrice: [],
    },

    showInfo() {
        for (let i = 0; i < 3; i++) {
            console.log("\n\nРаздел " + types[i])

            for (let j of this.boots.allProd) {
                if (j.Name == types[i]) {
                    console.log('\nID = ' + j.id +
                        '\nРазмером ' + j.size +
                        '\nЦвета: ' + j.color +
                        '\nСтоимостью ' + j.price +
                        '$\n'.padEnd(50, '='));
                }
            }
        }
    },
};

function AddNewBoot(id, size, color, price) {
    let newElem = { Name, color, size, price, id };

    newElem.Name = types[0];
    newElem.color = colors[color - 1];
    newElem.id = id;
    newElem.price = price;
    newElem.size = size;

    allProdukt.boots.allProd.push(newElem);
    allProdukt.boots.boot.push(newElem);
};

function AddNewSniker(id, size, color, price) {
    let newElem = { Name, color, size, price, id };

    newElem.Name = types[1];
    newElem.color = colors[color - 1];
    newElem.id = id;
    newElem.price = price;
    newElem.size = size;

    allProdukt.boots.allProd.push(newElem);
    allProdukt.boots.sniker.push(newElem);
};

function AddNewSundal(id, size, color, price) {
    let newElem = { Name, color, size, price, id };

    newElem.Name = types[2];
    newElem.color = colors[color - 1];
    newElem.id = id;
    newElem.price = price;
    newElem.size = size;

    allProdukt.boots.allProd.push(newElem);
    allProdukt.boots.sundal.push(newElem);
};

let rpog1 = new AddNewBoot(1, 25, 3, 45);
let rpog2 = new AddNewSniker(2, 35, 2, 55);
let rpog3 = new AddNewSundal(3, 45, 1, 65);

allProdukt.showInfo();