// Return the maximum frequency count of number that should be greater than the total number in array
// divide by the 2
// or
// Return the letter which is repeated more then half times else return -1 

function countFreq(arr, n)
{
    let visited = Array.from({length: n}, (_, i) => false);
    let expectedOutput = n/2;
         
    // Traverse through array elements and
    // count frequencies
    for (let i = 0; i < n; i++) {
   
        // Skip this element if already processed
        if (visited[i] == true)
            continue;
   
        // Count frequency
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        if(count>expectedOutput){
          console.log(arr[i]);
        }
    }
}
 
// Driver Code
 
    let arr = [ 10, 20, 20, 10, 10, 10, 10, 20,20,20,20,20,10,10,10 ];
    let n = arr.length;
    countFreq(arr, n);