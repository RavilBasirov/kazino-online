a = Math.floor((Math.random() * 7 + 1));
b = Math.floor((Math.random() * 7 + 1));
c = Math.floor((Math.random() * 7 + 1));
let balance = 5000
let stavka = 1000

// let result = [];
// result[0] = 'visnya.jpg'
// result[1] = 'podkova.jpg'
// result[2] = 'money.jpg'
// result[3] = 'gold.jpg'
// result[4] = 'fruit.jpg'
// resolt[5] = 'dollar.jpg'
// result[6] = 'seven.jpg'

if (a = b, a = c, c = b) {
    balance = balance + stavka
};
if (a = b = c) {
    balance = balance + stavka + stavka
};

if (a != b, a != c, c != b) {
    balance = balance - stavka
};

console.log(a + " " + b + " " + c);

console.log('Вы выйграли!, ваш баланс -', balance);