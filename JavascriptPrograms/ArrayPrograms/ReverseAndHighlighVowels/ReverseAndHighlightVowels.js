//Insert code below
// Make sure to click submit button closer to the end of the test, otherwise all the code will be lost! Submit button is at the end of the page!


function clear() {
    console.log("inside clear");
    document.getElementById("demo").innerHTML = "";
}

function reverseText() {
    var forward = document.getElementById("numb").value;
    var backward = forward.split("").reverse().join("");
    document.getElementById("demo").innerHTML = backward;
    highlightingVowels(backward);
}

function highlightingVowels(str) {
    let inputText = document.getElementById("demo");
    var innerHTML = inputText.innerHTML;
    for (let i = 0; i < str.length; i++) { // nihcas
        var index = innerHTML.indexOf(str[i]); // 4
        if (index >= 0 && (str[i] == 'a' || str[i] == 'e' ||str[i] == 'i'||str[i] == 'o'||str[i] == 'u')) {
            innerHTML = innerHTML.substring(0, index) +"<span class='nav-link'>" +str[index]+"</span>" + innerHTML.substring(index+1, str.length);
            
        }
    }
    inputText.innerHTML = innerHTML;
}