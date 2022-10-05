//1. ?

// function sum (...numbers)

// // let numberSum = 0
// for(let i of numbers) {
//     if (i > 0 ) {
//         return (numberSum += i);
//     }
// }
// sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)

//2.

// function sum(...numbers) {
//   let numberSum = 0;
//   for (let item of numbers) {
//     numberSum += item;
//   }
//   console.log(numberSum);
// }
// sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

//3. ?

// let user = {
//   firstname: "giorgi",
//   lastname: "saakadze",
//   age: 32,
//   isloggedin: true,
// };

// function fullname() {
//   if (user.isloggedin == true) {
//     return user.firstname + " " + user.lastname;
//   } else if (user.isloggedin == false) {
//     return "false";
//   } else {
//     return "error";
//   }
// }
// console.log(fullname());

//4.

// function maxNumber(...numbers) {
//   let maxValue = 0;
//   for (let item of numbers) {
//     if (item > maxValue) {
//       maxValue = item;
//     }
//   }
//   return maxValue;
// }
// console.log(maxNumber(5, 10, 15, 20));

//5.

// let array = [1, 2, 4, 10, 34, 5, 7, 87];

// for (let i of array) {
//   if (i > 0 && i < 10) {
//     console.log(i);
//   }
// }

//6.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i of numbers)
//   while (i < 5) {
//     console.log(i);
//     i++;
//   }
