function non_repeating(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i) {
            if (string.indexOf(c, i + 1) == -1)
            return c;
        }
    }
    return null;
}

// console.log(non_repeating("abcab")); // should return 'c'
console.log(non_repeating("abab")) // should return None
console.log(non_repeating("aabbbc")) // should return 'c'
console.log(non_repeating("aabbdbc")) // should return 'd'