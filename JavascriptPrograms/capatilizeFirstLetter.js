// Capatilise the first character in sentence

function capatilizeFirstLetter(str){
    let breakeString = str.split(" ");
    let capatilizeString = "";
    for(let i=0;i<breakeString.length;i++){
        capatilizeString = capatilizeString + " " + breakeString[i].replace(breakeString[i].charAt(0),breakeString[i].charAt(0).toUpperCase())
    }
    return capatilizeString
}


console.log(capatilizeFirstLetter("this is rahul"));