//const genres = ["Jazz", "Blues"];
//genres.push("Rock-and-roll");

//console.log(genres.shift());
//console.log(genres[0]);
//console.log(genres);
//console.log(genres[genres.length - 1]);
//const firstElem = genres.shift();
////console.log(firstElem);
//genres.unshift("Country", "Reggy");
//console.log(genres);



//Скрипт для перебора массива
//const fruits = ["apple", "graps", "peach", "banana", "lemon"];

//for (let i = 0; i < fruits.length; i++) {
//    console.log(`${i}:${fruits[i]}`);
//
//}

//Скрипт выводит все слова кроме первого и последнего

//const string = "Welcome to the future";

//const strArr = string.split(" ");

//const x = strArr.slice(1, -1);

//console.log(x);

//let newArr = [];

//for (let i = 0; i < strArr.length; i++) {
//    if (i === 0 || i === strArr.length - 1) {
//        continue;
//    }
//    newArr.push(strArr[i]);
//}
//console.log(newArr.join(" "));

//Поиск минимального числа

//const numbers = [2, 17, 94, 4, 23, 3, -190];

//let min = numbers[0];

//for (let i = 0; i < numbers.length; i++) {
//    if (min > numbers[i]) {
//        min = numbers[i];
//    }
//}


//for (const number of numbers) {
 //   if (min > number) min = number;

//console.log(min);


//function splitMessage(message, delimeter) {
//  let words;
  
//  words = message.split(delimeter);
  
//  return words;
//}
//console.log(splitMessage("Mango hurries to the train", " "));
//console.log(splitMessage("Mango", ""));
//console.log(splitMessage("best_for_week", "_"));

//function calculateEngravingPrice(message, pricePerWord) {
//    let words;
//    words = message.split(" ");
            
//    let totalPrice = (words.length) * pricePerWord;
//    return totalPrice;
//
//}
//console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

//Занятие 3 с Репетой

//const friends = ["Mango", "Kiwi", "Poly", "Alex"];

//console.table(friends);

//friends[1] = "QWERTY";
//friends[2] = 123456;

//const lastIndex = friends.length - 1;
//console.log(lastIndex);

//console.table(friends);

//let a = 10;
//let b = a;

//console.log(a);
//console.log(b);

//a = 20;

//console.log(a);
//console.log(b);

//Перебор массива

//const friends = ["Mango", "Kiwi", "Poly", "Alex"];
//console.table(friends);
//const lastIndex = friends.length - 1;

//for (let i = 0; i < friends.length; i += 1)  {
 //   friends[i] += '-1';
   
    
//}
//for (const friend of friends) {
//    console.log(friend);
//}
 //console.table(friends);

 //Подсчитать общую сумму

//const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
    
//     total = total + cart[i];
//     //total += cart[i];
// }

//for(const value of cart) {
//    total += value;
//}
//console.log('Total: ', total);

// const logins = ['m4ngoDoge', 'kIwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('login ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
  
// if (login === loginToFind) {
//     console.log('Ура равны!!!');
//     message = `Welcome ${loginToFind}`;
//     break;
// }
// message = `Login ${loginToFind} wron`;
// }
// //вариан 2
// for (const login of logins) {
//      console.log('login ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//     console.log('Ура равны!!!');
//     message = `Welcome ${loginToFind}`;
    
//     }
//     message = `Login ${loginToFind} wron`;
// }
// console.log(message);

// //вариант 3 true or false
// console.log(logins.includes(loginToFind));

// //вариант 4
// const sms = logins.includes(loginToFind) ? "yes" : "no";

// console.log(sms);

// const password = "REWQdsa"
// let userPassword = prompt("Введите пароль");
// console.log(userPassword);
// switch (userPassword) {
//     case password:
//         alert("Welcome!")
//         break;

//     default:
//         alert("Try again!")
//         break;
// }

//Сравнение и определение меньшего элемента
// const numbers = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//    if (number < smallestNumber) {
//     smallestNumber = number;
// }}

// console.log(smallestNumber);

// изменение массива

// const friends = ["Mango", "Kiwi", "Poly", "Alex"];
// let string = " ";

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);
//вариант 2
const friends = ["Mango", "Kiwi", "Poly", "Alex"];

const string = friends.join(', ');
console.log(friends);
console.log(string);

