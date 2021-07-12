function generic(fn, totalArgs) {

  let result = 0;

  totalArgs = totalArgs || fn.length;
  console.log("Function length", fn.length);

  return function final() {
    if (arguments.length < totalArgs) {
      result = final.bind(this, ...arguments)
    }

    else {
      result = fn.call(this, ...arguments);
    }

    return result;
  }

}



// let sum1 = generic(sum);
// console.log(sum1(1)(2)(3));

// function sum(a, b, c) {
//   return a + b + c;
// }

let sub1 = generic(sub);
 function sub(a,b,c,d){
 return a-b-c-d;
}

console.log(sub1(1)(2)(3)(4));
