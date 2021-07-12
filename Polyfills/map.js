// Pollyfill for map function
Array.prototype.ourMap = function (callback) {
  var arr = [] // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
  }
  return arr // finally returning the array
}

//   Polyfills list
//   https://reeversedev.com/polyfill-for-foreach-map-filter-reduce


// #############################
// #############################
// Arguments for map function
// #############################
// #############################
// callback
// Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.

// The callback function accepts the following arguments:

// currentValue
// The current element being processed in the array.
// indexOptional
// The index of the current element being processed in the array.
// arrayOptional
// The array map was called upon.
// thisArgOptional
// Value to use as this when executing callback.