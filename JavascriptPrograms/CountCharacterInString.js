/* returns the size/length of an object */
Object.size = function(obj) {
  var size = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

//initial vars
var str = "hellodavidthisisatestofobjectusage";
var letters = new Object();

//loop, figure it out
for (x = 0, length = str.length; x < length; x++) {
  var l = str.charAt(x);
  letters[l] = isNaN(letters[l]) ? 1 : letters[l] + 1;
}

//output count!
for (key in letters) {
  console.log(key + " :: " + letters[key]);
}
console.log(Object.size(letters));

// The Result
// h :: 2
// e :: 4
// l :: 2
// o :: 3
// d :: 2
// a :: 3
// v :: 1
// i :: 3
// t :: 4
// s :: 4
// f :: 1
// b :: 1
// j :: 1
// c :: 1
// u :: 1
// g :: 1
// 16
