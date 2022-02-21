// let const
let x = 6;
x = 7;
console.log(x);

//string, number, boolean, null, underfined

let empty;

console.log(typeof undefined);
console.log(typeof null);

let num = 10;

console.log(num % 3);

//операторы сравнения > < >= <= == === != !==



/*function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;
  console.log(isMatch);
  // Change code above this line
  return isMatch;
}
isValidPassword('mangodab3st');
isValidPassword('kiwirul3z');
isValidPassword('jqueryismyjam');
*/
// область видимости:


  // if//else
/*const numberPrompt = prompt("Введите число")
  
if (numberPrompt && Number(numberPrompt)) {
  if (numberPrompt > 0) {
    console.log("Это положительное число");
  } else if (numberPrompt < 0) {
    console.log("Это отрицательное число");
  } else {-8
    console.log("Это ноль");
  }
} else {
  console.log("Не верный формат данных");
}*/

// case

/*const daysUntilDeadline = 90;

switch (daysUntilDeadline) {
  case 0:
    console.log();
    break;
  case 1: 
    console.log();
    break;
  case 2:
    console.log();
    break;
  default:
    console.log();
    
}*/

// for

// ver 1
const max = 100;
const min = 20;

for (let i = min; i <= max; i++) {
  if (i % 5 === 0) {
   // console.log(i);
  }
}

// ver 2 (bad idia) не очень могут быть ошибки

for (let i = min; i <= max; i+=5) {
 //console.log(i);
}

// ver 3
for (let i = min; i <= max; i++) {
  if (i % 4 !== 0) continue;
 //console.log(i);
}

