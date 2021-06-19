// // sort character in string in js

// function sortAlphabets(text) {
//   return text.split('').sort().join('');
// }

// // initial vars
// var str = sortAlphabets("babacbd");

// var letters = new Object();


// // loop, figure it out
// for (let x = 0, length = str.length; x < length; x++) {
//   var l = str.charAt(x);
//   letters[l] = isNaN(letters[l]) ? 1 : letters[l] + 1;
// }

// // Print character with number of occurences in string
// let outputStr = "";
// for (let key in letters) {
//   outputStr= outputStr + key + "" + letters[key];
// }
// console.log(outputStr);

// Print character with maximum value

// If you want to print the size of string then
/* returns the size/length of an object */
Object.size = function(obj) {
  var size = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

console.log(Object.size(letters));



// const countLetters = word => {
// 	const count = {};

// 	word.split('').forEach(letter => {
// 		count[letter] = count[letter] ? ++count[letter] : 1;
// 	});

// 	return count;
// };

// console.log(countLetters("babacbd"))