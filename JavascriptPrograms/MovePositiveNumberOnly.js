// Input:  [34, -5, 56, -7, 23, -1, 11,111];
// Ouput: [11, -5, 23, -7, 34, -1, 56]

// *******************************
// **************My solution******
// *******************************

// Finding out the positve number
for (let number of arr) {
    if (number > 0) {
        positiveNumber.push(number);
    }

}

// Sorting the postive number
let postiveArraySorted = positiveNumber.sort((a, b) => a - b)

// Raplacing the numbers with positive numbers only
let counter = 0;
for (let i in arr) {
    if (arr[i] > 0) {
        arr[i] = postiveArraySorted[counter];
        counter++;
    }
}
console.log(arr);

// function sortPositiveNumberOnly(arr) {
//     let positiveNumber = [];
// let sortPositiveNumberOnly = (arr) => {
//     //Filter the positive number from the array
//     //And sort them
//     let filtered = arr.filter(e => e > 0).sort();

//     //Temp array to hold the sorted array
//     let sorted = [];
//     let temp = [];

//     //To keep track of the positive sorted array list.
//     let j = 0;

//     //Replace the positive numbers with sorted numbers
//     for (let i = 0; i < arr.length; i++) {
//         //If the number is positive
//         //Then replace it with first number
//         //From filtered and sorted positive numbers array
//         if (arr[i] > 0) {
//             sorted.push(temp[j++]);
//         } else {
//             //Else push the negative number at the same place
//             sorted.push(arr[i]);
//         }
//     }

//     //Return the temp array
//     console.log(sorted);
// }

var arr = [34, -5, 56, -7, 23, -1, 11, 111];
sortPositiveNumberOnly(arr);