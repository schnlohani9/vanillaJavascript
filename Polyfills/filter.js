Array.prototype.filterAlbums = function(callback, context) {
    let arr = []
    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i])
      }
    }
    return arr
  }
  logicAlbums.filterAlbums(function(album) {
    return album.rating > 4.9 // providing the context here
  })

  // https://reeversedev.com/polyfill-for-foreach-map-filter-reduce
  