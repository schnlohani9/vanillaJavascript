class Promifill {
    static race (iterable) {
      return new Promifill((resolve, reject) => {
        validateIterable(iterable);
  
        if (isEmptyIterable(iterable)) {
          return;
        }
  
        for (let entry of iterable) {
          Promifill.resolve(entry)
            .then(resolve, reject);
        }
      });
    }
  }