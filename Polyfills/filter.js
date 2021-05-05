Array.prototype.filterNumber = function(callback, context) {
    let arr = []
    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i])
      }
    }
    return arr
  }

  console.log([1,2,3,4,5,10].filterNumber((number)=> {
    return number > 4.9 // providing the context here
  }))

  // https://reeversedev.com/polyfill-for-foreach-map-filter-reduce
  