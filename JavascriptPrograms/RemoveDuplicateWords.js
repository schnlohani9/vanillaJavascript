// Write a function to remove the duplicate words from string
let string = 'I love the the the cats.';

function removeDuplicateWords(inputString) {
    // your perfect code...
    let splittedStr = inputString.split(" ");
    let result = [];
    for (let word of splittedStr) {
        if (result.indexOf(word) === -1) {
            result.push(word);
        }
    }
    return result.join(" ");
}

console.log(removeDuplicateWords(string));