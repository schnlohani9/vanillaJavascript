// what is the optimise way to search element in array using js

// var self = this;
// return self.find(item => 
//     lookUpArray.every(lookUpItem => 
//         item[lookUpItem.key] === lookUpItem.val));

function searchElementUsingGenericAlgo(array, value) {
    let idx = -1;
    let length = array.length;
    for (let i = 0;i<length; i++) { /* n+1 comparisons. */
          if(value == array[i]) { /* n comparisons. */
               idx = i;
               break;
          }
    }
    return idx;
}

console.log(searchElementUsingGenericAlgo([5,3,65,46,345,345,234,5234,234,234],46));