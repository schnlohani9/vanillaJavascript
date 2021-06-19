class Test {
    text = "interview";
  
    method() {
      console.log(this.text);
    }
  }
  
  const instance = new Test();
  
  const storedMethod = instance.method;
  
  function caller(fn) {
    const object = {
      text: "tricky",
      fn
    };
  
    object.fn();
  }
  
  caller(storedMethod);
  
  // What will be logged to the console?
  