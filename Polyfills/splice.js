// 1. The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

// 2. The splice() method changes the original array and slice() method doesn’t change the original array.

// 3. The splice() method can take n number of arguments and slice() method takes 2 arguments.

// ******************************************
// Array.splice()
// ******************************************
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]


// ******************************************
// Array.slice()
// ******************************************
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]