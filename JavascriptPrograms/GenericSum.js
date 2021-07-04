// Make generic function for sum(1,2,3) and sum(1,2)(3)

// solution using the 3 arguments only
// function sum() {
//     let args = [].slice.apply(arguments);
//     function resultFn() {
//         args = args.concat([].slice.apply(arguments));
//         if (args.length >= 3) {
//             return args.slice(0, 3).reduce(function (acc, next) { return acc + next }, 0); //will only sum first 3 arguments
//         }
//         return resultFn;
//     }
//     return resultFn();
// }
// console.log(sum(1, 2, 4,)(3, 4));


// Solution using the n number of arguments
function fixCurry(fn, totalArgs) {
    let result = 0;
    totalArgs = totalArgs || fn.length
    return function recursor() {
        if (arguments.length < totalArgs) {
            result = recursor.bind(this, ...arguments);
            console.log("Inside if loop", result);
        } else {
            result = fn.call(this, ...arguments);
            console.log("Inside else loop", result);
        }
        return result;
    }
}

var sum = fixCurry((a, b, c, d, e) => a + b + c + d + e);
console.log(sum(1, 2, 3, 4, 5, 6, 7));