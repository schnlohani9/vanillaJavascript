"use strict";

// // *******************************Reverse String*******************************

// (function reverseString(str){
//     let i=0;
//     let strlength = str.split(" ")
//     while(i<strlength){
//     let reversedString = '';
//     let newString = str[i];
//     for(let character of newString){
//         reversedString = character + reversedString;
//     }
//     }
//     i++;
//     console.log(reversedString)
// })("My Name is Abcd")

// *******************************Optimise the array*******************************
// var obj = {
//     a : {
//         b : {
//             c : 1,
//             d : [1,2]
//         }
//     },
//     f: [1,2],
    
// }

// obj.a.b.c // a_b_c :1
// obj.a.b.d[0] //a_b_d_0:1
// obj.a.b.d[1] //a_b_d_0:2
// obj.f[0] //f_0:1
// obj.f[0] //f_0:1

// function optimizeArray(obj)
// {
//     Object.is()
// }
// console.log(optimizeArray(obj))


// *******************************Output based questions*************************************************************
// Question1: How to differentiate between array and object
var arr = ['a', 'b', 'c'];
console.log(Array.isArray("dfdf")) // ?

var obj1 = {a:1}
typeof obj1 // ?

// *************************************************************************************************
// Question2: Output of question
for (var i = 0; i < 3; i++) {
  setTimeout(function(i_local) { return function() { console.log(i_local); }}(i), 1000 + i);
}

// i ?
// undefined after 1000
// undefined after 1001
// undefined after 1002

// *************************************************************************************************
// Question3: Are object equals
var foo = {a:1,b:2}
var bar = {a:1,b:2}

console.log(foo == bar); // ? false
console.log(foo === bar); // ? false

// *************************************************************************************************
// Question4: Output of question
var a = 1;
function b() {
    a = 10;
    return;
    // function a() {}
}

b();
console.log(a); // 1 in both cases


// *************************************************************************************************
// Question5: Output of question
function foo () {
    const arr = [];
    arr.push({a:1});
    return {
        getArr: () => {
            return [this.arr];
        },
        updateArr: function (value) {
            return arr.push(value);
        }
    }
}

foo().getArr() // []
foo().updateArr({ b: 2 }); // [{a:1},{ b: 2 }]
var out = foo().getArr;
out(); // undefined

// *************************************************************************************************
// Question6: Output of question
let counter = function () {
  let k = 0;
  return () => k++;
}();

console.log(counter);

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3