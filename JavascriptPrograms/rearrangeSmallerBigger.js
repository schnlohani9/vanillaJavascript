function rearrangeNaive(arr, n) {
    // Create an auxiliary array of same size
    let temp = new Array(n), i;

    // Store result in temp[]
    for (i = 0; i < n; i++)
        temp[arr[i]] = i;

    // Copy temp back to arr[]
    for (i = 0; i < n; i++)
        arr[i] = temp[i];

    console.log(arr);
}

// A utility function to print contents of arr[0..n-1]
function printArray(arr, n) {
    let i;
    for (i = 0; i < n; i++)
        console.log(" " + arr[i]);
}

// Driver code
let arr = [1, 3, 0, 2];
let n = arr.length;

// printArray(arr, n);

rearrangeNaive(arr, n);

// printArray(arr, n);