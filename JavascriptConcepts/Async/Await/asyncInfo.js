const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const files = ["./files/demofile.txt", "./files/demofile.other.txt"];
let promises = files.map(name => readFile(name, { encoding: "utf8" }));

Promise.all(promises).then(values => {
  // <-- Uses .all
  console.log(values);
});

// Simpler version using async/await
(async ()=>{
  let promises = files.map(name => readFile(name, { encoding: "utf8" }));
  let values = await Promise.all(promises)
  console.log(values);
})()