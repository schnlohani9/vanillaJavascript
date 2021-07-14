function replaceNonIntegers(inputString){
   let numberArray = inputString.match(/\d+/g);
   let formatArray = numberArray.map(e=> parseInt(e, 10))
   let numbersLength = [...new Set(formatArray)];
   return numbersLength.length;

}

console.log(replaceNonIntegers("a123bc34d8ef34")); // 3
console.log(replaceNonIntegers("t1x01r001")); // 1
console.log(replaceNonIntegers("t1x10r100")); // 3