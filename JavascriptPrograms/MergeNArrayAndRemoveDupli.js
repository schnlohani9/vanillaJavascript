function mergeNRemoveDupli(...array){
    let array3 = [].concat(...array);
    array3 = [...new Set(array3)]
    return array3 
}

let array1 = ['a','b','c']
let array2 = ['c','c','d','e']
let array4 = ['c','c','d','e','f','g','h']
let array5=['a','e','r','e']

console.log(mergeNRemoveDupli(array1,array2,array4,array5));