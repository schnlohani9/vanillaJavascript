// // For the below questions it output 5 times 5, make the following loop correct so that it executes 0 to 5 values
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 100)
// }

// // Solution using ES6
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 100)
// }

// Solution using ES5
for (var i = 0; i < 5; i++) {
    (function (x){
        setTimeout(() => console.log(x), 100)
    })(i)
}