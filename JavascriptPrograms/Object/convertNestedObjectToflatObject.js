// Program to convert the nested object into the flat object
// Input
//   const obj = {
//     user: {
//       name: "Vaibhav",
//       adrress: {
//         state: "Delhi",
//         zone: "South West"
//       },
//         newAddress : {
//             houseNo : 123,
//             mailBox : "sachin52"
//         }
//     }
//    }; 


// Output
/*
 {
   user.name:"Vaibhav",
   user.adrress.state:"Delhi",
   user.adrress.zone:"South West"
 }
*/
function traverseAndFlat(currentNode, target, flattenedKey) {
    for (var key in currentNode) {
        if (currentNode.hasOwnProperty(key)) {
            var newKey;
            if (flattenedKey === undefined) {
                newKey = key;
            }
            else {
                newKey = flattenedKey + '.' + key;
            }

            var value = currentNode[key];
            if (typeof value === 'object') {
                traverse(value, target, newKey);
            }
            else {
                target[newKey] = value;
            }
        }

    }
}

function flatObj(obj) {
    var objectToBeFlattened = {};
    traverse(obj, objectToBeFlattened);
    return objectToBeFlattened;
}


const obj = {
    user: {
        name: "Vaibhav",
        adrress: {
            state: "Delhi",
            zone: "South West"
        },
        newAddress: {
            houseNo: 123,
            mailBox: "sachin52"
        }
    }
};

var flattened = JSON.stringify(flatObj(obj))
console.log(flattened);