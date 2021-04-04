// ### Task 1
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
function spinWords(string){
    return string.replace(/\w{5,}/g, 
      function(w) {return w.split('').reverse().join('')}
    )
  }

  console.log(spinWords('Hey fellow warriors'));