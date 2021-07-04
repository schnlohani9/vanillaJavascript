// find the common element in the given two array
// common_elements(list_a1, list_a2) should return [1, 4, 9] (a list).

let list_a1 = [1, 3, 4, 6, 7, 9];
let list_a2 = [1, 2, 4, 5, 9, 10];

function commonElement(array1, array2) {
    // Sort the array first then perform this operation
    let common = [];
    let i = 0, j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] === array2[j]) {
            common.push(array1[i]);
            i++;
            j++;
        }
        else if (array1[i] < array2[j]) {
            i++
        } else {
            j++;
        }
    }
    console.log(common);
}

console.log(commonElement(list_a1, list_a2));