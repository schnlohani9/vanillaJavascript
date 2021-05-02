// Getting a random number between two values
function randomNumberBetweenTwoNumber(min,max){
    // return Math.floor(Math.random() * (max-min+1)+min);
    return Math.random() * (max - min) + min;
}

// Getting a random integer between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

console.log(getRandomInt(18,20));



// In JavaScript, you can generate a random number with the Math.random() function.

// Math.random() returns a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1)

// The above program will show an integer output between min (inclusive) to max (inclusive).

// First, the minimum and maximum values are taken as input from the user. Then the Math.random() method is used to get the random number from the passed value.

// The Math.floor() returns the nearest integer value.