// Count the number of frequency of each variable and sort them out
function countFrequencyOfCharacter(stringToCount){  
  // initial vars
  var str = sortAlphabets(stringToCount);

  function sortAlphabets(textToSort) {
    return textToSort.split('').sort().join('');
  }
  
  var letters = new Object();
  
  // loop, figure it out
  for (let x = 0, length = str.length; x < length; x++) {
    var l = str.charAt(x);
    letters[l] = isNaN(letters[l]) ? 1 : letters[l] + 1;
  }
  
  // Print character with number of occurences in string
  let outputStr = "";
  for (let key in letters) {
    outputStr= outputStr + key + "" + letters[key];
  }
  return outputStr;
}

let frequencyCounter = countFrequencyOfCharacter("babacbd");
console.log(frequencyCounter);