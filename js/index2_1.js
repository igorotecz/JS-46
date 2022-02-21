//Создайте переменную str и присвойте ей значение 'abcde'.
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b',
 //   символ 'e'.

//const str = 'abcde';
//const array = ['a', 'b', 'c'];
//const indexes = [];
//console.log(str[0]);
//console.log(str[1]);
//console.log(str[4]);
//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

//function stringToarray(str) {
//    return str.split(' ');
//}
//const str = 'Каждый охотник желает знать';

//var arr = stringToarray(str);

//console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']


//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента
// и вставляет тире(-) между словами.При этом все символы строки необходимо перевести в
// верхний регистр.

//var str = "HTML JavaScript PHP";
//
//function insert_dash(str) {
//    str = str.toUpperCase();
//    console.log(str);
//
//    const words = str.split(" ");
//    console.log(words);
//
//    return words.join("-");
//}
//
//console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.

//var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

//console.log(vegetables.join(", "));

////let str = "";
//for (let i = 0; i < vegetables.length; i += 1) {
//    if (i < vegetables.length - 1){
//    str += vegetables[i] + ", ";
//    } else {
//        str += vegetables[i];
//    }
//}
//
//console.log(str);
//document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
//document.writeln(str2); // "Капуста, Репа, Редиска, Морковка"

//Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

//var str = "string not starting with capital";
 
//function cursive_letter(str) {
//    console.log(str[0].toUpperCase());
//    console.log(str.slice(1, str.length));
//   return str[0].toUpperCase() + str.slice(1, str.length);//
//
// Ваш код

//}

//console.log(cursive_letter(str));


//const password = "REWQdsa"
//let userPassword = prompt("Введите пароль");
//console.log(userPassword);
//switch (userPassword) {
//    case password:
//        alert("Welcome!")
//        break;
//
//    default:
//        alert("Try again!")
//        break;
//}
