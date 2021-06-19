// Find the pair whose sum is 6 in the given array.

// var myArray = [1,2,3,4,5];

// var total = eval(myArray.join("+"));
// console.log(total);


let hashTwoSum = (array, sum) => {
    let storageHash = {}
    let nums = []
    
    for(let i in array){
      let addend = sum - array[i]
        
        if (addend in storageHash){
            nums.push([addend, array[i]])
        }
        storageHash[array[i]] = i
    }
    return nums
}

let array = [1,2,-1,-2,3]
console.log(JSON.stringify(hashTwoSum(array, 0)));
