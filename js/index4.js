//const day = "Hello";
//console.log(day);

//ФУНКЦИЯ

// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     //const result = x + y;
//     // console.log('x + y =', result);
//     console.log("Выполняется функция add");
//     return x + y;
// }
// const r1 = add(5, 6);
// console.log('r1 =', r1);
// const r2 = add(10, 8);
// console.log('r2 =', r2);
// const r3 = add(45, 6);
// console.log('r3 =', r3);

// return прекращает выполнение функции
// const fn = function () {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     return;
// }
// console.log('Результат функции:', fn());


//stack вызовов
// const fnA = function () {
//     console.log('Выполняется функция A');
// };
// const fnB = function () {
//     console.log('Выполняется функция B');
// };
// const fnC = function () {
//     console.log('Выполняется функция C');
// };

// console.log("Лог перед вызовом функции А");
// fnA();
// console.log("Лог после вызовом функции А");
// console.log("Лог перед вызовом функции B");
// fnB();
// console.log("Лог после вызовом функции B");
// console.log("Лог перед вызовом функции C");
// fnC();
// console.log("Лог после вызовом функции C");

//ПРАКТИКА
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log('Total: ', total);

// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции:', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }
// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`Общая стоимость покупки ${r1}`); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

//ПЕРЕБОР И ЛОГИРОВАНИЯ МАССИВА

// const logitems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logitems(["Mango", "Kiwi", "Poly", "Alex"]);
// logitems([1, 2, 3, 4, 5]);
// logitems(['клавиатура', 'наушники', 'часы']);

//ПАРОЛИ

//const logins = ['m4ngoDoge', 'kIwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = function (allLogins, loginToFind) {
//         for (const login of allLogins) {
//         if (login === loginToFind) {
//            return `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// };

// const loginToFind = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// }

// const r1 = loginToFind(logins, 'm4ngoDoge');
// console.log(`${r1}`);

// console.log(loginToFind(logins, 'kIwidab3st'));
// console.log(loginToFind(logins, 'poly1scute'));
// console.log(loginToFind(logins, 'aj4xth3m4n'));


// function slugify(title) {
  
//  const message = title.toLowerCase();
//     console.log(message);
//     // const slug = message.split(" ");
//     // console.log(slug);
//     const slugs = title.toLowerCase().split(" ").join("-");
//     console.log(slugs);
//     const slug = `"${slugs}"`;
//     console.log(slug);
// }
// slugify("Arrays for begginers");
// slugify("Ten secrets of JavaScript");


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const allArray = firstArray.concat(secondArray);
//     console.log(allArray);
//     const result = allArray.slice(0, maxLength);
//     console.log(result);

//     // Change code above this line
//   }
//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)


// function calculateTotal(number) {
//      let total = 0;
// for (let i = 0; i <= number; i += 1) {
//     total += i;
//     console.log(total);
// }
//     return total;
// console.log("Что-то не то:", total);
// }
// calculateTotal(18);

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1)  {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//      for (let i = 0; i <= order.length; i += 1) {
//     total += order[i];
//         console.log(total);
//     }
//     return total;
//  }
// calculateTotalPrice([12, 85, 37, 4]);

// задача 21
// function findLongestWord(string) {
//     let longestWord = " ";
//     const stringSplit = string.split(" ");
//     console.log(stringSplit);
// for (let i = 0; i < stringSplit.length; i += 1) {
//     if (stringSplit[i].length > longestWord.length) {
//         longestWord = stringSplit[i];
//         console.log(stringSplit[i].length);
//         console.log(longestWord.length);
//       }
//     }
//     return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("May the force be with you");

// задача 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//      for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     console.log(numbers);
//     return numbers;
// }
// createArrayOfNumbers(14, 17);

//задача 23
// function filterArray(numbers, value) {
//   let newArray = [];

//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//       console.log(numbers[i]);
//     }
//     }
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

//задача 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit));
//  return
// }

// checkFruit("mandarin");
// checkFruit("apple");
// checkFruit("apple1");

//задача 25
// function getCommonElements(array1, array2) {
//   let allArrays = [];

// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//   allArrays.push(array1[i])
//   }
//   console.log(allArrays);
// }

// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// 26
// function calculateTotalPrice(order) {
//   const total = 0;
  
//   for (const ord of order) {
//      console.log(total += ord);
//    }
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);

// 27
// function filterArray(numbers, value) {
  
//   const filteredNumbers = [];
// for (const number of numbers) {
//   if (number > value) {
//       filteredNumbers.push(number);
//     }
// }
//   console.log(filteredNumbers);
//   return filteredNumbers;
  
// }
// filterArray([1, 2, 3, 4, 5], 4);

// 28

// function getEvenNumbers(start, end) {
//   const evenNumber = [];
// for (let i = start; i <= end; i += 1) {
// if (i % 2 === 0) {
//   evenNumber.push(i);
//   }
//   console.log(start);
//   console.log(end);
//   console.log(evenNumber);
//  }
//    return evenNumber;
// }
// getEvenNumbers(6, 12);
// getEvenNumbers(3, 11);

// 30
// const start = 6;
// const end = 37;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//31
// function findNumber(start, end, divisor) {
//     let number = 0;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//        return number = i;
//     }
//   }
//   return number;
//   }
// console.log(start);
// console.log(end);
// findNumber(2, 6, 5);
// findNumber(16, 35, 7);
// console.log(number);

//32
// function includes(array, value) {
//  let newArray = false;
// for ( const include of array) {
//   if (include !== value) {
//     newArray;
//   }
// }
// return true;
// }

//занятие 4:
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));



