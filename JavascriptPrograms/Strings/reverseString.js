// Given a string reverse it

// Solution 1 using array method
// const revString = (str) => {
//     const arr = str.split("");
//     arr.reverse()
//     str = arr.join("");
//     console.log(str)
// }

// revString("Greetings")


// Reverse single string
(function(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
    }
    console.log({reversedString: reversed})
})("My Name Is Sachin")


// Reverse string "My Name Is Sachin" with "yM emaN sI nihcaS"
function spinWords(string){
    return string.replace(/\w{1,}/g, 
      function(w) {return w.split('').reverse().join('')}
    )
  }

console.log(spinWords('My Name Is Sachin'));