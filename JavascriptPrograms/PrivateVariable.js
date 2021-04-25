// How do you create a private variable in js

function secretVariable(){
    var private = "super secret code"
    return function(){
        return private
    }
}

var getPrivateVariable = secretVariable();

console.log(getPrivateVariable())