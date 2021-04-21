readFile("./files/demofile.txt", "utf-8")
    .then(data => {
        zlibPromise(data).then(
            res => console.log(res),
            err => console.log(error)
        )
    }, err => { err => console.log("Failed", err) }) // --> Load it then zip it and then print it to screen

// Optimize function as Promise itself returns a Promise
readFile("./files/demofile.txt", "utf-8")
    .then(data => { zlibPromise(data) }, err => console.log("Failed to read", err)).then(
        res => console.log(res),
        err => console.log(error)
    )

// Optimize it using the catch block as it catch the errors in promise chaining
readFile("./files/demofile.txt", "utf-8")
    .then(data => { zlibPromise(data) }).then(
        res => console.log(res)
    ).catch(err => console.log("Failed to read", err));

// Promise finally
readFile("./files/demofile.txt", "utf-8")
    .then(data => { zlibPromise(data) }).then(
        res => console.log(res)
    ).catch(err => console.log("Failed to read", err).finally(_ => console.log("Finally Called")));


// Promise All
// it will wait for all promise(series of promise that we pass) to get resolve and then will call its then handler
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

let promises = files.map(name => readFile(name, "utf8"));
Promise.all(promises)
  .then(values => {
    // <-- Uses .all
    console.log(values);
  })
  .catch(err => console.error("Error: ", err));

// Promise.race
// Resolves or rejects when the first promise in the array resolved or rejects
let car1 = new Promise(resolve => setTimeout(resolve, 1000, "Car 1."));
let car2 = new Promise(resolve => setTimeout(resolve, 2000, "Car 2."));
let car3 = new Promise(resolve => setTimeout(resolve, 3000, "Car 3."));

Promise.race([car1, car2, car3]).then(value => {
  console.log("Promise Resolved", value);
});