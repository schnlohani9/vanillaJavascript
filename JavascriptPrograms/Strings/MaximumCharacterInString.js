// initial vars
var str = "hellodavidthisisatestofobjectusage";
var letters = new Object();

// loop, figure it out
for (let x = 0, length = str.length; x < length; x++) {
  var l = str.charAt(x);
  letters[l] = isNaN(letters[l]) ? 1 : letters[l] + 1;
}

// Print character with number of occurences in string
for (let key in letters) {
  console.log(key + " :: " + letters[key]);
}

// Print character with maximum value

// If you want to print the size of string then
/* returns the size/length of an object */
// Object.size = function(obj) {
//   var size = 0;
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) size++;
//   }
//   return size;
// };

// console.log(Object.size(letters));