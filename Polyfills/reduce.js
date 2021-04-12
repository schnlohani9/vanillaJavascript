// Ployfills for reduce functions
Array.prototype.reduceAlbums = function(callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue
  
    for (var i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this)
      } else {
        accumulator = this[i]
      }
    }
    return accumulator
  }

  // https://reeversedev.com/polyfill-for-foreach-map-filter-reduce