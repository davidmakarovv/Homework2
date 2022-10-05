// let user = {
//   name: "giorgi",
//   age: 25,
// };

// for (let i in user) {
//   //   console.log(i); //name; age

//   console.log(user[i]); //giorgi; 25
// }

// Object.keys;

// for (let i of Object.keys(user)) {
//   console.log(i);
// }
// Object.values;

// for (let i of Object.values(user)) {
//   console.log(i);
// }
// Object.entries;

// for (let [key, value] of Object.keys(user)) {
//   console.log(key, value);
// }

//conversion table

// let num1 = 25;
// let num2 = 35;

// let num1Text = "25";

// //equal

// console.log(num1 == num2); //false
// console.log(num1 == num1Text); //true

// //strict equal

// console.log(num1 === num1Text); //false

// console.log(num1 != num2); //true

// functions

// function declaration

// function textFunction() {
//     console.log("hello");
// }
// testFunction

//function expression

// let messageFunction = function() {
//     console.log("hello2");
// }
// messageFunction()

//arrow function

// let messageFunction2 = () => console.log("hello");
// messageFunction2();

// function testFunction(number) {
//   if (number == 3) {
//     return "hello3";
//   } else if (number == 5) {
//     return "hello5";
//   } else {
//     return "error";
//   }
// }
// console.log(testFunction(3));

function sum(...numbers) {
  let numberSum = 0;
  for (let item of numbers) {
    numberSum += item;
  }
  console.log(numberSum);
}
sum(18, 20, 30, 7, 18);
