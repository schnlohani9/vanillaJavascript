// // O(n) time & O(n) space
// function mergeTwo(arr1, arr2) {
//   let merged = [];
//   let index1 = 0;
//   let index2 = 0;
//   let current = 0;

//   while (current < arr1.length + arr2.length) {
//     let isArr1Depleted = index1 >= arr1.length;
//     let isArr2Depleted = index2 >= arr2.length;

//     if (!isArr1Depleted && (isArr2Depleted || arr1[index1] < arr2[index2])) {
//       merged[current] = arr1[index1];
//       index1++;
//     } else {
//       merged[current] = arr2[index2];
//       index2++;
//     }

//     current++;
//   }

//   return merged;
// }



// function mergeTwo(arr1, arr2) {
//   let result = [...arr1, ...arr2];
//   return result.sort((a,b) => a-b);
// }

// const arr1 = [{id:1},{id:3},{id:5},{id:6}];
// const arr2 = [{id:2},{id:4},{id:6},{id:1}];
// console.log(mergeTwo(arr1, arr2));
// // [1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]

function getArraysIntersection(a1,a2){
  return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}
const arr1 = [{id:1},{id:3},{id:5},{id:6}];
const arr2 = [{id:2},{id:4},{id:6},{id:1}];
console.log(getArraysIntersection(arr1, arr2));