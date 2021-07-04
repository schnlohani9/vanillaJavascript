// 1. The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

// 2. The splice() method changes the original array and slice() method doesn’t change the original array.

// 3. The splice() method can take n number of arguments and slice() method takes 2 arguments.

// ******************************************
// Array.splice()
// ******************************************
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// inserts at index 1
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]


// ******************************************
// Array.slice()
// ******************************************
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// Pollyfill

// define custom splice()
if (!Array.prototype.customSplice) {
    Array.prototype.customSplice = function (startIndex, numItems) {
        let array = this;
        let endIndex = startIndex + numItems;

        let itemsBeforeSplice = []; // array till startIndex
        let splicedItems = []; // removed items array
        let itemsAfterSplice = []; // array from endIndex

        for (let i = 0; i < array.length; i++) {
            if (i < startIndex) { itemsBeforeSplice.push(array[i]); }
            if (i >= startIndex && i < endIndex) { splicedItems.push(array[i]); }
            if (i >= endIndex) { itemsAfterSplice.push(array[i]); }
        }

        // Insert all arguments/parameters after numItems
        for (let i = 2; i < arguments.length; i++) {
            itemsBeforeSplice.push(arguments[i]);
        }

        // Combine before/after arrays
        var remainingItems = itemsBeforeSplice.concat(itemsAfterSplice);

        // Rewrite array
        for (let i = 0, len = Math.max(array.length, remainingItems.length); i < len; i++) {
            if (remainingItems.length > i) {
                array[i] = remainingItems[i];
            } else {
                array.pop();
            }
        }
        return splicedItems;
    }
}

// declare an array
const arr = [1, 2, 3, 4, 5, 6];
// call custom splice() on array to add elements
console.log(arr.customSplice(2, 0, 9, 10));
// call custom splice() on array to replace elements
// console.log(arr.customSplice(2,2,8,9,10));
// call custom splice() on array to delete elements
// console.log(arr.customSplice(3,1));

console.log("Final array: ", arr);
  // add - [1, 2, 9, 10, 3, 4, 5, 6]
  // replace - [1, 2, 8, 9, 10, 5, 6]
  // delete - [1, 2, 3, 5, 6]