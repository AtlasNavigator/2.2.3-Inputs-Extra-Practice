const readLine = require('readline-sync');

// Example 1
let num1 = Number(readLine.question('Enter your first number: ')); 
let num2 = Number(readLine.question('Enter the second number: '));
let newValue = num1 + num2;
console.log(`${num1} + ${num2} = ${newValue}`);

// Example 2
let sub1 = Number(readLine.question('Enter your first number: ')); 
let sub2 = Number(readLine.question('Enter the second number: '));
let difference = sub1 - sub2;
console.log(`${sub1} - ${sub2} = ${difference}`);

// Example 3
let factor1 = Number(readLine.question('Enter your first number: ')); 
let factor2 = Number(readLine.question('Enter the second number: '));
let product = factor1 * factor2;
console.log(`${factor1} * ${factor2} = ${product}`);

// Example 4
let numerator1 = Number(readLine.question('Enter your first number: ')); 
let numerator2 = Number(readLine.question('Enter the second number: '));
let quotient = numerator1 / numerator2;
console.log(`${numerator1} / ${numerator2} = ${quotient}`);

// Example 5
let div1 = Number(readLine.question('Enter your first number: ')); 
let div2 = Number(readLine.question('Enter the second number: '));
let remainder = div1 % div2;
console.log(`${div1} % ${div2} = ${remainder}`);

// Example 6
let first = (readLine.question('What is your first name: ')); 
let last = (readLine.question('What is your last name: '));
console.log(`Salutations, ${last}, ${first}! Hope your day is going well :)`);

// Example 7
let first1 = (readLine.question('What is your first name: ')); 
let last1 = (readLine.question('What is your last name: '));
let title = (readLine.question('What is your title? '));
let suffix = (readLine.question('What is your suffix? '));
console.log(`Salutations, ${first1} ${last1} ${suffix}, ${title}. Hope your day is going well :)`);

// Example 8
let name = (readLine.question('What is your first name: ')); 
let streetNum = (readLine.question('Street Number: '));
let street = (readLine.question('Your street, please: '));
let city = (readLine.question('City: '));
let state = (readLine.question('State: '));
let zip = (readLine.question('Zip Code: '));
console.log(`${name}`); console.log(`${streetNum} ${street}`); console.log(`${city}, ${state}`); console.log(`${zip}`);
