// Closure resolving using var keyword in js

for (var i = 0; i < 10; i++) {
  (function abc(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}
