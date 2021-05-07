function toArray(array) {
    var result=[];
    function toarray(array) {
        for (var l=array.length,i=0;i<l;i++) {
            if (Array.isArray(array[i])) {
                toarray(array[i]);
            } else {
                result.push(array[i]);
            }
        }
        return result;
    }
    return toarray(array);
}


let multi = [1, 5, [6, [1, 0], 1]];
console.log(toArray(multi));