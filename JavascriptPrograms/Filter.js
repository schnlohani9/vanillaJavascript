// Filter example which also create the new array
// filter() does not change the original array.

var a = [2, 4, 6, 7, 8, 9, 9];

a.filter(m => {
  return m > 8;
});
