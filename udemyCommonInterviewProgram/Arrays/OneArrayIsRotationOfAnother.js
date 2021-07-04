// Implement your function below.
function is_rotation(list1, list2) {
    var startingIndex;
    let newArray = [];

    // Process to find the starting index for checking the circular array
    for (let list1Element of list1) {
        for (let list2Element of list2) {
            if (list1Element == list2Element) {
                startingIndex = list2.indexOf(list2Element);
                newArray.push(list2.splice(startingIndex, list2.length - startingIndex))
                newArray.push(list2.splice(0, 4));
                break
            }
        }
        break
    }
    // console.log(JSON.stringify(newArray.flat().flat()));
    if (JSON.stringify(list1) == JSON.stringify(newArray.flat().flat())) {
        console.log("It is circular array")
    }
    else {
        console.log("It is not a circular array");
    }


}

// Solution
// function canRotate(a, b) {
//     var pos, count;
//     const len = a.length;
//     if (len === b.length) { 
//         pos = 0;
//         while (pos < len) {
//             count = 0;
//             while (count < len && a[count] === b[(pos + count) % len]) {
//                 count ++;
//             }
//             if (count === len) { return true }
//             pos ++;
//         }
//     }
//     return false;
// }

list1 = [1, 2, 3, 4, 5, 6, 7];
list2 = [4, 5, 6, 7, 1, 2, 3]
console.log(canRotate(list1, list2));