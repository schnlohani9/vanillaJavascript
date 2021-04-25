// ### Task 2
// ### Description
// Write a function that will correct the errors in given string. Below are the rules
// - For every capital letter, assume the need to place a fullstops at the end of the sentence before the current one.
// - Each first letter of every sentence must be capitalized. 
// - Trailing and leading spaces to be removed.
// - For every full-stops, there shall be only one whitespace to the next sentence.

// [Video Description](https://youtu.be/x5kzHW8zTqE)
// #### input
// correct_it("John have   an apple The sky is blue.  they get a coin")
// #### output
// "John have an apple. The sky is blue. They get a coin."

function capatilizeFirstLetter(name) {
    if(!(name.trim().replace(".","")===""))
        return name.replace(".","").trim().replace(/  +/g, ' ').charAt(0).toUpperCase() + name.replace(".","").trim().replace(/  +/g, ' ').slice(1) + ". ";
    else
        return ""    
}

function checkGrammer(s) {
    let splittedArray = s.replace(/  +/g, ' ').split(/(?=[A-Z]|[.])/);
    let formattedString = "";
    splittedArray.map((e) => { formattedString = formattedString + capatilizeFirstLetter(e) });
    return formattedString.trim();
}

var str = '   john have   an apple    .    The sky is blue.  they get a coin         ';
console.log(checkGrammer(str));