/**
*Return the sum of integers whose index is between n1 and n2.
*@returns {Number}
*/

function calc(array, n1, n2) {
    // your code goes here
    if(0<=n1<=n2<array.length){
        let sum = 0;
        for (let i = n1; i <= n2; i++) {
            sum = sum + array[i];
        }
        return sum
    }
}

var array = [0, 1, 2, 3, 4, 5, 3];
console.log(calc(array,0,6));