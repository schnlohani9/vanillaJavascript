function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }
  var alphabet=['a','b','c','d','e','f'];
  var alphabetPairs=splitArrayIntoChunksOfLen(alphabet,2);
  console.log(JSON.stringify(alphabetPairs));