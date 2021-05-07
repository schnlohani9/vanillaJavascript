function reverseWords(str) {
    var word, words, reverse;

    words = str.match(/(?:\w+)/g);
    reverse = '';
    while(word = words.pop()) {
      reverse += word + ' ';
    }

    return reverse.trim();
}

console.log(reverseWords('hello world'));