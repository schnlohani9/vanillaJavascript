// Is array arr = ["(1,2)","(2,3)"] is binary tree or not
//          1
//        2
//      3

// 
function TreeNode(value, left, right) {
    this.value = value || null;
    this.left = left || null;
    this.right = right || null;
}


// Based on DFS
function getTreeNode(head, value) {
    if(head === null || head.value === value) {
        return head;
    }
    return  getTreeNode(head.left, value) || getTreeNode(head.right, value) || null;
}

const inputItemToTreeNode = (root, item) =>  {
    const [value, next] = item.match(/\d+/g);

    const existingNode = getTreeNode(root, value);

    if(existingNode) {
        if(!existingNode.left) {
            existingNode.left = new TreeNode(next, null, null);
        } else if(existingNode.left && !existingNode.right) {
            existingNode.right = new TreeNode(next, null, null);
        } else {
            throw new Error('Can not have more than two child nodes.');
        }
        return existingNode;
    } else {
        return new TreeNode(value, new TreeNode(next, null, null), null)
    }
}


function validateBinaryTree(input) {
        if(input.length === 0) {
            throw new Error('Binary tree can not be empty.');
        }
        let rootNode = inputItemToTreeNode(null, input[0]);
        input.slice(1).map(item=>inputItemToTreeNode(rootNode, item));
}


function main() {

    const validInput = ["(1,2)", "(2,3)"];
    const invalidInput = ["(1,2)", "(2,3)", "(2,4)", "(2,5)"];
    const emptyInput = [];

    try {
        validateBinaryTree(emptyInput);
        //document.getElementById('result').innerText = 'Binary Tree is valid';
        console.log('Binary Tree is valid');
    } catch(e) {
        console.log(e);
        // document.getElementById('result').innerText = e;
    }

}

main()


// My Solution
// function validateBinaryTree(arr) {
//     let formattedArray = [];
//     for (let elements of arr) {
//         let newArray = elements.replace("(", "").replace(")", "").split(",");
//         for (let elements of newArray) {
//             formattedArray.push(elements)
//         }
//         console.log(formattedArray);
//         if (formattedArray[0] < formattedArray[1]) {
//             if (formattedArray.length === 3) {
//                 if (formattedArray[1] < formattedArray[2]) {
//                     return true;
//                 }
//             }
//             return true;
//         }
//         return false;
//     }
// }

// let arr = ["(2,1)", "(3,2)"];
// console.log(validateBinaryTree(arr));
