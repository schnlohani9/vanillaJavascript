function* generators() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

const it = generators();
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
