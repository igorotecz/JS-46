const firstName = 'Chelsy';
const lastName = 'Emerand';
const someThing = 10;
const fullName = firstName + ' ' + lastName;

//console.log(fullName);
const result = `everybody ${someThing} hi, ${lastName}`;
//console.log(result);

if ('condition') {
    console.log('hi');   
}

const x = 5;
let message = "";

switch (x) {
    case 5:
        message = "Yes";
        break;

    default:
     message = "No";
     break;
 }
//console.log(message);

const min = 0;
const max = 20;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
   // console.log('чётное', i);
    total += i;
    
}
//console.log('total ', total);