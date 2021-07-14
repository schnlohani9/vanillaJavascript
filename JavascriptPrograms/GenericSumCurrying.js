// Make generic function for sum(1,2,3) and sum(1,2)(3)

// Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c). JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough.

// Optimise Solution For Curring Function

// Ref: https://javascript.info/currying-partials
function fixCurry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(null, args);
        } else {
            return function (...args2) {
                return curried.apply(null, args.concat(args2));
            }
        }
    };
}

function multiply(x, y, z) {
    return x * y;
  }


  const curried = curryWrapper(multiply);
  console.log(curried);
  console.log(curried(1)(2)(3));

// The currying requires the function to have a fixed number of arguments.
// A function that uses rest parameters, such as f(...args), can’t be curried this way.
// var sum = fixCurry((a, b, c, d) => a + b + c + d);
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2)(3, 4));
// console.log(sum(1)(2)(3)(4));

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
    // fn.length ---> The length property indicates the number of parameters expected by the function.
    totalArgs = totalArgs || fn.length
    return recursor = () => {
        // arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.    
        // Here in line 38 we are passing 7 values so arguments.length is 7
        if (arguments.length < totalArgs) {
            result = recursor.bind(this, ...arguments);
            console.log("VALUE OF THIS HERE IS", this);
            console.log("Inside if loop result is", result);
        } else {
            result = fn.call(this, ...arguments);
            console.log("Inside else loop result is", result);
        }
        return result;
    }
}