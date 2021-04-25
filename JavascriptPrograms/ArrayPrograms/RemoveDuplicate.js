// Remove duplicates from array in Javascript

// Ref: https://www.youtube.com/watch?v=dvPybpgk5Y4

let a = [1,2,5,2,1,8]

// Optimise solutions Using set
// console.log(new Set(a))

// If we don't have to use Set then
let obj = {}

// Much better then for each and regular for loop
for(let i of a){
    obj[i]=true
}

// this is the way to print keys only in object in javascript
let b = Object.keys(obj)
console.log(b)
