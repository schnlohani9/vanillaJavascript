// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array = [1, 2, 3, 4, 5];
let reducer = array.reduce((a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
});
console.log(reducer);
